var app = angular.module('parseQ');


app.service('parseService', function($http, $q) {

	this.postData = function(question, update) {

	return $http({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/questions',
			data: {text: question, status: 'red'}


		})

	}
  
  
this.getData = function() {

  return $http({
    method: 'GET',
    url:'https://api.parse.com/1/classes/questions'
  })

}

this.updateData = function(object, status) {

console.log(object.status)
	return $http({
		method: 'PUT',
		url:   'https://api.parse.com/1/classes/questions/' + object.objectId,
		data: {status: status}
	})
}



})


// // Once we have a list of students asking questions in the queue, we need to be able to 
// escalate those questions to show which ones are being handled.

// // We should have created our postData function in our service that takes in a question. 
// In the data section of that $http request, we said: data: {text: question}. Now we want to add another key-value pair to 
// the questions so that they have not only a text attribute, but also a status attribute.

// // Let's do that by just creating a default status of 'red'. We will say new questions have the status of 
// 'red', while questions that are 'being helped' will have a status of 'yellow'.

// // This will make it easy for our filters to know where to show new and old questions.

// // Now that each question will have a default status of 'red', we need to make a way to change that status.

// // - Create a updateData function in our service. It will be similar to the postData however this time we will be using 'PUT'
// // - To updated an object you will need to target it by the objects Id, passing it in as a url parameter.
// // - Create a changeStatus function in the controller that takes in the updateData function from the service.
// // - In your index create a button within your ng-repeat that runs the changeStatus function. This button should change 
// the questions status from 'red' to 'yellow'
// // - Add a filter to the original ng-repeat so that it only shows objects with the status of red
// // - Create a new ng-repeat that filters out only the objects with the status of yellow

// // Now we should be able to create a new question, watch it show up in the new question list, then move it to the 
// 'being helped' or yellow list.


