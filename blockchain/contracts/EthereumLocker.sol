pragma solidity ^0.8.6;

contract ethereumLocker {

    event LockAdded(uint256 expire, uint256 amount);

    struct locked{
        uint256 expire;
        uint256 amount;
    }

    mapping(address => locked) users;

    function lockEther(uint256 lockTime) public payable {
        require(msg.value > 0);
        locked storage userInfo = users[msg.sender];
        userInfo.expire = block.number + lockTime;
        userInfo.amount = msg.value;
        emit LockAdded(userInfo.expire, userInfo.amount);
    }

    function withdraw() public payable {
        require(block.number >= users[msg.sender].expire);
        locked storage userInfo = users[msg.sender];
        uint256 value = userInfo.amount;
        userInfo.expire = 0;
        userInfo.amount = 0;
        payable(msg.sender).transfer(value);
    }
}
