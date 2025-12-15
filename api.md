# Cron

Types:

- <code><a href="./src/resources/cron.ts">CronJob</a></code>
- <code><a href="./src/resources/cron.ts">CronListResponse</a></code>

Methods:

- <code title="post /api/cron">client.cron.<a href="./src/resources/cron.ts">create</a>({ ...params }) -> CronJob</code>
- <code title="get /api/cron/{job_id}">client.cron.<a href="./src/resources/cron.ts">retrieve</a>(jobID) -> CronJob</code>
- <code title="post /api/cron/{job_id}">client.cron.<a href="./src/resources/cron.ts">update</a>(jobID, { ...params }) -> CronJob</code>
- <code title="get /api/cron">client.cron.<a href="./src/resources/cron.ts">list</a>({ ...params }) -> CronListResponsesCursorPage</code>

# Executions

Types:

- <code><a href="./src/resources/executions.ts">Execution</a></code>
- <code><a href="./src/resources/executions.ts">ExecutionListResponse</a></code>

Methods:

- <code title="get /api/executions/{execution_id}">client.executions.<a href="./src/resources/executions.ts">retrieve</a>(executionID) -> Execution</code>
- <code title="get /api/executions">client.executions.<a href="./src/resources/executions.ts">list</a>({ ...params }) -> ExecutionListResponsesCursorPage</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">OneOffJob</a></code>
- <code><a href="./src/resources/jobs.ts">JobListResponse</a></code>

Methods:

- <code title="post /api/jobs">client.jobs.<a href="./src/resources/jobs.ts">create</a>({ ...params }) -> OneOffJob</code>
- <code title="get /api/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">retrieve</a>(jobID) -> OneOffJob</code>
- <code title="post /api/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">update</a>(jobID, { ...params }) -> OneOffJob</code>
- <code title="get /api/jobs">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> JobListResponsesCursorPage</code>

# Tenants

Types:

- <code><a href="./src/resources/tenants.ts">Tenant</a></code>

Methods:

- <code title="post /api/tenants">client.tenants.<a href="./src/resources/tenants.ts">create</a>({ ...params }) -> Tenant</code>
- <code title="get /api/tenants/{tenant_id}">client.tenants.<a href="./src/resources/tenants.ts">retrieve</a>(tenantID) -> Tenant</code>
- <code title="post /api/tenants/{tenant_id}">client.tenants.<a href="./src/resources/tenants.ts">update</a>(tenantID, { ...params }) -> Tenant</code>

# Verify

Types:

- <code><a href="./src/resources/verify.ts">VerifyRetrieveResponse</a></code>

Methods:

- <code title="get /api/verify/{job_id}">client.verify.<a href="./src/resources/verify.ts">retrieve</a>(jobID) -> VerifyRetrieveResponse</code>
