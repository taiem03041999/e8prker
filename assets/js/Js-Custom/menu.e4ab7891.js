import { R as n } from "./index.44a37fc8.js";
import { a as s } from "./client.fccac619.js";
import "./_commonjsHelpers.f037b798.js";
function i(t) {
    const [r, o] = n.useState(null);
    return (
        n.useEffect(() => {
            const e = new IntersectionObserver(
                (c) => {
                    c.forEach((a) => {
                        a.isIntersecting && o(a.target.id);
                    });
                },
                { rootMargin: "-50% 0px -50% 0px" }
            );
            return (
                t == null ||
                    t.forEach((c) => {
                        const a = document.getElementById(c);
                        a && e.observe(a);
                    }),
                () => {
                    t == null ||
                        t.forEach((c) => {
                            const a = document.getElementById(c);
                            a && e.unobserve(a);
                        });
                }
            );
        }, [t]),
        r
    );
}
const m = (t) => {
        document.getElementById(t).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    },
    p = ({ history: t }) => {
        const r = t.map((e) => e.year),
            o = i(r);
        return n.createElement(
            "div",
            { className: "relative" },
            n.createElement(
                "div",
                { className: "grid grid-cols-5 gap-12 relative items-start pb-24 " },
                n.createElement(
                    "div",
                    { className: "sticky top-[50px] md:top-[150px] pt-24" },
                    r.map((e) =>
                        n.createElement(
                            "a",
                            {
                                key: e,
                                onClick: () => m(e),
                                className: `
                  text-right block style-none transform transition duration-400 py-2 font-semibold text-zinc-600 origin-left cursor-pointer
                      ${o == e ? "!text-white translate-y-0 font-bold " : ""}
                      ${o > e ? "-translate-y-4" : ""}
                      ${o < e ? "translate-y-4" : ""}
                  `,
                            },
                            o == e && n.createElement("span", { className: "w-1 h-1 bg-white rounded-full inline-block mr-3 align-top " }),
                            e
                        )
                    )
                ),
                n.createElement(
                    "div",
                    { className: "col-span-4" },
                    t.map((e) =>
                        n.createElement(
                            "div",
                            {
                                key: e.year,
                                id: e.year,
                                className: `
                    mb-10 p-4 rounded bg-zinc-900/40 ${o == e.year ? "opacity-100" : "opacity-50"}
                  `,
                            },
                            n.createElement("h4", { className: "mb-5" }, e.year),
                            n.createElement("p", { className: "font-bold text-lg text-white/80" }, e.data)
                        )
                    )
                )
            )
        );
    },
    l = document.getElementById("menu"),
    d = JSON.parse(l.getAttribute("data")),
    u = s.createRoot(l);
u.render(n.createElement(p, { ...d }));
