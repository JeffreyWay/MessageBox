/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery.message', {
    setup: function() {
      this.msg = $.message('Are you sure?');
      this.customMsg = $.message('Are you sure?', {
        icon: 'alert',
        buttons: ['Yes', 'Cancel'],
        callback: function(selectedButtonValue) {
          $('#qunit-fixture').text('The value is: ' + selectedButtonValue);
        }
      });
    }
  });

  test('is available on the jQuery object', 1, function() {
    ok($.message, 'Should exist');
  });

  test('should accept text to be presented to the user', 1, function() {
    equal(this.msg.text, 'Are you sure?');
  });

  test('should apply a class of message-box to the el', 1, function() {
    ok(this.msg.el.hasClass('message-box'));
  });

  test('should append a message box to the body', 2, function() {
    var msgBox = $('.message-box');

    ok(msgBox.length);
    equal(msgBox.find('.message-box-text').text(), 'Are you sure?');
  });

  test('should offer defaults for the icon and inputs', 4, function() {
    equal($.message.defaults.icon, 'info');
    deepEqual($.message.defaults.buttons, ['Okay']);

    equal(this.msg.settings.icon, 'info');
    deepEqual(this.msg.settings.buttons, ['Okay']);
  });

  test('should allow the user to override the defaults', 2, function() {
    equal(this.customMsg.settings.icon, 'alert');
    deepEqual(this.customMsg.settings.buttons, ['Yes', 'Cancel']);
  });

  test('should apply a custom class, based upon the icon type', 2, function() {
    ok(this.msg.el.hasClass('message-box-info'));
    ok(this.customMsg.el.hasClass('message-box-alert'));
  });

  test('should turn the inputs array into input elements', 3, function() {
    var msgBox = $('.message-box-alert');

    equal(msgBox.find('input').length, 2);
    ok(msgBox.find('input').first().val('Yes'));
    ok(msgBox.find('input').eq(1).val('Cancel'));
  });

  test('should close the message box after a button is clicked', 1, function() {
    var msgBox = $('.message-box-alert');
    msgBox.find('input').first().trigger('click');

    stop();
    setTimeout(function() {
      start();
      ok(!$('body').find('.message-box-alert').length);
    }, 500);
  });

  test('should allow the user to specify a callback function, after a button is pressed', 1, function() {
    $('.message-box-alert').find('input').first().trigger('click');

    equal($('#qunit-fixture').text(), 'The value is: Yes');
  });





  // module('jQuery#awesome', {
  //   setup: function() {
  //     this.elems = $('#qunit-fixture').children();
  //   }
  // });

  // test('is chainable', 1, function() {
  //   // Not a bad test to run on collection methods.
  //   strictEqual(this.elems.awesome(), this.elems, 'should be chaninable');
  // });

  // test('is awesome', 1, function() {
  //   strictEqual(this.elems.awesome().text(), 'awesomeawesomeawesome', 'should be thoroughly awesome');
  // });

  // module('jQuery.awesome');

  // test('is awesome', 1, function() {
  //   strictEqual($.awesome(), 'awesome', 'should be thoroughly awesome');
  // });

  // module(':awesome selector', {
  //   setup: function() {
  //     this.elems = $('#qunit-fixture').children();
  //   }
  // });

  // test('is awesome', 1, function() {
  //   // Use deepEqual & .get() when comparing jQuery objects.
  //   deepEqual(this.elems.filter(':awesome').get(), this.elems.last().get(), 'knows awesome when it sees it');
  // });

}(jQuery));
