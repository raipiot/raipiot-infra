const { makeMetroConfig } = require('@rnx-kit/metro-config')
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks')
const { bootstrapLog } = require('@raipiot-infra/bootstrap-animation')

bootstrapLog()

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolveRequest: MetroSymlinksResolver()
  }
}

module.exports = makeMetroConfig(config)
