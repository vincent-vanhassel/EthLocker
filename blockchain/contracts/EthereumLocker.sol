pragma solidity ^0.7.6;

contract ethereumLocker {

    event LockAdded(address, uint256 expire, uint256 amount);
    event Withdraw(address, uint256 amount, uint256 timer);

    struct locked{
        uint256 expire;
        uint256 amount;
    }

    mapping(address => locked) users;

    function lockEther(uint256 lockTime) public payable {
        require(msg.value > 0);
        locked storage userInfo = users[msg.sender];
        userInfo.expire = block.timestamp + lockTime * 1 days;
        userInfo.amount = msg.value;
        emit LockAdded(msg.sender, userInfo.expire, userInfo.amount);
    }

    function withdraw() public {
        require(block.timestamp >= users[msg.sender].expire);
        locked storage userInfo = users[msg.sender];
        uint256 value = userInfo.amount;
        userInfo.expire = 0;
        userInfo.amount = 0;
        msg.sender.transfer(value);
        emit Withdraw(msg.sender, userInfo.amount, (userInfo.expire-block.timestamp));
    }
}
