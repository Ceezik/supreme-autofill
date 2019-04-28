document.getElementById('closeWindow').onclick = closeWindow
let back = document.getElementById('back')
if(back != null) {
    back.onclick = getBack
}

function closeWindow() {
    window.close()
}

function getBack() {
    window.location.replace("index.html")
}