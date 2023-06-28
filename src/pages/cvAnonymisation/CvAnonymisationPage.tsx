import { GridContainer, GridItem } from "carbon-react/lib/components/grid";
import NavigationBar from "../../globalComponents/NavigationBar";
import { useRef, useState } from "react";
import {
  Card,
  CardRow,
  CardFooter,
  CardColumn,
} from "carbon-react/lib/components/card";
import Box from "carbon-react/lib/components/box/box.component";
import Loader from "carbon-react/lib/components/loader";
import Input from "carbon-react/lib/__internal__/input";
import Button from "carbon-react/lib/components/button/button.component";
import Textbox from "carbon-react/lib/components/textbox/textbox.component";
import Typography from "carbon-react/lib/components/typography/typography.component";

const CvAnonymisationPage = () => {
  const [submitData, setSubmitData] = useState();
  const [anonymisedData, setAnonymisedData] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    fileInputRef.current?.click();
    setAnonymisedData("");
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : "");
    setSubmitData(file);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (submitData) {
      const formData = new FormData();
      formData.append("file", submitData, selectedFile);
      try {
        //Used direct url for now. To be refactored with proxy server
        const response = await fetch("/anonymise", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const parsedResponse = await response.text();
          setAnonymisedData(parsedResponse);
        } else {
          console.error("Anonymisation Failed", response.status);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
  };
  return (
    <GridContainer p={0}>
      <NavigationBar isNotHomePage />
      <GridItem alignSelf="stretch" justifySelf="stretch">
        <Box
          display="flex"
          justifyContent="center"
          style={{ whiteSpace: "pre-line" }}
        >
          <Card cardWidth="50vw">
            <CardRow>
              <CardColumn>
                <Typography variant="h1" mb={4} mt={2}>
                  Upload your file
                </Typography>
                <Textbox
                  readOnly
                  mr="10%"
                  label="Selected file:"
                  value={selectedFile}
                  name="textbox"
                  labelInline
                  isOptional={false}
                />

                <Input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {anonymisedData && (
                  <>
                    <Typography variant="h3" mt={4} mb={2}>
                      Anonymised CV
                    </Typography>
                    <Box>
                      <Typography>{anonymisedData}</Typography>
                    </Box>
                  </>
                )}
              </CardColumn>
            </CardRow>
            <CardFooter px={1} py={1}>
              <Box width="100%" display="flex" justifyContent="space-around">
                <Box>
                  <Button type="file" onClick={handleButtonClick} mr={2}>
                    Upload
                  </Button>
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    buttonType="primary"
                  >
                    {isLoading ? <Loader isInsideButton /> : "Anonymise"}
                  </Button>
                </Box>
              </Box>
            </CardFooter>
          </Card>
        </Box>
      </GridItem>
    </GridContainer>
  );
};

export default CvAnonymisationPage;
