<?php  
try
{
	$dbconnect = new PDO('mysql:host=localhost;dbname=cv;charset=utf8', 'root', '',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING));
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}


if (isset($_POST['nom'])) {
	$req =$dbconnect->prepare( "INSERT INTO contact(nom,prenom,email,societe,tel,message)VALUES(:nom,:prenom,:email,:societe,:tel,:message) ");


	if (empty($_POST['tel'])) {
		$_POST['tel'] == 1;
	}
	$req->execute(array(
		'nom'=> $_POST['nom'],
		'prenom'=> $_POST['prenom'],
		'email'=> $_POST['email'],
		'societe'=> $_POST['societe'],
		'tel'=> $_POST['tel'],
		'message'=> $_POST['message']


	));
};


	
	