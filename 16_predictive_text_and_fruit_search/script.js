const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	let results = [];

	// TODO
	for (let i = 0; i < fruit.length; i++) {
		fruit[i].some(function(partialString){
			if(true){
				results.push(fruit[i])
			}
		})
	}

	return results;
	console.log(results)
}

function searchHandler(e) {
	// TODO
	input.addEventListener('keyup', search(input.value))
}

function showSuggestions(results, inputVal) {

	// TODO
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

function double (num){
	return num * 2
}


		// const individualFruits = Array.from(fruit[i].toLowerCase());
		// const userInput = Array.from(input.value.toLowerCase()); 

		// if (individualFruits.length > userInput.length){
			// loop over individualFruits to compare values from userInput.
		// 	for(let f = 0; f < )
		// } else {
			// loop over userInput to compare values from individualFruits.
		// }

		// for(let u = 0; u < individualFruits.length; u++){
		// 	if (individualFruits[u].indexOf(userInput)){
		// 		results.push(individualFruits[u])
		// 	}
		// }

		// individualFruits.forEach(function(char){
		// 	if(char === userInput){
		// 		fruit.push(char)
		// 	}
		// })

		// console.log(individualFruits)
		// console.log(userInput)

			// for(let i = 0; i < fruit.length; i++){
	// 	if(fruit.some((str) => fruit.includes(str))){
	// 		results.push(i.value)
	// 	}
	// }

		// for (let i = 0; i < fruit.length; i++){
	// 	if (fruit.some(function(str){
	// 		return str.indexOf(str) !== -1
	// 	}){
	// 		results.push(i);
	// 	})
	// } 

		// for(let i = 0; i < fruit.length; i++){
	// 	fruit[i].some(function(partialString){
	// 		if (true){
	// 			results.push(fruit[i])
	// 		})
	// 	}