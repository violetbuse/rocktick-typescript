// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CronAPI from './cron';
import * as ExecutionsAPI from './executions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Cron extends APIResource {
  create(body: CronCreateParams, options?: RequestOptions): APIPromise<CronJob> {
    return this._client.post('/api/cron', { body, ...options });
  }

  retrieve(jobID: string, options?: RequestOptions): APIPromise<CronJob> {
    return this._client.get(path`/api/cron/${jobID}`, options);
  }

  update(jobID: string, body: CronUpdateParams, options?: RequestOptions): APIPromise<CronJob> {
    return this._client.post(path`/api/cron/${jobID}`, { body, ...options });
  }

  list(
    query: CronListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CronListResponse> {
    return this._client.get('/api/cron', { query, ...options });
  }
}

export interface CronJob {
  id: string;

  executions: Array<ExecutionsAPI.Execution>;

  max_retries: number;

  region: string;

  request: Request;

  schedule: string;

  max_response_bytes?: number | null;

  tenant_id?: string | null;

  timeout_ms?: number | null;
}

export interface Request {
  headers: { [key: string]: string };

  method: string;

  url: string;

  body?: string | null;
}

export interface CronListResponse {
  count: number;

  data: Array<CronListResponse.Data>;

  cursor?: string | null;
}

export namespace CronListResponse {
  export interface Data {
    id: string;

    executions: Array<ExecutionsAPI.Execution>;

    max_retries: number;

    region: string;

    request: CronAPI.Request;

    schedule: string;

    max_response_bytes?: number | null;

    tenant_id?: string | null;

    timeout_ms?: number | null;
  }
}

export interface CronCreateParams {
  request: Request;

  schedule: string;

  max_response_bytes?: number | null;

  max_retries?: number | null;

  region?: string | null;

  timeout_ms?: number | null;
}

export interface CronUpdateParams {
  max_response_bytes?: number | null;

  max_retries?: number | null;

  region?: string | null;

  request?: Request | null;

  schedule?: string | null;

  timeout_ms?: number | null;
}

export interface CronListParams {
  cursor?: string | null;

  limit?: number | null;
}

export declare namespace Cron {
  export {
    type CronJob as CronJob,
    type Request as Request,
    type CronListResponse as CronListResponse,
    type CronCreateParams as CronCreateParams,
    type CronUpdateParams as CronUpdateParams,
    type CronListParams as CronListParams,
  };
}
