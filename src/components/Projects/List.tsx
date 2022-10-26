import { forwardRef } from 'react'
import { Join } from '@/components/Join'
import { ProjectsCards, ProjectsCardsProps } from '@/components/Projects/Cards'
import TECLogo from 'public/images/logo/TEClogo.svg'
import GivethLogo from 'public/images/logo/GivethLogo.svg'
import CSLogo from 'public/images/logo/CSlogo.svg'
import swagLogo from 'public/images/logo/SWAGlogo.svg'
import givethProject from 'public/images/projects/GivethProject.png'
import tecProject from 'public/images/projects/TecProject.png'
import csProject from 'public/images/projects/CSProject.png'
import ensProject from 'public/images/projects/ENSProject.png'

const projects: ProjectsCardsProps[] = [
  {
    id: 1,
    bgColor: 'purple',
    projectUrl: 'https://giveth.io/',
    projectImg: givethProject,
    clientLogo: GivethLogo,
    services: ['Branding', 'UX'],
    tools: ['React', 'Solidity Development', 'Branding'],
    tools2row: ['HR', 'Governance', 'UX', 'Comms'],
    mainDescription:
      'Giveth is a community focused on Building the Future of Giving using blockchain technology. Their intention is to support and reward the funding of public goods by creating open, transparent and free access to the revolutionary funding opportunities available within the Ethereum ecosystem.',
    secoundDescription:
      'We’ve collaborated with the Giveth team for over 2 years, providing them with ongoing technical support for design, UX, fullstack development, smart contract support, comms, hiring and HR management.',
  },
  {
    id: 2,
    bgColor: 'pink',
    projectUrl: 'https://tecommons.org/',
    projectImg: tecProject,
    clientLogo: TECLogo,
    services: ['Development', 'UX'],
    tools: ['React', 'Solidity'],
    mainDescription:
      'Token Engineering (TE) Commons is an amzing group of engineers, scientists, researchers, educators, ambassadors, philosophers, AR/VR game designers, digital nomads, activists, artists, edgewalkers and pioneers.',
    secoundDescription:
      'We are supporting the TE Academy in launching their official learning portal, which General Magic is fully owning from Design to Development of the Learning Management System and entire user experience.',
  },
  {
    id: 3,
    bgColor: 'orange',
    projectUrl: 'https://ens.domains/',
    projectImg: ensProject,
    clientLogo: swagLogo,
    services: ['Development', 'Branding'],
    tools: ['React', 'Rust', 'IPFS', 'Mongo DB'],
    mainDescription: `The ENS DAO is a DAO that governs the ENS protocol. In 2022 won the bid to create ENS’s official Merch Store (Swag Shop).`,
    secoundDescription:
      'Our team is building the ENS Merch Store, and handling the entire product design journey from UX design to product selection, crypto wallet integration, development of the entire store and order fulfillment post launch.',
  },
  {
    id: 4,
    bgColor: 'purple',
    projectUrl: 'https://commonsstack.org/',
    projectImg: csProject,
    clientLogo: CSLogo,
    services: ['Development', 'Branding'],
    tools: ['React', 'Rust', 'IPFS', 'Mongo DB'],
    mainDescription: `We are supporting the Commons Stack in the launch of their Praise system, which is a complete system to acknowledge and reward community contributions, while building a culture of giving and gratitude. This open source Rewards System is the Commons Stacks’ flagship product.`,
    secoundDescription:
      'Our team helped develop the code behind the Praise system, and continues to support the Commons Stack with the technical phase of the implementation.',
  },
]

export const ProjectsList = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900 md:first-letter:pb-24 pb-16"
    >
      {projects.map((project) => {
        return (
          <ProjectsCards
            key={project.id}
            id={project.id}
            bgColor={project.bgColor}
            projectUrl={project.projectUrl}
            projectImg={project.projectImg}
            clientLogo={project.clientLogo}
            services={project.services}
            tools={project.tools}
            tools2row={project.tools2row}
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
})

ProjectsList.displayName = 'ProjectsList'
