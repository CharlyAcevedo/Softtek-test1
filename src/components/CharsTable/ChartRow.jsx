import React from "react";
import noImage from '../../assets/noimage.jpg'

export default function RowTable ({name, image, location}) {
    return (
      <>
        <td>{name}</td>
        <td>
          <img src={image ? image : noImage} alt={name} className="img-fluid"/>
        </td>
        <td>{location}</td>
      </>
    );
};