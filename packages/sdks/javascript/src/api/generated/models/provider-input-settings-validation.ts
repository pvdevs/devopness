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



/**
 * The validation rules that apply for the input field
 * @export
 * @interface ProviderInputSettingsValidation
 */
export interface ProviderInputSettingsValidation {
    /**
     * 
     * @type {boolean}
     * @memberof ProviderInputSettingsValidation
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProviderInputSettingsValidation
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof ProviderInputSettingsValidation
     */
    min?: number;
    /**
     * 
     * @type {number}
     * @memberof ProviderInputSettingsValidation
     */
    max?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProviderInputSettingsValidation
     */
    allowed_values?: Array<string>;
}

