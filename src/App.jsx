import { useState } from 'react'
import ProductList from './components/ProductList'

const products = [
  { category: 'Fruits', name: 'Pomme', price: 1.99, stocked: true },
  { category: 'Légumes', name: 'Carotte', price: 0.99, stocked: true },
  { category: 'Fruits', name: 'Banane', price: 0.79, stocked: true },
  { category: 'Légumes', name: 'Tomate', price: 2.49, stocked: false },
  { category: 'Fruits', name: 'Fraise', price: 3.99, stocked: true },
  { category: 'Légumes', name: 'Brocoli', price: 1.49, stocked: true },
  { category: 'Fruits', name: 'Orange', price: 1.29, stocked: false },
  { category: 'Zogbon', name: 'Akassan', price: 200, stocked: true },
]

const categories = [
  "Fruits", "Légumes", "Zogbon"
]

function App() {
  const [showAll, setShowAll] = useState(true)
  function handleOnCheck() {
    setShowAll(!showAll)
  }
  return (
    <main className='p-2 flex flex-col gap-5'>
      <div className='flex gap-2'>
        <input type='checkbox' onChange={handleOnCheck} /> Only show products in stock
      </div>
      <h1 className='text-2xl underline'>Liste des produits</h1>
      {
        categories.map(
          category => <ProductList category={category} products={products} showAll={showAll} />
        )
      }
    </main>
  )
}

export default App
