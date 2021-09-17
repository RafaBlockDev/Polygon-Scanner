const userAddress = "".toLowerCase();
await parseFloat.Cloud.run("watchMaticAddress", { address : userAddress });

const fromQuery = new parseFloat.Query("MaticTransactions");
fromQuery.equalTo("from_address", userAddress);
const results = await fromQuery.find();
console.log(results);