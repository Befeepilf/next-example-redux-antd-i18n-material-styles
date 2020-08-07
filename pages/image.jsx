import {useDispatch, useSelector} from 'react-redux';
import {setImage} from '../redux/image/actions.js';
import {makeStyles} from '@material-ui/styles';
import {useRouter} from 'next/router';
import {withTranslation} from '../i18n.js';
import {Button, Spin, Typography} from 'antd';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 700,
        maxWidth: '100%',
        height: '100%',
        padding: 7,
        margin: '0 auto',
        marginBottom: -28,
        border: '1px solid grey'
    },
    image: {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    }
});

function Image({t}) {
    const router = useRouter();
    const dispatch = useDispatch();

    const isLoading = useSelector(({image}) => image.loading);
    const error = useSelector(({image}) => image.error);
    const image = useSelector(({image}) => image.data);

    const classes = useStyles();

    React.useEffect(() => {
        const interval = setInterval(() => {
            dispatch(setImage());
        }, 2000);

        return () => clearInterval(interval);
    });

    
    let content;
    if (isLoading)
        content = <Spin/>;
    else if (image)
        content = <img src={image} className={classes.image}/>;
    else if (error)
        content = <Typography>Failed to load image: {error}</Typography>;

    return (
        <div className={classes.container}>
            <Button onClick={router.back}>{t('go-back')}</Button>
            <Typography.Title>{t('image')}</Typography.Title>
            {content}
        </div>
    )
}

Image.getInitialProps = async () => ({
    namespacesRequired: ['common']
});

export default withTranslation('common')(Image);