import { useFormik } from "formik";
import { AdjustRequestPost } from "../AdjustmentRequest.types";
import { Dispatch, ReactElement, SetStateAction, useEffect } from "react";
import Box from "carbon-react/lib/components/box/box.component";
import Form from "carbon-react/lib/components/form";
import Textarea from "carbon-react/lib/components/textarea";
import Message from "carbon-react/lib/components/message";
import {
  RadioButton,
  RadioButtonGroup,
} from "carbon-react/lib/components/radio-button";
import {
  ADJUSTMENT_REQUEST_INITIAL_DATA,
  ADJUSTMENT_REQUEST_OPTIONS,
} from "./contants";
import Dialog from "carbon-react/lib/components/dialog/dialog.component";
import Typography from "carbon-react/lib/components/typography/typography.component";
import Button from "carbon-react/lib/components/button/button.component";
import { Option, Select } from "carbon-react/lib/components/select";

interface RequestModalProps {
  modalTitle: string;
  setIsModalOpen: Dispatch<SetStateAction<string[]>>;
  setAdjustmentRequestData: Dispatch<SetStateAction<AdjustRequestPost[]>>;
}

const RequestModal = ({
  modalTitle,
  setIsModalOpen,
  setAdjustmentRequestData,
}: RequestModalProps): ReactElement => {
  //Ideally validation needs to be done with Yup schema. If we have time, let's refactor
  const validate = (values: AdjustRequestPost) => {
    const errors = {
      title: "default",
      radio: "",
      dropdown: "",
      textbox: "",
    };
    if (values.title === "additional time") {
      if (!values.radio) {
        errors.radio = "Select a type of adjustment";
      }
      if (!values.dropdown) {
        errors.dropdown = "select an amount of time";
      }
    } else if (
      values.title === "written instructions" ||
      values.title === "quiet or private space" ||
      values.title === "visual aid"
    ) {
      if (!values.radio) {
        errors.radio =
          "You have not entered any information. Select Cancel or enter some information before submitting. Select a type of adjustment";
      }
    } else if (values.title === "communication adjustment") {
      if (!values.dropdown) {
        errors.dropdown =
          "You have not entered any information. Select Cancel or enter some information before submitting. Select a type of adjustment";
      }
    } else if (values.title === "other adjustment") {
      if (!values.textbox) {
        errors.textbox =
          "You have not entered any information. Select Cancel or enter some information before submitting.";
      }
    }
    return errors;
  };

  const initialValues: AdjustRequestPost = {
    ...ADJUSTMENT_REQUEST_INITIAL_DATA,
    title: modalTitle,
    date: "30/06/2023",
  };

  //Not sure if it's error from Carbon. Formik handleSubmit is not working.
  const manualSubmit = () => {
    validateForm().then(() => {
      if (Object.values(errors).length > 1) {
        setAdjustmentRequestData((prev) => [...prev, values]);
        setIsModalOpen(Array(6).fill(false));
      }
    });
  };
  const { values, handleSubmit, handleChange, errors, validateForm } =
    useFormik({
      initialValues,
      validate,
      //Not sure if it's error from Carbon. Formik handleSubmit is not working.
      onSubmit: manualSubmit,
    });

  return (
    <Box>
      <Dialog open showCloseIcon={true} title={`Request ${modalTitle}`}>
        <Form
          onSubmit={handleSubmit}
          saveButton={
            <>
              <Button
                mr={1}
                onClick={() => {
                  setIsModalOpen(Array(6).fill(false));
                }}
              >
                Cancel
              </Button>
              <Button
                //Not sure if it's error from Carbon. Formik handleSubmit is not working.
                onClick={manualSubmit}
                buttonType="primary"
                disabled={!!(errors.radio || errors.dropdown || errors.textbox)}
              >
                Submit request
              </Button>
            </>
          }
        >
          {ADJUSTMENT_REQUEST_OPTIONS.filter(
            (option) => option.title === modalTitle
          ).map((option) => {
            return (
              <Box key={option.title}>
                {option.intro && (
                  <Box>
                    <Typography variant="h3" fontSize="14px">
                      {option.intro.title}
                    </Typography>
                    <Typography fontSize="14px">
                      {option.intro.subtitle}
                    </Typography>
                  </Box>
                )}
                {option.radio && (
                  <Box>
                    <Typography variant="h3" fontSize="16px">
                      {option.radio.title}
                    </Typography>
                    {option.radio.subtitle && (
                      <Typography fontSize="14px" opacity="50%">
                        {option.radio.subtitle}
                      </Typography>
                    )}
                    <RadioButtonGroup
                      name="radio-group"
                      value={values.radio || ""}
                    >
                      {option.radio.content.map((radioContent) => {
                        return (
                          <>
                            <RadioButton
                              name="radio"
                              error={!!errors.radio}
                              onChange={handleChange}
                              key={radioContent.order}
                              label={radioContent.option}
                              value={radioContent.option}
                            />
                          </>
                        );
                      })}
                    </RadioButtonGroup>
                  </Box>
                )}
                {option.dropdown && (
                  <Box>
                    <Typography variant="h3" fontSize="16px">
                      {option.dropdown.title}
                    </Typography>
                    <Typography fontSize="14px" opacity="50%">
                      {option.dropdown.subtitle}
                    </Typography>
                    <Select
                      name="dropdown"
                      onChange={handleChange}
                      value={values.dropdown || ""}
                      error={!!errors.dropdown}
                    >
                      {option.dropdown.content.map((dropdownContent) => {
                        return (
                          <Option
                            key={dropdownContent.order}
                            text={dropdownContent.option.replace(
                              /\s/g,
                              "\u00A0"
                            )}
                            value={dropdownContent.option}
                          />
                        );
                      })}
                    </Select>
                    {!!values.dropdown &&
                      !!option.dropdown.content.filter(
                        (item) => item.option === values.dropdown
                      )[0].description && (
                        <Message mb={2}>
                          {
                            option.dropdown.content.filter(
                              (item) => item.option === values.dropdown
                            )[0].description
                          }
                        </Message>
                      )}
                  </Box>
                )}
                {option.textbox && (
                  <Box>
                    <Typography variant="h3" fontSize="16px">
                      {option.textbox.title}
                    </Typography>
                    <Typography fontSize="14px" opacity="50%">
                      {option.textbox.subtitle}
                    </Typography>
                    <Textarea
                      name="textbox"
                      onChange={handleChange}
                      value={values.textbox || ""}
                      error={!!errors.textbox}
                    />
                  </Box>
                )}
                {errors.dropdown || errors.radio || errors.textbox ? (
                  <Message variant="error">
                    <Typography variant="h3" fontSize="14px">
                      There was an error
                    </Typography>
                    <ul>
                      {errors.radio && (
                        <li>
                          <Typography m={0}>{errors.radio}</Typography>
                        </li>
                      )}
                      {errors.dropdown && (
                        <li>
                          <Typography m={0}>{errors.dropdown}</Typography>
                        </li>
                      )}
                      {errors.textbox && (
                        <li>
                          <Typography m={0}>{errors.textbox}</Typography>
                        </li>
                      )}
                    </ul>
                  </Message>
                ) : null}
              </Box>
            );
          })}
        </Form>
      </Dialog>
    </Box>
  );
};

export default RequestModal;
