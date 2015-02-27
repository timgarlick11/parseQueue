var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
	return {
		request: function (config) {
			config.headers = {'X-Parse-Application-Id': 'sG69R7d7icgrIeq4NRXXYJelV6zMcGjXLsWzugYH', 'X-Parse-REST-API-Key': 'pSDp1DgeU2vcjraM5CJIuRSWH6XmJCpIgeIPcLWP'};
			return config;
		}
	};
});