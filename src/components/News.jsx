import { Grid, GridItem, Box, Image, Heading, Link } from "@chakra-ui/react";
import img1 from '../assets/images/outlook.png';
import img2 from '../assets/images/Midday.png';
import img3 from '../assets/images/News.png';
import img4 from '../assets/images/ANI_News.png';
import img5 from '../assets/images/Daily_Hunt.png';
import img6 from '../assets/images/IIFL.png';

const News = () => {
  const newsData = [
    {
      image: img1,
      alt: "Outlook India",
      title: "Outlook India",
      link: "https://www.outlookindia.com/business-spotlight/weekend-feels-maharashtra-s-camping-guru-marks-explosive-growth-news-343680",
    },
    {
      image: img2,
      alt: "Mid Day",
      title: "Mid Day",
      link: "https://www.mid-day.com/brand-media/article/weekend-feels-gateway-to-unforgettable-outdoor-adventures-23328244",
    },
    {
      image: img3,
      alt: "Business Standard",
      title: "Business Standard",
      link: "https://www.business-standard.com/content/press-releases-ani/experiential-travel-company-by-iim-graduates-weekend-feels-celebrates-20-000-customers-122111400479_1.html",
    },
    {
      image: img4,
      alt: "ANI News",
      title: "ANI News",
      link: "https://www.aninews.in/news/business/business/experiential-travel-company-by-iim-graduates-weekend-feels-celebrates-20000-customers20221114131619/",
    },
    {
      image: img5,
      alt: "Daily Hunt",
      title: "Daily Hunt",
      link: "https://m.dailyhunt.in/news/india/english/ani67917250816496966-epaper-dh448c3797a13d4f32b1d2367d0d72a726/experiential+travel+company+by+iim+graduates+weekend+feels+celebrates+20000+customers-newsid-n441775770",
    },
    {
      image: img6,
      alt: "IIFL",
      title: "IIFL",
      link: "https://www.indiainfoline.com/article/news-business-wire-education-training/experiential-travel-company-by-iim-graduates-weekend-feels-celebrates-20-000-customers-122111400107_1.html",
    },
  ];

  return (
    <Box m="25px" px={{ base: 4, md: 8, lg: 24 }}>
      <Grid
        templateColumns={{
          base: "1fr", 
          md: "repeat(3, 1fr)", 
        }}
        gap={6}
      >
        {newsData.map((news, index) => (
          <GridItem key={index}>
            <Box borderRadius="2px" border="2px solid" overflow="hidden">
              <Link href={news.link} isExternal>
                <Image
                  src={news.image}
                  alt={news.alt}
                  height="500px"
                  width="100%"
                  objectFit="cover"
                />
              </Link>
            </Box>
            <Heading
              as="h2"
              fontSize="lg"
              textAlign="center"
              mt={4}
            >
              <Link href={news.link} isExternal color="blue.500" _hover={{ textDecoration: 'underline' }}>
                {news.title}
              </Link>
            </Heading>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
