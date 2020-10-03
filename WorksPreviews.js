var db = null; 
function init() {
      if (document.getElementById("isRendered").innerHTML != "1"){
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: (tabletop)=> {
                         db = tabletop;
                     }} )
      }
  }

function listWorksOfType(string type){
    
    
    
}