var app = angular.module('parseQ');


app.controller('parseController', function($scope, parseService) {

$scope.userQuestion = function() {
	parseService.postData($scope.query).then(function(result) {
		console.log(result.data)
			$scope.getParseData()
			$scope.query = '';

	})
}

	$scope.getParseData = function() {

  parseService.getData().then(function(response){
		console.log(response)
			$scope.messages = response.data.results;

  })

}
$scope.getParseData()

$scope.updateStatus = function(object) {
console.log(object)
object.status = 'yellow'
	parseService.updateData(object, object.status).then(function(results) {
		$scope.getParseData();

	})

}




})