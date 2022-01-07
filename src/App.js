import './App.css';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const api = axios.create({
  baseURL: `https://back.implementaconbubo.com/v1/sales/customer/?simple=true`
});

const App = () => {

const [myOptions, setMyOptions] = useState([])

async function getData() {
  // fetch('https://back.implementaconbubo.com/v1/sales/customer/?simple=true')
  //   .then((response => {
  //     return response.json();
  //   })).then((res) => {
  //     console.log(res.data);
  //     for (var i = 0; i < res.data.lenght; i++) {
  //       myOptions.push(res.data[i])
  //     }
  //     console.log(myOptions)
  //   })
  fetch('https://back.implementaconbubo.com/v1/sales/customer/?simple=true', {
    mode: 'no-cors',
    headers: {
      // 'Allow': 'APIKEY',
    }
  }).then((response) => {
    return response.json
  }).then((response) => {
    console.log(response)
  })
}

const getDataFromAPI = () => {
  console.log("Options Fetched from API")

  fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
    return response.json()
  }).then((res) => {
    for (var i = 0; i < res.data.length; i++) {
      myOptions.push(res.data[i].employee_name)
    }
    setMyOptions(myOptions)
  })
}


  return (
    <div className='App' >
      <h3>Ingresa tu búsqueda</h3>
      <Autocomplete
        className="autocomplete"
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI, getData}
            variant="outlined"
            label="Costumers"
          />
        )}
      />
    </div>
  );
}

export default App;
