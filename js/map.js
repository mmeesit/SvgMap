var pinHeight;
pinHeight = 19;
window.onload = function () {
    for (var i = 0; i < 60; i++) {
        var pinId = i + 1;
        positionMapPin(pinId);
    }
    positionStaticElements();
};
function positionStaticElements() {
    var fillNumbers = [5531, 1073, 1503, 3349]; //NYC, LONDON, BERLIN, MOSCOW, TOKYO
    var staticPinId = 1;
    for (var _i = 0, fillNumbers_1 = fillNumbers; _i < fillNumbers_1.length; _i++) {
        var fillNumber = fillNumbers_1[_i];
        var parentPos = document.getElementById('mapSvg').getBoundingClientRect(), childrenPos = document.getElementById('Fill-' + fillNumber).getBoundingClientRect(), relativePos = {};
        relativePos.top = childrenPos.top - parentPos.top - pinHeight,
            relativePos.right = childrenPos.right - parentPos.right,
            relativePos.bottom = childrenPos.bottom - parentPos.bottom,
            relativePos.left = childrenPos.left - parentPos.left;
        document.getElementById("static-pin-" + staticPinId).setAttribute("x", "" + relativePos.left);
        document.getElementById("static-pin-" + staticPinId).setAttribute("y", "" + relativePos.top);
        document.getElementById("static-city-text-" + staticPinId).setAttribute("x", "" + relativePos.left);
        document.getElementById("static-city-text-" + staticPinId).setAttribute("y", "" + (relativePos.top + 20));
        staticPinId++;
    }
}
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
