//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.1;

import "hardhat/console.sol";

contract ecommerce {
  
    address payable public owner;
    // Payable constructor can receive Ether
    constructor() payable {
        owner = payable(msg.sender);
    }

     struct Item{
        string name;
        string description;
        uint price;
        address  owner;
        string category;
    }
    
      Item[] public item;
      
       function addItem(string memory _name, string memory _description, uint _price, address _owner, string memory _category) public  {
          item.push( Item(_name, _description, _price, _owner,_category));
      
    }
   
    
     function getNumberOfItem() public view returns (uint) {
        return item.length;
    }
    
     function removeItem(uint index) public {
       
        delete item[index];
    }
    
    function get_all_items(
     ) view public returns (Item[] memory) {
        return item;
    }
    
    // Function to transfer Ether from this contract to address from input
    function transfer(address payable _to, uint _amount) public {
        // Note that "to" is declared as payable
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");
    }
    
    
}
