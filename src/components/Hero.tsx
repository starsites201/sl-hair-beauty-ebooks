import heroImg from "@/assets/hero-stylist.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden gradient-luxe"
    >
      <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-6 space-y-8 animate-fade-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-luxe uppercase text-gold">
              SL Hair Beauty · eBooks Profissionais
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Transforme seu{" "}
            <span className="italic text-gold">talento</span>
            <br />
            em um{" "}
            <span className="italic">negócio lucrativo</span>.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
            Conteúdos exclusivos para cabeleireiras que desejam dominar técnicas avançadas,
            lotar a agenda e construir uma carreira de prestígio no universo da beleza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#ebooks"
              className="group inline-flex items-center justify-center gap-3 bg-foreground text-primary-foreground px-9 py-4 text-xs tracking-luxe uppercase hover:bg-gold transition-all duration-500 shadow-soft"
            >
              Quero meus eBooks
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 text-xs tracking-luxe uppercase border border-foreground/30 hover:border-foreground transition-colors"
            >
              Conheça a Simone
            </a>
          </div>

          <div className="flex items-center gap-8 pt-6 border-t border-border/60">
            <div>
              <p className="font-display text-3xl text-gold">+10</p>
              <p className="text-xs tracking-wide-soft uppercase text-muted-foreground">
                Anos de experiência
              </p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-display text-3xl text-gold">+2.000</p>
              <p className="text-xs tracking-wide-soft uppercase text-muted-foreground">
                Alunas transformadas
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-6 relative animate-fade-in">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute -inset-4 border border-gold/40 translate-x-6 translate-y-6" />
            <img
              src={heroImg}
              alt="Profissional do salão SL Hair Beauty"
              width={1080}
              height={1350}
              className="relative w-full h-full object-cover shadow-luxe"
            />
            <div className="absolute -bottom-6 -left-6 bg-background px-6 py-4 shadow-soft border border-border/60 hidden md:block">
              <p className="font-display italic text-foreground text-lg">
                "Beleza com estratégia."
              </p>
              <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">
                — Simone Lopes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'var(--gradient-fade)' }} />
    </section>
  );
};
