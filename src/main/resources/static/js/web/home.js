$(document).on("click", "#btnempezar", function(){
	let usuario = $("#txtUsuario").val();
	let password = $("#txtPassword").val();
	$("#lblDatos").text("Usuario: "+usuario+" - Password: "+password);
	$("#modalempezar").modal("show");
})