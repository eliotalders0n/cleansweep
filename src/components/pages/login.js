import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import firebase from "./../../firebase";
import {
  Card,
  ListGroup,
  Row,
  Container,
  Col,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Successfully logged in!");
      setLoggedin(true);
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  if(loggedin){
    return <Navigate to="/admin" />; // navigate to dashboard
  }

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center my-2">
        
        <Col className="my-2">
          <Card>
            <Card.Img
              variant="top"
              src="images/logo.jpg"
              alt="Image by storyset on Freepik"
            />
            <Card.Body>
              <Card.Title>Sign in</Card.Title>
              <Card.Text>
                Pick up were you left off, update and maintain.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <form onSubmit={handleLogin}>
                <ListGroup.Item>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      Email
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="email"
                      aria-describedby="inputGroup-sizing-sm"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      Password
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="password"
                      aria-describedby="inputGroup-sizing-sm"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                  <Button type="submit" style={{ width: "100%" }}>
                    Login
                  </Button>
                </ListGroup.Item>
              </form>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
