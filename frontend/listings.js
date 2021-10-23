function apiCall() {
    $.ajax({
        url: 'http://localhost:8000/TexExchange/get-all-listings/',
        success: function(response) {
            console.log(response);
            document.getElementById('container').innerHTML = response.map(x => x['course'] + "\n").join(" ");
        }
    })
}

function apiPost() {
    $.ajax({
      method: "POST",
      url: 'http://localhost:8000/TexExchange/post-listing',
      data: {
          uuid: '6501',
          title: 'A course in Jerry Han',
          price: '99999',
          phone_number: '6173903836',
          nameVendor: 'Jerry Han',
          entryPassword: 'thinkwhatever'
      }  
    })
}

function apiSearch() {
    $.ajax({
        method: "GET",
        url: 'http://localhost:8000/TexExchange/get-listing-by-id/',
        data: {
            id: '6501',
        },
        success: function(response) {
            console.log(response);
        }
    })
}

window.onload = function() {
    apiCall();
    apiPost();
    apiSearch();
};