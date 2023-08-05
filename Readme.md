# Backend API

NodeJS + ExpressJS + TypeScript boilerplate.

Using different packages to implement common functionality like -
- Logging with `morgan` and `winston`
- Linting with `eslint`
- Hot-reloading with `nodemon`
- CORS with `cors`
- Secure Headers with `helmet`
- Route validation with `joi`
- Authentication with `passport`
- Database connectivity with `mongoose`
- Caching with `memory-cache`
- API rate limiting with `express-rate-limit`
- HTTP header pollution preventing with `hpp`


### Packages/Features

- [X] `typescript`
- [X] `eslint`
- [X] `express`
- [X] `nodemon`
- [X] `cors`
- [X] `helmet`
- [X] `hpp`
- [ ] `http-status`
- [ ] `memory-cache`
- [X] `express-rate-limit`
- [ ] `Passport JWT Auth`
- [ ] `Passport OAuth` (Facebook, GitHub, Twitter)
- [ ] `joi` for route validation
- [X] `mongoose` for MongoDB connectivity
- [X] `winston`, `morgan` for logging
- [ ] `apidoc` / `swagger` for API docmentation

Package setup may include creating a common util class or functionality to use across application or it can be about just doing the basic configuration in `config/app.ts`.

### Project Setup
 Install packages
```
npm install
```
Start in development mode
```
npm start
```
Dockerized (Development mode)
```
docker-compose up
```
### Testing
```
TODO
```

### How to contribute
1. Create a fork repo, if you are new to forking then [this may help](https://support.atlassian.com/bitbucket-cloud/docs/branch-or-fork-your-repository/).
2. Clone the fork repo & setup a new remote to this repository named `upstream`.
3. For a feature branch use ticket number for eg. `DEV-XXXX`.
4. Push all your changes to `origin` which is your fork.
5. Create a pull request to `release` or `master`.
