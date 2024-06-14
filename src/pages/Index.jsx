import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to the Financial Times</Heading>
        <Text>Stay updated with the latest financial news and analysis.</Text>
      </VStack>
    </Container>
  );
};

export default Index;