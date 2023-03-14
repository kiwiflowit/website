$('#form').on('submit', e => {
  e.preventDefault();

  var input = $('#input').val();
  var $results = $('#results');
  var items = StartupNameGenerator(input);

  $results.html('');

  items.forEach((item, idx) => {
    var $link = $('<a class="result-item" target="_blank">').attr('href', '#').appendTo($results);
    var $span = $('<span>').text(item).appendTo($link);
    $link.on('click', e => {
      e.preventDefault();
      var textToCopy = $span.text();
      navigator.clipboard.writeText(textToCopy);
      alert(`Testo copiato: ${textToCopy}`);
    });
  });
});