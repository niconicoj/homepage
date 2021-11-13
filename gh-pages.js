var ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/niconicoj/homepage.git',
    user: {
      name: 'Nicolas JOULIN',
      email: 'joulin.nicolas@gmail.com'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)
