import React from "react";
import styles from '../Components/SearchBox.module.css'
function SearchBox({ search, setsearch,serachHandler }) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search title" value={search}  onChange={(e)=>setsearch(e.target.value.toLowerCase().trim())}/>
      <button onClick={serachHandler}>
        <p>search</p>
      </button>
    </div>
  );
}

export default SearchBox;
