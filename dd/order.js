window.openDialog = function(id = null) {
  id = id || 'popout_order'
  $('#pop_bg_Mask').show();
  $('#' + id).show();
}
window.closeDialog = function(id = null) {
  id = id || 'popout_order'
  $('#' + id).hide();
  $('#pop_bg_Mask').hide();
};
function genSubmitFormEvent(form) {
  // this is the id of the form
  form.submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    const url = location.protocol + '//oad' + Math.floor(Math.random() * 6) + '.tswxjc.cn' + form.attr('action') + '?a=100'
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(), // serializes the form's elements.
      success: function(data, textStatus, jqXHR) {
        if(data.is_valid) {
          window.success_js()
          console.log("run success_js successful")
        }
        closeDialog()
        if ($.alert) {
          $.alert({
            title: '官方提醒',
            content: '恭喜！您的申请资料已经成功录入官网，客服人员会在24小时内与您取得联系。',
            scrollToPreviousElement: false,
            scrollToPreviousElementAnimate: false,
            buttons: {
              ok: {
                text: '确认',
                btnClass: 'btn-green',
              },
            }
          })
        } else {
          alert("恭喜！您的申请资料已经成功录入官网，客服人员会在24小时内与您取得联系。")
        }
      },
      error: function(jqXHR, textStatus, errorThrown) {
        if(jqXHR.status === 400) {
          alert(JSON.parse(jqXHR.responseText).msg)
        } else {
          confirm(textStatus + ":" + errorThrown + ' body: ' + jqXHR.responseText)
        }
      }
    });
  });
}
$().ready(function() {
  // 弹窗
  if(document.getElementById("popout_form")) {
    //genSubmitFormEvent($("#popout_form"))
  }
  // 普通
  if(document.getElementById("form")) {
    //genSubmitFormEvent($("#form"))
  }
  $('[cad="cad-custom-form"]').each(function() {
    //genSubmitFormEvent($(this))
  })
});
// start: agreement
function authorization() {
  $(".authorizationTop").show()
}

function authorizationClose() {
  $(".authorizationTop").hide()
}
// end: agreement
// form validator
$("input[name=realName]").bind("input propertychange change", function (event) {
  if ($(this).val()) {
    $(this).parent().parent().find(".showname").hide()
  } else {
    $(this).parent().parent().find(".showname").show()
  }
});
$("input[name=mobile]").bind("input propertychange change", function (event) {
  if ($(this).val().length === 11) {
    $(this).parent().parent().find(".showtel").hide()
  } else {
    $(this).parent().parent().find(".showtel").show()
  }
});
$("input[name=address]").bind("input propertychange change", function (event) {
  if ($(this).val().length >= 4) {
    $(this).parent().parent().find(".showaddress").hide()
  } else {
    $(this).parent().parent().find(".showaddress").show()
  }
});
$('img').click(function() {
  document.getElementsByName('mflq')[0].scrollIntoView()
})