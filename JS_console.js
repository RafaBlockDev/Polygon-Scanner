const userAddress = "".toLowerCase();
await Parse.Cloud.run("watchMaticAddress", { address : userAddress });

const fromQuery = new Parse.Query("MaticTransactions");
fromQuery.equalTo("from_address", userAddress);
const results = await fromQuery.find();
console.log(results);