/**
 * Created by chidao on 2016/5/11.
 */

    $(function(){
        var wrap =$('.contain_1');
        var imgs = wrap.find('.contain_1_1 ul >li');
        var len=imgs.length;
        var tabTime=100;
        var outTime=4000;
        var select='select';
        var num =0 ;
        var interval;
        var type = 'click';
        var btns=wrap.find('.d-fs-control ul>li');
        btns.bind(type,function(){
            var _this=$(this);
            _this.addClass('select').siblings ().removeClass('select');
            num=_this.prevAll().length;
            imgs.stop().eq(num).fadeTo(tabTime,1) ;
            imgs.not(':eq('+num+')').filter(':visible').fadeOut(tabTime) ;
            return false;
        }).eq(num).trigger(type);
        var interFunc=function(){
            num=(num+1)%len;
            btns.eq(num).triggerHandler(type);
        }
        wrap.bind('mouseover',function(){
            clearInterval(interval);
        }).bind('mouseout',function(){
            interval=setInterval(interFunc,outTime)
        })

    })
