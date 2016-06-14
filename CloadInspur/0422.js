/**
 * Created by chidao on 2016/5/10.
 */
/**
 * Created by chidao on 2016/5/4.
 */
$(function(){
    //导航hover下拉菜单
    $(".four").hover(function(){
        var dropdown_menu=$(this).children(".contain_menu");
        dropdown_menu.addClass("db");
    }, function () {
        var dropdown_menu=$(this).children(".contain_menu");
        dropdown_menu.removeClass("db");

    });
    //$(".contain_menu").hover(function () {
    //    $(this).addClass('db');
    //}, function () {
    //    $(this).removeClass('db');
    //
    //});

});