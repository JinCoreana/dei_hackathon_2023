import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { INITIAL_CHAT } from "../pages/chatWithUs/components/constant";

export const GlobalContext = createContext({
  chosenApplication: "Select applicant",
  chatBotOpen: false,
  chatAgent: "",
  chatData: INITIAL_CHAT as Chat[],
  toaster: false,
  setChosenApplication: {} as Dispatch<SetStateAction<string>>,
  setToaster: {} as Dispatch<SetStateAction<boolean>>,
  setChatAgent: {} as Dispatch<SetStateAction<string>>,
  setChatData: {} as Dispatch<SetStateAction<Chat[]>>,
  setChatBotOpen: {} as Dispatch<SetStateAction<boolean>>,
});

export type Chat = {
  id: number;
  sender: string;
  autoMessage: string;
  link: string | undefined;
  isExternal: boolean | undefined;
};

const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [chosenApplication, setChosenApplication] = useState<string>("");
  const [chatBotOpen, setChatBotOpen] = useState<boolean>(false);
  const [chatAgent, setChatAgent] = useState("");
  const [chatData, setChatData] = useState<Chat[]>(INITIAL_CHAT);
  const [toaster, setToaster] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        chosenApplication,
        chatBotOpen,
        chatAgent,
        chatData,
        toaster,
        setChosenApplication,
        setChatBotOpen,
        setChatAgent,
        setChatData,
        setToaster,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider };
