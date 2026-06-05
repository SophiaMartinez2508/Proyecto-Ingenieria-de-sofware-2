import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, Plus, Minus, Trash2, Ticket, Lock, Sparkles } from "lucide-react";
import { CartItem } from "../types";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, shadeId: string, delta: number) => void;
  onRemoveItem: (id: string, shadeId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [coupon, setCoupon] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [couponError, setCouponError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountRate = discountApplied ? 0.15 : 0.0;
  const discountAmount = subtotal * discountRate;
  const delivery = subtotal > 150 || subtotal === 0 ? "Gratis (Exclusivo)" : "$12.00";
  const deliveryCostNum = subtotal > 150 || subtotal === 0 ? 0 : 12;
  const total = subtotal - discountAmount + deliveryCostNum;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === "ECLATVIP") {
      setDiscountApplied(true);
      setCouponError("");
    } else {
      setCouponError("Código inválido. Intenta con ECLATVIP");
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate payment gateway loading
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 2000);
  };

  const handleCloseSuccess = () => {
    setCheckoutComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-night-bordeaux mix-blend-multiply"
          />

          {/* Sidebar Drawer Container */}
          <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="w-screen max-w-md border-l border-pastel-pink bg-lavender-blush shadow-2xl flex flex-col h-full"
            >
              {/* Header */}
              <div className="px-6 py-5 bg-gradient-to-r from-night-bordeaux to-[#3d0313] text-white flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={20} className="text-pastel-pink" />
                  <h3 className="font-serif text-lg font-medium tracking-wide">Tu Bolsa Singular</h3>
                  <span className="rounded-full bg-cherry-rose px-2.5 py-0.5 text-xs text-white font-sans font-semibold">
                    {cartItems.reduce((acc, current) => acc + current.quantity, 0)}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-1 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Cerrar bolsa"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {checkoutComplete ? (
                  <div className="text-center py-12 px-4 space-y-5">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cherry-rose/10 text-cherry-rose">
                      <Sparkles className="h-8 w-8 animate-spin" />
                    </div>
                    <span className="text-[10px] tracking-widest text-[#a4133c] uppercase font-bold font-sans">
                      Éclat Wear - Pedido Recibido
                    </span>
                    <h4 className="font-serif text-2xl font-semibold text-night-bordeaux">
                      Silueta en Preparación
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans max-w-xs mx-auto">
                      Gracias por depositar tu confianza en nuestra biotecnología. Tu pedido de alta costura ha sido retenido de inmediato con prioridad privada. Un especialista te enviará la guía de envío por correo en los siguientes minutos.
                    </p>

                    <div className="rounded-xl bg-white border border-pastel-pink p-4 space-y-2 text-left shadow-sm">
                      <div className="flex justify-between text-xs font-sans">
                        <span className="text-gray-400">Código de Despacho:</span>
                        <span className="font-mono font-bold text-night-bordeaux">EC-2026-9871</span>
                      </div>
                      <div className="flex justify-between text-xs font-sans border-t border-gray-100 pt-1.5">
                        <span className="text-gray-400">Método de Enlace:</span>
                        <span className="text-gray-700 font-semibold">Servicio Éclat Club</span>
                      </div>
                      <div className="flex justify-between text-xs font-sans border-t border-gray-100 pt-1.5">
                        <span className="text-gray-400">Estatus:</span>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] uppercase font-bold font-sans">
                          Sincronizado a Java
                        </span>
                      </div>
                    </div>

                    <button
                      id="btn-close-checkout-success"
                      onClick={handleCloseSuccess}
                      className="w-full rounded-xl bg-night-bordeaux py-3 text-xs tracking-wider font-semibold text-white uppercase shadow-md hover:bg-cherry-rose transition-colors font-sans"
                    >
                      Continuar Descubriendo
                    </button>
                  </div>
                ) : cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <div className="rounded-full bg-white/60 p-6 border border-pastel-pink/60">
                      <ShoppingBag size={48} className="text-[#a4133c]/30" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-night-bordeaux">Bolsa de Compras Vacía</h4>
                      <p className="text-xs text-gray-500 mt-1 max-w-xs leading-relaxed font-sans">
                        La alta biotecnología moldeadora aguarda. Explora nuestra exclusiva colección y añade prendas que estilizan cada aspecto de tu figura con sutileza.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-1 text-xs font-bold text-cherry-rose uppercase tracking-wider hover:underline font-sans"
                    >
                      Ver Catálogo de Lujo
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <span className="text-[10px] tracking-widest text-[#a4133c] uppercase font-bold font-sans">
                      Artículos Seleccionados
                    </span>

                    {/* Cart Items List */}
                    <div className="space-y-3.5">
                      {cartItems.map((item, index) => (
                        <div
                          key={`cart-${item.product.id}-${item.selectedShade.id}-${index}`}
                          className="flex gap-3.5 rounded-xl border border-pastel-pink bg-white p-3 shadow-sm relative group overflow-hidden"
                        >
                          <img
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            className="h-16 w-16 rounded-lg object-cover border border-pastel-pink/40"
                          />
                          <div className="flex-1 min-w-0 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start gap-1">
                                <h5 className="font-serif text-sm font-semibold text-night-bordeaux truncate">
                                  {item.product.name}
                                </h5>
                                <button
                                  onClick={() => onRemoveItem(item.product.id, item.selectedShade.id)}
                                  className="text-gray-400 hover:text-cherry-rose transition-colors"
                                  aria-label="Eliminar artículo"
                                >
                                  <Trash2 size={13} />
                                </button>
                              </div>
                              <p className="text-[10px] text-gray-400 font-sans truncate">
                                {item.product.technology}
                              </p>
                              {/* Shade Indicator */}
                              <div className="flex items-center gap-1.5 mt-1">
                                <span
                                  className={`h-2.5 w-2.5 rounded-full border border-gray-300 ${item.selectedShade.className}`}
                                />
                                <span className="text-[10px] text-gray-500 font-sans">
                                  {item.selectedShade.name}
                                </span>
                              </div>
                            </div>

                            {/* Quantities & Price */}
                            <div className="flex justify-between items-end mt-2">
                              {/* Quantity selectors */}
                              <div className="flex items-center border border-pastel-pink/70 rounded-lg bg-lavender-blush overflow-hidden">
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.selectedShade.id, -1)}
                                  disabled={item.quantity <= 1}
                                  className="px-2 py-1 hover:bg-pastel-pink/40 text-night-bordeaux disabled:opacity-40 transition-colors"
                                  aria-label="Restar uno"
                                >
                                  <Minus size={10} />
                                </button>
                                <span className="px-2 text-xs font-semibold text-night-bordeaux font-sans">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.selectedShade.id, 1)}
                                  className="px-2 py-1 hover:bg-pastel-pink/40 text-night-bordeaux transition-colors"
                                  aria-label="Sumar uno"
                                >
                                  <Plus size={10} />
                                </button>
                              </div>

                              <span className="font-serif font-bold text-sm text-night-bordeaux">
                                ${item.product.price * item.quantity} USD
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Interactive Promo Coupon Input */}
                    <div className="border-t border-dashed border-pastel-pink pt-4">
                      <form onSubmit={handleApplyCoupon} className="flex gap-2">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            placeholder="Introduce ECLATVIP"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            disabled={discountApplied}
                            className="w-full rounded-lg border border-pastel-pink bg-white px-3 py-2 text-xs uppercase text-night-bordeaux outline-none placeholder-gray-400 focus:border-cherry-rose font-sans font-medium"
                          />
                          {discountApplied && (
                            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-green-600 font-sans">
                              Activo
                            </span>
                          )}
                        </div>
                        <button
                          type="submit"
                          disabled={discountApplied || !coupon}
                          className="rounded-lg bg-night-bordeaux px-4 py-2 text-xs font-semibold uppercase text-white hover:bg-cherry-rose disabled:bg-gray-200 disabled:text-gray-400 font-sans tracking-wide transition-colors"
                        >
                          Aplicar
                        </button>
                      </form>
                      {couponError && (
                        <p className="mt-1 text-[10px] text-cherry-rose font-sans font-medium">
                          {couponError}
                        </p>
                      )}
                      {discountApplied && (
                        <p className="mt-1 text-[10px] text-green-600 font-sans font-semibold flex items-center gap-1">
                          <Ticket size={10} /> ¡Felicidades! Código de Éclat Club aplicado con éxito (15% OFF).
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Checkout Footer block */}
              {!checkoutComplete && cartItems.length > 0 && (
                <div className="border-t border-pastel-pink bg-white p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-gray-500">Subtotal de prendas</span>
                      <span className="font-semibold text-night-bordeaux">${subtotal}.00 USD</span>
                    </div>

                    {discountApplied && (
                      <div className="flex justify-between text-xs font-sans text-green-600">
                        <span>Descuento Éclat Club (15%)</span>
                        <span className="font-semibold">-${discountAmount.toFixed(2)} USD</span>
                      </div>
                    )}

                    <div className="flex justify-between text-xs font-sans">
                      <span className="text-gray-500">Envío Certificado</span>
                      <span className="font-semibold text-night-bordeaux">{delivery}</span>
                    </div>

                    <div className="border-t border-gray-100 my-2 pt-2 flex justify-between text-base font-serif">
                      <span className="font-bold text-night-bordeaux">Total Estimado</span>
                      <span className="font-bold text-cherry-rose">${total.toFixed(2)} USD</span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <button
                      id="btn-trigger-checkout"
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="w-full rounded-xl bg-night-bordeaux py-3.5 text-xs font-bold tracking-widest text-white uppercase shadow-md transition-all duration-300 hover:bg-cherry-rose hover:shadow-lg disabled:opacity-75 flex items-center justify-center gap-2 font-sans"
                    >
                      {isCheckingOut ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Procesando Conexión...
                        </>
                      ) : (
                        <>
                          <Lock size={12} className="text-pastel-pink" />
                          Finalizar Pedido Exclusivo
                        </>
                      )}
                    </button>

                    <p className="text-center text-[10px] text-gray-400 font-sans flex items-center justify-center gap-1">
                      🔒 Encriptación RSA 256 bits y Biometria Integrada.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
