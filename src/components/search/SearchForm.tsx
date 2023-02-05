import "./SearchForm.css"

const SearchForm = () => {
  return (
    <form className="search_form">
        <input className="search" type="text" placeholder="Search.." name="search"/>
        <button className="search_submit" type="submit">
            <img src="search_icon.png"/>
        </button>
    </form>
  )
};

export default SearchForm;
