const nameInput = document.querySelector(".nameInput");
const bronzInput = document.querySelector("#bronz");
const silverInput = document.querySelector("#silver");
const goldInput = document.querySelector("#gold");

const submitBtn = document.querySelector(".submitBtn");

const members = [];

submitBtn.addEventListener("click" , () => {
    const name = nameInput.value;

    let type;
    if(bronzInput.checked){
        type = bronzInput.value;
    }else if(silverInput.checked){
        type = silverInput.value;
    }else if(goldInput.checked){
        type = goldInput.value;
    }

    if(name === "" || type === undefined){
        return;
    }

    console.log(name, type);

    nameInput.value = "";
    bronzInput.checked = false;
    silverInput.checked = false;
    goldInput.checked = false;
})
