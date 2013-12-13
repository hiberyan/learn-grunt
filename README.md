#learn grunt

Grunt is a javascript task runner, it help automate some common tasks.

#### install grunt-cli globally
`npm install -g grunt-cli`

#### add 2 files Gruntfile.js and package.json to the project root and then run the following command to install npm modules
`npm install`


#### install *COPY* module to the project
`npm install --save-dev grunt-contrib-copy`

- --save-dev will add the plugin to the package.json file automatically

-  modify Gruntfile.js to use copy module
-  any plugin with -contrib- in its name is an offical pulgin maintained by the grunt core team

run `grunt copy` to copy files

#### install *CLEAN* module to the project
`npm install --save-dev grunt-contrib-clean`

run `grunt clean` to delete files


#### install *LESS* to compile less to css (optional)
`npm install --save-dev grunt-contrib-less`

run  `grunt less` to compile .less to .css

#### build width task
after the previous 3 steps, we need run the following 3 commands to accomplish our daily jobs, it's better to create a custom **task** to execute these command automatically

`grunt clean`

`grunt less:dist`

`grunt copy`

use `grunt.registerTask('build',[...])` to create to custom build task wich we can run with `grunt build`

also, we can make the default task of  `grunt`  just run the  `build` task

`grunt.registerTask('default',['build'])`


