import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/search", { state: term });
  };

  return (
    <form className="search_form" onSubmit={onFormSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search.."
        name="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button className="search_submit" type="submit">
        <img src="search_icon.png" />
      </button>
    </form>
  );
};

export default SearchForm;
