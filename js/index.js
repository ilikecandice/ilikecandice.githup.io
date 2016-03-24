/*
* @Author: CC
* @Date:   2016-02-09 22:48:03
* @Last Modified by:   CC
* @Last Modified time: 2016-02-15 17:31:06
*/

'use strict';
$(function(){
  // var search = new Search();
  //  search.bindEvents();
  //  $$.$id('search_input').onclick = function(){
  //     // this.val('');
  //     alert(11);
  //   }
// 网站导航部分
    $$.$id('webSearch').onmouseenter = function(){
    $$.$id('Nav').style.display = 'block';
    }
    $$.$id('webSearch').onmouseleave = function(){
    $$.$id('Nav').style.display = 'none';
    }
    $$.$id('APK_load').onmouseenter = function(){
    $$.$id('childrenItem').style.display = 'block';
    }
    $$.$id('APK_load').onmouseleave = function(){
    $$.$id('childrenItem').style.display = 'none';
    }
    $$.$id('shopWap').onmouseenter = function(){
    $$.$id('childrenitem').style.display = 'block';
    }
    $$.$id('shopWap').onmouseleave = function(){
    $$.$id('childrenitem').style.display = 'none';
    }

});
