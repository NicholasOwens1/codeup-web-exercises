export const getGithubUsers = async () => {
    try {
        let response = await fetch('https://api.github.com/users');
        return response.json();
    } catch (error) {
        console.log(error);
    }
}
// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(data=>data)
//     .catch(error=>{
//
// })

export const renderGithubUser = (user, parent) => {
    // create div
    const element = document.createElement('div');
    //  add class user card
    element.classList.add('user-card');
    // make html
    element.innerHTML=`
                <div class="image-wrapper">
                    <img src="${user.avatar_url}" alt="User image"
                                        class="avatar">
                </div>
                <h2>${user.login}</h2>
                <a href="${user.html_url}" target="_blank">Go to profile</a>
                <button>Remove</button>
            `;
            element.querySelector('button').addEventListener('click', function(){
                element.remove();
            });
            parent.appendChild(element);
}

export const getUserEvents = async (username) => {
    try {
        let response = await fetch(`https://api.github.com/users/${username}/events/public`);
        let data = await response.json();
        // return await response.json()[0];
        return data[0];
        // return response.json();
    } catch (error) {
        console.log(error);
    }
}

export const renderGithubUserEvents = (user, parent) => {
    const element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML=`
                <div class="image-wrapper">
                    <img src="${user.actor.avatar_url}" alt="User image"
                                        class="avatar">
                </div>
                <h2>${user.actor.login}</h2>
                <p>${user.created_at}</p>
                <a href="${user.actor.url}" target="_blank">Go to profile</a>
                <button>Remove</button>
            `;
    element.querySelector('button').addEventListener('click', function(){
        element.remove();
    });
    parent.appendChild(element);
}