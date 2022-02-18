const makeQR = (url, filename) => {
	var qrcode = new QRCode("qrcode", {
		text: "http://jindo.dev.naver.com/collie",
		width: 128,
		height: 128,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H,
	});
	qrcode.makeCode(url);

	setTimeout(() => {
		let qelem = document.querySelector("#qrcode img");
		let dlink = document.querySelector("#qrdl");
		let qr = qelem.getAttribute("src");
		dlink.setAttribute("href", qr);
		dlink.setAttribute("download", "filename");
		dlink.removeAttribute("hidden");
	}, 500);
};

makeQR(document.querySelector("#text").value, "qr-code.png");
