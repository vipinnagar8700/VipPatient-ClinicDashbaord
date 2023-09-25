import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { InputLabel, TextField } from '@mui/material';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditTemplateer, UpdateTemplate } from '@components/Api/AllApi';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';


const EditTemplate = ({ initialValue, onChange }) => {

    const navigate = useNavigate()
    const [Tem, setTem] = useState(false)
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    let { template_name, template } = Tem;
    console.log(template_name, template, "ALL")

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    let { p_id } = useParams();
    // alert(p_id)
    useEffect(() => {
        let EditTemplateed = EditTemplateer(p_id);
        console.log(EditTemplateed)
        if (EditTemplateed) {
            EditTemplateed.then((data) => {
                console.log(data.result)
                setTem(data.result)

            })
        }
    }, [])



    
    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            console.log(p_id,template_name,template,"qqqqqqqqqqqqqqqqqqqqqqqq")
            const result = UpdateTemplate(p_id,template_name,template
            );

            result.then((data) => {
                console.log(data.messege, "thtrtrer;ojgsrdbehx");
                alert(data.messege);
                navigate('/document-Builder')

            })
            console.log(result, "Data Updated Successfully");
        } catch (error) {
            console.error("Error occurred while updating data:", error);
        }
    };

    

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
                                    <form>
                                        <InputLabel mt={2}>Template Name</InputLabel>
                                        <TextField size="small" fullWidth value={template_name} onChange={(e) => {
                                            setTem({
                                                ...Tem, template_name: e.target.value
                                            })
                                        }} />
                                        <InputLabel mt={2}>Template </InputLabel>
                                        <TextField size="small" fullWidth  value={template} onChange={(e) => {
                                            setTem({
                                                ...Tem, template: e.target.value
                                            })
                                        }} />
                                         <button style={{ width: '150px',backgroundColor:'#2BAA27',height:'40px',borderRadius:4,color:'white',fontWeight:600,marginTop:9 }}  onClick={handleUpdate} type="submit" bgcolor="success" variant="contained">Save Changes</button>
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

export default EditTemplate;
