
module.exports = function makeExchange(currency) {

	var amount={};
	if(currency>10000){
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else if(currency<=0){
		return {};
	}

	var coins={"H":50,"Q":25,"D":10,"N":5,"P":1};
	for(var key in coins) {
		var temp=(currency-currency%coins[key])/coins[key];
		if (temp>0){
			amount[key]=temp;
			currency-=coins[key]*temp;
		}
	}
	return amount;
}
