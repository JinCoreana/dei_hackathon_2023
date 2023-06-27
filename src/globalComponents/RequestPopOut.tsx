import Box from "carbon-react/lib/components/box/box.component";
import Button from "carbon-react/lib/components/button/button.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import Image from "carbon-react/lib/components/image";
import { ReactElement, useState } from "react";
import Alert from "carbon-react/lib/components/alert";
import { GridItem } from "carbon-react/lib/components/grid";

interface PopOutBox {
  isRequested?: boolean;
}

const navigationMenu = [
  { title: "About", href: "https://www.sage.com/en-gb/company/about-sage" },
  {
    title: "DEI",
    href: "https://www.sage.com/en-gb/company/about-sage/diversity-equity-and-inclusion",
  },
  {
    title: "Careers",
    href: "https://www.sage.com/en-gb/company/careers/career-search",
  },
  {
    title: "Values",
    href: "https://www.sage.com/en-gb/company/careers",
  },
];

const RequestPopOut = ({ isRequested }: PopOutBox): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GridItem alignSelf="stretch" justifySelf="stretch">
      <Alert
        onCancel={() => setIsOpen(false)}
        disableEscKey={true}
        title="Notifications"
        showCloseIcon
        size="extra-small"
        open={isOpen}
      >
        No New Notification
      </Alert>
    </GridItem>
  );
};
export default RequestPopOut;
