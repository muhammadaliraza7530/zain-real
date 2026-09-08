import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { img, partyDeal, process, services, site } from "@/lib/site-data";
import { CtaBand, PageHero } from "@/components/PageBits";
import { Reveal } from "@/components/ui-bits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — New Projects, Sale, Purchase & Rent | Zain Real Estate" },
      {
        name: "description",
        content:
          "New project bookings, property sale and purchase, rentals and property marketing in Sukkur by Zain Real Estate.",
      },
      { property: "og:title", content: "Services — Zain Real Estate" },
      { property: "og:description", content: "Booking, sale, purchase, rent and marketing of property in Sukkur." },
    ],
  }),
  component: ServicesPage,
});

const serviceDetails: Record<string, string[]> = {
  "new-projects": [
    "Launch-rate booking in upcoming housing societies",
    "Easy instalment plans explained clearly",
    "Booking-to-registry documentation support",
  ],
  "sale-purchase": [
    "Verified plots, houses, flats and shops",
    "Fair market price guidance for buyers and sellers",
    "Agreement, transfer and registry handled end to end",
  ],
  rent: [
    "Houses, offices and shops in prime locations",
    "Options matched to your budget and area",
    "Transparent rental agreements for both sides",
  ],
  marketing: [
    "Professional marketing to reach genuine buyers",
    "Honest assessment of your property's market value",
    "Investment consultation for better returns",
  ],
};

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything Property, Under One Roof"
        intro="New project bookings, sale, purchase, rent and property marketing across Sukkur — handled with honesty and full documentation."
        image={img.brickFront}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl space-y-16 px-5 lg:px-8">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-3xl border border-border object-cover"
                />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">
                    Service {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{s.body}</p>
                  <ul className="mt-6 space-y-3">
                    {(serviceDetails[s.slug] ?? []).map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Ask about this service
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">How it works</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">A simple, transparent process</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90}>
                <div className="h-full rounded-3xl border border-border bg-background/60 p-7">
                  <p className="text-3xl font-extrabold text-primary/70">{p.step}</p>
                  <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Party-to-party */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">
              {partyDeal.eyebrow}
            </p>
            <h2 dir="rtl" className="mt-4 text-2xl font-extrabold leading-snug sm:text-3xl">
              {partyDeal.titleUrdu}
            </h2>
            <p className="mt-3 text-sm font-semibold text-muted-foreground sm:text-base">{partyDeal.intro}</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {partyDeal.points.map((p, i) => (
              <Reveal key={p.en} delay={(i % 2) * 90}>
                <div className="h-full rounded-3xl border border-border bg-card/60 p-6 text-left">
                  <span aria-hidden className="text-2xl">
                    {p.icon}
                  </span>
                  <p dir="rtl" className="mt-3 text-sm font-semibold sm:text-base">
                    {p.urdu}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{p.en}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <p dir="rtl" className="text-xl font-extrabold text-primary sm:text-2xl">
              {partyDeal.closingUrdu}
            </p>
            <p dir="rtl" className="mt-2 text-sm font-semibold text-muted-foreground">
              🤝 {partyDeal.dealingUrdu}
            </p>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:text-xs">Good to know</p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">Common questions, answered plainly</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                q: "Do you charge for a first consultation?",
                a: "No. Describe your requirement on call or WhatsApp and we will tell you honestly whether it is achievable in your budget, and in which areas of Sukkur.",
              },
              {
                q: "Are the documents checked before I pay anything?",
                a: "Yes. We confirm clear title and genuine ownership before a token is taken, and we walk you through every paper so you know exactly what you are signing.",
              },
              {
                q: "Can I sell my property through you without listing it publicly?",
                a: "Yes. Many owners prefer a quiet sale. We approach genuine buyers from our own record instead of advertising your address.",
              },
              {
                q: "Do you deal in commercial property too?",
                a: "Shops, offices and complete commercial buildings, for both purchase and rent — including main-road frontage on 100 Ft Road.",
              },
              {
                q: "How do new project bookings work?",
                a: "You book at launch rates with an instalment plan we explain in full before you commit — including what each instalment covers and when possession is expected.",
              },
              {
                q: "Do you help until registry?",
                a: "We stay with the file to the end: agreement, transfer, registry and handover. One team, one point of contact throughout.",
              },
            ].map((f, i) => (
              <Reveal key={f.q} delay={(i % 2) * 90}>
                <div className="h-full rounded-3xl border border-border bg-background/60 p-7">
                  <h3 className="text-base font-bold sm:text-lg">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <CtaBand
        title="Not sure which service you need?"
        body={`Call ${site.phone} and describe your situation — we will point you in the right direction, free of charge.`}
      />
    </>
  );
}
