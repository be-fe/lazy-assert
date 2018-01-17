var outputSrc = {
   "/src/Peek.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">var</span> utils = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./utils'</span>);\n\n<span class=\"hljs-built_in\">module</span>.exports = {\n    <span class=\"hljs-attr\">init</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">lazyAssert</span>) </span>{\n        </code></pre>",
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "peekKey",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": "<p> The peek key to be used in the final <a data-jsdef-link=\".assert\">.assert</a></p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "list",
                           "defHtml": " []",
                           "commentHtml": "<p> Used by <a data-jsdef-link=\".push\">.push</a></p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "set",
                           "defHtml": " {}",
                           "commentHtml": "<p> Used by <a data-jsdef-link=\".set\">.set</a></p>\n"
                        }
                     ],
                     "name": "instance",
                     "defHtml": " {}",
                     "commentHtml": ""
                  }
               ],
               "name": "Peek",
               "defHtml": " <a data-jsdef-prop=\"Class\">Class</a>",
               "commentHtml": ""
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n        <span class=\"hljs-keyword\">var</span> Peek = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(peekKey)</span> </span>{\n            <span class=\"hljs-keyword\">this</span>.peekKey = peekKey;\n            <span class=\"hljs-keyword\">this</span>.list = [];\n            <span class=\"hljs-keyword\">this</span>.map = {};\n        };\n\n</code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 18,
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "Peek.prototype",
               "defHtml": " {}",
               "commentHtml": ""
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>        Peek<span class=\"hljs-selector-class\">.prototype</span> = {\n            </code></pre>",
         "index": 4
      },
      {
         "lineStart": 20,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "value",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": "<p> the value to be peek as a step</p>\n<p> Using push means that you need to make sure that the order strictly follows your instruction</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "depthOrPlugin",
                     "defHtml": " <a data-jsdef-link=\".processValue.depthOrPlugin\">.processValue.depthOrPlugin</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "Peek.prototype.push",
               "defHtml": " <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"depthOrPlugin\">depthOrPlugin</a> =&gt; <a data-jsdef-prop=\"this\">this</a>",
               "commentHtml": ""
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>\n            push: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(value, depthOrPlugin)</span> </span>{\n                <span class=\"hljs-keyword\">this</span>.list.push(lazyAssert.prepareValue(value, depthOrPlugin));\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>;\n            },\n\n            </code></pre>",
         "index": 6
      },
      {
         "lineStart": 32,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "value",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": "<p> the value to be peek as a step</p>\n<p> Setting the key in the peek map does not rely on the order of your test steps\n However, make sure that it could overwrite some existing key by accident...\n If so, please use <a data-jsdef-link=\".forceSet\">.forceSet</a> instead</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "depthOrPlugin",
                     "defHtml": " <a data-jsdef-link=\".processValue.depthOrPlugin\">.processValue.depthOrPlugin</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "type",
                           "defHtml": " &apos;<a data-jsdef-prop=\"set-on-same-key\">set-on-same-key</a>&apos;",
                           "commentHtml": ""
                        }
                     ],
                     "name": "setOnSameKeyError",
                     "defHtml": " <a data-jsdef-prop=\"Error\">Error</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "Peek.prototype.set",
               "defHtml": " <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"depthOrPlugin\">depthOrPlugin</a> =&gt; <a data-jsdef-prop=\"this\">this</a> <a data-jsdef-prop=\"throws\">throws</a> <a data-jsdef-prop=\"setOnSameKeyError\">setOnSameKeyError</a>",
               "commentHtml": ""
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>\n            <span class=\"hljs-keyword\">set</span>: function (key, value, depthOrPluign) {\n                <span class=\"hljs-keyword\">if</span> (key <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">this</span>.map) {\n                    <span class=\"hljs-keyword\">throw</span> utils.newError(<span class=\"hljs-string\">'set-on-same-key'</span>, <span class=\"hljs-string\">'The key is used previously.'</span>);\n                }\n                <span class=\"hljs-keyword\">this</span>.map[key] = lazyAssert.prepareValue(value, depthOrPluign);\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>;\n            },\n\n            </code></pre>",
         "index": 8
      },
      {
         "lineStart": 53,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "Peek.prototype.forceSet",
               "defHtml": " <a data-jsdef-prop=\"key\">key</a>, <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"depthOrPlugin\">depthOrPlugin</a> =&gt; <a data-jsdef-prop=\"this\">this</a>",
               "commentHtml": "<p> Basically the same as <a data-jsdef-link=\".set\">.set</a>, except for it doesn&#39;t throw an error when setting an existing key</p>\n"
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>\n            forceSet: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(key, value, depthOrPlugin)</span> </span>{\n                <span class=\"hljs-keyword\">this</span>.map[key] = lazyAssert.prepareValue(value, depthOrPlugin);\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>;\n            },\n\n            </code></pre>",
         "index": 10
      },
      {
         "lineStart": 62,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> Finally, we wrap up everything and do an assertion using <a data-jsdef-link=\"lazyAssert.peek\">lazyAssert.peek</a>\n @.assert: () =&gt; undefined</p>\n"
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>\n            assert: function () {\n                lazyAssert.peek(<span class=\"hljs-keyword\">this</span>.peekKey, {\n                    <span class=\"hljs-built_in\">list</span>: <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">list</span>,\n                    <span class=\"hljs-built_in\">map</span>: <span class=\"hljs-keyword\">this</span>.<span class=\"hljs-built_in\">map</span>\n                }, <span class=\"hljs-number\">-1</span>);\n            }\n        };\n\n        <span class=\"hljs-keyword\">return</span> Peek;\n    }\n};</code></pre>",
         "index": 12
      }
   ],
   "/src/fake-fs.js": [
      {
         "type": "source",
         "html": "<pre><code>\nconsole.warn('[WARN] fs module <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> available, so please <span class=\"hljs-keyword\">use</span> .compare instead')\n\nvar fakeApis = <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>(target, apis) {\n    apis.forEach(<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>(apiName) {\n        target[apiName] = <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>() {\n            console.warn('[WARN] fs <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> accessible via lazy-assert <span class=\"hljs-keyword\">when</span> loaded without node env. <span class=\"hljs-keyword\">Function</span> <span class=\"hljs-title\">&lt;'</span> + apiName + '&gt; called <span class=\"hljs-keyword\">with</span> arguments : ', <span class=\"hljs-type\">arguments</span>);\n        };\n    });\n};\n\nmodule.exports = fakeApis({}, [\n    <span class=\"hljs-symbol\">'existsSync</span>',\n    <span class=\"hljs-symbol\">'mkdirSync</span>',\n    <span class=\"hljs-symbol\">'statSync</span>',\n    <span class=\"hljs-symbol\">'writeFileSync</span>',\n    <span class=\"hljs-symbol\">'readFileSync</span>'\n]);</code></pre>",
         "index": 0
      }
   ],
   "/src/index.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">var</span> assert = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'assert'</span>);\n<span class=\"hljs-keyword\">var</span> utils = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./utils'</span>);\n\n<span class=\"hljs-keyword\">try</span> {\n    <span class=\"hljs-keyword\">var</span> fs = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'fs'</span>);\n}\n<span class=\"hljs-keyword\">catch</span> (ex) {\n    fs = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./fake-fs'</span>);\n}\n\n</code></pre>",
         "index": 0
      },
      {
         "lineStart": 11,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazyAssert",
               "defHtml": " {}",
               "commentHtml": ""
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-selector-tag\">var</span> lazyAssert = {\n    </code></pre>",
         "index": 2
      },
      {
         "lineStart": 15,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "path",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> the target test script that is being run</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "type",
                           "defHtml": " &apos;<a data-jsdef-prop=\"no-test-found\">no-test-found</a>&apos;",
                           "commentHtml": ""
                        }
                     ],
                     "name": "noTestScriptFound",
                     "defHtml": " <a data-jsdef-prop=\"Error\">Error</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "lazyAssert.setLocation",
               "defHtml": " <a data-jsdef-prop=\"path\">path</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a> <a data-jsdef-prop=\"throws\">throws</a> <a data-jsdef-prop=\"noTestScriptFound\">noTestScriptFound</a>",
               "commentHtml": "<p> This is require to be run before any assertion can be made.</p>\n<p> It will be used to create report folder, e.g. <code>/path/to/your/test.js.report</code>\n You will expect to see <code>peek-key.actual</code> and <code>peek-key.expected</code> files in <code>report</code> folders</p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>\n    setLocation: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(path)</span></span> {\n        lazyAssert.testLocation = <span class=\"hljs-built_in\">path</span>;\n    },\n\n    </code></pre>",
         "index": 4
      },
      {
         "lineStart": 31,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazyAssert.stringify",
               "defHtml": " <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"depthOrPlugin\">depthOrPlugin</a> =&gt; <a data-jsdef-prop=\"result\">result</a>",
               "commentHtml": ""
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>\n    stringify: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">value, depthOrPlugin</span>) </span>{\n        <span class=\"hljs-keyword\">var</span> peekValue = <span class=\"hljs-keyword\">this</span>.prepareValue(value, depthOrPlugin);\n        <span class=\"hljs-keyword\">return</span> lazyAssert.innerStringify(peekValue).replace(<span class=\"hljs-regexp\">/^\\s+/</span>, <span class=\"hljs-string\">''</span>).replace(<span class=\"hljs-regexp\">/\\s+$/</span>, <span class=\"hljs-string\">''</span>);\n    },\n\n    <span class=\"hljs-attr\">prepareValue</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">value, depthOrPlugin</span>) </span>{\n        <span class=\"hljs-keyword\">var</span> peekValue = lazyAssert.processValue(value, depthOrPlugin);\n        lazyAssert.postValue(value, depthOrPlugin);\n        <span class=\"hljs-keyword\">return</span> peekValue;\n    },\n\n    <span class=\"hljs-attr\">repeat</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">str, count</span>) </span>{\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Array</span>(count + <span class=\"hljs-number\">1</span>).join(str);\n    },\n\n    </code></pre>",
         "index": 6
      },
      {
         "lineStart": 50,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazyAssert.plugins",
               "defHtml": " <a data-jsdef-link=\".plugins\">.plugins</a>",
               "commentHtml": ""
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-attribute\">plugins</span>: {},\n\n<span class=\"undefined\">    </span></code></pre>",
         "index": 8
      },
      {
         "lineStart": 55,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "name",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": "<p> plugin&#39;s name to be referenced</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [
                              {
                                 "level": 10,
                                 "children": [
                                    {
                                       "level": 14,
                                       "children": [],
                                       "name": "value",
                                       "defHtml": " <a data-jsdef-prop=\"object\">object</a> | <a data-jsdef-prop=\"Array\">Array</a>",
                                       "commentHtml": "<p> This is the current value or array being processed</p>\n"
                                    },
                                    {
                                       "level": 14,
                                       "children": [],
                                       "name": "context",
                                       "defHtml": " {}",
                                       "commentHtml": "<p> This is the current context that for the current run</p>\n"
                                    },
                                    {
                                       "level": 14,
                                       "children": [],
                                       "name": "result",
                                       "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                                       "commentHtml": "<p> result is the returned value that will be set for <a data-jsdef-link=\".innerStringify\">.innerStringify</a></p>\n"
                                    }
                                 ],
                                 "name": "process",
                                 "defHtml": " (<a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-link=\".processValue\">.processValue</a>, <a data-jsdef-prop=\"context\">context</a>) =&gt; <a data-jsdef-prop=\"result\">result</a>",
                                 "commentHtml": ""
                              },
                              {
                                 "level": 10,
                                 "children": [
                                    {
                                       "level": 14,
                                       "children": [],
                                       "name": "value",
                                       "defHtml": " <a data-jsdef-prop=\"object\">object</a> | <a data-jsdef-prop=\"Array\">Array</a>",
                                       "commentHtml": "<p> This is the current value being post-processed</p>\n<p> Normally, post processing is for cleaning up original value,\n if you do something dirty on the value</p>\n"
                                    }
                                 ],
                                 "name": "post",
                                 "defHtml": " (<a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-link=\".postValue\">.postValue</a>, <a data-jsdef-prop=\"context\">context</a>) =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
                                 "commentHtml": ""
                              }
                           ],
                           "name": "processor",
                           "defHtml": " {}",
                           "commentHtml": ""
                        }
                     ],
                     "name": "processors",
                     "as": "lazyAssert.plugins",
                     "defHtml": " {<a data-jsdef-prop=\"name\">name</a>: <a data-jsdef-prop=\"processor\">processor</a>}   <a data-jsdef-as=\"lazyAssert.plugins\">lazyAssert.plugins</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "lazyAssert.plugin",
               "defHtml": " <a data-jsdef-prop=\"processors\">processors</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
               "commentHtml": ""
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>\n    plugin: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">processors</span>) </span>{\n        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> name <span class=\"hljs-keyword\">in</span> processors) {\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> processors[name] === <span class=\"hljs-string\">'function'</span>) {\n                <span class=\"hljs-keyword\">this</span>.plugins[name] = {\n                    <span class=\"hljs-string\">'--[[lazy_plugin_name]]--'</span>: name,\n                    <span class=\"hljs-attr\">process</span>: processors[name].bind(lazyAssert),\n                    <span class=\"hljs-attr\">post</span>: <span class=\"hljs-literal\">null</span>\n                };\n            }\n            <span class=\"hljs-keyword\">else</span> {\n                <span class=\"hljs-keyword\">this</span>.plugins[name] = {\n                    <span class=\"hljs-string\">'--[[lazy_plugin_name]]--'</span>: name,\n                    <span class=\"hljs-attr\">process</span>: processors[name].process.bind(lazyAssert),\n                    <span class=\"hljs-attr\">post</span>: processors[name].post.bind(lazyAssert)\n                }\n            }\n\n            <span class=\"hljs-keyword\">this</span>.plugins[name].process.lazyPluginName = name;\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">this</span>.plugins[name].post) {\n                <span class=\"hljs-keyword\">this</span>.plugins[name].lazyPluginName = name;\n            }\n        }\n    },\n\n    <span class=\"hljs-attr\">innerStringify</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">value, indentation</span>) </span>{\n        indentation = indentation || <span class=\"hljs-number\">0</span>;\n\n        <span class=\"hljs-keyword\">var</span> line = <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">content</span>) </span>{\n            <span class=\"hljs-keyword\">return</span> lazyAssert.repeat(<span class=\"hljs-string\">'  '</span>, indentation + <span class=\"hljs-number\">1</span>) + content;\n        };\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> value === <span class=\"hljs-string\">'number'</span>) {\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-built_in\">isNaN</span>(value)) {\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'NaN\\n'</span>;\n            }\n            <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-built_in\">isFinite</span>(value)) {\n                <span class=\"hljs-keyword\">if</span> (value &gt; <span class=\"hljs-number\">0</span>) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'Infinity\\n'</span>;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'-Infinity\\n'</span>;\n                }\n            }\n        }\n\n        <span class=\"hljs-keyword\">switch</span> (<span class=\"hljs-keyword\">typeof</span> value) {\n            <span class=\"hljs-keyword\">case</span> <span class=\"hljs-string\">'object'</span>:\n                <span class=\"hljs-keyword\">if</span> (!value) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'null\\n'</span>;\n                }\n\n                <span class=\"hljs-keyword\">var</span> result;\n                <span class=\"hljs-keyword\">var</span> keys = [];\n\n                <span class=\"hljs-keyword\">if</span> (value <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Array</span>) {\n                    result = <span class=\"hljs-string\">'[]\\n'</span>;\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; value.length; i++) {\n                        keys.push(i);\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (value <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">RegExp</span>) {\n                    result = value.toString() + <span class=\"hljs-string\">'\\n'</span>;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    result = <span class=\"hljs-string\">'{}\\n'</span>;\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> value) {\n                        keys.push(key);\n                    }\n                }\n\n                keys.sort(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">a, b</span>) </span>{\n                    <span class=\"hljs-keyword\">return</span> a &gt; b ? <span class=\"hljs-number\">1</span> :\n                        a &lt; b ? <span class=\"hljs-number\">-1</span> : <span class=\"hljs-number\">0</span>;\n                });\n                keys.forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">key</span>) </span>{\n                    result += line(key + <span class=\"hljs-string\">' : '</span> + lazyAssert.innerStringify(value[key], indentation + <span class=\"hljs-number\">1</span>));\n                });\n\n                <span class=\"hljs-keyword\">return</span> result;\n            <span class=\"hljs-keyword\">default</span>:\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">JSON</span>.stringify(value) + <span class=\"hljs-string\">'\\n'</span>;\n        }\n    },\n\n    </code></pre>",
         "index": 10
      },
      {
         "lineStart": 153,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "value",
                     "defHtml": " <a data-jsdef-prop=\"object\">object</a> | <a data-jsdef-prop=\"Array\">Array</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "plugin",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a> | {<a data-jsdef-prop=\"post\">post</a>: <a data-jsdef-link=\".plugin.post\">.plugin.post</a>} | <a data-jsdef-link=\".plugin.post\">.plugin.post</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "context",
                     "defHtml": " {<a data-jsdef-prop=\"plugins\">plugins</a>: <a data-jsdef-link=\".plugins\">.plugins</a>}",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "currentPlugin",
                     "defHtml": " <a data-jsdef-link=\".plugins.post\">.plugins.post</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "lazyAssert.postValue",
               "defHtml": " <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"plugin\">plugin</a>, <a data-jsdef-prop=\"context\">context</a>, <a data-jsdef-prop=\"currentPlugin\">currentPlugin</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
               "commentHtml": ""
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>\n    postValue: function (value, <span class=\"hljs-keyword\">plugin</span>, context) {\n        context = context || {\n            plugins: this.plugins\n        };\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">plugin</span> === 'string') {\n            <span class=\"hljs-keyword\">plugin</span> = lazyAssert.plugins[<span class=\"hljs-keyword\">plugin</span>];\n        }\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">plugin</span> === 'object') {\n            <span class=\"hljs-keyword\">plugin</span> = <span class=\"hljs-keyword\">plugin</span>.<span class=\"hljs-keyword\">post</span>;\n        }\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">plugin</span> === 'function') {\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> value !== 'object' || !value) {\n                <span class=\"hljs-keyword\">return</span> value;\n            }\n\n            <span class=\"hljs-keyword\">plugin</span>(value, lazyAssert.processValue, context, <span class=\"hljs-keyword\">plugin</span>);\n        }\n    },\n\n    </code></pre>",
         "index": 12
      },
      {
         "lineStart": 183,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "value",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "depthOrPlugin",
                     "defHtml": " <a data-jsdef-prop=\"number\">number</a> | <a data-jsdef-prop=\"string\">string</a> | {<a data-jsdef-prop=\"process\">process</a>: <a data-jsdef-link=\".plugin.process\">.plugin.process</a>} | <a data-jsdef-link=\".plugin.process\">.plugin.process</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "context",
                     "defHtml": " {<a data-jsdef-prop=\"plugins\">plugins</a>: <a data-jsdef-link=\".plugins\">.plugins</a>, <a data-jsdef-prop=\"currentPlugin\">currentPlugin</a>: <a data-jsdef-link=\".plugins.processor\">.plugins.processor</a>}",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "currentPlugin",
                     "defHtml": " <a data-jsdef-link=\".plugins.process\">.plugins.process</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "result",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": "<p> The returned result is for <a data-jsdef-link=\".innerStringify\">.innerStringify</a></p>\n"
                  }
               ],
               "name": "lazyAssert.processValue",
               "defHtml": " <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"depthOrPlugin\">depthOrPlugin</a>, <a data-jsdef-prop=\"context\">context</a>, <a data-jsdef-prop=\"currentPlugin\">currentPlugin</a> =&gt; <a data-jsdef-prop=\"result\">result</a>",
               "commentHtml": ""
            }
         ],
         "index": 13
      },
      {
         "type": "source",
         "html": "<pre><code>\n    processValue: function (<span class=\"hljs-keyword\">value</span>, depthOrPlugin, context) {\n        context = context || {\n            plugins: <span class=\"hljs-keyword\">this</span>.plugins\n        };\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> depthOrPlugin === <span class=\"hljs-string\">'string'</span>) {\n            depthOrPlugin = lazyAssert.plugins[depthOrPlugin];\n        }\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> depthOrPlugin === <span class=\"hljs-string\">'object'</span>) {\n            depthOrPlugin = depthOrPlugin.process;\n        }\n\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> depthOrPlugin === <span class=\"hljs-string\">'function'</span>) {\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">value</span> !== <span class=\"hljs-string\">'object'</span> || !<span class=\"hljs-keyword\">value</span>) {\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">value</span>;\n            }\n\n            <span class=\"hljs-keyword\">return</span> depthOrPlugin(<span class=\"hljs-keyword\">value</span>, lazyAssert.processValue, context, depthOrPlugin);\n        }\n\n</code></pre>",
         "index": 14
      },
      {
         "type": "comment",
         "lineStart": 215,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 非 object 的config, 走 depth = number 的方式进行后续操作</p>\n"
            }
         ],
         "index": 15
      },
      {
         "type": "source",
         "html": "<pre><code>        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> depthOrPlugin === <span class=\"hljs-string\">'undefined'</span>) {\n            depthOrPlugin = <span class=\"hljs-number\">5</span>;\n        }\n\n        <span class=\"hljs-keyword\">switch</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">value</span>) {\n            <span class=\"hljs-keyword\">case</span> <span class=\"hljs-string\">'object'</span>:\n                <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">value</span>) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">value</span>;\n                }\n\n                <span class=\"hljs-keyword\">if</span> (!depthOrPlugin) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'_[[[reference: object]]]_'</span>;\n                }\n\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">value</span> instanceof Array) {\n                    <span class=\"hljs-keyword\">var</span> result = [];\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; <span class=\"hljs-keyword\">value</span>.length; i++) {\n                        result[i] = lazyAssert.processValue(<span class=\"hljs-keyword\">value</span>[i], depthOrPlugin - <span class=\"hljs-number\">1</span>, context);\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">value</span> instanceof RegExp) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">value</span>;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">var</span> result = {};\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">value</span>) {\n                        result[key] = lazyAssert.processValue(<span class=\"hljs-keyword\">value</span>[key], depthOrPlugin - <span class=\"hljs-number\">1</span>, context);\n                    }\n                }\n                <span class=\"hljs-keyword\">return</span> result;\n            <span class=\"hljs-keyword\">case</span> <span class=\"hljs-string\">'function'</span>:\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'_[[[function]]]_'</span>;\n            <span class=\"hljs-keyword\">default</span>:\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">value</span>;\n        }\n    },\n\n    </code></pre>",
         "index": 16
      },
      {
         "lineStart": 253,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "peekKey",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> This will set up the peek key (the peek file) for the test</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "value",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": "<p> This is the value for peeking</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "depthOrPlugin",
                     "defHtml": " <a data-jsdef-link=\".processValue.depthOrPlugin\">.processValue.depthOrPlugin</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "lazyAssert.peek",
               "defHtml": " <a data-jsdef-prop=\"peekKey\">peekKey</a>, <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"depthOrPlugin\">depthOrPlugin</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
               "commentHtml": ""
            }
         ],
         "index": 17
      },
      {
         "type": "source",
         "html": "<pre><code>\n    peek: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(peekKey, value, depthOrPlugin)</span> </span>{\n        lazyAssert.checkArguments(peekKey, <span class=\"hljs-literal\">true</span>);\n\n        <span class=\"hljs-keyword\">var</span> paths = lazyAssert.getReportPaths(peekKey);\n\n        <span class=\"hljs-keyword\">var</span> expected = <span class=\"hljs-string\">''</span>;\n        <span class=\"hljs-keyword\">var</span> actual = <span class=\"hljs-keyword\">this</span>.stringify(value, depthOrPlugin);\n\n        <span class=\"hljs-keyword\">if</span> (!fs.existsSync(paths.expect)) {\n            utils.write(paths.expect, <span class=\"hljs-string\">''</span>);\n            expected = <span class=\"hljs-string\">''</span>;\n        }\n        <span class=\"hljs-keyword\">else</span> {\n            expected = utils.read(paths.expect);\n        }\n\n        utils.write(paths.actual, actual);\n        assert.equal(\n            actual, expected,\n            (<span class=\"hljs-keyword\">this</span>.testLocation ? <span class=\"hljs-keyword\">this</span>.testLocation + <span class=\"hljs-string\">' : '</span> : <span class=\"hljs-string\">''</span>)\n            + (<span class=\"hljs-keyword\">this</span>._hint ? <span class=\"hljs-keyword\">this</span>._hint + <span class=\"hljs-string\">' : '</span> : <span class=\"hljs-string\">''</span>)\n            + peekKey\n        );\n    },\n\n    hint: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(hint)</span> </span>{\n        <span class=\"hljs-keyword\">this</span>._hint = hint;\n    },\n\n    </code></pre>",
         "index": 18
      },
      {
         "lineStart": 289,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "peekKey",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> is for showing some hint about which compare broke.</p>\n<p> this arg is not used in report file creation as compare is meant to be run\n in fileless scenario</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "actualTargetValue",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": "<p> the actual value</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "expectedPreparedValue",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": "<p> different from &quot;an actual value&quot;, it refers to the prepared value from an actual value</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "depthOrPlugin",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a> | <a data-jsdef-prop=\"func\">func</a> | <a data-jsdef-prop=\"number\">number</a>",
                     "commentHtml": "<p> see <a data-jsdef-link=\".processValue.depthOrPlugin\">.processValue.depthOrPlugin</a></p>\n"
                  }
               ],
               "name": "lazyAssert.compare",
               "defHtml": " <a data-jsdef-prop=\"peekKey\">peekKey</a>, <a data-jsdef-prop=\"actualTargetValue\">actualTargetValue</a>, <a data-jsdef-prop=\"expectedPreparedValue\">expectedPreparedValue</a>, <a data-jsdef-prop=\"depthOrPlugin\">depthOrPlugin</a> =&gt; <a data-jsdef-prop=\"boolean\">boolean</a>",
               "commentHtml": "<p> This function will compare the prepared value of actual target value with the expected prepared value.\n If failed, output the prepared value of the actual target value.</p>\n<p> So that, you can simple copy &amp; paste the output to your test case.\n With minimal alteration, you wrote your test. ;)</p>\n"
            }
         ],
         "index": 19
      },
      {
         "type": "source",
         "html": "<pre><code>\n    compare: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(peekKey, actualTargetValue, expectedPreparedValue, depthOrPlugin)</span> </span>{\n        lazyAssert.checkArguments(peekKey, <span class=\"hljs-literal\">false</span>);\n\n        <span class=\"hljs-keyword\">var</span> actualString = utils.trim(lazyAssert.stringify(actualTargetValue, depthOrPlugin));\n        <span class=\"hljs-keyword\">var</span> expectedString = utils.trim(lazyAssert.innerStringify(expectedPreparedValue));\n\n</code></pre>",
         "index": 20
      },
      {
         "type": "comment",
         "lineStart": 312,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;@@d&#39;);</p>\n"
            }
         ],
         "index": 21
      },
      {
         "type": "comment",
         "lineStart": 313,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;&quot;&#39; + actualString + &#39;&quot;&#39;);</p>\n"
            }
         ],
         "index": 22
      },
      {
         "type": "comment",
         "lineStart": 314,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;&quot;&#39; + expectedString + &#39;&quot;&#39;);</p>\n"
            }
         ],
         "index": 23
      },
      {
         "type": "comment",
         "lineStart": 315,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(actualString === expectedString);</p>\n"
            }
         ],
         "index": 24
      },
      {
         "type": "source",
         "html": "<pre><code>\n        <span class=\"hljs-keyword\">if</span> (actualString !== expectedString) {\n            lazyAssert.warn(peekKey, <span class=\"hljs-string\">'did not match the expected value, the actual prepared value is : '</span>);\n            <span class=\"hljs-built_in\">console</span>.warn(<span class=\"hljs-built_in\">JSON</span>.stringify(lazyAssert.prepareValue(actualTargetValue, depthOrPlugin), <span class=\"hljs-literal\">null</span>, <span class=\"hljs-number\">2</span>));\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">false</span>;\n        }\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n    },\n\n    <span class=\"hljs-attr\">warn</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">peekKey, message</span>) </span>{\n        <span class=\"hljs-built_in\">console</span>.warn(<span class=\"hljs-string\">'[WARN] '</span> + (<span class=\"hljs-keyword\">this</span>._hint ? <span class=\"hljs-keyword\">this</span>._hint + <span class=\"hljs-string\">' :'</span> : <span class=\"hljs-string\">''</span>) + <span class=\"hljs-string\">' peek &lt;'</span> + peekKey + <span class=\"hljs-string\">'&gt; '</span> + message);\n    },\n\n    </code></pre>",
         "index": 25
      },
      {
         "lineStart": 329,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazyAssert.assertCompare",
               "defHtml": " <a data-jsdef-prop=\"function\">function</a>",
               "commentHtml": "<p> Almost the same as <a data-jsdef-link=\".compare\">.compare</a>, except for that it throw an AssertionError instead of return true/false.</p>\n"
            }
         ],
         "index": 26
      },
      {
         "type": "source",
         "html": "<pre><code>\n    assertCompare: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">peekKey, actualTargetValue, expectedPreparedValue, depthOrPlugin</span>) </span>{\n        lazyAssert.checkArguments(peekKey, <span class=\"hljs-literal\">false</span>);\n\n        <span class=\"hljs-keyword\">var</span> actualString = utils.trim(lazyAssert.stringify(actualTargetValue, depthOrPlugin));\n        <span class=\"hljs-keyword\">var</span> expectedString = utils.trim(lazyAssert.innerStringify(expectedPreparedValue));\n\n        <span class=\"hljs-keyword\">if</span> (actualString !== expectedString) {\n            lazyAssert.warn(peekKey, <span class=\"hljs-string\">'did not match the expected value, the actual prepared value is : '</span>);\n            <span class=\"hljs-built_in\">console</span>.warn(<span class=\"hljs-built_in\">JSON</span>.stringify(lazyAssert.prepareValue(actualTargetValue, depthOrPlugin), <span class=\"hljs-literal\">null</span>, <span class=\"hljs-number\">2</span>));\n        }\n        assert.equal(actualString, expectedString, peekKey);\n    },\n\n    <span class=\"hljs-attr\">peekCompare</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">peekKey, actualTargetValue, depthOrPlugin</span>) </span>{\n        lazyAssert.checkArguments(peekKey);\n\n        <span class=\"hljs-keyword\">var</span> paths = lazyAssert.getReportPaths(peekKey);\n\n        <span class=\"hljs-keyword\">var</span> expectedPreparedValue;\n        <span class=\"hljs-keyword\">if</span> (!fs.existsSync(paths.expectJS)) {\n            utils.write(paths.expectJS, <span class=\"hljs-string\">'__tmp_expect__ = undefined;'</span>);\n            expectedPreparedValue = <span class=\"hljs-literal\">undefined</span>;\n        }\n        <span class=\"hljs-keyword\">else</span> {\n            expectedPreparedValue = <span class=\"hljs-built_in\">eval</span>(utils.read(paths.expectJS));\n        }\n\n        <span class=\"hljs-keyword\">var</span> actualString = utils.trim(lazyAssert.stringify(actualTargetValue, depthOrPlugin));\n        <span class=\"hljs-keyword\">var</span> expectedString = utils.trim(lazyAssert.innerStringify(expectedPreparedValue));\n\n        <span class=\"hljs-keyword\">var</span> actualPreparedValue = lazyAssert.prepareValue(actualTargetValue, depthOrPlugin);\n\n        utils.write(paths.actualJS,\n            <span class=\"hljs-string\">'__tmp_expect__ = '</span>\n            + <span class=\"hljs-built_in\">JSON</span>.stringify(actualPreparedValue, <span class=\"hljs-literal\">null</span>, <span class=\"hljs-number\">4</span>)\n            + <span class=\"hljs-string\">';'</span>\n        );\n\n        assert.equal(\n            actualString,\n            expectedString,\n            peekKey\n        );\n    },\n\n    <span class=\"hljs-attr\">validate</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">peekKey, actualTargetValue, validator</span>) </span>{\n        lazyAssert.checkArguments(peekKey, <span class=\"hljs-literal\">false</span>);\n\n        <span class=\"hljs-keyword\">var</span> result = lazyAssert.validators.validate(actualTargetValue, validator);\n\n        <span class=\"hljs-keyword\">if</span> (!result) {\n            lazyAssert.warn(peekKey, <span class=\"hljs-string\">'Validator returns undefined result'</span>);\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">false</span>;\n        }\n        <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (!result.result) {\n            lazyAssert.warn(peekKey, <span class=\"hljs-string\">'Validation failed with the given validator, the result is :'</span>);\n            lazyAssert.validators.printWarnings(result);\n\n            lazyAssert.validators.printDebug(actualTargetValue, validator, result);\n\n            lazyAssert.warn(peekKey, <span class=\"hljs-string\">'A default validator is : '</span>);\n            <span class=\"hljs-built_in\">console</span>.warn(<span class=\"hljs-built_in\">JSON</span>.stringify(lazyAssert.validators.summarizeTypeValidator(actualTargetValue), <span class=\"hljs-literal\">null</span>, <span class=\"hljs-number\">2</span>));\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">false</span>;\n        }\n\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n    },\n\n    </code></pre>",
         "index": 27
      },
      {
         "type": "source",
         "html": "<pre><code>\n    assertValidate: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">peekKey, actualTargetValue, validator</span>) </span>{\n        <span class=\"hljs-keyword\">var</span> result = lazyAssert.validate(peekKey, actualTargetValue, validator);\n\n        lazyAssert.ok(result, peekKey);\n    },\n\n    <span class=\"hljs-attr\">peekValidate</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">peekKey, actualTargetValue</span>) </span>{\n        lazyAssert.checkArguments(peekKey, <span class=\"hljs-literal\">true</span>);\n\n        <span class=\"hljs-keyword\">var</span> paths = lazyAssert.getReportPaths(peekKey);\n\n        <span class=\"hljs-keyword\">var</span> validator;\n\n        <span class=\"hljs-keyword\">if</span> (!fs.existsSync(paths.validator)) {\n            utils.write(paths.validator, <span class=\"hljs-string\">'__tmp_expect__ = \"undefined\";'</span>);\n            validator = <span class=\"hljs-string\">'undefined'</span>;\n        }\n        <span class=\"hljs-keyword\">else</span> {\n            validator = <span class=\"hljs-built_in\">eval</span>(utils.read(paths.validator));\n        }\n\n        <span class=\"hljs-keyword\">var</span> result = lazyAssert.validate(peekKey, actualTargetValue, validator);\n\n        <span class=\"hljs-keyword\">if</span> (!result) {\n            <span class=\"hljs-keyword\">var</span> suggest = lazyAssert.validators.summarizeTypeValidator(actualTargetValue);\n            utils.write(paths.suggest,\n                <span class=\"hljs-string\">'__tmp_expect__ = '</span>\n                + <span class=\"hljs-built_in\">JSON</span>.stringify(suggest, <span class=\"hljs-literal\">null</span>, <span class=\"hljs-number\">4</span>)\n                + <span class=\"hljs-string\">';'</span>\n            )\n        }\n        lazyAssert.ok(result, peekKey);\n    },\n\n    <span class=\"hljs-attr\">checkArguments</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">peekKey, checkTestLocation</span>) </span>{\n        <span class=\"hljs-keyword\">if</span> (checkTestLocation &amp;&amp; !<span class=\"hljs-keyword\">this</span>.testLocation) {\n            <span class=\"hljs-keyword\">throw</span> utils.newError(<span class=\"hljs-string\">'no-test-set'</span>, <span class=\"hljs-string\">'No test script set for this test.'</span>);\n        }\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> peekKey !== <span class=\"hljs-string\">'string'</span> || !peekKey) {\n            <span class=\"hljs-keyword\">throw</span> utils.newError(<span class=\"hljs-string\">'no-peek-key'</span>, <span class=\"hljs-string\">'No peek key set for this peek'</span>)\n        }\n    },\n\n    <span class=\"hljs-attr\">getReportPaths</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">peekKey</span>) </span>{\n        <span class=\"hljs-keyword\">var</span> reportPath = utils.j(<span class=\"hljs-keyword\">this</span>.testLocation + <span class=\"hljs-string\">'.report'</span>);\n        <span class=\"hljs-keyword\">var</span> expectPath = utils.j(reportPath, peekKey + <span class=\"hljs-string\">'.expected'</span>);\n        <span class=\"hljs-keyword\">var</span> actualPath = utils.j(reportPath, peekKey + <span class=\"hljs-string\">'.actual'</span>);\n        <span class=\"hljs-keyword\">var</span> expectJSPath = utils.j(reportPath, peekKey + <span class=\"hljs-string\">'.expected.js'</span>);\n        <span class=\"hljs-keyword\">var</span> actualJSPath = utils.j(reportPath, peekKey + <span class=\"hljs-string\">'.actual.js'</span>);\n        <span class=\"hljs-keyword\">var</span> suggestPath = utils.j(reportPath, peekKey + <span class=\"hljs-string\">'.suggest.js'</span>);\n        <span class=\"hljs-keyword\">var</span> validatorPath = utils.j(reportPath, peekKey + <span class=\"hljs-string\">'.validator.js'</span>);\n\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">report</span>: reportPath,\n            <span class=\"hljs-attr\">expect</span>: expectPath,\n            <span class=\"hljs-attr\">actual</span>: actualPath,\n            <span class=\"hljs-attr\">expectJS</span>: expectJSPath,\n            <span class=\"hljs-attr\">actualJS</span>: actualJSPath,\n            <span class=\"hljs-attr\">suggest</span>: suggestPath,\n            <span class=\"hljs-attr\">validator</span>: validatorPath\n        }\n    },\n\n    <span class=\"hljs-attr\">newPeek</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">peekKey</span>) </span>{\n        <span class=\"hljs-keyword\">var</span> peek = <span class=\"hljs-keyword\">new</span> Peek(peekKey);\n        <span class=\"hljs-keyword\">return</span> peek;\n    },\n};\n\n</code></pre>",
         "index": 28
      },
      {
         "type": "comment",
         "lineStart": 474,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> Loading Peek class</p>\n"
            }
         ],
         "index": 29
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attribute\">var Peek</span> = require(<span class=\"hljs-string\">'./Peek'</span>).init(lazyAssert);\n\n</code></pre>",
         "index": 30
      },
      {
         "type": "comment",
         "lineStart": 477,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> Loading utils</p>\n"
            }
         ],
         "index": 31
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-selector-tag\">require</span>(<span class=\"hljs-string\">'./lazy-utils'</span>)<span class=\"hljs-selector-class\">.load</span>(lazyAssert);\n<span class=\"hljs-selector-tag\">require</span>(<span class=\"hljs-string\">'./lazy-validators'</span>)<span class=\"hljs-selector-class\">.load</span>(lazyAssert);\n<span class=\"hljs-selector-tag\">require</span>(<span class=\"hljs-string\">'./lazy-wrap-node-assert'</span>)<span class=\"hljs-selector-class\">.load</span>(lazyAssert);\n\n</code></pre>",
         "index": 32
      },
      {
         "type": "comment",
         "lineStart": 482,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> Setting up preset plugins:</p>\n"
            }
         ],
         "index": 33
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-selector-tag\">lazyAssert</span><span class=\"hljs-selector-class\">.plugin</span>({\n    <span class=\"hljs-attribute\">ref</span>: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./plugins/with-reference'</span>)\n});\n\n</code></pre>",
         "index": 34
      },
      {
         "type": "comment",
         "lineStart": 487,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> make babel happy ;)</p>\n"
            }
         ],
         "index": 35
      },
      {
         "type": "source",
         "html": "<pre><code>lazyAssert.<span class=\"hljs-keyword\">default</span> = lazyAssert;\n<span class=\"hljs-keyword\">module</span>.<span class=\"hljs-keyword\">exports</span> = lazyAssert;</code></pre>",
         "index": 36
      }
   ],
   "/src/lazy-utils.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attribute\">var utils</span> = require(<span class=\"hljs-string\">'./utils'</span>);\n\n</code></pre>",
         "index": 0
      },
      {
         "lineStart": 3,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazyUtils",
               "defHtml": " {}",
               "commentHtml": ""
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-built_in\">module</span>.exports = {\n    <span class=\"hljs-attr\">load</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">lazyAssert</span>) </span>{\n        <span class=\"hljs-keyword\">var</span> inner = {\n            <span class=\"hljs-attr\">patternRegExp</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">target, pattern</span>) </span>{\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> target === <span class=\"hljs-string\">'string'</span>\n                    || <span class=\"hljs-keyword\">typeof</span> target === <span class=\"hljs-string\">'number'</span>) {\n                    <span class=\"hljs-keyword\">if</span> (pattern.test(<span class=\"hljs-built_in\">String</span>(target))) {\n                        <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-attr\">result</span>: <span class=\"hljs-string\">'ok'</span>, <span class=\"hljs-attr\">pattern</span>: pattern.toString()};\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-attr\">fail</span>: target, <span class=\"hljs-attr\">pattern</span>: pattern.toString()};\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-attr\">fail</span>: target, <span class=\"hljs-attr\">pattern</span>: pattern.toString()};\n                }\n            },\n\n            <span class=\"hljs-attr\">patternFunction</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">target, key, pattern</span>) </span>{\n                <span class=\"hljs-keyword\">var</span> check = pattern(target, key);\n                <span class=\"hljs-keyword\">if</span> (check) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'ok'</span>;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-attr\">fail</span>: target};\n                }\n            },\n\n            <span class=\"hljs-attr\">patternArray</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">array, pattern</span>) </span>{\n                <span class=\"hljs-keyword\">var</span> result = [];\n                <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; array.length; i++) {\n                    <span class=\"hljs-keyword\">if</span> (pattern <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">RegExp</span>) {\n                        result.push(inner.patternRegExp(array[i], pattern));\n                    }\n                    <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> pattern === <span class=\"hljs-string\">'function'</span>) {\n                        result.push(inner.patternFunction(array[i], i, pattern));\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n</code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 44,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 只能是 object 了</p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>                        <span class=\"hljs-literal\">result</span>.push(inner.patternObject(<span class=\"hljs-built_in\">array</span>[i], pattern));\n                    }\n                }\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">result</span>;\n            },\n\n            patternObject: function (<span class=\"hljs-keyword\">object</span>, pattern) {\n                <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span> = {};\n\n                <span class=\"hljs-keyword\">if</span> (typeof <span class=\"hljs-keyword\">object</span> !== '<span class=\"hljs-keyword\">object</span>') {\n                    <span class=\"hljs-keyword\">return</span> {fail: <span class=\"hljs-keyword\">object</span>, message: 'non-<span class=\"hljs-keyword\">object</span> target <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> supported <span class=\"hljs-keyword\">for</span> <span class=\"hljs-keyword\">object</span> pattern'};\n                }\n\n                <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> pattern) {\n                    <span class=\"hljs-keyword\">if</span> (pattern.hasOwnProperty(key)) {\n                        <span class=\"hljs-keyword\">if</span> (typeof pattern[key] === 'function') {\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 61,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> match function</p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>                            result[<span class=\"hljs-built_in\">key</span>] = inner.patternFunction(object[<span class=\"hljs-built_in\">key</span>], <span class=\"hljs-built_in\">key</span>, pattern[<span class=\"hljs-built_in\">key</span>]);\n                        }\n                        <span class=\"hljs-keyword\">else</span> {\n</code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 65,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> regexp</p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>                            result[<span class=\"hljs-built_in\">key</span>] = inner.patternRegExp(object[<span class=\"hljs-built_in\">key</span>], pattern[<span class=\"hljs-built_in\">key</span>]);\n                        }\n                    }\n                }\n\n                <span class=\"hljs-built_in\">return</span> result;\n            }\n        };\n\n        <span class=\"hljs-built_in\">var</span> lazyUtils = {\n            </code></pre>",
         "index": 8
      },
      {
         "lineStart": 76,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "objTarget",
                     "defHtml": " {<a data-jsdef-prop=\"key\">key</a>: <a data-jsdef-prop=\"any\">any</a>}",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "arrTarget",
                     "defHtml": " [<a data-jsdef-prop=\"any\">any</a>]",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "callback",
                     "defHtml": " (<a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"key\">key</a>) =&gt; <a data-jsdef-prop=\"result\">result</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "objResult",
                     "defHtml": " {<a data-jsdef-prop=\"key\">key</a>: <a data-jsdef-prop=\"result\">result</a>}",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "arrResult",
                     "defHtml": " [<a data-jsdef-prop=\"result\">result</a>]",
                     "commentHtml": ""
                  }
               ],
               "name": "lazyUtils.map",
               "defHtml": " (<a data-jsdef-prop=\"objTarget\">objTarget</a> | <a data-jsdef-prop=\"arrTarget\">arrTarget</a>, <a data-jsdef-prop=\"callback\">callback</a>) =&gt; <a data-jsdef-prop=\"objResult\">objResult</a> | <a data-jsdef-prop=\"arrResult\">arrResult</a>",
               "commentHtml": ""
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>\n            <span class=\"hljs-built_in\">map</span>: function (target, callback) {\n                <span class=\"hljs-built_in\">var</span> result;\n                <span class=\"hljs-keyword\">if</span> (target instanceof Array) {\n                    result = [];\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-built_in\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; target.<span class=\"hljs-built_in\">length</span>; i++) {\n                        result[i] = callback(target[i], i);\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (typeof target === 'object' &amp;&amp; target) {\n                    result = {};\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-built_in\">var</span> <span class=\"hljs-built_in\">key</span> <span class=\"hljs-keyword\">in</span> target) {\n                        result[<span class=\"hljs-built_in\">key</span>] = callback(target[<span class=\"hljs-built_in\">key</span>], <span class=\"hljs-built_in\">key</span>);\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-built_in\">throw</span> utils.newError('target-<span class=\"hljs-keyword\">not</span>-applicable-<span class=\"hljs-keyword\">for</span>-<span class=\"hljs-built_in\">map</span>', 'Target <span class=\"hljs-built_in\">is</span> <span class=\"hljs-keyword\">not</span> an Array, nor an Object');\n                }\n                <span class=\"hljs-built_in\">return</span> result;\n            },\n\n\n            pick: function (value, configArrayOrFunc) {\n                <span class=\"hljs-keyword\">if</span> (value instanceof Array) {\n                    <span class=\"hljs-built_in\">var</span> result = [];\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-built_in\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; value.<span class=\"hljs-built_in\">length</span>; i++) {\n                        result.<span class=\"hljs-built_in\">push</span>(lazyAssert.pick(value[i], configArrayOrFunc));\n                    }\n                    <span class=\"hljs-built_in\">return</span> result;\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (typeof value === 'object' &amp;&amp; value) {\n                    <span class=\"hljs-built_in\">var</span> result = {};\n\n                    <span class=\"hljs-keyword\">if</span> (typeof configArrayOrFunc === 'function') {\n                        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-built_in\">var</span> <span class=\"hljs-built_in\">key</span> <span class=\"hljs-keyword\">in</span> value) {\n                            <span class=\"hljs-keyword\">if</span> (configArrayOrFunc(<span class=\"hljs-built_in\">key</span>, value[<span class=\"hljs-built_in\">key</span>])) {\n                                result[<span class=\"hljs-built_in\">key</span>] = value[<span class=\"hljs-built_in\">key</span>]\n                            }\n                        }\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        configArrayOrFunc.forEach(function (<span class=\"hljs-built_in\">key</span>) {\n                            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-built_in\">key</span> <span class=\"hljs-keyword\">in</span> value) {\n                                result[<span class=\"hljs-built_in\">key</span>] = value[<span class=\"hljs-built_in\">key</span>];\n                            }\n                        });\n                    }\n                    <span class=\"hljs-built_in\">return</span> result;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-built_in\">throw</span> utils.newError('value-<span class=\"hljs-keyword\">not</span>-applicable-<span class=\"hljs-keyword\">for</span>-pick', 'Value <span class=\"hljs-built_in\">is</span> <span class=\"hljs-keyword\">not</span> an Array, nor an Object');\n                }\n            },\n\n            unpick: function (value, configArrayOrFunc) {\n                <span class=\"hljs-keyword\">if</span> (value instanceof Array) {\n                    <span class=\"hljs-built_in\">var</span> result = [];\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-built_in\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; value.<span class=\"hljs-built_in\">length</span>; i++) {\n                        result.<span class=\"hljs-built_in\">push</span>(lazyAssert.unpick(value[i], configArrayOrFunc));\n                    }\n                    <span class=\"hljs-built_in\">return</span> result;\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (typeof value === 'object' &amp;&amp; value) {\n                    <span class=\"hljs-built_in\">var</span> result = {};\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-built_in\">var</span> <span class=\"hljs-built_in\">key</span> <span class=\"hljs-keyword\">in</span> value) {\n                        result[<span class=\"hljs-built_in\">key</span>] = value[<span class=\"hljs-built_in\">key</span>];\n                    }\n                    <span class=\"hljs-keyword\">if</span> (typeof configArrayOrFunc === 'function') {\n                        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-built_in\">var</span> <span class=\"hljs-built_in\">key</span> <span class=\"hljs-keyword\">in</span> value) {\n                            <span class=\"hljs-keyword\">if</span> (configArrayOrFunc(<span class=\"hljs-built_in\">key</span>, value[<span class=\"hljs-built_in\">key</span>])) {\n                                <span class=\"hljs-built_in\">delete</span> result[<span class=\"hljs-built_in\">key</span>];\n                            }\n                        }\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        configArrayOrFunc.forEach(function (<span class=\"hljs-built_in\">key</span>) {\n                            <span class=\"hljs-built_in\">delete</span> result[<span class=\"hljs-built_in\">key</span>];\n                        });\n                    }\n                    <span class=\"hljs-built_in\">return</span> result;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-built_in\">throw</span> utils.newError('value-<span class=\"hljs-keyword\">not</span>-applicable-<span class=\"hljs-keyword\">for</span>-unpick', 'Value <span class=\"hljs-built_in\">is</span> <span class=\"hljs-keyword\">not</span> an Array, nor an Object');\n                }\n            },\n\n            TYPE_ROOT_KEY: '<span class=\"hljs-symbol\">_</span>[[[root-type]]]<span class=\"hljs-symbol\">_</span>',\n\n            </code></pre>",
         "index": 10
      },
      {
         "lineStart": 177,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "array",
                           "defHtml": " []",
                           "commentHtml": "<p> Will be summarize as {key: [type1, type2, type3]}</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "object",
                           "defHtml": " {}",
                           "commentHtml": "<p> Will be summarize as {key: typeof value[key]}</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "other",
                           "defHtml": " <a data-jsdef-prop=\"any-other\">any-other</a>",
                           "commentHtml": "<p> Just return typeof value</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "isFirstLevel",
                           "defHtml": " <a data-jsdef-prop=\"boolean\">boolean</a>",
                           "commentHtml": "<p> when isFirstValue = true, Array&#39;s value will return &#39;array&#39; instead of processing</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [
                              {
                                 "level": 10,
                                 "children": [],
                                 "name": "resultArray",
                                 "defHtml": " {<a data-jsdef-prop=\"key\">key</a>: [<a data-jsdef-prop=\"string\">string</a>]}",
                                 "commentHtml": ""
                              },
                              {
                                 "level": 10,
                                 "children": [],
                                 "name": "resultObject",
                                 "defHtml": " {<a data-jsdef-prop=\"key\">key</a>: <a data-jsdef-prop=\"string\">string</a>}",
                                 "commentHtml": ""
                              },
                              {
                                 "level": 10,
                                 "children": [],
                                 "name": "resultType",
                                 "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                                 "commentHtml": ""
                              }
                           ],
                           "name": "result",
                           "defHtml": " <a data-jsdef-prop=\"resultArray\">resultArray</a> | <a data-jsdef-prop=\"resultObject\">resultObject</a> | <a data-jsdef-prop=\"resultType\">resultType</a>",
                           "commentHtml": ""
                        }
                     ],
                     "name": "value",
                     "defHtml": " <a data-jsdef-prop=\"array\">array</a> | <a data-jsdef-prop=\"object\">object</a> | <a data-jsdef-prop=\"other\">other</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "lazyUtils.type",
               "defHtml": " <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"isFirstLevel\">isFirstLevel</a> =&gt; <a data-jsdef-prop=\"result\">result</a>",
               "commentHtml": ""
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>\n            <span class=\"hljs-keyword\">type</span>: function (value, isFirstLevel) {\n                <span class=\"hljs-keyword\">if</span> (value instanceof <span class=\"hljs-type\">Array</span>) {\n                    <span class=\"hljs-keyword\">if</span> (isFirstLevel) {\n                        <span class=\"hljs-keyword\">return</span> '<span class=\"hljs-built_in\">array</span>';\n                    }\n\n                    <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span> = {};\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; value.length; i++) {\n                        <span class=\"hljs-keyword\">var</span> <span class=\"hljs-keyword\">type</span> = lazyAssert.<span class=\"hljs-keyword\">type</span>(value[i], <span class=\"hljs-literal\">true</span>);\n\n                        <span class=\"hljs-keyword\">if</span> (typeof <span class=\"hljs-keyword\">type</span> === '<span class=\"hljs-keyword\">object</span>') {\n                            <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">type</span>) {\n                                <span class=\"hljs-literal\">result</span>[key] = <span class=\"hljs-literal\">result</span>[key] || {};\n                                <span class=\"hljs-literal\">result</span>[key][<span class=\"hljs-keyword\">type</span>[key]] = <span class=\"hljs-number\">1</span>;\n                            }\n                        }\n                        <span class=\"hljs-keyword\">else</span> {\n                            <span class=\"hljs-literal\">result</span>[lazyAssert.<span class=\"hljs-type\">TYPE_ROOT_KEY</span>] = <span class=\"hljs-literal\">result</span>[lazyAssert.<span class=\"hljs-type\">TYPE_ROOT_KEY</span>] || {};\n                            <span class=\"hljs-literal\">result</span>[lazyAssert.<span class=\"hljs-type\">TYPE_ROOT_KEY</span>][<span class=\"hljs-keyword\">type</span>] = <span class=\"hljs-number\">1</span>;\n                        }\n                    }\n\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">result</span>;\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (typeof value === '<span class=\"hljs-keyword\">object</span>' &amp;&amp; value) {\n                    <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span> = {};\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> value) {\n                        <span class=\"hljs-keyword\">if</span> (value[key] instanceof <span class=\"hljs-type\">Array</span>) {\n                            <span class=\"hljs-literal\">result</span>[key] = '<span class=\"hljs-built_in\">array</span>';\n                        }\n                        <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (value[key] instanceof <span class=\"hljs-type\">RegExp</span>) {\n                            <span class=\"hljs-literal\">result</span>[key] = 'regexp';\n                        }\n                        <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (value[key] === null) {\n                            <span class=\"hljs-literal\">result</span>[key] = 'null';\n                        }\n                        <span class=\"hljs-keyword\">else</span> {\n                            <span class=\"hljs-literal\">result</span>[key] = typeof value[key];\n                        }\n                    }\n\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">result</span>;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> typeof value;\n                }\n            },\n\n            </code></pre>",
         "index": 12
      },
      {
         "lineStart": 242,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "other",
                           "defHtml": " <a data-jsdef-prop=\"not\">not</a> <a data-jsdef-prop=\"a\">a</a> {} <a data-jsdef-prop=\"nor\">nor</a> <a data-jsdef-prop=\"a\">a</a> []",
                           "commentHtml": ""
                        }
                     ],
                     "name": "target",
                     "defHtml": " {} | [{}] | [<a data-jsdef-prop=\"other\">other</a>] | <a data-jsdef-prop=\"other\">other</a>",
                     "commentHtml": "<p>  场景:</p>\n<p>  target, pattern</p>\n<p>  {key: any}, {key: func | regexp}\n  每一个对应的 pattern.key 会用于匹配 target.key</p>\n<p>  {key: any}, func\n  func 会用于匹配所有的 target 里的属性</p>\n<p>  {}, regexp\n  不支持</p>\n<p>  [{key}], func\n  func 会用于匹配所有的 target {key}</p>\n<p>  [{key}], regexp\n  不支持</p>\n<p>  [{key}], {key}\n  key 对应地检查</p>\n<p>  [other], {}\n  不支持</p>\n<p>  [other], func | regexp\n  pattern 匹配 target 每一个 item</p>\n<p>  other, {}\n  不支持</p>\n<p>  other, func | regexp\n  pattern 匹配 target</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "object",
                           "defHtml": " {<a data-jsdef-prop=\"key\">key</a>: <a data-jsdef-prop=\"func\">func</a> | <a data-jsdef-prop=\"regexp\">regexp</a>}",
                           "commentHtml": ""
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "func",
                           "defHtml": " <a data-jsdef-prop=\"val\">val</a>, <a data-jsdef-prop=\"key\">key</a> =&gt; <a data-jsdef-prop=\"boolean\">boolean</a>",
                           "commentHtml": ""
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "regexp",
                           "defHtml": " <a data-jsdef-prop=\"RegExp\">RegExp</a>",
                           "commentHtml": ""
                        }
                     ],
                     "name": "pattern",
                     "defHtml": " <a data-jsdef-prop=\"object\">object</a> | <a data-jsdef-prop=\"func\">func</a> | <a data-jsdef-prop=\"regexp\">regexp</a>",
                     "commentHtml": "<p>  如果是 func, 则必须返回 true, 才认为是正确的,</p>\n<p>  如果是 regexp 则 .test() 必须为 true\n  且如果检查对象非string, 或number, 则直接报错</p>\n<p>  如果检验值为 false, 则还需要把出错的值打印出来</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "result",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "lazyUtils.pattern",
               "defHtml": " <a data-jsdef-prop=\"target\">target</a>, <a data-jsdef-prop=\"pattern\">pattern</a> =&gt; <a data-jsdef-prop=\"result\">result</a>",
               "commentHtml": ""
            }
         ],
         "index": 13
      },
      {
         "type": "source",
         "html": "<pre><code>\n            pattern: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">target, pattern, key</span>) </span>{\n                <span class=\"hljs-keyword\">if</span> (target <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Array</span>) {\n                    <span class=\"hljs-keyword\">return</span> inner.patternArray(target, pattern);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> pattern === <span class=\"hljs-string\">'function'</span>) {\n                    <span class=\"hljs-keyword\">return</span> inner.patternFunction(target, key, pattern);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (pattern <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">RegExp</span>) {\n                    <span class=\"hljs-keyword\">return</span> inner.patternRegExp(target, pattern);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> pattern === <span class=\"hljs-string\">'object'</span>) {\n                    <span class=\"hljs-keyword\">return</span> inner.patternObject(target, pattern);\n                }\n            },\n\n\n            <span class=\"hljs-attr\">fullPattern</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">complexTarget, patternSet</span>) </span>{\n                <span class=\"hljs-keyword\">if</span> (\n                    !(complexTarget <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Array</span> &amp;&amp; patternSet <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Array</span>)\n                    &amp;&amp; !(<span class=\"hljs-keyword\">typeof</span> complexTarget === <span class=\"hljs-string\">'object'</span> &amp;&amp; <span class=\"hljs-keyword\">typeof</span> patternSet === <span class=\"hljs-string\">'object'</span> &amp;&amp; !(complexTarget <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Array</span>) &amp;&amp; !(patternSet <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Array</span>))\n                ) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'fail: target &amp; pattern set mismatch'</span>;\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (patternSet <span class=\"hljs-keyword\">instanceof</span> <span class=\"hljs-built_in\">Array</span>) {\n                    <span class=\"hljs-keyword\">var</span> result = [];\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; patternSet.length; i++) {\n                        <span class=\"hljs-keyword\">if</span> (i &gt;= complexTarget.length) {\n                            result[i] = <span class=\"hljs-string\">'fail: target not found'</span>;\n                        }\n                        <span class=\"hljs-keyword\">else</span> {\n                            result[i] = lazyUtils.pattern(complexTarget[i], patternSet[i], i);\n                        }\n                    }\n\n                    <span class=\"hljs-keyword\">if</span> (i &lt; complexTarget.length) {\n                        result[i] = <span class=\"hljs-string\">'fail: target has more items than pattern'</span>;\n                    }\n\n                    <span class=\"hljs-keyword\">return</span> result;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">var</span> result = {};\n\n                    <span class=\"hljs-keyword\">var</span> allTargetKeys = {};\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> complexTarget) {\n                        allTargetKeys[key] = <span class=\"hljs-number\">1</span>;\n                    }\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> patternSet) {\n                        <span class=\"hljs-keyword\">if</span> (key <span class=\"hljs-keyword\">in</span> complexTarget) {\n                            result[key] = lazyUtils.pattern(complexTarget[key], patternSet[key], key);\n                            <span class=\"hljs-keyword\">delete</span> allTargetKeys[key];\n                        }\n                        <span class=\"hljs-keyword\">else</span> {\n                            result[key] = <span class=\"hljs-string\">'fail: target not found'</span>;\n                        }\n                    }\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> allTargetKeys) {\n                        result[key] = <span class=\"hljs-string\">'fail: pattern not found'</span>;\n                    }\n\n                    <span class=\"hljs-keyword\">return</span> result;\n                }\n            }\n        };\n\n</code></pre>",
         "index": 14
      },
      {
         "type": "comment",
         "lineStart": 366,
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazyAssert",
               "defHtml": " {}",
               "commentHtml": ""
            }
         ],
         "index": 15
      },
      {
         "type": "source",
         "html": "<pre><code>        utils.<span class=\"hljs-keyword\">extend(lazyAssert, </span>lazyUtils)<span class=\"hljs-comment\">;</span>\n    }\n}<span class=\"hljs-comment\">;</span></code></pre>",
         "index": 16
      }
   ],
   "/src/lazy-validators.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attribute\">var utils</span> = require(<span class=\"hljs-string\">'./utils'</span>);\n\n</code></pre>",
         "index": 0
      },
      {
         "type": "comment",
         "lineStart": 3,
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazy.validators",
               "defHtml": "",
               "commentHtml": ""
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-function\"><span class=\"hljs-keyword\">module</span>.<span class=\"hljs-title\">exports</span> =</span> {\n    load: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(lazyAssert)</span> {</span>\n        </code></pre>",
         "index": 2
      },
      {
         "lineStart": 6,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "private.~VALIDATE_KEY",
               "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
               "commentHtml": "<p> The key to mark &quot;ref&quot; in objects/arrays</p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>\n        <span class=\"hljs-keyword\">var</span> VALIDATE_KEY = <span class=\"hljs-string\">'--[[validate_key]]--'</span>;\n        <span class=\"hljs-keyword\">var</span> DEBUG_PATH_KEY = <span class=\"hljs-string\">'--[[path]]--'</span>;\n\n        <span class=\"hljs-keyword\">var</span> validatorsUtils = {\n\n            </code></pre>",
         "index": 4
      },
      {
         "lineStart": 16,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "val",
                           "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                           "commentHtml": ""
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "key",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a> | <a data-jsdef-prop=\"number\">number</a>",
                           "commentHtml": ""
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "parent",
                           "defHtml": " {} | []",
                           "commentHtml": ""
                        }
                     ],
                     "name": "functionConfig",
                     "defHtml": " (<a data-jsdef-prop=\"val\">val</a>, <a data-jsdef-prop=\"key\">key</a>, <a data-jsdef-prop=\"parent\">parent</a>) =&gt; <a data-jsdef-prop=\"boolean\">boolean</a>",
                     "commentHtml": "<p> The function being used to validate the target value</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "stringConfig",
                     "as": "~StringConfig",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>    <a data-jsdef-as=\"~StringConfig\">~StringConfig</a>",
                     "commentHtml": "<p> Use to validate the type (or special class instance/value) of the target value\n &#39;string&#39; | &#39;number&#39; | &#39;function&#39; | &#39;array&#39; | &#39;regexp&#39; | &#39;boolean&#39; | &#39;nan&#39; | &#39;infinity&#39; | &#39;-infinity&#39; |\n &#39;object&#39; | &#39;null&#39;</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "notStringConfig",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> &#39;!&#39; + <a data-jsdef-link=\"~StringConfig\">~StringConfig</a>, refers to &quot;not ...&quot;</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "refConfig",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> &#39;=&#39; + path, e.g. =.ref.from.root.0</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "regexpConfig",
                     "defHtml": " <a data-jsdef-prop=\"RegExp\">RegExp</a>",
                     "commentHtml": "<p> Use to validate string/number against the regexp</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "arrayValidator",
                           "defHtml": " <a data-jsdef-link=\"~Validator\">~Validator</a>",
                           "commentHtml": "<pre><code>  When first item = &#39;array&#39;, the following Validator is to validate any item of the target value,\n  which should be an array.\n</code></pre>"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "rawValue",
                           "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                           "commentHtml": "<pre><code>  When the first item of the array is set as &#39;value&#39;, this is the &quot;exact value&quot; to be checked against the\n  target value.\n\n  If more than one rawValues are given , they are checked in an &#39;OR&#39; condition.\n</code></pre>"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "op",
                           "defHtml": " &apos;&gt;&apos; | &apos;&lt;&apos; | &apos;&gt;=&apos; | &apos;&lt;=&apos;",
                           "commentHtml": "<p> For quickily building up condition for checking the target value</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "orValidator",
                           "defHtml": " <a data-jsdef-link=\"~Validator\">~Validator</a>",
                           "commentHtml": "<p> When no special first item is set, the result is true when any of the validators succeeds</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "notValidator",
                           "defHtml": " <a data-jsdef-link=\"~Validator\">~Validator</a>",
                           "commentHtml": "<p> When the first item is &#39;!&#39;, the result of validation is true only if all the validators returns false</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "andValidator",
                           "defHtml": " <a data-jsdef-link=\"~Validator\">~Validator</a>",
                           "commentHtml": "<p> When the first item is &#39;and&#39;, the result of validation is true only when all the validators succeed</p>\n"
                        }
                     ],
                     "name": "arrayConfig",
                     "defHtml": " [&apos;<a data-jsdef-prop=\"array\">array</a>&apos;, <a data-jsdef-prop=\"arrayValidator\">arrayValidator</a>, ...] | [<a data-jsdef-prop=\"orValidator\">orValidator</a>, ...] | [&apos;<a data-jsdef-prop=\"value\">value</a>&apos;, <a data-jsdef-prop=\"rawValue...\">rawValue...</a>] | [<a data-jsdef-prop=\"op\">op</a>, <a data-jsdef-prop=\"value\">value</a>] | [&apos;!&apos;, <a data-jsdef-prop=\"notValidator...\">notValidator...</a>] | [&apos;<a data-jsdef-prop=\"and\">and</a>&apos;, <a data-jsdef-prop=\"andValidator\">andValidator</a>, ...] | [&apos;<a data-jsdef-prop=\"or\">or</a>&apos;, <a data-jsdef-prop=\"orValidator\">orValidator</a>, ...]",
                     "commentHtml": "<p>  Unless the first item is &#39;array&#39;, arrayConfig is used to validate the target value as a whole.</p>\n<p>  If the first item is &#39;array&#39;, this config is used to validate any item of the target value, as the target value\n  is an array itself.</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "objectConfig",
                     "defHtml": " {<a data-jsdef-prop=\"key\">key</a>: <a data-jsdef-link=\"~Validator\">~Validator</a>}",
                     "commentHtml": "<p> key is related to the target&#39;s object&#39;s key</p>\n"
                  }
               ],
               "name": "private.~Validator",
               "defHtml": " <a data-jsdef-prop=\"arrayConfig\">arrayConfig</a> | <a data-jsdef-prop=\"objectConfig\">objectConfig</a> | <a data-jsdef-prop=\"stringConfig\">stringConfig</a> | <a data-jsdef-prop=\"notStringConfig\">notStringConfig</a> | <a data-jsdef-prop=\"regexpConfig\">regexpConfig</a> | <a data-jsdef-prop=\"functionConfig\">functionConfig</a> | <a data-jsdef-prop=\"refConfig\">refConfig</a> | <a data-jsdef-prop=\"null\">null</a> | <a data-jsdef-prop=\"undefined\">undefined</a> | <a data-jsdef-prop=\"number\">number</a> | <a data-jsdef-prop=\"boolean\">boolean</a>",
               "commentHtml": ""
            }
         ],
         "index": 5
      },
      {
         "lineStart": 79,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "peekKey",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> The key to help marking the output easier</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "actualTargetValue",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": "<p> The value to validate</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "validator",
                     "defHtml": " <a data-jsdef-link=\"~Validator\">~Validator</a>",
                     "commentHtml": "<p> The validator to be used to validate the target value</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "result",
                           "defHtml": " <a data-jsdef-prop=\"boolean\">boolean</a>",
                           "commentHtml": "<p> if true, no other info will be given, the other info will only be given when result = false</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "type",
                           "defHtml": " &apos;<a data-jsdef-prop=\"ref-check\">ref-check</a>&apos; | &apos;<a data-jsdef-prop=\"object\">object</a>&apos; | &apos;<a data-jsdef-prop=\"regexp\">regexp</a>&apos; | &apos;<a data-jsdef-prop=\"array\">array</a>&apos; | &apos;<a data-jsdef-prop=\"array-array\">array-array</a>&apos; | &apos;<a data-jsdef-prop=\"function\">function</a>&apos; | &apos;<a data-jsdef-prop=\"or-array\">or-array</a>&apos; | &apos;<a data-jsdef-prop=\"value-array\">value-array</a>&apos; | &apos;<a data-jsdef-prop=\"not-array\">not-array</a>&apos; | &apos;<a data-jsdef-prop=\"and-array\">and-array</a>&apos; | &apos;<a data-jsdef-prop=\"type\">type</a>&apos; | &apos;<a data-jsdef-prop=\"exact-equal\">exact-equal</a>&apos; | &apos;<a data-jsdef-prop=\"function\">function</a>&apos;",
                           "commentHtml": "<p> a type to show the type of a validation</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"target-not-array\">target-not-array</a>&apos;",
                           "commentHtml": "<p> type == &#39;array-array&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"all-type-failed\">all-type-failed</a>&apos;",
                           "commentHtml": "<p> type == &#39;or-array&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"is-array\">is-array</a>&apos; | &apos;<a data-jsdef-prop=\"is-not-object\">is-not-object</a>&apos; | &apos;<a data-jsdef-prop=\"failed-on-key\">failed-on-key</a>&apos;",
                           "commentHtml": "<p> type = &#39;object&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"validator-error\">validator-error</a>&apos;",
                           "commentHtml": "<p> type == &#39;object&#39; | &#39;or-array&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"all-values-failed\">all-values-failed</a>&apos;",
                           "commentHtml": "<p> type == &#39;value-array&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"nan\">nan</a>&apos; | &apos;<a data-jsdef-prop=\"function\">function</a>&apos; | &apos;<a data-jsdef-prop=\"regexp\">regexp</a>&apos; | &apos;<a data-jsdef-prop=\"array\">array</a>&apos; | &apos;<a data-jsdef-prop=\"object-target-is-null\">object-target-is-null</a>&apos; | &apos;<a data-jsdef-prop=\"number\">number</a>&apos; | &apos;<a data-jsdef-prop=\"null\">null</a>&apos; | &apos;<a data-jsdef-prop=\"undefined\">undefined</a>&apos; | &apos;<a data-jsdef-prop=\"infinity\">infinity</a>&apos; | &apos;<a data-jsdef-prop=\"-infinity\">-infinity</a>&apos; | &apos;<a data-jsdef-prop=\"object\">object</a>&apos; | &apos;<a data-jsdef-prop=\"boolean\">boolean</a>&apos; | &apos;<a data-jsdef-prop=\"string\">string</a>&apos;",
                           "commentHtml": "<p> type == &#39;type&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"not-equal\">not-equal</a>&apos;",
                           "commentHtml": "<p> type == &#39;exact-equal&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"returned-false\">returned-false</a>&apos;",
                           "commentHtml": "<p> type == &#39;function&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"some-failed\">some-failed</a>&apos;",
                           "commentHtml": "<p> type == &#39;not-array&#39; | &#39;and-array&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"match-failed\">match-failed</a>&apos; | &apos;<a data-jsdef-prop=\"target-type-error\">target-type-error</a>&apos;",
                           "commentHtml": "<p> type == &#39;regexp&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "reason",
                           "defHtml": " &apos;<a data-jsdef-prop=\"validator-empty\">validator-empty</a>&apos;",
                           "commentHtml": "<p> type == &#39;array&#39;</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "message",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": "<p> explanation</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "key",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": "<p> set if it is a prop of an object</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "index",
                           "defHtml": " <a data-jsdef-prop=\"number\">number</a>",
                           "commentHtml": "<p> set if it is an item from an array</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "vIndex",
                           "defHtml": " <a data-jsdef-prop=\"number\">number</a>",
                           "commentHtml": "<p> set if the validator is an item from an array</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "expected",
                           "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                           "commentHtml": "<p> valid for exact validator</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "regexp",
                           "defHtml": " <a data-jsdef-prop=\"RegExp\">RegExp</a>",
                           "commentHtml": "<p> valid for regexp validator</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "funcInfo",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": "<p> Comparison : OP value, valid for op array validators</p>\n"
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "subResult",
                           "defHtml": " [<a data-jsdef-prop=\"result\">result</a>]",
                           "commentHtml": "<p> for some complex validation, sub results should be recorded in order to show the detailed reason</p>\n"
                        }
                     ],
                     "name": "result",
                     "defHtml": " {}",
                     "commentHtml": ""
                  }
               ],
               "name": "lazy.validators.validate",
               "defHtml": " <a data-jsdef-prop=\"peekKey\">peekKey</a>, <a data-jsdef-prop=\"actualTargetValue\">actualTargetValue</a>, <a data-jsdef-prop=\"validator\">validator</a> =&gt; <a data-jsdef-prop=\"result\">result</a>",
               "commentHtml": ""
            }
         ],
         "index": 6
      },
      {
         "type": "source",
         "html": "<pre><code>\n            validate: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(target, validator, extra)</span> </span>{\n</code></pre>",
         "index": 7
      },
      {
         "type": "comment",
         "lineStart": 156,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> @todo: remove this</p>\n"
            }
         ],
         "index": 8
      },
      {
         "type": "source",
         "html": "<pre><code>                <span class=\"hljs-keyword\">if</span> (!extra) {\n                    <span class=\"hljs-keyword\">var</span> isFirstLevel = <span class=\"hljs-literal\">true</span>;\n                }\n                extra = extra || {path: [], refs: {}, pendingRefs: {}};\n\n                <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span>;\n                <span class=\"hljs-keyword\">if</span> (typeof validator === '<span class=\"hljs-built_in\">string</span>') {\n                    <span class=\"hljs-literal\">result</span> = validatorsUtils.stringValidator(target, validator, extra);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (utils.isArray(validator)) {\n                    <span class=\"hljs-literal\">result</span> = validatorsUtils.validatorArray(target, validator, extra);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (utils.isRegExp(validator)) {\n                    <span class=\"hljs-literal\">result</span> = validatorsUtils.validatorRegExp(target, validator);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (typeof validator === '<span class=\"hljs-keyword\">object</span>') {\n                    <span class=\"hljs-keyword\">if</span> (validator) {\n</code></pre>",
         "index": 9
      },
      {
         "type": "comment",
         "lineStart": 174,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> it&#39;s a non-null object</p>\n"
            }
         ],
         "index": 10
      },
      {
         "type": "source",
         "html": "<pre><code>                        <span class=\"hljs-literal\">result</span> = validatorsUtils.validatorObject(target, validator, extra);\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n</code></pre>",
         "index": 11
      },
      {
         "type": "comment",
         "lineStart": 178,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> it&#39;s a null</p>\n"
            }
         ],
         "index": 12
      },
      {
         "type": "source",
         "html": "<pre><code>                        result = validatorsUtils.exactValidator(<span class=\"hljs-keyword\">target</span>, <span class=\"hljs-keyword\">null</span>);\n                    }\n                }\n                <span class=\"hljs-function\"><span class=\"hljs-keyword\">else</span> <span class=\"hljs-title\">if</span> <span class=\"hljs-params\">(typeof validator === <span class=\"hljs-string\">'function'</span>)</span> </span>{\n                    result = validatorsUtils.validatorFunction(<span class=\"hljs-keyword\">target</span>, validator, extra);\n                }\n                <span class=\"hljs-keyword\">else</span> {\n</code></pre>",
         "index": 13
      },
      {
         "type": "comment",
         "lineStart": 186,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> boolean, undefined, number</p>\n"
            }
         ],
         "index": 14
      },
      {
         "type": "source",
         "html": "<pre><code>                    result = validatorsUtils.exactValidator<span class=\"hljs-comment\">(target, validator)</span>;\n                }\n\n                <span class=\"hljs-keyword\">if</span> <span class=\"hljs-comment\">(isFirstLevel)</span> {\n</code></pre>",
         "index": 15
      },
      {
         "type": "comment",
         "lineStart": 191,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;@@d&#39;, extra.refs, &#39;pending&#39;, extra.pendingRefs);</p>\n"
            }
         ],
         "index": 16
      },
      {
         "type": "source",
         "html": "<pre><code>\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> extra.pendingRefs) {\n                        <span class=\"hljs-keyword\">var</span> keyParts = key.split(':');\n                        <span class=\"hljs-keyword\">var</span> refKey = keyParts[<span class=\"hljs-number\">1</span>];\n                        <span class=\"hljs-keyword\">if</span> (extra.refs[refKey] !== extra.pendingRefs[key]) {\n                            <span class=\"hljs-literal\">result</span> = {\n                                <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                                <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">ref</span>-check',\n                                sourcePath: keyParts[<span class=\"hljs-number\">0</span>],\n                                targetPath: refKey,\n                                message: '<span class=\"hljs-type\">Ref</span> <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> equal'\n                            }\n                        }\n                    }\n                }\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">result</span>;\n            },\n\n            validatorObject: function (target, validator, extra) {\n                <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span>, keys = [];\n                <span class=\"hljs-keyword\">if</span> (utils.isArray(target)) {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">object</span>',\n                        reason: '<span class=\"hljs-keyword\">is</span>-<span class=\"hljs-built_in\">array</span>',\n                        message: '<span class=\"hljs-type\">Target</span> <span class=\"hljs-keyword\">is</span> an <span class=\"hljs-built_in\">array</span> (<span class=\"hljs-type\">Array</span> <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> recognised <span class=\"hljs-keyword\">as</span> valid <span class=\"hljs-keyword\">object</span> here), but <span class=\"hljs-keyword\">is</span> to be validated against <span class=\"hljs-keyword\">object</span> validator'\n                    }\n                }\n                <span class=\"hljs-keyword\">if</span> (typeof target !== '<span class=\"hljs-keyword\">object</span>' || !target) {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">object</span>',\n                        reason: '<span class=\"hljs-keyword\">is</span>-<span class=\"hljs-keyword\">not</span>-<span class=\"hljs-keyword\">object</span>',\n                        message: '<span class=\"hljs-type\">Target</span> <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> an <span class=\"hljs-keyword\">object</span>.'\n                    }\n                }\n                <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> validator) {\n                    extra.path.push(key);\n                    <span class=\"hljs-keyword\">var</span> refPath = extra.path.join('.');\n                    extra.refs[refPath] = target[key];\n                    <span class=\"hljs-literal\">result</span> = validatorsUtils.validate(target[key], validator[key], {\n                        key: key,\n                        parent: target,\n                        path: extra.path,\n                        refs: extra.refs,\n                        pendingRefs: extra.pendingRefs\n                    });\n                    extra.path.pop();\n\n                    <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-literal\">result</span>) {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                            <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">object</span>',\n                            reason: 'validator-error',\n                            key: key,\n                            message: '<span class=\"hljs-type\">Problem</span> <span class=\"hljs-keyword\">with</span> validating against validator'\n                        }\n                    }\n                    <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-literal\">result</span>.<span class=\"hljs-literal\">result</span>) {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                            <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">object</span>',\n                            reason: 'failed-on-key',\n                            key: key,\n                            message: '<span class=\"hljs-type\">Failed</span> on <span class=\"hljs-keyword\">object</span> property validation',\n                            subResult: [<span class=\"hljs-literal\">result</span>]\n                        };\n                    }\n                }\n\n                <span class=\"hljs-keyword\">return</span> {\n                    <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                }\n            },\n\n            validatorRegExp: function (target, validator) {\n                <span class=\"hljs-keyword\">if</span> ((typeof target === 'number' &amp;&amp; !isNaN(target) &amp;&amp; isFinite(target)) || typeof target === '<span class=\"hljs-built_in\">string</span>') {\n                    <span class=\"hljs-keyword\">var</span> match = validator.exec(<span class=\"hljs-type\">String</span>(target));\n                    <span class=\"hljs-keyword\">if</span> (match) {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                        }\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                            <span class=\"hljs-keyword\">type</span>: 'regexp',\n                            reason: 'match-failed',\n                            regexp: validator,\n                            message: '<span class=\"hljs-type\">Target</span> does <span class=\"hljs-keyword\">not</span> match regexp'\n                        }\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: 'regexp',\n                        reason: 'target-<span class=\"hljs-keyword\">type</span>-error',\n                        regexp: validator,\n                        message: '<span class=\"hljs-type\">Target</span> can <span class=\"hljs-keyword\">not</span> be tested by regexp'\n                    }\n                }\n            },\n\n            </code></pre>",
         "index": 17
      },
      {
         "lineStart": 296,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "result",
                           "defHtml": " <a data-jsdef-prop=\"boolean\">boolean</a>",
                           "commentHtml": ""
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "type",
                           "defHtml": " &apos;<a data-jsdef-prop=\"array.validator-empty\">array.validator-empty</a>&apos;",
                           "commentHtml": "<p> and others types from XXXArray</p>\n"
                        }
                     ],
                     "name": "result",
                     "defHtml": " {}",
                     "commentHtml": ""
                  }
               ],
               "name": "lazy.validators.validatorArray",
               "defHtml": " <a data-jsdef-prop=\"target\">target</a>, <a data-jsdef-prop=\"validator\">validator</a>, <a data-jsdef-prop=\"extra\">extra</a> =&gt; <a data-jsdef-prop=\"result\">result</a>",
               "commentHtml": ""
            }
         ],
         "index": 18
      },
      {
         "type": "source",
         "html": "<pre><code>\n            validatorArray: <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>(target, validator, extra) {\n                if (validator.length === 0) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-type\">{</span>\n                        result: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: <span class=\"hljs-symbol\">'array</span>',\n                        reason: <span class=\"hljs-symbol\">'validator</span>-empty',\n                        message: <span class=\"hljs-symbol\">'Validator</span> should <span class=\"hljs-keyword\">not</span> be an empty <span class=\"hljs-keyword\">array</span>.'\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>] === <span class=\"hljs-symbol\">'and</span>') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorAndArray(target, validator, extra);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>] === <span class=\"hljs-string\">'&gt;'</span>) {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorFunction(target, <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>(target) {\n                        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-type\">target</span> &gt; validator[<span class=\"hljs-number\">1</span>]\n                    }, {funcInfo: <span class=\"hljs-symbol\">'Comparison</span> : &gt; ' + <span class=\"hljs-type\">validator</span>[<span class=\"hljs-number\">1</span>]});\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>] === <span class=\"hljs-string\">'&lt;'</span>) {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorFunction(target, <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>(target) {\n                        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-type\">target</span> &lt; validator[<span class=\"hljs-number\">1</span>]\n                    }, {funcInfo: <span class=\"hljs-symbol\">'Comparison</span> : &lt; ' + <span class=\"hljs-type\">validator</span>[<span class=\"hljs-number\">1</span>]});\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>] === '&gt;=') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorFunction(target, <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>(target) {\n                        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-type\">target</span> &gt;= validator[<span class=\"hljs-number\">1</span>]\n                    }, {funcInfo: <span class=\"hljs-symbol\">'Comparison</span> : &gt;= ' + <span class=\"hljs-type\">validator</span>[<span class=\"hljs-number\">1</span>]});\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>] === '&lt;=') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorFunction(target, <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>(target) {\n                        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-type\">target</span> &lt;= validator[<span class=\"hljs-number\">1</span>]\n                    }, {funcInfo: <span class=\"hljs-symbol\">'Comparison</span> : &lt;= ' + <span class=\"hljs-type\">validator</span>[<span class=\"hljs-number\">1</span>]});\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>] === <span class=\"hljs-string\">'!'</span>) {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorNotArray(target, validator, extra);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>] === <span class=\"hljs-symbol\">'value</span>') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorValueArray(target, validator);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>] === <span class=\"hljs-symbol\">'or</span>') {\n                    extra.orStartIndex = <span class=\"hljs-number\">1</span>;\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorOrArray(target, validator, extra);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>] === <span class=\"hljs-symbol\">'array</span>') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorArrayArray(target, validator, extra);\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    extra.orStartIndex = <span class=\"hljs-number\">0</span>;\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.validatorOrArray(target, validator, extra);\n                }\n            },\n\n            </code></pre>",
         "index": 19
      },
      {
         "lineStart": 355,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "type",
                           "defHtml": " &apos;<a data-jsdef-prop=\"array-array.all-type-failed\">array-array.all-type-failed</a>&apos; | &apos;<a data-jsdef-prop=\"array-array.target-not-array\">array-array.target-not-array</a>&apos;",
                           "commentHtml": ""
                        }
                     ],
                     "name": "result",
                     "defHtml": " {}",
                     "commentHtml": ""
                  }
               ],
               "name": "lazy.validators.validatorArrayArray",
               "defHtml": " ... =&gt; <a data-jsdef-prop=\"result\">result</a>",
               "commentHtml": ""
            }
         ],
         "index": 20
      },
      {
         "type": "source",
         "html": "<pre><code>\n            validatorArrayArray: function (target, validator, extra) {\n                <span class=\"hljs-keyword\">if</span> (utils.isArray(target)) {\n                    <span class=\"hljs-keyword\">if</span> (validator.length &lt;= <span class=\"hljs-number\">1</span>) {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                        }\n                    }\n\n                    <span class=\"hljs-keyword\">var</span> itemResult, <span class=\"hljs-literal\">result</span>;\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; target.length; i++) {\n                        itemResult = <span class=\"hljs-literal\">false</span>;\n                        extra.path.push(i);\n                        <span class=\"hljs-keyword\">var</span> refPath = extra.path.join('.');\n                        extra.refs[refPath] = target[i];\n\n                        <span class=\"hljs-keyword\">var</span> fails = [];\n                        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> j = <span class=\"hljs-number\">1</span>; j &lt; validator.length; j++) {\n                            <span class=\"hljs-literal\">result</span> = validatorsUtils.validate(target[i], validator[j], {\n                                key: i,\n                                parent: target,\n                                path: extra.path,\n                                refs: extra.refs,\n                                pendingRefs: extra.pendingRefs\n                            });\n\n                            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.<span class=\"hljs-literal\">result</span>) {\n                                itemResult = <span class=\"hljs-literal\">true</span>;\n                                <span class=\"hljs-keyword\">break</span>;\n                            }\n                            <span class=\"hljs-keyword\">else</span> {\n                                <span class=\"hljs-literal\">result</span>.vIndex = j;\n                                fails.push(<span class=\"hljs-literal\">result</span>);\n                            }\n                        }\n\n                        extra.path.pop();\n                        <span class=\"hljs-keyword\">if</span> (!itemResult) {\n                            <span class=\"hljs-keyword\">return</span> {\n                                <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                                <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-built_in\">array</span>-<span class=\"hljs-built_in\">array</span>',\n                                reason: 'all-<span class=\"hljs-keyword\">type</span>-failed',\n                                index: i,\n                                subResult: fails,\n                                message: '<span class=\"hljs-type\">Target</span> does <span class=\"hljs-keyword\">not</span> meet the <span class=\"hljs-built_in\">array</span> validators'\n                            }\n                        }\n                    }\n\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-built_in\">array</span>-<span class=\"hljs-built_in\">array</span>',\n                        reason: 'target-<span class=\"hljs-keyword\">not</span>-<span class=\"hljs-built_in\">array</span>',\n                        message: '<span class=\"hljs-type\">Target</span> <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> an <span class=\"hljs-built_in\">array</span>.'\n                    }\n                }\n            },\n\n            validatorFunction: function (target, validatorFunction, extra) {\n                <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span> = validatorFunction(target, extra.key, extra.parent);\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>) {\n                    <span class=\"hljs-keyword\">if</span> (typeof <span class=\"hljs-literal\">result</span> === '<span class=\"hljs-built_in\">string</span>') {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                            <span class=\"hljs-keyword\">type</span>: 'function',\n                            reason: 'returned-<span class=\"hljs-literal\">false</span>',\n                            message: '<span class=\"hljs-type\">Target</span> did <span class=\"hljs-keyword\">not</span> pass the function check',\n                            funcInfo: <span class=\"hljs-literal\">result</span>\n                        }\n                    }\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: 'function',\n                        reason: 'returned-<span class=\"hljs-literal\">false</span>',\n                        message: '<span class=\"hljs-type\">Target</span> did <span class=\"hljs-keyword\">not</span> pass the function check',\n                        funcInfo: extra.funcInfo\n                    }\n                }\n            },\n\n            validatorOrArray: function (target, validator, extra) {\n                <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span>, fails = [];\n                <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = extra.orStartIndex || <span class=\"hljs-number\">0</span>; i &lt; validator.length; i++) {\n                    <span class=\"hljs-literal\">result</span> = validatorsUtils.validate(target, validator[i], extra);\n\n                    <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-literal\">result</span>) {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                            <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">or</span>-<span class=\"hljs-built_in\">array</span>',\n                            reason: 'validator-error',\n                            vIndex: i,\n                            path: extra.path.join('.'),\n                            message: '<span class=\"hljs-type\">Problem</span> <span class=\"hljs-keyword\">with</span> validating against validator, validator problem'\n                        }\n                    }\n\n                    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.<span class=\"hljs-literal\">result</span>) {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                        }\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        <span class=\"hljs-literal\">result</span>.vIndex = i;\n                        fails.push(<span class=\"hljs-literal\">result</span>);\n                    }\n                }\n\n                <span class=\"hljs-keyword\">return</span> {\n                    <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                    <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">or</span>-<span class=\"hljs-built_in\">array</span>',\n                    reason: 'all-types-failed',\n                    subResult: fails,\n                    message: '<span class=\"hljs-type\">Did</span> <span class=\"hljs-keyword\">not</span> match <span class=\"hljs-keyword\">or</span>-<span class=\"hljs-built_in\">array</span>'\n                }\n            },\n\n            validatorValueArray: function (target, validator) {\n                <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span>, fails = [];\n                <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">1</span>; i &lt; validator.length; i++) {\n                    <span class=\"hljs-literal\">result</span> = validatorsUtils.exactValidator(target, validator[i]);\n\n                    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.<span class=\"hljs-literal\">result</span>) {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                        }\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        <span class=\"hljs-literal\">result</span>.vIndex = i;\n                        fails.push(<span class=\"hljs-literal\">result</span>);\n                    }\n                }\n\n                <span class=\"hljs-keyword\">return</span> {\n                    <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                    <span class=\"hljs-keyword\">type</span>: 'value-<span class=\"hljs-built_in\">array</span>',\n                    reason: 'all-values-failed',\n                    subResult: fails,\n                    message: '<span class=\"hljs-type\">Did</span> <span class=\"hljs-keyword\">not</span> exact equal <span class=\"hljs-built_in\">any</span> value <span class=\"hljs-keyword\">in</span> the value-<span class=\"hljs-built_in\">array</span>'\n                }\n            },\n\n            validatorNotArray: function (target, validator, extra) {\n                <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span>;\n                <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">1</span>; i &lt; validator.length; i++) {\n                    <span class=\"hljs-literal\">result</span> = validatorsUtils.validate(target, validator[i], extra);\n                    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.<span class=\"hljs-literal\">result</span>) {\n                        <span class=\"hljs-literal\">result</span>.vIndex = i;\n                        <span class=\"hljs-literal\">result</span>.message = '<span class=\"hljs-type\">The</span> sub-validator returns <span class=\"hljs-literal\">true</span> <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">not</span>-<span class=\"hljs-built_in\">array</span> check.';\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                            <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">not</span>-<span class=\"hljs-built_in\">array</span>',\n                            reason: 'some-failed',\n                            subResult: [<span class=\"hljs-literal\">result</span>],\n                            message: '<span class=\"hljs-type\">Did</span> <span class=\"hljs-keyword\">not</span> meet the <span class=\"hljs-keyword\">not</span>-<span class=\"hljs-built_in\">array</span> validator'\n                        }\n                    }\n                }\n\n                <span class=\"hljs-keyword\">return</span> {\n                    <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                }\n            },\n\n            validatorAndArray: function (target, validator, extra) {\n                <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span>;\n                <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">1</span>; i &lt; validator.length; i++) {\n                    <span class=\"hljs-literal\">result</span> = validatorsUtils.validate(target, validator[i], extra);\n                    <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-literal\">result</span>.<span class=\"hljs-literal\">result</span>) {\n                        <span class=\"hljs-literal\">result</span>.vIndex = i;\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                            <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">and</span>-<span class=\"hljs-built_in\">array</span>',\n                            reason: 'some-failed',\n                            subResult: [<span class=\"hljs-literal\">result</span>],\n                            message: '<span class=\"hljs-type\">Did</span> <span class=\"hljs-keyword\">not</span> meet all validators <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">and</span> <span class=\"hljs-built_in\">array</span>'\n                        }\n                    }\n                }\n\n                <span class=\"hljs-keyword\">return</span> {\n                    <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                }\n            },\n\n            stringValidator: function (target, validator, extra) {\n                <span class=\"hljs-keyword\">if</span> (validator.substr(<span class=\"hljs-number\">0</span>, <span class=\"hljs-number\">1</span>) === '=') {\n                    <span class=\"hljs-keyword\">var</span> refPath = extra.path.join('.');\n                    extra.pendingRefs[refPath + ':' + validator.substr(<span class=\"hljs-number\">1</span>)] = target;\n                    <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>}\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator === 'nan') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.nanValidator(target);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator === 'infinity') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.exactValidator(target, <span class=\"hljs-type\">Infinity</span>);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator === '-infinity') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.exactValidator(target, -<span class=\"hljs-type\">Infinity</span>);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator === 'null' || validator === null) {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.exactValidator(target, null);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator === 'undefined' || validator === undefined) {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.exactValidator(target, undefined);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator === 'number' || validator === 'boolean'\n                    || validator === 'function' || validator === '<span class=\"hljs-built_in\">string</span>') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.typeValidator(target, validator);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator === '<span class=\"hljs-keyword\">object</span>') {\n                    <span class=\"hljs-keyword\">if</span> (target === null) {\n                        <span class=\"hljs-keyword\">return</span> {\n                            <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                            <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">type</span>',\n                            reason: '<span class=\"hljs-keyword\">not</span>-null-<span class=\"hljs-keyword\">object</span>',\n                            message: '<span class=\"hljs-type\">Target</span> should be an non-null <span class=\"hljs-keyword\">object</span>'\n                        }\n                    }\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.typeValidator(target, '<span class=\"hljs-keyword\">object</span>');\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator === '<span class=\"hljs-built_in\">array</span>') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.arrayValidator(target);\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (validator === 'regexp') {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.regexpValidator(target);\n                }\n            },\n            regexpValidator: function (target) {\n                <span class=\"hljs-keyword\">if</span> (utils.isRegExp(target)) {\n                    <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>};\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">type</span>',\n                        reason: 'regexp',\n                        message: '<span class=\"hljs-type\">Target</span> <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> a <span class=\"hljs-type\">RegExp</span>'\n                    }\n                }\n            },\n            arrayValidator: function (target) {\n                <span class=\"hljs-keyword\">if</span> (utils.isArray(target)) {\n                    <span class=\"hljs-keyword\">return</span> {<span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>}\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">type</span>',\n                        reason: '<span class=\"hljs-built_in\">array</span>',\n                        message: '<span class=\"hljs-type\">Target</span> <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> an <span class=\"hljs-built_in\">array</span>'\n                    }\n                }\n            },\n            nanValidator: function (target) {\n                <span class=\"hljs-keyword\">if</span> (typeof target === 'number' &amp;&amp; isNaN(target)) {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                    };\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">type</span>',\n                        reason: 'nan',\n                        message: '<span class=\"hljs-type\">Target</span> <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> <span class=\"hljs-type\">NaN</span>'\n                    }\n                }\n            },\n            typeValidator: function (target, <span class=\"hljs-keyword\">type</span>) {\n                <span class=\"hljs-keyword\">if</span> (typeof target === <span class=\"hljs-keyword\">type</span>) {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: '<span class=\"hljs-keyword\">type</span>',\n                        reason: <span class=\"hljs-keyword\">type</span>,\n                        message: '<span class=\"hljs-type\">Target</span> value <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> <span class=\"hljs-keyword\">of</span> the expected <span class=\"hljs-keyword\">type</span>'\n                    }\n                }\n            },\n            exactValidator: function (target, expected) {\n                <span class=\"hljs-keyword\">if</span> (expected &amp;&amp; typeof expected === '<span class=\"hljs-keyword\">object</span>' || typeof expected === 'function') {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: 'exact-equal',\n                        reason: 'validator-<span class=\"hljs-keyword\">is</span>-complex',\n                        message: '<span class=\"hljs-type\">Validator</span> should <span class=\"hljs-keyword\">not</span> be an <span class=\"hljs-keyword\">object</span>/function <span class=\"hljs-keyword\">in</span> exact match'\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (target === expected) {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">true</span>\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> {\n                        <span class=\"hljs-literal\">result</span>: <span class=\"hljs-literal\">false</span>,\n                        <span class=\"hljs-keyword\">type</span>: 'exact-equal',\n                        reason: '<span class=\"hljs-keyword\">not</span>-equal',\n                        expected: expected,\n                        message: '<span class=\"hljs-type\">Target</span> <span class=\"hljs-keyword\">is</span> <span class=\"hljs-keyword\">not</span> equal to the expected value.'\n                    }\n                }\n            },\n\n            </code></pre>",
         "index": 21
      },
      {
         "lineStart": 680,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazy.validators.summarizeTypeValidator",
               "defHtml": " <a data-jsdef-prop=\"target\">target</a> =&gt; <a data-jsdef-prop=\"suggestedValidator\">suggestedValidator</a>",
               "commentHtml": "<p> This method will try to go through the targetValue,\n and exact a suggest validator for the developer,\n so that it&#39;s quite easy to simply copy &amp; paste to write your validate assertions</p>\n"
            }
         ],
         "index": 22
      },
      {
         "type": "source",
         "html": "<pre><code>\n            summarizeTypeValidator: function (target) {\n                <span class=\"hljs-keyword\">var</span> rawValidator = validatorsUtils.preSummarizeTypeValidator(target);\n\n                <span class=\"hljs-keyword\">var</span> validator = validatorsUtils.extractValidatorFromRaw(rawValidator);\n                validator = validatorsUtils.removeOrphanUndefined(validator);\n                <span class=\"hljs-keyword\">return</span> validator;\n            },\n\n            removeOrphanUndefined: function (validator) {\n                <span class=\"hljs-keyword\">if</span> (validator &amp;&amp; typeof validator === '<span class=\"hljs-keyword\">object</span>') {\n                    <span class=\"hljs-keyword\">var</span> isInArray = utils.isArray(validator);\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> validator) {\n                        <span class=\"hljs-keyword\">if</span> ((typeof validator[key] === 'undefined'\n                                || validator[key] === 'undefined') &amp;&amp; !isInArray) {\n                            delete validator[key];\n                        }\n                        <span class=\"hljs-keyword\">else</span> {\n                            validatorsUtils.removeOrphanUndefined(validator[key]);\n                        }\n                    }\n                }\n                <span class=\"hljs-keyword\">return</span> validator;\n            },\n\n            extractValidatorFromRaw: function (validator) {\n                <span class=\"hljs-keyword\">var</span> <span class=\"hljs-literal\">result</span> = [];\n                validator[<span class=\"hljs-number\">2</span>].forEach(function (<span class=\"hljs-keyword\">type</span>) {\n                    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> === '<span class=\"hljs-keyword\">object</span>') {\n                        <span class=\"hljs-keyword\">var</span> <span class=\"hljs-keyword\">object</span> = {};\n                        <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">0</span>]) {\n                            <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> validator[<span class=\"hljs-number\">0</span>]) {\n                                <span class=\"hljs-keyword\">var</span> defaultValidator = validatorsUtils.extractValidatorFromRaw(validator[<span class=\"hljs-number\">0</span>][key]);\n                                <span class=\"hljs-keyword\">if</span> (defaultValidator) {\n                                    <span class=\"hljs-keyword\">object</span>[key] = defaultValidator;\n                                }\n                            }\n                        }\n                        <span class=\"hljs-literal\">result</span>.push(<span class=\"hljs-keyword\">object</span>);\n                    }\n                    <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> === '<span class=\"hljs-built_in\">array</span>') {\n                        <span class=\"hljs-keyword\">var</span> <span class=\"hljs-built_in\">array</span>;\n\n                        <span class=\"hljs-keyword\">if</span> (validator[<span class=\"hljs-number\">1</span>] &amp;&amp; validator[<span class=\"hljs-number\">1</span>].length) {\n                            <span class=\"hljs-built_in\">array</span> = validatorsUtils.extractValidatorFromRaw(validator[<span class=\"hljs-number\">1</span>]);\n                            <span class=\"hljs-keyword\">if</span> (typeof <span class=\"hljs-built_in\">array</span> === '<span class=\"hljs-built_in\">string</span>' || typeof <span class=\"hljs-built_in\">array</span> === '<span class=\"hljs-keyword\">object</span>') {\n                                <span class=\"hljs-built_in\">array</span> = ['<span class=\"hljs-built_in\">array</span>', <span class=\"hljs-built_in\">array</span>];\n                            }\n                            <span class=\"hljs-keyword\">else</span> {\n                                <span class=\"hljs-built_in\">array</span>.unshift('<span class=\"hljs-built_in\">array</span>');\n                            }\n                        }\n                        <span class=\"hljs-keyword\">else</span> {\n                            <span class=\"hljs-built_in\">array</span> = ['<span class=\"hljs-built_in\">array</span>'];\n                        }\n\n                        <span class=\"hljs-literal\">result</span>.push(<span class=\"hljs-built_in\">array</span>);\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        <span class=\"hljs-literal\">result</span>.push(<span class=\"hljs-keyword\">type</span>);\n                    }\n                });\n\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.length === <span class=\"hljs-number\">1</span>) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">result</span>[<span class=\"hljs-number\">0</span>];\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-literal\">result</span>.length) {\n                    <span class=\"hljs-keyword\">return</span> undefined;\n                }\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">result</span>;\n            },\n\n            </code></pre>",
         "index": 23
      },
      {
         "lineStart": 759,
         "type": "comment",
         "api": [],
         "index": 24
      },
      {
         "type": "source",
         "html": "<pre><code>\n            preSummarizeTypeValidator: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">target, path</span>) </span>{\n                <span class=\"hljs-keyword\">var</span> validator;\n                path = path || <span class=\"hljs-string\">''</span>;\n\n                <span class=\"hljs-keyword\">if</span> (utils.isRegExp(target)) {\n                    <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, [<span class=\"hljs-string\">'regexp'</span>]];\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (utils.isArray(target)) {\n                    <span class=\"hljs-keyword\">if</span> (target[VALIDATE_KEY]) {\n                        <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, []];\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        target[VALIDATE_KEY] = path;\n                    }\n\n                    validator = [<span class=\"hljs-literal\">null</span>, [], [<span class=\"hljs-string\">'array'</span>]];\n\n                    target.forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">item, index</span>) </span>{\n                        <span class=\"hljs-keyword\">var</span> subValidator = validatorsUtils.preSummarizeTypeValidator(item, (path ? path + <span class=\"hljs-string\">'.'</span> : <span class=\"hljs-string\">''</span>) + index);\n                        validatorsUtils.mergeChildSummary(validator, subValidator);\n                    });\n\n                    <span class=\"hljs-keyword\">delete</span> target[VALIDATE_KEY];\n                    <span class=\"hljs-keyword\">return</span> validator;\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> target === <span class=\"hljs-string\">'object'</span>) {\n                    <span class=\"hljs-keyword\">if</span> (target) {\n                        <span class=\"hljs-keyword\">if</span> (target[VALIDATE_KEY]) {\n                            <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, []];\n                        }\n                        <span class=\"hljs-keyword\">else</span> {\n                            target[VALIDATE_KEY] = path || <span class=\"hljs-string\">''</span>;\n                        }\n                        validator = {};\n\n                        <span class=\"hljs-keyword\">var</span> keys = [];\n                        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> target) {\n                            <span class=\"hljs-keyword\">if</span> (key !== VALIDATE_KEY) {\n                                keys.push(key);\n                            }\n                        }\n                        keys.sort();\n                        keys.forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">key</span>) </span>{\n                            validator[key] = [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, []];\n\n                            validatorsUtils.mergeSiblingSummary(validator[key], validatorsUtils.preSummarizeTypeValidator(target[key], (path ? path + <span class=\"hljs-string\">'.'</span> : <span class=\"hljs-string\">''</span>) + key));\n                        });\n\n                        <span class=\"hljs-keyword\">delete</span> target[VALIDATE_KEY];\n\n                        <span class=\"hljs-keyword\">return</span> [validator, <span class=\"hljs-literal\">null</span>, [<span class=\"hljs-string\">'object'</span>]];\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, [<span class=\"hljs-string\">'null'</span>]];\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> target === <span class=\"hljs-string\">'number'</span>) {\n                    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-built_in\">isNaN</span>(target)) {\n                        <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, [<span class=\"hljs-string\">'nan'</span>]];\n                    }\n                    <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (target === <span class=\"hljs-literal\">Infinity</span>) {\n                        <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, [<span class=\"hljs-string\">'infinity'</span>]];\n                    }\n                    <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (target === -<span class=\"hljs-literal\">Infinity</span>) {\n                        <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, [<span class=\"hljs-string\">'-infinity'</span>]];\n                    }\n                    <span class=\"hljs-keyword\">else</span> {\n                        <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, [<span class=\"hljs-string\">'number'</span>]];\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> target === <span class=\"hljs-string\">'function'</span>) {\n</code></pre>",
         "index": 25
      },
      {
         "type": "comment",
         "lineStart": 838,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> do not extract function as the default validator</p>\n"
            }
         ],
         "index": 26
      },
      {
         "type": "source",
         "html": "<pre><code>                    <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, []];\n                }\n                <span class=\"hljs-keyword\">else</span> {\n</code></pre>",
         "index": 27
      },
      {
         "type": "comment",
         "lineStart": 842,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> boolean, undefined, string</p>\n"
            }
         ],
         "index": 28
      },
      {
         "type": "source",
         "html": "<pre><code>                    <span class=\"hljs-keyword\">return</span> [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, [<span class=\"hljs-keyword\">typeof</span> target]];\n                }\n            },\n\n            <span class=\"hljs-attribute\">mergeSiblingSummary</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">previous, current</span>) </span>{\n                current[<span class=\"hljs-number\">2</span>].forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">type</span>) </span>{\n                    validatorsUtils.mergeChildSummary(previous, type);\n                });\n                <span class=\"hljs-keyword\">if</span> (current[<span class=\"hljs-number\">1</span>] &amp;&amp; current[<span class=\"hljs-number\">1</span>].length) {\n                    validatorsUtils.mergeChildSummary(previous, current[<span class=\"hljs-number\">1</span>]);\n                }\n                <span class=\"hljs-keyword\">if</span> (current[<span class=\"hljs-number\">0</span>]) {\n                    validatorsUtils.mergeChildSummary(previous, current[<span class=\"hljs-number\">0</span>]);\n                }\n            },\n\n            <span class=\"hljs-attribute\">mergeChildSummary</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">parent, child</span>) </span>{\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> child === <span class=\"hljs-string\">'string'</span>) {\n                    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">2</span>].indexOf(child) === <span class=\"hljs-number\">-1</span>) {\n                        <span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">2</span>].push(child);\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (utils.isArray(child)) {\n                    <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">1</span>] || !<span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">1</span>].length) {\n                        <span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">1</span>] = [<span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">null</span>, []];\n                    }\n                    child[<span class=\"hljs-number\">2</span>].forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">type</span>) </span>{\n                        validatorsUtils.mergeChildSummary(<span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">1</span>], type);\n                    });\n                    <span class=\"hljs-keyword\">if</span> (child[<span class=\"hljs-number\">1</span>] &amp;&amp; child[<span class=\"hljs-number\">1</span>].length) {\n                        validatorsUtils.mergeChildSummary(<span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">1</span>], child[<span class=\"hljs-number\">1</span>]);\n                    }\n                    <span class=\"hljs-keyword\">if</span> (child[<span class=\"hljs-number\">0</span>]) {\n                        validatorsUtils.mergeChildSummary(<span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">1</span>], child[<span class=\"hljs-number\">0</span>]);\n                    }\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> child === <span class=\"hljs-string\">'object'</span>) {\n                    <span class=\"hljs-keyword\">var</span> isFirst = <span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">0</span>] === <span class=\"hljs-literal\">null</span>, currentKeys = {};\n                    <span class=\"hljs-keyword\">if</span> (isFirst) {\n                        <span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">0</span>] = {};\n                    }\n                    <span class=\"hljs-title\">else</span> {\n                        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> <span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">0</span>]) {\n                            currentKeys[key] = <span class=\"hljs-number\">1</span>;\n                        }\n                    }\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> child) {\n                        <span class=\"hljs-keyword\">if</span> (isFirst) {\n                            <span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">0</span>][key] = [<span class=\"hljs-literal\">null</span>, [], []];\n                        }\n                        <span class=\"hljs-title\">else</span> {\n                            <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">0</span>][key]) {\n                                <span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">0</span>][key] = [<span class=\"hljs-literal\">null</span>, [], [<span class=\"hljs-string\">'undefined'</span>]];\n                            }\n                        }\n                        <span class=\"hljs-keyword\">delete</span> currentKeys[key];\n                        validatorsUtils.mergeSiblingSummary(<span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">0</span>][key], child[key]);\n                    }\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> currentKeys) {\n                        validatorsUtils.mergeChildSummary(<span class=\"hljs-built_in\">parent</span>[<span class=\"hljs-number\">0</span>][key], <span class=\"hljs-string\">'undefined'</span>);\n                    }\n                }\n            },\n\n            </code></pre>",
         "index": 29
      },
      {
         "lineStart": 909,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "target",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "lazy.validators.clearValidateKey",
               "defHtml": " <a data-jsdef-prop=\"target\">target</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
               "commentHtml": "<p> @deprecated this would not be needed as the key will always removed on the fly</p>\n<p> Clean all <a data-jsdef-link=\"~VALIDATE_KEY\">~VALIDATE_KEY</a> flag from (sub) objects &amp; (sub) arrays</p>\n"
            }
         ],
         "index": 30
      },
      {
         "type": "source",
         "html": "<pre><code>\n            clearValidateKey: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span></span> (<span class=\"hljs-keyword\">target</span>) {\n                <span class=\"hljs-keyword\">if</span> (typeof <span class=\"hljs-keyword\">target</span> === <span class=\"hljs-string\">'object'</span> &amp;&amp; <span class=\"hljs-keyword\">target</span>) {\n                    <span class=\"hljs-keyword\">if</span> (VALIDATE_KEY <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">target</span>) {\n                        delete <span class=\"hljs-keyword\">target</span>[VALIDATE_KEY];\n                        for (var key <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">target</span>) {\n                            validatorsUtils.clearValidateKey(<span class=\"hljs-keyword\">target</span>[key]);\n                        }\n                    }\n                }\n            },\n\n            </code></pre>",
         "index": 31
      },
      {
         "lineStart": 928,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazy.validators.printWarnings",
               "defHtml": " <a data-jsdef-prop=\"result\">result</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
               "commentHtml": "<p> Print out all warnings based on the failed result</p>\n"
            },
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p><a data-jsdef-link=\".validate.result\">.validate.result</a></p>\n"
            }
         ],
         "index": 32
      },
      {
         "type": "source",
         "html": "<pre><code>\n            printWarnings: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">result</span>) </span>{\n                <span class=\"hljs-built_in\">console</span>.warn(validatorsUtils.getWarnings(result));\n            },\n\n            <span class=\"hljs-attr\">getWarnings</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">result</span>) </span>{\n                validatorsUtils.formalizeFailResultItem(result);\n                <span class=\"hljs-keyword\">var</span> warning = validatorsUtils.mergeFailResults(result);\n                <span class=\"hljs-keyword\">return</span> validatorsUtils.getWarningText(warning);\n            },\n\n            <span class=\"hljs-attr\">getWarningText</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">warning, indent</span>) </span>{\n                indent = indent || <span class=\"hljs-string\">''</span>;\n                <span class=\"hljs-keyword\">var</span> result = indent + warning.message;\n                <span class=\"hljs-keyword\">if</span> (warning.subResult) {\n                    result += <span class=\"hljs-string\">'\\n'</span> + warning.subResult.map(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">warning</span>) </span>{\n                        <span class=\"hljs-keyword\">return</span> validatorsUtils.getWarningText(warning, indent + <span class=\"hljs-string\">'   '</span>);\n                    }).join(<span class=\"hljs-string\">'\\n'</span>);\n                }\n                <span class=\"hljs-keyword\">return</span> result;\n            },\n\n            </code></pre>",
         "index": 33
      },
      {
         "lineStart": 955,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "valPath",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": ""
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "condPath",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": ""
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "finalMessage",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": ""
                        }
                     ],
                     "name": "result",
                     "as": "~FinalResult",
                     "defHtml": " <a data-jsdef-prop=\"extends\">extends</a> <a data-jsdef-link=\".validators.validator.result\">.validators.validator.result</a> <a data-jsdef-as=\"~FinalResult\">~FinalResult</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "lazy.validators.formalizeFailResultItem",
               "defHtml": " <a data-jsdef-prop=\"result\">result</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
               "commentHtml": "<p> build up valPath &amp; condPath\n generate finalMessage</p>\n"
            }
         ],
         "index": 34
      },
      {
         "type": "source",
         "html": "<pre><code>\n            formalizeFailResultItem: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(result, parentValPath, parentCondPath, extra)</span> </span>{\n                extra = extra || {};\n\n                parentValPath = parentValPath || <span class=\"hljs-string\">'$VAL'</span>;\n                parentCondPath = parentCondPath || <span class=\"hljs-string\">'$COND'</span>;\n\n                <span class=\"hljs-keyword\">var</span> currentValPath = parentValPath;\n                <span class=\"hljs-keyword\">var</span> currentCondPath = parentCondPath;\n\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-string\">'vIndex'</span> <span class=\"hljs-keyword\">in</span> result) {\n                    <span class=\"hljs-keyword\">var</span> condType = extra.parentType === <span class=\"hljs-string\">'or-array'</span> ?\n                        <span class=\"hljs-string\">'or'</span> : extra.parentType === <span class=\"hljs-string\">'and-array'</span> ?\n                            <span class=\"hljs-string\">'and'</span> : extra.parentType === <span class=\"hljs-string\">'array-array'</span> ?\n                                <span class=\"hljs-string\">'array'</span> : extra.parentType === <span class=\"hljs-string\">'not-array'</span> ?\n                                    <span class=\"hljs-string\">'not'</span> : extra.parentType === <span class=\"hljs-string\">'value-array'</span> ?\n                                        <span class=\"hljs-string\">'value'</span> : <span class=\"hljs-string\">''</span>;\n                    currentCondPath = currentCondPath + <span class=\"hljs-string\">'.['</span> + (condType ? condType + <span class=\"hljs-string\">':'</span> : <span class=\"hljs-string\">''</span>) + result.vIndex + <span class=\"hljs-string\">']'</span>;\n                }\n\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-string\">'index'</span> <span class=\"hljs-keyword\">in</span> result) {\n                    currentValPath = currentValPath + <span class=\"hljs-string\">'.['</span> + result.index + <span class=\"hljs-string\">']'</span>;\n                }\n\n                <span class=\"hljs-keyword\">if</span> (result.key) {\n                    currentValPath = currentValPath + <span class=\"hljs-string\">'.'</span> + result.key;\n                    currentCondPath = currentCondPath + <span class=\"hljs-string\">'.'</span> + result.key;\n                }\n\n                result.valPath = currentValPath;\n                result.condPath = currentCondPath;\n\n                <span class=\"hljs-keyword\">if</span> (result.subResult) {\n</code></pre>",
         "index": 35
      },
      {
         "type": "comment",
         "lineStart": 997,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;@@d&#39;, result.subResult);</p>\n"
            }
         ],
         "index": 36
      },
      {
         "type": "source",
         "html": "<pre><code>\n                    <span class=\"hljs-literal\">result</span>.subResult.forEach(function (subResult) {\n                        validatorsUtils.formalizeFailResultItem(\n                            subResult, currentValPath, currentCondPath, {\n                                parentType: <span class=\"hljs-literal\">result</span>.<span class=\"hljs-keyword\">type</span>\n                            }\n                        )\n                    });\n                }\n\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.<span class=\"hljs-keyword\">type</span> === 'regexp') {\n                    <span class=\"hljs-literal\">result</span>.finalMessage = <span class=\"hljs-literal\">result</span>.message + ' &lt;<span class=\"hljs-type\">REGEXP</span>: ' + <span class=\"hljs-literal\">result</span>.regexp.toString() + ' &gt;';\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.<span class=\"hljs-keyword\">type</span> === '<span class=\"hljs-keyword\">type</span>') {\n                    <span class=\"hljs-literal\">result</span>.finalMessage = <span class=\"hljs-literal\">result</span>.message + ' &lt;<span class=\"hljs-type\">Expected</span> <span class=\"hljs-keyword\">type</span>: ' + <span class=\"hljs-literal\">result</span>.reason + ' &gt;';\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.<span class=\"hljs-keyword\">type</span> === 'function' &amp;&amp; <span class=\"hljs-literal\">result</span>.funcInfo) {\n                    <span class=\"hljs-literal\">result</span>.finalMessage = <span class=\"hljs-literal\">result</span>.message + ' &lt;<span class=\"hljs-type\">Expected</span> func test: ' + <span class=\"hljs-literal\">result</span>.funcInfo + ' &gt;';\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.<span class=\"hljs-keyword\">type</span> == 'exact-equal' &amp;&amp; ('expected' <span class=\"hljs-keyword\">in</span> <span class=\"hljs-literal\">result</span>)) {\n                    <span class=\"hljs-literal\">result</span>.finalMessage = <span class=\"hljs-literal\">result</span>.message + ' &lt;<span class=\"hljs-type\">Expected</span> value: ' + <span class=\"hljs-literal\">result</span>.expected + ' &gt;';\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.<span class=\"hljs-keyword\">type</span> === '<span class=\"hljs-keyword\">ref</span>-check') {\n                    <span class=\"hljs-literal\">result</span>.finalMessage = <span class=\"hljs-literal\">result</span>.message + ' source: ' + <span class=\"hljs-literal\">result</span>.sourcePath + ' target: ' + <span class=\"hljs-literal\">result</span>.targetPath;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-literal\">result</span>.finalMessage = <span class=\"hljs-literal\">result</span>.message;\n                }\n\n                <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">result</span>;\n            },\n\n            </code></pre>",
         "index": 37
      },
      {
         "lineStart": 1030,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "result",
                     "defHtml": " <a data-jsdef-link=\".formalizeFailResultItem.result\">.formalizeFailResultItem.result</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "message",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": ""
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "subResult",
                           "defHtml": " [<a data-jsdef-prop=\"warningResult\">warningResult</a>]",
                           "commentHtml": ""
                        }
                     ],
                     "name": "warningResult",
                     "defHtml": " {}",
                     "commentHtml": ""
                  }
               ],
               "name": "lazy.validators.mergeFailResults",
               "defHtml": " <a data-jsdef-prop=\"result\">result</a> =&gt; <a data-jsdef-prop=\"warningResult\">warningResult</a>",
               "commentHtml": ""
            }
         ],
         "index": 38
      },
      {
         "type": "source",
         "html": "<pre><code>\n            mergeFailResults: function (<span class=\"hljs-literal\">result</span>) {\n                <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.subResult &amp;&amp; <span class=\"hljs-literal\">result</span>.subResult.length === <span class=\"hljs-number\">1</span>) {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.mergeFailResults(<span class=\"hljs-literal\">result</span>.subResult[<span class=\"hljs-number\">0</span>]);\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">var</span> warningResult = {};\n                    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-literal\">result</span>.subResult) {\n                        warningResult.subResult = <span class=\"hljs-literal\">result</span>.subResult.map(function (subResult) {\n                            <span class=\"hljs-keyword\">return</span> validatorsUtils.mergeFailResults(subResult);\n                        });\n                    }\n                    warningResult.message = <span class=\"hljs-literal\">result</span>.valPath + ' : ' + <span class=\"hljs-literal\">result</span>.condPath + ' =&gt; ' + <span class=\"hljs-literal\">result</span>.finalMessage;\n                    <span class=\"hljs-keyword\">return</span> warningResult;\n                }\n            },\n\n            </code></pre>",
         "index": 39
      },
      {
         "lineStart": 1055,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "value",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": "<p> The value to be debug</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "validator",
                     "defHtml": " <a data-jsdef-link=\"~Validator\">~Validator</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "result",
                     "defHtml": " <a data-jsdef-link=\"~FinalResult\">~FinalResult</a>",
                     "commentHtml": "<p> For extracting the problematic valPath &amp; condPath,\n so that the related path in value &amp; validator can be highlighted</p>\n"
                  }
               ],
               "name": "lazy.validators.printDebug",
               "defHtml": " <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"validator\">validator</a>, <a data-jsdef-prop=\"result\">result</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
               "commentHtml": ""
            }
         ],
         "index": 40
      },
      {
         "type": "source",
         "html": "<pre><code>\n            printDebug: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(value, validator, result)</span> </span>{\n                <span class=\"hljs-keyword\">var</span> problemPaths = validatorsUtils.getProblemPaths(result);\n\n</code></pre>",
         "index": 41
      },
      {
         "type": "comment",
         "lineStart": 1069,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;@@d&#39;, result);</p>\n"
            }
         ],
         "index": 42
      },
      {
         "type": "comment",
         "lineStart": 1070,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;@@d&#39;, problemPaths);</p>\n"
            }
         ],
         "index": 43
      },
      {
         "type": "source",
         "html": "<pre><code>\n                <span class=\"hljs-built_in\">console</span>.warn(<span class=\"hljs-string\">'[WARN] $VAL ='</span>);\n                <span class=\"hljs-built_in\">console</span>.warn(<span class=\"hljs-built_in\">JSON</span>.stringify(validatorsUtils.debugOutputValue(value, problemPaths), <span class=\"hljs-literal\">null</span>, <span class=\"hljs-number\">2</span>));\n                <span class=\"hljs-built_in\">console</span>.warn(<span class=\"hljs-string\">'[WARN] $COND ='</span>);\n                <span class=\"hljs-built_in\">console</span>.warn(<span class=\"hljs-built_in\">JSON</span>.stringify(validatorsUtils.debugOutputValidator(validator, problemPaths), <span class=\"hljs-literal\">null</span>, <span class=\"hljs-number\">2</span>));\n            },\n\n            </code></pre>",
         "index": 44
      },
      {
         "lineStart": 1078,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "result",
                     "defHtml": " <a data-jsdef-link=\"~FinalResult\">~FinalResult</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "path",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": "<p> e.g. $VAL.someKey.[1].someOtherKey</p>\n"
                        }
                     ],
                     "name": "problemPaths",
                     "as": "~ProblemPaths",
                     "defHtml": " {<a data-jsdef-prop=\"path\">path</a>: &apos;<a data-jsdef-prop=\"leaf\">leaf</a>&apos; | &apos;<a data-jsdef-prop=\"not-leaf\">not-leaf</a>&apos;} <a data-jsdef-as=\"~ProblemPaths\">~ProblemPaths</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "lazy.validators.getProblemPaths",
               "defHtml": " <a data-jsdef-prop=\"result\">result</a>, <a data-jsdef-prop=\"problemPaths\">problemPaths</a> =&gt; <a data-jsdef-prop=\"problemPaths\">problemPaths</a>",
               "commentHtml": "<p> Extract all valPath &amp; condPath from result</p>\n"
            }
         ],
         "index": 45
      },
      {
         "type": "source",
         "html": "<pre><code>\n            getProblemPaths: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(result, problemPaths)</span> </span>{\n                problemPaths = problemPaths || {};\n\n                <span class=\"hljs-keyword\">if</span> (result.subResult) {\n                    result.subResult.<span class=\"hljs-keyword\">forEach</span>(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(subResult)</span> </span>{\n                        validatorsUtils.getProblemPaths(subResult, problemPaths);\n                    });\n                    problemPaths[result.valPath] = <span class=\"hljs-string\">'not-leaf'</span>;\n                    problemPaths[result.condPath] = <span class=\"hljs-string\">'not-leaf'</span>;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    problemPaths[result.valPath] = <span class=\"hljs-string\">'leaf'</span>;\n                    problemPaths[result.condPath] = <span class=\"hljs-string\">'leaf'</span>;\n                }\n\n                <span class=\"hljs-keyword\">return</span> problemPaths;\n            },\n\n            </code></pre>",
         "index": 46
      },
      {
         "lineStart": 1106,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "rawValue",
                     "defHtml": " <a data-jsdef-prop=\"any\">any</a>",
                     "commentHtml": "<p> But only primitive value will be processed</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "path",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> If the full path can be found in problemPaths, this value will be processed</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "problemPaths",
                     "defHtml": " <a data-jsdef-link=\"~ProblemPaths\">~ProblemPaths</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "valueDisplay",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p>  Example:</p>\n<p>  123         =&gt; &quot;123 &lt;&lt;----- NOTICE&quot;\n  &#39;abc&#39;       =&gt; &quot;&#39;abc&#39; &lt;&lt;----- NOTICE&quot;\n  true        =&gt; &quot;true &lt;&lt;----- NOTICE&quot;\n  null        =&gt; &quot;null &lt;&lt;----- NOTICE&quot;\n  undefined   =&gt; &quot;undefined &lt;&lt;----- NOTICE&quot;</p>\n"
                  }
               ],
               "name": "lazy.validators.getPrimitiveValue",
               "defHtml": " <a data-jsdef-prop=\"rawValue\">rawValue</a>, <a data-jsdef-prop=\"parentPath\">parentPath</a>, <a data-jsdef-prop=\"key\">key</a>, <a data-jsdef-prop=\"problemPaths\">problemPaths</a> =&gt; <a data-jsdef-prop=\"valueDisplay\">valueDisplay</a>",
               "commentHtml": ""
            }
         ],
         "index": 47
      },
      {
         "type": "source",
         "html": "<pre><code>\n            getPrimitiveValueNotice: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(rawValue, path, problemPaths)</span> </span>{\n                <span class=\"hljs-keyword\">if</span> (problemPaths[path]\n                    &amp;&amp; (<span class=\"hljs-keyword\">typeof</span> rawValue !== <span class=\"hljs-string\">'object'</span> || rawValue === <span class=\"hljs-literal\">null</span>)\n                    &amp;&amp; <span class=\"hljs-keyword\">typeof</span> rawValue !== <span class=\"hljs-string\">'function'</span>) {\n</code></pre>",
         "index": 48
      },
      {
         "type": "comment",
         "lineStart": 1132,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;@@d&#39;, JSON.stringify(rawValue));</p>\n"
            }
         ],
         "index": 49
      },
      {
         "type": "source",
         "html": "<pre><code>                    <span class=\"hljs-keyword\">return</span> (JSON.stringify(rawValue) || <span class=\"hljs-string\">'undefined'</span>).split(<span class=\"hljs-string\">'\"'</span>).join(<span class=\"hljs-string\">'\\''</span>)\n                        + validatorsUtils.getNoticeFlag(<span class=\"hljs-built_in\">path</span>, problemPaths);\n                } <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> rawValue;\n                }\n            },\n\n            getNoticeFlag: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(path, problemPaths)</span></span> {\n                <span class=\"hljs-keyword\">if</span> (problemPaths[<span class=\"hljs-built_in\">path</span>] === <span class=\"hljs-string\">'leaf'</span>) {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">' &lt;&lt;----- NOTICE **Leaf** @ '</span> + <span class=\"hljs-built_in\">path</span>;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">' &lt;&lt;----- NOTICE @ '</span> + <span class=\"hljs-built_in\">path</span>;\n                }\n            },\n\n            </code></pre>",
         "index": 50
      },
      {
         "lineStart": 1149,
         "type": "comment",
         "api": [],
         "index": 51
      },
      {
         "type": "source",
         "html": "<pre><code>\n            debugOutputValidator: <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>(validator, problemPaths, parentPath) {\n                parentPath = parentPath || '$COND';\n\n                if (utils.<span class=\"hljs-keyword\">is</span><span class=\"hljs-keyword\">Array</span>(validator)) {\n                    var result = [];\n                    var <span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">= </span>validator[<span class=\"hljs-number\">0</span>];\n\n                    <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">!== </span><span class=\"hljs-symbol\">'and</span>' &amp;&amp; <span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">!== </span><span class=\"hljs-symbol\">'or</span>' &amp;&amp; <span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">!== </span><span class=\"hljs-symbol\">'value</span>'\n                        &amp;&amp; <span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">!== </span><span class=\"hljs-symbol\">'array</span>' &amp;&amp; <span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">!== </span><span class=\"hljs-string\">'!'</span>) {\n                        <span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">= </span><span class=\"hljs-symbol\">'or</span>';\n                    }\n                    <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">=== </span><span class=\"hljs-string\">'!'</span>) {\n                        <span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">= </span><span class=\"hljs-symbol\">'not</span>';\n                    }\n\n                    <span class=\"hljs-keyword\">for</span> (var i = <span class=\"hljs-number\">0</span>; i &lt; validator.length; i++) {\n                        var current = validator[i];\n\n                        <span class=\"hljs-keyword\">if</span> ((<span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">=== </span><span class=\"hljs-symbol\">'or</span>' &amp;&amp; current !== <span class=\"hljs-keyword\">type</span>) || i) {\n                            var currentPath = parentPath + '.[' + <span class=\"hljs-keyword\">type</span> <span class=\"hljs-type\">+ </span><span class=\"hljs-string\">':'</span> + i + <span class=\"hljs-string\">']'</span>;\n                        }\n                        result.push(validatorsUtils.debugOutputValidator(current, problemPaths, currentPath));\n                    }\n\n                    <span class=\"hljs-keyword\">return</span> result;\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (typeof validator === <span class=\"hljs-symbol\">'object</span>' &amp;&amp; validator) {\n                    var result = {};\n                    <span class=\"hljs-keyword\">if</span> (parentPath <span class=\"hljs-keyword\">in</span> problemPaths) {\n                        result[DEBUG_PATH_KEY] = validatorsUtils.getNoticeFlag(parentPath, problemPaths);\n                    }\n\n                    <span class=\"hljs-keyword\">for</span> (var key <span class=\"hljs-keyword\">in</span> validator) {\n                        var currentPath = parentPath + <span class=\"hljs-string\">'.'</span> + key;\n                        result[key] = validatorsUtils.debugOutputValidator(validator[key], problemPaths, currentPath);\n                    }\n\n                    <span class=\"hljs-keyword\">return</span> result;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.getPrimitiveValueNotice(validator, parentPath, problemPaths);\n                }\n            },\n\n            </code></pre>",
         "index": 52
      },
      {
         "lineStart": 1225,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "lazy.validators.debugOutputValue",
               "defHtml": " <a data-jsdef-prop=\"value\">value</a>, <a data-jsdef-prop=\"problemPaths\">problemPaths</a>, <a data-jsdef-prop=\"parentPath\">parentPath</a> =&gt; <a data-jsdef-prop=\"valueWithDebugInfo\">valueWithDebugInfo</a>",
               "commentHtml": "<p> Almost the same logic &amp; purpose with <a data-jsdef-link=\".debugOutputValidator\">.debugOutputValidator</a></p>\n"
            }
         ],
         "index": 53
      },
      {
         "type": "source",
         "html": "<pre><code>\n            debugOutputValue: function (<span class=\"hljs-keyword\">value</span>, problemPaths, parentPath, isFromArray) {\n                parentPath = parentPath || <span class=\"hljs-string\">'$VAL'</span>;\n                <span class=\"hljs-keyword\">if</span> (utils.isArray(<span class=\"hljs-keyword\">value</span>)) {\n                    <span class=\"hljs-keyword\">var</span> result = [];\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; <span class=\"hljs-keyword\">value</span>.length; i++) {\n                        <span class=\"hljs-keyword\">var</span> current = <span class=\"hljs-keyword\">value</span>[i];\n\n                        <span class=\"hljs-keyword\">var</span> currentPath = parentPath + <span class=\"hljs-string\">'.['</span> + i + <span class=\"hljs-string\">']'</span>;\n\n                        result.push(validatorsUtils.debugOutputValue(current, problemPaths, currentPath));\n                    }\n\n                    <span class=\"hljs-keyword\">return</span> result;\n                }\n                <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">typeof</span> <span class=\"hljs-keyword\">value</span> === <span class=\"hljs-string\">'object'</span> &amp;&amp; <span class=\"hljs-keyword\">value</span>) {\n                    <span class=\"hljs-keyword\">var</span> result = {};\n                    <span class=\"hljs-keyword\">if</span> (parentPath <span class=\"hljs-keyword\">in</span> problemPaths) {\n                        result[DEBUG_PATH_KEY] = validatorsUtils.getNoticeFlag(parentPath, problemPaths);\n                    }\n\n                    <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">value</span>) {\n                        <span class=\"hljs-keyword\">var</span> currentPath = parentPath + <span class=\"hljs-string\">'.'</span> + key;\n                        result[key] = validatorsUtils.debugOutputValue(<span class=\"hljs-keyword\">value</span>[key], problemPaths, currentPath);\n                    }\n\n                    <span class=\"hljs-keyword\">return</span> result;\n                }\n                <span class=\"hljs-keyword\">else</span> {\n                    <span class=\"hljs-keyword\">return</span> validatorsUtils.getPrimitiveValueNotice(<span class=\"hljs-keyword\">value</span>, parentPath, problemPaths);\n                }\n            }\n\n        };\n\n        lazyAssert.validators = {};\n        utils.extend(lazyAssert.validators, validatorsUtils);\n    }\n};</code></pre>",
         "index": 54
      }
   ],
   "/src/lazy-wrap-node-assert.js": [
      {
         "type": "source",
         "html": "<pre><code>var <span class=\"hljs-built_in\">assert</span> = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'assert'</span>);\n\nmodule.exports = {\n    <span class=\"hljs-built_in\">load</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(lazyAssert)</span></span> {\n        [\n            <span class=\"hljs-string\">'equal'</span>,\n            <span class=\"hljs-string\">'strictEqual'</span>,\n\n            <span class=\"hljs-string\">'deepEqual'</span>,\n            <span class=\"hljs-string\">'deepStrictEqual'</span>,\n\n            <span class=\"hljs-string\">'notEqual'</span>,\n            <span class=\"hljs-string\">'notStrictEqual'</span>,\n\n            <span class=\"hljs-string\">'notDeepEqual'</span>,\n            <span class=\"hljs-string\">'notDeepStrictEqual'</span>,\n\n            <span class=\"hljs-string\">'ifError'</span>,\n            <span class=\"hljs-string\">'doesNotThrow'</span>,\n            <span class=\"hljs-string\">'throws'</span>,\n\n            <span class=\"hljs-string\">'ok'</span>,\n            <span class=\"hljs-string\">'fail'</span>\n        ].forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span><span class=\"hljs-params\">(methodName)</span></span> {\n            lazyAssert[methodName] = <span class=\"hljs-built_in\">assert</span>[methodName].bind(<span class=\"hljs-built_in\">assert</span>);\n        });\n    }\n};</code></pre>",
         "index": 0
      }
   ],
   "/src/plugins/with-reference.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">var</span> KEY = <span class=\"hljs-string\">'--[[lazy_plugin_name]]--'</span>;\n\nmodule.exports = {\n    process: function (<span class=\"hljs-keyword\">value</span>, processValue, context, currentPluginProcess) {\n        context.path = context.path || [<span class=\"hljs-string\">'@root'</span>];\n        <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">value</span>[KEY]) {\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'_[[[reference: '</span> + <span class=\"hljs-keyword\">value</span>[KEY] + <span class=\"hljs-string\">']]]_'</span>;\n        }\n        <span class=\"hljs-keyword\">else</span> {\n            <span class=\"hljs-keyword\">var</span> result;\n\n            <span class=\"hljs-keyword\">if</span> (<span class=\"hljs-keyword\">value</span> instanceof Array) {\n                result = [];\n                <span class=\"hljs-keyword\">value</span>[KEY] = context.path.<span class=\"hljs-keyword\">join</span>(<span class=\"hljs-string\">'.'</span>);\n\n                <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> i = <span class=\"hljs-number\">0</span>; i &lt; <span class=\"hljs-keyword\">value</span>.length; i++) {\n                    context.path.push(i);\n                    result[i] = processValue(<span class=\"hljs-keyword\">value</span>[i], currentPluginProcess, context);\n                    context.path.pop();\n                }\n            }\n            <span class=\"hljs-keyword\">else</span> {\n                result = {};\n                <span class=\"hljs-keyword\">var</span> keys = [];\n                <span class=\"hljs-keyword\">value</span>[KEY] = context.path.<span class=\"hljs-keyword\">join</span>(<span class=\"hljs-string\">'.'</span>);\n\n                <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">value</span>) {\n                    <span class=\"hljs-keyword\">if</span> (key !== KEY) {\n                        keys.push(key);\n                    }\n                }\n                keys.sort();\n\n                keys.forEach(function (key) {\n                    context.path.push(key);\n                    result[key] = processValue(<span class=\"hljs-keyword\">value</span>[key], currentPluginProcess, context);\n                    context.path.pop();\n                });\n            }\n\n            <span class=\"hljs-keyword\">return</span> result;\n        }\n    },\n\n    post: function (<span class=\"hljs-keyword\">value</span>, postValue, context, currentPluginPost) {\n        <span class=\"hljs-keyword\">if</span> (!<span class=\"hljs-keyword\">value</span>[KEY]) {\n            <span class=\"hljs-keyword\">return</span>;\n        }\n        <span class=\"hljs-keyword\">else</span> {\n            delete <span class=\"hljs-keyword\">value</span>[KEY];\n            <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> <span class=\"hljs-keyword\">value</span>) {\n                postValue(<span class=\"hljs-keyword\">value</span>[key], currentPluginPost, context);\n            }\n        }\n    }\n};</code></pre>",
         "index": 0
      }
   ],
   "/src/scripts/refresh-actual-and-suggest.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-meta\">#!/usr/bin/env node</span>\n\n<span class=\"hljs-keyword\">var</span> utils = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'../utils'</span>);\n<span class=\"hljs-keyword\">var</span> lib = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./script-lib'</span>);\n\n<span class=\"hljs-keyword\">var</span> basePath = utils.j(<span class=\"hljs-string\">'.'</span>);\nlib.refreshAll(basePath, <span class=\"hljs-literal\">true</span>);</code></pre>",
         "index": 0
      }
   ],
   "/src/scripts/remove-actual-and-suggest.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-meta\">#!/usr/bin/env node</span>\n\n<span class=\"hljs-keyword\">var</span> utils = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'../utils'</span>);\n<span class=\"hljs-keyword\">var</span> lib = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'./script-lib'</span>);\n\n<span class=\"hljs-keyword\">var</span> basePath = utils.j(<span class=\"hljs-string\">'.'</span>);\nlib.removeAll(basePath, <span class=\"hljs-literal\">true</span>);</code></pre>",
         "index": 0
      }
   ],
   "/src/scripts/script-lib.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-attribute\">var utils</span> = require(<span class=\"hljs-string\">'../utils'</span>);\n<span class=\"hljs-attribute\">var fs</span> = require(<span class=\"hljs-string\">'fs'</span>);\n\n<span class=\"hljs-attribute\">var lib</span> = {\n    </code></pre>",
         "index": 0
      },
      {
         "lineStart": 5,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "basePath",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "actualPath",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": ""
                        },
                        {
                           "level": 6,
                           "children": [],
                           "name": "expectedPath",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": ""
                        }
                     ],
                     "name": "callback",
                     "defHtml": " <a data-jsdef-prop=\"actualPath\">actualPath</a>, <a data-jsdef-prop=\"expectedPath\">expectedPath</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
                     "commentHtml": ""
                  }
               ],
               "name": ".forEachActual",
               "defHtml": " <a data-jsdef-prop=\"basePath\">basePath</a>, <a data-jsdef-prop=\"callback\">callback</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>",
               "commentHtml": ""
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n    forEachActual: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(basePath, callback)</span> </span>{\n        <span class=\"hljs-keyword\">var</span> paths = utils.flattenFiles(basePath);\n\n</code></pre>",
         "index": 2
      },
      {
         "type": "comment",
         "lineStart": 18,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;@@d&#39;, paths);</p>\n"
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>\n        <span class=\"hljs-keyword\">var</span> vectors = [\n            [<span class=\"hljs-regexp\">/\\.report\\/([^\\/]+)\\.(expected)$/</span>, <span class=\"hljs-string\">'actual'</span>],\n            [<span class=\"hljs-regexp\">/\\.report\\/([^\\/]+)\\.(expected\\.js)$/</span>, <span class=\"hljs-string\">'actual.js'</span>],\n            [<span class=\"hljs-regexp\">/\\.report\\/([^\\/]+)\\.(validator\\.js)$/</span>, <span class=\"hljs-string\">'suggest.js'</span>],\n        ];\n\n        <span class=\"hljs-keyword\">var</span> rgxIgnore = <span class=\"hljs-regexp\">/^\\/node_modules\\//</span>;\n\n        paths.forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">path</span>) </span>{\n            <span class=\"hljs-keyword\">if</span> (!rgxIgnore.test(path)) {\n                vectors.forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">vector</span>) </span>{\n                    <span class=\"hljs-keyword\">var</span> match = vector[<span class=\"hljs-number\">0</span>].exec(path);\n                    <span class=\"hljs-keyword\">if</span> (match) {\n                        <span class=\"hljs-keyword\">var</span> actualPath = path.replace(vector[<span class=\"hljs-number\">0</span>], <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">_whole, name</span>) </span>{\n                            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">'.report/'</span> + name + <span class=\"hljs-string\">'.'</span> + vector[<span class=\"hljs-number\">1</span>];\n                        });\n\n</code></pre>",
         "index": 4
      },
      {
         "type": "comment",
         "lineStart": 37,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;@@d&#39;, actualPath);</p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>                        callback(basePath + actualPath, basePath + path);\n                    }\n                });\n            }\n        });\n    },\n\n    <span class=\"hljs-symbol\">refreshAll:</span> function (basePath, output) {\n        <span class=\"hljs-class\"><span class=\"hljs-keyword\">lib</span>.<span class=\"hljs-title\">forEachActual</span>(<span class=\"hljs-title\">basePath</span>, <span class=\"hljs-title\">function</span> (<span class=\"hljs-title\">actualPath</span>, <span class=\"hljs-title\">expectedPath</span>) {</span>\n</code></pre>",
         "index": 6
      },
      {
         "type": "comment",
         "lineStart": 47,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> console.log(&#39;@@d&#39;, actualPath, expectedPath);</p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>            utils.<span class=\"hljs-built_in\">write</span>(actualPath,\n                utils.<span class=\"hljs-built_in\">read</span>(expectedPath)\n            );\n            <span class=\"hljs-built_in\">output</span> &amp;&amp; console.<span class=\"hljs-built_in\">log</span>(<span class=\"hljs-string\">'[INFO] refreshed '</span> + actualPath);\n        });\n    },\n\n    removeAll: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(basePath, output)</span></span> {\n        lib.forEachActual(basePath, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(actualPath)</span></span> {\n            try {\n                fs.unlinkSync(actualPath);\n                <span class=\"hljs-built_in\">output</span> &amp;&amp; console.<span class=\"hljs-built_in\">log</span>(<span class=\"hljs-string\">'[INFO] removed '</span> + actualPath);\n            } catch (ex) {}\n        });\n    }\n};\n\nmodule.exports = lib;</code></pre>",
         "index": 8
      }
   ],
   "/src/utils.js": [
      {
         "type": "source",
         "html": "<pre><code><span class=\"hljs-keyword\">var</span> npath = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'path'</span>);\n\n<span class=\"hljs-keyword\">try</span> {\n    <span class=\"hljs-keyword\">var</span> fs = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'fs'</span>);\n}\n<span class=\"hljs-keyword\">catch</span> (ex) {\n\n}\n\n</code></pre>",
         "index": 0
      },
      {
         "lineStart": 10,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "utils",
               "defHtml": " {}",
               "commentHtml": ""
            }
         ],
         "index": 1
      },
      {
         "type": "source",
         "html": "<pre><code>\n<span class=\"hljs-selector-tag\">var</span> utils = {\n    </code></pre>",
         "index": 2
      },
      {
         "lineStart": 14,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "part",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": ""
                        }
                     ],
                     "name": "pathParts",
                     "defHtml": " [<a data-jsdef-prop=\"part\">part</a>]",
                     "commentHtml": "<p> path.resolve( path.join( ... ) )</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "path",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 返回的解析后的路径</p>\n"
                  }
               ],
               "name": "utils.j",
               "defHtml": " <a data-jsdef-prop=\"...pathParts\">...pathParts</a> =&gt; <a data-jsdef-prop=\"path\">path</a>",
               "commentHtml": ""
            }
         ],
         "index": 3
      },
      {
         "type": "source",
         "html": "<pre><code>\n    j: <span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\"></span>(</code></pre>",
         "index": 4
      },
      {
         "lineStart": 24,
         "type": "comment",
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> pathParts */</p>\n"
            }
         ],
         "index": 5
      },
      {
         "type": "source",
         "html": "<pre><code>) {\n        <span class=\"hljs-built_in\">return</span> npath.resolve(npath.<span class=\"hljs-built_in\">join</span>.<span class=\"hljs-built_in\">apply</span>(npath, arguments));\n    },\n\n    </code></pre>",
         "index": 6
      },
      {
         "lineStart": 28,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "target",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 一个 path, 可能是一个文件或文件夹</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "type",
                           "defHtml": " &apos;<a data-jsdef-prop=\"folder-is-a-file\">folder-is-a-file</a>&apos;",
                           "commentHtml": ""
                        }
                     ],
                     "name": "isFileError",
                     "defHtml": " <a data-jsdef-prop=\"Exception\">Exception</a>",
                     "commentHtml": "<p> 如果父级文件夹为 &quot;一个文件&quot; 则抛出该错误</p>\n"
                  }
               ],
               "name": "utils.ensureFolder",
               "defHtml": " <a data-jsdef-prop=\"target\">target</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a>, <a data-jsdef-prop=\"throws\">throws</a> <a data-jsdef-prop=\"isFileError\">isFileError</a>",
               "commentHtml": "<p> 确保 target 的父级 folder 存在, 如果不存在, 则递归确保其父级的父级存在, 并创建父级 folder</p>\n"
            }
         ],
         "index": 7
      },
      {
         "type": "source",
         "html": "<pre><code>\n    ensureFolder: function (target) {\n        var <span class=\"hljs-keyword\">dirname</span> = npath.<span class=\"hljs-keyword\">dirname</span>(target);\n\n        <span class=\"hljs-keyword\">if</span> (!fs.existsSync(<span class=\"hljs-keyword\">dirname</span>)) {\n            utils.ensureFolder(<span class=\"hljs-keyword\">dirname</span>);\n            fs.mkdirSync(<span class=\"hljs-keyword\">dirname</span>);\n        }\n        <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (fs.statSync(<span class=\"hljs-keyword\">dirname</span>).isFile()) {\n            throw utils.newError(<span class=\"hljs-string\">'folder-is-a-file'</span>, <span class=\"hljs-keyword\">dirname</span> + <span class=\"hljs-string\">' is a file, cannot create folder'</span>);\n        }\n    },\n\n\n    </code></pre>",
         "index": 8
      },
      {
         "lineStart": 50,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "baseDir",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 目标的基础文件夹</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "filepath",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 相对于基础文件夹的 &quot;相对路径&quot;</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "noSuchDirError",
                     "defHtml": " <a data-jsdef-prop=\"Error\">Error</a>",
                     "commentHtml": "<p> 如果 baseDir 不存在, 抛出该错误 (避免不小心为用户创建莫名其妙的文件夹)</p>\n"
                  }
               ],
               "name": "utils.flattenFiles",
               "defHtml": " <a data-jsdef-prop=\"baseDir\">baseDir</a> =&gt; [<a data-jsdef-prop=\"filepath\">filepath</a>] <a data-jsdef-prop=\"throws\">throws</a> <a data-jsdef-prop=\"noSuchDirError\">noSuchDirError</a>",
               "commentHtml": "<p> 遍历 baseDir 下的所有文件,</p>\n<p> 产生一个平级列表:</p>\n<p> 例如:</p>\n<pre><code> base -\n      | a - b.js\n          | c - d.js\n          |   | e.js\n          | f.js\n</code></pre><p> 输出:</p>\n<pre><code> /a/b.js\n /a/c/d.js\n /a/c/e.js\n /a/f.js\n</code></pre><p> @todo NOTE: 我们当前这个设计, 可能会有内存使用过大的风险, 请知悉.</p>\n"
            }
         ],
         "index": 9
      },
      {
         "type": "source",
         "html": "<pre><code>\n    flattenFiles: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">baseDir</span>) </span>{\n        <span class=\"hljs-keyword\">if</span> (!fs.existsSync(baseDir)) {\n            <span class=\"hljs-keyword\">throw</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Error</span>(<span class=\"hljs-string\">'无此文件夹!'</span>);\n        }\n\n        <span class=\"hljs-keyword\">var</span> result = [];\n        fs.readdirSync(baseDir).forEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">fileEntry</span>) </span>{\n\n</code></pre>",
         "index": 10
      },
      {
         "type": "comment",
         "lineStart": 90,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 忽略以 <code>.</code> 起始的文件/文件夹</p>\n"
            }
         ],
         "index": 11
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">if</span> (/^\\./.<span class=\"hljs-built_in\">test</span>(fileEntry)) {\n                <span class=\"hljs-built_in\">return</span>;\n            }\n\n</code></pre>",
         "index": 12
      },
      {
         "type": "comment",
         "lineStart": 95,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 如果是文件, 直接插入 result 集合</p>\n"
            }
         ],
         "index": 13
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">if</span> <span class=\"hljs-comment\">(fs.statSync(baseDir + '/' + fileEntry)</span>.isFile<span class=\"hljs-comment\">()</span>) {\n                result.push<span class=\"hljs-comment\">('/' + fileEntry)</span>;\n            }\n\n</code></pre>",
         "index": 14
      },
      {
         "type": "comment",
         "lineStart": 100,
         "api": [
            {
               "level": 0,
               "children": [],
               "commentHtml": "<p> 如果是文件夹, 返回其子 flatten list, 并合并返回</p>\n"
            }
         ],
         "index": 15
      },
      {
         "type": "source",
         "html": "<pre><code>            <span class=\"hljs-keyword\">else</span> {\n                utils.flattenFiles(baseDir + <span class=\"hljs-string\">'/'</span> + fileEntry).<span class=\"hljs-keyword\">forEach</span>(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(subFile)</span> </span>{\n                    result.push(<span class=\"hljs-string\">'/'</span> + fileEntry + subFile);\n                });\n            }\n        });\n        <span class=\"hljs-keyword\">return</span> result;\n    },\n\n    </code></pre>",
         "index": 16
      },
      {
         "lineStart": 110,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "path",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 目标的写入的文件路径</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "value",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 欲写入的文件内容 (in text)</p>\n"
                  }
               ],
               "name": "utils.write",
               "defHtml": " <a data-jsdef-prop=\"path\">path</a>, <a data-jsdef-prop=\"value\">value</a> =&gt; <a data-jsdef-prop=\"undefined\">undefined</a> <a data-jsdef-prop=\"throws\">throws</a> <a data-jsdef-link=\".ensureFolder.isFileError\">.ensureFolder.isFileError</a>",
               "commentHtml": ""
            }
         ],
         "index": 17
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-built_in\">write</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(path, value)</span></span> {\n        utils.ensureFolder(<span class=\"hljs-built_in\">path</span>);\n\n        fs.writeFileSync(<span class=\"hljs-built_in\">path</span>, value);\n    },\n\n    </code></pre>",
         "index": 18
      },
      {
         "lineStart": 122,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "path",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 读取的文件的路径</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "defaultValue",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 如果没有找到文件, 则返回该内容, 且将该内容 <a data-jsdef-link=\".write\">.write</a> 到目标文件中</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "value",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 文件内容 (in text)</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "type",
                           "defHtml": " &apos;<a data-jsdef-prop=\"no-such-file\">no-such-file</a>&apos;",
                           "commentHtml": ""
                        }
                     ],
                     "name": "noFileError",
                     "defHtml": " <a data-jsdef-prop=\"Error\">Error</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "type",
                           "defHtml": " &apos;<a data-jsdef-prop=\"is-folder\">is-folder</a>&apos;",
                           "commentHtml": ""
                        }
                     ],
                     "name": "isFolderError",
                     "defHtml": " <a data-jsdef-prop=\"Error\">Error</a>",
                     "commentHtml": ""
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "isFileError",
                     "defHtml": " <a data-jsdef-link=\".ensureFolder.isFileError\">.ensureFolder.isFileError</a>",
                     "commentHtml": ""
                  }
               ],
               "name": "utils.read",
               "defHtml": " <a data-jsdef-prop=\"path\">path</a>, <a data-jsdef-prop=\"defaultValue\">defaultValue</a> =&gt; <a data-jsdef-prop=\"value\">value</a> <a data-jsdef-prop=\"throws\">throws</a> <a data-jsdef-prop=\"noFileError\">noFileError</a> | <a data-jsdef-prop=\"isFolderError\">isFolderError</a> | <a data-jsdef-prop=\"isFileError\">isFileError</a>",
               "commentHtml": ""
            }
         ],
         "index": 19
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-built_in\">read</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-params\">(path, defaultValue)</span></span> {\n        <span class=\"hljs-keyword\">if</span> (!fs.existsSync(<span class=\"hljs-built_in\">path</span>)) {\n            <span class=\"hljs-keyword\">if</span> (defaultValue) {\n                utils.<span class=\"hljs-built_in\">write</span>(<span class=\"hljs-built_in\">path</span>, defaultValue);\n                <span class=\"hljs-keyword\">return</span> defaultValue;\n            }\n            <span class=\"hljs-keyword\">else</span> {\n                throw utils.newError(<span class=\"hljs-string\">'no-such-file'</span>, <span class=\"hljs-string\">'Target does not exist.'</span>);\n            }\n        }\n        <span class=\"hljs-keyword\">else</span> <span class=\"hljs-keyword\">if</span> (fs.statSync(<span class=\"hljs-built_in\">path</span>).isDirectory()) {\n            throw utils.newError(<span class=\"hljs-string\">'is-folder'</span>, <span class=\"hljs-string\">'The target is a folder.'</span>);\n        }\n        <span class=\"hljs-keyword\">else</span> {\n            <span class=\"hljs-keyword\">return</span> fs.readFileSync(<span class=\"hljs-built_in\">path</span>).toString();\n        }\n    },\n\n    </code></pre>",
         "index": 20
      },
      {
         "lineStart": 155,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [
                  {
                     "level": 2,
                     "children": [],
                     "name": "type",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 这个是为了让 assert 可以检验 error type (不用手建一个新的 NewTypeError)</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [],
                     "name": "message",
                     "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                     "commentHtml": "<p> 主题错误消息</p>\n"
                  },
                  {
                     "level": 2,
                     "children": [
                        {
                           "level": 6,
                           "children": [],
                           "name": "message",
                           "defHtml": " <a data-jsdef-prop=\"string\">string</a>",
                           "commentHtml": "<p> 拼接为 &#39;@error-type: error-message&#39; 的形式</p>\n"
                        }
                     ],
                     "name": "error",
                     "defHtml": " <a data-jsdef-prop=\"Error\">Error</a>",
                     "commentHtml": "<p> 返回的 error instance</p>\n"
                  }
               ],
               "name": "utils.newError",
               "defHtml": " <a data-jsdef-prop=\"type\">type</a>, <a data-jsdef-prop=\"message\">message</a> =&gt; <a data-jsdef-prop=\"error\">error</a>",
               "commentHtml": ""
            }
         ],
         "index": 21
      },
      {
         "type": "source",
         "html": "<pre><code>\n    newError: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"><span class=\"hljs-keyword\">type</span>, message</span>) </span>{\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Error</span>(<span class=\"hljs-keyword\">type</span> ? <span class=\"hljs-string\">'@'</span> + <span class=\"hljs-keyword\">type</span> + <span class=\"hljs-string\">': '</span> + message : message);\n    },\n\n    extend: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">target, extra</span>) </span>{\n        <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-keyword\">var</span> key <span class=\"hljs-keyword\">in</span> extra) {\n            <span class=\"hljs-keyword\">if</span> (extra.hasOwnProperty(key)) {\n                target[key] = extra[key];\n            }\n        }\n    },\n\n    </code></pre>",
         "index": 22
      },
      {
         "lineStart": 175,
         "type": "comment",
         "api": [
            {
               "level": 1,
               "children": [],
               "name": "utils.trim",
               "defHtml": " <a data-jsdef-prop=\"string\">string</a> =&gt; <a data-jsdef-prop=\"string\">string</a>",
               "commentHtml": "<p> remove the leading/following whitespaces</p>\n"
            }
         ],
         "index": 23
      },
      {
         "type": "source",
         "html": "<pre><code>\n    <span class=\"hljs-attribute\">trim</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\">string</span>) </span>{\n        <span class=\"hljs-built_in\">string</span> = <span class=\"hljs-built_in\">string</span> || <span class=\"hljs-string\">''</span>;\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">string</span>.replace(<span class=\"hljs-regexp\">/^\\s+/</span>, <span class=\"hljs-string\">''</span>).replace(<span class=\"hljs-regexp\">/\\s+$/</span>, <span class=\"hljs-string\">''</span>);\n    },\n\n    <span class=\"hljs-attribute\">isArray</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">target</span>) </span>{\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Object</span>.prototype.toString.call(target) === <span class=\"hljs-string\">'[object Array]'</span>;\n    },\n\n    <span class=\"hljs-attribute\">isRegExp</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">target</span>) </span>{\n        <span class=\"hljs-keyword\">return</span> <span class=\"hljs-built_in\">Object</span>.prototype.toString.call(target) === <span class=\"hljs-string\">'[object RegExp]'</span>;\n    }\n};\n\n<span class=\"hljs-built_in\">module</span>.exports = utils;</code></pre>",
         "index": 24
      }
   ]
}