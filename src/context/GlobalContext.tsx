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
  toaster: false,
  setChosenApplication: {} as Dispatch<SetStateAction<string>>,
  setToaster: {} as Dispatch<SetStateAction<boolean>>,
});

const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [chosenApplication, setChosenApplication] = useState<string>("");
  const [toaster, setToaster] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{ chosenApplication, setChosenApplication, toaster, setToaster }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
