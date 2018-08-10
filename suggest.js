$("#submit-suggestion").on('submit', function(e){
    //console.log("testing");
    e.preventDefault();

    var data = {};
    data.fields = {
      'MovieName:': $(this).find('#MovieName').val(),
      'Genre(s):': $(this).find('#Genre').val(),
      'Description:': $(this).find('#Description').val(),
      'RottenTomatoes:': $(this).find('#RottenTomatoes').val(),
      'Pictures': [
        {
          'url': $(this).find('#Picture').val()
        }
      ],
    };
    console.log(data.fields);
    $.post(`https://api.airtable.com/v0/app4SzizTALXtwnZi/Table%201?api_key=keyzo1ZJc5pLQgBEq`,
    data, function () {
      // On Success
      console.log(val.fields);
      $("#submit-suggestion").html(`<h2>Thanks for your suggestion!</h2>`);
    }
  );
});
