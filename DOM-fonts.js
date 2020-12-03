const form = document.querySelector('#form');
const tweets = document.querySelector('#tweets');
form.addEventListener('submit',function(e){
    const user = form.elements.username.value;
    const comment = form.elements.comment.value;

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(user);
    newTweet.append(bTag);
    newTweet.append(`- ${comment}`);
    e.preventDefault();
    tweets.append(newTweet);
});