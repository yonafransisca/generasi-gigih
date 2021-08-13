import './searchForm.css';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';


const SearchForm = ({query, handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <TextField 
                id="search"
                type="text" 
                value={query}
                onChange={handleChange}
                margin="dense"
            />
            <Button
                variant="contained" 
                color="primary"
                
                value="Search"
                type="submit"
            >
               Search 
            </Button>
        </form>
    )
}

export default SearchForm
