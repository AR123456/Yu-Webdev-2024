// Dependencies
import React, { Component } from "react";
import SearchItem from "../SearchItem";

// Search Results component
class SearchResults extends Component {
  state = {
    results: this.props.results
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      results: newProps.results
    });
  }

  render() {
    if (this.state.results.length === 0) {
      return (
        <li className="list-group-item">
          <h4 className="text-center">
            Enter a topic and search dates to see articles.
          </h4>
        </li>
      );
    } else {
      return (
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Article List</h4>
            <br />
            <p>
              <strong>
                <ins>Instructions:</ins>
              </strong>
            </p>
            <p>Click Article to view source.</p>
            <p>
              Click <i className="fa fa-plus-square" aria-hidden="true" /> to
              save.
            </p>
          </li>

          <SearchItem
            results={this.state.results.docs ? this.state.results.docs : []}
            handleSaveArticle={this.props.handleSaveArticle}
          />
        </ul>
      );
    }
  }
}

export default SearchResults;
