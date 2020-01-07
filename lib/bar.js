"use strict";

function test() {
	console.log("bar!");
}

const bar = {
	test: test
};

module.exports = bar;

