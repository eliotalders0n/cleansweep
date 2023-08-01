import { React, useState, useEffect } from "react";
import Head from "./template/head";
import {
  Container,
  Card,
  Row,
  Badge,
  Form,
  ButtonGroup,
  Button,
  ListGroup,
  Modal,
  Col,
} from "react-bootstrap";
import firebase from "./../firebase";

function Feed(props) {
  // Post to merge

  const [user_id, setUserID] = useState([]);
  const [user_details, setUserDetails] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .onSnapshot((doc) => {
        setUserID(firebase.auth().currentUser.uid);
        setUserDetails(doc.data());
      });
  }, []);

  return (
    <Container fluid style={{ marginBottom: "10vh" }}>
      <Head />
      <Container>
        <Row style={{ backgroundColor: "lightBlue", borderRadius: "20px" }}>
          <Col style={{ margin: "15% 2%" }}>
            <h1 className="display-4">
              Are you tired of cleaning? <br /> then its time to call us
            </h1>
            <p className="lead">
              <span style={{ color: "teal", fontWeight: "600" }}>
                Clean Sweep
              </span>{" "}
              helps you find the best help for your cleaning needs.
            </p>
            <Button variant="dark">Contact Us!</Button>
          </Col>
          <Col>
            <img
              src="images/2202_w037_n003_175a_p1_175.jpg"
              style={{ width: "50vh", margin: "15% 5%", borderRadius: "50px" }}
            />
          </Col>
        </Row>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonGroup
            aria-label="Switch"
            style={{
              width: "60vh",
              height: "12vh",
              margin: "-10% auto",
              boxShadow: "1px 2px 2px 1px rgba(0,0,0,0.1)",
            }}
          >
            <Button variant="light">
              <span style={{ fontWeight: "600" }}>Location</span> <br />{" "}
              <span style={{ fontSize: "15px" }} className="lead text-muted">
                Where do you live
              </span>
            </Button>
            <Button variant="light">
              <span style={{ fontWeight: "600" }}>Property Type</span> <br />{" "}
              <span style={{ fontSize: "15px" }} className="lead text-muted">
                Choose your property type
              </span>
            </Button>
            <Button variant="light">
              <span style={{ fontWeight: "600" }}>Price</span> <br />{" "}
              <span style={{ fontSize: "15px" }} className="lead text-muted">
                How much do I pay
              </span>
            </Button>
          </ButtonGroup>
        </div>
      </Container>

      <Container className="my-5">
        <Row>
          <Col>
            <h3  className="display-6" style={{ color: "lightcoral", width:"50vh" }}>
              What we do
            </h3>
            <h2>Our jobs to clean your home as well as you do.</h2>
          </Col>
          <Col>
            <p className="lead my-5">
              {" "}
              If you have a very busy job and just don't have the time to clean
              your home, we are here to help you 24/7 all year round. Schedule a
              booking now and have some peace of mind
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Feed;
