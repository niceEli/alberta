export default function reloadAlberta() {
  if (window.location.reload) {
    window.location.reload();
  } else if (history.go) {
    history.go();
  } else {
    window.location.href = window.location.href;
  }
}
