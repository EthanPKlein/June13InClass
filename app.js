class Hello {
	run() {
		document.querySelector("#helloDiv").innerHTML = "hello world";
	}
}

var hello = new Hello();
hello.run();

// babel app.es6 -o app.js
