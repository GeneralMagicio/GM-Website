import { z } from 'zod'

const nonEmptyStringContraint = z.string().min(1)
const EmptyStringContraint = z.string()

export const SubmitSchema = z.object({
  firstName: nonEmptyStringContraint,
  email: nonEmptyStringContraint,
  projectName: nonEmptyStringContraint,
  projectDescription: nonEmptyStringContraint,
  services: z.array(nonEmptyStringContraint),
  budget: nonEmptyStringContraint,
  deadline: nonEmptyStringContraint,
  discord: EmptyStringContraint,
  telegram: EmptyStringContraint,
  github: EmptyStringContraint,
  projectLink: EmptyStringContraint,
  aditionalInformation: EmptyStringContraint,
})

export type Submit = z.infer<typeof SubmitSchema>
