import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carla Mendes",
    role: "Cabeleireira · Curitiba",
    text: "Apliquei o método de mechas e em duas semanas a fila de espera começou. Material direto ao ponto, vale cada centavo.",
  },
  {
    name: "Juliana Reis",
    role: "Salão Próprio · São Paulo",
    text: "O eBook de Agenda Lotada mudou minha forma de cobrar. Subi os preços em 40% e não perdi cliente — ganhei autoridade.",
  },
  {
    name: "Patrícia Soares",
    role: "Beauty Artist · Belo Horizonte",
    text: "A Simone tem o dom de ensinar de um jeito leve e profundo. Hoje atendo clientes que pagam o que eu mereço.",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-champagne/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-5">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-luxe uppercase text-gold">Quem já vive</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Resultados que falam <span className="italic text-gold">por si</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="bg-background p-8 md:p-10 border border-border/60 flex flex-col gap-6 hover:shadow-soft transition-all duration-500"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="font-display italic text-xl md:text-2xl leading-snug text-foreground flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="border-t border-border/60 pt-5">
                <p className="font-medium text-sm">{t.name}</p>
                <p className="text-xs tracking-wide-soft uppercase text-muted-foreground mt-1">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
