import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({props}) {

  // console.log(props)

  const [cardSide, setCardSide] = useState(true)

  function handleClick() {
    setCardSide(!cardSide)
  }
  

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={cardSide ? props.sprites.front : props.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
