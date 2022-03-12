import { useState, useEffect } from "react";
import React from "react";

function Api() {
  const [api, setApi] = useState();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setApi(data);
    } catch (error) {
      console.log("Error");
    }
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">USERNAME</th>
            <th scope="col">WEBSITE</th>
          </tr>
        </thead>
        <tbody>
          {api.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Api;
