import styles from "./TextField.module.css";

export function TextField({
  label = "",
  name,
  errors = [],
  children,
  ...rest
}) {
  const hasError = errors.length > 0;

  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type="text" {...rest} />

      {hasError ? (
        <ul className={styles.errorMessage}>
          {errors.map((e) => (
            <li key={e}>{`${e}. `}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
