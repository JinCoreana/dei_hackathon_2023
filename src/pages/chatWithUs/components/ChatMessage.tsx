import Box from "carbon-react/lib/components/box/box.component";
import Typography from "carbon-react/lib/components/typography/typography.component";

interface ChatMessageProps {
  candidate: boolean;
  chatAgent: string;
  message: string;
}

const ChatMessage = ({
  candidate = false,
  message,
  chatAgent,
}: ChatMessageProps) => {
  return (
    <Box display="flex" justifyContent={candidate ? "left" : "right"} p={1}>
      <Box
        flexWrap="wrap"
        width="70%"
        bg={candidate ? "#85D18C" : "#D9E0E4"}
        style={{ textAlign: candidate ? "left" : "right" }}
        p={2}
        borderRadius="borderRadius100"
      >
        <Typography m={0} variant="h3" fontSize="16px">
          {candidate ? "XX111" : chatAgent}
        </Typography>

        <Typography m={0}> {message}</Typography>
      </Box>
    </Box>
  );
};
export default ChatMessage;
