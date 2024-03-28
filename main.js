import { r as reactExports, j as jsxRuntimeExports, c as createRoot, R as React } from "./client.Dtxw8aO3.js";
const reactLogo = "/react.svg";
const viteLogo = "/vite.svg";
function App() {
  const [count, setCount] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setCount((count2) => count2 + 1), children: [
        "count is ",
        count
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
const container = document.createElement("div");
document.body.appendChild(container);
createRoot(container).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
//# sourceMappingURL=main.js.map
