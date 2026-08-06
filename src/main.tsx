import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifsApp } from './GifsApp';

import './index.css';
import { Footer } from './components/Footer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="main-container">
      <GifsApp />
      <Footer />
    </div>
  </StrictMode>
);
