import React, { forwardRef } from "react";
import { Box, Text, Icon, HStack, VStack, Grid } from "@chakra-ui/react";
import { Line, SectionHeader } from "../../../../components/layout";
import {
  IconReact,
  IconHtml,
  IconSass,
  IconNode,
  IconElectron,
  IconGithub,
  IconInvision,
  IconFigma,
  IconAdobe,
  IconCss,
  IconWebpack,
  IconGit,
  IconJS,
} from "../../../../assets/icons";
import { Heading2 } from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const Skills = forwardRef(({ ...props }, ref) => {
  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props}>
      <Box mb="128px">
        <SectionHeader
          heading={<Heading2>skills</Heading2>}
          sibling={<Line />}
          mr="16px"
        />
      </Box>
      <Text pb="1em" fontSize={{ base: "1.5em", md: "2em" }} textAlign="center">
        Technologies & tools I work with:
      </Text>
      <Grid
        mx="auto"
        py="5em"
        w={{ base: "100%", lg: "90%" }}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        border="1px solid"
        gap={{ base: 8, md: 16 }}
        placeItems="center"
      >
        <Languages />
        <Frameworks />
        <Tools />
      </Grid>
    </Box>
  );
});

const SkillBox = ({ icon, name, ...props }) => {
  const { colorDark } = useColorSwitcher();
  return (
    <VStack
      align="center"
      justify="center"
      boxSize={{ base: "7em", md: "8em", xl: "10em" }}
      spacing={4}
    >
      <Icon
        {...props}
        fill={colorDark}
        boxSize={{ base: "4em", md: "5em", xl: "5em" }}
        as={icon}
      />
      <Text fontSize={{ base: "1em", md: "1.2em", xl: "1.5em" }}>{name}</Text>
    </VStack>
  );
};

const Languages = () => {
  return (
    <>
      <SkillBox icon={IconHtml} name="HTML5" />
      <SkillBox icon={IconCss} name="CSS3" />
      <SkillBox icon={IconSass} name="SCSS" />
      <SkillBox icon={IconJS} name="JavaScript" />
    </>
  );
};

const Frameworks = () => {
  return (
    <>
      <SkillBox icon={IconReact} name="React" />
      <SkillBox icon={IconWebpack} name="Webpack" />
      <SkillBox icon={IconNode} name="Nodejs" />
      <SkillBox icon={IconElectron} name="Electron" />
    </>
  );
};

const Tools = () => {
  return (
    <>
      <SkillBox icon={IconGit} name="Git" />
      <SkillBox icon={IconFigma} name="Figma" />
      <SkillBox icon={IconAdobe} name="Adobe Suite" />
      <SkillBox icon={IconInvision} name="Invision" />
    </>
  );
};

const SkillBoxWrapper = ({ children }) => {
  return <HStack spacing={{ base: 8, md: 16, lg: 32 }}>{children}</HStack>;
};

export default Skills;
