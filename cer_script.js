function openCertificate(certName) {
    // Map certificate names to your local file paths
    const certificates = {
        python: "C:/Users/Dadapeer/Desktop/portfolio/img/mathplotlib.jpg",
        data_viz: "C:/Users/Dadapeer/Desktop/portfolio/img/data_visulaization.jpg",
        ai: "C:/Users/Dadapeer/Desktop/portfolio/img/AI.jpg",
        digital_marketing: "C:/Users/Dadapeer/Desktop/portfolio/img/digital_marketing.jpg", // add file if available
        aws: "C:/Users/Dadapeer/Desktop/portfolio/img/data_visulaization.jpg",
        resume: "C:/Users/Dadapeer/Desktop/portfolio/img/Resume.pdf"
    };

    // Open certificate file in a new tab
    const url = certificates[certName];
    if(url) {
        window.open(url, "_blank");
    } else {
        alert("Certificate not available!");
    }
}