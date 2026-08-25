import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Users } from './cms/collections/Users'
import { Media } from './cms/collections/Media'
import { OrderRequests } from './cms/collections/OrderRequests'
import { Homepage } from './cms/globals/Homepage'
import { SiteSettings } from './cms/globals/SiteSettings'
import { OrderPage } from './cms/globals/OrderPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'change-me-before-production',
  editor: lexicalEditor(),
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: ' — HUMIC Admin' }
  },
  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'فارسی', code: 'fa', rtl: true }
    ],
    defaultLocale: 'en',
    fallback: true
  },
  collections: [Users, Media, OrderRequests],
  globals: [Homepage, SiteSettings, OrderPage],
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URL || 'file:./humic.db' }
  }),
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') }
})
