"use strict";
(() => {
var exports = {};
exports.id = 772;
exports.ids = [772];
exports.modules = {

/***/ 6144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ getAllGroups)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/group.ts

async function getAllGroups(req, res) {
    try {
        const baseUrl = `${process.env.TESTURL}/groups`;
        const response = await external_axios_default().get(baseUrl);
        res.status(200).json({
            data: response.data
        });
    } catch (e) {
        console.log("error", e);
        res.status(500).send({
            e
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6144));
module.exports = __webpack_exports__;

})();