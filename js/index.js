var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Cordova cargado ------------------------: ' + id);
    }
};
 
function fbLogin () {
	//---------------ANDROID----------------------------------------------------------//
	//Si quieres hacer login con ANDROID
 
	//Funcion success
	var fbLoginSuccess = function (userData) {
		//Te puede interesar utilizar algun dato que lleve el objecto userData, como el name, surname, email y alguna cosa mas...
	    alert("UserInfo: " + JSON.stringify(userData));
 
	    //Tambien te puede interesar recoger este token de facebook para llevarlo a tu servidor y hacer un login seguro a través de facebook
 
	    facebookConnectPlugin.getAccessToken(function(token) {
	        alert("Token: " + token);
	    }, function(err) {
	        alert("Could not get access token: " + err);
	    });
	}
 
	//Funcion de error
	var fbLoginError = function (error) {
		alert("Hay errores con FB: " + error)
	}
 
	//Llamada al plugin para realizar el login
	facebookConnectPlugin.login(["basic_info"], fbLoginSuccess, fbLoginError);
 
	//---------- IOS----------------------------------------------------------------------//
 
	//Si quieres hacer login con IOS - Comenta el apartado anterior y descomenta este apartado
	//Funcion success
	/*
	var fbLoginSuccess = function (userData) {
		//Te puede interesar utilizar algun dato que lleve el objecto userData, como el name, surname, email y alguna cosa mas...
	    alert("UserInfo: " + JSON.stringify(userData));
	    //O directamente trabajar sobre el objeto
	    var token = userData.authResponse.accessToken;
	    //MiServicio.funcion(parametro token)....y hacer operaciones correspondientes
	    //No se si exactamente está el token en esa propiedad del objeto que he declarado
	}
 
	//Funcion de error
	var fbLoginError = function (error) {
		alert("Hay errores con FB: " + error)
	}
 
	//Llamada al plugin para realizar el login
	facebookConnectPlugin.login(["basic_info"], fbLoginSuccess, fbLoginError);
	*/
}
 
function fbLogout () {
    var fbLogoutSuccess = function (response){
        //devuelve OK
        //Asi que se podria hacer "if (response == "OK") { ha salido y voy a la pantalla inicial fuera de mi app}
        alert(response);
        console.log(response);
    }
 
    var fbLogoutError = function (error) {
        alert("Hay errores con FB: " + error)
    }
    facebookConnectPlugin.logout(fbLogoutSuccess, fbLogoutError);
}