function getContent() {
  var pageName = $('#section-elements').attr('name');
  var loadFile = "data/" + pageName + ".json";

  $.ajaxSetup();
  // FETCHING DATA FROM JSON FILE
  $.getJSON(loadFile, function (data) {
    var item = '';
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {

      //CONSTRUCTION OF ROWS HAVING
      // DATA FROM JSON OBJECT
      // console.log(value.name);
      item += '<div class="col-xl-3 col-lg-4 col-md-6 col-12">';
      item += '<div class="card">';
      item += '<div class="card-header d-flex">';
      item += '<img loading="lazy" src="img/' + value.logo + '" height="70" class="rounded-circle" alt="' + value.logo + '">';
      item += '<div class="ms-4 d-flex flex-column justify-content-between">';
      item += '<h4 class="card-title">' + value.name + '</h4>';
      item += '<a class="card-subtitle mb-2 text-decoration-none" href="' + value.website + '" target="_blank"><img class="me-1" height="12" src="img/socials/link.svg">Website</a>';
      item += '</div></div>';
      item += '<div class="card-body"><div>';
      item += '<p class="card-text">' + value.description + '</p>';
      item += '<p class="text-muted text-uppercase small semi-bold mb-2">Socials</p>';
      item += '<ul class="list-inline m-0">';
      $.each(value.socials, function (key, socials) {
        // console.log(socials);
        if (socials == "") {
          // console.log(key + ' is empty')
        } else {
          item += '<li class="list-inline-item"><img class="me-1" height="12" src="img/socials/' + key +'.svg"><a class="text-capitalize me-4 text-decoration-none" href="' + socials + '" target="_blank">'+ key + '</a></li>';
        }
      })
      item += '<ul>';
      item += '</div></div>';
      item += '<div class="card-footer">';
      item += '<p class="text-muted text-uppercase small semi-bold mb-2">Networks</p>';
      $.each(value.network, function (key, network) {
        // console.log(network);
        item += '<span class="badge bg-label me-2 text-capitalize"><img class="me-1" height="12" src="img/networks/' + network +'.svg">' + network + '</span>';
      })
      item += '</div></div></div>';
    });

    //INSERTING ROWS INTO TABLE
    $('#section-elements').html(item);
  });
}
