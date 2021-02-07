#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('                  Jerin John K. /'),
  handle: chalk.cyan('jerinjohnk'),
  work: chalk.white('As a Mobile Application Developer'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/jerinjohnk'),
  medium: chalk.cyan('https://medium.com/@jerinjohnk'),
  github: chalk.cyan('https://github.com/jerinjohnk'),
  stackoverflow: chalk.cyan('https://www.stackoverflow.com/story/jerinjohnk'),
  twitter: chalk.cyan('https://twitter.com/jerinjohnk'),
  npx: chalk.white('npx jerin'),

  labelWork: chalk.white.bold('           Work:'),
  labelLinkedIn: chalk.white.bold('       LinkedIn:'),
  labelMedium: chalk.white.bold('         Medium:'),
  labelGitHub: chalk.white.bold('         GitHub:'),
  labelStackOverflow: chalk.white.bold('  StackOverflow:'),
  labelTwitter: chalk.white.bold('        Twitter:'),
  labelCard: chalk.white.bold('           Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const mediuming = `${data.labelMedium}  ${data.medium}`
const githubing = `${data.labelGitHub}  ${data.github}`
const stackoverflowing = `${data.labelStackOverflow}  ${data.stackoverflow}`
const twittering = `${data.labelTwitter}  ${data.twitter}`

const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + linkedining + newline + mediuming + newline + githubing + newline + stackoverflowing + newline + twittering + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
