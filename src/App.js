// App.js
import React, { useState, useMemo } from 'react';
import {
  AppBar, Toolbar, Typography, Select, MenuItem,
  TextField, Button, FormControl, InputLabel,
  Paper, CssBaseline, IconButton,
  createTheme, ThemeProvider
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MyWorldMap from './MyWorldMap';
import TravelInfo from './TravelInfo';
import './App.css';

const dummyRates = {
  'USD_INR': 83,
  'INR_USD': 0.012,
  'USD_GBP': 0.79,
  'GBP_USD': 1.27,
  'INR_GBP': 0.0095,
  'GBP_INR': 105,
  'GBP_AUD': 1.92,
  'AUD_GBP': 0.52,
  'USD_AUD': 1.52,
  'AUD_USD': 0.66,
  'INR_AUD': 0.018,
  'AUD_INR': 56,
};

function App() {
  const [quoteCurrency, setQuoteCurrency] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  }), [darkMode]);

  const currencies = [
    { code: 'INR', label: 'India (INR)' },
    { code: 'USD', label: 'USA (USD)' },
    { code: 'GBP', label: 'England (GBP)' },
    { code: 'AUD', label: 'Australia (AUD)' }
  ];

  const submitCurrency = () => {
    if (!quoteCurrency || !baseCurrency || !amount) {
      alert('Please select both currencies and enter an amount.');
      return;
    }

    if (quoteCurrency === baseCurrency) {
      setExchangeRate(1);
      setConvertedAmount(amount);
      return;
    }

    const rateKey = `${baseCurrency}_${quoteCurrency}`;
    const rate = dummyRates[rateKey];

    if (!rate) {
      alert('Exchange rate not available in dummy data.');
      return;
    }

    setExchangeRate(rate);
    setConvertedAmount((amount * rate).toFixed(2));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Currency Converter
          </Typography>
          <div style={{ display: 'flex', gap: '1rem', marginRight: '1rem' }}>
            <Button color="inherit" onClick={() => window.open('https://www.skyscanner.com/', '_blank')}>Book Tickets</Button>
            <Button color="inherit" onClick={() => window.open('https://onemileatatime.com/', '_blank')}>Blog</Button>
            <Button color="inherit" onClick={() => window.open('https://www.makemytrip.com/', '_blank')}>Book Stay</Button>
          </div>
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <div className="main-container" style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)', padding: '1rem' }}>
        {/* Row 1: Map and Sidebar */}
        <div style={{ display: 'flex', flex: 1 }}>
          <div className="map-section" style={{ width: '70%', marginRight: '1rem' }}>
            <MyWorldMap baseCurrency={baseCurrency} quoteCurrency={quoteCurrency} />
          </div>
          <div className="content-box" style={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
            <Paper elevation={4} className="paper-container" style={{ padding: '1rem' }}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Destination Country</InputLabel>
                <Select value={quoteCurrency} onChange={(e) => setQuoteCurrency(e.target.value)}>
                  {currencies.map((c) => (
                    <MenuItem key={c.code} value={c.code}>{c.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>Current Country</InputLabel>
                <Select value={baseCurrency} onChange={(e) => setBaseCurrency(e.target.value)}>
                  {currencies.map((c) => (
                    <MenuItem key={c.code} value={c.code}>{c.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Current Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                margin="normal"
              />

              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={submitCurrency}
                style={{ marginTop: '1rem' }}
              >
                Submit
              </Button>

              <TextField
                fullWidth
                label="Exchange Rate"
                value={exchangeRate}
                InputProps={{ readOnly: true }}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Converted Amount"
                value={convertedAmount}
                InputProps={{ readOnly: true }}
                margin="normal"
              />
            </Paper>
          </div>
        </div>

        {/* Row 2: Travel Info */}
        <div style={{ marginTop: '1rem' }}>
          <TravelInfo selectedCurrency={quoteCurrency} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

