import React, { useState, useEffect } from "react";
import useCharacters from "../../hooks/useCharacters";
import dotenv from "dotenv";

const CharsTable = () => {
  const apiUrl = process.env.REACT_APP_API || 'https://rickandmortyapi.com/api/character';
  const [start, setStart] = useState(1);
  const [finish, setFinish] = useState(30);
  const [warningT, setWarningT] = useState("");
  // const [allChars, setAllChars] = useState(null);
  // const [err, setErr] = useState("");
  // const [isLoad, setIsLoad] = useState(true)
  // console.log(apiUrl)
  const { characters, error, isLoading, reCall } = useCharacters(apiUrl, start, finish);
  // setAllChars(characters);


  const handleReCall = () => {
    reCall(start, finish);
  // const  { characters, error, isLoading } = useCharacters(apiUrl, start, finish)
  // setAllChars(characters);
  }


  const handleOnChange = (e) => {
    if(e.target.name === "starting"){
      if(e.target.value < 1 || e.target.value > 825) {
        setWarningT("It has to be a number between 1 and 825")
        if(e.target.value > finish){
          setWarningT("Starting number has to be lower than ending number")
        }
      } else {
      setStart(e.target.value)
      console.log(start)
      setWarningT("")
      }
    }
    if(e.target.name === "ending"){
      if(e.target.value < 2 || e.target.value > 826) {
        setWarningT("It has to be a number between 2 and 826")
        if(e.target.value < start){
          setWarningT("Ending number has to be higher than starting number")
        }
      } else {
        setFinish(e.target.value)
        setWarningT("")
      }
    }

  };
 
  return (
    <>
      <section>
        <p>
          If you want to see more characters in the table, select a starting
          number and an ending number; <br /> to see characters among the 826
          that exist
        </p>        
          <label htmlFor="starting">Starting number</label>
          <input
            type="number"
            name="starting"
            id="starting"
            value={start}
            onChange={handleOnChange}
          />
          <label htmlFor="ending">Ending number</label>
          <input
            type="number"
            name="ending"
            id="ending"
            value={finish}
            onChange={handleOnChange}
          />
          <button onClick={handleReCall}>Refresh</button>
        <div>{warningT}</div>
      </section>
      {isLoading ? (
        <div className="table">Loading...</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Character</th>
              <th>Image</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {characters &&
              characters.map((chars) => {
                return (
                  <tr key={chars.id}>
                    <td>{chars.name}</td>
                    <td>
                      <img src={chars.image} alt={chars.name} />
                    </td>
                    <td>{chars.location}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default CharsTable;
