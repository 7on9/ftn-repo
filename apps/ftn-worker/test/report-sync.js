const autocannon = require('autocannon');

const instance = autocannon({
  url: 'http://localhost:4001/api/agencies/reports/request/sync',
  connections: 1000,
  pipelining: 1,
  duration: 10,
  requests: [
    {
      method: 'GET',
      setupRequest: (req, context) => {
        const reportId = Math.floor(Math.random() * 100000000) + 1; // Random reportId between 1 and 100000000
        req.path = `/api/agencies/reports/request/sync?reportId=${reportId}`;
        context.counter = (context.counter || 1) + 1;
        return req;
      }
    }
  ],
  amount: 10000,
}, (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Results:', result);
  }
});

autocannon.track(instance, { renderProgressBar: true });