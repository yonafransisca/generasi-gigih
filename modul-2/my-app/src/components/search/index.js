import './Search.css';

function Search() {
    return (
        <div>
            <form>
                <input className="search-bar" type="text"></input>
                <input className="btn search" type="submit" value="Search"></input>
            </form>
        </div>
    )
}

export default Search
