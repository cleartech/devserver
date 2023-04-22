import React, { Fragment, useState, useEffect } from "react";

const Dashboard = ({ setAuth }) => {
  const [email, setEmail] = useState("");

  async function getEmail() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      setEmail(parseRes.user_email);
    } catch (error) {
      console.error(error.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };
  useEffect(() => {
    getEmail();
  }, []);

  return (
    <Fragment>
      <h1>Dashboard</h1>
      <br />
      <h3>{email}</h3>
      <button className="btn btn-primary" onClick={(e) => logout(e)}>
        Logout
      </button>
    </Fragment>
  );
};

export default Dashboard;
