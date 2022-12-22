// Import the neo4j dependency from neo4j-driver

import neo4j from 'neo4j-driver'

/**
 * A singleton instance of the Neo4j Driver to be used across the app
 *
 * @type {typeof neo4j.Driver}
 */
// tag::driver[]
let driver
// end::driver[]


/**
 * Initiate the Neo4j Driver
 *
 * @param {string} uri   The neo4j URI, eg. `neo4j://localhost:7687`
 * @param {string} username   The username to connect to Neo4j with, eg `neo4j`
 * @param {string} password   The password for the user
 * @returns {Promise<neo4j.Driver>}
 */
// tag::initDriver[]
export async function initDriver(uri, username, password) {
  // TODO: Create an instance of the driver here

  /*
  console.log(process.env.NEO4J_URI, process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)

  // Create a new Driver instance
  let driver
  const driverUrl = process.env.NEO4J_URI
  if (driverUrl != null && process.env.NEO4J_USERNAME != null && process.env.NEO4J_PASSWORD != null) {
    const driverAuth = neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
    driver = neo4j.driver(driverUrl, driverAuth)
  }
  */

  // const myDriver = neo4j.driver('neo4j://localhost:7687',
  //   neo4j.auth.basic('neo4j', 'neo'))

  
  
  const driverAuth = neo4j.auth.basic(username, password)
  driver = neo4j.driver(uri, driverAuth)
  console.log(await driver.verifyConnectivity(), await driver.getServerInfo())

  await driver.getServerInfo() // If the connection cannot be made for any reason, the Promise will be rejected.

  return driver
}
// end::initDriver[]

/**
 * Get the instance of the Neo4j Driver created in the
 * `initDriver` function
 *
 * @param {string} uri   The neo4j URI, eg. `neo4j://localhost:7687`
 * @param {string} username   The username to connect to Neo4j with, eg `neo4j`
 * @param {string} password   The password for the user
 * @returns {neo4j.Driver}
 */
// tag::getDriver[]
export function getDriver() {
  return driver
}
// end::getDriver[]

/**
 * If the driver has been instantiated, close it and all
 * remaining open sessions
 *
 * @returns {void}
 */
// tag::closeDriver[]
export function closeDriver() {
  return driver && driver.close()
}
// end::closeDriver[]
