import MenuCategorySection from "@/components/MenuCategorySection";
import MenuNav from "@/components/MenuNav";
import BrandHero from "@/components/BrandHero";
import StorySection from "@/components/StorySection";
import { brand } from "@/lib/brand";
import { menuCategories, restaurantTagline } from "@/lib/menu";

export default function Home() {
  return (
    <main>
      <BrandHero />

      <MenuNav categories={menuCategories} />

      <StorySection />

      <section style={{ padding: "18px 0 50px" }}>
        <div className="container" style={{ display: "grid", gap: 18 }}>
          {menuCategories.map((category) => (
            <div key={category.id} className="paper" style={{ padding: 18 }}>
              <MenuCategorySection category={category} />
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "10px 0 40px" }}>
        <div className="container">
          <div className="hairline" />
          <div
            style={{
              display: "grid",
              gap: 10,
              paddingTop: 14,
              justifyItems: "center",
              textAlign: "center",
            }}
          >
            <div className="title-display" style={{ fontSize: 18, color: "var(--brand)" }}>
              {brand.name}
            </div>
            <div className="muted" style={{ fontSize: 13 }}>
              {brand.address}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              <a className="metaPill" href={brand.phoneHref}>
                {brand.phoneDisplay}
              </a>
              <a className="metaPill" href={brand.instagramHref} target="_blank" rel="noreferrer">
                {brand.instagramHandle}
              </a>
            </div>
            <div className="muted" style={{ fontSize: 12, paddingTop: 8 }}>
              {restaurantTagline}
            </div>
            <div className="muted" style={{ fontSize: 12 }}>
              Precios en CLP. Menú sujeto a cambios.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
