async function getUser() {
    let url = 'user.json';
    try{
        let res = await fetch(url);
        return await res.json();
    }catch(error){
        console.log(error);
    }
}

async function renderUser() {
    let users = await getUser();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                                <h3>${user.username}</h3>
                                <p>Name : ${user.name}</p>
                                <p>Activity : ${user.activity}</p>
                                <small>Login Method :</small>
                                <dd>${user.login_method}</dd>
                           </div>`;

        html += htmlSegment;
    } );

    let data = document.querySelector('.data');
    data.innerHTML = html;
}

renderUser()