import { createContext } from "react";

type NavBarContextProviderProps = {
  children: React.ReactNode;
}

const SideBarContext = createContext(open);

export const SideBarContextProvider = ({children}: NavBarContextProviderProps) => {

}