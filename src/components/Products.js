const Products = ({ products }) => {
  console.log(products);
  return (
    <section className='products-section'>
        <div>Products</div>
      <div className='products-wrapper'>
        {products?.map((p) => {
          return (
            <div className='products'>
              <img src={p.imageSrc} alt={p.title} />
              <p>{p.title}</p>
              <p>{p.price}</p>
              <p>Included {p.products_included}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
