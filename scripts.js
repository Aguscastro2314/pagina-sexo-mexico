window.addEventListener('DOMContentLoaded', function() {
  var v = archive_analytics.values;
  v.service = 'wb';
  v.server_name = 'wwwb-app204.us.archive.org';
  v.server_ms = 448;
  archive_analytics.send_pageview({});
});

window.RufflePlayer = window.RufflePlayer || {};
window.RufflePlayer.config = {
  "autoplay": "on",
  "unmuteOverlay": "hidden"
};

(function() {
  __wm.init("https://web.archive.org/web");
  __wm.wombat("http://bdx.com.mx/bdx/index.jsp", "20171021040805", "https://web.archive.org/", "web", "https://web-static.archive.org/_static/", "1508558885");
})();

var ieversion = 100;
if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
  ieversion = new Number(RegExp.$1); // capture x.x portion and store as a number
}

if (ieversion <= 6) {
  // Handle old IE versions
}

function discreto() {
  if (ieversion <= 6) return;
  if (localStorage) {
    localStorage.setItem("discreto", true);
    document.title = "Productividad personal";
    document.getElementById("headder").style.display = "none";
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://web.archive.org/web/20171021040805/http://bd.servicio-x.com/discreto.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}
