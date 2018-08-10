//This url is from airtable from the Authentication section
var airtable_list_url = 'https://api.airtable.com/v0/app4SzizTALXtwnZi/Table%201?api_key=keyzo1ZJc5pLQgBEq'

var cardTemplate = function(photos, MovieName, Genre, RottenTomatoes, Description){
    return  `
    <div class="card-deck">
    
        <div class="card">
          <div class="card-body">
          <img class="card-img-top" src="${photos}" style="width:60%">
            <h5 class="card-title">${MovieName}</h5>
            <p class="card-text"> ${Genre}</p>
            <p class="card-text"> ${RottenTomatoes}</p>
            <p class="card-text"> ${Description}</p>
          
            </div>
        </div>
    </div>
      `;
}

// This is where we get the JSON data from Airtable!
$.getJSON( airtable_list_url, function( data ) {
    var items = [];
    $.each( data.records, function( key, val ) {
    console.log(val.fields);
    var photos = val.fields['Photos'][0] ? val.fields['Photos'][0].url : null;
      var moviename = val.fields['MovieName'];
      var genre = val.fields['Genre'];
      var description = val.fields['Description'];
      var rottentomatoes = val.fields['RottenTomatoes'];
      var html = cardTemplate(photos, moviename, genre, rottentomatoes, description);
      items.push(html);

    });
    $(".list-view").append(items.join(''));
  });
  
