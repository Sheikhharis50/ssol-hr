import React from "react";
import { Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import * as Yup from "yup";
import { PageHeader } from "../../style";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

// core components
import Layout from "../../../components/Layout";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import FormikOnError from "../../../components/Common/FormikOnError";
import Button from "../../../components/Common/Button";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required."),
  code: Yup.string().required("Code is required!"),
  no_of_employees: Yup.number().required("No Of Employees is required!"),
});

type Props = {};

const DepartmentsPage: React.FC<Props> = () => {
  // states

  // hooks
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // initials
  const initialValues = {
    title: "",
    code: "",
    no_of_employees: "",
  };

  // handlers
  const handleSubmit: any = async (
    values: any,
    { setSubmitting, setErrors }: any
  ) => {
    setSubmitting(true);
    setSubmitting(false);
  };

  return (
    <Layout>
      <PageHeader>
        <h1>Add Department</h1>
      </PageHeader>
      <hr />
      <GridContainer>
        <GridItem xs={12}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur={false}
            onSubmit={(values, { setSubmitting, setErrors }) =>
              handleSubmit(values, { setSubmitting, setErrors })
            }
          >
            {({
              values,
              handleSubmit,
              isSubmitting,
              errors,
              touched,
              handleChange,
              setFieldValue,
            }) => (
              <Box
                component="form"
                autoComplete="off"
                onSubmit={handleSubmit}
                sx={{ marginBlock: 1 }}
              >
                <FormikOnError>
                  <GridContainer xs={6}>
                    <GridItem item xs={12}>
                      <TextField
                        label="Title"
                        variant="outlined"
                        id="title"
                        name="title"
                        fullWidth
                        onChange={handleChange}
                        error={errors.title && touched.title ? true : false}
                        value={values.title}
                      />
                      <ErrorMessage
                        name="title"
                        component="label"
                        className="error-label"
                      />
                    </GridItem>

                    <GridItem item xs={6}>
                      <TextField
                        label="Code"
                        variant="outlined"
                        id="code"
                        name="code"
                        fullWidth
                        onChange={handleChange}
                        error={errors.code && touched.code ? true : false}
                        value={values.code}
                      />
                      <ErrorMessage
                        name="code"
                        component="label"
                        className="error-label"
                      />
                    </GridItem>

                    <GridItem item xs={6}>
                      <TextField
                        label="No of Employees"
                        variant="outlined"
                        id="no_of_employees"
                        name="no_of_employees"
                        fullWidth
                        onChange={handleChange}
                        error={
                          errors.no_of_employees && touched.no_of_employees
                            ? true
                            : false
                        }
                        value={values.no_of_employees}
                      />
                      <ErrorMessage
                        name="no_of_employees"
                        component="label"
                        className="error-label"
                      />
                    </GridItem>

                    <GridItem item xs={12}>
                      <Divider flexItem></Divider>
                    </GridItem>

                    <GridItem
                      item
                      xs={12}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <GridItem xs={1} sx={{ marginRight: 1 }}>
                        <Button
                          text="Back"
                          extraColor="dark"
                          size="large"
                          onClick={() => navigate(-1)}
                        />
                      </GridItem>
                      <GridItem xs={4}>
                        <Button
                          disabled={isSubmitting}
                          text="Save"
                          type="submit"
                          size="large"
                        />
                      </GridItem>
                    </GridItem>
                  </GridContainer>
                </FormikOnError>
              </Box>
            )}
          </Formik>
        </GridItem>
      </GridContainer>
    </Layout>
  );
};

export default DepartmentsPage;
