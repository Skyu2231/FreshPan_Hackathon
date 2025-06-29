// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FreshPan {
    struct Dish {
        string name;
        uint priceUsd;       
        address payable seller;
        string imageUrl;
    }
    Dish[] public dishes;

    event DishUploaded(uint indexed id, address indexed seller, string name, uint priceUsd, string imageUrl);
    event DishDeleted(uint indexed id);
    event DishPurchased(uint indexed id, address indexed buyer, uint totalUsd, bool fastDelivery);

    function uploadDish(string memory name, uint priceUsd, string memory imageUrl) external {
        dishes.push(Dish(name, priceUsd, payable(msg.sender), imageUrl));
        emit DishUploaded(dishes.length - 1, msg.sender, name, priceUsd, imageUrl);
    }

    function deleteDish(uint id) external {
        require(id < dishes.length && dishes[id].seller == msg.sender);
        dishes[id] = dishes[dishes.length - 1];
        dishes.pop();
        emit DishDeleted(id);
    }

    function buyDish(uint id, bool fastDelivery) external payable {
        require(id < dishes.length);
        uint totalUsd = dishes[id].priceUsd + (fastDelivery ? 30 : 0);
        uint ethRequired = (msg.value * totalUsd) / totalUsd;
        require(msg.value >= ethRequired);
        dishes[id].seller.transfer(msg.value);
        emit DishPurchased(id, msg.sender, totalUsd, fastDelivery);
    }

    function getDishCount() external view returns (uint) {
        return dishes.length;
    }

    function getDish(uint id) external view returns (Dish memory) {
        require(id < dishes.length);
        return dishes[id];
    }
}
