/**
 * Created by CC on 2016/1/28.
 */

    function GetEle (){

}
GetEle.prototype = {
    $id:function(id){
        return document.getElementById(id);
    },
    $tag:function(tag){
        return document.getElementsByTagName(tag);
    },
    //template模板
    getTemplate:function(id,data){
        return template(id,data);
    },
    //formataString 替换
    formateString: function(str, data) {
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            return data[key]
        });
    },
    //绑定模板，直接获取拼接好的模板，目标位置里面的innerHTML = html;
     bindArttemplate:function(str,data){
    var render = template.compile(str);
    var html = render(data);
    return html;
},
    //target 里面有则覆盖，无则添加
    extend:function(target,source){
        for(var i in source){
            target[i] = source[i];
        }
        return target;
    },
    //将url里面？后面的参数转化成json（键值对）的格式，并输出；
    querystring:function(){
        var str = window.location.search.substring(1);//获取查询字符串里面的值"id=1&name=location"
        var arr = str.split('&');//以&为界把字符串分割成数组；id=1,name=location;
        console.log(str);
        var json = {};//定义一个对象来存放键值对；
        //遍历数组
        for(var i=0;i<arr.length;i++){
            var c = str.indexOf('=');//获取等号的位置,然后可以截取字符串，构成键值对的形式
            if(c==-1)continue;//如果（indexof）没有找到匹配的内容，返回值为-1，则继续循环;
            var d = arr[i].substring(0,c)//截取等号前的参数名称，分别是id和name；
            var e = arr[i].substring(c+1)//截取等号后的参数，分别为1和location；
            json[d]=e;//将参数和值拼接成键值对；
        }
        return json;
    }
}

var $$ = new GetEle();
