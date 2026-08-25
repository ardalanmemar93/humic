import Link from 'next/link'
import { notFound } from 'next/navigation'
import LanguageSwitch from '@/components/LanguageSwitch'
import OrderForm from '@/components/OrderForm'
import { getSiteData, type Locale } from '@/lib/cms'
export default async function OrderPageRoute({params}:{params:Promise<{locale:string}>}){
 const {locale:raw}=await params;if(raw!=='en'&&raw!=='fa')notFound();const locale=raw as Locale;const {settings,order,fallback}=await getSiteData(locale);const s:any=settings,o:any=order,f:any=fallback.orderPage,L=f.labels
 const copy={name:o.nameLabel||L[0],email:o.emailLabel||L[1],phone:o.phoneLabel||L[2],city:o.cityLabel||L[3],quantity:o.quantityLabel||L[4],size:o.sizeLabel||L[5],sizePlaceholder:o.sizePlaceholder||L[6],message:o.messageLabel||L[7],submit:o.submitLabel||L[8],sending:o.sendingLabel||L[9],success:o.successMessage||L[10],error:o.errorMessage||L[11]}
 return <main className="order-page"><header className="nav-wrap solid"><Link href={`/${locale}`} className="brand">{s.brandName||'HUMIC'}<span>.</span></Link><div className="nav-actions"><LanguageSwitch locale={locale}/><Link className="nav-order ghost" href={`/${locale}`}>{o.backLabel||f.back}</Link></div></header>
 <section className="order-shell"><div className="order-copy"><p className="eyebrow">{o.eyebrow||f.eyebrow}</p><h1>{o.title||f.title}</h1><p className="lead">{o.body||f.body}</p><div className="contact-card"><strong>{o.contactLabel||f.contact}</strong><span>{s.contactEmail||'orders@example.com'}</span><span>{s.contactPhone||'[Phone number]'}</span></div></div><OrderForm locale={locale} copy={copy}/></section>
 <footer><div className="brand">{s.brandName||'HUMIC'}<span>.</span></div><div>{s.footerLine||fallback.footer}</div></footer></main>
}
