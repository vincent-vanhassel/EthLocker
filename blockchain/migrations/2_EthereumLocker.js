const EthereumLocker = artifacts.require('EthereumLocker');

module.exports = function (deployer) {
    deployer.deploy(EthereumLocker);
};
