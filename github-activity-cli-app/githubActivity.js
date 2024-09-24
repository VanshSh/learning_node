import axios from 'axios'
import readline from 'readline'

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Prompt the user for their GitHub username
rl.question('Enter your GitHub username: ', (username) => {
  console.log(`Fetching activity for GitHub user: ${username}....`)

  // Here you can add your logic to fetch GitHub activity for the username
  // For example, calling the GitHub API
  fetchUserActivity(username)

  // Close the readline interface
  rl.close()
})

// Function to fetch the Github activity for the username
const fetchUserActivity = async (userName) => {
  const URL = `https://api.github.com/users/${userName}/events`
  try {
    const response = await axios.get(URL)
    const events = response.data
    showUserData(events)
  } catch (error) {
    console.log('❌ ', error.message)
  }
}

// Function to show user data
function showUserData(events) {
  if (events.length <= 0) {
    console.log('❌ ', 'No data available. Please try again')
    return
  }
  console.log(`Recent activity for ${events[0].actor.display_login}:\n`)
  events.forEach((event) => {
    const eventType = event.type
    const repoName = event.repo.name
    const createdAt = new Date(event.created_at).toLocaleString()

    console.log(`-> ${eventType} at ${repoName} on ${createdAt} \n`)
  })
}
