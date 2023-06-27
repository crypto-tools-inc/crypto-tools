async function upvote(el) {
  if (user_id == null) {
    //open login modal
    console.log("You need to login to vote");
  }
  if (user_id != null) {
    let currentUpvotes = el.innerText;
    let toolId = el.id;
    if (el.classList.contains("badge-active")) {
      const { data, error } = await client.from("upvotes").delete().eq("tool_id", el.id).select();
      if (data) {
        console.log(data);
        el.classList.remove("badge-active");
        let newUpvotes = parseInt(currentUpvotes) - 1;
        el.innerHTML = `<img class="me-2" src="/img/caret-up.svg" width="14" height="14">` + newUpvotes;
      }
    } else {
      el.classList.add("badge-active");
      let newUpvotes = parseInt(currentUpvotes) + 1;

      const { data, error } = await client.from("tools").update({ upvotes: newUpvotes }).eq("id", toolId).select();
      if (data) {
        el.innerHTML = `<img class="me-2" src="/img/caret-up.svg" width="14" height="14">` + newUpvotes;
        addUpvote(toolId);
      }
      if (error) {
        console.log(error);
      }
    }
  }
}

async function addUpvote(id) {
  const { data, error } = await client.from("upvotes").insert([{ user_id: user_id, tool_id: id, user_email: user_email }]);
  if (data) {
    console.log(data);
  }
  if (error) {
    console.log(error);
  }
}
