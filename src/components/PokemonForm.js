import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm() {

const [newPokemon, setNewPokemon] = useState({
  name:"",
  hp: "",
  sprites: {
    front: "",
    back: ""
  },
})

function handleSubmit(e) {
  e.preventDefault()
  setNewPokemon(e.target.name)
}

console.log(newPokemon)



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={newPokemon.name} />
            
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
