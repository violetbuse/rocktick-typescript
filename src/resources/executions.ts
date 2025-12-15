// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Executions extends APIResource {
  retrieve(executionID: string, options?: RequestOptions): APIPromise<Execution> {
    return this._client.get(path`/api/executions/${executionID}`, options);
  }

  list(
    query: ExecutionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExecutionListResponsesCursorPage, ExecutionListResponse> {
    return this._client.getAPIList('/api/executions', CursorPage<ExecutionListResponse>, {
      query,
      ...options,
    });
  }
}

export type ExecutionListResponsesCursorPage = CursorPage<ExecutionListResponse>;

export interface Execution {
  id: string;

  max_retries: number;

  region: string;

  request: Execution.Request;

  scheduled_at: number;

  cron_job_id?: string | null;

  executed_at?: number | null;

  max_response_bytes?: number | null;

  one_off_job_id?: string | null;

  response?: Execution.Response | null;

  response_error?: string | null;

  retry_for?: string | null;

  success?: boolean | null;

  tenant_id?: string | null;

  timeout_ms?: number | null;
}

export namespace Execution {
  export interface Request {
    headers: { [key: string]: string };

    method: string;

    url: string;

    body?: string | null;
  }

  export interface Response {
    body: string;

    headers: { [key: string]: string };

    status: number;
  }
}

export interface ExecutionListResponse {
  id: string;

  max_retries: number;

  region: string;

  request: ExecutionListResponse.Request;

  scheduled_at: number;

  cron_job_id?: string | null;

  executed_at?: number | null;

  max_response_bytes?: number | null;

  one_off_job_id?: string | null;

  response?: ExecutionListResponse.Response | null;

  response_error?: string | null;

  retry_for?: string | null;

  success?: boolean | null;

  tenant_id?: string | null;

  timeout_ms?: number | null;
}

export namespace ExecutionListResponse {
  export interface Request {
    headers: { [key: string]: string };

    method: string;

    url: string;

    body?: string | null;
  }

  export interface Response {
    body: string;

    headers: { [key: string]: string };

    status: number;
  }
}

export interface ExecutionListParams extends CursorPageParams {
  completed?: boolean | null;

  cron_id?: string | null;

  from?: number | null;

  one_off_job_id?: string | null;

  to?: number | null;
}

export declare namespace Executions {
  export {
    type Execution as Execution,
    type ExecutionListResponse as ExecutionListResponse,
    type ExecutionListResponsesCursorPage as ExecutionListResponsesCursorPage,
    type ExecutionListParams as ExecutionListParams,
  };
}
