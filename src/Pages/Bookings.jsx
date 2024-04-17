import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Box, Typography} from '@mui/material'

// creates slider for hotel images
const responsive = {
  SuperLargeDesktop: {
    breakpoint: { max: 1500, min: 1400 },
    items: 6,
  },
  LargeDesktop: {
    breakpoint: { max: 1250, min: 1000 }, //1150
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1000, min: 750 }, //900
    items: 4,
  },
  tablet: {
    breakpoint: { max: 750, min: 500 }, //700
    items: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 250 }, //450
    items: 2,
  },
  sxMobile: {
    breakpoint: { max: 250, min: 0 },
    items: 1,
  },
};


const Bookings = () => {
  return (
    <>
      <Box>
        {/* <Typography>Available Delux Rooms</Typography>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          ssr={true}
          infinite={false}
          keyBoardControl={true}
          transitionDuration={400}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        > */}
        {/* {sendPhotos(photoObj, HotelRoomImages).map((img) => (
            <Image key={img.photo_id} src={img.url_original} alt="Hotel" />
          ))} */}
        {/* </Carousel> */}
        Booking page
      </Box>
    </>
  );
};

export default Bookings;
