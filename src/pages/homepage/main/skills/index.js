import React, { forwardRef } from "react";
import { Box, Text, Grid } from "@chakra-ui/react";
import { Line, SectionHeader } from "../../../../components/layout";
import {
  IconReact,
  IconHtml,
  IconSass,
  IconJs,
  IconNode,
  IconElectron,
  IconGithub,
  IconFigma,
} from "../../../../assets/icons";
import { SkillCard } from "../../../../components/card";
import { Heading2 } from "../../../../components/typography";

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
      <Grid
        templateRows={{ base: "repeat(4, 1fr)", md: "none" }}
        templateColumns={{ md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }}
        gap={6}
      >
        <Box
          w={{
            base: "100%",
            sm: "60%",
            md: "100%",
            lg: "85%",
            xl: "100%",
          }}
          minH="30"
          //mx="auto"
          //bg="gray.200"
        >
          <Text mb="16px">Languages</Text>
          <SkillCard icon={IconHtml} name="HTML5" />
          <SkillCard icon={IconSass} name="CSS3 (SCSS)" />
          <SkillCard icon={IconJs} name="JavaScript" />
        </Box>
        <Box
          w={{
            base: "100%",
            sm: "60%",
            md: "100%",
            lg: "85%",
            xl: "100%",
          }}
          minH="30"
          //mx="auto"
          //bg="gray.200"
        >
          <Text mb="16px">Libraries/Frameworks</Text>
          <SkillCard icon={IconReact} name="React" />
          <SkillCard icon={IconNode} name="Node.js" />
          <SkillCard icon={IconElectron} name="Electron" />
        </Box>
        <Box
          w={{
            base: "100%",
            sm: "60%",
            md: "100%",
            lg: "85%",
            xl: "100%",
          }}
          minH="30"
          //mx="auto"
          //bg="gray.200"
        >
          <Text mb="16px">Tools/Software</Text>
          <SkillCard icon={IconGithub} name="Git/Github" />
          <SkillCard name="Storybook" />
          <SkillCard icon={IconFigma} name="Figma" />
          <SkillCard name="Adobe Suite" />
        </Box>
        <Box
          w={{
            base: "100%",
            sm: "60%",
            md: "100%",
            lg: "85%",
            xl: "100%",
          }}
          minH="30"
          //mx="auto"
          //bg="gray.200"
        >
          <Text mb="16px">Practices</Text>
          <SkillCard name="Accessibility" />
          <SkillCard name="RESTful APIs" />
        </Box>
      </Grid>
    </Box>
  );
});

export default Skills;
