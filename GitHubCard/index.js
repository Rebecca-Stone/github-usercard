import axios from "axios";
const cardHolder = document.querySelector("cards");

axios
  .get(`https://api.github.com/users/Rebecca-Stone`)
  .then(function (response) {
    // handle success
    const gitHubData = response.data;
    cardHolder.appendChild("card");
    console.log(gitHubData);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// const followersArray = [];

// const getFollowers = () => {};

function cardMaker(object) {
  const card = document.createElement("div");
  const profilePhoto = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileAddress = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  card.appendChild(profilePhoto);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileAddress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  profilePhoto.src = object.avatar_url;
  name.textContent = object.name;
  userName.textContent = object.login;
  location.textContent = object.location;
  profileAddress.textContent = object.html_url;
  followers.textContent = object.followers;
  following.textContent = object.following;
  bio.textContent = object.bio;

  return card;
}
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

// {login: 'Rebecca-Stone', id: 96022487, node_id: 'U_kgDOBbkv1w', avatar_url: 'https://avatars.githubusercontent.com/u/96022487?v=4', gravatar_id: '', …}
// avatar_url: "https://avatars.githubusercontent.com/u/96022487?v=4"
// bio: "A former CNA learning to code at @bloominstituteoftechnology. Excited to learn more, create my own projects, and hopefully collaborate on some too! "
// blog: "https://www.linkedin.com/in/rebecca-stone-734443229/"
// company: null
// created_at: "2021-12-12T19:32:20Z"
// email: null
// events_url: "https://api.github.com/users/Rebecca-Stone/events{/privacy}"
// followers: 0
// followers_url: "https://api.github.com/users/Rebecca-Stone/followers"
// following: 0
// following_url: "https://api.github.com/users/Rebecca-Stone/following{/other_user}"
// gists_url: "https://api.github.com/users/Rebecca-Stone/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/Rebecca-Stone"
// id: 96022487
// location: "Bloomington, Il, USA"
// login: "Rebecca-Stone"
// name: "Rebecca Stone"
// node_id: "U_kgDOBbkv1w"
// organizations_url: "https://api.github.com/users/Rebecca-Stone/orgs"
// public_gists: 1
// public_repos: 31
// received_events_url: "https://api.github.com/users/Rebecca-Stone/received_events"
// repos_url: "https://api.github.com/users/Rebecca-Stone/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/Rebecca-Stone/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/Rebecca-Stone/subscriptions"
// twitter_username: null
// type: "User"
// updated_at: "2022-02-08T17:56:49Z"
// url: "https://api.github.com/users/Rebecca-Stone"
// [[Prototype]]: Object
