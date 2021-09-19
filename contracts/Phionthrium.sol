//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Phionthrium {
    event Pledge(address _addr, uint _amount);
    event Withdraw(uint _amount);
    event Register();

    struct Creator {
        uint payment;
        uint paymentTime;
    }

    mapping (address => Creator) creators;

    modifier addressExists(address _addr) {
        require(creators[_addr].paymentTime != 0, "This creator must exist.");
        _;
    }

    function withdraw() public addressExists(msg.sender) {
        require(block.timestamp > creators[msg.sender].paymentTime, "You cannot withdraw your funds yet.");
        require(creators[msg.sender].payment > 0, "You cannot withdraw your funds yet.");
        (payable(msg.sender)).transfer(creators[msg.sender].payment);
        creators[msg.sender].payment = 0;
        creators[msg.sender].paymentTime = block.timestamp +  28 days;
        emit Withdraw(creators[msg.sender].payment);
    }

    function pledge(address _creator) public payable addressExists(_creator) {
        require(msg.value > 0, "Must pledge a non-zero amount.");
        creators[_creator].payment += msg.value;
        emit Pledge(_creator, msg.value);
    }

    function register() public {  
        require(creators[msg.sender].paymentTime == 0, "You are already registered.");
        creators[msg.sender].paymentTime = block.timestamp + 28 days;
        emit Register();
    }

    function getCreatorDetails(address _creator) public view addressExists(_creator) returns (uint, uint) {
        return (creators[_creator].payment, creators[_creator].paymentTime);
    }
}
