import { Component } from "react";

import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onChange } = this.props;
    const { placeholder } = this.props;
    const { className } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default SearchBox;
