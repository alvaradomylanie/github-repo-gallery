//About Me
const overview = document.querySelector(".overview");
const username = "alvaradomylanie"
const listRepo = document.querySelector(".list-repo");

const gitUserInfo = async function () {
    const userInfo = await fetch(`https://api.github.com/users/${username}`);   
    const data = await userInfo.json();
    displayUserInfo(data);
};

gitUserInfo();

const displayUserInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
        <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>    
`;
overview.append(div);
gitRepos();
};


 async function listRepo() {
    const fetchRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page100`);
    const repoData = await fetchRepos.json();
    displayRepos(repoData);
}

const placeholder = function (repos) {
    for (const repo of repos) {
        const repo1 = document.createElement("li");
    }   repo1.classList.add("repo");
        repo1.innerHTML = `<h3>${repo.name}</h3>`;
        listRepo.append(repo1);
    }




