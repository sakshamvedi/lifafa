let n = document.getElementById("na")
let  is = document.getElementById("email")
let d = document.getElementById("dates")
let id = document.getElementById("cred")
let url = document.getElementById("message")

let namely = JSON.parse(localStorage.getItem("myname"))
let urls = JSON.parse(localStorage.getItem("myurl"))
let date =  JSON.parse(localStorage.getItem("mydate"))
let identity = JSON.parse(localStorage.getItem("myiden"))
let myissued =  JSON.parse(localStorage.getItem("myissue"))


let naam = []
let issued = []
let din = []
let ids =[]
let uri = []


if(urls)
{
    if(date)
    { 
      naam = namely
      uri = urls
       din = date
      ids = identity
      issued = myissued
    }
}


let xman = document.getElementById("insert")
let a= ""




function add()
{
    
    naam.push(n.value)
    issued.push(is.value)
    din.push(d.value)
    ids.push(id.value)
    uri.push(url.value)
   
    localStorage.setItem("myname",JSON.stringify(naam))
    localStorage.setItem("myissue",JSON.stringify(issued))
    localStorage.setItem("mydate",JSON.stringify(din))
    localStorage.setItem("myiden",JSON.stringify(ids))
    localStorage.setItem("myurl",JSON.stringify(uri))
   n.value = ""
   is.value =""
   d.value = ""
   id.value = ""
   url.value = ""

    alert("Your Certificate Added 😊")
}

function deleted()
{
localStorage.clear()
alert("Your All Certificate Deleted 😔")
}

for (let index = 0; index < urls.length; index++) {
 a+= `
  <section class="text-gray-400 bg-gray-900 body-font justify-center ">
  <div class="container px-7 py-7 mx-auto justify-center">
    <div class="flex flex-wrap -m-4 justify-center">
      <div class="p-4 lg:w-1/3 justify-center">
        <div class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 class="tracking-widest text-xs title-font font-larger text-green-400  mb-1" id="issued"> Issued By : ${issued[index]}</h2>
          <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3" id="title"> ${naam[index]}</h1>
          <p class="leading-relaxed mb-3" id="company">Credential Id : ${ids[index]}</p>
          <p class="leading-relaxed mb-3" id="crede">${din[index]}</p>
          <a class="text-indigo-400 inline-flex items-center" id="view" href = '${uri[index]}'>View Certificate
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </span>
            <span class="text-gray-500 inline-flex items-center leading-none text-sm">
              <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      </div>
      </div>
  </section>
  `
    xman.innerHTML = a;
}





