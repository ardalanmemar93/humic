export const dynamic = 'force-dynamic'
export const revalidate = 0

import Link from 'next/link'
import { notFound } from 'next/navigation'
import LanguageSwitch from '@/components/LanguageSwitch'
import { getSiteData, mediaUrl, type Locale } from '@/lib/cms'

const imgs = {
  hero: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2000&q=86',
  soil: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=85',
  product: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1400&q=85',
  cards: [
    'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?auto=format&fit=crop&w=900&q=82',
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=82'
  ]
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params
  if (raw !== 'en' && raw !== 'fa') notFound()
  const locale = raw as Locale
  const { home, settings, fallback: f } = await getSiteData(locale)
  const h: any = home
  const s: any = settings
  const benefits = h.benefits?.length ? h.benefits : f.benefits.map(([title, body]) => ({ title, body }))
  const growCards = h.growCards?.length ? h.growCards : f.grow.map((title, i) => ({ title, image: null, i }))
  const faqs = h.faqs?.length ? h.faqs : f.faqs.map(([question, answer]) => ({ question, answer }))

  return <main>
    <header className="nav-wrap">
      <Link href={`/${locale}`} className="brand">{s.brandName || 'HUMIC'}<span>.</span></Link>
      <nav className="desktop-nav">
        <a href="#product">{s.navProduct || f.nav[0]}</a><a href="#how">{s.navHow || f.nav[1]}</a><a href="#use">{s.navUse || f.nav[2]}</a><a href="#grow">{s.navGrow || f.nav[3]}</a><a href="#about">{s.navAbout || f.nav[4]}</a><a href="#faq">{s.navFaq || f.nav[5]}</a>
      </nav>
      <div className="nav-actions"><LanguageSwitch locale={locale} /><Link className="nav-order" href={`/${locale}/order`}>{s.orderButton || f.order}</Link></div>
    </header>

    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(11,35,26,.78), rgba(11,35,26,.18)), url(${mediaUrl(h.heroImage, imgs.hero)})` }}>
      <div className="hero-content"><p className="eyebrow light">{h.heroEyebrow || f.heroEyebrow}</p><h1>{h.heroTitle || f.heroTitle}</h1><p>{h.heroBody || f.heroBody}</p><a className="primary-btn cream" href="#product">{h.heroButton || f.heroButton}</a></div>
      <div className="hero-index">{h.heroIndex || f.heroIndex}</div>
    </section>

    <section className="intro section" id="about">
      <div><p className="eyebrow">{h.introEyebrow || f.introEyebrow}</p><h2>{h.introTitle || f.introTitle}</h2></div>
      <div><p className="lead">{h.introBody || f.introBody}</p></div>
      <img className="intro-image" src={mediaUrl(h.introImage, imgs.soil)} alt={h.introImageAlt || (locale === 'fa' ? 'خاک و گیاهان سرسبز خانگی' : 'Rich soil and lush home garden plants')} />
    </section>

    <section className="benefits section dark-section">
      <p className="eyebrow light">{h.benefitsEyebrow || f.benefitsEyebrow}</p><h2>{h.benefitsTitle || f.benefitsTitle}</h2>
      <div className="benefit-grid">{benefits.map((b: any, i: number) => <article key={i}><span>0{i + 1}</span><h3>{b.title}</h3><p>{b.body}</p></article>)}</div>
    </section>

    <section className="grow section" id="grow"><p className="eyebrow">{h.growEyebrow || f.growEyebrow}</p><h2>{h.growTitle || f.growTitle}</h2>
      <div className="card-grid">{growCards.map((c: any, i: number) => <article className="grow-card" key={i} style={{ backgroundImage: `linear-gradient(0deg, rgba(13,35,26,.7), transparent 60%), url(${mediaUrl(c.image, imgs.cards[i] || imgs.cards[0])})` }}><span>0{i + 1}</span><h3>{c.title}</h3></article>)}</div>
    </section>

    <section className="product section" id="product">
      <div className="product-image" style={{ backgroundImage: `url(${mediaUrl(h.productImage, imgs.product)})` }}><div className="bottle"><small>{h.bottleTop || f.bottleTop}</small><strong>{h.bottleName || f.bottleName}</strong><span>{h.bottleBottom || f.bottleBottom}</span></div></div>
      <div className="product-copy"><p className="eyebrow">{h.productEyebrow || f.productEyebrow}</p><h2>{h.productTitle || f.productTitle}</h2><p className="lead">{h.productBody || f.productBody}</p>
        <div className="specs"><div><span>{h.concentrationLabel || f.specLabels[0]}</span><strong>{h.concentration || '[XX%]'}</strong></div><div><span>{h.dilutionLabel || f.specLabels[1]}</span><strong>{h.dilution || '[X mL / X L]'}</strong></div><div><span>{h.frequencyLabel || f.specLabels[2]}</span><strong>{h.frequency || '[Every X weeks]'}</strong></div><div><span>{h.sizesLabel || f.specLabels[3]}</span><strong>{h.sizes || '[500 mL] [1 L] [5 L]'}</strong></div></div>
        <Link className="primary-btn" href={`/${locale}/order`}>{s.orderButton || f.order}</Link>
      </div>
    </section>

    <section className="split-info section" id="how"><div><p className="eyebrow">{h.howEyebrow || f.howEyebrow}</p><h2>{h.howTitle || f.howTitle}</h2></div><p className="lead">{h.howBody || f.howBody}</p></section>
    <section className="process"><div>01<span>{h.processSoil || f.process[0]}</span></div><b>→</b><div>02<span>{h.processHumic || f.process[1]}</span></div><b>→</b><div>03<span>{h.processRoots || f.process[2]}</span></div><b>→</b><div>04<span>{h.processGrowth || f.process[3]}</span></div></section>

    <section className="use section" id="use"><p className="eyebrow">{h.useEyebrow || f.useEyebrow}</p><h2>{h.useTitle || f.useTitle}</h2><p className="lead">{h.useBody || f.useBody}</p><div className="use-note">{h.useNote || f.useNote}</div></section>

    <section className="faq section" id="faq"><p className="eyebrow">{h.faqEyebrow || f.faqEyebrow}</p><h2>{h.faqTitle || f.faqTitle}</h2><div className="faq-list">{faqs.map((q: any, i: number) => <details key={i}><summary>{q.question}<span>+</span></summary><p>{q.answer}</p></details>)}</div></section>

    <section className="cta"><p className="eyebrow light">{h.ctaEyebrow || f.ctaEyebrow}</p><h2>{s.footerLine || f.footer}</h2><Link className="primary-btn cream" href={`/${locale}/order`}>{s.orderButton || f.order}</Link></section>
    <footer><div className="brand">HUMIC<span>.</span></div><div>{s.contactEmail || 'orders@example.com'}<br />{s.contactPhone || '[Phone number]'}</div><div>© {new Date().getFullYear()} {s.copyrightLine || f.copyright}</div></footer>
  </main>
}
