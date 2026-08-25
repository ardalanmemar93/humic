import type { GlobalConfig } from 'payload'
const lt = (name: string, label: string, required = false) => ({ name, label, type: 'text' as const, localized: true, required })
const ta = (name: string, label: string) => ({ name, label, type: 'textarea' as const, localized: true })
export const Homepage: GlobalConfig = {
  slug: 'homepage', label: 'Homepage — All Content', access: { read: () => true }, fields: [
    lt('heroEyebrow','Hero eyebrow'), lt('heroTitle','Hero title',true), ta('heroBody','Hero body'), {name:'heroImage',type:'upload',relationTo:'media'}, lt('heroImageAlt','Hero image alt text'), lt('heroButton','Hero button'), lt('heroIndex','Hero corner label'),
    lt('introEyebrow','Introduction eyebrow'), lt('introTitle','Introduction title'), ta('introBody','Introduction body'), {name:'introImage',type:'upload',relationTo:'media'}, lt('introImageAlt','Introduction image alt text'),
    lt('benefitsEyebrow','Benefits eyebrow'), lt('benefitsTitle','Benefits title'), {name:'benefits',type:'array',minRows:4,maxRows:4,fields:[lt('title','Title'),ta('body','Body')]},
    lt('growEyebrow','Grow eyebrow'), lt('growTitle','Grow section title'), {name:'growCards',type:'array',minRows:6,maxRows:6,fields:[lt('title','Title'),{name:'image',type:'upload',relationTo:'media'},lt('imageAlt','Image alt text')]},
    lt('productEyebrow','Product eyebrow'), lt('productTitle','Product title'), ta('productBody','Product body'), {name:'productImage',type:'upload',relationTo:'media'}, lt('productImageAlt','Product image alt text'), lt('bottleTop','Bottle label — top'), lt('bottleName','Bottle label — name'), lt('bottleBottom','Bottle label — bottom'),
    {name:'concentration',type:'text',defaultValue:'[XX%]'},{name:'dilution',type:'text',defaultValue:'[X mL per X L of water]'},{name:'frequency',type:'text',defaultValue:'[Every X weeks]'},{name:'sizes',type:'text',defaultValue:'[500 mL] [1 L] [5 L]'}, lt('concentrationLabel','Spec label — concentration'),lt('dilutionLabel','Spec label — dilution'),lt('frequencyLabel','Spec label — frequency'),lt('sizesLabel','Spec label — sizes'),
    lt('howEyebrow','How it works eyebrow'),lt('howTitle','How it works title'),ta('howBody','How it works body'),lt('processSoil','Process — soil'),lt('processHumic','Process — HUMIC'),lt('processRoots','Process — roots/nutrients'),lt('processGrowth','Process — growth'),
    lt('useEyebrow','How to use eyebrow'),lt('useTitle','How to use title'),ta('useBody','How to use body'),ta('useNote','How to use notice'),
    lt('faqEyebrow','FAQ eyebrow'),lt('faqTitle','FAQ title'),{name:'faqs',type:'array',fields:[lt('question','Question'),ta('answer','Answer')]},
    lt('ctaEyebrow','Final CTA eyebrow')
  ]
}
