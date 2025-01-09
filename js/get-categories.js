// Call the getContent function when the document is ready
document.addEventListener("DOMContentLoaded", async function () {
  await checkSession();
  getCategories();
});

async function getCategories() {
  const { data, error } = await client.from("categories").select("*").order("category_name", { ascending: true });
  if (error) {
    console.log(error);
  }
  if (data) {
    let content = "";
    data.forEach((item) => {
      content += `
      <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-4">
                <img src="/img/icons/${item.category_slug}.svg" class="img-fluid rounded-start p-4" width="200" height="200" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${item.category_name}</h5>
                    <p class="card-text">${item.category_description}</p>
                    <a href="/pages/${item.category_slug}.html" class="card-subtitle text-decoration-none">View Tools</a>
                </div>
            </div>
        </div>
        </div>
      </div>`;
    });
    document.getElementById("section-elements").innerHTML = content;
  }
}
