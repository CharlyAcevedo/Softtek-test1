import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

export default function PaginationApp({
  allCharacters,
  charsXPage,
  pagination,
  nextPage,
  prevPage,
  currentPage,
  totalPages
}) {

  const defaultButtonsPerPage = 6;
  const halfPages = Math.ceil(defaultButtonsPerPage / 2);
  const maxButtons = (() => {
    if (totalPages <= defaultButtonsPerPage) {
      return totalPages;
    } else if (
      currentPage + halfPages <= totalPages &&
      currentPage >= halfPages
    ) {
      return currentPage + halfPages;
    } else if (currentPage < halfPages) {
      return defaultButtonsPerPage;
    } else {
      return totalPages;
    }
  })();

  const initButton = (() => {
    if (totalPages <= defaultButtonsPerPage) {
      return 1;
    } else if (
      currentPage + halfPages <= totalPages &&
      currentPage >= halfPages
    ) {
      return currentPage - halfPages + 1;
    } else if (currentPage < halfPages) {
      return 1;
    } else {
      return totalPages - defaultButtonsPerPage + 1;
    }
  })();
  
  const pages = [];
  for (let i = initButton; i <= maxButtons; i++) {
    pages.push(i);
  }

  return (
    <div className="sticky-top">
    <Container className="pagCont position-relative">
      <Pagination size="sm" className="position-absolute top-50 start-50 translate-middle">
        <Pagination.First onClick={() => pagination(1)}/>
        <Pagination.Prev onClick={() => prevPage()}/>
        {pages ? (
          pages.map((page) => (
          <Pagination.Item key={page} active={currentPage === page} onClick={() => pagination(page)}>{page}</Pagination.Item>
          ))
          ) : (
            <Pagination.Item>{1}</Pagination.Item>
          )}
        <Pagination.Next onClick={() => nextPage()}/>
        <Pagination.Last onClick={() => pagination(totalPages)}/>
        <Alert className="totalPages py-0" variant={"primary"}>Total Pages {totalPages}</Alert>
      </Pagination>
    </Container>
    </div>
  );
}