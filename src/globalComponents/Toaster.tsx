import Toast from "carbon-react/lib/components/toast";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Typography from "carbon-react/lib/components/typography/typography.component";
const Toaster = () => {
  const { setToaster, toaster } = useContext(GlobalContext);

  const onDismissClick = () => {
    if (!toaster) {
      window.scrollTo(0, 0);
    }
    setToaster(!toaster);
  };

  return (
    <Toast
      variant="warning"
      id="toast-dismissible"
      open={toaster}
      onDismiss={onDismissClick}
      isCenter
      timeout={2000}
      maxWidth="500px"
    >
      <Typography m={0} fontSize="16px">
        This feature is not implemented.
      </Typography>
    </Toast>
  );
};

export default Toaster;
