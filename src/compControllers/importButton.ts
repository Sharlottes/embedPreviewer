import { params } from "../global";
import addParamRow from "../utils/addParamRow";

export function setupImportButton(importUrlBtn: HTMLButtonElement, paramsInputContainer: HTMLDivElement) {
  importUrlBtn.addEventListener("click", () => {
    const urlObj = new URL((document.getElementById("import-url-input") as HTMLInputElement).value);
    const baseUrl = urlObj.protocol + "//" + urlObj.host + urlObj.pathname;
    const queries = urlObj.searchParams;

    (document.getElementById("base-url") as HTMLInputElement).value = baseUrl;
    paramsInputContainer.innerHTML = "";
    params.clear();
    queries.forEach((value, key) => addParamRow(key, value, paramsInputContainer));
  });
}
