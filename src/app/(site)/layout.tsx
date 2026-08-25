import './site.css'
import type { ReactNode } from 'react'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <html><body>{children}</body></html>
}
