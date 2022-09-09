import { ProjectsCards, ProjectsCardsProps } from './Cards'
import TECLogo from '../../../public/images/logo/TEClogo.svg'
import GivethLogo from '../../../public/images/logo/GivethLogo.svg'
import CSLogo from '../../../public/images/logo/CSlogo.svg'
import givethProject from '../../../public/images/projects/GivethProject.png'
import tecProject from '../../../public/images/projects/TecProject.png'
import csProject from '../../../public/images/projects/CSProject.png'
import { Join } from '../Join'

const projects: ProjectsCardsProps[] = [
  {
    id: 1,
    bgColor: 'purple',
    projectImg: givethProject,
    clientLogo: GivethLogo,
    services: ['Branding', 'UX'],
    tools: ['React', 'Solidity'],
    mainDescription:
      'Giveth is a community focused on Building the Future of Giving using blockchain technology. Their intention is to support and reward the funding of public goods by creating open, transparent and free access to the revolutionary funding opportunities available within the Ethereum ecosystem.',
    secoundDescription:
      'We’ve collaborated with the Giveth team and come up with the entire redesign of their website to convey their vision effectively.',
  },
  {
    id: 2,
    bgColor: 'pink',
    projectImg: tecProject,
    clientLogo: TECLogo,
    services: ['Development', 'UX'],
    tools: ['React', 'Solidity'],
    mainDescription:
      'Token Engineering (TE) Commons is an amzing group of engineers, scientists, researchers, educators, ambassadors, philosophers, AR/VR game designers, digital nomads, activists, artists, edgewalkers and pioneers.',
  },
  {
    id: 3,
    bgColor: 'orange',
    projectImg: csProject,
    clientLogo: CSLogo,
    services: ['Development', 'Branding'],
    tools: ['React', 'Rust', 'IPFS', 'Mongo DB'],
    mainDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nisl habitant phasellus risus eget et. Nisi, tellus, in leo vitae. Porttitor ornare ut sit ipsum, nulla orci. Tempus nascetur risus pellentesque ac felis sapien velit egestas eget. Dui mi magna ornare nascetur felis magnis nunc, sit ut. Tempor accumsan libero ut odio lorem convallis cursus at est.',
  },
]

export function ProjectsList() {
  return (
    <div className="min-h-screen bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900 md:first-letter:pb-24 pb-16">
      {projects.map((project) => {
        return (
          <ProjectsCards
            id={project.id}
            key={project.id}
            bgColor={project.bgColor}
            projectImg={project.projectImg}
            clientLogo={project.clientLogo}
            services={project.services}
            tools={project.tools}
            mainDescription={project.mainDescription}
            secoundDescription={project.secoundDescription}
          />
        )
      })}
      <div className="mt-10">
        <Join />
      </div>
    </div>
  )
}
