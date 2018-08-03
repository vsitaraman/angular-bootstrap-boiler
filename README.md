# angular-bootstrap-boiler
	
Boilerplate template for SEO-friendly single-page web apps on Github Pages using the AngularJS Router & Bootstrap 3.
	
## Getting Started	
	
Make sure to properly configure your instance for best usage. View the [live demo here](https://vsitaraman.github.io/angular-bootstrap-boiler/).

#### Configuration
Either (a) if you have server-side access, add the code included below or use the existing `.htaccess` file, otherwise (b) disable HTML location mode by commenting out `$locationProvider.html5Mode(true);` under the AngularJS route provider in `main.js`.

```
RewriteCond %{LA-U:REMOTE_USER} !^$
RewriteCond %{SCRIPT_FILENAME} !-d
RewriteCond %{SCRIPT_FILENAME} !-f
 
RewriteRule ^.*$ index.html
 ```


## Bugs and Issues	
	
Have a bug or an issue with this template? [Open a new issue](./issues) here on GitHub or leave a comment anywhere.	
	
## Creator & License
	
This repository is created by and maintained by **[Viputheshwar Sitaraman](http://sitaraman.vip/)**. All rights reserved. Copyright &copy; 2018, Viputheshwar Sitaraman. No re-use or modification without permission.
	
* https://twitter.com/viputheshwar	
* https://github.com/viputheshwar