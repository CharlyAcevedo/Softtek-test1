import React from "react";


const CharsTable = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Character</th>
            <th>Image</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rick</td>
            <td>
              <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
            </td>
            <td>Earth (Replacement Dimension)</td>
          </tr>
        </tbody>
      </table>
    );
  };

  export default CharsTable