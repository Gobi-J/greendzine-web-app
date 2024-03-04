import React from "react";

const User = ({ id = -1, name = '🙂', dob = '👻', role = '🤐' }) => {
  return (
    <div className="user">
        <span className="indi">{id}</span>
      <p>
        EMP ID : <span>{id}</span>
      </p>
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        DOB: <span className="dob">{dob}</span>
      </p>
      <p>
        Role: <span className="role">{role}</span>
      </p>
    </div>
  );
};

export default User;
