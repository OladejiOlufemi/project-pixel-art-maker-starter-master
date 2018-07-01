// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {


	// Select size input

	var pixelCanvas, cell, gridHeight, gridWeight, rows;

	pixelCanvas = $('#pixelCanvas');
	gridHeight = $('#inputHeight').val();
	gridWeight = $('#inputWeight').val();

	pixelCanvas.children().remove()

	for (x = 0; x < gridHeight; x++) {
	pixelCanvas.append('<tr></tr>');
	}

	rows = $('tr');

	for (y = 0; y < gridWeight; y++) {
	rows.append('<td></td>');
	}

	cell = pixelCanvas.find('td');

	// When td is clicked by the user, change color of td
	cell.click(function() {
		// Select color input

		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});

}

// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});
