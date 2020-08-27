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


import { User } from './user';

/**
 * 
 * @export
 * @interface CronJob
 */
export interface CronJob {
    /**
     * The Id of the given cron job
     * @type {number}
     * @memberof CronJob
     */
    id: number;
    /**
     * The name of the cron job
     * @type {string}
     * @memberof CronJob
     */
    name: string;
    /**
     * The command line to be executed when running the cron job
     * @type {string}
     * @memberof CronJob
     */
    command: string;
    /**
     * A cron expression consisting of Minute, Hour, Day of Month, Month and Day of Week subexpressions
     * @type {string}
     * @memberof CronJob
     */
    pattern: string;
    /**
     * A translation of the cron expression to a readable string indicating its execution frequency.
     * @type {string}
     * @memberof CronJob
     */
    pattern_human_readable?: CronJobPatternHumanReadableEnum;
    /**
     * The name of the Unix user on behalf of which the cron job will be executed
     * @type {string}
     * @memberof CronJob
     */
    run_as_user: string;
    /**
     * Indicates if the cron job was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof CronJob
     */
    auto_generated?: boolean;
    /**
     * Current status of deploying to remote servers the current cron job
     * @type {string}
     * @memberof CronJob
     */
    status?: CronJobStatusEnum;
    /**
     * 
     * @type {User}
     * @memberof CronJob
     */
    created_by_user?: User;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof CronJob
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof CronJob
     */
    updated_at?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum CronJobPatternHumanReadableEnum {
    EveryMinute = 'Every Minute',
    Hourly = 'Hourly',
    Daily = 'Daily',
    Weekly = 'Weekly',
    Monthly = 'Monthly',
    Yearly = 'Yearly'
}
/**
    * @export
    * @enum {string}
    */
export enum CronJobStatusEnum {
    Pending = 'pending',
    InProgress = 'in-progress',
    Cancelled = 'cancelled',
    Completed = 'completed',
    Failed = 'failed'
}


