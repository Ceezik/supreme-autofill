document.getElementById('close').onclick = closePopup
let back = document.getElementById('back')
if(back != null) {
    back.onclick = getBack
}

function closePopup() {
    window.close()
}

function getBack() {
    window.location.replace("index.html")
}