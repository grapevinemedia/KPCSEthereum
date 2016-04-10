// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"certificates","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"role","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[],"name":"getState","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"expel","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"accept","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"reject","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"contactDetails","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_importerParty","type":"address"},{"name":"_participantOrigin","type":"address[]"},{"name":"_participantSource","type":"address"},{"name":"_participantDestination","type":"address"}],"name":"createCertificate","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"uint256"}],"name":"setState","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"uint256"}],"name":"changeState","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":true,"inputs":[],"name":"creationTime","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"suspend","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"administrator","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_contactDetails","type":"string"},{"name":"_administrator","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"state","type":"User.State"},{"indexed":false,"name":"role","type":"User.Role"},{"indexed":false,"name":"administrator","type":"address"}],"name":"UserStateChanged","type":"event"}],
    binary: "60606040819052600080546201000060b060020a03191633620100000217905542600355610fae3881900390819083398101604052805160805160a05191830192019060408051808201909152600481527f6e616d65000000000000000000000000000000000000000000000000000000006020820152600060056000805460ff191681556002805485519282905290916020601f6000196001851615610100020190931684900483018190047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90810193909188019083901061010657805160ff19168380011785555b506101369291505b8082111561021857600081556001016100f2565b828001600101855582156100ea579182015b828111156100ea578251826000505591602001919060010190610118565b505060018054600160a060020a0319168317908190556000805461ff001916610100848102919091179182905560408051600160a060020a03308116825260ff8581166020840152939094049092168282015292909116606082015290517f3dc446316361b29933138cf5caf31bfcfd84f5b2b16c836212701e1d0915cb219181900360800190a15050508260046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021c57805160ff19168380011785555b5061024c9291506100f2565b5090565b8280016001018555821561020c579182015b8281111561020c57825182600050559160200191906001019061022e565b50508160056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102a557805160ff19168380011785555b506102d59291506100f2565b82800160010185558215610299579182015b828111156102995782518260005055916020019190600101906102b7565b50506000805460ff19169055505050610cbc806102f26000396000f3606060405236156100ce5760e060020a600035046216e52681146100d057806306fdde03146100f157806310055c1d1461014f5780631865c57d146101605780632439e3221461016e5780632852b71c1461019057806341c0e1b5146101b25780634dc415de146101e75780636e94fadc146102095780638da5cb5b146102675780639ae584b61461027f578063a9e966b7146102d4578063b00741cb146102f9578063c19d93fb1461031d578063d8270dce14610329578063e6400bbe14610332578063f53d0a8e14610353575b005b610365600435600760205260009081526040902054600160a060020a031681565b6040805160048054602060026001831615610100026000190190921691909104601f8101829004820284018201909452838352610382939083018282801561042d5780601f106104025761010080835404028352916020019161042d565b6103f0600054610100900460ff1681565b6103f05b60005460ff165b90565b6103f0600154600090600160a060020a0390811633909116146105a65761016b565b6103f0600154600090600160a060020a0390811633909116146105665761016b565b6100ce600054620100009004600160a060020a039081163390911614156105bb57600054620100009004600160a060020a0316ff5b6103f0600154600090600160a060020a03908116339091161461057c5761016b565b6040805160058054602060026001831615610100026000190190921691909104601f8101829004820284018201909452838352610382939083018282801561042d5780601f106104025761010080835404028352916020019161042d565b610365600054620100009004600160a060020a031681565b6040805160248035600481810135602081810280870182019097528186526103f096833596939560449501929182919085019084908082843750949650509335935050606435915050600060006104f4610164565b6103f0600435600154600090600160a060020a03908116339091161461052757610537565b6103f060043560015460009033600160a060020a0390811691161461053c57610537565b6103f060005460ff1681565b6103f060035481565b6103f060015460009033600160a060020a039081169116146105915761016b565b610365600654600160a060020a031681565b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161041057829003601f168201915b505050505081565b85600060029054906101000a9004600160a060020a03168686866040516106b6806106068339018086600160a060020a0316815260200185600160a060020a031681526020018060200184600160a060020a0316815260200183600160a060020a031681526020018281038252858181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019650505050505050604051809103906000f09050600191505b50949350505050565b60011415806105195750600054620100009004600160a060020a039081163390911614155b1561043557600091506104eb565b506000805460ff19168217905560015b919050565b61055082600081600014156105bd57610537565b6000805460ff1916919091179055506001610537565b506000805460ff1916600190811790915561016b565b506000805460ff19166002179055600161016b565b506000805460ff19166003179055600161016b565b506000805460ff19166004179055600161016b565b565b81600114156105ce57506001610537565b81600214156105df57506002610537565b81600314156105f057506003610537565b816004141561060157506004610537565b610002566000805460a060020a60ff021916815560e06040819052426060819052608083905260a083905260c0839052600155600282905560038290556004919091556106b638819003908190833981016040528051610100516101205161014051610160519394929391909201919033600060006101000a815481600160a060020a030219169083021790555060406040519081016040528086815260200185815260200150600a60005060008201518160000160006101000a815481600160a060020a030219169083021790555060208201518160010160006101000a815481600160a060020a03021916908302179055509050506060604051908101604052808481526020018381526020018281526020015060056000506000820151816000016000509080519060200190828054828255906000526020600020908101928215610258579160200282015b828111156102585782518254600160a060020a031916178255602092909201916001919091019061014a565b505060208201518160010160006101000a815481600160a060020a030219169083021790555060408201518160020160006101000a815481600160a060020a030219169083021790555090505033600060006101000a815481600160a060020a030219169083021790555060806040519081016040528042815260200160008152602001600081526020016000815260200150600c600050600082015181600001600050556020820151816001016000505560408201518160020160005055606082015181600301600050559050505050505050610434806102826000396000f35b506101769291505b8082111561027e578054600160a060020a0319168155600101610260565b509056606060405236156100775760e060020a60003504632b0d181681146100795780632ca15122146100925780638da5cb5b146100bf578063bb5d40eb146100d1578063c157fc72146100e9578063c19d93fb146100fb578063d5e2c0c71461010f578063f27959c714610172578063f3f443ca14610189575b005b6101c9600954600854600160a060020a03908116911682565b6101f860085460009033600160a060020a039081169116141561035157600e548190111561037d576100e6565b61020a600054600160a060020a031681565b6101f860005460ff60a060020a909104166001145b90565b61022760015460025460035460045484565b6101f860005460ff60a060020a9091041681565b61024d60043560108054829081101561000257506000526003027f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6728101907f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6730182565b610227600f54600e54600c54600d54909290919084565b6101f85b600f5460009081901180156101a45750600e548190115b80156101b35750600c54600090115b80156101c25750600d54600090115b90506100e6565b6040518083600160a060020a0316815260200182600160a060020a031681526020019250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b604080519485526020850193909352838301919091526060830152519081900360800190f35b6040805181815283546002600182161561010002600019019091160491810182905290819060208201906060830190869080156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b5050838103825284546002600182161561010002600019019091160480825260209190910190859080156103405780601f1061031557610100808354040283529160200191610340565b820191906000526020600020905b81548152906001019060200180831161032357829003601f168201915b505094505050505060405180910390f35b600954600160a060020a0390811633909116141561038a57600f5460009011156103b6575060006100e6565b42600e555b6103cd61018d565b600b54600160a060020a039081163390911614156103bf57600c5460009011156103c4575060006100e6565b42600f55610382565b610002565b42600c55610382565b1561042c576000805474ff0000000000000000000000000000000000000000191660a060020a17815560405130600160a060020a0316917fa566fc6a716182a1dc2bc8d30c98b4278f1d386554dcbbd6a0c39aaedad08c2891a26100e6565b5060016100e656",
    unlinked_binary: "60606040819052600080546201000060b060020a03191633620100000217905542600355610fae3881900390819083398101604052805160805160a05191830192019060408051808201909152600481527f6e616d65000000000000000000000000000000000000000000000000000000006020820152600060056000805460ff191681556002805485519282905290916020601f6000196001851615610100020190931684900483018190047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90810193909188019083901061010657805160ff19168380011785555b506101369291505b8082111561021857600081556001016100f2565b828001600101855582156100ea579182015b828111156100ea578251826000505591602001919060010190610118565b505060018054600160a060020a0319168317908190556000805461ff001916610100848102919091179182905560408051600160a060020a03308116825260ff8581166020840152939094049092168282015292909116606082015290517f3dc446316361b29933138cf5caf31bfcfd84f5b2b16c836212701e1d0915cb219181900360800190a15050508260046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021c57805160ff19168380011785555b5061024c9291506100f2565b5090565b8280016001018555821561020c579182015b8281111561020c57825182600050559160200191906001019061022e565b50508160056000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102a557805160ff19168380011785555b506102d59291506100f2565b82800160010185558215610299579182015b828111156102995782518260005055916020019190600101906102b7565b50506000805460ff19169055505050610cbc806102f26000396000f3606060405236156100ce5760e060020a600035046216e52681146100d057806306fdde03146100f157806310055c1d1461014f5780631865c57d146101605780632439e3221461016e5780632852b71c1461019057806341c0e1b5146101b25780634dc415de146101e75780636e94fadc146102095780638da5cb5b146102675780639ae584b61461027f578063a9e966b7146102d4578063b00741cb146102f9578063c19d93fb1461031d578063d8270dce14610329578063e6400bbe14610332578063f53d0a8e14610353575b005b610365600435600760205260009081526040902054600160a060020a031681565b6040805160048054602060026001831615610100026000190190921691909104601f8101829004820284018201909452838352610382939083018282801561042d5780601f106104025761010080835404028352916020019161042d565b6103f0600054610100900460ff1681565b6103f05b60005460ff165b90565b6103f0600154600090600160a060020a0390811633909116146105a65761016b565b6103f0600154600090600160a060020a0390811633909116146105665761016b565b6100ce600054620100009004600160a060020a039081163390911614156105bb57600054620100009004600160a060020a0316ff5b6103f0600154600090600160a060020a03908116339091161461057c5761016b565b6040805160058054602060026001831615610100026000190190921691909104601f8101829004820284018201909452838352610382939083018282801561042d5780601f106104025761010080835404028352916020019161042d565b610365600054620100009004600160a060020a031681565b6040805160248035600481810135602081810280870182019097528186526103f096833596939560449501929182919085019084908082843750949650509335935050606435915050600060006104f4610164565b6103f0600435600154600090600160a060020a03908116339091161461052757610537565b6103f060043560015460009033600160a060020a0390811691161461053c57610537565b6103f060005460ff1681565b6103f060035481565b6103f060015460009033600160a060020a039081169116146105915761016b565b610365600654600160a060020a031681565b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161041057829003601f168201915b505050505081565b85600060029054906101000a9004600160a060020a03168686866040516106b6806106068339018086600160a060020a0316815260200185600160a060020a031681526020018060200184600160a060020a0316815260200183600160a060020a031681526020018281038252858181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019650505050505050604051809103906000f09050600191505b50949350505050565b60011415806105195750600054620100009004600160a060020a039081163390911614155b1561043557600091506104eb565b506000805460ff19168217905560015b919050565b61055082600081600014156105bd57610537565b6000805460ff1916919091179055506001610537565b506000805460ff1916600190811790915561016b565b506000805460ff19166002179055600161016b565b506000805460ff19166003179055600161016b565b506000805460ff19166004179055600161016b565b565b81600114156105ce57506001610537565b81600214156105df57506002610537565b81600314156105f057506003610537565b816004141561060157506004610537565b610002566000805460a060020a60ff021916815560e06040819052426060819052608083905260a083905260c0839052600155600282905560038290556004919091556106b638819003908190833981016040528051610100516101205161014051610160519394929391909201919033600060006101000a815481600160a060020a030219169083021790555060406040519081016040528086815260200185815260200150600a60005060008201518160000160006101000a815481600160a060020a030219169083021790555060208201518160010160006101000a815481600160a060020a03021916908302179055509050506060604051908101604052808481526020018381526020018281526020015060056000506000820151816000016000509080519060200190828054828255906000526020600020908101928215610258579160200282015b828111156102585782518254600160a060020a031916178255602092909201916001919091019061014a565b505060208201518160010160006101000a815481600160a060020a030219169083021790555060408201518160020160006101000a815481600160a060020a030219169083021790555090505033600060006101000a815481600160a060020a030219169083021790555060806040519081016040528042815260200160008152602001600081526020016000815260200150600c600050600082015181600001600050556020820151816001016000505560408201518160020160005055606082015181600301600050559050505050505050610434806102826000396000f35b506101769291505b8082111561027e578054600160a060020a0319168155600101610260565b509056606060405236156100775760e060020a60003504632b0d181681146100795780632ca15122146100925780638da5cb5b146100bf578063bb5d40eb146100d1578063c157fc72146100e9578063c19d93fb146100fb578063d5e2c0c71461010f578063f27959c714610172578063f3f443ca14610189575b005b6101c9600954600854600160a060020a03908116911682565b6101f860085460009033600160a060020a039081169116141561035157600e548190111561037d576100e6565b61020a600054600160a060020a031681565b6101f860005460ff60a060020a909104166001145b90565b61022760015460025460035460045484565b6101f860005460ff60a060020a9091041681565b61024d60043560108054829081101561000257506000526003027f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6728101907f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6730182565b610227600f54600e54600c54600d54909290919084565b6101f85b600f5460009081901180156101a45750600e548190115b80156101b35750600c54600090115b80156101c25750600d54600090115b90506100e6565b6040518083600160a060020a0316815260200182600160a060020a031681526020019250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b604080519485526020850193909352838301919091526060830152519081900360800190f35b6040805181815283546002600182161561010002600019019091160491810182905290819060208201906060830190869080156102cb5780601f106102a0576101008083540402835291602001916102cb565b820191906000526020600020905b8154815290600101906020018083116102ae57829003601f168201915b5050838103825284546002600182161561010002600019019091160480825260209190910190859080156103405780601f1061031557610100808354040283529160200191610340565b820191906000526020600020905b81548152906001019060200180831161032357829003601f168201915b505094505050505060405180910390f35b600954600160a060020a0390811633909116141561038a57600f5460009011156103b6575060006100e6565b42600e555b6103cd61018d565b600b54600160a060020a039081163390911614156103bf57600c5460009011156103c4575060006100e6565b42600f55610382565b610002565b42600c55610382565b1561042c576000805474ff0000000000000000000000000000000000000000191660a060020a17815560405130600160a060020a0316917fa566fc6a716182a1dc2bc8d30c98b4278f1d386554dcbbd6a0c39aaedad08c2891a26100e6565b5060016100e656",
    address: "",
    generated_with: "2.0.6",
    contract_name: "Party"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Party = Contract;
  }

})();
