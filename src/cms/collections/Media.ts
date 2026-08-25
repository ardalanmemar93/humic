import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'public/media',
    imageSizes: [
      { name: 'card', width: 900, height: 700, position: 'centre' },
      { name: 'hero', width: 1800, height: 1200, position: 'centre' }
    ],
    mimeTypes: ['image/*']
  },
  access: { read: () => true },
  fields: [
    { name: 'alt', type: 'text', localized: true, required: true }
  ]
}
