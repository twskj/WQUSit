document.addEventListener("DOMContentLoaded", function (event) {
    var html = document.documentElement.innerHTML;
    html = html.replace("frameElement == null","false");
    document.write(html);
});