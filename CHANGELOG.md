# Changelog

## 0.8.1 (2026-05-19)

Full Changelog: [v0.8.0...v0.8.1](https://github.com/violetbuse/rocktick-typescript/compare/v0.8.0...v0.8.1)

### Bug Fixes

* **typescript:** upgrade tsc-multi so that it works with Node 26 ([be7a26a](https://github.com/violetbuse/rocktick-typescript/commit/be7a26a7d44e8c3e681113bd4435db9bbbae262a))


### Chores

* **format:** run eslint and prettier separately ([1ccbac1](https://github.com/violetbuse/rocktick-typescript/commit/1ccbac1e04b900e24e1c38b9e68ac3afdc90fa60))
* redact api-key headers in debug logs ([f84f6e7](https://github.com/violetbuse/rocktick-typescript/commit/f84f6e7cd8f4b1406dab245fd80355a1bb819f5d))
* **tests:** remove redundant File import ([b0a53d1](https://github.com/violetbuse/rocktick-typescript/commit/b0a53d1a186feb85a43d342927da65e960f162b9))

## 0.8.0 (2026-04-28)

Full Changelog: [v0.7.4...v0.8.0](https://github.com/violetbuse/rocktick-typescript/compare/v0.7.4...v0.8.0)

### Features

* support setting headers via env ([842ffb1](https://github.com/violetbuse/rocktick-typescript/commit/842ffb12d263d45ade062dbf2afccc7168e746b5))


### Chores

* **ci:** skip lint on metadata-only changes ([5e54a4d](https://github.com/violetbuse/rocktick-typescript/commit/5e54a4df4521df9cbd3c7194e7fbcb78edc03f31))
* **internal:** codegen related update ([770ae2a](https://github.com/violetbuse/rocktick-typescript/commit/770ae2a204b2cc575244b039844bb84c9253f870))
* **internal:** codegen related update ([1eda2e7](https://github.com/violetbuse/rocktick-typescript/commit/1eda2e71451147ff54da4c5115a7746adc2af15e))
* **internal:** more robust bootstrap script ([d58ea3f](https://github.com/violetbuse/rocktick-typescript/commit/d58ea3f2bd597ef5653f68a07b4a9cc56ebabef9))
* **internal:** tweak CI branches ([1dcb16a](https://github.com/violetbuse/rocktick-typescript/commit/1dcb16abc50f3ec02bbd1e86c782bd205894a97e))
* **internal:** update dependencies to address dependabot vulnerabilities ([6331c1a](https://github.com/violetbuse/rocktick-typescript/commit/6331c1ab0d455a3968692b2a14ac5c8ae3213e2f))
* **internal:** update gitignore ([bd1f6fd](https://github.com/violetbuse/rocktick-typescript/commit/bd1f6fdce44d506827967e3a2833e1f219be8c99))

## 0.7.4 (2026-03-07)

Full Changelog: [v0.7.3...v0.7.4](https://github.com/violetbuse/rocktick-typescript/compare/v0.7.3...v0.7.4)

### Bug Fixes

* **client:** preserve URL params already embedded in path ([c55647f](https://github.com/violetbuse/rocktick-typescript/commit/c55647f16e3f82931dbd8f85c622b4fef7052c80))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([31df6b3](https://github.com/violetbuse/rocktick-typescript/commit/31df6b3a6c77e48cf33860a38bb24e22723761f1))
* **internal:** codegen related update ([98edcd9](https://github.com/violetbuse/rocktick-typescript/commit/98edcd99219fb892b4ad778f94922b756e11764a))
* **internal:** move stringifyQuery implementation to internal function ([a39d9e3](https://github.com/violetbuse/rocktick-typescript/commit/a39d9e39db3556c11ffc03e54105176e06ca11ef))

## 0.7.3 (2026-02-24)

Full Changelog: [v0.7.2...v0.7.3](https://github.com/violetbuse/rocktick-typescript/compare/v0.7.2...v0.7.3)

### Bug Fixes

* **docs/contributing:** correct pnpm link command ([debf8f6](https://github.com/violetbuse/rocktick-typescript/commit/debf8f6f6a279c8f436a1c2fd6a13d6cfef7e2a4))


### Chores

* **internal/client:** fix form-urlencoded requests ([305ba45](https://github.com/violetbuse/rocktick-typescript/commit/305ba4573a2d1a069480974e70d64dcf33078799))
* **internal:** avoid type checking errors with ts-reset ([c09dd78](https://github.com/violetbuse/rocktick-typescript/commit/c09dd782a35134d4dce8b787d22f687673880dc3))
* **internal:** fix pagination internals not accepting option promises ([05f9c6b](https://github.com/violetbuse/rocktick-typescript/commit/05f9c6b9657a55d2a2bb5415ee0a14b4512ce4d6))
* **internal:** remove mock server code ([458710c](https://github.com/violetbuse/rocktick-typescript/commit/458710c854eeb33666135860e18234557cccd8a8))
* **internal:** upgrade pnpm ([9a3ebb2](https://github.com/violetbuse/rocktick-typescript/commit/9a3ebb218b5f2335112f87cbf6858cf8c656446f))
* **internal:** upgrade pnpm version ([095d22b](https://github.com/violetbuse/rocktick-typescript/commit/095d22beb4655533fc629eaf5a5bd7bdf6963131))
* update mock server docs ([b5bc99e](https://github.com/violetbuse/rocktick-typescript/commit/b5bc99e4a70a3910ba346e8cf7ed3e3ff8fd959a))

## 0.7.2 (2026-02-06)

Full Changelog: [v0.7.1...v0.7.2](https://github.com/violetbuse/rocktick-typescript/compare/v0.7.1...v0.7.2)

### Bug Fixes

* **client:** avoid removing abort listener too early ([9e7fe08](https://github.com/violetbuse/rocktick-typescript/commit/9e7fe08c16c12cffce230290521d0ab918b414f8))


### Chores

* **client:** do not parse responses with empty content-length ([7ae6923](https://github.com/violetbuse/rocktick-typescript/commit/7ae6923a7cd1ff879462a5ecabab648e40c85bc1))
* **client:** restructure abort controller binding ([cd7b486](https://github.com/violetbuse/rocktick-typescript/commit/cd7b4860540afc267ff69d39297ffd9c9371d3cc))

## 0.7.1 (2026-02-03)

Full Changelog: [v0.7.0...v0.7.1](https://github.com/violetbuse/rocktick-typescript/compare/v0.7.0...v0.7.1)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([a62dd22](https://github.com/violetbuse/rocktick-typescript/commit/a62dd224d8739e0575f47637063fcf64cb8f82b1))


### Chores

* break long lines in snippets into multiline ([1150316](https://github.com/violetbuse/rocktick-typescript/commit/1150316a3aea52b512984160d65d2ccfbdcc97f8))
* **ci:** upgrade `actions/github-script` ([d880fbc](https://github.com/violetbuse/rocktick-typescript/commit/d880fbc3e53b946447d2c2a5db5a430e1183e465))
* **internal:** codegen related update ([22dd20b](https://github.com/violetbuse/rocktick-typescript/commit/22dd20b8531b0e1fe01015c8d42b751e5006f4dd))
* **internal:** update `actions/checkout` version ([af6dca0](https://github.com/violetbuse/rocktick-typescript/commit/af6dca0856f96699dd5991b9add954809ed3b712))
* **internal:** update lock file ([98a9a3c](https://github.com/violetbuse/rocktick-typescript/commit/98a9a3ca649b8a5867b8d65d00b540c11a41cdd6))
* **internal:** upgrade babel, qs, js-yaml ([bcde964](https://github.com/violetbuse/rocktick-typescript/commit/bcde964656540248ad55e9b50db5838411e6b971))
* **internal:** upgrade brace-expansion and @babel/helpers ([3f96eda](https://github.com/violetbuse/rocktick-typescript/commit/3f96eda3a9947d5040080fbe9b0280d40338044e))

## 0.7.0 (2025-12-19)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/violetbuse/rocktick-typescript/compare/v0.6.0...v0.7.0)

### Features

* **api:** changed production from rocktick.com to cloud.rocktick.com ([15bdf7e](https://github.com/violetbuse/rocktick-typescript/commit/15bdf7e726e90cd15756ade06479363ba667b1da))

## 0.6.0 (2025-12-17)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/violetbuse/rocktick-typescript/compare/v0.5.0...v0.6.0)

### Features

* **api:** added tenant id to client settings ([cb8501f](https://github.com/violetbuse/rocktick-typescript/commit/cb8501f7e2b66cd83c77f6dac3c10b68bd000b50))

## 0.5.0 (2025-12-15)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/violetbuse/rocktick-typescript/compare/v0.4.0...v0.5.0)

### Features

* **api:** changed models request and response to HttpRequest and HttpResponse ([ef46a88](https://github.com/violetbuse/rocktick-typescript/commit/ef46a889199dcf3872f8e31812e0f284f64f6923))


### Bug Fixes

* **api:** changed names also to http_request and http_response ([f7ea14a](https://github.com/violetbuse/rocktick-typescript/commit/f7ea14a473c4c3c4cea0cef15927c2f7c4118cb1))

## 0.4.0 (2025-12-15)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/violetbuse/rocktick-typescript/compare/v0.3.0...v0.4.0)

### Features

* **api:** api update ([e26a11a](https://github.com/violetbuse/rocktick-typescript/commit/e26a11ad01244a3f03804e779dac28b20cd30bbb))

## 0.3.0 (2025-12-14)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/violetbuse/rocktick-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** added a param_location and reverted items to unknown ([f0786d9](https://github.com/violetbuse/rocktick-typescript/commit/f0786d9cb84e9c0493bf1be00f170997543356f1))
* **api:** changed local dev url port ([bb178f4](https://github.com/violetbuse/rocktick-typescript/commit/bb178f4dea1e1a6dd636a9d2d29f87b160825354))
* **api:** changed param location to query ([e368c76](https://github.com/violetbuse/rocktick-typescript/commit/e368c7670291b42674379f122daa3bc1d6025c77))

## 0.2.0 (2025-12-14)

Full Changelog: [v0.1.19...v0.2.0](https://github.com/violetbuse/rocktick-typescript/compare/v0.1.19...v0.2.0)

### Features

* **api:** changed environment urls ([4527e28](https://github.com/violetbuse/rocktick-typescript/commit/4527e2840a4ef816f3ac9aad9dc4d19a794e6e1e))

## 0.1.19 (2025-12-14)

Full Changelog: [v0.0.1...v0.1.19](https://github.com/violetbuse/rocktick-typescript/compare/v0.0.1...v0.1.19)

### Features

* added pagination to the api ([7d44bb7](https://github.com/violetbuse/rocktick-typescript/commit/7d44bb7fe171080f225d7598a22dfc372638dd4d))


### Bug Fixes

* added example request for pagination ([1bbd315](https://github.com/violetbuse/rocktick-typescript/commit/1bbd3156e6ae22e425cbc6e3357b2cf076582ddf))


### Chores

* update SDK settings ([3aed490](https://github.com/violetbuse/rocktick-typescript/commit/3aed4905e26ccac9eac3f5d1a31358a5144b1915))
* update SDK settings ([81f5792](https://github.com/violetbuse/rocktick-typescript/commit/81f579296f87ea4597e14b54f33c92d8c5ac9bba))
