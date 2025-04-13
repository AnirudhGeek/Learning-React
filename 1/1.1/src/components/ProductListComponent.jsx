import React from 'react'

const products = [
    {id: 1,name :"Phone",price : "$699"},
    {id: 2,name :"Laptop",price : "$1200"},
    {id: 3,name :"Headphone ",price : "$199"},
]

const ProductListComponent = () => {
  return (
    <div>
      {products.map(product=>(
        <ul key={product.id}>
            <li>name : {product.name}</li>
            <li>price : {product.price}</li>
        </ul>
      ))}
    </div>
  )
}

export default ProductListComponent
