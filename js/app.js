const display = () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  if (!username) {
    // Prompt for one if a username isn't found
    username = window.prompt("What is your name?");
    localStorage.setItem("username", username);
  }

  const containerEl = document.querySelector("#newsfeed");
  while (containerEl.firstChild){
    containerEl.removeChild(containerEl.firstChild)
  }

  if (username) {
    usernameEl = document.getElementById("profile");
    usernameEl.innerHTML = "To "+username+"'s profile";
  }

  // This makes things appear
  for (let index = bacefook.newsfeed.length - 1; index >= 0; index--) {
    const post = bacefook.newsfeed[index];
    const imageEl = document.createElement("img");
    if((post.image).substr(1,4) === "User"){
      imageEl.src = post.image;
      imageEl.alt = post.image+"の画像";  
      console.log(post.image);
    }else{
      imageEl.src = "images/"+post.image+".png";
      imageEl.alt = post.image+"の画像";
      imageEl.width = 100;
      // imageEl.height = 100;  
    }

    const timestampEl = document.createElement("div");
    timestampEl.className = "timestamp";
    timestampEl.innerHTML = "posted "+moment().diff(moment(post.timestamp), "minutes")+" minutes ago";

    const friendEl = document.createElement("div");
    friendEl.className = "friend";
    friendEl.innerText = post.friend;

    const postEl = document.createElement("div");
    const textEl = document.createElement("p");
    textEl.className = "text";
    textEl.innerText = post.text;

    postEl.append(friendEl);
    postEl.append(timestampEl);
    postEl.append(textEl);
    postEl.append(imageEl);

    containerEl.append(postEl);
  }

}




window.addEventListener("load", display);

const updateButton = document.getElementById("update");
updateButton.addEventListener('click',display);