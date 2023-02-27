const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://localhost:8000/api/medicos");
xhr.setRequestHeader("Authorization", "Bearer 18|4Jw0rTWlQ3W5OBKpAkJGpznx5vYRJXzUasLL2cv2");

xhr.send(data);