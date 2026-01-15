import Image from "next/image";

const leistungen = [
  {
    title: "Botulinumtoxin Behandlung",
    image: "/leistungen/botulinum.jpg",
    text: "Die Behandlung mit Botulinumtoxin kann zur gezielten Entspannung bestimmter Muskelgruppen eingesetzt werden. Ziel ist ein natürliches Ergebnis unter Wahrung der individuellen Mimik.",
  },
  {
    title: "Haarwurzelbehandlung",
    image: "/leistungen/haarwurzel.jpg",
    text: "Die Haarwurzelbehandlung zielt darauf ab, die Kopfhaut zu stärken und die Haarwurzeln gezielt zu unterstützen. Die Behandlung erfolgt individuell abgestimmt und medizinisch begleitet.",
  },
  {
    title: "Lippenunterspritzung",
    image: "/leistungen/lippen.jpg",
    text: "Die Lippenunterspritzung dient der dezenten Betonung und Harmonisierung der Lippenform. Im Vordergrund steht ein ausgewogenes, natürliches Ergebnis.",
  },
  {
    title: "PRP (Eigenbluttherapie)",
    image: "/leistungen/prp.jpg",
    text: "Bei der PRP-Therapie wird körpereigenes Plasma aus dem eigenen Blut gewonnen und gezielt eingesetzt. Sie kann regenerative Prozesse von Haut und Haar unterstützen.",
  },
];

export default function Leistungen() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* Header */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold mb-6">
            Leistungen
          </h1>
          <p className="text-lg text-slate-700">
            In meiner Praxis biete ich ausgewählte medizinische und ästhetische
            Behandlungen an, die individuell auf Ihre Bedürfnisse abgestimmt
            werden.
          </p>
        </section>

        {/* Leistungen Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {leistungen.map((item) => (
            <div key={item.title} className="text-center space-y-6">

              {/* Bild */}
              <div className="mx-auto w-64 h-64 rounded-full bg-[#ece3da] flex items-center justify-center">
                <div className="w-56 h-56 rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </div>

              {/* Titel */}
              <h2 className="text-lg font-medium">
                {item.title}
              </h2>

              {/* Text */}
              <p className="text-sm text-slate-700 leading-relaxed px-2">
                {item.text}
              </p>

            </div>
          ))}
        </section>

        {/* Hinweis */}
        <section className="max-w-3xl mx-auto text-center pt-10">
          <p className="text-sm text-slate-600">
            Alle Behandlungen erfolgen nach ärztlicher Beratung und individueller
            Beurteilung. Nicht jede Therapie ist für jede Person gleichermassen
            geeignet.
          </p>
        </section>

      </div>
    </main>
  );
}
