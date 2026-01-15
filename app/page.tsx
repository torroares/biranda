import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Moderne Medizin<br />
            mit persönlicher Nähe
          </h1>

          <p className="text-lg text-slate-700 mb-8 max-w-xl">
            Als junge Ärztin verbinde ich medizinische Kompetenz mit Zeit,
            Empathie und modernen Therapiekonzepten – individuell
            abgestimmt auf Ihre Bedürfnisse.
          </p>

          <a
            href="tel:+41615994846"
            className="inline-flex items-center justify-center
                       bg-primary text-black
                       px-8 py-4 rounded-2xl
                       font-medium text-base
                       hover:opacity-90 transition"
          >
            Termin telefonisch vereinbaren
          </a>
        </div>

        {/* Portrait */}
        <div className="bg-surface rounded-3xl p-6 shadow-sm max-w-sm mx-auto md:mx-0">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">

            <Image
              src="/ueber-mich/dr-biranda.jpg"
              alt="Dr. med. Biranda Bucher"
              fill
              unoptimized
              className="object-cover"
              priority
            />

            {/* Verlauf */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

            {/* Initialen */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2
                            flex flex-col items-center text-white">
              <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur
                              flex items-center justify-center
                              text-xl font-semibold text-slate-800 mb-1">
                DB
              </div>
              <p className="text-xs text-white/90">
                Dr. Biranda Bucher
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* Vertrauens-Sektion */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Zeit. Vertrauen. Medizin auf Augenhöhe.
          </h2>
          <p className="text-lg text-slate-700">
            In meiner Praxis stehen Sie als Mensch im Mittelpunkt.
            Ich nehme mir Zeit für eine persönliche Beratung
            und begleite Sie mit medizinischer Sorgfalt
            und einem ganzheitlichen Blick.
          </p>
        </div>
      </section>

    </main>
  );
}
