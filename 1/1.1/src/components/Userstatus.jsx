import React from "react";

const Userstatus = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      {loggedIn && isAdmin ? <h5>Welcome Admin!</h5> : <h5>Welcome User!</h5>}
    </div>
  );
};

export default Userstatus;
