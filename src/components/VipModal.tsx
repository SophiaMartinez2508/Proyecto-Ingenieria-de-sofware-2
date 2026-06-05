import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Ruler, Sparkles, X, MessageSquare, ArrowRight, Heart, Check } from "lucide-react";

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VipModal({ isOpen, onClose }: VipModalProps) {
  const [step, setStep] = useState<"input" | "calculating" | "result">("input");
  const [waist, setWaist] = useState<string>("");
  const [hips, setHips] = useState<string>("");
  const [bust, setBust] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [calculatedSize, setCalculatedSize] = useState<{ size: string; roman: string; description: string }>({
    size: "S",
    roman: "I",
    description: "Ideal para moldeo de cintura alta y compresión invisible sutil diaria."
  });

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const wNum = parseFloat(waist);
    const hNum = parseFloat(hips);
    const bNum = parseFloat(bust);

    if (isNaN(wNum) || isNaN(hNum) || isNaN(bNum) || wNum <= 0 || hNum <= 0 || bNum <= 0) {
      setErrorMessage("Por favor, introduce medidas válidas mayores a cero.");
      return;
    }

    setErrorMessage("");
    setStep("calculating");

    // Simulate luxury biotech diagnostic scan
    setTimeout(() => {
      let size = "S";
      let roman = "I";
      let desc = "Ideal para optimizar curvas moderadas y uso invisible diario bajo costuras ligeras.";

      if (wNum < 65 && hNum < 95) {
        size = "XS";
        roman = "0";
        desc = "Perfecto para siluetas de alta definición, ofreciendo una firmeza ultraligera y respiración celular completa.";
      } else if (wNum >= 65 && wNum <= 72 && hNum >= 95 && hNum <= 102) {
        size = "S";
        roman = "I";
        desc = "Moldeo preciso para contornos clásicos, activando la firmeza térmica pasiva alrededor del talle medio.";
      } else if (wNum >= 73 && wNum <= 80 && hNum >= 103 && hNum <= 110) {
        size = "M";
        roman = "II";
        desc = "Compresión equilibrada de alta ingeniería que reorganiza las curvas del abdomen lumbosacro cómodamente.";
      } else if (wNum >= 81 && wNum <= 88 && hNum >= 111 && hNum <= 118) {
        size = "L";
        roman = "III";
        desc = "Diseño optimizado para un soporte postural lumbar de élite y remodelación intensiva con micro-lípidos hidratantes.";
      } else if (wNum >= 89 && wNum <= 98 && hNum >= 119 && hNum <= 128) {
        size = "XL";
        roman = "IV";
        desc = "Refuerzo abdominal triple capa con alta transpirabilidad molecular para eventos y largas jornadas corporativas.";
      } else {
        size = "XXL";
        roman = "V";
        desc = "Soporte envolvente total y modelado ergonómico activo con máxima comodidad biomédica de uso diurno.";
      }

      setCalculatedSize({ size, roman, description: desc });
      setStep("result");
    }, 1800);
  };

  const resetForm = () => {
    setWaist("");
    setHips("");
    setBust("");
    setStep("input");
    setErrorMessage("");
  };

  const getWhatsAppLink = () => {
    const text = `Hola Éclat Wear, he utilizado el Asesor Biométrico VIP en su sitio web. Mis medidas son: Busto ${bust} cm, Cintura ${waist} cm y Cadera ${hips} cm. Mi talla de modelado sugerida es Éclat ${calculatedSize.size} (Talla de Autor: ${calculatedSize.roman}). Quisiera ponerme en contacto con una asesora estética especialista para finalizar mi pedido.`;
    return `https://wa.me/34600000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#3d0313] mix-blend-multiply"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-pastel-pink bg-lavender-blush shadow-2xl"
            id="vip-modal-box"
          >
            {/* Top design header */}
            <div className="bg-gradient-to-r from-night-bordeaux to-cherry-rose px-6 py-5 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Ruler className="text-pastel-pink h-4.5 w-4.5" />
                </div>
                <span className="font-sans text-xs tracking-widest text-[#ffccd5] uppercase font-semibold">Tecnología Éclat</span>
              </div>
              <h3 className="mt-1 font-serif text-2xl tracking-wide font-medium">Asesor Biométrico de Tallas VIP</h3>
              <p className="mt-1 text-xs text-white/80 font-sans">
                Algoritmo estético calibrado para el esculpido perfecto de la silueta femenina.
              </p>
            </div>

            <div className="p-6 md:p-8">
              {step === "input" && (
                <form onSubmit={handleCalculate} className="space-y-5">
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Para recomendarte la prenda de control adecuada que estilice tu figura con máxima comodidad y transpirabilidad, ingresa tus medidas exactas de pie y sin prendas anchas:
                  </p>

                  {errorMessage && (
                    <div className="rounded-lg bg-red-100 p-3 text-xs text-cherry-rose font-medium font-sans">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Input Bust */}
                    <div>
                      <div className="flex justify-between">
                        <label className="block text-xs font-semibold text-night-bordeaux font-sans" htmlFor="vip-bust">
                          1. Contorno de Busto (cm)
                        </label>
                        <span className="text-[10px] text-gray-400 font-sans">Zona más prominente</span>
                      </div>
                      <div className="relative mt-1">
                        <input
                          id="vip-bust"
                          type="number"
                          placeholder="Ej: 90"
                          value={bust}
                          onChange={(e) => setBust(e.target.value)}
                          className="w-full rounded-xl border border-pastel-pink bg-white px-4 py-2.5 text-sm text-night-bordeaux outline-none focus:border-cherry-rose focus:ring-1 focus:ring-cherry-rose font-sans"
                          required
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-sans">cm</span>
                      </div>
                    </div>

                    {/* Input Waist */}
                    <div>
                      <div className="flex justify-between">
                        <label className="block text-xs font-semibold text-night-bordeaux font-sans" htmlFor="vip-waist">
                          2. Contorno de Cintura (cm)
                        </label>
                        <span className="text-[10px] text-gray-400 font-sans">4 cm sobre el ombligo</span>
                      </div>
                      <div className="relative mt-1">
                        <input
                          id="vip-waist"
                          type="number"
                          placeholder="Ej: 68"
                          value={waist}
                          onChange={(e) => setWaist(e.target.value)}
                          className="w-full rounded-xl border border-pastel-pink bg-white px-4 py-2.5 text-sm text-night-bordeaux outline-none focus:border-cherry-rose focus:ring-1 focus:ring-cherry-rose font-sans"
                          required
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-sans">cm</span>
                      </div>
                    </div>

                    {/* Input Hips */}
                    <div>
                      <div className="flex justify-between">
                        <label className="block text-xs font-semibold text-night-bordeaux font-sans" htmlFor="vip-hips">
                          3. Contorno de Cadera (cm)
                        </label>
                        <span className="text-[10px] text-gray-400 font-sans">Zona más ancha de los glúteos</span>
                      </div>
                      <div className="relative mt-1">
                        <input
                          id="vip-hips"
                          type="number"
                          placeholder="Ej: 98"
                          value={hips}
                          onChange={(e) => setHips(e.target.value)}
                          className="w-full rounded-xl border border-pastel-pink bg-white px-4 py-2.5 text-sm text-night-bordeaux outline-none focus:border-cherry-rose focus:ring-1 focus:ring-cherry-rose font-sans"
                          required
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-sans">cm</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      id="btn-calculate-size"
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-night-bordeaux py-3 text-xs tracking-wider font-semibold text-white uppercase shadow-md transition-all duration-300 hover:bg-cherry-rose hover:shadow-lg active:scale-95"
                    >
                      <Sparkles size={14} className="animate-spin text-pastel-pink" />
                      Analizar Anatomía Estética
                    </button>
                  </div>
                </form>
              )}

              {step === "calculating" && (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border-4 border-pastel-pink/30" />
                    <div className="absolute inset-0 rounded-full border-4 border-t-cherry-rose border-l-night-bordeaux animate-spin" />
                    <Heart size={32} className="text-cherry-rose animate-pulse" />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-night-bordeaux">Escaneando Proporciones</h4>
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-gray-500 font-sans">Calculando mapa de compresión milimétrica...</p>
                    <p className="text-[10px] text-cherry-rose font-mono animate-pulse uppercase tracking-wider">
                      Biomembrane index: ACTIVE
                    </p>
                  </div>
                </div>
              )}

              {step === "result" && (
                <div className="space-y-6">
                  {/* Result Card */}
                  <div className="rounded-2xl border border-pastel-pink bg-white p-5 text-center shadow-sm">
                    <span className="text-[10px] tracking-widest text-[#a4133c] uppercase font-bold font-sans">
                      Tu Prescripción de Alta Costura
                    </span>
                    <div className="mt-2 flex items-baseline justify-center gap-2">
                      <span className="font-serif text-5xl font-bold text-night-bordeaux">{calculatedSize.size}</span>
                      <span className="text-lg font-serif text-gray-400 italic">Éclat Talla {calculatedSize.roman}</span>
                    </div>

                    <div className="mt-4 border-t border-dashed border-pastel-pink pt-4">
                      <p className="text-xs text-gray-700 italic leading-relaxed font-sans">
                        &ldquo;{calculatedSize.description}&rdquo;
                      </p>
                    </div>

                    {/* Sizing confirmation badges */}
                    <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-lavender-blush px-3 py-1 text-[10px] font-semibold text-cherry-rose font-sans">
                        <Check size={10} /> Ajuste Cero Pliegues
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-lavender-blush px-3 py-1 text-[10px] font-semibold text-cherry-rose font-sans">
                        <Check size={10} /> Respirabilidad Activa
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-center text-xs text-gray-600 font-sans">
                      ¿Quieres asegurar un ajuste perfecto? Envía estas medidas instantáneamente a nuestra especialista de élite en tallas vía WhatsApp:
                    </p>

                    <a
                      id="btn-vip-whatsapp-redirect"
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] py-3.5 text-xs tracking-wider font-semibold text-white uppercase shadow-md hover:bg-[#20ba59] transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <MessageSquare size={16} fill="white" />
                      Iniciar Asesoría VIP por WhatsApp
                    </a>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="flex w-full items-center justify-center gap-1.5 py-2 text-xs font-medium text-night-bordeaux/70 hover:text-night-bordeaux font-sans"
                    >
                      Recalcular medidas
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
