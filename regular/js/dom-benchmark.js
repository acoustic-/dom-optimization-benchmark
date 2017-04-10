$(function () {
  /**
   * Row Item code - start
   */
  chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  stringLength = 1;

  function update(item) {
    item.html(randomContent());
    item.css('backgroundColor', generateColor());
    var size = getRandomSize();
    item.css('height', size);
    item.css('width', size);
  }

  function updateSome(item) {
    var rand = Math.floor((Math.random() * 5) + 1);
    if (rand === 5) {
      update(item);
    }
  }

  function randomContent() {
    let content = "";
    for (var i = 0; i < this.stringLength; ++i) {
      content += this.chars.charAt(Math.floor(Math.random() * this.chars.length));
    }
    return content;
  }

  function getRandomSize() {
    return Math.floor((Math.random() * 6) + 1) + 13 + "px";
  }

  function generateColor() {
    var color = generateRandomColor(256, 256, 256);
    return color;
  }

  // http://stackoverflow.com/a/43235
  // http://stackoverflow.com/a/5624139
  function generateRandomColor(inRed, inGreen, inBlue) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // mix the color
    if (inRed && inGreen && inBlue) {
      red = Math.floor((red + inRed) / 2);
      green = Math.floor((green + inGreen) / 2);
      blue = Math.floor((blue + inBlue) / 2);
    }
    return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
  }

  /* 
   * Row Item code - end
   */


  /* 
   * Main code
   */

  function add(count) {
    var template = document.querySelector('#row-item-template');
    var slot = $('#container-for-row-items');

    for (var i = 0; i < count; ++i) {
      rowItem = template.content.querySelector('.row-item');
      update($(rowItem));
      var clone = document.importNode(template.content, true);
      $(clone).appendTo(slot);
    }
    scrollToBottom();
  }

  function removeAll() {
    $('#row-for-row-items').empty();
  }

  function updateAll() {
    $('.row-item').each(function () {
      update($(this));
    });
    scrollToBottom();
  }

  function updatePart() {
    $('.row-item').each(function () {
      updateSome($(this));
    });
    scrollToBottom();
  }

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  /* Button actions */

  $('#update-all').click(() => {
    updateAll();
  });

  $('#update-part').click(() => {
    updatePart();
  });

  $('#remove').click(() => {
    removeAll();
  });

  $('.add-btn').click(function () {
    add(parseInt($(this).attr('value')));
  });

});