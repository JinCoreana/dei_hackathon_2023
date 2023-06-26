import Button from "carbon-react/lib/components/button/button.component";
import {
  FlatTable,
  FlatTableHead,
  FlatTableBody,
  FlatTableRow,
  FlatTableHeader,
  FlatTableCell,
} from "carbon-react/lib/components/flat-table";
import Link from "carbon-react/lib/components/link";
import Notifications from "../../../mock/GETNotifications.json";
import { ReactElement, useContext } from "react";
import Typography from "carbon-react/lib/components/typography/typography.component";
import Box from "carbon-react/lib/components/box/box.component";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

interface NotificationTableProps {
  chosenApplication: string;
}

interface HiddenRowsProps {
  title: string;
  message: string;
  role: string;
}

const NotificationTable = ({
  chosenApplication,
}: NotificationTableProps): ReactElement => {
  const notifications = Notifications.applications.find(
    (application) => application.job_title === chosenApplication
  )?.notifications;

  const HiddenRows = ({
    title,
    message,
    role,
  }: HiddenRowsProps): ReactElement => {
    const navigateTo = useNavigate();
    const { setChatBotOpen, setChatAgent } = useContext(GlobalContext);
    return (
      <>
        <FlatTableRow>
          <FlatTableCell colspan={4}>
            <Box
              m="20px 60px 20px 60px"
              p={20}
              style={{ whiteSpace: "pre-line" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              heigh="100px"
              borderRadius="borderRadius200"
              bg="#D9E0E4"
            >
              <Typography variant="h3" fontSize="18px">
                {title}
              </Typography>
              <Typography variant="p">{message}</Typography>
              <Button
                onClick={() => {
                  navigateTo("/chat_with_us");
                  setChatBotOpen(true);
                  setChatAgent(role);
                }}
              >
                Chat with {role}
              </Button>
            </Box>
          </FlatTableCell>
        </FlatTableRow>
      </>
    );
  };

  return (
    <FlatTable hasStickyHead>
      <FlatTableHead>
        <FlatTableRow>
          <FlatTableHeader>Date</FlatTableHeader>
          <FlatTableHeader>Role</FlatTableHeader>
          <FlatTableHeader>Email</FlatTableHeader>
          <FlatTableHeader>Title</FlatTableHeader>
        </FlatTableRow>
      </FlatTableHead>
      <FlatTableBody>
        {notifications?.map((notification) => {
          return (
            <FlatTableRow
              key={notification.message}
              expandable
              subRows={[
                <HiddenRows
                  title={notification.title}
                  message={notification.message}
                  role={notification.role}
                />,
              ]}
            >
              <FlatTableCell>{notification.date}</FlatTableCell>
              <FlatTableCell>{notification.role}</FlatTableCell>
              <FlatTableCell>{notification.email}</FlatTableCell>
              <FlatTableCell>
                <Link>{notification.title}</Link>
              </FlatTableCell>
            </FlatTableRow>
          );
        })}
      </FlatTableBody>
    </FlatTable>
  );
};

export default NotificationTable;
