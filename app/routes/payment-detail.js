import Route from "@ember/routing/route";

export default Route.extend({
  setupController: function(controller) {
    controller.set("errors", {
      cardNumber: ["Card number is invalid"]
    });
    controller.set("cardNumber",7867777867867876);
  }
});
