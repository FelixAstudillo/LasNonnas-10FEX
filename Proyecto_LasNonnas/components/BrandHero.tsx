import FadeUp from "@/components/FadeUp";
import { brand } from "@/lib/brand";

export default function BrandHero() {
  return (
    <header className="hero" style={{ padding: "34px 0 18px" }}>
      <div className="container">
        <div className="heroCard" style={{ padding: 22 }}>
          <div className="heroGrid">
            <div className="heroPoster" aria-hidden="true" />

            <div style={{ display: "grid", gap: 14, alignContent: "start" }}>
              <FadeUp>
                <div className="title-display" style={{ fontSize: 40, color: "var(--brand)" }}>
                  CARTA
                </div>
              </FadeUp>

              <FadeUp>
                <div className="title-script" style={{ fontSize: 54, lineHeight: 1, color: "var(--brand)" }}>
                  Menú
                </div>
              </FadeUp>

              <div className="hairline" style={{ width: "min(520px, 100%)" }} />

              <FadeUp>
                <div style={{ display: "grid", gap: 10 }}>
                  <div className="title-display" style={{ fontSize: 34, color: "var(--brand)" }}>
                    {brand.name}
                  </div>
                  <div className="title-script" style={{ fontSize: 36, lineHeight: 1.05, color: "var(--brand)" }}>
                    {brand.slogan}
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                <p className="muted" style={{ maxWidth: 720, fontSize: 15, lineHeight: 1.7 }}>
                  {brand.storyQuote}
                </p>
              </FadeUp>

              <FadeUp>
                <div className="heroActions">
                  <a className="btn" href="#cafes-te">
                    Ver menú
                  </a>
                  <a className="btn btnGhost" href="#historia">
                    Conócenos
                  </a>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="heroMeta">
                  <span className="metaPill">{brand.address}</span>
                  <a className="metaPill" href={brand.phoneHref}>
                    {brand.phoneDisplay}
                  </a>
                  <a className="metaPill" href={brand.instagramHref} target="_blank" rel="noreferrer">
                    {brand.instagramHandle}
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
