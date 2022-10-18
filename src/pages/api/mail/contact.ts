import type { NextApiRequest, NextApiResponse } from 'next'
import { mailingClient } from '../../../api/mailingClient'

interface ContactFormNextApiRequest extends NextApiRequest {
  body: {
    firstName: string
    email: string
    projectName: string
    projectDescription: string
    services: string[]
    budget: string
    deadline: string
    discord: string | undefined
    telegram: string | undefined
    github: string | undefined
    projectLink: string | undefined
    aditionalInformation: string | undefined
  }
}

export default async function serverSideCall(
  req: ContactFormNextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405)
  } else {
    const {
      firstName,
      email,
      projectName,
      projectDescription,
      services,
      budget,
      deadline,
      discord,
      telegram,
      github,
      projectLink,
      aditionalInformation,
    } = req.body
    const aditionalInformationHeader =
      discord || telegram || github || projectLink || aditionalInformation
        ? 'Aditional information'
        : ''
    const discordHandle = discord ? `Discord handle: ${discord}` : ''
    const telegramHandle = telegram ? `Telegram handle ${telegram}` : ''
    const githubHandle = github ? `Github Profile: ${github}` : ''
    const projectLinkText = projectLink ? `Project Link: ${projectLink}` : ''
    const aditionalInformationText = aditionalInformation
      ? `Additional Information given by the client: ${aditionalInformation}`
      : ''

    const mailData = {
      from: process.env.GMAIL_ACCOUNT as string,
      to: process.env.EMAIL_RECIPIENT as string,
      subject: `Project Request from: ${firstName} | ${projectName}`,
      text: `Who requested: 
      First Name: ${firstName} 
      E-mail: ${email}
      Project Name: ${projectName}
      Project Description: ${projectDescription}
      Type of services: ${services}
      Budget Range: ${budget}
      Deadline(yyyy-mm-dd): ${deadline}

      ${aditionalInformationHeader}
      ${discordHandle}
      ${telegramHandle}
      ${githubHandle}
      ${projectLinkText}
      ${aditionalInformationText}
      `,
    }
    try {
      mailingClient.sendMail(mailData, (err) => {
        if (err) {
          console.log(err)
          res.status(500).json({
            success: false,
            body: err,
          })
        } else {
          res.status(200).json({
            success: true,
          })
        }
      })
    } catch (err) {
      console.log(err)
      res.status(400).json({
        success: false,
      })
    }
  }
}
