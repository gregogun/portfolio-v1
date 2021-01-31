import React from "react";

export const ContactForm = () => {
  return (
    <form action="">
      <FormControl id="name">
        <FormLabel fontSize="18px">NAME</FormLabel>
        <Input
          w={{ base: "300px", sm: "350px", md: "500px" }}
          h="48px"
          rounded="0"
          mb="16px"
          type="text"
        />
      </FormControl>
      <FormControl id="name">
        <FormLabel fontSize="18px">EMAIL ADDRESS</FormLabel>
        <Input
          w={{ base: "300px", sm: "350px", md: "500px" }}
          h="48px"
          rounded="0"
          mb="16px"
          type="text"
        />
      </FormControl>
      <FormControl id="name">
        <FormLabel fontSize="18px">MESSAGE</FormLabel>
        <Input
          w={{ base: "300px", sm: "350px", md: "500px" }}
          h="128px"
          rounded="0"
          mb="16px"
          type="text"
        />
      </FormControl>
      <Button
        bg={colorDark}
        color={colorLight}
        _hover={{ bg: "#333333" }}
        rounded="0"
        w={{ base: "300px", sm: "350px", md: "500px" }}
        h="64px"
      >
        Submit
      </Button>
    </form>
  );
};
