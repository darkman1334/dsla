const bDSLAToken = artifacts.require('bDSLAToken');

module.exports = async (callback) => {
  try {
    const [owner] = await web3.eth.getAccounts();
    console.log(`Owner address is: ${owner}`);
    const token = await bDSLAToken.deployed();
    await token.mint(owner, web3.utils.toWei('1000000'));
    const balance = await token.balanceOf(owner);
    console.log(`Owner DSLA balance is ${web3.utils.fromWei(balance)} DSLA`);
    callback(null);
  } catch (error) {
    callback(error);
  }
};
