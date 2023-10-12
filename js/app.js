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
    postEl.className = "flip-card";

    const textEl = document.createElement("p");
    textEl.className = "text";
    textEl.innerText = post.text;

    const hashtagEl = document.createElement("p");
    hashtagEl.className = "hashtag";
    hashtagEl.innerText = post.hashtag;

    const feelingEl = document.createElement("p");
    feelingEl.className = "feeling";
    feelingEl.innerText = post.feeling;

    const stylistEl = document.createElement("img");
    stylistEl.className = "stylist";
    stylistEl.src = "images/"+post.stylist+".png";
    stylistEl.alt = post.stylish+"の画像";
    stylistEl.width = 100;
    
    const stylistTagEl = document.createElement("p");
    stylistTagEl.className = "stylistTag";
    stylistTagEl.innerText = "✂︎✂︎Stylist✂︎✂︎";

    const flip_card_front = document.createElement("div");
    flip_card_front.className = "flip-card-front";

    const flip_card_back = document.createElement("div");
    flip_card_back.className = "flip-card-back";

    flip_card_front.append(imageEl);
    flip_card_back.append(friendEl);
    flip_card_back.append(timestampEl);
    flip_card_back.append(textEl);
    flip_card_back.append(hashtagEl);
    flip_card_back.append(feelingEl);
    flip_card_back.append(stylistEl);
    flip_card_back.append(stylistTagEl);
    postEl.append(flip_card_front);
    postEl.append(flip_card_back);
    console.log(bacefook.newsfeed)
    containerEl.append(postEl);
  }

}




window.addEventListener("load", display);

const updateButton = document.getElementById("update");
updateButton.addEventListener('click',display);