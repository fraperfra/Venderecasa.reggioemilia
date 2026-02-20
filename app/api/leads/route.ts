import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, phone, address, intention } = body;

        if (!name || !phone) {
            return NextResponse.json(
                { error: "Nome e telefono sono obbligatori." },
                { status: 400 }
            );
        }

        const { error } = await supabase.from("leads").insert([
            {
                nome: name,
                telefono: phone,
                indirizzo: address || null,
                intenzione: intention || "non_so",
                fonte: "landing-eredita",
                creato_il: new Date().toISOString(),
            },
        ]);

        if (error) {
            console.error("Supabase error:", error);
            return NextResponse.json(
                { error: "Errore nel salvataggio. Riprova." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error("API error:", err);
        return NextResponse.json({ error: "Errore del server." }, { status: 500 });
    }
}
