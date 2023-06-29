import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import {
  Card,
  CardRow,
  CardFooter,
  CardColumn,
} from "carbon-react/lib/components/card";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import ChatBotAnswers from "../../../mock/GETChatBotAnswer.json";
import Textarea from "carbon-react/lib/components/textarea";
import Image from "carbon-react/lib/components/image";
import ChatMessage from "./ChatMessage";
import { INITIAL_CHAT } from "./constant";
import chatIcon from "../../../assets/images/chat.png";

interface Chat {
  autoMessage: string;
  link: string;
  isExternal: boolean;
}

const ChatBot = () => {
  const {
    chatData,
    chatAgent,
    chosenApplication,
    setChatData,
    setChatBotOpen,
  } = useContext(GlobalContext);
  const [inputMessage, setInputMessage] = useState("");
  const [autoResponseTriggered, setAutoResponseTriggered] = useState(false);
  const [autoAnswer, setAutoAnswer] = useState<Chat>();

  useEffect(() => {
    setChatData(INITIAL_CHAT);
  }, [chosenApplication, chatAgent]);

  useEffect(() => {
    const filteredArray: any = ChatBotAnswers.autoAnswers.find((item) => {
      const category = Object.keys(item)[0];
      return category.toLowerCase() === chatAgent.toLowerCase();
    });

    if (filteredArray) {
      const category = Object.keys(filteredArray)[0];
      let maxMatchCount = 0;
      let maxMatchResponse: object | null = null;

      filteredArray[category]?.forEach((response: any) => {
        let matchCount = 0;
        response.keywords.forEach((keyword: string) => {
          const lowercaseUserInput = inputMessage.toLowerCase();
          if (Array.isArray(keyword)) {
            if (
              keyword.some((k) => lowercaseUserInput.includes(k.toLowerCase()))
            ) {
              matchCount++;
            }
          } else {
            if (lowercaseUserInput.includes(keyword.toLowerCase())) {
              matchCount++;
            }
          }
        });

        if (matchCount > maxMatchCount) {
          maxMatchCount = matchCount;
          maxMatchResponse = {
            autoMessage: response.autoMessage,
            link: response.href,
            isExternal: response.external,
          };
        }
      });
      console.log(maxMatchResponse);
      if (maxMatchResponse) {
        setAutoAnswer(maxMatchResponse);
      }
    }
  }, [inputMessage]);

  useEffect(() => {
    if (autoResponseTriggered && autoAnswer) {
      setChatData((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: chatAgent,
          autoMessage: autoAnswer.autoMessage,
          link: autoAnswer.link,
          isExternal: autoAnswer.isExternal,
        },
      ]);
    }
    setAutoResponseTriggered(false);
  }, [autoResponseTriggered, autoAnswer]);

  const handleInputChange = (e: any) => {
    setInputMessage(e.target.value);
    setAutoAnswer({ autoMessage: "", link: "", isExternal: false });
  };

  const handleSend = () => {
    setAutoResponseTriggered(true);
    if (inputMessage.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        sender: "XX111",
        autoMessage: inputMessage,
        link: undefined,
        isExternal: undefined,
      };
      setChatData((prev) => [...prev, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <Box
      pt={50}
      ml={50}
      bg="#00324C"
      height="fit-content"
      borderRadius="borderRadius200"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Image
          width={75}
          height={75}
          src={chatIcon}
          verticalAlign="center"
          alt="Sage won best company culture and best company work-life balance awards in 2021"
        />
        <Typography color="white" variant="h1" mb={4} mt={2}>
          Chat with {chatAgent}
        </Typography>
      </Box>
      <Card>
        <CardRow>
          <CardColumn>
            <Box
              height="50vh"
              style={{ overflow: "scroll", overflowX: "hidden" }}
            >
              {chatData.map((chat) => {
                return (
                  <ChatMessage
                    chatAgent={chatAgent}
                    candidate={chat.sender === "XX111"}
                    message={chat.autoMessage}
                    hasLink={chat.link || ""}
                    isExternal={chat.isExternal}
                  />
                );
              })}
            </Box>
            <Box>
              <Textarea
                mr="10%"
                width="10"
                label="XX111:"
                value={inputMessage}
                onChange={handleInputChange}
                name="textbox"
                labelInline
              />
            </Box>
          </CardColumn>
        </CardRow>
        <CardFooter px={1} py={1}>
          <Box width="100%" display="flex" justifyContent="space-around">
            <Box>
              <Button onClick={handleSend} mr={1} buttonType="primary">
                Send
              </Button>
              <Button
                type="file"
                onClick={() => {
                  setChatBotOpen(false);
                }}
                mr={2}
              >
                Close
              </Button>
            </Box>
          </Box>
        </CardFooter>
      </Card>
    </Box>
  );
};
export default ChatBot;
