# React to Github

## 0. 개발환경 셋팅
  - 개발 서버
    - GCP(Ubuntu 18.04)
  - 개발 툴
    - VS Code (extension: Remote-SSH)
  - 호스팅 서버
    - Github


## 1. Create-react-app 배포 및 호스팅
```sh
# 0. Install node
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# 1. Install react module 
sudo npm install -g create-react-app

# 2. Craete react project
craete-react-app react-study

# 3. Run react app
cd react-study
sudo npm run start

# 4. Init git
cd react-study
git init
git add .
git commit -m "Init react app"
git remote add origin https://github.com/rivernine/intro.git
git push -u origin master

# 5. Install gh-pages
sudo npm install gh-pages --save-dev

# 6. Edit package.json
"homepage": "http://rivernine.github.io/intro"
"scripts": {
    "predeploy" : "npm run build"
    "deploy": "gh-pages -d build"
}

# 7. Run
sudo npm run deploy
```

## 2. Design tool
```sh
# Antd
npm install antd
import 'antd/dist/antd.css';

# Material-UI
npm install @material-ui/core
npm install @material-ui/icons
```