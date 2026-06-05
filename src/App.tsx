import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ShieldCheck,
  Compass,
  Check,
  Star,
  ChevronDown,
  MessageSquare,
  Gift,
  Truck,
  RotateCcw
} from "lucide-react";

import { Product, ProductShade, CartItem } from "./types";
import { PRODUCTS, TESTIMONIALS } from "./data";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";
import VipModal from "./components/VipModal";
import RegisterModal from "./components/RegisterModal";

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isVipOpen, setIsVipOpen] = useState(false);
  const [openCardAccordion, setOpenCardAccordion] = useState<number | null>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto trigger a elegant soft welcome toast
  useEffect(() => {
    const timer = setTimeout(() => {
      showToast("✨ Conéctate al Éclat Club desde el menú para recibir 15% OFF");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleAddToCart = (product: Product, shade: ProductShade) => {
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedShade.id === shade.id
      );

      if (existingIdx > -1) {
        const copy = [...prevItems];
        copy[existingIdx].quantity += 1;
        return copy;
      } else {
        return [...prevItems, { product, selectedShade: shade, quantity: 1 }];
      }
    });
    showToast(`🛍️ Añadido ${product.name} en tono "${shade.name}" a tu bolsa.`);
  };

  const handleUpdateQuantity = (id: string, shadeId: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.product.id === id && item.selectedShade.id === shadeId) {
            return { ...item, quantity: Math.max(1, item.quantity + delta) };
          }
          return item;
        })
    );
  };

  const handleRemoveItem = (id: string, shadeId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => !(item.product.id === id && item.selectedShade.id === shadeId))
    );
    showToast("🗑️ Prenda removida de tu bolsa.");
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const CARETIPS = [
    {
      title: "Método Quirúrgico de Lavado",
      desc: "Lava tu prenda preferiblemente a mano utilizando agua fría y jabón PH neutro de glicerina. Evita exprimir agresivamente; retira el exceso de humedad presionando la prenda suavemente entre dos toallas esponjosas de algodón natural."
    },
    {
      title: "Secado Inteligente en Sombra",
      desc: "Extiende de manera horizontal sobre superficies lisas a la sombra, alejada de fuentes directas de radiación térmica (como calentadores o sol de mediodía). No uses ganchos de colgar tradicionales para evitar estiramientos no deseados en la microfibra."
    },
    {
      title: "Almacenaje de Estructura",
      desc: "Conserva tu prenda estirada o doblada suavemente por la mitad dentro de la bolsa de satín que acompaña de origen tu caja Éclat Wear. No la almacenes bajo peso masivo para conservar las propiedades de las varillas con memoria molecular."
    }
  ];

  return (
    <div className="min-h-screen bg-lavender-blush text-night-bordeaux selection:bg-pastel-pink font-sans flex flex-col justify-between">
      
      {/* 1. Navbar */}
      <Navbar
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        onOpenVip={() => setIsVipOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <div id="hero">
          <Hero
            onOpenVip={() => setIsVipOpen(true)}
            onScrollToCatalog={() => handleScrollToSection("collection")}
          />
        </div>

        {/* Brand Core Values Banner */}
        <section className="bg-white border-y border-pastel-pink/60 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center">
              {/* Value 1 */}
              <div className="max-w-xs space-y-2 flex flex-col items-center">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-lavender-blush text-cherry-rose mb-1">
                  <Truck size={18} />
                </div>
                <h5 className="font-serif text-sm font-semibold text-night-bordeaux tracking-wide">Despacho de Cortas</h5>
                <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                  Envío prioritario certificado gratuito en pedidos mayores a $150 USD, empaquetado al vacío en caja de satín.
                </p>
              </div>

              {/* Value 2 */}
              <div className="max-w-xs space-y-2 flex flex-col items-center border-y md:border-y-0 md:border-x border-pastel-pink/50 py-6 md:py-0 md:px-6 w-full">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-lavender-blush text-cherry-rose mb-1">
                  <RotateCcw size={18} />
                </div>
                <h5 className="font-serif text-sm font-semibold text-night-bordeaux tracking-wide">Canje Post-Anatómico</h5>
                <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                  Garantía de primer cambio gratuito si el asesor biométrico determina un desfase de ajuste lumbar de origen.
                </p>
              </div>

              {/* Value 3 */}
              <div className="max-w-xs space-y-2 flex flex-col items-center">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-lavender-blush text-cherry-rose mb-1">
                  <Gift size={18} />
                </div>
                <h5 className="font-serif text-sm font-semibold text-night-bordeaux tracking-wide">Éclat Privé Box</h5>
                <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                  Cada prenda incluye fragancia de lavanda francesa textil y estuche protector contra rayos UV.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Products Section */}
        <section id="collection" className="py-20 bg-lavender-blush/40 scroll-mt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Sec. Header */}
            <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
              <span className="text-[10px] tracking-widest text-[#a4133c] uppercase font-bold font-sans">
                Piezas de Edición Exclusiva
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-night-bordeaux tracking-wide leading-tight">
                Colección <span className="font-medium italic text-cherry-rose">Biotecnológica 2026</span>
              </h2>
              <div className="h-0.5 w-16 bg-cherry-rose mx-auto opacity-70 rounded-full" />
              <p className="text-xs text-gray-500 leading-relaxed font-sans pt-1">
                Explora el balance perfecto entre compresión de alto nivel anatómico e hidratación prolongada de lípidos celulares. Escoge el tono terracota original o nude clásico preferido para mimetizar bajo tu vestimenta.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Intermediate interactive technology Call Out */}
        <section className="bg-gradient-to-r from-night-bordeaux to-[#3d0313] text-white py-14 overflow-hidden relative">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-[9px] font-bold tracking-widest text-pastel-pink uppercase font-sans">
              🔬 Certificación Estética Sostenible
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-wide leading-tight max-w-2xl mx-auto">
              Diseño molecular testeado bajo altos estándares gineco-estéticos
            </h3>
            <p className="text-xs text-white/70 max-w-xl mx-auto leading-relaxed font-sans">
              La compresión que respeta la respiración. Nuestros hilos inteligentes reaccionan mecánicamente al movimiento liberando micropartículas estériles de Vitamina E, evitando sudoraciones pesadas o abrasiones.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsVipOpen(true)}
                className="rounded-xl bg-lavender-blush px-7 py-3 text-xs tracking-widest font-bold text-night-bordeaux uppercase hover:bg-white hover:text-cherry-rose hover:scale-103 transition-all font-sans"
              >
                Medir mi Silueta Ahora
              </button>
            </div>
          </div>
          {/* Subtle back decorative grid vectors */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:16px_16px] [background-image:linear-gradient(to_right,_rgba(255,255,255,0.15)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.15)_1px,_transparent_1px)]" />
        </section>

        {/* 4. Experience Section (Testimoniales & Caretips) */}
        <section id="experience" className="py-20 bg-white scroll-mt-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Testimonials (Left Column) */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest text-cherry-rose uppercase font-bold font-sans">
                    Sello de Confianza VIP
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#590d22] tracking-wide">
                    La Experiencia de Alta Costura
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    Nuestras clientas, médicos dermoestéticos e influyentes editoras de moda opinan sobre el cambio de paradigma de Éclat Wear.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                  {TESTIMONIALS.map((test, tIdx) => (
                    <div
                      key={`test-${tIdx}`}
                      className="rounded-2xl border border-pastel-pink bg-lavender-blush/30 p-5 space-y-4 hover:border-cherry-rose/40 transition-colors shadow-xs"
                    >
                      <div className="flex gap-0.5 text-cherry-rose">
                        {[...Array(test.rating)].map((_, r) => (
                          <Star key={`star-${r}`} size={12} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-xs text-gray-600 font-sans italic leading-relaxed">
                        &ldquo;{test.text}&rdquo;
                      </p>
                      <div className="border-t border-pastel-pink/40 pt-3 flex justify-between items-center text-[10px]">
                        <span className="font-bold text-[#590d22] font-sans">{test.author}</span>
                        <span className="text-gray-400 font-sans italic">{test.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Care Accordions (Right Column) */}
              <div className="lg:col-span-5 rounded-2xl border border-pastel-pink/90 bg-lavender-blush/40 p-6 sm:p-8 space-y-6">
                <div className="space-y-1.5">
                  <span className="text-[10px] tracking-widest text-[#a4133c] uppercase font-bold font-sans">
                    Alta Longevidad
                  </span>
                  <h4 className="font-serif text-xl font-semibold text-night-bordeaux">
                    Cuidado de tus Fibras Activas
                  </h4>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">
                    Nuestros tejidos con nanotecnología molecular requieren tratos moderados. Sigue nuestro ritual para preservar la compresión y lubricación activa por años:
                  </p>
                </div>

                {/* Vertical interactive Accordion elements */}
                <div className="space-y-3 pt-2">
                  {CARETIPS.map((tip, idx) => {
                    const isCurrentOpen = openCardAccordion === idx;
                    return (
                      <div
                        key={`tip-${idx}`}
                        className="rounded-xl border border-pastel-pink bg-white shadow-xs overflow-hidden transition-all duration-300"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenCardAccordion(isCurrentOpen ? null : idx)}
                          className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-lavender-blush/20"
                        >
                          <span className="text-xs font-bold text-night-bordeaux font-sans uppercase tracking-wide">
                            {idx + 1}. {tip.title}
                          </span>
                          <ChevronDown
                            size={14}
                            className={`text-cherry-rose transition-transform duration-300 ${isCurrentOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            isCurrentOpen ? "max-h-36 border-t border-pastel-pink/30 p-4 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                          }`}
                        >
                          <p className="text-xs text-gray-600 font-sans leading-relaxed">
                            {tip.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. CTA Registration Box section */}
        <section className="bg-lavender-blush py-16 border-t border-pastel-pink">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-3xl bg-gradient-to-r from-[#590d22] to-[#a4133c] text-white p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
              {/* Back decoratives */}
              <div className="absolute left-0 bottom-0 h-24 w-24 rounded-full bg-white/5 filter blur-xl" />
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-white/5 filter blur-2xl" />

              <div className="max-w-xl mx-auto space-y-6 relative z-10">
                <span className="text-[10px] tracking-widest text-[#ffccd5] uppercase font-bold font-sans">
                  Invitación al Círculo Interno
                </span>
                <h3 className="font-serif text-3xl font-light tracking-wide leading-tight">
                  Únete al <span className="font-serif italic font-medium text-pastel-pink">Éclat Club VIP</span> hoy mismo
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-sans">
                  No enviamos comunicaciones masivas. Cuentas con la garantía de recibir únicamente informativos de alta tecnología estética y pases prioritarios de preventa privada. Al registrarte te otorgamos un código exclusivo de bienvenida.
                </p>
                <div className="pt-2">
                  <button
                    id="cta-bottom-register"
                    onClick={() => setIsRegisterOpen(true)}
                    className="rounded-xl bg-white text-night-bordeaux px-8 py-3.5 text-xs tracking-widest font-bold uppercase hover:bg-lavender-blush hover:text-cherry-rose hover:scale-103 transition-all font-sans shadow-md"
                  >
                    Activar Código de Membresía (15% OFF)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Floating VIP size consultation simulated WhatsApp bubble */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsVipOpen(true)}
          className="flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-xl hover:bg-[#20ba59] hover:-translate-y-0.5 active:translate-y-0 transition-all font-sans text-xs font-bold uppercase tracking-wider"
          title="Asesoría VIP en Tallas"
        >
          <span className="flex h-2 w-2 rounded-full bg-white animate-ping" />
          <MessageSquare size={16} fill="white" />
          <span className="hidden sm:inline">Asesoría VIP Tallas</span>
        </button>
      </div>

      {/* 6. Footer */}
      <footer className="bg-night-bordeaux text-white border-t border-[#460a1a] pt-14 pb-8 relative z-10 font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#6d162e]">
            
            {/* Box 1 (Brand) */}
            <div className="md:col-span-5 space-y-4">
              <span className="font-serif text-xl font-bold tracking-widest text-[#ffccd5] uppercase block">
                Éclat Wear
              </span>
              <p className="text-xs text-white/75 leading-relaxed max-w-sm">
                Fusión impecable de alta costura parisina e ingeniería nanotecnológica textil, diseñada meticulosamente para esculpir la confianza y el bienestar celular femenino.
              </p>
              {/* Payment methods simulation */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[9px] uppercase font-bold tracking-widest text-pastel-pink block">
                  Métodos de Pago Certificados
                </span>
                <div className="flex items-center gap-2 text-[10px] text-white/50">
                  <div className="bg-white/10 rounded px-2 py-1 select-none font-bold font-mono tracking-widest text-white/80">VISA</div>
                  <div className="bg-white/10 rounded px-2 py-1 select-none font-bold font-mono tracking-widest text-white/80">MASTERCARD</div>
                  <div className="bg-white/10 rounded px-2 py-1 select-none font-bold font-mono tracking-widest text-white/80">AMEX</div>
                </div>
              </div>
            </div>

            {/* Box 2 (Links) */}
            <div className="md:col-span-3 space-y-3.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-pastel-pink block">
                Menú de Boutique
              </span>
              <ul className="space-y-2 text-xs text-white/70">
                <li>
                  <button onClick={() => handleScrollToSection("hero")} className="hover:text-white transition-colors">
                    Inicio y Biotecnología
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection("collection")} className="hover:text-white transition-colors">
                    Colección Completa
                  </button>
                </li>
                <li>
                  <button onClick={() => handleScrollToSection("experience")} className="hover:text-white transition-colors">
                    Experiencia & Opiniones
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsVipOpen(true)} className="hover:text-white transition-colors">
                    Asistente de Tallas
                  </button>
                </li>
              </ul>
            </div>

            {/* Box 3 (Corporate/Tech spec info) */}
            <div className="md:col-span-4 space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-pastel-pink block font-sans">
                Boletín Privado Éclat
              </span>
              <p className="text-xs text-white/70 leading-relaxed">
                Regístrate para recibir convocatorias a desfiles reservados y primicias biotextiles exclusivas.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="rounded-lg bg-white/10 border border-[#781732] px-3 py-2 text-xs text-white outline-none placeholder-white/40 focus:border-pastel-pink flex-1 font-sans"
                />
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="rounded-lg bg-white text-night-bordeaux hover:bg-[#ffccd5] hover:text-cherry-rose px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors font-sans"
                >
                  Unirse
                </button>
              </div>

              {/* Aesthetic Social Medias */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider font-sans"
                  aria-label="Seguir en Instagram"
                >
                  Instagram
                </a>
                <span className="text-white/35">•</span>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider font-sans"
                  aria-label="Seguir en Facebook"
                >
                  Facebook
                </a>
                <span className="text-white/35">•</span>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider font-sans"
                  aria-label="Seguir en TikTok"
                >
                  TikTok
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/45 gap-4">
            <p className="font-sans">
              &copy; {new Date().getFullYear()} Éclat Wear S.A. Todos los derechos reservados.
            </p>
            <p className="font-mono uppercase tracking-widest">
              DISEÑO PREMIUM DE ALTAS FIBRAS MOLDEADORAS
            </p>
          </div>
        </div>
      </footer>

      {/* Floating System-wide Elegant Toast Alerts */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-6 z-40 max-w-sm rounded-xl border border-pastel-pink bg-white p-3.5 shadow-xl flex items-center gap-2 border-l-4 border-l-[#a4133c] text-xs text-[#590d22] font-semibold font-sans font-medium"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Cart drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* VIP sizing advice wizard modal */}
      <VipModal
        isOpen={isVipOpen}
        onClose={() => setIsVipOpen(false)}
      />

      {/* Registration / Newsletter modal */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />

    </div>
  );
}
