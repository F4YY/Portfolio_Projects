import React, { useEffect } from "react";
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
        email: Yup.string().email("Invalid email address").required("Email cannot be empty"),
        message: Yup.string()
        .min(15, "Must be 15 characters at minimum")
        .required("Message cannot be empty"),
    }),
  });
  useEffect(() => {
      if (response) {
        onOpen(response.type, response.message);
        if(response.type === 'success'){
          formik.resetForm();
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="rgba(81, 45, 168, 0.4)"
      py={10}
      spacing={8}
      width='100%'
    >
      <VStack
        justifyItems='center'
        width='100%'
      >
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={4} rounded="md" width={{base:'100%', md:'40%', lg:'30%'}}>
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
                <FormErrorMessage justifyContent='right'><em>{formik.errors.email}</em></FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" color='blackAlpha.800' {...formik.getFieldProps("type")}>
                  <option>Full time hire</option>
                  <option>Part time hire</option>
                  <option>Other</option>
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
                <FormErrorMessage justifyContent='right'><em>{formik.errors.message}</em></FormErrorMessage>
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