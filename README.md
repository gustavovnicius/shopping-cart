Shopping Cart
=============

To create the app I used my own react/redux [boilerplate](https://github.com/gustavovnicius/react-redux-boilerplate). I started it from the principle that it should be simple and as much explicit as possible (because there is a lot of complicated boilerplates out there). There is some explanations about the tools and libs that I used on the boilerplate repo.

You can check out the application [here](https://gustavo.keybase.pub/). I used the keybase.io file system to serve the application (just copied the files to my directory).

Comments
--------
I started by making a sort of a 'Mockup': I used both Rebass and Reflexbox to have a minimum structure and design my components. After that, given that I was using my boilerplate and redux / react-redux were already installed, I simply started by creating some actions, respond to those actions on my reducer and connecting them to the respective components.

I thought that it would be better to simply use redux-thunk to integrate with the API give that it is composed of only one action. If there it was more or for a more complicated setup I would consider to use redux-saga instead.

Since I haven't had enough time on Saturday / Sunday (and I won't need to maintain this application, but I understand that I would need to show some testing skills) I didn't focused a lot on testing, basically I tested the actions and the reducer. For the components, there are still some problems regarding the Rebass / Reflexbox test integration. Both depends on `window` global, so I would need to elaborate a more complete mock or component structure to be able to snapshot test the components that depend on them.

Things to do next
-----------------
If I had more time:
- Pay more attention to test coverage;
- Fix some corner cases:
  - Remaining stock == 0
  - Disable checkout if cart is empty
- Make possible to change the amount that is added to the cart
- Extract the presentational components into smaller components / concerns
- Use ImmutableJS and Flow

Getting started
---------------

- Git clone this repo

```sh
git clone git@github.com:gustavovnicius/shopping-cart.git
```

- [Install NVM](https://github.com/creationix/nvm#install-script) and a [pick](https://github.com/creationix/nvm#usage) a node version.

- In this repo root dir, run `npm install` (`npm i` for friends)

Running

```sh
npm start
```
- In a browser of your choice hit [localhost:8080](localhost:8080)

- You are good to go :)

Testing

To run the test suite:
```sh
npm test
# or
npm run test:watch
```

Bundling for production

```sh
npm run build:production
```

It will generate an `index.html` file pointing to the bundled `.js` files inside `dist` dir. It will also generate two `.js` files: One, `app.[hash].js` will be your application, the other one `vendor.[hash].js` will include all your vendors, for caching.
The bundled files will include a hash in their names for the purpose of cache busting.
