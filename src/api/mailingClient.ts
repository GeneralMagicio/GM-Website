import { google } from 'googleapis'
import nodemailer from 'nodemailer'

const { OAuth2 } = google.auth
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'
const CLIENT_ID = process.env.GMAIL_CLIENT_ID as string
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET as string
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN as string
const ACCOUNT = process.env.GMAIL_ACCOUNT as string

const oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, OAUTH_PLAYGROUND)

oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
})
const accessToken = oauth2Client.getAccessToken()

export const mailingClient = nodemailer.createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    type: 'OAuth2',
    user: ACCOUNT,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken: accessToken,
  },
} as any)
