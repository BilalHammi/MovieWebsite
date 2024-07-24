const inputId = document.getElementById("inputBtn");
const bodyTag = document.querySelector("body");
const newDivParent = document.createElement("div");
const newDivChild = document.createElement("div");
const parentDiv = document.getElementById("parentDiv");
const newDivParentId = document.getElementById("nDivParent");
const confirmButton = document.createElement("button");
const cancelButton = document.createElement("button");
const arrayIdElement = ["balanceId", "buttonsId", "chartId", "incomeId", "outputId", "nDivParent"];

inputId.addEventListener("click", () => {
    newDivChild.classList.add("formDiv", "centeren");
    newDivChild.setAttribute("id", "formId");
    newDivParent.setAttribute("id", "nDivParent");
    parentDiv.appendChild(newDivParent);
    newDivParent.appendChild(newDivChild);
    for (let i = 0; i < arrayIdElement.length; i++) {
        const element = arrayIdElement[i];
        if (element === "nDivParent") {
            newDivParent.classList.add("center", "blurOff");
        } else {
            document.getElementById(element).classList.add("blurOn");
        }
    }
    confirmButton.classList.add("buttonStyle");
    cancelButton.classList.add("buttonStyle");
    newDivChild.append(confirmButton);
    newDivChild.append(cancelButton);
    confirmButton.innerText = "Confirm";
    cancelButton.innerText = "Cancel";
});