# Url shortening app
This application generate short url from any url input. 
## How to run the app
Before this app can machine you have to install and setup
* node [(How to download and install)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiYtIG8h4DrAhUSUxUIHeLcBNsQFjAAegQIARAC&url=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload%2F&usg=AOvVaw3mpn_kqKBfLUVM2X6RrMKX)
* yarn [(How to download and install)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj959nbh4DrAhWQTRUIHeLdBTwQFjAAegQIARAC&url=https%3A%2F%2Fyarnpkg.com%2Flang%2Fen%2Fdocs%2Finstall%2F&usg=AOvVaw2NZ6b4ay9pnQPf3rzVCezK)
* vue [(How to download and install)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi37pzvh4DrAhXdQhUIHd2UDE8QFjAAegQIBBAB&url=https%3A%2F%2Fvuejs.org%2Fv2%2Fguide%2Finstallation.html&usg=AOvVaw3ZqY_Fq2x6WnHuKn6tPn7E)
* mongodb [(How to download and install)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjaivX-h4DrAhX1weYKHeo3AXcQFjAAegQIAxAB&url=https%3A%2F%2Fdocs.mongodb.com%2Fmanual%2Finstallation&usg=AOvVaw0gDSkZxcnQW2dUio17T_7I)
* docker [(How to download and install)](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjTtb-JiIDrAhXPSxUIHQpPBSwQFjADegQIAhAB&url=https%3A%2F%2Fdocs.docker.com%2Fengine%2Finstall%2F&usg=AOvVaw3oxUtu6GW_HNWz3ZCPMLU_)

### Run with docker
Open the parent folder, Run command in terminal
```
docker-compose up
```

### Run manually
Start your mongodb server, Run command in terminal
```
mongod
```
Then open server folder install node packages and start backend server, Run command in terminal
```
yarn install
yarn start
```

And finally open client folder install node packages and start frontend server, Run command in terminal
```
yarn install
yarn serve
```

### Run some test
Using Jest Framework to test API's responds at the backend, navigate the server folder, Run command in terminal
```
yarn jest
```