// Handle Option Register Target
function handleShowSearch() {
  const overlaySearch = document.querySelector(".header-scroll__overlay");
  const searchContent = document.querySelector(".intro-tabs__cover");
  const searchIconSearch = document.querySelectorAll(
    ".header-activity__search>svg"
  );
  const searchIconClose = document.getElementById("icon-close");

  const addClass = (element, className) => {
    element.classList.add(className);
  };

  const removeClass = (element, className) => {
    element.classList.remove(className);
  };

  const handleRemoveClass = (event) => {
    event.stopPropagation();
    removeClass(searchIconClose.closest(".header-activity__search"), "active");
    removeClass(overlaySearch, "active");
    removeClass(searchContent, "active");
  };

  if (searchIconSearch) {
    searchIconSearch.forEach((itemSearch) => {
      itemSearch.addEventListener("click", (event) => {
        event.stopPropagation();
        addClass(overlaySearch, "active");
        addClass(searchContent, "active");
        addClass(itemSearch.closest(".header-activity__search"), "active");
      });
    });
  }

  if (searchIconClose) {
    searchIconClose.addEventListener("click", handleRemoveClass);
  }

  if (overlaySearch) {
    overlaySearch.addEventListener("click", handleRemoveClass);
  }
}

function handleLoadMore() {
  const btnMoreShow = document.querySelector(".height-zoom");
  const btnMoreHide = document.querySelector(".height-small");
  const heightLoad = document.querySelector(".load-more");
  const isCheckBtn = document.querySelector(".load-btn");

  if (!heightLoad || !btnMoreHide || !btnMoreShow) return null;

  if (heightLoad.offsetHeight < 144) {
    isCheckBtn.style.display = "none";
  }

  btnMoreShow.addEventListener("click", () => {
    const parentMore = btnMoreShow.closest(".load-btn");

    parentMore.previousElementSibling.classList.remove("load-more");
    parentMore.classList.add("active");
  });

  btnMoreHide.addEventListener("click", () => {
    const parentMore = btnMoreHide.closest(".load-btn");

    parentMore.previousElementSibling.classList.add("load-more");
    parentMore.classList.remove("active");
  });
}

(() => {
  handleShowSearch();
  handleLoadMore();
})();
