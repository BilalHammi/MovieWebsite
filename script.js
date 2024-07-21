const inputId = document.getElementById("inputBtn");
const bodyTag = document.querySelector("body");
const newDivParent = document.createElement("div");
const newDivChild = document.createElement("div");
const parentDiv = document.getElementById("parentDiv");
const newDivParentId = document.getElementById("nDivParent");
const arrayIdElement = ["balanceId", "buttonsId", "chartId", "incomeId", "outputId", "nDivParent"];

inputId.addEventListener("click", () => {
    newDivChild.classList.add("formDiv");
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

});