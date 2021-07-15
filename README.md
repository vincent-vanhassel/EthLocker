# Ethereum Locker

This project allowing to lock ether for a certain time via a graphical interface

## Table of Contents
**[Smart-contract Installation Instructions](#Smart-contract)**<br>
**[Front Installation Instructions](#Front)**<br>
<br>

---

## Functional workflow
****
### Ether Locking

1. you canh connect your wallet to the interface for locking some ether for a choosen time
2. you will receive a notification, where you can found the duration you enter and the amount lock.

### Ether Withdraw

1. When the duration is past, then you can click on the withdraw button for receiving back your ethers

---


### Smart-contract

#### Installation

1. First, go to the folder:
    ```bash
    cd blockchain
    ```

##### With truffle

Run the local Truffle blockchain:
    ```bash
    truffle develop
    ```

* In Truffle development console execute this command to compile the contracts: `compile`
* Then migrate them on the local blockchain:
    ```bash
    migrate
    ```

##### With ganache

1. Open ganache and configure it for requesting port 7545

2. Migrate contract at the folder's root:

    ```bash
    truffle migrate
    ````
3. you can now interact with the smart contract

#### Interacting with the smart contract

1. configure the smart-contract deployment account in the App.js file at ./client/src/App.js in the constant : contractAddresse

2. retrieve the smart contract address via the deployment interface and add it to this constant : contractAddresse

---

### Front

1. go in the client folder
    ```bash
    cd client
    ```

2. Then install all dependencie
    ```bash
    npm install
    ```

3. Run the project
    ```bash
    npm run start
    ```

Go to http://localhost:3000 to see your app

---
