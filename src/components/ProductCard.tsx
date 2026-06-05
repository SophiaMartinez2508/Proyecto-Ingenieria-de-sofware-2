import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Eye, Check, ShoppingBag } from "lucide-react";
import { Product, ProductShade } from "../types";

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onAddToCart: (product: Product, shade: ProductShade) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedShade, setSelectedShade] = useState<ProductShade>(product.shades[0]);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedShade);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <>
      <motion.div
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-pastel-pink bg-white shadow-md hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -6 }}
        id={`product-card-${product.id}`}
      >
        {/* Tag Label */}
        {product.tag && (
          <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-night-bordeaux px-3 py-1 text-[10px] tracking-wider uppercase font-semibold text-white shadow-sm font-sans">
            {product.tag}
          </span>
        )}

        {/* Quick View Trigger on Hover */}
        <div className="absolute right-3.5 top-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsQuickViewOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-night-bordeaux shadow border border-pastel-pink/50 hover:bg-cherry-rose hover:text-white transition-all scale-95 hover:scale-105"
            title="Vista Rápida"
            aria-label={`Vista rápida de ${product.name}`}
          >
            <Eye size={15} />
          </button>
        </div>

        {/* Image Frame */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#fff5f6]" onClick={() => setIsQuickViewOpen(true)}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle tech grid scanning texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-40" />

          {/* Technology Ribbon Overlay */}
          <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/75 backdrop-blur-xs px-3 py-1.5 border border-white/20">
            <span className="text-[9px] uppercase font-bold text-cherry-rose font-mono tracking-widest block">
              Biotecnología Activa
            </span>
            <span className="text-[11px] font-semibold text-night-bordeaux font-sans block truncate">
              {product.technology}
            </span>
          </div>
        </div>

        {/* Info Block */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div className="space-y-1">
            <h4
              className="font-serif text-base font-semibold text-night-bordeaux leading-snug cursor-pointer hover:text-cherry-rose transition-colors"
              onClick={() => setIsQuickViewOpen(true)}
            >
              {product.name}
            </h4>
            <p className="text-xs text-gray-500 font-sans line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-pastel-pink/30 space-y-4">
            {/* Color Shade circles container */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-sans">
                Tono: <strong className="text-night-bordeaux/90">{selectedShade.name}</strong>
              </span>

              {/* Circles mapping */}
              <div className="flex items-center gap-1.5">
                {product.shades.map((shade) => (
                  <button
                    key={`${product.id}-shade-${shade.id}`}
                    type="button"
                    onClick={() => setSelectedShade(shade)}
                    className={`h-4.5 w-4.5 rounded-full border-1.5 transition-all ${
                      selectedShade.id === shade.id
                        ? "border-cherry-rose scale-115 ring-2 ring-pastel-pink"
                        : "border-gray-200 hover:scale-110"
                    }`}
                    style={{ backgroundColor: shade.hex }}
                    title={shade.name}
                    aria-label={`Seleccionar tono ${shade.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Price & CTA buy button */}
            <div className="flex items-center justify-between pt-1">
              <div>
                <span className="font-serif text-lg font-bold text-night-bordeaux leading-none">
                  ${product.price}.00 USD
                </span>
                {product.originalPrice && (
                  <span className="ml-1.5 font-sans font-medium text-xs text-gray-400 line-through">
                    ${product.originalPrice}.00
                  </span>
                )}
              </div>

              <button
                id={`btn-add-to-cart-${product.id}`}
                onClick={handleAddToCartClick}
                className={`group relative overflow-hidden rounded-xl bg-night-bordeaux px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase shadow transition-all duration-300 hover:bg-cherry-rose hover:shadow-md ${
                  addedAnimation ? "bg-green-600 hover:bg-green-600" : ""
                }`}
                aria-label={`Añadir ${product.name} al carrito`}
              >
                <span className="flex items-center gap-1.5 font-sans">
                  {addedAnimation ? (
                    <>
                      <Check size={12} className="text-white" />
                      Añadido
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={11} className="text-pastel-pink" />
                      Añadir
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick View Dialog / Modal Overlay */}
      <AnimatePresence>
        {isQuickViewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuickViewOpen(false)}
              className="absolute inset-0 bg-night-bordeaux mix-blend-multiply"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-pastel-pink bg-lavender-blush shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setIsQuickViewOpen(false)}
                className="absolute top-4 right-4 z-20 rounded-full p-1.5 bg-white/80 text-night-bordeaux shadow hover:bg-cherry-rose hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <X icon-size="wide" size={16} />
              </button>

              {/* Photo Pane */}
              <div className="w-full md:w-1/2 relative bg-[#fff5f6] h-64 md:h-auto min-h-[300px]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase font-semibold text-pastel-pink tracking-widest font-mono">
                    Ingeniería Moldeadora
                  </span>
                  <h5 className="font-serif text-lg font-bold tracking-wide mt-1 leading-tight">
                    {product.name}
                  </h5>
                </div>
              </div>

              {/* Detail Content Pane */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-pastel-pink/50 px-3 py-1 text-[11px] font-semibold text-cherry-rose font-sans">
                      <Sparkles size={11} /> {product.technology}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-night-bordeaux mt-2">
                      Fórmula de Alta Tecnología
                    </h4>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[10px] tracking-widest text-[#a4133c] uppercase font-bold font-sans block">
                      Beneficios Bioclínicos
                    </span>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, bIdx) => (
                        <li key={`benefit-${bIdx}`} className="flex gap-2 text-xs text-gray-700 font-sans">
                          <Check size={14} className="text-cherry-rose shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Shades and selection */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] tracking-widest text-gray-400 uppercase font-sans block">
                      Tonificación seleccionada: <strong className="text-night-bordeaux">{selectedShade.name}</strong>
                    </span>
                    <div className="flex gap-2">
                      {product.shades.map((shade) => (
                        <button
                          key={`qv-shade-${shade.id}`}
                          onClick={() => setSelectedShade(shade)}
                          className={`h-7 w-7 rounded-full border-2 transition-all flex items-center justify-center ${
                            selectedShade.id === shade.id
                              ? "border-cherry-rose scale-110"
                              : "border-gray-200 hover:border-pastel-pink"
                          }`}
                          style={{ backgroundColor: shade.hex }}
                          title={shade.name}
                        >
                          {selectedShade.id === shade.id && (
                            <div className="h-1.5 w-1.5 rounded-full bg-white mix-blend-difference" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-pastel-pink flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-gray-400 font-sans block uppercase">Precio Exclusivo</span>
                    <span className="font-serif text-2xl font-bold text-night-bordeaux">${product.price}.00 USD</span>
                  </div>

                  <button
                    id={`btn-qv-add-to-cart-${product.id}`}
                    onClick={(e) => {
                      handleAddToCartClick(e);
                      setTimeout(() => setIsQuickViewOpen(false), 500);
                    }}
                    className="flex-1 rounded-xl bg-night-bordeaux py-3 text-xs tracking-wider font-semibold text-white uppercase shadow hover:bg-cherry-rose transition-colors flex items-center justify-center gap-1.5 font-sans"
                  >
                    <ShoppingBag size={12} />
                    Añadir a la Bolsa
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

// Inline fallback for missing X icon if any
import { LineChart as X_Icon } from "lucide-react";
const X = ({ "icon-size": is, size }: { "icon-size"?: string, size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
