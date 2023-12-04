import { baseUrl, params } from "../global";

export function setupExportButton(exportBtn: HTMLButtonElement) {
  exportBtn.addEventListener("click", () => {
    const url = new URL(baseUrl);
    params.forEach((key) => {
      const value = (document.getElementById(`param-${key}-value`) as HTMLInputElement).value;
      url.searchParams.append(key, value);
    });
    navigator.clipboard.writeText(url.toString());
    alert(`Copied to clipboard: ${url}`);
  });
}
