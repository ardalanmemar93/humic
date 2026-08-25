import type { GlobalConfig } from 'payload'
const lt = (name: string, label: string) => ({ name, label, type: 'text' as const, localized: true })
export const OrderPage: GlobalConfig = {
  slug: 'order-page', label: 'Order Page & Form', access: { read: () => true }, fields: [
    lt('eyebrow','Eyebrow'), lt('title','Page title'), {name:'body',type:'textarea',localized:true}, lt('contactLabel','Contact label'), lt('backLabel','Back button'),
    lt('nameLabel','Form — Name'), lt('emailLabel','Form — Email'), lt('phoneLabel','Form — Phone'), lt('cityLabel','Form — City'), lt('quantityLabel','Form — Quantity'), lt('sizeLabel','Form — Product size'), lt('sizePlaceholder','Form — Size placeholder'), lt('messageLabel','Form — Message'), lt('submitLabel','Form — Submit'), lt('sendingLabel','Form — Sending'), lt('successMessage','Form — Success message'), lt('errorMessage','Form — Error message')
  ]
}
