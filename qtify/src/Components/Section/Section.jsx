import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./Section.css";

function Section({ title, apiEndpoint }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await axios.get(apiEndpoint);
        setAlbums(response.data);
      } catch (err) {
        console.error("Error fetching albums:", err);
      }
    }
    fetchAlbums();
  }, [apiEndpoint]);

  return (
   <div className="section">
  <div className="header">
    <h2>{title}</h2>
    <button className="collapseBtn">Collapse</button>
  </div>
  <div className="grid">
    {albums.map((album) => (
      <Card
        key={album.id}
        image={album.image}
        followers={album.follows}
        title={album.title}
      />
    ))}
  </div>
</div>

  );
}

export default Section;
