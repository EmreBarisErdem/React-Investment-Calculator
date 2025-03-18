import Header from './components/Header.jsx'
import UserInputs from './components/UserInputs.jsx'
import Results from './components/Results.jsx'
import { useState } from "react"

function App() {


  //I wanted to update this state based on the previous state values because when this handle change function executes, only one of these four properties will be updated. To be able to keep other properties values, updated state must depend on the old state so that we still have the old data for the other inputs that were not changed.

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevData => {
      //This callback receives the previous state (prevData) and returns a new state object. The new state object is created by spreading the previous state (...prevData) and then updating the property specified by inputIdentifier with the new value.
      return {
        ...prevData,
        [inputIdentifier]: +newValue //The +newValue ensures that the value is converted to a number, as user inputs are often received as strings.

      };
    });
  }

  const inputIsValid = userInput.duration >= 1; // to be able to prevent error resulting from negative userInputs

  return (
    <>
      <Header />

      <UserInputs onInputChange={handleChange} userInput={userInput} />

      {!inputIsValid && <p className='center'>Please enter a duration greater than zero</p>}

      {inputIsValid && <Results input={userInput} />}

    </>

  )
}

export default App
