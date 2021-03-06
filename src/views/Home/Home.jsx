import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import queryString from "query-string";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="Home">
      <h1>NYC Jobs Finder</h1>
      <div>
        <h2>Search Jobs</h2>
        <div>
          <form
            className="Home-search"
            onSubmit={() => {
              // Parse search query into query string for url
              const qsValue = queryString.stringify({
                q: searchQuery,
              });

              // Send search query to job search page
              history.push(`/jobs/search?${qsValue}`);
            }}
          >
            <input
              type="text"
              name="search-jobs"
              id="search-jobs"
              placeholder="Type to search..."
              onChange={(event) => setSearchQuery(event.target.value)}
              required
            />
            <button type="submit" className="button">
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="Home-buttons">
        <div className="Home-buttons-top">
          <Link to="/jobs" className="button Home-button">
            Browse Jobs
          </Link>

          <Link
            to="/jobs/post"
            className="button Home-button"
            style={{ marginLeft: "1.5rem" }}
          >
            Post a Job
          </Link>
        </div>

        <Link to="/jobs/saved" className="button Home-button">
          Saved Jobs
        </Link>
      </div>
    </div>
  );
};

export default Home;
