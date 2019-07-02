let pinHeight: number;
pinHeight = 19;

window.onload = () => {
    loopPositionMapPinning();

    let myTimer = setInterval(function(){
        loopPositionMapPinning();
    }, 10000);

    setTimeout(stopMapPinFunction, 5 * 60 * 1000);

    function stopMapPinFunction() {
        clearInterval(myTimer);
    }

    positionStaticElements();
};

function loopPositionMapPinning() {
    for (let i = 0; i < 60; i++) {
        let pinId = i + 1;
        positionMapPin(pinId);
    }
}

function getPositionArray(pinNumber: number) {
    let parentPos = document.getElementById('mapSvg').getBoundingClientRect();
    let childrenPos = document.getElementById('Fill-' + pinNumber).getBoundingClientRect();
    let relativePos = {};

    relativePos.top = childrenPos.top - parentPos.top - pinHeight;
    relativePos.right = childrenPos.right - parentPos.right;
    relativePos.bottom = childrenPos.bottom - parentPos.bottom;
    relativePos.left = childrenPos.left - parentPos.left;

    return relativePos;
}

function positionStaticElements() {
    let fillNumbers: number[] = [5531, 1073, 1503, 3349]; //NYC, LONDON, BERLIN, MOSCOW, TOKYO
    let staticPinId: number = 1;

    for (let fillNumber of fillNumbers) {
        let relativePos = getPositionArray(fillNumber);

        document.getElementById("static-pin-" + staticPinId).setAttribute("x", `${relativePos.left}`);
        document.getElementById("static-pin-" + staticPinId).setAttribute("y", `${relativePos.top}`);

        document.getElementById("static-city-text-" + staticPinId).setAttribute("x", `${relativePos.left}`);
        document.getElementById("static-city-text-" + staticPinId).setAttribute("y", `${relativePos.top + 20}`);

        staticPinId++;
    }
}

function positionMapPin(pinNumber: number) {
    let randomMapPoint = Math.floor(Math.random() * 3087) * 2 + 1;
    let relativePos = getPositionArray(randomMapPoint);

    document.getElementById("pin-" + pinNumber).setAttribute("x", `${relativePos.left}`);
    document.getElementById("pin-" + pinNumber).setAttribute("y", `${relativePos.top}`);
}