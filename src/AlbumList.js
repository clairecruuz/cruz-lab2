import React from "react";
import Album from "./Album";
import albumData from "./albumData";

function AlbumList() {
  const albumsInRows = [];
  const albumsPerRow = 3;

  for (let i = 0; i < albumData.length; i += albumsPerRow) {
    const rowAlbums = albumData.slice(i, i + albumsPerRow);
    albumsInRows.push(rowAlbums);
  }

  return (
    <div className="albums">
      {albumsInRows.map((row, index) => (
        <div key={index} className="album-container">
          {row.map((album) => (
            <Album albumObj={album} key={album.title} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AlbumList;
