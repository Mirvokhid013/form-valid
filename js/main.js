let elForm = document.querySelector(".form");
let elName = document.querySelector(".form__name");
let elNumber = document.querySelector(".form__mobile");
let elEmail = document.querySelector(".form__email");
let elText = document.querySelector(".form__area");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    if(elName.value.length < 2) {
        alert(`Ism 2ta harfdan kam bo'lmasligi kerak`);
        return;
    }

    if(elNumber.value.length < 13) {
        alert(`Telefon raqam 13ta raqamdan kam bo'lmasligi kerak`);
        return;
    }

    if (elText.value.length < 5 || elText.value.length > 50) {
        alert(`Kiritilgan matn 5tadan kam va 50tadan ko'p bo'lmasligi kerak`);
        return;
    }
})