---

layout: default

title: Initial Startup

parent: The Build

nav_order: 5

---

<link  rel="stylesheet"  href="style.css">
<script src="button.js"></script>
# Please select your printer model to start
<br>

<div class="btn-group" role="group" aria-label="Basic example">

  <button type="button" class="btn btn-danger border margin-right3" onclick="location.href = './startup.html?model=v0&step=0';"><img src="./images/v0render.png" width="250px" /><br>Voron V0</button>
  <button type="button" class="btn btn-danger border" onclick="location.href = './startup.html?model=v2&step=0';"><img src="./images/v2render.png" width="250px"/><br>Voron V2</button>
</div>
<div class="spacer"></div>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-danger margin-right3" onclick="location.href = './startup.html?model=v1&step=0';"><img src="./images/v1render.png" width="250px" /><br>Voron V1/Trident</button>
  <button type="button" class="btn btn-danger" onclick="location.href = './startup.html?model=vsw&step=0';"><img src="./images/vswrender.png" width="250px"/><br>Voron Switchwire</button>
</div>

<style>
/* mobile */
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="btn-group"] {
    display: flex;
    align-items: center;
  }
}
</style>




<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
