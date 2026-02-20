import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    const supabase = createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_KEY!
    );

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

    // page_target always identifies the landing page segment (received from frontend)
    // utm_campaign is the ad campaign name from URL (optional, for ads tracking)
    const { error } = await supabase.from('leads').insert({
        id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        nome,
        telefono,
        email: email || '',
        target: page_target || 'generico',   // always the page segment
        campagna: utm_campaign || null,         // ad campaign name (optional)
        fonte,
        stato: 'nuovo',
        data: new Date().toISOString().split('T')[0],
        note: '',
        valore: 0,
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
}
