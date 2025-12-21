import FadeUp from "@/components/FadeUp";
import type { MenuCategory } from "@/lib/menu";

function formatClp(value: number) {
  return new Intl.NumberFormat("es-CL").format(value);
}

type Props = {
  category: MenuCategory;
};

export default function MenuCategorySection({ category }: Props) {
  return (
    <section id={category.id} style={{ scrollMarginTop: 90, padding: "26px 0" }}>
      <FadeUp>
        <div style={{ display: "grid", gap: 10, paddingBottom: 10 }}>
          <div className="title-display" style={{ fontSize: 34, color: "var(--brand)" }}>
            MENÚ
          </div>
          <div className="title-script" style={{ fontSize: 46, lineHeight: 1, color: "var(--brand)" }}>
            {category.title}
          </div>
          <div className="hairline" />
        </div>
      </FadeUp>

      <div style={{ display: "grid", gap: 14, paddingTop: 16 }}>
        {category.items.map((item) => (
          <FadeUp key={`${category.id}-${item.name}`}>
            <div
              style={{
                display: "grid",
                gap: 6,
                padding: "14px 14px",
                borderRadius: 18,
                border: "1px solid rgba(64, 43, 35, 0.10)",
                background: "rgba(255, 255, 255, 0.60)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 10, alignItems: "baseline" }}>
                <div style={{ fontSize: 18, fontWeight: 650, letterSpacing: "0.01em" }}>{item.name}</div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--brand)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {typeof item.priceClp === "number"
                    ? `$${formatClp(item.priceClp)}`
                    : item.priceText
                      ? item.priceText
                      : ""}
                </div>
              </div>
              {item.description ? (
                <div className="muted" style={{ fontSize: 14, lineHeight: 1.5 }}>
                  {item.description}
                </div>
              ) : null}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
