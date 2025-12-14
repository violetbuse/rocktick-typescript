// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Rocktick from 'rocktick';

const client = new Rocktick({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource executions', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.executions.retrieve('execution_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.executions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.executions.list(
        {
          completed: true,
          cron_id: 'cron_id',
          cursor: 'cursor',
          from: 0,
          limit: 0,
          one_off_job_id: 'one_off_job_id',
          to: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Rocktick.NotFoundError);
  });
});
