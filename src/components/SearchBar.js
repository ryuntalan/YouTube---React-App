import React from "react";
import { Paper, TextField } from "@material-ui/core";

// CURRENTLY RESTRUCTURING YOUTUBE FOR BETTER LOOK
const searchBar = {
  padding: "5px 20px",
  border: "1px solid #C0C0C0"
};

const textBar = {
  width: "500px"
};

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <Paper elevation={2} style={searchBar}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            style={textBar}
            label="Search"
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
