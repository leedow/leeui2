/**
 * 路由配置，仅用于演示
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-03-11 16:27:21
 * @version $Id$
 */
 var app = angular.module('app', ['leeui']);
/*
 * 配置路由
 */
app.config(['$routeProvider', function($routeProvider){			 
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: ''
	})
	.when('/buttons', {
		templateUrl: 'views/buttons.html',
		controller: ''
	})
	.when('/list', {
		templateUrl: 'views/list.html',
		controller: ''
	})
	.when('/list-full-width', {
		templateUrl: 'views/list/list-full-width.html',
		controller: ''
	})
	.when('/list-with-title', {
		templateUrl: 'views/list/list-with-title.html',
		controller: ''
	})
	.when('/list-box', {
		templateUrl: 'views/list/list-box.html',
		controller: ''
	})
	.when('/list-with-icons', {
		templateUrl: 'views/list/list-with-icons.html',
		controller: ''
	})
	.when('/input', {
		templateUrl: 'views/form/input.html',
		controller: ''
	})
	.when('/form', {
		templateUrl: 'views/form/form.html',
		controller: ''
	})
}])
