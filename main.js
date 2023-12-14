const openBtn = document.getElementById("openBtn");
const openBtn2 = document.getElementById("openBtn2");
const popup = document.getElementById("popup");
const popup2 = document.getElementById("popup2");
const closeBtn = document.getElementById("closeBtn");
const closeBtn2 = document.getElementById("closeBtn2");

function openPopup(popupElement) {
    popupElement.style.display = "block";
}

function closePopup(popupElement) {
    popupElement.style.display = "none";
}

openBtn.addEventListener("click", function() {
    openPopup(popup);
});

openBtn2.addEventListener("click", function() {
    openPopup(popup2);
});

closeBtn.addEventListener("click", function() {
    closePopup(popup);
});

closeBtn2.addEventListener("click", function() {
    closePopup(popup2);
});

window.addEventListener("click", function(event) {
    if (event.target === popup) {
        closePopup(popup);
    } else if (event.target === popup2) {
        closePopup(popup2);
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePopup(popup);
        closePopup(popup2);
    }
});
