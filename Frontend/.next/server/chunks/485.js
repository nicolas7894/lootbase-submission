"use strict";
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 4485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ componets_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/InputBase"
var InputBase_ = __webpack_require__(8855);
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_);
// EXTERNAL MODULE: external "@mui/material/Popover"
var Popover_ = __webpack_require__(5768);
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
// EXTERNAL MODULE: external "@mui/material/ListItemButton"
var ListItemButton_ = __webpack_require__(1011);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton_);
// EXTERNAL MODULE: external "@mui/material/ListItemIcon"
var ListItemIcon_ = __webpack_require__(3787);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/icons-material/ContentCopy"
var ContentCopy_ = __webpack_require__(6843);
var ContentCopy_default = /*#__PURE__*/__webpack_require__.n(ContentCopy_);
// EXTERNAL MODULE: external "@mui/icons-material/OpenInNew"
var OpenInNew_ = __webpack_require__(2596);
var OpenInNew_default = /*#__PURE__*/__webpack_require__.n(OpenInNew_);
// EXTERNAL MODULE: external "@mui/icons-material/MoreHoriz"
var MoreHoriz_ = __webpack_require__(5453);
var MoreHoriz_default = /*#__PURE__*/__webpack_require__.n(MoreHoriz_);
// EXTERNAL MODULE: external "@mui/icons-material/KeyboardArrowDown"
var KeyboardArrowDown_ = __webpack_require__(4845);
var KeyboardArrowDown_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowDown_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "boring-avatars"
var external_boring_avatars_ = __webpack_require__(5573);
var external_boring_avatars_default = /*#__PURE__*/__webpack_require__.n(external_boring_avatars_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: ./componets/utils/util.tsx
var util = __webpack_require__(1542);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./componets/Header.tsx





























const drawerWidth = 140;
const Search = (0,styles_.styled)("div")(({ theme  })=>({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (0,styles_.alpha)(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: (0,styles_.alpha)(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    })
);
const SearchIconWrapper = (0,styles_.styled)("div")(({ theme  })=>({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })
);
const StyledInputBase = (0,styles_.styled)((InputBase_default()))(({ theme  })=>({
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: "12ch",
                "&:focus": {
                    width: "20ch"
                }
            }
        }
    })
);
function Header() {
    const providerOptions = {};
    // const web3Modal = new Web3Modal({
    //   network: "rinkeby", // optional
    //   cacheProvider: true, // optional
    //   providerOptions // required
    // });
    const [userAddress, setWalletAddress] = external_react_.useState("");
    const [noMetamaskModal, shownoMetamaskModal] = external_react_.useState(false);
    const noMetaMaskModalClose = ()=>{
        shownoMetamaskModal(false);
    };
    external_react_.useEffect(()=>{
        if (localStorage.getItem("account")) {
            const existingUser = localStorage.getItem("account");
            setWalletAddress(existingUser);
        }
    }, []);
    const [anchorElWalletInfo, setAnchorElWalletInfo] = external_react_.useState(null);
    const handleOpenWalletInfo = (event)=>{
        setAnchorElWalletInfo(event.currentTarget);
    };
    const handleCloseWalletInfo = ()=>{
        setAnchorElWalletInfo(null);
    };
    const [anchorElMore, setAnchorElMore] = external_react_.useState(null);
    const handleOpenMore = (event)=>{
        setAnchorElMore(event.currentTarget);
    };
    const handleCloseMore = ()=>{
        setAnchorElMore(null);
    };
    async function requestAccount() {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                setWalletAddress(accounts[0]);
                localStorage.setItem("account", accounts[0]);
            } catch (error) {
                console.log(error);
            }
        } else {
            //show download metamask modal
            shownoMetamaskModal(true);
        }
    }
    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount();
            const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
        } else {}
    }
    async function disconnect() {
        // const clear = await web3Modal.clearCachedProvider();
        setWalletAddress("");
        localStorage.removeItem("account");
    }
    // React.useState(()=>{
    //   if((window as any).ethereum !== 'undefined') {
    //     (window as any).ethereum.on('chainChanged', async () => {
    //       const accounts = await (window as any).ethereum.request({
    //         method: "eth_requestAccounts"
    //     })
    //     setWalletAddress(accounts[0]);
    //     localStorage.setItem("account", accounts[0]);
    //       // window.location.reload();
    //     })
    //     (window as any).ethereum.on('accountsChanged', async () => {
    //       const accounts = await (window as any).ethereum.request({
    //         method: "eth_requestAccounts"
    //     })
    //     setWalletAddress(accounts[0]);
    //     localStorage.setItem("account", accounts[0]);
    //       // window.location.reload();
    //     })
    // }
    // },[])
    const modalStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 320,
        bgcolor: "#242526",
        borderRadius: "25px",
        boxShadow: 24,
        p: 4
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                BackdropProps: {
                    timeout: 500
                },
                closeAfterTransition: true,
                onClose: noMetaMaskModalClose,
                open: noMetamaskModal,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: modalStyle,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        sx: {
                            color: "white"
                        },
                        children: [
                            "You do no have metamask installed on this browser Please install ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                style: {
                                    color: "blue"
                                },
                                href: "https://metamask.io/",
                                children: " Metamask"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    flexGrow: 1
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                    position: "fixed",
                    sx: {
                        backgroundColor: "black"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    noWrap: true,
                                    component: "div",
                                    sx: {
                                        display: {
                                            xs: "none",
                                            md: "flex",
                                            sm: "flex"
                                        },
                                        flexGrow: 1
                                    },
                                    children: "Portfolio"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        ml: {
                                            sx: 0,
                                            md: 15,
                                            sm: 15
                                        }
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                src: "/images/lootbase-white.png",
                                                width: 60,
                                                height: 32,
                                                alt: `lootbase Icon`
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        flexGrow: 1
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        display: "flex"
                                    },
                                    children: [
                                        userAddress ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                onClick: handleOpenWalletInfo,
                                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx((external_boring_avatars_default()), {
                                                    size: 36,
                                                    name: userAddress,
                                                    variant: "pixel",
                                                    colors: [
                                                        "#ffad08",
                                                        "#edd75a",
                                                        "#73b06f",
                                                        "#0c8f8f",
                                                        "#405059", 
                                                    ]
                                                }),
                                                endIcon: /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowDown_default()), {}),
                                                variant: "outlined",
                                                sx: (theme)=>({
                                                        borderRadius: theme.shape.borderRadius = 30,
                                                        background: "#131416",
                                                        border: "none",
                                                        color: "white",
                                                        textTransform: "none"
                                                    })
                                                ,
                                                children: (0,util/* shortenAddress */.Xn)(userAddress)
                                            })
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                onClick: requestAccount,
                                                startIcon: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                    src: "/images/metamask.png",
                                                    width: 45,
                                                    height: 32,
                                                    alt: `metamask Icon`
                                                }),
                                                variant: "outlined",
                                                sx: {
                                                    border: "1px solid white",
                                                    color: "white",
                                                    textTransform: "none"
                                                },
                                                children: "Connect to Metamask"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Popover_default()), {
                                            open: Boolean(anchorElWalletInfo),
                                            anchorEl: anchorElWalletInfo,
                                            onClose: handleCloseWalletInfo,
                                            keepMounted: true,
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            },
                                            sx: {
                                                mt: "45px"
                                            },
                                            PaperProps: {
                                                sx: {
                                                    background: "black",
                                                    border: "1px solid grey",
                                                    borderRadius: "10px",
                                                    width: 330
                                                }
                                            },
                                            transformOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                sx: {
                                                    flexGrow: 1,
                                                    p: 1
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                    container: true,
                                                    direction: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                            sx: {
                                                                flexGrow: 1,
                                                                p: 2,
                                                                background: "#131416",
                                                                BorderTopRounded: 3
                                                            },
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                                sx: {
                                                                    color: "white"
                                                                },
                                                                children: (0,util/* shortenAddress */.Xn)(userAddress)
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                            sx: {
                                                                height: "1px",
                                                                width: "100%",
                                                                background: "white"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                                            sx: {
                                                                width: "100%"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                                    sx: {
                                                                        ":hover": {
                                                                            background: "#131416"
                                                                        }
                                                                    },
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                                sx: {
                                                                                    color: "white"
                                                                                },
                                                                                primary: "Copy Address"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ContentCopy_default()), {
                                                                                    sx: {
                                                                                        color: "white"
                                                                                    }
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                                    sx: {
                                                                        ":hover": {
                                                                            background: "#131416"
                                                                        }
                                                                    },
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                                sx: {
                                                                                    color: "white"
                                                                                },
                                                                                primary: "View on Etherscan"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((OpenInNew_default()), {
                                                                                    sx: {
                                                                                        color: "white"
                                                                                    }
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                        onClick: disconnect,
                                                                        fullWidth: true,
                                                                        sx: {
                                                                            border: "none",
                                                                            background: "white",
                                                                            color: "black"
                                                                        },
                                                                        children: "Disconnect"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                            onClick: handleOpenMore,
                                            sx: {
                                                ml: 1,
                                                borderRadius: (theme)=>theme.shape.borderRadius = 30
                                                ,
                                                background: "#131416"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((MoreHoriz_default()), {
                                                sx: {
                                                    color: "white"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Popover_default()), {
                                            open: Boolean(anchorElMore),
                                            anchorEl: anchorElMore,
                                            onClose: handleCloseMore,
                                            keepMounted: true,
                                            anchorOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            },
                                            sx: {
                                                mt: "45px"
                                            },
                                            PaperProps: {
                                                sx: {
                                                    background: "black",
                                                    border: "1px solid grey",
                                                    borderRadius: "10px",
                                                    width: 230
                                                }
                                            },
                                            transformOrigin: {
                                                vertical: "top",
                                                horizontal: "right"
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                sx: {
                                                    flexGrow: 1,
                                                    p: 1
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                    container: true,
                                                    direction: "row",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((List_default()), {
                                                        sx: {
                                                            width: "100%"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                                sx: {
                                                                    ":hover": {
                                                                        background: "#131416"
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                                                    component: "a",
                                                                    href: "https://discord.gg/NMY68wfA",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                        sx: {
                                                                            color: "white"
                                                                        },
                                                                        primary: "Discord"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                                                sx: {
                                                                    ":hover": {
                                                                        background: "#131416"
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemButton_default()), {
                                                                    component: "a",
                                                                    href: "https://www.instagram.com/dyspay.finance/",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                                        sx: {
                                                                            color: "white"
                                                                        },
                                                                        primary: "Instagram"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./componets/meta.tsx

 // HTML Head
function Meta() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "true"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                href: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap`,
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Dispay"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: "Dispay"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1.0, width=device-width"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon.ico"
            })
        ]
    });
};

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./componets/Layout.tsx








const Layout = ({ children  })=>{
    const { 0: height , 1: setHeight  } = (0,external_react_.useState)(Number);
    (0,external_react_.useEffect)(()=>{
        setHeight(window.screen.height);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "main-wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Meta, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    component: "main",
                    sx: {
                        paddingTop: "5rem",
                        marginBottom: "5rem",
                        paddingBottom: "5rem",
                        backgroundColor: "black",
                        margin: {
                            xs: "auto",
                            md: "auto",
                            sm: "auto"
                        },
                        flexGrow: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {}),
                            children
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const componets_Layout = (Layout);


/***/ }),

/***/ 1542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xn": () => (/* binding */ shortenAddress),
/* harmony export */   "Uq": () => (/* binding */ toTimestamp)
/* harmony export */ });
/* unused harmony export weiConverter */
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

const shortenAddress = (address)=>{
    if (!address) return "";
    if (address.startsWith("0x")) {
        if (address.length < 12) return address;
        return address.slice(0, 6) + "..." + address.slice(-4);
    }
    if (address.length < 10) return address;
    return address.slice(0, 4) + "..." + address.slice(-4);
};
const toTimestamp = (strDate)=>{
    var datum = Date.parse(strDate);
    return datum / 1000;
};
const weiConverter = (weiValue)=>{
    const balance = BigNumber.from(parseInt(weiValue));
    const remainder = balance.mod(100000000000000);
    return utils.formatEther(balance.sub(remainder));
};


/***/ })

};
;