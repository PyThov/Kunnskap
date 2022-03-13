import React from "react";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import "../styling/App.css";
import { api } from "../common/utils";
import axios from "axios";

export default function Test() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<string>("");


  axios.post(api("login")).then((response) => {console.log(response.data)})

  // useEffect(() => {
  //   fetch(api("login"))
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result);
  //         setIsLoaded(true);
  //         setItems(result?.data);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  return (
    <div className="App-header">
      <div className="response">
        {!isLoaded ? <div>Loading...</div> : <div>{items || "undefined"}</div>}
      </div>
      <Button color="secondary" href="/" variant="outlined">
        Back
      </Button>
    </div>
  );
}
