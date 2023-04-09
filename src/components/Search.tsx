import { FormEvent, FunctionComponent, useState } from "react";

interface SearchProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FunctionComponent<SearchProps> = ({ setSearchValue }) => {
  const [newSearch, setNewSearch] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSearchValue(() => newSearch);
    setNewSearch("");
  };

  return (
    <section className="search_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          value={newSearch}
          onChange={(event) => setNewSearch(event.target.value)}
        />
        <button className="search-button">Search</button>
      </form>
    </section>
  );
};

export default Search;
