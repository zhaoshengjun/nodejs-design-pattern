console.log("localStorage length:", localStorage.length);

let uid = localStorage.getItem("user_id");
console.log("user_id:", uid);

if (!uid) {
  console.log("user id not found. Set the user id and token");
  localStorage.setItem("token", "12131313131");
  localStorage.setItem("user_id", "12345");
} else {
  console.log("user id found", uid);
  console.log("cleaning the user id");
  localStorage.clear();
}
