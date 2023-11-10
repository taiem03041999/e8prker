import { _ as d } from "./preload-helper.892902a4.js";
const i = document.querySelector("header");
document.addEventListener("scroll", (e) => {
  let t = window.scrollY;
  t < 70 ? i.classList.remove("header-scrolled") : t > 100 && i.classList.add("header-scrolled");
});
const u = document.getElementById("desktop-searchbar"),
  p = document.getElementById("desktop-searchbar-open"),
  v = document.getElementById("desktop-searchbar-close"),
  L = document.getElementById("desktop-search-node");
let l;
const f = async () => {
    l = (
      await d(
        () => import("./client.fccac619.js").then((a) => a.c),
        ["assets/client.fccac619.js", "assets/index.44a37fc8.js", "assets/_commonjsHelpers.f037b798.js"]
      )
    ).createRoot(L);
    const { default: t } = await d(
      () => import("./index.8523c4ae.js"),
      ["assets/index.8523c4ae.js", "assets/index.44a37fc8.js", "assets/_commonjsHelpers.f037b798.js", "assets/index.37598ab4.js"]
    );
    l.render(t), u.classList.add("expanded");
  },
  k = () => {
    l.unmount(), u.classList.remove("expanded");
  };
p.addEventListener("click", f);
v.addEventListener("click", k);
const b = document.getElementById("navigation-header"),
  E = document.getElementById("mobile-header"),
  I = document.getElementById("header-button-mobile-close-btn"),
  y = document.getElementById("header-button-mobile-open-btn"),
  r = document.getElementById("mobile-menu-content"),
  B = document.getElementById("header-button-mobile-back"),
  n = document.getElementsByClassName("mobile-menu-header"),
  w = document.querySelectorAll(".mobile-menu-category-content"),
  h = () => {
    w.forEach((e) => {
      e.style.zIndex = "0";
    });
  },
  x = async () => {
    const t = (
        await d(
          () => import("./client.fccac619.js").then((g) => g.c),
          ["assets/client.fccac619.js", "assets/index.44a37fc8.js", "assets/_commonjsHelpers.f037b798.js"]
        )
      ).createRoot(document.getElementById("mobile-search-node")),
      { default: a } = await d(
        () => import("./index.8523c4ae.js"),
        ["assets/index.8523c4ae.js", "assets/index.44a37fc8.js", "assets/_commonjsHelpers.f037b798.js", "assets/index.37598ab4.js"]
      );
    t.render(a);
  };
y.addEventListener(
  "click",
  () => {
    x();
  },
  { once: !0 }
);
y.addEventListener("click", () => {
  (document.body.style.overflow = "hidden"), (b.style.zIndex = 999999), E.classList.add("open");
});
I.addEventListener("click", () => {
  (r.style.cssText = `
    transition: all 0.4s;
    transform: translateX(0);
  `),
    (b.style.zIndex = 999),
    (document.body.style.overflow = "scroll"),
    E.classList.remove("open"),
    setTimeout(() => {
      h();
    }, 400);
});
for (let e = 0; e < n.length; e++)
  n[e].addEventListener("click", () => {
    (document.getElementById(n[e].dataset.sidebarCategory).style.zIndex = "100"),
      (document.getElementById(n[e].dataset.sidebarCategory).firstElementChild.scrollTop = "0"),
      (r.style.cssText = `
        transition: all 0.4s;
        transform: translateX(-100%);
      `);
  });
// B.addEventListener("click", () => {
//   (r.style.cssText = `
//     transition: all 0.4s;
//     transform: translateX(0);
//   `),
//     setTimeout(() => {
//       h();
//     }, 400);
// });
const T = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
  m = document.getElementsByClassName("subheader-button");
let o, s;
const _ = () => {
    o.classList.remove("open"), (o = null), (s = null);
  },
  C = (e) => {
    const t = e.target;
    (!s || t != s) && e.preventDefault(), o && _(), t.nextElementSibling && (t.nextElementSibling.classList.add("open"), (o = t.nextElementSibling), (s = t));
  };
if (T()) {
  for (var c = 0; c < m.length; c++)
    m[c].addEventListener("click", (e) => {
      C(e);
    });
  document.body.addEventListener("click", (e) => {
    o && (e.target.closest("#desktop-navbar") || _());
  });
}
const M = document.querySelectorAll(".menu-list > li.with-dropdown");
Array.from(M).forEach(function (e) {
  e.addEventListener("mouseover", (t) => {
    document.body.classList.add("dropdown");
  }),
    e.addEventListener("mouseout", (t) => {
      document.body.classList.remove("dropdown");
    });
});
