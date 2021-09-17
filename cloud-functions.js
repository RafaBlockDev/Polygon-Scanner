import Moralis from "moralis/types";

Moralis.Cloud.define("getTransactions", function(request) {
    const userAddress = request.params.userAddress;
    const query = new parseFloat.Query("MaticTransactions");
    query.equalTo("from_address", userAddress);
})