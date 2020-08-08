import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import {withTranslation} from '../../i18n.js';
import {Spin, Typography, Carousel} from 'antd';
import MovieImage from '../MovieImage.jsx';

const useStyles = makeStyles({
    container: {
        width: 400,
        height: 200,
        margin: '0 auto'
    }
})

function NowPlaying({t}) {
    const {loading, error, data} = useSelector(({movies}) => movies.nowPlaying);

    const classes = useStyles();

    let content;
    if (loading)
        content = <Spin/>;
    else if (error)
        content = "Error";
    else
        content = (
            <Carousel autoplay>{data.results.map(movie => <MovieImage key={movie.id} src={movie.backdrop_path}/>)}</Carousel>
        );

    return (
        <div className={classes.container}>
            <Typography>{t('now-playing')}</Typography>
            {content}
        </div>
    );
}

export default withTranslation('common')(NowPlaying);