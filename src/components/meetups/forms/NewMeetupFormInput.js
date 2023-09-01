import classes from "./NewMeetupFormInput.module.css";

function NewMeetupFormInput(props) {
  return (
    <div className={classes.control}>
      <label htmlFor={props.htmlFor}>{props.title}</label>
      <input
        type={props.type}
        required
        id={props.id}
        ref={props.forwardRef}
      />
    </div>
  );
}

export default NewMeetupFormInput;
