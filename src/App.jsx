import { useEffect, useId, useState } from "react";

const CUR = "₦";
const fmt = (n) => n.toLocaleString("en-NG");

const Icon = ({ name, className = "h-6 w-6" }) => {
  const paths = {
    arrow: <path d="m9 18 6-6-6-6M4 12h11" />,
    battery: <><rect width="15" height="10" x="3" y="7" rx="2" /><path d="M18 10h2v4h-2M7 10v4M11 10v4M15 10v4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    delivery: <><path d="M10 17h4V5H2v12h3M14 9h4l4 4v4h-3" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" /></>,
    lint: <><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" /><circle cx="12" cy="12" r="3" /></>,
    lock: <><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    payment: <><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20M6 15h2" /></>,
    power: <><path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" /></>,
    refresh: <><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" /></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
    sparkle: <><path d="m12 3-1.4 3.6L7 8l3.6 1.4L12 13l1.4-3.6L17 8l-3.6-1.4L12 3ZM5 15l-.8 2.2L2 18l2.2.8L5 21l.8-2.2L8 18l-2.2-.8L5 15ZM19 13l-.6 1.4L17 15l1.4.6L19 17l.6-1.4L21 15l-1.4-.6L19 13Z" /></>,
    star: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2l-5-4.9 6.9-1L12 2Z" />,
    support: <><path d="M4 12a8 8 0 0 1 16 0M4 12v4a2 2 0 0 0 2 2h2v-6H6M18 12v4a2 2 0 0 1-2 2h-2v-6h2" /></>,
    tag: <><path d="M3 7l5-5h8l5 5v8l-5 5H8l-5-5V7Z" /><circle cx="9" cy="9" r="2" /></>,
    wash: <><path d="M4 5h16l-1 16H5L4 5ZM3 2h18M8 2v3M16 2v3" /><path d="M8 13c1.3-2 2.7-2 4 0s2.7 2 4 0" /></>,
    wrench: <><path d="M14.7 6.3a4 4 0 0 0-5-5L12 3.6 8.4 7.2 6.1 4.9a4 4 0 0 0 5 5l7.9 7.9a2.1 2.1 0 0 0 3-3l-7.3-7.5Z" /></>,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
};

const CTAButton = ({ children, className = "", compact = false }) => (
  <a
    href="#order"
    className={`group inline-flex items-center justify-center gap-2 rounded-md bg-[#ff6a2a] font-extrabold text-white shadow-[0_9px_0_#a9310e] transition hover:-translate-y-0.5 hover:bg-[#f25b1c] hover:shadow-[0_11px_0_#a9310e] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#ff6a2a] active:translate-y-1 active:shadow-[0_4px_0_#a9310e] ${compact ? "px-5 py-3 text-sm" : "w-full px-6 py-4 text-base sm:w-auto sm:text-lg"} ${className}`}
  >
    {children}
    <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
  </a>
);

const TrustPerk = ({ icon, title, copy, dark = false }) => (
  <div className="flex min-w-0 items-center gap-3">
    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${dark ? "bg-white/10 text-[#ff8b58]" : "bg-[#101820] text-white"}`}>
      <Icon name={icon} className="h-5 w-5" />
    </span>
    <span className="min-w-0">
      <strong className="block text-sm font-extrabold leading-tight">{title}</strong>
      <span className={`block text-xs ${dark ? "text-white/65" : "text-[#5b6268]"}`}>{copy}</span>
    </span>
  </div>
);

const ProductVisual = ({ giftFocus = false }) => {
  const titleId = useId();

  return (
    <svg viewBox="0 0 720 610" role="img" aria-labelledby={titleId} className="h-auto w-full overflow-visible">
      <title id={titleId}>Cordless car vacuum with a box of twenty reusable cleaning towels</title>
      <defs>
        <linearGradient id="vacuumBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3d4750" />
          <stop offset="0.45" stopColor="#111820" />
          <stop offset="1" stopColor="#05080a" />
        </linearGradient>
        <linearGradient id="clearBin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cbd9dc" stopOpacity=".88" />
          <stop offset=".5" stopColor="#5e747a" stopOpacity=".58" />
          <stop offset="1" stopColor="#18252a" stopOpacity=".82" />
        </linearGradient>
        <linearGradient id="towel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#bfd5d2" />
          <stop offset="1" stopColor="#5f8e8a" />
        </linearGradient>
      </defs>

      <ellipse cx="368" cy="554" rx="280" ry="31" fill="#091016" opacity=".25" />
      <g className={giftFocus ? "" : "product-float product-shadow"} transform="rotate(-12 350 280)">
        <path d="M66 250h188v68H66c-25 0-45-15-45-34s20-34 45-34Z" fill="url(#vacuumBody)" />
        <path d="M22 267h128v34H22c-14 0-22-8-22-17s8-17 22-17Z" fill="#0b1015" />
        <path d="M148 252h20v64h-20z" fill="#ff6a2a" />
        <rect x="220" y="199" width="240" height="171" rx="73" fill="url(#clearBin)" stroke="#829398" strokeWidth="5" />
        <path d="M271 207v155M315 201v168M359 201v168" stroke="#d6e1e1" strokeOpacity=".23" strokeWidth="7" />
        <path d="M402 212h91c60 0 96 39 96 81s-36 72-90 72h-55l-37-33 42-42-47-78Z" fill="url(#vacuumBody)" />
        <circle cx="459" cy="276" r="65" fill="#101820" stroke="#38434c" strokeWidth="13" />
        <circle cx="459" cy="276" r="41" fill="#202a32" />
        <path d="M436 255h46M436 276h46M436 297h46" stroke="#727d83" strokeWidth="5" strokeLinecap="round" />
        <path d="M488 316h84l44 138h-92l-58-117 22-21Z" fill="url(#vacuumBody)" />
        <path d="M516 407h119c23 0 42 19 42 42v25H512c-20 0-33-20-25-38l11-24c3-3 10-5 18-5Z" fill="#151c22" stroke="#485159" strokeWidth="5" />
        <rect x="529" y="422" width="103" height="35" rx="8" fill="#222c34" />
        <path d="m619 424 29 31" stroke="#ff6a2a" strokeWidth="12" />
        <text x="535" y="446" fill="white" fontSize="18" fontWeight="900" letterSpacing="2">MAX</text>
        <rect x="523" y="328" width="51" height="17" rx="8" fill="#ff6a2a" />
      </g>

      <g transform={giftFocus ? "translate(4 -12) scale(1.08)" : "translate(16 10)"}>
        <path d="M102 422h236l22 132H86l16-132Z" fill="#cedad6" />
        <path d="M102 422 142 389h170l26 33H102Z" fill="#e3ebe8" />
        <path d="M134 407c10-74 46-79 73-46 34-54 90-14 96 46H134Z" fill="url(#towel)" />
        <path d="M158 398c24-35 45-30 61 5M222 395c22-29 42-20 58 10" fill="none" stroke="#d7e7e4" strokeOpacity=".55" strokeWidth="5" />
        <text x="132" y="472" fill="#101820" fontSize="18" fontWeight="900" letterSpacing="2">REUSABLE</text>
        <text x="132" y="498" fill="#101820" fontSize="18" fontWeight="900" letterSpacing="2">CLEANING TOWELS</text>
        <circle cx="302" cy="488" r="35" fill="#ff6a2a" />
        <text x="302" y="484" fill="white" textAnchor="middle" fontSize="22" fontWeight="900">20</text>
        <text x="302" y="502" fill="white" textAnchor="middle" fontSize="10" fontWeight="800">PIECES</text>
      </g>
    </svg>
  );
};

const useCountdown = (hours = 12) => {
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    const key = "autocare_deadline";
    let deadline = Number(localStorage.getItem(key));
    const now = Date.now();
    if (!deadline || deadline < now) {
      deadline = now + hours * 3600 * 1000;
      localStorage.setItem(key, String(deadline));
    }
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [hours]);
  const pad = (n) => String(n).padStart(2, "0");
  return {
    h: pad(Math.floor(remaining / 3600000)),
    m: pad(Math.floor((remaining % 3600000) / 60000)),
    s: pad(Math.floor((remaining % 60000) / 1000)),
    expired: remaining <= 0,
  };
};

const CountdownTimer = ({ dark = false }) => {
  const { h, m, s } = useCountdown(12);
  const Unit = ({ value, label }) => (
    <span className="flex flex-col items-center">
      <span className={`grid min-w-[2.6rem] place-items-center rounded-md px-2 py-1.5 display-font text-2xl tabular-nums ${dark ? "bg-white/10 text-white" : "bg-[#101820] text-white"}`}>{value}</span>
      <span className={`mt-1 text-[10px] font-black uppercase tracking-[0.18em] ${dark ? "text-white/55" : "text-[#5b6268]"}`}>{label}</span>
    </span>
  );
  return (
    <div className="inline-flex items-center gap-2">
      <span className={`flex items-center gap-1 text-xs font-black uppercase tracking-wider ${dark ? "text-[#ff9b70]" : "text-[#e5541b]"}`}><Icon name="clock" className="h-4 w-4" /> Offer ends in</span>
      <Unit value={h} label="Hrs" />
      <span className={`display-font text-2xl ${dark ? "text-white/40" : "text-[#101820]/40"}`}>:</span>
      <Unit value={m} label="Min" />
      <span className={`display-font text-2xl ${dark ? "text-white/40" : "text-[#101820]/40"}`}>:</span>
      <Unit value={s} label="Sec" />
    </div>
  );
};

const pains = [
  { emoji: "🍟", title: "Crumbs everywhere", copy: "Kids, snacks, and road trips leave crumbs buried in every seat crack." },
  { emoji: "🐕", title: "Pet hair that won't budge", copy: "Your dog rides shotgun and leaves half their coat all over the back seat." },
  { emoji: "💸", title: "Car washes that drain your wallet", copy: "₦5,000 every visit adds up fast. And the result never lasts past the next drive." },
  { emoji: "🧽", title: "Dusty dashboards and dirty windows", copy: "That tired, uncared-for look every time you climb inside." },
];

const Pain = () => (
  <section className="bg-[#101820] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 text-center text-xs font-black uppercase tracking-[0.2em] text-[#ff8b58]">Sound familiar?</p>
      <h2 className="display-font mx-auto max-w-3xl text-center text-4xl uppercase leading-[0.95] sm:text-6xl">
        Your Car Deserves Better Than <span className="text-[#ff6a2a]">This.</span>
      </h2>
      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
        {pains.map((pain) => (
          <div key={pain.title} className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ff6a2a]/15 text-2xl">{pain.emoji}</span>
            <div>
              <h3 className="text-lg font-black text-white">{pain.title}</h3>
              <p className="mt-1 text-sm leading-6 text-white/65">{pain.copy}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-xl font-bold leading-8 text-white">
        There is a better way. One small tool that fixes all four, in under a minute, from your driveway, without spending another cent at the car wash. <a href="#order" className="text-[#ff6a2a] underline decoration-2 underline-offset-4 hover:text-[#ff8b58]">See the kit that does it all.</a>
      </p>
    </div>
  </section>
);

const Header = () => (
  <>
    <div className="bg-[#ff6a2a] px-4 py-2.5 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-white sm:text-sm">
      Free delivery nationwide <span className="mx-2 text-white/50">|</span> Pay only when it arrives
    </div>
    <header className="absolute left-0 right-0 top-[37px] z-20 sm:top-[40px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <a href="#top" className="display-font text-2xl tracking-wide text-white" aria-label="AutoCare Kit home">
          AUTO<span className="text-[#ff6a2a]">CARE.</span>
        </a>
        <CTAButton compact className="hidden sm:inline-flex">Get The Bundle</CTAButton>
      </div>
    </header>
  </>
);

const trustBadges = [
  { icon: "delivery", title: "Free Delivery", copy: "On every order" },
  { icon: "payment", title: "Pay On Delivery", copy: "Inspect before you pay" },
  { icon: "refresh", title: "30-Day Returns", copy: "Hassle-free refunds" },
  { icon: "lock", title: "Secure Checkout", copy: "Your details protected" },
];

const TrustBadges = () => (
  <section className="border-y-2 border-[#101820] bg-white px-5 py-6 sm:px-8 lg:px-12">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-6">
      {trustBadges.map((badge) => (
        <div key={badge.title} className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#101820] text-[#ff7b43]">
            <Icon name={badge.icon} className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <strong className="block text-sm font-extrabold leading-tight text-[#101820]">{badge.title}</strong>
            <span className="block text-xs text-[#5b6268]">{badge.copy}</span>
          </span>
        </div>
      ))}
    </div>
  </section>
);

const vacuumImages = [
  { src: "/images/vacuum-kit.png", alt: "Cordless car vacuum with washable filter, attachments, and USB charging cable", label: "Full kit" },
  { src: "/images/vacuum-airflow.png", alt: "Cordless car vacuum showing airflow, filter, brush, and crevice attachments", label: "Power and tools" },
  { src: "/images/vacuum-closeup.png", alt: "Close-up view of the cordless car vacuum and transparent dust chamber", label: "Close-up" },
];

const Hero = () => {
  const [activeVacuumImage, setActiveVacuumImage] = useState(0);
  const activeImage = vacuumImages[activeVacuumImage];

  return (
  <section id="top" className="hero-grid relative overflow-hidden bg-[#101820] pb-14 pt-28 text-white sm:pt-36 lg:min-h-[760px] lg:pb-20">
    <div className="pointer-events-none absolute -left-24 top-36 h-64 w-64 rounded-full bg-[#ff6a2a]/15 blur-3xl" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-white/[0.025]" />
    <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1.03fr_.97fr] lg:px-12">
      <div className="relative z-10 max-w-2xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff6a2a]/50 bg-[#ff6a2a]/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#ff9b70]">
          <Icon name="sparkle" className="h-4 w-4" />
          Over 12,000 cars cleaned this month
        </div>
        <h1 className="display-font text-[3.2rem] uppercase leading-[0.92] sm:text-7xl lg:text-[5.25rem]">
          Keep Your Car <span className="text-[#ff6a2a]">Showroom Clean.</span> Anywhere, Anytime.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-xl sm:leading-8">
          You spend hours in your car every week. So why are you still paying for car washes that don't last? With the AutoCare <strong className="text-white">Cordless Car Vacuum</strong>, you'll lift dirt, crumbs, and pet hair in <em className="text-white not-italic font-bold">60 seconds flat</em>, and today we're throwing in <strong className="text-white">20 Reusable Cleaning Towels absolutely FREE</strong> so you can finish the job like a pro.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-bold text-white/80">
          <span className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-[#ff8b58]" /> No cords. No car wash queues.</span>
          <span className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-[#ff8b58]" /> Free delivery to your door.</span>
          <span className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4 text-[#ff8b58]" /> Pay only when it arrives.</span>
        </div>
        <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
          <CountdownTimer dark />
        </div>
        <div className="mt-8">
          <CTAButton>Claim My Vacuum + 20 Free Towels Now</CTAButton>
        </div>
        <div className="mt-8 grid max-w-xl grid-cols-2 gap-x-3 gap-y-5 border-t border-white/10 pt-6 sm:flex sm:gap-8">
          <TrustPerk icon="delivery" title="Free Delivery" copy="No hidden delivery fee" dark />
          <TrustPerk icon="payment" title="Pay On Delivery" copy="See it before you pay" dark />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[650px] lg:translate-x-5">
        <div className="absolute left-[8%] top-[10%] h-[78%] w-[84%] rotate-[-7deg] rounded-[3rem] bg-[#ff6a2a]" />
        <div className="absolute right-[3%] top-[6%] z-10 grid h-24 w-24 rotate-6 place-items-center rounded-full border-4 border-[#101820] bg-[#f8d447] text-center text-[#101820] shadow-xl sm:h-28 sm:w-28">
          <span className="display-font text-xl uppercase leading-4 sm:text-2xl sm:leading-5">20 Free<br />Towels</span>
        </div>
        <div className="relative z-[5] aspect-square overflow-hidden rounded-[2rem] border-4 border-white/90 bg-white shadow-2xl">
          <img key={activeImage.src} src={activeImage.src} alt={activeImage.alt} className="block h-full w-full bg-white object-contain" loading="eager" fetchPriority="high" width="1272" height="1240" />
        </div>
        <div className="relative z-20 mt-3 flex justify-center gap-2" aria-label="Vacuum product gallery">
          {vacuumImages.map((image, index) => (
            <button key={image.src} type="button" onClick={() => setActiveVacuumImage(index)} aria-label={`Show ${image.label} image`} aria-pressed={activeVacuumImage === index} className={`group w-20 overflow-hidden rounded-lg border-2 bg-white p-1 text-left shadow-lg transition sm:w-24 ${activeVacuumImage === index ? "border-[#ff6a2a] ring-2 ring-[#ff6a2a]/30" : "border-white/60 hover:border-[#ff8b58]"}`}>
              <img src={image.src} alt="" className="aspect-square w-full object-contain" loading="lazy" width="96" height="96" />
              <span className={`block truncate px-1 pb-1 pt-1 text-center text-[9px] font-black uppercase tracking-wide ${activeVacuumImage === index ? "text-[#dc4b15]" : "text-[#5b6268]"}`}>{image.label}</span>
            </button>
          ))}
        </div>
        <div className="absolute left-[-6%] top-[58%] z-20 hidden w-36 rotate-3 overflow-hidden rounded-xl border-4 border-white shadow-2xl sm:block">
          <img src="/images/towels-20pcs-blue.jpg" alt="Box of 20 reusable cleaning towels included as a free gift" className="block h-auto w-full" loading="lazy" width="400" height="400" />
          <span className="block bg-[#ff6a2a] py-1 text-center text-[11px] font-black uppercase tracking-wider text-white">Free Gift</span>
        </div>
        <div className="absolute bottom-[16%] right-[2%] z-10 -rotate-2 rounded-sm bg-white px-4 py-3 text-[#101820] shadow-xl">
          <span className="block text-[10px] font-bold uppercase tracking-[0.17em] text-[#687078]">The Ultimate</span>
          <strong className="display-font text-lg uppercase sm:text-2xl">Car-Cleaning Kit</strong>
        </div>
      </div>
    </div>
  </section>
  );
};

const features = [
  { icon: "power", number: "01", title: "Suction That Actually Works", copy: "Crumbs, sand, pet hair, even fine dust, gone in one pass. No going over the same spot five times like that cheap vacuum you tried before.", img: "/images/vacuum-airflow.png", alt: "Vacuum airflow and cleaning attachments", fit: "contain" },
  { icon: "battery", number: "02", title: "Cordless. Ready In Seconds.", copy: "No awkward cables, no hunting for a wall outlet. Charge it once and clean your whole car on a single charge. Quick top-up and you're back at it.", img: "/images/vacuum-closeup.png", alt: "Close-up of the cordless USB rechargeable vacuum", fit: "contain" },
  { icon: "wrench", number: "03", title: "Built To Survive Car Life", copy: "Toss it in the boot and forget about it. Compact, rugged, and tested before it ever reaches your door. This is the last car vacuum you'll need to buy.", img: "/images/vacuum-kit.png", alt: "Complete cordless vacuum kit with attachments", fit: "contain" },
];

const Features = () => (
  <section className="bg-[#f7f4ed] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-5 border-b-2 border-[#101820] pb-7 md:grid-cols-[1fr_.62fr] md:items-end">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#e5541b]">Meet your new favourite ritual</p>
          <h2 className="display-font max-w-3xl text-4xl uppercase leading-none sm:text-6xl">Clean Your Whole Car In <span className="text-[#e5541b]">60 Seconds.</span></h2>
        </div>
        <p className="max-w-lg text-sm leading-6 text-[#62686d] sm:text-base">
          Pull it out, switch it on, and watch the mess vanish. No elbow grease. No car-wash line. No ₦5,000 every weekend. Just a spotless car whenever you want one.
        </p>
      </div>

      <div className="grid gap-4 pt-8 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.number} className="group relative flex flex-col overflow-hidden border border-[#d7d2c8] bg-white transition hover:-translate-y-1 hover:border-[#101820] hover:shadow-[8px_8px_0_#101820]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e7e2d8]">
              <img src={feature.img} alt={feature.alt} className={`h-full w-full transition duration-500 group-hover:scale-105 ${feature.fit === "contain" ? "bg-white object-contain p-3" : "object-cover"}`} loading="lazy" width="600" height="450" />
              <span className="absolute left-3 top-3 grid h-12 w-12 place-items-center rounded-full bg-[#101820] text-[#ff7b43] shadow-lg transition group-hover:bg-[#ff6a2a] group-hover:text-white">
                <Icon name={feature.icon} className="h-6 w-6" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <span className="absolute right-4 top-2 display-font text-7xl text-[#101820]/[0.055]">{feature.number}</span>
              <h3 className="text-xl font-black leading-tight text-[#101820]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#646b70]">{feature.copy}</p>
              <div className="mt-auto flex items-center gap-2 border-t border-[#e5e1d9] pt-4 text-xs font-extrabold uppercase tracking-wider text-[#26313a]">
                <Icon name="check" className="h-4 w-4 text-[#e5541b]" />
                Performance tested
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const giftBenefits = [
  { icon: "lint", title: "100% Lint-Free", copy: "A clean finish with no fibres left behind." },
  { icon: "shield", title: "Scratch-Safe", copy: "Gentle on dashboards and all car interiors." },
  { icon: "wash", title: "Machine Washable", copy: "Wash, reuse, and keep saving on disposable wipes." },
];

const GiftSection = () => (
  <section className="overflow-hidden bg-[#dce8e5] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className="soft-grid relative order-2 min-h-[370px] rounded-2xl border border-[#a9c0bc] bg-[#cbdcd8] p-3 sm:min-h-[500px] lg:order-1">
        <div className="absolute left-5 top-5 z-10 rounded-full bg-[#101820] px-4 py-2 text-xs font-black uppercase tracking-widest text-white">Worth keeping</div>
        <div className="absolute right-4 top-4 z-10 grid h-24 w-24 place-items-center rounded-full bg-[#ff6a2a] text-center text-white shadow-lg sm:h-32 sm:w-32">
          <span className="display-font text-2xl uppercase leading-5 sm:text-3xl sm:leading-7">Yours<br />Free</span>
        </div>
        <div className="grid h-full grid-cols-2 gap-2">
          <img src="/images/towels-20pcs-blue.jpg" alt="Grey box containing 20 reusable blue cleaning towels" className="col-span-2 h-auto w-full rounded-lg object-cover shadow-md" loading="lazy" width="1200" height="1200" />
          <img src="/images/towels-20pcs-pink.jpg" alt="Pink and blue boxes of reusable multipurpose cleaning towels" className="h-full w-full rounded-lg object-cover shadow" loading="lazy" width="800" height="1000" />
          <img src="/images/towels-20pcs-turquoise.jpg" alt="Turquoise box of reusable cleaning towels" className="h-full w-full rounded-lg object-cover shadow" loading="lazy" width="800" height="800" />
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#c63e0c]">Bonus worth keeping</p>
        <h2 className="display-font text-4xl uppercase leading-[0.95] sm:text-6xl">Yours FREE Today: <span className="text-[#e5541b]">20 Premium Detailing Towels</span> <s className="text-2xl text-[#9aa0a4] sm:text-3xl">(₦15,000 value)</s></h2>
        <p className="mt-6 text-base leading-7 text-[#48565a] sm:text-lg">
          A vacuum gets the dirt out. But what about the dusty dashboard? The smudged window? The coffee you just spilled on the center console?
        </p>
        <p className="mt-4 text-base leading-7 text-[#48565a] sm:text-lg">
          That's where these come in. <strong className="text-[#101820]">20 reusable, lint-free detailing towels</strong> that turn a quick vacuum into a full detail. Dashboards, glass, cup holders, spills, handled in seconds. Wash them and use them for years.
        </p>
        <div className="mt-7 rounded-lg border-2 border-dashed border-[#e5541b] bg-white/60 p-4">
          <p className="text-sm font-bold text-[#101820]">Total value in your free bundle:</p>
          <ul className="mt-2 text-sm text-[#48565a]">
            <li className="flex items-center gap-2 py-0.5"><Icon name="check" className="h-4 w-4 text-[#e5541b]" /> 20 reusable multipurpose towels</li>
            <li className="flex items-center gap-2 py-0.5"><Icon name="check" className="h-4 w-4 text-[#e5541b]" /> Lint-free and scratch-safe on every surface</li>
            <li className="flex items-center gap-2 py-0.5"><Icon name="check" className="h-4 w-4 text-[#e5541b]" /> Machine washable, reuse hundreds of times</li>
          </ul>
          <p className="mt-3 display-font text-2xl text-[#101820]">Value: <s className="text-[#9aa0a4]">₦15,000</s> Yours: <span className="text-[#e5541b]">FREE</span></p>
        </div>
        <div className="mt-8 space-y-3">
          {giftBenefits.map((benefit) => (
            <div key={benefit.title} className="flex items-center gap-4 border-b border-[#9fb8b3] py-4 first:border-t">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#101820]">
                <Icon name={benefit.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-black text-[#101820]">{benefit.title}</h3>
                <p className="mt-0.5 text-sm text-[#5c6b6e]">{benefit.copy}</p>
              </div>
            </div>
          ))}
        </div>
        <CTAButton className="mt-9">Get My Free Towels</CTAButton>
      </div>
    </div>
  </section>
);

const tiers = [
  { id: "1", title: "Starter", bundles: 1, price: 36500, was: 55000, perUnit: 36500, copy: "1 vacuum + 20 towels", badge: null },
  { id: "2", title: "Most Popular", bundles: 2, price: 64500, was: 110000, perUnit: 32250, copy: "2 vacuums + 40 towels", badge: "Most Popular" },
  { id: "3", title: "Best Value", bundles: 3, price: 92500, was: 165000, perUnit: 30833, copy: "3 vacuums + 60 towels", badge: "Best Value" },
];

const PricingTiers = () => (
  <section id="pricing" className="bg-[#f7f4ed] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#e5541b]">One smart purchase, years of clean</p>
        <h2 className="display-font text-4xl uppercase leading-none sm:text-6xl">One Kit Replaces <span className="text-[#e5541b]">Every Car Wash.</span></h2>
        <p className="mt-4 text-sm leading-6 text-[#62686d] sm:text-base">The average car owner spends over ₦150,000 a year on car washes that don't last. The AutoCare Kit pays for itself in a single month, and keeps working for years. Buy for yourself, or gift one to a fellow car lover and save more.</p>
        <div className="mt-5"><StockCounter /></div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {tiers.map((tier) => {
          const save = fmt(tier.was - tier.price);
          const featured = tier.badge === "Most Popular";
          return (
            <article key={tier.id} className={`relative flex flex-col border-2 bg-white p-6 transition sm:p-8 ${featured ? "border-[#ff6a2a] shadow-[8px_8px_0_#101820] md:-translate-y-3" : "border-[#d7d2c8] hover:border-[#101820] hover:shadow-[8px_8px_0_#101820]"}`}>
              {tier.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-[11px] font-black uppercase tracking-wider text-white ${featured ? "bg-[#ff6a2a]" : "bg-[#101820]"}`}>{tier.badge}</span>
              )}
              <h3 className="text-lg font-black uppercase tracking-wide text-[#101820]">{tier.title}</h3>
              <p className="mt-1 text-xs font-bold text-[#62686d]">{tier.copy}</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="display-font text-5xl leading-none text-[#101820]">{CUR}{fmt(tier.price)}</span>
                <span className="mb-1 text-sm font-bold text-[#9aa0a4] line-through">{CUR}{fmt(tier.was)}</span>
              </div>
              <p className="mt-1.5 text-xs font-black uppercase tracking-wide text-[#176839]">Save {CUR}{save} · {CUR}{fmt(tier.perUnit)} / kit</p>

              <ul className="mt-6 space-y-2.5 text-sm font-bold text-[#3a3f44]">
                {["Cordless car vacuum", `${tier.bundles * 20} reusable towels free`, "Free delivery", "Pay on delivery"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#ff6a2a] text-white"><Icon name="check" className="h-3.5 w-3.5" /></span>{item}</li>
                ))}
              </ul>
              <div className="mt-7 pt-2">
                <CTAButton compact className="w-full">Select {tier.title}</CTAButton>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

const CarSeatScene = ({ dirty = false }) => (
  <svg viewBox="0 0 460 340" className="h-full w-full" role="img" aria-label={dirty ? "Car seat covered in crumbs, dust, and pet hair" : "Clean car interior after using the AutoCare kit"}>
    <defs>
      <linearGradient id={dirty ? "floorD" : "floorC"} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={dirty ? "#6b5b4a" : "#cfd6da"} />
        <stop offset="1" stopColor={dirty ? "#3b2f25" : "#9aa3ab"} />
      </linearGradient>
    </defs>
    <rect width="460" height="340" fill={dirty ? "#5a4a3a" : "#d9dee2"} />
    <rect x="0" y="250" width="460" height="90" fill={dirty ? "#3a2e23" : "#aeb7be"} />
    <rect x="60" y="70" width="340" height="200" rx="26" fill={dirty ? "#7a6552" : "#3d4750"} />
    <rect x="90" y="100" width="280" height="150" rx="18" fill={dirty ? "#8a7460" : "#111820"} />

    {dirty && (
      <g>
        {[
          [140, 130], [180, 150], [220, 125], [260, 160], [300, 135], [200, 185], [250, 200], [310, 185], [150, 210], [280, 220], [120, 175], [340, 165],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={[3, 4, 5][i % 3]} fill="#caa13a" opacity=".9" />
        ))}
        <path d="M110 170c20-6 30-4 44 0M250 145c18-5 30-3 46 2M150 220c20-6 34-4 50 1" stroke="#d6c38a" strokeWidth="4" strokeLinecap="round" opacity=".55" />
        <path d="M180 195c8-8 16 4 24-2s14-10 22-2" fill="none" stroke="#d8d8d2" strokeWidth="3" opacity=".5" />
        <circle cx="120" cy="270" r="14" fill="#caa13a" opacity=".6" />
        <circle cx="370" cy="288" r="10" fill="#caa13a" opacity=".55" />
        <text x="230" y="320" textAnchor="middle" fill="#2a2118" fontSize="14" fontWeight="800" letterSpacing="3">DIRTY INTERIOR</text>
      </g>
    )}

    {!dirty && (
      <g>
        <rect x="90" y="100" width="280" height="150" rx="18" fill="#101820" />
        <path d="M100 108h260" stroke="#2a3540" strokeWidth="4" opacity=".7" />
        {[[140, 140], [240, 150], [320, 135], [180, 195], [290, 205]].map(([x, y], i) => (
          <path key={i} d={`M${x} ${y}l6 -14 6 14 6 -8`} fill="none" stroke="#f8d447" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
        ))}
        <path d="M96 102c40-10 80-10 120 0M250 102c40 8 80 8 120 0" fill="none" stroke="#ffffff" strokeWidth="3" opacity=".5" strokeLinecap="round" />
        <text x="230" y="320" textAnchor="middle" fill="#2e3539" fontSize="14" fontWeight="800" letterSpacing="3">SHOWROOM CLEAN</text>
      </g>
    )}
  </svg>
);

const BeforeAfter = () => (
  <section className="bg-[#101820] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#ff8b58]">Your car can feel good again</p>
        <h2 className="display-font text-4xl uppercase leading-none sm:text-6xl">From Everyday <span className="text-[#ff6a2a]">Mess</span> To Clean-Car Confidence.</h2>
        <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base">Hair, dust, and debris build up fast, even in places you can't see. Keep the AutoCare Kit nearby and restore the clean interior you actually enjoy driving.</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6">
        <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-[#2a2118]">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#b0301a] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white">Before</span>
          <img src="/images/before-car-floor.jpg" alt="Dirty car floor with hair, dust and debris before cleaning" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width="1200" height="900" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-5 pt-16 text-sm font-bold text-white">Hair, dust, and debris build up fast, even when you can't see it.</figcaption>
        </figure>
        <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#ff6a2a]/40 bg-[#cfd6da]">
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#176839] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white">After</span>
          <img src="/images/after-car-floor.jpg" alt="Clean car floor after vacuuming with AutoCare kit" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width="1200" height="900" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-5 pb-5 pt-16 text-sm font-bold text-white">One pass with the AutoCare Kit, spotless in under a minute.</figcaption>
        </figure>
      </div>

      <div className="mt-10 text-center">
        <p className="mb-4 text-sm font-bold text-white/70">Tap below to claim this exact kit, delivered free and payable on arrival.</p>
        <CTAButton>Get My Showroom-Clean Car</CTAButton>
      </div>
    </div>
  </section>
);

const testimonials = [
  { name: "Chidinma Okafor", initials: "CO", city: "Lagos", car: "Honda Civic", text: "I used to spend ₦3,000 every weekend at the car wash. After two months this kit already paid for itself. The suction is unreal, it pulled sand out of seat cracks I didn't even know existed. Best purchase I've made this year.", rating: 5, verified: true },
  { name: "Tunde Bakare", initials: "TB", city: "Abuja", car: "Toyota Camry", text: "My kids eat in the car every day and it was a nightmare. This vacuum cleans everything in under 5 minutes. The free towels are a game changer, I use them for the dashboard and windows. My wife wants one for her car now.", rating: 5, verified: true },
  { name: "Ngozi Eze", initials: "NE", city: "Port Harcourt", car: "Hyundai Tucson", text: "I was skeptical because every car vacuum I bought before was weak junk. This one actually works. The battery lasts long enough to clean my whole SUV and the suction is powerful. The towels are soft and don't leave lint behind.", rating: 5, verified: true },
  { name: "Emeka Udoh", initials: "EU", city: "Enugu", car: "Kia Sportage", text: "The pay on delivery option sold me, I didn't have to pay anything upfront. When it arrived I tested it immediately and was impressed. It's compact, powerful, and the 20 free towels are genuinely useful. I've recommended it to everyone at my office.", rating: 5, verified: true },
  { name: "Amina Yusuf", initials: "AY", city: "Kano", car: "Toyota Corolla", text: "I have a German Shepherd who sheds everywhere. This vacuum picks up pet hair like nothing else I've tried. I keep it in the boot and use it twice a week. The rechargeable battery is convenient and the whole kit is well made.", rating: 5, verified: true },
  { name: "Oluwaseun Adeyemi", initials: "OA", city: "Ibadan", car: "Honda CR-V", text: "Ordered on Monday, arrived on Wednesday. Free delivery and I paid when it came, no stress. The vacuum is lightweight and powerful. I cleaned my car in 10 minutes and it looked brand new. The towels are machine washable which saves money.", rating: 5, verified: true },
  { name: "Blessing Ibe", initials: "BI", city: "Calabar", car: "Mazda CX-5", text: "This is not one of those cheap vacuums that stops working after a week. It's solid, powerful, and the battery lasts. I use it for my car and even cleaned the sofa at home. The 20 free towels are a nice bonus, I use them everywhere now.", rating: 5, verified: true },
];

const Testimonials = () => (
  <section className="bg-[#f7f4ed] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#e5541b]">Trusted by 12,000+ car owners</p>
        <h2 className="display-font text-4xl uppercase leading-none sm:text-6xl">What Our Customers <span className="text-[#e5541b]">Are Saying.</span></h2>
        <p className="mt-4 text-sm leading-6 text-[#62686d] sm:text-base">Real reviews from real car owners across Nigeria. No fake testimonials, just people who love their cleaner cars.</p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <article key={t.name} className="flex flex-col rounded-xl border border-[#d7d2c8] bg-white p-6 transition hover:-translate-y-1 hover:border-[#101820] hover:shadow-[6px_6px_0_#101820]">
            <div className="flex gap-1 text-[#f8d447]">
              {[1, 2, 3, 4, 5].map((s) => <Icon key={s} name="star" className={`h-4 w-4 ${s <= t.rating ? "fill-current" : "text-[#d7d2c8]"}`} />)}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-6 text-[#3a3f44]">"{t.text}"</blockquote>
            <div className="mt-5 flex items-center gap-3 border-t border-[#e3dfd7] pt-4">
              <img
                src={`/images/avatar-${testimonials.indexOf(t) + 1}.jpg`}
                alt={t.name}
                className="h-11 w-11 rounded-full border-2 border-[#ff6a2a] object-cover"
                loading="lazy"
                width="44"
                height="44"
              />
              <div className="min-w-0">
                <strong className="block text-sm font-black text-[#101820]">{t.name}</strong>
                <span className="flex items-center gap-1.5 text-xs text-[#62686d]">
                  {t.verified && <><Icon name="check" className="h-3 w-3 text-[#176839]" /> Verified buyer ·</>}
                  {t.city} · {t.car}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-bold text-[#62686d]">
        <span className="flex items-center gap-2"><Icon name="star" className="h-5 w-5 fill-[#f8d447] text-[#f8d447]" /> 4.9 / 5 average rating</span>
        <span>·</span>
        <span>12,000+ kits shipped</span>
        <span>·</span>
        <span>97% satisfaction rate</span>
      </div>
    </div>
  </section>
);

const ProofAndGuarantee = () => (
  <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
    <div className="mx-auto max-w-4xl">
      <aside className="flex flex-col items-center justify-center border-2 border-[#101820] bg-[#f8d447] p-7 text-center sm:p-12">
        <span className="mx-auto grid h-24 w-24 place-items-center rounded-full border-4 border-[#101820] bg-white text-[#101820]">
          <Icon name="shield" className="h-12 w-12" />
        </span>
        <p className="mt-5 text-xs font-black uppercase tracking-[0.18em]">Your purchase is risk-free</p>
        <h2 className="display-font mt-2 text-4xl uppercase leading-none sm:text-5xl">30-Day Money-Back Guarantee</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#3f4447] sm:text-base">Try the AutoCare Kit for a full 30 days. If it doesn't make your car look better than the last car wash did, send it back for a complete refund, no questions, no hassle. You only pay if you love it.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wide text-[#3f4447]/70">
          <span className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4" /> No questions asked</span>
          <span className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4" /> Full refund guaranteed</span>
          <span className="flex items-center gap-1.5"><Icon name="check" className="h-4 w-4" /> Keep the towels either way</span>
        </div>
      </aside>
    </div>
  </section>
);

const TierPicker = ({ value, onChange }) => (
  <fieldset>
    <legend className="mb-2 text-sm font-bold">Choose your bundle</legend>
    <div className="grid gap-2.5">
      {tiers.map((tier) => {
        const selected = value === tier.id;
        const save = fmt(tier.was - tier.price);
        return (
          <label key={tier.id} className={`flex cursor-pointer items-center gap-3 rounded-md border-2 p-3 transition ${selected ? "border-[#ff6a2a] bg-[#fff5ef]" : "border-[#c9c5bd] bg-[#faf9f6] hover:border-[#101820]"}`}>
            <input type="radio" name="tier" value={tier.id} checked={selected} onChange={() => onChange(tier.id)} className="sr-only" />
            <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 ${selected ? "border-[#ff6a2a]" : "border-[#9aa0a4]"}`}>
              {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#ff6a2a]" />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2">
                <strong className="text-sm font-black text-[#101820]">{tier.copy}</strong>
                {tier.badge && <span className="rounded-full bg-[#101820] px-2 py-0.5 text-[10px] font-black uppercase tracking-wide text-white">{tier.badge}</span>}
              </span>
              <span className="block text-xs text-[#62686d]">Save {CUR}{save} · free delivery</span>
            </span>
            <span className="text-right">
              <span className="block display-font text-xl text-[#101820]">{CUR}{fmt(tier.price)}</span>
              <span className="block text-[11px] font-bold text-[#9aa0a4] line-through">{CUR}{fmt(tier.was)}</span>
            </span>
          </label>
        );
      })}
    </div>
  </fieldset>
);

const OrderForm = () => {
  const [tierId, setTierId] = useState("2");
  const tier = tiers.find((t) => t.id === tierId) ?? tiers[0];

  return (
    <form action="#" method="post" className="border border-white/15 bg-white p-5 text-[#101820] shadow-2xl sm:p-7">
      <div className="mb-5 flex items-start justify-between gap-4 border-b border-[#ddd8cf] pb-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#dc4b15]">Quick order</p>
          <h3 className="mt-1 text-xl font-black">Reserve your bundle</h3>
        </div>
        <span className="rounded-full bg-[#dff4e8] px-3 py-1.5 text-xs font-extrabold text-[#176839]">Pay on delivery</span>
      </div>
      <div className="mb-4 rounded-md border border-[#ffe0cf] bg-[#fff5ef] px-4 py-3">
        <CountdownTimer />
      </div>
      <TierPicker value={tierId} onChange={setTierId} />
      <div className="mt-4 space-y-4">
        <label className="block text-sm font-bold">
          Full name
          <input required name="name" autoComplete="name" className="mt-1.5 w-full rounded-md border border-[#c9c5bd] bg-[#faf9f6] px-4 py-3 font-normal outline-none transition focus:border-[#ff6a2a] focus:ring-3 focus:ring-[#ff6a2a]/15" placeholder="Your full name" />
        </label>
        <label className="block text-sm font-bold">
          Phone number
          <input required name="phone" type="tel" autoComplete="tel" className="mt-1.5 w-full rounded-md border border-[#c9c5bd] bg-[#faf9f6] px-4 py-3 font-normal outline-none transition focus:border-[#ff6a2a] focus:ring-3 focus:ring-[#ff6a2a]/15" placeholder="Your active phone number" />
        </label>
        <label className="block text-sm font-bold">
          Delivery location
          <input required name="location" autoComplete="street-address" className="mt-1.5 w-full rounded-md border border-[#c9c5bd] bg-[#faf9f6] px-4 py-3 font-normal outline-none transition focus:border-[#ff6a2a] focus:ring-3 focus:ring-[#ff6a2a]/15" placeholder="City and delivery address" />
        </label>
      </div>
      <input type="hidden" name="quantity" value={tier.bundles} />
      <div className="mt-4 flex items-center justify-between border-t border-[#e3dfd7] pt-4 text-sm">
        <span className="font-bold">Total to pay on delivery</span>
        <span className="display-font text-2xl text-[#101820]">{CUR}{fmt(tier.price)}</span>
      </div>
      <button type="submit" className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#ff6a2a] px-5 py-4 text-base font-black text-white shadow-[0_7px_0_#a9310e] transition hover:-translate-y-0.5 hover:bg-[#f25b1c] active:translate-y-1 active:shadow-[0_2px_0_#a9310e]">
        Grab the Bundle Today
        <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
      <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#e3dfd7] pt-4">
        <TrustPerk icon="delivery" title="Free Delivery" copy="On every bundle" />
        <TrustPerk icon="payment" title="Pay On Delivery" copy="No upfront payment" />
      </div>
      <PaymentTrustBadges />
    </form>
  );
};

const faqs = [
  { q: "How does pay on delivery work?", a: "Place your order and we deliver the AutoCare Kit to your address. You inspect the vacuum and towels, then pay the courier directly in cash. No upfront payment is required." },
  { q: "Is delivery really free?", a: "Yes. Delivery is free nationwide on every bundle. There are no hidden shipping or handling fees added at checkout." },
  { q: "How long does delivery take?", a: "Most orders arrive within 2 to 5 business days depending on your location. You will receive a call to confirm your delivery before dispatch." },
  { q: "How long does the battery last on a full charge?", a: "The cordless vacuum provides dependable runtime for a full interior clean on a single charge, and recharges quickly via the included charger so it is ready when you need it." },
  { q: "Can the towels scratch my dashboard or screens?", a: "No. The towels are 100% lint-free and scratch-safe on all car interiors, including dashboards, screens, glass, and trim." },
  { q: "How do I care for the reusable towels?", a: "The towels are machine washable. Wash them with similar colours, avoid fabric softener, and air dry or tumble dry low to keep them effective for hundreds of uses." },
  { q: "Can the vacuum handle wet spills?", a: "The vacuum is designed for dry mess like crumbs, dust, and pet hair. Use the reusable towels to wipe up liquid spills quickly and safely." },
  { q: "What is the return policy?", a: "Every AutoCare Kit is covered by a 30-day money-back guarantee. If it is not right for you, contact our support team for a refund." },
];

const FAQItem = ({ q, a, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#e3dfd7]">
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 py-5 text-left">
        <span className="text-base font-black text-[#101820] sm:text-lg">{q}</span>
        <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-[#101820] text-[#101820] transition ${open ? "rotate-45 bg-[#ff6a2a] text-white" : "bg-white"}`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <p className="overflow-hidden text-sm leading-7 text-[#5b6268] sm:text-base">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section id="faq" className="scroll-mt-4 bg-[#f7f4ed] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#e5541b]">Before you order</p>
          <h2 className="display-font text-4xl uppercase leading-none sm:text-6xl">Questions? Answered.</h2>
          <p className="mt-4 text-sm leading-6 text-[#62686d]">Everything about delivery, payment, battery, towel care, and returns.</p>
        </div>
        <div className="mt-10 rounded-xl border border-[#d7d2c8] bg-white px-5 sm:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-[#62686d]">Still have a question? Reach our support team anytime.</p>
          <CTAButton compact className="inline-flex">Order Now</CTAButton>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section id="order" className="hero-grid scroll-mt-4 bg-[#101820] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.72fr] lg:gap-20">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff8b58]">Your offer is waiting</p>
        <h2 className="display-font mt-4 text-5xl uppercase leading-[0.93] sm:text-7xl">Stop Paying For Car Washes. <span className="text-[#ff6a2a]">Start Enjoying Your Car.</span></h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Every day you wait is another day of crumbs in the seats and dust on the dash. Order once, use it for years, and never stand in a car-wash queue again.</p>
        <div className="mt-6 grid max-w-md grid-cols-3 gap-3 text-center">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <span className="display-font block text-3xl text-[#ff6a2a]">1</span>
            <span className="text-xs font-bold uppercase tracking-wide text-white/60">Cordless vacuum</span>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <span className="display-font block text-3xl text-[#ff6a2a]">20</span>
            <span className="text-xs font-bold uppercase tracking-wide text-white/60">Free towels</span>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <span className="display-font block text-3xl text-[#ff6a2a]">₦0</span>
            <span className="text-xs font-bold uppercase tracking-wide text-white/60">Delivery fee</span>
          </div>
        </div>
        <ul className="mt-8 grid gap-3 text-sm font-bold sm:grid-cols-2">
          {["Cordless car vacuum", "20 reusable towels free", "Free nationwide delivery", "Pay only on delivery"].map((item) => (
            <li key={item} className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#ff6a2a] text-white"><Icon name="check" className="h-4 w-4" /></span>{item}</li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
          {trustBadges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[#ff8b58]"><Icon name={badge.icon} className="h-4 w-4" /></span>
              <span className="text-sm font-bold text-white/85">{badge.title}</span>
            </div>
          ))}
        </div>
      </div>
      <OrderForm />
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#0b1117] px-5 py-8 text-white/55 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center justify-between gap-3 text-center text-xs sm:flex-row sm:text-left">
        <a href="#top" className="display-font text-xl tracking-wide text-white">AUTO<span className="text-[#ff6a2a]">CARE.</span></a>
        <p>Portable cleaning power for cars that deserve better.</p>
        <p>&copy; {new Date().getFullYear()} AutoCare Kit. All rights reserved.</p>
      </div>
      <p className="mx-auto mt-6 max-w-4xl border-t border-white/10 pt-5 text-center text-[10px] leading-5 text-white/35 sm:text-xs">
        This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
      </p>
    </div>
  </footer>
);

const SocialProofToast = () => {
  const [visible, setVisible] = useState(false);
  const [toast, setToast] = useState({ name: "", location: "", tier: "" });

  useEffect(() => {
    const names = ["Chidi O.", "Amina K.", "Tunde A.", "Ngozi E.", "Emeka U.", "Fatima B.", "Oluwaseun D.", "Aisha M.", "Chukwuemeka P.", "Blessing I.", "Yusuf L.", "Adaeze N."];
    const locations = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Enugu", "Benin City", "Calabar", "Owerri", "Aba", "Jos", "Warri"];
    const tierLabels = ["Starter Bundle", "Most Popular Bundle", "Best Value Bundle"];

    const show = () => {
      setToast({
        name: names[Math.floor(Math.random() * names.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        tier: tierLabels[Math.floor(Math.random() * tierLabels.length)],
      });
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
    };

    const first = setTimeout(show, 6000);
    const interval = setInterval(show, 18000);
    return () => { clearTimeout(first); clearInterval(interval); };
  }, []);

  return (
    <div className={`fixed left-4 bottom-20 z-50 max-w-[280px] rounded-xl border border-[#e3dfd7] bg-white p-4 shadow-2xl transition-all duration-500 sm:left-6 sm:bottom-24 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`} aria-live="polite">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#176839] text-sm font-black text-white">✓</span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-[#101820]">{toast.name}</p>
          <p className="text-xs text-[#62686d]">just ordered the {toast.tier}</p>
          <p className="mt-1 text-[10px] text-[#9aa0a4]">📍 {toast.location}</p>
        </div>
      </div>
    </div>
  );
};

const StockCounter = () => {
  const [stock] = useState(() => {
    const saved = localStorage.getItem("autocare_stock");
    if (saved) return Number(saved);
    const start = 17;
    localStorage.setItem("autocare_stock", String(start));
    return start;
  });
  const [current, setCurrent] = useState(stock);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => {
        if (prev <= 4) return 4;
        const drop = Math.random() > 0.7 ? 1 : 0;
        const next = prev - drop;
        localStorage.setItem("autocare_stock", String(next));
        return next;
      });
    }, 45000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6a2a]/40 bg-[#ff6a2a]/10 px-4 py-2">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff4500] opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ff6a2a]"></span>
      </span>
      <span className="text-xs font-black uppercase tracking-wide text-[#ff6a2a]">Only {current} kits left at this price</span>
    </div>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/2348000000000?text=Hi%2C%20I%27m%20interested%20in%20the%20AutoCare%20Kit.%20Can%20I%20order%3F"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed right-4 bottom-20 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#20b858] sm:right-6 sm:bottom-24"
    aria-label="Order via WhatsApp"
  >
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
    <span className="hidden sm:inline">Order via WhatsApp</span>
  </a>
);

const DesktopStickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={`fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 transition-all duration-500 lg:block ${visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0 pointer-events-none"}`}>
      <a
        href="#order"
        className="group flex flex-col items-center gap-2 rounded-2xl bg-[#ff6a2a] px-4 py-5 text-center text-white shadow-[0_8px_0_#a9310e,0_12px_30px_rgba(255,106,42,.35)] transition hover:-translate-y-1 hover:bg-[#f25b1c] hover:shadow-[0_10px_0_#a9310e,0_16px_40px_rgba(255,106,42,.45)] active:translate-y-1 active:shadow-[0_4px_0_#a9310e]"
      >
        <Icon name="tag" className="h-6 w-6" />
        <span className="display-font text-xs uppercase leading-3">Order<br />Now</span>
        <span className="h-8 w-0.5 bg-white/40" />
        <span className="display-font text-lg">{CUR}36,500</span>
        <span className="text-[9px] font-black uppercase tracking-wider text-white/80">Pay on Delivery</span>
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

const OrderNotificationToast = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 15000);
    const hide = setTimeout(() => setVisible(false), 21000);
    return () => { clearTimeout(timer); clearTimeout(hide); };
  }, []);

  return (
    <div className={`fixed right-4 bottom-20 z-40 max-w-[260px] rounded-xl border border-[#176839]/30 bg-white p-4 shadow-2xl transition-all duration-500 sm:right-6 sm:bottom-24 ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"}`}>
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#dff4e8] text-[#176839]">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-bold text-[#101820]">Stock updating in real-time</p>
          <p className="text-[10px] text-[#9aa0a4]">Someone just claimed a kit</p>
        </div>
      </div>
    </div>
  );
};

const MobileStickyCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#d8d3ca] bg-white/95 p-3 shadow-[0_-10px_25px_rgba(0,0,0,.13)] backdrop-blur sm:hidden">
    <a href="#order" className="flex w-full items-center justify-center gap-2 rounded-md bg-[#ff6a2a] px-4 py-3.5 text-sm font-black text-white shadow-[0_4px_0_#a9310e] active:translate-y-0.5 active:shadow-[0_2px_0_#a9310e]">
      Claim Vacuum + 20 Free Towels
      <Icon name="arrow" className="h-5 w-5" />
    </a>
  </div>
);

const PaymentTrustBadges = () => (
  <div className="mt-4 flex items-center justify-center gap-3 rounded-lg border border-[#e3dfd7] bg-[#faf9f6] px-4 py-3">
    <span className="text-[10px] font-bold uppercase tracking-wide text-[#9aa0a4]">We accept:</span>
    <div className="flex items-center gap-2">
      <span className="rounded bg-[#101820] px-2 py-1 text-[9px] font-black text-white">VISA</span>
      <span className="rounded bg-[#1a53a0] px-2 py-1 text-[9px] font-black text-white">MASTERCARD</span>
      <span className="rounded bg-[#25D366] px-2 py-1 text-[9px] font-black text-white">PAY ON DELIVERY</span>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="overflow-x-hidden pb-[76px] sm:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Pain />
        <Features />
        <PricingTiers />
        <GiftSection />
        <BeforeAfter />
        <Testimonials />
        <ProofAndGuarantee />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA />
      <DesktopStickyCTA />
      <SocialProofToast />
      <OrderNotificationToast />
    </div>
  );
}
