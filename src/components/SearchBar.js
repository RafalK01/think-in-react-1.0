import { useState } from "react"


function SearchBar({searchItem}){
    const [searchQuery, setSearchQuery] = useState()


    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
        searchItem(searchQuery)
    }

    return (
        <div>
            <label>Search</label>
            <input value ={searchQuery} type="text" onChange={handleSearch}/>
        </div>
    )
}

export default SearchBar