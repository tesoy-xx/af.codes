function updateIdWithContent(id, content) {
    var element = document.getElementById(id);
    if(!element) throw "Didn't find element " + id;
    element.innerHTML = content;
}
