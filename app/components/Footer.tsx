export default function Footer() {
  return (
    <footer className="bg-surface border-t border-black/5 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-16 grid-cols-1 md:grid-cols-3">

        {/* Kontakt */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Dr. med. Biranda Bucher
          </h3>

          <p className="text-slate-700 mb-4">
            Hauptstrasse 7<br />
            4102 Binningen
          </p>

          <p className="text-slate-700 mb-2">
            <strong>Kontakt</strong><br />
            praxis.bb@hin.ch<br />
            +41 61 599 48 46
          </p>

          <p className="text-slate-700 mt-4">
            <strong>Öffnungszeiten</strong><br />
            Montag, Dienstag, Donnerstag & Freitag<br />
            08.00 – 12.00 Uhr<br />
            13.30 – 16.30 Uhr<br />
            <br />
            Mittwoch geschlossen
          </p>
        </div>

        {/* Anfahrt */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Anfahrt
          </h3>

          <p className="text-slate-700 mb-4">
            <strong>Tram</strong><br />
            Tram Nr. 2 bis Haltestelle Zoo Dorenbach<br />
            Tram Nr. 10 bis Haltestelle Dorenbach
          </p>

          <p className="text-slate-700 mb-4">
            <strong>Bus</strong><br />
            Bus Nr. 34 & 36 bis Haltestelle Zoo Dorenbach
          </p>

          <p className="text-slate-700">
            <strong>Parkieren</strong><br />
            Parkplätze entlang der Hauptstrasse<br />
            sowie im LIDL-Parking vis-à-vis der Praxis
          </p>
        </div>
<a
  href="https://www.google.com/maps/search/?api=1&query=Hauptstrasse+7+4102+Binningen"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 text-primary font-medium hover:underline"
>
  In Google Maps öffnen →
</a>


        {/* Kontaktformular */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Kontaktanfrage
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Vor- und Nachname *"
              className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
            />

            <input
              type="email"
              placeholder="E-Mail-Adresse *"
              className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
            />

            <input
              type="text"
              placeholder="Geburtsdatum (TT.MM.JJJJ) *"
              className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
            />

            <textarea
              placeholder="Nachricht *"
              rows={4}
              className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white"
            />

            <button
  type="submit"
  className="w-full md:w-auto bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
>
  Senden
</button>

          </form>

          <p className="text-sm text-slate-600 mt-4">
            Bitte beachten Sie, dass Termine ausschliesslich
            telefonisch vereinbart werden können.
            Besten Dank für Ihr Verständnis.
          </p>
        </div>

      </div>

      <div className="text-center text-sm text-slate-500 py-6 border-t border-black/5">
        © {new Date().getFullYear()} Dr. med. Biranda Bucher
      </div>
    </footer>
  );
}
