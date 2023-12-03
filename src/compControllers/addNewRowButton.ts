import { params } from "../global";
import addParamRow from "../utils/addParamRow";

export function setupNewRowButton(newParamBtn: HTMLButtonElement, paramsInputContainer: HTMLDivElement) {
  newParamBtn.addEventListener("click", () => {
    const newParamKey = document.getElementById("new-param-key") as HTMLInputElement;
    const newParamValue = document.getElementById("new-param-value") as HTMLInputElement;
    const newKey = newParamKey.value;
    const newValue = newParamValue.value;
    if (!newKey) return;

    params.add(newKey);
    addParamRow(newKey, newValue, paramsInputContainer);
    newParamKey.value = "";
    newParamValue.value = "";
  });
}
