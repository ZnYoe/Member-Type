const nameInput = document.querySelector(".nameInput");
const bronzeInput = document.querySelector("#bronze");
const silverInput = document.querySelector("#silver");
const goldInput = document.querySelector("#gold");

const bronzeColumn = document.querySelector(".bronze-column");
const silverColumn = document.querySelector(".silver-column");
const goldColumn = document.querySelector(".gold-column");

const submitBtn = document.querySelector(".submitBtn");

const members = [];

const createMemberElement = (member) => {
    const resultBox = document.createElement("div");
    resultBox.classList.add("result-box");
    
    const nameTag = document.createElement("div");
    nameTag.classList.add("member-name");
    nameTag.textContent = `Name : ${member.memberName}`;

    const typeTag = document.createElement("div");
    typeTag.classList.add("member-type");
    typeTag.textContent = `Type : ${member.memberType}`;

    resultBox.append(nameTag, typeTag);

    return resultBox;
};

submitBtn.addEventListener("click" , () => {
    const name = nameInput.value;
    let type;
    
    if (bronzeInput.checked) {
        type = bronzeInput.value;
    } else if (silverInput.checked) {
        type = silverInput.value;
    } else if (goldInput.checked) {
        type = goldInput.value;
    }

    if (name === "" || type === undefined) {
        return;
    }

    const memberObj = {
        memberName: name,
        memberType: type,
    };

    members.push(memberObj);

    const columnTag = {
        bronze : bronzeColumn,
        silver : silverColumn,
        gold : goldColumn,
    };

    const memberColumn = columnTag[type];
    memberColumn.append(createMemberElement(memberObj));

    nameInput.value = "";
    bronzeInput.checked = false;
    silverInput.checked = false;
    goldInput.checked = false;
});

