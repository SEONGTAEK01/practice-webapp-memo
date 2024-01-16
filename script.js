function saveContent() {
  // Get content
  var content = $(".textArea").val();
  var uniqueValue = $("#uniqueValue").val();

  // Check empty
  if (content.trim() == "") {
    alert("아무 값도 없습니다. 메모를 저장하지 않습니다.");
    return;
  }
  if (uniqueValue.trim() == "") {
    alert("고유값이 없습니다. 메모를 저장하지 않습니다.");
    return;
  }

  // if (uniqueValue.trim() == "") {
  //   alert("고유값이 없습니다. 메모를 불러오지 않습니다.");
  //   return;
  // }

  // Send content to php script
  $.ajax({
    type: "POST",
    url: "save_content.php",
    data: { content: content, uniqueValue: uniqueValue },
    success: function (response) {
      alert(response);
    },
    error: function (error) {
      console.log(error), alert("저장에 실패했습니다. 다시 시도해 주세요.");
    },
  });
}

function loadContent() {
  var uniqueValue = $("#uniqueValue").val();

  // Check empty
  if (uniqueValue.trim() == "") {
    alert("고유값이 없습니다. 메모를 불러오지 않습니다.");
    return;
  }

  $.ajax({
    type: "GET",
    url: "load_content.php",
    data: { uniqueValue: uniqueValue },
    success: function (response) {
      formattedResponse = response.replace(/,/g, "\n");
      $(".textArea").val(formattedResponse);
    },
    error: function (error) {
      console.log(error), alert("메모 불러오기 실패!");
    },
  });
}

function clearContent() {
  $(".textArea").val("");
}
