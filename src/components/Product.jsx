export default function Product({ name, price, in_stock }) {
  return (
    <>
      <div  className="flex justify-between w-32 border border-gray-500 p-2 rounded-md">
        <h1 className={`${in_stock ? "" : "text-red-500"}`}>{name}</h1> :
        <h1>{price}</h1>
      </div>
    </>
  )
}
