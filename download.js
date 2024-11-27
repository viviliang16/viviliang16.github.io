function downloadPDF()
{
const link = document.createElement("a");

link.href = 'CV/Viviana-Victoria-Liang-Cen.pdf'
link.download = "Viviana_Liang_Cen.pdf";
link.click();

document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);

}

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.btn');
    if (downloadButton) {
        downloadButton.addEventListener('click', (e) => {
            e.preventDefault();
            downloadPDF();
        });
    }
});