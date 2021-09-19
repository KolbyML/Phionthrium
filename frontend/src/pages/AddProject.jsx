import React from "react";
import { useHistory } from "react-router";
import { HashLink } from "react-router-hash-link";

const AddProject = () => {
  let history = useHistory();

  // Simple POST request with a JSON body using fetch
  // const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //         "user": "2345",
  //         "name": "Joe",
  //         "description": "Joe mama",
  //     })
  // };
  // fetch('https://aesthetic-nova-304123.uw.r.appspot.com/api/entry/add/', requestOptions)
  //     .then(response => response.json()).catch(err=>console.log(err))
  //     .then(data => console.log(data));

  const submit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: "2345",
        name: document.getElementById("inputTitleText").value,
        description: document.getElementById("inputDescriptionText").value,
      }),
    };
    fetch('https://aesthetic-nova-304123.uw.r.appspot.com/api/entry/add/', requestOptions)
        .then(response => response.json()).catch(err=>console.log(err))
        .then(data => console.log(data));
  };

  return (
    <div className="background">
      <div
        style={{ display: "flex", flexDirection: "row", padding: "30px" }}
        className="transition"
        title="go back"
      >
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => {
            history.push("/");
          }}
          className="backButton"
        >
          <img src={"arrow.svg"} alt="back button" />
        </div>
        <div
          style={{ display: "flex", alignItems: "center", color: "white" }}
          onClick={() => {
            history.push("/");
          }}
          className="backButton"
        >
          <h2 style={{ fontWeight: "400" }}>Back</h2>
        </div>
      </div>
      <div className="addProjectContainer">
        <p className="newTextBig">Project Name</p>
        <input
          id = "inputTitleText"
          type="text"
          name="name"
          style={{
            height: "5%",
            width: "80%",
          }}
        />
        <p className="newTextBig">Description</p>
        <input
          id = "inputDescriptionText"
          type="text"
          name="description"
          style={{
            height: "50%",
            width: "80%",
          }}
        ></input>
        <HashLink title="browse" to="/browse" className="submitHashLink">
          <button type="button" className="submitButton" onClick={submit}>
            Submit
          </button>
        </HashLink>
      </div>
    </div>
  );
};

export default AddProject;
