import React from "react";
import { Link as ReachLink } from "@reach/router";
import { Box, Stack, Link, forwardRef } from "@chakra-ui/react";
import { ProjectCard, ProjectInfoCard } from "../../../../components/card";
import { FaArrowLeft } from "react-icons/fa";
import { Line, SectionHeader } from "../../../../components/layout";
import { Heading2 } from "../../../../components/typography";
import projects from "../../../../content/projects";

const BackToMain = () => {
  return (
    <Stack direction="row" spacing={4} align="center">
      <FaArrowLeft />
      <Link as={ReachLink} to="/">
        Back To Main
      </Link>
    </Stack>
  );
};

const Projects = forwardRef(({ ...props }, ref) => {
  return (
    <Box
      outline="0"
      ref={ref}
      tabIndex={-1}
      minH="50vh"
      as="section"
      mx="auto"
      {...props}
    >
      <Box mb="128px">
        <SectionHeader
          heading={<Heading2>projects</Heading2>}
          sibling={<Line />}
          mr="16px"
        />
      </Box>
      {projects.map((project) => (
        <Stack
          key={project.id}
          align="center"
          spacing={4}
          direction={{ base: "column", xl: "row" }}
          mb="128px"
        >
          <ProjectCard media={project.media} />
          <ProjectInfoCard {...project} />
        </Stack>
      ))}
    </Box>
  );
});

export default Projects;
