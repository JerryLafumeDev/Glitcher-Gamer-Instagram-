
window.addEventListener('load', findRecipe)

function findRecipe(){
    // const search = document.querySelector('.search').value
    // const token = 'Bearer oduohaf3niiktznid5yz5icxvvhm1n'
    // const clientid = 'lioy00vygo5di1u68zqu14i0yjsvz7'
    const url = `https://api.twitch.tv/helix/streams?`
    


fetch(url,
    {
        "headers": {
            "Client-ID": 'lioy00vygo5di1u68zqu14i0yjsvz7',
            "Authorization": "Bearer " + 'pe1lrpjn872eay9onb5x87u04cemw9'
        }
    }
)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('user').innerText = data.data[0].user_id
        findRecipess()
       var embed = new Twitch.Embed("twitch-embed", {
            width: 854,
            height: 480,
            channel: data.data[0].user_login
            // only needed if your site is also embedded on embed.example.com and othersite.example.com 
            
          });
          embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {

            var player = embed.getPlayer();
            
            player.setMuted(true);
            
            });
        var embed2 = new Twitch.Embed("twitch-embed2", {
            width: 854,
            height: 480,
            channel: data.data[1].user_login
            // only needed if your site is also embedded on embed.example.com and othersite.example.com 
            
          });
          embed2.addEventListener(Twitch.Embed.VIDEO_READY, () => {

            var player2 = embed2.getPlayer();
            
            player2.setMuted(true);
            
            });
         
        })
    .catch(err => {
        console.log(`error ${err}`)
    })

}

function findRecipess(){
const user = document.getElementById('user').innerText
const userUrl = `https://api.twitch.tv/helix/videos?first=100&user_id=${user}`

fetch(userUrl,    
{
"headers": {
    "Client-ID": 'lioy00vygo5di1u68zqu14i0yjsvz7',
    "Authorization": "Bearer " + 'pe1lrpjn872eay9onb5x87u04cemw9'
}
}
)
.then(res => res.json())
.then(data => {
    console.log(data)
})
.catch(err => {
console.log(`error ${err}`)
})

}
