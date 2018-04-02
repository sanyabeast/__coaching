"use strict";
var KramerSolver = function(element, x, y){
	this.element = element;
	this.setDimension(x, y);
};

KramerSolver.prototype = {
	createAttributeSelector : function(attributes){
		var selector = "";

		for (var k in attributes){
			selector += "[" + k + "=" + "\"" + attributes[k] + "\"" + "]"; 
		}

		console.log("%c--> createAttributeSelector", "color: red");
		console.log("%cПолучаем селектор по аттрибуту в зависимости от переданного объекта", "color: red");
		console.log("%cОбъект: " + JSON.stringify(attributes), "color: red");
		console.log("%cПолученный селектор: " + selector, "color: red");
		console.log("%cX-X createAttributeSelector\n\n", "color: red");

	},
	cellExists : function(x, y){
		console.log("%c--> cellExists", "color: blue");
		console.log("%cПроверяем существует ли ячейка в системе: ячейка " + x + " " + y, "color: blue");

		var cell = 	document.querySelector(this.createAttributeSelector({ x : x, y : y }));

		

		if (cell){
			console.log("%cЯчейка НЕ существует: " + !!cell, "color: blue");
			console.log("%cX-X cellExists\n\n", "color: blue");
			return true;
		} else {
			console.log("%cЯчейка существует: " + !!cell, "color: blue");
			console.log("%cX-X cellExists\n\n", "color: blue");
			return false;
		}
	},
	addNewCell : function(x, y, value){
		console.log("%c--> addNewCell", "color: purple;");
		console.log("%cСоздаем, настравиваем и добавляем новую ячейку: ячейка " + x + " " + y, "color: purple;");
		console.log("%cX-X addNewCell", "color: purple;");

		var cell = document.createElement("input");
		cell.setAttribute("x", x.toString());
		cell.setAttribute("y", y.toString());

		cell.value = value || 0;

		cell.addEventListener("blur", function(evt){
			cell.value = Number(cell.value) || 0;
		});

		this.element.appendChild(cell);

	},
	setDimension : function(x, y){
		console.log("--> setDimension");
		console.log("%cУстанавливаем измерения системы, новые измерения - x: " + x + ", y: " + y, "color: orange;");

		for (var b = 0; b < y; b++){
			for (var a = 0; a < x; a++){
				if (this.cellExists(a, b) === false){
					this.addNewCell(a, b);
				}
			}
		}

		console.log("%cX-X setDimension", "color: orange;");
	}

};

