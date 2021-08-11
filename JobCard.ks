import React, { useState, useEffect } from "react";
import "./JobCard.css";
import Row from "react-bootstrap/Row";
import MyHome from "./image/myhome.svg";

function JobCard() {
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
    <div>
      {jobType.map((job) => {
        <button>{job}</button>;
      })}
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
    </div>
  );
}

export default JobCard;
