import React, { useEffect, useState } from "react";
import axios from "axios";
import Album from "../Album/Album";
import { Tabs, Tab } from "@mui/material";
import "./Song.css";

function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const songsRes = await axios.get("https://qtify-backend-labs.crio.do/songs");
        const genresRes = await axios.get("https://qtify-backend-labs.crio.do/genres");

        setSongs(songsRes.data);
        setGenres([{ key: "all", label: "All" }, ...genresRes.data.data]);
      } catch (err) {
        console.error("Error fetching songs/genres:", err);
      }
    }
    fetchData();
  }, []);

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className="songs-section">
      <h2>Songs</h2>
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        textColor="primary"
        indicatorColor="primary"
      >
        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
            className="custom-tab"
          />
        ))}
      </Tabs>
      <div className="songs-carousel">
        <Album albums={filteredSongs} isSong />
      </div>
    </div>
  );
}

export default SongsSection;
