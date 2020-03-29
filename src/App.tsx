import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Rounting from 'app/router/Rounting';
import { ThemeProvider } from '@material-ui/core'
import theme from './theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Rounting />
    </Router>
  </ThemeProvider>
);

export default App;
