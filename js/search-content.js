    $(document).keydown(function() {
        if (event.keyCode == 191) {
            $('#searchContent').focus();
            return false;
        }
    })
    function searchContent() {
      // Declare variables
      var input, filter, ul, li, a, i;
      input = document.getElementById('searchContent');
      filter = input.value.toLowerCase();
      ul = document.getElementById("section-elements");
      li = ul.getElementsByClassName('card');

      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByClassName("card-title")[0];
          b = li[i].getElementsByClassName("card-text")[0];

          if (a.innerHTML.toLowerCase().indexOf(filter) > -1 || b.innerHTML.toLowerCase().indexOf(filter) > -1) {
              li[i].parentElement.style.display = "";
          } else {
              li[i].parentElement.style.display = "none";
          };
      }
    }
