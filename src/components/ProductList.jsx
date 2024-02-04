import Product from "./Product"

export default function ProductList({ products, category, showAll }) {
  return (
    <>
      <h3 className='text-xl'>{category}</h3>
      {
        products.map(product => {
          if (!showAll) {
            if (product.category == category && product.stocked) {
              return (
                <Product name={product.name} price={product.price} in_stock={product.stocked} />
              )
            }
          } else {
            if (product.category == category) {
              return (
                <Product name={product.name} price={product.price} in_stock={product.stocked} />
              )
            }
          }
        })
      }
    </>
  )
}
