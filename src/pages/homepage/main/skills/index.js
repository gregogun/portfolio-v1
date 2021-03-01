import React, { forwardRef } from "react";
import { Box, Text, Icon, HStack, VStack, Grid } from "@chakra-ui/react";
import { Line, SectionHeader } from "../../../../components/layout";
import {
  IconReact,
  IconHtml,
  IconSass,
  IconNode,
  IconElectron,
  IconInvision,
  IconFigma,
  IconAdobe,
  IconCss,
  IconWebpack,
  IconGit,
  IconJS,
  IconResponsive,
  IconRest,
} from "../../../../assets/icons";
import { Body, Heading2 } from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const Skills = forwardRef(({ ...props }, ref) => {
  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props}>
      <Box mb="128px">
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>skills</Heading2>
        </SectionHeader>
      </Box>
      <Text
        pb="1em"
        fontSize={{ base: "1em", sm: "1.25em", md: "1.5em", xl: "2em" }}
        textAlign="center"
      >
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
        boxSize={{ base: "2.5em", md: "3em", xl: "4em" }}
        as={icon}
      />
      <Body
        textAlign="center"
        fontSize={{ base: "1em", md: "1.2em", xl: "1.5em" }}
      >
        {name}
      </Body>
    </VStack>
  );
};

const Languages = () => {
  return (
    <>
      <SkillBox icon={IconHtml} name="HTML5" />
      <SkillBox icon={IconCss} name="CSS3" />
      <SkillBox icon={IconSass} name="SCSS" />
      <SkillBox icon={IconResponsive} name="Responsive Design" />
    </>
  );
};

const Frameworks = () => {
  return (
    <>
      <SkillBox icon={IconJS} name="JavaScript" />
      <SkillBox icon={IconReact} name="React" />
      <SkillBox icon={IconNode} name="Nodejs" />
      <SkillBox icon={IconElectron} name="Electron" />
    </>
  );
};

const Tools = () => {
  return (
    <>
      <SkillBox icon={IconRest} name="RESTful API" />
      <SkillBox icon={IconGit} name="Git" />
      <SkillBox icon={IconFigma} name="Figma" />
      <SkillBox icon={IconAdobe} name="Adobe Suite" />
    </>
  );
};

const SkillBoxWrapper = ({ children }) => {
  return <HStack spacing={{ base: 8, md: 16, lg: 32 }}>{children}</HStack>;
};

export default Skills;
