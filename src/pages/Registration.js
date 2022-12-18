import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap/esm";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomField } from "../components/customField/CustomField";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { postUser } from "../helpers/axiosHelpers";

const initialState = {
  name: "",
  email: "",
  pin: "",
  confirmPin: "",
};

const Registration = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "pin" || name === "confirmPin") {
      toast.error("Pin do not match");
      if (!+value) {
        return alert("only number allowed");
      }
    }

    setForm({
      ...form,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPin, ...rest } = form;

    if (confirmPin !== rest.pin) {
      toast.error("Pin do not match");
    }
    const { status, message } = await postUser(rest);
    toast[status](message);
    console.log(form);
  };
  const fields = [
    {
      label: "Full Name",
      placeholder: "Sam Smith",
      name: "name",
      type: "text",
      required: true,
      value: form.name,
    },
    {
      label: "Email",
      placeholder: "sam@gdj.com",
      name: "email",
      type: "email",
      required: true,
      value: form.email,
    },
    {
      label: "Pin",
      placeholder: "1234",
      name: "pin",
      type: "password",
      required: true,
      maxLength: "9999",
      minLength: "1000",
      value: form.pin,
    },
    {
      label: "Confirm Pin",
      placeholder: "1234",
      name: "pin",
      type: "password",
      required: true,
      maxLength: "9999",
      minLength: "1000",
      value: form.confirmPin,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5 pt-5">
        <Row className="login-page shadow-lg">
          <Col className="bg-primary d-none d-md-flex direction-column justify-content-center rounded">
            <div className="info  text-white p-2 pt-5">
              <h2>Welcome Back 🙏</h2>
              <p className="mt-5">
                Register to your account and manage your registration..
              </p>
            </div>
          </Col>
          <Col className="p-2 rounded">
            <div className="form">
              <Form onSubmit={handleOnSubmit}>
                {fields.map((item, i) => (
                  <CustomField key={i} {...item} onChange={handleOnChange} />
                ))}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <div className="text-end">
                have an account already ? <Link to="/">Login Now</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Registration;
