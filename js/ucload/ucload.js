/**
 * Created by chidao on 2016/5/4.
 */
$(function(){
    //导航hover下拉菜单
    $(".sub-menu").hover(function(){
        var dropdown_menu=$(this).children(".drop-down-menu");
        dropdown_menu.addClass("db");
    }, function () {
        var dropdown_menu=$(this).children(".drop-down-menu");
        dropdown_menu.removeClass("db");
    });
  //$(".drop-down-menu").hover(function () {
  //    $(this).addClass('db');
  //}, function () {
  //    $(this).removeClass('db');

  //});

});