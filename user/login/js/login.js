
$(function() {
  //登录
  // document.getElementById("button").onclick=login;

  // 清除对应输入框的内容
  $("#clearName").click(function() {
    $("#loUsername").val("");
    $("#clearName").css({
      "display": "none"
    })
  })
  $("#clearPwd").click(function() {
    $("#loPwd").val("");
    $("#clearPwd").css({
        "display": "none"
      })
  })
  $("#clearVerification").click(function() {
    $("#loVerification").val("");
    $("#clearVerification").css({
        "display": "none"
      })
  });

  // 控制明文密码的显示与隐藏
  $("#showPwd").click(function() {
    var pwdType = document.getElementById("loPwd").type;
    if (pwdType == "password") {
      document.getElementById("loPwd").type = "text";
      document.getElementById("showPwd").src = "img/睁眼logo.png";
    } else {
      document.getElementById("loPwd").type = "password";
      document.getElementById("showPwd").src = "img/闭眼logo.png";
    }
  });

  // 控制清除图标的显示与隐藏
  $('#loUsername').bind('input propertychange', function() {
    if ($('#loUsername').val() != "") {
      $("#clearName").css({
        "display": "block"
      })
    } else {
      $("#clearName").css({
        "display": "none"
      })
    }
  });
  $('#loPwd').bind('input propertychange', function() {
    if ($('#loPwd').val() != "") {
      $("#clearPwd").css({
        "display": "block"
      })
    } else {
      $("#clearPwd").css({
        "display": "none"
      })
    }
  });
  $('#loVerification').bind('input propertychange', function() {
    if ($('#loVerification').val() != "") {
      $("#clearVerification").css({
        "display": "block"
      })
    } else {
      $("#clearVerification").css({
        "display": "none"
      })
    }
  });
  
/*以上是正常登录操作*/

  // 点击更换验证码,没成功？？？
  $("#changeVerification").click(function(){
    // alert("djididi")
    $("#changeVerification").src = "code.php?t="+Math.random(); //增加一个随机参数，防止图片缓存
  })

})
  /////////////////////////////////////
  // 新增 9-11,15-17,21-23，38-71行的代码// //
  ///////////////////////////////////////
