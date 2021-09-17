import Moralis from "moralis/types";

Moralis.Cloud.define("getTransactions", function(request) {
    const userAddress = request.params.userAddress;
})