export default function Aesthetik() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-20">

        {/* Header */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold mb-6">
            Ästhetik
          </h1>
          <p className="text-lg text-slate-700">
            Ästhetische Behandlungen mit medizinischem Anspruch –
            dezent, individuell und auf Natürlichkeit ausgerichtet.
          </p>
        </section>

        {/* Bilder */}
        <section className="grid md:grid-cols-3 gap-6">
          <img
            src="/aesthetik/raum.jpg"
            alt="Ästhetische Behandlung in ruhiger Atmosphäre"
            className="w-full h-56 object-cover rounded-2xl"
          />
          <img
            src="/aesthetik/behandlung.jpg"
            alt="Ästhetische Behandlung in der Arztpraxis"
            className="w-full h-56 object-cover rounded-2xl"
          />
          <img
            src="/aesthetik/details.jpg"
            alt="Medizinische Details ästhetischer Behandlungen"
            className="w-full h-56 object-cover rounded-2xl"
          />
        </section>

        {/* Inhalt */}
        <section className="grid md:grid-cols-2 gap-16 items-start">

          {/* Text links */}
          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Medizinische Ästhetik
              </h2>
              <p className="text-slate-700 leading-relaxed">
                In meiner Praxis verstehe ich ästhetische Medizin als Teil eines
                ganzheitlichen medizinischen Ansatzes. Ziel ist es, die
                individuelle Ausstrahlung zu unterstützen und natürliche
                Proportionen zu bewahren.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Natürlichkeit im Fokus
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Jede Behandlung wird sorgfältig geplant und individuell
                abgestimmt. Dabei stehen Zurückhaltung, Sicherheit und ein
                harmonisches Gesamtbild im Vordergrund – nicht sichtbare
                Veränderungen oder Überkorrekturen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Persönliche Beratung
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Vor jeder ästhetischen Behandlung erfolgt ein ausführliches
                ärztliches Beratungsgespräch. Gemeinsam besprechen wir Ihre
                Wünsche, Erwartungen sowie medizinische Möglichkeiten und
                Grenzen.
              </p>
            </div>

          </div>

          {/* Infobox rechts */}
          <div className="bg-[#ece3da] rounded-3xl p-10 space-y-8">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Mögliche Behandlungen
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>– Botulinumtoxin-Behandlungen</li>
                <li>– Hyaluron-basierte Unterspritzungen</li>
                <li>– PRP (Eigenbluttherapie)</li>
                <li>– Haut- und Regenerationsbehandlungen</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Sicherheit & Qualität
              </h3>
              <p className="text-slate-700">
                Alle ästhetischen Behandlungen erfolgen nach medizinischen
                Standards und ausschliesslich nach ärztlicher Beurteilung. Es
                kommen geprüfte Präparate und bewährte Methoden zum Einsatz.
              </p>
            </div>

            <div className="pt-6 border-t border-black/10">
              <p className="text-sm text-slate-600">
                Hinweis: Ästhetische Behandlungen sind individuell und nicht für
                jede Person gleichermassen geeignet. Eine ärztliche Beratung ist
                Voraussetzung.
              </p>
            </div>

          </div>

        </section>

        {/* Call to Action */}
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 mb-6">
            Gerne berate ich Sie persönlich zu den Möglichkeiten der
            ästhetischen Medizin.
          </p>
          <p className="text-slate-600">
            Terminvereinbarung ausschliesslich telefonisch.
          </p>
        </section>

      </div>
    </main>
  );
}
