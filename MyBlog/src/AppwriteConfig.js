import {Client, Account } from 'appwrite'
import conf from './conf/conf'


const client = new Client()
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)

export const account = new Account(client)

export default client