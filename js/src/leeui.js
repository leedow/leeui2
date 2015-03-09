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
	}).
	when('/list', {
		templateUrl: 'views/list.html',
		controller: ''
	})
}])
/*
 * 配置适应高度的指令，参数为full时全屏，参数为header时只显示头部
 * 参数为mid时显示头部和菜单，参数为menu时只显示菜单
 */
.directive('box', function(){
	return {
		link: function(scope, iElement, iAttrs){
			var heightHeader = document.querySelector('.lee-header')?
				document.querySelector('.lee-header').offsetHeight:0;
			var heightMenu = document.querySelector('.lee-menu-layout')?
				document.querySelector('.lee-menu-layout').offsetHeight:0;
			var height = document.body.offsetHeight;
			
			function setHeight(h){
				iElement.css({height : h + 'px'}); 
			}

			//alert(iAttrs.box);
			switch(iAttrs.box){
				case 'full': //全屏
					setHeight(height);
					break;
				case 'header': //显示头部，不显示主菜单
					setHeight(height - heightHeader);
					break;
				case 'menu': //显示菜单，不显示头部
					setHeight(height - heightMenu);
					break;
				case 'mid': //显示菜单和头部
					setHeight(height - heightMenu - heightHeader);
					break;	
				default:
					setHeight(height);	
			}
		}
	}
})


