function ajax(method, url, onSuccess, onFail) {
    if (!method) method = 'GET';
    if (!url) throw 'Invalid URL';
    if (!onSuccess) throw 'Should specify success callback';
    httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                onSuccess(httpRequest);
            } else {
                onFail(httpRequest);
            }
        }
    }

    httpRequest.open(method, url);
    httpRequest.send();
}
