<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'test_cms' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`1zHL2f,bkI=w>K({tMwd6E([*.-XY8)Wn*yKWn<9,YAYm>WU2)Mj@(N|&9ix3Wb' );
define( 'SECURE_AUTH_KEY',  '6dg(UH<d&B~%oc${Hu`.j#W}C[$`*Xx5kVJEo`;T0CfDi-X-&~I(tzK?aicaS+x4' );
define( 'LOGGED_IN_KEY',    'rpmh ?sU4)R}@zL%566#bK.35thz`4#,G-NT.X-;i1&csKNuW46+ce_6-2jUwBp>' );
define( 'NONCE_KEY',        'rO9cE#>7Q~`VT$saPB;R-zovq$?(_&uPG@So*!:r28*MPsoK0u?mxqLU6]m,f%L%' );
define( 'AUTH_SALT',        'j[MgN)9~)6a<X-}iZg^txd:Vz!sln)xgM[ YiuOtXC)pM]1=M$GPv6*ql06K:0MN' );
define( 'SECURE_AUTH_SALT', ']=J^ Ovg{X21eveW0(a0Z1U`9 ta;&x5RkzZQgnJ,O`/oRnebm]In ^sHFwO-ap1' );
define( 'LOGGED_IN_SALT',   '`YLY2j#=p<y?wJ]mkC~3fwzqB>($mf!N <AHtg*jznNGxJli4<Mu:P2,i,b?H>q[' );
define( 'NONCE_SALT',       ' KY/e>;5DxSI)hxha?D/W&tk/P1UzVYKnv4 bu1Y|8FuuZ2-^M`#FY;EAS(k+x5n' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
