const e = document.querySelector("#header-button-dropdown-banner-close"),
  t = document.querySelector("#notificationBanner");
e.addEventListener("click", () => {
  t.classList.add("hidden");
  //   const n = new Date();
  //   document.cookie = `seen_banner=${n.toUTCString()}`;
});
