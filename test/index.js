$('.dropdown-trigger').dropdown();
$('.sidenav').sidenav();

var leftPane = $('.left-pane');
var rightPane = $('.right-pane');

var drawerBtn = $('#drawer-btn')
var isDrawerOpen = true;

function openDrawer() {
    setCookie('draweropen', 'true');
    leftPane.animate({ left: '0%' }, 300);
    rightPane.animate({
        width: "80%",
        left: '20%'
    }, 300);
}

function closeDrawer() {
    setCookie('draweropen', 'false');
    leftPane.animate({ left: '-100%' }, 300);
    rightPane.animate({
        width: "100%",
        left: 0
    }, 300);
}

drawerBtn.click(function (e) {
    e.preventDefault();
    isDrawerOpen = !isDrawerOpen;
    if (isDrawerOpen) { openDrawer(); }
    else { closeDrawer(); }
});

$(document).ready(function () {
    var drawerOpenCookie = getCookie('draweropen');
    if (drawerOpenCookie !== 'false') {
        leftPane.css({ left: 0 });
        rightPane.css({ width: '80%', left: '20%' });
    } else {
        leftPane.css({ left: '-100%' });
        rightPane.css({ width: '100%', left: 0 });
    }
});