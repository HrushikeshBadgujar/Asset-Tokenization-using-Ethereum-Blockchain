//SPDX-License-Identifier: MIT

pragma solidity 0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


// Created ERC20 fungible token
contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("StarDucks Capu-Token", "SCT") public {
        // creating an initialSupply of tokens, which will be assigned to the address that deploys the contract.
        _mint(msg.sender, initialSupply);
    _setupDecimals(0);
    }
}