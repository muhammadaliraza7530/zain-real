import { createFileRoute } from "@tanstack/react-router";
import { Award, Handshake, MapPin, ShieldCheck } from "lucide-react";
import { about, img, partyDeal, registrations, site, stats, whyChooseUs } from "@/lib/site-data";
import { CtaBand, PageHero, Prose } from "@/components/PageBits";
import { Reveal } from "@/components/ui-bits";
import { TestimonialsRail } from "@/components/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Zain Real Estate — Property Consultant in Sukkur" },
      {
        name: "description",
        content:
          "Zain Real Estate is a property consultancy and marketing firm in Sukkur led by Hizb Ullah Abro — new project bookings, sale, purchase and rent.",
      },
      { property: "og:title", content: "About Zain Real Estate" },
      { property: "og:description", content: "Trusted property consultant and marketing firm in Sukkur." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: MapPin, title: "Local roots", body: "Based in Delhi Muslim Society near Sukkur IBA University — we know every street, society and rate." },
  { icon: ShieldCheck, title: "Verified deals", body: "Every property we offer is checked for clear title and genuine ownership before it reaches you." },
  { icon: Handshake, title: "Honest advice", body: "We tell you the real market position — whether you are buying, selling, renting or booking." },
  { icon: Award, title: "Full support", body: "From first visit to registry and handover, one team stays with you at every step." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={about.heading}
        intro="Zain Real Estate — Consultant & Marketing, Sukkur. Led by Hizb Ullah Abro."
        image={img.luxuryHouse}
      />

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <img
                src={img.completedVilla}
                alt="A completed family home in Sukkur"
                className="aspect-[4/3] w-full rounded-3xl border border-border object-cover"
              />
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-primary/30 bg-card px-6 py-4 shadow-xl sm:-right-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Led by</p>
                <p className="mt-1 text-lg font-extrabold">{site.owner}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">Who we are</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
              Property guidance you can trust in Sukkur
            </h2>
            <Prose>
              {about.paragraphs.map((p) => (
                <p key={p} className="mt-4">{p}</p>
              ))}
            </Prose>
          </Reveal>
        </div>
      </section>

      {/* Areas we cover */}
      <section className="border-t border-border bg-card/30 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">Areas we cover</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Sukkur, street by street</h2>
            <Prose>
              <p className="mt-5">
                Sukkur is not one market — it is many small ones, and rates can change from one lane to the next. We
                keep an active file on each of the areas below, so the price we quote you is the price the area is
                really trading at this month.
              </p>
            </Prose>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Delhi Muslim Society",
                body: "Our home ground. Residential plots and family houses, with the Sukkur IBA University belt a short walk away.",
              },
              {
                title: "Near Sukkur IBA University",
                body: "Strong demand from faculty, students' families and professionals — good for both rental income and resale.",
              },
              {
                title: "Mehran Society",
                body: "Larger plots and bungalows for big families, on wide planned streets with sweet water and steady electricity.",
              },
              {
                title: "100 Ft Road",
                body: "Sukkur's commercial spine. Shops, offices and full buildings with high footfall and reliable rental yield.",
              },
              {
                title: "Airport Road & city centre",
                body: "Mixed residential and commercial options, from small flats to multi-floor investment buildings.",
              },
              {
                title: "New housing schemes",
                body: "Gated, planned societies on the city's edge — launch-rate bookings with easy instalment plans.",
              },
            ].map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-3xl border border-border bg-background/60 p-7">
                  <h3 className="text-lg font-bold text-primary">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Party-to-party promise */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">
              {partyDeal.eyebrow}
            </p>
            <h2 dir="rtl" className="mt-4 text-2xl font-extrabold leading-snug sm:text-3xl">
              {partyDeal.titleUrdu}
            </h2>
            <p className="mt-3 text-sm font-semibold text-muted-foreground sm:text-base">{partyDeal.title}</p>
            <p dir="rtl" className="mt-5 text-sm leading-loose text-muted-foreground sm:text-base">
              {partyDeal.introUrdu}
            </p>
            <ul className="mt-8 space-y-4">
              {partyDeal.points.map((p) => (
                <li key={p.en} className="flex items-start gap-3">
                  <span aria-hidden className="text-lg leading-none">
                    {p.icon}
                  </span>
                  <span>
                    <span dir="rtl" className="block text-sm font-semibold sm:text-base">
                      {p.urdu}
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">{p.en}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card/60 p-8">
              <h3 className="text-xl font-extrabold">How a deal works with us</h3>
              <Prose>
                <p className="mt-4">
                  First we listen. Budget, area, property type, and whether you need it for your own family, for rent
                  or purely as an investment — those four answers decide everything that follows.
                </p>
                <p>
                  Then we shortlist. You only see properties we have visited ourselves and whose documents we have
                  seen, so no one's time is wasted on files that cannot transfer.
                </p>
                <p>
                  Then we sit both parties together. Buyer and seller, same table, same papers, same figure. Price
                  talks happen in the open and the agreement is written plainly.
                </p>
                <p>
                  Finally we finish the paperwork — token, agreement, transfer and registry — and stay on the file
                  until the keys or the plot file are physically in your hands.
                </p>
              </Prose>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Full Urdu message */}
      <section className="relative overflow-hidden border-y border-border bg-card/40 py-20 lg:py-28">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">
              ہمارا وعدہ
            </p>
            <h2 dir="rtl" className="mt-4 text-center text-2xl font-extrabold leading-snug sm:text-3xl lg:text-4xl">
              {partyDeal.titleUrdu}
            </h2>
            <p dir="rtl" className="mx-auto mt-6 max-w-2xl text-center text-base leading-loose sm:text-lg">
              اگر کسی دوست کو سکھر میں پراپرٹی خریدنی یا فروخت کرنی ہو تو ہم سے رابطہ کریں۔
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              { icon: "🤝", text: "صاف، شفاف اور اعتماد کے ساتھ ڈیل" },
              { icon: "📍", text: "مناسب پراپرٹی اور بہتر مواقع" },
              { icon: "💼", text: "Party-to-Party Deal" },
              { icon: "📞", text: "رابطہ کریں: Zain Real Estate — 0313-5974923" },
            ].map((p, i) => (
              <Reveal key={p.text} delay={(i % 2) * 90}>
                <div className="flex h-full items-center gap-4 rounded-3xl border border-border bg-background/60 p-6">
                  <span aria-hidden className="text-2xl">
                    {p.icon}
                  </span>
                  <p dir="rtl" className="text-sm font-bold sm:text-base">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <p dir="rtl" className="text-xl font-extrabold text-primary sm:text-2xl">
              {partyDeal.closingUrdu}
            </p>
            <p dir="rtl" className="mt-2 text-sm font-semibold text-muted-foreground">
              🤝 {partyDeal.dealingUrdu}
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Property Buy · Sell · Investment — Sukkur, Pakistan
            </p>
          </Reveal>
        </div>
      </section>


      {/* Stats */}
      <section className="border-y border-border bg-card/40 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 text-center sm:grid-cols-3 lg:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <p className="text-4xl font-extrabold text-primary sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">Why people choose us</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">Built on trust, not just deals</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-border bg-card/60 p-7">
                  <p.icon className="size-8 text-primary" />
                  <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us + expertise */}
      <section className="border-t border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold sm:text-3xl">What sets Zain Real Estate apart</h2>
            <div className="mt-8 space-y-6">
              {whyChooseUs.map((w) => (
                <div key={w.title} className="flex gap-4">
                  <ShieldCheck className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-bold">{w.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Our expertise</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {registrations.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-primary"
                >
                  {r}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-border bg-background/60 p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Visit our office</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{site.address}</p>
              <p className="mt-2 text-sm font-semibold">{site.phone}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <TestimonialsRail />

      <CtaBand
        title="Let's talk about your property goals"
        body={`Call or WhatsApp ${site.owner} at ${site.phone} — free consultation, honest advice.`}
      />
    </>
  );
}
