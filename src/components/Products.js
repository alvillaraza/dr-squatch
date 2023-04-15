import { useState, useEffect } from 'react';

const scentList = ['woodsy', 'citrus', 'rich', 'spiced', 'herbal'];

const Products = ({ products }) => {
  const [selectScents, setSelectScents] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    if (selectScents.length === 0) {
      setFilteredProducts(products);
    }

    if (selectScents.length > 0) {
      let filteredArray = [];

      products.forEach((product) => {
        selectScents.forEach((scent) => {
          if (product.scents.includes(scent)) {
            if (!filteredArray.includes(product)) {
              filteredArray.push(product);
            }
          }
        });
      });

      setFilteredProducts(filteredArray);
    }
  }, [selectScents]);

  const priceFormatter = (num) => {
    const price = (num / 100).toFixed(2);
    if (price.endsWith('.00')) {
      return price.slice(0, -3);
    } else {
      return price;
    }
  };

  function includeDups(includedProducts) {
    let sentenceStructure = '';

    const counts = includedProducts.reduce(
      (acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1,
      }),
      {},
    );
    for (const [key, value] of Object.entries(counts)) {
      const name = key.split('-');

      const nameCapitalized = name
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      sentenceStructure += `${nameCapitalized}${
        value > 1 ? ` x ${value}` : ''
      }`;
      sentenceStructure +=
        Object.keys(counts)[Object.keys(counts).length - 1] === key ? '' : ', ';
    }

    return sentenceStructure;
  }

  function toggleScent(scent) {
    const arrCopy = [...selectScents];
    if (!selectScents.includes(scent)) {
      setSelectScents([...selectScents, scent]);
    } else {
      const removeIndex = selectScents.indexOf(scent);
      arrCopy.splice(removeIndex, 1);
      setSelectScents(arrCopy);
    }
  }

  return (
    <section className='products-page'>
      <div>Products</div>
      {scentList.map((s) => {
        return (
          <span>
            <input
              type='checkbox'
              value={`${s}`}
              onClick={() => toggleScent(s)}
            />
            <label for={`${s}`}>{`${s}`}</label>
          </span>
        );
      })}
      <div className='products-wrapper'>
        {filteredProducts?.map((p) => {
          return (
            <div className='products'>
              <img src={p.imageSrc} alt={p.title} />
              <h2>{p.title}</h2>
              <div className='price-wrapper'>
                {p.originalPrice && (
                  <h2 className='price-original'>
                    ${priceFormatter(p.originalPrice)}
                  </h2>
                )}
                <h2 className='price'>${priceFormatter(p.price)}</h2>
              </div>
              <div className='scents'>
                {p.scents.map((scent) => {
                  return <h2 className={`${scent}`}>{scent}</h2>;
                })}
              </div>
              <p>Included</p>
              <p className='included'> {includeDups(p.products_included)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
