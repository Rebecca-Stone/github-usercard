import axios from "axios";

function cardMaker({
  avatar_url,
  name,
  login,
  location,
  html_url,
  followers,
  following,
  bio,
}) {
  const profile = document.createElement("div");
  const profilePhoto = document.createElement("img");
  const cardInfo = document.createElement("div");
  const gitName = document.createElement("h3");
  const userName = document.createElement("p");
  const gitLocation = document.createElement("p");
  const profileLink = document.createElement("p");
  const gitFollowers = document.createElement("p");
  const gitFollowing = document.createElement("p");
  const gitBio = document.createElement("p");

  profile.classList.add("card");
  cardInfo.classList.add("card-info");
  gitName.classList.add("name");
  userName.classList.add("username");

  profile.appendChild(profilePhoto);
  profile.appendChild(cardInfo);
  cardInfo.appendChild(gitName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(gitLocation);
  cardInfo.appendChild(profileLink);
  cardInfo.appendChild(gitFollowers);
  cardInfo.appendChild(gitFollowing);
  cardInfo.appendChild(gitBio);

  profilePhoto.src = `${avatar_url}`;
  gitName.textContent = `${name}`;
  userName.textContent = `${login}`;
  gitLocation.textContent = `Location: ${location}`;
  profileLink.textContent = `Profile ${html_url}`;
  profileLink.innerHTML = `Profile:
          <a href= ${html_url}> ${html_url} </a>`;
  gitFollowers.textContent = `Followers: ${followers}`;
  gitFollowing.textContent = `Following: ${following}`;
  gitBio.textContent = `Bio: ${bio}`;

  return profile;
}

const cardHolder = document.querySelector(".cards");

const followersArray = [];

function addUser(userName) {
  axios
    .get(`https://api.github.com/users/${userName}`)
    .then(function (response) {
      // handle success
      followersArray.push(userName);
      const userGit = cardMaker(response.data);
      cardHolder.appendChild(userGit);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

addUser("Rebecca-Stone")
addUser("tetondan");
addUser("dustinmyers");
addUser("justsml");
addUser("luishrd");
addUser("bigknell");

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
