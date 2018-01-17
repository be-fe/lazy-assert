var fileTree = {
   "projectKey": "lazy-assert-0.2.12",
   "projectName": "lazy-assert",
   "version": "0.2.12",
   "files": [
      {
         "name": "src",
         "treeType": "src",
         "type": "dir",
         "children": [
            {
               "name": "plugins",
               "treeType": "src",
               "type": "dir",
               "children": [
                  {
                     "name": "with-reference.js",
                     "treeType": "src",
                     "type": "src",
                     "content": [],
                     "children": []
                  }
               ]
            },
            {
               "name": "scripts",
               "treeType": "src",
               "type": "dir",
               "children": [
                  {
                     "name": "refresh-actual-and-suggest.js",
                     "treeType": "src",
                     "type": "src",
                     "content": [],
                     "children": []
                  },
                  {
                     "name": "remove-actual-and-suggest.js",
                     "treeType": "src",
                     "type": "src",
                     "content": [],
                     "children": []
                  },
                  {
                     "name": "script-lib.js",
                     "treeType": "src",
                     "type": "src",
                     "content": [
                        {
                           "index": 1,
                           "api": [
                              {
                                 "name": ".forEachActual",
                                 "children": [
                                    {
                                       "name": "basePath"
                                    },
                                    {
                                       "name": "callback",
                                       "children": [
                                          {
                                             "name": "actualPath"
                                          },
                                          {
                                             "name": "expectedPath"
                                          }
                                       ]
                                    }
                                 ]
                              }
                           ]
                        },
                        {
                           "index": 3,
                           "api": []
                        },
                        {
                           "index": 5,
                           "api": []
                        },
                        {
                           "index": 7,
                           "api": []
                        }
                     ],
                     "children": []
                  }
               ]
            },
            {
               "name": "fake-fs.js",
               "treeType": "src",
               "type": "src",
               "content": [],
               "children": []
            },
            {
               "name": "index.js",
               "treeType": "src",
               "type": "src",
               "content": [
                  {
                     "index": 1,
                     "api": [
                        {
                           "name": "lazyAssert"
                        }
                     ]
                  },
                  {
                     "index": 3,
                     "api": [
                        {
                           "name": "lazyAssert.setLocation",
                           "children": [
                              {
                                 "name": "path"
                              },
                              {
                                 "name": "noTestScriptFound",
                                 "children": [
                                    {
                                       "name": "type"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 5,
                     "api": [
                        {
                           "name": "lazyAssert.stringify"
                        }
                     ]
                  },
                  {
                     "index": 7,
                     "api": [
                        {
                           "name": "lazyAssert.plugins"
                        }
                     ]
                  },
                  {
                     "index": 9,
                     "api": [
                        {
                           "name": "lazyAssert.plugin",
                           "children": [
                              {
                                 "name": "processors",
                                 "as": "lazyAssert.plugins",
                                 "children": [
                                    {
                                       "name": "name"
                                    },
                                    {
                                       "name": "processor",
                                       "children": [
                                          {
                                             "name": "process",
                                             "children": [
                                                {
                                                   "name": "value"
                                                },
                                                {
                                                   "name": "context"
                                                },
                                                {
                                                   "name": "result"
                                                }
                                             ]
                                          },
                                          {
                                             "name": "post",
                                             "children": [
                                                {
                                                   "name": "value"
                                                }
                                             ]
                                          }
                                       ]
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 11,
                     "api": [
                        {
                           "name": "lazyAssert.postValue",
                           "children": [
                              {
                                 "name": "value"
                              },
                              {
                                 "name": "plugin"
                              },
                              {
                                 "name": "context"
                              },
                              {
                                 "name": "currentPlugin"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 13,
                     "api": [
                        {
                           "name": "lazyAssert.processValue",
                           "children": [
                              {
                                 "name": "value"
                              },
                              {
                                 "name": "depthOrPlugin"
                              },
                              {
                                 "name": "context"
                              },
                              {
                                 "name": "currentPlugin"
                              },
                              {
                                 "name": "result"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 15,
                     "api": []
                  },
                  {
                     "index": 17,
                     "api": [
                        {
                           "name": "lazyAssert.peek",
                           "children": [
                              {
                                 "name": "peekKey"
                              },
                              {
                                 "name": "value"
                              },
                              {
                                 "name": "depthOrPlugin"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 19,
                     "api": [
                        {
                           "name": "lazyAssert.compare",
                           "children": [
                              {
                                 "name": "peekKey"
                              },
                              {
                                 "name": "actualTargetValue"
                              },
                              {
                                 "name": "expectedPreparedValue"
                              },
                              {
                                 "name": "depthOrPlugin"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 21,
                     "api": []
                  },
                  {
                     "index": 22,
                     "api": []
                  },
                  {
                     "index": 23,
                     "api": []
                  },
                  {
                     "index": 24,
                     "api": []
                  },
                  {
                     "index": 26,
                     "api": [
                        {
                           "name": "lazyAssert.assertCompare"
                        }
                     ]
                  },
                  {
                     "index": 29,
                     "api": []
                  },
                  {
                     "index": 31,
                     "api": []
                  },
                  {
                     "index": 33,
                     "api": []
                  },
                  {
                     "index": 35,
                     "api": []
                  }
               ],
               "children": []
            },
            {
               "name": "lazy-utils.js",
               "treeType": "src",
               "type": "src",
               "content": [
                  {
                     "index": 1,
                     "api": [
                        {
                           "name": "lazyUtils"
                        }
                     ]
                  },
                  {
                     "index": 3,
                     "api": []
                  },
                  {
                     "index": 5,
                     "api": []
                  },
                  {
                     "index": 7,
                     "api": []
                  },
                  {
                     "index": 9,
                     "api": [
                        {
                           "name": "lazyUtils.map",
                           "children": [
                              {
                                 "name": "objTarget"
                              },
                              {
                                 "name": "arrTarget"
                              },
                              {
                                 "name": "callback"
                              },
                              {
                                 "name": "objResult"
                              },
                              {
                                 "name": "arrResult"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 11,
                     "api": [
                        {
                           "name": "lazyUtils.type",
                           "children": [
                              {
                                 "name": "value",
                                 "children": [
                                    {
                                       "name": "array"
                                    },
                                    {
                                       "name": "object"
                                    },
                                    {
                                       "name": "other"
                                    },
                                    {
                                       "name": "isFirstLevel"
                                    },
                                    {
                                       "name": "result",
                                       "children": [
                                          {
                                             "name": "resultArray"
                                          },
                                          {
                                             "name": "resultObject"
                                          },
                                          {
                                             "name": "resultType"
                                          }
                                       ]
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 13,
                     "api": [
                        {
                           "name": "lazyUtils.pattern",
                           "children": [
                              {
                                 "name": "target",
                                 "children": [
                                    {
                                       "name": "other"
                                    }
                                 ]
                              },
                              {
                                 "name": "pattern",
                                 "children": [
                                    {
                                       "name": "object"
                                    },
                                    {
                                       "name": "func"
                                    },
                                    {
                                       "name": "regexp"
                                    }
                                 ]
                              },
                              {
                                 "name": "result"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 15,
                     "api": [
                        {
                           "name": "lazyAssert"
                        }
                     ]
                  }
               ],
               "children": []
            },
            {
               "name": "lazy-validators.js",
               "treeType": "src",
               "type": "src",
               "content": [
                  {
                     "index": 1,
                     "api": [
                        {
                           "name": "lazy.validators"
                        }
                     ]
                  },
                  {
                     "index": 3,
                     "api": [
                        {
                           "name": "private.~VALIDATE_KEY"
                        }
                     ]
                  },
                  {
                     "index": 5,
                     "api": [
                        {
                           "name": "private.~Validator",
                           "children": [
                              {
                                 "name": "functionConfig",
                                 "children": [
                                    {
                                       "name": "val"
                                    },
                                    {
                                       "name": "key"
                                    },
                                    {
                                       "name": "parent"
                                    }
                                 ]
                              },
                              {
                                 "name": "stringConfig",
                                 "as": "~StringConfig"
                              },
                              {
                                 "name": "notStringConfig"
                              },
                              {
                                 "name": "refConfig"
                              },
                              {
                                 "name": "regexpConfig"
                              },
                              {
                                 "name": "arrayConfig",
                                 "children": [
                                    {
                                       "name": "arrayValidator"
                                    },
                                    {
                                       "name": "rawValue"
                                    },
                                    {
                                       "name": "op"
                                    },
                                    {
                                       "name": "orValidator"
                                    },
                                    {
                                       "name": "notValidator"
                                    },
                                    {
                                       "name": "andValidator"
                                    }
                                 ]
                              },
                              {
                                 "name": "objectConfig"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 6,
                     "api": [
                        {
                           "name": "lazy.validators.validate",
                           "children": [
                              {
                                 "name": "peekKey"
                              },
                              {
                                 "name": "actualTargetValue"
                              },
                              {
                                 "name": "validator"
                              },
                              {
                                 "name": "result",
                                 "children": [
                                    {
                                       "name": "result"
                                    },
                                    {
                                       "name": "type"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "reason"
                                    },
                                    {
                                       "name": "message"
                                    },
                                    {
                                       "name": "key"
                                    },
                                    {
                                       "name": "index"
                                    },
                                    {
                                       "name": "vIndex"
                                    },
                                    {
                                       "name": "expected"
                                    },
                                    {
                                       "name": "regexp"
                                    },
                                    {
                                       "name": "funcInfo"
                                    },
                                    {
                                       "name": "subResult"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 8,
                     "api": []
                  },
                  {
                     "index": 10,
                     "api": []
                  },
                  {
                     "index": 12,
                     "api": []
                  },
                  {
                     "index": 14,
                     "api": []
                  },
                  {
                     "index": 16,
                     "api": []
                  },
                  {
                     "index": 18,
                     "api": [
                        {
                           "name": "lazy.validators.validatorArray",
                           "children": [
                              {
                                 "name": "result",
                                 "children": [
                                    {
                                       "name": "result"
                                    },
                                    {
                                       "name": "type"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 20,
                     "api": [
                        {
                           "name": "lazy.validators.validatorArrayArray",
                           "children": [
                              {
                                 "name": "result",
                                 "children": [
                                    {
                                       "name": "type"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 22,
                     "api": [
                        {
                           "name": "lazy.validators.summarizeTypeValidator"
                        }
                     ]
                  },
                  {
                     "index": 24,
                     "api": []
                  },
                  {
                     "index": 26,
                     "api": []
                  },
                  {
                     "index": 28,
                     "api": []
                  },
                  {
                     "index": 30,
                     "api": [
                        {
                           "name": "lazy.validators.clearValidateKey",
                           "children": [
                              {
                                 "name": "target"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 32,
                     "api": [
                        {
                           "name": "lazy.validators.printWarnings"
                        }
                     ]
                  },
                  {
                     "index": 34,
                     "api": [
                        {
                           "name": "lazy.validators.formalizeFailResultItem",
                           "children": [
                              {
                                 "name": "result",
                                 "as": "~FinalResult",
                                 "children": [
                                    {
                                       "name": "valPath"
                                    },
                                    {
                                       "name": "condPath"
                                    },
                                    {
                                       "name": "finalMessage"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 36,
                     "api": []
                  },
                  {
                     "index": 38,
                     "api": [
                        {
                           "name": "lazy.validators.mergeFailResults",
                           "children": [
                              {
                                 "name": "result"
                              },
                              {
                                 "name": "warningResult",
                                 "children": [
                                    {
                                       "name": "message"
                                    },
                                    {
                                       "name": "subResult"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 40,
                     "api": [
                        {
                           "name": "lazy.validators.printDebug",
                           "children": [
                              {
                                 "name": "value"
                              },
                              {
                                 "name": "validator"
                              },
                              {
                                 "name": "result"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 42,
                     "api": []
                  },
                  {
                     "index": 43,
                     "api": []
                  },
                  {
                     "index": 45,
                     "api": [
                        {
                           "name": "lazy.validators.getProblemPaths",
                           "children": [
                              {
                                 "name": "result"
                              },
                              {
                                 "name": "problemPaths",
                                 "as": "~ProblemPaths",
                                 "children": [
                                    {
                                       "name": "path"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 47,
                     "api": [
                        {
                           "name": "lazy.validators.getPrimitiveValue",
                           "children": [
                              {
                                 "name": "rawValue"
                              },
                              {
                                 "name": "path"
                              },
                              {
                                 "name": "problemPaths"
                              },
                              {
                                 "name": "valueDisplay"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 49,
                     "api": []
                  },
                  {
                     "index": 51,
                     "api": []
                  },
                  {
                     "index": 53,
                     "api": [
                        {
                           "name": "lazy.validators.debugOutputValue"
                        }
                     ]
                  }
               ],
               "children": []
            },
            {
               "name": "lazy-wrap-node-assert.js",
               "treeType": "src",
               "type": "src",
               "content": [],
               "children": []
            },
            {
               "name": "Peek.js",
               "treeType": "src",
               "type": "src",
               "content": [
                  {
                     "index": 1,
                     "api": [
                        {
                           "name": "Peek",
                           "children": [
                              {
                                 "name": "instance",
                                 "children": [
                                    {
                                       "name": "peekKey"
                                    },
                                    {
                                       "name": "list"
                                    },
                                    {
                                       "name": "set"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 3,
                     "api": [
                        {
                           "name": "Peek.prototype"
                        }
                     ]
                  },
                  {
                     "index": 5,
                     "api": [
                        {
                           "name": "Peek.prototype.push",
                           "children": [
                              {
                                 "name": "value"
                              },
                              {
                                 "name": "depthOrPlugin"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 7,
                     "api": [
                        {
                           "name": "Peek.prototype.set",
                           "children": [
                              {
                                 "name": "value"
                              },
                              {
                                 "name": "depthOrPlugin"
                              },
                              {
                                 "name": "setOnSameKeyError",
                                 "children": [
                                    {
                                       "name": "type"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 9,
                     "api": [
                        {
                           "name": "Peek.prototype.forceSet"
                        }
                     ]
                  },
                  {
                     "index": 11,
                     "api": []
                  }
               ],
               "children": []
            },
            {
               "name": "utils.js",
               "treeType": "src",
               "type": "src",
               "content": [
                  {
                     "index": 1,
                     "api": [
                        {
                           "name": "utils"
                        }
                     ]
                  },
                  {
                     "index": 3,
                     "api": [
                        {
                           "name": "utils.j",
                           "children": [
                              {
                                 "name": "pathParts",
                                 "children": [
                                    {
                                       "name": "part"
                                    }
                                 ]
                              },
                              {
                                 "name": "path"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 5,
                     "api": []
                  },
                  {
                     "index": 7,
                     "api": [
                        {
                           "name": "utils.ensureFolder",
                           "children": [
                              {
                                 "name": "target"
                              },
                              {
                                 "name": "isFileError",
                                 "children": [
                                    {
                                       "name": "type"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 9,
                     "api": [
                        {
                           "name": "utils.flattenFiles",
                           "children": [
                              {
                                 "name": "baseDir"
                              },
                              {
                                 "name": "filepath"
                              },
                              {
                                 "name": "noSuchDirError"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 11,
                     "api": []
                  },
                  {
                     "index": 13,
                     "api": []
                  },
                  {
                     "index": 15,
                     "api": []
                  },
                  {
                     "index": 17,
                     "api": [
                        {
                           "name": "utils.write",
                           "children": [
                              {
                                 "name": "path"
                              },
                              {
                                 "name": "value"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 19,
                     "api": [
                        {
                           "name": "utils.read",
                           "children": [
                              {
                                 "name": "path"
                              },
                              {
                                 "name": "defaultValue"
                              },
                              {
                                 "name": "value"
                              },
                              {
                                 "name": "noFileError",
                                 "children": [
                                    {
                                       "name": "type"
                                    }
                                 ]
                              },
                              {
                                 "name": "isFolderError",
                                 "children": [
                                    {
                                       "name": "type"
                                    }
                                 ]
                              },
                              {
                                 "name": "isFileError"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 21,
                     "api": [
                        {
                           "name": "utils.newError",
                           "children": [
                              {
                                 "name": "type"
                              },
                              {
                                 "name": "message"
                              },
                              {
                                 "name": "error",
                                 "children": [
                                    {
                                       "name": "message"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "index": 23,
                     "api": [
                        {
                           "name": "utils.trim"
                        }
                     ]
                  }
               ],
               "children": []
            }
         ]
      },
      {
         "name": "Peek",
         "treeType": "api",
         "type": "normal",
         "path": "Peek",
         "srcPath": "/src/Peek.js-1",
         "children": [
            {
               "name": "instance",
               "treeType": "api",
               "type": "inner",
               "path": "Peek",
               "srcPath": "/src/Peek.js-1",
               "children": [
                  {
                     "name": "peekKey",
                     "treeType": "api",
                     "type": "inner",
                     "path": "Peek",
                     "srcPath": "/src/Peek.js-1"
                  },
                  {
                     "name": "list",
                     "treeType": "api",
                     "type": "inner",
                     "path": "Peek",
                     "srcPath": "/src/Peek.js-1"
                  },
                  {
                     "name": "set",
                     "treeType": "api",
                     "type": "inner",
                     "path": "Peek",
                     "srcPath": "/src/Peek.js-1"
                  }
               ]
            },
            {
               "name": "prototype",
               "treeType": "api",
               "type": "normal",
               "path": "Peek.prototype",
               "srcPath": "/src/Peek.js-3",
               "children": [
                  {
                     "name": "push",
                     "treeType": "api",
                     "type": "normal",
                     "path": "Peek.prototype.push",
                     "srcPath": "/src/Peek.js-5",
                     "children": [
                        {
                           "name": "value",
                           "treeType": "api",
                           "type": "inner",
                           "path": "Peek.prototype.push",
                           "srcPath": "/src/Peek.js-5"
                        },
                        {
                           "name": "depthOrPlugin",
                           "treeType": "api",
                           "type": "inner",
                           "path": "Peek.prototype.push",
                           "srcPath": "/src/Peek.js-5"
                        }
                     ]
                  },
                  {
                     "name": "set",
                     "treeType": "api",
                     "type": "normal",
                     "path": "Peek.prototype.set",
                     "srcPath": "/src/Peek.js-7",
                     "children": [
                        {
                           "name": "value",
                           "treeType": "api",
                           "type": "inner",
                           "path": "Peek.prototype.set",
                           "srcPath": "/src/Peek.js-7"
                        },
                        {
                           "name": "depthOrPlugin",
                           "treeType": "api",
                           "type": "inner",
                           "path": "Peek.prototype.set",
                           "srcPath": "/src/Peek.js-7"
                        },
                        {
                           "name": "setOnSameKeyError",
                           "treeType": "api",
                           "type": "inner",
                           "path": "Peek.prototype.set",
                           "srcPath": "/src/Peek.js-7",
                           "children": [
                              {
                                 "name": "type",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "Peek.prototype.set",
                                 "srcPath": "/src/Peek.js-7"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "name": "forceSet",
                     "treeType": "api",
                     "type": "normal",
                     "path": "Peek.prototype.forceSet",
                     "srcPath": "/src/Peek.js-9"
                  }
               ]
            }
         ]
      },
      {
         "name": "lazyAssert",
         "treeType": "api",
         "type": "normal",
         "path": "lazyAssert",
         "srcPath": "/src/index.js-1",
         "children": [
            {
               "name": "setLocation",
               "treeType": "api",
               "type": "normal",
               "path": "lazyAssert.setLocation",
               "srcPath": "/src/index.js-3",
               "children": [
                  {
                     "name": "path",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.setLocation",
                     "srcPath": "/src/index.js-3"
                  },
                  {
                     "name": "noTestScriptFound",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.setLocation",
                     "srcPath": "/src/index.js-3",
                     "children": [
                        {
                           "name": "type",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyAssert.setLocation",
                           "srcPath": "/src/index.js-3"
                        }
                     ]
                  }
               ]
            },
            {
               "name": "stringify",
               "treeType": "api",
               "type": "normal",
               "path": "lazyAssert.stringify",
               "srcPath": "/src/index.js-5"
            },
            {
               "name": "plugins",
               "treeType": "api",
               "type": "normal",
               "path": "lazyAssert.plugins",
               "srcPath": "/src/index.js-7"
            },
            {
               "name": "plugin",
               "treeType": "api",
               "type": "normal",
               "path": "lazyAssert.plugin",
               "srcPath": "/src/index.js-9",
               "children": [
                  {
                     "name": "processors",
                     "treeType": "api",
                     "type": "inner",
                     "as": "lazyAssert.plugins",
                     "path": "lazyAssert.plugin",
                     "srcPath": "/src/index.js-9",
                     "children": [
                        {
                           "name": "name",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyAssert.plugin",
                           "srcPath": "/src/index.js-9"
                        },
                        {
                           "name": "processor",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyAssert.plugin",
                           "srcPath": "/src/index.js-9",
                           "children": [
                              {
                                 "name": "process",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazyAssert.plugin",
                                 "srcPath": "/src/index.js-9",
                                 "children": [
                                    {
                                       "name": "value",
                                       "treeType": "api",
                                       "type": "inner",
                                       "path": "lazyAssert.plugin",
                                       "srcPath": "/src/index.js-9"
                                    },
                                    {
                                       "name": "context",
                                       "treeType": "api",
                                       "type": "inner",
                                       "path": "lazyAssert.plugin",
                                       "srcPath": "/src/index.js-9"
                                    },
                                    {
                                       "name": "result",
                                       "treeType": "api",
                                       "type": "inner",
                                       "path": "lazyAssert.plugin",
                                       "srcPath": "/src/index.js-9"
                                    }
                                 ]
                              },
                              {
                                 "name": "post",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazyAssert.plugin",
                                 "srcPath": "/src/index.js-9",
                                 "children": [
                                    {
                                       "name": "value",
                                       "treeType": "api",
                                       "type": "inner",
                                       "path": "lazyAssert.plugin",
                                       "srcPath": "/src/index.js-9"
                                    }
                                 ]
                              }
                           ]
                        }
                     ]
                  }
               ]
            },
            {
               "name": "postValue",
               "treeType": "api",
               "type": "normal",
               "path": "lazyAssert.postValue",
               "srcPath": "/src/index.js-11",
               "children": [
                  {
                     "name": "value",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.postValue",
                     "srcPath": "/src/index.js-11"
                  },
                  {
                     "name": "plugin",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.postValue",
                     "srcPath": "/src/index.js-11"
                  },
                  {
                     "name": "context",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.postValue",
                     "srcPath": "/src/index.js-11"
                  },
                  {
                     "name": "currentPlugin",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.postValue",
                     "srcPath": "/src/index.js-11"
                  }
               ]
            },
            {
               "name": "processValue",
               "treeType": "api",
               "type": "normal",
               "path": "lazyAssert.processValue",
               "srcPath": "/src/index.js-13",
               "children": [
                  {
                     "name": "value",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.processValue",
                     "srcPath": "/src/index.js-13"
                  },
                  {
                     "name": "depthOrPlugin",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.processValue",
                     "srcPath": "/src/index.js-13"
                  },
                  {
                     "name": "context",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.processValue",
                     "srcPath": "/src/index.js-13"
                  },
                  {
                     "name": "currentPlugin",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.processValue",
                     "srcPath": "/src/index.js-13"
                  },
                  {
                     "name": "result",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.processValue",
                     "srcPath": "/src/index.js-13"
                  }
               ]
            },
            {
               "name": "peek",
               "treeType": "api",
               "type": "normal",
               "path": "lazyAssert.peek",
               "srcPath": "/src/index.js-17",
               "children": [
                  {
                     "name": "peekKey",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.peek",
                     "srcPath": "/src/index.js-17"
                  },
                  {
                     "name": "value",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.peek",
                     "srcPath": "/src/index.js-17"
                  },
                  {
                     "name": "depthOrPlugin",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.peek",
                     "srcPath": "/src/index.js-17"
                  }
               ]
            },
            {
               "name": "compare",
               "treeType": "api",
               "type": "normal",
               "path": "lazyAssert.compare",
               "srcPath": "/src/index.js-19",
               "children": [
                  {
                     "name": "peekKey",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.compare",
                     "srcPath": "/src/index.js-19"
                  },
                  {
                     "name": "actualTargetValue",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.compare",
                     "srcPath": "/src/index.js-19"
                  },
                  {
                     "name": "expectedPreparedValue",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.compare",
                     "srcPath": "/src/index.js-19"
                  },
                  {
                     "name": "depthOrPlugin",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyAssert.compare",
                     "srcPath": "/src/index.js-19"
                  }
               ]
            },
            {
               "name": "assertCompare",
               "treeType": "api",
               "type": "normal",
               "path": "lazyAssert.assertCompare",
               "srcPath": "/src/index.js-26"
            }
         ]
      },
      {
         "name": "lazyUtils",
         "treeType": "api",
         "type": "normal",
         "path": "lazyUtils",
         "srcPath": "/src/lazy-utils.js-1",
         "children": [
            {
               "name": "map",
               "treeType": "api",
               "type": "normal",
               "path": "lazyUtils.map",
               "srcPath": "/src/lazy-utils.js-9",
               "children": [
                  {
                     "name": "objTarget",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyUtils.map",
                     "srcPath": "/src/lazy-utils.js-9"
                  },
                  {
                     "name": "arrTarget",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyUtils.map",
                     "srcPath": "/src/lazy-utils.js-9"
                  },
                  {
                     "name": "callback",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyUtils.map",
                     "srcPath": "/src/lazy-utils.js-9"
                  },
                  {
                     "name": "objResult",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyUtils.map",
                     "srcPath": "/src/lazy-utils.js-9"
                  },
                  {
                     "name": "arrResult",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyUtils.map",
                     "srcPath": "/src/lazy-utils.js-9"
                  }
               ]
            },
            {
               "name": "type",
               "treeType": "api",
               "type": "normal",
               "path": "lazyUtils.type",
               "srcPath": "/src/lazy-utils.js-11",
               "children": [
                  {
                     "name": "value",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyUtils.type",
                     "srcPath": "/src/lazy-utils.js-11",
                     "children": [
                        {
                           "name": "array",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyUtils.type",
                           "srcPath": "/src/lazy-utils.js-11"
                        },
                        {
                           "name": "object",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyUtils.type",
                           "srcPath": "/src/lazy-utils.js-11"
                        },
                        {
                           "name": "other",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyUtils.type",
                           "srcPath": "/src/lazy-utils.js-11"
                        },
                        {
                           "name": "isFirstLevel",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyUtils.type",
                           "srcPath": "/src/lazy-utils.js-11"
                        },
                        {
                           "name": "result",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyUtils.type",
                           "srcPath": "/src/lazy-utils.js-11",
                           "children": [
                              {
                                 "name": "resultArray",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazyUtils.type",
                                 "srcPath": "/src/lazy-utils.js-11"
                              },
                              {
                                 "name": "resultObject",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazyUtils.type",
                                 "srcPath": "/src/lazy-utils.js-11"
                              },
                              {
                                 "name": "resultType",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazyUtils.type",
                                 "srcPath": "/src/lazy-utils.js-11"
                              }
                           ]
                        }
                     ]
                  }
               ]
            },
            {
               "name": "pattern",
               "treeType": "api",
               "type": "normal",
               "path": "lazyUtils.pattern",
               "srcPath": "/src/lazy-utils.js-13",
               "children": [
                  {
                     "name": "target",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyUtils.pattern",
                     "srcPath": "/src/lazy-utils.js-13",
                     "children": [
                        {
                           "name": "other",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyUtils.pattern",
                           "srcPath": "/src/lazy-utils.js-13"
                        }
                     ]
                  },
                  {
                     "name": "pattern",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyUtils.pattern",
                     "srcPath": "/src/lazy-utils.js-13",
                     "children": [
                        {
                           "name": "object",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyUtils.pattern",
                           "srcPath": "/src/lazy-utils.js-13"
                        },
                        {
                           "name": "func",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyUtils.pattern",
                           "srcPath": "/src/lazy-utils.js-13"
                        },
                        {
                           "name": "regexp",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazyUtils.pattern",
                           "srcPath": "/src/lazy-utils.js-13"
                        }
                     ]
                  },
                  {
                     "name": "result",
                     "treeType": "api",
                     "type": "inner",
                     "path": "lazyUtils.pattern",
                     "srcPath": "/src/lazy-utils.js-13"
                  }
               ]
            }
         ]
      },
      {
         "name": "lazy",
         "treeType": "api",
         "type": "dir",
         "path": "lazy.validators",
         "children": [
            {
               "name": "validators",
               "treeType": "api",
               "type": "normal",
               "path": "lazy.validators",
               "srcPath": "/src/lazy-validators.js-1",
               "children": [
                  {
                     "name": "validate",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.validate",
                     "srcPath": "/src/lazy-validators.js-6",
                     "children": [
                        {
                           "name": "peekKey",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.validate",
                           "srcPath": "/src/lazy-validators.js-6"
                        },
                        {
                           "name": "actualTargetValue",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.validate",
                           "srcPath": "/src/lazy-validators.js-6"
                        },
                        {
                           "name": "validator",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.validate",
                           "srcPath": "/src/lazy-validators.js-6"
                        },
                        {
                           "name": "result",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.validate",
                           "srcPath": "/src/lazy-validators.js-6",
                           "children": [
                              {
                                 "name": "result",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              },
                              {
                                 "name": "type",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              },
                              {
                                 "name": "reason",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6",
                                 "children": []
                              },
                              {
                                 "name": "message",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              },
                              {
                                 "name": "key",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              },
                              {
                                 "name": "index",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              },
                              {
                                 "name": "vIndex",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              },
                              {
                                 "name": "expected",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              },
                              {
                                 "name": "regexp",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              },
                              {
                                 "name": "funcInfo",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              },
                              {
                                 "name": "subResult",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validate",
                                 "srcPath": "/src/lazy-validators.js-6"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "name": "validatorArray",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.validatorArray",
                     "srcPath": "/src/lazy-validators.js-18",
                     "children": [
                        {
                           "name": "result",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.validatorArray",
                           "srcPath": "/src/lazy-validators.js-18",
                           "children": [
                              {
                                 "name": "result",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validatorArray",
                                 "srcPath": "/src/lazy-validators.js-18"
                              },
                              {
                                 "name": "type",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validatorArray",
                                 "srcPath": "/src/lazy-validators.js-18"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "name": "validatorArrayArray",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.validatorArrayArray",
                     "srcPath": "/src/lazy-validators.js-20",
                     "children": [
                        {
                           "name": "result",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.validatorArrayArray",
                           "srcPath": "/src/lazy-validators.js-20",
                           "children": [
                              {
                                 "name": "type",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.validatorArrayArray",
                                 "srcPath": "/src/lazy-validators.js-20"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "name": "summarizeTypeValidator",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.summarizeTypeValidator",
                     "srcPath": "/src/lazy-validators.js-22"
                  },
                  {
                     "name": "clearValidateKey",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.clearValidateKey",
                     "srcPath": "/src/lazy-validators.js-30",
                     "children": [
                        {
                           "name": "target",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.clearValidateKey",
                           "srcPath": "/src/lazy-validators.js-30"
                        }
                     ]
                  },
                  {
                     "name": "printWarnings",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.printWarnings",
                     "srcPath": "/src/lazy-validators.js-32"
                  },
                  {
                     "name": "formalizeFailResultItem",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.formalizeFailResultItem",
                     "srcPath": "/src/lazy-validators.js-34",
                     "children": [
                        {
                           "name": "result",
                           "treeType": "api",
                           "type": "inner",
                           "as": "~FinalResult",
                           "path": "lazy.validators.formalizeFailResultItem",
                           "srcPath": "/src/lazy-validators.js-34",
                           "children": [
                              {
                                 "name": "valPath",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.formalizeFailResultItem",
                                 "srcPath": "/src/lazy-validators.js-34"
                              },
                              {
                                 "name": "condPath",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.formalizeFailResultItem",
                                 "srcPath": "/src/lazy-validators.js-34"
                              },
                              {
                                 "name": "finalMessage",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.formalizeFailResultItem",
                                 "srcPath": "/src/lazy-validators.js-34"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "name": "mergeFailResults",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.mergeFailResults",
                     "srcPath": "/src/lazy-validators.js-38",
                     "children": [
                        {
                           "name": "result",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.mergeFailResults",
                           "srcPath": "/src/lazy-validators.js-38"
                        },
                        {
                           "name": "warningResult",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.mergeFailResults",
                           "srcPath": "/src/lazy-validators.js-38",
                           "children": [
                              {
                                 "name": "message",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.mergeFailResults",
                                 "srcPath": "/src/lazy-validators.js-38"
                              },
                              {
                                 "name": "subResult",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.mergeFailResults",
                                 "srcPath": "/src/lazy-validators.js-38"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "name": "printDebug",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.printDebug",
                     "srcPath": "/src/lazy-validators.js-40",
                     "children": [
                        {
                           "name": "value",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.printDebug",
                           "srcPath": "/src/lazy-validators.js-40"
                        },
                        {
                           "name": "validator",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.printDebug",
                           "srcPath": "/src/lazy-validators.js-40"
                        },
                        {
                           "name": "result",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.printDebug",
                           "srcPath": "/src/lazy-validators.js-40"
                        }
                     ]
                  },
                  {
                     "name": "getProblemPaths",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.getProblemPaths",
                     "srcPath": "/src/lazy-validators.js-45",
                     "children": [
                        {
                           "name": "result",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.getProblemPaths",
                           "srcPath": "/src/lazy-validators.js-45"
                        },
                        {
                           "name": "problemPaths",
                           "treeType": "api",
                           "type": "inner",
                           "as": "~ProblemPaths",
                           "path": "lazy.validators.getProblemPaths",
                           "srcPath": "/src/lazy-validators.js-45",
                           "children": [
                              {
                                 "name": "path",
                                 "treeType": "api",
                                 "type": "inner",
                                 "path": "lazy.validators.getProblemPaths",
                                 "srcPath": "/src/lazy-validators.js-45"
                              }
                           ]
                        }
                     ]
                  },
                  {
                     "name": "getPrimitiveValue",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.getPrimitiveValue",
                     "srcPath": "/src/lazy-validators.js-47",
                     "children": [
                        {
                           "name": "rawValue",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.getPrimitiveValue",
                           "srcPath": "/src/lazy-validators.js-47"
                        },
                        {
                           "name": "path",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.getPrimitiveValue",
                           "srcPath": "/src/lazy-validators.js-47"
                        },
                        {
                           "name": "problemPaths",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.getPrimitiveValue",
                           "srcPath": "/src/lazy-validators.js-47"
                        },
                        {
                           "name": "valueDisplay",
                           "treeType": "api",
                           "type": "inner",
                           "path": "lazy.validators.getPrimitiveValue",
                           "srcPath": "/src/lazy-validators.js-47"
                        }
                     ]
                  },
                  {
                     "name": "debugOutputValue",
                     "treeType": "api",
                     "type": "normal",
                     "path": "lazy.validators.debugOutputValue",
                     "srcPath": "/src/lazy-validators.js-53"
                  }
               ]
            }
         ]
      },
      {
         "name": "private",
         "treeType": "api",
         "type": "dir",
         "path": "private.~VALIDATE_KEY",
         "children": [
            {
               "name": "~VALIDATE_KEY",
               "treeType": "api",
               "type": "normal",
               "path": "private.~VALIDATE_KEY",
               "srcPath": "/src/lazy-validators.js-3"
            },
            {
               "name": "~Validator",
               "treeType": "api",
               "type": "normal",
               "path": "private.~Validator",
               "srcPath": "/src/lazy-validators.js-5",
               "children": [
                  {
                     "name": "functionConfig",
                     "treeType": "api",
                     "type": "inner",
                     "path": "private.~Validator",
                     "srcPath": "/src/lazy-validators.js-5",
                     "children": [
                        {
                           "name": "val",
                           "treeType": "api",
                           "type": "inner",
                           "path": "private.~Validator",
                           "srcPath": "/src/lazy-validators.js-5"
                        },
                        {
                           "name": "key",
                           "treeType": "api",
                           "type": "inner",
                           "path": "private.~Validator",
                           "srcPath": "/src/lazy-validators.js-5"
                        },
                        {
                           "name": "parent",
                           "treeType": "api",
                           "type": "inner",
                           "path": "private.~Validator",
                           "srcPath": "/src/lazy-validators.js-5"
                        }
                     ]
                  },
                  {
                     "name": "stringConfig",
                     "treeType": "api",
                     "type": "inner",
                     "as": "~StringConfig",
                     "path": "private.~Validator",
                     "srcPath": "/src/lazy-validators.js-5"
                  },
                  {
                     "name": "notStringConfig",
                     "treeType": "api",
                     "type": "inner",
                     "path": "private.~Validator",
                     "srcPath": "/src/lazy-validators.js-5"
                  },
                  {
                     "name": "refConfig",
                     "treeType": "api",
                     "type": "inner",
                     "path": "private.~Validator",
                     "srcPath": "/src/lazy-validators.js-5"
                  },
                  {
                     "name": "regexpConfig",
                     "treeType": "api",
                     "type": "inner",
                     "path": "private.~Validator",
                     "srcPath": "/src/lazy-validators.js-5"
                  },
                  {
                     "name": "arrayConfig",
                     "treeType": "api",
                     "type": "inner",
                     "path": "private.~Validator",
                     "srcPath": "/src/lazy-validators.js-5",
                     "children": [
                        {
                           "name": "arrayValidator",
                           "treeType": "api",
                           "type": "inner",
                           "path": "private.~Validator",
                           "srcPath": "/src/lazy-validators.js-5"
                        },
                        {
                           "name": "rawValue",
                           "treeType": "api",
                           "type": "inner",
                           "path": "private.~Validator",
                           "srcPath": "/src/lazy-validators.js-5"
                        },
                        {
                           "name": "op",
                           "treeType": "api",
                           "type": "inner",
                           "path": "private.~Validator",
                           "srcPath": "/src/lazy-validators.js-5"
                        },
                        {
                           "name": "orValidator",
                           "treeType": "api",
                           "type": "inner",
                           "path": "private.~Validator",
                           "srcPath": "/src/lazy-validators.js-5"
                        },
                        {
                           "name": "notValidator",
                           "treeType": "api",
                           "type": "inner",
                           "path": "private.~Validator",
                           "srcPath": "/src/lazy-validators.js-5"
                        },
                        {
                           "name": "andValidator",
                           "treeType": "api",
                           "type": "inner",
                           "path": "private.~Validator",
                           "srcPath": "/src/lazy-validators.js-5"
                        }
                     ]
                  },
                  {
                     "name": "objectConfig",
                     "treeType": "api",
                     "type": "inner",
                     "path": "private.~Validator",
                     "srcPath": "/src/lazy-validators.js-5"
                  }
               ]
            }
         ]
      },
      {
         "name": "forEachActual",
         "treeType": "api",
         "type": "normal",
         "path": ".forEachActual",
         "srcPath": "/src/scripts/script-lib.js-1",
         "children": [
            {
               "name": "basePath",
               "treeType": "api",
               "type": "inner",
               "path": ".forEachActual",
               "srcPath": "/src/scripts/script-lib.js-1"
            },
            {
               "name": "callback",
               "treeType": "api",
               "type": "inner",
               "path": ".forEachActual",
               "srcPath": "/src/scripts/script-lib.js-1",
               "children": [
                  {
                     "name": "actualPath",
                     "treeType": "api",
                     "type": "inner",
                     "path": ".forEachActual",
                     "srcPath": "/src/scripts/script-lib.js-1"
                  },
                  {
                     "name": "expectedPath",
                     "treeType": "api",
                     "type": "inner",
                     "path": ".forEachActual",
                     "srcPath": "/src/scripts/script-lib.js-1"
                  }
               ]
            }
         ]
      },
      {
         "name": "utils",
         "treeType": "api",
         "type": "normal",
         "path": "utils",
         "srcPath": "/src/utils.js-1",
         "children": [
            {
               "name": "j",
               "treeType": "api",
               "type": "normal",
               "path": "utils.j",
               "srcPath": "/src/utils.js-3",
               "children": [
                  {
                     "name": "pathParts",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.j",
                     "srcPath": "/src/utils.js-3",
                     "children": [
                        {
                           "name": "part",
                           "treeType": "api",
                           "type": "inner",
                           "path": "utils.j",
                           "srcPath": "/src/utils.js-3"
                        }
                     ]
                  },
                  {
                     "name": "path",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.j",
                     "srcPath": "/src/utils.js-3"
                  }
               ]
            },
            {
               "name": "ensureFolder",
               "treeType": "api",
               "type": "normal",
               "path": "utils.ensureFolder",
               "srcPath": "/src/utils.js-7",
               "children": [
                  {
                     "name": "target",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.ensureFolder",
                     "srcPath": "/src/utils.js-7"
                  },
                  {
                     "name": "isFileError",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.ensureFolder",
                     "srcPath": "/src/utils.js-7",
                     "children": [
                        {
                           "name": "type",
                           "treeType": "api",
                           "type": "inner",
                           "path": "utils.ensureFolder",
                           "srcPath": "/src/utils.js-7"
                        }
                     ]
                  }
               ]
            },
            {
               "name": "flattenFiles",
               "treeType": "api",
               "type": "normal",
               "path": "utils.flattenFiles",
               "srcPath": "/src/utils.js-9",
               "children": [
                  {
                     "name": "baseDir",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.flattenFiles",
                     "srcPath": "/src/utils.js-9"
                  },
                  {
                     "name": "filepath",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.flattenFiles",
                     "srcPath": "/src/utils.js-9"
                  },
                  {
                     "name": "noSuchDirError",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.flattenFiles",
                     "srcPath": "/src/utils.js-9"
                  }
               ]
            },
            {
               "name": "write",
               "treeType": "api",
               "type": "normal",
               "path": "utils.write",
               "srcPath": "/src/utils.js-17",
               "children": [
                  {
                     "name": "path",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.write",
                     "srcPath": "/src/utils.js-17"
                  },
                  {
                     "name": "value",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.write",
                     "srcPath": "/src/utils.js-17"
                  }
               ]
            },
            {
               "name": "read",
               "treeType": "api",
               "type": "normal",
               "path": "utils.read",
               "srcPath": "/src/utils.js-19",
               "children": [
                  {
                     "name": "path",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.read",
                     "srcPath": "/src/utils.js-19"
                  },
                  {
                     "name": "defaultValue",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.read",
                     "srcPath": "/src/utils.js-19"
                  },
                  {
                     "name": "value",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.read",
                     "srcPath": "/src/utils.js-19"
                  },
                  {
                     "name": "noFileError",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.read",
                     "srcPath": "/src/utils.js-19",
                     "children": [
                        {
                           "name": "type",
                           "treeType": "api",
                           "type": "inner",
                           "path": "utils.read",
                           "srcPath": "/src/utils.js-19"
                        }
                     ]
                  },
                  {
                     "name": "isFolderError",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.read",
                     "srcPath": "/src/utils.js-19",
                     "children": [
                        {
                           "name": "type",
                           "treeType": "api",
                           "type": "inner",
                           "path": "utils.read",
                           "srcPath": "/src/utils.js-19"
                        }
                     ]
                  },
                  {
                     "name": "isFileError",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.read",
                     "srcPath": "/src/utils.js-19"
                  }
               ]
            },
            {
               "name": "newError",
               "treeType": "api",
               "type": "normal",
               "path": "utils.newError",
               "srcPath": "/src/utils.js-21",
               "children": [
                  {
                     "name": "type",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.newError",
                     "srcPath": "/src/utils.js-21"
                  },
                  {
                     "name": "message",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.newError",
                     "srcPath": "/src/utils.js-21"
                  },
                  {
                     "name": "error",
                     "treeType": "api",
                     "type": "inner",
                     "path": "utils.newError",
                     "srcPath": "/src/utils.js-21",
                     "children": [
                        {
                           "name": "message",
                           "treeType": "api",
                           "type": "inner",
                           "path": "utils.newError",
                           "srcPath": "/src/utils.js-21"
                        }
                     ]
                  }
               ]
            },
            {
               "name": "trim",
               "treeType": "api",
               "type": "normal",
               "path": "utils.trim",
               "srcPath": "/src/utils.js-23"
            }
         ]
      }
   ]
}