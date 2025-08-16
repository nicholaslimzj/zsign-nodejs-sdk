/**
 * Zoho Sign SDK - Main entry point
 * Fixed version with proper exports
 */

// Export all the main components
module.exports = {
  OAuth: require('./src/Oauth').OAuth,
  ZohoSign: require('./src/ZohoSign').ZohoSign,
  DC_type: require('./src/Oauth').DC_type
};