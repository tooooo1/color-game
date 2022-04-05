import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Home, Ready } from './pages';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ready" element={<Ready />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
