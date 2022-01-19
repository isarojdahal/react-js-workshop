import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id, author } = useParams();

  return (
    <div>
      Book Details. <br /> Book id : {id} <br /> Book Author : {author}
    </div>
  );
};

export default BookDetails;
