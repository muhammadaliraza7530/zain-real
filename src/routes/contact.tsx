import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { img, site } from "@/lib/site-data";
import { PageHero } from "@/components/PageBits";
import { Reveal } from "@/components/ui-bits";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Zain Real Estate — Call 0313-5974923, Sukkur" },
      {
        name: "description",
        content:
          "Contact Hizb Ullah Abro at Zain Real Estate, B-52 Delhi Muslim Society near Sukkur IBA University. Phone and WhatsApp 0313-5974923.",
      },
      { property: "og:title", content: "Contact Zain Real Estate" },
      { property: "og:description", content: "Call or WhatsApp 0313-5974923 to discuss property in Sukkur." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", type: "Buying", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Zain Real Estate,%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(
      form.phone,
    )}%0AI am interested in: ${encodeURIComponent(form.type)}%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/923135974923?text=${text}`, "_blank");
    toast.success("Opening WhatsApp with your enquiry…");
  };

  const cards = [
    { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phoneTel}` },
    { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: site.whatsapp },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Office", value: site.address, href: site.maps },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Find Your Property"
        intro="Call, WhatsApp or visit our office near Sukkur IBA University — free consultation with Hizb Ullah Abro."
        image={img.luxuryVilla}
      />

      {/* Contact cards */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="block h-full rounded-3xl border border-border bg-card/60 p-7 transition-colors hover:border-primary/50"
              >
                <c.icon className="size-7 text-primary" />
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">{c.label}</p>
                <p className="mt-2 text-sm font-semibold leading-relaxed">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="border-t border-border bg-card/40 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Send an enquiry</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Fill this in and it opens WhatsApp with your message ready to send.
            </p>
            <form onSubmit={submit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Full name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Phone</span>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="03xx-xxxxxxx"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">I am interested in</span>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                >
                  <option>Buying</option>
                  <option>Selling</option>
                  <option>Renting</option>
                  <option>New project booking</option>
                  <option>Property marketing</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Message</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Area, budget, property type…"
                />
              </label>
              <button
                type="submit"
                className="btn-shake sheen-on-hover inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-accent"
              >
                Send via WhatsApp
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-background/60 p-7">
                <div className="flex items-center gap-3">
                  <Clock className="size-6 text-primary" />
                  <h3 className="text-lg font-bold">Office hours</h3>
                </div>
                <div className="mt-4 space-y-2">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-border">
                <iframe
                  title="Zain Real Estate office location — Delhi Muslim Society, Sukkur"
                  src="https://maps.google.com/maps?q=Delhi%20Muslim%20Society%20Near%20Sukkur%20IBA%20University%20Sukkur&output=embed"
                  className="h-80 w-full"
                  loading="lazy"
                />
              </div>
              <div className="rounded-3xl border border-primary/30 bg-primary/10 p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">Fastest response</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  WhatsApp us any time — we usually reply within minutes during working hours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
