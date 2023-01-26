import React, { useState } from "react";
import './form.css'

function MyForm(props) {
  const [enteredName, setEnteredName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [userInput, setUserInput] = useState({
    enteredName: '',
    enteredAge: '',
  });

  const nameChangeHandler = (event) => {
    console.log(event)
    setEnteredName(event.target.value);
    setUserInput({
      ...userInput,
      EnteredName: event.target.value,
    });
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    setUserInput({
      ...userInput,
      EnteredAge: event.target.value,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();
      const userData = {
        name: enteredName,
        age: enteredAge,
      };
      props.onSaveUserData(userData);
      setEnteredName('');
      setEnteredAge('');
    };



  return(
    <div>
      <form onSubmit={submitHandler} className="form-container">
        <div>
          <label htmlFor="name">Nom</label>
          <input autoComplete="off" type="text" name="name" value={enteredName} onChange={nameChangeHandler}/>
        </div>
        <div>
          <label htmlFor="age">Âge</label>
          <input type="number" name="age" value={enteredAge} onChange={ageChangeHandler}/>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  )
}
export default MyForm;