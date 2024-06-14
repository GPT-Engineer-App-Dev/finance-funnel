import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading>Contact Us</Heading>
      <Text>
        For inquiries, please email us at contact@financialtimes.com.
      </Text>
    </VStack>
  </Box>
);

export default Contact;