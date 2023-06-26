import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import {
  Card,
  CardRow,
  CardFooter,
  CardColumn,
} from "carbon-react/lib/components/card";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import ChatBotAnswers from "../../../mock/GETChatBotAnswer.json";
import Textarea from "carbon-react/lib/components/textarea";
import ChatMessage from "./ChatMessage";
import { INITIAL_CHAT } from "./constant";

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
  const [autoAnswer, setAutoAnswer] = useState("");

  useEffect(() => {
    setChatData(INITIAL_CHAT);
  }, [chosenApplication, chatAgent]);
  console.log(autoAnswer);

  useEffect(() => {
    ChatBotAnswers.autoAnswers.forEach((item) => {
      const lowercaseUserInput = inputMessage.toLowerCase();
      item.keywords.forEach((keyword) => {
        if (lowercaseUserInput.includes(keyword.toLowerCase())) {
          setAutoAnswer(item.autoMessage);
        }
      });
    });
  }, [inputMessage]);

  useEffect(() => {
    if (autoResponseTriggered && autoAnswer) {
      setChatData((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: chatAgent,
          message: autoAnswer,
        },
      ]);
    }
    setAutoResponseTriggered(false);
  }, [autoResponseTriggered, autoAnswer]);

  const handleInputChange = (e: any) => {
    setInputMessage(e.target.value);
    setAutoAnswer("");
  };

  const handleSend = () => {
    setAutoResponseTriggered(true);
    if (inputMessage.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        sender: "XX111",
        message: inputMessage,
      };
      setChatData((prev) => [...prev, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <Card>
      <CardRow>
        <CardColumn>
          <Typography variant="h1" mb={4} mt={2}>
            Chat with {chatAgent}
          </Typography>
          <Box
            height="50vh"
            style={{ overflow: "scroll", overflowX: "hidden" }}
          >
            {chatData.map((chat) => {
              return (
                <ChatMessage
                  chatAgent={chatAgent}
                  candidate={chat.sender === "XX111"}
                  message={chat.message}
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
  );
};
export default ChatBot;
