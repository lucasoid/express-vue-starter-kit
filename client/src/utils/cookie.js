const get = (cookieName) => {
    let match = document.cookie.match(new RegExp(`${cookieName}=(.*)(;|$)`));
    return match && match.length >= 2 ? match[1] : '';
}

const set = (cookieName, value, expiresInSeconds) => {
    let cookieString = `${cookieName}=${value};`;
    if(expiresInSeconds) {
        const expires = new Date(expiresInSeconds * 1000);
        cookieString += `expires=${expires.toUTCString()}`;
    }
    document.cookie = cookieString;
}

export default {
    get,
    set
}