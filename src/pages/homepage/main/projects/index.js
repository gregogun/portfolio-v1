import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import useTypography from "../../../../components/useTypography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const Projects = () => {
  const { Heading2 } = useTypography();
  const { colorDark } = useColorSwitcher();

  const Line = (props) => <Box {...props} bg={colorDark} />;

  return (
    <Box minH="50vh" mb="15vh" as="section">
      <Flex minH="16px" mb="64px" align="center">
        <Heading2 sibling={<Line h="2px" w="160px" />} mr="16px">
          projects
        </Heading2>
      </Flex>
      <Box
        border="solid 2px"
        borderColor={colorDark}
        w="328px"
        h="328px"
        mx="auto"
        mb="16px"
        display="grid"
        placeItems="center"
      >
        <Text>Content</Text>
      </Box>
      <Button
        display="block"
        m="auto"
        variant="outline"
        w="328px"
        h="64px"
        rounded="0"
        color={colorDark}
        colorScheme="default.light"
        my="8px"
      >
        LIVE SITE
      </Button>
      <Button
        display="block"
        m="auto"
        variant="outline"
        w="328px"
        h="64px"
        rounded="0"
        color={colorDark}
        colorScheme="default.light"
        my="8px"
      >
        GITHUB REPO
      </Button>
      <Box
        border="solid 2px"
        borderColor={colorDark}
        w="328px"
        h="328px"
        mx="auto"
        mb="16px"
        display="grid"
        placeItems="center"
      >
        <Text>Content</Text>
      </Box>
      <Button
        display="block"
        m="auto"
        variant="outline"
        w="328px"
        h="64px"
        rounded="0"
        color={colorDark}
        colorScheme="default.light"
        my="8px"
      >
        LIVE SITE
      </Button>
      <Button
        display="block"
        m="auto"
        variant="outline"
        w="328px"
        h="64px"
        rounded="0"
        color={colorDark}
        colorScheme="default.light"
        my="8px"
      >
        GITHUB REPO
      </Button>
    </Box>
  );
};

export default Projects;
