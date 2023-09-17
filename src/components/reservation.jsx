import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Border, Pagination, TypographyIcon } from "./containers/units";
import useFetchStadiums from "../custom-hooks/useFetchStadiums";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import useFetchReservations from "../custom-hooks/useFetchReservations";
import { TablePaginationActions } from "./containers";

export const Reservation = () => {
  const [loading, setLoading] = useState(true);
  const data = useFetchStadiums();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [rentUid, setRentUid] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 1;
  const pagesVisited = dataPerPage * pageNumber;
  useEffect(() => {
    data?.slice(pagesVisited, pagesVisited + dataPerPage).map((d) => {
      setRentUid(d.uid);
      return setLoading(false);
    });
  }, [data, pageNumber]);
  const dataReservations = useFetchReservations(rentUid);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Border>
      <Typography
        align="center"
        variant="h5"
        className="font-bold text-base text-4xl tex-center w-full py-1"
      >
        {data && data.map((d) => d.uid === rentUid && d.name + " Stadium")}
      </Typography>
      {!loading ? (
        data?.slice(pagesVisited, pagesVisited + dataPerPage).map((d, i) => (
          <Paper className="w-full mb-3 " key={i}>
            <TableContainer component={Paper} className="mb-3">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Cost</TableCell>
                    <TableCell align="left">Date</TableCell>
                    <TableCell align="left">Reservation from</TableCell>
                    <TableCell align="left">Reservation to</TableCell>
                    <TableCell align="left">Duration</TableCell>
                    <TableCell align="left">reserver Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? dataReservations.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : dataReservations
                  ).map((row) => (
                    <TableRow
                      key={row.uid}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.cost}
                      </TableCell>
                      <TableCell align="left">
                        {row.day}/{row.month}/{row.year}
                      </TableCell>
                      <TableCell align="left">
                        {row.fromHours}:{row.fromMinutes}
                      </TableCell>
                      <TableCell align="left">
                        {row.toHours}:{row.toMinutes}
                      </TableCell>
                      <TableCell align="left">
                        {Math.floor(
                          (parseInt(row.toHours * 60) +
                            parseInt(row.toMinutes) -
                            (parseInt(row.fromHours * 60) +
                              parseInt(row.fromMinutes))) /
                            60
                        )}
                        :
                        {Math.floor(
                          (parseInt(row.toHours * 60) +
                            parseInt(row.toMinutes) -
                            (parseInt(row.fromHours * 60) +
                              parseInt(row.fromMinutes))) %
                            60
                        )}
                      </TableCell>
                      <TableCell align="left">{row.reserverEmail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className="flex justify-center">
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={dataReservations.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </div>
          </Paper>
        ))
      ) : (
        <div className="w-full flex justify-center">
          <CircularProgress />
        </div>
      )}
      {dataReservations.length === 0 && data.length > 0 && (
        <TypographyIcon
          variant="body1"
          styles="text-red-600 text-center mb-3 w-full"
          icon={faTriangleExclamation}
          text="There s no reservation yet"
        />
      )}
      <div className="mx-auto">
        <Pagination
          data={data}
          setPageNumber={setPageNumber}
          dataPerPage={dataPerPage}
          setRentUid={setRentUid}
        />
      </div>
      {data.length === 0 && (
        <TypographyIcon
          variant="body1"
          styles="text-red-600 text-center mb-3 mx-auto"
          icon={faTriangleExclamation}
          text="you dont have any Stadiums yet"
        />
      )}
    </Border>
  );
};
