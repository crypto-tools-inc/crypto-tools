async function upvote(el) {
  if (user_id == null) {
    //open login modal
    console.log("You need to login to vote");
    const upvoteModal = new bootstrap.Modal(document.getElementById("upvoteModal"));
    upvoteModal.show();
  }
  if (user_id != null) {
    let currentUpvotes = el.innerText;
    let toolId = el.id;
    if (el.classList.contains("badge-active")) {
      const { data, error } = await client.from("upvotes").delete().eq("tool_id", el.id).select();
      if (data) {
        // console.log(data);
        el.classList.remove("badge-active");
        let newUpvotes = parseInt(currentUpvotes) - 1;
        el.innerHTML = `<img class="me-2" src="/img/caret-up.svg" width="14" height="14" alt="caret">` + newUpvotes;
      }
    } else {
      const { data, error } = await client
        .from("upvotes")
        .insert([{ user_id: user_id, tool_id: toolId, user_email: user_email }])
        .select();
      if (data) {
        el.classList.add("badge-active");
        let newUpvotes = parseInt(currentUpvotes) + 1;
        el.innerHTML = `<img class="me-2" src="/img/caret-up.svg" width="14" height="14" alt="caret">` + newUpvotes;
        // Update the upvote count in the tools table
        const { data, error } = await client.from("tools").update({ upvotes: newUpvotes }).eq("id", toolId).select();
        // console.log(data);
      }
      if (error) {
        console.log(error);
      }
    }
  }
}
