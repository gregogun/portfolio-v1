import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import useTypography from "../../../../components/useTypography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const About = () => {
  const { Heading2 } = useTypography();
  const { colorDark } = useColorSwitcher();

  const Line = () => (
    <Box
      display={{ base: "block", lg: "none" }}
      bg={colorDark}
      h="2px"
      w="168px"
    />
  );

  return (
    <Flex
      w="100%"
      bg="gray.100"
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
      // align="center"
      minH="50vh"
      mb="15vh"
      as="section"
      p="24px"
    >
      <Box
        bg="default.dark"
        w="100%"
        h="100"
        display={{ base: "none", xl: "grid" }}
        placeItems="center"
      >
        <Text
          // bg="blue.200"
          color="gray.100"
        >
          Image
        </Text>
      </Box>
      <Box w="100%" h="100%">
        <Box
          // bg="gray.200"
          minH="16px"
          mb="32px"
        >
          <Heading2 sibling={<Line />} mr="16px">
            about
          </Heading2>
        </Box>
        <Text
          // bg="gray.300"
          w="80%"
        >
          Praesent sed est dignissim, vehicula dolor eu, aliquet augue.
          Curabitur eu felis at eros volutpat sollicitudin interdum euismod
          sapien. In lorem sapien, posuere vitae ex maximus, accumsan elementum
          eros. Cras fermentum sed libero eget accumsan. In condimentum magna et
          turpis euismod aliquam eget nec metus. Maecenas efficitur est sed
          lobortis varius. Aenean euismod in est ut scelerisque. Donec egestas
          tempor leo, quis ornare nibh venenatis eu. Donec justo libero, euismod
          eget massa nec, feugiat placerat tellus.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
