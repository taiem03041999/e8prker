const t=document.getElementsByClassName("payment-method-image");for(const e of t)e.addEventListener("click",()=>{document.getElementById(`details_${e.id}`).classList.toggle("hidden")});