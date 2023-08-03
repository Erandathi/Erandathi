let cvBtn = document.getElementById("download_cv");

const pdfUrl = "assets/CV_maheshi anuradha.pdf";

cvBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "CV-Maheshi-Anuradha.pdf"; // Change the filename as desired
  link.dispatchEvent(new MouseEvent("click"));
});


let ecoBtn = document.getElementById("download_ecopilot");

const ecoUrl = "assets/case_studies/Ecopilot.pdf";

ecoBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = ecoUrl;
  link.download = "Ecopilot Case Study.pdf"; // Change the filename as desired
  link.dispatchEvent(new MouseEvent("click"));
});



let dojoBtn = document.getElementById("download_dojo");

const dojoUrl = "assets/case_studies/Coderdojo.pdf";

dojoBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = dojoUrl;
  link.download = "CoderDojo.lk Case Study.pdf"; // Change the filename as desired
  link.dispatchEvent(new MouseEvent("click"));
});
