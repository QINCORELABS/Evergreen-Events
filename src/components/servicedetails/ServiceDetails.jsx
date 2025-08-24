import React, { useState, useEffect } from 'react';
import "../servicedetails/ServiceDetails.css";
import PageHeader from '../common/PageHeader';
import { services } from '../../utils/serviceDetails';

const ServiceDetails = () => {
  const [selectedService, setSelectedService] = useState('CATERERS');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <PageHeader title="SERVICES" />

      <div className="service-details-container">
        <div className="service-categories-sidebar italiana-regular">
          <ul>
            {Object.keys(services).map((service) => (
              <li key={service} onClick={() => setSelectedService(isMobile ? (selectedService === service ? null : service) : service)} className={selectedService === service ? 'active' : ''}>
                <span className="service-name">{service}</span>
                {isMobile && <span classClassName={`arrow ${selectedService === service ? 'open' : ''}`}>></span>}
                {isMobile && selectedService === service && (
                  <div className="service-content-mobile">
                    <img src={services[service].image} alt={service} style={{ width: '100%', height: 'auto', margin: '10px 0' }} />
                    <p>{services[service].description}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {!isMobile && (
          <div className="services-details">
            {selectedService && (
              <div className="service-content">
                <img src={services[selectedService].image} alt={selectedService} style={{ width: '300px', height: '200px', margin: '10px' }} />
                <p>{services[selectedService].description}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;