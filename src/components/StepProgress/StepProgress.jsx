// import styles from "./StepProgress.module.css";

function StepProgress() {
  return (
    <>
      {/* <div className={styles.stepProgress}>

        <section className={styles.progressContainer}>
          <span className={styles.progressGroup} data-phase="address">
            <span className={styles.progressIcon}>
              <span className={styles.text}>1</span>
            </span>
            <span className={styles.progressLabel}>寄送地址</span>
          </span>
          <span className={styles.progressBar} data-order="1"></span>
          <span className={styles.progressGroup} data-phase="shipping">
            <span className={styles.progressIcon}>
              <span className={styles.text}>2</span>
            </span>
            <span className={styles.progressLabel}>運送方式</span>
          </span>
          <span className={styles.progressBar} data-order="2"></span>
          <span className={styles.progressGroup} data-phase="credit-card">
            <span className={styles.progressIcon}>
              <span className={styles.text}>3</span>
            </span>
            <span className={styles.progressLabel}>付款資訊</span>
          </span>
        </section>
      </div> */}

      <section className="progress-container col col-12">
        <span className="progress-group" data-phase="address">
          <span className="progress-icon">
            <span className="text">1</span>
          </span>
          <span className="progress-label">寄送地址</span>
        </span>
        <span className="progress-bar" data-order="1"></span>
        <span className="progress-group" data-phase="shipping">
          <span className="progress-icon">
            <span className="text">2</span>
          </span>
          <span className="progress-label">運送方式</span>
        </span>
        <span className="progress-bar" data-order="2"></span>
        <span className="progress-group" data-phase="credit-card">
          <span className="progress-icon">
            <span className="text">3</span>
          </span>
          <span className="progress-label">付款資訊</span>
        </span>
      </section>
    </>
  );
}

export default StepProgress;
