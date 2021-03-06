import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FloatingBack from "../../components/FloatingBack/FloatingBack";
import { API_URL } from "../../index";

const Jobs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [jobsComponents] = useState([]);

  // Get featured jobs from the server when the page loads
  useEffect(() => {
    fetch(`${API_URL}/jobs/`)
      .then((res) => res.json())
      .then((data) => {
        // Create a new job component for each piece of data
        data.forEach((job) => {
          jobsComponents.push(
            <li>
              <Link to={`/job/${job["Job ID"]}`}>
                <article className="job">
                  <h3>{job["Business Title"]}</h3>
                  <p>{job["Agency"]}</p>
                  <p>Job ID: {job["Job ID"]}</p>
                </article>
              </Link>
            </li>
          );
        });

        setIsLoading(false);
      })
      .catch((err) => {
        setHasErrored(true);
        setErrorMessage(err.toString());
      });
  }, []);

  return (
    <div className="JobView">
      <FloatingBack />
      <div id="backtop">
        <a href="#">TOP</a>
      </div>
      <h1>All Jobs</h1>
      <div>
        <ul className="JobList">
          {/* Render all the created job components after creating all the jobs */}
          {isLoading ? (
            <p>Searching for jobs...</p>
          ) : jobsComponents.length > 0 ? (
            jobsComponents
          ) : (
            `No jobs were found in the database.`
          )}
          {hasErrored && (
            <p style={{ color: "red", fontSize: "2rem" }}>
              Could not search for jobs!
              <br />
              <strong>{errorMessage}</strong>
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
