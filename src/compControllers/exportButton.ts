import { params } from "../global";

export function setupExportButton(baseUrlInput: HTMLInputElement, exportBtn: HTMLButtonElement) {
  exportBtn.addEventListener("click", () => {
    const url = new URL(baseUrlInput.value);
    params.forEach((key) => {
      const value = (document.getElementById(`param-${key}-value`) as HTMLInputElement).value;
      url.searchParams.append(key, value);
    });
    navigator.clipboard.writeText(url.toString());
    document.querySelector("#export-modal  .modal-body")!.innerHTML = /*html*/ `
      <p>URL copied to clipboard:</p>
      <a href="${url.toString()}" target="_blank" rel="noopener noreferrer" class="text-break">${url.toString()}</a>
    `;
  });
}
