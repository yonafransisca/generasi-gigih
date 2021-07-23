import React, { useState } from 'react'
import Gif from '../../components/gif/Gif'
import SearchForm from '../../components/searchForm/searchForm'

const SearchGif = () => {
    const [searchInput, setSearchInput] = useState("")
    const [data, setData] = useState([])

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)
    }

    const handleSearchResult = (event) => {
        event.preventDefault()
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${searchInput}&limit=12`
        )
        .then(response => response.json())
        .then(response => {
            setData(response.data)
        })
    }
    
    return (
        <div>
            <SearchForm 
                query={searchInput}
                handleChange={handleSearchInput}
                handleSubmit={handleSearchResult}
            />
            {data?.map(gif => {
            return (
                <Gif
                    key={gif.id}
                    title={gif.title}
                    url={gif.images.original.url}
                />
            )
            })}
        </div>
    )
}

export default SearchGif
