$("#submit-suggestion").on('submit', function(e){
    //console.log("testing");
    e.preventDefault();

    var data = {};
    data.fields = {
      'MovieName': $(this).find('#MovieName').val(),
      'Genre(s)': $(this).find('#Genre').val(),
      'Rating': $(this).find('#Rating').val(),
      'Description': $(this).find('#Description').val(),
      'RottenTomatoes': $(this).find('#RottenTomatoes').val(),
      'Photos': [
        {
          'url': $(this).find('#Photos').val()
        }
      ],
    };
    $.post(`https://api.airtable.com/v0/app4SzizTALXtwnZi/Table%201?api_key=keyzo1ZJc5pLQgBEq`,
    data, function () {
      $("#submit-suggestion").html(`<h2>Thanks for your suggestion!</h2>`);
    }
  );
});
