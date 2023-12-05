const modals = document.getElementsByClassName("modal");

for (const modal of modals) {
  const input = modal.getElementsByTagName("input")[0];
  modal.addEventListener("shown.bs.modal", () => {
    input.focus();
  });
}
