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
			var height = document.body.clientHeight;
		
			function setHeight(ele, h){
				ele.css({height : h + 'px'}); 
			}

			function  handleHeight(mode, ele){
				switch(mode){
					case 'full': //全屏
						setHeight(ele, height);
						break;
					case 'header': //显示头部，不显示主菜单
						setHeight(ele, height - heightHeader);
						break;
					case 'menu': //显示菜单，不显示头部
						setHeight(ele, height - heightMenu);
						break;
					case 'mid': //显示菜单和头部
						setHeight(ele, height - heightMenu - heightHeader);
						break;	
					default:
						setHeight(ele, height);	
				}
			}

			window.onresize = function(){//浏览器改变大小时自适应改变高度		
				resizing = true;	
				height = document.body.clientHeight;			
				var items = document.querySelectorAll('.lee-box');			
				var i = items.length;
				while (i--){
					var e = angular.element(items[i]);
					handleHeight(e.attr('box'), e);
				}	
			}

			handleHeight(iAttrs.box, iElement);
		}
	}
})


