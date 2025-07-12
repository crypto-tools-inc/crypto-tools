// Vanilla JS
document.addEventListener("keydown", async function (event) {
  if (event.keyCode === 191) {
    event.preventDefault();
    const modal = document.getElementById("searchModal");
    if (modal) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(modal);
      if (modal.classList.contains("show")) {
        bsModal.hide();
      } else {
        bsModal.show();
        // Focus handled by shown.bs.modal event below
      }
    }
    return false;
  }
});

// Focus search bar when modal is fully shown
document.getElementById("searchModal").addEventListener("shown.bs.modal", async function () {
  const modalInput = document.getElementById("searchModalInput");
  if (modalInput) modalInput.focus();
});

document.getElementById("searchModalInput").addEventListener("keyup", async function (event) {
  const query = event.target.value.trim();
  if (query.length === 0) {
    await getPopular();
    return;
  }
  const { data, error } = await client.from("tools").select("*").ilike("name", `%${query}%`).order("upvotes", { ascending: false }).limit(8);
  if (data) {
    let content = `<p class="small text-muted text-uppercase mb-1">Search results</p>`;
    if (data.length === 0) {
      content += `<li class="list-group-item text-center text-muted">No results found.</li>`;
    } else {
      data.forEach((item) => {
        content += `
        <li class="d-flex list-group-item list-group-item-action">
          <img loading="lazy" src="${bucketURL + item.logo}" height="48" width="48" class="rounded-5 card-logo" alt="${item.logo}">
          <div class="ms-4 d-flex flex-column justify-content-between">
            <p class="card-title">${item.name}</p>
            <p class="card-text small">${item.description}</p>
          </div>
        </li>
        `;
      });
    }
    searchResults.innerHTML = content;
  }
  if (error) {
    console.log(error);
  }
});

function searchContent() {
  // Declare variables
  var input = document.getElementById("searchContent");
  var filter = input.value.toLowerCase();
  var ul = document.getElementById("section-elements");
  var li = ul.getElementsByClassName("card");

  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByClassName("card-title")[0];
    var b = li[i].getElementsByClassName("card-text")[0];

    if (a.innerHTML.toLowerCase().indexOf(filter) > -1 || b.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li[i].parentElement.style.display = "";
    } else {
      li[i].parentElement.style.display = "none";
    }
  }
}

// Run getPopular on page load
document.addEventListener("DOMContentLoaded", async function () {
  await getPopular();
});

const searchResults = document.getElementById("searchResults");
async function getPopular() {
  console.log("Fetching popular tools...");
  const { data, error } = await client.from("tools").select("*").order("upvotes", { ascending: false }).range(0, 4);
  if (data) {
    let content = `
    <p class="small text-muted text-uppercase mb-1">Most upvoted</p>
    `;
    data.forEach((item) => {
      content += `
      <a href="${item.website}" class="d-flex list-group-item list-group-item-action" target="_blank">
          <img loading="lazy" src="${bucketURL + item.logo}" height="48" width="48" class="rounded-5 card-logo" alt="1751756793nr6bmb04_400x400.jpg">
            <div class="w-100 ms-4 d-flex flex-column justify-content-between">
            <div class="d-flex justify-content-between align-items-center">
            <p class="card-title">${item.name}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
            </div>
            <p class="card-text small">${item.description}</p>
            </div>
          </a>
      `;
    });
    searchResults.innerHTML = content;
  }
  if (error) {
    console.log(error);
  }
}
