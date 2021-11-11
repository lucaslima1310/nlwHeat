const LinksSocialMedia = {
  github: 'lucaslima1310',
  youtube: 'UCj9Rj3Ghj9HvCjWNpN0KaWg',
  facebook: 'id=100002188697717',
  instagram: 'limaaa.lucas',
  twitter: 'Kabelima'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {})
}

getGitHubProfileInfos()