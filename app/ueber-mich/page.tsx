import Image from "next/image";

export default function UeberMich() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
          
        
          {/* Portrait */}
<div className="w-full md:w-1/2 flex justify-center md:justify-start">
  <div className="bg-surface rounded-3xl p-5 shadow-sm
                  max-w-xs md:max-w-sm">
    
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">

      <img
  src="/ueber-mich/dr-biranda.jpg"
  alt="Dr. med. Biranda Bucher"
  className="w-full h-full object-cover"
/>


      {/* Dezenter Verlauf */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* Initialen */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                      flex flex-col items-center text-white">

        

        <p className="text-xs text-black/90">
         
        </p>
      </div>

    </div>
  </div>
</div>


          {/* Text */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-semibold mb-6">
              Dr. med. Biranda Bucher
            </h1>

            <p className="text-lg text-slate-600 mb-6">
              Fachärztin FMH für Allgemeine Innere Medizin mit eigener Praxis
              in Binningen. In meiner Arbeit verbinde ich moderne Medizin
              mit einem ganzheitlichen und präventiven Ansatz.
            </p>

            <p className="text-slate-600">
              Mir ist es wichtig, mir Zeit für meine Patientinnen und Patienten
              zu nehmen, zuzuhören und individuelle medizinische Lösungen
              auf Augenhöhe zu entwickeln.
            </p>
          </div>
        </section>

        {/* Inhalte */}
        <section className="space-y-12">

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Meine Philosophie
            </h2>
            <p className="text-slate-700">
              Gesundheit bedeutet für mich mehr als die Behandlung von Symptomen.
              Mein Ziel ist es, Menschen langfristig zu begleiten, frühzeitig
              zu unterstützen und nachhaltige Gesundheit zu fördern.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Medizinische Schwerpunkte
            </h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Allgemeine Innere Medizin</li>
              <li>Präventivmedizin und Vorsorge</li>
              <li>Moderne Diagnostik und Praxislabor</li>
              <li>Individuelle Therapie- und Betreuungskonzepte</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Sprachen
            </h2>
            <p className="text-slate-700">
              Deutsch, Englisch und Türkisch
            </p>
          </div>

          <div className="bg-surface rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Medizin mit Zeit und Vertrauen
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              In meiner Praxis stehen Sie als Mensch im Mittelpunkt.
              Ich begleite Sie mit medizinischer Kompetenz, Empathie
              und einem offenen Blick für Ihre individuellen Bedürfnisse.
            </p>
          </div>

        </section>

      </div>
    </main>
  );
}
