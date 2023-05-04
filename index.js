let form = document.getElementById("form");
let msg = document.getElementById("msg");
let input = document.getElementById("input");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Please enter a message";
    msg.style.color = "red";
    return;
  }
  msg.innerHTML = "";
  msg.style.color = "black";
  acceptData();
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};