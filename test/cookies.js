function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
}

function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

function deleteCookie(name) {
    setCookie(name, '', -1);
}