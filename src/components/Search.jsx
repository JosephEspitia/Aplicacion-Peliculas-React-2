import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { FaSearch } from "react-icons/fa";
import "../assets/Search.css";

export default function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    setSearchText(search || "");
  }, [search])

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/?search=" + searchText);
  };
  return (
    <form className="searchContainer" onSubmit={handleSubmit}>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          value={searchText}
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(event) => {
            const value = event.target.value
            setSearchText(value)
            navigate("/?search=" + value)
          }}
        />
        <button className="searchButton" type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
