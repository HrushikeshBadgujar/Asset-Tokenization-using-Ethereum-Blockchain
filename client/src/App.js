import React, { Component } from "react";
import MyToken from "./contracts/MyToken.json";
import MyTokenSale from "./contracts/MyTokenSale.json";
import KycContract from "./contracts/KycContract.json";
import getWeb3 from "./getWeb3";

import BenefitsCard from '../src/components/pages/BenefitsCard';
// import { red,green,blue, } from '@mui/material/colors';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Hero from "./components/pages/Hero";

import "./App.css";

class App extends Component {
  state = { loaded: false,  kycAddress: "", tokenSaleAddress: "", userTokens: 0 };

    componentDidMount = async () => {
      try {
        // Get network provider and web3 instance.
        this.web3 = await getWeb3();

        // Use web3 to get the user's accounts.
        this.accounts = await this.web3.eth.getAccounts();

        // Get the contract instance.
        //this.networkId = await this.web3.eth.net.getId(); <<- this doesn't work with MetaMask anymore
        this.networkId = await this.web3.eth.getChainId();

        this.myToken = new this.web3.eth.Contract(
          MyToken.abi,
          MyToken.networks[this.networkId] && MyToken.networks[this.networkId].address,
        );

        this.myTokenSale = new this.web3.eth.Contract(
          MyTokenSale.abi,
          MyTokenSale.networks[this.networkId] && MyTokenSale.networks[this.networkId].address,
        );

        this.kycContract = new this.web3.eth.Contract(
          KycContract.abi,
          KycContract.networks[this.networkId] && KycContract.networks[this.networkId].address,
        );

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        this.listenToTokenTransfer();
        this.setState({ loaded:true, tokenSaleAddress: this.myTokenSale._address }, this.updateUserTokens);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
    [name]: value
    });
};

handleKycSubmit = async () => {
    const {kycAddress} = this.state;
    await this.kycContract.methods.setKycCompleted(kycAddress).send({from: this.accounts[0]});
    alert("Account "+kycAddress+" is now whitelisted");
};

  handleBuyToken = async () => {
    await this.myTokenSale.methods.buyTokens(this.accounts[0]).send({from: this.accounts[0], value: 10});
  };

  updateUserTokens = async() => {
    let userTokens = await this.myToken.methods.balanceOf(this.accounts[0]).call();
    this.setState({userTokens: userTokens});
  };
    
  listenToTokenTransfer = async() => {
    this.myToken.events.Transfer({to: this.accounts[0]}).on("data", this.updateUserTokens);
  };

  render() {
    if (!this.state.loaded) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      // <div className="App">
      <Container>
              <Grid container className="first-section">
                  <h1>What is Asset Tokenization ?</h1>
                  <Hero/>
              </Grid>
              <Grid container className="second-section">
              <Grid  item xs={12} md={6} className="second-section-left">
                <h2>Crowdsale Address :</h2>
                
              
                
              <h3>{this.state.tokenSaleAddress}</h3>  
              <br></br>
                  
                
              </Grid>
              <Grid item xs={12} md={6}  className="second-section-right">
              <h2>Complete Your KYC </h2>
              <TextField 
                className="kyc-textfield"
                variant="outlined"
                size="small"
                id="outlined-name"
                name="kycAddress"
                label="Enter Your Address for whitelisting"

                value={this.state.kycAddress}
                onChange={this.handleInputChange}
              />
              <h3></h3>
              <Button 
                fullwidth
                sx={{ borderRadius:"25px",width:"150px", }}
                className="kyc-button"
                variant="outlined" 
                size="large"
                onClick={this.handleKycSubmit}>
                Send
              </Button>

              <h3> Your Account has : {this.state.userTokens} Tokens</h3>
              <Button 
                fullwidth
                sx={{ borderRadius:"25px" }}
                className="kyc-button"
                variant="outlined" 
                size="large"
                onClick={this.handleBuyToken}>
                Buy More Tokens
              </Button>  
              </Grid> 
              </Grid>
          <Grid container className="third-section">
              <h1>General Benefits of Tokenization</h1>
              <BenefitsCard/>
          </Grid>
      </Container>
              
    );
  }
}

export default App;


