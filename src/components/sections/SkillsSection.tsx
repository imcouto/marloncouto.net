// TODO: animate skills on hover, add icons to each skill
export default function SkillsSection({ skills }: { skills: string[] }) {
  console.log('skills :>> ', skills);

  return (
    <section
      id='skills'
      className='py-20'
    >
      <h2 className='text-3xl font-bold mb-8'>Habilidades Técnicas</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {skills.map((skill) => (
          <div
            key={skill}
            className='bg-secondary p-4 rounded-md text-center'
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
