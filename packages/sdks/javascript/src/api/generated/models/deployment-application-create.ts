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


import { DeploymentType } from './deployment-type';

/**
 * 
 * @export
 * @interface DeploymentApplicationCreate
 */
export interface DeploymentApplicationCreate {
    /**
     * The environment type of the deployment.
     * @type {string}
     * @memberof DeploymentApplicationCreate
     */
    environment?: string;
    /**
     * 
     * @type {DeploymentType}
     * @memberof DeploymentApplicationCreate
     */
    type: DeploymentType;
    /**
     * The \'source type\' from which the application source code will be retrieved and deployed. It can be one of `branch`, `tag` or `commit`. If not provided, the application\'s default branch will be used. This field is required when <code>source_ref</code> is present.
     * @type {string}
     * @memberof DeploymentApplicationCreate
     */
    source_type?: string;
    /**
     * A git reference pointing to a commit in a source provider repository from which the application source code will be retrieved and deployed. It can be a branch name, tag name or a specific commit hash. This field is required when <code>source_type</code> is present. Must not be greater than 200 characters.
     * @type {string}
     * @memberof DeploymentApplicationCreate
     */
    source_ref?: string;
    /**
     * The pipeline\'s ID to use for deployment.
     * @type {number}
     * @memberof DeploymentApplicationCreate
     */
    pipeline_id?: number;
    /**
     * List of valid resource IDs
     * @type {Array<number>}
     * @memberof DeploymentApplicationCreate
     */
    servers?: Array<number>;
}

