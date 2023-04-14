const Products = ({ products }) => {
  console.log(products);

  const priceFormatter = (num) => {
    const price = (num / 100).toFixed(2);
    if (price.endsWith('.00')) {
      return price.slice(0, -3);
    } else {
      return price;
    }
  };

  return (
    <section className='products-section'>
      <div>Products</div>
      <div className='products-wrapper'>
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
              <h2 className='price'>${priceFormatter(p.price)}</h2>
              <p>{scentProfile}</p>
              <h3>Included</h3>
              <p> {p.products_included}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
