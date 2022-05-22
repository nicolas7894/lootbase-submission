"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ FactoryAddress)
/* harmony export */ });
const FactoryAddress = "0x4dF367EE319E4AC07F0d3087f72955B0d2e50498";


/***/ }),

/***/ 4186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6715);
/* harmony import */ var _mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_lab_DatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2089);
/* harmony import */ var _mui_lab_DatePicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_DatePicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _componets_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4485);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9048);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9904);
/* harmony import */ var _mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9271);
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9564);
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_icons_material_KeyboardBackspace__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8636);
/* harmony import */ var _mui_icons_material_KeyboardBackspace__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardBackspace__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _abi_Factory_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9466);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _componets_utils_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1542);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6981);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3346);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_8__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];























function Home({ tokens  }) {
    var ref2;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_19__.useRouter)();
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [group1, setGroup] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [botSetup, setBotsetup] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [userAddress, setWalletAddress] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const [botId, setBotId] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const [newGroupDetails, setNewGroupDetails] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [firstStep, setFirstStep] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);
    const [secondStep, setSecondStep] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [thirdStep, setThirdStep] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [fourthStep, setFourthStep] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [depositDate, setDepositDate] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const [successModal, setSuccessModal] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [botModal, setBotModal] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [currentToken, setCurrentToken] = react__WEBPACK_IMPORTED_MODULE_1__.useState((ref2 = tokens[0]) === null || ref2 === void 0 ? void 0 : ref2.address);
    const [openDate, setOpenDate] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const [currentTokenDetails, setCurrentTOkenDetails] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
        symbol: "",
        address: "",
        logoURI: ""
    });
    const successModalClose = ()=>{
        setSuccessModal(false);
    };
    const botModalClose = ()=>{
        setBotModal(false);
    };
    const { register , handleSubmit , getValues , formState: { dirtyFields  } , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
        defaultValues: {
            groupName: "",
            groupSymbol: ""
        }
    });
    const showSecondStep = ()=>{
        setFirstStep(false);
        setSecondStep(true);
        setThirdStep(false);
        setFourthStep(false);
    };
    const showThirdStep = ()=>{
        setFirstStep(false);
        setSecondStep(false);
        setThirdStep(true);
        setFourthStep(false);
    };
    const showFourthStep = ()=>{
        setFirstStep(false);
        setSecondStep(false);
        setThirdStep(false);
        setFourthStep(true);
    };
    const showFirstStep = ()=>{
        setFirstStep(true);
        setSecondStep(false);
        setThirdStep(false);
        setFourthStep(false);
    };
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (router.isReady) {
            console.log("reactor", router.query);
            const groupDetails = JSON.parse(localStorage.getItem("groupAddress") || "");
            if (groupDetails !== "") {
                checkIfGroupIsActivated();
            }
        }
    }, [
        router.isReady,
        router.query,
        router.pathname
    ]);
    const checkIfGroupIsActivated = async ()=>{
        const groupDetails = JSON.parse(localStorage.getItem("groupAddress") || "");
        const currentGroupAddress = groupDetails === null || groupDetails === void 0 ? void 0 : groupDetails.args[0];
        console.log("groupDetails", groupDetails);
        const data = {
            groupAddress: currentGroupAddress
        };
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(`http://207.154.202.18:3000/bot`, requestOptions);
        const jsonData = await response.json();
        if (jsonData.status === "Activated") {
            router.push({
                pathname: "/dashboard"
            });
        } else {
            return;
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        if (router.isReady) {
            console.log("reactor", router.query);
            const query = router.query;
            if (query.bot == "true") {
                setBotsetup(true);
            } else {
                return;
            }
        }
    }, [
        router.isReady,
        router.query,
        router.pathname
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        tokens.forEach((element)=>{
            console.log("tokenss", tokens);
            if (element.address === currentToken) {
                setCurrentTOkenDetails(element);
                console.log("current token details", element);
            }
        });
    }, [
        currentToken
    ]);
    const handleChangeToken = (event)=>{
        console.log("tokenss", tokens);
        setCurrentToken(event.target.value);
    };
    const onSubmit = async (data)=>{
        var ref, ref1;
        console.log("data", data);
        const address = [];
        const botAddress = "0xac9122168d18e28Ef181406533583A3486D9FA4B";
        if (localStorage.getItem("account")) {
            const existingUser = localStorage.getItem("account");
            console.log("address user", existingUser);
            address.push(existingUser);
            setWalletAddress(existingUser);
            console.log("address user", userAddress);
        } else {
            return;
        }
        address.push(botAddress);
        console.log("address array", address);
        // console.log("data",data)
        //   const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // };
        // const response = await fetch(`https://dispay.herokuapp.com/clubs`, requestOptions);
        // const jsonData = await response.json();
        setLoading(true);
        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_16___default())();
        const connection = await web3Modal.connect();
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_18__.ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        let contract = new ethers__WEBPACK_IMPORTED_MODULE_18__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_22__/* .FactoryAddress */ .x, _abi_Factory_json__WEBPACK_IMPORTED_MODULE_15__/* .abi */ .Mt, signer);
        const depositLimit = ethers__WEBPACK_IMPORTED_MODULE_18__.ethers.utils.parseUnits(data.depositLimit.toString(), "ether");
        const newDepositDate = (0,_componets_utils_util__WEBPACK_IMPORTED_MODULE_17__/* .toTimestamp */ .Uq)(data === null || data === void 0 ? void 0 : data.depositEndDate);
        console.log("mewDate", newDepositDate);
        const tx = await contract.createGroup(address, data === null || data === void 0 ? void 0 : data.groupName, data === null || data === void 0 ? void 0 : data.groupSymbol, data === null || data === void 0 ? void 0 : data.address, newDepositDate, depositLimit, data === null || data === void 0 ? void 0 : data.maxnumber);
        console.log("done");
        let receipt = await tx.wait();
        (ref = receipt.events) === null || ref === void 0 ? void 0 : ref.filter((group)=>{
            if (group.event == "NewGroup") {
                setNewGroupDetails(group);
                localStorage.setItem("groupAddress", JSON.stringify(group));
                setSuccessModal(true);
                reset();
                setGroup(false);
                setLoading(false);
            }
        });
        console.log("done receipt", receipt);
        console.log("newgrouplog", (ref1 = receipt.events) === null || ref1 === void 0 ? void 0 : ref1.filter((x)=>{
            return x.event == "NewGroup";
        }));
    };
    const createBot = async ()=>{
        setLoading(true);
        const groupDetails = JSON.parse(localStorage.getItem("groupAddress") || "");
        // console.log("newGroup", newGroupDetails)
        const args = groupDetails === null || groupDetails === void 0 ? void 0 : groupDetails.args[0];
        const data = {
            groupAddress: args
        };
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(`http://207.154.202.18:3000/bot`, requestOptions);
        const jsonData = await response.json();
        if (jsonData) {
            setLoading(false);
            setBotId(jsonData === null || jsonData === void 0 ? void 0 : jsonData._id);
            setBotModal(true);
            setBotsetup(false);
        }
    // console.log("response to bot.",jsonData)
    };
    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "#242526",
        borderRadius: "25px",
        boxShadow: 24,
        p: 4
    };
    if (loading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                display: "flex",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9___default()), {
                size: 120
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_13___default()), {
                BackdropProps: {
                    timeout: 500
                },
                closeAfterTransition: true,
                onClose: successModalClose,
                open: successModal,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    sx: modalStyle,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                            sx: {
                                color: "white",
                                textAlign: "center"
                            },
                            children: [
                                "Group Created Successfully ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Please clck below to authorize group Bot"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                mt: 5,
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_21__["default"], {
                                href: `https://discord.com/api/oauth2/authorize?client_id=974402155425431603&permissions=0&redirect_uri=http://localhost:3000/?bot=true&response_type=code&scope=bot%20identify`,
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                    sx: {
                                        cursor: "pointer",
                                        color: "white",
                                        fontSize: "16px"
                                    },
                                    children: "Authorize Bot"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_13___default()), {
                BackdropProps: {
                    timeout: 500
                },
                closeAfterTransition: true,
                onClose: botModalClose,
                open: botModal,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    sx: modalStyle,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                            sx: {
                                color: "white",
                                textAlign: "center"
                            },
                            children: [
                                "Bot Created Successfully ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Please copy the message below and paste on your server to setup Bot"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                mt: 5,
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                sx: {
                                    cursor: "pointer",
                                    color: "white",
                                    fontSize: "16px"
                                },
                                children: [
                                    "!setup",
                                    botId
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_componets_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: group1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                            sx: {
                                p: 5
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Grid, {
                                container: true,
                                direction: "row",
                                justifyContent: "Center",
                                alignItems: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    sx: {
                                        flexGrow: 1
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                        variant: "body1",
                                        sx: {
                                            textAlign: "center",
                                            color: "white"
                                        },
                                        children: "CREATE AN GROUP CLUB"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            style: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            onSubmit: handleSubmit(onSubmit),
                            children: [
                                firstStep && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        sx: {
                                            maxWidth: "30rem",
                                            display: "flex",
                                            margin: "0 auto",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            p: 4
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_20__.Container, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "body1",
                                                    sx: {
                                                        color: "white",
                                                        textAlign: "left"
                                                    },
                                                    children: "What should we call this investment club"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.TextField, {
                                                    fullWidth: true,
                                                    sx: {
                                                        input: {
                                                            color: "white"
                                                        },
                                                        label: {
                                                            color: "white"
                                                        },
                                                        "& .MuiOutlinedInput-root": {
                                                            "& fieldset": {
                                                                borderColor: "white"
                                                            },
                                                            "&:hover fieldset": {
                                                                borderColor: (theme)=>theme.palette.primary.main
                                                            }
                                                        },
                                                        my: 2
                                                    },
                                                    ...register("groupName", {
                                                        required: true
                                                    }),
                                                    id: "groupName",
                                                    label: "Name",
                                                    variant: "outlined"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "body1",
                                                    sx: {
                                                        color: "white",
                                                        textAlign: "left"
                                                    },
                                                    children: "a.k.a"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.TextField, {
                                                    fullWidth: true,
                                                    sx: {
                                                        input: {
                                                            color: "white"
                                                        },
                                                        label: {
                                                            color: "white"
                                                        },
                                                        "& .MuiOutlinedInput-root": {
                                                            "& fieldset": {
                                                                borderColor: "white"
                                                            },
                                                            "&:hover fieldset": {
                                                                borderColor: (theme)=>theme.palette.primary.main
                                                            }
                                                        },
                                                        my: 2
                                                    },
                                                    ...register("groupSymbol", {
                                                        required: true
                                                    }),
                                                    id: "groupSymbol",
                                                    label: "symbol",
                                                    variant: "outlined"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle2",
                                                    component: "span",
                                                    sx: {
                                                        color: "#959ca7",
                                                        textAlign: "left"
                                                    },
                                                    children: "Set an easily recognizable symbol for your investment club token that powers the club's cap table management and governance infrastructure. Members receive this investment club token (initially defaults to non-transferable) as proof of their deposit"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    sx: {
                                                        display: "flex",
                                                        justifyContent: "flex-end"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                        onClick: showSecondStep,
                                                        sx: {
                                                            my: 2,
                                                            backgroundColor: "white",
                                                            color: "black",
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                            textTransform: "none"
                                                        },
                                                        disabled: !(dirtyFields === null || dirtyFields === void 0 ? void 0 : dirtyFields.groupName),
                                                        variant: "contained",
                                                        size: "medium",
                                                        children: "Next"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }),
                                secondStep && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                maxWidth: "30rem",
                                                display: "flex",
                                                margin: "0 auto",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                p: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    component: "span",
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "#959ca7",
                                                        textAlign: "left"
                                                    },
                                                    children: "What should we call this investment club?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle1",
                                                    sx: {
                                                        color: "white",
                                                        mr: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: [
                                                        getValues("groupName"),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                            component: "span",
                                                            variant: "subtitle2",
                                                            sx: {
                                                                color: "#959ca7",
                                                                mx: 3,
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                "Club Token :",
                                                                getValues("groupSymbol")
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "h6",
                                                    sx: {
                                                        color: "white",
                                                        mt: 5,
                                                        textAlign: "left"
                                                    },
                                                    children: "What\u2019s the upper limit of the club\u2019s raise?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    component: "span",
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "#959ca7",
                                                        my: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: "Accepting deposits beyond this amount will require an on-chain transaction with gas, so aim high."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "body1",
                                                    sx: {
                                                        color: "white",
                                                        textAlign: "left"
                                                    },
                                                    children: "Raise in"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.TextField, {
                                                    fullWidth: true,
                                                    InputLabelProps: {
                                                        shrink: true
                                                    },
                                                    select: true,
                                                    defaultValue: currentToken,
                                                    sx: {
                                                        input: {
                                                            color: "white"
                                                        },
                                                        label: {
                                                            color: "white"
                                                        },
                                                        "& .MuiOutlinedInput-root": {
                                                            "& fieldset": {
                                                                borderColor: "white"
                                                            },
                                                            "& svg": {
                                                                color: "white"
                                                            },
                                                            "&:hover fieldset": {
                                                                borderColor: (theme)=>theme.palette.primary.main
                                                            },
                                                            "& .MuiSelect-select": {
                                                                color: "white"
                                                            }
                                                        },
                                                        my: 2
                                                    },
                                                    ...register("address", {
                                                        required: true
                                                    }),
                                                    variant: "outlined",
                                                    children: tokens === null || tokens === void 0 ? void 0 : tokens.map((token, index)=>{
                                                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                            onClick: ()=>{
                                                                setCurrentToken(token === null || token === void 0 ? void 0 : token.address);
                                                            },
                                                            value: token === null || token === void 0 ? void 0 : token.address,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    alt: "logo",
                                                                    style: {
                                                                        marginRight: "10px"
                                                                    },
                                                                    src: token === null || token === void 0 ? void 0 : token.logoURI
                                                                }),
                                                                token === null || token === void 0 ? void 0 : token.name,
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    style: {
                                                                        marginLeft: "13px"
                                                                    },
                                                                    children: token === null || token === void 0 ? void 0 : token.symbol
                                                                })
                                                            ]
                                                        }, index);
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "body1",
                                                    sx: {
                                                        color: "white",
                                                        mt: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: "Upper limit"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.TextField, {
                                                    fullWidth: true,
                                                    sx: {
                                                        input: {
                                                            color: "white"
                                                        },
                                                        label: {
                                                            color: "white"
                                                        },
                                                        "& .MuiOutlinedInput-root": {
                                                            "& fieldset": {
                                                                borderColor: "white"
                                                            },
                                                            "&:hover fieldset": {
                                                                borderColor: (theme)=>theme.palette.primary.main
                                                            }
                                                        },
                                                        my: 2
                                                    },
                                                    ...register("depositLimit", {
                                                        required: true
                                                    }),
                                                    type: "number",
                                                    id: "depositLimit",
                                                    label: "Upper limit",
                                                    variant: "outlined"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "space-around"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardBackspace__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                        sx: {
                                                            color: "white"
                                                        }
                                                    }),
                                                    onClick: showFirstStep,
                                                    sx: {
                                                        my: 2,
                                                        color: "white",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        textTransform: "none"
                                                    },
                                                    variant: "text",
                                                    size: "medium",
                                                    children: "Back"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    onClick: showThirdStep,
                                                    sx: {
                                                        my: 2,
                                                        backgroundColor: "white",
                                                        color: "black",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        textTransform: "none"
                                                    },
                                                    variant: "contained",
                                                    size: "medium",
                                                    children: "Next"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                thirdStep && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                maxWidth: "30rem",
                                                display: "flex",
                                                margin: "0 auto",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                p: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    component: "span",
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "#959ca7",
                                                        textAlign: "left"
                                                    },
                                                    children: "What should we call this investment club?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle1",
                                                    sx: {
                                                        color: "white",
                                                        mr: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: [
                                                        getValues("groupName"),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                            component: "span",
                                                            variant: "subtitle2",
                                                            sx: {
                                                                color: "#959ca7",
                                                                mx: 3,
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                "Club Token :",
                                                                getValues("groupSymbol")
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "#959ca7",
                                                        mt: 5,
                                                        textAlign: "left"
                                                    },
                                                    children: "What\u2019s the upper limit of the club\u2019s raise?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle1",
                                                    sx: {
                                                        color: "white",
                                                        my: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: [
                                                        getValues("depositLimit"),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                            component: "span",
                                                            variant: "subtitle2",
                                                            sx: {
                                                                color: "#959ca7",
                                                                mx: 3,
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: currentTokenDetails === null || currentTokenDetails === void 0 ? void 0 : currentTokenDetails.logoURI,
                                                                    alt: currentTokenDetails === null || currentTokenDetails === void 0 ? void 0 : currentTokenDetails.symbol,
                                                                    style: {
                                                                        marginRight: "10px"
                                                                    }
                                                                }),
                                                                currentTokenDetails === null || currentTokenDetails === void 0 ? void 0 : currentTokenDetails.symbol
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "body1",
                                                    sx: {
                                                        color: "white",
                                                        textAlign: "left"
                                                    },
                                                    children: "When will deposits close?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    component: "span",
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "#959ca7",
                                                        mb: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: "Extending the close date will require an on-chain transaction with gas, so aim for further in the future to leave ample time for collection. You can close deposits early if needed."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_LocalizationProvider__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                    dateAdapter: (_mui_lab_AdapterDateFns__WEBPACK_IMPORTED_MODULE_2___default()),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_lab_DatePicker__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        desktopModeMediaQuery: "",
                                                        open: openDate,
                                                        onOpen: ()=>setOpenDate(true)
                                                        ,
                                                        allowSameDateSelection: true,
                                                        disablePast: true,
                                                        label: "Start Date",
                                                        views: [
                                                            "day"
                                                        ],
                                                        value: depositDate || undefined,
                                                        onChange: (newValue)=>{
                                                            setDepositDate(newValue);
                                                            setOpenDate(false);
                                                        },
                                                        PopperProps: {
                                                            disablePortal: true
                                                        },
                                                        inputFormat: "MMM d, Y",
                                                        InputAdornmentProps: {
                                                            position: "start"
                                                        },
                                                        OpenPickerButtonProps: {
                                                            disableRipple: true
                                                        },
                                                        renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.TextField, {
                                                                ...params,
                                                                onClick: (e)=>setOpenDate(true)
                                                                ,
                                                                sx: {
                                                                    input: {
                                                                        color: "white"
                                                                    },
                                                                    label: {
                                                                        color: "white"
                                                                    },
                                                                    "& .MuiOutlinedInput-root": {
                                                                        "& fieldset": {
                                                                            borderColor: "white"
                                                                        },
                                                                        "&:hover fieldset": {
                                                                            borderColor: (theme)=>theme.palette.primary.main
                                                                        },
                                                                        "& svg": {
                                                                            color: "white"
                                                                        },
                                                                        "&:hover button": {
                                                                            backgroundColor: "transparent"
                                                                        }
                                                                    }
                                                                },
                                                                ...register("depositEndDate", {
                                                                    required: true
                                                                }),
                                                                InputLabelProps: {
                                                                    shrink: true
                                                                }
                                                            })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "space-around"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardBackspace__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                        sx: {
                                                            color: "white"
                                                        }
                                                    }),
                                                    onClick: showSecondStep,
                                                    sx: {
                                                        my: 2,
                                                        color: "white",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        textTransform: "none"
                                                    },
                                                    variant: "text",
                                                    size: "medium",
                                                    children: "Back"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    onClick: showFourthStep,
                                                    sx: {
                                                        my: 2,
                                                        backgroundColor: "white",
                                                        color: "black",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        textTransform: "none"
                                                    },
                                                    variant: "contained",
                                                    size: "medium",
                                                    children: "Next"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                fourthStep && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                maxWidth: "30rem",
                                                display: "flex",
                                                margin: "0 auto",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                p: 4
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    component: "span",
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "#959ca7",
                                                        textAlign: "left"
                                                    },
                                                    children: "What should we call this investment club?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle1",
                                                    sx: {
                                                        color: "white",
                                                        mr: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: [
                                                        getValues("groupName"),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                            component: "span",
                                                            variant: "subtitle2",
                                                            sx: {
                                                                color: "#959ca7",
                                                                mx: 3,
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                "Club Token :",
                                                                getValues("groupSymbol")
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "#959ca7",
                                                        mt: 5,
                                                        textAlign: "left"
                                                    },
                                                    children: "What\u2019s the upper limit of the club\u2019s raise?"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle1",
                                                    sx: {
                                                        color: "white",
                                                        my: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: [
                                                        getValues("depositLimit"),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                            component: "span",
                                                            variant: "subtitle2",
                                                            sx: {
                                                                color: "#959ca7",
                                                                mx: 3,
                                                                textAlign: "left"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: currentTokenDetails === null || currentTokenDetails === void 0 ? void 0 : currentTokenDetails.logoURI,
                                                                    alt: currentTokenDetails === null || currentTokenDetails === void 0 ? void 0 : currentTokenDetails.symbol,
                                                                    style: {
                                                                        marginRight: "10px"
                                                                    }
                                                                }),
                                                                currentTokenDetails === null || currentTokenDetails === void 0 ? void 0 : currentTokenDetails.symbol
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "#959ca7",
                                                        mt: 5,
                                                        textAlign: "left"
                                                    },
                                                    children: "When will deposits close?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "subtitle1",
                                                    sx: {
                                                        color: "white",
                                                        mr: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: getValues("depositEndDate")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    variant: "body1",
                                                    sx: {
                                                        color: "white",
                                                        mt: 3,
                                                        textAlign: "left"
                                                    },
                                                    children: "What\u2019s the maximum number of members?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                                    component: "span",
                                                    variant: "subtitle2",
                                                    sx: {
                                                        color: "#959ca7",
                                                        textAlign: "left"
                                                    },
                                                    children: "Investment clubs may have up to 99 members according to the SEC. Syndicate encourages all users to consult with their own legal and tax counsel."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.TextField, {
                                                    fullWidth: true,
                                                    sx: {
                                                        input: {
                                                            color: "white"
                                                        },
                                                        label: {
                                                            color: "white"
                                                        },
                                                        "& .MuiOutlinedInput-root": {
                                                            "& fieldset": {
                                                                borderColor: "white"
                                                            },
                                                            "&:hover fieldset": {
                                                                borderColor: (theme)=>theme.palette.primary.main
                                                            }
                                                        },
                                                        my: 3
                                                    },
                                                    ...register("maxnumber", {
                                                        required: true
                                                    }),
                                                    type: "number",
                                                    InputProps: {
                                                        inputProps: {
                                                            min: 0,
                                                            max: 99
                                                        }
                                                    },
                                                    id: "maxnumber",
                                                    label: "Max Number",
                                                    variant: "outlined"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            sx: {
                                                display: "flex",
                                                justifyContent: "space-around"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_KeyboardBackspace__WEBPACK_IMPORTED_MODULE_14___default()), {
                                                        sx: {
                                                            color: "white"
                                                        }
                                                    }),
                                                    onClick: showThirdStep,
                                                    sx: {
                                                        my: 2,
                                                        color: "white",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        textTransform: "none"
                                                    },
                                                    variant: "text",
                                                    size: "medium",
                                                    children: "Back"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    type: "submit",
                                                    sx: {
                                                        my: 2,
                                                        backgroundColor: "white",
                                                        color: "black",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        textTransform: "none"
                                                    },
                                                    variant: "contained",
                                                    size: "medium",
                                                    children: "Create Group"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: botSetup ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                margin: "0 auto",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                    sx: {
                                        mt: 5,
                                        textAlign: "center",
                                        color: "#858992",
                                        fontSize: "14px"
                                    },
                                    children: "Click on the link below to create Bot"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "center",
                                        mt: 2
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        onClick: createBot,
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "black"
                                            }
                                        }),
                                        sx: {
                                            my: 2,
                                            borderRadius: "12px",
                                            backgroundColor: "#ffffff",
                                            color: "Black",
                                            fontSize: "16px",
                                            cursor: "pointer",
                                            textTransform: "none",
                                            width: "291px",
                                            height: "52px",
                                            ":hover": {
                                                backgroundColor: "#7d7d7d"
                                            }
                                        },
                                        variant: "contained",
                                        size: "medium",
                                        children: "Create Bot"
                                    })
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                margin: "0 auto",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                    gutterBottom: true,
                                    sx: {
                                        mt: 5,
                                        textAlign: "center",
                                        fontSize: "22px",
                                        color: "white"
                                    },
                                    children: "You are not in any group yet"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Typography, {
                                    sx: {
                                        textAlign: "center",
                                        color: "#858992",
                                        fontSize: "14px"
                                    },
                                    children: "Create your group or join will appear here"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    sx: {
                                        display: "flex",
                                        justifyContent: "center",
                                        mt: 2
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        onClick: ()=>{
                                            setGroup(true);
                                        },
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "black"
                                            }
                                        }),
                                        sx: {
                                            my: 2,
                                            borderRadius: "12px",
                                            backgroundColor: "#ffffff",
                                            color: "Black",
                                            fontSize: "16px",
                                            cursor: "pointer",
                                            textTransform: "none",
                                            width: "291px",
                                            height: "52px",
                                            ":hover": {
                                                backgroundColor: "#7d7d7d"
                                            }
                                        },
                                        variant: "contained",
                                        size: "medium",
                                        children: "Create an investment Club"
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
}
async function getStaticProps() {
    const res = await fetch("https://api-polygon-tokens.polygon.technology/tokenlists/testnet.tokenlist.json");
    const json = await res.json();
    return {
        props: {
            tokens: json.tokens
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 6843:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ContentCopy");

/***/ }),

/***/ 4845:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 8636:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardBackspace");

/***/ }),

/***/ 5453:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoreHoriz");

/***/ }),

/***/ 2596:
/***/ ((module) => {

module.exports = require("@mui/icons-material/OpenInNew");

/***/ }),

/***/ 6715:
/***/ ((module) => {

module.exports = require("@mui/lab/AdapterDateFns");

/***/ }),

/***/ 2089:
/***/ ((module) => {

module.exports = require("@mui/lab/DatePicker");

/***/ }),

/***/ 9904:
/***/ ((module) => {

module.exports = require("@mui/lab/LocalizationProvider");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 9048:
/***/ ((module) => {

module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8855:
/***/ ((module) => {

module.exports = require("@mui/material/InputBase");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 1011:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 3787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 9564:
/***/ ((module) => {

module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 5768:
/***/ ((module) => {

module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 5573:
/***/ ((module) => {

module.exports = require("boring-avatars");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 2840:
/***/ ((module) => {

module.exports = require("web3modal");

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 9466:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract IGnosisSafeProxyFactory","name":"_PROXY_FACTORY","type":"address"},{"internalType":"address","name":"_MASTER_COPY","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"groupAddress","type":"address"},{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"string","name":"groupName","type":"string"},{"indexed":false,"internalType":"string","name":"groupSymbol","type":"string"},{"indexed":false,"internalType":"address","name":"depositToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositEndDate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"depositLimit","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxMembers","type":"uint256"},{"indexed":false,"internalType":"address","name":"treasureAddress","type":"address"}],"name":"NewGroup","type":"event"},{"inputs":[{"internalType":"address[]","name":"_gnosisowners","type":"address[]"},{"internalType":"string","name":"_groupName","type":"string"},{"internalType":"string","name":"_groupSymbol","type":"string"},{"internalType":"address","name":"_depositToken","type":"address"},{"internalType":"uint256","name":"_depositEndDate","type":"uint256"},{"internalType":"uint256","name":"_depositLimit","type":"uint256"},{"internalType":"uint256","name":"_maxMembers","type":"uint256"}],"name":"createGroup","outputs":[{"internalType":"address","name":"groupAddress","type":"address"},{"internalType":"address","name":"safeAddress","type":"address"}],"stateMutability":"nonpayable","type":"function"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,485], () => (__webpack_exec__(4186)));
module.exports = __webpack_exports__;

})();