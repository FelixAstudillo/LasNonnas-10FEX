import FadeUp from "@/components/FadeUp";
import { brand } from "@/lib/brand";

export default function StorySection() {
  return (
    <section id="historia" style={{ padding: "6px 0 18px", scrollMarginTop: 90 }}>
      <div className="container">
        <div className="paper" style={{ padding: 22 }}>
          <div style={{ display: "grid", gap: 12 }}>
            <FadeUp>
              <div className="title-display" style={{ fontSize: 34, color: "var(--brand)" }}>
                {brand.storyTitle}
              </div>
            </FadeUp>

            <FadeUp>
              <div className="hairline" />
            </FadeUp>

            <FadeUp>
              <p className="muted" style={{ fontSize: 16, lineHeight: 1.85, margin: 0 }}>
                {brand.storyBody}
              </p>
            </FadeUp>

            <FadeUp>
              <div style={{ display: "grid", gap: 8, paddingTop: 6 }}>
                <div className="title-script" style={{ fontSize: 26, color: "var(--brand-2)" }}>
                  “{brand.storyQuote}”
                </div>
                <div className="muted" style={{ fontSize: 14 }}>
                  {brand.storyDate}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
