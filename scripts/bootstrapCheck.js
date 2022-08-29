let test = document.createElement("div")
test.className = "hidden d-none"

document.head.appendChild(test)
let cssLoaded = window.getComputedStyle(test).display === "none"
document.head.removeChild(test)
if (!cssLoaded)
{
  let link = document.createElement("link")
  link.type = "text/css"
  link.rel = "stylesheet"
  link.href = "./lib/bootstrap.min.css"

  document.head.appendChild(link)
}
