const Products = ({ products }) => {
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

  return (
    <section className='products-section'>
      <div>Products</div>
      <div className='products-wrapper'>
        {products?.map((p) => {
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
