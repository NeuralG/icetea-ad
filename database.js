import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-3cdb5-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

const jsonInDB = ref(database, "IceTeaDeneme")


const buttonEl = document.getElementById("button")

const sekilEl = document.getElementById("kill_by")
const silahEl = document.getElementById("silah")
const burakEl = document.getElementById("burak")
const ankaraEl = document.getElementById("ankara")
const nameEl = document.getElementById("isim")
const mailEl = document.getElementById("mail")




buttonEl.addEventListener("click", function(){

    let name = nameEl.value
    let mail = mailEl.value
    let silah = silahEl.value
    let sekil = sekilEl.value
    let burak = burakEl.value
    let ankara = ankaraEl.value

    const values = new Map()

    values.set('name',name)
    values.set('mail',mail)
    values.set('burak',burak)
    values.set('ankara',ankara)
    values.set('silah',silah)
    values.set('sekil',sekil)

    if(name && mail && silah && sekil && burak && ankara){
        var obj = Object.fromEntries(values);
        var myJSON = JSON.stringify(obj);
        push(jsonInDB,myJSON)
    } 
    else{
        alert("her kutucugu doldur gocunma")
    }

})