// TravelInfo.js
import React from 'react';
import placesData from './placesData';

const TravelInfo = ({ selectedCurrency }) => {
  const country = selectedCurrency === 'INR' ? 'India'
                : selectedCurrency === 'USD' ? 'USA'
                : selectedCurrency === 'GBP' ? 'England'
                : selectedCurrency === 'AUD' ? 'Australia'
                : null;

  if (!country || !placesData[country]) {
    return null;
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <h2>Places to Visit in {country}</h2>
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        paddingBottom: '1rem',
        gap: '1rem',
      }}>
        {placesData[country].map((place, index) => (
          <div key={index} style={{
            minWidth: '220px',
            flex: '0 0 auto',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            backgroundColor: '#f5f5f5'
          }}>
            <img
              src={place.image}
              alt={place.name}
              style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h4>{place.name}</h4>
            <p style={{ fontSize: '0.85rem' }}>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelInfo;
