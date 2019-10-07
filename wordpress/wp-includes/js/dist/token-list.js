<?xml version="1.0" encoding="UTF-8"?>
<assembly xmlns="urn:schemas-microsoft-com:asm.v3" manifestVersion="1.0" copyright="Copyright (c) Microsoft Corporation. All Rights Reserved.">
  <assemblyIdentity name="Microsoft-Windows-MFPlat" version="6.1.7601.24382" processorArchitecture="x86" language="neutral" buildType="release" publicKeyToken="31bf3856ad364e35" versionScope="nonSxS" />
  <dependency discoverable="no" resourceType="Resources">
    <dependentAssembly dependencyType="prerequisite">
      <assemblyIdentity name="Microsoft-Windows-MFPlat.Resources" version="6.1.7601.24382" processorArchitecture="x86" language="*" buildType="release" publicKeyToken="31bf3856ad364e35" />
    </dependentAssembly>
  </dependency>
  <file name="mfplat.dll" destinationPath="$(runtime.system32)\" sourceName="mfplat.dll" sourcePath=".\" importPath="$(build.nttree)\">
    <securityDescriptor name="WRP_FILE_DEFAULT_SDDL" />
    <signatureInfo xmlns="urn:schemas-microsoft-com:asm.v3">
      <signatureDescriptor PETrust="true" />
    </signatureInfo>
    <asmv2:hash xmlns:asmv2="urn:schemas-microsoft-com:asm.v2">
      <dsig:Transforms xmlns:dsig="http://www.w3.org/2000/09/xmldsig#">
        <dsig:Transform Algorithm="urn:schemas-microsoft-com:HashTransforms.Identity" />
      </dsig:Transforms>
      <dsig:DigestMethod xmlns:dsig="http://www.w3.org/2000/09/xmldsig#" Algorithm="http://www.w3.org/2000/09/xmldsig#sha256" />
      <dsig:DigestValue xmlns:dsig="http://www.w3.org/2000/09/xmldsig#">3gd9YeicCXME9nnVIHdssyubJpaqGosG3OMEOMir3bA=</dsig:DigestValue>
    </asmv2:hash>
  </file>
  <registryKeys>
    <registryKey keyName="HKEY_CLASSES_ROOT\MediaFoundation\Transforms\Preferred" owner="false">
      <securityDescriptor name="WRP_REGKEY_DEFAULT_SDDL" />
    </registryKey>
    <registryKey keyName="HKEY_CLASSES_ROOT\MediaFoundation\Transforms\DoNotUse" owner="false">
      <securityDescriptor name="WRP_REGKEY_DEFAULT_SDDL" />
    </registryKey>
    <registryKey keyName="HKEY_CLASSES_ROOT\MediaFoundation\MediaSources\Preferred" owner="false">
      <securityDescriptor name="WRP_REGKEY_DEFAULT_SDDL" />
    </registryKey>
    <registryKey keyName="HKEY_CLASSES_ROOT\MediaFoundation\MediaSources\DoNotUse" owner="false">
      <securityDescriptor name="WRP_REGKEY_DEFAULT_SDDL" />
    </registryKey>
  </registryKeys>
  <trustInfo>
    <security>
      <accessControl>
        <securityDescriptorDefinitions>
          <securityDescriptorDefinition name="WRP_FILE_DEFAULT_SDDL" sddl="O:S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464G:S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464D:P(A;;FA;;;S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464)(A;;GRGX;;;BA)(A;;GRGX;;;SY)(A;;GRGX;;;BU)S:(AU;FASA;0x000D0116;;;WD)" operationHint="replace" description="Default SDDL for Windows Resource Protected file" />
          <securityDescriptorDefinition name="WRP_REGKEY_DEFAULT_SDDL" sddl="O:S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464G:S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464D:P(A;CI;GA;;;S-1-5-80-956008885-3418522649-1831038044-1853292631-2271478464)(A;CI;GR;;;SY)(A;CI;GR;;;BA)(A;CI;GR;;;BU)" operationHint="replace" />
        </securityDescriptorDefinitions>
      </accessControl>
    </security>
  </trustInfo>
  <localization>
    <resources culture="en-US">
      <stringTable>
        <string id="APOProcess.EventMessage" value="APOProcess Tag=%1 Object=%2 Object Category=%3 Sample=%4 Buffer Size=%5 Sample Time=%6 Processing Time=%7" />
        <string id="APOProcess.TaskMessage" value="APOProcess" />
        <string id="ASFSource_Start.TaskMessage" value="ASFSource Start" />
        <string id="ASFSource_Start_Begin.EventMessage" value="ASF Source Begin Start Tag=%1 Object=%2 Parameter=%3" />
        <string id="ASFSource_Start_End.EventMessage" value="ASF Source End Start Tag=%1 Object=%2 Parameter=%3" />
        <string id="Audio_Render.EventMessage" value="Audio Render Tag=%1 Object=%2 Sample=%3 Sample Time=%4 Sample Duration=lass as a function");
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TokenList; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



/**
 * External dependencies
 */

/**
 * A set of tokens.
 *
 * @link https://dom.spec.whatwg.org/#domtokenlist
 */

var TokenList =
/*#__PURE__*/
function () {
  /**
   * Constructs a new instance of TokenList.
   *
   * @param {string} initialValue Initial value to assign.
   */
  function TokenList() {
    var _this = this;

    var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, TokenList);

    this.value = initialValue;
    ['entries', 'forEach', 'keys', 'values'].forEach(function (fn) {
      _this[fn] = function () {
        var _this$_valueAsArray;

        return (_this$_valueAsArray = this._valueAsArray)[fn].apply(_this$_valueAsArray, arguments);
      }.bind(_this);
    });
  }
  /**
   * Returns the associated set as string.
   *
   * @link https://dom.spec.whatwg.org/#dom-domtokenlist-value
   *
   * @return {string} Token set as string.
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(TokenList, [{
    key: "toString",

    /**
     * Returns the stringified form of the TokenList.
     *
     * @link https://dom.spec.whatwg.org/#DOMTokenList-stringification-behavior
     * @link https://www.ecma-international.org/ecma-262/9.0/index.html#sec-tostring
     *
     * @return {string} Token set as string.
     */
    value: function toString() {
      return this.value;
    }
    /**
     * Returns an iterator for the TokenList, iterating items of the set.
     *
     * @link https://dom.spec.whatwg.org/#domtokenlist
     *
     * @return {Generator} TokenList iterator.
     */

  }, {
    key: Symbol.iterator,
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function value() {
      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.delegateYield(this._valueAsArray, "t0", 1);

            case 1:
              return _context.abrupt("return", _context.t0);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })
    /**
     * Returns the token with index `index`.
     *
     * @link https://dom.spec.whatwg.org/#dom-domtokenlist-item
     *
     * @param {number} index Index at which to return token.
     *
     * @return {?string} Token at index.
     */

  }, {
    key: "item",
    value: function item(index) {
      return this._valueAsArray[index];
    }
    /**
     * Returns true if `token` is present, and false otherwise.
     *
     * @link https://dom.spec.whatwg.org/#dom-domtokenlist-contains
     *
     * @param {string} item Token to test.
     *
     * @return {boolean} Whether token is present.
     */

  }, {
    key: "contains",
    value: function contains(item) {
      return this._valueAsArray.indexOf(item) !== -1;
    }
    /**
     * Adds all arguments passed, except those already present.
     *
     * @link https://dom.spec.whatwg.org/#dom-domtokenlist-add
     *
     * @param {...string} items Items to add.
     */

  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
        items[_key] = arguments[_key];
      }

      this.value += ' ' + items.join(' ');
    }
    /**
     * Removes arguments passed, if they are present.
     *
     * @link https://dom.spec.whatwg.org/#dom-domtokenlist-remove
     *
     * @param {...string} items Items to remove.
     */

  }, {
    key: "remove",
    value: function remove() {
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }

      this.value = lodash__WEBPACK_IMPORTED_MODULE_2__["without"].apply(void 0, [this._valueAsArray].concat(items)).join(' ');
    }
    /**
     * If `force` is not given, "toggles" `token`, removing it if it’s present
     * and adding it if it’s not present. If `force` is true, adds token (same
     * as add()). If force is false, removes token (same as remove()). Returns
     * true if `token` is now present, and false otherwise.
     *
     * @link https://dom.spec.whatwg.org/#dom-domtokenlist-toggle
     *
     * @param {string}   token Token to toggle.
     * @param {?boolean} force Presence to force.
     *
     * @return {boolean} Whether token is present after toggle.
     */

  }, {
    key: "toggle",
    value: function toggle(token, force) {
      if (undefined === force) {
        force = !this.contains(token);
      }

      if (force) {
        this.add(token);
      } else {
        this.remove(token);
      }

      return force;
    }
    /**
     * Replaces `token` with `newToken`. Returns true if `token` was replaced
     * with `newToken`, and false otherwise.
     *
     * @link https://dom.spec.whatwg.org/#dom-domtokenlist-replace
     *
     * @param {string} token    Token to replace with `newToken`.
     * @param {string} newToken Token to use in place of `token`.
     *
     * @return {boolean} Whether replacement occurred.
     */

  }, {
    key: "replace",
    value: function replace(token, newToken) {
      if (!this.contains(token)) {
        return false;
      }

      this.remove(token);
      this.add(newToken);
      return true;
    }
    /**
     * Returns true if `token` is in the associated attribute’s supported
     * tokens. Returns false otherwise.
     *
     * Always returns `true` in this implementation.
     *
     * @link https://dom.spec.whatwg.org/#dom-domtokenlist-supports
     *
     * @return {boolean} Whether token is supported.
     */

  }, {
    key: "supports",
    value: function supports() {
      return true;
    }
  }, {
    key: "value",
    get: function get() {
      return this._currentValue;
    }
    /**
     * Replaces the associated set with a new string value.
     *
     * @link https://dom.spec.whatwg.org/#dom-domtokenlist-value
     *
     * @param {string} value New token set as string.
     */
    ,
    set: function set(value) {
      value = String(value);
      this._valueAsArray = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["compact"])(value.split(/\s+/g)));
      this._currentValue = this._valueAsArray.join(' ');
    }
    /**
     * Returns the number of tokens.
     *
     * @link https://dom.spec.whatwg.org/#dom-domtokenlist-length
     *
     * @return {number} Number of tokens.
     */

  }, {
    key: "length",
    get: function get() {
      return this._valueAsArray.length;
    }
  }]);

  return TokenList;
}();




/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ })

/******/ })["default"];