import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      title: 'My First Project',
      info: 'During this project, I gained valuable experience.Throughout the process, I gained knowledge and fundamental skills. Although the project definitely has some areas for improvement and isn`t perfect, it provided a valuable learning opportunity that had an impact on my programming skills.',
      demoLink: 'https://jacksense.github.io/Milestone-project-1/',
      githubLink: 'https://github.com/JacksenSE/Milestone-project-1',
      imgSrc: 'first-project.png',
    },
    {
      title: 'My Second Project',
      info: 'I was coding for about 6 months at the time . During this project I learned how to interact with a database It isn`t perfect but it was educational ',
      demoLink: 'https://plant-water-log-vk1h-g9ul04euv-jacksense.vercel.app/',
      githubLink: 'https://github.com/JacksenSE/plant-water-log',
      imgSrc: 'plant.png',
    },
    {
      title: 'My Third Project',
      info: 'This project was about 9 months in. During this project I learned bcrypt and JWT This project allowed me to truly understand what it means to work with a team of engineers.',
      demoLink: 'https://fanter.onrender.com/',
      githubLink: 'https://github.com/Adelgado4419/MileStone3',
      imgSrc: 'Third.svg',
    },
    {
      title: 'My Fourth Project',
      info: '10 months.  I learned a lot of fundamentals during this project.During this project I used some new frameworks and styles of programming.',
      demoLink: 'https://portfolio-e-commerce-pi.vercel.app/',
      githubLink: 'https://github.com/JacksenSE/Portfolio-E-Commerce',
      imgSrc: 'Fourth.svg',
    },
  ];

  return (
    <>
      <section className='projects' id='projects'>
        <div className='container'>
          <div className='project-info'>
            <h3>Projects</h3>
            {projectsData.map((project, index) => (
              <div className={`Project-${index + 1}`} key={index}>
                <h4>{project.title}</h4>
                <p className={`Project-${index + 1}-Info`}>{project.info}</p>
                <a href={project.demoLink}>
                  <img src={project.imgSrc} alt='Project Image' />
                  <img src='open_in_new_FILL0_wght400_GRAD0_opsz48.svg' className={`Out${index + 1}`} />
                  <p className={`Demo${index + 1}`}>Live Demo</p>
                </a>
                <a href={project.githubLink}>
                  <img src='GitHub.svg' className={`Github${index + 1}`} />
                  <p className={`Code${index + 1}`}>Code</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}