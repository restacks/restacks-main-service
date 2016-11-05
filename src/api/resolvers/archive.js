import BigQuery from '@google-cloud/bigquery';
import Repository from './../models/repository';
/** restack-148604 */

import config from './../../../config';

const projectId = config.GOOGLE_CLOUD_PROJECT_ID;
const query = `
SELECT repo.name, type, repo.url, COUNT(type) as Amount FROM (
  TABLE_DATE_RANGE([githubarchive:day.], 
    TIMESTAMP('2015-01-01'), 
    TIMESTAMP('2015-02-01')
  )) 
WHERE type = 'PullRequestEvent' OR type = 'WatchEvent' OR type = 'ForkEvent'
GROUP BY repo.name,repo.url, type
ORDER BY repo.name DESC
LIMIT 100;
`;

const bigquery({
    projectId
});

const options = {
    query: sqlQuery,
    useLegacySql: false // Use standard SQL syntax for queries.
};


function doRefreshCacheRepositoryData() {
    // TODO: cache data here
    const repo = new Repository({});
}