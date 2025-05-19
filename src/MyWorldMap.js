import React from 'react';
import WorldMap from 'react-svg-worldmap';
import { useTheme } from '@mui/material';
import NightlightIcon from '@mui/icons-material/Nightlight';

const currencyToCountry = {
  INR: 'in',
  USD: 'us',
  GBP: 'gb',
  AUD: 'au',
};


const dummyWeatherData = {
  INR: [
    { day: 'Mon', min: 24, max: 35, icon: '01d' },
    { day: 'Tue', min: 25, max: 36, icon: '02d' },
    { day: 'Wed', min: 24, max: 34, icon: '03d' },
    { day: 'Thu', min: 23, max: 33, icon: '04d' },
    { day: 'Fri', min: 22, max: 34, icon: '01d' },
    { day: 'Sat', min: 23, max: 32, icon: '02d' },
    { day: 'Sun', min: 21, max: 31, icon: '03d' },
  ],
  USD: [
    { day: 'Mon', min: 18, max: 28, icon: '01d' },
    { day: 'Tue', min: 19, max: 27, icon: '02d' },
    { day: 'Wed', min: 17, max: 26, icon: '03d' },
    { day: 'Thu', min: 16, max: 25, icon: '04d' },
    { day: 'Fri', min: 17, max: 27, icon: '01d' },
    { day: 'Sat', min: 18, max: 26, icon: '02d' },
    { day: 'Sun', min: 19, max: 27, icon: '03d' },
  ],
  GBP: [
    { day: 'Mon', min: 10, max: 18, icon: '04d' },
    { day: 'Tue', min: 9, max: 17, icon: '03d' },
    { day: 'Wed', min: 8, max: 16, icon: '02d' },
    { day: 'Thu', min: 7, max: 15, icon: '01d' },
    { day: 'Fri', min: 6, max: 14, icon: '04d' },
    { day: 'Sat', min: 8, max: 16, icon: '03d' },
    { day: 'Sun', min: 9, max: 17, icon: '02d' },
  ],
  AUD: [
    { day: 'Mon', min: 20, max: 30, icon: '01d' },
    { day: 'Tue', min: 21, max: 29, icon: '02d' },
    { day: 'Wed', min: 22, max: 28, icon: '03d' },
    { day: 'Thu', min: 23, max: 27, icon: '04d' },
    { day: 'Fri', min: 24, max: 26, icon: '01d' },
    { day: 'Sat', min: 23, max: 25, icon: '02d' },
    { day: 'Sun', min: 22, max: 24, icon: '03d' },
  ],
};

const MyWorldMap = ({ baseCurrency, quoteCurrency }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const baseCountry = currencyToCountry[baseCurrency];
  const quoteCountry = currencyToCountry[quoteCurrency];
  const weatherData = dummyWeatherData[quoteCurrency];

  // Assign lighter value for base country, darker for quote country
  const data = [];
  if (baseCountry) data.push({ country: baseCountry.toUpperCase(), value: 30 }); // lighter color
  if (quoteCountry && quoteCountry !== baseCountry)
    data.push({ country: quoteCountry.toUpperCase(), value: 100 }); // darker color

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '1rem',
        borderRadius: '12px',
        background: isDark
          ? 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)'
          : 'linear-gradient(to bottom, #f0f2f0, #c9d6ff)',
        boxShadow: '0 0 12px rgba(0,0,0,0.2)',
      }}
    >
      {/* Weather forecast */}
      {weatherData && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '1rem',
            padding: '0 1rem',
            color: isDark ? '#fff' : '#000',
            fontSize: 14,
            fontWeight: '500',
          }}
        >
          {weatherData.map(({ day, min, max, icon }) => (
            <div
              key={day}
              style={{
                flex: 1,
                textAlign: 'center',
                borderRight: '1px solid #ccc',
                paddingRight: 8,
                lastChild: { borderRight: 'none' },
              }}
            >
              <div>{day}</div>
              <img
                src={`https://openweathermap.org/img/wn/${icon}.png`}
                alt="weather icon"
                style={{ width: 40, height: 40 }}
              />
              <div>
                {min}° / {max}°
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Moon icon */}
      {isDark && (
        <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}>
          <NightlightIcon sx={{ fontSize: 42, color: '#fff' }} />
        </div>
      )}

      {/* Sun icon */}
      {!isDark && (
        <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}>
          {/* <img
            src="/sun-icon.png"
            alt="Sun Icon"
            style={{ width: 42, height: 42, userSelect: 'none', pointerEvents: 'none' }}
          /> */}
        </div>
      )}

      

      <WorldMap
        data={data}
        color={theme.palette.primary.main}
        size="responsive"
        backgroundColor="transparent"
        frame={false}
        
        

      />
    </div>
  );
};

export default MyWorldMap;
