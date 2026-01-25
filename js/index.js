let client = supabase.createClient("https://krperkqbaqewikgzuoea.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtycGVya3FiYXFld2lrZ3p1b2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzMzU4NzcsImV4cCI6MTk5NTkxMTg3N30.ZiwrLZyY8lHlLspcVIagKrF5Bdci_R95lKpDDK56xHM");
const bucketURL = "https://krperkqbaqewikgzuoea.supabase.co/storage/v1/object/public/logos/";
const headerURL = "https://krperkqbaqewikgzuoea.supabase.co/storage/v1/object/public/headers/";

const latestContainer = document.getElementById("section-latest");
const categoriesContainer = document.getElementById("section-categories");
const curatedContainer = document.getElementById("section-curated");

async function getLatest() {
  const { data, error } = await client.from("tools").select("*").order("id", { ascending: false }).range(0, 8);
  if (data) {
    let content = "";
    data.forEach((item) => {
      content += `
      <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-start">
          <div class="d-flex">
          <img loading="lazy" src="${bucketURL + item.logo}" height="70" width="70" class="rounded-5 card-logo" alt="${item.logo}">
            <div class="ms-4 d-flex flex-column justify-content-between">
            <h4 class="card-title">${item.name}</h4>
            <a class="card-subtitle mb-2 text-decoration-none" href="${item.website}?utm_source=cripto.tools&utm_medium=directory" target="_blank"><img class="me-1" width="12" height="12" src="/img/socials/link.svg" alt="website link">Website</a>
            </div>
          </div>
            
          </div>
          <div class="card-body">
            <div>
              <p class="card-text">${item.description}</p>
              <p class="text-muted text-uppercase small semi-bold mb-2">Socials</p>
              <ul class="list-inline m-0">
              ${item.social_twitter == null ? `` : `<li class="list-inline-item"><img class="me-1" width="12" height="12" src="/img/socials/twitter.svg" alt="twitter"><a class="text-capitalize text-decoration-none" href="${item.social_twitter}" target="_blank">Twitter</a></li>`}
              ${item.social_discord == null ? `` : `<li class="list-inline-item"><img class="me-1" width="12" height="12" src="/img/socials/discord.svg" alt="discord"><a class="text-capitalize text-decoration-none" href="${item.social_discord}" target="_blank">Discord</a></li>`}
              ${item.social_telegram == null ? `` : `<li class="list-inline-item"><img class="me-1" width="12" height="12" src="/img/socials/telegram.svg" alt="telegram"><a class="text-capitalize text-decoration-none" href="${item.social_telegram}" target="_blank">Telegram</a></li>`}
              ${item.social_medium == null ? `` : `<li class="list-inline-item"><img class="me-1" width="12" height="12" src="/img/socials/medium.svg" alt="medium"><a class="text-capitalize text-decoration-none" href="${item.social_medium}" target="_blank">Medium</a></li>`}
              ${item.social_mirror == null ? `` : `<li class="list-inline-item"><img class="me-1" width="12" height="12" src="/img/socials/mirror.svg" alt="mirror"><a class="text-capitalize text-decoration-none" href="${item.social_mirror}" target="_blank">Mirror</a></li>`}
              ${item.social_github == null ? `` : `<li class="list-inline-item"><img class="me-1" width="12" height="12" src="/img/socials/github.svg" alt="github"><a class="text-capitalize text-decoration-none" href="${item.social_github}" target="_blank">Github</a></li>`}
              ${item.social_reddit == null ? `` : `<li class="list-inline-item"><img class="me-1" width="12" height="12" src="/img/socials/reddit.svg" alt="reddit"><a class="text-capitalize text-decoration-none" href="${item.social_reddit}" target="_blank">Reddit</a></li>`}
              </ul>
            </div>
          </div>
            `;
      content += `

        </div>
      </div>
      `;
    });
    latestContainer.innerHTML = content;
  }
  if (error) {
    console.log(error);
  }
}

async function getCategories() {
  const { data, error } = await client.from("categories").select("*").order("category_name", { ascending: true });
  if (error) {
    console.log(error);
  }
  if (data) {
    let content = "";
    data.forEach((item) => {
      content += `
      <a href="/pages/${item.category_slug}.html" class="btn btn-category-badge text-nowrap">${item.category_name}</a>
      `;
    });
    categoriesContainer.innerHTML = content;
  }
}

async function getCurated() {
  const { data, error } = await client.from("tools").select("*").eq("featured", true);
  if (data) {
    let content = "";
    data.forEach((item) => {
      content += `
      <div class="header col-md-7 col-sm-7 col-xs-7 col-10 rounded-4 p-4" style="background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%), url('${headerURL + item.feature_header}'); background-size: cover;">
        <div class="d-flex flex-column align-items-start">
          <img loading="lazy" src="${bucketURL + item.logo}" height="85" width="85" class="rounded-5 card-logo mb-3" alt="" />
          <h2 class="fw-bold">${item.name}</h2>
          <p class="mb-2">${item.description}</p>
          <a href="${item.website}?utm_source=cripto.tools&utm_medium=directory" target="_blank">Visit ${item.name}</a>
        </div>
      </div>
      `;
    });
    curatedContainer.innerHTML = content;
  }
  if (error) {
    console.log(error);
  }
}

(async function () {
  await getLatest();
  await getCategories();
  await getCurated();
})();
