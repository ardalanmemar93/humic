'use client'
import { FormEvent, useState } from 'react'
type Copy = {name:string,email:string,phone:string,city:string,quantity:string,size:string,sizePlaceholder:string,message:string,submit:string,sending:string,success:string,error:string}
export default function OrderForm({ locale, copy }: { locale: 'en' | 'fa', copy: Copy }) {
 const [state,setState]=useState<'idle'|'sending'|'sent'|'error'>('idle')
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setState('sending');const form=new FormData(e.currentTarget);const body:any=Object.fromEntries(form.entries());body.quantity=Number(body.quantity||1);body.locale=locale;const res=await fetch('/api/order-requests',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});if(res.ok){setState('sent');e.currentTarget.reset()}else setState('error')}
 return <form className="order-form" onSubmit={submit}>
  <label>{copy.name}<input name="name" required /></label><div className="two-col"><label>{copy.email}<input name="email" type="email" /></label><label>{copy.phone}<input name="phone" /></label></div>
  <div className="two-col"><label>{copy.city}<input name="city" /></label><label>{copy.quantity}<input name="quantity" type="number" min="1" defaultValue="1" /></label></div>
  <label>{copy.size}<input name="productSize" placeholder={copy.sizePlaceholder} /></label><label>{copy.message}<textarea name="message" rows={5} /></label>
  <button className="primary-btn" disabled={state==='sending'}>{state==='sending'?copy.sending:copy.submit}</button>{state==='sent'&&<p className="form-note success">{copy.success}</p>}{state==='error'&&<p className="form-note">{copy.error}</p>}
 </form>
}
