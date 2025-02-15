import type { RepositoryData } from '@/types/RepositoryData.ts';
import type { APIRoute } from 'astro';
import { Octokit } from 'octokit';

// Get the GitHub token from environment variables
const token = import.meta.env.GITHUB_TOKEN;
// console.log('token :>> ', token);

// Initialize the Octokit client with authentication
const ocktokit = new Octokit({
  auth: token,
});

const excludedRepos = import.meta.env.EXCLUDED_REPOS?.toString().split(',');

export const GET: APIRoute = async () => {
  try {
    // console.log('request :>> ', request);

    // Make a request to get the user's repositories
    const { data } = await ocktokit.request('GET /users/{username}/repos', {
      username: import.meta.env.GITHUB_USERNAME.toString(),
    });
    // console.log('data :>> ', data);

    // Filter out excluded repositories and get additional information
    const projects: RepositoryData[] = await Promise.all(
      data
        .filter((repo) => !excludedRepos.includes(repo.name))
        .map(async (repo) => {
          const coverImage = await getRepositoryCoverImage(
            ocktokit,
            import.meta.env.GITHUB_USERNAME.toString(),
            repo.name,
          );

          return {
            name: repo.name,
            description: repo.description ?? '',
            coverImage,
            htmlUrl: repo.html_url,
            id: repo.id,
            topics: repo.topics ?? [],
            homepage: repo.homepage ?? '',
          };
        }),
    );

    // Return the list of projects as a JSON response
    return new Response(JSON.stringify({ projects }), {
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    // Return a 500 error in case of failure
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
      headers: {
        'content-type': 'application/json',
      },
    });
  }
};

// Function to get the repository cover image
async function getRepositoryCoverImage(
  octokit: Octokit,
  owner: string,
  repo: string,
  path = '',
) {
  try {
    // List the contents of the repository root
    const { data } = await octokit.request(
      'GET /repos/{owner}/{repo}/contents/{path}',
      {
        owner,
        repo,
        path,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    // Filter image files (adjust for specific preferences)
    const imageFile = (data as any[]).find(
      (file) =>
        file.type === 'file' && file.name.match(/\.(png|jpe?g|gif|webp)$/i),
    );

    if (imageFile) {
      // console.log(`Image found: ${imageFile.download_url}`);
      return imageFile.download_url; // Raw URL to display on the frontend
    } else {
      // console.log('No image found for repository:', repo);
      return null;
    }
  } catch (error) {
    console.error('Error fetching repository image:', error);
    return null;
  }
}
