// Optional for easier use.
var QUnit = QUnitGS2.QUnit;

function loadTests(){
  QUnitGS2.init();

  QUnit.module("Basic tests");

  QUnit.test("Dashboard loads", function ( assert) {

    try {
      var test = loadDashboard();
      assert.ok(true);
    } catch (e) {
      assert.ok(false, "Dashboard didn't load");
    }
  });

  QUnit.start();
  return QUnitGS2.getHtml();

}

// Retrieve test results when ready.
function getResultsFromServer() {
   return QUnitGS2.getResultsFromServer();
}
