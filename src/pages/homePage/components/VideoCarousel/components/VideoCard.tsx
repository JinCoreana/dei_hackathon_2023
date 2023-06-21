import Box from "carbon-react/lib/components/box/box.component";
import Typography from "carbon-react/lib/components/typography/typography.component";

export interface VideoCardProps {
  url: string;
  title: string;
}

const VideoCard = ({ url, title }: VideoCardProps) => {
  return (
    <Box pr={30}>
      <iframe
        className="videoFrame"
        frameBorder={0}
        height={300}
        width={500}
        src={url}
        allowFullScreen
      ></iframe>
      <Typography fontSize="20px">{title}</Typography>
    </Box>
  );
};
export default VideoCard;
