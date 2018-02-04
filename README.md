# Twitter

## Requirements
- Mongodb ([How install in Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04))
- Node (*version: >8.0*, recommend to use latest: 8.9)
- pm2

## Installation

Create `.env` file (example in `.env.defaults`) and install dependencies:

```bash
$ cp .env.defaults .env
$ yarn global add pm2
$ yarn install
$ yarn run migrate
```

## Usage

Run application with follow command (run server):

```bash
$ yarn start # run server
```
Go to **http://localhost:8085**.

**Test users**:

- admin@gmail.com 111
- candy@gmail.com 123
