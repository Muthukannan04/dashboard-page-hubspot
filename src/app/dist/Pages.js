(function(require$$0, react) {
  "use strict";
  var jsxDevRuntime = { exports: {} };
  var reactJsxDevRuntime_development = {};
  var hasRequiredReactJsxDevRuntime_development;
  function requireReactJsxDevRuntime_development() {
    if (hasRequiredReactJsxDevRuntime_development) return reactJsxDevRuntime_development;
    hasRequiredReactJsxDevRuntime_development = 1;
    /**
     * @license React
     * react-jsx-dev-runtime.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      (function() {
        var React2 = require$$0;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        var jsxDEV$1 = jsxWithValidation;
        reactJsxDevRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
        reactJsxDevRuntime_development.jsxDEV = jsxDEV$1;
      })();
    }
    return reactJsxDevRuntime_development;
  }
  var hasRequiredJsxDevRuntime;
  function requireJsxDevRuntime() {
    if (hasRequiredJsxDevRuntime) return jsxDevRuntime.exports;
    hasRequiredJsxDevRuntime = 1;
    {
      jsxDevRuntime.exports = requireReactJsxDevRuntime_development();
    }
    return jsxDevRuntime.exports;
  }
  var jsxDevRuntimeExports = requireJsxDevRuntime();
  const isRunningInWorker = () => typeof self !== "undefined" && self.__HUBSPOT_EXTENSION_WORKER__ === true;
  const fakeWorkerGlobals = {
    logger: {
      debug: (data) => {
        console.log(data);
      },
      info: (data) => {
        console.info(data);
      },
      warn: (data) => {
        console.warn(data);
      },
      error: (data) => {
        console.error(data);
      }
    },
    extend_V2: () => {
    },
    // @ts-expect-error we are not using the worker endpoint in tests env.
    __useExtensionContext: () => {
    }
  };
  const getWorkerGlobals = () => {
    return isRunningInWorker() ? self : fakeWorkerGlobals;
  };
  const extend_V2 = getWorkerGlobals().extend_V2;
  function serverless(name, options) {
    return self.serverless(name, options);
  }
  function fetch(url, options) {
    return self.hsFetch(url, options);
  }
  const hubspot = {
    extend: extend_V2,
    serverless,
    fetch
  };
  var ServerlessExecutionStatus;
  (function(ServerlessExecutionStatus2) {
    ServerlessExecutionStatus2["Success"] = "SUCCESS";
    ServerlessExecutionStatus2["Error"] = "ERROR";
  })(ServerlessExecutionStatus || (ServerlessExecutionStatus = {}));
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_development = {};
  var hasRequiredReactJsxRuntime_development;
  function requireReactJsxRuntime_development() {
    if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
    hasRequiredReactJsxRuntime_development = 1;
    /**
     * @license React
     * react-jsx-runtime.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      (function() {
        var React2 = require$$0;
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2) ;
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum();
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
        reactJsxRuntime_development.jsx = jsx;
        reactJsxRuntime_development.jsxs = jsxs;
      })();
    }
    return reactJsxRuntime_development;
  }
  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    {
      jsxRuntime.exports = requireReactJsxRuntime_development();
    }
    return jsxRuntime.exports;
  }
  var jsxRuntimeExports = requireJsxRuntime();
  const createRemoteComponentRegistry = () => {
    const componentMetadataLookup = /* @__PURE__ */ new Map();
    const componentNameByComponentMap = /* @__PURE__ */ new Map();
    const registerComponent = (component, componentName, fragmentProps) => {
      componentNameByComponentMap.set(component, componentName);
      componentMetadataLookup.set(componentName, {
        fragmentPropsSet: new Set(fragmentProps),
        fragmentPropsArray: fragmentProps
      });
      return component;
    };
    return {
      getComponentName: (component) => {
        const componentName = componentNameByComponentMap.get(component);
        if (!componentName) {
          return null;
        }
        return componentName;
      },
      isAllowedComponentName: (componentName) => {
        return componentMetadataLookup.has(componentName);
      },
      isComponentFragmentProp: (componentName, propName) => {
        const componentMetadata = componentMetadataLookup.get(componentName);
        if (!componentMetadata) {
          return false;
        }
        return componentMetadata.fragmentPropsSet.has(propName);
      },
      getComponentFragmentPropNames: (componentName) => {
        const componentMetadata = componentMetadataLookup.get(componentName);
        if (!componentMetadata) {
          return [];
        }
        const { fragmentPropsArray } = componentMetadata;
        return fragmentPropsArray;
      },
      createAndRegisterRemoteReactComponent: (componentName, options = {}) => {
        const { fragmentProps = [] } = options;
        const remoteReactComponent = react.createRemoteReactComponent(componentName, {
          fragmentProps
        });
        return registerComponent(remoteReactComponent, componentName, fragmentProps);
      },
      createAndRegisterRemoteCompoundReactComponent: (componentName, options) => {
        const { fragmentProps = [] } = options;
        const RemoteComponentType = react.createRemoteReactComponent(componentName, {
          fragmentProps
        });
        const CompoundFunctionComponentType = typeof RemoteComponentType === "function" ? RemoteComponentType : (props) => jsxRuntimeExports.jsx(RemoteComponentType, { ...props });
        Object.assign(CompoundFunctionComponentType, options.compoundComponentProperties);
        return registerComponent(CompoundFunctionComponentType, componentName, fragmentProps);
      }
    };
  };
  const __hubSpotComponentRegistry = createRemoteComponentRegistry();
  const { createAndRegisterRemoteReactComponent, createAndRegisterRemoteCompoundReactComponent } = __hubSpotComponentRegistry;
  createAndRegisterRemoteReactComponent("Alert");
  const Button = createAndRegisterRemoteReactComponent("Button", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("ButtonRow");
  createAndRegisterRemoteReactComponent("Card");
  createAndRegisterRemoteReactComponent("DescriptionList");
  createAndRegisterRemoteReactComponent("DescriptionListItem");
  const Divider = createAndRegisterRemoteReactComponent("Divider");
  createAndRegisterRemoteReactComponent("Spacer");
  const EmptyState = createAndRegisterRemoteReactComponent("EmptyState");
  createAndRegisterRemoteReactComponent("ErrorState");
  createAndRegisterRemoteReactComponent("Form");
  const Heading = createAndRegisterRemoteReactComponent("Heading");
  createAndRegisterRemoteReactComponent("Image", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("Input");
  createAndRegisterRemoteReactComponent("Link", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("TextArea");
  createAndRegisterRemoteReactComponent("Textarea");
  const LoadingSpinner = createAndRegisterRemoteReactComponent("LoadingSpinner");
  createAndRegisterRemoteReactComponent("ProgressBar");
  createAndRegisterRemoteReactComponent("Select");
  createAndRegisterRemoteReactComponent("Tag", {
    fragmentProps: ["overlay"]
  });
  const Text = createAndRegisterRemoteReactComponent("Text");
  createAndRegisterRemoteReactComponent("Tile");
  createAndRegisterRemoteReactComponent("Stack");
  createAndRegisterRemoteReactComponent("ToggleGroup");
  createAndRegisterRemoteReactComponent("StatisticsItem");
  createAndRegisterRemoteReactComponent("Statistics");
  createAndRegisterRemoteReactComponent("StatisticsTrend");
  const Table = createAndRegisterRemoteReactComponent("Table");
  createAndRegisterRemoteReactComponent("TableFooter");
  const TableCell = createAndRegisterRemoteReactComponent("TableCell");
  const TableRow = createAndRegisterRemoteReactComponent("TableRow");
  const TableBody = createAndRegisterRemoteReactComponent("TableBody");
  const TableHeader = createAndRegisterRemoteReactComponent("TableHeader");
  const TableHead = createAndRegisterRemoteReactComponent("TableHead");
  createAndRegisterRemoteReactComponent("NumberInput");
  const Box = createAndRegisterRemoteReactComponent("Box");
  createAndRegisterRemoteReactComponent("StepIndicator");
  createAndRegisterRemoteReactComponent("Accordion");
  createAndRegisterRemoteReactComponent("MultiSelect");
  const Flex = createAndRegisterRemoteReactComponent("Flex");
  createAndRegisterRemoteReactComponent("DateInput");
  createAndRegisterRemoteReactComponent("Checkbox");
  createAndRegisterRemoteReactComponent("RadioButton");
  createAndRegisterRemoteReactComponent("List");
  createAndRegisterRemoteReactComponent("Toggle");
  createAndRegisterRemoteCompoundReactComponent("Dropdown", {
    compoundComponentProperties: {
      /**
       * The `Dropdown.ButtonItem` component represents a single option within a `Dropdown` menu. Use this component as a child of the `Dropdown` component.
       *
       * **Links:**
       *
       * - {@link https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensions/ui-components/standard-components/dropdown Docs}
       */
      ButtonItem: createAndRegisterRemoteReactComponent("DropdownButtonItem", {
        fragmentProps: ["overlay"]
      })
    }
  });
  createAndRegisterRemoteReactComponent("Panel");
  createAndRegisterRemoteReactComponent("PanelFooter");
  createAndRegisterRemoteReactComponent("PanelBody");
  createAndRegisterRemoteReactComponent("PanelSection");
  createAndRegisterRemoteReactComponent("StepperInput");
  createAndRegisterRemoteReactComponent("Modal");
  createAndRegisterRemoteReactComponent("ModalBody");
  createAndRegisterRemoteReactComponent("ModalFooter");
  createAndRegisterRemoteReactComponent("Icon");
  createAndRegisterRemoteReactComponent("StatusTag");
  createAndRegisterRemoteReactComponent("LoadingButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("BarChart");
  createAndRegisterRemoteReactComponent("LineChart");
  createAndRegisterRemoteReactComponent("ScoreCircle");
  createAndRegisterRemoteReactComponent("Tabs");
  createAndRegisterRemoteReactComponent("Tab");
  createAndRegisterRemoteReactComponent("Illustration");
  createAndRegisterRemoteReactComponent("Tooltip");
  createAndRegisterRemoteReactComponent("SearchInput");
  createAndRegisterRemoteReactComponent("TimeInput");
  createAndRegisterRemoteReactComponent("CurrencyInput");
  createAndRegisterRemoteReactComponent("Inline");
  createAndRegisterRemoteReactComponent("AutoGrid");
  createAndRegisterRemoteReactComponent("CrmPropertyList");
  createAndRegisterRemoteReactComponent("CrmAssociationTable");
  createAndRegisterRemoteReactComponent("CrmDataHighlight");
  createAndRegisterRemoteReactComponent("CrmReport");
  createAndRegisterRemoteReactComponent("CrmAssociationPivot");
  createAndRegisterRemoteReactComponent("CrmAssociationPropertyList");
  createAndRegisterRemoteReactComponent("CrmAssociationStageTracker");
  createAndRegisterRemoteReactComponent("CrmSimpleDeadline");
  createAndRegisterRemoteReactComponent("CrmStageTracker");
  createAndRegisterRemoteReactComponent("CrmStatistics");
  createAndRegisterRemoteReactComponent("CrmActionButton");
  createAndRegisterRemoteReactComponent("CrmActionLink");
  createAndRegisterRemoteReactComponent("CrmCardActions");
  createAndRegisterRemoteReactComponent("HeaderActions");
  createAndRegisterRemoteReactComponent("PrimaryHeaderActionButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("SecondaryHeaderActionButton", {
    fragmentProps: ["overlay"]
  });
  const PageHeader = createAndRegisterRemoteCompoundReactComponent("PageHeader", {
    compoundComponentProperties: {
      PrimaryAction: createAndRegisterRemoteReactComponent("PageHeaderPrimaryAction"),
      SecondaryActions: createAndRegisterRemoteReactComponent("PageHeaderSecondaryActions"),
      Link: createAndRegisterRemoteReactComponent("PageHeaderLink"),
      PageLink: createAndRegisterRemoteReactComponent("PageHeaderPageLink")
    }
  });
  const PageBreadcrumbs = createAndRegisterRemoteCompoundReactComponent("PageBreadcrumbs", {
    compoundComponentProperties: {
      PageLink: createAndRegisterRemoteReactComponent("PageBreadcrumbsPageLink"),
      Current: createAndRegisterRemoteReactComponent("PageBreadcrumbsCurrent")
    }
  });
  const PageLink = createAndRegisterRemoteReactComponent("PageLink");
  const PageTitle = createAndRegisterRemoteReactComponent("PageTitle");
  createAndRegisterRemoteReactComponent("Iframe");
  createAndRegisterRemoteReactComponent("MediaObject", {
    fragmentProps: ["itemRight", "itemLeft"]
  });
  createAndRegisterRemoteReactComponent("Stack2");
  createAndRegisterRemoteReactComponent("Center");
  createAndRegisterRemoteReactComponent("Grid");
  createAndRegisterRemoteReactComponent("GridItem");
  createAndRegisterRemoteReactComponent("SettingsView");
  createAndRegisterRemoteReactComponent("ExpandableText");
  createAndRegisterRemoteReactComponent("FileInput");
  createAndRegisterRemoteReactComponent("FileUpload");
  createAndRegisterRemoteReactComponent("FileViewer");
  createAndRegisterRemoteReactComponent("ExperimentalFlex");
  createAndRegisterRemoteReactComponent("ExperimentalBox");
  createAndRegisterRemoteReactComponent("ExperimentalInline");
  createAndRegisterRemoteReactComponent("ExperimentalAutoGrid");
  createAndRegisterRemoteReactComponent("ExperimentalButtonRow");
  createAndRegisterRemoteReactComponent("ExperimentalButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("ExperimentalLoadingButton", {
    fragmentProps: ["overlay"]
  });
  createAndRegisterRemoteReactComponent("ExperimentalInput");
  createAndRegisterRemoteReactComponent("ExperimentalTextArea");
  createAndRegisterRemoteReactComponent("ExperimentalNumberInput");
  createAndRegisterRemoteReactComponent("ExperimentalDateInput");
  createAndRegisterRemoteReactComponent("ExperimentalTimeInput");
  createAndRegisterRemoteReactComponent("ExperimentalCurrencyInput");
  createAndRegisterRemoteReactComponent("ExperimentalStepperInput");
  createAndRegisterRemoteReactComponent("ExperimentalSearchInput");
  createAndRegisterRemoteReactComponent("ExperimentalSelect");
  createAndRegisterRemoteReactComponent("ExperimentalMultiSelect");
  createAndRegisterRemoteReactComponent("ExperimentalCheckbox");
  createAndRegisterRemoteReactComponent("ExperimentalRadioButton");
  createAndRegisterRemoteReactComponent("ExperimentalToggle");
  const ReactRenderMocksContext = require$$0.createContext(null);
  function useMocksContext() {
    return require$$0.useContext(ReactRenderMocksContext);
  }
  ReactRenderMocksContext.Provider;
  function useStableValue(value) {
    const stableRef = require$$0.useRef({
      key: JSON.stringify(value),
      value
    });
    const key = JSON.stringify(value);
    if (key !== stableRef.current.key) {
      stableRef.current = { key, value };
    }
    return stableRef.current.value;
  }
  const DEFAULT_PAGE_SIZE = 10;
  function calculatePaginationFlags(currentPage, hasMore) {
    return {
      hasNextPage: hasMore,
      hasPreviousPage: currentPage > 1
    };
  }
  function isCrmSearchResponse(data) {
    const d = data;
    if (d === null || typeof d !== "object" || !Array.isArray(d.results) || typeof d.total !== "number" || typeof d.hasMore !== "boolean") {
      return false;
    }
    return d.results.every((result) => result !== null && typeof result === "object" && typeof result.objectId === "number" && result.properties !== null && typeof result.properties === "object");
  }
  const fetchCrmSearch = async (request, options) => {
    let response;
    let result;
    try {
      response = await getWorkerGlobals().hsWorkerAPI.fetchCrmSearch(request, options);
      result = await response.json();
    } catch (error) {
      throw error instanceof Error ? error : new Error("Failed to fetch CRM search results: Unknown error");
    }
    if (result.error) {
      throw new Error(result.error);
    }
    if (!isCrmSearchResponse(result.data)) {
      throw new Error("Invalid response format");
    }
    return {
      data: result.data,
      cleanup: result.cleanup || (() => {
      })
    };
  };
  function normalizeError(err, defaultMessage) {
    return err instanceof Error ? err : new Error(defaultMessage);
  }
  function useFetchLifecycle({ fetchFn, callbacks, deps, defaultErrorMessage = "An error occurred" }) {
    const fetchFnRef = require$$0.useRef(fetchFn);
    fetchFnRef.current = fetchFn;
    const callbacksRef = require$$0.useRef(callbacks);
    callbacksRef.current = callbacks;
    const defaultErrorMessageRef = require$$0.useRef(defaultErrorMessage);
    defaultErrorMessageRef.current = defaultErrorMessage;
    const refetchAbortRef = require$$0.useRef(null);
    const refetchCleanupRef = require$$0.useRef(null);
    require$$0.useEffect(() => {
      let cancelled = false;
      let cleanup = null;
      const signal = { cancelled: false, isRefetch: false };
      const fetchData = async () => {
        const context = { isRefetch: false };
        try {
          callbacksRef.current.onStart(context);
          const result = await fetchFnRef.current(signal);
          if (!cancelled) {
            callbacksRef.current.onSuccess(result.data, context);
            cleanup = result.cleanup ?? null;
          }
        } catch (err) {
          if (!cancelled) {
            callbacksRef.current.onError(normalizeError(err, defaultErrorMessageRef.current), context);
          }
        }
      };
      fetchData();
      return () => {
        cancelled = true;
        signal.cancelled = true;
        if (cleanup) {
          cleanup();
        }
        if (refetchCleanupRef.current) {
          refetchCleanupRef.current();
          refetchCleanupRef.current = null;
        }
      };
    }, deps);
    const refetch = require$$0.useCallback(async () => {
      if (refetchAbortRef.current) {
        refetchAbortRef.current.cancelled = true;
      }
      if (refetchCleanupRef.current) {
        refetchCleanupRef.current();
        refetchCleanupRef.current = null;
      }
      const abortSignal = { cancelled: false, isRefetch: true };
      refetchAbortRef.current = abortSignal;
      const context = { isRefetch: true };
      try {
        callbacksRef.current.onStart(context);
        const result = await fetchFnRef.current(abortSignal);
        if (!abortSignal.cancelled) {
          callbacksRef.current.onSuccess(result.data, context);
          refetchCleanupRef.current = result.cleanup ?? null;
        } else {
          if (result.cleanup) {
            result.cleanup();
          }
        }
      } catch (err) {
        if (!abortSignal.cancelled) {
          callbacksRef.current.onError(normalizeError(err, defaultErrorMessageRef.current), context);
        }
      } finally {
        if (refetchAbortRef.current === abortSignal) {
          refetchAbortRef.current = null;
        }
      }
    }, []);
    return { refetch };
  }
  function createInitialState() {
    return {
      results: [],
      total: 0,
      error: null,
      isLoading: true,
      isRefetching: false,
      currentPage: 1,
      hasMore: false,
      currentCursor: void 0,
      nextCursor: void 0,
      offsetHistory: []
    };
  }
  function crmSearchReducer(state, action) {
    switch (action.type) {
      case "FETCH_START":
        return {
          ...state,
          isLoading: true,
          error: null
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          results: action.payload.results,
          total: action.payload.total,
          hasMore: action.payload.hasMore,
          currentCursor: action.payload.currentCursor,
          nextCursor: action.payload.nextCursor,
          error: null
        };
      case "FETCH_ERROR":
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          results: [],
          total: 0,
          hasMore: false,
          currentCursor: void 0,
          nextCursor: void 0
        };
      case "NEXT_PAGE":
        return {
          ...state,
          currentPage: state.currentPage + 1,
          offsetHistory: state.currentCursor !== void 0 ? [...state.offsetHistory, state.currentCursor] : state.offsetHistory,
          currentCursor: state.nextCursor,
          nextCursor: void 0
        };
      case "PREVIOUS_PAGE": {
        const newPage = Math.max(1, state.currentPage - 1);
        const newHistory = [...state.offsetHistory];
        const previousCursor = newHistory.pop();
        return {
          ...state,
          currentPage: newPage,
          offsetHistory: newHistory,
          currentCursor: previousCursor,
          nextCursor: void 0
        };
      }
      case "RESET":
        return {
          ...state,
          currentPage: 1,
          results: [],
          total: 0,
          isLoading: true,
          hasMore: false,
          error: null,
          currentCursor: void 0,
          nextCursor: void 0,
          offsetHistory: []
        };
      case "REFETCH_START":
        return {
          ...state,
          isRefetching: true,
          error: null
        };
      case "REFETCH_SUCCESS":
        return {
          ...state,
          isRefetching: false,
          results: action.payload.results,
          total: action.payload.total,
          hasMore: action.payload.hasMore,
          nextCursor: action.payload.nextCursor,
          error: null
        };
      case "REFETCH_ERROR":
        return {
          ...state,
          isRefetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  const DEFAULT_OPTIONS = {};
  function useCrmSearch(config, options = DEFAULT_OPTIONS) {
    const pageSize = (config == null ? void 0 : config.pageLength) ?? DEFAULT_PAGE_SIZE;
    const [state, dispatch] = require$$0.useReducer(crmSearchReducer, createInitialState());
    const [prevPageSize, setPrevPageSize] = require$$0.useState(pageSize);
    if (prevPageSize !== pageSize) {
      setPrevPageSize(pageSize);
      dispatch({ type: "RESET" });
    }
    const stableConfig = useStableValue(config);
    const stableOptions = useStableValue(options);
    const nextPage = require$$0.useCallback(() => {
      const paginationFlags2 = calculatePaginationFlags(state.currentPage, state.hasMore);
      if (paginationFlags2.hasNextPage) {
        dispatch({ type: "NEXT_PAGE" });
      }
    }, [state.currentPage, state.hasMore]);
    const previousPage = require$$0.useCallback(() => {
      const paginationFlags2 = calculatePaginationFlags(state.currentPage, state.hasMore);
      if (paginationFlags2.hasPreviousPage) {
        dispatch({ type: "PREVIOUS_PAGE" });
      }
    }, [state.currentPage, state.hasMore]);
    const reset = require$$0.useCallback(() => {
      const paginationFlags2 = calculatePaginationFlags(state.currentPage, state.hasMore);
      if (paginationFlags2.hasPreviousPage) {
        dispatch({ type: "RESET" });
      }
    }, [state.currentPage, state.hasMore]);
    const { refetch } = useFetchLifecycle({
      fetchFn: () => {
        const request = {
          objectType: stableConfig == null ? void 0 : stableConfig.objectType,
          properties: stableConfig == null ? void 0 : stableConfig.properties,
          query: stableConfig == null ? void 0 : stableConfig.query,
          filterGroups: stableConfig == null ? void 0 : stableConfig.filterGroups,
          sorts: stableConfig == null ? void 0 : stableConfig.sorts,
          pageLength: pageSize,
          after: state.currentCursor
        };
        return fetchCrmSearch(request, {
          propertiesToFormat: stableOptions.propertiesToFormat,
          formattingOptions: stableOptions.formattingOptions
        });
      },
      callbacks: {
        onStart: ({ isRefetch }) => dispatch({ type: isRefetch ? "REFETCH_START" : "FETCH_START" }),
        onSuccess: (data, { isRefetch }) => dispatch(isRefetch ? {
          type: "REFETCH_SUCCESS",
          payload: {
            results: data.results,
            total: data.total,
            hasMore: data.hasMore,
            nextCursor: data.after
          }
        } : {
          type: "FETCH_SUCCESS",
          payload: {
            results: data.results,
            total: data.total,
            hasMore: data.hasMore,
            nextCursor: data.after,
            currentCursor: state.currentCursor
          }
        }),
        onError: (error, { isRefetch }) => dispatch({
          type: isRefetch ? "REFETCH_ERROR" : "FETCH_ERROR",
          payload: error
        })
      },
      deps: [stableConfig, stableOptions, state.currentCursor],
      defaultErrorMessage: "Failed to fetch CRM search results"
    });
    const paginationFlags = calculatePaginationFlags(state.currentPage, state.hasMore);
    return {
      results: state.results,
      total: state.total,
      error: state.error,
      isLoading: state.isLoading,
      isRefetching: state.isRefetching,
      refetch,
      pagination: {
        hasNextPage: paginationFlags.hasNextPage,
        hasPreviousPage: paginationFlags.hasPreviousPage,
        currentPage: state.currentPage,
        pageSize,
        nextPage,
        previousPage,
        reset
      }
    };
  }
  class PageRoutesRenderError extends Error {
    constructor(componentName) {
      super(`<${componentName}> should not be rendered directly. Use createPageRouter instead.`);
    }
  }
  function PageRoutes(__props) {
    throw new PageRoutesRenderError("PageRoutes");
  }
  PageRoutes.IndexRoute = function IndexRoute(__props) {
    throw new PageRoutesRenderError("PageRoutes.IndexRoute");
  };
  PageRoutes.Route = function Route(__props) {
    throw new PageRoutesRenderError("PageRoutes.Route");
  };
  PageRoutes.AnyRoute = function AnyRoute(__props) {
    throw new PageRoutesRenderError("PageRoutes.AnyRoute");
  };
  const AppPageRouteContext = require$$0.createContext(null);
  const AppPageRouteProvider = ({ children, pageRoute }) => jsxRuntimeExports.jsx(AppPageRouteContext.Provider, { value: pageRoute, children });
  var RouteNodeType;
  (function(RouteNodeType2) {
    RouteNodeType2["Routes"] = "routes";
    RouteNodeType2["Path"] = "path";
  })(RouteNodeType || (RouteNodeType = {}));
  const isReactPageRoutesElement = (reactRouteNode) => {
    return require$$0.isValidElement(reactRouteNode) && reactRouteNode.type === PageRoutes;
  };
  const isReactRouteElement = (reactNode) => require$$0.isValidElement(reactNode) && reactNode.type === PageRoutes.Route;
  const isReactIndexRouteElement = (reactNode) => require$$0.isValidElement(reactNode) && reactNode.type === PageRoutes.IndexRoute;
  const isReactAnyRouteElement = (reactNode) => require$$0.isValidElement(reactNode) && reactNode.type === PageRoutes.AnyRoute;
  const isReactFragmentElement = (reactRouteNode) => require$$0.isValidElement(reactRouteNode) && reactRouteNode.type === require$$0.Fragment;
  const describeReactNode = (reactNode) => {
    if (reactNode == null) {
      return String(reactNode);
    }
    if (typeof reactNode !== "object") {
      return JSON.stringify(reactNode);
    }
    if (require$$0.isValidElement(reactNode)) {
      const elementType = reactNode.type;
      const name = typeof elementType === "string" ? elementType : typeof elementType === "function" ? elementType.displayName || elementType.name || "Unknown" : "Unknown";
      return `<${name} />`;
    }
    return JSON.stringify(reactNode);
  };
  class InvalidRoutesReactNodeError extends Error {
    constructor(reactNode) {
      super(`Invalid React node for page routes: ${describeReactNode(reactNode)}. 
See: https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensions/extension-points/app-pages/page-routing`);
    }
  }
  const addRoute = (parentNode, childNode) => {
    if (!parentNode.children) {
      parentNode.children = [];
    }
    parentNode.children.push(childNode);
  };
  function convertReactRoutesElement(reactRoutesElement) {
    const { path, layoutComponent, children } = reactRoutesElement.props;
    const routesNode = {
      type: RouteNodeType.Routes,
      path,
      layoutComponent,
      children: null
    };
    convertChildrenReactRouteElements(routesNode, children);
    return routesNode;
  }
  function convertChildrenReactRouteElements(parentNode, children) {
    require$$0.Children.forEach(children, (child) => {
      if (child == null || typeof child === "boolean") {
        return;
      }
      if (isReactPageRoutesElement(child)) {
        const routesNode = convertReactRoutesElement(child);
        addRoute(parentNode, routesNode);
      } else if (isReactRouteElement(child)) {
        const { path, component, id } = child.props;
        const routeNode = {
          type: RouteNodeType.Path,
          path,
          component,
          id
        };
        addRoute(parentNode, routeNode);
      } else if (isReactIndexRouteElement(child)) {
        const { component, id } = child.props;
        const routeNode = {
          type: RouteNodeType.Path,
          path: "/",
          component,
          id
        };
        addRoute(parentNode, routeNode);
      } else if (isReactAnyRouteElement(child)) {
        const { component, id } = child.props;
        const routeNode = {
          type: RouteNodeType.Path,
          path: "*",
          component,
          id
        };
        addRoute(parentNode, routeNode);
      } else if (isReactFragmentElement(child)) {
        convertChildrenReactRouteElements(parentNode, child.props.children);
      } else {
        throw new InvalidRoutesReactNodeError(child);
      }
    });
  }
  const convertReactPageRoutesElement = (reactNode) => {
    if (isReactPageRoutesElement(reactNode)) {
      return convertReactRoutesElement(reactNode);
    }
    if (isReactFragmentElement(reactNode)) {
      const rootNode = {
        type: RouteNodeType.Routes,
        children: null
      };
      convertChildrenReactRouteElements(rootNode, reactNode.props.children);
      return rootNode;
    }
    throw new InvalidRoutesReactNodeError(reactNode);
  };
  const WILDCARD = "*";
  const normalizePath = (path) => `/${path.replace(/\/+/g, "/").replace(/\/$/, "").replace(/^\//, "")}`;
  const splitSegments = (normalizedPath) => normalizedPath === "/" ? [] : normalizedPath.slice(1).split("/");
  const isParamSegment = (segment) => segment.startsWith(":");
  const getParamNameForSegment = (segment) => segment.slice(1);
  const safeDecodeURIComponent = (value) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  };
  const findConflictingPattern = (node, segmentIndex, segments) => {
    var _a, _b, _c;
    if (segmentIndex === segments.length) {
      return node.pattern ?? null;
    }
    const segment = segments[segmentIndex];
    if (isParamSegment(segment)) {
      const { paramChildren } = node;
      if (paramChildren) {
        for (const paramChild of Object.values(paramChildren)) {
          const result = findConflictingPattern(paramChild, segmentIndex + 1, segments);
          if (result)
            return result;
        }
      }
    } else if (segment === WILDCARD) {
      return ((_b = (_a = node.children) == null ? void 0 : _a[WILDCARD]) == null ? void 0 : _b.pattern) ?? null;
    } else {
      const childNode = (_c = node.children) == null ? void 0 : _c[segment];
      if (childNode) {
        const result = findConflictingPattern(childNode, segmentIndex + 1, segments);
        if (result)
          return result;
      }
    }
    return null;
  };
  const findMatchingRoute = (node, params, segments, segmentIndex) => {
    var _a, _b;
    if (segmentIndex === segments.length) {
      if ("data" in node) {
        return {
          data: node.data,
          params
        };
      }
      return null;
    }
    const segment = segments[segmentIndex];
    const childNode = (_a = node.children) == null ? void 0 : _a[segment];
    if (childNode) {
      const result = findMatchingRoute(childNode, params, segments, segmentIndex + 1);
      if (result)
        return result;
    }
    const { paramChildren } = node;
    if (paramChildren) {
      for (const [paramName, paramChild] of Object.entries(paramChildren)) {
        const result = findMatchingRoute(paramChild, { ...params, [paramName]: safeDecodeURIComponent(segment) }, segments, segmentIndex + 1);
        if (result)
          return result;
      }
    }
    const wildcardNode = (_b = node.children) == null ? void 0 : _b[WILDCARD];
    if (wildcardNode && "data" in wildcardNode) {
      return {
        data: wildcardNode.data,
        params: {
          ...params,
          [WILDCARD]: segments.slice(segmentIndex).join("/")
        }
      };
    }
    return null;
  };
  const createTrieRouter = () => {
    const rootNode = {};
    return {
      matchPath: (path) => {
        const normalizedPath = normalizePath(path);
        const segments = splitSegments(normalizedPath);
        return findMatchingRoute(rootNode, {}, segments, 0);
      },
      addRoute: (path, data) => {
        var _a, _b, _c;
        const normalizedPath = normalizePath(path);
        const segments = splitSegments(normalizedPath);
        for (let i = 0; i < segments.length; i++) {
          const segment = segments[i];
          if (segment === WILDCARD && i !== segments.length - 1) {
            throw new Error(`Wildcard must be the last segment in route: ${normalizedPath}. 
See: https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensions/extension-points/app-pages/page-routing#wildcard-routes-splat-routes`);
          }
          if (isParamSegment(segment) && getParamNameForSegment(segment) === "") {
            throw new Error(`Invalid route "${normalizedPath}": param segment at position ${i} has an empty name. 
See: https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensions/extension-points/app-pages/page-routing#path-parameters`);
          }
        }
        const conflictingPattern = findConflictingPattern(rootNode, 0, segments);
        if (conflictingPattern) {
          throw new Error(`Route conflict: "${normalizedPath}" conflicts with existing route "${conflictingPattern}". 
See: https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensions/extension-points/app-pages/page-routing`);
        }
        let current = rootNode;
        for (const segment of segments) {
          if (isParamSegment(segment)) {
            current = (_a = current.paramChildren ?? (current.paramChildren = {}))[_b = getParamNameForSegment(segment)] ?? (_a[_b] = {});
          } else {
            current = (_c = current.children ?? (current.children = {}))[segment] ?? (_c[segment] = {});
          }
        }
        current.data = data;
        current.pattern = normalizedPath;
      }
    };
  };
  const useAppPageLocation = () => {
    const mocksContext = useMocksContext();
    if (!mocksContext) {
      return getWorkerGlobals().hsWorkerAPI.useAppPageLocation();
    }
    const { useAppPageLocation: useAppPageLocation2 } = mocksContext;
    return useAppPageLocation2();
  };
  const addRoutes = (trieRouter, seenRouteIds, routeNode, parentPath, parentLayouts) => {
    if (routeNode.type === RouteNodeType.Routes) {
      const prefix = parentPath + (routeNode.path ?? "");
      const layouts = routeNode.layoutComponent ? [...parentLayouts, routeNode.layoutComponent] : parentLayouts;
      if (routeNode.children) {
        for (const childRouteNode of routeNode.children) {
          addRoutes(
            trieRouter,
            seenRouteIds,
            childRouteNode,
            prefix,
            layouts
            /* parentLayouts */
          );
        }
      }
    } else {
      const fullPath = parentPath + routeNode.path;
      if (routeNode.id !== void 0) {
        if (seenRouteIds.has(routeNode.id)) {
          throw new Error(`Duplicate route id: "${routeNode.id}". 
See: https://developers.hubspot.com/docs/apps/developer-platform/add-features/ui-extensions/extension-points/app-pages/page-routing#route-ids`);
        }
        seenRouteIds.add(routeNode.id);
      }
      trieRouter.addRoute(fullPath, {
        component: routeNode.component,
        layouts: parentLayouts,
        id: routeNode.id
      });
    }
  };
  const createPageRouter = (reactPageRoutesElement) => {
    let initResult;
    try {
      const rootRouteNode = convertReactPageRoutesElement(reactPageRoutesElement);
      const trieRouter = createTrieRouter();
      const seenRouteIds = /* @__PURE__ */ new Set();
      addRoutes(
        trieRouter,
        seenRouteIds,
        rootRouteNode,
        "",
        []
        /* parentLayouts */
      );
      initResult = { ok: true, trieRouter };
    } catch (e) {
      initResult = {
        ok: false,
        error: e instanceof Error ? e : new Error(String(e))
      };
    }
    const PageRouter2 = () => {
      if (!initResult.ok) {
        throw initResult.error;
      }
      const { trieRouter } = initResult;
      const appPageLocation = useAppPageLocation();
      const { path: appPagePath, params: appPageParams } = appPageLocation;
      const matchedRoute = require$$0.useMemo(() => {
        return trieRouter.matchPath(appPagePath);
      }, [appPagePath]);
      const matchedAppPageRoute = require$$0.useMemo(() => {
        return matchedRoute ? {
          routeId: matchedRoute.data.id,
          path: appPagePath,
          params: {
            ...matchedRoute.params,
            ...appPageParams
          }
        } : {
          path: appPagePath,
          params: appPageParams
        };
      }, [matchedRoute, appPagePath, appPageParams]);
      const routeData = matchedRoute == null ? void 0 : matchedRoute.data;
      const content = require$$0.useMemo(() => {
        if (!routeData) {
          return jsxRuntimeExports.jsx(EmptyState, { title: "Page not found", layout: "vertical", reverseOrder: true, children: jsxRuntimeExports.jsx(Text, { children: "This app page does not exist." }) });
        }
        const Component = routeData.component;
        let node = jsxRuntimeExports.jsx(Component, {});
        for (let i = routeData.layouts.length - 1; i >= 0; i--) {
          const Layout = routeData.layouts[i];
          node = jsxRuntimeExports.jsx(Layout, { children: node });
        }
        return node;
      }, [routeData]);
      return jsxRuntimeExports.jsx(AppPageRouteProvider, { pageRoute: matchedAppPageRoute, children: content });
    };
    return PageRouter2;
  };
  const HomePage = () => {
    const contacts = useCrmSearch({
      objectType: "contacts",
      properties: ["firstname", "lastname", "email"],
      pageLength: 5
    });
    const deals = useCrmSearch({
      objectType: "deals",
      properties: [
        "dealname",
        "amount",
        "dealstage",
        "pipeline",
        "closedate"
      ],
      pageLength: 5
    });
    const dealValue = deals.results.reduce((total, deal) => {
      const amount = Number(deal.properties.amount || 0);
      return total + (Number.isNaN(amount) ? 0 : amount);
    }, 0);
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageBreadcrumbs, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageBreadcrumbs.Current, { children: "Dashboard" }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        Flex,
        {
          direction: "row",
          justify: "between",
          align: "center",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Box, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageTitle, { children: "Sales Dashboard" }, void 0, false, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 75,
                columnNumber: 11
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: "Overview of your HubSpot CRM performance" }, void 0, false, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 77,
                columnNumber: 11
              }, void 0)
            ] }, void 0, true, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 74,
              columnNumber: 9
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageLink, { to: "/docs", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Button, { children: "View CRM Details" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 83,
              columnNumber: 11
            }, void 0) }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 82,
              columnNumber: 9
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
          lineNumber: 69,
          columnNumber: 7
        },
        void 0
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Divider, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Flex, { direction: "row", gap: "large", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Box, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: "Contacts" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, void 0),
          contacts.isLoading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoadingSpinner, {}, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heading, { children: contacts.total }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: "Total contacts in HubSpot" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 103,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 100,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Box, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: "Deals" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 109,
            columnNumber: 11
          }, void 0),
          deals.isLoading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoadingSpinner, {}, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heading, { children: deals.total }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 115,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: "Total deals in HubSpot" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 117,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 114,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Box, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: "Deal Value" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 123,
            columnNumber: 11
          }, void 0),
          deals.isLoading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoadingSpinner, {}, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 126,
            columnNumber: 13
          }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heading, { children: [
              "₹",
              dealValue.toLocaleString("en-IN")
            ] }, void 0, true, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 129,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: "Value of current page" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 133,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
          lineNumber: 122,
          columnNumber: 9
        }, void 0)
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 93,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Divider, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 139,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heading, { children: "Recent Contacts" }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 145,
        columnNumber: 7
      }, void 0),
      contacts.error ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: [
        "Error loading contacts: ",
        contacts.error.message
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, void 0) : contacts.isLoading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoadingSpinner, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Name" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Email" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 159,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Contact ID" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 160,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 157,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 156,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: contacts.results.map((contact) => {
            const firstName = contact.properties.firstname || "";
            const lastName = contact.properties.lastname || "";
            const fullName = `${firstName} ${lastName}`.trim();
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: fullName || "Unnamed Contact" }, void 0, false, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 177,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: contact.properties.email || "-" }, void 0, false, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 181,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: contact.objectId }, void 0, false, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 185,
                columnNumber: 21
              }, void 0)
            ] }, contact.objectId, true, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 176,
              columnNumber: 19
            }, void 0);
          }) }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 164,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Flex,
          {
            direction: "row",
            justify: "between",
            align: "center",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: [
                "Page ",
                contacts.pagination.currentPage
              ] }, void 0, true, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 199,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Flex, { direction: "row", gap: "small", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    disabled: !contacts.pagination.hasPreviousPage,
                    onClick: contacts.pagination.previousPage,
                    children: "Previous"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                    lineNumber: 204,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    disabled: !contacts.pagination.hasNextPage,
                    onClick: contacts.pagination.nextPage,
                    children: "Next"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                    lineNumber: 215,
                    columnNumber: 15
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 203,
                columnNumber: 13
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 194,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Divider, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 228,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heading, { children: "Recent Deals" }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 234,
        columnNumber: 7
      }, void 0),
      deals.error ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: [
        "Error loading deals: ",
        deals.error.message
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 237,
        columnNumber: 9
      }, void 0) : deals.isLoading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoadingSpinner, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 241,
        columnNumber: 9
      }, void 0) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Deal Name" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 247,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Amount" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 248,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Stage" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 249,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Deal ID" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 250,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 245,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: deals.results.map((deal) => {
            const dealName = deal.properties.dealname;
            const amount = deal.properties.amount;
            const dealStage = deal.properties.dealstage;
            return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: dealName || "Unnamed Deal" }, void 0, false, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 267,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: amount ? `₹${Number(
                amount
              ).toLocaleString("en-IN")}` : "₹0" }, void 0, false, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 271,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: dealStage || "Not set" }, void 0, false, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 279,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: deal.objectId }, void 0, false, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 283,
                columnNumber: 21
              }, void 0)
            ] }, deal.objectId, true, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
              lineNumber: 266,
              columnNumber: 19
            }, void 0);
          }) }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 254,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          Flex,
          {
            direction: "row",
            justify: "between",
            align: "center",
            children: [
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: [
                "Page ",
                deals.pagination.currentPage
              ] }, void 0, true, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 297,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Flex, { direction: "row", gap: "small", children: [
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    disabled: !deals.pagination.hasPreviousPage,
                    onClick: deals.pagination.previousPage,
                    children: "Previous"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                    lineNumber: 302,
                    columnNumber: 15
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
                  Button,
                  {
                    disabled: !deals.pagination.hasNextPage,
                    onClick: deals.pagination.nextPage,
                    children: "Next"
                  },
                  void 0,
                  false,
                  {
                    fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                    lineNumber: 313,
                    columnNumber: 15
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
                lineNumber: 301,
                columnNumber: 13
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
            lineNumber: 292,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/HomePage.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, void 0);
  };
  const DocsPage = () => {
    const contacts = useCrmSearch({
      objectType: "contacts",
      properties: ["firstname", "lastname", "email"],
      pageLength: 10
    });
    const deals = useCrmSearch({
      objectType: "deals",
      properties: [
        "dealname",
        "amount",
        "dealstage",
        "pipeline",
        "closedate"
      ],
      pageLength: 10
    });
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageBreadcrumbs, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageBreadcrumbs.Current, { children: "CRM Details" }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageTitle, { children: "CRM Details" }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: "Contacts and deals from your HubSpot CRM." }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Divider, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 54,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heading, { children: "Contacts" }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, void 0),
      contacts.isLoading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoadingSpinner, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 60,
        columnNumber: 30
      }, void 0),
      contacts.error && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: [
        "Error: ",
        contacts.error.message
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, void 0),
      !contacts.isLoading && !contacts.error && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Name" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Email" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "ID" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: contacts.results.map((contact) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: [
            contact.properties.firstname,
            contact.properties.lastname
          ].filter(Boolean).join(" ") || "Unnamed" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: contact.properties.email || "-" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 90,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: contact.objectId }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, void 0)
        ] }, contact.objectId, true, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, void 0)) }, void 0, false, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Divider, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 103,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Heading, { children: "Deals" }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, void 0),
      deals.isLoading && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(LoadingSpinner, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 109,
        columnNumber: 27
      }, void 0),
      deals.error && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Text, { children: [
        "Error: ",
        deals.error.message
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, void 0),
      !deals.isLoading && !deals.error && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Table, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHead, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Deal Name" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Amount" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "Stage" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableHeader, { children: "ID" }, void 0, false, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableBody, { children: deals.results.map((deal) => {
          var _a, _b, _c;
          return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableRow, { children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: ((_a = deal.properties) == null ? void 0 : _a.dealname) || "Unnamed Deal" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
              lineNumber: 131,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: ((_b = deal.properties) == null ? void 0 : _b.amount) ? `₹${Number(
              deal.properties.amount
            ).toLocaleString("en-IN")}` : "-" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
              lineNumber: 136,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: ((_c = deal.properties) == null ? void 0 : _c.dealstage) || "-" }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(TableCell, { children: deal.objectId }, void 0, false, {
              fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
              lineNumber: 149,
              columnNumber: 17
            }, void 0)
          ] }, deal.objectId, true, {
            fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, void 0);
        }) }, void 0, false, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(Divider, {}, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 158,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageLink, { to: "/", children: "← Back to Dashboard" }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
        lineNumber: 160,
        columnNumber: 7
      }, void 0)
    ] }, void 0, true, {
      fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/DocsPage.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, void 0);
  };
  const PageLayout = ({ children }) => {
    return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(jsxDevRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHeader, { children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHeader.SecondaryActions, { children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHeader.Link, { to: "/", children: "Dashboard" }, void 0, false, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/Pages.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageHeader.Link, { to: "/docs", children: "CRM Details" }, void 0, false, {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/Pages.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/Pages.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/Pages.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, void 0),
      children
    ] }, void 0, true, {
      fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/Pages.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, void 0);
  };
  const PageRouter = createPageRouter(
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageRoutes, { layoutComponent: PageLayout, children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageRoutes.IndexRoute, { component: HomePage }, void 0, false, {
        fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/Pages.tsx",
        lineNumber: 44,
        columnNumber: 5
      }, void 0),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        PageRoutes.Route,
        {
          path: "/docs",
          component: DocsPage
        },
        void 0,
        false,
        {
          fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/Pages.tsx",
          lineNumber: 46,
          columnNumber: 5
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/Pages.tsx",
      lineNumber: 43,
      columnNumber: 3
    }, void 0)
  );
  hubspot.extend(({ context, actions }) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(PageRouter, {}, void 0, false, {
    fileName: "C:/Users/MuthuKannan/OneDrive/Desktop/Task/dashboard-page/src/app/pages/Pages.tsx",
    lineNumber: 54,
    columnNumber: 3
  }, void 0));
})(React, RemoteUI);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZXMuanMiLCJzb3VyY2VzIjpbIi4uL3BhZ2VzL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwiLi4vcGFnZXMvbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIi4uL3BhZ2VzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvaW50ZXJuYWwvZ2xvYmFsLXV0aWxzLmpzIiwiLi4vcGFnZXMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9odWJzcG90LmpzIiwiLi4vcGFnZXMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9zaGFyZWQuc3luY2VkL3R5cGVzL2h0dHAtcmVxdWVzdHMuc3luY2VkLmpzIiwiLi4vcGFnZXMvbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC1qc3gtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIi4uL3BhZ2VzL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsIi4uL3BhZ2VzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3Qvc2hhcmVkLnN5bmNlZC91dGlscy9yZW1vdGUtY29tcG9uZW50LXJlZ2lzdHJ5LnN5bmNlZC5qcyIsIi4uL3BhZ2VzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3Qvc2hhcmVkLnN5bmNlZC9yZW1vdGVDb21wb25lbnRzLnN5bmNlZC5qcyIsIi4uL3BhZ2VzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvaW50ZXJuYWwvaG9vay11dGlscy5qcyIsIi4uL3BhZ2VzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvdXRpbHMvcGFnaW5hdGlvbi5qcyIsIi4uL3BhZ2VzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvaG9va3MvdXRpbHMvZmV0Y2hDcm1TZWFyY2guanMiLCIuLi9wYWdlcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L2hvb2tzL3V0aWxzL3VzZUZldGNoTGlmZWN5Y2xlLmpzIiwiLi4vcGFnZXMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9ob29rcy91c2VDcm1TZWFyY2guanMiLCIuLi9wYWdlcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3BhZ2VzL2NvbXBvbmVudHMvcGFnZS1yb3V0ZXMuanMiLCIuLi9wYWdlcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3BhZ2VzL2ludGVybmFsL2FwcC1wYWdlLXJvdXRlLWNvbnRleHQuanMiLCIuLi9wYWdlcy9ub2RlX21vZHVsZXMvQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9kaXN0L3BhZ2VzL2ludGVybmFsL3BhZ2Utcm91dGVyLWludGVybmFsLXR5cGVzLmpzIiwiLi4vcGFnZXMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9wYWdlcy9pbnRlcm5hbC9jb252ZXJ0LXBhZ2Utcm91dGVzLXJlYWN0LWVsZW1lbnRzLmpzIiwiLi4vcGFnZXMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9wYWdlcy9pbnRlcm5hbC90cmllLXJvdXRlci5qcyIsIi4uL3BhZ2VzL25vZGVfbW9kdWxlcy9AaHVic3BvdC91aS1leHRlbnNpb25zL2Rpc3QvcGFnZXMvaW50ZXJuYWwvdXNlQXBwUGFnZUxvY2F0aW9uLmpzIiwiLi4vcGFnZXMvbm9kZV9tb2R1bGVzL0BodWJzcG90L3VpLWV4dGVuc2lvbnMvZGlzdC9wYWdlcy9jcmVhdGUtcGFnZS1yb3V0ZXIuanMiLCIuLi9wYWdlcy9Ib21lUGFnZS50c3giLCIuLi9wYWdlcy9Eb2NzUGFnZS50c3giLCIuLi9wYWdlcy9QYWdlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKipcbiAqIENoZWNrcyBpZiB0aGUgY3VycmVudCBlbnZpcm9ubWVudCBpcyBhIEh1YlNwb3QgZXh0ZW5zaW9uIHdvcmtlci5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgaXMgYSBIdWJTcG90IGV4dGVuc2lvbiB3b3JrZXIuXG4gKi9cbmNvbnN0IGlzUnVubmluZ0luV29ya2VyID0gKCkgPT4gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgc2VsZi5fX0hVQlNQT1RfRVhURU5TSU9OX1dPUktFUl9fID09PSB0cnVlO1xuLyoqXG4gKiBBIGZha2Ugd29ya2VyIGdsb2JhbHMgb2JqZWN0IGZvciB1c2UgaW4gdGVzdCBlbnZpcm9ubWVudHMuXG4gKi9cbmNvbnN0IGZha2VXb3JrZXJHbG9iYWxzID0ge1xuICAgIGxvZ2dlcjoge1xuICAgICAgICBkZWJ1ZzogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBpbmZvOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICB3YXJuOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBleHRlbmRfVjI6ICgpID0+IHtcbiAgICAgICAgLy8gTm8tb3AgaW4gdGVzdCBlbnZpcm9ubWVudFxuICAgIH0sXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB3ZSBhcmUgbm90IHVzaW5nIHRoZSB3b3JrZXIgZW5kcG9pbnQgaW4gdGVzdHMgZW52LlxuICAgIF9fdXNlRXh0ZW5zaW9uQ29udGV4dDogKCkgPT4ge1xuICAgICAgICAvLyBOby1vcCBpbiB0ZXN0IGVudmlyb25tZW50XG4gICAgfSxcbn07XG4vKipcbiAqIEdldHMgdGhlIHdvcmtlciBnbG9iYWxzIG9iamVjdCBmb3IgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXG4gKiBAcmV0dXJucyBUaGUgd29ya2VyIGdsb2JhbHMgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgZ2V0V29ya2VyR2xvYmFscyA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNSdW5uaW5nSW5Xb3JrZXIoKVxuICAgICAgICA/IHNlbGZcbiAgICAgICAgOiBmYWtlV29ya2VyR2xvYmFscztcbn07XG4iLCJpbXBvcnQgeyBnZXRXb3JrZXJHbG9iYWxzIH0gZnJvbSAnLi9pbnRlcm5hbC9nbG9iYWwtdXRpbHMuanMnO1xuY29uc3QgZXh0ZW5kX1YyID0gZ2V0V29ya2VyR2xvYmFscygpLmV4dGVuZF9WMjtcbmV4cG9ydCBmdW5jdGlvbiBzZXJ2ZXJsZXNzKG5hbWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc2VsZi5zZXJ2ZXJsZXNzKG5hbWUsIG9wdGlvbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoKHVybCwgb3B0aW9ucykge1xuICAgIHJldHVybiBzZWxmLmhzRmV0Y2godXJsLCBvcHRpb25zKTtcbn1cbmV4cG9ydCBjb25zdCBodWJzcG90ID0ge1xuICAgIGV4dGVuZDogZXh0ZW5kX1YyLFxuICAgIHNlcnZlcmxlc3MsXG4gICAgZmV0Y2gsXG59O1xuIiwiLyoqXG4gKiBAY2F0ZWdvcnkgU2VydmVybGVzc1xuICovXG5leHBvcnQgdmFyIFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXM7XG4oZnVuY3Rpb24gKFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMpIHtcbiAgICBTZXJ2ZXJsZXNzRXhlY3V0aW9uU3RhdHVzW1wiU3VjY2Vzc1wiXSA9IFwiU1VDQ0VTU1wiO1xuICAgIFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXNbXCJFcnJvclwiXSA9IFwiRVJST1JcIjtcbn0pKFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMgfHwgKFNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMgPSB7fSkpO1xuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBkaXNwbGF5TmFtZSA9IG91dGVyVHlwZS5kaXNwbGF5TmFtZTtcblxuICBpZiAoZGlzcGxheU5hbWUpIHtcbiAgICByZXR1cm4gZGlzcGxheU5hbWU7XG4gIH1cblxuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lO1xufSAvLyBLZWVwIGluIHN5bmMgd2l0aCByZWFjdC1yZWNvbmNpbGVyL2dldENvbXBvbmVudE5hbWVGcm9tRmliZXJcblxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn0gLy8gTm90ZSB0aGF0IHRoZSByZWNvbmNpbGVyIHBhY2thZ2Ugc2hvdWxkIGdlbmVyYWxseSBwcmVmZXIgdG8gdXNlIGdldENvbXBvbmVudE5hbWVGcm9tRmliZXIoKSBpbnN0ZWFkLlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG5cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICB2YXIgb3V0ZXJOYW1lID0gdHlwZS5kaXNwbGF5TmFtZSB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvdXRlck5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gb3V0ZXJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdNZW1vJztcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTsgLy8gSWYgb3VyIGNvbXBvbmVudCBmcmFtZSBpcyBsYWJlbGVkIFwiPGFub255bW91cz5cIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB3ZSBoYXZlIGEgdXNlci1wcm92aWRlZCBcImRpc3BsYXlOYW1lXCJcbiAgICAgICAgICAgICAgICAvLyBzcGxpY2UgaXQgaW4gdG8gbWFrZSB0aGUgc3RhY2sgbW9yZSByZWFkYWJsZS5cblxuXG4gICAgICAgICAgICAgICAgaWYgKGZuLmRpc3BsYXlOYW1lICYmIF9mcmFtZS5pbmNsdWRlcygnPGFub255bW91cz4nKSkge1xuICAgICAgICAgICAgICAgICAgX2ZyYW1lID0gX2ZyYW1lLnJlcGxhY2UoJzxhbm9ueW1vdXM+JywgZm4uZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWF5YmVLZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0S2V5U3ByZWFkID0ge307XG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdrZXknKSkge1xuICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgcmV0dXJuIGsgIT09ICdrZXknO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGJlZm9yZUV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAne2tleTogc29tZUtleSwgJyArIGtleXMuam9pbignOiAuLi4sICcpICsgJzogLi4ufScgOiAne2tleTogc29tZUtleX0nO1xuXG4gICAgICAgIGlmICghZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSkge1xuICAgICAgICAgIHZhciBhZnRlckV4YW1wbGUgPSBrZXlzLmxlbmd0aCA+IDAgPyAneycgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3t9JztcblxuICAgICAgICAgIGVycm9yKCdBIHByb3BzIG9iamVjdCBjb250YWluaW5nIGEgXCJrZXlcIiBwcm9wIGlzIGJlaW5nIHNwcmVhZCBpbnRvIEpTWDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyB7Li4ucHJvcHN9IC8+XFxuJyArICdSZWFjdCBrZXlzIG11c3QgYmUgcGFzc2VkIGRpcmVjdGx5IHRvIEpTWCB3aXRob3V0IHVzaW5nIHNwcmVhZDpcXG4nICsgJyAgbGV0IHByb3BzID0gJXM7XFxuJyArICcgIDwlcyBrZXk9e3NvbWVLZXl9IHsuLi5wcm9wc30gLz4nLCBiZWZvcmVFeGFtcGxlLCBjb21wb25lbnROYW1lLCBhZnRlckV4YW1wbGUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgICAgZGlkV2FybkFib3V0S2V5U3ByZWFkW2NvbXBvbmVudE5hbWUgKyBiZWZvcmVFeGFtcGxlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcbi8vIGV2ZW4gd2l0aCB0aGUgcHJvZCB0cmFuc2Zvcm0uIFRoaXMgbWVhbnMgdGhhdCBqc3hERVYgaXMgcHVyZWx5XG4vLyBvcHQtaW4gYmVoYXZpb3IgZm9yIGJldHRlciBtZXNzYWdlcyBidXQgdGhhdCB3ZSB3b24ndCBzdG9wXG4vLyBnaXZpbmcgeW91IHdhcm5pbmdzIGlmIHlvdSB1c2UgcHJvZHVjdGlvbiBhcGlzLlxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgdHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uRHluYW1pYyh0eXBlLCBwcm9wcywga2V5KSB7XG4gIHtcbiAgICByZXR1cm4ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgZmFsc2UpO1xuICB9XG59XG5cbnZhciBqc3ggPSAganN4V2l0aFZhbGlkYXRpb25EeW5hbWljIDsgLy8gd2UgbWF5IHdhbnQgdG8gc3BlY2lhbCBjYXNlIGpzeHMgaW50ZXJuYWxseSB0byB0YWtlIGFkdmFudGFnZSBvZiBzdGF0aWMgY2hpbGRyZW4uXG4vLyBmb3Igbm93IHdlIGNhbiBzaGlwIGlkZW50aWNhbCBwcm9kIGZ1bmN0aW9uc1xuXG52YXIganN4cyA9ICBqc3hXaXRoVmFsaWRhdGlvblN0YXRpYyA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3ggPSBqc3g7XG5leHBvcnRzLmpzeHMgPSBqc3hzO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuLy8gRG8gbm90IG1hbnVhbGx5IHVwZGF0ZSB0aGlzIGZpbGUsIGNoYW5nZXMgd2lsbCBiZSBhdXRvZ2VuZXJhdGVkIGJ5IG91ciBzY3JpcHRzIGJhc2VkIG9uOiBwYWNrYWdlcy1odWJzcG90L3VpLWV4dGVuc2lvbnMtcmVtb3RlLXJlbmRlcmVyL3N0YXRpYy9qcy9zaGFyZWQvdXRpbHMvcmVtb3RlLWNvbXBvbmVudC1yZWdpc3RyeS50c3hcbmltcG9ydCB7IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50IH0gZnJvbSAnQHJlbW90ZS11aS9yZWFjdCc7XG5leHBvcnQgY29uc3QgY3JlYXRlUmVtb3RlQ29tcG9uZW50UmVnaXN0cnkgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50TWV0YWRhdGFMb29rdXAgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgY29tcG9uZW50TmFtZUJ5Q29tcG9uZW50TWFwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJlZ2lzdGVyQ29tcG9uZW50ID0gKGNvbXBvbmVudCwgY29tcG9uZW50TmFtZSwgZnJhZ21lbnRQcm9wcykgPT4ge1xuICAgICAgICBjb21wb25lbnROYW1lQnlDb21wb25lbnRNYXAuc2V0KGNvbXBvbmVudCwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLnNldChjb21wb25lbnROYW1lLCB7XG4gICAgICAgICAgICBmcmFnbWVudFByb3BzU2V0OiBuZXcgU2V0KGZyYWdtZW50UHJvcHMpLFxuICAgICAgICAgICAgZnJhZ21lbnRQcm9wc0FycmF5OiBmcmFnbWVudFByb3BzLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldENvbXBvbmVudE5hbWU6IChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lQnlDb21wb25lbnRNYXAuZ2V0KGNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnROYW1lO1xuICAgICAgICB9LFxuICAgICAgICBpc0FsbG93ZWRDb21wb25lbnROYW1lOiAoY29tcG9uZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLmhhcyhjb21wb25lbnROYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNDb21wb25lbnRGcmFnbWVudFByb3A6IChjb21wb25lbnROYW1lLCBwcm9wTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50TWV0YWRhdGEgPSBjb21wb25lbnRNZXRhZGF0YUxvb2t1cC5nZXQoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudE1ldGFkYXRhLmZyYWdtZW50UHJvcHNTZXQuaGFzKHByb3BOYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q29tcG9uZW50RnJhZ21lbnRQcm9wTmFtZXM6IChjb21wb25lbnROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRNZXRhZGF0YSA9IGNvbXBvbmVudE1ldGFkYXRhTG9va3VwLmdldChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIGlmICghY29tcG9uZW50TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGZyYWdtZW50UHJvcHNBcnJheSB9ID0gY29tcG9uZW50TWV0YWRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZnJhZ21lbnRQcm9wc0FycmF5O1xuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50OiAoY29tcG9uZW50TmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGZyYWdtZW50UHJvcHMgPSBbXSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZVJlYWN0Q29tcG9uZW50ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQoY29tcG9uZW50TmFtZSwge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50UHJvcHM6IGZyYWdtZW50UHJvcHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlckNvbXBvbmVudChyZW1vdGVSZWFjdENvbXBvbmVudCwgY29tcG9uZW50TmFtZSwgZnJhZ21lbnRQcm9wcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudDogKGNvbXBvbmVudE5hbWUsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZnJhZ21lbnRQcm9wcyA9IFtdIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgUmVtb3RlQ29tcG9uZW50VHlwZSA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KGNvbXBvbmVudE5hbWUsIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudFByb3BzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBXZSBjYW4gb25seSBhdHRhY2ggcHJvcGVydGllcyB0byBhIGZ1bmN0aW9uIGNvbXBvbmVudCB0eXBlLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSByZW1vdGUgY29tcG9uZW50IHR5cGUgaXMgYSBmdW5jdGlvbi5cbiAgICAgICAgICAgIC8vIElmIHRoZSByZW1vdGUgY29tcG9uZW50IHR5cGUgaXMgbm90IGEgZnVuY3Rpb24sIHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIGZ1bmN0aW9uIGNvbXBvbmVudC5cbiAgICAgICAgICAgIGNvbnN0IENvbXBvdW5kRnVuY3Rpb25Db21wb25lbnRUeXBlID0gdHlwZW9mIFJlbW90ZUNvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/IFJlbW90ZUNvbXBvbmVudFR5cGVcbiAgICAgICAgICAgICAgICA6IChwcm9wcykgPT4gKF9qc3goUmVtb3RlQ29tcG9uZW50VHlwZSwgeyAuLi5wcm9wcyB9KSk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIGNvbXBvdW5kIGNvbXBvbmVudCBwcm9wZXJ0aWVzIHRvIHRoZSBmdW5jdGlvbiBjb21wb25lbnQgdGhhdCB3ZSB3aWxsIGJlIHJldHVybmluZy5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oQ29tcG91bmRGdW5jdGlvbkNvbXBvbmVudFR5cGUsIG9wdGlvbnMuY29tcG91bmRDb21wb25lbnRQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjb21wb3VuZCBmdW5jdGlvbiBjb21wb25lbnQgd2l0aCB0aGUgcmVnaXN0cnkgYW5kIHJldHVybiBpdC5cbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlckNvbXBvbmVudChDb21wb3VuZEZ1bmN0aW9uQ29tcG9uZW50VHlwZSwgY29tcG9uZW50TmFtZSwgZnJhZ21lbnRQcm9wcyk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVSZW1vdGVDb21wb25lbnRSZWdpc3RyeSB9IGZyb20gJy4vdXRpbHMvcmVtb3RlLWNvbXBvbmVudC1yZWdpc3RyeS5zeW5jZWQuanMnO1xuLyoqXG4gKiBSZXByZXNlbnRzIGEgcmVnaXN0cnkgb2YgSHViU3BvdC1wcm92aWRlZCBSZWFjdCBjb21wb25lbnRzIHRoYXQgc2hvdWxkIG9ubHkgYmUgdXNlZCAqKmludGVybmFsbHkqKiBieSB0aGUgVUkgZXh0ZW5zaW9uIFNESy5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IF9faHViU3BvdENvbXBvbmVudFJlZ2lzdHJ5ID0gY3JlYXRlUmVtb3RlQ29tcG9uZW50UmVnaXN0cnkoKTtcbmNvbnN0IHsgY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCwgY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVDb21wb3VuZFJlYWN0Q29tcG9uZW50LCB9ID0gX19odWJTcG90Q29tcG9uZW50UmVnaXN0cnk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFNUQU5EQVJEIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4gKiBUaGUgYEFsZXJ0YCBjb21wb25lbnQgcmVuZGVycyBhbiBhbGVydCB3aXRoaW4gYSBjYXJkLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZ2l2ZSB1c2FnZSBndWlkYW5jZSwgbm90aWZ5IHVzZXJzIG9mIGFjdGlvbiByZXN1bHRzLCBvciB3YXJuIHRoZW0gYWJvdXQgcG90ZW50aWFsIGlzc3VlcyBvciBmYWlsdXJlcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2FsZXJ0IERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYWxlcnQjdmFyaWFudHMgVmFyaWFudHN9XG4gKi9cbmV4cG9ydCBjb25zdCBBbGVydCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0FsZXJ0Jyk7XG4vKipcbiAqIFRoZSBgQnV0dG9uYCBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSBidXR0b24uIFVzZSB0aGlzIGNvbXBvbmVudCB0byBlbmFibGUgdXNlcnMgdG8gcGVyZm9ybSBhY3Rpb25zLCBzdWNoIGFzIHN1Ym1pdHRpbmcgYSBmb3JtLCBzZW5kaW5nIGRhdGEgdG8gYW4gZXh0ZXJuYWwgc3lzdGVtLCBvciBkZWxldGluZyBkYXRhLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYnV0dG9uIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYnV0dG9uI3VzYWdlLWV4YW1wbGVzIEV4YW1wbGVzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI2J1dHRvbiBEZXNpZ24gUGF0dGVybiBFeGFtcGxlc31cbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0J1dHRvbicsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYEJ1dHRvblJvd2AgY29tcG9uZW50IHJlbmRlcnMgYSByb3cgb2Ygc3BlY2lmaWVkIGBCdXR0b25gIGNvbXBvbmVudHMuIFVzZSB0aGlzIGNvbXBvbmVudCB3aGVuIHlvdSB3YW50IHRvIGluY2x1ZGUgbXVsdGlwbGUgYnV0dG9ucyBpbiBhIHJvdy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2J1dHRvbi1yb3cgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvblJvdyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0J1dHRvblJvdycpO1xuZXhwb3J0IGNvbnN0IENhcmQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDYXJkJyk7XG4vKipcbiAqIFRoZSBgRGVzY3JpcHRpb25MaXN0YCBjb21wb25lbnQgcmVuZGVycyBwYWlycyBvZiBsYWJlbHMgYW5kIHZhbHVlcy4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGRpc3BsYXkgcGFpcnMgb2YgbGFiZWxzIGFuZCB2YWx1ZXMgaW4gYSB3YXkgdGhhdCdzIGVhc3kgdG8gcmVhZCBhdCBhIGdsYW5jZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Rlc2NyaXB0aW9uLWxpc3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uTGlzdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0Rlc2NyaXB0aW9uTGlzdCcpO1xuLyoqXG4gKiBUaGUgYERlc2NyaXB0aW9uTGlzdEl0ZW1gIGNvbXBvbmVudCByZW5kZXJzIGEgc2luZ2xlIHNldCBvZiBhIGxhYmVsIGFuZCB2YWx1ZS4gVXNlIHRoaXMgY29tcG9uZW50IHdpdGhpbiBhIGBEZXNjcmlwdGlvbkxpc3RgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Rlc2NyaXB0aW9uLWxpc3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uTGlzdEl0ZW0gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdEZXNjcmlwdGlvbkxpc3RJdGVtJyk7XG4vKipcbiAqIFRoZSBgRGl2aWRlcmAgY29tcG9uZW50IHJlbmRlcnMgYSBncmV5LCBob3Jpem9udGFsIGxpbmUgZm9yIHNwYWNpbmcgb3V0IGNvbXBvbmVudHMgdmVydGljYWxseSBvciBjcmVhdGluZyBzZWN0aW9ucyBpbiBhbiBleHRlbnNpb24uIFVzZSB0aGlzIGNvbXBvbmVudCB0byBzcGFjZSBvdXQgb3RoZXIgY29tcG9uZW50cyB3aGVuIHRoZSBjb250ZW50IG5lZWRzIG1vcmUgc2VwYXJhdGlvbiB0aGFuIHdoaXRlIHNwYWNlLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZGl2aWRlciBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRGl2aWRlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0RpdmlkZXInKTtcbi8qKlxuICogVGhlIGBTcGFjZXJgIGNvbXBvbmVudCByZW5kZXJzIHZlcnRpY2FsIHNwYWNlIGJldHdlZW4gY29tcG9uZW50cy4gVXNlIHRoaXMgY29tcG9uZW50XG4gKiB0byBhZGQgY29uc2lzdGVudCBzcGFjaW5nIHdpdGhvdXQgdXNpbmcgZW1wdHkgd3JhcHBlciBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3BhY2VyIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTcGFjZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTcGFjZXInKTtcbi8qKlxuICogVGhlIGBFbXB0eVN0YXRlYCBjb21wb25lbnQgc2V0cyB0aGUgY29udGVudCB0aGF0IGFwcGVhcnMgd2hlbiB0aGUgZXh0ZW5zaW9uIGlzIGluIGFuIGVtcHR5IHN0YXRlLiBVc2UgdGhpcyBjb21wb25lbnQgd2hlbiB0aGVyZSdzIG5vIGNvbnRlbnQgb3IgZGF0YSB0byBoZWxwIGd1aWRlIHVzZXJzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZW1wdHktc3RhdGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEVtcHR5U3RhdGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFbXB0eVN0YXRlJyk7XG4vKipcbiAqIFRoZSBgRXJyb3JTdGF0ZWAgY29tcG9uZW50IHNldHMgdGhlIGNvbnRlbnQgb2YgYW4gZXJyb3JpbmcgZXh0ZW5zaW9uLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZ3VpZGUgdXNlcnMgdGhyb3VnaCByZXNvbHZpbmcgZXJyb3JzIHRoYXQgeW91ciBleHRlbnNpb24gbWlnaHQgZW5jb3VudGVyLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZXJyb3Itc3RhdGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEVycm9yU3RhdGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFcnJvclN0YXRlJyk7XG4vKipcbiAqIFRoZSBgRm9ybWAgY29tcG9uZW50IHJlbmRlcnMgYSBmb3JtIHRoYXQgY2FuIGNvbnRhaW4gb3RoZXIgc3ViY29tcG9uZW50cywgc3VjaCBhcyBgSW5wdXRgLCBgU2VsZWN0YCwgYW5kIGBCdXR0b25gLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZW5hYmxlIHVzZXJzIHRvIHN1Ym1pdCBkYXRhIHRvIEh1YlNwb3Qgb3IgYW4gZXh0ZXJuYWwgc3lzdGVtLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvZm9ybSBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI2Zvcm0gRGVzaWduIFBhdHRlcm4gRXhhbXBsZXN9XG4gKi9cbmV4cG9ydCBjb25zdCBGb3JtID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRm9ybScpO1xuLyoqXG4gKiBUaGUgYEhlYWRpbmdgIGNvbXBvbmVudCByZW5kZXJzIGxhcmdlIGhlYWRpbmcgdGV4dC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGludHJvZHVjZSBvciBkaWZmZXJlbnRpYXRlIHNlY3Rpb25zIG9mIHlvdXIgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaGVhZGluZyBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0hlYWRpbmcnKTtcbi8qKlxuICogVGhlIGBJbWFnZWAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW1hZ2UuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBhZGQgYSBsb2dvIG9yIG90aGVyIHZpc3VhbCBicmFuZCBpZGVudGl0eSBhc3NldCwgb3IgdG8gYWNjZW50dWF0ZSBvdGhlciBjb250ZW50IGluIHRoZSBleHRlbnNpb24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9pbWFnZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgSW1hZ2UgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdJbWFnZScsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYElucHV0YCBjb21wb25lbnQgcmVuZGVycyBhIHRleHQgaW5wdXQgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBlbnRlciBhIGN1c3RvbSB0ZXh0IHZhbHVlLiBMaWtlIG90aGVyIGlucHV0cywgdGhpcyBjb21wb25lbnQgc2hvdWxkIGJlIHVzZWQgd2l0aGluIGEgYEZvcm1gIHRoYXQgaGFzIGEgc3VibWl0IGJ1dHRvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2lucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0lucHV0Jyk7XG4vKipcbiAqIFRoZSBgTGlua2AgY29tcG9uZW50IHJlbmRlcnMgYSBjbGlja2FibGUgaHlwZXJsaW5rLiBVc2UgbGlua3MgdG8gZGlyZWN0IHVzZXJzIHRvIGFuIGV4dGVybmFsIHdlYiBwYWdlIG9yIGFub3RoZXIgcGFydCBvZiB0aGUgSHViU3BvdCBhcHAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9saW5rIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBMaW5rID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTGluaycsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbn0pO1xuLyoqXG4gKiBUaGUgYFRleHRBcmVhYCBjb21wb25lbnQgcmVuZGVycyBhIGZpbGxhYmxlIHRleHQgZmllbGQuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGV4dC1hcmVhIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0QXJlYSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RleHRBcmVhJyk7XG4vLyBUZXh0YXJlYSB3YXMgY2hhbmdlZCB0byBUZXh0QXJlYVxuLy8gRXhwb3J0aW5nIGJvdGggZm9yIGJhY2t3YXJkcyBjb21wYXRcbi8qKiBAZGVwcmVjYXRlZCB1c2UgVGV4dEFyZWEgaW5zdGVhZC4gV2l0aCBhIGNhcGl0YWwgQS4qL1xuZXhwb3J0IGNvbnN0IFRleHRhcmVhID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGV4dGFyZWEnKTtcbi8qKlxuICogVGhlIGBMb2FkaW5nU3Bpbm5lcmAgY29tcG9uZW50IHJlbmRlcnMgYSB2aXN1YWwgaW5kaWNhdG9yIGZvciB3aGVuIGFuIGV4dGVuc2lvbiBpcyBsb2FkaW5nIG9yIHByb2Nlc3NpbmcgZGF0YS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lciBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTG9hZGluZ1NwaW5uZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMb2FkaW5nU3Bpbm5lcicpO1xuLyoqXG4gKiBUaGUgYFByb2dyZXNzQmFyYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBpbmRpY2F0b3Igc2hvd2luZyBhIG51bWVyaWMgYW5kL29yIHBlcmNlbnRhZ2UtYmFzZWQgcmVwcmVzZW50YXRpb24gb2YgcHJvZ3Jlc3MuIFRoZSBwZXJjZW50YWdlIGlzIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIG1heGltdW0gcG9zc2libGUgdmFsdWUgc3BlY2lmaWVkIGluIHRoZSBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9wcm9ncmVzcy1iYXIgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFByb2dyZXNzQmFyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUHJvZ3Jlc3NCYXInKTtcbi8qKlxuICogVGhlIGBTZWxlY3RgIGNvbXBvbmVudCByZW5kZXJzIGEgZHJvcGRvd24gbWVudSBzZWxlY3QgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBzZWxlY3QgYSBzaW5nbGUgdmFsdWUuIEEgc2VhcmNoIGJhciB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgaW5jbHVkZWQgd2hlbiB0aGVyZSBhcmUgbW9yZSB0aGFuIHNldmVuIG9wdGlvbnMuIExpa2Ugb3RoZXIgaW5wdXRzLCB0aGlzIGNvbXBvbmVudCBzaG91bGQgYmUgdXNlZCB3aXRoaW4gYSBgRm9ybWAgdGhhdCBoYXMgYSBzdWJtaXQgYnV0dG9uLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc2VsZWN0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTZWxlY3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTZWxlY3QnKTtcbi8qKlxuICogVGhlIGBUYWdgIGNvbXBvbmVudCByZW5kZXJzIGEgdGFnIHRvIGxhYmVsIG9yIGNhdGVnb3JpemUgaW5mb3JtYXRpb24gb3Igb3RoZXIgY29tcG9uZW50cy4gVGFncyBjYW4gYmUgc3RhdGljIG9yIGNsaWNrYWJsZSBmb3IgaW52b2tpbmcgZnVuY3Rpb25zLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFnIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWcgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWcnLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbi8qKlxuICogVGhlIGBUZXh0YCBjb21wb25lbnQgcmVuZGVycyB0ZXh0IHdpdGggZm9ybWF0dGluZyBvcHRpb25zLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGV4dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGV4dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RleHQnKTtcbi8qKlxuICogVGhlIGBUaWxlYCBjb21wb25lbnQgcmVuZGVycyBhIHNxdWFyZSB0aWxlIHRoYXQgY2FuIGNvbnRhaW4gb3RoZXIgY29tcG9uZW50cy4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGNyZWF0ZSBncm91cHMgb2YgcmVsYXRlZCBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGlsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGlsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RpbGUnKTtcbi8qKiBAZGVwcmVjYXRlZCB1c2UgRmxleCBpbnN0ZWFkLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgcmVsZWFzZS4gKi9cbmV4cG9ydCBjb25zdCBTdGFjayA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YWNrJyk7XG4vKipcbiAqIFRoZSBgVG9nZ2xlR3JvdXBgIGNvbXBvbmVudCByZW5kZXJzIGEgbGlzdCBvZiBzZWxlY3RhYmxlIG9wdGlvbnMsIGVpdGhlciBpbiByYWRpbyBidXR0b24gb3IgY2hlY2tib3ggZm9ybS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RvZ2dsZS1ncm91cCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVG9nZ2xlR3JvdXAgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb2dnbGVHcm91cCcpO1xuLyoqXG4gKiBUaGUgYFN0YXRpc3RpY3NJdGVtYCBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSBkYXRhIHBvaW50IHdpdGhpbiBhIGBTdGF0aXN0aWNzYCBjb21wb25lbnQuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgc2luZ2xlIGRhdGEgcG9pbnQsIHN1Y2ggYXMgYSBudW1iZXIgb3IgcGVyY2VudGFnZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0YXRpc3RpY3MgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXRpc3RpY3NJdGVtID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljc0l0ZW0nKTtcbi8qKlxuICogVGhlIGBTdGF0aXN0aWNzYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBzcG90bGlnaHQgb2Ygb25lIG9yIG1vcmUgZGF0YSBwb2ludHMuIEluY2x1ZGVzIHRoZSBgU3RhdGlzdGljc0l0ZW1gIGFuZCBgU3RhdGlzdGljc1RyZW5kYCBzdWJjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3RhdGlzdGljcyBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU3RhdGlzdGljcyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YXRpc3RpY3MnKTtcbi8qKlxuICogVGhlIGBTdGF0aXN0aWNzVHJlbmRgIGNvbXBvbmVudCByZW5kZXJzIGEgcGVyY2VudGFnZSB0cmVuZCB2YWx1ZSBhbmQgZGlyZWN0aW9uIGFsb25zaWRlIGEgYFN0YXRpc3RpY3NJdGVtYCBjb21wb25lbnQuIFVzZSB0aGlzIGNvbXBvbmVudCB3aXRoaW4gdGhlIGBTdGF0aXN0aWNzSXRlbWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3RhdGlzdGljcyBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgU3RhdGlzdGljc1RyZW5kID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhdGlzdGljc1RyZW5kJyk7XG4vKipcbiAqIFRoZSBgVGFibGVgIGNvbXBvbmVudCByZW5kZXJzIGEgdGFibGUuIFRvIGZvcm1hdCB0aGUgdGFibGUsIHVzZSB0aGUgc3ViY29tcG9uZW50cyBgVGFibGVIZWFkYCwgYFRhYmxlUm93YCwgYFRhYmxlSGVhZGVyYCwgYFRhYmxlQm9keWAsIGBUYWJsZUNlbGxgYW5kIGBUYWJsZUZvb3RlcmAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZGVzaWduLXBhdHRlcm5zI3RhYmxlIERlc2lnbiBQYXR0ZXJuIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlJyk7XG4vKipcbiAqIFRoZSBgVGFibGVGb290ZXJgIGNvbXBvbmVudCByZW5kZXJzIGEgZm9vdGVyIHdpdGhpbiBhIGBUYWJsZWAgY29tcG9uZW50LiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSB0b3RhbHMgb3Igb3RoZXIgc3VtbWFyeSBpbmZvcm1hdGlvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYmxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZUZvb3RlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlRm9vdGVyJyk7XG4vKipcbiAqIFRoZSBgVGFibGVDZWxsYCBjb21wb25lbnQgcmVuZGVycyBpbmRpdmlkdWFsIGNlbGxzIHdpdGhpbiB0aGUgYFRhYmxlQm9keWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlQ2VsbCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlQ2VsbCcpO1xuLyoqXG4gKiBUaGUgYFRhYmxlUm93YCBjb21wb25lbnQgcmVuZGVycyBhIHJvdyB3aXRoaW4gdGhlIGBUYWJsZUJvZHlgIG9yIGBUYWJsZUhlYWRgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYmxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZVJvdyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlUm93Jyk7XG4vKipcbiAqIFRoZSBgVGFibGVCb2R5YCBjb21wb25lbnQgcmVuZGVycyB0aGUgYm9keSAocm93cyBhbmQgY2VsbHMpIG9mIGEgdGFibGUgd2l0aGluIHRoZSBgVGFibGVgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYmxlIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJsZUJvZHkgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUJvZHknKTtcbi8qKlxuICogVGhlIGBUYWJsZUhlYWRlcmAgY29tcG9uZW50IHJlbmRlcnMgaW5kaXZpZHVhbCBjZWxscyBjb250YWluaW5nIGJvbGRlZCBjb2x1bW4gbGFiZWxzLCB3aXRoaW4gYFRhYmxlSGVhZGAuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy90YWJsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWJsZUhlYWRlcicpO1xuLyoqXG4gKiBUaGUgYFRhYmxlSGVhZGAgY29tcG9uZW50IHJlbmRlcnMgdGhlIGhlYWRlciBzZWN0aW9uIG9mIHRoZSBgVGFibGVgIGNvbXBvbmVudCwgY29udGFpbmluZyBjb2x1bW4gbGFiZWxzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGFibGUgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1RhYmxlSGVhZCcpO1xuLyoqXG4gKiBUaGUgYE51bWJlcklucHV0YCBjb21wb25lbnQgcmVuZGVycyBhIG51bWJlciBpbnB1dCBmaWVsZC4gTGlrZSBvdGhlciBpbnB1dHMsIHRoaXMgY29tcG9uZW50IHNob3VsZCBiZSB1c2VkIHdpdGhpbiBhIGBGb3JtYCB0aGF0IGhhcyBhIHN1Ym1pdCBidXR0b24uXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9udW1iZXItaW5wdXQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IE51bWJlcklucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTnVtYmVySW5wdXQnKTtcbi8qKlxuICogVGhlIGBCb3hgIGNvbXBvbmVudCByZW5kZXJzIGFuIGVtcHR5IGRpdiBjb250YWluZXIgZm9yIGZpbmUgdHVuaW5nIHRoZSBzcGFjaW5nIG9mIGNvbXBvbmVudHMuIENvbW1vbmx5IHVzZWQgd2l0aCB0aGUgYEZsZXhgIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2JveCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vZmxleC1hbmQtYm94IEZsZXggYW5kIEJveCBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgQm94ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQm94Jyk7XG4vKipcbiAqIFRoZSBgU3RlcEluZGljYXRvcmAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW5kaWNhdG9yIHRvIHNob3cgdGhlIGN1cnJlbnQgc3RlcCBvZiBhIG11bHRpLXN0ZXAgcHJvY2Vzcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3N0ZXAtaW5kaWNhdG9yIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGVwSW5kaWNhdG9yID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RlcEluZGljYXRvcicpO1xuLyoqXG4gKiBUaGUgYEFjY29yZGlvbmAgY29tcG9uZW50IHJlbmRlcnMgYW4gZXhwYW5kYWJsZSBhbmQgY29sbGFwc2FibGUgc2VjdGlvbiB0aGF0IGNhbiBjb250YWluIG90aGVyIGNvbXBvbmVudHMuIFRoaXMgY29tcG9uZW50IGNhbiBiZSBoZWxwZnVsIGZvciBzYXZpbmcgc3BhY2UgYW5kIGJyZWFraW5nIHVwIGV4dGVuc2lvbiBjb250ZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvYWNjb3JkaW9uIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBBY2NvcmRpb24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdBY2NvcmRpb24nKTtcbi8qKlxuICogVGhlIE11bHRpU2VsZWN0IGNvbXBvbmVudCByZW5kZXJzIGEgZHJvcGRvd24gbWVudSBzZWxlY3QgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBzZWxlY3QgbXVsdGlwbGUgdmFsdWVzLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL211bHRpLXNlbGVjdCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgTXVsdGlTZWxlY3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNdWx0aVNlbGVjdCcpO1xuLyoqXG4gKiBUaGUgYEZsZXhgIGNvbXBvbmVudCByZW5kZXJzIGEgZmxleCBjb250YWluZXIgdGhhdCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLCBhbmQgYXJyYW5nZSB0aGVtIHdpdGggcHJvcHMuIFVzZSB0aGlzIGNvbXBvbmVudCB0byBjcmVhdGUgYSBmbGV4aWJsZSBhbmQgcmVzcG9uc2l2ZSBsYXlvdXQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9mbGV4IERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9mbGV4LWFuZC1ib3ggRmxleCBhbmQgQm94IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBGbGV4ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRmxleCcpO1xuLyoqXG4gKiBUaGUgYERhdGVJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYW4gaW5wdXQgZmllbGQgd2hlcmUgYSB1c2VyIGNhbiBzZWxlY3QgYSBkYXRlLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2RhdGUtaW5wdXQgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IERhdGVJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0RhdGVJbnB1dCcpO1xuLyoqXG4gKiBUaGUgYENoZWNrYm94YCBjb21wb25lbnQgcmVuZGVycyBhIHNpbmdsZSBjaGVja2JveCBpbnB1dC4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuIElmIHlvdSB3YW50IHRvIGRpc3BsYXkgbXVsdGlwbGUgY2hlY2tib3hlcywgeW91IHNob3VsZCB1c2UgYFRvZ2dsZUdyb3VwYCBpbnN0ZWFkLCBhcyBpdCBjb21lcyB3aXRoIGV4dHJhIGxvZ2ljIGZvciBoYW5kbGluZyBtdWx0aXBsZSBjaGVja2JveGVzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvY2hlY2tib3ggRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IENoZWNrYm94ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ2hlY2tib3gnKTtcbi8qKlxuICogVGhlIGBSYWRpb0J1dHRvbmAgY29tcG9uZW50IHJlbmRlcnMgYSBzaW5nbGUgcmFkaW8gaW5wdXQuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LiBJZiB5b3Ugd2FudCB0byBkaXNwbGF5IG11bHRpcGxlIHJhZGlvIGlucHV0cywgeW91IHNob3VsZCB1c2UgYFRvZ2dsZUdyb3VwYCBpbnN0ZWFkLCBhcyBpdCBjb21lcyB3aXRoIGV4dHJhIGxvZ2ljIGZvciBoYW5kbGluZyBtdWx0aXBsZSBpbnB1dHMuXG4gKi9cbmV4cG9ydCBjb25zdCBSYWRpb0J1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1JhZGlvQnV0dG9uJyk7XG4vKipcbiAqIFRoZSBgTGlzdGAgY29tcG9uZW50IHJlbmRlcnMgYSBsaXN0IG9mIGl0ZW1zLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZGlzcGxheSBhIGxpc3Qgb2YgaXRlbXMsIHN1Y2ggYXMgYSBsaXN0IG9mIGNvbnRhY3RzLCB0YXNrcywgb3Igb3RoZXIgZGF0YS4gQSBsaXN0IGNhbiBiZSBzdHlsZWQgYXMgYSBidWxsZXRlZCBsaXN0IG9yIGEgbnVtYmVyZWQgbGlzdC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2xpc3QgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IExpc3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMaXN0Jyk7XG4vKipcbiAqIFRoZSBgVG9nZ2xlYCBjb21wb25lbnQgcmVuZGVycyBhIGJvb2xlYW4gdG9nZ2xlIHN3aXRjaCB0aGF0IGNhbiBiZSBjb25maWd1cmVkIHdpdGggc2l6aW5nLCBsYWJlbCBwb3NpdGlvbiwgcmVhZC1vbmx5LCBhbmQgbW9yZS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RvZ2dsZSBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVG9nZ2xlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVG9nZ2xlJyk7XG4vKipcbiAqIFRoZSBgRHJvcGRvd25gIGNvbXBvbmVudCByZW5kZXJzIGEgZHJvcGRvd24gbWVudSB0aGF0IGNhbiBhcHBlYXIgYXMgYSBidXR0b24gb3IgaHlwZXJsaW5rLiBVc2UgdGhpcyBjb21wb25lbnQgdG8gZW5hYmxlIHVzZXJzIHRvIHNlbGVjdCBmcm9tIG11bHRpcGxlIG9wdGlvbnMgaW4gYSBjb21wYWN0IGxpc3QuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9kcm9wZG93biBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgRHJvcGRvd24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZUNvbXBvdW5kUmVhY3RDb21wb25lbnQoJ0Ryb3Bkb3duJywge1xuICAgIGNvbXBvdW5kQ29tcG9uZW50UHJvcGVydGllczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGBEcm9wZG93bi5CdXR0b25JdGVtYCBjb21wb25lbnQgcmVwcmVzZW50cyBhIHNpbmdsZSBvcHRpb24gd2l0aGluIGEgYERyb3Bkb3duYCBtZW51LiBVc2UgdGhpcyBjb21wb25lbnQgYXMgYSBjaGlsZCBvZiB0aGUgYERyb3Bkb3duYCBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqICoqTGlua3M6KipcbiAgICAgICAgICpcbiAgICAgICAgICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2Ryb3Bkb3duIERvY3N9XG4gICAgICAgICAqL1xuICAgICAgICBCdXR0b25JdGVtOiBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdEcm9wZG93bkJ1dHRvbkl0ZW0nLCB7XG4gICAgICAgICAgICBmcmFnbWVudFByb3BzOiBbJ292ZXJsYXknXSxcbiAgICAgICAgfSksXG4gICAgfSxcbn0pO1xuLyoqXG4gKiBUaGUgUGFuZWwgY29tcG9uZW50IHJlbmRlcnMgYSBwYW5lbCBvdmVybGF5IG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBwYWdlIGFuZCBjb250YWlucyBvdGhlciBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcGFuZWwgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9kZXNpZ24tcGF0dGVybnMjcGFuZWwgRGVzaWduIFBhdHRlcm4gRXhhbXBsZXN9XG4gKi9cbmV4cG9ydCBjb25zdCBQYW5lbCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsJyk7XG4vKipcbiAqIFRoZSBgUGFuZWxGb290ZXJgIGlzIGEgc3RpY2t5IGZvb3RlciBjb21wb25lbnQgZGlzcGxheWVkIGF0IHRoZSBib3R0b20gb2YgYSBgUGFuZWxgIGNvbXBvbmVudC4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGRpc3BsYXkgYWN0aW9ucyBvciBvdGhlciBjb250ZW50IHRoYXQgc2hvdWxkIGJlIHZpc2libGUgYXQgYWxsIHRpbWVzLiBJbmNsdWRlIG9ubHkgb25lIGBQYW5lbEZvb3RlcmAgY29tcG9uZW50IHBlciBgUGFuZWxgLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvcGFuZWwgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBQYW5lbEZvb3RlciA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhbmVsRm9vdGVyJyk7XG4vKipcbiAqIFRoZSBgUGFuZWxCb2R5YCBjb21wb25lbnQgaXMgYSBjb250YWluZXIgdGhhdCB3cmFwcyB0aGUgcGFuZWwncyBjb250ZW50IGFuZCBtYWtlcyBpdCBzY3JvbGxhYmxlLiBJbmNsdWRlIG9ubHkgb25lIGBQYW5lbEJvZHlgIGNvbXBvbmVudCBwZXIgYFBhbmVsYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3BhbmVsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgUGFuZWxCb2R5ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFuZWxCb2R5Jyk7XG4vKipcbiAqIFRoZSBgUGFuZWxTZWN0aW9uYCBjb21wb25lbnQgaXMgYSBjb250YWluZXIgdGhhdCBhZGRzIHBhZGRpbmcgYW5kIGJvdHRvbSBtYXJnaW4gdG8gcHJvdmlkZSBzcGFjaW5nIGJldHdlZW4gY29udGVudC4gVXNlIHRoZSBgUGFuZWxTZWN0aW9uYCBjb21wb25lbnQgdG8gc2VwYXJhdGUgY29udGVudCB3aXRoaW4gYSBgUGFuZWxCb2R5YC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3BhbmVsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgUGFuZWxTZWN0aW9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFuZWxTZWN0aW9uJyk7XG4vKipcbiAqIFRoZSBgU3RlcHBlcklucHV0YCBjb21wb25lbnQgcmVuZGVycyBhIG51bWJlciBpbnB1dCBmaWVsZCB0aGF0IGNhbiBiZSBpbmNyZWFzZWQgb3IgZGVjcmVhc2VkIGJ5IGEgc2V0IG51bWJlci4gQ29tbW9ubHkgdXNlZCB3aXRoaW4gdGhlIGBGb3JtYCBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGVwcGVyLWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGVwcGVySW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTdGVwcGVySW5wdXQnKTtcbi8qKlxuICogVGhlIE1vZGFsIGNvbXBvbmVudCByZW5kZXJzIGEgcG9wLXVwIG92ZXJsYXkgdGhhdCBjYW4gY29udGFpbiBvdGhlciBjb21wb25lbnRzLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbW9kYWwgRG9jc31cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9IdWJTcG90L3VpLWV4dGVuc2lvbnMtZXhhbXBsZXMvdHJlZS9tYWluL292ZXJsYXktZXhhbXBsZSBPdmVybGF5IEV4YW1wbGV9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9kZXNpZ24tcGF0dGVybnMjbW9kYWwgRGVzaWduIFBhdHRlcm4gRXhhbXBsZXN9XG4gKi9cbmV4cG9ydCBjb25zdCBNb2RhbCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ01vZGFsJyk7XG4vKipcbiAqIFRoZSBgTW9kYWxCb2R5YCBjb21wb25lbnQgY29udGFpbnMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgbW9kYWwuIE9uZSBgTW9kYWxCb2R5YCBpcyByZXF1aXJlZCBwZXIgYE1vZGFsYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL21vZGFsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgTW9kYWxCb2R5ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnTW9kYWxCb2R5Jyk7XG4vKipcbiAqIFRoZSBgTW9kYWxGb290ZXJgIGNvbXBvbmVudCBpcyBhbiBvcHRpb25hbCBjb21wb25lbnQgdG8gZm9ybWF0IHRoZSBmb290ZXIgc2VjdGlvbiBvZiB0aGUgbW9kYWwuIFVzZSBvbmUgYE1vZGFsRm9vdGVyYCBwZXIgYE1vZGFsYC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL21vZGFsIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC91aS1leHRlbnNpb25zLWV4YW1wbGVzL3RyZWUvbWFpbi9vdmVybGF5LWV4YW1wbGUgT3ZlcmxheSBFeGFtcGxlfVxuICovXG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNb2RhbEZvb3RlcicpO1xuLyoqXG4gKiBVc2UgdGhlIGBJY29uYCBjb21wb25lbnQgdG8gcmVuZGVyIGEgdmlzdWFsIGljb24gd2l0aGluIG90aGVyIGNvbXBvbmVudHMuIEl0IGNhbiBnZW5lcmFsbHkgYmUgdXNlZCBpbnNpZGUgbW9zdCBjb21wb25lbnRzLCBleGNsdWRpbmcgb25lcyB0aGF0IGRvbid0IHN1cHBvcnQgY2hpbGQgY29tcG9uZW50cy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2ljb24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IEljb24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdJY29uJyk7XG4vKipcbiAqIFRoZSBgU3RhdHVzVGFnYCBjb21wb25lbnQgcmVuZGVycyBhIHZpc3VhbCBpbmRpY2F0b3IgdG8gZGlzcGxheSB0aGUgY3VycmVudCBzdGF0dXMgb2YgYW4gaXRlbS4gU3RhdHVzIHRhZ3MgY2FuIGJlIHN0YXRpYyBvciBjbGlja2FibGUuXG4gKlxuICogKipMaW5rczoqKlxuICpcbiAqIC0ge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL3VpLWNvbXBvbmVudHMvc3RhbmRhcmQtY29tcG9uZW50cy9zdGF0dXMtdGFnIERvY3N9XG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc3RhdHVzLXRhZyN2YXJpYW50cyBWYXJpYW50c31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1c1RhZyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1N0YXR1c1RhZycpO1xuLyoqXG4gKiBUaGUgYExvYWRpbmdCdXR0b25gIGNvbXBvbmVudCByZW5kZXJzIGEgYnV0dG9uIHdpdGggbG9hZGluZyBzdGF0ZSBvcHRpb25zLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvbG9hZGluZy1idXR0b24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IExvYWRpbmdCdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMb2FkaW5nQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vKipcbiAqIFRoZSBgQmFyQ2hhcnRgIGNvbXBvbmVudCByZW5kZXJzIGEgYmFyIGNoYXJ0IGZvciB2aXN1YWxpemluZyBkYXRhLiBUaGlzIHR5cGUgb2YgY2hhcnQgaXMgYmVzdCBzdWl0ZWQgZm9yIGNvbXBhcmluZyBjYXRlZ29yaWNhbCBkYXRhLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvY2hhcnRzL2Jhci1jaGFydCBCYXJDaGFydCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vY2hhcnRzLWV4YW1wbGUgQ2hhcnRzIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBCYXJDaGFydCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0JhckNoYXJ0Jyk7XG4vKipcbiAqIFRoZSBgTGluZUNoYXJ0YCBjb21wb25lbnQgcmVuZGVycyBhIGxpbmUgY2hhcnQgZm9yIHZpc3VhbGl6aW5nIGRhdGEuIFRoaXMgdHlwZSBvZiBjaGFydCBpcyBiZXN0IHN1aXRlZCBmb3IgdGltZSBzZXJpZXMgcGxvdHMgb3IgdHJlbmQgZGF0YS5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2NoYXJ0cy9saW5lLWNoYXJ0IExpbmVDaGFydCBEb2NzfVxuICogLSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL0h1YlNwb3QvdWktZXh0ZW5zaW9ucy1leGFtcGxlcy90cmVlL21haW4vY2hhcnRzLWV4YW1wbGUgQ2hhcnRzIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBMaW5lQ2hhcnQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdMaW5lQ2hhcnQnKTtcbi8qKlxuICogVGhlIGBTY29yZUNpcmNsZWAgY29tcG9uZW50IGRpc3BsYXlzIGEgc2NvcmUgdmFsdWUgKDAtMTAwKSBhcyBhIGNpcmN1bGFyIHByb2dyZXNzIGluZGljYXRvciB3aXRoIGNvbG9yLWNvZGVkIGJhbmRzLlxuICogU2NvcmVzIGFyZSBjb2xvci1jb2RlZDogMC0zMiAoYWxlcnQvcmVkKSwgMzMtNjUgKHdhcm5pbmcveWVsbG93KSwgNjYtMTAwIChzdWNjZXNzL2dyZWVuKS5cbiAqIEBleGFtcGxlXG4gKiBgYGB0c3hcbiAqICAgPFNjb3JlQ2lyY2xlIHNjb3JlPXs3NX0gLz5cbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgU2NvcmVDaXJjbGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdTY29yZUNpcmNsZScpO1xuLyoqXG4gKiBgVGFic2AgYWxsb3cgeW91IHRvIGdyb3VwIHJlbGF0ZWQgY29udGVudCBpbiBhIGNvbXBhY3Qgc3BhY2UsIGFsbG93aW5nIHVzZXJzIHRvIHN3aXRjaCBiZXR3ZWVuIHZpZXdzIHdpdGhvdXQgbGVhdmluZyB0aGUgcGFnZS5cbiAqIEBleGFtcGxlXG4gKiBgYGB0c3hcbiAqIDxUYWJzIGRlZmF1bHRTZWxlY3RlZD1cIjFcIj5cbiAqICAgPFRhYiB0YWJJZD1cIjFcIj5GaXJzdCB0YWIgY29udGVudDwvVGFiPlxuICogICA8VGFiIHRhYklkPVwiMlwiPlNlY29uZCB0YWIgY29udGVudDwvVGFiPlxuICogPC9UYWJzPlxuICogYGBgXG4gKlxuICogKipMaW5rczoqKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYnMgRG9jdW1lbnRhdGlvbn1cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9odWJzcG90ZGV2L3VpZS10YWJiZWQtcHJvZHVjdC1jYXJvdXNlbCBUYWJzIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWJzID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGFicycpO1xuLyoqXG4gKiBFYWNoIGBUYWJgIHJlcHJlc2VudHMgYSBzaW5nbGUgdGFiIChvciBcInZpZXdcIikgd2l0aGluIHRoZSBwYXJlbnQgYFRhYnNgIGNvbXBvbmVudC5cbiAqIEBleGFtcGxlXG4gKiBgYGB0c3hcbiAqIDxUYWJzIGRlZmF1bHRTZWxlY3RlZD1cIjFcIj5cbiAqICAgPFRhYiB0YWJJZD1cIjFcIj5GaXJzdCB0YWIgY29udGVudDwvVGFiPlxuICogICA8VGFiIHRhYklkPVwiMlwiPlNlY29uZCB0YWIgY29udGVudDwvVGFiPlxuICogPC9UYWJzPlxuICogYGBgXG4gKlxuICogKipMaW5rczoqKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3RhYnMgRG9jdW1lbnRhdGlvbn1cbiAqIC0ge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9odWJzcG90ZGV2L3VpZS10YWJiZWQtcHJvZHVjdC1jYXJvdXNlbCBUYWJzIEV4YW1wbGV9XG4gKi9cbmV4cG9ydCBjb25zdCBUYWIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUYWInKTtcbi8qKlxuICogVGhlIGBJbGx1c3RyYXRpb25gIGNvbXBvbmVudCByZW5kZXJzIGFuIGlsbHVzdHJhdGlvbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2lsbHVzdHJhdGlvbiBJbGx1c3RyYXRpb24gRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IElsbHVzdHJhdGlvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0lsbHVzdHJhdGlvbicpO1xuLyoqXG4gKiBUaGUgYFRvb2x0aXBgIGNvbXBvbmVudCByZW5kZXJzIGEgdG9vbHRpcCBmb3IgYSBjb21wb25lbnQuXG4gKlxuICogKipMaW5rczoqKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL3Rvb2x0aXAgRG9jdW1lbnRhdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdUb29sdGlwJyk7XG4vKipcbiAqIFRoZSBgU2VhcmNoSW5wdXRgIGNvbXBvbmVudCByZW5kZXJzIGEgc2VhcmNoIGlucHV0IGZpZWxkLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvc2VhcmNoLWlucHV0IFNlYXJjaElucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1NlYXJjaElucHV0Jyk7XG4vKipcbiAqIFRoZSBgVGltZUlucHV0YCBjb21wb25lbnQgcmVuZGVycyBhbiBpbnB1dCBmaWVsZCB3aGVyZSBhIHVzZXIgY2FuIHNlbGVjdCBhIHRpbWUuIENvbW1vbmx5IHVzZWQgd2l0aGluIHRoZSBgRm9ybWAgY29tcG9uZW50LlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvdGltZS1pbnB1dCBEb2NzfVxuICovXG5leHBvcnQgY29uc3QgVGltZUlucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnVGltZUlucHV0Jyk7XG4vKipcbiAqIFRoZSBgQ3VycmVuY3lJbnB1dGAgY29tcG9uZW50IHJlbmRlcnMgYSBjdXJyZW5jeSBpbnB1dCBmaWVsZCB3aXRoIHByb3BlciBmb3JtYXR0aW5nLFxuICogY3VycmVuY3kgc3ltYm9scywgYW5kIGxvY2FsZS1zcGVjaWZpYyBkaXNwbGF5IHBhdHRlcm5zLiBDb21tb25seSB1c2VkIHdpdGhpbiB0aGUgYEZvcm1gIGNvbXBvbmVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2N1cnJlbmN5LWlucHV0IERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBDdXJyZW5jeUlucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3VycmVuY3lJbnB1dCcpO1xuLyoqXG4gKiBUaGUgYElubGluZWAgY29tcG9uZW50IHNwcmVhZHMgYWxpZ25zIGl0cyBjaGlsZHJlbiBob3Jpem9udGFsbHkgKGFsb25nIHRoZSB4LWF4aXMpLlxuICpcbiAqICoqTGlua3M6KipcbiAqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL3N0YW5kYXJkLWNvbXBvbmVudHMvaW5saW5lIERvY3N9XG4gKi8gZXhwb3J0IGNvbnN0IElubGluZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0lubGluZScpO1xuLyoqXG4gKiBUaGUgYEF1dG9HcmlkYCBjb21wb25lbnQgcmVuZGVycyBhIHJlc3BvbnNpdmUgZ3JpZCBsYXlvdXQgdGhhdCBhdXRvbWF0aWNhbGx5IGFkanVzdHMgdGhlIG51bWJlciBvZiBjb2x1bW5zIGJhc2VkIG9uIGF2YWlsYWJsZSBzcGFjZS4gVXNlIHRoaXMgY29tcG9uZW50IHRvIGNyZWF0ZSBmbGV4aWJsZSBncmlkIGxheW91dHMgZm9yIGNhcmRzLCB0aWxlcywgb3Igb3RoZXIgY29udGVudC5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9zdGFuZGFyZC1jb21wb25lbnRzL2F1dG9ncmlkIERvY3N9XG4gKi9cbmV4cG9ydCBjb25zdCBBdXRvR3JpZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0F1dG9HcmlkJyk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ1JNIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5leHBvcnQgY29uc3QgQ3JtUHJvcGVydHlMaXN0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtUHJvcGVydHlMaXN0Jyk7XG5leHBvcnQgY29uc3QgQ3JtQXNzb2NpYXRpb25UYWJsZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybUFzc29jaWF0aW9uVGFibGUnKTtcbmV4cG9ydCBjb25zdCBDcm1EYXRhSGlnaGxpZ2h0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtRGF0YUhpZ2hsaWdodCcpO1xuZXhwb3J0IGNvbnN0IENybVJlcG9ydCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybVJlcG9ydCcpO1xuZXhwb3J0IGNvbnN0IENybUFzc29jaWF0aW9uUGl2b3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1Bc3NvY2lhdGlvblBpdm90Jyk7XG5leHBvcnQgY29uc3QgQ3JtQXNzb2NpYXRpb25Qcm9wZXJ0eUxpc3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1Bc3NvY2lhdGlvblByb3BlcnR5TGlzdCcpO1xuZXhwb3J0IGNvbnN0IENybUFzc29jaWF0aW9uU3RhZ2VUcmFja2VyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQXNzb2NpYXRpb25TdGFnZVRyYWNrZXInKTtcbmV4cG9ydCBjb25zdCBDcm1TaW1wbGVEZWFkbGluZSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybVNpbXBsZURlYWRsaW5lJyk7XG5leHBvcnQgY29uc3QgQ3JtU3RhZ2VUcmFja2VyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtU3RhZ2VUcmFja2VyJyk7XG5leHBvcnQgY29uc3QgQ3JtU3RhdGlzdGljcyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0NybVN0YXRpc3RpY3MnKTtcbmV4cG9ydCBjb25zdCBDcm1BY3Rpb25CdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdDcm1BY3Rpb25CdXR0b24nKTtcbmV4cG9ydCBjb25zdCBDcm1BY3Rpb25MaW5rID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQWN0aW9uTGluaycpO1xuZXhwb3J0IGNvbnN0IENybUNhcmRBY3Rpb25zID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ3JtQ2FyZEFjdGlvbnMnKTtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBBUFAgSE9NRSBDT01QT05FTlRTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4gKiBUaGUgYEhlYWRlckFjdGlvbnNgIGNvbXBvbmVudCByZW5kZXJzIGEgY29udGFpbmVyIGZvciBhY3Rpb24gYnV0dG9ucyBpbiB0aGUgYXBwIGhvbWUgaGVhZGVyLiBJdCBhY2NlcHRzIGBQcmltYXJ5SGVhZGVyQWN0aW9uQnV0dG9uYCBhbmQgYFNlY29uZGFyeUhlYWRlckFjdGlvbkJ1dHRvbmAgYXMgY2hpbGRyZW4uXG4gKlxuICovXG5leHBvcnQgY29uc3QgSGVhZGVyQWN0aW9ucyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0hlYWRlckFjdGlvbnMnKTtcbi8qKlxuICogVGhlIGBQcmltYXJ5SGVhZGVyQWN0aW9uQnV0dG9uYCBjb21wb25lbnQgcmVuZGVycyBhIHByaW1hcnkgYWN0aW9uIGJ1dHRvbiBpbiB0aGUgYXBwIGhvbWUgaGVhZGVyLiBUaGlzIGJ1dHRvbiBpcyBzdHlsZWQgYXMgdGhlIG1haW4gY2FsbC10by1hY3Rpb24gYW5kIG9ubHkgb25lIHNob3VsZCBiZSB1c2VkIHBlciBgSGVhZGVyQWN0aW9uc2AgY29udGFpbmVyLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IFByaW1hcnlIZWFkZXJBY3Rpb25CdXR0b24gPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQcmltYXJ5SGVhZGVyQWN0aW9uQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vKipcbiAqIFRoZSBgU2Vjb25kYXJ5SGVhZGVyQWN0aW9uQnV0dG9uYCBjb21wb25lbnQgcmVuZGVycyBhIHNlY29uZGFyeSBhY3Rpb24gYnV0dG9uIGluIHRoZSBhcHAgaG9tZSBoZWFkZXIuIE11bHRpcGxlIHNlY29uZGFyeSBhY3Rpb25zIGNhbiBiZSB1c2VkIGFuZCB0aGV5IHdpbGwgYmUgZ3JvdXBlZCBhcHByb3ByaWF0ZWx5IGluIHRoZSBoZWFkZXIuXG4gKlxuICovXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5SGVhZGVyQWN0aW9uQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU2Vjb25kYXJ5SGVhZGVyQWN0aW9uQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQVBQIFBBR0UgQ09NUE9ORU5UU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuICogVGhlIGBQYWdlSGVhZGVyYCBjb21wb25lbnQgcmVuZGVycyB0aGUgYWN0aW9ucyB3aXRoaW4gdGhlIGhlYWRlciBvZiB0aGUgcGFnZS4gSXQgYWNjZXB0cyBgUHJpbWFyeUFjdGlvbmAgYW5kIGBTZWNvbmRhcnlBY3Rpb25zYCBhcyBjaGlsZHJlbi5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKiAtIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy91aS1jb21wb25lbnRzL2FwcC1wYWdlLWNvbXBvbmVudHMvcGFnZS1oZWFkZXIgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFBhZ2VIZWFkZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZUNvbXBvdW5kUmVhY3RDb21wb25lbnQoJ1BhZ2VIZWFkZXInLCB7XG4gICAgY29tcG91bmRDb21wb25lbnRQcm9wZXJ0aWVzOiB7XG4gICAgICAgIFByaW1hcnlBY3Rpb246IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VIZWFkZXJQcmltYXJ5QWN0aW9uJyksXG4gICAgICAgIFNlY29uZGFyeUFjdGlvbnM6IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VIZWFkZXJTZWNvbmRhcnlBY3Rpb25zJyksXG4gICAgICAgIExpbms6IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VIZWFkZXJMaW5rJyksXG4gICAgICAgIFBhZ2VMaW5rOiBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdQYWdlSGVhZGVyUGFnZUxpbmsnKSxcbiAgICB9LFxufSk7XG4vKipcbiAqIFRoZSAnUGFnZUJyZWFkY3J1bWJzJyBjb21wb25lbnQgcmVuZGVycyBhIGxpc3Qgb2YgbGlua3MgdG8gc2hvdyB0aGUgdXNlcidzIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIHRoZSBhcHAgYW5kIGFsbG93IHRoZW0gdG8gbmF2aWdhdGUgYmFjayB0byBwcmV2aW91cyBwYWdlcy5cbiAqXG4gKiAqKkxpbmtzOioqXG4gKlxuICogLSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvdWktY29tcG9uZW50cy9hcHAtcGFnZS1jb21wb25lbnRzL3BhZ2UtYnJlYWRjcnVtYnMgRG9jc31cbiAqL1xuZXhwb3J0IGNvbnN0IFBhZ2VCcmVhZGNydW1icyA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlQ29tcG91bmRSZWFjdENvbXBvbmVudCgnUGFnZUJyZWFkY3J1bWJzJywge1xuICAgIGNvbXBvdW5kQ29tcG9uZW50UHJvcGVydGllczoge1xuICAgICAgICBQYWdlTGluazogY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFnZUJyZWFkY3J1bWJzUGFnZUxpbmsnKSxcbiAgICAgICAgQ3VycmVudDogY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFnZUJyZWFkY3J1bWJzQ3VycmVudCcpLFxuICAgIH0sXG59KTtcbmV4cG9ydCBjb25zdCBQYWdlTGluayA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ1BhZ2VMaW5rJyk7XG5leHBvcnQgY29uc3QgUGFnZVRpdGxlID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnUGFnZVRpdGxlJyk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRVhQRVJJTUVOVEFMIENPTVBPTkVOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgSWZyYW1lID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnSWZyYW1lJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgTWVkaWFPYmplY3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdNZWRpYU9iamVjdCcsIHtcbiAgICBmcmFnbWVudFByb3BzOiBbJ2l0ZW1SaWdodCcsICdpdGVtTGVmdCddLFxufSk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgU3RhY2syID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU3RhY2syJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgQ2VudGVyID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnQ2VudGVyJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgR3JpZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0dyaWQnKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBHcmlkSXRlbSA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0dyaWRJdGVtJyk7XG4vKipcbiAqIEBleHBlcmltZW50YWwgVGhpcyBjb21wb25lbnQgaXMgZXhwZXJpbWVudGFsLiBBdm9pZCB1c2luZyBpdCBpbiBwcm9kdWN0aW9uIGR1ZSB0byBwb3RlbnRpYWwgYnJlYWtpbmcgY2hhbmdlcy4gWW91ciBmZWVkYmFjayBpcyB2YWx1YWJsZSBmb3IgaW1wcm92ZW1lbnRzLiBTdGF5IHR1bmVkIGZvciB1cGRhdGVzLlxuICovXG5leHBvcnQgY29uc3QgU2V0dGluZ3NWaWV3ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnU2V0dGluZ3NWaWV3Jyk7XG4vKipcbiAqIFRoZSBgRXhwYW5kYWJsZVRleHRgIGNvbXBvbmVudCByZW5kZXJzIGEgdGV4dCB0aGF0IGNhbiBiZSBleHBhbmRlZCBvciBjb2xsYXBzZWQgYmFzZWQgb24gYSBtYXhpbXVtIGhlaWdodC5cbiAqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IEV4cGFuZGFibGVUZXh0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXhwYW5kYWJsZVRleHQnKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBGaWxlSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdGaWxlSW5wdXQnKTtcbi8qKlxuICogQGV4cGVyaW1lbnRhbCBUaGlzIGNvbXBvbmVudCBpcyBleHBlcmltZW50YWwuIEF2b2lkIHVzaW5nIGl0IGluIHByb2R1Y3Rpb24gZHVlIHRvIHBvdGVudGlhbCBicmVha2luZyBjaGFuZ2VzLiBZb3VyIGZlZWRiYWNrIGlzIHZhbHVhYmxlIGZvciBpbXByb3ZlbWVudHMuIFN0YXkgdHVuZWQgZm9yIHVwZGF0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBGaWxlVXBsb2FkID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRmlsZVVwbG9hZCcpO1xuLyoqXG4gKiBAZXhwZXJpbWVudGFsIFRoaXMgY29tcG9uZW50IGlzIGV4cGVyaW1lbnRhbC4gQXZvaWQgdXNpbmcgaXQgaW4gcHJvZHVjdGlvbiBkdWUgdG8gcG90ZW50aWFsIGJyZWFraW5nIGNoYW5nZXMuIFlvdXIgZmVlZGJhY2sgaXMgdmFsdWFibGUgZm9yIGltcHJvdmVtZW50cy4gU3RheSB0dW5lZCBmb3IgdXBkYXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IEZpbGVWaWV3ZXIgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdGaWxlVmlld2VyJyk7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRVhQRVJJTUVOVEFMIFNQQUNJTkcgVkFSSUFOVFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5leHBvcnQgY29uc3QgRXhwZXJpbWVudGFsRmxleCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0V4cGVyaW1lbnRhbEZsZXgnKTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxCb3ggPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFeHBlcmltZW50YWxCb3gnKTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxJbmxpbmUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFeHBlcmltZW50YWxJbmxpbmUnKTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxBdXRvR3JpZCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0V4cGVyaW1lbnRhbEF1dG9HcmlkJyk7XG5leHBvcnQgY29uc3QgRXhwZXJpbWVudGFsQnV0dG9uUm93ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXhwZXJpbWVudGFsQnV0dG9uUm93Jyk7XG5leHBvcnQgY29uc3QgRXhwZXJpbWVudGFsQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXhwZXJpbWVudGFsQnV0dG9uJywge1xuICAgIGZyYWdtZW50UHJvcHM6IFsnb3ZlcmxheSddLFxufSk7XG5leHBvcnQgY29uc3QgRXhwZXJpbWVudGFsTG9hZGluZ0J1dHRvbiA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0V4cGVyaW1lbnRhbExvYWRpbmdCdXR0b24nLCB7XG4gICAgZnJhZ21lbnRQcm9wczogWydvdmVybGF5J10sXG59KTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0V4cGVyaW1lbnRhbElucHV0Jyk7XG5leHBvcnQgY29uc3QgRXhwZXJpbWVudGFsVGV4dEFyZWEgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFeHBlcmltZW50YWxUZXh0QXJlYScpO1xuZXhwb3J0IGNvbnN0IEV4cGVyaW1lbnRhbE51bWJlcklucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXhwZXJpbWVudGFsTnVtYmVySW5wdXQnKTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxEYXRlSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFeHBlcmltZW50YWxEYXRlSW5wdXQnKTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxUaW1lSW5wdXQgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFeHBlcmltZW50YWxUaW1lSW5wdXQnKTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxDdXJyZW5jeUlucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXhwZXJpbWVudGFsQ3VycmVuY3lJbnB1dCcpO1xuZXhwb3J0IGNvbnN0IEV4cGVyaW1lbnRhbFN0ZXBwZXJJbnB1dCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0V4cGVyaW1lbnRhbFN0ZXBwZXJJbnB1dCcpO1xuZXhwb3J0IGNvbnN0IEV4cGVyaW1lbnRhbFNlYXJjaElucHV0ID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXhwZXJpbWVudGFsU2VhcmNoSW5wdXQnKTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxTZWxlY3QgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFeHBlcmltZW50YWxTZWxlY3QnKTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxNdWx0aVNlbGVjdCA9IGNyZWF0ZUFuZFJlZ2lzdGVyUmVtb3RlUmVhY3RDb21wb25lbnQoJ0V4cGVyaW1lbnRhbE11bHRpU2VsZWN0Jyk7XG5leHBvcnQgY29uc3QgRXhwZXJpbWVudGFsQ2hlY2tib3ggPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFeHBlcmltZW50YWxDaGVja2JveCcpO1xuZXhwb3J0IGNvbnN0IEV4cGVyaW1lbnRhbFJhZGlvQnV0dG9uID0gY3JlYXRlQW5kUmVnaXN0ZXJSZW1vdGVSZWFjdENvbXBvbmVudCgnRXhwZXJpbWVudGFsUmFkaW9CdXR0b24nKTtcbmV4cG9ydCBjb25zdCBFeHBlcmltZW50YWxUb2dnbGUgPSBjcmVhdGVBbmRSZWdpc3RlclJlbW90ZVJlYWN0Q29tcG9uZW50KCdFeHBlcmltZW50YWxUb2dnbGUnKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFJlYWN0UmVuZGVyTW9ja3NDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbi8qKlxuICogQ3JlYXRlcyBhIG1vY2stYXdhcmUgaG9vayBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIG1vY2sgdGhlIG9yaWdpbmFsIGhvb2sgZnVuY3Rpb24uXG4gKiBUaGUgbW9jay1hd2FyZSBob29rIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSBtb2NrZWQgaG9vayBmdW5jdGlvbiBpZiBhIG1vY2sgaXMgZm91bmQsIG90aGVyd2lzZSBpdCB3aWxsIHJldHVybiB0aGUgb3JpZ2luYWwgaG9vayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gaG9va05hbWUgVGhlIG5hbWUgb2YgdGhlIGhvb2sgdG8gbW9jayB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSBrZXkgaW4gdGhlIE1vY2tzIGludGVyZmFjZVxuICogQHBhcmFtIG9yaWdpbmFsSG9va0Z1bmN0aW9uIFRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uIHRvIGNhbGwgaWYgbm8gbW9jayBpcyBmb3VuZFxuICogQHJldHVybnMgVGhlIG1vY2tlZCBob29rIGZ1bmN0aW9uIG9yIHRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uIGlmIG5vIG1vY2sgaXMgZm91bmRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZU1vY2tBd2FyZUhvb2sgPSAoaG9va05hbWUsIG9yaWdpbmFsSG9va0Z1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdXNlV3JhcHBlciA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vY2tzQ29udGV4dCA9IHVzZU1vY2tzQ29udGV4dCgpO1xuICAgICAgICBpZiAoIW1vY2tzQ29udGV4dCkge1xuICAgICAgICAgICAgLy8gSWYgbm8gbW9ja3MgYXJlIHByb3ZpZGVkLCBjYWxsIHRoZSBvcmlnaW5hbCBob29rIGZ1bmN0aW9uXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxIb29rRnVuY3Rpb24oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBtb2NrcyB9ID0gbW9ja3NDb250ZXh0O1xuICAgICAgICBjb25zdCBtb2NrSG9vayA9IG1vY2tzW2hvb2tOYW1lXTtcbiAgICAgICAgaWYgKCFtb2NrSG9vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbGxlZ2FsIFN0YXRlOiBNb2NrIGZvciBob29rICR7aG9va05hbWV9IG5vdCBmb3VuZC5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9ja0hvb2soLi4uYXJncyk7XG4gICAgfTtcbiAgICByZXR1cm4gdXNlV3JhcHBlcjtcbn07XG4vKipcbiAqIEEgaG9vayB0aGF0IHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgTW9ja3MgY29udGV4dC5cbiAqIFJldHVybnMgdGhlIG1vY2tzIGNvbnRleHQgdmFsdWUgaWYgaW5zaWRlIGEgTW9ja3NDb250ZXh0UHJvdmlkZXIsIG90aGVyd2lzZSByZXR1cm5zIG51bGwuXG4gKlxuICogQHJldHVybnMgVGhlIG1vY2tzIGNvbnRleHQgdmFsdWUgb3IgbnVsbCBpZiBub3QgaW4gYSB0ZXN0IGVudmlyb25tZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTW9ja3NDb250ZXh0KCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KFJlYWN0UmVuZGVyTW9ja3NDb250ZXh0KTtcbn1cbi8qKlxuICogQSBSZWFjdCBjb21wb25lbnQgdGhhdCBwcm92aWRlcyB0aGUgTW9ja3MgY29udGV4dCB0aGF0IGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgbW9ja3MgdG8gdGhlIG1vY2stYXdhcmUgaG9vayBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIGNoaWxkcmVuIFRoZSBjaGlsZHJlbiB0byByZW5kZXIuXG4gKiBAcmV0dXJucyBUaGUgY2hpbGRyZW4gd3JhcHBlZCBpbiB0aGUgTW9ja3MgY29udGV4dCBwcm92aWRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IE1vY2tzQ29udGV4dFByb3ZpZGVyID0gUmVhY3RSZW5kZXJNb2Nrc0NvbnRleHQuUHJvdmlkZXI7XG4vKipcbiAqIFN0YWJpbGl6ZXMgYSB2YWx1ZSdzIHJlZmVyZW5jZSBpZGVudGl0eSBhY3Jvc3MgcmUtcmVuZGVycyB1c2luZyBkZWVwXG4gKiBjb21wYXJpc29uIHZpYSBKU09OLnN0cmluZ2lmeS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YWJsZVZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhYmxlUmVmID0gdXNlUmVmKHtcbiAgICAgICAga2V5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZSksXG4gICAgICAgIHZhbHVlLFxuICAgIH0pO1xuICAgIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICBpZiAoa2V5ICE9PSBzdGFibGVSZWYuY3VycmVudC5rZXkpIHtcbiAgICAgICAgc3RhYmxlUmVmLmN1cnJlbnQgPSB7IGtleSwgdmFsdWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YWJsZVJlZi5jdXJyZW50LnZhbHVlO1xufVxuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFHRV9TSVpFID0gMTA7XG4vKipcbiAqIENhbGN1bGF0ZSBwYWdpbmF0aW9uIGZsYWdzIGJhc2VkIG9uIGN1cnJlbnQgcGFnZSBhbmQgQVBJIGhhc01vcmUgZmxhZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlUGFnaW5hdGlvbkZsYWdzKGN1cnJlbnRQYWdlLCBoYXNNb3JlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzTmV4dFBhZ2U6IGhhc01vcmUsXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZTogY3VycmVudFBhZ2UgPiAxLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBnZXRXb3JrZXJHbG9iYWxzIH0gZnJvbSAnLi4vLi4vaW50ZXJuYWwvZ2xvYmFsLXV0aWxzLmpzJztcbmZ1bmN0aW9uIGlzQ3JtU2VhcmNoUmVzcG9uc2UoZGF0YSkge1xuICAgIGNvbnN0IGQgPSBkYXRhO1xuICAgIGlmIChkID09PSBudWxsIHx8XG4gICAgICAgIHR5cGVvZiBkICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICAhQXJyYXkuaXNBcnJheShkLnJlc3VsdHMpIHx8XG4gICAgICAgIHR5cGVvZiBkLnRvdGFsICE9PSAnbnVtYmVyJyB8fFxuICAgICAgICB0eXBlb2YgZC5oYXNNb3JlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZC5yZXN1bHRzLmV2ZXJ5KChyZXN1bHQpID0+IHJlc3VsdCAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICB0eXBlb2YgcmVzdWx0Lm9iamVjdElkID09PSAnbnVtYmVyJyAmJlxuICAgICAgICByZXN1bHQucHJvcGVydGllcyAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgcmVzdWx0LnByb3BlcnRpZXMgPT09ICdvYmplY3QnKTtcbn1cbmV4cG9ydCBjb25zdCBmZXRjaENybVNlYXJjaCA9IGFzeW5jIChyZXF1ZXN0LCBvcHRpb25zKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBnZXRXb3JrZXJHbG9iYWxzKCkuaHNXb3JrZXJBUEkuZmV0Y2hDcm1TZWFyY2gocmVxdWVzdCwgb3B0aW9ucyk7XG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IGVycm9yIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICAgID8gZXJyb3JcbiAgICAgICAgICAgIDogbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggQ1JNIHNlYXJjaCByZXN1bHRzOiBVbmtub3duIGVycm9yJyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5lcnJvcik7XG4gICAgfVxuICAgIGlmICghaXNDcm1TZWFyY2hSZXNwb25zZShyZXN1bHQuZGF0YSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCcpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgY2xlYW51cDogcmVzdWx0LmNsZWFudXAgfHwgKCgpID0+IHsgfSksXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBub3JtYWxpemVFcnJvcihlcnIsIGRlZmF1bHRNZXNzYWdlKSB7XG4gICAgcmV0dXJuIGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyIDogbmV3IEVycm9yKGRlZmF1bHRNZXNzYWdlKTtcbn1cbi8qKlxuICogU2hhcmVkIGZldGNoL3JlZmV0Y2gvY2xlYW51cC9hYm9ydCBsaWZlY3ljbGUgZm9yIGRhdGEgaG9va3MuXG4gKlxuICogTWFuYWdlczpcbiAqIC0gSW5pdGlhbCBmZXRjaCBvbiBtb3VudCBhbmQgd2hlbiBkZXBzIGNoYW5nZVxuICogLSBDYW5jZWxsYXRpb24gb2YgaW4tZmxpZ2h0IGZldGNoZXMgb24gdW5tb3VudCBvciBkZXBzIGNoYW5nZVxuICogLSBSZWZldGNoIHdpdGggYWJvcnQgc2lnbmFsIGFuZCBjbGVhbnVwIHRyYWNraW5nXG4gKiAtIEVycm9yIG5vcm1hbGl6YXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUZldGNoTGlmZWN5Y2xlKHsgZmV0Y2hGbiwgY2FsbGJhY2tzLCBkZXBzLCBkZWZhdWx0RXJyb3JNZXNzYWdlID0gJ0FuIGVycm9yIG9jY3VycmVkJywgfSkge1xuICAgIC8vIFN0b3JlIGxhdGVzdCB2ZXJzaW9ucyBpbiByZWZzIHRvIGF2b2lkIHN0YWxlIGNsb3N1cmVzIGluIHJlZmV0Y2hcbiAgICBjb25zdCBmZXRjaEZuUmVmID0gdXNlUmVmKGZldGNoRm4pO1xuICAgIGZldGNoRm5SZWYuY3VycmVudCA9IGZldGNoRm47XG4gICAgY29uc3QgY2FsbGJhY2tzUmVmID0gdXNlUmVmKGNhbGxiYWNrcyk7XG4gICAgY2FsbGJhY2tzUmVmLmN1cnJlbnQgPSBjYWxsYmFja3M7XG4gICAgY29uc3QgZGVmYXVsdEVycm9yTWVzc2FnZVJlZiA9IHVzZVJlZihkZWZhdWx0RXJyb3JNZXNzYWdlKTtcbiAgICBkZWZhdWx0RXJyb3JNZXNzYWdlUmVmLmN1cnJlbnQgPSBkZWZhdWx0RXJyb3JNZXNzYWdlO1xuICAgIC8vIFRyYWNrIGluLWZsaWdodCByZWZldGNoIHRvIHN1cHBvcnQgY2FuY2VsbGF0aW9uXG4gICAgY29uc3QgcmVmZXRjaEFib3J0UmVmID0gdXNlUmVmKG51bGwpO1xuICAgIC8vIFRyYWNrIHJlZmV0Y2ggY2xlYW51cCBmdW5jdGlvbiB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgIGNvbnN0IHJlZmV0Y2hDbGVhbnVwUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNsZWFudXAgPSBudWxsO1xuICAgICAgICBjb25zdCBzaWduYWwgPSB7IGNhbmNlbGxlZDogZmFsc2UsIGlzUmVmZXRjaDogZmFsc2UgfTtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHsgaXNSZWZldGNoOiBmYWxzZSB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NSZWYuY3VycmVudC5vblN0YXJ0KGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoRm5SZWYuY3VycmVudChzaWduYWwpO1xuICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1JlZi5jdXJyZW50Lm9uU3VjY2VzcyhyZXN1bHQuZGF0YSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAgPSByZXN1bHQuY2xlYW51cCA/PyBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NSZWYuY3VycmVudC5vbkVycm9yKG5vcm1hbGl6ZUVycm9yKGVyciwgZGVmYXVsdEVycm9yTWVzc2FnZVJlZi5jdXJyZW50KSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICBzaWduYWwuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIENhbGwgY2xlYW51cCBmdW5jdGlvbiB0byByZWxlYXNlIHJlc291cmNlc1xuICAgICAgICAgICAgaWYgKGNsZWFudXApIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDbGVhbiB1cCBhbnkgYWN0aXZlIHJlZmV0Y2ggc3Vic2NyaXB0aW9uXG4gICAgICAgICAgICBpZiAocmVmZXRjaENsZWFudXBSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICByZWZldGNoQ2xlYW51cFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LCBkZXBzKTtcbiAgICBjb25zdCByZWZldGNoID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyBDYW5jZWwgYW55IGluLWZsaWdodCByZWZldGNoXG4gICAgICAgIGlmIChyZWZldGNoQWJvcnRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmVmZXRjaEFib3J0UmVmLmN1cnJlbnQuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGVhbiB1cCBvbGQgcmVmZXRjaCBzdWJzY3JpcHRpb24gdG8gcHJldmVudCBtZW1vcnkgbGVha3NcbiAgICAgICAgaWYgKHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHJlZmV0Y2hDbGVhbnVwUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSBuZXcgYWJvcnQgc2lnbmFsIGZvciB0aGlzIHJlZmV0Y2hcbiAgICAgICAgY29uc3QgYWJvcnRTaWduYWwgPSB7IGNhbmNlbGxlZDogZmFsc2UsIGlzUmVmZXRjaDogdHJ1ZSB9O1xuICAgICAgICByZWZldGNoQWJvcnRSZWYuY3VycmVudCA9IGFib3J0U2lnbmFsO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0geyBpc1JlZmV0Y2g6IHRydWUgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrc1JlZi5jdXJyZW50Lm9uU3RhcnQoY29udGV4dCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaEZuUmVmLmN1cnJlbnQoYWJvcnRTaWduYWwpO1xuICAgICAgICAgICAgaWYgKCFhYm9ydFNpZ25hbC5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NSZWYuY3VycmVudC5vblN1Y2Nlc3MocmVzdWx0LmRhdGEsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNsZWFudXAgZm9yIG5leHQgcmVmZXRjaCBvciB1bm1vdW50XG4gICAgICAgICAgICAgICAgcmVmZXRjaENsZWFudXBSZWYuY3VycmVudCA9IHJlc3VsdC5jbGVhbnVwID8/IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBjYW5jZWxsZWQsIGNsZWFuIHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jbGVhbnVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmICghYWJvcnRTaWduYWwuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzUmVmLmN1cnJlbnQub25FcnJvcihub3JtYWxpemVFcnJvcihlcnIsIGRlZmF1bHRFcnJvck1lc3NhZ2VSZWYuY3VycmVudCksIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGFib3J0IHJlZiBpZiB0aGlzIGlzIHN0aWxsIHRoZSBjdXJyZW50IHJlZmV0Y2hcbiAgICAgICAgICAgIGlmIChyZWZldGNoQWJvcnRSZWYuY3VycmVudCA9PT0gYWJvcnRTaWduYWwpIHtcbiAgICAgICAgICAgICAgICByZWZldGNoQWJvcnRSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHsgcmVmZXRjaCB9O1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhYmxlVmFsdWUgfSBmcm9tICcuLi9pbnRlcm5hbC9ob29rLXV0aWxzLmpzJztcbmltcG9ydCB7IGNhbGN1bGF0ZVBhZ2luYXRpb25GbGFncywgREVGQVVMVF9QQUdFX1NJWkUsIH0gZnJvbSAnLi4vdXRpbHMvcGFnaW5hdGlvbi5qcyc7XG5pbXBvcnQgeyBmZXRjaENybVNlYXJjaCB9IGZyb20gJy4vdXRpbHMvZmV0Y2hDcm1TZWFyY2guanMnO1xuaW1wb3J0IHsgdXNlRmV0Y2hMaWZlY3ljbGUgfSBmcm9tICcuL3V0aWxzL3VzZUZldGNoTGlmZWN5Y2xlLmpzJztcbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgIGlzUmVmZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICBoYXNNb3JlOiBmYWxzZSxcbiAgICAgICAgY3VycmVudEN1cnNvcjogdW5kZWZpbmVkLFxuICAgICAgICBuZXh0Q3Vyc29yOiB1bmRlZmluZWQsXG4gICAgICAgIG9mZnNldEhpc3Rvcnk6IFtdLFxuICAgIH07XG59XG5mdW5jdGlvbiBjcm1TZWFyY2hSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0ZFVENIX1NUQVJUJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAnRkVUQ0hfU1VDQ0VTUyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzdWx0czogYWN0aW9uLnBheWxvYWQucmVzdWx0cyxcbiAgICAgICAgICAgICAgICB0b3RhbDogYWN0aW9uLnBheWxvYWQudG90YWwsXG4gICAgICAgICAgICAgICAgaGFzTW9yZTogYWN0aW9uLnBheWxvYWQuaGFzTW9yZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3Vyc29yOiBhY3Rpb24ucGF5bG9hZC5jdXJyZW50Q3Vyc29yLFxuICAgICAgICAgICAgICAgIG5leHRDdXJzb3I6IGFjdGlvbi5wYXlsb2FkLm5leHRDdXJzb3IsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdGRVRDSF9FUlJPUic6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgICAgIGhhc01vcmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDdXJzb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBuZXh0Q3Vyc29yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdORVhUX1BBR0UnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogc3RhdGUuY3VycmVudFBhZ2UgKyAxLFxuICAgICAgICAgICAgICAgIG9mZnNldEhpc3Rvcnk6IHN0YXRlLmN1cnJlbnRDdXJzb3IgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IFsuLi5zdGF0ZS5vZmZzZXRIaXN0b3J5LCBzdGF0ZS5jdXJyZW50Q3Vyc29yXVxuICAgICAgICAgICAgICAgICAgICA6IHN0YXRlLm9mZnNldEhpc3RvcnksXG4gICAgICAgICAgICAgICAgY3VycmVudEN1cnNvcjogc3RhdGUubmV4dEN1cnNvcixcbiAgICAgICAgICAgICAgICBuZXh0Q3Vyc29yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdQUkVWSU9VU19QQUdFJzoge1xuICAgICAgICAgICAgY29uc3QgbmV3UGFnZSA9IE1hdGgubWF4KDEsIHN0YXRlLmN1cnJlbnRQYWdlIC0gMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdIaXN0b3J5ID0gWy4uLnN0YXRlLm9mZnNldEhpc3RvcnldO1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNDdXJzb3IgPSBuZXdIaXN0b3J5LnBvcCgpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogbmV3UGFnZSxcbiAgICAgICAgICAgICAgICBvZmZzZXRIaXN0b3J5OiBuZXdIaXN0b3J5LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRDdXJzb3I6IHByZXZpb3VzQ3Vyc29yLFxuICAgICAgICAgICAgICAgIG5leHRDdXJzb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnUkVTRVQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgICAgICAgICByZXN1bHRzOiBbXSxcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFzTW9yZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudEN1cnNvcjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG5leHRDdXJzb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBvZmZzZXRIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1JFRkVUQ0hfU1RBUlQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1JlZmV0Y2hpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlICdSRUZFVENIX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1JlZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3VsdHM6IGFjdGlvbi5wYXlsb2FkLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgdG90YWw6IGFjdGlvbi5wYXlsb2FkLnRvdGFsLFxuICAgICAgICAgICAgICAgIGhhc01vcmU6IGFjdGlvbi5wYXlsb2FkLmhhc01vcmUsXG4gICAgICAgICAgICAgICAgbmV4dEN1cnNvcjogYWN0aW9uLnBheWxvYWQubmV4dEN1cnNvcixcbiAgICAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1JFRkVUQ0hfRVJST1InOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpc1JlZmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge307XG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JtU2VhcmNoKGNvbmZpZywgb3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUykge1xuICAgIGNvbnN0IHBhZ2VTaXplID0gY29uZmlnPy5wYWdlTGVuZ3RoID8/IERFRkFVTFRfUEFHRV9TSVpFO1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihjcm1TZWFyY2hSZWR1Y2VyLCBjcmVhdGVJbml0aWFsU3RhdGUoKSk7XG4gICAgLy8gUmVzZXQgcGFnaW5hdGlvbiB3aGVuIHBhZ2VMZW5ndGggY2hhbmdlcy5cbiAgICAvLyBSZW5kZXItcGhhc2UgdXBkYXRlIChub3QgdXNlRWZmZWN0KSBhdm9pZHMgY29tbWl0dGluZyBhIHJlbmRlciB3aXRoIHN0YWxlIHBhZ2luYXRlZCByZXN1bHRzLlxuICAgIGNvbnN0IFtwcmV2UGFnZVNpemUsIHNldFByZXZQYWdlU2l6ZV0gPSB1c2VTdGF0ZShwYWdlU2l6ZSk7XG4gICAgaWYgKHByZXZQYWdlU2l6ZSAhPT0gcGFnZVNpemUpIHtcbiAgICAgICAgc2V0UHJldlBhZ2VTaXplKHBhZ2VTaXplKTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVTRVQnIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdGFibGVDb25maWcgPSB1c2VTdGFibGVWYWx1ZShjb25maWcpO1xuICAgIGNvbnN0IHN0YWJsZU9wdGlvbnMgPSB1c2VTdGFibGVWYWx1ZShvcHRpb25zKTtcbiAgICBjb25zdCBuZXh0UGFnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbkZsYWdzID0gY2FsY3VsYXRlUGFnaW5hdGlvbkZsYWdzKHN0YXRlLmN1cnJlbnRQYWdlLCBzdGF0ZS5oYXNNb3JlKTtcbiAgICAgICAgaWYgKHBhZ2luYXRpb25GbGFncy5oYXNOZXh0UGFnZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnTkVYVF9QQUdFJyB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtzdGF0ZS5jdXJyZW50UGFnZSwgc3RhdGUuaGFzTW9yZV0pO1xuICAgIGNvbnN0IHByZXZpb3VzUGFnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGFnaW5hdGlvbkZsYWdzID0gY2FsY3VsYXRlUGFnaW5hdGlvbkZsYWdzKHN0YXRlLmN1cnJlbnRQYWdlLCBzdGF0ZS5oYXNNb3JlKTtcbiAgICAgICAgaWYgKHBhZ2luYXRpb25GbGFncy5oYXNQcmV2aW91c1BhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1BSRVZJT1VTX1BBR0UnIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3N0YXRlLmN1cnJlbnRQYWdlLCBzdGF0ZS5oYXNNb3JlXSk7XG4gICAgY29uc3QgcmVzZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2luYXRpb25GbGFncyA9IGNhbGN1bGF0ZVBhZ2luYXRpb25GbGFncyhzdGF0ZS5jdXJyZW50UGFnZSwgc3RhdGUuaGFzTW9yZSk7XG4gICAgICAgIGlmIChwYWdpbmF0aW9uRmxhZ3MuaGFzUHJldmlvdXNQYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVNFVCcgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGUuY3VycmVudFBhZ2UsIHN0YXRlLmhhc01vcmVdKTtcbiAgICBjb25zdCB7IHJlZmV0Y2ggfSA9IHVzZUZldGNoTGlmZWN5Y2xlKHtcbiAgICAgICAgZmV0Y2hGbjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlOiBzdGFibGVDb25maWc/Lm9iamVjdFR5cGUsXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogc3RhYmxlQ29uZmlnPy5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBzdGFibGVDb25maWc/LnF1ZXJ5LFxuICAgICAgICAgICAgICAgIGZpbHRlckdyb3Vwczogc3RhYmxlQ29uZmlnPy5maWx0ZXJHcm91cHMsXG4gICAgICAgICAgICAgICAgc29ydHM6IHN0YWJsZUNvbmZpZz8uc29ydHMsXG4gICAgICAgICAgICAgICAgcGFnZUxlbmd0aDogcGFnZVNpemUsXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IHN0YXRlLmN1cnJlbnRDdXJzb3IsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoQ3JtU2VhcmNoKHJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzVG9Gb3JtYXQ6IHN0YWJsZU9wdGlvbnMucHJvcGVydGllc1RvRm9ybWF0LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdPcHRpb25zOiBzdGFibGVPcHRpb25zLmZvcm1hdHRpbmdPcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgb25TdGFydDogKHsgaXNSZWZldGNoIH0pID0+IGRpc3BhdGNoKHsgdHlwZTogaXNSZWZldGNoID8gJ1JFRkVUQ0hfU1RBUlQnIDogJ0ZFVENIX1NUQVJUJyB9KSxcbiAgICAgICAgICAgIG9uU3VjY2VzczogKGRhdGEsIHsgaXNSZWZldGNoIH0pID0+IGRpc3BhdGNoKGlzUmVmZXRjaFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUkVGRVRDSF9TVUNDRVNTJyxcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0czogZGF0YS5yZXN1bHRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IGRhdGEudG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlOiBkYXRhLmhhc01vcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Q3Vyc29yOiBkYXRhLmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0ZFVENIX1NVQ0NFU1MnLFxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiBkYXRhLnJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogZGF0YS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IGRhdGEuaGFzTW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRDdXJzb3I6IGRhdGEuYWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q3Vyc29yOiBzdGF0ZS5jdXJyZW50Q3Vyc29yLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgb25FcnJvcjogKGVycm9yLCB7IGlzUmVmZXRjaCB9KSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogaXNSZWZldGNoID8gJ1JFRkVUQ0hfRVJST1InIDogJ0ZFVENIX0VSUk9SJyxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9LFxuICAgICAgICBkZXBzOiBbc3RhYmxlQ29uZmlnLCBzdGFibGVPcHRpb25zLCBzdGF0ZS5jdXJyZW50Q3Vyc29yXSxcbiAgICAgICAgZGVmYXVsdEVycm9yTWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBDUk0gc2VhcmNoIHJlc3VsdHMnLFxuICAgIH0pO1xuICAgIGNvbnN0IHBhZ2luYXRpb25GbGFncyA9IGNhbGN1bGF0ZVBhZ2luYXRpb25GbGFncyhzdGF0ZS5jdXJyZW50UGFnZSwgc3RhdGUuaGFzTW9yZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdWx0czogc3RhdGUucmVzdWx0cyxcbiAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsLFxuICAgICAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gICAgICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxuICAgICAgICBpc1JlZmV0Y2hpbmc6IHN0YXRlLmlzUmVmZXRjaGluZyxcbiAgICAgICAgcmVmZXRjaCxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgaGFzTmV4dFBhZ2U6IHBhZ2luYXRpb25GbGFncy5oYXNOZXh0UGFnZSxcbiAgICAgICAgICAgIGhhc1ByZXZpb3VzUGFnZTogcGFnaW5hdGlvbkZsYWdzLmhhc1ByZXZpb3VzUGFnZSxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBzdGF0ZS5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHBhZ2VTaXplLFxuICAgICAgICAgICAgbmV4dFBhZ2UsXG4gICAgICAgICAgICBwcmV2aW91c1BhZ2UsXG4gICAgICAgICAgICByZXNldCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIiwiY2xhc3MgUGFnZVJvdXRlc1JlbmRlckVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgc3VwZXIoYDwke2NvbXBvbmVudE5hbWV9PiBzaG91bGQgbm90IGJlIHJlbmRlcmVkIGRpcmVjdGx5LiBVc2UgY3JlYXRlUGFnZVJvdXRlciBpbnN0ZWFkLmApO1xuICAgIH1cbn1cbi8qKlxuICogVXNlZCBhcyBhIGRlc2NyaXB0b3IgZm9yIGEgY29sbGVjdGlvbiBvZiBwYWdlIHJvdXRlcy5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHRzeFxuICogY29uc3QgUGFnZVJvdXRlciA9IGNyZWF0ZVBhZ2VSb3V0ZXIoPFBhZ2VSb3V0ZXM+XG4gKiAgIDxQYWdlUm91dGVzLkluZGV4Um91dGUgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cbiAqICAgPFBhZ2VSb3V0ZXMuUm91dGUgcGF0aD1cIi9kb2NzXCIgY29tcG9uZW50PXtEb2NzUGFnZX0gLz5cbiAqICAgPFBhZ2VSb3V0ZXMuQW55Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZFBhZ2V9IC8+XG4gKiA8L1BhZ2VSb3V0ZXM+KTtcbiAqIGBgYFxuICpcbiAqIFNlZSBbUGFnZVJvdXRlc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2liaWxpdHkvdWktY29tcG9uZW50cy9hcHAtcGFnZS1jb21wb25lbnRzL3BhZ2Utcm91dGVzI3BhZ2Vyb3V0ZXMpIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhZ2VSb3V0ZXMoX19wcm9wcykge1xuICAgIHRocm93IG5ldyBQYWdlUm91dGVzUmVuZGVyRXJyb3IoJ1BhZ2VSb3V0ZXMnKTtcbn1cbi8qKlxuICogVXNlZCBhcyBhIGRlc2NyaXB0b3IgZm9yIGFuIGluZGV4IChpLmUuLCBcIi9cIikgcm91dGUuXG4gKlxuICogRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGB0c3hcbiAqIDxQYWdlUm91dGVzLkluZGV4Um91dGUgY29tcG9uZW50PXtIb21lUGFnZX0gLz5cbiAqIGBgYFxuICpcbiAqL1xuUGFnZVJvdXRlcy5JbmRleFJvdXRlID0gZnVuY3Rpb24gSW5kZXhSb3V0ZShfX3Byb3BzKSB7XG4gICAgdGhyb3cgbmV3IFBhZ2VSb3V0ZXNSZW5kZXJFcnJvcignUGFnZVJvdXRlcy5JbmRleFJvdXRlJyk7XG59O1xuLyoqXG4gKiBVc2VkIGFzIGEgZGVzY3JpcHRvciBmb3IgYSByb3V0ZSB3aXRoIGEgcGF0aCBwYXR0ZXJuLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHN4XG4gKiA8UGFnZVJvdXRlcy5Sb3V0ZSBwYXRoPVwiL2RvY3NcIiBjb21wb25lbnQ9e0RvY3NQYWdlfSAvPlxuICogYGBgXG4gKi9cblBhZ2VSb3V0ZXMuUm91dGUgPSBmdW5jdGlvbiBSb3V0ZShfX3Byb3BzKSB7XG4gICAgdGhyb3cgbmV3IFBhZ2VSb3V0ZXNSZW5kZXJFcnJvcignUGFnZVJvdXRlcy5Sb3V0ZScpO1xufTtcbi8qKlxuICogVXNlZCBhcyBhIGRlc2NyaXB0b3IgZm9yIGEgcm91dGUgdGhhdCBtYXRjaGVzIGFueSBwYXRoLlxuICpcbiAqIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHN4XG4gKiA8UGFnZVJvdXRlcy5BbnlSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kUGFnZX0gLz5cbiAqIGBgYFxuICpcbiAqL1xuUGFnZVJvdXRlcy5BbnlSb3V0ZSA9IGZ1bmN0aW9uIEFueVJvdXRlKF9fcHJvcHMpIHtcbiAgICB0aHJvdyBuZXcgUGFnZVJvdXRlc1JlbmRlckVycm9yKCdQYWdlUm91dGVzLkFueVJvdXRlJyk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQXBwUGFnZVJvdXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG4vKipcbiAqIFRoZSBwcm92aWRlciB0aGF0IHByb3ZpZGVzIHRoZSBjdXJyZW50IHBhZ2Ugcm91dGUgdG8gdGhlIGNvbXBvbmVudC5cbiAqIFRoaXMgY29tcG9uZW50IGlzIHVzZWQgaW50ZXJuYWxseSBieSB0aGUgcHJvZHVjZWQgcGFnZSByb3V0ZXIgY29tcG9uZW50cy5cbiAqXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBUaGUgY2hpbGRyZW4gdG8gcmVuZGVyLlxuICogQHBhcmFtIHBhZ2VSb3V0ZSAtIFRoZSBjdXJyZW50IHBhZ2Ugcm91dGUuXG4gKiBAcmV0dXJucyBUaGUgcHJvdmlkZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBQYWdlUm91dGVQcm92aWRlciA9ICh7IGNoaWxkcmVuLCBwYWdlUm91dGUsIH0pID0+IChfanN4KEFwcFBhZ2VSb3V0ZUNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHBhZ2VSb3V0ZSwgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbiIsImV4cG9ydCB2YXIgUm91dGVOb2RlVHlwZTtcbihmdW5jdGlvbiAoUm91dGVOb2RlVHlwZSkge1xuICAgIFJvdXRlTm9kZVR5cGVbXCJSb3V0ZXNcIl0gPSBcInJvdXRlc1wiO1xuICAgIFJvdXRlTm9kZVR5cGVbXCJQYXRoXCJdID0gXCJwYXRoXCI7XG59KShSb3V0ZU5vZGVUeXBlIHx8IChSb3V0ZU5vZGVUeXBlID0ge30pKTtcbiIsImltcG9ydCB7IEZyYWdtZW50LCBpc1ZhbGlkRWxlbWVudCwgQ2hpbGRyZW4gYXMgUmVhY3RDaGlsZHJlbiwgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYWdlUm91dGVzLCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZS1yb3V0ZXMuanMnO1xuaW1wb3J0IHsgUm91dGVOb2RlVHlwZSwgfSBmcm9tICcuL3BhZ2Utcm91dGVyLWludGVybmFsLXR5cGVzLmpzJztcbmNvbnN0IGlzUmVhY3RQYWdlUm91dGVzRWxlbWVudCA9IChyZWFjdFJvdXRlTm9kZSkgPT4ge1xuICAgIHJldHVybiBpc1ZhbGlkRWxlbWVudChyZWFjdFJvdXRlTm9kZSkgJiYgcmVhY3RSb3V0ZU5vZGUudHlwZSA9PT0gUGFnZVJvdXRlcztcbn07XG5jb25zdCBpc1JlYWN0Um91dGVFbGVtZW50ID0gKHJlYWN0Tm9kZSkgPT4gaXNWYWxpZEVsZW1lbnQocmVhY3ROb2RlKSAmJiByZWFjdE5vZGUudHlwZSA9PT0gUGFnZVJvdXRlcy5Sb3V0ZTtcbmNvbnN0IGlzUmVhY3RJbmRleFJvdXRlRWxlbWVudCA9IChyZWFjdE5vZGUpID0+IGlzVmFsaWRFbGVtZW50KHJlYWN0Tm9kZSkgJiYgcmVhY3ROb2RlLnR5cGUgPT09IFBhZ2VSb3V0ZXMuSW5kZXhSb3V0ZTtcbmNvbnN0IGlzUmVhY3RBbnlSb3V0ZUVsZW1lbnQgPSAocmVhY3ROb2RlKSA9PiBpc1ZhbGlkRWxlbWVudChyZWFjdE5vZGUpICYmIHJlYWN0Tm9kZS50eXBlID09PSBQYWdlUm91dGVzLkFueVJvdXRlO1xuY29uc3QgaXNSZWFjdEZyYWdtZW50RWxlbWVudCA9IChyZWFjdFJvdXRlTm9kZSkgPT4gaXNWYWxpZEVsZW1lbnQocmVhY3RSb3V0ZU5vZGUpICYmIHJlYWN0Um91dGVOb2RlLnR5cGUgPT09IEZyYWdtZW50O1xuLyoqXG4gKiBEZXNjcmliZXMgYSBSZWFjdCBub2RlIGJ5IHByb2R1Y2luZyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgUmVhY3Qgbm9kZS5cbiAqXG4gKiBAcGFyYW0gcmVhY3ROb2RlIC0gVGhlIHJlYWN0IG5vZGUgdG8gZGVzY3JpYmUuXG4gKiBAcmV0dXJucyBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHJlYWN0IG5vZGUuXG4gKi9cbmNvbnN0IGRlc2NyaWJlUmVhY3ROb2RlID0gKHJlYWN0Tm9kZSkgPT4ge1xuICAgIGlmIChyZWFjdE5vZGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHJlYWN0Tm9kZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVhY3ROb2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVhY3ROb2RlKTtcbiAgICB9XG4gICAgaWYgKGlzVmFsaWRFbGVtZW50KHJlYWN0Tm9kZSkpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFR5cGUgPSByZWFjdE5vZGUudHlwZTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHR5cGVvZiBlbGVtZW50VHlwZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gZWxlbWVudFR5cGVcbiAgICAgICAgICAgIDogdHlwZW9mIGVsZW1lbnRUeXBlID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgPyBlbGVtZW50VHlwZS5kaXNwbGF5TmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VHlwZS5uYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICdVbmtub3duJ1xuICAgICAgICAgICAgICAgIDogJ1Vua25vd24nO1xuICAgICAgICByZXR1cm4gYDwke25hbWV9IC8+YDtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlYWN0Tm9kZSk7XG59O1xuY2xhc3MgSW52YWxpZFJvdXRlc1JlYWN0Tm9kZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHJlYWN0Tm9kZSkge1xuICAgICAgICBzdXBlcihgSW52YWxpZCBSZWFjdCBub2RlIGZvciBwYWdlIHJvdXRlczogJHtkZXNjcmliZVJlYWN0Tm9kZShyZWFjdE5vZGUpfS4gXFxuU2VlOiBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy9leHRlbnNpb24tcG9pbnRzL2FwcC1wYWdlcy9wYWdlLXJvdXRpbmdgKTtcbiAgICB9XG59XG5jb25zdCBhZGRSb3V0ZSA9IChwYXJlbnROb2RlLCBjaGlsZE5vZGUpID0+IHtcbiAgICBpZiAoIXBhcmVudE5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbiA9IFtdO1xuICAgIH1cbiAgICBwYXJlbnROb2RlLmNoaWxkcmVuLnB1c2goY2hpbGROb2RlKTtcbn07XG4vKipcbiAqIENvbnZlcnRzIGEgcm91dGVzIGVsZW1lbnQgdG8gYSByb3V0ZXMgbm9kZSBieSByZWN1cnNpdmVseSBjb252ZXJ0aW5nIHRoZSByb3V0ZXMgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHJlYWN0Um91dGVzRWxlbWVudCAtIFRoZSByb3V0ZXMgZWxlbWVudCB0byBjb252ZXJ0LlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCByb3V0ZXMgbm9kZS5cbiAqL1xuZnVuY3Rpb24gY29udmVydFJlYWN0Um91dGVzRWxlbWVudChyZWFjdFJvdXRlc0VsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhdGgsIGxheW91dENvbXBvbmVudCwgY2hpbGRyZW4gfSA9IHJlYWN0Um91dGVzRWxlbWVudC5wcm9wcztcbiAgICBjb25zdCByb3V0ZXNOb2RlID0ge1xuICAgICAgICB0eXBlOiBSb3V0ZU5vZGVUeXBlLlJvdXRlcyxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgbGF5b3V0Q29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICB9O1xuICAgIGNvbnZlcnRDaGlsZHJlblJlYWN0Um91dGVFbGVtZW50cyhyb3V0ZXNOb2RlLCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIHJvdXRlc05vZGU7XG59XG4vKipcbiAqIENvbnZlcnRzIHRoZSBjaGlsZHJlbiBvZiBhIHJvdXRlcyBlbGVtZW50IHRvIGEgcm91dGVzIG5vZGUgYnkgcmVjdXJzaXZlbHkgY29udmVydGluZyB0aGUgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHBhcmVudE5vZGUgLSBUaGUgcGFyZW50IG5vZGUgdG8gYWRkIHRoZSBjaGlsZHJlbiB0by5cbiAqIEBwYXJhbSBjaGlsZHJlbiAtIFRoZSBjaGlsZHJlbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMgdm9pZC5cbiAqL1xuZnVuY3Rpb24gY29udmVydENoaWxkcmVuUmVhY3RSb3V0ZUVsZW1lbnRzKHBhcmVudE5vZGUsIGNoaWxkcmVuKSB7XG4gICAgUmVhY3RDaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkID09IG51bGwgfHwgdHlwZW9mIGNoaWxkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWFjdFBhZ2VSb3V0ZXNFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVzTm9kZSA9IGNvbnZlcnRSZWFjdFJvdXRlc0VsZW1lbnQoY2hpbGQpO1xuICAgICAgICAgICAgYWRkUm91dGUocGFyZW50Tm9kZSwgcm91dGVzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNSZWFjdFJvdXRlRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aCwgY29tcG9uZW50LCBpZCB9ID0gY2hpbGQucHJvcHM7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU5vZGUgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogUm91dGVOb2RlVHlwZS5QYXRoLFxuICAgICAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFkZFJvdXRlKHBhcmVudE5vZGUsIHJvdXRlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNSZWFjdEluZGV4Um91dGVFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgICAgY29uc3QgeyBjb21wb25lbnQsIGlkIH0gPSBjaGlsZC5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTm9kZSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBSb3V0ZU5vZGVUeXBlLlBhdGgsXG4gICAgICAgICAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGRSb3V0ZShwYXJlbnROb2RlLCByb3V0ZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzUmVhY3RBbnlSb3V0ZUVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvbXBvbmVudCwgaWQgfSA9IGNoaWxkLnByb3BzO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVOb2RlID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IFJvdXRlTm9kZVR5cGUuUGF0aCxcbiAgICAgICAgICAgICAgICBwYXRoOiAnKicsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFkZFJvdXRlKHBhcmVudE5vZGUsIHJvdXRlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNSZWFjdEZyYWdtZW50RWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICAgIGNvbnZlcnRDaGlsZHJlblJlYWN0Um91dGVFbGVtZW50cyhwYXJlbnROb2RlLCBjaGlsZC5wcm9wcy5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFJvdXRlc1JlYWN0Tm9kZUVycm9yKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIHJlYWN0IG5vZGUgdG8gYSByb3V0ZXMgbm9kZSBieSByZWN1cnNpdmVseSBjb252ZXJ0aW5nIHRoZSByZWFjdCBub2RlLlxuICpcbiAqIEBwYXJhbSByZWFjdE5vZGUgLSBUaGUgcmVhY3Qgbm9kZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMgVGhlIGNvbnZlcnRlZCByb3V0ZXMgbm9kZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRSZWFjdFBhZ2VSb3V0ZXNFbGVtZW50ID0gKHJlYWN0Tm9kZSkgPT4ge1xuICAgIGlmIChpc1JlYWN0UGFnZVJvdXRlc0VsZW1lbnQocmVhY3ROb2RlKSkge1xuICAgICAgICByZXR1cm4gY29udmVydFJlYWN0Um91dGVzRWxlbWVudChyZWFjdE5vZGUpO1xuICAgIH1cbiAgICBpZiAoaXNSZWFjdEZyYWdtZW50RWxlbWVudChyZWFjdE5vZGUpKSB7XG4gICAgICAgIGNvbnN0IHJvb3ROb2RlID0ge1xuICAgICAgICAgICAgdHlwZTogUm91dGVOb2RlVHlwZS5Sb3V0ZXMsXG4gICAgICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgY29udmVydENoaWxkcmVuUmVhY3RSb3V0ZUVsZW1lbnRzKHJvb3ROb2RlLCByZWFjdE5vZGUucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgfVxuICAgIHRocm93IG5ldyBJbnZhbGlkUm91dGVzUmVhY3ROb2RlRXJyb3IocmVhY3ROb2RlKTtcbn07XG4iLCIvKipcbiAqIFRyaWUtYmFzZWQgVVJMIHJvdXRlci4gUm91dGVzIGFyZSBzcGxpdCBpbnRvIHBhdGggc2VnbWVudHMgYW5kIGFyZSBzdG9yZWQgaW4gYSBwcmVmaXggdHJlZSBmb3JcbiAqIE8obnVtYmVyLW9mLXBhdGgtc2VnbWVudHMpIGxvb2t1cC4gV2hlbiBtdWx0aXBsZSByb3V0ZSB0eXBlcyBtYXRjaCwgcHJpb3JpdHkgaXM6IHN0YXRpYyA+IHBhcmFtID4gd2lsZGNhcmQuXG4gKi9cbmNvbnN0IFdJTERDQVJEID0gJyonO1xuY29uc3Qgbm9ybWFsaXplUGF0aCA9IChwYXRoKSA9PiBgLyR7cGF0aC5yZXBsYWNlKC9cXC8rL2csICcvJykucmVwbGFjZSgvXFwvJC8sICcnKS5yZXBsYWNlKC9eXFwvLywgJycpfWA7XG5jb25zdCBzcGxpdFNlZ21lbnRzID0gKG5vcm1hbGl6ZWRQYXRoKSA9PiBub3JtYWxpemVkUGF0aCA9PT0gJy8nID8gW10gOiBub3JtYWxpemVkUGF0aC5zbGljZSgxKS5zcGxpdCgnLycpO1xuY29uc3QgaXNQYXJhbVNlZ21lbnQgPSAoc2VnbWVudCkgPT4gc2VnbWVudC5zdGFydHNXaXRoKCc6Jyk7XG5jb25zdCBnZXRQYXJhbU5hbWVGb3JTZWdtZW50ID0gKHNlZ21lbnQpID0+IHNlZ21lbnQuc2xpY2UoMSk7XG5jb25zdCBzYWZlRGVjb2RlVVJJQ29tcG9uZW50ID0gKHZhbHVlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn07XG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHNlYXJjaGVzIHRoZSB0cmllIGZvciBhbiBleGlzdGluZyByb3V0ZSB0aGF0IHdvdWxkIGNvbmZsaWN0XG4gKiB3aXRoIHRoZSBnaXZlbiBzZWdtZW50cy4gUmV0dXJucyB0aGUgY29uZmxpY3RpbmcgcGF0dGVybiwgb3IgbnVsbC5cbiAqL1xuY29uc3QgZmluZENvbmZsaWN0aW5nUGF0dGVybiA9IChub2RlLCBzZWdtZW50SW5kZXgsIHNlZ21lbnRzKSA9PiB7XG4gICAgaWYgKHNlZ21lbnRJbmRleCA9PT0gc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBub2RlLnBhdHRlcm4gPz8gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW3NlZ21lbnRJbmRleF07XG4gICAgaWYgKGlzUGFyYW1TZWdtZW50KHNlZ21lbnQpKSB7XG4gICAgICAgIGNvbnN0IHsgcGFyYW1DaGlsZHJlbiB9ID0gbm9kZTtcbiAgICAgICAgaWYgKHBhcmFtQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW1DaGlsZCBvZiBPYmplY3QudmFsdWVzKHBhcmFtQ2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZmluZENvbmZsaWN0aW5nUGF0dGVybihwYXJhbUNoaWxkLCBzZWdtZW50SW5kZXggKyAxLCBzZWdtZW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzZWdtZW50ID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gbm9kZS5jaGlsZHJlbj8uW1dJTERDQVJEXT8ucGF0dGVybiA/PyBudWxsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gbm9kZS5jaGlsZHJlbj8uW3NlZ21lbnRdO1xuICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmaW5kQ29uZmxpY3RpbmdQYXR0ZXJuKGNoaWxkTm9kZSwgc2VnbWVudEluZGV4ICsgMSwgc2VnbWVudHMpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbi8qKlxuICogUmVjdXJzaXZlbHkgd2Fsa3MgdGhlIHRyaWUgdG8gZmluZCBhIHJvdXRlIG1hdGNoaW5nIHRoZSBnaXZlbiBzZWdtZW50cy5cbiAqIFRyaWVzIHN0YXRpYyBjaGlsZHJlbiwgdGhlbiBwYXJhbSBjaGlsZHJlbiwgdGhlbiB3aWxkY2FyZCAocHJpb3JpdHkgb3JkZXIpLlxuICovXG5jb25zdCBmaW5kTWF0Y2hpbmdSb3V0ZSA9IChub2RlLCBwYXJhbXMsIHNlZ21lbnRzLCBzZWdtZW50SW5kZXgpID0+IHtcbiAgICBpZiAoc2VnbWVudEluZGV4ID09PSBzZWdtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gT25seSB0ZXJtaW5hbCBub2RlcyBoYXZlIGRhdGEgYXNzaWduZWRcbiAgICAgICAgaWYgKCdkYXRhJyBpbiBub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGE6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudEluZGV4XTtcbiAgICAvLyBUcnkgbWF0Y2hlcyBpbiBwcmlvcml0eSBvcmRlcjogc3RhdGljID4gcGFyYW0gPiB3aWxkY2FyZFxuICAgIGNvbnN0IGNoaWxkTm9kZSA9IG5vZGUuY2hpbGRyZW4/LltzZWdtZW50XTtcbiAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRNYXRjaGluZ1JvdXRlKGNoaWxkTm9kZSwgcGFyYW1zLCBzZWdtZW50cywgc2VnbWVudEluZGV4ICsgMSk7XG4gICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBjb25zdCB7IHBhcmFtQ2hpbGRyZW4gfSA9IG5vZGU7XG4gICAgaWYgKHBhcmFtQ2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChjb25zdCBbcGFyYW1OYW1lLCBwYXJhbUNoaWxkXSBvZiBPYmplY3QuZW50cmllcyhwYXJhbUNoaWxkcmVuKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZmluZE1hdGNoaW5nUm91dGUocGFyYW1DaGlsZCwgeyAuLi5wYXJhbXMsIFtwYXJhbU5hbWVdOiBzYWZlRGVjb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpIH0sIHNlZ21lbnRzLCBzZWdtZW50SW5kZXggKyAxKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB3aWxkY2FyZE5vZGUgPSBub2RlLmNoaWxkcmVuPy5bV0lMRENBUkRdO1xuICAgIGlmICh3aWxkY2FyZE5vZGUgJiYgJ2RhdGEnIGluIHdpbGRjYXJkTm9kZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogd2lsZGNhcmROb2RlLmRhdGEsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICAgICAgW1dJTERDQVJEXTogc2VnbWVudHMuc2xpY2Uoc2VnbWVudEluZGV4KS5qb2luKCcvJyksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVHJpZVJvdXRlciBpbnN0YW5jZS4gQWZ0ZXIgY3JlYXRpb24sIHJvdXRlcyBjYW4gYmUgYWRkZWQgdG8gdGhlIHJvdXRlciB1c2luZyB0aGUgYWRkUm91dGUgbWV0aG9kLlxuICogUm91dGVzIGNhbiBiZSBtYXRjaGVkIHVzaW5nIHRoZSBtYXRjaFBhdGggbWV0aG9kLlxuICpcbiAqIFRoZSBvcmRlciB0aGF0IHJvdXRlcyBhcmUgYWRkZWQgZG9lcyBub3QgbWF0dGVyLiBUaGUgcm91dGVyIHdpbGwgYWx3YXlzIG1hdGNoIHRoZSBsb25nZXN0IHBvc3NpYmxlIHJvdXRlLlxuICpcbiAqIEBwYXJhbSBUUm91dGVEYXRhIC0gVGhlIHR5cGUgb2YgdGhlIHJvdXRlIGRhdGEgdGhhdCBjYW4gYmUgYXNzb2NpYXRlZCB3aXRoIGVhY2ggYWRkZWQgcm91dGVcbiAqIEByZXR1cm5zIEEgVHJpZVJvdXRlciBpbnN0YW5jZVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJpZVJvdXRlciA9ICgpID0+IHtcbiAgICBjb25zdCByb290Tm9kZSA9IHt9O1xuICAgIHJldHVybiB7XG4gICAgICAgIG1hdGNoUGF0aDogKHBhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplUGF0aChwYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRzID0gc3BsaXRTZWdtZW50cyhub3JtYWxpemVkUGF0aCk7XG4gICAgICAgICAgICByZXR1cm4gZmluZE1hdGNoaW5nUm91dGUocm9vdE5vZGUsIHt9LCBzZWdtZW50cywgMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFJvdXRlOiAocGF0aCwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVQYXRoKHBhdGgpO1xuICAgICAgICAgICAgY29uc3Qgc2VnbWVudHMgPSBzcGxpdFNlZ21lbnRzKG5vcm1hbGl6ZWRQYXRoKTtcbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIHRoZSByb3V0ZSBiZWZvcmUgd2Ugc3RhcnQgYWRkaW5nIGl0IHRvIHRoZSB0cmllIHRvIGF2b2lkIGFkZGluZyBpbnZhbGlkIHJvdXRlc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoc2VnbWVudCA9PT0gV0lMRENBUkQgJiYgaSAhPT0gc2VnbWVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFdpbGRjYXJkIG11c3QgYmUgdGhlIGxhc3Qgc2VnbWVudCBpbiByb3V0ZTogJHtub3JtYWxpemVkUGF0aH0uIFxcblNlZTogaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2lvbnMvZXh0ZW5zaW9uLXBvaW50cy9hcHAtcGFnZXMvcGFnZS1yb3V0aW5nI3dpbGRjYXJkLXJvdXRlcy1zcGxhdC1yb3V0ZXNgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzUGFyYW1TZWdtZW50KHNlZ21lbnQpICYmIGdldFBhcmFtTmFtZUZvclNlZ21lbnQoc2VnbWVudCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCByb3V0ZSBcIiR7bm9ybWFsaXplZFBhdGh9XCI6IHBhcmFtIHNlZ21lbnQgYXQgcG9zaXRpb24gJHtpfSBoYXMgYW4gZW1wdHkgbmFtZS4gXFxuU2VlOiBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy9leHRlbnNpb24tcG9pbnRzL2FwcC1wYWdlcy9wYWdlLXJvdXRpbmcjcGF0aC1wYXJhbWV0ZXJzYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29uZmxpY3RpbmdQYXR0ZXJuID0gZmluZENvbmZsaWN0aW5nUGF0dGVybihyb290Tm9kZSwgMCwgc2VnbWVudHMpO1xuICAgICAgICAgICAgaWYgKGNvbmZsaWN0aW5nUGF0dGVybikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm91dGUgY29uZmxpY3Q6IFwiJHtub3JtYWxpemVkUGF0aH1cIiBjb25mbGljdHMgd2l0aCBleGlzdGluZyByb3V0ZSBcIiR7Y29uZmxpY3RpbmdQYXR0ZXJufVwiLiBcXG5TZWU6IGh0dHBzOi8vZGV2ZWxvcGVycy5odWJzcG90LmNvbS9kb2NzL2FwcHMvZGV2ZWxvcGVyLXBsYXRmb3JtL2FkZC1mZWF0dXJlcy91aS1leHRlbnNpb25zL2V4dGVuc2lvbi1wb2ludHMvYXBwLXBhZ2VzL3BhZ2Utcm91dGluZ2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQWRkIHRoZSByb3V0ZSB0byB0aGUgdHJpZVxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSByb290Tm9kZTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2VnbWVudCBvZiBzZWdtZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChpc1BhcmFtU2VnbWVudChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gKGN1cnJlbnQucGFyYW1DaGlsZHJlbiA/Pz0ge30pW2dldFBhcmFtTmFtZUZvclNlZ21lbnQoc2VnbWVudCldID8/PSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSAoY3VycmVudC5jaGlsZHJlbiA/Pz0ge30pW3NlZ21lbnRdID8/PSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50LmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgY3VycmVudC5wYXR0ZXJuID0gbm9ybWFsaXplZFBhdGg7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4iLCJpbXBvcnQgeyBnZXRXb3JrZXJHbG9iYWxzIH0gZnJvbSAnLi4vLi4vaW50ZXJuYWwvZ2xvYmFsLXV0aWxzLmpzJztcbmltcG9ydCB7IHVzZU1vY2tzQ29udGV4dCB9IGZyb20gJy4uLy4uL2ludGVybmFsL2hvb2stdXRpbHMuanMnO1xuZXhwb3J0IGNvbnN0IHVzZUFwcFBhZ2VMb2NhdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBtb2Nrc0NvbnRleHQgPSB1c2VNb2Nrc0NvbnRleHQoKTtcbiAgICBpZiAoIW1vY2tzQ29udGV4dCkge1xuICAgICAgICAvLyBJZiBubyBtb2NrcyBjb250ZXh0IGlzIHByb3ZpZGVkLCBjYWxsIHRoZSBvcmlnaW5hbCBob29rIGltcGxlbWVudGF0aW9uIHByb3ZpZGVkIGJ5XG4gICAgICAgIC8vIHRoZSB3b3JrZXIgZ2xvYmFscy5cbiAgICAgICAgcmV0dXJuIGdldFdvcmtlckdsb2JhbHMoKS5oc1dvcmtlckFQSS51c2VBcHBQYWdlTG9jYXRpb24oKTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCBjYWxsIHRoZSBtb2NrIGltcGxlbWVudGF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBtb2NrcyBjb250ZXh0LlxuICAgIGNvbnN0IHsgdXNlQXBwUGFnZUxvY2F0aW9uIH0gPSBtb2Nrc0NvbnRleHQ7XG4gICAgcmV0dXJuIHVzZUFwcFBhZ2VMb2NhdGlvbigpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRW1wdHlTdGF0ZSwgVGV4dCB9IGZyb20gJy4uL3NoYXJlZC5zeW5jZWQvcmVtb3RlQ29tcG9uZW50cy5zeW5jZWQuanMnO1xuaW1wb3J0IHsgQXBwUGFnZVJvdXRlUHJvdmlkZXIgfSBmcm9tICcuL2ludGVybmFsL2FwcC1wYWdlLXJvdXRlLWNvbnRleHQuanMnO1xuaW1wb3J0IHsgY29udmVydFJlYWN0UGFnZVJvdXRlc0VsZW1lbnQgfSBmcm9tICcuL2ludGVybmFsL2NvbnZlcnQtcGFnZS1yb3V0ZXMtcmVhY3QtZWxlbWVudHMuanMnO1xuaW1wb3J0IHsgUm91dGVOb2RlVHlwZSwgfSBmcm9tICcuL2ludGVybmFsL3BhZ2Utcm91dGVyLWludGVybmFsLXR5cGVzLmpzJztcbmltcG9ydCB7IGNyZWF0ZVRyaWVSb3V0ZXIgfSBmcm9tICcuL2ludGVybmFsL3RyaWUtcm91dGVyLmpzJztcbmltcG9ydCB7IHVzZUFwcFBhZ2VMb2NhdGlvbiB9IGZyb20gJy4vaW50ZXJuYWwvdXNlQXBwUGFnZUxvY2F0aW9uLmpzJztcbi8qKlxuICogQWRkcyB0aGUgcm91dGVzIHRvIHRoZSB0cmllIHJvdXRlci5cbiAqXG4gKiBAcGFyYW0gdHJpZVJvdXRlciAtIFRoZSB0cmllIHJvdXRlciB0byBhZGQgdGhlIHJvdXRlcyB0by5cbiAqIEBwYXJhbSBzZWVuUm91dGVJZHMgLSBUaGUgc2V0IG9mIHJvdXRlIGlkcyB0aGF0IGhhdmUgYWxyZWFkeSBiZWVuIHNlZW4uXG4gKiBAcGFyYW0gcm91dGVOb2RlIC0gVGhlIG5vZGUgdG8gYWRkIHRoZSByb3V0ZXMgdG8uXG4gKiBAcGFyYW0gcGFyZW50UGF0aCAtIFRoZSBwYXRoIHRvIHRoZSBwYXJlbnQgbm9kZS5cbiAqIEBwYXJhbSBwYXJlbnRMYXlvdXRzIC0gVGhlIGxheW91dHMgdG8gYXBwbHkgdG8gdGhlIG5vZGUuXG4gKi9cbmNvbnN0IGFkZFJvdXRlcyA9ICh0cmllUm91dGVyLCBzZWVuUm91dGVJZHMsIHJvdXRlTm9kZSwgcGFyZW50UGF0aCwgcGFyZW50TGF5b3V0cykgPT4ge1xuICAgIGlmIChyb3V0ZU5vZGUudHlwZSA9PT0gUm91dGVOb2RlVHlwZS5Sb3V0ZXMpIHtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gcGFyZW50UGF0aCArIChyb3V0ZU5vZGUucGF0aCA/PyAnJyk7XG4gICAgICAgIGNvbnN0IGxheW91dHMgPSByb3V0ZU5vZGUubGF5b3V0Q29tcG9uZW50XG4gICAgICAgICAgICA/IFsuLi5wYXJlbnRMYXlvdXRzLCByb3V0ZU5vZGUubGF5b3V0Q29tcG9uZW50XVxuICAgICAgICAgICAgOiBwYXJlbnRMYXlvdXRzO1xuICAgICAgICBpZiAocm91dGVOb2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkUm91dGVOb2RlIG9mIHJvdXRlTm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGFkZFJvdXRlcyh0cmllUm91dGVyLCBzZWVuUm91dGVJZHMsIGNoaWxkUm91dGVOb2RlIC8qIHJvdXRlTm9kZSAqLywgcHJlZml4IC8qIHBhcmVudFBhdGggKi8sIGxheW91dHMgLyogcGFyZW50TGF5b3V0cyAqLyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGZ1bGxQYXRoID0gcGFyZW50UGF0aCArIHJvdXRlTm9kZS5wYXRoO1xuICAgICAgICBpZiAocm91dGVOb2RlLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChzZWVuUm91dGVJZHMuaGFzKHJvdXRlTm9kZS5pZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSByb3V0ZSBpZDogXCIke3JvdXRlTm9kZS5pZH1cIi4gXFxuU2VlOiBodHRwczovL2RldmVsb3BlcnMuaHVic3BvdC5jb20vZG9jcy9hcHBzL2RldmVsb3Blci1wbGF0Zm9ybS9hZGQtZmVhdHVyZXMvdWktZXh0ZW5zaW9ucy9leHRlbnNpb24tcG9pbnRzL2FwcC1wYWdlcy9wYWdlLXJvdXRpbmcjcm91dGUtaWRzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWVuUm91dGVJZHMuYWRkKHJvdXRlTm9kZS5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJpZVJvdXRlci5hZGRSb3V0ZShmdWxsUGF0aCwge1xuICAgICAgICAgICAgY29tcG9uZW50OiByb3V0ZU5vZGUuY29tcG9uZW50LFxuICAgICAgICAgICAgbGF5b3V0czogcGFyZW50TGF5b3V0cyxcbiAgICAgICAgICAgIGlkOiByb3V0ZU5vZGUuaWQsXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4vKipcbiAqIFRoZSBmdW5jdGlvbiB0eXBlIGZvciBbY3JlYXRlUGFnZVJvdXRlcl0oaHR0cHM6Ly9kZXZlbG9wZXJzLmh1YnNwb3QuY29tL2RvY3MvYXBwcy9kZXZlbG9wZXItcGxhdGZvcm0vYWRkLWZlYXR1cmVzL3VpLWV4dGVuc2liaWxpdHkvYXBwLXBhZ2VzL3JlZmVyZW5jZSNjcmVhdGVwYWdlcm91dGVyKS5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHRzeFxuICogY29uc3QgUGFnZVJvdXRlciA9IGNyZWF0ZVBhZ2VSb3V0ZXIoXG4gKiAgIDxQYWdlUm91dGVzIGxheW91dENvbXBvbmVudD17QXBwTGF5b3V0fT5cbiAqICAgICA8UGFnZVJvdXRlcy5JbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZVBhZ2V9IGlkPVwiaG9tZVwiIC8+XG4gKiAgICAgPFBhZ2VSb3V0ZXMuUm91dGUgcGF0aD1cIi9kb2NzXCIgY29tcG9uZW50PXtEb2NzUGFnZX0gLz5cbiAqICAgICA8UGFnZVJvdXRlcyBwYXRoPVwiL2N1c3RvbWVyc1wiIGxheW91dENvbXBvbmVudD17Q3VzdG9tZXJzTGF5b3V0fT5cbiAqICAgICAgIDxQYWdlUm91dGVzLkluZGV4Um91dGUgY29tcG9uZW50PXtMaXN0Q3VzdG9tZXJzUGFnZX0gLz5cbiAqICAgICAgIDxQYWdlUm91dGVzLlJvdXRlIHBhdGg9XCIvOmN1c3RvbWVySWRcIiBjb21wb25lbnQ9e1ZpZXdDdXN0b21lclBhZ2V9IC8+XG4gKiAgICAgPC9QYWdlUm91dGVzPlxuICogICAgIDxQYWdlUm91dGVzLkFueVJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmRQYWdlfSAvPlxuICogICA8L1BhZ2VSb3V0ZXM+XG4gKiApO1xuICpcbiAqIGZ1bmN0aW9uIEFwcFBhZ2VzKCkge1xuICogICByZXR1cm4gPFBhZ2VSb3V0ZXIgLz47XG4gKiB9XG4gKlxuICogaHVic3BvdC5leHRlbmQ8XCJwYWdlc1wiPigoKSA9PiA8QXBwUGFnZXMgLz4pO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHJvdXRlcyBUaGUgcm91dGVzIHRvIHJlbmRlci5cbiAqIEByZXR1cm5zIFRoZSBwYWdlIHJvdXRlciBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVQYWdlUm91dGVyID0gKHJlYWN0UGFnZVJvdXRlc0VsZW1lbnQpID0+IHtcbiAgICAvLyBWYWxpZGF0aW9uIGVycm9ycyAoZHVwbGljYXRlIHJvdXRlIGlkcywgaW52YWxpZCB3aWxkY2FyZHMsIGV0Yy4pIGFyZSBjYXB0dXJlZFxuICAgIC8vIGFuZCBkZWZlcnJlZCB0byByZW5kZXIgdGltZSBpbnN0ZWFkIG9mIGJlaW5nIHRocm93biBoZXJlLiBUaGlzIGlzIGJlY2F1c2VcbiAgICAvLyBjcmVhdGVQYWdlUm91dGVyIGlzIHR5cGljYWxseSBjYWxsZWQgYXQgbW9kdWxlIHRvcCBsZXZlbCwgYmVmb3JlXG4gICAgLy8gaHVic3BvdC5leHRlbmQoKSByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbi4gSWYgd2UgdGhyb3cgaGVyZSwgdGhlIG1vZHVsZVxuICAgIC8vIGZhaWxzIHRvIGV2YWx1YXRlIGFuZCB0aGUgZXh0ZW5zaW9uIGhvc3QgY2FuIG9ubHkgc2hvdyBhIGdlbmVyaWMgXCJ1bmFibGUgdG9cbiAgICAvLyBpbml0aWFsaXplIGV4dGVuc2lvblwiIG1lc3NhZ2Ug4oCUIHRoZSBkZXZlbG9wZXIgbmV2ZXIgc2VlcyB0aGUgc3BlY2lmaWMgZXJyb3IuXG4gICAgLy8gQnkgZGVmZXJyaW5nIHRoZSB0aHJvdyB0byB0aGUgUGFnZVJvdXRlciBjb21wb25lbnQncyByZW5kZXIsIHRoZSBlcnJvclxuICAgIC8vIG9jY3VycyBpbnNpZGUgdGhlIGV4dGVuc2lvbiBsaWZlY3ljbGUgd2hlcmUgdGhlIGhvc3QgY2FuIGRpc3BsYXkgaXQuXG4gICAgbGV0IGluaXRSZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgUmVhY3QgZWxlbWVudCB0byBhIHJvdXRlIG5vZGUgYW5kIGFkZCB0aGVtIHRvIGEgdHJpZSByb3V0ZXIuXG4gICAgICAgIGNvbnN0IHJvb3RSb3V0ZU5vZGUgPSBjb252ZXJ0UmVhY3RQYWdlUm91dGVzRWxlbWVudChyZWFjdFBhZ2VSb3V0ZXNFbGVtZW50KTtcbiAgICAgICAgY29uc3QgdHJpZVJvdXRlciA9IGNyZWF0ZVRyaWVSb3V0ZXIoKTtcbiAgICAgICAgY29uc3Qgc2VlblJvdXRlSWRzID0gbmV3IFNldCgpO1xuICAgICAgICBhZGRSb3V0ZXModHJpZVJvdXRlciwgc2VlblJvdXRlSWRzLCByb290Um91dGVOb2RlIC8qIHJvdXRlTm9kZSAqLywgJycgLyogcGFyZW50UGF0aCAqLywgW10gLyogcGFyZW50TGF5b3V0cyAqLyk7XG4gICAgICAgIGluaXRSZXN1bHQgPSB7IG9rOiB0cnVlLCB0cmllUm91dGVyIH07XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGluaXRSZXN1bHQgPSB7XG4gICAgICAgICAgICBvazogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogZSBpbnN0YW5jZW9mIEVycm9yID8gZSA6IG5ldyBFcnJvcihTdHJpbmcoZSkpLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBOb3cgY3JlYXRlIHRoZSBQYWdlUm91dGVyIGNvbXBvbmVudCB0aGF0IHVzZXMgdGhlIHRyaWUgcm91dGVyIHRvIG1hdGNoIHRoZSBjdXJyZW50IGFwcCBwYWdlIGxvY2F0aW9uLlxuICAgIC8vIFRoZSBjb21wb25lbnQgd2lsbCByZW5kZXIgdGhlIGNvbnRlbnQgb2YgdGhlIG1hdGNoZWQgcm91dGUuXG4gICAgLy8gVGhlIGNvbXBvbmVudCB3aWxsIGFsc28gcHJvdmlkZSB0aGUgbWF0Y2hlZCBhcHAgcGFnZSByb3V0ZSB0byB0aGUgY29udGVudCBvZiB0aGUgbWF0Y2hlZCByb3V0ZS5cbiAgICBjb25zdCBQYWdlUm91dGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIWluaXRSZXN1bHQub2spIHtcbiAgICAgICAgICAgIHRocm93IGluaXRSZXN1bHQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyB0cmllUm91dGVyIH0gPSBpbml0UmVzdWx0O1xuICAgICAgICBjb25zdCBhcHBQYWdlTG9jYXRpb24gPSB1c2VBcHBQYWdlTG9jYXRpb24oKTtcbiAgICAgICAgY29uc3QgeyBwYXRoOiBhcHBQYWdlUGF0aCwgcGFyYW1zOiBhcHBQYWdlUGFyYW1zIH0gPSBhcHBQYWdlTG9jYXRpb247XG4gICAgICAgIGNvbnN0IG1hdGNoZWRSb3V0ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRyaWVSb3V0ZXIubWF0Y2hQYXRoKGFwcFBhZ2VQYXRoKTtcbiAgICAgICAgfSwgW2FwcFBhZ2VQYXRoXSk7XG4gICAgICAgIGNvbnN0IG1hdGNoZWRBcHBQYWdlUm91dGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVkUm91dGVcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJZDogbWF0Y2hlZFJvdXRlLmRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6IGFwcFBhZ2VQYXRoLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm1hdGNoZWRSb3V0ZS5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5hcHBQYWdlUGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogYXBwUGFnZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogYXBwUGFnZVBhcmFtcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9LCBbbWF0Y2hlZFJvdXRlLCBhcHBQYWdlUGF0aCwgYXBwUGFnZVBhcmFtc10pO1xuICAgICAgICBjb25zdCByb3V0ZURhdGEgPSBtYXRjaGVkUm91dGU/LmRhdGE7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghcm91dGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogTG9jYWxpemUgdGhlIHRpdGxlIGFuZCBib2R5IHRleHQuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KEVtcHR5U3RhdGUsIHsgdGl0bGU6IFwiUGFnZSBub3QgZm91bmRcIiwgbGF5b3V0OiBcInZlcnRpY2FsXCIsIHJldmVyc2VPcmRlcjogdHJ1ZSwgY2hpbGRyZW46IF9qc3goVGV4dCwgeyBjaGlsZHJlbjogXCJUaGlzIGFwcCBwYWdlIGRvZXMgbm90IGV4aXN0LlwiIH0pIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IENvbXBvbmVudCA9IHJvdXRlRGF0YS5jb21wb25lbnQ7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IF9qc3goQ29tcG9uZW50LCB7fSk7XG4gICAgICAgICAgICAvLyBXcmFwIHRoZSByb3V0ZSBjb21wb25lbnQgd2l0aCBhbnkgYW5jZXN0b3IgbGF5b3V0IGNvbXBvbmVudHMgZm91bmQgaW4gdGhlIHJvdXRlIHRyZWUuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm91dGVEYXRhLmxheW91dHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBMYXlvdXQgPSByb3V0ZURhdGEubGF5b3V0c1tpXTtcbiAgICAgICAgICAgICAgICBub2RlID0gX2pzeChMYXlvdXQsIHsgY2hpbGRyZW46IG5vZGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSwgW3JvdXRlRGF0YV0pO1xuICAgICAgICByZXR1cm4gKF9qc3goQXBwUGFnZVJvdXRlUHJvdmlkZXIsIHsgcGFnZVJvdXRlOiBtYXRjaGVkQXBwUGFnZVJvdXRlLCBjaGlsZHJlbjogY29udGVudCB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gUGFnZVJvdXRlcjtcbn07XG4iLCJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgRmxleCxcbiAgSGVhZGluZyxcbiAgTG9hZGluZ1NwaW5uZXIsXG4gIFRhYmxlLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlQ2VsbCxcbiAgVGFibGVIZWFkLFxuICBUYWJsZUhlYWRlcixcbiAgVGFibGVSb3csXG4gIFRleHQsXG4gIHVzZUNybVNlYXJjaCxcbn0gZnJvbSAnQGh1YnNwb3QvdWktZXh0ZW5zaW9ucyc7XG5cbmltcG9ydCB7XG4gIFBhZ2VCcmVhZGNydW1icyxcbiAgUGFnZUxpbmssXG4gIFBhZ2VUaXRsZSxcbn0gZnJvbSAnQGh1YnNwb3QvdWktZXh0ZW5zaW9ucy9wYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQ09OVEFDVFNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgY29udGFjdHMgPSB1c2VDcm1TZWFyY2goe1xuICAgIG9iamVjdFR5cGU6ICdjb250YWN0cycsXG4gICAgcHJvcGVydGllczogWydmaXJzdG5hbWUnLCAnbGFzdG5hbWUnLCAnZW1haWwnXSxcbiAgICBwYWdlTGVuZ3RoOiA1LFxuICB9KTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBERUFMU1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBkZWFscyA9IHVzZUNybVNlYXJjaCh7XG4gICAgb2JqZWN0VHlwZTogJ2RlYWxzJyxcbiAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICAnZGVhbG5hbWUnLFxuICAgICAgJ2Ftb3VudCcsXG4gICAgICAnZGVhbHN0YWdlJyxcbiAgICAgICdwaXBlbGluZScsXG4gICAgICAnY2xvc2VkYXRlJyxcbiAgICBdLFxuICAgIHBhZ2VMZW5ndGg6IDUsXG4gIH0pO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIERFQUwgVkFMVUVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3QgZGVhbFZhbHVlID0gZGVhbHMucmVzdWx0cy5yZWR1Y2UoKHRvdGFsLCBkZWFsKSA9PiB7XG4gICAgY29uc3QgYW1vdW50ID0gTnVtYmVyKGRlYWwucHJvcGVydGllcy5hbW91bnQgfHwgMCk7XG4gICAgcmV0dXJuIHRvdGFsICsgKE51bWJlci5pc05hTihhbW91bnQpID8gMCA6IGFtb3VudCk7XG4gIH0sIDApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgUEFHRSBIRUFERVJcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XG5cbiAgICAgIDxQYWdlQnJlYWRjcnVtYnM+XG4gICAgICAgIDxQYWdlQnJlYWRjcnVtYnMuQ3VycmVudD5cbiAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgPC9QYWdlQnJlYWRjcnVtYnMuQ3VycmVudD5cbiAgICAgIDwvUGFnZUJyZWFkY3J1bWJzPlxuXG4gICAgICA8RmxleFxuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBqdXN0aWZ5PVwiYmV0d2VlblwiXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8UGFnZVRpdGxlPlNhbGVzIERhc2hib2FyZDwvUGFnZVRpdGxlPlxuXG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICBPdmVydmlldyBvZiB5b3VyIEh1YlNwb3QgQ1JNIHBlcmZvcm1hbmNlXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8UGFnZUxpbmsgdG89XCIvZG9jc1wiPlxuICAgICAgICAgIDxCdXR0b24+VmlldyBDUk0gRGV0YWlsczwvQnV0dG9uPlxuICAgICAgICA8L1BhZ2VMaW5rPlxuICAgICAgPC9GbGV4PlxuXG4gICAgICA8RGl2aWRlciAvPlxuXG4gICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFNVTU1BUllcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT0gKi99XG5cbiAgICAgIDxGbGV4IGRpcmVjdGlvbj1cInJvd1wiIGdhcD1cImxhcmdlXCI+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQ+Q29udGFjdHM8L1RleHQ+XG5cbiAgICAgICAgICB7Y29udGFjdHMuaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxIZWFkaW5nPntjb250YWN0cy50b3RhbH08L0hlYWRpbmc+XG5cbiAgICAgICAgICAgICAgPFRleHQ+VG90YWwgY29udGFjdHMgaW4gSHViU3BvdDwvVGV4dD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQ+RGVhbHM8L1RleHQ+XG5cbiAgICAgICAgICB7ZGVhbHMuaXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxIZWFkaW5nPntkZWFscy50b3RhbH08L0hlYWRpbmc+XG5cbiAgICAgICAgICAgICAgPFRleHQ+VG90YWwgZGVhbHMgaW4gSHViU3BvdDwvVGV4dD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgPFRleHQ+RGVhbCBWYWx1ZTwvVGV4dD5cblxuICAgICAgICAgIHtkZWFscy5pc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEhlYWRpbmc+XG4gICAgICAgICAgICAgICAg4oK5e2RlYWxWYWx1ZS50b0xvY2FsZVN0cmluZygnZW4tSU4nKX1cbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgICAgICAgIDxUZXh0PlZhbHVlIG9mIGN1cnJlbnQgcGFnZTwvVGV4dD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9GbGV4PlxuXG4gICAgICA8RGl2aWRlciAvPlxuXG4gICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFJFQ0VOVCBDT05UQUNUU1xuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cblxuICAgICAgPEhlYWRpbmc+UmVjZW50IENvbnRhY3RzPC9IZWFkaW5nPlxuXG4gICAgICB7Y29udGFjdHMuZXJyb3IgPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIEVycm9yIGxvYWRpbmcgY29udGFjdHM6IHtjb250YWN0cy5lcnJvci5tZXNzYWdlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogY29udGFjdHMuaXNMb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5OYW1lPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+RW1haWw8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5Db250YWN0IElEPC9UYWJsZUhlYWRlcj5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuXG4gICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICB7Y29udGFjdHMucmVzdWx0cy5tYXAoKGNvbnRhY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPVxuICAgICAgICAgICAgICAgICAgY29udGFjdC5wcm9wZXJ0aWVzLmZpcnN0bmFtZSB8fCAnJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID1cbiAgICAgICAgICAgICAgICAgIGNvbnRhY3QucHJvcGVydGllcy5sYXN0bmFtZSB8fCAnJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxOYW1lID1cbiAgICAgICAgICAgICAgICAgIGAke2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtjb250YWN0Lm9iamVjdElkfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICB7ZnVsbE5hbWUgfHwgJ1VubmFtZWQgQ29udGFjdCd9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbnRhY3QucHJvcGVydGllcy5lbWFpbCB8fCAnLSd9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAge2NvbnRhY3Qub2JqZWN0SWR9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgIDwvVGFibGU+XG5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJiZXR3ZWVuXCJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgUGFnZSB7Y29udGFjdHMucGFnaW5hdGlvbi5jdXJyZW50UGFnZX1cbiAgICAgICAgICAgIDwvVGV4dD5cblxuICAgICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwicm93XCIgZ2FwPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICFjb250YWN0cy5wYWdpbmF0aW9uLmhhc1ByZXZpb3VzUGFnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgIGNvbnRhY3RzLnBhZ2luYXRpb24ucHJldmlvdXNQYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICFjb250YWN0cy5wYWdpbmF0aW9uLmhhc05leHRQYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRhY3RzLnBhZ2luYXRpb24ubmV4dFBhZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciAvPlxuXG4gICAgICB7LyogPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgIFJFQ0VOVCBERUFMU1xuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL31cblxuICAgICAgPEhlYWRpbmc+UmVjZW50IERlYWxzPC9IZWFkaW5nPlxuXG4gICAgICB7ZGVhbHMuZXJyb3IgPyAoXG4gICAgICAgIDxUZXh0PlxuICAgICAgICAgIEVycm9yIGxvYWRpbmcgZGVhbHM6IHtkZWFscy5lcnJvci5tZXNzYWdlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogZGVhbHMuaXNMb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5EZWFsIE5hbWU8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5BbW91bnQ8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5TdGFnZTwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyPkRlYWwgSUQ8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG5cbiAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgIHtkZWFscy5yZXN1bHRzLm1hcCgoZGVhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlYWxOYW1lID1cbiAgICAgICAgICAgICAgICAgIGRlYWwucHJvcGVydGllcy5kZWFsbmFtZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFtb3VudCA9XG4gICAgICAgICAgICAgICAgICBkZWFsLnByb3BlcnRpZXMuYW1vdW50O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVhbFN0YWdlID1cbiAgICAgICAgICAgICAgICAgIGRlYWwucHJvcGVydGllcy5kZWFsc3RhZ2U7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17ZGVhbC5vYmplY3RJZH0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAge2RlYWxOYW1lIHx8ICdVbm5hbWVkIERlYWwnfVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cblxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgIHthbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYOKCuSR7TnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0xvY2FsZVN0cmluZygnZW4tSU4nKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICfigrkwJ31cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGVhbFN0YWdlIHx8ICdOb3Qgc2V0J31cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICB7ZGVhbC5vYmplY3RJZH1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cblxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgICAganVzdGlmeT1cImJldHdlZW5cIlxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICBQYWdlIHtkZWFscy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJyb3dcIiBnYXA9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgIWRlYWxzLnBhZ2luYXRpb24uaGFzUHJldmlvdXNQYWdlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgZGVhbHMucGFnaW5hdGlvbi5wcmV2aW91c1BhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgIWRlYWxzLnBhZ2luYXRpb24uaGFzTmV4dFBhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZGVhbHMucGFnaW5hdGlvbi5uZXh0UGFnZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59OyIsImltcG9ydCB7XG4gIERpdmlkZXIsXG4gIEhlYWRpbmcsXG4gIExvYWRpbmdTcGlubmVyLFxuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVIZWFkZXIsXG4gIFRhYmxlUm93LFxuICBUZXh0LFxuICB1c2VDcm1TZWFyY2gsXG59IGZyb20gJ0BodWJzcG90L3VpLWV4dGVuc2lvbnMnO1xuXG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYnMsXG4gIFBhZ2VUaXRsZSxcbiAgUGFnZUxpbmssXG59IGZyb20gJ0BodWJzcG90L3VpLWV4dGVuc2lvbnMvcGFnZXMnO1xuXG5leHBvcnQgY29uc3QgRG9jc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3RzID0gdXNlQ3JtU2VhcmNoKHtcbiAgICBvYmplY3RUeXBlOiAnY29udGFjdHMnLFxuICAgIHByb3BlcnRpZXM6IFsnZmlyc3RuYW1lJywgJ2xhc3RuYW1lJywgJ2VtYWlsJ10sXG4gICAgcGFnZUxlbmd0aDogMTAsXG4gIH0pO1xuXG4gIGNvbnN0IGRlYWxzID0gdXNlQ3JtU2VhcmNoKHtcbiAgICBvYmplY3RUeXBlOiAnZGVhbHMnLFxuICAgIHByb3BlcnRpZXM6IFtcbiAgICAgICdkZWFsbmFtZScsXG4gICAgICAnYW1vdW50JyxcbiAgICAgICdkZWFsc3RhZ2UnLFxuICAgICAgJ3BpcGVsaW5lJyxcbiAgICAgICdjbG9zZWRhdGUnLFxuICAgIF0sXG4gICAgcGFnZUxlbmd0aDogMTAsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYWdlQnJlYWRjcnVtYnM+XG4gICAgICAgIDxQYWdlQnJlYWRjcnVtYnMuQ3VycmVudD5cbiAgICAgICAgICBDUk0gRGV0YWlsc1xuICAgICAgICA8L1BhZ2VCcmVhZGNydW1icy5DdXJyZW50PlxuICAgICAgPC9QYWdlQnJlYWRjcnVtYnM+XG5cbiAgICAgIDxQYWdlVGl0bGU+Q1JNIERldGFpbHM8L1BhZ2VUaXRsZT5cblxuICAgICAgPFRleHQ+XG4gICAgICAgIENvbnRhY3RzIGFuZCBkZWFscyBmcm9tIHlvdXIgSHViU3BvdCBDUk0uXG4gICAgICA8L1RleHQ+XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIHsvKiBDT05UQUNUUyAqL31cblxuICAgICAgPEhlYWRpbmc+Q29udGFjdHM8L0hlYWRpbmc+XG5cbiAgICAgIHtjb250YWN0cy5pc0xvYWRpbmcgJiYgPExvYWRpbmdTcGlubmVyIC8+fVxuXG4gICAgICB7Y29udGFjdHMuZXJyb3IgJiYgKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICBFcnJvcjoge2NvbnRhY3RzLmVycm9yLm1lc3NhZ2V9XG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG5cbiAgICAgIHshY29udGFjdHMuaXNMb2FkaW5nICYmICFjb250YWN0cy5lcnJvciAmJiAoXG4gICAgICAgIDxUYWJsZT5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+TmFtZTwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5FbWFpbDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5JRDwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuXG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHtjb250YWN0cy5yZXN1bHRzLm1hcCgoY29udGFjdCkgPT4gKFxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtjb250YWN0Lm9iamVjdElkfT5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC5wcm9wZXJ0aWVzLmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC5wcm9wZXJ0aWVzLmxhc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcgJykgfHwgJ1VubmFtZWQnfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIHtjb250YWN0LnByb3BlcnRpZXMuZW1haWwgfHwgJy0nfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIHtjb250YWN0Lm9iamVjdElkfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICApfVxuXG4gICAgICA8RGl2aWRlciAvPlxuXG4gICAgICB7LyogREVBTFMgKi99XG5cbiAgICAgIDxIZWFkaW5nPkRlYWxzPC9IZWFkaW5nPlxuXG4gICAgICB7ZGVhbHMuaXNMb2FkaW5nICYmIDxMb2FkaW5nU3Bpbm5lciAvPn1cblxuICAgICAge2RlYWxzLmVycm9yICYmIChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgRXJyb3I6IHtkZWFscy5lcnJvci5tZXNzYWdlfVxuICAgICAgICA8L1RleHQ+XG4gICAgICApfVxuXG4gICAgICB7IWRlYWxzLmlzTG9hZGluZyAmJiAhZGVhbHMuZXJyb3IgJiYgKFxuICAgICAgICA8VGFibGU+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyPkRlYWwgTmFtZTwvVGFibGVIZWFkZXI+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlcj5BbW91bnQ8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+U3RhZ2U8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXI+SUQ8L1RhYmxlSGVhZGVyPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cblxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7ZGVhbHMucmVzdWx0cy5tYXAoKGRlYWwpID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17ZGVhbC5vYmplY3RJZH0+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIHtkZWFsLnByb3BlcnRpZXM/LmRlYWxuYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICdVbm5hbWVkIERlYWwnfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIHtkZWFsLnByb3BlcnRpZXM/LmFtb3VudFxuICAgICAgICAgICAgICAgICAgICA/IGDigrkke051bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYWwucHJvcGVydGllcy5hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgKS50b0xvY2FsZVN0cmluZygnZW4tSU4nKX1gXG4gICAgICAgICAgICAgICAgICAgIDogJy0nfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIHtkZWFsLnByb3BlcnRpZXM/LmRlYWxzdGFnZSB8fFxuICAgICAgICAgICAgICAgICAgICAnLSd9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAge2RlYWwub2JqZWN0SWR9XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgICl9XG5cbiAgICAgIDxEaXZpZGVyIC8+XG5cbiAgICAgIDxQYWdlTGluayB0bz1cIi9cIj5cbiAgICAgICAg4oaQIEJhY2sgdG8gRGFzaGJvYXJkXG4gICAgICA8L1BhZ2VMaW5rPlxuICAgIDwvPlxuICApO1xufTsiLCJpbXBvcnQgeyBodWJzcG90IH0gZnJvbSAnQGh1YnNwb3QvdWktZXh0ZW5zaW9ucyc7XG5pbXBvcnQgdHlwZSB7XG4gIEV4dGVuc2lvblBvaW50QXBpQWN0aW9ucyxcbiAgUGFnZXNDb250ZXh0LFxufSBmcm9tICdAaHVic3BvdC91aS1leHRlbnNpb25zJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlUGFnZVJvdXRlcixcbiAgUGFnZUhlYWRlcixcbiAgUGFnZVJvdXRlcyxcbiAgUGFnZVJvdXRlc0xheW91dFByb3BzLFxufSBmcm9tICdAaHVic3BvdC91aS1leHRlbnNpb25zL3BhZ2VzJztcblxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tICcuL0hvbWVQYWdlLnRzeCc7XG5pbXBvcnQgeyBEb2NzUGFnZSB9IGZyb20gJy4vRG9jc1BhZ2UudHN4JztcblxuaW50ZXJmYWNlIFBhZ2VzRXh0ZW5zaW9uUHJvcHMge1xuICBjb250ZXh0OiBQYWdlc0NvbnRleHQ7XG4gIGFjdGlvbnM6IEV4dGVuc2lvblBvaW50QXBpQWN0aW9uczwncGFnZXMnPjtcbn1cblxuY29uc3QgUGFnZUxheW91dCA9ICh7IGNoaWxkcmVuIH06IFBhZ2VSb3V0ZXNMYXlvdXRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGFnZUhlYWRlcj5cbiAgICAgICAgPFBhZ2VIZWFkZXIuU2Vjb25kYXJ5QWN0aW9ucz5cbiAgICAgICAgICA8UGFnZUhlYWRlci5MaW5rIHRvPVwiL1wiPlxuICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgPC9QYWdlSGVhZGVyLkxpbms+XG5cbiAgICAgICAgICA8UGFnZUhlYWRlci5MaW5rIHRvPVwiL2RvY3NcIj5cbiAgICAgICAgICAgIENSTSBEZXRhaWxzXG4gICAgICAgICAgPC9QYWdlSGVhZGVyLkxpbms+XG4gICAgICAgIDwvUGFnZUhlYWRlci5TZWNvbmRhcnlBY3Rpb25zPlxuICAgICAgPC9QYWdlSGVhZGVyPlxuXG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBQYWdlUm91dGVyID0gY3JlYXRlUGFnZVJvdXRlcihcbiAgPFBhZ2VSb3V0ZXMgbGF5b3V0Q29tcG9uZW50PXtQYWdlTGF5b3V0fT5cbiAgICA8UGFnZVJvdXRlcy5JbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XG5cbiAgICA8UGFnZVJvdXRlcy5Sb3V0ZVxuICAgICAgcGF0aD1cIi9kb2NzXCJcbiAgICAgIGNvbXBvbmVudD17RG9jc1BhZ2V9XG4gICAgLz5cbiAgPC9QYWdlUm91dGVzPixcbik7XG5cbmh1YnNwb3QuZXh0ZW5kPCdwYWdlcyc+KCh7IGNvbnRleHQsIGFjdGlvbnMgfSkgPT4gKFxuICA8UGFnZVJvdXRlciAvPlxuKSk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsInNlbGYiLCJqc3hEZXZSdW50aW1lTW9kdWxlIiwicmVxdWlyZSQkMCIsIlNlcnZlcmxlc3NFeGVjdXRpb25TdGF0dXMiLCJqc3hSdW50aW1lTW9kdWxlIiwiY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQiLCJfanN4IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsInBhZ2luYXRpb25GbGFncyIsIlJvdXRlTm9kZVR5cGUiLCJpc1ZhbGlkRWxlbWVudCIsIkZyYWdtZW50IiwiUmVhY3RDaGlsZHJlbiIsInVzZUFwcFBhZ2VMb2NhdGlvbiIsIlBh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LElBQUEsR0FBQUEsTUFjQTtBQUFBLEVBRUo7QUFFQSxRQUFNLGFBQWE7QUFBQSxJQUNqQkQscUNBQUFBLE9BQUMsWUFBQSxFQUFXLGlCQUFpQixZQUMzQixVQUFBO0FBQUEsTUFBQUEscUNBQUFBLE9BQUMsV0FBVyxZQUFYLEVBQXNCLFdBQVcsU0FBQSxHQUFsQyxRQUFBLE9BQUE7QUFBQSxRQUFBLFVBQUE7QUFBQSxRQUFBLFlBQUE7QUFBQSxRQUFBLGNBQUE7QUFBQSxNQUFBLEdBQUFDLE1BQTRDO0FBQUEsTUFFNUNELHFDQUFBQTtBQUFBQSxRQUFDLFdBQVc7QUFBQSxRQUFYO0FBQUEsVUFDQyxNQUFLO0FBQUEsVUFDTCxXQUFXO0FBQUEsUUFBQTtBQUFBLFFBRmI7QUFBQSxRQUFBO0FBQUEsUUFBQTtBQUFBLFVBQUEsVUFBQTtBQUFBLFVBQUEsWUFBQTtBQUFBLFVBQUEsY0FBQTtBQUFBLFFBQUE7QUFBQSxRQUFBQztBQUFBQSxNQUFBO0FBQUEsSUFHQSxFQUFBLEdBTkYsUUFBQSxNQUFBO0FBQUEsTUFBQSxVQUFBO0FBQUEsTUFBQSxZQUFBO0FBQUEsTUFBQSxjQUFBO0FBQUEsSUFBQSxHQUFBQSxNQU9BO0FBQUEsRUFDRjtBQUVBLFVBQVEsT0FBZ0IsQ0FBQyxFQUFFLFNBQVMsUUFBQSxrREFDakMsWUFBQSxDQUFBLEdBQUQsUUFBQSxPQUFBO0FBQUEsSUFBQSxVQUFBO0FBQUEsSUFBQSxZQUFBO0FBQUEsSUFBQSxjQUFBO0FBQUEsRUFBQSxHQUFBQSxNQUFZLENBQ2I7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwXX0=
