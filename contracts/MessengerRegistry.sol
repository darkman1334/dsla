// SPDX-License-Identifier: MIT
pragma solidity 0.6.6;
pragma experimental ABIEncoderV2;

import './interfaces/IMessenger.sol';
import './interfaces/IMessengerRegistry.sol';

/**
 * @title MessengerRegistry
 * @dev MessengerRegistry is a contract to register openly distributed Messengers
 */
contract MessengerRegistry is IMessengerRegistry {
    struct Messenger {
        address ownerAddress;
        address messengerAddress;
        string specificationUrl;
        uint256 precision;
        uint256 requestsCounter;
        uint256 fulfillsCounter;
        uint256 id;
    }

    Messenger[] private _messengers;
    /// @dev (messengerAddress=>bool) to check if the Messenger was
    mapping(address => bool) private _registeredMessengers;
    /// @dev (userAddress=>messengerAddress[]) to register the messengers of an owner
    mapping(address => uint256[]) private _ownerMessengers;

    address private _slaRegistry;

    event MessengerRegistered(
        address indexed ownerAddress,
        address indexed messengerAddress,
        string specificationUrl,
        uint256 precision,
        uint256 id
    );

    event MessengerModified(
        address indexed ownerAddress,
        address indexed messengerAddress,
        string specificationUrl,
        uint256 precision,
        uint256 id
    );

    /**
     * @dev sets the SLARegistry contract address and can only be called
     * once
     */
    function setSLARegistry() external override {
        // Only able to trigger this function once
        require(
            address(_slaRegistry) == address(0),
            'SLARegistry address has already been set'
        );

        _slaRegistry = msg.sender;
    }

    /**
     * @dev function to register a new Messenger
     */
    function registerMessenger(
        address callerAddress_,
        address messengerAddress_,
        string calldata specificationUrl_
    ) external override {
        require(
            msg.sender == _slaRegistry,
            'Should only be called using the SLARegistry contract'
        );
        require(
            !_registeredMessengers[messengerAddress_],
            'messenger already registered'
        );

        IMessenger messenger = IMessenger(messengerAddress_);
        address messengerOwner = messenger.owner();
        require(
            messengerOwner == callerAddress_,
            'Should only be called by the messenger owner'
        );
        uint256 precision = messenger.messengerPrecision();
        uint256 requestsCounter = messenger.requestsCounter();
        uint256 fulfillsCounter = messenger.fulfillsCounter();
        _registeredMessengers[messengerAddress_] = true;
        uint256 id = _messengers.length;
        _ownerMessengers[messengerOwner].push(id);

        _messengers.push(
            Messenger({
                ownerAddress: messengerOwner,
                messengerAddress: messengerAddress_,
                specificationUrl: specificationUrl_,
                precision: precision,
                requestsCounter: requestsCounter,
                fulfillsCounter: fulfillsCounter,
                id: id
            })
        );

        emit MessengerRegistered(
            messengerOwner,
            messengerAddress_,
            specificationUrl_,
            precision,
            id
        );
    }

    /**
     * @dev function to modifyMessenger a Messenger
     */
    function modifyMessenger(
        string calldata _specificationUrl,
        uint256 _messengerId
    ) external {
        Messenger storage storedMessenger = _messengers[_messengerId];
        IMessenger messenger = IMessenger(storedMessenger.messengerAddress);
        require(
            msg.sender == messenger.owner(),
            'Can only be modified by the owner'
        );
        storedMessenger.specificationUrl = _specificationUrl;
        storedMessenger.ownerAddress = msg.sender;
        emit MessengerModified(
            storedMessenger.ownerAddress,
            storedMessenger.messengerAddress,
            storedMessenger.specificationUrl,
            storedMessenger.precision,
            storedMessenger.id
        );
    }

    function getMessengers() external view returns (Messenger[] memory) {
        Messenger[] memory returnMessengers = new Messenger[](
            _messengers.length
        );
        for (uint256 index = 0; index < _messengers.length; index++) {
            IMessenger messenger = IMessenger(
                _messengers[index].messengerAddress
            );
            uint256 requestsCounter = messenger.requestsCounter();
            uint256 fulfillsCounter = messenger.fulfillsCounter();
            returnMessengers[index] = Messenger({
                ownerAddress: _messengers[index].ownerAddress,
                messengerAddress: _messengers[index].messengerAddress,
                specificationUrl: _messengers[index].specificationUrl,
                precision: _messengers[index].precision,
                requestsCounter: requestsCounter,
                fulfillsCounter: fulfillsCounter,
                id: _messengers[index].id
            });
        }
        return returnMessengers;
    }

    function getMessengersLength() external view returns (uint256) {
        return _messengers.length;
    }

    function registeredMessengers(address messengerAddress_)
        external
        view
        override
        returns (bool)
    {
        return _registeredMessengers[messengerAddress_];
    }
}
