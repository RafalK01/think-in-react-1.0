import { useState } from 'react'
import jsonData from '../data.json'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import ProductRow from './ProductRow'

function ProductsPage () {
  const [products, setProducts] = useState(jsonData)
  const [productsData, setProductsData] = useState(jsonData);
  const [searchQuery, setSearchQuery] = useState()


  const  searchItem = (query) => {
     setSearchQuery(query)
     const searchResult = productsData.filter(product => {
        const nameChars = product.name?.toLowerCase().split('').sort()
        const queryChars = query?.toLowerCase().split('').sort()
        return queryChars?.every(char => nameChars.includes(char))
       })
      setProducts(searchResult)
  }


  return(
      <div>
        <h1>IronStore</h1>

        <SearchBar searchItem={searchItem}/>
        <ProductTable products={products}/>

      </div>    
  )
}

export default ProductsPage