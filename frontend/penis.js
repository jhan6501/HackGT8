function apiCall() {
    $.ajax({
        url: 'http://localhost:8000/backend/api/',
        success: function(response) {
            console.log(response);
            document.getElementById('container').innerHTML = response['data'];
        }
    })
}

window.onload = function() {
    apiCall();
};