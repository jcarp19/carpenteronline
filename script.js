"use strict";

const openProject = (path) => {
    let element = document.getElementsByClassName("box");
    if (element) {
        window.location.href = `/${path}/`;
    }
}
