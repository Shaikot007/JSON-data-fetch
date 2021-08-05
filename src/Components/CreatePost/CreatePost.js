import React, { useState } from "react";
import "./CreatePost.css";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import config from "../../config";

function CreatePost() {

  const url = `${config.api_url}`;

  const [values, setValues] = useState({
    userId: "",
    id: "",
    title: "",
    body: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues(
      {
        ...values,
        [event.target.name]: event.target.value
      }
    );
  };

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    if (!values.userId) {
      formIsValid = false;
      errors.userId = "User id required";
    }
    else if (!/[0-9]/.test(values.userId)) {
      formIsValid = false;
      errors.userId = "Enter only numbers";
    };

    if (!values.id) {
      formIsValid = false;
      errors.id = "Id required";
    }
    else if (!/[0-9]/.test(values.id)) {
      formIsValid = false;
      errors.id = "Enter only numbers";
    };

    if (!values.title) {
      formIsValid = false;
      errors.title = "Title required";
    }
    else if (!/^[a-zA-Z ]+$/.test(values.title)) {
      formIsValid = false;
      errors.title = "Enter only letters";
    };

    if (!values.body) {
      formIsValid = false;
      errors.body = "Body required";
    }
    else if (!/^[a-zA-Z ]+$/.test(values.body)) {
      formIsValid = false;
      errors.body = "Enter only letters";
    };

    setErrors(errors);

    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      //Submit to API
      axios.post(url, values)
        .then(response => response.status === 201 ? alert("Create a post successfully.") : null,
          setValues({
            userId: "",
            id: "",
            title: "",
            body: ""
          }))
        .catch(error => error.response.status !== 201 ? alert(error.response.data.message) : null);
    } else {
      alert("Create a post failed.")
    }
  };

  return (
    <div className="CreatePost">
      <h3>Create a post</h3>
      <Form>
        <FormGroup>
          <Label for="userId">User id</Label>
          <Input type="text" name="userId" id="userId" onChange={handleChange} value={values.userId} placeholder="Enter your user id" />
          <p>{errors.userId}</p>
        </FormGroup>
        <FormGroup>
          <Label for="id">Id</Label>
          <Input type="text" name="id" id="id" onChange={handleChange} value={values.id} placeholder="Enter your id" />
          <p>{errors.id}</p>
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" onChange={handleChange} value={values.title} placeholder="Enter your title" />
          <p>{errors.title}</p>
        </FormGroup>
        <FormGroup>
          <Label for="body">Body</Label>
          <Input type="text" name="body" id="body" onChange={handleChange} value={values.body} placeholder="Enter your body" />
          <p>{errors.body}</p>
        </FormGroup>
        <Link to="/">
          <Button color="success" onClick={handleSubmit}>Submit</Button>
        </Link>
      </Form>
    </div>
  );
};

export default CreatePost;
