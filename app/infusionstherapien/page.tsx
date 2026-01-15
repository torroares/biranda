export default function Infusionstherapien() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-6 space-y-20">

        {/* Header */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold mb-6">
            Infusionstherapien
          </h1>
          <p className="text-lg text-slate-700">
            Medizinisch fundierte Infusionstherapien zur gezielten Unterstützung
            des Körpers – individuell abgestimmt und ärztlich begleitet.
          </p>
        </section>

{/* Bilder */}
<section className="grid md:grid-cols-3 gap-6">
  <img
    src="/infusionen/raum.jpg"
    alt="Behandlungsraum Infusionstherapie"
    className="w-full h-56 object-cover rounded-2xl"
  />
  <img
    src="/infusionen/infusion.jpg"
    alt="Infusionstherapie in der Praxis"
    className="w-full h-56 object-cover rounded-2xl"
  />
  <img
    src="/infusionen/details.jpg"
    alt="Medizinische Infusion Details"
    className="w-full h-56 object-cover rounded-2xl"
  />
</section>


        {/* Inhalt */}
        <section className="grid md:grid-cols-2 gap-16 items-start">

          {/* Text links */}
          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Was sind Infusionstherapien?
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Infusionstherapien ermöglichen die direkte Zufuhr von Vitaminen,
                Mineralstoffen und Spurenelementen über die Blutbahn. Dadurch
                können diese rasch und unabhängig vom Magen-Darm-Trakt
                aufgenommen werden.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Wann können Infusionen sinnvoll sein?
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Erhöhte körperliche oder mentale Belastung</li>
                <li>Müdigkeit, Erschöpfung oder Leistungseinbussen</li>
                <li>Unterstützung des Immunsystems</li>
                <li>Erhöhter Nährstoffbedarf</li>
                <li>Regeneration nach Krankheit oder Stressphasen</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Ablauf der Behandlung
              </h2>
              <ol className="list-decimal list-inside text-slate-700 space-y-2">
                <li>Persönliches ärztliches Beratungsgespräch</li>
                <li>Individuelle Empfehlung der Infusion</li>
                <li>Durchführung der Infusion in ruhiger Atmosphäre</li>
                <li>Kurze Nachbeobachtung</li>
              </ol>
              <p className="text-slate-600 mt-3">
                Die Dauer einer Infusion beträgt in der Regel
                <strong> 30 bis 60 Minuten</strong>.
              </p>
            </div>

          </div>

          {/* Infobox rechts */}
          <div className="bg-[#ece3da] rounded-3xl p-10 space-y-8">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Vorteile der Infusionstherapie
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>– Direkte Aufnahme über den Blutkreislauf</li>
                <li>– Hohe Bioverfügbarkeit der Nährstoffe</li>
                <li>– Individuell zusammengestellte Infusionen</li>
                <li>– Ärztlich überwacht und medizinisch fundiert</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Sicherheit & Qualität
              </h3>
              <p className="text-slate-700">
                Die Infusionstherapien werden ausschliesslich nach ärztlicher
                Beurteilung durchgeführt. Es kommen geprüfte Präparate zum
                Einsatz, die den medizinischen Standards entsprechen.
              </p>
            </div>

            <div className="pt-6 border-t border-black/10">
              <p className="text-sm text-slate-600">
                Hinweis: Infusionstherapien ersetzen keine ausgewogene Ernährung
                oder medizinisch notwendige Behandlungen, sondern können diese
                sinnvoll ergänzen.
              </p>
            </div>

          </div>

        </section>

        {/* Call to Action */}
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 mb-6">
            Gerne berate ich Sie persönlich, ob eine Infusionstherapie für Sie
            sinnvoll ist.
          </p>
          <p className="text-slate-600">
            Terminvereinbarung ausschliesslich telefonisch.
          </p>
        </section>

      </div>
    </main>
  );
}
