import React, { useState,useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import { useSnackbar } from 'notistack';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { InputLabel, TextField } from '@mui/material';
// components\
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useFormik } from "formik";
import * as yup from 'yup';
import Cookies from 'js-cookie';
import { AddTemplate } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const CreateTemplate = ({ initialValue, onChange }) => {
    const { enqueueSnackbar } = useSnackbar();

    const navigate = useNavigate()
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });
    const handleChangec = (event, editor) => {
        const data = editor.getData();
        console.log('Editor content:', data);
      };
    const schema = yup.object().shape({
        TemplateName: yup.string().required('Template Name is a required field'),
        Template: yup.string().required('Template is a required field'),
    })



    const HandleClick = (values) => {
        console.log("Data That we Add", values.TemplateName, values.Template);

        let token = Cookies.get('clinic');
        console.log(token, "token Mil ga");
        if (token) {
            const productData = AddTemplate(values);
            console.log(productData, "TemplateData");

            if (productData) {
                productData.then((data) => {
                    console.log(data.messege);
                    enqueueSnackbar(data.messege, {
                        variant: 'success',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });
                });
            } else {
                enqueueSnackbar( "error to add data!", {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
            }
        } else {
            enqueueSnackbar( "error to add data!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }

    };



    const {
        setFieldValue,
        handleSubmit,
        values,
        handleChange,
        errors,
        handleBlur,
        touched,
        isValid,
        dirty,
    } = useFormik({
        initialValues: {
            TemplateName: "",
            Template: "",
        },
        validationSchema: schema,
        validateOnMount: true,
        onSubmit: HandleClick
    });




    return (
        <>
        <Sidebar/>
        <Panel/>
            <Page title="Document Builder">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Create New Template
                            </Typography>

                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <form onSubmit={handleSubmit}>
                                        <InputLabel mt={2}>Template Name</InputLabel>
                                        <TextField size="small" fullWidth value={values.TemplateName} name="TemplateName" onChange={handleChange} onBlur={handleBlur} />
                                        {
                                            touched.TemplateName && errors.TemplateName && <div style={{ color: "red" }}>{errors.TemplateName}</div>
                                        }
                                        <InputLabel mt={2}>Template </InputLabel>
                                        {/* <CKEditor editor={ClassicEditor} onChange={handleChangec}  /> */}
                                        <TextField size="small" fullWidth  value={values.Template} name="Template" onChange={handleChange} onBlur={handleBlur} />
                                        {
                                            touched.Template && errors.Template && <div style={{ color: "red" }}>{errors.Template}</div>
                                        }
                                        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '5px', marginTop: 12,borderRadius:5,width:100 }}>Submit</button>
                                    </form>

                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </div>
            </Page>
        </>
    );
};

export default CreateTemplate;
