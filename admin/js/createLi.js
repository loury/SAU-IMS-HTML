$(function() {
  var limit = '{"l":"0","r":"10"}';
  var srcOfHead = "./view/admin/img/头像logo.png";
  var sender = "校社联";
  //生成
  $.post("./index.php?c=AdminMain&a=getSendNotices", {"limit": limit}, function(data) {
    eval("data =" + data);
    for (var i = 0; i < 10; i++) {
      createList(data[i]['title'], data[i]['time'], data[i]['id']);
    }
    var firstId = data[0]['id']; 
    var firstDom = document.getElementById(firstId);
    checkedStyle(firstDom);
    //生成正文内容
    $.post("./index.php?c=AdminMain&a=getNoticeById", {"nid": firstId}, function(data) {
      eval("data = " + data);
      createRight(srcOfHead, data['name'], data['time'], data['title'], data['text'],data['id']);
    })
  }); 



  //删除
  var delist = document.getElementById("deleteimg");
  delist.onclick = clearChecked;

  // 搜索
  var searchobj = document.getElementById("searchbtn");
  searchobj.onclick = search;

  //刷新
  var refreshobj = $("#refresh");
  refreshobj.click(function(){
    refresh();
  })

  //新建
  var newObj = $("#new1");
  newObj.click(function(){
    newNotice();
  })

  // 滚轮事件
  var boxDom = document.getElementById("listContainer");
 var boxJq = $("#listContainer");
  boxJq.scroll(function() {
      var limitL = document.getElementById("announcementList").childNodes.length;
      limit = '{"l":"' + limitL + '","r":"' + (limitL + 10) + '"}';
      // alert(limit)
      var scrollTop = boxDom.scrollTop;
      var max = boxDom.scrollHeight - boxDom.offsetHeight;
      if (scrollTop >= max) {
        $.post("./index.php?c=AdminMain&a=getSendNotices",{"limit": limit}, function(data) {
          eval("data =" + data);
          if (data.length>0) {
            for (var i = 0; i < 10; i++) {
              createList(data[i]['title'], data[i]['time'], data[i]['id']);
            }
          }
          else{
            createList("没有更多的公告了", "", "");
            $("#listContainer").unbind('scroll')
          }
        });
      }
  })
  
})