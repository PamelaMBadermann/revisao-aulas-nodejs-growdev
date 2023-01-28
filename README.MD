npm init -y
npm start
npm install typescript
npx tsc index.js
npx tsc --init

# alterar o outDir no tsconfig, e mudar o target para es5

npx tsc | node ./dist/index.js
