import type { NextApiRequest, NextApiResponse } from 'next'
import { mailingClient } from '@/api/mailingClient'
import { appendSpreadsheet } from '@/api/gSheets'

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
    const telegramHandle = telegram ? `Telegram handle: ${telegram}` : ''
    const githubHandle = github ? `Github Profile: ${github}` : ''
    const projectLinkText = projectLink ? `Project Link: ${projectLink}` : ''
    const aditionalInformationText = aditionalInformation
      ? `Additional Information given by the client: ${aditionalInformation}`
      : ''
    const emailRecipient = process.env.EMAIL_RECIPIENT as string
    const emailRecipient2 = process.env.EMAIL_RECIPIENT2 as string

    const mailData = {
      from: process.env.GMAIL_ACCOUNT as string,
      to: emailRecipient + ';' + emailRecipient2,
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
    const date = new Date()
    const sheetsData = {
      timeStamp: date.toUTCString(),
      whoRequested: firstName,
      emailContact: email,
      projectName: projectName,
      projectDescription: projectDescription,
      typeOfServices: services.toString(),
      budgetRange: budget,
      deadline: deadline,
      discordHandle: discord ? discord : '',
      githubHandle: github ? github : '',
      telegramHandle: telegram ? telegram : '',
      projectLink: projectLink ? projectLink : '',
      aditionalInformationText: aditionalInformation
        ? aditionalInformation
        : '',
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
      appendSpreadsheet(sheetsData)
    } catch (err) {
      console.log(err)
      res.status(400).json({
        success: false,
      })
    }
  }
}
