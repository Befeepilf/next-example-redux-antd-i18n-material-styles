import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
   img: {
       objectFit: 'cover',
       width: '100%',
       height: '100%'
   } 
});

export default function MovieImage(props) {
    const config = useSelector(({movies}) => movies.config);
    const classes = useStyles();

    return <img className={classes.img} src={`${config.data.images.secure_base_url}original${props.src}`}/>
}