let count = 0;

const $countElem = document.querySelector<HTMLSpanElement>("#count");

document.querySelector("button")?.addEventListener("click", () => {
  count = count + 1;
  $countElem!.textContent = count.toString();
});
