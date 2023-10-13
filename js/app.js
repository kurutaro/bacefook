const display = () => {
  // This is a check to see if there's a username stored
  let username = localStorage.getItem("username");
  // if (!username) {
  //   // Prompt for one if a username isn't found
  //   username = window.prompt("What is your name?");
  //   localStorage.setItem("username", username);
  // }

  const containerEl = document.querySelector("#newsfeed");
  while (containerEl.firstChild){
    containerEl.removeChild(containerEl.firstChild)
  }

  if (username=="undefined") {
    location.href = 'login.html';
  }else{
    usernameEl = document.getElementById("profile");
    usernameEl.innerHTML = username+" is logged in";
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

    if (moment().diff(moment(post.timestamp), "minutes") < 59){
      timestampEl.innerHTML = "posted "+moment().diff(moment(post.timestamp), "minutes")+" minutes ago";
    }else if(moment().diff(moment(post.timestamp), "hours") < 24){
      timestampEl.innerHTML = "posted "+moment().diff(moment(post.timestamp), "hours")+" hours ago";
    }else{
      timestampEl.innerHTML = "posted "+moment().diff(moment(post.timestamp), "days")+" days ago";
    }

    const friendEl = document.createElement("p");
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

    const stylistNameEl = document.createElement("p");
    stylistNameEl.className = "stylistName";
    stylistNameEl.innerText = post.stylistName;

    const backimageEl = document.createElement("img");
    backimageEl.className = "backimage";
    backimageEl.src = "images/"+post.backimage+".png";
    backimageEl.alt = post.backimage+"の画像";
    backimageEl.width = 100;

    const flip_card_front = document.createElement("div");
    flip_card_front.className = "flip-card-front";

    const flip_card_back = document.createElement("div");
    flip_card_back.className = "flip-card-back";

    flip_card_front.append(imageEl);
    flip_card_back.append(timestampEl);
    flip_card_back.append(textEl);
    flip_card_back.append(hashtagEl);
    flip_card_back.append(feelingEl);
    flip_card_back.append(stylistEl);
    flip_card_back.append(stylistTagEl);
    flip_card_back.append(backimageEl);
    flip_card_back.append(friendEl);
    flip_card_back.append(stylistNameEl);
    postEl.append(flip_card_front);
    postEl.append(flip_card_back);
    containerEl.append(postEl);
  }
}

window.addEventListener("load", display);

if (document.getElementById("update")){
  const updateButton = document.getElementById("update");
  updateButton.addEventListener('click',display);
}


const logout = () => {
  localStorage.setItem("username", undefined)
}

const login = () => {
  localStorage.setItem("username", document.getElementById("login-name").value)
}

if (document.getElementById("logout")){
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener('click', logout)
}

if (document.getElementById("login-name")){
  const loginButton = document.getElementById("login-btn");
  loginButton.addEventListener('click', login)
}

// audio 要素と各ボタン要素を取得
const audio = document.querySelector('audio');
const playBtn =  document.querySelector('.play');
const pauseBtn =  document.querySelector('.pause');
const stopBtn =  document.querySelector('.stop');

// 各ボタン要素の click イベントにリスナー関数を登録
playBtn.addEventListener('click', playAudio, false );
pauseBtn.addEventListener('click', pauseAudio, false );
stopBtn.addEventListener('click', stopAudio, false );

// Play ボタンのリスナー関数
function playAudio() {
  // play() メソッドで音声を再生
  audio.play();
}

// Pause ボタンのリスナー関数
function pauseAudio() {
  // pause() メソッドで停止
  audio.pause();
}

// Stop ボタンのリスナー関数
function stopAudio() {
  // 停止して再生位置を先頭に戻す
  audio.pause();
  audio.currentTime = 0;
}

// ボリューム設定
let elem_volume = document.getElementById("volume");
let elem_range = document.getElementById("vol_range");

audio.volume = elem_volume.value;  // 初期値設定

// ボリューム変更時
elem_volume.addEventListener("change", function(){
	audio.volume = elem_volume.value;
	elem_range.textContent = elem_volume.value;
}, false);