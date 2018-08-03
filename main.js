//This url is from airtable from the Authentication section
var airtable_list_url = 'https://api.airtable.com/v0/app4SzizTALXtwnZi/Table%201?api_key=keyzo1ZJc5pLQgBEq'

var cardTemplate = function(pictures, movieName, genre, rot, des ){
    return  `
    <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="${pictures}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${movieName}</h5>
            <p class="card-text"> ${genre}</p>
            <p class="card-text"> ${rot}</p>
            <p class="card-text"> ${des}</p>
          
            </div>
        </div>
    </div>
      `;
}


// This is where we get the JSON data from Airtable!
$.getJSON( airtable_list_url, function( data ) {
    var items = [];
    $.each( data.records, function( key, val ) {
      console.log(val.fields)
      var movieName = val.fields['movieName'];
      var genre = val.fields['genre'];
      var des = val.fields['des']
      var rot = val.fields['rot']
      var pictures = val.fields['pictures'] ? val.fields['pictures'][0].url : null;
      var html = cardTemplate( movieName, genre, pictures, rot, des);
      items.push(html);

    });
    $(".list-view").append(items.join(''));
  });
  
