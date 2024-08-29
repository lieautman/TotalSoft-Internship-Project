const { OpenTracingRESTDataSource } = require('../tracing/openTracingRestDataSource')

class NoCacheRESTDataSource extends OpenTracingRESTDataSource {
  deleteCacheForRequest(request) {
    this.memoizedResults.delete(this.cacheKeyFor(request))
  }

  didReceiveResponse(response, request) {
    this.deleteCacheForRequest(request)
    return super.didReceiveResponse(response, request)
  }

  didEncounterError(error, request) {
    this.deleteCacheForRequest(request)
    return super.didEncounterError(error, request)
  }
}

module.exports = { NoCacheRESTDataSource }
