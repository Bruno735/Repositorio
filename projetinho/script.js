const seguidores = document.querySelector("#seguidores");

window.addEventListener("DOMContentLoaded", async () => {
  await fetch("https://api.github.com/users/Bruno735")
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);



      
    });

  await fetch("https://api.github.com/users/Bruno735/followers")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        data.map((item) => {
            seguidores.innerHTML += 
            `<div class="item-image">
            <img src="${item.avatar_url    }"></img>
            </div>

            <div class="item-info">
                <div class="item-title">
                    <p>${item.login}</p>
                    <p class="prince"></p>
                </div>

                <div class="item-description">
                    <p>
                     
                    </p>
                </div>
            </div> `
        });
    });
});