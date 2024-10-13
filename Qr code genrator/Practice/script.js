const generatorBtn = document.getElementById("g-btn");
const imgBox = document.getElementsByClassName("img-box")[0];
const qrImg = document.getElementById("qr-image");
const qrText = document.getElementById("qr-code-text");

function genarateQrCode() {
  const qrCodeLink =
    " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    encodeURIComponent(qrText.value);
  qrImg.src = qrCodeLink;

  if (qrText.value == "") {
    imgBox.style.display = "none";
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  } else {
    qrImg.onload = () => {
        imgBox.style.display = 'block'
        imgBox.classList.add("show-img")
    };
  }
}
generatorBtn.addEventListener("click",()=>{
    genarateQrCode()
})
