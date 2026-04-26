import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#ebooks", label: "eBooks" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-display text-xl md:text-2xl tracking-wide-soft">
            SL <span className="text-gold italic">Hair Beauty</span>
          </span>
          <span className="text-[10px] tracking-luxe text-muted-foreground mt-0.5 uppercase">
            Educação · Beleza · Autoridade
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide-soft uppercase text-foreground/70 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#ebooks"
          className="hidden md:inline-flex items-center px-6 py-2.5 border border-foreground/80 text-xs tracking-luxe uppercase hover:bg-foreground hover:text-primary-foreground transition-all duration-500"
        >
          Quero meus eBooks
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/60 mt-3 animate-fade-in">
          <ul className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-wide-soft uppercase text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#ebooks"
                onClick={() => setOpen(false)}
                className="inline-block px-6 py-3 border border-foreground text-xs tracking-luxe uppercase"
              >
                Quero meus eBooks
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
