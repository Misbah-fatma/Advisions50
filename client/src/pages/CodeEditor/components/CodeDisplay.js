import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CodeDisplay = () => {
    // Fetch data from local storage
    const code = localStorage.getItem('code');
    const language = localStorage.getItem('language');

    return (
        <Box m={4} p={4} border="1px solid" borderColor="gray.300">
            <Text fontSize="xl" mb={2}>Saved Code and Compiler Settings:</Text>
            <Text fontWeight="bold">Language:</Text>
            <Text mb={2} color="blue.500">{language}</Text>
            <Text fontWeight="bold">Code:</Text>
            <Box p={2} bg="gray.50" mt={2} overflowX="auto">
                <pre>{code}</pre>
            </Box>
        </Box>
    );
};

export default CodeDisplay;
