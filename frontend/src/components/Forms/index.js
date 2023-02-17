import React from "react";

export function Input({ label, type = "text", ...inputProps }) {
  return (
    <>
      <label className="input" class="form-label">{label}</label>
      <input class="form-control" type={type} {...inputProps} />
    </>
  );
}

export function TextArea({ label, ...textAreaProps }) {
  return (
    <>
      <label className="input" class="form-label">{label}</label>
      <textarea class="form-control"{...textAreaProps}></textarea>
    </>
  );
}

export function FormErrors({ errors }) {
  return (
    <ul className="form-errors">
      {errors.map(error => <li key={error}>{error}</li>)}
    </ul>
  );
}
