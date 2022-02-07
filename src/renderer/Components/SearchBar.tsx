import {
  createStyles,
  makeStyles
} from '@mui/styles';
import {
  Theme,
} from '@mui/material';
import SearchIcon from '@mui/material/Icon';
import InputBase from '@mui/material/InputBase';

const useStyles = makeStyles((theme: Theme) =>{
  return createStyles({
    search: {
      position: 'relative',
      borderRadius: '5px',
      borderColor:'#627B87',
      backgroundColor: "#F6F6FB",
      // '&:hover': {
      //   backgroundColor: fade(theme.palette.common.white, 0.25),
      // },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      color:'#627B87',
      justifyContent: 'center',
    },
    inputRoot: {
      color: '#627B87',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  })
});

 const  Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search ' }}
      />
    </div>
  );
}

export default Search;
