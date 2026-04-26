import simoneImg from "@/assets/about-simone.jpg";

export const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-square max-w-md">
            <div className="absolute inset-0 bg-nude -translate-x-6 -translate-y-6" />
            <img
              src={simoneImg}
              alt="Simone Lopes — fundadora SL Hair Beauty"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative w-full h-full object-cover shadow-soft"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-luxe uppercase text-gold">Sobre</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            A história por trás da{" "}
            <span className="italic text-gold">SL Hair Beauty</span>
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed font-light text-base md:text-lg max-w-2xl">
            <p>
              Sou <span className="text-foreground font-medium">Simone Lopes</span>, especialista
              em cabelo há mais de uma década e fundadora do SL Hair Beauty. Comecei como muitas
              de vocês: com talento, vontade de crescer e poucas referências de como transformar
              dom em negócio.
            </p>
            <p>
              Hoje, atendo clientes exigentes, formo profissionais e divido tudo o que aprendi
              em materiais práticos, diretos e pensados para quem quer evoluir de verdade —
              sem rodeios e sem perder a essência.
            </p>
            <p className="font-display italic text-2xl text-foreground pt-2">
              "Você não precisa escolher entre ser artista e ser empresária. Você pode ser as duas."
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border max-w-xl">
            {[
              { n: "10+", l: "Anos no salão" },
              { n: "2k+", l: "Alunas" },
              { n: "98%", l: "Satisfação" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl text-gold">{s.n}</p>
                <p className="text-[11px] tracking-wide-soft uppercase text-muted-foreground mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
