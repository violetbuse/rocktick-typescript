// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Verify extends APIResource {
  /**
   * Verify that a request originates from rocktick.
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<VerifyRetrieveResponse> {
    return this._client.get(path`/api/verify/${jobID}`, options);
  }
}

export interface VerifyRetrieveResponse {
  verified: boolean;

  /**
   * The hex digest of the request body, or null if there isn't one for the request.
   */
  hash?: string | null;
}

export declare namespace Verify {
  export { type VerifyRetrieveResponse as VerifyRetrieveResponse };
}
