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

var ConformanceSchema = new mongoose.Schema({
    url: String,
    version: String,
    name: String,
    status: String,
    experimental: Boolean,
    publisher: String,
    contact: [{
        name: String,
        telecom: [{
        }]
    }],
    date: Date,
    description: String,
    requirements: String,
    copyright: String,
    kind: String,
    software: {
        name: String,
        version: String,
        releaseDate: Date,
    },
    implementation: {
        description: String,
        url: String,
    },
    fhirVersion: {
    },
    acceptUnknown: String,
    format: String,
    profile: [{
    }],
    rest: [{
        mode: String,
        documentation: String,
        security: {
            cors: Boolean,
            service: [{
                coding: [{
                    system: String,
                    code: String,
                    display: String
                }]
            }],
            description: String,
            certificate: [{
                fhirType: String,
                blob: {
                }
            }]
        },
        resource: [{
            fhirType: String,
            profile: {
            },
            interaction: [{
                code: String,
                documentation: String,
            }],
            versioning: String,
            readHistory: Boolean,
            updateCreate: Boolean,
            conditionalCreate: Boolean,
            conditionalUpdate: Boolean,
            conditionalDelete: String,
            searchInclude: String,
            searchRevInclude: String,
            searchParam: [{
                name: String,
                definition: String,
                fhirType: String,
                documentation: String,
                target: String,
                modifier: String,
                chain: String,
            }]
        }],
        interaction: [{
            code: String,
            documentation: String,
        }],
        transactionMode: String,
        searchParam: [{
        }],
        operation: [{
            name: String,
            definition: {
            }
        }],
        compartment: String,
    }],
    messaging: [{
        endpoint: [{
            protocol: {
                system: String,
                code: String,
                display: String
            },
            address: String,
        }],
        reliableCache: {
        },
        documentation: String,
        event: [{
            code: {
                system: String,
                code: String,
                display: String
            },
            category: String,
            mode: String,
            focus: String,
            request: {
            },
            response: {
            },
            documentation: String,
        }]
    }],
    document: [{
        mode: String,
        documentation: String,
        profile: {
        }
    }]
});

mongoose.model('Conformance', ConformanceSchema);
