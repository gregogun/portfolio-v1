import React, { forwardRef } from "react";
import { Box, Text, Icon, HStack, VStack } from "@chakra-ui/react";
import { Line, SectionHeader } from "../../../../components/layout";
import {
  IconReact,
  IconHtml,
  IconSass,
  IconJs,
  IconNode,
  IconElectron,
  IconGithub,
  IconInvision,
  IconFigma,
  IconAdobe,
} from "../../../../assets/icons";
import { Heading2 } from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const Skills = forwardRef(({ ...props }, ref) => {
  return (
    <Box outline="0" ref={ref} tabIndex={-1} {...props}>
      <Box mb="128px">
        <SectionHeader
          heading={<Heading2>skills</Heading2>}
          sibling={<Line />}
          mr="16px"
        />
      </Box>
      <Text pb="1em" fontSize="2em" textAlign="center">
        Technologies & tools I've worked with:
      </Text>
      <Box
        mx="auto"
        p="4em"
        // border="1px solid"
      >
        <VStack mx="auto" w="90%" spacing={16}>
          <Languages />
          <Frameworks />
          <Tools />
        </VStack>
      </Box>
    </Box>
  );
});

const SkillBox = ({ icon, name, ...props }) => {
  const { colorDark } = useColorSwitcher();
  return (
    <VStack
      align="center"
      boxSize={{ base: "6em", md: "8em", xl: "10em" }}
      spacing={4}
    >
      <Icon
        {...props}
        fill={colorDark}
        boxSize={{ base: "2em", md: "4em", xl: "6em" }}
        as={icon}
      />
      <Text fontSize={{ base: "1em", md: "1.2em", xl: "1.5em" }}>{name}</Text>
    </VStack>
  );
};

const Languages = () => {
  return (
    <SkillBoxWrapper>
      <SkillBox icon={IconHtml} name="HTML5" />
      <SkillBox icon={IconSass} name="CSS/SCSS" />
      <SkillBox icon={IconJs} name="JavaScript" />
    </SkillBoxWrapper>
  );
};

const Frameworks = () => {
  return (
    <SkillBoxWrapper>
      <SkillBox icon={IconReact} name="React" />
      <SkillBox icon={IconNode} name="Nodejs" />
      <SkillBox icon={IconElectron} name="Electron" />
    </SkillBoxWrapper>
  );
};

const Tools = () => {
  return (
    <SkillBoxWrapper>
      <SkillBox icon={IconGithub} name="Git/Github" />
      <SkillBox icon={IconFigma} name="Figma" />
      <SkillBox icon={IconAdobe} name="Adobe Suite" />
    </SkillBoxWrapper>
  );
};

const SkillBoxWrapper = ({ children }) => {
  return <HStack spacing={{ base: 8, md: 16, lg: 32 }}>{children}</HStack>;
};

export default Skills;
