use DBI;
$myConnection = DBI -> connect ("DBI:mysql:testtable:locahost", "root", "");

$query = $myConnection -> prepare("SELECT lastname FROM workdata");
$result = $query -> execute();
