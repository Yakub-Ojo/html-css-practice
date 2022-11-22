const button = document.querySelector('.subscribe');
console.log(button);

button.addEventListener('click', () => {
    if (button.textContent === 'SUBSCRIBE'){
        button.textContent = 'UNSUBSCRIBE';
    }else if (button.textContent === 'UNSUBSCRIBE'){
        button.textContent = 'SUBSCRIBE';
    }
    //alert("you have subscribed, click again to unsubscribe");
});

let likeCounter = 0;
const likes = document.querySelector('.likes')

const like = document.querySelector('.like');

like.addEventListener('click', () => {
    likeCounter++;
    //alert(`oh! ${likeCounter} likes`);
    if(likeCounter === 1){
        likes.textContent = `${likeCounter} Like`;
    }else{likes.textContent = `${likeCounter} Likes`;}

    let num = [5, 10, 15, 20, 25, 50];
    for (let i = 0; i < num.length; i++){
    if(likeCounter === num[i]){
        alert(`Congrats, you just reached ${num[i]} likes`);
    }
    }
    });

let followCounter = 0;
const follow = document.querySelector('.follow')
    
const followers = document.querySelector('.followers');
    
    follow.addEventListener('click', () => {
        followCounter++;
        //alert(`oh! ${followCounter} follows`);
        if(followCounter === 1){
            followers.textContent = `${followCounter} Follower`;
        }else{followers.textContent = `${followCounter} Followers`;}
        
        let num = [5, 10, 15, 20, 25, 50];
        for (let i = 0; i < num.length; i++){
        if(followCounter === num[i]){
            alert(`Congrats, you just reached ${num[i]} followers`);
        }
        }    
    
    });



