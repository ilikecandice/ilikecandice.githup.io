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
    //templateģ��
    getTemplate:function(id,data){
        return template(id,data);
    },
    //formataString �滻
    formateString: function(str, data) {
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            return data[key]
        });
    },
    //��ģ�壬ֱ�ӻ�ȡƴ�Ӻõ�ģ�壬Ŀ��λ�������innerHTML = html;
     bindArttemplate:function(str,data){
    var render = template.compile(str);
    var html = render(data);
    return html;
},
    //target �������򸲸ǣ��������
    extend:function(target,source){
        for(var i in source){
            target[i] = source[i];
        }
        return target;
    },
    //��url���棿����Ĳ���ת����json����ֵ�ԣ��ĸ�ʽ���������
    querystring:function(){
        var str = window.location.search.substring(1);//��ȡ��ѯ�ַ��������ֵ"id=1&name=location"
        var arr = str.split('&');//��&Ϊ����ַ����ָ�����飻id=1,name=location;
        console.log(str);
        var json = {};//����һ����������ż�ֵ�ԣ�
        //��������
        for(var i=0;i<arr.length;i++){
            var c = str.indexOf('=');//��ȡ�Ⱥŵ�λ��,Ȼ����Խ�ȡ�ַ��������ɼ�ֵ�Ե���ʽ
            if(c==-1)continue;//�����indexof��û���ҵ�ƥ������ݣ�����ֵΪ-1�������ѭ��;
            var d = arr[i].substring(0,c)//��ȡ�Ⱥ�ǰ�Ĳ������ƣ��ֱ���id��name��
            var e = arr[i].substring(c+1)//��ȡ�Ⱥź�Ĳ������ֱ�Ϊ1��location��
            json[d]=e;//��������ֵƴ�ӳɼ�ֵ�ԣ�
        }
        return json;
    }
}

var $$ = new GetEle();
