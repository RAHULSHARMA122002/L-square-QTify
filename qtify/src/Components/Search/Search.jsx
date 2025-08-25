import React from "react";
import styles from "./Search.module.css";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { truncate } from "../healper/healper"; 

function Search({ searchData, placeholder }) {
  const navigate = useNavigate();

  const handleSelect = (event, value) => {
    if (value) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <Autocomplete
      options={searchData || []}
      getOptionLabel={(option) => option.title || ""}
      onChange={handleSelect}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder || "Search a song of your choice"}
          className={styles.search}
          variant="outlined"
        />
      )}
      renderOption={(props, option) => {
        const artists = option.songs.reduce((acc, cur) => {
          acc.push(...cur.artists);
          return acc;
        }, []);

        return (
          <li {...props}>
            <p className={styles.albumTitle}>{option.title}</p>
            <p className={styles.albumArtists}>{truncate(artists.join(", "), 40)}</p>
          </li>
        );
      }}
      sx={{ width: "100%", backgroundColor: "var(--color-black)" }}
    />
  );
}

export default Search;
