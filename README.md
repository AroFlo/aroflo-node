# ![AroFlo logo](https://aroflo.com/wp-content/uploads/2018/12/AroFlo-logo-5.png) Node.js Library

The AroFlo Node library provides convenient access to the AroFlo API from applications written in server-side JavaScript.

---

## Documentation

You can access the AroFlo API documentation at

- **Current Version**: https://api.aroflo.com/docs
- **Preview Version**: https://preview-api.aroflo.com/docs

Please note that this API Library is still under active development and is subject to change over time.

## Installation

### NPM

```bash
npm install git+https://github.com/aroflo/aroflo-node.git
```

#### Yarn
```bash
yarn add git+https://github.com/aroflo/aroflo-node.git
```

## Usage

The package needs to be configured with your AroFlo Extended API credentials.

```js
const AroFlo = require('aroflo-node');
const aroflo = new AroFlo({
    publicPersonalToken: "YOUR_PUBLIC_PERSONAL_TOKEN"
    , secretSigningKey: "YOUR_SECRET_SIGNING_KEY"
});
```

Or using ES modules, this looks more like:

```js
import AroFlo from 'aroflo-node';
const aroflo = new AroFlo({
    publicPersonalToken: "YOUR_PUBLIC_PERSONAL_TOKEN"
    , secretSigningKey: "YOUR_SECRET_SIGNING_KEY"
});
```

### Using Promises

Every method returns a chainable promise which can be used instead of a regular
callback:

```js
const aroflo = require('aroflo-node')({
    publicPersonalToken: "YOUR_PUBLIC_PERSONAL_TOKEN"
    , secretSigningKey: "YOUR_SECRET_SIGNING_KEY"
});

// Create a new message board post:
aroflo.messageBoard
    .messages
    .create({
        subject: 'This is a new post.',
        message: '<p>This is the HTML body of the post.</p>'
    })
    .then((message) => {
        // New post has been created
    })
    .catch((err) => {
        // Deal with an error
    });
```


### Using async/await

On versions of Node.js since to v7.9:

```js
const aroflo = require('aroflo-node')({
    publicPersonalKey: "YOUR_PUBLIC_PERSONAL_KEY"
    , secretSigningKey: "YOUR_SECRET_SIGNING_KEY"
});

const response = await aroflo.messageBoard
    .messages
    .create({
    	subject: 'This is a new post.',
    	message: '<p>This is the HTML body of the post.</p>'
    });
```
