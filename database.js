import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-3cdb5-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

const jsonInDB = ref(database, "IceTeaDeneme")


const buttonEl = document.getElementById("button")

const cesitEl = document.getElementById("cesit")
const litreEl = document.getElementById("litre")
const favoriEl = document.getElementById("favori")
const isimEl = document.getElementById("isim")
const mailEl = document.getElementById("mail")




buttonEl.addEventListener("click", function(){

    let isim = isimEl.value
    let mail = mailEl.value
    let cesit = cesitEl.value
    let litre = litreEl.value
    let favori = favoriEl.value

    const values = new Map()

    values.set('isim',isim)
    values.set('mail',mail)
    values.set('cesit',cesit)
    values.set('litre',litre)
    values.set('favori',favori)

    if(isim && mail && cesit && litre && favori){
        var obj = Object.fromEntries(values);
        var myJSON = JSON.stringify(obj);
        push(jsonInDB,myJSON)
    } 
    else{
        alert("her kutucugu doldur gocunma")
    }

})