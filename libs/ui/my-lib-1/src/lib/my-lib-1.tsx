import styles from './my-lib-1.module.css';
import { MyLib3 } from '@my-react-wksp/my-lib-3';
import { myUtil1 } from '@my-react-wksp/my-util-1';
export function MyLib1() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib1!</h1>
      <p>{myUtil1()}</p>
      <MyLib3 />
    </div>
  );
}

export default MyLib1;
