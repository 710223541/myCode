<?php
$upload_dir = "./"; 				// The directory for the images to be saved in
$upload_path = $upload_dir;				// The path to where the image will be saved
$large_image_prefix = "resize"; 			// The prefix name to large image
$thumb_image_prefix = "thumbnail";
$large_image_name = $large_image_prefix.'_l';     // New name of the large image (append the timestamp to the filename)
$thumb_image_name = $thumb_image_prefix.'_t';     // New name of the thumbnail image (append the timestamp to the filename)
$filename = basename($_FILES['image']['name']);
$file_ext = strtolower(substr($filename, strrpos($filename, '.') + 1));
//Image Locations
$large_image_location = $upload_path.$large_image_name;
$thumb_image_location = $upload_path.$thumb_image_name;

if (isset($_FILES['image']['name'])){
	$userfile_name = $_FILES['image']['name'];
	$userfile_tmp = $_FILES['image']['tmp_name'];
	$userfile_size = $_FILES['image']['size'];
	$userfile_type = $_FILES['image']['type'];
	//this file could now has an unknown file extension (we hope it's one of the ones set above!)
	$large_image_location = $large_image_location.".".$file_ext;
	$thumb_image_location = $thumb_image_location.".".$file_ext;
	//put the file ext in the session so we know what file to look for once its uploaded
	$_SESSION['user_file_ext']=".".$file_ext;
	move_uploaded_file($userfile_tmp, $large_image_location);
	chmod($large_image_location, 0777);
	echo $large_image_location;
}

?>