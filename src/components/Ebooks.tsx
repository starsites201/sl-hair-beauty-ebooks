import mechasImg from "@/assets/ebook-mechas.jpg";
import agendaImg from "@/assets/ebook-agenda.jpg";
import atendimentoImg from "@/assets/ebook-atendimento.jpg";
import { Check } from "lucide-react";

const ebooks = [
  {
    img: mechasImg,
    tag: "Técnico",
    title: "Técnicas de Mechas Perfeitas",
    price: "R$ 47",
    oldPrice: "R$ 97",
    description:
      "O passo a passo completo das mechas que transformam clientes em fãs — do diagnóstico do fio à finalização impecável.",
    benefits: [
      "Mapa de cores e neutralização",
      "Técnicas: balayage, ombré, morena iluminada",
      "Receita de matização que não mancha",
      "Tabela de tempo e proporção",
    ],
    forWho: "Cabeleireiras que querem dominar coloração com segurança.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-o-codigo-da-escala-p2wjq/J105558685V?sck=HOTMART_SITE&search=8f6dbd82-4d5c-45cb-91ef-c4c653ddf8e7&hotfeature=33",
  },
  {
    img: agendaImg,
    tag: "Negócio",
    title: "Como Lotar sua Agenda",
    price: "R$ 57",
    oldPrice: "R$ 127",
    description:
      "O método para nunca mais depender do boca a boca: posicionamento, Instagram e estratégias que enchem sua agenda em 30 dias.",
    benefits: [
      "Posicionamento de marca no Instagram",
      "Scripts de WhatsApp que vendem",
      "Tabela de preços inteligente",
      "Calendário de conteúdo pronto",
    ],
    forWho: "Profissionais que querem agenda lotada e clientes que pagam mais.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-o-codigo-da-escala-p2wjq/J105558685V?sck=HOTMART_SITE&search=8f6dbd82-4d5c-45cb-91ef-c4c653ddf8e7&hotfeature=33",
    featured: true,
  },
  {
    img: atendimentoImg,
    tag: "Experiência",
    title: "Atendimento de Luxo no Salão",
    price: "R$ 37",
    oldPrice: "R$ 87",
    description:
      "Eleve a experiência da sua cliente do momento que ela agenda até o pós-atendimento — e cobre o que você merece.",
    benefits: [
      "Roteiro de atendimento premium",
      "Como conduzir consulta de beleza",
      "Pós-venda que fideliza",
      "Detalhes que justificam preço alto",
    ],
    forWho: "Quem quer atender melhor e cobrar com confiança.",
    link: "https://hotmart.com/pt-br/marketplace/produtos/hagsxd-o-codigo-da-escala-p2wjq/J105558685V?sck=HOTMART_SITE&search=8f6dbd82-4d5c-45cb-91ef-c4c653ddf8e7&hotfeature=33",
  },
];

export const Ebooks = () => {
  return (
    <section id="ebooks" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-5">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs tracking-luxe uppercase text-gold">A Coleção</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            eBooks que mudam <span className="italic text-gold">carreiras</span>
          </h2>
          <p className="text-muted-foreground font-light">
            Materiais práticos, atualizados e pensados para você aplicar no mesmo dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {ebooks.map((e) => (
            <article
              key={e.title}
              className={`group relative bg-background border border-border/60 flex flex-col transition-all duration-500 hover:shadow-luxe hover:-translate-y-1 ${
                e.featured ? "lg:-mt-6 lg:mb-6 ring-1 ring-gold/40" : ""
              }`}
            >
              {e.featured && (
                <span className="absolute top-4 right-4 z-10 bg-foreground text-primary-foreground text-[10px] tracking-luxe uppercase px-3 py-1.5">
                  Mais vendido
                </span>
              )}

              <div className="aspect-[4/5] overflow-hidden bg-champagne">
                <img
                  src={e.img}
                  alt={`Capa do eBook ${e.title}`}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7 md:p-8 flex flex-col flex-1 gap-5">
                <span className="text-[10px] tracking-luxe uppercase text-gold">{e.tag}</span>
                <h3 className="font-display text-2xl md:text-3xl leading-tight">{e.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {e.description}
                </p>

                <ul className="space-y-2.5 pt-2">
                  {e.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-light">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 mt-auto border-t border-border/60 space-y-1">
                  <p className="text-[11px] tracking-wide-soft uppercase text-muted-foreground">
                    Para quem é
                  </p>
                  <p className="text-sm font-light text-foreground/80">{e.forWho}</p>
                </div>

                <div className="flex items-end justify-between pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground line-through">{e.oldPrice}</p>
                    <p className="font-display text-3xl text-foreground">
                      {e.price}
                    </p>
                  </div>
                  <a
                    href={e.link}
                    className="inline-flex items-center justify-center bg-foreground text-primary-foreground px-6 py-3 text-[11px] tracking-luxe uppercase hover:bg-gold transition-colors duration-500"
                  >
                    Comprar agora
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs tracking-wide-soft uppercase text-muted-foreground mt-12">
          Pagamento seguro · Acesso imediato · Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};
