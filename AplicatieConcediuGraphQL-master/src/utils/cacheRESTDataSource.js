const { OpenTracingRESTDataSource } = require('../tracing/openTracingRestDataSource')

class CacheRESTDataSource extends OpenTracingRESTDataSource {
  //contains property this.useCache -> by default is false;

  checkCacheForRequest(request) {
    if (!this.useCache) this.memoizedResults.delete(this.cacheKeyFor(request))
  }

  didReceiveResponse(response, request) {
    this.checkCacheForRequest(request)
    return super.didReceiveResponse(response, request)
  }

  didEncounterError(error, request) {
    this.checkCacheForRequest(request)
    return super.didEncounterError(error, request)
  }
}

module.exports = CacheRESTDataSource
