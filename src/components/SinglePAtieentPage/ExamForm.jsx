import { Box, InputLabel, Select, Stack, TextField, Typography, MenuItem, Checkbox, Grid } from '@mui/material'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddExamination } from '@components/Api/AllApi';
import { useState } from 'react';
import { useParams } from 'react-router';


const ExamForm = () => {
    // StartSubjective
    const [StartDate, setStartDate] = useState(' ')
    const [TYpe, setTYpe] = useState(' ')
    const [DiscussedAlternatives, setDiscussedAlternatives] = useState(' ')
    const [EvaluationCriteria, setEvaluationCriteria] = useState(' ')
    const [ORT, setORT] = useState(' ')
    const [DSD, setDSD] = useState(' ')
    const [PAINSCALE, setPAINSCALE] = useState(' ')
    const [AdverseEvents, setAdverseEvents] = useState(' ')
    const [Absolute, setAbsolute] = useState(' ')
    const [Relative, setRelative] = useState(' ')
    const [ReviewMedi, setReviewMedi] = useState(' ')
    const [ReviewAlergy, setReviewAlergy] = useState(' ')
    const [ReviewPmh, setReviewPmh] = useState(' ')
    const [HPI, setHPI] = useState(' ')
    const [count, setCount] = useState(0)


    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };
    const handlesetTYpeChange = (event) => {
        setTYpe(event.target.value);
    };
    const handlesetDiscussedAlternativesChange = (event) => {
        setDiscussedAlternatives(event.target.value);
    };
    const handlesetEvaluationCriteriaChange = (event) => {
        setEvaluationCriteria(event.target.value);
    };
    const handlesetORTChange = (event) => {
        setORT(event.target.value);
    };
    const handlesetDSDChange = (event) => {
        setDSD(event.target.value);
    };
    const handlesetPAINSCALEChange = (event) => {
        setPAINSCALE(event.target.value);
    };
    const handlesetAdverseEventsChange = (event) => {
        setAdverseEvents(event.target.value);
    };
    const handlesetAbsoluteChange = (event) => {
        setAbsolute(event.target.value);
    };
    const handlesetRelativeChange = (event) => {
        setRelative(event.target.value);
    };
    const handlesetReviewMediChange = (event) => {
        setReviewMedi(event.target.value);
    };
    const handlesetReviewAlergyChange = (event) => {
        setReviewAlergy(event.target.value);
    };
    const handlesetReviewPmhChange = (event) => {
        setReviewPmh(event.target.value);
    };
    const handlesetHPIChange = (event) => {
        setHPI(event.target.value);
    };




    const [expanded, setExpanded] = React.useState(' ');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : ' ');
    };
    let { p_id } = useParams()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        try {
            const DataAdd = AddExamination(
                p_id,
                StartDate,
                TYpe, DiscussedAlternatives, EvaluationCriteria, ORT, DSD, PAINSCALE, AdverseEvents, Absolute, Relative, ReviewMedi, ReviewAlergy, ReviewPmh, HPI

            );
            if (DataAdd) {
                DataAdd.then((data) => {
                    console.log(data, "Data Successfully Submit!")
                    alert(data.MESSAGE)
                    setCount(count + 1)
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    // End Subjective


    // Start Objective
    const [Height, setHeight] = useState(' ')
    const [HeightUnit, setHeightUnit] = useState(' ')
    const [Weight, setWeight] = useState(' ')
    const [WeightUnit, setWeightUnit] = useState(' ')
    const [Pulse, setPulse] = useState(' ')
    const [Temperature, setTemperature] = useState(' ')
    const [TemperatureUnit, setTemperatureUnit] = useState(' ')
    const [BloodPreasure, setBloodPreasure] = useState(' ')
    const [RespiratoryRate, setRespiratoryRate] = useState(' ')
    const [BMI, setBMI] = useState(' ')
    const [Waist, setWaist] = useState(' ')
    const [WaistUnit, setWaistUnit] = useState(' ')
    const [MotorTone, setMotorTone] = useState(' ')
    const [Reflexes, setReflexes] = useState(' ')
    const [PhyGeneral, setPhyGeneral] = useState(' ')
    const [PhySpecific, setPhySpecific] = useState(' ')
    const [PhyHeent, setPhyHeent] = useState(' ')
    const [PhyCardio, setPhyCardio] = useState(' ')
    const [PhyNeuro, setPhyNeuro] = useState(' ')
    const [PhyGastro, setPhyGastro] = useState(' ')
    const [PhyGenit, setPhyGenit] = useState(' ')
    const [PhyMusculoskeletal, setPhyMusculoskeletal] = useState(' ')
    const [PhyIntegumentary, setPhyIntegumentary] = useState(' ')





    const handlesetHeightChange = (event) => {
        setHeight(event.target.value);
    };
    const handlesetHeightUnitChange = (event) => {
        setHeightUnit(event.target.value);
    };
    const handlesetWeightChange = (event) => {
        setWeight(event.target.value);
    };
    const handlesetWeightUnitChange = (event) => {
        setWeightUnit(event.target.value);
    };
    const handlesetPulseChange = (event) => {
        setPulse(event.target.value);
    };
    const handlesetTemperatureChange = (event) => {
        setTemperature(event.target.value);
    };
    const handlesetTemperatureUnitChange = (event) => {
        setTemperatureUnit(event.target.value);
    };
    const handlesetBloodPreasureChange = (event) => {
        setBloodPreasure(event.target.value);
    };
    const handlesetRespiratoryRateChange = (event) => {
        setRespiratoryRate(event.target.value);
    };
    const handlesetBMIChange = (event) => {
        setBMI(event.target.value);
    };
    const handlesetWaistChange = (event) => {
        setWaist(event.target.value);
    };
    const handlesetWaistUnitChange = (event) => {
        setWaistUnit(event.target.value);
    };
    const handlesetMotorToneChange = (event) => {
        setMotorTone(event.target.value);
    };
    const handlesetReflexesChange = (event) => {
        setReflexes(event.target.value);
    };
    const handlesetPhyGeneralChange = (event) => {
        setPhyGeneral(event.target.value);
    };
    const handlesetPhySpecificChange = (event) => {
        setPhySpecific(event.target.value);
    };
    const handlesetPhyHeentChange = (event) => {
        setPhyHeent(event.target.value);
    };
    const handlesetPhyCardioChange = (event) => {
        setPhyCardio(event.target.value);
    };
    const handlesetPhyNeuroChange = (event) => {
        setPhyNeuro(event.target.value);
    };
    const handlesetPhyGastroChange = (event) => {
        setPhyGastro(event.target.value);
    };
    const handlesetPhyGenitChange = (event) => {
        setPhyGenit(event.target.value);
    };
    const handlesetPhyMusculoskeletalChange = (event) => {
        setPhyMusculoskeletal(event.target.value);
    };
    const handlesetPhyIntegumentaryChange = (event) => {
        setPhyIntegumentary(event.target.value);
    };




    const handleFormSubmitObjective = (event) => {
        event.preventDefault();
        try {
            const DataAdd = AddExamination(
                p_id,
                Height, HeightUnit, Weight, WeightUnit, Pulse, Temperature, TemperatureUnit, BloodPreasure, RespiratoryRate, BMI, Waist, WaistUnit, MotorTone, Reflexes, PhyGeneral, PhySpecific, PhyHeent, PhyCardio, PhyNeuro, PhyGastro, PhyGenit, PhyMusculoskeletal, PhyIntegumentary

            );
            if (DataAdd) {
                DataAdd.then((data) => {
                    console.log(data, "Data Successfully Submit!")
                    alert(data.MESSAGE)
                    setCount(count + 1)
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    // End Objective


    return (
        <Box mt={3}>
            <Stack>
                <Typography sx={{ fontSize: 18, fontWeight: 900 }}>
                    Add New Exam
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                    Please complete the following sections. You may save the exam at any point by clicking the various "Save & Continue" buttons. When you are finished, click "Exam Complete!" to store the exam.
                </Typography>
            </Stack>

            <div style={{ marginTop: 8 }}>
                <form style={{ marginTop: 5 }} onSubmit={handleFormSubmit}>
                    <InputLabel>When did this exam begin?
                    </InputLabel>
                    <TextField mt={3} maxWidth={300} size='small' type='date' value={StartDate}
                        onChange={handleStartDateChange} />
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: 900 }}>
                                (S)ubjective
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <InputLabel>Exam Type</InputLabel>
                            <Select sx={{ minWidth: 280 }} size='small' value={TYpe}
                                onChange={handlesetTYpeChange}>
                                <MenuItem value="None">None Selected
                                </MenuItem>
                                <MenuItem value="New Consult">New Consult
                                </MenuItem>

                                <MenuItem value="Annual Checkup">Annual Checkup
                                </MenuItem>
                                <MenuItem value="Follow-Up">Follow-up
                                </MenuItem>
                                <MenuItem value="Re0Examination">Re-examination
                                </MenuItem>
                            </Select>
                            <br />
                            <InputLabel>Review patient intake and comment with clarification</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={DiscussedAlternatives}
                                onChange={handlesetDiscussedAlternativesChange} />
                            <InputLabel>Criteria for evaluation of medical cannabis</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={EvaluationCriteria}
                                onChange={handlesetEvaluationCriteriaChange} />
                            <Grid container>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>ORT</InputLabel>
                                    <TextField maxRows={4} maxWidth={300} size='small' value={ORT}
                                        onChange={handlesetORTChange} />
                                </Grid>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>SDS</InputLabel>
                                    <TextField maxRows={4} maxWidth={300} size='small' value={DSD}
                                        onChange={handlesetDSDChange} />
                                </Grid>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>Pain  Scale</InputLabel>
                                    <TextField maxRows={4} maxWidth={300} size='small' value={PAINSCALE}
                                        onChange={handlesetPAINSCALEChange} />
                                </Grid>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>Adverse Events</InputLabel>
                                    <TextField maxRows={4} maxWidth={300} size='small' value={AdverseEvents}
                                        onChange={handlesetAdverseEventsChange} />
                                </Grid>
                            </Grid>




                            <InputLabel>Pregnancy  Screen</InputLabel>
                            <Select sx={{ minWidth: 280 }} size='small' value={StartDate}
                                onChange={handleStartDateChange}>
                                <MenuItem>N/A
                                </MenuItem>
                                <MenuItem>Positive
                                </MenuItem>

                                <MenuItem>Negative
                                </MenuItem>

                            </Select>
                            <InputLabel>Urine Screen  </InputLabel>
                            Thc<Checkbox />
                            Benzo<Checkbox />
                            Cocaine<Checkbox />Opioid<Checkbox />Mdma<Checkbox />Appropriate<Checkbox />Inappropriate<Checkbox />
                            <InputLabel>Absolute Contraindications to Cannabinoid Therapy (unstable CV, psychosis, alcohol/substance abuse, intolerance)</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={Absolute}
                                onChange={handlesetAbsoluteChange} />
                            <InputLabel>Relative Contraindications to Cannabinoid Therapy (polypharmacy, mental illness, liver disease)</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={Relative}
                                onChange={handlesetRelativeChange} />
                            <InputLabel>Review of medications</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={ReviewMedi}
                                onChange={handlesetReviewMediChange} />
                            <InputLabel>Review of allergies (if applicable)</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={ReviewAlergy}
                                onChange={handlesetReviewAlergyChange} />
                            <InputLabel>Review of PMH/Surgical History</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={ReviewPmh}
                                onChange={handlesetReviewPmhChange} />
                            <InputLabel>HPI (onset/precipitants/ADLS/relieving factors/timing)</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={HPI}
                                onChange={handlesetHPIChange} />
                            <button style={{ marginTop: 13, borderRadius: 8, backgroundColor: 'green', color: 'white', padding: 10 }} type="submit">Save & Continue</button>
                        </AccordionDetails>
                    </Accordion>
                </form>


                <form style={{ marginTop: 5 }} onSubmit={handleFormSubmitObjective}>
                    {/* OBJECTIVE */}
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>(O)bjectives</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>Height </InputLabel>
                                    <TextField maxRows={4} sx={{ minWidth: 280 }} size='small' value={Height}
                                        onChange={handlesetHeightChange} />
                                    <InputLabel>Height Unit</InputLabel>
                                    <Select sx={{ minWidth: 280 }} size='small' value={HeightUnit}
                                        onChange={handlesetHeightUnitChange}>
                                        <MenuItem value="in">in
                                        </MenuItem>
                                        <MenuItem value=" cm">cm
                                        </MenuItem>


                                    </Select>
                                </Grid>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>Weight </InputLabel>
                                    <TextField maxRows={4} sx={{ minWidth: 280 }} size='small' value={Weight}
                                        onChange={handlesetWeightChange} />
                                    <InputLabel>Weight Unit</InputLabel>
                                    <Select sx={{ minWidth: 280 }} size='small' value={WeightUnit}
                                        onChange={handlesetWeightUnitChange}>
                                        <MenuItem value="lbs">lbs
                                        </MenuItem>
                                        <MenuItem value="kg">kg
                                        </MenuItem>


                                    </Select>
                                </Grid>
                            </Grid>



                            <br />
                            <InputLabel>Respiratory Rate (RPM)</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={RespiratoryRate}
                                onChange={handlesetRespiratoryRateChange} />
                            <InputLabel>SPO2 (%)</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={BMI}
                                onChange={handlesetBMIChange} />
                            <Grid container>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>Pulse (BPM)</InputLabel>
                                    <TextField maxRows={4} maxWidth={300} size='small' value={Pulse}
                                        onChange={handlesetPulseChange} />
                                </Grid>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>Waist</InputLabel>
                                    <TextField maxRows={4} maxWidth={300} size='small' value={Waist}
                                        onChange={handlesetWaistChange} />
                                </Grid>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>motor tone  </InputLabel>
                                    <TextField maxRows={4} maxWidth={300} size='small' value={MotorTone}
                                        onChange={handlesetMotorToneChange} />
                                </Grid>
                                <Grid items xs={6} md={6}>
                                    <InputLabel>Waist unit</InputLabel>
                                    <Select sx={{ minWidth: 280 }} size='small' value={WaistUnit}
                                        onChange={handlesetWaistUnitChange}>
                                        <MenuItem value="in">in
                                        </MenuItem>
                                        <MenuItem value="cm">cm
                                        </MenuItem>


                                    </Select>
                                </Grid>
                            </Grid>
                            <InputLabel>Temperature   </InputLabel>
                            <TextField maxRows={4} maxWidth={300} size='small' value={Temperature}
                                onChange={handlesetTemperatureChange} />


                            <InputLabel>Temperature Unit</InputLabel>
                            <Select sx={{ minWidth: 280 }} size='small' value={TemperatureUnit}
                                onChange={handlesetTemperatureUnitChange}>
                                <MenuItem value="Celsius">Celsius
                                </MenuItem>
                                <MenuItem value="Fahrenheit">Fahrenheit
                                </MenuItem>



                            </Select>
                            <InputLabel>Blood Pressure</InputLabel>

                            <Stack direction='row' sx={{ alignItems: 'center', justifyItems: 'start' }}>
                                <Box>
                                    <TextField maxRows={4} fullWidth size='small' value={BloodPreasure}
                                        onChange={handlesetBloodPreasureChange} />
                                </Box>
                                <Box>
                                    /

                                </Box>
                                <Box >
                                    <TextField maxRows={4} fullWidth size='small' value={Absolute}
                                        onChange={handlesetAbsoluteChange} />
                                </Box>
                                <Box>
                                    mmHG
                                </Box>
                            </Stack>


                            <InputLabel>Reflexes</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={Reflexes}
                                onChange={handlesetReflexesChange} />

                            <Typography sx={{ fontSize: 18, fontWeight: 900 }}>Physical Exam</Typography>
                            <Typography sx={{ fontSize: 13, fontWeight: 300 }}>General </Typography>
                            <InputLabel sx={{ fontSize: 12, color: 'green' }}>[ALL] [Well developed] [Well nourished] [A&O 3] [Appears to be in no acute distress] [Normal Affect]</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={PhyGeneral}
                                onChange={handlesetPhyGeneralChange} />
                            <InputLabel >Specific</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={PhySpecific}
                                onChange={handlesetPhySpecificChange} />
                            <Typography sx={{ fontSize: 13, fontWeight: 300 }}>HEENT </Typography>
                            <InputLabel sx={{ fontSize: 12, color: 'green', maxWidth: 500 }}>[ALL] [Normocephalic] [PERRLA] [Fundi normal, vision is grossly intact] [External auditory canals and tympanic membranes clear, hearing grossly intact] [No nasal discharge] [Oral cavity and pharynx normal] [No inflammation, swelling, exudate, or lesions] [Teeth and gingiva in good general condition]</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={PhyHeent}
                                onChange={handlesetPhyHeentChange} />
                            <Typography sx={{ fontSize: 13, fontWeight: 300 }}>Cardio-Resp </Typography>
                            <InputLabel sx={{ fontSize: 12, color: 'green', maxWidth: 500 }}>[ALL] [Normal S1 and S2] [No S3, S4 or murmurs] [Rhythm is regular] [All pulses palpable] [There is no peripheral edema, cyanosis or pallor] [Extremities are warm and well perfused] [Capillary refill is less than 2 seconds] [No carotid bruits] [Lungs clear in all fields] [No wheezing noted]</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={PhyCardio}
                                onChange={handlesetPhyCardioChange} />
                            <Typography sx={{ fontSize: 13, fontWeight: 300 }}>Neurological </Typography>
                            <InputLabel sx={{ fontSize: 12, color: 'green', maxWidth: 500 }}>[ALL] [CN II-XII intact] [Strength and sensation symmetric and intact throughout] [Reflexes 2+ throughout] [Cerebellar testing normal]</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={PhyNeuro}
                                onChange={handlesetPhyNeuroChange} />
                            <Typography sx={{ fontSize: 13, fontWeight: 300 }}>Gastrointestinal </Typography>
                            <InputLabel sx={{ fontSize: 12, color: 'green', maxWidth: 500 }}>[ALL] [Positive bowel sounds] [Soft, nondistended, nontender] [No guarding or rebound] [No masses]</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={PhyGastro}
                                onChange={handlesetPhyGastroChange} />
                            <InputLabel>Genitourinary</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={PhyGenit}
                                onChange={handlesetPhyGenitChange} />
                            <Typography sx={{ fontSize: 13, fontWeight: 300 }}>Musculoskeletal </Typography>
                            <InputLabel sx={{ fontSize: 12, color: 'green' }}>[ALL] [Adequately aligned spine] [ROM intact] [No joint erythema or tenderness] [Normal gait]</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={PhyMusculoskeletal}
                                onChange={handlesetPhyMusculoskeletalChange} />
                            <Typography sx={{ fontSize: 13, fontWeight: 300 }}>Integumentary </Typography>
                            <InputLabel sx={{ fontSize: 12, color: 'green' }}>[ALL] [Intact] [No tenting] [No rashes] [No bruising]</InputLabel>
                            <TextField maxRows={4} fullWidth size='small' value={PhyIntegumentary}
                                onChange={handlesetPhyIntegumentaryChange} />
                            <button style={{ marginTop: 13, borderRadius: 8, backgroundColor: 'green', color: 'white', padding: 10 }} type="submit">Save & Continue</button>
                        </AccordionDetails>
                    </Accordion>

                </form>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            (A)ssessments
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container>
                            <Grid items xs={6} md={6}>
                                <InputLabel>Patient is a candidate for </InputLabel>

                                <Select sx={{ minWidth: 280 }} size='small' value={HeightUnit}
                                    onChange={handlesetHeightUnitChange}>
                                    <MenuItem value="Yes">Yes
                                    </MenuItem>
                                    <MenuItem value="No">No
                                    </MenuItem>


                                </Select>
                            </Grid>

                        </Grid>
                        <Typography>Common Conditions</Typography>
                        Chronic Nonmalignant Pain<Checkbox />
                        Epilepsy<Checkbox />Glaucoma<Checkbox />Positive for HIV<Checkbox />AIDS<Checkbox /><Checkbox />PTSD<Checkbox />Amyotrophic Lateral Sclerosis<Checkbox />Crohn's Disease<Checkbox />Parkinson's Disease<Checkbox />Multiple Sclerosis<Checkbox />Terminal Disease<Checkbox />Cancer<Checkbox />
                        Other Qualifying Condition<Checkbox />
                        <InputLabel maxWidth={500}>Detailed counselling on risk factors of Cannabis use specific to patient (CV, PULMONARY, NEURO, PSYCH, GI, Heavy Machinery Operation)   </InputLabel>
                        <TextField maxRows={4} fullWidth size='small' value={Temperature}
                            onChange={handlesetTemperatureChange} />

                        <br />
                        <Checkbox />Use Default Advisory

                        <InputLabel>Overall Impression </InputLabel>
                        <TextField maxRows={4} fullWidth size='small' value={Temperature}
                            onChange={handlesetTemperatureChange} />




                        <br />
                        <button style={{ marginTop: 13, borderRadius: 8, backgroundColor: 'green', color: 'white', padding: 10 }} type="submit">Save & Continue</button>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>(P)lan</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container>
                            <Grid items xs={6} md={6}>
                                <InputLabel>Patient is a candidate for </InputLabel>

                                <Select sx={{ minWidth: 280 }} size='small' value={HeightUnit}
                                    onChange={handlesetHeightUnitChange}>
                                    <MenuItem value="Yes">Yes
                                    </MenuItem>
                                    <MenuItem value="No">No
                                    </MenuItem>


                                </Select>
                            </Grid>

                        </Grid>
                        <InputLabel maxWidth={500}>70 day follow up goals  </InputLabel>
                        <TextField maxRows={4} fullWidth size='small' value={Temperature}
                            onChange={handlesetTemperatureChange} />
                        <Stack m={2} mx={16} direction="row" sx={{ justifyContent: 'space-between' }}>
                            <Typography>Recommended Cannabis Schedule</Typography>
                            <button style={{ padding: 10, backgroundColor: 'green', color: 'white', borderRadius: 8 }}>Add to Schedule</button>
                        </Stack>
                        <Stack m={2} mx={25} direction="row" sx={{ justifyContent: 'space-between' }}>
                            <Typography>AM</Typography>
                            <Typography>PM</Typography>
                        </Stack>

                        <Grid container gap={2}>
                            <Grid items xs={5} md={5}>
                                <InputLabel>Strain</InputLabel>
                                <TextField maxRows={4} fullWidth size='small' value={Temperature}
                                    onChange={handlesetTemperatureChange} />
                            </Grid>
                            <Grid items xs={5} md={5}>
                                <InputLabel>Strain </InputLabel>
                                <TextField maxRows={4} fullWidth size='small' value={Temperature}
                                    onChange={handlesetTemperatureChange} />
                            </Grid>
                            <Grid items xs={5} md={5}>
                                <InputLabel>Dose</InputLabel>
                                <TextField maxRows={4} fullWidth size='small' value={Temperature}
                                    onChange={handlesetTemperatureChange} />
                            </Grid>
                            <Grid items xs={5} md={5}>
                                <InputLabel>Dose </InputLabel>
                                <TextField maxRows={4} fullWidth size='small' value={Temperature}
                                    onChange={handlesetTemperatureChange} />
                            </Grid>
                            <button style={{ padding: 4, backgroundColor: 'red', color: 'white', borderRadius: 8, margin: 2 }}>x</button>
                        </Grid>
                        <InputLabel>Cannabis schedule notes </InputLabel>
                        <TextField maxRows={4} fullWidth size='small' value={Temperature}
                            onChange={handlesetTemperatureChange} />




                        <br />
                        <button style={{ marginTop: 13, borderRadius: 8, backgroundColor: 'green', color: 'white', padding: 10 }} type="submit">Save & Continue</button>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>ICD10 Code</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <InputLabel maxWidth={500}>ICD10 Code Search </InputLabel>
                        <TextField maxRows={4} fullWidth size='small' value={Temperature}
                            onChange={handlesetTemperatureChange} />
                        <InputLabel>ICD10 Codes </InputLabel>
                        <TextField maxRows={4} fullWidth size='small' value={Temperature}
                            onChange={handlesetTemperatureChange} />




                        <br />
                        <button style={{ marginTop: 13, borderRadius: 8, backgroundColor: 'green', color: 'white', padding: 10 }} type="submit">Save & Continue</button>
                    </AccordionDetails>
                </Accordion>

            </div>

        </Box >
    )
}

export default ExamForm