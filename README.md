# 2017
Overheard Map of Now: 2017
This is Week 2 with Jeff Ko and Mati Jhurry :)

## Site build
The site has a static index.html, and main.css. 

The images and javascript are compiled using gulp. To get up and running with this follow the instructions below:
- install node and npm - [guide](https://www.google.co.uk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwiBiMWTzrvXAhUBAcAKHT4xAKIQFggwMAI&url=http%3A%2F%2Fblog.teamtreehouse.com%2Finstall-node-js-npm-mac&usg=AOvVaw2M2Rz4VLd1djnPTMWaWt3O)
- install Bower for managing js dependencies (jquery at the moment) `npm install -g bower`
- install all the npm packages, run `npm install` from the project folder.
- install Bower packages, `bower install`
- Now run `gulp` to compile everything. check that you have all the assets
- You can run `gulp watch`. Gulp will build when you save a file and run browsersync too.

## Github Pages
- when you push to master, github pages will update with your changes.
