import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ active, setActive, totalItems, itemsPerPage }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  return (
    <MuiPagination
      count={pageCount}
      page={active}
      onChange={(event, value) => setActive(value)}
      color="primary"
      sx={{marginBottom:'40px'}}
    />
  );
};

export default Pagination;
