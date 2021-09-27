// import { useState } from "react";

// const useInput = (validateInput) => {
  
//   const [enteredInput, setEnteredInput] = useState("");
//   const [inputTouch, setInputTouch] = useState(false);

//   const inputFilled = validateInput(enteredInput);
//   const inputNotFilled = !inputFilled && inputTouch;

//   const inputChangeHandler = (event) => {
//     setEnteredInput(event.target.value);
//   };

//   const inputBlurHandler = () => {
//     setInputTouch(true);
//   };

//   const resetForm = () => {
//     setEnteredInput("");
//     setInputTouch(false);
//   };

//   return {
//     input: enteredInput,
//     isFilled: inputFilled,
//     inputNotFilled,
//     inputChangeHandler,
//     inputBlurHandler,
//     resetForm,
//   };
// };

// export default useInput;

/* import { useEffect, useState } from "react";


const useInputFetch = (url) => {

    const [data, setData] = useState("");

    useEffect(() => {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            setData(data);
          });
      }, [url]);

      return {
          data
      }
}

export default useInputFetch; */