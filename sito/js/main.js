// Sala materiali 3D: carosello trascinabile con rotazione automatica e scheda di dettaglio.
(function () {
  var root = document.querySelector(".materials-hall");
  if (!root) return;

  var stage = root.querySelector(".materials-hall-stage");
  var els = Array.prototype.slice.call(root.querySelectorAll(".materials-hall-item"));
  var activeLabel = root.querySelector(".materials-hall-active");
  var counter = root.querySelector(".materials-hall-counter");
  var navButtons = root.querySelectorAll(".materials-hall-nav");
  var prevBtn = navButtons[0];
  var nextBtn = navButtons[1];

  var sheet = root.querySelector(".materials-sheet");
  var closeBtn = sheet.querySelector(".materials-sheet-close");
  var sheetMedia = sheet.querySelector(".materials-sheet-media");
  var sheetCat = sheet.querySelector(".materials-sheet-cat");
  var sheetName = sheet.querySelector(".materials-sheet-name");
  var sheetDesc = sheet.querySelector(".materials-sheet-desc");
  var sheetSpecs = sheet.querySelectorAll(".materials-sheet-specs dd");
  var sheetCta = sheet.querySelector(".materials-sheet-cta");

  var items = els.map(function (el) {
    return {
      name: el.dataset.name || "",
      cat: el.dataset.cat || "",
      img: el.dataset.img || "",
      origin: el.dataset.origin || "",
      variation: el.dataset.variation || "",
      finishes: el.dataset.finishes || "",
      desc: el.dataset.desc || "",
    };
  });

  var n = items.length;
  if (!n) return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia("(pointer: coarse)").matches;

  var position = 0;
  var target = null;
  var dragging = false;
  var moved = false;
  var pointerId = null;
  var startX = 0;
  var startPos = 0;
  var paused = false;
  var visible = true;
  var lastTime = performance.now();
  var resumeTimer = 0;
  var activeIndex = -1;
  var pressedIndex = -1;
  var handledByPointer = false;

  function wrap(v, m) {
    return ((v % m) + m) % m;
  }
  function circularDistance(index, pos, m) {
    var d = index - pos;
    return ((((d + m / 2) % m) + m) % m) - m / 2;
  }
  function nearestIndex() {
    return wrap(Math.round(position), n);
  }
  function pad(v) {
    return String(v).padStart(2, "0");
  }

  function updateActive() {
    var idx = nearestIndex();
    if (idx === activeIndex) return;
    activeIndex = idx;
    var m = items[idx];
    var small = document.createElement("small");
    small.textContent = m.cat;
    activeLabel.textContent = m.name;
    activeLabel.appendChild(small);
    counter.textContent = pad(idx + 1) + " / " + pad(n);
  }

  function render() {
    var width = stage.clientWidth || 900;
    var mobile = width < 620;
    var spacing = mobile ? Math.min(190, width * 0.56) : Math.min(272, width * 0.27);
    var maxVisible = mobile ? 1.8 : 2.25;

    els.forEach(function (el, i) {
      var d = circularDistance(i, position, n);
      var ad = Math.abs(d);
      var sign = d === 0 ? 0 : d > 0 ? 1 : -1;
      var x = d * spacing;
      var z = -Math.pow(ad, 1.12) * (mobile ? 115 : 148);
      var y = Math.min(ad, 2) * (mobile ? 7 : 11);
      var ry = -d * (mobile ? 17 : 15);
      var rz = sign * Math.min(ad * 1.15, 2.3);
      var scale = Math.max(0.76, 1 - ad * (mobile ? 0.075 : 0.055));
      var opacity = ad > maxVisible ? 0 : Math.max(0.22, 1 - ad * 0.22);
      var blur = ad > 1.55 ? Math.min(1.8, (ad - 1.35) * 1.4) : 0;
      el.style.transform =
        `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px) ` +
        `rotateY(${ry.toFixed(2)}deg) rotateZ(${rz.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      el.style.opacity = String(opacity);
      el.style.filter = blur ? "blur(" + blur.toFixed(2) + "px)" : "";
      el.style.zIndex = String(100 - Math.round(ad * 10));
      el.style.pointerEvents = ad > maxVisible ? "none" : "auto";
      el.classList.toggle("is-active", ad < 0.42);
    });
    updateActive();
  }

  function pauseTemporarily(ms) {
    paused = true;
    window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(
      function () {
        paused = false;
      },
      ms === undefined ? 4200 : ms,
    );
  }

  function animateTo(next) {
    target = next;
    pauseTemporarily();
  }

  // --- Scheda materiale ---
  function onKey(e) {
    if (e.key === "Escape") closeDetail();
  }

  function openDetail(index) {
    var m = items[index];
    sheet.setAttribute("aria-label", "Scheda materiale " + m.name);
    sheetMedia.innerHTML = "";
    var img = document.createElement("img");
    img.src = m.img;
    img.alt = "Texture " + m.name;
    sheetMedia.appendChild(img);
    sheetCat.textContent = m.cat;
    sheetName.textContent = m.name;
    sheetDesc.textContent = m.desc;
    [m.cat, m.origin, m.variation, m.finishes].forEach(function (v, i) {
      if (sheetSpecs[i]) sheetSpecs[i].textContent = v;
    });
    sheet.hidden = false;
    pauseTemporarily(600000);
    closeBtn.focus();
    document.addEventListener("keydown", onKey);
  }

  function closeDetail() {
    if (sheet.hidden) return;
    sheet.hidden = true;
    sheet.setAttribute("aria-label", "Scheda materiale");
    document.removeEventListener("keydown", onKey);
    pauseTemporarily(1500);
  }

  closeBtn.addEventListener("click", closeDetail);
  sheetCta.addEventListener("click", closeDetail);
  sheet.addEventListener("click", function (e) {
    if (e.target === sheet) closeDetail();
  });

  // --- Navigazione ---
  prevBtn.addEventListener("click", function () {
    animateTo(Math.round(position) - 1);
  });
  nextBtn.addEventListener("click", function () {
    animateTo(Math.round(position) + 1);
  });

  els.forEach(function (el, i) {
    el.addEventListener("click", function () {
      if (moved || handledByPointer) return;
      var d = circularDistance(i, position, n);
      if (Math.abs(d) > 0.45) {
        animateTo(position + d);
        return;
      }
      openDetail(i);
    });
    el.addEventListener("focus", function () {
      var d = circularDistance(i, position, n);
      if (Math.abs(d) > 0.12) animateTo(position + d);
    });
  });

  // --- Trascinamento ---
  stage.addEventListener("pointerdown", function (e) {
    if (e.button !== undefined && e.button !== 0) return;
    var pressed = e.target && e.target.closest ? e.target.closest(".materials-hall-item") : null;
    pressedIndex = pressed ? els.indexOf(pressed) : -1;
    dragging = true;
    moved = false;
    pointerId = e.pointerId;
    startX = e.clientX;
    startPos = position;
    stage.classList.add("is-dragging");
    if (stage.setPointerCapture) stage.setPointerCapture(e.pointerId);
    target = null;
    pauseTemporarily();
  });

  stage.addEventListener("pointermove", function (e) {
    if (!dragging || e.pointerId !== pointerId) return;
    var dx = e.clientX - startX;
    if (Math.abs(dx) > 5) moved = true;
    var divisor = Math.max(150, Math.min(300, stage.clientWidth * 0.27));
    position = startPos - dx / divisor;
    render();
  });

  function endDrag(e) {
    if (!dragging || (e.pointerId !== undefined && e.pointerId !== pointerId)) return;
    dragging = false;
    stage.classList.remove("is-dragging");
    try {
      if (stage.releasePointerCapture) stage.releasePointerCapture(pointerId);
    } catch (err) {
      // il browser potrebbe averlo già rilasciato
    }
    pointerId = null;
    if (moved) {
      animateTo(Math.round(position));
    } else if (pressedIndex >= 0) {
      // Lo stage cattura il puntatore e le card si muovono: il click nativo non
      // arriva in modo affidabile, quindi il tocco si risolve qui.
      var d = circularDistance(pressedIndex, position, n);
      if (Math.abs(d) > 0.45) {
        animateTo(position + d);
      } else {
        openDetail(pressedIndex);
      }
      handledByPointer = true;
      window.setTimeout(function () {
        handledByPointer = false;
      }, 350);
    }
    pressedIndex = -1;
    requestAnimationFrame(function () {
      moved = false;
    });
  }
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);

  stage.addEventListener(
    "wheel",
    function (e) {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) * 1.15) return;
      e.preventDefault();
      position += e.deltaX * 0.0022;
      target = null;
      pauseTemporarily();
      render();
    },
    { passive: false },
  );

  stage.addEventListener("pointerenter", function () {
    if (!coarse) paused = true;
  });
  stage.addEventListener("pointerleave", function () {
    if (!coarse && !dragging) paused = false;
  });
  stage.addEventListener("focusin", function () {
    paused = true;
  });
  stage.addEventListener("focusout", function (e) {
    if (!stage.contains(e.relatedTarget)) pauseTemporarily(1800);
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible = entry.isIntersecting && entry.intersectionRatio > 0.08;
        });
      },
      { threshold: [0, 0.08, 0.25] },
    ).observe(stage);
  }

  // --- Animazione ---
  function frame(now) {
    var dt = Math.min(40, now - lastTime);
    lastTime = now;
    if (target !== null) {
      var diff = target - position;
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
    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", render, { passive: true });
  render();
  requestAnimationFrame(frame);
})();
