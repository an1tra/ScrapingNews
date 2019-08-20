$(document).ready(function() {
  
  var scrapedArticle = $(".scrapedArticles");

  $(".clear").on("click", clearDatabase);

  



  
  function clearDatabase() {
    $.get("api/clear")
      .then(function(data) {
        scrapedArticle.empty();
        // initPage();
        location.reload();
      });
  }
});

