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

  const prod = products?.map((p) => {
    if (p.title === 'Clean & Fresh') {
      return { ...p, scents: ['woodsy', 'fresh'], originalPrice: 4300 };
    } else if (p.title === 'Top Squatch') {
      return { ...p, scents: ['woodsy', 'citrus'], originalPrice: 6900 };
    } else if (p.title === 'Shower Essentials') {
      return {
        ...p,
        scents: ['woodsy', 'citrus', 'herbal'],
        originalPrice: 4600,
      };
    } else if (p.title === 'Deo & Soap Set') {
      return {
        ...p,
        scents: ['woodsy', 'citrus', 'rich', 'spiced', 'herbal'],
        originalPrice: null,
      };
    }
    return {...p};
  });

console.log(prod)
  return (
    <div className='App'>
      Dr Squatch
      <Products products={prod} />
    </div>
  );
}

export default App;
