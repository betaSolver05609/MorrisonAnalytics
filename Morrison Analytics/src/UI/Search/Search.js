import React from "react";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <div class="container">
      <div class="center-align section">
        <div class="col s12">
          <h3 class="grey-text">Have a question for us? Feel free to ask</h3>
        </div>
      </div>
      <nav>
        <div class="nav-wrapper">
          <form>
            <div class="input-field teal grey darken-3 ">
              <input
                id="search"
                type="search"
                placeholder="Type something here"
                required
              />
              <label class="label-icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <i class="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <br />
      <div class="row container center">
        <button
          class="waves-effect waves-light btn-large grey darken-4"
          onClick="alert('Thank you. We will get back to you')"
        >
          Submit<i class="material-icons right">send</i>
        </button>
      </div>
      <div class="col s12">
        <h3 class="grey-text center">OR</h3>
        <div class="container center">
          <Link to="/defaultClick">
            <button class="waves-effect waves-light btn-large grey darken-4 pulse">
              Click here to let us get you going
              <i class="material-icons right">show_chart</i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
