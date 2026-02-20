'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LeadForm() {
  const params = useSearchParams();
  const [form, setForm] = useState({ nome: '', telefono: '', email: '' });
  const [stato, setStato] = useState<'idle'|'loading'|'ok'|'err'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStato('loading');

    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        utm_campaign: params.get('utm_campaign'),
        utm_source:   params.get('utm_source'),
        utm_medium:   params.get('utm_medium'),
      }),
    });

    setStato(res.ok ? 'ok' : 'err');
  };

  return (
    <form onSubmit={submit}>
      <input placeholder="Nome e Cognome *" value={form.nome}
        onChange={e => setForm(f => ({ ...f, nome: e.target.value }))} required />
      <input placeholder="Telefono *" value={form.telefono}
        onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} required />
      <input placeholder="Email" value={form.email}
        onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
      <button type="submit" disabled={stato === 'loading'}>
        {stato === 'loading' ? 'Invio...' : 'Richiedi Valutazione Gratuita'}
      </button>
      {stato === 'ok' && <p>✅ Ricevuto! Ti contatteremo presto.</p>}
      {stato === 'err' && <p>❌ Errore, riprova.</p>}
    </form>
  );
}