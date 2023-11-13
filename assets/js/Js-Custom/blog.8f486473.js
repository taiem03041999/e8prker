const e = document.querySelectorAll("article > h2");
for (let t = 0; t < e.length; t++) (e[t].id = `part${t + 1}`), e[t].classList.add("pt-12"), e[t].classList.add("-mt-12");
