import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading>About Us</Heading>
      <Text>
        Welcome to the Financial Times. We provide the latest financial news and analysis.
      </Text>
    </VStack>
  </Box>
);

export default About;