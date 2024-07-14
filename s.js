let containerUser = document.getElementById("userhtml");
let containerPost = document.getElementById("posthtml");

// Function to get users
function getUsers() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/users');
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    if (request.status === 200) {
      const users = request.response;
      users.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.className = 'bg-white w-80 h-16 rounded-3xl text-center m-2 p-2 cursor-pointer font-bold ...';
        userDiv.innerHTML = `${user.username} <span class="block ">${user.email}</span>`;
        userDiv.onclick = function() {
            // userDiv.className = ' border-2 border-rose-600 ... bg-white w-80 h-16 rounded-3xl text-center m-2 p-2 cursor-pointer';
          getPosts(user.id);
        };
        containerUser.appendChild(userDiv);
      });
    } else {
      alert("There was a problem: " + request.status);
    }
  };
}
getUsers();

// Function to get posts for a specific user
function getPosts(userId) {
  let request = new XMLHttpRequest();
  request.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    if (request.status === 200) {
      const posts = request.response;
      containerPost.innerHTML = ''; // Clear previous posts
      posts.forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.className = 'bg-red-100 w-full h-1/10 rounded-3xl text-center m-2 p-2 font-bold ...';
        postDiv.innerHTML = `${post.title} <span class="block">${post.body}</span>`;
        containerPost.appendChild(postDiv);
      });
    } else {
      alert("There was a problem: " + request.status);
    }
  };
}


