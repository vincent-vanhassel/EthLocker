const EthereumLocker = artifacts.require('ethereumLocker');

module.exports = function (deployer) {
    deployer.deploy(EthereumLocker);
};
