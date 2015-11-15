
/*  =ItemNavigator
  ----------------------------------------------- */
  var ItemNavigator = Class.create({
    element         : null,
    items           : null,
    buttons         : null,
    activeItem      : null,
    itemsPerGroup   : 1,
    outer           : null, // container element (for positioning and style)
    inner           : null, // the "window" that reveals the current "slide"
    slide           : null, // the element that "slides" left or right
    list            : null, // temporary pointer to the <ul> element, while the list is being populated
    visibleWidth    : null,
    offSet          : 0,
    transDuration   : 0.35, // seconds
    nextDisabled    : false,
    previousDisabled: false,
    navClassName    : "item_nav",
    initialize: function(element, items) {
      if (!element || !items || items.length <= 0) return;
      this.element = element;
      this.items = items;
      Object.extend(this, arguments[2] || {});
      if (this.visibleWidth == null) this.visibleWidth = this.element.offsetWidth - 2;   // subtract 2, to compensate for the border width
      
      this.render();
      var hash = document.location.hash;
      if (hash != null && hash != "") {
        this.showItem(hash.replace("#", ""));
      } else {
        this.showItem(this.items[0].getAttribute("id"));
      }
      
      this.updateDisabled();
    },
    render: function() {

      // Add the containers
      this.outer = new Element("div").addClassName(this.navClassName);
      // Use an overridable funtion to add the outer container, so it can be overridden.
      this.appendOuter(this.element, this.outer);
      this.inner = new Element("div").addClassName("inner");
      this.outer.appendChild(this.inner);
      this.slide = new Element("div").addClassName("slide");
      this.inner.appendChild(this.slide);
      
      // Hide the nav temporarily (until we're ready to show an item)
      this.outer.setStyle({"visibility": "hidden"});
      
      var numGroups = Math.ceil(this.items.length / this.itemsPerGroup);
      this.slide.setStyle({
        "width": String((this.visibleWidth) * numGroups) + "px"
      });
      this.items.each(this.renderItem.bind(this));
      
      this.nextButton     = new Element("a", {"href": "#next"}    ).update("Next"     ).addClassName("next");
      this.previousButton = new Element("a", {"href": "#previous"}).update("Previous" ).addClassName("previous");
      
      this.inner.appendChild(this.nextButton);
      this.inner.appendChild(this.previousButton);
      
      this.nextButton.observe(    "click", this.onNextClick.bindAsEventListener(this));
      this.previousButton.observe("click", this.onPreviousClick.bindAsEventListener(this));
      
      var archiveNav = this.element.down(".archive_nav");
      if (archiveNav) {
        archiveNav.remove();
        this.inner.insert({top: archiveNav});

        // IE 6 doesn't suppport li:first-child, so simulate it with a class name
        if (BrowserDetect.browser == "Explorer" && BrowserDetect.version < 7) {
          archiveNav.down("li").addClassName("first-child");
        }
      }
    },
    renderItem: function(item, index) {
      item.hide();
      
      // Make a new list for each group of items
      if (index % this.itemsPerGroup == 0) {
        this.list = new Element("ul");
        this.slide.appendChild(this.list);
      }
      
      var li = new Element("li");
      li.addClassName(item.getAttribute("id"));
      this.list.appendChild(li);
      var button = new Element("a", {"href": "#" + item.getAttribute("id")});
      li.appendChild(button);
      this.populateButton(button, item);
      
      button.observe("click", this.onButtonClick.bindAsEventListener(this));
      if (this.buttons == null) this.buttons = $A([]);
      this.buttons.push(button);
    },
    appendOuter: function(element, outer) {
      element.insert({ top: outer });
    },
    populateButton: function(button, item) {
      button.update(item.down("h2").innerHTML);
      
      var duration = new Element("em").addClassName("duration");
      duration.update(item.down(".duration").innerHTML);
      button.appendChild(duration);
      
      var icon = item.down(".player img");
      icon.remove();
      button.insert({top: icon});
    },
    onButtonClick: function(e) {
      e.preventDefault();
      var a = $(e.target);
      if (String(a.nodeName).toLowerCase() != "a") a = Event.findElement(e, "a");
      var id = a.getAttribute("href").replace("#", "");
      
      // Update the URL, for bookmarking (except for IE 6/7, since they insist on scrolling to the not-yet-visible item).
      if (BrowserDetect.browser != "Explorer" || BrowserDetect.version >= 8) {
        document.location = document.location.href.split("#")[0] + "#" + id;
      }
      
      this.showItem(id);
    },
    showItem: function(id) {
      var target = $(id);
      if (target != null) {
        
        // Delay a moment before showing the item, so the browser window doesn't jump to the item element.
        setTimeout(function() {
          this.hideActiveItem();
          this.activeItem = target;
          target.show();
          target.addClassName("active");
          var meta = target.down(".meta");
          if (meta) {
            var nowPlaying = new Element("p").addClassName("playing").update("Now Playing");
            meta.insert({top: nowPlaying});
          }
          this.slide.down("." + id).addClassName("active");
          
          this.outer.setStyle({"visibility": "visible"});
        }.bind(this), 1);
      }
    },
    hideActiveItem: function() {
      if (this.activeItem == null) return;
      var playing = this.activeItem.down(".playing");
      if (playing) playing.remove();
      this.activeItem.hide();
      this.slide.down("." + this.activeItem.getAttribute("id")).removeClassName("active");
    },
    onNextClick: function(e) {
      e.preventDefault();
      this.slideNext();
    },
    onPreviousClick: function(e) {
      e.preventDefault();
      this.slidePrevious();
    },
    updateDisabled: function() {
      if (Math.abs(this.offSet) >= this.slide.offsetWidth - this.visibleWidth) {
        this.nextDisabled = true;
        this.nextButton.addClassName("next_disabled");
      } else {
        this.nextDisabled = false;
        this.nextButton.removeClassName("next_disabled");
      }
      if (Math.abs(this.offSet) <= 0) {
        this.previousDisabled = true;
        this.previousButton.addClassName("previous_disabled");
      } else {
        this.previousDisabled = false;
        this.previousButton.removeClassName("previous_disabled");
      }
    },
    slideNext: function() {
      if (this.nextDisabled) return;
      new Effect.Morph(this.slide, {
        style:'left:' + String(this.offSet -= this.visibleWidth) + "px",
        duration:this.transDuration,
        transition:Effect.Transitions.sinoidal
      });
      this.updateDisabled();
    },
    slidePrevious: function() {
      if (this.previousDisabled) return;
      new Effect.Morph(this.slide, {
        style:'left:' + String(this.offSet += this.visibleWidth) + "px",
        duration:this.transDuration,
        transition:Effect.Transitions.sinoidal
      });
      this.updateDisabled();
    }
  });
