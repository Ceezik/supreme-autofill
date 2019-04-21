document.getElementById('saveData').onclick = saveData 

function saveData() {

    let infos = { "name": "", "email": "", "phone": "", "address": "", "city": "",
        "zip_code": "", "country": "", "cb_type": "", "cb_number": "",
        "cb_month": "", "cb_year": "", "cvv": "" }

    infos.name = document.getElementsByName('name')[0].value
    infos.email = document.getElementsByName('email')[0].value
    infos.phone = document.getElementsByName('phone')[0].value

    infos.address = document.getElementsByName('address')[0].value
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