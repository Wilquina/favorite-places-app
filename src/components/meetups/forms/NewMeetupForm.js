import { useRef } from "react";

import Card from "../../ui/Card";
import classes from "./NewMeetupForm.module.css";
import NewMeetupFormInput from "./NewMeetupFormInput";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <NewMeetupFormInput
          htmlFor="title"
          title="Meetup Title"
          type="text"
          id="title"
          forwardRef={titleInputRef}
        />
        <NewMeetupFormInput
          htmlFor="image"
          title="Meetup Image"
          type="url"
          id="image"
          forwardRef={imageInputRef}
        />
        <NewMeetupFormInput
          htmlFor="address"
          title="Address"
          type="text"
          id="address"
          forwardRef={addressInputRef}
        />
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            rows="5"
            required
            id="description"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
