import { FC, useState } from 'react'
import useMeasure from 'react-use-measure';
import {useSpring, animated} from '@react-spring/web';
import styles from './styles.module.css'
import useStyles from './styles';

const OpBar: FC<{yes: number, no: number}> = ({yes, no}) => {

    const [open, toggle] = useState(false);
    const classes = useStyles();
    const [ref, {width}] = useMeasure();
    const aRate:number = (no / (yes + no))
    const props = useSpring({
      from: {width: 0, no: 0, yes: yes + no},
      to: {width: width * aRate, no: no, yes: yes},
      config:{duration: 3000}
    })
    return (
      <div className={classes.commentPage}>
        <div className={styles.container}>
        <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>{props.no.to(x => x.toFixed(0))}</animated.div>
        <animated.div className={styles.content2}>{props.yes.to(x => x.toFixed(0))}</animated.div>
        
      </div>
      </div>
      </div>
    )
}

export default OpBar;