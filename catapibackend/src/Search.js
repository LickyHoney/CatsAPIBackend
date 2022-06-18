import { TextField, IconButton } from "@material-ui/core";

import { SearchOutlined } from "@material-ui/icons";

function Search({ searchfield, searchChange, searchClick }) {
  return (
    <div className="search">
      <div className="pa2">
        <input
          fullWidth
          id="standard-bare"
          variant="outlined"
          placeholder="Search breeds..."
          color="'primary'"
          onChange={searchChange}
        />
        <button onClick={searchClick}>Search</button>
      </div>
    </div>
  );
}

export default Search;
