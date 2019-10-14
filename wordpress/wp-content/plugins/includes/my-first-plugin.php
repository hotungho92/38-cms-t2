<?php
 /*
 Plugin Name: Demo Text Footer
 Author: Ho Quang Tung
 */
 // Hook the 'wp_footer' action hook, add the function named 'mfp_Add_Text' to it
 add_action("wp_footer", "mfp_Add_Text");
 // Define 'mfp_Add_Text'
 function mfp_Add_Text()
 {
 echo "<p style='  padding-top: 50px; text-align: center; color: #337ab7   ; text-align: centen;'> 

 Copyright © 2019 All rights reserved | This template is made with <3 By Ho Quang Tung </p>";
 }
 