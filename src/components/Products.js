/* eslint-disable no-unreachable */
const Products = ({ products }) => {
  console.log(products);
  return (
    <section>
      <div>Products</div>{' '}
      {products?.map((p) => {
        return (
          <>
            <img src={p.imageSrc} alt={p.title} />
            <p>{p.title}</p>
            <p>{p.price}</p>
            <p>Included {p.products_included}</p>
          </>
        );
      })}
    </section>
  );
};

export default Products;
