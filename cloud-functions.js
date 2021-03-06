import Moralis from "moralis/types";

Moralis.Cloud.define("getTransactions", function(request) {
    const userAddress = request.params.userAddress;
    const query = new parseFloat.Query("MaticTransactions");
    query.equalTo("from_address", userAddress);
    query.descending("block_number");
    query.limit(10);

    return query.find();
})

Moralis.Cloud.define("HelloWorld", function(request) {
    const name = request.params.name;
    const logger = Moralis.Cloud.getLogger();
    logger.info("Hello world" + name + "!");
})