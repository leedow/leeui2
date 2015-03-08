/**
 * leeui2
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-03-07 19:40:26
 * @version $Id$
 */

var leeui = angular.module('leeui', ['ngRoute'])
/*
 * 配置路由
 */
.config(['$routeProvider', function($routeProvider){			 
	$routeProvider.
	when('/buttons', {
		templateUrl: 'views/buttons.html',
		controller: ''
	})
}])


