/* =================
   FORM FEEDBACK MECHANISM 
   ================= */
   document.querySelector("#formEl").addEventListener("submit", function(e){
    e.preventDefault()
    document.querySelector(".btn").textContent = "Processsing. . ."
    let myFormData = new FormData(document.querySelector("#formEl"))
    let email = myFormData.get("email")
    let message = `<h2 class="hero-text">Congrats!</h2>
    <p class="supporting-text">You'll receive an update from us on ${email}</p>`
    setTimeout(function(){
        document.querySelector(".flex-item-1").innerHTML = message
        document.querySelector(".flex-item-1").style.minHeight = "100vh"
        document.querySelector(".flex-item-2").style.display = "none"
        document.querySelector(".flex-item-1").style.display = "block"
    }, 2800)
})