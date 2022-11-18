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


import { EnvironmentLinkItem } from './environment-link-item';
import { NetworkRuleProtocol } from './network-rule-protocol';
import { NetworkRuleType } from './network-rule-type';

/**
 * 
 * @export
 * @interface NetworkRuleProjectCreate
 */
export interface NetworkRuleProjectCreate {
    /**
     * The rule\'s name/description/reminder. Must be at least 3 characters. Must not be greater than 60 characters.
     * @type {string}
     * @memberof NetworkRuleProjectCreate
     */
    name: string;
    /**
     * 
     * @type {NetworkRuleType}
     * @memberof NetworkRuleProjectCreate
     */
    type: NetworkRuleType;
    /**
     * 
     * @type {NetworkRuleProtocol}
     * @memberof NetworkRuleProjectCreate
     */
    protocol?: NetworkRuleProtocol;
    /**
     * Starting range of the public ipv4 or ipv6 addresses that can access this rule. Must be a valid IP address.
     * @type {string}
     * @memberof NetworkRuleProjectCreate
     */
    ip_address_from?: string;
    /**
     * Ending range of the public ipv4 or ipv6 addresses that can access this rule. Must be a valid IP address.
     * @type {string}
     * @memberof NetworkRuleProjectCreate
     */
    ip_address_to?: string;
    /**
     * Starting range of network ports to be considered by this rule. Must be at least 1. Must not be greater than 65535.
     * @type {number}
     * @memberof NetworkRuleProjectCreate
     */
    port_from: number;
    /**
     * Ending range of network ports to be considered by this rule. Must be at least 1. Must not be greater than 65535.
     * @type {number}
     * @memberof NetworkRuleProjectCreate
     */
    port_to: number;
    /**
     * 
     * @type {Array<EnvironmentLinkItem>}
     * @memberof NetworkRuleProjectCreate
     */
    environments?: Array<EnvironmentLinkItem>;
}
