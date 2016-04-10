// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"role","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[],"name":"getType","outputs":[{"name":"","type":"int256"}],"type":"function"},{"constant":false,"inputs":[],"name":"getState","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"dateCreated","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"expel","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"accept","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"reject","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"contactDetails","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"uint256"}],"name":"setState","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_state","type":"uint256"}],"name":"changeState","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[{"name":"_role","type":"uint256"}],"name":"isRole","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"suspend","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"administrator","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_contactDetails","type":"string"},{"name":"_administrator","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"state","type":"User.State"},{"indexed":false,"name":"role","type":"User.Role"},{"indexed":false,"name":"administrator","type":"address"}],"name":"UserStateChanged","type":"event"}],
    binary: "60606040819052600080546201000060b060020a031916336201000002179055426003556108173881900390819083398101604052805160805160a05191830192019060408051808201909152600481527f6e616d65000000000000000000000000000000000000000000000000000000006020820152600060056000805460ff191681556002805485519282905290916020601f6000196001851615610100020190931684900483018190047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90810193909188019083901061010657805160ff19168380011785555b506101369291505b8082111561021857600081556001016100f2565b828001600101855582156100ea579182015b828111156100ea578251826000505591602001919060010190610118565b505060018054600160a060020a0319168317908190556000805461ff001916610100848102919091179182905560408051600160a060020a03308116825260ff8581166020840152939094049092168282015292909116606082015290517f3dc446316361b29933138cf5caf31bfcfd84f5b2b16c836212701e1d0915cb219181900360800190a15050508260026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021c57805160ff19168380011785555b5061024c9291506100f2565b5090565b8280016001018555821561020c579182015b8281111561020c57825182600050559160200191906001019061022e565b50508160046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102a557805160ff19168380011785555b506102d59291506100f2565b82800160010185558215610299579182015b828111156102995782518260005055916020019190600101906102b7565b50506000805460ff1916905560018054600160a060020a03191682179055505050610513806103046000396000f3606060405236156100cf5760e060020a600035046306fdde0381146100d157806310055c1d1461012c57806315dae03e1461013d5780631865c57d146101915780631f741c7a1461019e5780632439e322146101a75780632852b71c146101c957806341c0e1b5146101eb5780634dc415de146102205780636e94fadc146102425780638da5cb5b146102a0578063a9e966b7146102b8578063b00741cb146102dd578063c19d93fb14610302578063d15c601f1461030e578063e6400bbe14610329578063f53d0a8e1461034a575b005b6040805160028054602060018216156101000260001901909116829004601f810182900482028401820190945283835261035c93908301828280156104245780601f106103f957610100808354040283529160200191610424565b6103ca600054610100900460ff1681565b6103ca600073e69b17047e959b51428111947b4c78790b70a8a063361a4eb86040518160e060020a0281526004018090506020604051808303818660325a03f41561000257505060405151915061019b9050565b6103ca60005460ff165b90565b6103ca60035481565b6103ca600154600090600160a060020a0390811633909116146104b35761019b565b6103ca600154600090600160a060020a0390811633909116146104735761019b565b6100cf600054620100009004600160a060020a039081163390911614156104c857600054620100009004600160a060020a0316ff5b6103ca600154600090600160a060020a0390811633909116146104895761019b565b61035c6004805460408051602060026000196001861615610100020190941693909304601f810184900484028201840190925281815292918301828280156104245780601f106103f957610100808354040283529160200191610424565b6103dc600054620100009004600160a060020a031681565b6103ca600435600154600090600160a060020a03908116339091161461042c5761043c565b6103ca600435600154600090600160a060020a03908116339091161461044a5761043c565b6103ca60005460ff1681565b6103ca6004356000610441600054610100900460ff1661019b565b6103ca60015460009033600160a060020a0390811691161461049e5761019b565b6103dc600154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b505050505081565b506000805460ff19168217905560015b919050565b8214905061043c565b61045e82600081600014156104ca5761043c565b6000805460ff1916909117905550600161043c565b506000805460ff1916600190811790915561019b565b506000805460ff19166002179055600161019b565b506000805460ff19166003179055600161019b565b506000805460ff19166004179055600161019b565b565b81600114156104db5750600161043c565b81600214156104ec5750600261043c565b81600314156104fd5750600361043c565b816004141561050e5750600461043c565b61000256",
    unlinked_binary: "60606040819052600080546201000060b060020a031916336201000002179055426003556108173881900390819083398101604052805160805160a05191830192019060408051808201909152600481527f6e616d65000000000000000000000000000000000000000000000000000000006020820152600060056000805460ff191681556002805485519282905290916020601f6000196001851615610100020190931684900483018190047f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90810193909188019083901061010657805160ff19168380011785555b506101369291505b8082111561021857600081556001016100f2565b828001600101855582156100ea579182015b828111156100ea578251826000505591602001919060010190610118565b505060018054600160a060020a0319168317908190556000805461ff001916610100848102919091179182905560408051600160a060020a03308116825260ff8581166020840152939094049092168282015292909116606082015290517f3dc446316361b29933138cf5caf31bfcfd84f5b2b16c836212701e1d0915cb219181900360800190a15050508260026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021c57805160ff19168380011785555b5061024c9291506100f2565b5090565b8280016001018555821561020c579182015b8281111561020c57825182600050559160200191906001019061022e565b50508160046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102a557805160ff19168380011785555b506102d59291506100f2565b82800160010185558215610299579182015b828111156102995782518260005055916020019190600101906102b7565b50506000805460ff1916905560018054600160a060020a03191682179055505050610513806103046000396000f3606060405236156100cf5760e060020a600035046306fdde0381146100d157806310055c1d1461012c57806315dae03e1461013d5780631865c57d146101915780631f741c7a1461019e5780632439e322146101a75780632852b71c146101c957806341c0e1b5146101eb5780634dc415de146102205780636e94fadc146102425780638da5cb5b146102a0578063a9e966b7146102b8578063b00741cb146102dd578063c19d93fb14610302578063d15c601f1461030e578063e6400bbe14610329578063f53d0a8e1461034a575b005b6040805160028054602060018216156101000260001901909116829004601f810182900482028401820190945283835261035c93908301828280156104245780601f106103f957610100808354040283529160200191610424565b6103ca600054610100900460ff1681565b6103ca600073__UserType______________________________63361a4eb86040518160e060020a0281526004018090506020604051808303818660325a03f41561000257505060405151915061019b9050565b6103ca60005460ff165b90565b6103ca60035481565b6103ca600154600090600160a060020a0390811633909116146104b35761019b565b6103ca600154600090600160a060020a0390811633909116146104735761019b565b6100cf600054620100009004600160a060020a039081163390911614156104c857600054620100009004600160a060020a0316ff5b6103ca600154600090600160a060020a0390811633909116146104895761019b565b61035c6004805460408051602060026000196001861615610100020190941693909304601f810184900484028201840190925281815292918301828280156104245780601f106103f957610100808354040283529160200191610424565b6103dc600054620100009004600160a060020a031681565b6103ca600435600154600090600160a060020a03908116339091161461042c5761043c565b6103ca600435600154600090600160a060020a03908116339091161461044a5761043c565b6103ca60005460ff1681565b6103ca6004356000610441600054610100900460ff1661019b565b6103ca60015460009033600160a060020a0390811691161461049e5761019b565b6103dc600154600160a060020a031681565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103bc5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b505050505081565b506000805460ff19168217905560015b919050565b8214905061043c565b61045e82600081600014156104ca5761043c565b6000805460ff1916909117905550600161043c565b506000805460ff1916600190811790915561019b565b506000805460ff19166002179055600161019b565b506000805460ff19166003179055600161019b565b506000805460ff19166004179055600161019b565b565b81600114156104db5750600161043c565b81600214156104ec5750600261043c565b81600314156104fd5750600361043c565b816004141561050e5750600461043c565b61000256",
    address: "0x49343ed45f1a28005f96be7f351b3ce68fe30776",
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
