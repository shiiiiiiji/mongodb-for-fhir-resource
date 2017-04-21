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

var ImagingStudySchema = new mongoose.Schema({
    started: Date,
    patient: {
    },
    uid: {
    },
    accession: {
        use: String,
        label: String,
        system: String,
        value: String
    },
    identifier: [{
        use: String,
        label: String,
        system: String,
        value: String
    }],
    order: [{
    }],
    modalityList: [{
        system: String,
        code: String,
        display: String
    }],
    referrer: {
    },
    availability: String,
    url: String,
    numberOfSeries: {
    },
    numberOfInstances: {
    },
    procedure: [{
    }],
    interpreter: {
    },
    description: String,
    series: [{
        number: {
        },
        modality: {
            system: String,
            code: String,
            display: String
        },
        uid: {
        },
        description: String,
        numberOfInstances: {
        },
        availability: String,
        url: String,
        bodySite: {
            system: String,
            code: String,
            display: String
        },
        laterality: {
            system: String,
            code: String,
            display: String
        },
        started: Date,
        instance: [{
            number: {
            },
            uid: {
            },
            sopClass: {
            },
            fhirType: String,
            title: String,
            content: [{
            }]
        }]
    }]
});

mongoose.model('ImagingStudy', ImagingStudySchema);
