import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./Content.css";
import MyHome from "./image/myhome.svg";
import Row from "react-bootstrap/Row";

function Content() {
  const [jobType, setJobtype] = useState([]);

  const handleJob = (e) => {
    if (jobType.includes(e.target.value)) {
      return null;
    } else {
      setJobtype((job) => [...job, e.target.value]);
    }
  };
  function handleRemove(e) {
    setJobtype(jobType.filter((i) => i !== e.target.value));
  }

  console.log(jobType);
  return (
    <Container>
      {jobType.map((job) => (
        <span value={job} className="category__button">
          {job}{" "}
          <button value={job} onClick={handleRemove}>
            {" "}
            X{" "}
          </button>
        </span>
      ))}

      <div className="Job--Card">
        <Row className="h-100">
          <div className="col-md-1">
            <img src={MyHome} className="job__logo" alt="" />
          </div>
          <div className="col-md-3">
            <h5 className="company__name">Photosnap</h5>
            <strong>Senior Front End Developer</strong>
            <div className="job__details">
              <li>1 day ago</li>
              <li>full-time</li>
              <li>usa only</li>
            </div>
          </div>
          <div className="col job__category">
            <button
              className="category__button"
              value="CSS"
              onClick={handleJob}
            >
              CSS
            </button>
            <button
              className="category__button"
              value="Javascript"
              onClick={handleJob}
            >
              Javascript
            </button>
            <button
              className="category__button"
              value="Python"
              onClick={handleJob}
            >
              Python
            </button>
          </div>
        </Row>
      </div>

      <div className="Job--Card">
        <Row className="h-100">
          <div className="col-md-1">
            <img src={MyHome} className="job__logo" alt="" />
          </div>
          <div className="col-md-3">
            <h5 className="company__name">Photosnap</h5>
            <strong>Senior Front End Developer</strong>
            <div className="job__details">
              <li>1 day ago</li>
              <li>full-time</li>
              <li>usa only</li>
            </div>
          </div>
          <div className="col job__category">
            <button
              className="category__button"
              value="Front End"
              onClick={handleJob}
            >
              Front End
            </button>
            <button
              className="category__button"
              value="Back End"
              onClick={handleJob}
            >
              Back End
            </button>
          </div>
        </Row>
      </div>

      <div className="Job--Card">
        <Row className="h-100">
          <div className="col-md-1">
            <img src={MyHome} className="job__logo" alt="" />
          </div>
          <div className="col-md-3">
            <h5 className="company__name">Photosnap</h5>
            <strong>Senior Front End Developer</strong>
            <div className="job__details">
              <li>1 day ago</li>
              <li>full-time</li>
              <li>usa only</li>
            </div>
          </div>
          <div className="col job__category">
            <button
              className="category__button"
              value="Senior"
              onClick={handleJob}
            >
              Senior
            </button>
            <button
              className="category__button"
              value="Junior"
              onClick={handleJob}
            >
              Junior
            </button>
            <button
              className="category__button"
              value="javascript"
              onClick={handleJob}
            >
              Javascript
            </button>
          </div>
        </Row>
      </div>

      <div className="Job--Card">
        <Row className="h-100">
          <div className="col-md-1">
            <img src={MyHome} className="job__logo" alt="" />
          </div>
          <div className="col-md-3">
            <h5 className="company__name">Photosnap</h5>
            <strong>Senior Front End Developer</strong>
            <div className="job__details">
              <li>1 day ago</li>
              <li>full-time</li>
              <li>usa only</li>
            </div>
          </div>
          <div className="col job__category">
            <button
              className="category__button"
              value="Full Stack"
              onClick={handleJob}
            >
              Full Stack
            </button>
            <button
              className="category__button"
              value="CSS"
              onClick={handleJob}
            >
              CSS
            </button>
            <button
              className="category__button"
              value="Back End"
              onClick={handleJob}
            >
              Back End
            </button>
          </div>
        </Row>
      </div>
    </Container>
  );
}

export default Content;
