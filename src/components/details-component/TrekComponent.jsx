import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  Heading,
  useToast,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns"; 
import { Link } from "react-router-dom";

const TrekComponent = ({ trekName }) => {
  const [selectedDate, setSelectedDate] = useState(null); 
  const [highlightedDates, setHighlightedDates] = useState([]);
  const [isValidDate, setIsValidDate] = useState(false); 
  const toast = useToast();

  
  useEffect(() => {
    const today = new Date();
    const next7Days = Array.from({ length: 8 }, (_, index) =>
      addDays(today, index)
    );
    setHighlightedDates(next7Days);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsValidDate(true); 
  };

  const handleBookNowClick = (e) => {
    if (!selectedDate) {
      e.preventDefault(); 
      setIsValidDate(false); 
      toast({
        title: "Date Required",
        description: "Please select a date to proceed.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
      maxWidth="500px"
      margin="auto"
      padding="4"
      borderRadius="md"
      boxShadow="md"
    >
      
      <Heading as="h2" size="lg" textAlign="center" marginBottom="4">
        {trekName}
      </Heading>

      
      <Stack
        direction="row"
        spacing={4}
        align="center"
        justify="center"
        marginBottom="4"
      >
        <Box
          padding="1"
          backgroundColor="orange.300"
          color="white"
          borderRadius="md"
          fontSize="sm"
        >
          PARTIAL PAYMENT AVAILABLE
        </Box>
        <Box
          padding="1"
          backgroundColor="green.300"
          color="white"
          borderRadius="md"
          fontSize="sm"
        >
          ADVENTURE
        </Box>
      </Stack>

    
      <Box textAlign="center" marginBottom="4">
        <Button
          variant="link"
          background={"#f0ad4e"}
          leftIcon={<i className="fa fa-camera" />}
          h={"60px"}
          w={"200px"}
          color={"black"}
        >
          View More Photos
        </Button>
      </Box>

     
      <Box
        textAlign="center"
        marginBottom="4"
        borderWidth="2px"
        borderColor={isValidDate ? "green.400" : "red.400"} 
        borderRadius="md"
        padding="4"
      >
        <Text>Select Check-in Date</Text>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          highlightDates={highlightedDates}
          dayClassName={(date) => {
            if (
              highlightedDates.some(
                (d) =>
                  d.getDate() === date.getDate() &&
                  d.getMonth() === date.getMonth()
              )
            ) {
              return "highlighted-day";
            }
            return "";
          }}
          dateFormat="dd/MM/yyyy"
        />
      </Box>

   
      <Box textAlign="center">
        <Link
          to={`/booking?trekName=${trekName}`}
          onClick={handleBookNowClick}
        >
          <Button background={"#ea7e06"} width="half" color={"white"}>
            BOOK NOW
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default TrekComponent;
