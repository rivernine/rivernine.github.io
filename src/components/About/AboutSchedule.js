import React from 'react';
import { Text, Box, Grid, GridItem, Flex, useMediaQuery, VStack } from "@chakra-ui/react";
import trello from '../../assets/trello.png'

export default function AboutSchedule() {

  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  const renderContentLargerThan1000 = () => {
    return (
      <Box h="450px" display="flex" px="10px"
        bgImage={`url(${trello})`} bgRepeat="no-repeat" bgSize={"cover"}
        justifyContent="center" alignItems="center"
      >
        <Grid templateColumns='repeat(10, 1fr)' gap={4} m="20px" p="20px"
          bgColor="#00000099" backdropFilter="auto" backdropBlur={"2px"}
          borderRadius="10px">
          <GridItem colSpan={10}>
            <Flex flexDir={"column"}>
              <Text fontSize={"2xl"} fontWeight="700" color="white">About <span style={{ color: "#ED8936" }}>schedule</span></Text>
              <Text mt="15px" color="white" fontWeight={400}>
                매일 저녁, Trello를 활용하여 일정의 카테고리와 우선순위 책정, 진행도 등을 정리하여 <span style={{fontWeight: 700}}>효율적인 일정 관리를 위해 노력합니다.</span>
                단기, 장기 목표를 설정하고 목표 달성을 위한 방법을 고민합니다. 새로운 아이디어가 생긴다면 구체화 방법과 함께 기록합니다.
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    );
  }

  const renderContentSmallerThan1000 = () => {
    return (
      <VStack mt="20px" mb="20px">
        <Box display="flex" 
          bgImage={`url(${trello})`} bgRepeat="no-repeat" bgSize={"cover"}
        >
          <Box
            bgColor="#00000099" backdropFilter="auto" backdropBlur={"2px"}
            borderRadius="0px" px="20px">
            <Text fontSize={"xl"} fontWeight="700" color="white">About <span style={{ color: "#ED8936" }}>schedule</span></Text>
            <Text fontSize="sm" mt="15px" color="white" fontWeight={400}>
              매일 저녁, Trello를 활용하여 일정의 카테고리와 우선순위 책정, 진행도 등을 정리하여 <span style={{fontWeight: 700}}>효율적인 일정 관리를 위해 노력합니다.</span>
              단기, 장기 목표를 설정하고 목표 달성을 위한 방법을 고민합니다. 새로운 아이디어가 생긴다면 구체화 방법과 함께 기록합니다.
            </Text>
          </Box>
        </Box>
      </VStack>
    );
  }

  return (<>
    <Box w={isLargerThan1200 ? "1000px" : isLargerThan1000 ? "800px" : "100vw"}
      h={isLargerThan1000 ? "500px" : "auto"}
      px={isLargerThan1000 ? "40px" : "10px"}
      display="flex" alignItems={"center"}>
      {
        isLargerThan1000 ?
          renderContentLargerThan1000() :
          renderContentSmallerThan1000()
      }
    </Box>
  </>
  );
}