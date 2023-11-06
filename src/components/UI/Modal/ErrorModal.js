import React from 'react';
import styles from './ErrorModal.moduel.css';
import Card from '../Card';
import Button from '../Button/Button';

const ErrorModal = ({ title, message }) => {
  return (
    <>
      <div className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
