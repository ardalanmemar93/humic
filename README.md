# HUMIC bilingual website

Next.js + Payload CMS website for HUMIC Liquid Humic Acid.

## What is editable in /admin
- English and Persian versions of every public headline, paragraph, button, navigation label, FAQ, form label and helper message
- Hero, introduction, product and six grow-category images
- Image alt text
- Product concentration, dilution, frequency and sizes
- Brand/contact/footer details
- Order page copy and order-form copy
- Incoming order requests

Payload localization is configured for English (`en`) and Persian (`fa`) with RTL enabled for Persian. Media uploads are stored in `public/media` by default and can be replaced from the Media Library.

## Local setup
1. Copy `.env.example` to `.env` and replace `PAYLOAD_SECRET` with a long random secret.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000/admin` and create the first admin user.
5. Edit **Homepage — All Content**, **Site Settings & Navigation**, and **Order Page & Form**. Use the locale selector in Payload to enter English and Persian content.
6. Upload final imagery in **Media** and select it in the relevant Homepage image field.
7. View the site at `/en` and `/fa`.

## Production notes
- Replace all `[XX]` product-analysis placeholders only after the actual product label/analysis is confirmed.
- Configure production storage/backups before launch. Local media and SQLite are intentionally portable for v1; production infrastructure can be swapped based on the selected Iranian host.
- The order form stores requests in **Order Requests** in the admin panel. Email/SMS/WhatsApp notifications can be added later.

## Visual preview
Open `preview.html` directly in a browser for the approved visual direction. The production Next.js site uses CMS-driven content rather than the hard-coded preview.
# humic
