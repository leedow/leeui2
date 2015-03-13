/**
 * leeui2
 * @authors leedow (644743991@qq.com)
 * @website http://www.leedow.com
 * @date    2015-03-07 19:40:26
 * @version $Id$
 */
var leeui = angular.module('leeui', ['ngRoute','ngAnimate'])
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
		
			function setHeight(ele, h, z){
				ele.css({height : h + 'px'});
				var m = document.querySelector('.lee-menu-layout');
				if ( m!=null ) {
					angular.element(m).css({'z-index' : z});
				};
			}

			function  handleHeight(mode, ele){
				var  tp = mode.split(' ');

				switch(tp[0]){
					case 'full': //全屏
						setHeight(ele, height, 7777);
						break;
					case 'header': //显示头部，不显示主菜单
						setHeight(ele, height - heightHeader, 7777);
						break;
					case 'menu': //显示菜单，不显示头部
						setHeight(ele, height - heightMenu, 9999);
						break;
					case 'mid': //显示菜单和头部
						setHeight(ele, height - heightMenu - heightHeader, 9999);
						break;	
					default:
						setHeight(ele, height);	
				}

				if (tp[1] != undefined) {
					var h = parseInt(ele.css('height')) - tp[1];
					//console.log(h)
					ele.css({height: h + 'px'});
				};
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
});
//support AMD
if (checkAMD()) {
	define([], function(){
		return leeui;
	});
};

function checkAMD(){
	try{
		if (typeof define == "function") {
			return true;
		};
	} catch(e){
		return false;
	}
	return false;
}


