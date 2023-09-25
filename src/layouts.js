const layouts = {
    dashboard_a: {
        lg: [
            {i: 'next-patient', x: 0, y: 0, w: 1, h: 1},
            {i: 'laboratory-tests', x: 1, y: 0, w: 1, h: 1},
            {i: 'doctor-upcoming-appointments', x: 2, y: 0, w: 1, h: 4},
            {i: 'doctor-overall-appointment', x: 0, y: 1, w: 1, h: 1},
            {i: 'patients-pace', x: 1, y: 1, w: 1, h: 1},
            {i: 'recent-questions', x: 0, y: 2, w: 1, h: 2},
            {i: 'confirmed-diagnoses', x: 1, y: 2, w: 1, h: 2}
        ],
        md: [
            {i: 'next-patient', x: 0, y: 0, w: 1, h: 1},
            {i: 'laboratory-tests', x: 0, y: 1, w: 1, h: 1},
            {i: 'doctor-upcoming-appointments', x: 1, y: 0, w: 1, h: 4},
            {i: 'doctor-overall-appointment', x: 0, y: 4, w: 1, h: 1},
            {i: 'patients-pace', x: 0, y: 5, w: 1, h: 1},
            {i: 'recent-questions', x: 0, y: 2, w: 1, h: 2},
            {i: 'confirmed-diagnoses', x: 1, y: 4, w: 1, h: 2}
        ]
    },
    dashboard_b: {
        lg: [
            {i: 'patient-app-history', x: 0, y: 0, w: 1, h: 4},
            {i: 'patient-overall-appointments', x: 1, y: 0, w: 2, h: 2},
            {i: 'radar', x: 1, y: 2, w: 1, h: 2},
            {i: 'diagnoses-donut', x: 2, y: 2, w: 1, h: 2}
        ],
        md: [
            {i: 'patient-app-history', x: 0, y: 0, w: 1, h: 4},
            {i: 'patient-overall-appointments', x: 0, y: 4, w: 2, h: 2},
            {i: 'radar', x: 1, y: 1, w: 1, h: 2},
            {i: 'diagnoses-donut', x: 1, y: 0, w: 1, h: 2}
        ],
    },
    dashboard_c: {
        lg: [
            {i: 'task-list', x: 0, y: 0, w: 1, h: 4},
            {i: 'confirmed', x: 1, y: 0, w: 2, h: 2},
            {i: 'diagnoses-donut', x: 1, y: 2, w: 1, h: 2},
            {i: 'radar', x: 2, y: 2, w: 1, h: 2}
        ],
        md: [
            {i: 'task-list', x: 0, y: 0, w: 1, h: 4},
            {i: 'confirmed', x: 0, y: 4, w: 2, h: 2},
            {i: 'diagnoses-donut', x: 1, y: 0, w: 1, h: 2},
            {i: 'radar', x: 2, y: 2, w: 1, h: 2}
        ],
    },
    dashboard_d: {
        lg: [
            {i: 'scheduler', x: 0, y: 0, w: 1, h: 4},
            {i: 'gender', x: 1, y: 0, w: 2, h: 2},
            {i: 'radar', x: 1, y: 2, w: 1, h: 2},
            {i: 'blood', x: 2, y: 2, w: 1, h: 2}
        ],
        md: [
            {i: 'scheduler', x: 0, y: 0, w: 1, h: 4},
            {i: 'gender', x: 0, y: 4, w: 2, h: 2},
            {i: 'radar', x: 1, y: 0, w: 1, h: 2},
            {i: 'blood', x: 2, y: 2, w: 1, h: 2}
        ],
        sm: [
            {i: 'scheduler', x: 0, y: 0, w: 1, h: 4},
            {i: 'gender', x: 0, y: 4, w: 1, h: 2},
            {i: 'radar', x: 0, y: 6, w: 1, h: 1.5},
            {i: 'blood', x: 0, y: 7.5, w: 1, h: 1.5}
        ],
    },
    dashboard_e: {
        lg: [
            {i: 'heart-rate', x: 0, y: 0, w: 2, h: 2},
            {i: 'gender-scatter', x: 2, y: 0, w: 1, h: 4},
            {i: 'daily-app', x: 0, y: 2, w: 1, h: 2},
            {i: 'questions', x: 1, y: 2, w: 1, h: 2}
        ],
        md: [
            {i: 'heart-rate', x: 0, y: 0, w: 2, h: 2},
            {i: 'gender-scatter', x: 2, y: 2, w: 1, h: 4},
            {i: 'daily-app', x: 0, y: 2, w: 1, h: 2},
            {i: 'questions', x: 0, y: 4, w: 1, h: 2}
        ],
    },
    dashboard_f: {
        lg: [
            {i: 'pain-location', x: 0, y: 0, w: 1, h: 4},
            {i: 'daily-app-chart', x: 1, y: 0, w: 1, h: 2},
            {i: 'hepatitis', x: 2, y: 0, w: 1, h: 2},
            {i: 'health-index-compact', x: 1, y: 2, w: 1, h: 2},
            {i: 'payments-history', x: 2, y: 2, w: 2, h: 2}
        ],
    },
    dashboard_g: {
        lg: [
            {i: 'doctors-rating', x: 0, y: 0, w: 1, h: 4},
            {i: 'health-index', x: 1, y: 0, w: 2, h: 2},
            {i: 'cure-rate', x: 1, y: 2, w: 2, h: 2},
        ],
        md: [
            {i: 'doctors-rating', x: 0, y: 0, w: 1, h: 4},
            {i: 'health-index', x: 1, y: 0, w: 1, h: 2},
            {i: 'cure-rate', x: 1, y: 2, w: 1, h: 2},
        ],
    },
    dashboard_h: {
        lg: [
            {i: 'events-compact', x: 0, y: 0, w: 1, h: 2},
            {i: 'epi-context-area', x: 1, y: 0, w: 2, h: 2},
            {i: 'radar', x: 0, y: 2, w: 1, h: 2},
            {i: 'health-index-compact', x: 1, y: 2, w: 1, h: 2},
            {i: 'diagnoses-donut', x: 2, y: 2, w: 1, h: 2}
        ],
        md: [
            {i: 'events-compact', x: 0, y: 0, w: 1, h: 2},
            {i: 'epi-context-area', x: 0, y: 2, w: 2, h: 2},
            {i: 'radar', x: 1, y: 0, w: 1, h: 2},
            {i: 'health-index-compact', x: 0, y: 4, w: 1, h: 2},
            {i: 'diagnoses-donut', x: 1, y: 4, w: 1, h: 2}
        ],
    },
    dashboard_i: {
        lg: [
            {i: 'planner', x: 0, y: 0, w: 1, h: 4},
            {i: 'map', x: 1, y: 0, w: 1, h: 2},
            {i: 'daily-app-chart', x: 2, y: 0, w: 1, h: 2},
            {i: 'epi-context', x: 1, y: 2, w: 1, h: 2},
            {i: 'recovery-rate', x: 2, y: 2, w: 1, h: 2}
        ],
        md: [
            {i: 'planner', x: 0, y: 0, w: 1, h: 4},
            {i: 'map', x: 1, y: 2, w: 1, h: 2},
            {i: 'daily-app-chart', x: 1, y: 0, w: 1, h: 2},
            {i: 'epi-context', x: 0, y: 4, w: 1, h: 2},
            {i: 'recovery-rate', x: 1, y: 4, w: 1, h: 2}
        ],
    },
    dashboard_j: {
        lg: [
            {i: 'app-scheduler', x: 0, y: 0, w: 1, h: 4},
            {i: 'disease', x: 1, y: 0, w: 1, h: 2},
            {i: 'patients-radial', x: 2, y: 0, w: 1, h: 2},
            {i: 'pay-overview', x: 1, y: 2, w: 1, h: 2},
            {i: 'radar', x: 2, y: 2, w: 1, h: 2},
        ],
        md: [
            {i: 'app-scheduler', x: 0, y: 0, w: 1, h: 4},
            {i: 'disease', x: 1, y: 2, w: 1, h: 2},
            {i: 'patients-radial', x: 1, y: 0, w: 1, h: 2},
            {i: 'pay-overview', x: 0, y: 4, w: 1, h: 2},
            {i: 'radar', x: 1, y: 4, w: 1, h: 2},
        ],
    },
    dashboard_k: {
        lg: [
            {i: 'stat-cause', x: 0, y: 0, w: 1, h: 1},
            {i: 'stat-teeth', x: 1, y: 0, w: 1, h: 1},
            {i: 'stat-heart', x: 2, y: 0, w: 1, h: 1},
            {i: 'payments-history', x: 0, y: 1, w: 1, h: 3},
            {i: 'recent-tests', x: 1, y: 1, w: 2, h: 3}
        ],
        md: [
            {i: 'stat-cause', x: 1, y: 0, w: 1, h: 1},
            {i: 'stat-teeth', x: 1, y: 1, w: 1, h: 1},
            {i: 'stat-heart', x: 1, y: 2, w: 1, h: 1},
            {i: 'payments-history', x: 0, y: 0, w: 1, h: 3},
            {i: 'recent-tests', x: 0, y: 3, w: 2, h: 3}
        ]
    },
    finances: {
        lg: [
            {i: 'balance', x: 0, y: 0, w: 1, h: 1},
            {i: 'payments-feed', x: 1, y: 0, w: 2, h: 4},
            {i: 'credit-cards', x: 0, y: 1, w: 1, h: 3},
        ],
        md: [
            {i: 'balance', x: 0, y: 0, w: 1, h: 1},
            {i: 'payments-feed', x: 1, y: 0, w: 1, h: 4},
            {i: 'credit-cards', x: 0, y: 1, w: 1, h: 3},
        ],
    },
    doctor_reviews: {
        lg: [
            {i: 'doctors-rating-list', x: 2, y: 0, w: 1, h: 4},
            {i: 'doctors-reviews-content', x: 0, y: 0, w: 2, h: 4},
        ],
        md: [
            {i: 'doctors-rating-list', x: 0, y: 0, w: 2, h: 4},
            {i: 'doctors-reviews-content', x: 0, y: 0, w: 0, h: 0, minW: 0, minH: 0},
        ]
    },
    patient_reviews: {
        lg: [
            {i: 'doctors-rating-list', x: 0, y: 0, w: 1, h: 4},
            {i: 'patient-reviews-content', x: 1, y: 0, w: 2, h: 4},
        ],
        md: [
            {i: 'doctors-rating-list', x: 0, y: 0, w: 2, h: 4},
            {i: 'patient-reviews-content', x: 0, y: 0, w: 0, h: 0, minW: 0, minH: 0},
        ]
    },
    doctor_messenger: {
        lg: [
            {i: 'contacts-list', x: 0, y: 0, w: 1, h: 4},
            {i: 'messenger', x: 1, y: 0, w: 2, h: 4},
        ],
        md: [
            {i: 'contacts-list', x: 0, y: 0, w: 2, h: 4},
            {i: 'messenger', x: 0, y: 0, w: 0, h: 0, minW: 0, minH: 0},
        ]
    },
    patient_messenger: {
        lg: [
            {i: 'contacts-list', x: 0, y: 0, w: 1, h: 4},
            {i: 'messenger', x: 1, y: 0, w: 2, h: 4},
        ],
        md: [
            {i: 'contacts-list', x: 0, y: 0, w: 2, h: 4},
            {i: 'messenger', x: 0, y: 0, w: 0, h: 0, minW: 0, minH: 0},
        ]
    }
};

export default layouts;