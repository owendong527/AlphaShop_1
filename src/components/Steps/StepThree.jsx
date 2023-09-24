// import styles from "./StepThree.module.css";

function StepThree() {
  return (
    <>
      {/* <form className={styles.payForm} data-phase="credit-card">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className="form-body col col-12">
          <div className={styles.inputLine}>
            <div className={styles.inputGroup1}>
              <div className={styles.inputLabel}>持卡人姓名</div>
              <input
                className={styles.InputStyle}
                type="text"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div className={styles.inputGroup1}>
              <div className={styles.inputLabel}>卡號</div>
              <input
                className={styles.InputStyle}
                type="text"
                placeholder="1111 2222 3333 4444"
              />
            </div>
          </div>
          <div className={styles.inputLine}>
            <div className={styles.inputGroup2}>
              <div className={styles.inputLabel}>有效期限</div>
              <input
                className={styles.InputStyle}
                type="text"
                placeholder="MM/YY"
              />
            </div>
            <div className={styles.inputGroup3}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <input
                className={styles.InputStyle}
                type="text"
                placeholder="123"
              />
            </div>
          </div>
        </section>
      </form> */}

      <form className="col col-12" data-phase="credit-card">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body col col-12">
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">持卡人姓名</div>
              <input type="text" placeholder="John Doe" />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-4 input-w-sm-full">
              <div className="input-label">卡號</div>
              <input type="text" placeholder="1111 2222 3333 4444" />
            </div>
          </div>
          <div className="col col-12">
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">有效期限</div>
              <input type="text" placeholder="MM/YY" />
            </div>
            <div className="input-group input-w-lg-3 input-w-sm-s3">
              <div className="input-label">CVC / CCV</div>
              <input type="text" placeholder="123" />
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default StepThree;
