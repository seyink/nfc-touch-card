function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight) + "px";
}
function onload() {
    auto_grow(document.getElementById("result"));
}
function generate() {
    mz = document.getElementById("output").value;
    sjh = document.getElementById("sjh").value;
    qq = document.getElementById("qq").value;
    wx = document.getElementById("wx").value;
    //wyy = document.getElementById("wyy").value;
    dy = document.getElementById("dy").value;
    ks = document.getElementById("ks").value;
    img = document.getElementById("img").value;
    if (mz.length == 0 || sjh.length == 0 || qq.length == 0 || wx.length == 0 || dy.length == 0 || ks.length == 0 || img.length == 0)
        return;
    layer.open({
    content: '请确保每项信息都无误,生成写入后无法修改！建议生成后复制到浏览器粘贴访问测试。<br>以上填写的信息除(称呼)含有中文,其他都不含有,若其他信息含有中文,请联系运营人员,切勿直接缩短写入！'
    ,btn: '明白！'
    ,btn: ['立即生成', '再看看']
    ,yes: 
        function(){
            result = `https://nfc.sey.ink/?mz=${mz}&sjh=${sjh}&qq=${qq}&wx=${wx}&dy=${dy}&ks=${ks}&img=${img}`;
            document.getElementById("result").value = result;
            auto_grow(document.getElementById("result"));
                var e = document.getElementById("result");
                e.select(); 
                document.execCommand("Copy"); 
                    layer.open({
                        content: '生成完毕,已复制到剪贴板！'
                        ,time: 2
                        ,skin: 'msg'
                    });
        }
    });
}

function suo() {
        var text = document.getElementById("result").value;
        if (text.length<1){
            layer.open({
                      content: '你还没生成哦！！'
                      ,time: 2
                      ,skin: 'msg'
            });
        }else {
        var e = document.getElementById("result");//
        e.select(); //选择对象
        document.execCommand("Copy"); //执行浏览器复制命令
        layer.open({
                      content: '复制成功！！正在转跳缩短页面'
                      ,time: 2
                      ,skin: 'msg'
        });
        setTimeout(function(){ window.location='https://suo.sey.ink/'; }, 1000);
    }
}

function dyjc() {
  layer.open({
    content: '抖音主页链接获取方法:打开抖音→点击底部"我"→点击右上"三条线"→"更多功能"→"我的二维码"→右上角"分享"按钮->"复制链接"后得到链接,请填写完整链接。<br><br>可直接填写作品链接！(<span style="color: #dc3545;">切勿填写中文与空格</span>)'
    ,btn: '明白！'
  });
}

function ksjc() {
  layer.open({
    content: '快手主页链接获取方法:打开快手→点击右上"三条线"→"头像"→右上角"分享"按钮→"复制链接"后得到链接,请填写完整链接。<br><br>可直接填写作品链接！(<span style="color: #dc3545;">切勿填写中文与空格</span>)'
    ,btn: '明白！'
  });
}

function wyyjc() {
  layer.open({
    content: '获取教程:网易云APP主页→左上"三条线"→"头像"→右上"三点"→"分享"→"复制链接"后得到如下链接<br>https://y.music.163.com/m/user?id=<span style="color: #28a745;">371874132</span><br><br>此处填写绿色部分即可！(<span style="color: #dc3545;">切勿填写中文与空格</span>)'
    ,btn: '明白！'
  });
}

function fs() {
    var text = document.getElementById("result").value;
        if (text.length<1){
            layer.open({
                      content: '你还没生成哦！！'
                      ,time: 2
                      ,skin: 'msg'
            });
        }else {
        var e = document.getElementById("result");//
        e.select(); //选择对象
        document.execCommand("Copy"); //执行浏览器复制命令
        layer.open({
                      content: '复制成功！！正在转跳到QQ聊天窗口..'
                      ,time: 2
                      ,skin: 'msg'
        });
        setTimeout(function(){ window.location='mqqwpa://im/chat?chat_type=wpa&uin=67141988&version=1&src_type=web&web_src=baidu.com'; }, 1000);
    }
}