import React from "react";

function Search() {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Input Client Name to search"
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
