// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tenants extends APIResource {
  create(body: TenantCreateParams, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.post('/api/tenants', { body, ...options });
  }

  retrieve(tenantID: string, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.get(path`/api/tenants/${tenantID}`, options);
  }

  update(tenantID: string, body: TenantUpdateParams, options?: RequestOptions): APIPromise<Tenant> {
    return this._client.post(path`/api/tenants/${tenantID}`, { body, ...options });
  }
}

export interface Tenant {
  id: string;

  default_retries: number;

  max_max_response_bytes: number;

  max_request_bytes: number;

  max_timeout: number;

  max_tokens: number;

  tok_per_day: number;

  tokens: number;
}

export interface TenantCreateParams {
  default_retries: number;

  max_max_response_bytes: number;

  max_request_bytes: number;

  max_timeout: number;

  max_tokens: number;

  tok_per_day: number;
}

export interface TenantUpdateParams {
  default_retries?: number | null;

  max_max_response_bytes?: number | null;

  max_request_bytes?: number | null;

  max_timeout?: number | null;

  max_tokens?: number | null;

  tok_per_day?: number | null;

  tokens?: number | null;
}

export declare namespace Tenants {
  export {
    type Tenant as Tenant,
    type TenantCreateParams as TenantCreateParams,
    type TenantUpdateParams as TenantUpdateParams,
  };
}
