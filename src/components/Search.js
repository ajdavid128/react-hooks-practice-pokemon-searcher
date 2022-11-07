import React from "react";

function Search({propFunction}) {


function handleChange(e) {
 propFunction(e.target.value)
}


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
