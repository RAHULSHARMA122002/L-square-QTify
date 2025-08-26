import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Carousel from "../Album/Album";
import "./Section.css";

function Section({ title, apiEndpoint, showCollapse = true }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await axios.get(apiEndpoint);
        setAlbums(response.data.data || response.data);
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
        {showCollapse && (
          <button
  className="collapseBtn"
  onClick={() => setIsCollapsed(!isCollapsed)}
>
  {isCollapsed ? "Collapse" : "Show All"}
</button>
        )}
      </div>
{isCollapsed ? (
  <Carousel albums={albums} />
) : (
  <div className="grid">
    {albums.map((album) => (
      <Card
        key={album._id || album.id}
        image={album.image}
        followers={album.follows}
        title={album.title}
      />
    ))}
  </div>
)}
    </div>
  );
}

export default Section;
