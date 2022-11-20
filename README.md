# Board Gamer V2

Setting up project:

```sh
npm install
```

```sh
docker run --name bgv2 -e POSTGRES_PASSWORD=supersecret -e POSTGRES_DB=bgv2 -p 5432:5432 -d postgres
npm run migrations
```

```sh
npm run dev --workspace=@bgv2/backend
npm run start --workspace=@bgv2/frontend
```

# TODO

in no particular order

- unit tests, for frontend and backend
- create proper config management (dotenv?), use one master config for everything (currently duplicated), extract config variables
- e2e tests (cypress?), using sqlite3 server (or maybe even spin up postgre)
- dockerize frontend and backend
- create views and routes for creating a new game
- create user in db, add crud to backend, add views to frontend
- add routing to frontend application
- create login
  - local
  - ? SSO: google, microsoft, ...
- statistics page
- integration to boardgamegeek (maybe links to games at start, need to investigate)
- rename game => game_session or something, game should mean a particular board game.
