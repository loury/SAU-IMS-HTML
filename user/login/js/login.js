
  function login() {//登录，post函数
  var xmlhttp;
  var userName = document.getElementById("lo_username");
  var password = document.getElementById("loPwd");

  // if (userName.value == "" || password.value == "") {
  //   document.getElementById("tips").innerHTML = "账号或密码不能为空";
  //   return;
  // }

  if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
  } else {
      xmlhttp = new ActiveXObject();
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var json = xmlhttp.responseText;
      var login = eval("("+json+")");
      if(login.success){
        checked();
        location.href=login.url;
      }else{
        password.value="";
        document.getElementById("tips").innerHTML=login.message;
      }
    }
  }
  xmlhttp.open("POST", "./index.php?c=LoginAdmin", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send("userName=" + userName.value + "&password=" + password.value);
}
$(function(){
//登录
document.getElementById("button").onclick=login;

$("#clearName").click(function(){
  $("#loUsername").val("");
})
$("#clearPwd").click(function(){
  $("#loPwd").val("");
})

})
