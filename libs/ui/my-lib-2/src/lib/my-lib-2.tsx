import styles from './my-lib-2.module.css';
import { MyLib4 } from '@my-react-wksp/my-lib-4';
import { myUtil2 } from '@my-react-wksp/my-util-2';

export function MyLib2() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib2!</h1>
      <p>{myUtil2()}</p>
      <MyLib4 />
      <p>mia allagi</p>
    </div>
  );
}

export default MyLib2;
