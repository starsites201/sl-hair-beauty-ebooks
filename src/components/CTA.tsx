import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--gold)) 0%, transparent 50%)'
      }} />
      <div className="container relative text-center max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold" />
          <span className="text-xs tracking-luxe uppercase text-gold">A virada começa agora</span>
          <span className="h-px w-12 bg-gold" />
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
          Comece hoje a transformar
          <br />
          sua <span className="italic text-gold">carreira</span>.
        </h2>
        <p className="text-primary-foreground/70 font-light text-lg max-w-xl mx-auto">
          Junte-se às milhares de profissionais que decidiram parar de improvisar
          e começar a viver da beleza com método.
        </p>
        <div className="pt-4">
          <a
            href="#ebooks"
            className="group inline-flex items-center gap-3 bg-gold text-foreground px-10 py-5 text-xs tracking-luxe uppercase hover:bg-primary-foreground transition-colors duration-500 shadow-gold"
          >
            Ver todos os eBooks
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
