import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={4}>
          Peer to Peer Messaging
        </Heading>
        <Box width="100%" height="60vh" borderWidth="1px" borderRadius="lg" overflowY="auto" p={4}>
          {messages.length === 0 ? (
            <Text>No messages yet. Start the conversation!</Text>
          ) : (
            messages.map((message, index) => (
              <Flex key={index} justify={message.sender === "You" ? "flex-end" : "flex-start"} mb={2}>
                <Box bg={message.sender === "You" ? "blue.500" : "gray.300"} color={message.sender === "You" ? "white" : "black"} px={4} py={2} borderRadius="md">
                  <Text>{message.text}</Text>
                </Box>
              </Flex>
            ))
          )}
        </Box>
        <FormControl id="message-input" mt={4}>
          <FormLabel>Type your message</FormLabel>
          <Flex>
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your message" />
            <Button ml={2} colorScheme="blue" onClick={handleSendMessage} rightIcon={<FaPaperPlane />}>
              Send
            </Button>
          </Flex>
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Index;
