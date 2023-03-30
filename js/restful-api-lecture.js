const setPost = async (postData) => {
    let url = '';
    let options = {
        method: "POST",
        header: {
            "Authorization": 'token '
        },
        body: JSON.stringify(postData)
    }
    let response = await fetch(url, options);
    let data = await response.json();
    return data;
}


(async()=>{
    let blogPost = {
        "title": "I love lamp!",
        "body": 'freifjdiofjeiojfeiofjeajfioerjfieqrofjrefiorejqfirejf'
    }
    let result = await setPost(blogPost)
})();