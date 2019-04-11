pragma solidity 0.5.7;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "../Whitelist/Whitelist.sol";

contract Subscribable {

    using SafeMath for uint256;

    Whitelist public whitelist;

    mapping(address => bool) private userToSubscribed;

    address[] internal allUsers;

    uint public subscribersCount;
    uint internal usersCount;

    event Subscribed(address indexed user);
    event Unsubscribed(address indexed user);

    modifier onlyWhitelisted() {
        if (whitelist != Whitelist(0)) {
            require(whitelist.isWhitelisted(msg.sender));
        }
        _;
    }

    modifier onlySubscribed() {
        require(isSubscribed(msg.sender));
        _;
    }

    modifier onlyNotSubscribed() {
        require(!isSubscribed(msg.sender));
        _;
    }

    function _subscribe() internal onlyWhitelisted {
        userToSubscribed[msg.sender] = true;
        subscribersCount = subscribersCount.add(1);
        allUsers.push(msg.sender);
        usersCount = usersCount.add(1);

        emit Subscribed(msg.sender);
    }

    function _unSubscribe() internal onlySubscribed {
        userToSubscribed[msg.sender] = false;
        subscribersCount = subscribersCount.sub(1);

        emit Unsubscribed(msg.sender);
    }

    function isSubscribed(address _userAddress) public view returns(bool) {
        return(userToSubscribed[_userAddress]);
    }

}
