import { Clock, BookOpen, Sparkles, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Aprenda no seu tempo",
    text: "Acesso vitalício para estudar quando e onde quiser, no celular ou no computador.",
  },
  {
    icon: BookOpen,
    title: "Conteúdo prático",
    text: "Sem enrolação. Direto ao ponto, com checklists, scripts e materiais aplicáveis.",
  },
  {
    icon: Sparkles,
    title: "Técnicas atualizadas",
    text: "Tendências e métodos que estão funcionando agora nos melhores salões.",
  },
  {
    icon: TrendingUp,
    title: "Aumente seu faturamento",
    text: "Estratégias reais para subir seus preços com confiança e lotar a agenda.",
  },
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-32 self-start">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-gold" />
              <span className="text-xs tracking-luxe uppercase text-gold">Por que escolher</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1]">
              Pensado para a sua <span className="italic text-gold">evolução</span>
            </h2>
            <p className="text-muted-foreground font-light">
              Cada eBook foi desenhado para entregar resultado prático em poucas semanas
              de aplicação.
            </p>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border">
            {items.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-background p-8 md:p-10 space-y-4 hover:bg-secondary/40 transition-colors duration-500 group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/40 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                  <Icon className="w-5 h-5 text-gold group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl">{title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
