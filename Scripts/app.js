/// <reference path="objects/label.ts"/>
/**
 * FileName: app.js
 *
 * @author Tetiana Reznychenko
 * @date August 4, 2016
 *
 * StudentID: 300870231
 *
 * @description This file is the main javascript file for the web site
 */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    var canvas;
    var stage;
    var nameLabel;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 frames per second
        createjs.Ticker.on("tick", gameLoop); // call gameLoop every frame
        main();
    }
    function gameLoop() {
        nameLabel.rotation += -2.5;
        stage.update(); // refresh the stage container
    }
    function main() {
        nameLabel = new objects.Label("Tetiana", "40px Consolas", "#000000", 160, 160, true);
        stage.addChild(nameLabel);
    }
    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})();
//# sourceMappingURL=app.js.map