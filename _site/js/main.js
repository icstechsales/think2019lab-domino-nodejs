$(function() {
  // $('.collapse').collapse('hide');
  $(".list-group-item.active")
    .parent()
    .parent(".collapse")
    .collapse("show");

  //DP: Trying something
  $("#ph-1").click(function() {
    window.location.href = "/node-red-contrib-dominodb-docs/docs/fullDoc-Intro/";
    return;
  });

  $("#ph-2").click(function() {
    window.location.href = "/node-red-contrib-dominodb-docs/docs/article-Intro/";
    return;
  });

  $("#ph-3").click(function() {
    window.location.href = "/node-red-contrib-dominodb-docs/docs/envSetup/";
    return;
  });

  var pages = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("title"),
    // datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,

    prefetch: baseurl + "/search.json"
  });

  $("#search-box").typeahead(
    {
      minLength: 0,
      highlight: true
    },
    {
      name: "pages",
      display: "title",
      source: pages
    }
  );

  $("#search-box").bind("typeahead:select", function(ev, suggestion) {
    window.location.href = suggestion.url;
  });

  // Markdown plain out to bootstrap style
  $("#markdown-content-container table").addClass("table");
  $("#markdown-content-container img").addClass("img-responsive");

  //Begin no idea what I am doing
  var clipboard = new ClipboardJS('.btn');
  
  var allCodeBlocksElements = $("pre > code");

  allCodeBlocksElements.each(function(i) {
    var currentId = "codeblock" + (i + 1);
    $(this).attr("id", currentId);

    var clipButton =
      '<button title="Copy to clipboard" class="btn" data-clipboard-target="#' +
      currentId +
      '"><img src="https://clipboardjs.com/assets/images/clippy.svg" width="13" alt="Copy to clipboard"></button>';
    $(this).before(clipButton);
  });

  clipboard.on('success', function(e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);

      e.clearSelection();
  });

  clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
  });
  
  //End no idea what I am doing

  //Bootstrap video modal Begin
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });

  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1&html5=1" ); 
  })
    
  $('#videoModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src',$videoSrc); 
  }) 
  
});
