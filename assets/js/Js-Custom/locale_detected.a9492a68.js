const n = document.querySelector("#header-button-locale-notification-close"),
  c = document.querySelector("#locale-notification-banner");
n.addEventListener("click", () => {
  c.remove();
  const e = new Date();
  document.cookie = `seen_locale_notification=${e.toUTCString()}`;
});
const t = document.getElementById("change-language-selector"),
  a = document.getElementById("locale-selector"),
  l = document.getElementById("9-dots-selector"),
  o = (e) => {
    t.addEventListener("mouseover", () => {
      e.classList.add("open");
    }),
      t.addEventListener("mouseleave", () => {
        e.classList.remove("open");
      });
  };
o(a);
o(l);
