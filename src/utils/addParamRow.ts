import { params } from "../global";

export default function addParamRow(key: string, value: string, targetElem: HTMLDivElement) {
  params.add(key);
  const newParam = /*html*/ `
    <div class="input-group mb-1" id="param-${key}">
      <span class="input-group-text col-3" id="param-${key}-key">${key}</span>
      <input name=${key} type="text" class="form-control col" id="param-${key}-value" aria-describedby="param-${value}-key" value="${value}">
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
