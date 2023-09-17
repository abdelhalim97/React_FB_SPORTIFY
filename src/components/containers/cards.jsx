import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFetchStadiums from "../../custom-hooks/useFetchStadiums";
import { Card } from "./units";
import iconStadium from "../../assets/images/stadium.png";
import iconReservation from "../../assets/images/reservation.png";
import iconMoney from "../../assets/images/money.png";
import { db } from "../../auth/firebase";
import { onValue, ref } from "firebase/database";

export const Cards = () => {
  const [rentData, setRentData] = useState([]);
  const stadiumsData = useFetchStadiums();
  const stadiumsUserArrya = stadiumsData.map((d) => d.uid);
  useEffect(() => {
    if (stadiumsUserArrya) {
      onValue(ref(db, "reservation"), (snapshot) => {
        setRentData([]);
        const dataLocalRent = snapshot.val();
        if (dataLocalRent !== null) {
          Object.values(dataLocalRent).map((d) => {
            if (d.stadiumUid.includes(stadiumsUserArrya))
              setRentData((oldArray) => [...oldArray, d]);
            return 0;
          });
        }
      });
    }
  }, []);

  const reservationCost = rentData.reduce(
    (accumulator, currentElement) =>
      parseFloat(accumulator) +
      ((parseInt(currentElement.toHours) * 60 +
        parseInt(currentElement.toMinutes) -
        (parseInt(currentElement.fromHours) * 60 +
          parseInt(currentElement.fromMinutes))) /
        60) *
        parseInt(currentElement.cost),
    "0"
  );
  const reservationRound = parseFloat(reservationCost).toFixed(2);
  const cardsData = [
    {
      id: 0,
      dataLength: stadiumsData.length,
      desc: "Stadiums",
      icon: iconStadium,
    },
    {
      id: 1,
      dataLength: rentData.length,
      desc: "Reservations",
      icon: iconReservation,
    },
    {
      id: 2,
      dataLength: reservationRound,
      desc: "Earned",
      icon: iconMoney,
    },
  ];
  console.log(cardsData);
  return (
    <>
      {cardsData.map((cardData) => (
        <Grid key={cardData.id} item xs={12} sm={4}>
          <Card
            desc={cardData.desc}
            nb={cardData.dataLength}
            icon={cardData.icon}
            id={cardData.id}
          />
        </Grid>
      ))}
    </>
  );
};
