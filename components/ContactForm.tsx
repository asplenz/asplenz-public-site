'use client';
import React, { useState } from 'react';
import { dict, Locale } from '../lib/dictionaries';

export default function ContactForm({ dictKey }: { dictKey: Locale }) {
  const d = dict[dictKey];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [err, setErr] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErr('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, message })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Error');
      }
      setStatus('success');
      setName(''); setEmail(''); setCompany(''); setMessage('');
    } catch (e:any) {
      setErr(e.message);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{marginTop:14}}>
      <div className="form-row">
        <div>
          <label>{d.form_name}</label>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div>
          <label>{d.form_email}</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
      </div>
      <div className="form-row" style={{marginTop:12}}>
        <div>
          <label>{d.form_company}</label>
          <input className="input" value={company} onChange={e=>setCompany(e.target.value)} />
        </div>
      </div>
      <div style={{marginTop:12}}>
        <label>{d.form_message}</label>
        <textarea className="textarea" value={message} onChange={e=>setMessage(e.target.value)} required />
      </div>

      <div style={{marginTop:14, display:'flex', gap:12, alignItems:'center'}}>
        <button className="button" disabled={status==='loading'}>{d.form_send}</button>
        {status==='loading' && <span className="small">{d.form_sending}</span>}
        {status==='success' && <span className="small success">{d.form_sent}</span>}
        {status==='error' && <span className="small error">{d.form_error}: {err}</span>}
      </div>

      <p className="small" style={{marginTop:10}}>
        {d.form_policy}
      </p>
    </form>
  );
}
