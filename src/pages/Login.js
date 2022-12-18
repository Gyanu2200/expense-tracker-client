import React, { useRef } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap/esm";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CustomField } from "../components/customField/CustomField";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { loginUser } from "../helpers/axiosHelpers";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const pinRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const loginObj = {
      email: emailRef.current.value,
      pin: pinRef.current.value,
    };

    const { status, message, result } = await loginUser(loginObj);
    toast[status](message);
    console.log(loginObj);

    if (status === "success" && result?._id) {
      sessionStorage.setItem("user", JSON.stringify(result));
      navigate("/dashboard");
    }
  };
  const fields = [
    {
      label: "Email",
      placeholder: "sam@gdj.com",
      name: "email",
      type: "email",
      required: true,
      forwaredref: emailRef,
    },
    {
      label: "Pin",
      name: "pin",
      type: "password",
      required: true,
      forwaredref: pinRef,
    },
  ];
  return (
    <MainLayout>
      <Container className="mt-5 pt-5">
        <Row className="login-page shadow-lg">
          <Col className="bg-primary d-none d-md-flex direction-column justify-content-center rounded">
            <div className="info  text-white p-2 pt-5">
              <h2>Welcome to our system</h2>
              <p className="mt-5">
                Manage your financial by tracking daily transaction
              </p>
            </div>
          </Col>
          <Col className="p-2 rounded">
            <div className="form">
              <h2 className="text-center">
                <i class="fa-light fa-pen-circle"></i>Login
              </h2>
              <Form onSubmit={handleOnSubmit}>
                {fields.map((item, i) => (
                  <CustomField key={i} {...item} />
                ))}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <div className="text-end">
                New Here? <Link to="/register">Register now</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
