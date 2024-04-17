import { Box, Typography, styled, Button, Paper } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import format from "date-fns/format";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// component styles
const Individual = styled(Box)`
  display: flex;
  align-items: center;
  padding: 13px;
  justify-content: space-around;
  border: 3px solid #071a45;
  border-radius: 10px;
  position: relative;
  min-width: 200px;
  background-color: white;
`;
const Calender = styled(Box)`
  position: absolute;
  top: 70px;
  z-index: 2;
`;

const Home = () => {
  const navigate = useNavigate()
  // date picker 
  const [openDate, setOpenDate] = useState(false);
    const [range, setRange] = useState([
      {
        startDate: new Date(),
        endDate: addDays(new Date(), 2),
        key: "selection",
      },
    ]);
    const reference = useRef(null);
    useEffect(() => {
      document.addEventListener("keydown", hideOnEscape, true);
      document.addEventListener("click", hideOnOutsideClick, true);
    }, [range]);

    // closes calender when press escape key
    const hideOnEscape = (e) => {
      if (e.key === "Escape") setOpenDate(false);
    };
    // closes calender when press outside calender box
    const hideOnOutsideClick = (e) => {
      if (reference.current && !reference.current.contains(e.target))
        setOpenDate(false);
    };
    const handleSubmit = (e)=> {
      e.preventDefault()
      navigate('/bookings')

    }
  return (
    <>
      <Box sx={{ marginTop: { xs: "30px", md: "50px" } }}>
        <Typography
          textAlign="center"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2rem", md: "3rem" }, marginBottom: "30px" }}
        >
          Welcome to Stay Wise
        </Typography>
        <Typography variant="subtitle1" sx={{ margin: "0px 5%" }}>
          {" "}
          Plan Your Trip Wisely. We Provide Accoumadation for you. Find the
          cheapest and clean Rooms in your city
        </Typography>
        <Typography variant="subtitle1" sx={{ margin: "0px 5%" }}>
          {" "}
          Stay wise is an idenpendent platform with connections to over 1000+
          vendors across India. We Offer direct bookings and simple room booking
          for our users
        </Typography>
      </Box>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          marginTop: "30px",
          marginBottom: "10px",
        }}
      >
        Search your Room here
      </Typography>
      <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
          <Individual>
            <CalendarMonthIcon />
            <input
              type="text"
              required
              value={`${format(range[0].startDate, "ccc-dd-MMM")}  to ${format(
                range[0].endDate,
                "ccc-dd-MMM"
              )}`}
              readOnly
              placeholder="Check-in-Date  Check-out-date"
              onClick={() => setOpenDate((prestate) => !prestate)}
              style={{
                border: "none",
                padding: "10px",
                fontSize: "1rem",
                minWidth: "300px",
              }}
            />
            <Calender ref={reference}>
              {openDate && (
                <DateRange
                  onChange={(item) => setRange([item.selection])}
                  editableDateInputs={true}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  months={1}
                  direction="horizontal"
                  minDate={new Date()}
                />
              )}
            </Calender>
          </Individual>
          <Individual>
            <PeopleAltIcon />
            <input
              type="number"
              placeholder="Number of Guests"
              min="1"
              max="30"
              required
              style={{
                border: "none",
                padding: "10px",
                fontSize: "1rem",
                minWidth: "220px",
              }}
            />{" "}
            <Button variant="contained" type="submit">Search</Button>
          </Individual>
          {/* <Typography variant="caption text" sx={{border:'none'}}>
            Please selct Guests between 1 to 30
          </Typography> */}
      </Box>
          </form>
          <Box>
            <Typography variant="h4" sx={{margin:'10px 5%'}}>Types rooms Available</Typography>
            <Paper sx={{height:'30vh', margin:'10px'}} elevation={4}>

            </Paper>
          </Box>
    </>
  );
};

export default Home;
