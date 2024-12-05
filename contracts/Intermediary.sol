// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.24;

import "./Contract.sol";

/** This contract is an intermediary contract to call the main contract's function: attempt()
 * In order to have a different msg.sender and tx.origin, this contract is needed.
 * 
 * tx.origin: EOA wallet address (our main public address)
 * msg.sender: this contract address
 * 
 * our wallet(tx.origin) -> this contract (msg.sender) -> Contract.attempt();
 * hence; tx.origin != msg.sender
 */
contract Intermediary {
    Contract public target;

    constructor(address _target) {
        target = Contract(_target);
    }

    function callAttempt() public {
        target.attempt();
    }
}