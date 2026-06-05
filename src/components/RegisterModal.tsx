import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, Mail, CheckCircle, ShieldCheck } from "lucide-react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-pastel-pink bg-lavender-blush shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-1 text-night-bordeaux/60 hover:bg-[#ffccd5] hover:text-cherry-rose transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="p-6 md:p-8 text-center">
              {!isSuccess ? (
                <>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#ffccd5]/50 text-cherry-rose mb-4">
                    <Sparkles className="h-6 w-6 animate-pulse" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-night-bordeaux tracking-wide">
                    Únete al Éclat Club
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed font-sans">
                    Recibe un <strong>10% OFF inmediato</strong> en tu primera compra, acceso prioritario a colecciones limitadas y consultoría antropométrica personalizada de por vida.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
                    <div>
                      <label className="block text-[11px] font-bold text-night-bordeaux/80 uppercase tracking-widest font-sans" htmlFor="user-name">
                        Nombre de pila
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        placeholder="Ej: Sophia"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-pastel-pink bg-white px-4 py-2.5 text-sm text-night-bordeaux outline-none focus:border-cherry-rose focus:ring-1 focus:ring-cherry-rose font-sans"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-night-bordeaux/80 uppercase tracking-widest font-sans" htmlFor="user-email">
                        Correo Privado
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        placeholder="sophia@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-pastel-pink bg-white px-4 py-2.5 text-sm text-night-bordeaux outline-none focus:border-cherry-rose focus:ring-1 focus:ring-cherry-rose font-sans"
                        required
                      />
                    </div>

                    <button
                      id="btn-confirm-joining"
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-night-bordeaux py-3 text-xs tracking-widest font-semibold text-white uppercase transition-all duration-300 hover:bg-cherry-rose hover:shadow-md disabled:bg-night-bordeaux/50 font-sans"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Verificando acceso...
                        </>
                      ) : (
                        <>
                          <Mail size={14} />
                          Solicitar Membrecía VIP
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-sans">
                    <ShieldCheck size={12} className="text-cherry-rose" />
                    Tratamiento altamente confidencial de datos
                  </div>
                </>
              ) : (
                <div className="space-y-4 py-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-[#20ba59] mb-4">
                    <CheckCircle className="h-8 w-8 animate-bounce" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-night-bordeaux tracking-wide">
                    ¡Bienvenida, {name}!
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Felicidades, tu membresía privada al **Éclat Club** ha sido activada con éxito.
                  </p>

                  <div className="rounded-xl bg-white border border-pastel-pink p-4 my-2">
                    <p className="text-[10px] uppercase font-bold text-cherry-rose tracking-widest font-sans">
                      Tu Código de Bienvenida Elite
                    </p>
                    <p className="mt-1 font-mono text-xl font-bold tracking-widest text-night-bordeaux">
                      ECLATVIP
                    </p>
                    <p className="mt-1 text-[10px] text-gray-400 font-sans">
                      Ingresa este código en tu bolsa de compras para recibir un **15% de descuento** premium en tu primer pedido.
                    </p>
                  </div>

                  <button
                    id="btn-close-membership-success"
                    onClick={onClose}
                    className="w-full rounded-xl bg-night-bordeaux py-2.5 text-xs tracking-wider font-semibold text-white uppercase hover:bg-cherry-rose transition-colors"
                  >
                    Explorar Colección
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
