import axios from "axios";
import React from "react";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import './Form.css';

const baseURL = "https://frontend-take-home.fetchrewards.com/form";

export default function Form() {
  const [form, setForm] = React.useState(null);

  const[name, setName] = React.useState("");
  const[email, setEmail] = React.useState("");
  const[password, setPassword] = React.useState("");
  const[occupation, setOccupation] = React.useState(null);
  const[state, setState] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setForm(response.data);
    });
  }, []);

  console.log(form)

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
            onChange={e => setOccupation(e.target.value)}
            />
        </div>

        <div className="input-container">
            <span>STATE:</span>
            <DropdownList
            className="dropdown-list"
            data={form === null ? [] : form.states.map(obj => obj.name)}
            onChange={e => setState(e.target.value)}
            />
        </div>

    </div>
  );
}