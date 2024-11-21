document.addEventListener("DOMContentLoaded", function () {

    const textInput = document.getElementById("text-input");
    const generateButton = document.getElementById("generate-button");
    const downloadButton = document.getElementById("download-button");
    const qrcode = new QRCode(document.getElementById("qrcode"), {});
  
    generateButton.addEventListener("click", function () {
  
      const text = textInput.value;
  
      if (text) {
  
        qrcode.makeCode(text);
        downloadButton.classList.remove("none"); // Afficher le bouton de téléchargement
  
      }
    });
  
    downloadButton.addEventListener("click", function () {
  
      const qrCodeImage = document.querySelector("#qrcode img");
      const a = document.createElement("a");
      a.href = qrCodeImage.src;
      a.download = "qrcode.png";
      a.click();
      
    });
  });
  