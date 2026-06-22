import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG = 'https://cdn.poehali.dev/projects/c5f880e2-5bf0-4847-9140-9d67185cb317/files/cc624d40-21a4-4493-8883-495617ab94de.jpg';

const Snow = () => {
  const flakes = Array.from({ length: 30 });
  return (
    <>
      {flakes.map((_, i) => {
        const size = Math.random() * 12 + 6;
        const style = {
          left: `${Math.random() * 100}%`,
          fontSize: `${size}px`,
          animationDuration: `${Math.random() * 8 + 6}s`,
          animationDelay: `${Math.random() * 8}s`,
          opacity: Math.random() * 0.6 + 0.3,
        } as React.CSSProperties;
        return (
          <span key={i} className="snowflake" style={style}>
            ❄
          </span>
        );
      })}
    </>
  );
};

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О сервере' },
  { id: 'rules', label: 'Правила' },
  { id: 'kits', label: 'Киты' },
];

const rules = [
  { icon: 'Heart', text: 'Уважайте других игроков — никаких оскорблений и токсичности' },
  { icon: 'ShieldOff', text: 'Запрещены читы, моды на преимущество и сторонний софт' },
  { icon: 'Hammer', text: 'Не ломайте и не воруйте чужие постройки без разрешения' },
  { icon: 'MessageSquareOff', text: 'Никакого спама и рекламы в чате' },
  { icon: 'Gift', text: 'Поддерживайте новогоднюю атмосферу и добро' },
];

const kits = [
  { name: 'Набор Демона', price: '1 руб', emoji: '😈', color: 'from-red-900/40 to-red-800/20', border: 'border-red-700/50', badge: 'bg-red-700' },
  { name: 'Набор Дьявола', price: '5 руб', emoji: '👿', color: 'from-orange-900/40 to-orange-800/20', border: 'border-orange-600/50', badge: 'bg-orange-600' },
  { name: 'Набор Ангелов', price: '15 руб', emoji: '😇', color: 'from-sky-900/40 to-sky-800/20', border: 'border-sky-500/50', badge: 'bg-sky-500' },
  { name: 'Набор Бога', price: '25 руб', emoji: '✨', color: 'from-yellow-900/40 to-yellow-700/20', border: 'border-yellow-400/60', badge: 'bg-yellow-500' },
];

export default function Index() {
  const [copied, setCopied] = useState(false);
  const copy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Snow />

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 font-display font-bold text-xl tracking-wide">
            <span className="text-2xl">🎄</span>
            <span>Christmas<span className="text-gold">World</span></span>
          </button>
          <div className="flex items-center gap-1 sm:gap-2">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="font-display uppercase text-sm tracking-wider px-3 py-2 text-muted-foreground hover:text-gold transition-colors"
              >
                {n.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Зимний мир ChristmasWorld" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>

        <div className="relative z-10 container text-center py-24 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-secondary-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-display uppercase tracking-widest">Minecraft Bedrock</span>
          </div>

          <h1 className="font-display font-bold uppercase leading-none tracking-tight text-6xl sm:text-7xl md:text-8xl">
            Christmas
            <span className="block text-gold drop-shadow-[0_0_30px_rgba(240,180,40,0.4)]">World</span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground">
            Уютный рождественский сервер, где царит зима круглый год. Заходи и празднуй вместе с нами!
          </p>

          {/* Connect card */}
          <div className="mt-10 max-w-md mx-auto bg-card/80 backdrop-blur border border-border rounded-2xl p-6 shadow-2xl animate-glow">
            <p className="font-display uppercase text-sm tracking-widest text-muted-foreground mb-4">Подключение к серверу</p>
            <div className="space-y-3 text-left">
              <button
                onClick={() => copy('ChristmasWorld2.aternos.me')}
                className="w-full flex items-center justify-between gap-3 bg-muted rounded-xl px-4 py-3 hover:bg-muted/70 transition-colors group"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <Icon name="Globe" className="text-gold shrink-0" size={20} />
                  <span className="font-mono truncate">ChristmasWorld2.aternos.me</span>
                </span>
                <Icon name="Copy" size={18} className="text-muted-foreground group-hover:text-gold shrink-0" />
              </button>
              <button
                onClick={() => copy('14455')}
                className="w-full flex items-center justify-between gap-3 bg-muted rounded-xl px-4 py-3 hover:bg-muted/70 transition-colors group"
              >
                <span className="flex items-center gap-3">
                  <Icon name="Plug" className="text-gold shrink-0" size={20} />
                  <span className="font-mono">Порт: 14455</span>
                </span>
                <Icon name="Copy" size={18} className="text-muted-foreground group-hover:text-gold shrink-0" />
              </button>
            </div>
            <p className="mt-3 text-sm h-5 text-secondary">{copied ? '✓ Скопировано!' : ''}</p>
          </div>

          <Button
            onClick={() => scrollTo('about')}
            size="lg"
            className="mt-8 font-display uppercase tracking-widest text-base"
          >
            Узнать больше
            <Icon name="ChevronDown" size={20} />
          </Button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 bg-background">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-4xl">🎁</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-3">О сервере</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" style={{ backgroundColor: 'hsl(var(--accent))' }} />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-gold/60 transition-all hover:-translate-y-1 duration-300 w-64">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 text-gold mb-4">
                <Icon name="Users" size={28} />
              </div>
              <h3 className="font-display uppercase text-xl tracking-wide">2 игрока в день</h3>
              <p className="text-muted-foreground mt-2">Камерный сервер для тёплой компании</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center hover:border-gold/60 transition-all hover:-translate-y-1 duration-300 w-64">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 text-gold mb-4">
                <Icon name="Briefcase" size={28} />
              </div>
              <h3 className="font-display uppercase text-xl tracking-wide">2 работы</h3>
              <p className="text-muted-foreground mt-2">После обновления появились новые работы</p>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-center text-lg text-muted-foreground mt-12 leading-relaxed">
            <span className="text-gold font-semibold">ChristmasWorld</span> — это уютный мир Minecraft Bedrock,
            созданный для спокойной игры в кругу друзей. Снежные пейзажи, праздничное настроение и тёплое
            комьюнити ждут именно тебя. Заходи каждый день с 15:00 до 21:00!
          </p>
        </div>
      </section>

      {/* Rules */}
      <section id="rules" className="relative py-24 bg-card/30 border-y border-border">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-4xl">📜</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-3">Правила</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: 'hsl(var(--accent))' }} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {rules.map((r, i) => (
              <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/60 transition-colors">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center font-display font-bold">
                  {i + 1}
                </div>
                <div className="flex items-start gap-2">
                  <Icon name={r.icon} size={20} className="text-gold mt-0.5 shrink-0" />
                  <p>{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kits */}
      <section id="kits" className="relative py-24 bg-background">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-4xl">🎒</span>
            <h2 className="font-display font-bold uppercase text-4xl sm:text-5xl mt-3">Киты</h2>
            <div className="w-20 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: 'hsl(var(--accent))' }} />
            <p className="text-muted-foreground mt-4">Выбери свой набор и усиль своего персонажа</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {kits.map((kit) => (
              <div key={kit.name} className={`relative bg-gradient-to-b ${kit.color} border ${kit.border} rounded-2xl p-6 text-center hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
                <div className="text-5xl mb-4">{kit.emoji}</div>
                <h3 className="font-display uppercase text-lg tracking-wide mb-3">{kit.name}</h3>
                <div className={`inline-block ${kit.badge} text-white font-display font-bold text-xl px-4 py-1.5 rounded-full mb-4`}>
                  {kit.price}
                </div>
                <a
                  href="https://max.ru/+79493740030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display uppercase text-sm tracking-wider py-2.5 rounded-xl transition-colors"
                >
                  Купить
                </a>
                <p className="text-xs text-white/50 mt-2">💬 MAX: +7 949 374-00-30</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-background">
        <div className="container">
          <div className="font-display font-bold text-xl mb-2">🎄 Christmas<span className="text-gold">World</span></div>
          <p className="text-muted-foreground font-mono text-sm">ChristmasWorld2.aternos.me : 14455</p>
          <p className="text-muted-foreground text-sm mt-3">© {new Date().getFullYear()} ChristmasWorld · Minecraft Bedrock</p>
        </div>
      </footer>
    </div>
  );
}