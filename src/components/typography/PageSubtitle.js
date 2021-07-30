import React from 'react';
import "./typography.css";

const PageSubtitle = (props) => (
  <p className={styles.subtitle}>{props.children}</p>
);

export { PageSubtitle };