import React from "react";

const ViewAll = (props) => {

  const inputs = props.inputs;

  console.log(inputs)
 
  return (<div>
    <h3>View All Entries here:</h3>
    {inputs && Object.keys(inputs).map((inputKey) => ( 
      <div key={inputKey}>
        <p>First Name: {inputs[inputKey].fName}</p>
        <p>Last Name: {inputs[inputKey].lName}</p>
        <p>Email: {inputs[inputKey].email}</p>
        <p>EID: {inputs[inputKey].eid}</p>
        <p>Birthday: {inputs[inputKey].birthday}</p>
        <p>--------</p>
      </div>
    ))}
  </div>);
}

export default ViewAll;

/* import React from "react";

const ViewAll = (props) => {

  const inputs = props.inputs;

  

  return (<div>
    {Object.keys(inputs).map((input) => (
      <div key={input.id}>
        <p>First Name: {input.fName}</p>
        <p>Last Name: {input.lName}</p>
        <p>Email: {input.email}</p>
        <p>EID: {input.eid}</p>
        <p>Birthday: {input.birthday}</p>
      </div>
    ))}
  </div>);
};

export default ViewAll; */