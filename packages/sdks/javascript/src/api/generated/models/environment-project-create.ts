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


import { EnvironmentType } from './environment-type';

/**
 * 
 * @export
 * @interface EnvironmentProjectCreate
 */
export interface EnvironmentProjectCreate {
    /**
     * 
     * @type {EnvironmentType}
     * @memberof EnvironmentProjectCreate
     */
    type: EnvironmentType;
    /**
     * The environment\'s name. Must not be greater than 60 characters.
     * @type {string}
     * @memberof EnvironmentProjectCreate
     */
    name: string;
    /**
     * The environment\'s description. Must not be greater than 255 characters.
     * @type {string}
     * @memberof EnvironmentProjectCreate
     */
    description?: string;
}

