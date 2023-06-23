const pageName = document.getElementById("section-elements").getAttribute("name");
const toolCount = document.getElementById("tool-count");

const client = supabase.createClient("https://krperkqbaqewikgzuoea.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtycGVya3FiYXFld2lrZ3p1b2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAzMzU4NzcsImV4cCI6MTk5NTkxMTg3N30.ZiwrLZyY8lHlLspcVIagKrF5Bdci_R95lKpDDK56xHM");

async function getContent() {
  const { data, error } = await client.from("tools").select("*").eq("category", pageName).order("upvotes", { ascending: false });
  if (error) {
    console.log(error);
  }
  if (data) {
    toolCount.innerHTML = data.length + " tools";

    let content = "";
    data.forEach((item) => {
      content += `
      <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-start">
          <div class="d-flex">
          <img loading="lazy" src="/img/projects/${item.logo}" height="70" width="70" class="rounded-5" alt="${item.logo}">
            <div class="ms-4 d-flex flex-column justify-content-between">
            <h4 class="card-title">${item.name}</h4>
            <a class="card-subtitle mb-2 text-decoration-none" href="${item.website}" target="_blank"><img class="me-1" height="12" src="/img/socials/link.svg" alt"website link">Website</a>
            </div>
          </div>
            <button class="btn btn-sm"><span class="badge badge-upvotes">${item.upvotes}</span></button>
          </div>
          <div class="card-body">
            <div>
              <p class="card-text">${item.description}</p>
              <p class="text-muted text-uppercase small semi-bold mb-2">Socials</p>
              <ul class="list-inline m-0">
              ${item.social_twitter == null ? `` : `<li class="list-inline-item"><img class="me-1" height="12" src="/img/socials/twitter.svg" alt="twitter"><a class="text-capitalize text-decoration-none" href="${item.social_twitter}" target="_blank">Twitter</a></li>`}
              ${item.social_discord == null ? `` : `<li class="list-inline-item"><img class="me-1" height="12" src="/img/socials/discord.svg" alt="discord"><a class="text-capitalize text-decoration-none" href="${item.social_discord}" target="_blank">Discord</a></li>`}
              ${item.social_telegram == null ? `` : `<li class="list-inline-item"><img class="me-1" height="12" src="/img/socials/telegram.svg" alt=""><a class="text-capitalize text-decoration-none" href="${item.social_telegram}" target="_blank">Telegram</a></li>`}
              ${item.social_medium == null ? `` : `<li class="list-inline-item"><img class="me-1" height="12" src="/img/socials/medium.svg" alt=""><a class="text-capitalize text-decoration-none" href="${item.social_medium}" target="_blank">Medium</a></li>`}
              ${item.social_mirror == null ? `` : `<li class="list-inline-item"><img class="me-1" height="12" src="/img/socials/mirror.svg" alt=""><a class="text-capitalize text-decoration-none" href="${item.social_mirror}" target="_blank">Mirror</a></li>`}
              ${item.social_github == null ? `` : `<li class="list-inline-item"><img class="me-1" height="12" src="/img/socials/github.svg" alt=""><a class="text-capitalize text-decoration-none" href="${item.social_github}" target="_blank">Github</a></li>`}
              ${item.social_reddit == null ? `` : `<li class="list-inline-item"><img class="me-1" height="12" src="/img/socials/reddit.svg" alt=""><a class="text-capitalize text-decoration-none" href="${item.social_reddit}" target="_blank">Reddit</a></li>`}
              </ul>
            </div>
          </div>
            <div class="card-footer">
              <p class="text-muted text-uppercase small semi-bold mb-2">Networks</p>
            </div>
        </div>
      </div>
      `;
    });
    document.getElementById("section-elements").innerHTML = content;
  }
}
