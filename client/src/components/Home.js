import React, { useEffect, useState } from "react";
const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="home-page">
      <div className="home-page-content text-center">
        <p className="home-page-info">Welcome</p>
        <h1>{userName}</h1>
        <h2>{show ? "Happy to see you again" : "We are MERN Developer"}</h2>
      </div>
    </div>
  );
};

export default Home;
