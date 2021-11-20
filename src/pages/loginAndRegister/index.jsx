// import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Field, withTypes } from "react-final-form";
import { useLocation } from "react-router-dom";

import { auth, db } from "../../providers-firebase";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";

import {
  Avatar,
  Button,
  Card,
  CardActions,
  CircularProgress,
  Link,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import LockIcon from "@material-ui/icons/Lock";

import { Notification, useTranslate, useLogin, useNotify } from "react-admin";
import { lightTheme } from "../../components/atoms/DashboardThemes";
import { useStyles, renderInput } from "./styling";

const { Form } = withTypes();

const LoginAndRegisterFC = () => {
  const [loading, setLoading] = useState(false);
  const [toRegister, setToRegister] = useState(false);
  const translate = useTranslate();
  const classes = useStyles();
  const notify = useNotify();
  const login = useLogin();
  const location = useLocation();

  const handleSubmitLogin = (userData) => {
    setLoading(true);
    login(userData, location.state ? location.state.nextPathname : "/").catch(
      (error) => {
        setLoading(false);
        notify(
          typeof error === "string"
            ? error
            : typeof error === "undefined" || !error.message
            ? "ra.auth.sign_in_error"
            : error.message,
          "warning",
          {
            _:
              typeof error === "string"
                ? error
                : error && error.message
                ? error.message
                : undefined,
          }
        );
      }
    );
  };

  const handleSubmitRegister = async (userData) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(
        auth,
        userData.username,
        userData.password
      );

      updateProfile(auth.currentUser, {
        displayName: userData.displayName,
      });

      setDoc(
        doc(db, "users", auth.currentUser.uid),
        {
          email: userData.username,
          displayName: userData.displayName,
          npm: userData.studentId,
          userType: "student",
          dateCreated: Timestamp.fromDate(new Date()),
        },
        { merge: true }
      );

      handleSubmitLogin(userData);
    } catch (error) {
      setLoading(false);
      notify(
        typeof error === "string"
          ? error
          : typeof error === "undefined" || !error.message
          ? "ra.auth.sign_in_error"
          : error.message,
        "warning",
        {
          _:
            typeof error === "string"
              ? error
              : error && error.message
              ? error.message
              : undefined,
        }
      );
    }
  };

  const validateLogin = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = translate("ra.validation.required");
    }
    if (!values.password) {
      errors.password = translate("ra.validation.required");
    }
    return errors;
  };

  const validateRegister = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = translate("ra.validation.required");
    }
    if (!values.password) {
      errors.password = translate("ra.validation.required");
    }
    if (!values.displayName) {
      errors.displayName = translate("ra.validation.required");
    }
    if (!values.studentId) {
      errors.studentId = translate("ra.validation.required");
    }
    return errors;
  };

  return (
    <Form
      onSubmit={!toRegister ? handleSubmitLogin : handleSubmitRegister}
      validate={!toRegister ? validateLogin : validateRegister}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <div className={classes.main}>
            <Card className={classes.card}>
              <div className={classes.avatar}>
                <Avatar className={classes.icon}>
                  <LockIcon />
                </Avatar>
              </div>
              <div className={classes.form}>
                <div className={classes.input}>
                  <Field
                    autoFocus
                    name="username"
                    // @ts-ignore
                    component={renderInput}
                    label="E-mail"
                    disabled={loading}
                  />
                </div>
                <div className={classes.input}>
                  <Field
                    name="password"
                    // @ts-ignore
                    component={renderInput}
                    label="Password"
                    type="password"
                    disabled={loading}
                  />
                </div>
                {toRegister ? (
                  <div className={classes.input}>
                    <Field
                      name="displayName"
                      // @ts-ignore
                      component={renderInput}
                      label="Full name"
                      disabled={loading}
                    />
                  </div>
                ) : (
                  <div />
                )}
                {toRegister ? (
                  <div className={classes.input}>
                    <Field
                      name="studentId"
                      // @ts-ignore
                      component={renderInput}
                      label="Student ID (NPM)"
                      disabled={loading}
                    />
                  </div>
                ) : (
                  <div />
                )}
              </div>
              <CardActions className={classes.actions}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={loading}
                  fullWidth
                >
                  {loading && <CircularProgress size={25} thickness={2} />}
                  {!toRegister ? "Sign in" : "Sign Up"}
                </Button>
              </CardActions>
              <CardActions className={classes.actions}>
                <Link
                  underline="hover"
                  onClick={() => {
                    setToRegister(!toRegister);
                  }}
                >
                  {!toRegister
                    ? "Create an account!"
                    : "Sign in with an existing account!"}
                </Link>
              </CardActions>
            </Card>
            <Notification />
          </div>
        </form>
      )}
    />
  );
};

LoginAndRegisterFC.propTypes = {
  authProvider: PropTypes.func,
  previousRoute: PropTypes.string,
};

// We need to put the ThemeProvider decoration in another component
// Because otherwise the useStyles() hook used in Login won't get
// the right theme
const LoginAndRegister = (props) => (
  <ThemeProvider theme={createMuiTheme(lightTheme)}>
    <LoginAndRegisterFC {...props} />
  </ThemeProvider>
);

export default LoginAndRegister;
