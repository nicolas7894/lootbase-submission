"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 3667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./componets/Layout.tsx + 2 modules
var Layout = __webpack_require__(4485);
// EXTERNAL MODULE: external "boring-avatars"
var external_boring_avatars_ = __webpack_require__(5573);
var external_boring_avatars_default = /*#__PURE__*/__webpack_require__.n(external_boring_avatars_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardMedia"
var CardMedia_ = __webpack_require__(6731);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);
;// CONCATENATED MODULE: external "@mui/material/CardActionArea"
const CardActionArea_namespaceObject = require("@mui/material/CardActionArea");
var CardActionArea_default = /*#__PURE__*/__webpack_require__.n(CardActionArea_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/material/Paper"
const Paper_namespaceObject = require("@mui/material/Paper");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuList"
const MenuList_namespaceObject = require("@mui/material/MenuList");
var MenuList_default = /*#__PURE__*/__webpack_require__.n(MenuList_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/MenuItem"
var MenuItem_ = __webpack_require__(9271);
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tabs"
const Tabs_namespaceObject = require("@mui/material/Tabs");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Tab"
const Tab_namespaceObject = require("@mui/material/Tab");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
;// CONCATENATED MODULE: external "@mui/icons-material/CachedSharp"
const CachedSharp_namespaceObject = require("@mui/icons-material/CachedSharp");
var CachedSharp_default = /*#__PURE__*/__webpack_require__.n(CachedSharp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/WorkspacePremium"
const WorkspacePremium_namespaceObject = require("@mui/icons-material/WorkspacePremium");
var WorkspacePremium_default = /*#__PURE__*/__webpack_require__.n(WorkspacePremium_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Settings"
const Settings_namespaceObject = require("@mui/icons-material/Settings");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/BorderColor"
const BorderColor_namespaceObject = require("@mui/icons-material/BorderColor");
var BorderColor_default = /*#__PURE__*/__webpack_require__.n(BorderColor_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/dashboard.tsx



























const Web3 = __webpack_require__(8519);
function TabPanel(props) {
    const { children , value , index , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `simple-tabpanel-${index}`,
        "aria-labelledby": `simple-tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                p: 4
            },
            children: children
        })
    });
}
TabPanel.propTypes = {
    children: (external_prop_types_default()).node,
    index: (external_prop_types_default()).number.isRequired,
    value: (external_prop_types_default()).number.isRequired
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}
function Dashboard({ collections  }) {
    const router = (0,router_.useRouter)();
    const [loading, setLoading] = external_react_.useState(false);
    const [collectibles, setCollectibles] = external_react_.useState(collections);
    const [value, setValue] = external_react_.useState(0);
    const [subvalue, setSubValue] = external_react_.useState(0);
    const [group, setGroup] = external_react_.useState({
        groupName: "",
        groupSymbol: "",
        depositLimit: "",
        owner: "",
        totalDeposited: "",
        totalMinted: "",
        treasureAddress: ""
    });
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    const handleChangeSubTab = (event, newValue)=>{
        setSubValue(newValue);
    };
    external_react_.useEffect(()=>{
        if (router.isReady) {
            const groupDetails = JSON.parse(localStorage.getItem("groupAddress") || "");
            if (groupDetails !== "") {
                getGroupDeatils();
            } else {
                router.push({
                    pathname: "/"
                });
            }
        }
    }, [
        router.isReady,
        router.query,
        router.pathname
    ]);
    const getGroupDeatils = async ()=>{
        setLoading(true);
        const groupDetails = JSON.parse(localStorage.getItem("groupAddress") || "");
        const currentGroupAddress = groupDetails === null || groupDetails === void 0 ? void 0 : groupDetails.args[0];
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        const response = await fetch(`http://207.154.202.18:3000/groups/${currentGroupAddress}`, requestOptions);
        const jsonData = await response.json();
        console.log("currentGroup", jsonData);
        setGroup(jsonData);
        setLoading(false);
    };
    const addDeposit = async ()=>{
        setLoading(true);
        const groupDetails = JSON.parse(localStorage.getItem("groupAddress") || "");
        const currentGroupAddress = groupDetails === null || groupDetails === void 0 ? void 0 : groupDetails.args[0];
        console.log("groupDetails", groupDetails);
        const data = {
            groupAddress: currentGroupAddress,
            redirectUrl: "http://localhost:3000/dashboard"
        };
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(`http://207.154.202.18:3000/bot/depostit`, requestOptions);
        const jsonData = await response.json();
        setLoading(false);
    };
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                display: "flex",
                width: "100vw",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                size: 120
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            flexGrow: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            container: true,
                            spacing: 2,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 12,
                                    md: 7,
                                    lg: 7,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            sx: {
                                                my: 4
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                display: "flex",
                                                spacing: 2,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 2,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_boring_avatars_default()), {
                                                            size: 36,
                                                            name: "group",
                                                            variant: "pixel",
                                                            colors: [
                                                                "#ffad08",
                                                                "#edd75a",
                                                                "#73b06f",
                                                                "#0c8f8f",
                                                                "#405059", 
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 7,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h5",
                                                            sx: {
                                                                color: "white",
                                                                textAlign: "left"
                                                            },
                                                            children: group === null || group === void 0 ? void 0 : group.groupName
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        xs: 3,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h5",
                                                            sx: {
                                                                color: "white",
                                                                textAlign: "left"
                                                            },
                                                            children: group === null || group === void 0 ? void 0 : group.groupSymbol
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                display: "flex",
                                                spacing: 2,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        sm: 12,
                                                        xs: 4,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                            sx: {
                                                                display: "flex",
                                                                flexDirection: "column"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body1",
                                                                    sx: {
                                                                        color: "#959ca7",
                                                                        textAlign: "left"
                                                                    },
                                                                    children: "Deposit Limit"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                    variant: "body1",
                                                                    sx: {
                                                                        color: "white",
                                                                        textAlign: "left"
                                                                    },
                                                                    children: [
                                                                        group === null || group === void 0 ? void 0 : group.depositLimit,
                                                                        " ETH"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        sm: 12,
                                                        xs: 4,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                            sx: {
                                                                display: "flex",
                                                                flexDirection: "column"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body1",
                                                                    sx: {
                                                                        color: "#959ca7",
                                                                        textAlign: "left"
                                                                    },
                                                                    children: "Total Deposited"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                    variant: "body1",
                                                                    sx: {
                                                                        color: "white",
                                                                        textAlign: "left"
                                                                    },
                                                                    children: [
                                                                        group === null || group === void 0 ? void 0 : group.totalDeposited,
                                                                        " ETH"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                        item: true,
                                                        sm: 12,
                                                        xs: 4,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                            sx: {
                                                                display: "flex",
                                                                flexDirection: "column"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                    variant: "body1",
                                                                    sx: {
                                                                        color: "#959ca7",
                                                                        textAlign: "left"
                                                                    },
                                                                    children: "Total Minted"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                    variant: "body1",
                                                                    sx: {
                                                                        color: "white",
                                                                        textAlign: "left"
                                                                    },
                                                                    children: [
                                                                        group === null || group === void 0 ? void 0 : group.totalMinted,
                                                                        " ETH"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                    item: true,
                                    xs: 12,
                                    sm: 12,
                                    md: 5,
                                    lg: 5,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                display: "flex",
                                                flexDirection: "row",
                                                p: 4,
                                                mb: 4,
                                                borderRadius: "15px",
                                                background: "#0e2733"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((CachedSharp_default()), {
                                                        sx: {
                                                            color: "#24f4e9"
                                                        }
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "h5",
                                                    sx: {
                                                        color: "white",
                                                        alignSelf: "center",
                                                        ml: 4
                                                    },
                                                    children: " Active"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    onClick: addDeposit,
                                                    variant: "h5",
                                                    sx: {
                                                        color: "white",
                                                        alignSelf: "center",
                                                        cursor: "pointer",
                                                        ml: 4
                                                    },
                                                    children: " Add Deposit"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Paper_default()), {
                                                sx: {
                                                    width: "100%",
                                                    p: 4,
                                                    maxWidth: "100%",
                                                    background: "#131416"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuList_default()), {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                                            sx: {
                                                                p: 2
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((WorkspacePremium_default()), {
                                                                        sx: {
                                                                            color: "white"
                                                                        },
                                                                        fontSize: "small"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                    sx: {
                                                                        color: "white"
                                                                    },
                                                                    primary: "Create an off-chain legal entity"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                                            sx: {
                                                                p: 2
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((BorderColor_default()), {
                                                                        sx: {
                                                                            color: "white"
                                                                        },
                                                                        fontSize: "small"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                    sx: {
                                                                        color: "white"
                                                                    },
                                                                    children: "Sign legal agreements"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((MenuItem_default()), {
                                                            sx: {
                                                                p: 2
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Settings_default()), {
                                                                        sx: {
                                                                            color: "white"
                                                                        },
                                                                        fontSize: "small"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                    sx: {
                                                                        color: "white"
                                                                    },
                                                                    children: "Modify settings"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        sx: {
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    borderBottom: 1,
                                    borderColor: "#959ca7"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                                    sx: {
                                        "&& .MuiTab-root": {
                                            color: "#959ca7",
                                            ":hover": {
                                                backgroundColor: "rgba(255,255,255,0.1)"
                                            }
                                        },
                                        "&& .Mui-selected": {
                                            "&, & .MuiListItemText-root": {
                                                color: "#ffffff",
                                                borderBottom: "2px solid #ffffff",
                                                fontSize: "16px"
                                            }
                                        },
                                        "& .MuiTabs-indicator": {
                                            display: "flex",
                                            height: "3px",
                                            justifyContent: "center",
                                            backgroundColor: "transparent",
                                            "& > span": {
                                                maxWidth: 60,
                                                width: "100%",
                                                backgroundColor: "#1976d2"
                                            }
                                        }
                                    },
                                    value: value,
                                    onChange: handleChange,
                                    "aria-label": "basic tabs example",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            label: "Assets",
                                            ...a11yProps(0)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            label: "Members",
                                            ...a11yProps(1)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            label: "Activity",
                                            ...a11yProps(2)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                                value: value,
                                index: 0,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                    container: true,
                                    spacing: 2,
                                    children: collectibles && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: collectibles === null || collectibles === void 0 ? void 0 : collectibles.map((data, index)=>{
                                            var ref;
                                            /*#__PURE__*/ return jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                xs: 12,
                                                sm: 6,
                                                md: 4,
                                                lg: 4,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Card_default()), {
                                                    sx: {
                                                        background: "#000000",
                                                        border: "1px solid #959ca7",
                                                        height: "20rem"
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardActionArea_default()), {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                                                component: "img",
                                                                height: "140",
                                                                image: data === null || data === void 0 ? void 0 : data.logo_url,
                                                                alt: "green iguana"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                        sx: {
                                                                            color: "white",
                                                                            textAlign: "left"
                                                                        },
                                                                        gutterBottom: true,
                                                                        variant: "h5",
                                                                        component: "div",
                                                                        children: data === null || data === void 0 ? void 0 : data.collection_name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                                        sx: {
                                                                            position: "absolute",
                                                                            top: "90%"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                                sx: {
                                                                                    textAlign: "left",
                                                                                    mt: 4,
                                                                                    color: "#959ca7"
                                                                                },
                                                                                variant: "body2",
                                                                                children: "Floor Price"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                                                sx: {
                                                                                    color: "white",
                                                                                    textAlign: "left",
                                                                                    mt: 1
                                                                                },
                                                                                variant: "body2",
                                                                                color: "text.secondary",
                                                                                children: [
                                                                                    data === null || data === void 0 ? void 0 : (ref = data.statistics) === null || ref === void 0 ? void 0 : ref.floor,
                                                                                    " ETH"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, index);
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                                value: value,
                                index: 1,
                                children: "Item Two"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(TabPanel, {
                                value: value,
                                index: 2,
                                children: "Item Three"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
async function getStaticProps() {
    const res = await fetch("https://api.modulenft.xyz/api/v1/opensea/collection/rankings?sort_by=SEVEN_DAY_VOLUME&count=100&offset=0");
    const json = await res.json();
    return {
        props: {
            collections: json.rankings
        }
    };
}
/* harmony default export */ const dashboard = (Dashboard);


/***/ }),

/***/ 6843:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ContentCopy");

/***/ }),

/***/ 4845:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDown");

/***/ }),

/***/ 5453:
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoreHoriz");

/***/ }),

/***/ 2596:
/***/ ((module) => {

module.exports = require("@mui/icons-material/OpenInNew");

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

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

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

/***/ 8519:
/***/ ((module) => {

module.exports = require("web3");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,61,485], () => (__webpack_exec__(3667)));
module.exports = __webpack_exports__;

})();