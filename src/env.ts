import * as dotenv from 'dotenv';
dotenv.config();

const homedir = require('os').homedir();

export const chaincode = process.env.CHAINCODE || 'fabcar';
export const channel = process.env.CHANNEL || 'ch1';

// Automatically extract credentials by the user id
// If no .env config is found, fallback to Hurley defaults
export const identityId = process.env.IDENTITYID || 'admin';
export const identityName = process.env.IDENTITY || 'admin';
export const identityOrg = process.env.ORG || 'org1';
export const mspOrg = process.env.MSPORG || 'Org1MSP';

export const keyStore = process.env.KEYSTORE || '/' + homedir + 
'/go/src/github.com/bernardo9999/fabric-samples/test-network/organizations/peerOrganizations/' + 
identityOrg + '.example.com/msp/keystore';
export const networkProfile = process.env.NETWORKPROFILE || '/'+ homedir + 
'/go/src/github.com/bernardo9999/fabric-samples/test-network/organizations/peerOrganizations/' + 
identityOrg + '.example.com/' + 'connection-' + identityOrg +  '.yaml';

export const port = process.env.PORT || 8000;

// Default to common values
export const couchDBView = process.env.COUCHDBVIEW || 'ch1_fabcar';
export const couchDBProtocol = process.env.COUCHDB_PROTOCOL || 'http';
export const couchDBHost = process.env.COUCHDB_HOST || 'localhost';
export const couchDBPort = process.env.COUCHDB_PORT || 5084;