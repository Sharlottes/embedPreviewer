import { params } from "../global";

export function setupPreviewForm(previewForm: HTMLFormElement, previewImg: HTMLImageElement) {
  previewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const baseurl = (document.getElementById("base-url") as HTMLInputElement).value;
    const queries = Array.from(params)
      .map((key) => key + "=" + (document.getElementById(`param-${key}-value`) as HTMLInputElement).value)
      .join("&");
    const submitButton = e.submitter as HTMLButtonElement;

    submitButton.disabled = true;
    // cache button inner html
    const buttonInnerHTML = submitButton.innerHTML;
    submitButton.innerHTML = /*html*/ `
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span class="visually-hidden" role="status">Loading...</span>
      ${buttonInnerHTML}
    `;

    const handleLoadDone = () => {
      submitButton.disabled = false;
      submitButton.innerHTML = buttonInnerHTML;
    };
    previewImg.addEventListener("load", handleLoadDone, { once: true });
    previewImg.addEventListener("error", handleLoadDone, { once: true });

    previewImg.src = `${baseurl + "?" + queries}`;
    previewImg.alt = previewImg.src;
  });
}
