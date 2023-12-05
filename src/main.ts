import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { setupPreviewForm } from "./compControllers/previewForm";
import { setupNewRowButton } from "./compControllers/addNewRowButton";
import addParamRow from "./utils/addParamRow";
import { params } from "./global";
import { setupImportButton } from "./compControllers/importButton";
import { setupExportButton } from "./compControllers/exportButton";
import "./compControllers/autoFocuser";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
<div>
  <h1 class="text-center m-3"> Embed Previewer </h1>
  <div class="ms-auto me-auto d-flex gap-3 flex-wrap justify-content-center align-items-center">
    <form class="border rounded-1 p-2" id="preview-form">
      <div class="mb-4">
        <label for="base-url" class="form-label">API base URL</label>
        <div class="form-floating">
          <input
            name="baseurl"
            type="text"
            class="form-control"
            id="base-url"
            value="https://"
            placeholder="asdf.com/api"
          />
          <label for="base-url">base url</label>
        </div>

        <div class="container btn-group p-0 mt-2">
          <button
            class="btn btn-outline-secondary border-0 border-top border-bottom"
            type="button"
            id="import-btn"
            data-bs-toggle="modal"
            data-bs-target="#import-modal"
          >
            <span class="bi bi-box-arrow-in-down" />
            Import
          </button>
          <button 
            class="btn btn-outline-secondary border-0 border-top border-bottom" 
            type="button" 
            id="export-btn" 
            data-bs-toggle="modal"
            data-bs-target="#export-modal"
          >
            <span class="bi bi-box-arrow-up" />
            Export
          </button>
        </div>
      </div>
      <div id="params-input-container">
        <label class="form-label">API query strings (parameters)</label>
      </div>
      <div class="input-group mt-3">
        <div class="col-3">
          <input type="text" id="new-param-key" class="form-control bg-body-tertiary rounded-end-0" />
        </div>
        <div class="col">
          <input type="text" id="new-param-value" class="form-control rounded-start-0" />
        </div>
        <button type="button" id="new-param-btn" class="btn btn-secondary">
          Apply
        </button>
      </div>
      <hr />
      <button class="btn btn-primary col-12">Update!</button>
    </form>
    <div class="border rounded-1 p-0">
      <img alt="result image" id="preview-img" src="" class="col-12" />
    </div>
  </div>
  
  <hr class="mt-5" />
  <p class="m-3">
    <span class="bi bi-github fs-5"></span>
    <a 
      href="https://github.com/Sharlottes/embedPreviewer"
      class="link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-offset-2-hover"
    >
      Github Repository
    </a>
  </p>
</div>
`;

const paramsInputContainer = document.getElementById("params-input-container") as HTMLDivElement;
const newParamBtn = document.getElementById("new-param-btn") as HTMLButtonElement;
setupNewRowButton(newParamBtn, paramsInputContainer);

params.forEach((key) => addParamRow(key, "", paramsInputContainer));

const previewForm = document.getElementById("preview-form") as HTMLFormElement;
const previewImg = document.getElementById("preview-img") as HTMLImageElement;
setupPreviewForm(previewForm, previewImg);

const importUrlBtn = document.getElementById("import-url-btn") as HTMLButtonElement;
setupImportButton(importUrlBtn, paramsInputContainer);

const baseUrlInput = document.getElementById("base-url") as HTMLInputElement;
const exportBtn = document.getElementById("export-btn") as HTMLButtonElement;
setupExportButton(baseUrlInput, exportBtn);
