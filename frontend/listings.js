function apiCall() {
    $.ajax({
        url: 'http://localhost:8000/TexExchange/get-all-listings/',
        success: function(response) {
            console.log(response);
            document.getElementById('container').innerHTML = response.map(x => x['course'] + "\n").join(" ");
        }
    })
}

async function apiPost() {
    $.ajax({
      method: "POST",
      url: 'http://localhost:8000/TexExchange/post-listing/',
      data: {
          uuid: '6501',
          title: 'An elementary introduction to Jerry Han',
          course: 'Jerry 1100',
          price: '99999',
          phone_number: '6173903836',
          nameVendor: 'Jerry Han',
          entryPassword: 'thinkwhatever'
      }  
    });
    $.ajax({
      method: "POST",
      url: 'http://localhost:8000/TexExchange/post-listing/',
      data: {
          uuid: '6511',
          title: 'An elementary introduction to Jerry Han, Honors',
          course: 'Jerry 1100',
          price: '99999',
          phone_number: '6173903836',
          nameVendor: 'Jerry Han',
          entryPassword: 'thinkwhatever'
      }  
    });

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
    $.ajax({
        method: "GET",
        url: 'http://localhost:8000/TexExchange/get-listing-by-id/',
        data: {
            id: '6511',
        },
        success: function(response) {
            console.log(response);
        }
    })
}

function apiDelete() {
    $.ajax({
        method: "POST",
        url: 'http://localhost:8000/TexExchange/delete-listing/',
        data: {
            uuid: '6511',
            entryPassword: 'thinkwhatever'
        },
        success: function(response) {
            console.log(response);
        }
    })
}

window.onload = async function() {
    await apiPost();
    apiCall();
    apiSearch(); //With Jerry Honors
    apiDelete();
    apiPost();
};