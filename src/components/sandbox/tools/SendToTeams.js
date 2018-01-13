export const sendMessageToTeams = (message) => {
  fetch('https://prod-14.westeurope.logic.azure.com:443/workflows/eeac086bf369480bb644a346d2d0929b/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=XBEm3a46SLtbi37OVEimBCV1wt-qqJKSuoW-MpmHk5M', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
    })
  });
};
