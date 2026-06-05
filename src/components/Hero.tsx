import { useState } from "react";
import { Sparkles, Shield, Cpu, Zap, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenVip: () => void;
  onScrollToCatalog: () => void;
}

export default function Hero({ onOpenVip, onScrollToCatalog }: HeroProps) {
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  const BIOTECH_FEATURES = [
    {
      title: "Microcápsulas de Ácido Hialurónico",
      tagline: "Hidratación lipídica celular continua",
      description: "Hilos embebidos con nanotecnología europea. El roce natural de tu piel desencadena la liberación controlada de activos lipídicos que reafirman, suavizan y eliminan la sequedad cutánea durante todo el día.",
      metric: "98% de mejora en turgencia celular",
      icon: <Cpu className="h-5 w-5 text-cherry-rose" />
    },
    {
      title: "Compresión de Siete Capas",
      tagline: "Soporte ergonómico cero presión facial",
      description: "Membranas hexagonales tejidas milimétricamente. Distribuye la fuerza de forma asimétrica para aplanar la zona abdominal inferior y brindar soporte lumbar, sin comprimir tu respiración profunda.",
      metric: "-4.2cm de cintura reductiva inmediata",
      icon: <Shield className="h-5 w-5 text-cherry-rose" />
    },
    {
      title: "Filamento Cerámico Biotérmico",
      tagline: "Emisión infrarroja pasiva y tonificación",
      description: "Hilos impregnados con polvos de biocerámica infrarroja. Capta el calor cinético corporal y lo devuelve en ondas estimulantes que aceleran la microcirculación, atenuando la flacidez.",
      metric: "+35% estimulación subdérmica",
      icon: <Zap className="h-5 w-5 text-cherry-rose" />
    }
  ];

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-lavender-blush via-white to-lavender-blush pb-16 pt-24 md:pb-24 sm:pt-32" id="hero-section">
      {/* Absolute decorative backdrops */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-[#ffccd5]/30 filter blur-3xl opacity-60 animate-pulse" />
      <div className="absolute bottom-12 right-10 h-96 w-96 rounded-full bg-[#f5ebe0]/40 filter blur-3xl opacity-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ffccd5]/50 border border-pastel-pink px-4.5 py-1.5 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-cherry-rose animate-ping" />
              <span className="text-[10px] tracking-widest text-[#a4133c] uppercase font-bold font-sans">
                Nueva Colección Biotech • Éclat 2026
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light text-[#590d22] leading-[1.1] tracking-wide">
                Biotecnología que <br />
                <span className="font-medium italic text-cherry-rose">esculpe tu piel</span>
              </h1>
              <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
                Rompemos la frontera entre la corsetería de lujo y la ingeniería dermo-cosmética. Fajas moldeadoras invisibles de compresión asimétrica enriquecidas con microcápsulas biológicas activas que hidratan y rediseñan tu silueta con elegancia científica.
              </p>
            </div>

            {/* CTAs section */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <button
                id="hero-btn-discover"
                onClick={onScrollToCatalog}
                className="rounded-xl bg-night-bordeaux px-8 py-4 text-xs tracking-widest font-bold text-white uppercase shadow-md transition-all duration-300 hover:bg-cherry-rose hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 font-sans text-center"
              >
                Comprar Colección
              </button>
              
              <button
                id="hero-btn-vip-guideline"
                onClick={onOpenVip}
                className="rounded-xl border border-pastel-pink bg-white/70 hover:bg-white px-8 py-4 text-xs tracking-widest font-bold text-night-bordeaux uppercase hover:text-cherry-rose hover:border-cherry-rose hover:shadow-sm transition-all font-sans flex items-center justify-center gap-1.5"
              >
                Asistente de Talla VIP
                <ArrowRight size={13} className="text-cherry-rose font-bold" />
              </button>
            </div>

            {/* Micro feature metrics row */}
            <div className="grid grid-cols-3 gap-4 border-t border-pastel-pink/50 pt-7 max-w-md">
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-night-bordeaux leading-none">0%</span>
                <span className="block text-[9px] text-gray-400 font-sans uppercase mt-1 tracking-wider">Marcación en ropa</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-night-bordeaux leading-none">3D</span>
                <span className="block text-[9px] text-gray-400 font-sans uppercase mt-1 tracking-wider">Compresión Activa</span>
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-night-bordeaux leading-none">100%</span>
                <span className="block text-[9px] text-gray-400 font-sans uppercase mt-1 tracking-wider">Femenino de lujo</span>
              </div>
            </div>
          </div>

          {/* Interactive Technology Interactive Card Right Column */}
          <div className="lg:col-span-5 h-full">
            <div className="rounded-3xl border border-pastel-pink bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between h-auto min-h-[420px]">
              {/* Back ambient tech visualizer pattern */}
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-lavender-blush border border-pastel-pink p-6 pointer-events-none opacity-40">
                <div className="h-full w-full rounded-full border border-dashed border-cherry-rose/40 animate-spin" style={{ animationDuration: "35s" }} />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-cherry-rose uppercase font-bold font-sans">
                    Fórmula Textil Patentada
                  </span>
                  <span className="rounded bg-lavender-blush px-2 py-0.5 text-[10px] font-mono text-night-bordeaux font-extrabold uppercase">
                    Scan Active
                  </span>
                </div>

                <h3 className="font-serif text-lg font-medium text-[#590d22] tracking-wide mt-2">
                  Laboratorio de Biocontrol Éclat
                </h3>
              </div>

              {/* Central interactive explanation view */}
              <div className="my-6 space-y-3.5 bg-lavender-blush/40 border border-pastel-pink/50 rounded-2xl p-4 sm:p-5 relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs">
                    {BIOTECH_FEATURES[activeTechIndex].icon}
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-bold text-[#590d22] leading-none uppercase tracking-wide">
                      {BIOTECH_FEATURES[activeTechIndex].title}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-sans italic mt-1 inline-block">
                      {BIOTECH_FEATURES[activeTechIndex].tagline}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 font-sans leading-relaxed pt-1.5 border-t border-pastel-pink/30">
                  {BIOTECH_FEATURES[activeTechIndex].description}
                </p>

                <div className="mt-3 flex items-center justify-between bg-white border border-pastel-pink/30 rounded-lg p-2.5">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider font-sans">Resultado Clínico</span>
                  <span className="text-xs font-serif font-bold text-cherry-rose">{BIOTECH_FEATURES[activeTechIndex].metric}</span>
                </div>
              </div>

              {/* Tabs selecting features */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] text-[#a4133c] uppercase font-bold tracking-widest font-sans">
                  Presiona los paneles para activar capas biotecnológicas:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {BIOTECH_FEATURES.map((feat, idx) => (
                    <button
                      key={`tech-tab-${idx}`}
                      type="button"
                      onClick={() => setActiveTechIndex(idx)}
                      className={`rounded-xl border p-2 text-center transition-all ${
                        activeTechIndex === idx
                          ? "bg-night-bordeaux text-white border-night-bordeaux shadow-md scale-102"
                          : "bg-white text-night-bordeaux/70 border-pastel-pink hover:border-cherry-rose hover:bg-lavender-blush/30"
                      }`}
                    >
                      <span className="block text-[10px] font-bold font-sans tracking-tight">Capara {idx + 1}</span>
                      <span className="block text-[8px] opacity-75 mt-0.5 truncate uppercase">
                        {idx === 0 ? "Nanotech" : idx === 1 ? "Compresión" : "Térmica"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
