import { Button, ButtonGroup, TableCell, TableRow } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const PostItem = ({ records, deleteRecord, isLoggedIn }) => {
  const deleteHandler = (row) => {
    if (window.confirm(`Are you sure to delete ${row.title}`))
      deleteRecord(row.id);
  };
  const navigate = useNavigate();

  const postItems = records.map((row, idx) => {
    const { id, title, content } = row;
    return (
      <TableRow
        key={id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell
          component='th'
          scope='row'>
          {++idx}
        </TableCell>
        <TableCell align='left'>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/post/${id}`}>
            {title}
          </Link>
        </TableCell>
        <TableCell align='left'>{content}</TableCell>
        <TableCell align='left'>
          <ButtonGroup>
            <Button
              variant='contained'
              onClick={() => navigate(`/post/${id}/edit`)}
              color='success'>
              Edit
            </Button>

            <Button
              variant='contained'
              color='error'
              disabled={!isLoggedIn}
              onClick={() => deleteHandler(row)}>
              Delete
            </Button>
          </ButtonGroup>
        </TableCell>
      </TableRow>
    );
  });
  return <>{postItems}</>;
};
export default PostItem;
