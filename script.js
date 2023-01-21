const wrapper = document.querySelector(".wrapper"),
generateBtn = document.querySelector(".form button"),
qrInput = document.querySelector(".form input"),
qrImg = document.querySelector(".qr-code img")

generateBtn.addEventListener("click",()=>{
    let qrValue = qrInput.value
    if(!qrValue) return
    generateBtn.innerText =  "Generating Qr Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active")
        generateBtn.innerText =  "Generate QR code"
    })
})

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active"); 
    }
});