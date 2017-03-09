// As a cashier, I can initialize the cash register with a price list in a simple comma-delimited format. The price list contains product names, SKU's (stock-keeping units, i.e., the product id), the price per unit, and whether the product is taxable. (Staple groceries are typically not taxable.)
// As a cashier, I can initialize the register with a starting amount of money.
// As a cashier, I can initialize the register with a sales tax percentage.
// As a cashier, when I am not actively handling a customer transaction, I can choose to view the current balance of cash that the register contains.
// As a cashier, I can start a new transaction. Transactions have id's and are time-stamped upon creation.
// As a cashier, I can scan one item, whereupon that item is added to the transaction.
// As a customer, I can see the last item scanned and a running subtotal of the current transaction cost.
// As a cashier, I can input the money received from the customer, thus closing out the transaction.

// Change is calculated to minimize the number of bills and coins that must be handled by the cashier.
// As a customer, I can see the grand total and how much change I am to receive.
// As a customer, I can see an itemized receipt of my purchases.
// As a cashier, I can view a report of all the transactions that have occurred since register initialization. Transactions are listed by id, # of items purchased, and the transaction amount.
// As a cashier, I can search all items purchased since register initialization. I can do a partial string match on product name.


var register = function(priceList, startingAmt, salesTax) {
	//set up variables to hold all of these initial values
	//pricelist should be an array of objects
	//currentBalance starts set to startingAmt
	//sales tax is a num
	//transactions is an array

	this.getBalance = function() {
		// returns this.currentBalance
	};

	this.getTransactions = function() {
		//returns this.transactions
	}

/////////////////////////////////////////////

	this.newTransaction = function() {
		//stores an object with:
			//  a transactionID
			//  the current time
			// the items in the transactions in an array
			// to transaction total

		this.scan = function(item) {
			//finds the item price from register.priceList
			//adds the item to the items list
			//adds the price to the transaction total
		}

		this.customerView = function() {
			//displays last item in items list
			//displays transaction total
		}

		this.pay = function(total, received) {
			//if received > total
				var makeChange = function(total, received) {
					//
				}
			//add total to register.currentBalance
			//add transactionObj to register.transactions
		}

	};

}

