let text = `Lorem ipsum dolor sit amet consectetur elit.`
let p = document.querySelector("p")
let i = 0
   
function write() {
   p.innerText = text.slice(0,i++)
   if (i == text.length + 1) {
      setTimeout(()=>{
        i = 0
      },1000)
      
   }
}
setInterval(write,100)