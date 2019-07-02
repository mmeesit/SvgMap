var pinHeight;
pinHeight = 19;
window.onload = function () {
    for (var i = 0; i < 60; i++) {
        var pinId = i + 1;
        positionMapPin(pinId);
    }
};
function positionMapPin(pinNumber) {
    var randomMapPoint = Math.floor(Math.random() * 3087) * 2 + 1;
    var parentPos = document.getElementById('mapSvg').getBoundingClientRect(), childrenPos = document.getElementById('Fill-' + randomMapPoint).getBoundingClientRect(), relativePos = {};
    // Relative position between mapSvg container and map point
    relativePos.top = childrenPos.top - parentPos.top - pinHeight,
        relativePos.right = childrenPos.right - parentPos.right,
        relativePos.bottom = childrenPos.bottom - parentPos.bottom,
        relativePos.left = childrenPos.left - parentPos.left;
    document.getElementById("pin-" + pinNumber).setAttribute("x", "" + relativePos.left);
    document.getElementById("pin-" + pinNumber).setAttribute("y", "" + relativePos.top);
}
