import React from 'react';
import './App.css';
import OrderRow from './component/OrderRow/OrderRow';
import RowAdder from './component/RowAdder/RowAdder';


function App() {
  return (
    <div className=''>
    <RowAdder/>
    {/* <OrderRow data={[]} /> */}
    </div>
  );
}

export default App;
