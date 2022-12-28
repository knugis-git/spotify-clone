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
              <i class="fa-brands fa-square-facebook"></i>&nbsp; &nbsp; Fortsätt
              med facebook
            </button>
            <button class="online-button apple">
              <i class="fa-brands fa-apple"></i>&nbsp; &nbsp;Fortsätt med apple
            </button>
            <button class="online-button google">
              <i class="fa-brands fa-google"></i> &nbsp; &nbsp;Fortsätt med
              google
            </button>
            <div class="login-line">
              <hr class="login-hr" />
              <span class="login-eller"> Eller</span>
              <hr class="login-hr" />
            </div>
          </div>
          <div class="login-login">
            <span class="login-span">E-postadress eller användarnamn</span>
            <input class="login-input-epost login-input" />
            <span class="login-span">Lösenord</span>
            <input type="password" class="login-input-losen login-input" />
            <span class="login-glomt">Har du glömt ditt lösenord?</span>
            <div class="login-end">
              <div class="login-kom">
                <input type="checkbox" />
                <span class="login-kom">Kom ihåg mig?</span>
              </div>
              <button class="login-loggain">Logga in</button>
            </div>
          </div>
          <div class="login-no">
            <hr />
            <span>Har du inget konto?</span>
            <button class="online-button regga">
              Registrera dig för spotify
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
