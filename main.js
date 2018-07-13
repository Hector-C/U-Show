//This url is from airtable from the Authentication section
var airtable_list_url = 'https://api.airtable.com/v0/app4SzizTALXtwnZi/Table%201?api_key=keyzo1ZJc5pLQgBEq'

// This is were we get the JSON data from Airtable
$.getJSON( airtable_list_url, function( data ) {
    var items = [];
    $.each( data.records, function( key, val ) {
        console.log(val.fields)
        items.push(`<h2>${val.fields['Name']}</h2>`);
    });
    $(".list-view").append(items.join(''));
});