/* This controller class contains most tree growing functions and some generic utility functions */
ig.module(
	'game.misc.controller'
)
.requires(
	'impact.impact'
)
.defines(function(){"use strict";

ig.Controller = ig.Class.extend({

	score: 0,

	beatPoints: 0,
	maxBeatPoints: 100,

	/******* UTILITY FUNCTIONS *******/

	randomFromTo: function(from, to) {
       return Math.floor(Math.random() * (to - from + 1) + from);
    },

    inArray: function(arr, obj) {
		return (arr.indexOf(obj) != -1);
	},

	// Calculate what percentage of value2 value1 is.
	calcPercentage: function(value1,value2) {
		return 100 * value1 / value2;
	},

	// Calculate a value2 for targetpercent of value1.
	calcTargetPercentageValue: function(targetpercent,value1) {
		return targetpercent * value1 / 100;
	},

	// Pick a random color.
	pickRandomColor: function(rFrom,rTo,gFrom,gTo,bFrom,bTo) {
		var r = this.randomFromTo(rFrom,rTo);
		var g = this.randomFromTo(gFrom,gTo);
		var b = this.randomFromTo(bFrom,bTo);
		return {r: r, g: g, b: b};
	},

	// Transition color smoothly into next closest shade.
	transitionColor: function(currentColor,targetColor) {
		if (currentColor > targetColor) {
			currentColor -= 5;
		}
		else if (currentColor < targetColor) {
			currentColor += 5;
		}
		return currentColor;
	},

	// Pause game and music.
	pause: function() {
		if (!ig.game.paused) {
			ig.music.pause();
		}
		else {
			ig.music.play();
		}
		ig.Timer.timeScale = (ig.Timer.timeScale === 0 ? 1 : 0);
		this._paused = ig.Timer.timeScale === 0;
		ig.game.paused = !(ig.game.paused);
	}


});

});