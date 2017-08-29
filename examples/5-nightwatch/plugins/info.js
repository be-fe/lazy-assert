exports.command = function (cssSelector, options, callback) {
    var self = this;
    if (!callback) {
        callback = options;
        options = {};
    }
    callback = callback.bind(self);


    var getAttr = function (elementId, attrName, callback) {
        // console.log(elementId, attrName);
        self.elementIdAttribute(elementId, attrName, function (result) {
            callback(result);
        });
    };

    this.execute(function (cssSelector, options) {
            var elem = document.querySelector(cssSelector);

            if (elem) {
                var node = {attr: {}, text: elem.innerText};

                if (options.attr) {
                    // If options.attr is set, use it to generate the node.attr
                    if (typeof options.attr === 'string') {
                        node.attr[options.attr] = elem.getAttribute(options.attr);
                    }
                    else {
                        options.attr.forEach(function (attr) {
                            node.attr[attr] = elem.getAttribute(attr);
                        });
                    }
                }
                else {
                    // Otherwise, we simply wrap every attributes for the target node
                    for (var i = 0; i < elem.attributes.length; i++) {
                        node.attr[elem.attributes[i].name] = elem.attributes[i].value;
                    }
                }

                if (options.style) {
                    node.style = {};

                    var elementStyle = elem.style;
                    var computedStyle = window.getComputedStyle(elem, null);

                    if (typeof options.style === 'string') {
                        node.style[options.style] = '(' + elementStyle[options.style] + ') > (' + computedStyle[options.style] + ')'
                    }
                    else {
                        options.style.forEach(function (style) {
                            node.style[style] = '(' + elementStyle[style] + ') > (' + computedStyle[style] + ')'
                        });
                    }

                }

                return node;
            }
            else {
                return undefined;
            }

        }, [cssSelector, options],
        function (result) {
            callback(result.value);
        }
    );

    return this;
};