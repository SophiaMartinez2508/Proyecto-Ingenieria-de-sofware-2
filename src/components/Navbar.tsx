import { useState } from "react";
import { ShoppingBag, Search, Menu, X, Sparkles, HelpCircle } from "lucide-react";
import { CartItem } from "../types";

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenRegister: () => void;
  onOpenVip: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({
  cartItems,
  onOpenCart,
  onOpenRegister,
  onOpenVip,
  onScrollToSection,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = cartItems.reduce((acc, current) => acc + current.quantity, 0);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-pastel-pink bg-lavender-blush/80 backdrop-blur-md shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Group */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onScrollToSection("hero")}>
              <span className="font-serif text-2xl font-bold tracking-widest text-[#590d22] hover:text-[#a4133c] transition-colors uppercase">
                Éclat Wear
              </span>
              <div className="hidden sm:block h-2.5 w-2.5 rounded-full bg-cherry-rose pulsate-subtle" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                id="nav-link-inicio"
                onClick={() => onScrollToSection("hero")}
                className="text-xs font-semibold tracking-widest text-night-bordeaux/80 uppercase hover:text-cherry-rose transition-colors font-sans"
              >
                Inicio
              </button>
              <button
                id="nav-link-coleccion"
                onClick={() => onScrollToSection("collection")}
                className="text-xs font-semibold tracking-widest text-night-bordeaux/80 uppercase hover:text-cherry-rose transition-colors font-sans"
              >
                Colección
              </button>
              <button
                id="nav-link-experiencia"
                onClick={() => onScrollToSection("experience")}
                className="text-xs font-semibold tracking-widest text-night-bordeaux/80 uppercase hover:text-cherry-rose transition-colors font-sans"
              >
                Experiencia
              </button>
              <button
                id="nav-link-registro"
                onClick={onOpenRegister}
                className="text-xs font-bold tracking-widest text-cherry-rose uppercase bg-[#ffccd5]/50 border border-pastel-pink rounded-full px-4 py-1.5 hover:bg-[#ffccd5] hover:text-night-bordeaux transition-all font-sans flex items-center gap-1.5"
              >
                <Sparkles size={11} className="animate-spin text-cherry-rose" />
                Unirse / Registro
              </button>
            </div>

            {/* Icons Group */}
            <div className="flex items-center space-x-4">
              {/* Size helper shortcut */}
              <button
                onClick={onOpenVip}
                className="text-night-bordeaux hover:text-cherry-rose transition-colors p-1.5 rounded-full hover:bg-pastel-pink/30 flex items-center gap-1"
                title="Saber mi talla"
                aria-label="Asistente de tallas"
              >
                <span className="hidden lg:inline text-[10px] font-bold uppercase tracking-wider font-sans text-night-bordeaux/80">Talla VIP</span>
                <div className="h-5 w-5 rounded-full bg-cherry-rose text-white text-[9px] font-bold flex items-center justify-center font-sans tracking-wide">
                  VIP
                </div>
              </button>

              {/* Search button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-night-bordeaux hover:text-cherry-rose transition-colors p-2 rounded-full hover:bg-pastel-pink/30"
                aria-label="Buscar producto"
              >
                <Search size={18} />
              </button>

              {/* Shopping Bag with badge */}
              <button
                onClick={onOpenCart}
                className="relative text-night-bordeaux hover:text-cherry-rose transition-all p-2 rounded-full hover:bg-pastel-pink/30"
                aria-label="Abrir bolsa de compras"
              >
                <ShoppingBag size={19} />
                {cartCount >= 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-cherry-rose text-[9px] font-bold text-white shadow font-sans">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger Mobile Menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-night-bordeaux hover:text-cherry-rose hover:bg-pastel-pink/30 p-2 rounded-full md:hidden transition-colors"
                aria-label="Abrir menú móvil"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-pastel-pink bg-lavender-blush px-4 py-5 space-y-4 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick("hero")}
                className="text-left px-3 py-2 text-xs font-semibold tracking-wider text-night-bordeaux uppercase hover:bg-pastel-pink/30 rounded-lg transition-colors font-sans"
              >
                Inicio
              </button>
              <button
                onClick={() => handleNavClick("collection")}
                className="text-left px-3 py-2 text-xs font-semibold tracking-wider text-night-bordeaux uppercase hover:bg-pastel-pink/30 rounded-lg transition-colors font-sans"
              >
                Colección
              </button>
              <button
                onClick={() => handleNavClick("experience")}
                className="text-left px-3 py-2 text-xs font-semibold tracking-wider text-night-bordeaux uppercase hover:bg-pastel-pink/30 rounded-lg transition-colors font-sans"
              >
                Experiencia
              </button>
            </div>

            <div className="border-t border-pastel-pink/50 pt-4 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenVip();
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-lavender-blush border border-pastel-pink py-2.5 text-xs font-bold uppercase text-night-bordeaux tracking-wider font-sans hover:bg-pastel-pink/50"
              >
                Asistente de Talla VIP
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-night-bordeaux py-2.5 text-xs font-bold uppercase text-white tracking-wider font-sans hover:bg-cherry-rose transition-colors"
              >
                <Sparkles size={11} className="text-pastel-pink" />
                Unirse / Registro
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Elegant Search Panel Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-start justify-center pt-24 p-4">
          <div
            onClick={() => setIsSearchOpen(false)}
            className="absolute inset-0 bg-night-bordeaux/40 backdrop-blur-xs"
          />

          <div className="relative w-full max-w-xl rounded-2xl border border-pastel-pink bg-lavender-blush p-4 shadow-xl flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b border-pastel-pink pb-2.5">
              <Search size={18} className="text-[#a4133c]" />
              <input
                type="text"
                placeholder="Busca por 'Body', 'Corset', 'Legging', 'Seda'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-night-bordeaux outline-none placeholder-gray-400 font-sans"
                autoFocus
              />
              <button
                onClick={() => {
                  setSearchQuery("");
                  setIsSearchOpen(false);
                }}
                className="rounded-full p-1 text-gray-400 hover:text-cherry-rose"
              >
                <X size={16} />
              </button>
            </div>

            {/* Quick Suggestions */}
            <div>
              <span className="text-[10px] tracking-widest text-[#a4133c] uppercase font-bold font-sans">
                Búsquedas Sugeridas
              </span>
              <div className="mt-2 flex flex-wrap gap-2 text-xs font-sans">
                {["Body Éclat Absolu", "Nanotecnología", "Corset Biologique", "Legging Hydra-Éclat"].map((sug) => (
                  <button
                    key={`search-sug-${sug}`}
                    onClick={() => {
                      setSearchQuery(sug);
                      // SImulate scroll or prompt
                    }}
                    className="rounded-full bg-white border border-pastel-pink px-3 py-1 text-night-bordeaux hover:border-cherry-rose hover:text-cherry-rose transition-colors"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>

            {/* Results block */}
            {searchQuery && (
              <div className="bg-white border border-pastel-pink rounded-xl p-3 max-h-48 overflow-y-auto space-y-2">
                <p className="text-[10px] text-gray-400 font-sans uppercase">
                  Coincidencias en Catálogo
                </p>
                {["eclat-absolu-body", "corset-biologique", "cinturilla-sculpt", "legging-hydra"]
                  .filter((item) => item.replace(/-/g, " ").includes(searchQuery.toLowerCase()))
                  .map((item) => (
                    <div
                      key={`search-res-${item}`}
                      onClick={() => {
                        setIsSearchOpen(false);
                        onScrollToSection("collection");
                      }}
                      className="cursor-pointer text-xs p-2 rounded-lg hover:bg-lavender-blush flex justify-between items-center text-night-bordeaux font-sans"
                    >
                      <span className="capitalize font-semibold">{item.replace(/-/g, " ")}</span>
                      <span className="text-[10px] text-cherry-rose font-mono">Ver Ahora</span>
                    </div>
                  ))}
                {["eclat-absolu-body", "corset-biologique", "cinturilla-sculpt", "legging-hydra"]
                  .filter((item) => item.replace(/-/g, " ").includes(searchQuery.toLowerCase())).length === 0 && (
                  <p className="text-xs text-gray-500 font-sans italic text-center py-2">
                    Ninguna prenda coincide con &ldquo;{searchQuery}&rdquo;. Intenta otra palabra clave.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
