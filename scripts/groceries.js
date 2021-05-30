	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		nutFree: true,
		lactoseFree: true,
		organic: false
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		nutFree: true,
		lactoseFree: true,
		organic: false
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		nutFree: true,
		lactoseFree: true,
		organic: false
	},
	{
		name: "granola bars",
		vegetarian: true,
		glutenFree: false,
		price: 3.00,
		nutFree: false,
		lactoseFree: true,
		organic: false
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 12.50,
		nutFree: true,
		lactoseFree: true,
		organic: false
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		price: 4.99,
		nutFree: true,
		lactoseFree: false,
		organic: true
	},
	{
		name: "bagels",
		vegetarian: true,
		glutenFree: false,
		price: 3.99,
		nutFree: true,
		lactoseFree: true,
		organic: false
	},
	{
		name: "penuts",
		vegetarian: true,
		glutenFree: true,
		price: 4.99,
		nutFree: false,
		lactoseFree: true,
		organic: false
	},
	{
		name: "letuce",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		nutFree: true,
		lactoseFree: true,
		organic: true
	},
	{
		name: "kale",
		vegetarian: true,
		glutenFree: true,
		price: 3.50,
		nutFree: true,
		lactoseFree: true,
		organic: true
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods,c1,c2,c3,c4,c5) {
	let product_list = [];
	var res = [c1,c2,c3,c4,c5];
	console.log(res)
	for (let i=0; i<prods.length; i+=1) {
		let flag = false
		if ((res[0]) && (!prods[i].vegetarian)){
			flag = true
		}  
		if ((res[1]) && (!prods[i].glutenFree)){
			flag = true
		}  
		if ((res[2]) && (!prods[i].nutFree)){
			flag = true
		} 
		if ((res[3]) && (!prods[i].lactoseFree)){
			flag = true
		} 
		if ((res[4]) && (!prods[i].organic)){
			flag = true
		} 
		if (!flag){
			product_list.push(prods[i]);
		}
	}	
	product_list.sort((a, b) => {
		return a.price - b.price;
	});
	console.log(product_list)
	return product_list;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
