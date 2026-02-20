import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    // 1. Check environment variables
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
        console.error("Missing Supabase environment variables");
        return NextResponse.json({ error: 'Errore di configurazione server (Env vars missing)' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    try {
        const body = await req.json();
        const { nome, telefono, email, page_target, utm_campaign, utm_source } = body;

        if (!nome || !telefono) {
            return NextResponse.json({ error: 'Nome e telefono obbligatori' }, { status: 400 });
        }

        // Map UTM source to readable channel name
        const fonte =
            utm_source === 'google' ? 'Google Search' :
                utm_source === 'facebook' ? 'Meta Facebook' :
                    utm_source === 'instagram' ? 'Meta Instagram' :
                        utm_source === 'linkedin' ? 'LinkedIn' : 'Organico';

        // 2. Insert into Supabase
        // We removed the 'id' field from insert to let Supabase handle auto-generation (BIGINT or UUID)
        const { error } = await supabase.from('leads').insert({
            nome,
            telefono,
            email: email || '',
            target: page_target || 'generico',
            campagna: utm_campaign || null,
            fonte,
            stato: 'nuovo',
            data: new Date().toISOString().split('T')[0],
            note: '',
            valore: 0,
        });

        if (error) {
            console.error("Supabase insert error:", error);
            return NextResponse.json({
                error: `Errore database: ${error.message}. Verifica che le colonne 'target' e 'campagna' esistano.`,
                details: error
            }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err: any) {
        console.error("API Route error:", err);
        return NextResponse.json({ error: 'Errore interno del server', details: err.message }, { status: 500 });
    }
}
