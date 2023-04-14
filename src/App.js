import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Products from './components/Products';

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get('https://ae3t7l1i79.execute-api.us-east-1.amazonaws.com/bundles')
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div className='App' products={products}>
      Dr Squatch
      <Products products={products} />
    </div>
  );
}

export default App;
