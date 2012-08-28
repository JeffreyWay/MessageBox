/*! Message Box jQuery Plugin - v0.1.0 - 2012-08-28
* https://github.com/JeffreyWay/MessageBox
* Copyright (c) 2012 Jeffrey Way; Licensed GPL */

(function($) {

  // For IE8--
  if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
  }

  var Message = {
    template: function(text, buttons) {
      return [
        '<p class="message-box-text">' + text + '</p>',
        '<div class="message-box-buttons">',
          buttons,
        '</div>'
      ].join('');
    },

    initialize: function(text, settings) {
      this.el = $('<div>', {'class': 'message-box', 'style': 'display: none'});
      this.text = text;
      this.settings = $.extend({}, $.message.defaults, settings);

      this.el.addClass('message-box-' + this.settings.icon);

      var buttons = this.createButtons(this.settings.buttons);
      this.el.html(this.template(text, buttons));

      this.events();
    },

    createButtons: function(buttons) {
      return $.map(buttons, function(button) {
        return '<input type="submit" value="' + button + '">';
      }).join('');
    },

    events: function() {
      var self = this;

      this.el.find('input').on('click', function() {
        self.close();
        if ( typeof self.settings.callback === 'function' ) {
          self.settings.callback.call(self, $(this).val());
        }
      });
    },

    close: function() {
      this.el.animate({
        top: 0,
        opacity: 'hide'
      }, 150, function() {
        $(this).remove();
      });
    },

    show: function() {
      this.el.appendTo('body').animate({
      top: $(window).height() / 2 - this.el.outerHeight() / 2,
      opacity: 'show'
    }, 300).find('input').first().focus();
    }
  };


  $.message = function(text, settings) {
    var Msg = Object.create(Message);
    Msg.initialize(text, settings);
    Msg.show();

    return Msg;
  };

  $.message.defaults = {
    icon: 'info',
    buttons: ['Okay'],
    callback: null
  };

}(jQuery));