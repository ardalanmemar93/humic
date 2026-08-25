import type { GlobalConfig } from 'payload'

const lt = (name: string, label: string) => ({ name, label, type: 'text' as const, localized: true })

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings & Navigation',
  access: { read: () => true },
  fields: [
    { name: 'brandName', type: 'text', defaultValue: 'HUMIC' },
    { name: 'contactEmail', type: 'email', defaultValue: 'orders@example.com' },
    { name: 'contactPhone', type: 'text', defaultValue: '[Phone number]' },
    { name: 'instagram', type: 'text' },
    { name: 'address', type: 'textarea', localized: true },
    lt('navProduct', 'Navigation — Product'),
    lt('navHow', 'Navigation — How It Works'),
    lt('navUse', 'Navigation — How to Use'),
    lt('navGrow', 'Navigation — Grow Better'),
    lt('navAbout', 'Navigation — About'),
    lt('navFaq', 'Navigation — FAQ'),
    lt('orderButton', 'Order button'),
    lt('footerLine', 'Footer headline'),
    lt('copyrightLine', 'Footer copyright / legal line')
  ]
}
