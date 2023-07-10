var intervalId = setInterval(finder, 1000);

function finder() {
  console.log("finder started");
  if ($("#dialog").length > 0) {
    $('.eom-button-row').find('.yt-spec-button-shape-next').eq(1).click();
    $('#dialog').on('click', '.yt-spec-button-shape-next:eq(1)', function() {
      console.log("accepting");
    });
  } else {
    clearInterval(intervalId);
    console.log("finder stopped");
  }
}
