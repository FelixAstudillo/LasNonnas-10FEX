"use client";

import { useEffect, useMemo, useState } from "react";

import type { MenuCategory } from "@/lib/menu";

type Props = {
  categories: MenuCategory[];
};

function getActiveSectionId(ids: string[]) {
  const positions = ids
    .map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      return { id, top: rect.top };
    })
    .filter(Boolean) as { id: string; top: number }[];

  if (positions.length === 0) return ids[0];

  const target = positions
    .sort((a, b) => Math.abs(a.top) - Math.abs(b.top))
    .find((p) => p.top >= -140) ?? positions[0];

  return target.id;
}

export default function MenuNav({ categories }: Props) {
  const ids = useMemo(() => categories.map((c) => c.id), [categories]);
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      setActive(getActiveSectionId(ids));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(10px)",
        background: "rgba(251, 247, 242, 0.85)",
        borderBottom: "1px solid rgba(64, 43, 35, 0.10)",
      }}
    >
      <div className="container" style={{ padding: "12px 0" }}>
        <div
          style={{
            display: "flex",
            gap: 10,
            overflowX: "auto",
            paddingBottom: 6,
          }}
        >
          {categories.map((c) => {
            const isActive = c.id === active;
            return (
              <a
                key={c.id}
                href={`#${c.id}`}
                style={{
                  whiteSpace: "nowrap",
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "10px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(64, 43, 35, 0.14)",
                  background: isActive
                    ? "rgba(75, 51, 43, 0.10)"
                    : "rgba(255, 255, 255, 0.55)",
                  color: "rgba(42, 31, 26, 0.92)",
                }}
              >
                {c.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
