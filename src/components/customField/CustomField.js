import React, { forwardRef } from "react";
import { Form } from "react-bootstrap";

export const CustomField = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} ref={forwardRef} />
      </Form.Group>
    </div>
  );
};
