import { excludedRepos } from '@/helpers/data.ts';
import { env } from '@/helpers/environment.ts';
import type { APIRoute } from 'astro';
import { Octokit } from 'octokit';

const token = env.GITHUB_TOKEN;
console.log('token :>> ', token);

const ocktokit = new Octokit({
  auth: env.GITHUB_TOKEN,
});

export const POST: APIRoute = async ({ url }) => {
  try {
    console.log('url :>> ', url);

    const { data } = await ocktokit.request('GET /users/{username}/repos', {
      username: env.GITHUB_USERNAME.toString(),
    });
    console.log('data :>> ', data);

    const projects = await Promise.all(
      data
        .filter((repo) => !excludedRepos.includes(repo.name))
        .map(async (repo) => {
          const coverImage = await getRepositoryCoverImage(
            ocktokit,
            env.GITHUB_USERNAME.toString(),
            repo.name,
          );

          return {
            name: repo.name,
            description: repo.description,
            coverImage,
            htmlUrl: repo.html_url,
            id: repo.id,
          };
        }),
    );

    return new Response(JSON.stringify({ projects }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: (error as any).message }), {
      status: 500,
    });
  }
};

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
      console.log(`Image found: ${imageFile.download_url}`);
      return imageFile.download_url; // Raw URL to display on the frontend
    } else {
      console.log('No image found for repository:', repo);
      return null;
    }
  } catch (error) {
    console.error('Error fetching repository image:', error);
    return null;
  }
}
