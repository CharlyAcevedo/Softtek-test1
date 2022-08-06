import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import useCharacters from "../../hooks/useCharacters";
import RowTable from "./ChartRow";
import PaginationApp from "../paginated/Paginated";

const CharsTable = () => {
  const apiUrl = "https://rickandmortyapi.com/api/character";

  const [currentPage, setCurrentPage] = useState(1);
  const [charsXPage, setcharsXPage] = useState(5);
  const [start, setStart] = useState(1);
  const [finish, setFinish] = useState(100);
  const [warningT, setWarningT] = useState("");
  const { characters, error, isLoading, reCall } = useCharacters(
    apiUrl,
    start,
    finish
  );

  const limit = currentPage * charsXPage;
  const offset = limit - charsXPage;

  const charsToShow = characters?.slice(offset, limit);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(characters?.length / charsXPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevState) => currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => currentPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1)
  },[characters])

  const handleReCall = (e) => {
    e.preventDefault();
    reCall(start, finish);
  };

  const handleOnChange = (e) => {
    if (e.target.name === "starting") {
      if (e.target.value < 1 || e.target.value > 825) {
        setWarningT("It has to be a number between 1 and 825");
        if (e.target.value > finish) {
          setWarningT("Starting number has to be lower than ending number");
        }
      } else {
        setStart((prevState) => e.target.value);
        console.log(start);
        setWarningT("");
      }
    }
    if (e.target.name === "ending") {
      if (e.target.value < 2 || e.target.value > 826) {
        setWarningT("It has to be a number between 2 and 826");
        if (e.target.value < start) {
          setWarningT("Ending number has to be higher than starting number");
        }
      } else {
        setFinish((prevState) => e.target.value);
        setWarningT("");
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
        <form>
          <div className="form-row rowPersonal">
            <div className="form-group col-md-1">
              <label htmlFor="starting">Starting</label>
              <input
                className="form-control"
                type="number"
                name="starting"
                id="starting"
                value={start}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group col-md-1">
              <label htmlFor="ending">Ending</label>
              <input
                className="form-control"
                type="number"
                name="ending"
                id="ending"
                value={finish}
                onChange={handleOnChange}
              />
            </div>
            <div className="form-group col-md-2">
              <button className="btn btn-primary" onClick={handleReCall}>
                Refresh
              </button>
            </div>
          </div>
          <div>{warningT}</div>
        </form>
      </section>
      <PaginationApp
        allCharacters={characters}
        charsXPage={charsXPage}
        currentPage={currentPage}
        pagination={pagination}
        nextPage={nextPage}
        prevPage={prevPage}
        totalPages={totalPages}
      />
      {isLoading ? (
        <div className="table">Loading...</div>
      ) : (
        <Table responsive="md" striped bordered hover>
          <thead>
            <tr>
              <th>Character</th>
              <th>Image</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {charsToShow &&
              charsToShow.map((chars) => {
                return (
                  <tr key={chars.id}>
                    <RowTable
                      name={chars.name}
                      image={chars.image}
                      location={chars.location}
                    />
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default CharsTable;
