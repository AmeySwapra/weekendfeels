import React, { useState } from 'react';
import { Input, FormControl, FormLabel, FormErrorMessage, Checkbox, Button, Radio, RadioGroup, Stack, Textarea, Box, Heading, VStack } from '@chakra-ui/react';

const Influencer = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    campsites: [],
    travelDate: '',
    collabType: '',
    socials: '',
    otherInfo: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    email: '',
    campsites: '',
    travelDate: '',
    collabType: '',
    socials: '',
    otherInfo: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]  // Add selected checkbox value to the array
          : prev[name].filter((item) => item !== value),  // Remove unchecked value from the array
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.contact) newErrors.contact = 'Contact number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.campsites.length === 0) newErrors.campsites = 'Please select at least one campsite';
    if (!formData.travelDate) newErrors.travelDate = 'Preferred date of travel is required';
    if (!formData.collabType) newErrors.collabType = 'Type of collaboration is required';
    if (!formData.socials) newErrors.socials = 'Social media links are required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit the form data to Google Forms
    //   const formUrl =
    //     'https://docs.google.com/forms/u/1/d/e/1FAIpQLSdl5qaXXkPisZXN7o_ZABt1KodJ572cjb-f8RsRztO4znXK8Q/formResponse';

      const formPayload = new FormData();
      formPayload.append('entry.827154508', formData.name);
      formPayload.append('entry.1996974916', formData.contact);
      formPayload.append('entry.284129738', formData.email);
      formPayload.append('entry.324511765', formData.campsites.join(', '));
      formPayload.append('entry.806713376', formData.travelDate);
      formPayload.append('entry.1990566893', formData.collabType);
      formPayload.append('entry.1661316179', formData.socials);
      formPayload.append('entry.1981513122', formData.otherInfo);

      fetch(formUrl, {
        method: 'POST',
        body: formPayload,
      })
        .then((response) => response.json())
        .then((data) => {
          alert('Form submitted successfully!');
        })
        .catch((error) => {
          alert('Error submitting form');
        });
    }
  };

  return (
    <Box maxW="lg" mx="auto" p={5} borderWidth={1} borderRadius="md" mb={'25px'} mt='125px'>
      <Heading as="h3" mb={4}>
        Influencer Collaboration
      </Heading>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <FormControl isInvalid={!!errors.name} mb={4}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>

        {/* Contact Number */}
        <FormControl isInvalid={!!errors.contact} mb={4}>
          <FormLabel htmlFor="contact">Contact Number</FormLabel>
          <Input
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
          <FormErrorMessage>{errors.contact}</FormErrorMessage>
        </FormControl>

        {/* Email Address */}
        <FormControl isInvalid={!!errors.email} mb={4}>
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        {/* Campsite Interested */}
        <FormControl isInvalid={!!errors.campsites} mb={4}>
          <FormLabel>Campsite Interested</FormLabel>
          <VStack align="flex-start">
            <Checkbox
              name="campsites"
              value="Pawna Lake"
              onChange={handleChange}
              isChecked={formData.campsites.includes('Pawna Lake')}
            >
              Pawna Lake
            </Checkbox>
            <Checkbox
              name="campsites"
              value="Panshet Dam"
              onChange={handleChange}
              isChecked={formData.campsites.includes('Panshet Dam')}
            >
              Panshet Dam
            </Checkbox>
            <Checkbox
              name="campsites"
              value="Malshej Ghat"
              onChange={handleChange}
              isChecked={formData.campsites.includes('Malshej Ghat')}
            >
              Malshej Ghat
            </Checkbox>
            <Checkbox
              name="campsites"
              value="Alibaug Beach"
              onChange={handleChange}
              isChecked={formData.campsites.includes('Alibaug Beach')}
            >
              Alibaug Beach
            </Checkbox>
            <Checkbox
              name="campsites"
              value="Bhandardara Lake"
              onChange={handleChange}
              isChecked={formData.campsites.includes('Bhandardara Lake')}
            >
              Bhandardara Lake
            </Checkbox>
            <Checkbox
              name="campsites"
              value="Igatpuri Lake"
              onChange={handleChange}
              isChecked={formData.campsites.includes('Igatpuri Lake')}
            >
              Igatpuri Lake
            </Checkbox>
            <Checkbox
              name="campsites"
              value="Any / No Preference"
              onChange={handleChange}
              isChecked={formData.campsites.includes('Any / No Preference')}
            >
              Any / No Preference
            </Checkbox>
          </VStack>
          <FormErrorMessage>{errors.campsites}</FormErrorMessage>
        </FormControl>

        {/* Preferred Date of Travel */}
        <FormControl isInvalid={!!errors.travelDate} mb={4}>
          <FormLabel>Preferred Date of Travel</FormLabel>
          <RadioGroup
            name="travelDate"
            value={formData.travelDate}
            onChange={(value) => setFormData((prev) => ({ ...prev, travelDate: value }))} 
            required
          >
            <Stack direction="row">
              <Radio value="Within a week">Within a week</Radio>
              <Radio value="Within a month">Within a month</Radio>
              <Radio value="Within 3 months">Within 3 months</Radio>
              <Radio value="Not Decided">Not Decided</Radio>
            </Stack>
          </RadioGroup>
          <FormErrorMessage>{errors.travelDate}</FormErrorMessage>
        </FormControl>

        {/* Type of Collaboration */}
        <FormControl isInvalid={!!errors.collabType} mb={4}>
          <FormLabel htmlFor="collabType">Type of Collaboration</FormLabel>
          <Input
            id="collabType"
            name="collabType"
            value={formData.collabType}
            onChange={handleChange}
            placeholder="Enter your collaboration type"
            required
          />
          <FormErrorMessage>{errors.collabType}</FormErrorMessage>
        </FormControl>

        {/* Socials */}
        <FormControl isInvalid={!!errors.socials} mb={4}>
          <FormLabel htmlFor="socials">Social Media Links</FormLabel>
          <Input
            id="socials"
            name="socials"
            value={formData.socials}
            onChange={handleChange}
            placeholder="Enter your social media links"
            required
          />
          <FormErrorMessage>{errors.socials}</FormErrorMessage>
        </FormControl>

        {/* Additional Information */}
        <FormControl isInvalid={!!errors.otherInfo} mb={4}>
          <FormLabel htmlFor="otherInfo">Any Additional Information</FormLabel>
          <Textarea
            id="otherInfo"
            name="otherInfo"
            value={formData.otherInfo}
            onChange={handleChange}
            placeholder="Enter any additional information"
          />
          <FormErrorMessage>{errors.otherInfo}</FormErrorMessage>
        </FormControl>

        {/* Submit Button */}
        <Button type="submit" colorScheme="blue" width="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Influencer;
