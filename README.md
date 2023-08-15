# search and select input - Voolt

Simple page with a search field to show how to organize a Svelte Project

## How to run the project

Clone the project and installed dependencies with `pnpm install` and then start
a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an
> [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Section A

`Block Data Structure: How will you structure the data of each block to keep its values separate and unique?`

To ensure each block keeps its data separated and unique, you should define the
component state, which is only accessible inside the component. To define the
component state management, we define the 'let' variables which could will be
potentially adjustable from within the functions or statements inside that
component. `Const` variables are not part of the statement, but they are not
accessible from outside either. We could use the same basics for block that
currently are used for Svelte components: internal statement and functionality.

`Block Interaction: How can you design each block to maintain its independence, even when interacting with other blocks on the same page?`

In Svelte we can use props as readonly variables to keep the component
independency clear enough. Despite another frameworks, in Svelte we can forward
the internal state with the directive `bind:this`. In this case, you have to be
carefully designing the component. That internal state forwarded, should
warrantee that using or not that variable, the component independency is not
modified. In the current example, the Input component is a clear example for
that. In some cases, then props and forwarded state exists in a component, is a
good practice to comment it in the code.

`Editing Functionality: What approach would you take to implement an editing functionality specific to each block, without interfering with the functionality of other blocks?`

Since each block as its own scope, functions and state should be only affecting
to the internal functionality of each block.

`Performance Consideration: How will you ensure your approach is scalable and performance-optimized, especially when a page contains a significant number of blocks?`

Blocks require a big amount of memory and operation that could be crucial for
performance. A possible solution for this case when we have a graphic
environment, is that all helpers and mathematical operations responsible of the
blocks manipulation, could be delegated to WASM and Rust. Currently the ways to
make low level code working together with Svelte is easy to implement and the
performance in the worst case is between 3 or 4 times faster.
