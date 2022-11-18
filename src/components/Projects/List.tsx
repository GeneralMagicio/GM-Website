import { forwardRef } from 'react'
import { Join } from '@/components/Join'
import { Project } from './Project'
import { projectsList } from './projects'

export const ProjectsList = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="min-h-screen bg-neutral-900 bg-homeBg bg-cover bg-center bg-no-repeat py-16 bg-blend-darken md:py-24"
    >
      {projectsList.map((project) => {
        return (
          <Project
            key={project.projectUrl}
            projectUrl={project.projectUrl}
            projectImgDesktop={project.projectImgDesktop}
            projectImgMobile={project.projectImgMobile}
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
