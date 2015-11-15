
document.observe("dom:loaded", function() {
  var main = $("main");
  var biographies = main.select(".biography");
  new ItemNavigator(main, biographies, {
    navClassName: "biography_nav",
    itemsPerGroup: 6,
    visibleWidth: 940,
    populateButton: function(button, item) {
      button.update(item.down("h5").innerHTML);

      var icon = item.down(".icon");
      icon.remove();
      button.insert({top: icon});
      
      var group = item.down("h4");
      if (group) button.addClassName(String(group.innerHTML).toLowerCase().replace(/ /g, "_"));
    }
  });
  
  var Biography = Class.create({
    element: null,
    personal: null,
    business: null,
    square: null,
    hotspot: null,
    initialize: function(element) {
      if (!element) return;
      this.element = element;
      this.personal = element.down(".personal");
      this.business = element.down(".business");
      this.personal.hide();
      this.business.insert(new Element("p").addClassName("instructions").update("Rollover For<br />The “Real” Me"));
      this.initHotSpot();
    },
    initHotSpot: function() {
      // We only want to show the personal element when the mouse is over the img element. So create a "hotspot" above it.
      var img = this.business.down("img");
      this.hotspot = new Element("div");
      this.element.appendChild(this.hotspot);
      this.hotspot.addClassName("hotspot");
      
      // IE 6/7/8 don't anti-alias text that has opacity applied to it. Work around this
      // by animating a white square above the text, rather than animating the text itself.
      // KUDOS: http://mattberseth.com/blog/2007/12/ie7_cleartype_dximagetransform.html
      if (BrowserDetect.browser == "Explorer" && BrowserDetect.version < 9) {
        this.initSquare();
        this.hotspot.observe("mouseover", this.onMouseOverUsingSquare.bindAsEventListener(this));
        this.hotspot.observe("mouseout", this.onMouseOutUsingSquare.bindAsEventListener(this));
      } else {
        this.hotspot.observe("mouseover", this.onMouseOver.bindAsEventListener(this));
        this.hotspot.observe("mouseout", this.onMouseOut.bindAsEventListener(this));
      }
    },
    onMouseOver: function(e) {
      this.business.hide();
      this.personal.show();
      this.personal.setStyle({"opacity": "0"});
      new Effect.Morph(this.personal, { style:{opacity: "1"}, duration: 0.5 });
    },
    onMouseOut: function(e) {
      this.personal.hide();
      this.business.show();
      this.business.setStyle({"opacity": "0"});
      new Effect.Morph(this.business, { style:{opacity: "1"}, duration: 0.5 });
    },
    
  // IE 7/8 specific methods
    initSquare: function() {
      this.square = new Element("div");
      this.square.setStyle({
        "position": "absolute",
        "top": "70px",    // 70px is approximately the top position of the personal/business elements.
        "left": "0",
        "backgroundColor": "#ffffff"
      });
      this.hotspot.insert({before: this.square}); // Put the square underneath the hotspot, so it won't affect the mouse events.
      this.square.hide();
    },
    onMouseOverUsingSquare: function(e) {
      this.business.hide();
      this.personal.show();

      // KLUDGE: This seems to fix a bug where IE 7/8 will sometimes render the personal element without any space above it.
      this.personal.setStyle({"opacity": "0"});
      new Effect.Morph(this.personal, { style:{opacity: "1"}, duration: 0 });
      
      this.square.show();
      this.square.setStyle({
        "opacity": "1",
        "width": this.personal.offsetWidth + "px",
        "height": this.personal.offsetHeight + "px"
      });
      new Effect.Morph(this.square, { style:{opacity: "0"}, duration: 0.5, onComplete: function() { this.square.hide(); }.bind(this) });
    },
    onMouseOutUsingSquare: function(e) {
      this.personal.hide();
      this.business.show();
      this.square.show();
      this.square.setStyle({
        "opacity": "1",
        "width": this.business.offsetWidth + "px",
        "height": this.business.offsetHeight + "px"
      });
      new Effect.Morph(this.square, { style:{opacity: "0"}, duration: 0.5, onComplete: function() { this.square.hide(); }.bind(this) });
    }
  });
  var legendLabels = $A([]);
  biographies.each(function(element) {
    new Biography(element);
    var group = element.down("h4");
    if (group) legendLabels.push(group.innerHTML);
  }.bind(this));
  
  var legend = new Element("ul").addClassName("biography_legend");
  main.insert({top: legend});
  legendLabels.uniq().each(function(label) {
    var item = new Element("li");
    legend.appendChild(item);
    item.update("<span></span>" + label);
    item.addClassName(String(label).toLowerCase().replace(/ /g, "_"));
  }.bind(this));
});
