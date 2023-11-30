"use client";

import { calcAction } from "./calc.action";
import styles from "./index.module.css";

import { useFormState, useFormStatus } from "react-dom";

function InputDisplay({ value }: { value: string }) {
  const formStatus = useFormStatus();

  return (
    <div className={styles.calculator}>
      <input
        type="text"
        className={styles.display}
        value={formStatus.pending ? "..." : value}
        readOnly
      />
      <div className={styles.buttons}>
        <button type="submit" name="action" value="1" className={styles.number}>
          1
        </button>
        <button type="submit" name="action" value="2" className={styles.number}>
          2
        </button>
        <button type="submit" name="action" value="3" className={styles.number}>
          3
        </button>
        <button type="submit" name="action" value="4" className={styles.number}>
          4
        </button>
        <button type="submit" name="action" value="5" className={styles.number}>
          5
        </button>
        <button type="submit" name="action" value="6" className={styles.number}>
          6
        </button>
        <button type="submit" name="action" value="7" className={styles.number}>
          7
        </button>
        <button type="submit" name="action" value="8" className={styles.number}>
          8
        </button>
        <button type="submit" name="action" value="9" className={styles.number}>
          9
        </button>
        <button type="submit" name="action" value="0" className={styles.number}>
          0
        </button>
        <button
          type="submit"
          name="action"
          value="+"
          className={styles.operator}
        >
          +
        </button>
        <button
          type="submit"
          name="action"
          value="-"
          className={styles.operator}
        >
          -
        </button>
        <button
          type="submit"
          name="action"
          value="*"
          className={styles.operator}
        >
          *
        </button>
        <button
          type="submit"
          name="action"
          value="/"
          className={styles.operator}
        >
          /
        </button>
        <button
          type="submit"
          name="action"
          value="clear"
          className={styles.clear}
        >
          C
        </button>
        <button
          type="submit"
          name="action"
          value="calc"
          className={styles.equal}
        >
          =
        </button>
      </div>
    </div>
  );
}

export function Calc() {
  const initialState = {
    value: "",
  };

  const [state, dispatch] = useFormState(calcAction, initialState);

  return (
    <form action={dispatch}>
      <InputDisplay value={state?.value} />
    </form>
  );
}
