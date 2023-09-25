import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonalInformation from './PersonalInformation';
import DOnotContactList from './DOnotContactList';
import PatientFiles from './PatientFiles';
import PatientIntake from './PatientIntake';
import Examinations from './Examinations';
import Certifications from './Certifications';
import ICDCode from './ICDCode';
import VirtualBillingTerminal from './VirtualBillingTerminal';
import MedicalNecessityLetter from './MedicalNecessityLetter';
import DocumentGenerator from './DocumentGenerator';
import EmailHistory from './EmailHistory';
import DispanseryHistory from './DispanseryHistory';
import InformedConsentDocument from './InformedConsentDocument';
import OMMURegistry from './OMMURegistry';
import AdditionalDocumentation from './AdditionalDocumentation';
import ProductServeys from './ProductServeys';
import PatientSharing from './PatientSharing';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Charts() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Personal Information" {...a11yProps(0)}   />
                <Tab label="Do-Not Contact List" {...a11yProps(1)} />
                <Tab label="Patient Files" {...a11yProps(2)} />
                <Tab label="Patient Intake" {...a11yProps(3)} />
                <Tab label="Examinations" {...a11yProps(4)} />
                <Tab label="Certifications" {...a11yProps(5)} />
                <Tab label="ICD Codes" {...a11yProps(6)} />
                <Tab label="Virtual Billing Terminal" {...a11yProps(7)} />
                <Tab label="Medical Necessity Letter" {...a11yProps(8)} />
                <Tab label="Document Generator" {...a11yProps(9)} />
                <Tab label="Email History" {...a11yProps(10)} />
                <Tab label="Dispensing History" {...a11yProps(11)} />
                <Tab label="Informed Consent Document" {...a11yProps(12)} />
                <Tab label="OMMU Application " {...a11yProps(13)} />
                <Tab label="Additional Documentation" {...a11yProps(14)} />
                <Tab label="Product Serveys" {...a11yProps(15)} />
                <Tab label="Patient Sharing" {...a11yProps(16)} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <PersonalInformation />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DOnotContactList/>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <PatientFiles/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <PatientIntake/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Examinations/>
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Certifications/>
            </TabPanel>
            <TabPanel value={value} index={6}>
                <ICDCode/>
            </TabPanel>
            <TabPanel value={value} index={7}>
                <VirtualBillingTerminal/>
            </TabPanel>
            <TabPanel value={value} index={8}>
                <MedicalNecessityLetter/>
            </TabPanel>
            <TabPanel value={value} index={9}>
                <DocumentGenerator/>
            </TabPanel>
            <TabPanel value={value} index={10}>
                <EmailHistory/>
            </TabPanel>
            <TabPanel value={value} index={11}>
                <DispanseryHistory/>
            </TabPanel>
            <TabPanel value={value} index={12}>
                <InformedConsentDocument/>
            </TabPanel>
            <TabPanel value={value} index={13}>
                <OMMURegistry/>
            </TabPanel>
            <TabPanel value={value} index={14}>
                <AdditionalDocumentation/>
            </TabPanel>
            <TabPanel value={value} index={15}>
                <ProductServeys/>
            </TabPanel>
            <TabPanel value={value} index={16}>
                <PatientSharing/>
            </TabPanel>
        </Box>
    );
}






