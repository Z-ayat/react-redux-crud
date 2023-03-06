import { memo } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import PostItem from './PostItem';
const PostList = ({ records, deleteRecord, isLoggedIn }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align='left'>Title</TableCell>
              <TableCell align='left'>Content</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <PostItem
              records={records}
              deleteRecord={deleteRecord}
              isLoggedIn={isLoggedIn}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default memo(PostList);
