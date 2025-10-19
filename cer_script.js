function openCertificate(certName) {
    // Map certificate names to image URLs
    const certificates = {
        python: "certificates/python_certificate.jpg",
        data_viz: "certificates/data_viz_certificate.jpg",
        ai: "certificates/ai_certificate.jpg",
        digital_marketing: "certificates/digital_marketing_certificate.jpg",
        aws: "certificates/aws_certificate.jpg"
    };

    // Open certificate image in a new tab
    const url = certificates[certName];
    if(url) {
        window.open(url, "_blank");
    } else {
        alert("Certificate not available!");
    }
}