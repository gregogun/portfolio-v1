import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
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
        mb="64px"
        display="grid"
        placeItems="center"
      >
        <Text>Content</Text>
      </Box>
      <Box
        border="solid 2px"
        borderColor={colorDark}
        w="328px"
        h="328px"
        mx="auto"
        mb="64px"
        display="grid"
        placeItems="center"
      >
        <Text>Content</Text>
      </Box>
    </Box>
  );
};

export default Projects;
