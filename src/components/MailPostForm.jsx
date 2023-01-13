 
import React, { Fragment } from "react";

import Input from "./input";

const initState = {
  isSubmited: false,
  name: "",
  email: "",
}
import axios from "axios";

//more on this latter
const app_id = process.env.AIRTABLE_APP_ID;
const app_key = process.env.AIRTABLE_API_KEY;
const view = "MailingList";


class MailPostForm extends React.Component {

 state = initState

  formChangeHandler = (event, name, value) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {

    const { name, email, isSubmited } = this.state

    const summitButton = (
      <button  >
          Sign me up
      </button>
    )

    const thankYou = (
      <h2>
        Thank you for joining!
      </h2>
    )

    return (
      <Styled >
        {isSubmited ? (
          thankYou
        ) : (
            <Fragment>
              <Styled.h3 >
                Like what you see?
            </Styled.h3>
              <Styled.p >
                No spam, just me trying to learn how to code!
                And same other interesting stuff!
            </Styled.p>
              <form  >
                <Input
                  inputtype="input"
                  label="Your name"
                  placeholder="to get to know you..."
                  name="name"
                  value={name}
                  onChange={(event, name, value) =>
                    this.formChangeHandler(event, name, value)
                  }
                />
                <Input
                  inputtype="input"
                  label="And email"
                  placeholder="to send you good stuff..."
                  name="email"
                  value={email}
                  onChange={(event, name, value) =>
                    this.formChangeHandler(event, name, value)
                  }
                />
                {summitButton}
              </form>
            </Fragment>
          )}
      </Styled>
    )
  }
}

export default MailPostForm