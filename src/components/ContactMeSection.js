import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
        firstName: "",
        email: "",
        type: "hireMe",
        message: "",
    },
    onSubmit: (values) => {
        submit('https://gmail.com/rikiwendri@gmail.com', values);
    },
    validationSchema: Yup.object({
        firstName: Yup.string().required("Name cannot be empty"),
        email: Yup.string().email("Invalid email address").required("Required"),
        message: Yup.string()
        .min(15, "Must be 15 characters at minimum")
        .required("Required"),
    }),
  });
    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if(response.type === 'success'){
                formik.resetForm();
            }
        }
    }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack
        justifyItems='center'
      >
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={4} rounded="md" w="150%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage justifyContent='right'><em>{formik.errors.firstName}</em></FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type">
                  <option value="fulltime" color="black" backgroundColor="grey">Full time hire</option>
                  <option value="part time" color="black" backgroundColor="grey">
                    Part time hire
                  </option>
                  <option value="other" color="black" backgroundColor="grey">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.message && formik.touched.message}>
                <FormLabel htmlFor="message">Your message</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  height={250}
                  {...formik.getFieldProps("message")}
                />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;