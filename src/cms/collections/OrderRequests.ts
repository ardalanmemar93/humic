import type { CollectionConfig } from 'payload'

export const OrderRequests: CollectionConfig = {
  slug: 'order-requests',
  labels: { singular: 'Order Request', plural: 'Order Requests' },
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'city', 'quantity', 'createdAt'] },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user)
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email' },
    { name: 'phone', type: 'text' },
    { name: 'city', type: 'text' },
    { name: 'productSize', type: 'text' },
    { name: 'quantity', type: 'number', min: 1, defaultValue: 1 },
    { name: 'message', type: 'textarea' },
    { name: 'status', type: 'select', defaultValue: 'new', options: ['new', 'contacted', 'completed'] }
  ],
  timestamps: true
}
