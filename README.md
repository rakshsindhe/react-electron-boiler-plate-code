# React Electron Bolier Plate Code

<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), [Electron](https://electronjs.org/), and [electron-builder](https://github.com/electron-userland/electron-builder).

## Usage
1. Clone this repository.
```
git clone https://github.com/rakshsindhe/react-electron-boiler-plate-code.git <your-project-name>
```
2. If you havent already, install Yarn globally. You can also use npm
```
npm install -g yarn
```
3. Navigate into project root and install dependencies.
```
cd <your-project-name> && npm install
```
4. Run dev server.
```
npm run start
```
## Deploy to Desktop
1. Run the build process
```
npm run build
```
2. Go into your project folder using your file explorer. Navigate to the `dist` folder and open it. Then double-click `<your-project-name>` Setup 0.1.0. Your app should open and there should now be an icon on your desktop for this app.

**Use a Custom Icon**

Add a 256 x 256 .png or .ico image in your public folder. It should be either `icon.ico` or `icon.png`. Update the `icon` property in your `package.json` if necessary. You'll see this icon only in production. For more info, see the [electron-builder documentation](https://www.electron.build/icons)




