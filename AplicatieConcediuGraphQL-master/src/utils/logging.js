const { map } = require('ramda')

const saveLogs = async context => {
  const { dbInstance, logs } = context
  if (logs?.length && dbInstance) {
    const insertLogs = map(
      ({ uid, requestId, code, message, timeStamp, loggingLevel, error = {} }) => ({
        Uid: uid,
        RequestId: requestId,
        Code: code,
        Message: message,
        Details: error ? `${error.message} ${error.stack} ${JSON.stringify(error.extensions)}` : '',
        TimeStamp: timeStamp,
        LoggingLevel: loggingLevel
      }),
      logs
    )
    await dbInstance('EventLog').insert(insertLogs)
  }
}

module.exports = { saveLogs }
