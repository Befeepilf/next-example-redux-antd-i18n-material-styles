import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    padding: 15,
    display: 'inline-block',
    color: light => light ? 'blue' : '#82fa58',
    font: '50px menlo, monaco, monospace',
    backgroundColor: light => light ? '#999' : '#000',
    transition: 'all 0.5s'
  }
});

export default function Clock() {
  const lastUpdate = useSelector(({tick}) => tick.lastUpdate);
  const light = useSelector(({tick}) => tick.light);

  const classes = useStyles(light);

  return (
    <div className={classes.container}>
      {format(new Date(lastUpdate))}
    </div>
  );
}

const format = (t) =>
  `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`

const pad = (n) => (n < 10 ? `0${n}` : n)
