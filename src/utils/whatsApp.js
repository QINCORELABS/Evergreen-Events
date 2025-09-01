
export function sendWhatsAppMessage(formData) {
    const dummyNumber = "+919947376667"; 
    const message = `Hello! I want to share my event details:
  First Name: ${formData.firstName}
  Last Name: ${formData.lastName}
  Email: ${formData.email}
  Phone: ${formData.phone}
  Order Number: ${formData.orderNumber}
  Event Type: ${formData.eventType}
  Message: ${formData.message}`;
  
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${dummyNumber}?text=${encodedMessage}`;
  
    window.open(whatsappURL, "_blank");
  }
  