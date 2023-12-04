import { params } from "../global";

export function setupExportButton(baseUrlInput: HTMLInputElement, exportBtn: HTMLButtonElement) {
  exportBtn.addEventListener("click", () => {
    const url = new URL(baseUrlInput.value);
    params.forEach((key) => {
      const value = (document.getElementById(`param-${key}-value`) as HTMLInputElement).value;
      url.searchParams.append(key, value);
    });
    navigator.clipboard.writeText(url.toString());
    alert(`Copied to clipboard: ${url}`);
  });
}
