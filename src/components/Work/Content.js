import React from 'react';
import { Text, Box, Flex, Grid, GridItem, Divider } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';

export default function Content({
  project, date, hasCustomer, customer, title, details, divide
}) {
  let idx = 0;

  return (<>
    <Grid w="100%" templateColumns='repeat(10, 1fr)' gap={4}>
      <GridItem colSpan={3}>
        <Text fontSize={"xl"} fontWeight="700" color="gray.600"
          textDecoration={"underline"} textDecorationColor="orange.400"
          textDecorationThickness={2} textUnderlineOffset="4px"
        >
          {project}
        </Text>
        <Text fontSize={"md"} fontWeight="400" color="gray.400">
          {date}
        </Text>
        <Text fontSize={"xs"} fontWeight="400" color="gray.400">
          {
            hasCustomer ?
            `고객사 - ${customer}` :
            `LG CNS`
          }
        </Text>
      </GridItem>
      <GridItem colSpan={7}>
        <Text fontSize={"xl"} fontWeight="700" color="black">
          {title}
        </Text>
        <Box mt="30px">
          {
            details.map(detail => {
              return (
                <Flex key={idx++} mb="4px">
                  <FaCircle size="10" style={{ marginTop: 6, marginRight: 10 }} />
                  <Text>{detail}</Text>
                </Flex>
              )
            })
          }
        </Box>
      </GridItem>
    </Grid>
    {divide && <Divider style={{ marginTop: 60, marginBottom: 20 }} />}
  </>
  );
}