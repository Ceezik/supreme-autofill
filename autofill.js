const FIRSTNAME = "Clément", LASTNAME = "KOENIG", EMAIL = "test@test.com", PHONE = "0606060606", 
    ADDRESS = "14 rue Bellevue", CITY = "MULHOUSE", ZIP_CODE = "68200", COUNTRY = "FR"

const CB_TYPE = "master", CB_NUM = "5411 5211 5311 5411", CB_CVV = "123",
    CB_MONTH = "03", CB_YEAR = "2022"

document.getElementById('order_billing_name').value = FIRSTNAME + " " + LASTNAME
document.getElementById('order_email').value = EMAIL
document.getElementById('order_tel').value = PHONE
document.getElementById('bo').value = ADDRESS
document.getElementById('order_billing_city').value = CITY
document.getElementById('order_billing_zip').value = ZIP_CODE
document.getElementById('order_billing_country').value = COUNTRY

document.getElementById('credit_card_type').value = CB_TYPE
document.getElementById('cnb').value = CB_NUM
document.getElementById('vval').value = CB_CVV
document.getElementById('credit_card_month').value = CB_MONTH
document.getElementById('credit_card_year').value = CB_YEAR

document.getElementById('order_terms').checked = true
document.getElementsByClassName('icheckbox_minimal')[1].className = "icheckbox_minimal checked"

document.getElementsByName('commit')[0].click()




