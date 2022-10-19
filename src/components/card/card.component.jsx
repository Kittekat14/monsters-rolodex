import { Component } from "react";

import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, email, company } = this.props.monster;

    return (
      <div className='card-container' key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <h4>{company.name}</h4>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
