const container =
	document.querySelector(".data-container");

function generatebars(num = 20) {

	for (let i = 0; i < num; i += 1) {

		const value = Math.floor(Math.random() * 100) + 1;

		const bar = document.createElement("div");

		bar.classList.add("bar");

		bar.style.height = `${value * 3}px`;
		bar.style.transform = `translateX(${i * 30}px)`;

		const barLabel = document.createElement("label");

		barLabel.classList.add("bar__id");
		barLabel.innerHTML = value;
		bar.appendChild(barLabel);

		container.appendChild(bar);
	}
}


async function BubbleSort(delay = 600) {
	let bars = document.querySelectorAll(".bar");

	for (var i = 0; i < bars.length; i += 1) {
		for (var j = 0; j < bars.length - i - 1; j += 1) {


			bars[j].style.backgroundColor = "#FF4949";
			bars[j + 1].style.backgroundColor = "#FF4949";

			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 600)
			);

			var value1 = parseInt(bars[j].childNodes[0].innerHTML);
			var value2 = parseInt(bars[j + 1]
				.childNodes[0].innerHTML);

			if (value1 > value2) {
				var temp1 = bars[j].style.height;
				var temp2 = bars[j].childNodes[0].innerText;
				bars[j].style.height = bars[j + 1].style.height;
				bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;
				bars[j + 1].style.height = temp1;
				bars[j + 1].childNodes[0].innerText = temp2;
			}


			bars[j].style.backgroundColor = "rgb(0, 183, 255)";
			bars[j + 1].style.backgroundColor = "rgb(0, 183, 255)";
		}

		bars[bars.length - i - 1]
			.style.backgroundColor = " rgb(49, 226, 13)";
	}
	barval.innerHTML = "<h3>Sorted!!!</h3>";

	document.getElementById("Button1")
		.disabled = false;
	document.getElementById("Button1")
		.style.backgroundColor = "#6f459e";

	document.getElementById("Button2")
		.disabled = false;
	document.getElementById("Button2")
		.style.backgroundColor = "#6f459e";
}

generatebars();

function generate() {
	window.location.reload();
}

function disable() {
	document.getElementById("Button1")
		.disabled = true;
	document.getElementById("Button1")
		.style.backgroundColor = "#d8b6ff";

	document.getElementById("Button2")
		.disabled = true;
	document.getElementById("Button2")
		.style.backgroundColor = "#d8b6ff";
}