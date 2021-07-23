import './searchForm.css';

const SearchForm = ({query, handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input 
                id="search"
                type="text" 
                value={query}
                onChange={handleChange}
                className="search-bar"
            />
            <button
                className="btn"
                value="Search"
                type="submit"
            >
               Search 
            </button>
        </form>
    )
}

export default SearchForm
