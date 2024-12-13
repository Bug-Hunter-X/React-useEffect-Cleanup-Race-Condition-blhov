# React useEffect Cleanup Race Condition

This repository demonstrates a common, yet subtle bug in React applications involving the `useEffect` hook and its cleanup function.  The example showcases a scenario where state updates continue after the component has unmounted due to a race condition between the cleanup and asynchronous state updates.

The provided `bug.js` file contains the erroneous code, while `bugSolution.js` offers a corrected version.  The bug is primarily caused by the asynchronous nature of `setInterval` not being properly handled within the cleanup function of `useEffect`.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console and component behavior – you should observe warnings related to state updates after the component has been unmounted.

## Solution
The solution provided in `bugSolution.js` addresses this by incorporating a check within the `setInterval` callback to ensure that the component is still mounted before attempting a state update.