chrome.storage.sync.get(["infos"], function(item){

    const infos = item.infos
    
    document.getElementById('order_billing_name').value = infos.name
    document.getElementById('order_email').value = infos.email
    document.getElementById('order_tel').value = infos.tel

    document.getElementById('bo').value = infos.address
    document.getElementById('oba3').value = infos.address2
    document.getElementById('order_billing_address_3').value = infos.address3
    document.getElementById('order_billing_city').value = infos.city
    document.getElementById('order_billing_zip').value = infos.zip_code
    document.getElementById('order_billing_country').value = infos.country

    document.getElementById('credit_card_type').value = infos.cb_type
    document.getElementById('cnb').value = infos.cb_number
    document.getElementById('vval').value = infos.cvv
    document.getElementById('credit_card_month').value = infos.cb_month
    document.getElementById('credit_card_year').value = infos.cb_year

    document.getElementById('order_terms').checked = true
    document.getElementsByClassName('icheckbox_minimal')[1].className = "icheckbox_minimal checked"

    document.getElementsByName('commit')[0].click()

})




