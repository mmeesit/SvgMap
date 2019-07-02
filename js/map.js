var pinHeight;
pinHeight = 19;
window.onload = function () {
    loopPositionMapPinning();
    var myTimer = setInterval(function () {
        loopPositionMapPinning();
    }, 10000);
    setTimeout(stopMapPinFunction, 5 * 60 * 1000);
    function stopMapPinFunction() {
        clearInterval(myTimer);
    }
    positionStaticElements();
};
function loopPositionMapPinning() {
    for (var i = 0; i < 60; i++) {
        var pinId = i + 1;
        positionMapPin(pinId);
    }
}
function getPositionArray(pinNumber) {
    var parentPos = document.getElementById('mapSvg').getBoundingClientRect();
    var childrenPos = document.getElementById('Fill-' + pinNumber).getBoundingClientRect();
    var relativePos = {};
    relativePos.top = childrenPos.top - parentPos.top - pinHeight;
    relativePos.right = childrenPos.right - parentPos.right;
    relativePos.bottom = childrenPos.bottom - parentPos.bottom;
    relativePos.left = childrenPos.left - parentPos.left;
    return relativePos;
}
function positionStaticElements() {
    var fillNumbers = [5531, 1073, 1503, 3349]; //NYC, LONDON, BERLIN, MOSCOW, TOKYO
    var staticPinId = 1;
    for (var _i = 0, fillNumbers_1 = fillNumbers; _i < fillNumbers_1.length; _i++) {
        var fillNumber = fillNumbers_1[_i];
        var relativePos = getPositionArray(fillNumber);
        document.getElementById("static-pin-" + staticPinId).setAttribute("x", "" + relativePos.left);
        document.getElementById("static-pin-" + staticPinId).setAttribute("y", "" + relativePos.top);
        document.getElementById("static-city-text-" + staticPinId).setAttribute("x", "" + relativePos.left);
        document.getElementById("static-city-text-" + staticPinId).setAttribute("y", "" + (relativePos.top + 20));
        staticPinId++;
    }
}
function positionMapPin(pinNumber) {
    var randomMapPoint = Math.floor(Math.random() * 3087) * 2 + 1;
    var relativePos = getPositionArray(randomMapPoint);
    document.getElementById("pin-" + pinNumber).setAttribute("x", "" + relativePos.left);
    document.getElementById("pin-" + pinNumber).setAttribute("y", "" + relativePos.top);
}
