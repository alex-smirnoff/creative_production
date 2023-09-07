const box2 = document.querySelector(".box2");
const box1 = document.querySelector(".box1");
const box1_1 = document.querySelector(".box1_1");
const box1_2 = document.querySelector(".box1_2");
const question = document.getElementById("question");
const pageBreak = document.getElementById("page1");
const buttonCard = document.getElementById("createCardButton");
const buttonClosing = document.getElementById("createClosingButton");
let departmentMargin = 19.4;
let addressArray = [];
let qr = {};
let canvasImg = {};
const modalWindow = document.getElementById("modal_window");
const organization = document.getElementById("organization");
const dropdownIconAssets = document.getElementById("dropdownIconAssets");
const dropdownIconAddresses = document.getElementById("dropdownIconAddresses");
const officeLocationsDropdown = document.getElementById("officeLocationsDropdown");
const office = document.getElementById("office");
const assetsDropdownMenu = document.getElementById("assetsDropdownMenu");
const addressesDropdownMenu = document.getElementById("addressesDropdownMenu");
const orgBoundingBox = document.getElementById("orgBoundingBox");
const addressBoundingBox = document.getElementById("addressBoundingBox");
const searchOrg = document.getElementById("searchOrg");
const searchAddress = document.getElementById("searchAddress");
const email = document.getElementById("email");
const workPhone = document.getElementById("workPhone");
const mobilePhone = document.getElementById("mobilePhone");
const cardBack = document.getElementById("cardBack");
const fullname = document.getElementById("fullname");
const department = document.getElementById("department");
const position = document.getElementById("position");
const fullnameInCard = document.getElementById("fullnameInCard");
const positionInCard = document.getElementById("positionInCard");
const departmentInCard = document.getElementById("departmentInCard");
const emailInCard = document.getElementById("emailInCard");
const companyInCard = document.getElementById("companyInCard");
const webPageInCard = document.getElementById("webPageInCard");
const addressInCard = document.getElementById("addressInCard");
const cardFront = document.getElementById("cardFront");
const addressDiv = document.getElementById("addressDiv");
const workPhoneDiv = document.getElementById("workPhoneDiv");
const generateButton = document.getElementById("generateButton");
const footerDiv = document.getElementById("footerDiv");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const closingExampleText = document.getElementById("closingExampleText");
const qrInClosing = document.getElementById("qrInClosing");
const fullNameClosingText = document.getElementById("fullNameClosingText");
const positionClosingText = document.getElementById("positionClosingText");
const departmentClosingText = document.getElementById("departmentClosingText");
const organizationClosingText = document.getElementById("organizationClosingText");
const mobilePhoneClosingText = document.getElementById("mobilePhoneClosingText");
const emailClosingText = document.getElementById("emailClosingText");
const webPageClosingText = document.getElementById("webPageClosingText");
const groupName = document.getElementById("groupName");
const endingText = document.getElementById("endingText");
const copyInCard = document.getElementById("copyInCard");
const copyIcon = document.getElementById("copyIcon");


// Scroll effect animation


document.getElementById("startButton").addEventListener("click", () => {
    cardDiv.scrollIntoView({ behavior: "smooth" });
});
window.addEventListener("scroll", () => {
    let rootStyles = getComputedStyle(document.documentElement);
    let modifier = window.innerWidth / rootStyles.getPropertyValue("--modifier");
    let scrollY = window.scrollY;
    let pageBreakRect = pageBreak.getBoundingClientRect();
    if (rootStyles.getPropertyValue("--screenPosition") === "2" && window.scrollY / Math.max(document.body.scrollHeight, document.body.offsetHeight) * 100 < 10){
        box2.style.opacity = "0";
        box2.style.transition = "opacity .8s";
        box1.style.opacity = "0";
        box1.style.transition = "opacity .8s";
        box1_1.style.opacity = "0";
        box1_1.style.transition = "opacity .8s";
        box1_2.style.opacity = "0";
        box1_2.style.transition = "opacity .8s";
    }
    else{
        box2.style.clipPath = "circle(" + scrollY * modifier / 4 + "px at 100% 100%)";
        box1.style.clipPath = "circle(" + scrollY * modifier * 12 + "px at 100% 100%)";
        box1_1.style.clipPath = "circle(" + scrollY * modifier * 8 + "px at 100% 100%)";
        if (scrollY === 0) {
            box1_2.style.clipPath = "circle(" + scrollY * modifier * 1.5 + "px at 0% 0%)";
        }
        else{
            box1_2.style.clipPath = "circle(" + scrollY * modifier * 1.5 + "px at 100% 100%)";
        }
        if (pageBreakRect.bottom > 0) {
            box2.style.opacity = scrollY / 930;
            box1_1.style.opacity = Math.max(0, parseFloat(box1.style.opacity) + 0.08).toString();
            box1_2.style.opacity = Math.max(0, parseFloat(box1.style.opacity) + 0.25).toString();
            box1.style.opacity = scrollY / 130;
            question.style.opacity = scrollY / 130;
        }
        if(box2.style.opacity > 1) {
            box2.style.opacity = "1";
            question.style.opacity = "1";
        }
        if (pageBreakRect.bottom < 0) {
            question.style.opacity = Math.max(0, parseFloat(question.style.opacity) - 0.08).toString();
        }
    }
    let footerDivRect = footerDiv.getBoundingClientRect();

    if (footerDivRect.top <= window.innerHeight ) {
        img2.style.bottom = scrollY*0.023 + "%";
        img3.style.bottom = scrollY*0.018 + "%";
        img4.style.bottom = scrollY*0.0133 + "%";
        img5.style.left = scrollY*0.0053 + "%";
        img6.style.right = scrollY*0.0029 + "%";
    }

});


// Choice cards animation


function changeStyleOnDivHover (buttonVar) {
    buttonVar.style.fontFamily = "\"Trebuchet MS\", Helvetica, sans-serif";
    buttonVar.style.letterSpacing = "3px";
    buttonVar.style.width = "auto";
    buttonVar.style.height = "auto";
    buttonVar.style.backgroundColor = "#DD2826";
    buttonVar.style.textAlign = "center";
    buttonVar.style.padding = "10px";
    buttonVar.style.border = "3px solid #DD2826";
    buttonVar.style.borderRadius = "8px";
    buttonVar.style.color = "#ffff";
    buttonVar.style.textTransform = "uppercase";
};
function removeStyleOnDivUnhover (buttonVar) {
    buttonVar.removeAttribute("style");
};
function changeStyleOnButtonHover (buttonVar) {
    buttonVar.removeAttribute("style");
    buttonVar.style.letterSpacing = "3px";
    buttonVar.style.backgroundColor = "white";
    buttonVar.style.textAlign = "center";
    buttonVar.style.padding = "10px";
    buttonVar.style.border = "3px solid #DD2826";
    buttonVar.style.borderRadius = "8px";
    buttonVar.style.color = "#DD2826";
    buttonVar.style.textTransform = "uppercase";
};
document.getElementById("cardDiv").addEventListener("mouseover", () => {
    changeStyleOnDivHover(buttonCard);
});
document.getElementById("cardDiv").addEventListener("mouseout", () => {
      removeStyleOnDivUnhover(buttonCard);
});
buttonCard.addEventListener("mouseenter", () => {
      changeStyleOnButtonHover(buttonCard);
});
document.getElementById("closingDiv").addEventListener("mouseover", () => {
    changeStyleOnDivHover(buttonClosing);
});
document.getElementById("closingDiv").addEventListener("mouseout", () => {
    removeStyleOnDivUnhover(buttonClosing);
});
buttonClosing.addEventListener("mouseenter", () => {
    changeStyleOnButtonHover(buttonClosing);
});


// Opening, closing, and other things related to modal window


buttonCard.addEventListener("click", () => {
    modalWindow.style.display = "flex";
    cardFront.style.removeProperty("display");
    addressDiv.style.display = "flex";
    workPhoneDiv.style.display = "flex";
    generateButton.textContent = "СТВОРИТИ ВІЗИТКУ";
    cardBack.style.height = "210px";
    closingExampleText.style.display = "none";
    qrInClosing.style.top = "25%";
    document.body.style.overflowY = "hidden";
    document.body.style.touchAction = "none";
    document.body.style["-ms-touch-action"] = "none";
    if (fullname.value.length + email.value.length + organization.value.length + mobilePhone.value.length === 0) {
        qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block;'>";
        generateButton.disabled = true;
        generateButton.style.backgroundColor = "#d3d3d3";
    }
    else {
        createQrCode ();
        generateButton.disabled = false;
        generateButton.removeAttribute("style");
    }
    document.getElementById("infoText").innerHTML = "Подивіться, як <a id='infoLink' target='_blank' href='https://mih-my.sharepoint.com/:v:/g/personal/a_val_smirnov_metinvestholding_com/ESlOjdylhZJMuWPYHh6D6wsBHV20Es51wZ6em10ACr5hnQ?e=pSlmiQ' style='color: #45a2ff; cursor: pointer;'>завантажити візитку</a> після створення";
    copyInCard.style.display = "none";
});
buttonClosing.addEventListener("click", () => {
    generateButton.textContent = "СТВОРИТИ ПІДПИС";
    modalWindow.style.display = "flex";
    cardFront.style.display = "none";
    addressDiv.style.display = "none";
    workPhoneDiv.style.display = "none";
    cardBack.style.height = "305px";
    closingExampleText.style.removeProperty("display");
    qrInClosing.style.top = "45%";
    let rootStyles = getComputedStyle(document.documentElement);
    document.body.style.overflowY = "hidden";
    document.body.style.touchAction = "none";
    document.body.style["-ms-touch-action"] = "none";
    if (fullname.value.length + email.value.length + organization.value.length + mobilePhone.value.length === 0) {
        qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block; margin-top: 10px;'><img src='logoCard.png' id='logoClosing' width='112' style='position: relative; z-index: 15; opacity: 0.3; display: block; margin-top: 10px;'>";
        generateButton.disabled = true;
        generateButton.style.backgroundColor = "#d3d3d3";
        copyIcon.style.opacity = "0.1";
    }
    else{
        createQrCode ();
        generateButton.disabled = false;
        generateButton.removeAttribute("style");
        copyIcon.style.opacity = "1";
    }
    document.getElementById("infoText").innerHTML = "Подивіться, як додати підпис до листів у Outlook <a id='infoLink' target='_blank' href='https://mih-my.sharepoint.com/:v:/g/personal/a_val_smirnov_metinvestholding_com/EVOocof76jpCtk3k5spHmkoBQkDS33YJI3_-vHSr_oykDA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=r11yhN' style='color: #45a2ff; cursor: pointer;'>десктоп</a> або <a id='infoLink' target='_blank' href='https://mih-my.sharepoint.com/:v:/g/personal/a_val_smirnov_metinvestholding_com/EQOb0mOyzjlHk5XmKiCay7oB-xOf0TxSONZ2gS4-8cUxEw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=PyaLy4' style='color: #45a2ff; cursor: pointer;'>онлайн</a>.";
    copyInCard.style.display = "flex";
});
document.getElementById("closeModal").addEventListener("click", () => {
    modalWindow.style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.touchAction = "auto";
    document.body.style["-ms-touch-action"] = "auto";
});
async function clickOnCopyButton(){
    document.getElementById("copyIcon").style.opacity = "0";
    document.getElementById("copiedIcon").style.opacity = "1";
    document.getElementById("copiedIcon").style.marginRight = "0px";
    document.getElementById("copiedMessage").style.opacity = "1";
    document.getElementById("copiedText").style.opacity = "1";
    const tempDiv = document.createElement("div");
    const textElements = document.getElementsByClassName("textClosing");
    for (let i12 = 0; i12 < textElements.length; i12++) {
        let textClone = textElements[i12].cloneNode(true);
        textClone.style.lineHeight = "12px";
        textClone.style.margin = "0px";
        textClone.style.fontSize = "12px";
        tempDiv.appendChild(textClone);
    }
    tempDiv.innerHTML += "<br>";
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = 112;
    tempCanvas.height = 150;
    const imageClone = new Image();
    imageClone.src = canvasImg;
    tempCanvas.getContext("2d").drawImage(imageClone, 0, 0, 112, 150);
    imageClone.src = tempCanvas.toDataURL("image/png");
    imageClone.style.position = 'relative';
    imageClone.style.marginTop = '10px';
    imageClone.style.marginLeft = '-2px';
    tempDiv.appendChild(imageClone);
    document.body.appendChild(tempDiv);
    const range = document.createRange();
    range.selectNode(tempDiv);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    tempDiv.remove();
    tempCanvas.remove();
    imageClone.remove();
    setTimeout(() => {
        document.getElementById("copyIcon").style.opacity = "1";
        document.getElementById("copiedIcon").style.opacity = "0";
        document.getElementById("copiedIcon").style.marginRight = "50px";
        document.getElementById("copiedMessage").style.opacity = "0";
        document.getElementById("copiedText").style.opacity = "0";
    }, 5000);
};
copyInCard.addEventListener("click", ()=> {
    if (fullname.value.length + email.value.length + organization.value.length + mobilePhone.value.length > 0) {
        clickOnCopyButton();
    }
});
copyIcon.addEventListener("click", ()=> {
    if (fullname.value.length + email.value.length + organization.value.length + mobilePhone.value.length > 0) {
        clickOnCopyButton();
    }
});

// 2 related dropdowns in the modal window (in the mode of creating a closing, one of them is hidden)

document.addEventListener("DOMContentLoaded", () => {
    const assetsDropdown = document.getElementById("assetsDropdown");
    let assetsInnerHTML = "";
    Object.keys(assets).forEach(key => {
        assetsInnerHTML += `<li><button class='listOfButtonsAssets'>${key}</button></li>`;
    });
    assetsDropdown.innerHTML = assetsInnerHTML;
    const assetsButtons = document.getElementsByClassName("listOfButtonsAssets");
    for (let i = 0; i < assetsButtons.length; i++){
        assetsButtons[i].addEventListener("click", () => {
            assetsDropdownMenu.style.zIndex = "-5";
            orgBoundingBox.style.opacity = "1";
            dropdownIconAssets.style.transform = "rotate(180deg)";
            dropdownIconAssets.setAttribute("viewBox", "0 -2 24 24");
            organization.value = assetsButtons[i].textContent;
            let officeLocations = assets[assetsButtons[i].textContent];
            officeLocationInnerHTML = "";
            createQrCode ();
            generateButton.disabled = false;
            generateButton.removeAttribute("style");
            companyInCard.innerHTML = assetsButtons[i].textContent.toUpperCase();
            companyInCard.style.color = "black";
            organizationClosingText.textContent = assetsButtons[i].textContent;
            organizationClosingText.style.color = "black";
            groupName.style.color = "black";
            webPageInCard.innerHTML = webPagesOfAssets[assetsButtons[i].textContent];
            webPageInCard.style.color = "black";
            webPageClosingText.innerHTML = "<a target='_blank' href='https://"+webPagesOfAssets[assetsButtons[i].textContent]+"' style='color: #45a2ff;'>"+webPagesOfAssets[assetsButtons[i].textContent]+"</a>";
            copyIcon.style.opacity = "1";
            if (!assets[organization.value].includes(office.value)){
                office.value = "";
                addressBoundingBox.style.opacity = "0";
                addressInCard.innerHTML = "Адреса офісу";
                addressInCard.style.color = "#D3D3D3";
            }
            for (let i2 = 0; i2 < officeLocations.length; i2++) {
                officeLocationInnerHTML += `<li><button class='listOfButtonsAddresses'>${officeLocations[i2]}</button></li>`
            }
            officeLocationsDropdown.innerHTML = officeLocationInnerHTML;
            let addressButtons = document.getElementsByClassName("listOfButtonsAddresses");
            for (let i3 = 0; i3 < addressButtons.length; i3++) {
                addressButtons[i3].addEventListener("click", () => {
                    addressesDropdownMenu.style.zIndex = "-5";
                    addressBoundingBox.style.opacity = "1";
                    dropdownIconAddresses.style.transform = "rotate(180deg)";
                    dropdownIconAddresses.setAttribute("viewBox", "0 -2 24 24");
                    office.value = addressButtons[i3].textContent;
                    addressArray = addressButtons[i3].textContent.split(/,\s(.*)/s);
                    addressInCard.innerHTML = addressArray[0] + "," + "<br>" + addressArray[1];
                    addressInCard.style.color = "black";
                });
            }
        });
    }
});
dropdownIconAssets.addEventListener("click", () => {
    if (assetsDropdownMenu.style.zIndex === "15") {
        assetsDropdownMenu.style.zIndex = "-5";
        dropdownIconAssets.style.transform = "rotate(180deg)";
        dropdownIconAssets.setAttribute("viewBox", "0 -2 24 24");
        if (searchOrg.value.length != 0) {
            let assetsButtons2 = document.getElementsByClassName("listOfButtonsAssets");
            for (let i10 = 0; i10 < assetsButtons2.length; i10++) {
                assetsButtons2[i10].style.display = "block";
            }
            searchOrg.value = "";
        }
    }
    else {
        assetsDropdownMenu.style.zIndex = "15";
        dropdownIconAssets.style.transform = "rotate(360deg)";
        dropdownIconAssets.setAttribute("viewBox", "0 2 24 24");
    }
});
dropdownIconAddresses.addEventListener("click", () => {
    if (addressesDropdownMenu.style.zIndex === "15") {
        addressesDropdownMenu.style.zIndex = "-5";
        dropdownIconAddresses.style.transform = "rotate(180deg)";
        dropdownIconAddresses.setAttribute("viewBox", "0 -2 24 24");
        if (searchAddress.value.length != 0) {
            let addressButtons4 = document.getElementsByClassName("listOfButtonsAddresses");
            for (let i9 = 0; i9 < addressButtons4.length; i9++) {
                addressButtons4[i9].style.display = "block";
            }
            searchAddress.value = "";
        }
    }
    else {
        addressesDropdownMenu.style.zIndex = "15";
        dropdownIconAddresses.style.transform = "rotate(360deg)";
        dropdownIconAddresses.setAttribute("viewBox", "0 2 24 24");
    }
});
organization.addEventListener("click", () => {
    if (assetsDropdownMenu.style.zIndex === "15") {
        assetsDropdownMenu.style.zIndex = "-5";
        dropdownIconAssets.style.transform = "rotate(180deg)";
        dropdownIconAssets.setAttribute("viewBox", "0 -2 24 24");
        if (searchOrg.value.length != 0) {
            let assetsButtons3 = document.getElementsByClassName("listOfButtonsAssets");
            for (let i11 = 0; i11 < assetsButtons3.length; i11++) {
                assetsButtons3[i11].style.display = "block";
            }
            searchOrg.value = "";
        }
    }
    else {
        assetsDropdownMenu.style.zIndex = "15";
        dropdownIconAssets.style.transform = "rotate(360deg)";
        dropdownIconAssets.setAttribute("viewBox", "0 2 24 24");
    }
});
office.addEventListener("click", () => {
    if (addressesDropdownMenu.style.zIndex === "15") {
            addressesDropdownMenu.style.zIndex = "-5";
            dropdownIconAddresses.style.transform = "rotate(180deg)";
            dropdownIconAddresses.setAttribute("viewBox", "0 -2 24 24");
            if (searchAddress.value.length != 0) {
                let addressButtons3 = document.getElementsByClassName("listOfButtonsAddresses");
                for (let i8 = 0; i8 < addressButtons3.length; i8++) {
                    addressButtons3[i8].style.display = "block";
                }
                searchAddress.value = "";
            }
    }
    else {
            addressesDropdownMenu.style.zIndex = "15";
            dropdownIconAddresses.style.transform = "rotate(360deg)";
            dropdownIconAddresses.setAttribute("viewBox", "0 2 24 24");
    }
});
document.getElementById("crossIconOrg").addEventListener("click", () => {
    orgBoundingBox.style.opacity = "0";
    addressBoundingBox.style.opacity = "0";
    organization.value = "";
    office.value = "";
    officeLocationsDropdown.innerHTML = "";
    groupName.style.color = "#D3D3D3";
    organizationClosingText.textContent = "Актив компанії";
    organizationClosingText.style.color = "#D3D3D3";
    webPageClosingText.innerHTML = "<u>Сайт</u>";
    if (fullname.value.length + email.value.length + organization.value.length + mobilePhone.value.length === 0) {
        if (generateButton.textContent === "СТВОРИТИ ВІЗИТКУ") {
            qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block;'>"
        }
        else {
            qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block; margin-top: 10px;'><img src='logoCard.png' id='logoClosing' width='112' style='position: relative; z-index: 15; opacity: 0.3; display: block; margin-top: 10px;'>";
        }
        generateButton.disabled = true;
        generateButton.style.backgroundColor = "#d3d3d3";
        copyIcon.style.opacity = "0.1";
    }
    else{
        createQrCode ();
        generateButton.disabled = false;
        generateButton.removeAttribute("style");
        copyIcon.style.opacity = "1";
    }
    if (organization.value.length === 0) {
        companyInCard.innerHTML = "АКТИВ КОМПАНІЇ";
        companyInCard.style.color = "#D3D3D3";
        webPageInCard.innerHTML = "Cайт";
        webPageInCard.style.color = "#D3D3D3";
        addressInCard.innerHTML = "Адреса офісу";
        addressInCard.style.color = "#D3D3D3";
    }
});
document.getElementById("crossIconAddress").addEventListener("click", () => {
    addressBoundingBox.style.opacity = "0";
    office.value = "";
    addressInCard.innerHTML = "Адреса офісу";
    addressInCard.style.color = "#D3D3D3";
});
const assetsButtons2 = document.getElementsByClassName("listOfButtonsAssets");
searchOrg.addEventListener("input", function(e) {
    let searchVar = searchOrg.value.toLowerCase();
    if (searchVar.length != 0) {
        for (let i4 = 0; i4 < assetsButtons2.length; i4++) {
            if (!assetsButtons2[i4].textContent.toLowerCase().includes(searchVar)) {
                assetsButtons2[i4].style.display = "none";
            }
            else {
                assetsButtons2[i4].style.display = "block";
            }
        }
    }
    else {
        for (let i5 = 0; i5 < assetsButtons2.length; i5++) {
            assetsButtons2[i5].style.display = "block";
        }
    }
});
searchAddress.addEventListener("input", function(e) {
    let searchVar2 = searchAddress.value.toLowerCase();
    let addressButtons2 = document.getElementsByClassName("listOfButtonsAddresses");
    if (searchVar2.length != 0) {
        for (let i6 = 0; i6 < addressButtons2.length; i6++) {
            if (!addressButtons2[i6].textContent.toLowerCase().includes(searchVar2)) {
                addressButtons2[i6].style.display = "none";
            }
            else {
                addressButtons2[i6].style.display = "block";
            }
        }
    }
    else {
        for (let i7 = 0; i7 < addressButtons2.length; i7++) {
            addressButtons2[i7].style.display = "block";
        }
    }
});
email.addEventListener("focusin", () => {
    if (email.value.length === 0) {
        email.value = "@metinvestholding.com";
    }
});
workPhone.addEventListener("focusin", () => {
    if (workPhone.value.length === 0) {
        workPhone.value = "+38(0";
    }
});
mobilePhone.addEventListener("focusin", () => {
    if (mobilePhone.value.length === 0) {
        mobilePhone.value = "+38(0";
    }
});
function createQrCode () {
    const qrDiv = document.getElementById("qrCode");
    qrDiv.innerHTML = "";
    qrString = "BEGIN:VCARD"+"\n"+"VERSION:2.1"+"\n"+"N;CHARSET=UTF-8:"+ fullname.value + "\n"+"TEL:"+ mobilePhone.value +"\n"+"EMAIL:"+email.value+"\n"+"NOTE;CHARSET=UTF-8:"+ organization.value +"\n"+"END:VCARD";
	new QRCode(document.getElementById("qrCode"), qrString);
	let qrCanvas = qrDiv.querySelector("canvas");
	qr = qrCanvas.toDataURL("image/png");
    if (generateButton.textContent === "СТВОРИТИ ПІДПИС") {
        let logoImg = new Image();
        logoImg.src = logo;
        logoImg.crossOrigin = "anonymous";
        let canvasClosing = document.getElementById("canvasClosing");
        let canvasClosingContext = canvasClosing.getContext("2d");
        canvasClosingContext.clearRect(0, 0, canvasClosing.width, canvasClosing.height);
        canvasClosingContext.fillStyle = "white";
        canvasClosingContext.fillRect(0, 0, canvasClosing.width, canvasClosing.height);
        logoImg.onload = function () {
            canvasClosingContext.drawImage(logoImg, 5, 220, 190, 33);
            canvasClosingContext.drawImage(qrCanvas, 5, 5, 190, 190);
            canvasImg = canvasClosing.toDataURL("image/png");
            qrInClosing.innerHTML = "<img src='" + canvasImg + "' alt='QR Code' width='112' height='150' style='position: relative; margin-top: 10px; margin-left: -2px;'>";
        }
    }
    else {
        qr = qrCanvas.toDataURL("image/png");
        qrInClosing.innerHTML = "<img src='" + qr + "' alt='QR Code' width='112' height='112' style='position: relative;'>";
    }
}
fullname.addEventListener("change", function(e) {
    if (fullname.value.length + email.value.length + organization.value.length + mobilePhone.value.length === 0) {
        if (generateButton.textContent === "СТВОРИТИ ВІЗИТКУ") {
            qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block;'>";
        }
        else {
            qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block; margin-top: 10px;'><img src='logoCard.png' id='logoClosing' width='112' style='position: relative; z-index: 15; opacity: 0.3; display: block; margin-top: 10px;'>";
        }
        generateButton.disabled = true;
        generateButton.style.backgroundColor = "#d3d3d3";
        copyIcon.style.opacity = "0.1";
    }
    else{
        createQrCode ();
        generateButton.disabled = false;
        generateButton.removeAttribute("style");
        copyIcon.style.opacity = "1";
    }
});
fullname.addEventListener("input", function(e) {
    fullnameInCard.innerHTML = fullname.value;
    fullnameInCard.style.color = "black";
    fullNameClosingText.innerHTML = "<b>"+fullname.value+"</b>";
    fullNameClosingText.style.color = "black";
    if (fullname.value.length === 0) {
        fullnameInCard.innerHTML = "ПІБ";
        fullnameInCard.style.color = "#D3D3D3";
        fullNameClosingText.innerHTML = "<b>ПІБ</b>";
        fullNameClosingText.style.color = "#D3D3D3";
    }
});
email.addEventListener("change", function(e) {
    if (fullname.value.length + email.value.length + organization.value.length + mobilePhone.value.length === 0) {
        if (generateButton.textContent === "СТВОРИТИ ВІЗИТКУ") {
            qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block;'>"
        }
        else {
            qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block; margin-top: 10px;'><img src='logoCard.png' id='logoClosing' width='112' style='position: relative; z-index: 15; opacity: 0.3; display: block; margin-top: 10px;'>";
        }
        generateButton.disabled = true;
        generateButton.style.backgroundColor = "#d3d3d3";
        copyIcon.style.opacity = "0.1";
    }
    else{
        createQrCode ();
        generateButton.disabled = false;
        generateButton.removeAttribute("style");
        copyIcon.style.opacity = "1";
    }
});
email.addEventListener("input", function(e) {
    const emailInputDiv = document.getElementById("emailInputDiv");
    const errorEmail = document.getElementById("errorEmail");
    const labelEmailInDiv = document.getElementById("labelEmailInDiv");
    emailInCard.innerHTML = email.value;
    emailInCard.style.color = "black";
    emailClosingText.innerHTML = "<a target='_blank' href='mailto:"+email.value+"' style='color: #45a2ff;'>"+email.value+"</a>";
    endingText.style.color = "black";
    if (email.value.length === 0) {
        emailInCard.innerHTML = "Електронна пошта";
        emailInCard.style.color = "#D3D3D3";
        emailClosingText.innerHTML = "<u>Електронна пошта</u>";
        endingText.style.color = "#D3D3D3";
    }
    if (emailInCard.getBoundingClientRect().height > 11) {
        emailInputDiv.style.border = "1px solid #FF3B30";
        errorEmail.style.display = "block";
        labelEmailInDiv.style.color = "#818A8F";
    }
    else {
        emailInputDiv.style.border = "1px solid #78ABFE";
        errorEmail.style.display = "none";
        labelEmailInDiv.style.color = "#2979FF";
    }
});
department.addEventListener("input", function(e) {
    departmentInCard.innerHTML = department.value;
    departmentInCard.style.color = "black";
    departmentClosingText.innerHTML = department.value;
    departmentClosingText.style.color = "black";
    if (department.value.length === 0) {
        departmentInCard.innerHTML = "Відділ";
        departmentInCard.style.color = "#D3D3D3";
        departmentClosingText.textContent = "Відділ";
        departmentClosingText.style.color = "#D3D3D3";
    }
});
position.addEventListener("input", function(e) {
    positionInCard.innerHTML = position.value;
    positionInCard.style.color = "black";
    positionClosingText.innerHTML = position.value;
    positionClosingText.style.color = "black";
    if (position.value.length === 0) {
        positionInCard.innerHTML = "Посада";
        positionInCard.style.color = "#D3D3D3";
        positionClosingText.textContent = "Посада";
        positionClosingText.style.color = "#D3D3D3";
    }
    if (positionInCard.getBoundingClientRect().height > 21) {
        departmentInCard.style.marginTop = "101px";
        departmentMargin = 24.2;
    }
    else if (positionInCard.getBoundingClientRect().height > 11) {
        departmentInCard.style.marginTop = "91px";
        departmentMargin = 21.8;
    }
    else{
        departmentInCard.style.marginTop = "81px";
        departmentMargin = 19.4;
    }
});
mobilePhone.addEventListener("change", function(e) {
    if (fullname.value.length + email.value.length + organization.value.length + mobilePhone.value.length === 0) {
        if (generateButton.textContent === "СТВОРИТИ ВІЗИТКУ") {
            qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block;'>"
        }
        else {
            qrInClosing.innerHTML = " <img src='qrCodeExample.png' width='112' height='112' style='position: relative; z-index: 15; display: block; margin-top: 10px;'><img src='logoCard.png' id='logoClosing' width='112' style='position: relative; z-index: 15; opacity: 0.3; display: block; margin-top: 10px;'>";
        }
        generateButton.disabled = true;
        generateButton.style.backgroundColor = "#d3d3d3";
        copyIcon.style.opacity = "0.1";
    }
    else{
        createQrCode ();
        generateButton.disabled = false;
        generateButton.removeAttribute("style");
        copyIcon.style.opacity = "1";
    }
});
mobilePhone.addEventListener("input", function(e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    if (e.target.value === "" || e.target.value === "+") {
        e.target.value = "";
    }
    else {
    e.target.value = '+' + x[1] + (x[2] ? ' (' + x[2] : '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '');
    }
    mobilePhoneInCard.innerHTML = "Моб. тел.: " + mobilePhone.value;
    mobilePhoneInCard.style.color = "black";
    mobilePhoneClosingText.textContent = "Моб. тел.: " + mobilePhone.value;
    mobilePhoneClosingText.style.color = "black";
    if (mobilePhone.value.length === 0) {
        mobilePhoneInCard.innerHTML = "Мобільний телефон";
        mobilePhoneInCard.style.color = "#D3D3D3";
        mobilePhoneClosingText.textContent = "Мобільний телефон";
        mobilePhoneClosingText.style.color = "#D3D3D3";
    }
});
workPhone.addEventListener("input", function(e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    if (e.target.value === "" || e.target.value === "+") {
        e.target.value = "";
    }
    else {
    e.target.value = '+' + x[1] + (x[2] ? ' (' + x[2] : '') + (x[3] ? ') ' + x[3] : '') + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '');
    }
    workPhoneInCard.innerHTML = "Тел.: " + workPhone.value;
    workPhoneInCard.style.color = "black";
    if (workPhone.value.length === 0) {
        workPhoneInCard.innerHTML = "Робочий телефон";
        workPhoneInCard.style.color = "#D3D3D3";
    }
});
generateButton.addEventListener("click", function() {
    if(generateButton.textContent === "СТВОРИТИ ВІЗИТКУ" ) {
        generatePDF();
    }
    else{
        let downloadLink = document.createElement("a");
        downloadLink.href = canvasImg;
        downloadLink.download = "qrCode";
        downloadLink.click();
    }
});

function generatePDF() {

	createQrCode ();

	pdfMake.vfs = {
    'Trebuchet-MS-Normal.ttf': trebuchNormal,
	'Trebuchen-MS-Bold.ttf': trebuchBold,
	'Trebuchet-MS-Italic.ttf': trebuchItalic,
    'Trebuchet-MS-Bold-Italic.ttf': trebuchBoldItalic
    };

    pdfMake.fonts = {
	    Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Medium.ttf',
            italics: 'Roboto-Italic.ttf',
            bolditalics: 'Roboto-Italic.ttf'
    	},
        Trebuchet: {
            normal: 'Trebuchet-MS-Normal.ttf',
	        bold: 'Trebuchen-MS-Bold.ttf',
	        italics: 'Trebuchet-MS-Italic.ttf',
	        bolditalics: 'Trebuchet-MS-Bold-Italic.ttf'
        }
    };
	
    var content = [
	    {
            image: logo,
            width: 32,
	        absolutePosition: { x: 5, y: 6 }
        },
	    {
            text: companyInCard.innerHTML,
            fontSize: 2.84,
            absolutePosition: { x: 5, y: 32.8 },
	        bold: true
        },
	    {
            text: webPageInCard.innerHTML,
            fontSize: 2.117,
	        absolutePosition: { x: 5, y: 36.9 }
        },
	    {
            text: emailInCard.innerHTML,
            fontSize: 2.117,
	        absolutePosition: { x: 5, y: 40 }
        },
	    {
            text: fullnameInCard.innerHTML,
            fontSize: 2.84,
            absolutePosition: { x: 50 , y: 7.5 },
	        bold: true
        },
	    {
            text: positionInCard.innerHTML,
            fontSize: 2.117,
	        absolutePosition: { x: 50, y: 16 }
        },
	    {
            text: departmentInCard.innerHTML,
            fontSize: 2.117,
	        absolutePosition: { x: 50, y: departmentMargin }
        },
	    {
            text: mobilePhoneInCard.innerHTML,
            fontSize: 2.117,
	        absolutePosition: { x: 50, y: 40 }
        },
	    {
            text: workPhoneInCard.innerHTML,
            fontSize: 2.117,
	        absolutePosition: { x: 50, y: 36.9 }
        },
	    {
            text: addressArray[1],
            fontSize: 2.117,
	        absolutePosition: { x: 50, y: 33.8 }
        },
	    {
            text: addressArray[0] + ",",
            fontSize: 2.117,
	        absolutePosition: { x: 50, y: 30.7 }
        }
    ];

    var content2 = [
	    {
	        image: qr,
	        absolutePosition: { x: 32, y: 13 },
	        pageBreak: 'before',
	        width: 26
	    }
    ];

    var docDefinition = {
        content: [content, content2],
        pageSize: { width: 90, height: 50 },
	    pageMargins: [5, 5, 5, 5],
	    defaultStyle: {
    	    font: 'Trebuchet'
  	    }
    };

    pdfMake.createPdf(docDefinition).open({ filename: 'business_card.pdf' });
};
