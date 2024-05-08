$(document).ready(function () {
   
    //LINK DA API
    const endpoint = "https://api.github.com/users/fernando10092";

    //FETCH
    fetch(endpoint)
        //THEN
        .then(x => x.json())
        //THEN
        .then(y => {
            console.log(y.name);
            //document.getElementById('nome').innerHTML = y.name;
            document.getElementById("avatar").src = y.avatar_url
            $(".profile-name").text(y.name);
            $(".profile-username").text("@"+y.login);
            $("#repositorio").text(y.public_repos);
            $("#seguidores").text(y.followers);
            $("#seguindo").text(y.following);
        }
        ).catch(
            alert("Erro na requisição")
        );
}); 