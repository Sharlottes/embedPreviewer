import { params } from "../global";

export default function addParamRow(key: string, value: string, targetElem: HTMLDivElement) {
  params.add(key);
  const newParam = /*html*/ `
    <div class="input-group mb-1" id="param-${key}">
      <span id="param-${key}-key" title="${key}" class="input-group-text col-3 d-none d-sm-inline">${key}</span>
      <input name=${key} type="text" id="param-${key}-value" value="${value}" aria-describedby="param-${value}-key" class="form-control col d-none d-sm-inline-block">
      <div class="form-floating d-block d-sm-none col">
        <input 
          name=${key} 
          type="text" 
          id="param-${key}-value" 
          value="${value}" 
          aria-describedby="param-${key}-key" 
          class="form-control"
          placeholder="asdf"
        >
        <label id="param-${key}-key" title="${key}" for="param-${key}-value">${key}</label>
      </div>
      <button type="button" class="btn btn-danger" id="remove-param-btn-${key}">
        <i class="bi bi-x"></i>
      </button>
    </div>
  `;
  targetElem.insertAdjacentHTML("beforeend", newParam);

  const removeBtn = document.getElementById(`remove-param-btn-${key}`) as HTMLButtonElement;
  const handleClick = () => {
    targetElem.removeChild(document.getElementById(`param-${key}`) as HTMLDivElement);
    params.delete(key);
    removeBtn.removeEventListener("click", handleClick);
  };
  removeBtn.addEventListener("click", handleClick);
}
