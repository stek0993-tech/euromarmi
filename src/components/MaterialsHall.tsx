import { useEffect, useRef } from "react";

export type MaterialHallItem = {
  cat: string;
  name: string;
  img: string;
};

/**
 * 3D perspective showcase for the material samples: a draggable, auto-drifting
 * carousel with depth, a soft floor reflection and a spotlit stage — the same
 * mechanics as a car-configurator gallery, applied to slabs of stone instead
 * of vehicles. All layout math runs imperatively on refs (rAF loop) so the
 * 60fps transform updates never trigger a React re-render.
 */
export function MaterialsHall({ items, kicker }: { items: MaterialHallItem[]; kicker: string }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeLabelRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const activeLabel = activeLabelRef.current;
    const counter = counterRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    const els = itemRefs.current.filter((el): el is HTMLButtonElement => el !== null);
    if (!stage || !activeLabel || !counter || !prevBtn || !nextBtn || els.length !== items.length) {
      return;
    }

    const n = items.length;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    let position = 0;
    let target: number | null = null;
    let dragging = false;
    let moved = false;
    let pointerId: number | null = null;
    let startX = 0;
    let startPos = 0;
    let paused = false;
    let visible = true;
    let lastTime = performance.now();
    let resumeTimer = 0;
    let activeIndex = -1;
    let rafId = 0;

    const wrap = (v: number, m: number) => ((v % m) + m) % m;
    const circularDistance = (index: number, pos: number, m: number) => {
      let d = index - pos;
      d = ((((d + m / 2) % m) + m) % m) - m / 2;
      return d;
    };
    const nearestIndex = () => wrap(Math.round(position), n);

    function updateActive() {
      const idx = nearestIndex();
      if (idx === activeIndex) return;
      activeIndex = idx;
      const m = items[idx];
      activeLabel!.innerHTML = `${m.name}<small>${m.cat}</small>`;
      counter!.textContent = `${String(idx + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}`;
    }

    function render() {
      const width = stage!.clientWidth || 900;
      const mobile = width < 620;
      const spacing = mobile ? Math.min(190, width * 0.56) : Math.min(272, width * 0.27);
      const maxVisible = mobile ? 1.8 : 2.25;

      els.forEach((el, i) => {
        const d = circularDistance(i, position, n);
        const ad = Math.abs(d);
        const sign = d === 0 ? 0 : d > 0 ? 1 : -1;
        const x = d * spacing;
        const z = -Math.pow(ad, 1.12) * (mobile ? 115 : 148);
        const y = Math.min(ad, 2) * (mobile ? 7 : 11);
        const ry = -d * (mobile ? 17 : 15);
        const rz = sign * Math.min(ad * 1.15, 2.3);
        const scale = Math.max(0.76, 1 - ad * (mobile ? 0.075 : 0.055));
        const opacity = ad > maxVisible ? 0 : Math.max(0.22, 1 - ad * 0.22);
        const blur = ad > 1.55 ? Math.min(1.8, (ad - 1.35) * 1.4) : 0;
        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px) rotateY(${ry.toFixed(2)}deg) rotateZ(${rz.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        el.style.opacity = String(opacity);
        el.style.filter = blur ? `blur(${blur.toFixed(2)}px)` : "";
        el.style.zIndex = String(100 - Math.round(ad * 10));
        el.style.pointerEvents = ad > maxVisible ? "none" : "auto";
        el.classList.toggle("is-active", ad < 0.42);
      });
      updateActive();
    }

    function pauseTemporarily(ms = 4200) {
      paused = true;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        paused = false;
      }, ms);
    }

    function animateTo(nextPosition: number) {
      target = nextPosition;
      pauseTemporarily();
    }

    const onPrev = () => animateTo(Math.round(position) - 1);
    const onNext = () => animateTo(Math.round(position) + 1);
    prevBtn.addEventListener("click", onPrev);
    nextBtn.addEventListener("click", onNext);

    const itemCleanups = els.map((el, i) => {
      const onClick = () => {
        if (moved) return;
        const d = circularDistance(i, position, n);
        if (Math.abs(d) > 0.45) animateTo(position + d);
      };
      const onFocus = () => {
        const d = circularDistance(i, position, n);
        if (Math.abs(d) > 0.12) animateTo(position + d);
      };
      el.addEventListener("click", onClick);
      el.addEventListener("focus", onFocus);
      return () => {
        el.removeEventListener("click", onClick);
        el.removeEventListener("focus", onFocus);
      };
    });

    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      moved = false;
      pointerId = e.pointerId;
      startX = e.clientX;
      startPos = position;
      stage!.classList.add("is-dragging");
      stage!.setPointerCapture?.(e.pointerId);
      target = null;
      pauseTemporarily();
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging || e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) moved = true;
      const divisor = Math.max(150, Math.min(300, stage!.clientWidth * 0.27));
      position = startPos - dx / divisor;
      render();
    };
    const endDrag = (e: PointerEvent) => {
      if (!dragging || (e.pointerId !== undefined && e.pointerId !== pointerId)) return;
      dragging = false;
      stage!.classList.remove("is-dragging");
      try {
        stage!.releasePointerCapture?.(pointerId!);
      } catch {
        // pointer capture may already be released by the browser
      }
      pointerId = null;
      if (moved) animateTo(Math.round(position));
      requestAnimationFrame(() => {
        moved = false;
      });
    };
    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", endDrag);
    stage.addEventListener("pointercancel", endDrag);

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) * 1.15) return;
      e.preventDefault();
      position += e.deltaX * 0.0022;
      target = null;
      pauseTemporarily();
      render();
    };
    stage.addEventListener("wheel", onWheel, { passive: false });

    const onPointerEnter = () => {
      if (!coarse) paused = true;
    };
    const onPointerLeave = () => {
      if (!coarse && !dragging) paused = false;
    };
    const onFocusIn = () => {
      paused = true;
    };
    const onFocusOut = (e: FocusEvent) => {
      if (!stage!.contains(e.relatedTarget as Node)) pauseTemporarily(1800);
    };
    stage.addEventListener("pointerenter", onPointerEnter);
    stage.addEventListener("pointerleave", onPointerLeave);
    stage.addEventListener("focusin", onFocusIn);
    stage.addEventListener("focusout", onFocusOut);

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            visible = entry.isIntersecting && entry.intersectionRatio > 0.08;
          }),
        { threshold: [0, 0.08, 0.25] },
      );
      io.observe(stage);
    }

    function frame(now: number) {
      const dt = Math.min(40, now - lastTime);
      lastTime = now;
      if (target !== null) {
        const diff = target - position;
        position += diff * Math.min(1, dt * 0.0105);
        if (Math.abs(diff) < 0.0015) {
          position = target;
          target = null;
        }
        render();
      } else if (!reduced && !paused && !dragging && visible) {
        position += dt * 0.000095;
        if (position > n * 1000) position = wrap(position, n);
        render();
      }
      rafId = requestAnimationFrame(frame);
    }

    const onResize = () => render();
    window.addEventListener("resize", onResize, { passive: true });

    render();
    rafId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(resumeTimer);
      window.removeEventListener("resize", onResize);
      prevBtn.removeEventListener("click", onPrev);
      nextBtn.removeEventListener("click", onNext);
      itemCleanups.forEach((cleanup) => cleanup());
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", endDrag);
      stage.removeEventListener("pointercancel", endDrag);
      stage.removeEventListener("wheel", onWheel);
      stage.removeEventListener("pointerenter", onPointerEnter);
      stage.removeEventListener("pointerleave", onPointerLeave);
      stage.removeEventListener("focusin", onFocusIn);
      stage.removeEventListener("focusout", onFocusOut);
      io?.disconnect();
    };
  }, [items]);

  return (
    <div className="materials-hall" aria-label="Galleria 3D dei materiali">
      <div className="materials-hall-head">
        <div>
          <div className="materials-hall-kicker">{kicker}</div>
          <div ref={activeLabelRef} className="materials-hall-active" aria-live="polite" />
        </div>
        <div ref={counterRef} className="materials-hall-counter" />
      </div>

      <div
        ref={stageRef}
        className="materials-hall-stage"
        aria-roledescription="carosello 3D materiali"
      >
        {items.map((m, i) => (
          <button
            key={m.name}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            type="button"
            className="materials-hall-item"
            aria-label={`${m.cat} — ${m.name}`}
          >
            <span className="materials-hall-panel">
              <img
                src={m.img}
                alt={`Texture ${m.name}`}
                loading="lazy"
                className="materials-hall-image"
              />
              <span className="materials-hall-topline">
                <span>{m.cat}</span>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </span>
              <span className="materials-hall-meta">
                <span className="materials-hall-cat">{m.cat}</span>
                <span className="materials-hall-name">{m.name}</span>
              </span>
            </span>
            <span className="materials-hall-reflection" aria-hidden="true">
              <img src={m.img} alt="" />
            </span>
          </button>
        ))}
      </div>

      <div className="materials-hall-controls">
        <div className="materials-hall-help">Trascina la galleria · tocca un materiale</div>
        <div className="flex items-center gap-2">
          <button
            ref={prevBtnRef}
            type="button"
            className="materials-hall-nav"
            aria-label="Materiale precedente"
          >
            ←
          </button>
          <button
            ref={nextBtnRef}
            type="button"
            className="materials-hall-nav"
            aria-label="Materiale successivo"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
