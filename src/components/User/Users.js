import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import User from "./User";
import "./user.style.css";

export const userData = [
  {
    id: 1,
    name: "Arjun",
    dob: "16-11-2000",
    role: "Software Engineer",
  },
  {
    id: 2,
    name: "Mahesh",
    dob: "16-11-2000",
    role: "Web Developer",
  },
  { id: 3, name: "Saurabh", dob: "30-09-2001", role: "Frontend Developer" },
  { id: 4, name: "Gobi", dob: "08-04-2002", role: "React Developer" },
  {
    id: 5,
    name: "Mahesh",
    dob: "16-11-2000",
    role: "Backend Engineer",
  },
  {
    id: 6,
    name: "Aditi Sharma",
    dob: "03-05-1995",
    role: "UI/UX Designer",
  },
  {
    id: 7,
    name: "Rahul Verma",
    dob: "22-08-1992",
    role: "Full Stack Developer",
  },
  {
    id: 8,
    name: "Sneha Patel",
    dob: "12-04-1988",
    role: "Product Manager",
  },
  {
    id: 9,
    name: "Vikas Singh",
    dob: "19-09-1990",
    role: "Data Scientist",
  },
  {
    id: 10,
    name: "Ananya Gupta",
    dob: "08-12-1987",
    role: "Software Engineer",
  },
  {
    id: 11,
    name: "Amit Kapoor",
    dob: "25-06-1984",
    role: "DevOps Engineer",
  },
  {
    id: 12,
    name: "Neha Reddy",
    dob: "14-02-1993",
    role: "Front End Developer",
  },
  {
    id: 13,
    name: "Rajiv Kumar",
    dob: "07-10-1989",
    role: "QA Engineer",
  },
  {
    id: 14,
    name: "Gayathri",
    dob: "23-05-2003",
    role: "Angular Developer",
  },
  {
    id: 15,
    name: "Priyanka",
    dob: "11-12-2023",
    role: "Business Analyst",
  },
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const handleSearch = (currentSearch) => {
    // setSearchTerm(e.target.value);
    if (currentSearch === "") {
      setFilteredUsers(userData);
    } else {
      setFilteredUsers(
        userData.filter((user) =>
          user.name.toLowerCase().includes(currentSearch.toLowerCase())
        )
      );
    }
  };

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="user-list">
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search with name"
        />
        <button onClick={() => handleSearch(searchTerm)}>
          <FaSearch />
        </button>
      </div>
      <div className="user-container">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((item) => (
            <User
              key={item.id}
              id={item.id}
              name={item.name}
              dob={item.dob}
              role={item.role}
            />
          ))
        ) : (
          <p>No User Found!!</p>
        )}
      </div>
    </div>
  );
};

export default Users;
