export function getGeolocation() {
  // Check if the browser supports the Geolocation API
  if (navigator.geolocation) {
    // Request the current location
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

function showPosition(position: any) {
  const latitude = position.coords.latitude;
  console.log('Latitude: ' + latitude);

  const longitude = position.coords.longitude;
  console.log('Longitude: ' + longitude);

  const day = 1000 * 60 * 60 * 24;
  const expirationDate = new Date(Date.now() + day).toUTCString();
  document.cookie = `geolocation=${latitude},${longitude}, expires=${expirationDate}; path=/; SameSite=Strict`;
}

function showError(error: any) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log('User denied the request for Geolocation.');
      break;
    case error.POSITION_UNAVAILABLE:
      console.log('Location information is unavailable.');
      break;
    case error.TIMEOUT:
      console.log('The request to get user location timed out.');
      break;
    case error.UNKNOWN_ERROR:
      console.log('An unknown error occurred.');
      break;
  }
}
