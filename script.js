$(document).ready(function () {
  if ($.localStorage.isSet("memo")) {
    $(".textArea").val($.localStorage.get("memo"));
  }

  $(".btn_area").click(function () {
    $.localStorage.set("memo", $("textArea").val());
    alert("저장 되었습니다.");
  });
});
