window.addEventListener('load', () => {

  const weightInput = document.getElementById("weight-c");
  weightInput.addEventListener("input", () => {
    const inputValue = weightInput.value;
    const addTaxDom = document.getElementById("colc-result");
    const protein = Math.floor( inputValue * 1.6);
    addTaxDom.innerHTML = protein;
})
});