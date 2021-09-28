/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ApplicationRelation } from './application-relation';
import { CronJobRelation } from './cron-job-relation';
import { DaemonRelation } from './daemon-relation';
import { DeploymentRelation } from './deployment-relation';
import { NetworkRuleRelation } from './network-rule-relation';
import { ResourceType } from './resource-type';
import { ServerRelation } from './server-relation';
import { ServiceRelation } from './service-relation';
import { SshKeyRelation } from './ssh-key-relation';
import { SslCertificateRelation } from './ssl-certificate-relation';

/**
 * Object containing the data of the resource and informations about it
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     * The unique id of the resource
     * @type {number}
     * @memberof Resource
     */
    id: number;
    /**
     * 
     * @type {ResourceType}
     * @memberof Resource
     */
    type: ResourceType;
    /**
     * Human readable version of the resource type
     * @type {string}
     * @memberof Resource
     */
    type_human_readable: string;
    /**
     * The resource data of type specified on `resource.type`
     * @type {ApplicationRelation | CronJobRelation | DaemonRelation | DeploymentRelation | NetworkRuleRelation | ServerRelation | ServiceRelation | SshKeyRelation | SslCertificateRelation}
     * @memberof Resource
     */
    data?: ApplicationRelation | CronJobRelation | DaemonRelation | DeploymentRelation | NetworkRuleRelation | ServerRelation | ServiceRelation | SshKeyRelation | SslCertificateRelation | null;
}

