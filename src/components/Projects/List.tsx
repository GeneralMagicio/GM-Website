import { forwardRef } from 'react'
import { Join } from '@/components/Join'
import CSLogo from 'public/images/logo/CSlogoProjects.svg'
import csProjects from 'public/images/projects/CSProjects.png'
import { Project, ProjectProps } from './Project'

const projects: ProjectProps[] = [
  {
    id: 4,
    projectUrl: 'https://commonsstack.org/',
    projectImg: csProjects,
    clientLogo: CSLogo,
    workWeDid: ['Commons Simulator', 'Praise System', 'Trusted Seed Membership DApp', 'Trusted Seed Dashboard', 'Swag Shop'],
    description: `Being very much mission and vision aligned with the Commons Stack, using their tools and components in most of our projects, we supported them in the design and development of their products.`,
    clientDescription: 'Commons Stack is building a tech-stack for the Commons, a library of open-source, interoperable Web3 components, all of which is backed by robust token engineering methodologies and are being used to build commons-based microeconomies.',
    clientName: 'Someone',
    clientOrg: 'Commons Stack',
    textFirst: `We are very impressed by General Magics' ability to deliver on their promise even in the face of short deadlines.`
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
          <Project
            key={project.id}
            id={project.id}
            projectUrl={project.projectUrl}
            projectImg={project.projectImg}
            clientLogo={project.clientLogo}
            description={project.description}
            workWeDid={project.workWeDid}
            clientDescription={project.clientDescription}
            clientName={project.clientName}
            clientOrg={project.clientOrg}
            textFirst={project.textFirst}
          />
        )
      })}
      <div className="mt-10">
        <Join isHome={false} />
      </div>
    </div>
  )
})

ProjectsList.displayName = 'ProjectsList'
