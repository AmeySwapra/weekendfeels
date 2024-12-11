import React, { useState, useEffect } from 'react';
import { Box, Text, Button, Stack, Heading } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns'; // Import to calculate next 7 days

const TrekComponent = ({ trekName }) => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to current date
  const [highlightedDates, setHighlightedDates] = useState([]);

  // Calculate the next 7 days including today
  useEffect(() => {
    const today = new Date();
    const next7Days = Array.from({ length: 8 }, (_, index) => addDays(today, index));
    setHighlightedDates(next7Days);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Box maxWidth="500px" margin="auto" padding="4" borderRadius="md" boxShadow="md">
      {/* Heading */}
      <Heading as="h2" size="lg" textAlign="center" marginBottom="4">{trekName}</Heading>

      {/* Ribbon section */}
      <Stack direction="row" spacing={4} align="center" justify="center" marginBottom="4">
        <Box padding="1" backgroundColor="orange.300" color="white" borderRadius="md" fontSize="sm">
          PARTIAL PAYMENT AVAILABLE
        </Box>
        <Box padding="1" backgroundColor="green.300" color="white" borderRadius="md" fontSize="sm">
          ADVENTURE
        </Box>
      </Stack>

      {/* View More Photos Button at the top of Calendar */}
      <Box textAlign="center" marginBottom="4">
        <Button
          variant="link"
          background={'#f0ad4e'}
          leftIcon={<i className="fa fa-camera" />}
          h={'60px'}
          w={'200px'}
          color={'black'}
        >
          View More Photos
        </Button>
      </Box>

      {/* Calendar with DatePicker */}
      <Box textAlign="center" marginBottom="4">
        <Text>Select Check-in Date</Text>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          highlightDates={highlightedDates} // Highlight the current date and the next 7 days
          dayClassName={(date) => {
            // Add custom styles to highlight the dates
            if (highlightedDates.some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth())) {
              return 'highlighted-day'; // Custom class for highlighted dates
            }
            return '';
          }}
          dateFormat="dd/MM/yyyy"
        />
      </Box>

      {/* Book Now Button at the bottom of Calendar */}
      <Box textAlign="center">
        <Button background={'#ea7e06'} width="half" color={'white'}>
          BOOK NOW
        </Button>
      </Box>
    </Box>
  );
};

export default TrekComponent;
