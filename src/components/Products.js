const Products = ({ products }) => {
  // console.log(products);

  const priceFormatter = (num) => {
    const price = (num / 100).toFixed(2);
    if (price.endsWith('.00')) {
      return price.slice(0, -3);
    } else {
      return price;
    }
  };

  //map through the products,
  // create a new array
  // place each item in the newArr, but if the item already exists in that array, add a "x 1", and keep adding to that number?

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

      const newname = name
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      // const temp = name.split(' ');
      console.log(newname);

      // const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
      // sentenceStructure += `${nameCapitalized}${
      //   value > 1 ? ` x ${value}` : ''
      // }`;
      // sentenceStructure +=
      //   Object.keys(counts)[Object.keys(counts).length - 1] === key ? '' : ', ';
    }

    return sentenceStructure;
  }

  return (
    <section className='products-section'>
      <div>Products</div>
      <div className='products-wrapper'>
        {/* TODO: We still have to display the original price!! */}
        {/* TODO: We still have to display the original price!! */}
        {/* TODO: We still have to display the original price!! */}
        {products?.map((p) => {
          const scentProfile =
            p.title === 'Clean & Fresh' ? (
              <div className='scents'>
                <h3 className='woodsy'>Woodsy</h3>
                <h3 className='fresh'>Fresh</h3>
              </div>
            ) : p.title === 'Top Squatch' ? (
              <div className='scents'>
                <h3 className='woodsy'>Woodsy</h3>
                <h3 className='citrus'>Citrus</h3>
              </div>
            ) : p.title === 'Shower Essentials' ? (
              <div className='scents'>
                <h3 className='woodsy'>Woodsy</h3>
                <h3 className='citrus'>Citrus</h3>
                <h3 className='herbal'>Herbal</h3>
              </div>
            ) : p.title === 'Deo & Soap Set' ? (
              <div className='scents'>
                <h3 className='woodsy'>Woodsy</h3>
                <h3 className='citrus'>Citrus</h3>
                <h3 className='rich'>Rich</h3>
                <h3 className='spiced'>Spiced</h3>
                <h3 className='herbal'>Herbal</h3>
              </div>
            ) : null;
          return (
            <div className='products'>
              <img src={p.imageSrc} alt={p.title} />
              <h2>{p.title}</h2>
              <div className='price-wrapper'>
                {p.originalPrice && (
                  <h2 className='price-original'>
                    some price ${priceFormatter(p.price)}
                  </h2>
                )}
                <h2 className='price'>${priceFormatter(p.price)}</h2>
              </div>
              <p>{scentProfile}</p>
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
