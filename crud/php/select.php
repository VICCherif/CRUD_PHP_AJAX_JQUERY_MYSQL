<?php
	include "db.php";
	$data = array();
		$sql = "SELECT * FROM libro";
		$ejecutar = $con->query($sql);
		while ($row = mysqli_fetch_object($ejecutar)){
		 $data[]=$row;
		}
		echo json_encode($data);
?>
