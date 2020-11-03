import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Heading,Box , VStack, HStack, Input, Button, Flex, Spacer } from '@chakra-ui/core'

function FetchTab() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
 
      setData(result.data);
    };
 
    fetchData();
  },[url]);

  return (
  <>
    <VStack>
    <Heading mb={5}>Fetch content with useEffect hook</Heading>
    <HStack spacing="24px" mb={5}>
        <Input 
        placeholder="Ask!"
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
       <Button 
        colorScheme="purple"
        type="button" 
        onClick={() => setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)}>
        Search
      </Button>
      </HStack>
      <Box borderWidth="1px" borderRadius="lg" py ={5} px={10}>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      </Box>
    </VStack>
  </>
    );
  }
   

export default FetchTab;

