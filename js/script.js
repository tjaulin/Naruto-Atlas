function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({ scope: "https://www.googleapis.com/auth/drive.readonly" })
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
}

function loadClient() {
    gapi.client.setApiKey('AIzaSyBwRhQcwwbzPA3yvKvh02ZJ5FIA2IJfEj0');
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/drive/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
}

// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    return gapi.client.drive.files.list({
      'pageSize': 10,
      'fields': "nextPageToken, files(id, name, mimeType, webContentLink)",
      'q': "mimeType='image/jpeg' or mimeType='image/png'"
    })
        .then(function(response) {
            console.log(response);
            displayPhotos(response);
        },
        function(err) { console.error("Execute error", err); });
}

// Then, attach these functions to the sign-in button
gapi.load("client:auth2", function() {
    gapi.auth2.init({ client_id: '491298718982-n10fp25ru5ql2iikq2vf0jfh9tle9j1b.apps.googleusercontent.com' });
});

document.getElementById("signin-button").onclick = function() {
    authenticate().then(loadClient);
};

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function decodeJwtResponse(data){
    signIn(parseJwt(data))
}