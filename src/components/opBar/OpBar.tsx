import { FC, useState } from 'react'
import useMeasure from 'react-use-measure';
import {useSpring, animated} from '@react-spring/web';
import styles from './styles.module.css'
import useStyles from './styles';

const OpBar: FC = () => {

  const classes = useStyles();
    const [open, toggle] = useState(false)
    const [ref, { width }] = useMeasure()
    var a:number = 40
    var b:number = 60
    var c:number = width * (a / (a + b))
    const props = useSpring({
      from: {width: 0},
      to:{width: c},
      config: { duration: 3000},
    })
    return (
      <div className={classes.commentPage}>
        <div className={styles.container}>
        <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
        <animated.div className={styles.content2}>{props.width.to(x => (width - x).toFixed(0))}</animated.div>
      </div>
      </div>
      </div>
    )
}

export default OpBar;