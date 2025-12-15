// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CronAPI from './cron';
import * as ExecutionsAPI from './executions';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Jobs extends APIResource {
  create(body: JobCreateParams, options?: RequestOptions): APIPromise<OneOffJob> {
    return this._client.post('/api/jobs', { body, ...options });
  }

  retrieve(jobID: string, options?: RequestOptions): APIPromise<OneOffJob> {
    return this._client.get(path`/api/jobs/${jobID}`, options);
  }

  update(jobID: string, body: JobUpdateParams, options?: RequestOptions): APIPromise<OneOffJob> {
    return this._client.post(path`/api/jobs/${jobID}`, { body, ...options });
  }

  list(
    query: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<JobListResponsesCursorPage, JobListResponse> {
    return this._client.getAPIList('/api/jobs', CursorPage<JobListResponse>, { query, ...options });
  }
}

export type JobListResponsesCursorPage = CursorPage<JobListResponse>;

export interface OneOffJob {
  id: string;

  execute_at: number;

  executions: Array<ExecutionsAPI.Execution>;

  max_retries: number;

  region: string;

  request: CronAPI.HTTPRequest;

  max_response_bytes?: number | null;

  tenant_id?: string | null;

  timeout_ms?: number | null;
}

export interface JobListResponse {
  id: string;

  execute_at: number;

  executions: Array<ExecutionsAPI.Execution>;

  max_retries: number;

  region: string;

  request: CronAPI.HTTPRequest;

  max_response_bytes?: number | null;

  tenant_id?: string | null;

  timeout_ms?: number | null;
}

export interface JobCreateParams {
  execute_at: number;

  request: CronAPI.HTTPRequest;

  max_response_bytes?: number | null;

  max_retries?: number | null;

  region?: string | null;

  timeout_ms?: number | null;
}

export interface JobUpdateParams {
  execute_at?: number | null;

  max_response_bytes?: number | null;

  max_retries?: number | null;

  region?: string | null;

  request?: CronAPI.HTTPRequest | null;

  timeout_ms?: number | null;
}

export interface JobListParams extends CursorPageParams {}

export declare namespace Jobs {
  export {
    type OneOffJob as OneOffJob,
    type JobListResponse as JobListResponse,
    type JobListResponsesCursorPage as JobListResponsesCursorPage,
    type JobCreateParams as JobCreateParams,
    type JobUpdateParams as JobUpdateParams,
    type JobListParams as JobListParams,
  };
}
