function doGet(e) {

  switch (String(e.parameters.v)){
      
    case "tests":
      return loadTests();
      break;

    default:
      return loadDashboard();
  }
  
}

function loadDashboard(){
  return HtmlService.createTemplateFromFile('views/dashboard').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// helper function to add includes to html
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
