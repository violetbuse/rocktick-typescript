// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Rocktick } from '../client';

export abstract class APIResource {
  protected _client: Rocktick;

  constructor(client: Rocktick) {
    this._client = client;
  }
}
