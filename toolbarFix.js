/*! toolbarFix 06-01-2015 */
/**
 * Created by yangyiming on 14-9-28.
 * 相比较jquery.pin 配置比较繁琐 但是这个插件并需要容器,你可以放置到任意的位置
 * @param position 对元素进行定位(只要提供一个位置,根据这个偏移值决定滚动条滚动到什么位置,元素置顶)
 * @param offset 对已经定位的元素 相对于顶部 初始一个偏移值
 * @param selector 锚点
 * @param section 锚点对应定位的模块
 * @param activeClass 锚点激活的样式
 */




(function (plugin, window) {
    var factory = function(){
        return plugin(window);
    }
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory();
    }
}(function(window){
    var defaults = {
        position:100, //配置滚动条滚动到的极限值 对该目标进行fixed
        offset:0, //对已经定位的元素 相对于顶部 初始一个偏移值
        selector:"",
        section:".section",
        activeClass:"active"
    };
    var pluginName = "fixed";
    var Plugin = (function() {
        function Plugin(element, options) {
            this.element = element;
            this.options = $.extend(true, {}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }
        return Plugin;
    })();
    Plugin.prototype.init = function(){
        var that = this;
        this.position = this.options.position;
        this.offset = this.options.offset;
        this.selector = this.options.selector;
        this.menuItems = this.options.selector === "a" ? $(this.element) .find('li a') : $(this.element).find('li'), // Navigation lists or links

            this.eventHandle();
    }
    Plugin.prototype.eventHandle = function(){
        var that = this;
        $(window).bind("scroll",function(){
            var scrollTop = $(this).scrollTop();
            if(scrollTop >= that.position){
                $(that.element).addClass("fixed");
                that.targetFixed(that.element);
            } else {
                $(that.element).removeClass("fixed");
                that.addTargetTop(that.element,scrollTop);
            }
            if(typeof  that.selector == "string"){
                that.enableLink(scrollTop);
            }
        })
    }
    Plugin.prototype.targetFixed = function(element){
        var that = this;
        $(element).css({
            top:that.offset
        })
    }

    //滚动的时候联动导航
    Plugin.prototype.enableLink = function(scrollTop){
        var that = this;
        that.menuItems.removeClass(that.options.activeClass);
        $(that.options.section).each(function () {
            var top = $(this).offset().top - $(that.element).height();
            bottom = $(this).outerHeight(true) + top;
            if ((scrollTop >= top) && (scrollTop <= bottom)) {
                if ( that.selector === "a") {
                    $(that.element).find('li a[href~="#' + this.id + '"]').addClass(that.options.activeClass);
                } else {
                    $(that.element).find('li a[href~="#' + this.id + '"]').parent().addClass(that.options.activeClass);
                }
            }
        });
    }
    Plugin.prototype.addTargetTop = function(element,value){
        var topValue = this.position - value;
        $(element).css({
            top:topValue
        })
    }
    return $.fn[pluginName] = function(options) {
        return this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

},this));
