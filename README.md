# React Render Performance Analysis

This project utilizes `react-devtools-inline` to analyze and understand how React renders components. This knowledge is crucial in identifying bottlenecks and optimizing the performance of our React components.

## How it Works

`react-devtools-inline` is a package that allows us to embed React DevTools into our application. It provides us with a detailed view of the component tree, current state and props, and other useful information about the performance of our components.

By integrating `react-devtools-inline` we can:

- Using React DevTools directly in the UI instead of a separate browser extension.
- Inspect the current state and props of our components.
- Trace when and why certain components re-render.
- Identify components that render too often, thus potentially impacting performance.

## Getting Started

To get started with this project:

1. Clone the repository.
2. Install the dependencies using `yarn install`
3. Start the development server using `yarn dev`

Now you can open the application in your browser and start understanding how React renders components!