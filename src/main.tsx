import { createRoot } from "react-dom/client";

const rootDom = document.getElementById("root");
if (rootDom) {
  createRoot(rootDom).render(<div>Hello world</div>);
}
