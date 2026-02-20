import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
        return NextResponse.json({
            error: `Configurazione incompleta su Vercel. Rilevato URL: ${!!supabaseUrl}, Key: ${!!supabaseServiceKey}.`,
            hint: 'Assicurati di aver impostato sia SUPABASE_URL (o NEXT_PUBLIC_SUPABASE_URL) che SUPABASE_SERVICE_KEY.'
        }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    try {
        const body = await req.json();
        const { nome, telefono, email, page_target, utm_campaign, utm_source, address } = body;

        if (!nome || !telefono) {
            return NextResponse.json({ error: 'Nome e telefono sono obbligatori.' }, { status: 400 });
        }

        const fonte =
            utm_source === 'google' ? 'Google Search' :
                utm_source === 'facebook' ? 'Meta Facebook' :
                    utm_source === 'instagram' ? 'Meta Instagram' :
                        utm_source === 'linkedin' ? 'LinkedIn' : 'Organico';

        // We manually generate the ID because the 'leads' table likely uses 'id' TEXT PRIMARY KEY without auto-increment.
        const leadId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

        const { error } = await supabase.from('leads').insert({
            id: leadId,
            nome,
            telefono,
            email: email || '',
            target: page_target || 'generico',
            campagna: utm_campaign || null,
            fonte,
            stato: 'nuovo',
            data: new Date().toISOString().split('T')[0],
            note: address ? `Indirizzo: ${address}` : '',
            valore: 0,
        });

        if (error) {
            console.error("Supabase Error:", error);
            return NextResponse.json({
                error: `Errore Supabase: ${error.message}`,
                code: error.code,
                hint: "Assicurati che la tabella 'leads' esista e che le colonne 'target' e 'campagna' siano state create."
            }, { status: 500 });
        }

        return NextResponse.json({ ok: true, id: leadId });
    } catch (err: any) {
        console.error("Internal API Error:", err);
        return NextResponse.json({
            error: 'Errore interno del server durante l\'invio del lead.',
            details: err.message
        }, { status: 500 });
    }
}
