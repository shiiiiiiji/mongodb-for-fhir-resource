// Copyright (c) 2011+, HL7, Inc & The MITRE Corporation
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without modification, 
// are permitted provided that the following conditions are met:
// 
//     * Redistributions of source code must retain the above copyright notice, this 
//       list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright notice, 
//       this list of conditions and the following disclaimer in the documentation 
//       and/or other materials provided with the distribution.
//     * Neither the name of HL7 nor the names of its contributors may be used to 
//       endorse or promote products derived from this software without specific 
//       prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND 
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT 
// NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR 
// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, 
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
// POSSIBILITY OF SUCH DAMAGE.

var mongoose = require('mongoose');

var EncounterSchema = new mongoose.Schema({
    identifier: [{
        use: String,
        label: String,
        system: String,
        value: String
    }],
    status: String,
    statusHistory: [{
        status: String,
        period: {
        }
    }],
    class: String,
    fhirType: [{
        coding: [{
            system: String,
            code: String,
            display: String
        }]
    }],
    priority: {
        coding: [{
            system: String,
            code: String,
            display: String
        }]
    },
    patient: {
    },
    episodeOfCare: [{
    }],
    incomingReferral: [{
    }],
    participant: [{
        fhirType: [{
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        }],
        period: {
        },
        individual: {
        }
    }],
    appointment: {
    },
    period: {
    },
    length: {
    },
    reason: [{
        coding: [{
            system: String,
            code: String,
            display: String
        }]
    }],
    indication: [{
    }],
    hospitalization: {
        preAdmissionIdentifier: {
            use: String,
            label: String,
            system: String,
            value: String
        },
        origin: {
        },
        admitSource: {
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        },
        admittingDiagnosis: [{
        }],
        reAdmission: {
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        },
        dietPreference: [{
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        }],
        specialCourtesy: [{
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        }],
        specialArrangement: [{
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        }],
        destination: {
        },
        dischargeDisposition: {
            coding: [{
                system: String,
                code: String,
                display: String
            }]
        },
        dischargeDiagnosis: [{
        }]
    },
    location: [{
        location: {
        },
        status: String,
        period: {
        }
    }],
    serviceProvider: {
    },
    partOf: {
    }
});

mongoose.model('Encounter', EncounterSchema);
