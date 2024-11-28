import styles from './my-lib-2.module.css';

export function MyLib2() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib2!</h1>
    </div>
  );
}

export default MyLib2;
