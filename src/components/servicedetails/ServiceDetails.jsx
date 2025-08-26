import React, { useState, useEffect } from 'react';
import PageHeader from '../common/PageHeader';
import { servicesData } from "../../utils/serviceDetails";
import "../servicedetails/ServiceDetails.css";

const ServiceDetails = () => {
  const [selectedService, setSelectedService] = useState('CATERERS');
  const [isMobile, setIsMobile] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const serviceKeys = Object.keys(servicesData);
  const currentService = servicesData[selectedService];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleServiceClick = (serviceKey) => {
    if (isMobile) {
      setOpenAccordion(openAccordion === serviceKey ? null : serviceKey);
    } else {
      setSelectedService(serviceKey);
    }
  };

  const renderDesktopView = () => (
    <div className="service-details-container">
      <div className="services-list italiana-regular">
        {serviceKeys.map((serviceKey) => (
          <div 
            key={serviceKey}
            className={`service-item ${selectedService === serviceKey ? 'active' : ''}`}
            onClick={() => setSelectedService(serviceKey)}
          >
            {serviceKey}
          </div>
        ))}
      </div>
      
      <div className="service-list-details">
        <div className="service-content">
          <h2 className="service-title italiana-regular">{currentService.title}</h2>
          <p className="service-description">{currentService.description}</p>
          
          <div className="service-items-grid">
            {currentService.items.map((item, index) => (
              <div 
                key={index} 
                className="service-item-card"
              >
                <img 
                  src={item.Image} 
                  alt={item.name} 
                  className="service-item-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMobileView = () => (
    <div className="mobile-accordion-container">
      {serviceKeys.map((serviceKey) => {
        const service = servicesData[serviceKey];
        const isOpen = openAccordion === serviceKey;
        
        return (
          <div key={serviceKey} className="accordion-item">
            <div 
              className="accordion-header"
              onClick={() => handleServiceClick(serviceKey)}
            >
              <span className="accordion-title">{serviceKey}</span>
              <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            
            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
              <div className="accordion-body">
                <p className="mobile-service-description">{service.description}</p>
                <div className="mobile-service-items">
                  {service.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="mobile-service-item"
                    >
                      <img 
                        src={item.Image} 
                        alt={item.name} 
                        className="mobile-service-item-image"
                      />
                      <div className="mobile-item-name">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <PageHeader title="SERVICES"/>
      {isMobile ? renderMobileView() : renderDesktopView()}
    </div>
  );
};

export default ServiceDetails;
