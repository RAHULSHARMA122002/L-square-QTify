import React from "react";

import { Chip } from "@mui/material";
import "./Card.css"; 

function Card({ image, followers, title }) {
  return (
    <>
     <div className="card">
      <img src={image} alt={title} className="image" />
      <div className="details">
        <Chip label={`${followers} Follows`} className="chip" />
      </div>
       <p className="title">{title}</p>
    </div>
   
    </>
    
  );
}

export default Card;
