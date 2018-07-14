export function range(n){
  return Array(n).fill().map((_, i) => i);
}

export function trackOutboundClick(url) {
  console.info("Tracking outbound link: " + url);
  if (window.ga != null) {
    window.ga('send', 'event', 'outbound', 'click', url, {
      transport: 'beacon',
      hitCallback: function () { document.location = url; }
    });
  }
}