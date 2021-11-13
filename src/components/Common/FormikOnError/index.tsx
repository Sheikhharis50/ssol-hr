import React, { useEffect, useState } from "react";
import isObject from "lodash/isObject";
import { useFormikContext } from "formik";

// Finding First key in errors.
const getFirstErrorKey: any = (object: any, objectFormat: any, keys = []) => {
  var firstErrorKey = null;
  var temp_object = Object.keys(object);
  for (var key in objectFormat) {
    if (temp_object.filter((val) => val === key).length) {
      firstErrorKey = key;
      break;
    }
  }

  // Look for a key in object.
  if (firstErrorKey && isObject(object[firstErrorKey])) {
    return getFirstErrorKey(
      object[firstErrorKey],
      objectFormat[firstErrorKey],
      [...keys, firstErrorKey]
    );
  }
  return [...keys, firstErrorKey].join(".");
};

const FormikOnError: React.FC<any> = ({ children }) => {
  // Hook provided by formik package.
  const formik = useFormikContext();
  const [submitCount, setSubmitCount] = useState(0);

  // When form submitted it will check if the form is valid or not
  // if not it will find the firstErrorKey in errors array and
  // focus on that element.
  // this process will only call on formSubmit.
  useEffect(() => {
    if (
      !formik.isValid &&
      formik.submitCount > 0 &&
      submitCount !== formik.submitCount
    ) {
      setSubmitCount(formik.submitCount);
      const firstErrorKey = getFirstErrorKey(
        formik.errors,
        formik.initialValues
      );
      if (global.window.document.getElementsByName(firstErrorKey).length) {
        global.window.document.getElementsByName(firstErrorKey)[0].focus();
      }
    }
  }, [formik.submitCount, formik.isValid, formik.errors]);

  return children;
};

export default FormikOnError;
