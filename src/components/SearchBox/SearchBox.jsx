import React from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={s.searchBox}>
      <label className={s.label}>
        Search contacts:
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Search by name"
        />
      </label>
    </div>
  );
};

export default SearchBox;
