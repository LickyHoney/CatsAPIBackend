//Renders the Search Component

function Search({ searchChange, searchClick }) {
  return (
    <div className="search">
      <div className="pa2">
        <input
          fullWidth
          id="standard-bare"
          variant="outlined"
          placeholder="Search Cats..."
          color="'primary'"
          onChange={searchChange}
        />
        <button onClick={searchClick}>Search</button>
      </div>
    </div>
  );
}

export default Search;
