import { useEffect, useState } from "react";
import "./styles.css";

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

export default function App() {
  return (
    <div className="App">
      <h1>Hello Softtek</h1>
      <CharsTable />
    </div>
  );
}

// You can add the libraries you need in the left sidebar under "Dependencies" section

// * You should be able to integrate the RickAndMorty API endpoint that retrieve multiple
//    characters at once (https://rickandmortyapi.com/documentation/#get-multiple-characters)
// * You should be able to render the characters info in the table dinamically
//    The required properties to display are character's name, image and location name
// * You should be able to center the table

// BONUS POINTS:
// Use a custom hook called "useCharacters" to ONLY fetch and return data mapped
// Do not pass unnecessary (or unused) data to the CharsTable component as props
// Extract the table data rows to their own component
// Setup folder structure separating components, hooks and styles

// Once you finish save all your files and send back the link to your codesandbox by email
// (Note that the url of your codesandbox should be different from the one that i sent to you)
