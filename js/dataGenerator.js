/*
  This generates our fake newsfeed information.

  There is no need to touch the code in here until you get to basic requirement #4,
  but please check it out to familiarize yourself beforehand.
*/
(() => {
  window.bacefook = {};
  bacefook.newsfeed = [];
  bacefook.friends = {};
  bacefook.friendNames = ["Kubo", "Kato", "Mihashi", "Suzuki", "Kodani"];
  bacefook.friendNames.forEach(name => {
    bacefook.friends[name] = [];
  });

  const getRandomElement = array => {
    // Given an array, returns a random element
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const starters = [
    "Fear of risk is the biggest risk",
    "Only you can change yourself",
    "Now is the time to do it",
    "your biggest enemy is yourself",
    "the future is yours",
    "the only impossible journey is the one you never begin."
  ];
  const verbs = [
    "#beauty",
    "#newstyle",
    "#cool",
    "#bright",
    "#color",
    "#kawaii",
    "#happy",
    "#cute"
  ];
  const fillers = [
    "my",
    "your",
    "his",
    "her",
    "my favorite",
    "a beautiful",
    "a delicious",
    "that",
    "this",
    "an interesting",
    "",
    "the best",
    "the greatest",
    "a delightful"
  ];
  const nouns = [
    "DIG",
    "restaurant",
    "omakase",
    "hitomedia",
    "family mart",
    "private jet",
    "mama",
    "lawsons",
    "conbini",
    "whisky",
    "onigiri",
    "car",
    "food",
    "house",
    "toilet",
    "tokyo",
    "city",
    "iphone",
    "google",
    "unicorn",
    "mess",
    "pirate ship",
    "ninja"
  ];
  const hashtags = [
    "#DIG",
    "#techlife",
    "#toyota",
    "#tokyo",
    "#japan",
    "#interesting",
    "#til",
    "#lol",
    "#tgifriday",
    "#hashtags",
    "#japanlife",
    "#oops",
    "#cute"
  ];
  const feelings = [
    "❤️",
    "😀",
    "😊",
    "😍",
    "🥹",
    "😌",
    "😘"
  ];
  const images = [
    "image1",
    "image2",
    "image3",
    "image7",
    "image8",
    "image9",
    "image10"
  ];
  const stylist = [
    "stylist1",
    "stylist2",
    "stylist3",
    "stylist4",
    "stylist5"
  ]

  const stylistName = [
    "Takashi",
    "Ken",
    "Masashi",
    "Syogo",
    "Atsushi"
  ];

  const backimage = [
    "backimage1",
    "backimage2",
    "backimage3",
    "backimage4",
    "backimage5",
    "backimage6",
    "backimage7"
  ];

  const generateRandomText = () => {
    return [
      getRandomElement(starters),
      // getRandomElement(verbs),
      // getRandomElement(fillers),
      // getRandomElement(nouns)
    ].join(" ");
  };

  const generatePostObj = (timeOffset,flag) => {
    // if an offset is provided, make the timestamp that much older, otherwise just use the current time
    const timestamp = timeOffset
      ? new Date(new Date().getTime() - timeOffset)
      : new Date();

    if (flag===0){
      return {
        friend: getRandomElement(bacefook.friendNames),
        text: generateRandomText(),
        hashtag: getRandomElement(hashtags),
        feeling: getRandomElement(feelings),
        image: getRandomElement(images),
        stylist: getRandomElement(stylist),
        stylistName:getRandomElement(stylistName),
        backimage: getRandomElement(backimage),
        timestamp
      };
    }else if(flag===1){
      return {
        friend: localStorage.getItem("username"),
        text: document.getElementById("article").value,
        hashtag:document.getElementById("hashtags").value,
        feeling: document.getElementById("feelings").value,
        stylist: getRandomElement(stylist),
        image: "/Users/user/Downloads/" + fileName,
        backimage: getRandomElement(backimage),
        stylistName:getRandomElement(stylistName),
        timestamp
      };
    }
    
  };

  const addPost = obj => {
    const friend = obj.friend;
    if (bacefook.friends[friend]===undefined){
      bacefook.friends[friend] = []
      bacefook.friendNames.push(obj.friend)
    }
    bacefook.friends[friend].push(obj);
    bacefook.newsfeed.push(obj);
  };

  const createPost = (timeOffset) => {
    const newPost = generatePostObj(timeOffset,0);
    addPost(newPost);
  };

  const createnewPost = () => {
    const newPost = generatePostObj(null,1);
    addPost(newPost);
  };

  for (let i = 0; i < 10; i++) {
    // make the starting posts look like they were posted over the course of the past day
    const timeOffset = (2 * (10 - i) + Math.random()) * 60 * 60 * 1000;
    createPost(timeOffset);
  }

  const scheduler = () => {
    createPost(null);
    setTimeout(scheduler, (3 + Math.random() * 5) * 1000); // generate a new post every 3 to 8 seconds
  };


  const postButton = document.getElementById("postButton");
  postButton.addEventListener('click', createnewPost);
  postButton.addEventListener('click',()=>{alert("Post has been completed！");})
  postButton.addEventListener('click',display)
  scheduler();

})();
