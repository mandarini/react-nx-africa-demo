import styles from './my-lib-3.module.css';
import { myUtil3 } from '@my-react-wksp/my-util-3';

export function MyLib3() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib3!</h1>
      {myUtil3()}
    </div>
  );
}

export default MyLib3;
