import React, { Component } from 'react'
import GifComponent from './GifComponent'
import '../../components/search/Search.css'

export default class Search extends Component {
    state = { 
        searchInput: '',
        data: [],
    }

    getGifData = () => {
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${this.state.searchInput}&limit=12`
        )
        .then(response => response.json())
        .then(response => {
            this.setState({
                data: response.data
            })
        })
    }

    handleSearchInput = (event) => {
        this.setState({searchInput: event.target.value})
    }
    
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.searchInput}
                    onChange={this.handleSearchInput}
                    className="search-bar"
                />
                <button
                    onClick={this.getGifData}
                    className="btn"
                >
                    Search
                </button>
                {this.state.data?.map(gif => {
                    return (
                        <GifComponent
                            key={gif.id}
                            title={gif.title}
                            url={gif.images.original.url}
                        />
                    )
                })}
            </div>
        )
    }
}
