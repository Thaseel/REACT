import { createContext } from "react";

//Context is a built in react component which helps us to pass data within the application without use of props. props sometimes can be hectic if we need to pass data through a lot of places here in this case we can use context as a suitable replacemenet

export const AuthContext = createContext({ isLoggedIn: false, login: () => { }, logout: () => { } })