$("#contactForm").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Thank you for your message. Your enquiry is important to us, we will be in touch with you shortly.");
  });
});
