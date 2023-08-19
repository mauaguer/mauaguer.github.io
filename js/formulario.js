function sendMail() {
	(function () {
		emailjs.init("WF0IlMUqEVC2vVvas");
	})();

	var params = {
		first_name: document.querySelector("#first_name").value,
		last_name: document.querySelector("#last_name").value,
		email_id: document.querySelector("#email_id").value,
		phone_id: document.querySelector("#phone_id").value,
		message: document.querySelector("#message").value,
	};
	var serviceID = "service_s01lxis";
	var templateID = "template_i0w2kgb";

	emailjs.send(serviceID, templateID, params)
		.then(res => {
			alert("Mensaje enviado correctamente, pronto estaremos contestandote.")
		})
		.catch();
}