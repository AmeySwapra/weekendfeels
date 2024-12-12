import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Checkbox,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Image,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const BookingForm = () => {
  const toast = useToast();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const trekName = queryParams.get("trekName");

  const [trekData, setTrekData] = useState(null);
  const [paymentType, setPaymentType] = useState("advance");
  const [whatsappSameAsPhone, setWhatsappSameAsPhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [packageDetails, setPackageDetails] = useState([]);

  // Fetch all trekking data
  useEffect(() => {
    axios
      .get("https://restate-json.onrender.com/campingData")
      .then((response) => {
        const filteredData = response.data.find(
          (data) => data.name === trekName
        );
        if (filteredData) {
          setTrekData(filteredData);

          const campTentPrice = filteredData.finalPrice;
          const triangleTentPrice = filteredData.originalPrice;

          const campTentChildPrice = campTentPrice - 500;
          const triangleTentChildPrice = triangleTentPrice - 500;

          setPackageDetails([
            {
              name: "Camp Tent",
              adultPrice: campTentPrice,
              childPrice: campTentChildPrice,
              adultCount: 0,
              childCount: 0,
            },
            {
              name: "Triangle Tent",
              adultPrice: triangleTentPrice,
              childPrice: triangleTentChildPrice,
              adultCount: 0,
              childCount: 0,
            },
          ]);
        } else {
          toast({
            title: "Trek not found",
            description: "No trek found with the specified name.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Error fetching data",
          description: "There was an issue fetching the trek data.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }, [trekName, toast]);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
    if (whatsappSameAsPhone) {
      setWhatsappNumber(e.target.value);
    }
  };

  const handleCheckboxChange = (checked) => {
    setWhatsappSameAsPhone(checked);
    if (checked) {
      setWhatsappNumber(phoneNumber);
    }
  };

  const handleIncrement = (index, type) => {
    const updatedPackages = [...packageDetails];
    updatedPackages[index][type] += 1;
    setPackageDetails(updatedPackages);
  };

  const handleDecrement = (index, type) => {
    const updatedPackages = [...packageDetails];
    if (updatedPackages[index][type] > 0) {
      updatedPackages[index][type] -= 1;
    }
    setPackageDetails(updatedPackages);
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
      toast({
        title: "Invalid Coupon",
        description: "The coupon code is invalid.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const calculateTotal = () => {
    if (paymentType === "advance" && trekData?.lockPrice) {
      return trekData.lockPrice;
    } else {
      let total = 0;
      packageDetails.forEach((pkg) => {
        total += pkg.adultPrice * pkg.adultCount + pkg.childPrice * pkg.childCount;
      });
      return total * (1 - discount);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const key = import.meta.env.VITE_RAZORPAY_KEY;
 

  const handlePayment = async () => {
    const total = calculateTotal();
    if (!phoneNumber || (!whatsappSameAsPhone && !whatsappNumber) || total === 0) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all details and ensure the total amount is not zero.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
      return;
    }
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      toast({
        title: "Payment Gateway Error",
        description: "Failed to load Razorpay. Try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

  

    const options = {
      key: key, 
      amount: calculateTotal() * 100,
      currency: "INR",
      name: trekData?.name,
      description: "Trek Booking Payment",
      handler: function (response) {
        toast({
          title: "Payment Successful",
          description: `Payment ID: ${response.razorpay_payment_id}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      },
      prefill: {
        name: "Your Name",
        email: "your_email@example.com",
        contact: phoneNumber,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  if (!trekData) {
    return <Text>Loading...</Text>;
  }

  return (
    <HStack align="start" spacing={8} p={5} wrap="wrap" justify="space-between" px={{ base: 4, md: 8, lg: 24 }}>
      <Box flex="1" maxW="500px">
        <VStack align="stretch" spacing={6}>
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              {trekData.name}
            </Text>
            <Text>
              Check-in: {trekData.checkIn} | Check-out: {trekData.checkOut}
            </Text>
            <Image
              src={trekData.imageUrl}
              alt={trekData.name}
              borderRadius="md"
              mt={4}
            />
          </Box>

          {packageDetails.map((pkg, index) => (
            <Box
              key={pkg.name}
              p={0}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
            >
              <Box bg="#0b7c8b" color={'white'} pl={2} borderTopRadius='lg'>
              <Text fontSize="lg" fontWeight="bold">
                {pkg.name}
              </Text>
              </Box>
              <HStack spacing={6} m={4}>
                <VStack>
                  <Text>Adult: ₹{pkg.adultPrice}</Text>
                  <HStack>
                    <Button
                      onClick={() => handleDecrement(index, "adultCount")}
                      size="sm"
                    >
                      -
                    </Button>
                    <Input
                      value={pkg.adultCount}
                      readOnly
                      textAlign="center"
                      width={10}
                    />
                    <Button
                      onClick={() => handleIncrement(index, "adultCount")}
                      size="sm"
                    >
                      +
                    </Button>
                  </HStack>
                </VStack>

                <VStack>
                  <Text>Child: ₹{pkg.childPrice}</Text>
                  <HStack>
                    <Button
                      onClick={() => handleDecrement(index, "childCount")}
                      size="sm"
                    >
                      -
                    </Button>
                    <Input
                      value={pkg.childCount}
                      readOnly
                      textAlign="center"
                      width={10}
                    />
                    <Button
                      onClick={() => handleIncrement(index, "childCount")}
                      size="sm"
                    >
                      +
                    </Button>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box
        flex="1"
        maxW="600px"
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="md"
      >
        <FormControl mb={4}>
          <FormLabel>Payment Type</FormLabel>
          <RadioGroup onChange={setPaymentType} value={paymentType}>
            <Stack direction="column">
              <Radio value="advance">Pay Advance & Rest at Campsite</Radio>
              <Radio value="full">Pay Full & Be Cool</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <VStack spacing={4} align="stretch" mb={6}>
        <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
          </FormControl>

          <Checkbox
            isChecked={whatsappSameAsPhone}
            onChange={(e) => handleCheckboxChange(e.target.checked)}
          >
            Whatsapp number same as phone number
          </Checkbox>

          {!whatsappSameAsPhone && (
            <FormControl>
              <FormLabel>Whatsapp Number</FormLabel>
              <Input
                type="tel"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
              />
            </FormControl>
          )}

          <FormControl>
            <FormLabel>Coupon Code</FormLabel>
            <HStack>
              <Input value={coupon} onChange={handleCouponChange} />
              <Button onClick={applyCoupon} background={"#ea7e06"}>Apply</Button>
            </HStack>
          </FormControl>
        </VStack>

        <Text fontSize="lg" fontWeight="bold">
          Total Amount: ₹{calculateTotal().toFixed(2)}
        </Text>
        <Button background={"#ea7e06"} width="full" mt={6} color={"white"} onClick={handlePayment}>
          Proceed to Payment
        </Button>
      </Box>
    </HStack>
  );
};

export default BookingForm;
