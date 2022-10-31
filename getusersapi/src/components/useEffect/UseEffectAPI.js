import React, { useState, useEffect } from "react";
import UserData from "C:/Users/Snehal/Downloads/LGM-Task2/LGM-Task2/getusersapi/src/UserData.json";
function UseEffectAPI() {
  // const [users, setUsers] = useState([]);

  // const getUsers = async () => {
  //   const response = await fetch("https://reqres.in/api/users?page=1");
  //   setUsers(await response.json());
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <>
      <h2>List of Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {UserData.map((users) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div
                  style={{ backgroundColor: "#34495e" }}
                  className="card p-2"
                >
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img src={users.avatar} class="rounded" width="155" />
                    </div>
                    <div className="ml-3 w-100">
                      {/* <strong className="textLeft">{Web Developer}</strong> */}
                      <div
                        style={{ width: "300px" }}
                        className="p-2 mt-2 bg-warning justify-content-center rounded text-black stats"
                      >
                        <div className="d-flex flex-column">
                          <strong className="articles">
                            {users.first_name}{" "}
                          </strong>
                        </div>{" "}
                        <div className="d-flex flex-column">
                          <strong className="articles">
                            {" "}
                            {users.last_name}
                          </strong>
                        </div>
                      </div>
                      <h4 className="mb-0 mt-0 textLeft text-white">
                        {users.email}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UseEffectAPI;
