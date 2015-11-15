
/*  =BrowserDetect
  -----------------------------------------------
    KUDOS: http://www.quirksmode.org/js/detect.html
  -----------------------------------------------  */
  var BrowserDetect = {
    unknownBrowser: "An unknown browser",
    unknownVersion: "An unknown version",
  
    init: function () {
      this.browser = this.searchString(this.dataBrowser) || this.unknownBrowser;
      this.version = this.searchVersion(navigator.userAgent)
        || this.searchVersion(navigator.appVersion)
        || this.unknownVersion;
    },
    searchString: function (data) {
      for (var i=0;i<data.length;i++)  {
        var dataString = data[i].string;
        var dataProp = data[i].prop;
        this.versionSearchString = data[i].versionSearch || data[i].identity;
        if (dataString) {
          if (dataString.indexOf(data[i].subString) != -1)
            return data[i].identity;
        }
        else if (dataProp)
          return data[i].identity;
      }
    },
    searchVersion: function (dataString) {
      var index = dataString.indexOf(this.versionSearchString);
      if (index == -1) return;
      return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
      {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari"
      },
      {
        prop: window.opera,
        identity: "Opera"
      },
      {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
      },
      {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
      }
    ]
  };
  BrowserDetect.init();

/*  =Page
  -----------------------------------------------  */
  var Page = {
    initialize: function() {
      // Indicate to the style sheets that the page has finished loading (only relevant on the video page)
      $$("html")[0].removeClassName("loading");
      
      // Add a text manager to the page
      $$("#content").each(function(nextElement) {
        new TextManager(nextElement);
      }.bind(this));
      
      // Show the page shadow, when the mouse is over the main nav
      this.initPageShadow();
      
      // IE 6 doesn't suppport li:hover, so simulate it with a class name
      if (BrowserDetect.browser == "Explorer" && BrowserDetect.version < 7) {
        $$("#nav > ul > li").each(function(listItem) {
          if (listItem.hasClassName("selected")) {
            listItem.down("a.level_1 span").addClassName("selected");
          }
          listItem.observe("mouseover", function(e) {
            if (Event.within(e, [this])) return;
            this.addClassName("hover");
            this.down("a.level_1 span").addClassName("hover");
          }.bindAsEventListener(listItem));
          listItem.observe("mouseout", function(e) {
            if (Event.within(e, [this])) return;
            this.removeClassName("hover");
            this.down("a.level_1 span").removeClassName("hover");
          }.bindAsEventListener(listItem));
        });
      }
    },
    initPageShadow: function() {
      var bodyElement = $$("body")[0];
      var pageShadow = new Element("div");
      pageShadow.setStyle({
        "opacity": "0"
      });
      pageShadow.hide();
      pageShadow.setAttribute("id", "shadow");
      var nav = $("nav");
      nav.insert({before: pageShadow});
      nav.observe("mouseover", function(e) {
        if (Event.within(e, [nav])) return;
        pageShadow.show();
        
        // IE6 ignores the CSS height if it's set to 100%, so set it manually using pixels.
        if (BrowserDetect.browser == "Explorer" && BrowserDetect.version < 7) {
          pageShadow.setStyle({
            "height": document.viewport.getDimensions().height + "px"
          });
        }

        bodyElement.addClassName("over_nav");
        effect = new Effect.Morph(pageShadow, { style:{opacity: "0.5"}, duration: 0.125 });
      }.bindAsEventListener(this));
      nav.observe("mouseout", function(e) {
        if (Event.within(e, [nav])) return;
        effect.cancel();
        bodyElement.removeClassName("over_nav");
        pageShadow.setStyle({
          "opacity": "0"
        });
        pageShadow.hide();
      }.bindAsEventListener(this));
    }
  };
  document.observe("dom:loaded", Page.initialize.bind(Page));

/*  =Cookie
  -----------------------------------------------
  KUDOS: http://www.red91.com/2008/02/04/cookies-persistence-javascript
  ----------------------------------------------- */
  var Cookie = {
    set: function(name, value, daysToExpire) {
      if (daysToExpire == null || daysToExpire == undefined) {
        daysToExpire = 365 * 2;
      }
      var expire = '';
      if (daysToExpire != undefined) {
        var d = new Date();
        d.setTime(d.getTime() + (86400000 * parseFloat(daysToExpire)));
        expire = '; expires=' + d.toGMTString();
      }
      return (document.cookie = escape(name) + '=' + escape(value || '') + expire + '; path=/');
    },
    get: function(name) {
      var cookie = document.cookie.match(new RegExp('(^|;)\\s*' + escape(name) + '=([^;\\s]*)'));
      return (cookie ? unescape(cookie[2]) : null);
    }
  };

/*  =TextManager
  ----------------------------------------------- */
  var TextManager = Class.create({
    SIZE: {
      SMALL   : "content_small",
      MEDIUM  : "content_medium",
      LARGE   : "content_large"
    },
    element: null,
    buttons: null,
    initialize: function(element) {
      if (!element) return;
      this.element = element;
      this.buttons = $A([]);
    
      this.render();
      var size = Cookie.get("textsize");
      if (size == null) size = this.SIZE.SMALL;
      this.resizeText(size);
    },
    render: function() {
      var container = new Element("div").addClassName("text_manager");
      var buttonContainer = new Element("ul");
      container.appendChild(buttonContainer);
      this.element.appendChild(container);
      for (var prop in this.SIZE) {
        var button = new TextManager.Button(this.resizeText.bind(this), buttonContainer, this.SIZE[prop], prop.toLowerCase());
        this.buttons.push(button);
      }
    },
    resizeText: function(size) {
      if (size == null || size == "") size = this.SIZE.SMALL;
      for (var prop in this.SIZE) {
        if (prop != size) this.element.removeClassName(this.SIZE[prop]);
      }
      this.element.addClassName(size);
      Cookie.set("textsize", size);
      this.buttons.each(function(nextButton) {
        if (nextButton.size == size) {
          nextButton.activate();
        } else {
          nextButton.deactivate();
        }
      }.bind(this));
    }
  });
  TextManager.Button = Class.create({
    size    : null,
    element : null,
    callback: null,
    initialize: function(callback, container, size, label) {
      this.size = size;
      this.callback = callback;
    
      this.element = new Element("li").addClassName(label);
      container.appendChild(this.element);
      var link = new Element("a", {"href": "#" + label});
      link.update("A");
      this.element.appendChild(link);
      link.observe("click", this.onClick.bindAsEventListener(this));
    },
    activate: function() {
      this.element.addClassName("selected");
    },
    deactivate: function() {
      this.element.removeClassName("selected");
    },
    onClick: function(evt) {
      evt.preventDefault();
      this.callback(this.size);
    }
  });


/*  =Get Target (Event)
  -----------------------------------------------
    An extention to prototype that returns the target or "related" target, depending on the type of event.
  -----------------------------------------------  */
  if (typeof Event.getTarget == 'undefined') {
    Object.extend(Event, {
      getTarget: function(event) {
        var target = null;
        if (event.type == "mouseover") {
          target = $((event.relatedTarget) ? event.relatedTarget : event.fromElement);
        } else if (event.type == "mouseout") {
          target = $((event.relatedTarget) ? event.relatedTarget : event.toElement);
        } else {
          if (event.target != null) {
            target = $(event.target);
          }
        }
        return target;
      }
    });
  }

/*  =Within (Event)
  -----------------------------------------------
    Checks if an event happened within the element(s) or any descendants.

    KUDOS: http://jquery.com/
  -----------------------------------------------  */
  if (typeof Event.withinElement == 'undefined') {
    Object.extend(Event, {
      within: function(evt, elements) {
        var elements = $A([elements]).flatten();  // Handle single elements
        var within = elements.collect(function(nextElement) {
          return Event.withinElement(evt, nextElement);
        }.bind(this));
        return within.any();
      },
      withinElement: function(evt, element) {
        if (element == null) return false;

        // Check if mouse(over|out) are still within the same parent element
        var parent = Event.getTarget(evt);
        // Traverse up the tree
        while ( parent && parent != element ) try { parent = parent.parentNode; } catch(error) { parent = element; }
        // Return true if we actually just moused on to a sub-element
        return parent === element;
      }
    });
  }

/*  =Form Validation
  -----------------------------------------------  */
	var options = {
		immediate: true,
		onSubmit: false,
		focusOnError: false
	};
	
	var valid, form = false;
	
	if (form = $('contact')) {
		valid = new Validation('contact', options);
	} else if (form = $('request_info')) {
		valid = new Validation('request_info', options);
	} else if (form = $('constant_contact')) {
		valid = new Validation('constant_contact', options);
	}
	
	if (form) {
		form.observe('submit', function(e, el) {
			var result = valid.validate();
			
			if (!result) {
				var output = '<div id="form-errors"><p class="validation-advice">One or more required fields is empty or contains an invalid value:</p><ul id="error-list">';
				
				$$(".validation-failed").each(function(item) {
					var li = item.readAttribute('title');
					if (li) {
						output += '<li>' + li + '</li>';
					}
				});
				
				output += '</ul></div>';
				
				var errors = false;
				
				if (errors = $('form-errors')) {
					errors.replace(output);
				} else {
					$$('.submit')[0].insert({before: output});
				}
				
				e.stop();
			}
		});
	}