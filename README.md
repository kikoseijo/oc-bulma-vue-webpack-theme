OctoberCMS | Bulma.io + Vue.js + Webpack | Developper Theme
==========

## Combining CSS and JavaScript

This theme uses node to build css and js files, does image optimization and minifiaction.

### Install

Clone repo and `cd` to the directory where you downloaded the full package. Use node.js to install dependencies with the following command:

    npm install

You can `npm run dev` for building css and js from the `/src/` directory to the `theme` directory.
Run `npm run watch` to watch for changes during development.
Run `npm run build` to minify CSS and JS files.

> ⚠️ The build process will delete content form the `theme/assets` folder, please be carefull

## Credits
* [Development Team](http://sunnyface.com)
* [Font-Awesome](http://fontawesome.io)
* [OctoberCMS](http://octobercms.com)
* [Bulma.io](http://bulma.io)
* [VueJs](https://vuejs.org)
* [Laravel](https://laravel.com)
* [Webpack](https://webpack.js.org)



> **Important**: Make sure you keep the `{% styles %}` and `{% scripts %}` placeholder tags as these are used by plugins for injecting assets.
