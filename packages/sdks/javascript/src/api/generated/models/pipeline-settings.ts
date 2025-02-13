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


import { PipelineSettingsStage } from './pipeline-settings-stage';
import { PipelineSettingsVariable } from './pipeline-settings-variable';

/**
 * Settings that can be customized for a pipeline
 * @export
 * @interface PipelineSettings
 */
export interface PipelineSettings {
    /**
     * 
     * @type {number}
     * @memberof PipelineSettings
     */
    max_pipelines_per_resource?: number;
    /**
     * Indicates whether the user has permission to manage the pipeline for the resource operation
     * @type {boolean}
     * @memberof PipelineSettings
     */
    is_user_managed?: boolean;
    /**
     * The list of pipeline setting stage
     * @type {Array<PipelineSettingsStage>}
     * @memberof PipelineSettings
     */
    stages?: Array<PipelineSettingsStage> | null;
    /**
     * The list of pipeline setting variable
     * @type {Array<PipelineSettingsVariable>}
     * @memberof PipelineSettings
     */
    variables?: Array<PipelineSettingsVariable> | null;
}

