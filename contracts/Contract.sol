// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.24;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender); // change this to tx.origin if want to have our wallet address to be shown instead
    }
}