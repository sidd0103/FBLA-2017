class tasteAuthentication {
    constructor() {
        this.loggedIn = false;
    }
    createUserAccount(payload) {
        var that = this;
        var valid = true;
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            Materialize.toast('<span class="error-icon material-icons">error</span>' + errorMessage, 800, 'toast-style');
            valid = false;
            // ...
        }).then(function () {
            if (valid) {
                that.login(payload['email'], payload['password'], false);
                var user = firebase.auth().currentUser;
                var newPayload = {};
                for (var item in payload) {
                    if (item != 'password' && item != 'vpassword' && item != 'email') {
                        newPayload[item] = payload[item];
                    }
                }
                firebase.database().ref('users/' + user.uid).set({
                    userData: newPayload,
                    type: 'user'
                });
                Materialize.toast("Welcome to Tastery!", 1000, "toast-style");
            }
        });
    }
    login(email, password, toast) {
        var valid = true;
        var that = this;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            Materialize.toast('<span class="error-icon material-icons">error</span>' + errorMessage, 800, 'toast-style');
            valid = false;
            // ...
        }).then(function () {
            if (valid) {
                that.loggedIn = true;
                if (toast) {
                    Materialize.toast("Logged in!", 1000, "toast-style");
                }
            }

        });
    }

}
var tasteAuth = new tasteAuthentication();
$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            firebase.database().ref('/users/' + user.uid).once('value').then(function(snapshot) {
                var data = snapshot.val().userData;
                console.log(data);
                $('.login-box .name').text(data.fname + ' ' + data.lname);
                $('.login-box .email').text(user.email);
            });
            tasteAuth.loggedIn = true;
        } else {
            // User is signed out.
            // ...
            tasteAuth.loggedIn = false;
        }
    });
})