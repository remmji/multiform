import React from 'react';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
<>
<GlobalStyle/>

<ThemeProvider theme={lightTheme}>
 <Routes>
        <Route path="/" element={ <Main/> } />
 </Routes>
</ThemeProvider>
</>
  );
}

export default App;
