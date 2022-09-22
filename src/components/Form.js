import axios from "axios";
import React from "react";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import './Form.css';

const baseURL = "https://frontend-take-home.fetchrewards.com/form";             //endpoint for GET and POST requests

export default function Form() {
  const [form, setForm] = React.useState(null);     // GET response
  const [post, setPost] = React.useState(null);     // POST response


  // states to hold current values of the form
  const[name, setName] = React.useState("");
  const[email, setEmail] = React.useState("");
  const[password, setPassword] = React.useState("");
  const[occupation, setOccupation] = React.useState(null);
  const[state, setState] = React.useState(null);

  // GET request sent to endpoint - returns occupation and state
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setForm(response.data);
    });
  }, []);

  // This function is called when the submit button is pressed.
  function submit() {
    // if form has not been complete
    if(name === "" || email === "" || password === "" || occupation === null || state === null) {
        alert("Please complete the entire form before submitting.");
    }

    // if form is complete 
    else {
        // POST request sent to endpoint
        axios
            .post(baseURL, {
                name: name,
                email: email,
                password: password,
                occupation: occupation,
                state: state
        })
        .then((response) => {
          setPost(response.data);
        });

        alert("Your form has been submitted. The page will refresh now.");

        window.location.reload(false); // reloads page
    }

  }

  return(
    <div className="form-container">

        <div className="input-container">
            <span>NAME:</span>
            <input className="textbox" type="text" value={name} placeholder="name..." onChange={e => setName(e.target.value)}/>
        </div>

        <div className="input-container">
            <span>EMAIL:</span>
            <input className="textbox" type="text" value={email} placeholder="email..." onChange={e => setEmail(e.target.value)}/>
        </div>
        
        <div className="input-container">
            <span>PASSWORD:</span>
            <input className="textbox" type="text" value={password} placeholder="password..." onChange={e => setPassword(e.target.value)}/>
        </div>

        <div className="input-container">
            <span>OCCUPATION:</span>
            <DropdownList
            className="dropdown-list"
            data={form === null ? [] : form.occupations}
            onChange={value => setOccupation(value)}
            value={occupation}
            />
        </div>

        <div className="input-container">
            <span>STATE:</span>
            <DropdownList
            className="dropdown-list"
            data={form === null ? [] : form.states.map(obj => obj.name)}
            onChange={value => setState(value)}
            value={state}
            />
        </div>

        <button onClick={submit}>
            SUBMIT
        </button>

    </div>
  );
}