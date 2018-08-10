$("#submit-suggestion").on('submit', function(e){
    console.log(val.fields);
    e.preventDefault();
    var data = {};
    data.fields = {
      'Name:': $(this).find('#MovieName').val(),
      'Genre(s):': $(this).find('#Genre').val(),
      'Description:': $(this).find('#Description').val(),
      'Rotten Tomatoes Score:': $(this).find('#RottenTomatoes').val(),
    };
    console.log(val.fields);
    $.post(`https://api.airtable.com/v0/app4SzizTALXtwnZi/Table%201?api_key=keyzo1ZJc5pLQgBEq`,
    data, function () {
      // On Success
      console.log(val.fields);
      $("#submit-suggestion").html(`<h2>Thanks for your suggestion!</h2>`);
    }
  );
});
