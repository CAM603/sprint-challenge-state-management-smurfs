1. What problem does the context API help solve?

    Context API tries to solve the need for prop-drilling. With context API,instead of passing props down through components, props can be stored on the context object and those props can be retrieved by any components that need the props. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: An object containing info about the action type. They have up to two properties: type (required) and payload (optional). Actions are passed as an argument to reducers which will update the state according to the type and payload if there is a payload. Does not directly update state.

    Reducers: Pure functions that connect the store and actions. They do not directly update state because they return a new object.

    Store: An immutable object that contains the state for app which is why
    the store is refferred to as the single source of truth.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is immutable. When application state changes we clone the state object, modify it, and replace the original state with the copy.

    Component state can only be updated within that component and passed down as props to its children components.


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk is middleware that allows us to do async operations inside of action creators. It intercepts the action and can make an api call before the action gets to the reducer. When an action creator gets called, redux-thunk intercepts it and acts on the returned data. If returned data is an action, the action goes to the reducer. If the returned data is a function, it invokes the function and passes the dispatch function as an argument. With redux-thunk, the action creator's returned thunk has access to the dispatch function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    My favorite state management system is Redux. Although the setup is a lot of extra work, I really like the ability to have access to my app state in any component and it has made some problems I have had in the past a lot easier to solve.