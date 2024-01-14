function saveContent() {
  // Get content
  var content = $(".textArea").val();

  // Send content to php script
  $.ajax({
    type: "POST",
    url: "save_content.php",
    data: { content: content },
    success: function (response) {
      alert(response);
    },
    error: function (error) {
      console.log(error), alert("저장에 실패했습니다. 다시 시도해 주세요.");
    },
  });
}

function loadContent() {
  $.ajax({
    type: "GET",
    url: "load_content.php",
    success: function (response) {
      formattedResponse = response.replace(/,/g, "\n");
      $(".textArea").html(formattedResponse);
    },
    error: function (error) {
      console.log(error), alert("메모 불러오기 실패!");
    },
  });
}
