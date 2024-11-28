import styles from './my-lib-1.module.css';

export function MyLib1() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLib1!</h1>
    </div>
  );
}

export default MyLib1;
