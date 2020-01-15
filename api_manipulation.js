const fs = require("fs");
const filename = "axiosData.js";
const username = "13uilding";


fs.readFile(filename, "utf8", function(err, data){
    if (err) return console.log(err);
    const newData = JSON.parse(data);
    // Name of repos
    const numberPublicRepos = newData.length; // Number of repos
    console.log(numberPublicRepos)
    // console.log(repoNameArr);
    
    
    // This just works better for all the owner info
    const userInfoURL = `https://api.github.com/users/${username}`; // Call the response owner
    const profileImg = String(owner.avatar_url);
    const profileUserName = String(owner.login);
    const profileLocation = String(owner.location); // Google API
    const profileHTML = String(owner.html_url);
    const profileBlog = String(owner.blog);
    // Gonna need to do another call to get the number of followers using this
    
    const followersURL = String(owner.followers_url); // Additional Call
    const numFollowers = response.length; // Number of followers
    
    const followingURL = String(owner.following_url); // Additional Call
    const numFollowing = response.length; // Number of following (not finding)
    // Cut off the {/other_user}
    
    const starredURL = String(owner.starred_url); // Additional Call
    const numStarred = response.length; // Number of started (not finding)
    // Cutt off the {/owner}{/repo}
})


// const repoNameArr = newData.map(repo => repo.name); // Array of names of repos