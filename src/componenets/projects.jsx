import React from 'react'

export default function Projects() {
  return (
    <>
    <section className='projects' id="projects">
    <div className='container'>
      <div className='project-info'>
        <h3>Projects</h3>
        <div className='First'>
        <h4>My First Project</h4>
        <p className='First-Info'>During this project, I gained valuable experience. <br/> Throughout the process, I gained knowledge and fundamental skills.<br/> Although the project definitely has some areas for improvement and isn't perfect,<br/> it provided a valuable learning opportunity that had an impact on my programming skills.</p>
        <a href='https://jacksense.github.io/Milestone-project-1/'><img src='./src/assets/first-project.png'/><img src="./src/assets/open_in_new_FILL0_wght400_GRAD0_opsz48.svg" className='Out1'/><p className='Demo1'>Live Demo</p></a>
        <a href="https://github.com/JacksenSE/Milestone-project-1"><img src="src/assets/GitHub.svg" className='Github1'/><p className='Code1'>Code</p></a>
        
        </div>
        <div className='Second'>
        <h4>My Second Project</h4>
        <p className='Second-Info'>I was coding for about 6 months at the time .<br/> During this project I learned how to interact with a database<br/>It isn't perfect but it was educational </p>
        <a href='https://plant-water-log-vk1h-g9ul04euv-jacksense.vercel.app/'><img src='./src/assets/plant.png' className='Plant'/><img src="./src/assets/open_in_new_FILL0_wght400_GRAD0_opsz48.svg" className='Out2'/><p className='Demo2'>Live Demo</p></a>
        <a href="https://github.com/JacksenSE/plant-water-log"><img src="src/assets/GitHub.svg"className='Github2'/><p className='Code2'>Code</p></a>
        
        </div>
        <div className='Third'> 
        <h4>My Third Project</h4>
        <p className='Third-Info'>This project was about 9 months in. <br/>During this project I learned bcrypt and JWT<br/>This project allowed me to truly understand what it means to work with a team of engineers.</p>
        <a href='https://fanter.onrender.com/'><img src='./src/assets/Third.svg' className='Fanter'/><img src="./src/assets/open_in_new_FILL0_wght400_GRAD0_opsz48.svg" className='Out3'/><p className='Demo3'>Live Demo</p></a>
        <a href="https://github.com/Adelgado4419/MileStone3"><img src="src/assets/GitHub.svg" className='Github3'/><p className='Code3'>Code</p></a>
        
        </div>
        <div className='Fourth'> 
        <h4>My Fourth Project</h4>
        <p className='Fourth-Info'>10 months.<br/> I learned a lot of fundamentals during this project.<br/>During this project I used some new frameworks and styles of programming.</p>
        <a href='https://portfolio-e-commerce-pi.vercel.app/'><img src='./src/assets/Fourth.svg' className='FineTech'/><img src="./src/assets/open_in_new_FILL0_wght400_GRAD0_opsz48.svg" className='Out4'/><p className='Demo4'>Live Demo</p></a>
        <a href="https://github.com/JacksenSE/Portfolio-E-Commerce"><img src="src/assets/GitHub.svg" className='Github4'/><p className='Code4'>Code</p></a>
        
        </div>

       </div>
      </div>
    </section>
 
    </>
  )
}
