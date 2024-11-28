import styles from './my-lib-4.module.css';
import { myUtil3 } from '@my-react-wksp/my-util-3';

export function MyLib4() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib4!</h1>
      {myUtil3()}
    </div>
  );
}

export default MyLib4;
