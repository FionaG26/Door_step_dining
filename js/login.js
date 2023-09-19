mobiscroll.settings = {
  theme: "ios",
  themeVariant: "light",
};

$(function () {
  var register = $("#demo")
      .mobiscroll()
      .popup({
        display: "center",
        buttons: [
          {
            text: "Sign Up",
            handler: "set",
          },
        ],
      })
      .mobiscroll("getInst"),
    login = $("#login")
      .mobiscroll()
      .popup({
        display: "center",
        buttons: [
          {
            text: "Sign In",
            handler: "set",
          },
        ],
        onMarkupReady: function (event, inst) {
          $(".md-social-btn", event.target).click(function () {
            inst.hide();
          });
        },
      })
      .mobiscroll("getInst");

  $("#showRegister").click(function () {
    register.show();
    return false;
  });

  $("#showLogin").click(function () {
    login.show();
    return false;
  });
});
