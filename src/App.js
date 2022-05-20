import React from 'react';
import GlobalProvider from './components/CartContext/CartContext';
import Rutas from './routes/Rutas';

function App() {
  return (
    <div className="App bg-light" >
      <GlobalProvider>
        <Rutas />
      </GlobalProvider>
    </div>
  );
}

export default App;
