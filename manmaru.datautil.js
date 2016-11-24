/**
	Utilities for data manipulating.
	
	@author Adrien Dufond - manmaru, Inc.
	@src https://github.com/adrien-dufond/manmaru
	@version 0.1
	@since 17/12/2013
	
	Distributed under the terms of the MIT license.
	http://www.opensource.org/licenses/mit-license.html
*/

DataUtil = (function() {
	
	function DataUtil() {}
   
	/**
		Set Cookie.
		@param c_name: Cookie file name.
		@param value: string.
		@param exdays: expiration day.
	*/
	DataUtil.setCookie = function(c_name,value,exdays) {
		if(exdays == undefined) exdays = 30;
        var exdate=new Date();
            exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
	};
	
	/**
		Get Cookie.
		@param c_name: Cookie file name.
		@return string
	*/
	DataUtil.getCookie = function(c_name) {
		var results = document.cookie.match('(^|;) ?' + c_name + '=([^;]*)(;|$)');
		if (results) return ( unescape(results[2]) );
		else return null;
	};
	
	/**
		Delete Cookie.
		@param c_name: Cookie file name.
	*/
	DataUtil.deleteCookie = function(c_name) {
		var cookie_date = new Date();  // current date & time
		cookie_date.setTime(cookie_date.getTime() - 1);
		document.cookie = c_name += "=; expires=" + cookie_date.toGMTString();
	};
	
    return DataUtil;
    
})();
