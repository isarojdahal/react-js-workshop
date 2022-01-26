import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, []);
  return (
    <div>
      Page not Found.. You will be redirected in Homepage after 3 seconds...
    </div>
  );
};

export default PageNotFound;
