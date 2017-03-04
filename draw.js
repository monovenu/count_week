var mydate = new Date();
var myday = mydate.getDay(); // 0-6对应为星期日到星期六 
if (myday == 0) {
    myday = 7;
}

for (var i = 1; i < myday; i++) {
    $('#day' + i).find('path').attr('fill', '#D96038');
}
//localStorage只能是字符串形式
if (localStorage.date == myday) {
    $('#day' + myday).find('path').attr('fill', '#D96038');
}

$('#day' + myday).click(function() {
    $(this).find('path').attr('fill', '#D96038');
    localStorage.date = myday;
});

chrome.browserAction.setPopup({
    'popup': 'popup.html'
});
