import { useEffect, useState } from "react";
import ViewAll from "./ViewAll";

const InputForm = (props) => {
  //First Name Validation
  const [enteredFName, setEnteredFName] = useState("");
  const [enteredFNameTouch, setEnteredFNameTouch] = useState(false);

  const enteredFNameFilled = enteredFName.trim() !== "";
  const enteredFNameNotFilled = !enteredFNameFilled && enteredFNameTouch;

  const enteredFNameValid = /^[A-Za-z\s]+$/.test(enteredFName);
  const enteredFNameInvalid = !enteredFNameValid && enteredFNameNotFilled;

  const fNameChangeHandler = (event) => {
    setEnteredFName(event.target.value);
  };

  const fNameBlurHandler = () => {
    setEnteredFNameTouch(true);
  };

  //Last Name Validation
  const [enteredLName, setEnteredLName] = useState("");
  const [enteredLNameTouch, setEnteredLNameTouch] = useState(false);

  const enteredLNameFilled = enteredLName.trim() !== "";
  const enteredLNameNotFilled = !enteredLNameFilled && enteredLNameTouch;

  const enteredLNameValid = /^[A-Za-z\s]+$/.test(enteredLName);
  const enteredLNameInvalid = !enteredLNameValid && enteredLNameNotFilled;

  const lNameChangeHandler = (event) => {
    setEnteredLName(event.target.value);
  };

  const lNameBlurHandler = () => {
    setEnteredLNameTouch(true);
  };

  //EmailValidation
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);

  const enteredEmailFilled = enteredEmail.trim() !== "";
  const enteredEmailNotFilled = !enteredEmailFilled && enteredEmailTouch;

  const enteredEmailValid = enteredEmail.includes("@");
  const enteredEmailInvalid = !enteredEmailValid && enteredEmailNotFilled;

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEnteredEmailTouch(true);
  };

  //EIDValidation
  const [enteredEid, setEnteredEid] = useState("");
  const [enteredEidTouch, setEnteredEidTouch] = useState(false);

  const enteredEidFilled = enteredEid.trim() !== "";
  const enteredEidNotFilled = !enteredEidFilled && enteredEidTouch;

  const eidChangeHandler = (event) => {
    setEnteredEid(event.target.value);
  };

  const eidBlurHandler = () => {
    setEnteredEidTouch(true);
  };

  //Birthday Validation
  const [enteredBirthday, setEnteredBirthday] = useState("");
  const [enteredBirthdayTouch, setEnteredBirthdayTouch] = useState(false);

  const enteredBirthdayFilled = enteredBirthday.trim() !== "";
  const enteredBirthdayNotFilled =
    !enteredBirthdayFilled && enteredBirthdayTouch;

  const birthdayChangeHandler = (event) => {
    setEnteredBirthday(event.target.value);
  };

  const birthdayBlurHandler = () => {
    setEnteredBirthdayTouch(true);
  };

  const [inputData, setInputData] = useState([
    {
      fName: enteredFName,
      lName: enteredLName,
      email: enteredEmail,
      eid: enteredEid,
      birthday: enteredBirthday,
    },
  ]);

  let formValid = false;
  if (
    enteredFNameFilled &&
    enteredLNameFilled &&
    enteredEmailFilled &&
    enteredEidFilled &&
    enteredBirthdayFilled
  ) {
    formValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredFNameValid || !enteredLNameValid) {
      alert("First Name and Last Name accepts letters only.");
      return;
    }

    const newInputData = {
      fName: enteredFName,
      lName: enteredLName,
      email: enteredEmail,
      eid: enteredEid,
      birthday: enteredBirthday,
    };

    const allInputData = [...inputData, newInputData];

    setInputData(allInputData);

    // console.log(allInputData);

    fetch("http://localhost:3001/inputData/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "fName": enteredFName,
        "lName": enteredLName,
        "email": enteredEmail,
        "eid": enteredEid,
        "birthday": enteredBirthday
      }),
    }).then((res) => {
      console.log("new post added", res);
      alert("Success!");
    });

    setEnteredFName("");
    setEnteredFNameTouch(false);
    setEnteredLName("");
    setEnteredLNameTouch(false);
    setEnteredEmail("");
    setEnteredEmailTouch(false);
    setEnteredEid("");
    setEnteredEidTouch(false);
    setEnteredBirthday("");
    setEnteredBirthdayTouch(false);
  };

 

  useEffect(() => {
    fetch(`http://localhost:3001/inputData`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data from the server.");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setInputData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setInputData]);

  
  return (
    <form onSubmit={formSubmitHandler} className="input-group">
      <div>
        <h3>Enter your details:</h3>
      </div>
      <div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            required
            id="fName"
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={enteredFName}
          />
          {enteredFNameInvalid && (
            <p className="error-text">First Name is required.</p>
          )}
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            required
            id="lName"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={enteredLName}
          />
          {enteredLNameInvalid && (
            <p className="error-text">Last Name is required.</p>
          )}
        </div>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          id="email"
          required
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailInvalid && (
          <p className="error-text">Email is required.</p>
        )}
      </div>
      <div>
        <label>EID</label>
        <input
          type="number"
          id="birthday"
          required
          min="1"
          step="1"
          onChange={eidChangeHandler}
          onBlur={eidBlurHandler}
          value={enteredEid}
        />
        {enteredEidNotFilled && <p className="error-text">EID is required.</p>}
      </div>
      <div>
        <label>Birthday</label>
        <input
          type="date"
          required
          onChange={birthdayChangeHandler}
          onBlur={birthdayBlurHandler}
          value={enteredBirthday}
        />
        {enteredBirthdayNotFilled && (
          <p className="error-text">Birthday is required.</p>
        )}
      </div>
      <div>
        <button
          type="submit"
          disabled={!formValid}
          onClick={() => setInputData(inputData)}
        >
          Submit
        </button>
        <div>{inputData && <ViewAll inputs={inputData} />}</div>
      </div>
    </form>
  );
};

export default InputForm;
