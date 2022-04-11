function getContent() {
  var pageName = $('#section-elements').attr('name');
  var toolCount = $('#tool-count');
  var loadFile = "../data/" + pageName + ".json";

  $.ajaxSetup({ cache: false });//Always get the latest version
  // FETCHING DATA FROM JSON FILE
  $.getJSON(loadFile, function (data) {
    var item = '';
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {
      //Get the total number of tools in this section
      toolCount.text(data.length + ' Tools');

      //CONSTRUCTION OF ROWS HAVING
      // DATA FROM JSON OBJECT
      item += '<div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12">';
      item += '<div class="card">';
      item += '<div class="card-header d-flex">';
      item += '<img loading="lazy" src="/img/projects/' + value.logo + '" height="70" class="rounded-circle" alt="' + value.logo + '">';
      item += '<div class="ms-4 d-flex flex-column justify-content-between">';
      item += '<h4 class="card-title">' + value.name + '</h4>';
      item += '<a class="card-subtitle mb-2 text-decoration-none" href="' + value.website + '" target="_blank"><img class="me-1" height="12" src="/img/socials/link.svg">Website</a>';
      item += '</div></div>';
      item += '<div class="card-body"><div>';
      item += '<p class="card-text">' + value.description + '</p>';
      if ($.isEmptyObject(value.socials)) {
      } else {
        item += '<p class="text-muted text-uppercase small semi-bold mb-2">Socials</p>';
        item += '<ul class="list-inline m-0">';
        $.each(value.socials, function (key, socials) {
          if (socials == "") {
          } else {
            item += '<li class="list-inline-item"><img class="me-1" height="12" src="/img/socials/' + key +'.svg"><a class="text-capitalize me-4 text-decoration-none" href="' + socials + '" target="_blank">'+ key + '</a></li>';
          }
        })
      }
      item += '<ul>';
      item += '</div></div>';
      item += '<div class="card-footer">';
      if ($.isEmptyObject(value.network)) {
      } else {
        item += '<p class="text-muted text-uppercase small semi-bold mb-2">Networks</p>';
        $.each(value.network, function (key, network) {
          item += '<span class="badge bg-label me-2 text-capitalize"><img class="me-1" height="12" src="/img/networks/' + network +'.svg">' + network + '</span>';
        })
      }
      item += '</div>';
      if ($.isEmptyObject(value.platform)) {

      } else {
        item += '<div class="card-footer">';
        item += '<p class="text-muted text-uppercase small semi-bold mb-2">Platforms</p>';
        $.each(value.platform, function (key, platform) {
          item += '<span class="badge bg-label me-2 text-capitalize"><img class="me-1" height="12" src="/img/platforms/' + platform +'.svg">' + platform + '</span>';
        })
      }
      item += '</div></div></div>';
    });

    //INSERTING ROWS INTO TABLE
    $('#section-elements').html(item);
  });
}
