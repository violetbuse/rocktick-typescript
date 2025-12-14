// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ExecutionsAPI from './executions';
import * as CronAPI from './cron';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Executions extends APIResource {
  retrieve(executionID: string, options?: RequestOptions): APIPromise<Execution> {
    return this._client.get(path`/api/executions/${executionID}`, options);
  }

  list(
    query: ExecutionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExecutionListResponse> {
    return this._client.get('/api/executions', { query, ...options });
  }
}

export interface Execution {
  id: string;

  max_retries: number;

  region: string;

  request: CronAPI.Request;

  scheduled_at: number;

  cron_job_id?: string | null;

  executed_at?: number | null;

  max_response_bytes?: number | null;

  one_off_job_id?: string | null;

  response?: Response | null;

  response_error?: string | null;

  retry_for?: string | null;

  success?: boolean | null;

  tenant_id?: string | null;

  timeout_ms?: number | null;
}

export interface Response {
  body: string;

  headers: { [key: string]: string };

  status: number;
}

export interface ExecutionListResponse {
  count: number;

  data: Array<ExecutionListResponse.Data>;

  cursor?: string | null;
}

export namespace ExecutionListResponse {
  export interface Data {
    id: string;

    max_retries: number;

    region: string;

    request: CronAPI.Request;

    scheduled_at: number;

    cron_job_id?: string | null;

    executed_at?: number | null;

    max_response_bytes?: number | null;

    one_off_job_id?: string | null;

    response?: ExecutionsAPI.Response | null;

    response_error?: string | null;

    retry_for?: string | null;

    success?: boolean | null;

    tenant_id?: string | null;

    timeout_ms?: number | null;
  }
}

export interface ExecutionListParams {
  completed?: boolean | null;

  cron_id?: string | null;

  cursor?: string | null;

  from?: number | null;

  limit?: number | null;

  one_off_job_id?: string | null;

  to?: number | null;
}

export declare namespace Executions {
  export {
    type Execution as Execution,
    type Response as Response,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionListParams as ExecutionListParams,
  };
}
