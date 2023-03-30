
import {keys} from './keys.js'
import {getGithubUsers, getUserEvents, renderGithubUser, renderGithubUserEvents} from "./github.js";




(async ()=>{

    let user = await getUserEvents('NicholasOwens1');
    console.log(user);
    const usersGrid = document.querySelector('#userGrid')
        renderGithubUserEvents(user, usersGrid);
    // render users

})();