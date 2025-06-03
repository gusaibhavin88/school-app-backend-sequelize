- npm install --save-dev sequelize-cli

- npx sequelize migration:generate --name create-users-table

- npx sequelize-cli db:migrate

- npx sequelize db:seed --seed 20250603091854-demo-users.js

- npx sequelize db:seed:undo --seed 20250603091854-demo-users.js

- npx sequelize-cli db:migrate:undo

- npx sequelize-cli db:migrate:undo:all
