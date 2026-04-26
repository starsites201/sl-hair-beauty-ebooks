import { Instagram, MessageCircle, Mail } from "lucide-react";

const channels = [
  {
    icon: Instagram,
    label: "Instagram",
    value: "@slhairbeauty",
    href: "https://instagram.com/slhairbeauty",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(11) 99999-0000",
    href: "https://wa.me/5511999990000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@slhairbeauty.com",
    href: "mailto:contato@slhairbeauty.com",
  },
];

export const Footer = () => {
  return (
    <footer id="contato" className="bg-background border-t border-border">
      <div className="container py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-5">
            <div>
              <p className="font-display text-3xl tracking-wide-soft">
                SL <span className="italic text-gold">Hair Beauty</span>
              </p>
              <p className="text-[10px] tracking-luxe uppercase text-muted-foreground mt-1">
                Educação · Beleza · Autoridade
              </p>
            </div>
            <p className="text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
              Conteúdos para cabeleireiras que querem viver da beleza com estratégia,
              técnica e posicionamento.
            </p>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-3 gap-8">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group space-y-3 p-6 border border-border/60 hover:border-gold transition-colors duration-500"
              >
                <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="text-[10px] tracking-luxe uppercase text-muted-foreground">{label}</p>
                  <p className="text-sm font-light mt-1 group-hover:text-gold transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] tracking-wide-soft uppercase text-muted-foreground">
          <p>© {new Date().getFullYear()} SL Hair Beauty. Todos os direitos reservados.</p>
          <p>Feito com cuidado para profissionais da beleza.</p>
        </div>
      </div>
    </footer>
  );
};
