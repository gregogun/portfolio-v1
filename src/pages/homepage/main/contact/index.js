import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import useTypography from "../../../../components/useTypography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const Contact = () => {
  const { Heading2 } = useTypography();
  const { colorLight, colorDark } = useColorSwitcher();

  const Line = (props) => <Box {...props} bg={colorDark} />;

  const Form = () => {
    return (
      <form action="">
        <FormControl id="name">
          <FormLabel fontSize="18px">NAME</FormLabel>
          <Input w="100%" h="48px" rounded="0" mb="16px" type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel fontSize="18px">EMAIL ADDRESS</FormLabel>
          <Input w="100%" h="48px" rounded="0" mb="16px" type="text" />
        </FormControl>
        <FormControl id="message">
          <FormLabel fontSize="18px">MESSAGE</FormLabel>
          <Input w="100%" h="128px" rounded="0" mb="16px" type="text" />
        </FormControl>
        <Button
          bg={colorDark}
          color={colorLight}
          _hover={{ bg: "#333333" }}
          rounded="0"
          w="100%"
          h="64px"
        >
          Submit
        </Button>
      </form>
    );
  };

  return (
    <Box minH="50vh" mb="15vh" as="section">
      <Flex minH="16px" mb="64px" align="center">
        <Heading2 sibling={<Line h="2px" w="160px" />} mr="16px">
          contact
        </Heading2>
      </Flex>
      <Box pb="8px" mb="32px" borderBottom="2px" borderColor="neutral.100">
        <Text>GET IN TOUCH</Text>
      </Box>
      <Form />
    </Box>
  );
};

export default Contact;
