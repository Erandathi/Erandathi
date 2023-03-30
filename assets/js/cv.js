let cvBtn = document.getElementById("download_cv");

const pdfUrl = "assets/CV_maheshi anuradha.pdf";

cvBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "CV-Maheshi-Anuradha.pdf"; // Change the filename as desired
  link.dispatchEvent(new MouseEvent("click"));
});
