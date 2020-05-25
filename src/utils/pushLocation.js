export default (pathname) => {
  window.location.pathname !== '/' && (window.location.pathname = pathname)
}