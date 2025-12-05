import newExpansion from "./scripts/newExpansion";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <button type="button" id="expansionBtn">New Expansion Script</button>
  </div>
`;

document
  .querySelector<HTMLButtonElement>("#expansionBtn")
  ?.addEventListener("click", newExpansion);
