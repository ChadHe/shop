jQuery.sap.declare("sap.ui.demo.tdg.util.Formatter");

sap.ui.demo.tdg.util.Formatter = {

        uppercaseFirstChar : function(sStr) {
                return sStr.charAt(0).toUpperCase() + sStr.slice(1);
        },

        uppercaseAll : function(sStr) {
                return sStr.toUpperCase();
        },

        dateForm : function(sDate) {
        	if(sDate!=null){
        		var dateformat = sap.ui.core.format.DateFormat.getDateInstance(
        			{pattern : "yyyy/MM/dd"}
        		)
        		return dateformat.format(sDate);
              /*  return sDate.getFullYear() +
                		             "/" +
                		             sap.ui.demo.tdg.util.Formatter.addZero(sDate.getMonth()+1)+
                		             "/" +
                		             sap.ui.demo.tdg.util.Formatter.addZero(sDate.getDate()); */
        	}
        },

        addZero : function(sStr) {
        	return new Array(2-new String(sStr).length+1).join("0") + sStr;
        },

        discontinuedStatusState : function(sDate) {
                return sDate ? "Error" : "None";
        },

        discontinuedStatusValue : function(sDate) {
                return sDate ? "Discontinued" : "";
        },

        currencyValue : function (value) {
                return parseFloat(value).toFixed(2);
        }

};
