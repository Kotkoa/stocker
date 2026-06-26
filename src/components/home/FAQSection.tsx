import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqItems } from "@/data/faq";

export function FAQSection() {
  return (
    <section id="faq" className="py-[clamp(80px,10vw,130px)]">
      <div className="mx-auto max-w-max-width px-[clamp(20px,4vw,40px)]">
        <SectionHeader
          kicker="FAQ"
          title={<>Frequently asked <em>questions</em></>}
          deck="Everything you need to know about our illustrations, photography, formats, and licensing."
        />
        <dl className="max-w-[760px] divide-y divide-border border-t border-border">
          {faqItems.map((item) => (
            <div key={item.question} className="py-6">
              <dt className="font-serif text-[1.3rem] font-medium leading-snug text-foreground">
                {item.question}
              </dt>
              <dd className="mt-3 text-base leading-[1.8] text-muted">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
