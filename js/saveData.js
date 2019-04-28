let infos = { "name": "", "email": "", "tel": "", "address": "",
        "address2": "",  "address3": "", "city": "", "zip_code": "",
        "country": "GB", "cb_type": "visa", "cb_number": "",
        "cb_month": "12", "cb_year": new Date().getFullYear(), "cvv": "" }

chrome.storage.sync.get(["infos"], function(item){
    //if(Object.keys(item.name).length > 0) {
        infos = item.infos
        loadData()
    //}
})

document.getElementById('saveData').onclick = saveData
document.getElementById('deleteData').onclick = deleteData

function saveData() {

    infos.name = document.getElementsByName('name')[0].value
    infos.email = document.getElementsByName('email')[0].value
    infos.tel = document.getElementsByName('phone')[0].value

    infos.address = document.getElementsByName('address')[0].value
    infos.address2 = document.getElementsByName('address2')[0].value
    infos.address3 = document.getElementsByName('address3')[0].value
    infos.city = document.getElementsByName('city')[0].value
    infos.zip_code = document.getElementsByName('zip_code')[0].value
    infos.country = document.getElementsByName('country')[0].value
    
    infos.cb_type = document.getElementsByName('cb_type')[0].value
    infos.cb_number = document.getElementsByName('cb_number')[0].value
    infos.cb_month = document.getElementsByName('cb_month')[0].value
    infos.cb_year = document.getElementsByName('cb_year')[0].value
    infos.cvv = document.getElementsByName('cvv')[0].value

    chrome.storage.sync.set({ "infos": infos })
}

function loadData() {
    document.getElementsByName('name')[0].value = infos.name
    document.getElementsByName('email')[0].value = infos.email
    document.getElementsByName('phone')[0].value = infos.tel

    document.getElementsByName('address')[0].value = infos.address
    document.getElementsByName('address2')[0].value = infos.address2
    document.getElementsByName('address3')[0].value = infos.address3
    document.getElementsByName('city')[0].value = infos.city
    document.getElementsByName('zip_code')[0].value = infos.zip_code
    document.getElementsByName('country')[0].value = infos.country 
    
    document.getElementsByName('cb_type')[0].value = infos.cb_type
    document.getElementsByName('cb_number')[0].value = infos.cb_number
    document.getElementsByName('cb_month')[0].value = infos.cb_month
    document.getElementsByName('cb_year')[0].value = infos.cb_year
    document.getElementsByName('cvv')[0].value = infos.cvv
}

function deleteData() {
    infos = { "name": "", "email": "", "tel": "", "address": "",
        "address2": "",  "address3": "", "city": "", "zip_code": "",
        "country": "GB", "cb_type": "visa", "cb_number": "",
        "cb_month": "12", "cb_year": new Date().getFullYear(), "cvv": "" }
    chrome.storage.sync.set({'infos': infos});
    document.location.reload(true);
}