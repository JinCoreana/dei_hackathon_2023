import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const GlobalContext = createContext({
  chosenApplication: "Select applicant",
  setChosenApplication: {} as Dispatch<SetStateAction<string>>,
});

const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [chosenApplication, setChosenApplication] = useState<string>("");
  return (
    <GlobalContext.Provider value={{ chosenApplication, setChosenApplication }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
