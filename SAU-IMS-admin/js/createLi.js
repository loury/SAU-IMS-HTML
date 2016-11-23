$(function() {
  function createEle(ele){
    var cla = arguments;
    ele = document.createElement(ele);
    eleJq = $(ele);
    //根据传入类的个数，
    for(var i=1;i<cla.length;i++){
      eleJq.addClass(cla[i]);
    }//for
    return ele;//或是返回一个数组，包括dom对象和jq对象
  }//createEle
  function createList(title, text, time1, i) {
    var annousBox = document.getElementById("announcementList");
    var li = document.createElement("li");

    var content = createEle("div","fll","content");
    content.id = i;

    content.onclick=function(i) {
      clear();
    }
    
    var token = createEle("div","fll","token");

    var sender = createEle("h1","fll","sender");
    sender.innerHTML=title;

    var announcementTitle = createEle("h3","fll","announcementTitle");
    announcementTitle.innerHTML=text;

    var checkbox = createEle("div","flr","rlt","checkbox"); 
    var input = document.createElement("input");
    input.type="checkbox";
    input.name="checkbox";
    checkbox.appendChild(input);

    var time = createEle("div","rlt","time");
    time.innerHTML=time1;

    content.appendChild(token);
    content.appendChild(sender);
    content.appendChild(announcementTitle);
    content.appendChild(checkbox);
    content.appendChild(time);
    li.appendChild(content);
    annousBox.appendChild(li);
  }//createList
  a = new Array(3)
  for(i=0;i<3;i++) {
    a[i]=i+1;
  }//for
  var amount=10;
  var title ="校社联";
  var text ="校社联风刀霜剑发货单";
  var time ="2016年10月31日";
  for(i=0;i<amount;i++) {
    createList(title, text, time, i);
  }//for

  function clear() {
    alert("djhfd");
    var announcementList = document.getElementById("announcementList");
    var childs = announcementList.childNodes;
    for(var i = childs.length - 1; i >= 0;i--) {
      announcementList.removeChild(childs[i]);
    }//for
  }//clear


})