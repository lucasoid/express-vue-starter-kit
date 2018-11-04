import './index.scss';

function render(content) {
    document.getElementById('render').innerHTML = content;
}
function getAccessToken() {
    return document.cookie.match(/accessToken=(.*)(;|$)/)[1];
}

window.onload = function() {
    var token = getAccessToken();
    axios.get('http://localhost:3000/organizations', {headers: {Authorization: 'Bearer ' + token}}).then(function(result) {
        var names = result.data.map(function (org) { return '<li>' + org.name + '</li>'; });
        render('You are a member of these organizations: <ul>' + names.join('') + '</ul>');
    }).catch(function(err) {
        console.log("caught error:", err);
        render('Sorry, there was an error');
    });
}