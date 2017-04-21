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

var ClaimSchema = new mongoose.Schema({
    fhirType: String,
    identifier: [{
        use: String,
        label: String,
        system: String,
        value: String
    }],
    ruleset: {
        system: String,
        code: String,
        display: String
    },
    originalRuleset: {
        system: String,
        code: String,
        display: String
    },
    created: Date,
    target: {
    },
    provider: {
    },
    organization: {
    },
    use: String,
    priority: {
        system: String,
        code: String,
        display: String
    },
    fundsReserve: {
        system: String,
        code: String,
        display: String
    },
    enterer: {
    },
    facility: {
    },
    prescription: {
    },
    originalPrescription: {
    },
    payee: {
        fhirType: {
            system: String,
            code: String,
            display: String
        },
        provider: {
        },
        organization: {
        },
        person: {
        }
    },
    referral: {
    },
    diagnosis: [{
        sequence: {
        },
        diagnosis: {
            system: String,
            code: String,
            display: String
        }
    }],
    condition: [{
        system: String,
        code: String,
        display: String
    }],
    patient: {
    },
    coverage: [{
        sequence: {
        },
        focal: Boolean,
        coverage: {
        },
        businessArrangement: String,
        relationship: {
            system: String,
            code: String,
            display: String
        },
        preAuthRef: String,
        claimResponse: {
        },
        originalRuleset: {
            system: String,
            code: String,
            display: String
        }
    }],
    exception: [{
        system: String,
        code: String,
        display: String
    }],
    school: String,
    accident: Date,
    accidentType: {
        system: String,
        code: String,
        display: String
    },
    interventionException: [{
        system: String,
        code: String,
        display: String
    }],
    item: [{
        sequence: {
        },
        fhirType: {
            system: String,
            code: String,
            display: String
        },
        provider: {
        },
        diagnosisLinkId: [{
        }],
        service: {
            system: String,
            code: String,
            display: String
        },
        serviceDate: Date,
        quantity: {
        },
        unitPrice: {
        },
        factor: Number,
        points: Number,
        net: {
        },
        udi: {
            system: String,
            code: String,
            display: String
        },
        bodySite: {
            system: String,
            code: String,
            display: String
        },
        subSite: [{
            system: String,
            code: String,
            display: String
        }],
        modifier: [{
            system: String,
            code: String,
            display: String
        }],
        detail: [{
            sequence: {
            },
            fhirType: {
                system: String,
                code: String,
                display: String
            },
            service: {
                system: String,
                code: String,
                display: String
            },
            quantity: {
            },
            unitPrice: {
            },
            factor: Number,
            points: Number,
            net: {
            },
            udi: {
                system: String,
                code: String,
                display: String
            },
            subDetail: [{
                sequence: {
                },
                fhirType: {
                    system: String,
                    code: String,
                    display: String
                },
                service: {
                    system: String,
                    code: String,
                    display: String
                },
                quantity: {
                },
                unitPrice: {
                },
                factor: Number,
                points: Number,
                net: {
                },
                udi: {
                    system: String,
                    code: String,
                    display: String
                }
            }]
        }],
        prosthesis: {
            initial: Boolean,
            priorDate: Date,
            priorMaterial: {
                system: String,
                code: String,
                display: String
            }
        }
    }],
    additionalMaterials: [{
        system: String,
        code: String,
        display: String
    }],
    missingTeeth: [{
        tooth: {
            system: String,
            code: String,
            display: String
        },
        reason: {
            system: String,
            code: String,
            display: String
        },
        extractionDate: Date,
    }]
});

mongoose.model('Claim', ClaimSchema);
