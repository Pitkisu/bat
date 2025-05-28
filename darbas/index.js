console.log('“They think I am hiding in the shadows, but I am the shadows.”') 

function changeMode() {

  favicon = document.querySelector("link[rel~='icon']")
  site = document
  body = document.body
  pageTitle = document.getElementById('title')
  profileImage = document.getElementById('profile')
  batLinks = document.getElementById('bat-links')
  bruceLinks = document.getElementById('bruce-links')

  // pakeisti batman i bruce
  if (document.body.id == 'bat-mode') {
    body.id = 'bruce-mode'
    favicon.href = 'https://raw.githubusercontent.com/christyanbrayan/batman-links/refs/heads/main/img/batman.jpg';
    site.title = 'Bruce Links'
    profileImage.src = 'https://raw.githubusercontent.com/christyanbrayan/batman-links/refs/heads/main/img/bruce.jpeg'
    pageTitle.innerHTML = 'Bruce Links'
    bruceLinks.style.display = 'flex'
    batLinks.style.display = 'none'

    // pakeisti bruce i bat
  } else if (document.body.id == 'bruce-mode') {
    body.id = 'bat-mode'
    favicon.href = 'https://raw.githubusercontent.com/christyanbrayan/batman-links/refs/heads/main/img/bruce.jpeg';
    site.title = 'Batman Links'
    profileImage.src = 'https://raw.githubusercontent.com/christyanbrayan/batman-links/refs/heads/main/img/batman.jpg'
    pageTitle.innerHTML = 'Batman Links'
    batLinks.style.display = 'flex'
    bruceLinks.style.display = 'none'
  }

}