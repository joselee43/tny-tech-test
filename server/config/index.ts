import * as convict from 'convict'
import * as convict_format_with_validator from 'convict-format-with-validator'

// Add all formats
convict.addFormats(convict_format_with_validator);

const config = convict({
  env: {
    doc: "The applicaton environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  port: {
    doc: "The port to bind to.",
    format: "port",
    default: 8080,
    env: "PORT"
  },
  keepAliveTimeout: {
    doc: "Server keepAliveTimeout.",
    format: "nat",
    default: 61,
    env: "KEEP_ALIVE_TIMEOUT"
  },
  newsapiKey: {
    doc: "Newsapi service key.",
    format: "*",
    default: "",
    env: "NEWSAPI_KEY"
  },
  newsapiMaxPageSize: {
    doc: "Newsapi request max page size.",
    format: "nat",
    default: 100
  },
});

// perform validation
config.validate();

export default config;
