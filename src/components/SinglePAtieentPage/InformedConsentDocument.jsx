import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import Page from '@layout/Page';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ADDPatientFiles, AddInformedData, AddSecurityGroup, DEeletPatientFiles, EDITPatientFiles, GetAllPatientFiles, GetBilling, GetBillingCancel, GetInformentDocumnt, GetSinglePAtient, GettSecurityData, UpdateSecurity, deleteSecurity, editSecurityData } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, Avatar, FormControlLabel, Checkbox, Divider, Select, MenuItem, ToggleButton } from '@mui/material';
import PaymentHistory from './PaymentHostory';
import MostRecentAppointment from './MostRecentAppointment';




const Style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  minWidth: 800,
  bgcolor: 'background.paper',
  border: '1px solid #f3f3f3',
  boxShadow: 24,
  p: 4,
  backgroundColor: "red",
  maxWidth: "100%",
  minWidth: "500px",
};



const InformedConsentDocument = () => {


  const [patientName, setPatientName] = useState('');
  const [patientSignature, setPatientSignature] = useState('');
  const [witnessName, setWitnessName] = useState('');
  const [witnessSignature, setWitnessSignature] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedWitness, setSelectedWitness] = useState('');
  const [Sec, setSec] = useState(false)
  const [selectedTab, setSelectedTab] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
  const [PatientSData, setPatientSData] = useState([])
  const [count, setCount] = useState(0)

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedTab('');
  };

  window.addEventListener('resize', () => {
    if (smallScreen) {
      handleModalClose();
    }
  });
  let { p_id } = useParams()

  const handleFormSubmit = () => {
    const id = p_id; // Set the appropriate ID
    const doctorID = selectedDoctor; // Get the selected doctor ID
    const withNessID = selectedWitness; // Get the selected witness ID
    const withNessName = witnessName;
    const withNessPatient = patientSignature;
    const withNessSign = witnessSignature;

    const result = AddInformedData(id, doctorID, withNessID, withNessName, withNessPatient, withNessSign, patientName);
    if (result) {
      result.then((data) => {
        console.log(data, "THTGH")
        alert(data.MESSAGE)
      })
    }

  };


  useEffect(() => {
    const fetchTemplateData = async () => {
      try {
        const data = await GetInformentDocumnt(p_id);
        console.log(data, "This Is all Billing Data!");
        setPatientSData(data?.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTemplateData();
  }, [count]);

  console.log(PatientSData, "PatientFiles")


  // alert(p_id)
  const [AS, setSA] = useState(false)

  useEffect(() => {

    const SinglePAtientDta = GetSinglePAtient(p_id);
    if (SinglePAtientDta) {
      SinglePAtientDta.then((data) => {
        console.log(data.result, "KJHGFDSDFGHJKL")
        setSA(data.result)
      })
    }
  }, [])


  const columns = [

    {
      name: 'Date Added',
      selector: (row) => {
        const createdAt = new Date(row.created_at);
        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        };
        return createdAt.toLocaleString('en-US', options);
      },
      sortable: true,
    },



    {
      name: 'Actions',
      sortable: true,
      cell: (row) => (
        <>


          <button style={{ width: '70px', backgroundColor: 'skyblue', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

            <Link to="#"    >
              View
            </Link>

          </button>

        </>
      ),
      button: true,
      minWidth: '200px',
    },
  ];

  const data = PatientSData && PatientSData.map(item => ({
    id: item?.id || '',
    name: item?.name || '',
    created_at: item?.created_at || '',
  }));

  const tableData = {
    columns,
    data,
  };




 




  return (
    <>


      <Grid container>

        <Grid items xs={12}>

          <Card sx={{ minWidth: 770, marginLeft: '0px', '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
            <CardContent>
              <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Informed Consent Document
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 400 }} color="text.secondary" gutterBottom>
                Existing Informed Consent Documents
              </Typography>

              <Card sx={{ minWidth: 845, '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                    {PatientSData.length} total  Exiting Files found
                  </Typography>
                  <div className="Order Page">
                    <DataTableExtensions {...tableData}  export={false} print={false}>
                      <DataTable noHeader defaultSortField="id" defaultSortAsc={false} pagination highlightOnHover />
                    </DataTableExtensions>
                  </div>
                </CardContent>
              </Card>
              <form>
                <Box mt={5} sx={{ justifyContent: 'center', textAlign: 'center', minWidth: 730, maxWidth: 790 }}>
                  <Typography sx={{ fontSize: 18, fontWeight: 700 }} >Medical Marijuana Consent Form</Typography>
                  <Typography mt={2} sx={{ fontSize: 14, fontWeight: 500 }} >A qualified physician may not delegate the responsibility of obtaining written informed consent to another person. The qualified patient or the patient’s parent or legal guardian if the patient is a minor must initial each section of this consent form to indicate that the physician explained the information and, along with the qualified physician, must sign and date the informed consent form.</Typography>
                  <Typography mt={2} sx={{ fontSize: 13, fontWeight: 300 }} >This consent form contains three parts. Part A must be completed by all patients. Part B is for patients under the age of 18, who have a terminal condition, when the medical marijuana is being ordered in a smokable form. Part C is the signature block and must be completed by all patients.</Typography>
                  <Divider />

                  <Typography mt={2} sx={{ fontSize: 18, fontWeight: 700 }} >Part A: Must be completed for all medical marijuana patients</Typography>
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >1.The Federal Government's classification of marijuana as a Schedule I controlled substance.</Typography>
                  <Typography mt={2} sx={{ fontSize: 14, fontWeight: 500 }} >The federal government has classified marijuana as a Schedule I controlled substance. Schedule I substances are defined, in part, as having (1) a high potential for abuse; (2) no currently accepted medical use in treatment in the United States; and (3) a lack of accepted safety for use under medical supervision. Federal law prohibits the manufacture, distribution and possession of marijuana even in states, such as Florida, which have modified their state laws to treat marijuana as a medicine.


                    When in the possession or under the influence of medical marijuana, the patient or the patient’s caregiver must have his or her medical marijuana use registry identification card in his or her possession at all times.</Typography>

                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>

                  {/* 2 */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >2.The approval and oversight status of marijuana by the Food and Drug Administration.</Typography>
                  <Typography mt={2} sx={{ fontSize: 14, fontWeight: 500 }} >Marijuana has not been approved by the Food and Drug Administration for marketing as a drug. Therefore, the “manufacture” of marijuana for medical use is not subject to any federal standards, quality control, or other oversight. Marijuana may contain unknown quantities of active ingredients, which may vary in potency, impurities, contaminants, and substances in addition to THC, which is the primary psychoactive chemical component of marijuana</Typography>

                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* 3 */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >3.The potential for addiction.</Typography>
                  <Typography mt={2} sx={{ fontSize: 14, fontWeight: 500 }} >Some studies suggest that the use of marijuana by individuals may lead to a tolerance to, dependence on, or addiction to marijuana. I understand that if I require increasingly higher doses to achieve the same benefit or if I think that I may be developing a dependency on marijuana, I should contact Demo Clinic.</Typography>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* 4 */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >4.The potential effect that marijuana may have on a patient’s coordination, motor skills, and cognition, including a warning against operating heavy machinery, operating a motor vehicle, or engaging in activities that require a person to be alert or respond quickly.</Typography>
                  <Typography mt={2} sx={{ fontSize: 14, fontWeight: 500 }} >The use of marijuana can affect coordination, motor skills and cognition, i.e., the ability to think, judge and reason. Driving under the influence of cannabis can double the risk of crashing, which escalates if alcohol is also influencing the driver. While using medical marijuana, I should not drive, operate heavy machinery or engage in any activities that require me to be alert and/or respond quickly and I should not participate in activities that may be dangerous to myself or others. I understand that if I drive while under the influence of marijuana, I can be arrested for “driving under the influence.”</Typography>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* 5 */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >5.The potential side effects of medical marijuana use.

                  </Typography>
                  <Typography mt={2} sx={{ fontSize: 14, fontWeight: 500 }} >Potential side effects from the use of marijuana include, but are not limited to, the following: dizziness, anxiety, confusion, sedation, low blood pressure, impairment of short term memory, euphoria, difficulty in completing complex tasks, suppression of the body’s immune system, may affect the production of sex hormones that lead to adverse effects, inability to concentrate, impaired motor skills, paranoia, psychotic symptoms, general apathy, depression and/or restlessness. Marijuana may exacerbate schizophrenia in persons predisposed to that disorder. In addition, the use of medical marijuana may cause me to talk or eat in excess, alter my perception of time and space and impair my judgment. Many medical authorities claim that use of medical marijuana, especially by persons younger than 25, can result in long-term problems with attention, memory, learning, drug abuse, and schizophrenia.

                    There is substantial evidence of a statistical association between long-term cannabis smoking and worsening respiratory symptoms and more frequent chronic bronchitis episodes. Smoking marijuana is associated with large airway inflammation, increased airway resistance, and lung hyperinflation. Smoking cannabis, much like smoking tobacco, can introduce levels of volatile chemicals and tar in the lungs that may raise concerns about the risk of cancer and lung disease.


                    I understand that using marijuana while consuming alcohol is not recommended. Additional side effects may become present when using both alcohol and marijuana.


                    I agree to contact Demo Clinic if I experience any of the side effects listed above, or if I become depressed or psychotic, have suicidal thoughts, or experience crying spells. I will also contact Demo Clinic if I experience respiratory problems, changes in my normal sleeping patterns, extreme fatigue, increased irritability, or begin to withdraw from my family and/or friends.</Typography>

                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* 6 */}

                  {/* 7 */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >6.The risks, benefits, and drug interactions of marijuana.</Typography>
                  <Typography>

                    Signs of withdrawal can include: feelings of depression, sadness, irritability, insomnia, restlessness, agitation, loss of appetite, trouble concentrating, sleep disturbances and unusual tiredness.


                    Symptoms of marijuana overdose include, but are not limited to, nausea, vomiting, hacking cough, disturbances in heart rhythms, numbness in the hands, feet, arms or legs, anxiety attacks and incapacitation. If I experience these symptoms, I agree to contact Demo Clinic immediately or go to the nearest emergency room.


                    Numerous drugs are known to interact with marijuana and not all drug interactions are known. Some mixtures of medications can lead to serious and even fatal consequences. I agree to follow the directions of Demo Clinic regarding the use of prescription and non-prescription medication. I will advise any other of my treating physician(s) of my use of medical marijuana.


                    Marijuana may increase the risk of bleeding, low blood pressure, elevated blood sugar, liver enzymes, and other bodily systems when taken with herbs and supplements. I agree to contact Demo Clinic immediately or go to the nearest emergency room if these symptoms occur.


                    I understand that medical marijuana may have serious risks and may cause low birthweight or other abnormalities in babies. I will advise Demo Clinic if I become pregnant, try to get pregnant, or will be breastfeeding.</Typography>

                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >7.The current state of research on the efficacy of marijuana to treat the qualifying conditions set forth in this section.</Typography>
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Cancer</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is insufficient evidence to support or refute the conclusion that cannabinoids are an effective treatment for cancers, including glioma. There is evidence to suggest that cannabinoids (and the endocannabinoid system more generally) may play a role in the cancer regulation processes. Due to a lack of recent, high quality reviews, a research gap exists concerning the effectiveness of cannabis or cannabinoids in treating cancer in general.
                    </li>
                    <li style={{ fontSize: 14 }}>
                      There is conclusive evidence that oral cannabinoids are effective antiemetics in the treatment of chemotherapy-induced nausea and vomiting. There is insufficient evidence to support or refute the conclusion that cannabinoids are an effective treatment for cancer-associated anorexia-cachexia syndrome and anorexia nervosa.

                    </li>
                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* huyg */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Epilepsy</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is insufficient evidence to support or refute the conclusion that cannabinoids are an effective treatment for epilepsy. Recent systematic reviews were unable to identify any randomized controlled trials evaluating the efficacy of cannabinoids for the treatment of epilepsy. Currently available clinical data therefore consist solely of uncontrolled case series, which do not provide high-quality evidence of efficacy. Randomized trials of the efficacy of cannabidiol for different forms of epilepsy have been completed and await publication.
                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* lkjhgfd */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Glaucoma</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is limited evidence that cannabinoids are an ineffective treatment for improving intraocular pressure associated with glaucoma. 64B8ER17-1 (64B8-9.018, F.A.C.) 64B15ER17-1 (64B15-14.013, F.A.C.) DH-MQA-5026 08/17 4 Lower intraocular pressure is a key target for glaucoma treatments. Non-randomized studies in healthy volunteers and glaucoma patients have shown short-term reductions in intraocular pressure with oral, topical eye drops, and intravenous cannabinoids, suggesting the potential for therapeutic benefit. A good-quality systemic review identified a single small trial that found no effect of two cannabinoids, given as an oromucosal spray, on intraocular pressure. The quality of evidence for the finding of no effect is limited. However, to be effective, treatments targeting lower intraocular pressure must provide continual rather than transient reductions in intraocular pressure. To date, those studies showing positive effects have shown only short-term benefit on intraocular pressure (hours), suggesting a limited potential for cannabinoids in the treatment of glaucoma.
                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* lkjhgfd */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Positive status for human immunodeficiency virus</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is limited evidence that cannabis and oral cannabinoids are effective in increasing appetite and decreasing weight loss associated with HIV/AIDS. There does not appear to be good-quality primary literature that reported on cannabis or cannabinoids as effective treatments for AIDS wasting syndrome.

                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* lkjhgfd */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Acquired immune deficiency syndrome</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is limited evidence that cannabis and oral cannabinoids are effective in increasing appetite and decreasing weight loss associated with HIV/AIDS. There does not appear to be good-quality primary literature that reported on cannabis or cannabinoids as effective treatments for AIDS wasting syndrome.

                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* lkjhgfd */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Post-traumatic stress disorder</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is limited evidence (a single, small fair-quality trial) that nabilone is effective for improving symptoms of posttraumatic stress disorder. A single, small crossover trial suggests potential benefit from the pharmaceutical cannabinoid nabilone. This limited evidence is most applicable to male veterans and contrasts with non-randomized studies showing limited evidence of a statistical association between cannabis use (plant derived forms) and increased severity of posttraumatic stress disorder symptoms among individuals with posttraumatic stress disorder. There are other trials that are in the process of being conducted and if successfully completed, they will add substantially to the knowledge base.


                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* lkjhgfd */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Amyotrophic lateral sclerosis</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is insufficient evidence that cannabinoids are an effective treatment for symptoms associated with amyotrophic lateral sclerosis. Two small studies investigated the effect of dronabinol on symptoms associated with ALS. Although there were no differences from placebo in either trial, the sample sizes were small, the duration of the studies was short, and the dose of dronabinol may have been too small to ascertain any activity. The effect of cannabis was not investigated.

                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* lkjhgfd */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Crohn’s disease</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is insufficient evidence to support or refute the conclusion that dronabinol is an effective treatment for the symptoms of irritable bowel syndrome. Some studies suggest that marijuana in the form of cannabidiol may be beneficial in the treatment of inflammatory bowel diseases, including Crohn’s disease.

                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* lkjhgfd */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Parkinson’s disease</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is insufficient evidence that cannabinoids are an effective treatment for the motor system symptoms associated with Parkinson’s disease or the levodopa-induced dyskinesia. Evidence suggests that the endocannabinoid system plays a meaningful role in certain neurodegenerative processes; thus, it may be useful to determine the efficacy of cannabinoids in treating the symptoms of neurodegenerative diseases. Small trials of oral cannabinoid preparations have demonstrated no benefit compared to a placebo in ameliorating the side effects of Parkinson’s disease. A seven-patient trial of nabilone suggested that it improved the dyskinesia associated with levodopa therapy, but the sample size limits the interpretation of the data. An observational study demonstrated improved outcomes, but the lack of a control group and the small sample size are limitations.

                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* lkjhgfd */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Multiple sclerosis</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is substantial evidence that oral cannabinoids are an effective treatment for improving patient-reported multiple sclerosis spasticity symptoms, but limited evidence for an effect on clinician-measured spasticity. Based on evidence from randomized controlled trials included in systematic reviews, an oral cannabis extract, nabiximols, and orally administered THC are probably effective for reducing patient-reported spasticity scores in patients with MS. The effect appears to be modest. These agents have not consistently demonstrated a benefit on clinician-measured spasticity indices.

                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* kmjhgvb */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Medical conditions of same kind or class as or comparable to the above qualifying medical conditions</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      The qualifying physician has provided the patient or the patient’s caregiver a summary of the current research on the efficacy of marijuana to treat the patient’s medical condition.
                    </li>
                    <li style={{ fontSize: 14 }}>
                      The summary is attached to this informed consent as Addendum_____.
                    </li>

                  </ul>
                  {/* kmjhgvb */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Terminal conditions diagnosed by a physician other than the qualified physician issuing the physician certification</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      The qualifying physician has provided the patient or the patient’s caregiver a summary of the current research on the efficacy of marijuana  to  treat the patient’s terminal condition.
                    </li>
                    <li style={{ fontSize: 14 }}>
                      The summary is attached to this informed consent as Addendum_____.
                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* kmjhgvb */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Chronic nonmalignant pain</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      There is substantial evidence that cannabis is an effective treatment for chronic pain in adults. The majority of studies on pain evaluated nabiximols outside the United States. Only a handful of studies have evaluated the use of cannabis in the United States, and all of them evaluated cannabis in flower form provided by the National Institute on Drug Abuse. In contrast, many of the cannabis products that are sold in state-regulated markets bear little resemblance to the products that are available for research at the federal level in the United States. Pain patients also use topical forms. While the use of cannabis for the treatment of pain is supported by well-controlled clinical trials, very little is known about the efficacy, dose, routes of administration, or side effects of commonly used and commercially available cannabis products in the United States.
                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* kmjhgvb */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >That the patient’s de-identified health information contained in the physician certification and medical marijuana use registry may be used for research purposes.</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      The Department of Health submits a data set to The Medical Marijuana Research and Education Coalition for each patient registered in the medical marijuana use registry that includes the patient’s qualifying medical condition and the daily dose amount and forms of marijuana certified for the patient.


                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  <Divider />
                  {/* kmjhgvb */}
                  <Typography mt={3} sx={{ fontSize: 16, fontWeight: 700 }} >PART B: Ordering smokable marijuana for a terminal patient under 18.</Typography>
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Initial here if you are not a terminal patient under 18 who will be receiving medical marijuana in a smokable form. After initialing here, complete part C.</Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      If the patient is under 18, has a terminal condition, and will be receiving medical marijuana in a smokable form, please review and initial the remainder of Part B before completing Part C.


                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* mkjhg */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Respiratory Health
                  </Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      Exposures to tobacco smoke and household air pollution consistently ranks among the top risk factors not only for respiratory disease burden but also for the global burden of disease. Given the known relations ships between tobacco smoking and multiple respiratory conditions, one could hypothesize that long-term cannabis smoking leads to similar deleterious effects of respiratory health, and some investigators ague that cannabis smoking may be even more harmful that of tobacco smoking. Data collected from 15 volunteers suggest that smoking one cannabis joint can lead to four times the exposure to carbon monoxide and three to five times more tar deposition than smoking a single cigarette.


                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* mkjhgf */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Cognitive and Psychosocial Development
                  </Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      Researchers are still studying the long-term health effects of marijuana. Most people agree that marijuana use hurts adolescents more than adults. It is during the period of adolescence and young adulthood that the neural substrates that underlie the development of cognition are most active. Adolescence marks one of the most impressive stretches of neural and behavioral change with substantial a protracted development in terms of both brain structure and function. As a result, cannabis and other substance use during this period may incur relatively greater interference in neural, social, and academic functioning compared to late developmental periods.


                    </li>
                    <li style={{ fontSize: 14 }}>
                      There is moderate evidence of a statistical association between acute cannabis use and impairment in the cognitive domains of learning, memory, and attention.


                    </li><li style={{ fontSize: 14 }}>
                      There is limited evidence of a statistical association between sustain abstinence form cannabis use and impairments in the cognitive domains of learning, memory, and attention.


                    </li><li style={{ fontSize: 14 }}>
                      There is limited evidence of a statistical association between cannabis use and impaired academic achievement and education outcomes.


                    </li><li style={{ fontSize: 14 }}>
                      There is limited evidence of a statistical association between cannabis use and increased rates of unemployment and/or low income.


                    </li><li style={{ fontSize: 14 }}>
                      There is limited evidence of a statistical association between cannabis use and impaired social functioning or engagement in developmentally appropriate social roles.


                    </li><li style={{ fontSize: 14 }}>
                      Less blood flow to parts of the brain

                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>
                  {/* mkjhg */}
                  <Typography mt={1} sx={{ fontSize: 16, fontWeight: 700 }} >Addiction
                  </Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      Marijuana, like some other brain-altering substances, can be addictive. Nearly one in 10 marijuana users will become addicted. Starting to use marijuana at a younger age can lead to a greater risk of developing a substance use disorder later in life. Adolescents who begin using marijuana before age 18 are four to seven times more likely than adults to develop a marijuana use disorder.

                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>

                  <Divider />
                  {/* mkjhg */}
                  <Typography mt={3} sx={{ fontSize: 16, fontWeight: 700 }} >PART C: Must be completed for all medical marijuana patients
                  </Typography>
                  <ul>
                    <li style={{ fontSize: 14 }}>
                      I have had the opportunity to discuss these matters with the physician and to ask questions regarding anything I may not understand or that I believe needed to be clarified. I acknowledge that Demo Clinic has informed me of the nature of a recommended treatment, including but not limited to, any recommendation regarding medical marijuana.

                      Demo Clinic also informed me of the risks, complications, and expected benefits of any recommended treatment, including its likelihood of success and failure. I acknowledge that Demo Clinic informed me of any alternatives to the recommended treatment, including the alternative of no treatment, and the risks and benefits.

                    </li>

                  </ul>
                  <Stack direction='row' gap={5} my={2}>
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                    <TextField label="patient initials" required size='small' fullWidth placeholder='Patient Initials' />
                  </Stack>



                  {/* <Grid container>
                    <Grid items>
                      <Typography sx={{ fontSize: 14, fontWeight: 500 }} >Demo Clinic has explained the information in this consent form about the medical use of marijuana.
                      </Typography>
                    </Grid>
                    <Grid items sx={12} md={12} my={2}>
                      <TextField label="Please type your name..." size='small' fullWidth placeholder='Please type your name...' />
                    </Grid>
                    <Grid items sx={12} md={12} my={2}>
                      <InputLabel >
                        Patient signature or signature of the parent or legal guardian if the patient is a minor</InputLabel>
                      <TextField size='small' fullWidth placeholder='Signature' multiline rows={5} />
                      <button my={1} style={{ backgroundColor: 'skyblue', padding: 5, borderRadius: 4, color: 'white' }}>Clear</button> Signed On 08/24/2023
                    </Grid>
                    <Grid items sx={12} md={12} my={2}>
                      <InputLabel >Select Witness</InputLabel>
                      <Select fullWidth size='small'>
                        <MenuItem>DR James</MenuItem>
                      </Select>
                      < Checkbox />witness employed by clinic
                    </Grid>
                    <Grid items sx={12} md={12}>
                      <InputLabel >Select Signing Doctor</InputLabel>
                      <Select fullWidth size='small'>
                        <MenuItem>DR James</MenuItem>
                      </Select>
                    </Grid>
                  </Grid> */}
                  <Box m={5} sx={{ border: '2px solid gray', maxWidth: 730, padding: 6, justifyContent: 'start', alignContent: 'start', alignItems: 'start' }}>
                    <Grid container sx={{ justifyContent: 'start', alignContent: 'start', alignItems: 'start' }}>
                      <Grid item>
                        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                          Demo Clinic has explained the information in this consent form about the medical use of marijuana.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12} my={2}>
                        <input label="Please type your name..."
                          size="small"
                          fullWidth
                          value='704' type='hidden' />
                        <TextField
                          required
                          label="Please type your name..."
                          size="small"
                          fullWidth
                          placeholder="Please type your name..."
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12} md={12} my={2}>
                        <InputLabel>
                          Patient signature or signature of the parent or legal guardian if the patient is a minor
                        </InputLabel>
                        <TextField
                          required
                          size="small"
                          fullWidth
                          placeholder="Signature"
                          multiline
                          rows={5}
                          value={patientSignature}
                          onChange={(e) => setPatientSignature(e.target.value)}
                        />
                        <button
                          onClick={() => setPatientSignature('')}
                          style={{ backgroundColor: 'skyblue', padding: 5, borderRadius: 4, color: 'white' }}
                        >
                          Clear
                        </button>{' '}
                        Signed On 08/24/2023
                      </Grid>
                      <Grid item xs={12} md={12} my={2}>
                        <InputLabel>Select Witness</InputLabel>
                        <Select
                          required
                          fullWidth
                          size="small"
                          value={selectedWitness}
                          onChange={(e) => setSelectedWitness(e.target.value)}
                        >
                          <MenuItem value="703">DR James</MenuItem>
                          {/* Add other witnesses as needed */}
                        </Select>
                        <Checkbox />witness employed by clinic
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <InputLabel>Select Signing Doctor</InputLabel>
                        <Select
                          required
                          fullWidth
                          size="small"
                          value={selectedDoctor}
                          onChange={(e) => setSelectedDoctor(e.target.value)}
                        >
                          <MenuItem value="703">DR James</MenuItem>
                          {/* Add other doctors as needed */}
                        </Select>
                      </Grid>


                      <button
                        onClick={handleFormSubmit}
                        style={{ backgroundColor: 'green', padding: 7, color: 'white', borderRadius: 5, marginTop: 8 }}
                      >
                        Add Informed Consent Document
                      </button>

                    </Grid>


                  </Box>



                </Box>
              </form>


            </CardContent>
          </Card>
        </Grid>
      </Grid >

    </>
  );
};





export default InformedConsentDocument