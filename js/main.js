;(function(){
	"use strict";

	var editorContent = document.querySelector('.ba-editor-content'),
		editorText = document.querySelector('.ba-editor-text');

	editorText.hidden = true;

	document.addEventListener('keydown', editorInit);

	function editorInit(event){
		console.log(event.keyCode);

		if (event.keyCode == 69 && event.ctrlKey && editorText.hidden) { // ctrl + E
			event.preventDefault();
			editorText.value = editorContent.innerHTML.trim();
			editorContent.hidden = true;
			editorText.hidden = false;
			editorText.focus();
		}

		if (event.keyCode == 83 && event.ctrlKey && !editorText.hidden) { // ctrl + S
			event.preventDefault();
			editorContent.innerHTML = editorText.value;
			editorContent.hidden = false;
			editorText.hidden = true;
		}

		if (event.keyCode == 27 && !editorText.hidden) { // Esc
			event.preventDefault();
			editorContent.hidden = false;
			editorText.hidden = true;
		}
	}


})();
