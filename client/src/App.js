import React, { useState } from 'react';
import './App.css';
import Web3 from 'web3';
import { ethereumLockerABI } from './abi/abis';

const web3 = new Web3(Web3.givenProvider);
const contractAddresse = '0x568087fE1524b1B3A17e1D2D485D82e4249D1512';
const contract = new web3.eth.Contract(ethereumLockerABI, contractAddresse);

function App() {
  const [etherValue, setEtherValue] = useState(0);
  const [timeValue, setTimeValue] = useState(0);

  const lockEther = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await contract.methods.lockEther(timeValue).estimateGas();
    console.log(gas)
    const result = await contract.methods.lockEther(timeValue).send({ from: account, gas: '25000' });
    console.log(result);
  }

  const withdrawPosition = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await contract.methods.withdraw().estimateGas();
    const result = await contract.methods.withdraw().send({from: account, gas});
    console.log(result);
  }

  return (
    <div className="App">

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>

      <header className="App-header">
        <title>Locker</title>
      </header>

      <body>
        <div className="my-4 text-center">
          <h1>Ethereum locker</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="border rounded shadow p-4 my-4">
              <form className="row gx-3 gy-2 align-items-center" onSubmit={lockEther}>
                <div className="col-sm-4">
                  <div className="input-group">
                    <div className="input-group-text">Ξ</div>
                    <input type="text" className="form-control" id="ethereumValue" value={etherValue} onChange={ e => setEtherValue(e.target.value) }/>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="input-group">
                    <div className="input-group-text">days</div>
                    <input type="text" className="form-control" id="timeValue" value={timeValue} onChange={ e => setTimeValue(e.target.value) }/>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary" onClick={lockEther}>Lock</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="border rounded shadow p-4 my-4">
              <div className="col-auto">
                <button type="submit" className="btn btn-success" onClick={withdrawPosition}>Withdraw</button>
              </div>
            </div>
          </div>
        </div>
      </body>

    </div>
  );
}

export default App;
