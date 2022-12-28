<template>
  <div class="login-wrapper">
    <div class="login-container">
      <div class="login-logo">
        <img src="src\assets\Spotify_Logo_CMYK_Black.png" alt="" />
        <hr />
      </div>
      <div class="login-cont">
        <div class="login-all">
          <div class="login-online">
            <span>Logga in på Spotify för att fortsätta.</span>
            <button class="online-button facebook">
              Fortsätt med facebook
            </button>
            <button class="online-button apple">Fortsätt med apple</button>
            <button class="online-button google">Fortsätt med google</button>
          </div>
          <div class="login-login">
            <span>E-postadress eller användarnamn</span>
            <input />
            <span>Lösenord</span>
            <input />
            <span>Har du glömt ditt lösenord?</span>
            <div class="login-end">
              <div>
                <input type="checkbox" />
                <span>Kom ihåg mig?</span>
              </div>
              <button class="login-loggain">Logga in</button>
            </div>
          </div>
          <div class="login-no"></div>
        </div>
      </div>
    </div>
  </div>
</template>
