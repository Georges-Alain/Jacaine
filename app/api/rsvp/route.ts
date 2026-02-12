import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, response, tableNumber, tableName } = body;

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error('GOOGLE_SCRIPT_URL non configurée');
      return NextResponse.json(
        { error: 'Configuration manquante' },
        { status: 500 }
      );
    }

    console.log('Envoi vers Google Sheets:', { name, response, tableNumber, tableName });

    const sheetResponse = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        response,
        tableNumber: tableNumber || 'N/A',
        tableName: tableName || 'N/A',
        timestamp: new Date().toLocaleString('fr-FR', {
          timeZone: 'Europe/Paris',
        }),
      }),
    });

    if (!sheetResponse.ok) {
      console.error('Erreur Google Sheets:', await sheetResponse.text());
      throw new Error('Erreur lors de l\'envoi à Google Sheets');
    }

    console.log('Succès - Données enregistrées');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur API RSVP:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'enregistrement' },
      { status: 500 }
    );
  }
}
  