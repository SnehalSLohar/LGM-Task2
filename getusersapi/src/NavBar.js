import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./components/useEffect/UseEffectAPI";
import UseEffectAPI from "./components/useEffect/UseEffectAPI";
const NavBar = () => {
  const [isLoading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div>
        <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand className="justify-content-end" href="#">
              Lets Grow More
            </Navbar.Brand>
            {isLoading ? (
              ""
            ) : (
              <Button size="lg" onClick={fetchData} variant="success">
                Get Users
              </Button>
            )}
          </Container>
        </Navbar>
      </div>
      <div>
        {isLoading ? (
          // <div
          //   style={{
          //     left: "50%",
          //     top: "50%",
          //   }}
          // >
          //   <h4>Fetching Data...</h4>
          //   <img
          //     style={{
          //       marginTop: "300px",
          //       marginLeft: "700px",
          //       width: "200px",
          //       height: "200px",
          //     }}
          //     src="loader.gif"
          //   />
          // </div>
          <div>
            <UseEffectAPI />
          </div>
        ) : (
          ""
        )}
        {/* {isLoading ? "" : <UseEffectAPI />} */}
      </div>
    </>
  );
};

export default NavBar;
