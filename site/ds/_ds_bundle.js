/* @ds-bundle: {"format":3,"namespace":"ApostilleXpressDesignSystem_141fbe","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ButtonGroup","sourcePath":"components/buttons/ButtonGroup.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"PaymentMethod","sourcePath":"components/commerce/PaymentMethod.jsx"},{"name":"Accordion","sourcePath":"components/data-display/Accordion.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data-display/Card.jsx"},{"name":"CardBody","sourcePath":"components/data-display/Card.jsx"},{"name":"CardFooter","sourcePath":"components/data-display/Card.jsx"},{"name":"Carousel","sourcePath":"components/data-display/Carousel.jsx"},{"name":"EmptyState","sourcePath":"components/data-display/EmptyState.jsx"},{"name":"ListGroup","sourcePath":"components/data-display/ListGroup.jsx"},{"name":"ListItem","sourcePath":"components/data-display/ListGroup.jsx"},{"name":"Skeleton","sourcePath":"components/data-display/Skeleton.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Badge.jsx"},{"name":"NotificationItem","sourcePath":"components/feedback/NotificationItem.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Stepper","sourcePath":"components/feedback/Stepper.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Datepicker","sourcePath":"components/forms/Datepicker.jsx"},{"name":"FileUpload","sourcePath":"components/forms/FileUpload.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchBox","sourcePath":"components/forms/SearchBox.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"FeaturedIcon","sourcePath":"components/layout/FeaturedIcon.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Drawer","sourcePath":"components/overlays/Drawer.jsx"},{"name":"Dropdown","sourcePath":"components/overlays/Dropdown.jsx"},{"name":"Modal","sourcePath":"components/overlays/Modal.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"00a0b647f42e","components/buttons/Button.jsx":"0dd835099e9f","components/buttons/ButtonGroup.jsx":"9ae93b7df664","components/buttons/IconButton.jsx":"3f62e1b5600e","components/commerce/PaymentMethod.jsx":"98d9f69a39b4","components/data-display/Accordion.jsx":"d466664aceab","components/data-display/Avatar.jsx":"a598ddc4dfeb","components/data-display/Card.jsx":"f6942fe76ccf","components/data-display/Carousel.jsx":"b7c10bf9f997","components/data-display/EmptyState.jsx":"770f33d56673","components/data-display/ListGroup.jsx":"d9ac0f884b41","components/data-display/Skeleton.jsx":"1360a62d036b","components/data-display/Table.jsx":"94623836f776","components/feedback/Alert.jsx":"3aa5f7a7eb54","components/feedback/Badge.jsx":"ddfd01d9f413","components/feedback/NotificationItem.jsx":"ce4e9ba30ccc","components/feedback/Spinner.jsx":"d3a9a2f43b3c","components/feedback/Stepper.jsx":"44720b606054","components/feedback/Toast.jsx":"571554ceb09a","components/feedback/Tooltip.jsx":"a055d90fde8a","components/forms/Checkbox.jsx":"f369822e3e99","components/forms/Datepicker.jsx":"8b0fd0df1fe7","components/forms/FileUpload.jsx":"c6b05a88b797","components/forms/FormField.jsx":"5114f30a7b61","components/forms/Input.jsx":"d3565324ef49","components/forms/Radio.jsx":"aeb68a91310c","components/forms/SearchBox.jsx":"bfaf740494bd","components/forms/Select.jsx":"e1f71e487303","components/forms/Switch.jsx":"a33e4b691efd","components/layout/Divider.jsx":"1fa329a82f53","components/layout/FeaturedIcon.jsx":"78e3ee64c74c","components/navigation/Breadcrumb.jsx":"ffcfef9c6bb7","components/navigation/Navbar.jsx":"a2a062fa3453","components/navigation/Pagination.jsx":"72a9f129e4a2","components/navigation/Tabs.jsx":"79a6a848732d","components/overlays/Drawer.jsx":"048019395eac","components/overlays/Dropdown.jsx":"8a768bfcc715","components/overlays/Modal.jsx":"389959b3fc80","ui_kits/competent-authority-portal/InfoCard.jsx":"2c163a71ee17","ui_kits/competent-authority-portal/OrderDetail.jsx":"ed6a3ea99c4d","ui_kits/competent-authority-portal/OrderList.jsx":"109b0b2fa9e2","ui_kits/competent-authority-portal/PortalSidebar.jsx":"b0c333e4a6ed","ui_kits/competent-authority-portal/PortalTopBar.jsx":"f9e618fb140f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ApostilleXpressDesignSystem_141fbe = window.ApostilleXpressDesignSystem_141fbe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Logo — renders an ApostilleXpress brand asset as an <img>.
 *
 * `kind`: "mark" (AX monogram), "wordmark" (ApostilleXpress), "gov" (@Gov lockup).
 * `tone`: "color" | "dark" | "white" | "light".
 * `basePath`: where the /assets/logos folder lives relative to the page
 *   (default "assets/logos"). Set this to match your file location.
 */
const FILES = {
  "mark-color": "ax-mark-color.svg",
  "mark-dark": "ax-mark-dark.svg",
  "mark-white": "ax-mark-white.svg",
  "mark-light": "ax-mark-light.svg",
  "wordmark-color": "ax-wordmark-color.svg",
  "wordmark-dark": "ax-wordmark-dark.svg",
  "wordmark-white": "ax-wordmark-white.svg",
  "wordmark-light": "ax-wordmark-light.svg",
  "gov-color": "ax-gov-color.svg",
  "gov-dark": "ax-gov-dark.svg",
  "gov-white": "ax-gov-white.svg",
  "gov-light": "ax-gov-light.svg"
};
function Logo({
  kind = "wordmark",
  tone = "color",
  height = 28,
  basePath = "assets/logos",
  alt,
  className = "",
  style = {},
  ...props
}) {
  const file = FILES[`${kind}-${tone}`] || FILES["wordmark-color"];
  return /*#__PURE__*/React.createElement("img", _extends({
    className: `ax-logo ${className}`,
    src: `${basePath}/${file}`,
    alt: alt || (kind === "gov" ? "ApostilleXpress @Gov" : "ApostilleXpress"),
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    }
  }, props));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "8px 12px",
    fontSize: "14px",
    gap: "6px",
    height: "36px"
  },
  md: {
    padding: "10px 14px",
    fontSize: "14px",
    gap: "8px",
    height: "40px"
  },
  lg: {
    padding: "10px 16px",
    fontSize: "16px",
    gap: "8px",
    height: "44px"
  }
};
const ICON_PAD = {
  sm: "8px",
  md: "10px",
  lg: "12px"
};
function variantStyle(variant) {
  switch (variant) {
    case "secondary":
      return {
        background: "var(--ax-surface-card)",
        color: "var(--ax-text-primary)",
        border: "1px solid var(--ax-border)",
        boxShadow: "var(--ax-shadow-xs)"
      };
    case "outline":
      return {
        background: "transparent",
        color: "var(--ax-sea-depths)",
        border: "1px solid var(--ax-sea-depths)"
      };
    case "tertiary":
      return {
        background: "transparent",
        color: "var(--ax-text-secondary)",
        border: "1px solid transparent"
      };
    case "link":
      return {
        background: "transparent",
        color: "var(--ax-text-link)",
        border: "1px solid transparent",
        padding: "0",
        height: "auto"
      };
    case "danger":
      return {
        background: "var(--ax-danger-600)",
        color: "#fff",
        border: "1px solid var(--ax-danger-600)",
        boxShadow: "var(--ax-shadow-xs)"
      };
    case "primary":
    default:
      return {
        background: "var(--ax-sea-depths)",
        color: "#fff",
        border: "1px solid var(--ax-sea-depths)",
        boxShadow: "var(--ax-shadow-xs)"
      };
  }
}

/**
 * ApostilleXpress Button — primary action control.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconOnly = false,
  leadingIcon,
  trailingIcon,
  disabled = false,
  fullWidth = false,
  className = "",
  style = {},
  ...props
}) {
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    fontFamily: "var(--ax-font-base)",
    fontWeight: "var(--ax-fw-semibold)",
    fontSize: s.fontSize,
    lineHeight: 1.4,
    padding: iconOnly ? ICON_PAD[size] : s.padding,
    borderRadius: "var(--ax-radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background .15s ease, box-shadow .15s ease, border-color .15s ease, transform .05s ease",
    textDecoration: variant === "link" ? "underline" : "none",
    whiteSpace: "nowrap",
    ...variantStyle(variant),
    ...style
  };
  if (iconOnly) {
    return /*#__PURE__*/React.createElement("button", _extends({
      className: `ax-btn ax-btn--${variant} ${className}`,
      style: base,
      disabled: disabled
    }, props), /*#__PURE__*/React.createElement("span", {
      className: "ax-btn__icon",
      "aria-hidden": "true",
      style: {
        display: "inline-flex"
      }
    }, leadingIcon || children));
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `ax-btn ax-btn--${variant} ${className}`,
    style: base,
    disabled: disabled
  }, props), leadingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "ax-btn__icon",
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, leadingIcon) : null, children, trailingIcon ? /*#__PURE__*/React.createElement("span", {
    className: "ax-btn__icon",
    "aria-hidden": "true",
    style: {
      display: "inline-flex"
    }
  }, trailingIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ButtonGroup.jsx
try { (() => {
/**
 * ButtonGroup — segmented row of connected buttons (single rounded outline).
 */
function ButtonGroup({
  items = [],
  value,
  onChange,
  size = "md",
  className = "",
  style = {}
}) {
  const pad = size === "sm" ? "8px 12px" : size === "lg" ? "10px 16px" : "10px 14px";
  const fs = size === "lg" ? "16px" : "14px";
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-btn-group ${className}`,
    role: "group",
    style: {
      display: "inline-flex",
      borderRadius: "var(--ax-radius-md)",
      boxShadow: "var(--ax-shadow-xs)",
      ...style
    }
  }, items.map((item, i) => {
    const active = (item.value ?? item.label) === value;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value ?? item.label,
      onClick: () => onChange && onChange(item.value ?? item.label),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: pad,
        fontFamily: "var(--ax-font-base)",
        fontSize: fs,
        fontWeight: "var(--ax-fw-semibold)",
        cursor: "pointer",
        background: active ? "var(--ax-teal-50)" : "var(--ax-surface-card)",
        color: active ? "var(--ax-sea-depths)" : "var(--ax-text-secondary)",
        border: "1px solid var(--ax-border)",
        borderLeftWidth: i === 0 ? "1px" : "0",
        borderTopLeftRadius: i === 0 ? "var(--ax-radius-md)" : 0,
        borderBottomLeftRadius: i === 0 ? "var(--ax-radius-md)" : 0,
        borderTopRightRadius: i === items.length - 1 ? "var(--ax-radius-md)" : 0,
        borderBottomRightRadius: i === items.length - 1 ? "var(--ax-radius-md)" : 0,
        position: "relative",
        zIndex: active ? 1 : 0
      }
    }, item.icon ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex"
      },
      "aria-hidden": "true"
    }, item.icon) : null, item.label);
  }));
}
Object.assign(__ds_scope, { ButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ButtonGroup.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only button. Thin wrapper over Button.
 */
function IconButton({
  icon,
  label,
  variant = "tertiary",
  size = "md",
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label
  }, props, {
    className: `ax-btn ax-btn--${variant} ${props.className || ""}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: size === "sm" ? "8px" : size === "lg" ? "12px" : "10px",
      borderRadius: "var(--ax-radius-md)",
      cursor: props.disabled ? "not-allowed" : "pointer",
      opacity: props.disabled ? 0.5 : 1,
      fontFamily: "var(--ax-font-base)",
      transition: "background .15s ease, border-color .15s ease",
      ...(variant === "primary" ? {
        background: "var(--ax-sea-depths)",
        color: "#fff",
        border: "1px solid var(--ax-sea-depths)"
      } : variant === "secondary" ? {
        background: "var(--ax-surface-card)",
        color: "var(--ax-text-primary)",
        border: "1px solid var(--ax-border)",
        boxShadow: "var(--ax-shadow-xs)"
      } : {
        background: "transparent",
        color: "var(--ax-text-secondary)",
        border: "1px solid transparent"
      }),
      ...props.style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    },
    "aria-hidden": "true"
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PaymentMethod.jsx
try { (() => {
const BRANDS = {
  visa: {
    label: "VISA",
    color: "#1a1f71"
  },
  mastercard: {
    label: "MC",
    color: "#eb001b"
  },
  amex: {
    label: "AMEX",
    color: "#006fcf"
  },
  discover: {
    label: "DISC",
    color: "#e87722"
  }
};

/**
 * PaymentMethod — a saved card row (brand chip + masked number + actions).
 * Mirrors the order "Payment Method · ending with 9849" pattern.
 */
function PaymentMethod({
  brand = "visa",
  last4 = "0000",
  label,
  selected = false,
  onSelect,
  action,
  className = "",
  style = {}
}) {
  const b = BRANDS[brand] || BRANDS.visa;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onSelect,
    className: `ax-payment ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 16px",
      border: `1px solid ${selected ? "var(--ax-sea-depths)" : "var(--ax-border)"}`,
      borderRadius: "var(--ax-radius-lg)",
      background: selected ? "var(--ax-teal-50)" : "var(--ax-surface-card)",
      cursor: onSelect ? "pointer" : "default",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 46,
      height: 30,
      borderRadius: "var(--ax-radius-sm)",
      background: "#fff",
      border: "1px solid var(--ax-border-subtle)",
      color: b.color,
      fontWeight: 800,
      fontStyle: "italic",
      fontSize: 12,
      flexShrink: 0
    }
  }, b.label), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ax-text-primary)"
    }
  }, label || `${brand[0].toUpperCase()}${brand.slice(1)} ending with ${last4}`), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ax-text-tertiary)"
    }
  }, "Credit Card (CC)")), action || (onSelect ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: `2px solid ${selected ? "var(--ax-sea-depths)" : "var(--ax-border-strong)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, selected ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--ax-sea-depths)"
    }
  }) : null) : null));
}
Object.assign(__ds_scope, { PaymentMethod });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PaymentMethod.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Accordion.jsx
try { (() => {
/**
 * Accordion — vertically stacked expandable panels.
 * items: [{ title, content }]. `multiple` allows several open at once.
 */
function Accordion({
  items = [],
  defaultOpen = [0],
  multiple = false,
  className = "",
  style = {}
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => setOpen(prev => {
    const next = new Set(multiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-accordion ${className}`,
    style: {
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-lg)",
      overflow: "hidden",
      background: "var(--ax-surface-card)",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? "none" : "1px solid var(--ax-border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        textAlign: "left",
        padding: "14px 18px",
        border: "none",
        background: isOpen ? "var(--ax-gray-25)" : "var(--ax-surface-card)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 15,
        fontWeight: 600,
        color: "var(--ax-text-primary)"
      }
    }, item.title), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: "inline-flex",
        color: "var(--ax-text-tertiary)",
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform .15s ease"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 6l4 4 4-4",
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })))), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 18px 16px",
        fontSize: 14,
        color: "var(--ax-text-secondary)",
        lineHeight: "var(--ax-lh-base)"
      }
    }, item.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56,
  "2xl": 64
};
const STATUS = {
  online: "var(--ax-success-500)",
  busy: "var(--ax-danger-500)",
  away: "var(--ax-warning-500)",
  offline: "var(--ax-gray-400)"
};
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

/**
 * Avatar — circular user/company image with initials fallback + status dot.
 */
function Avatar({
  name,
  src,
  size = "md",
  status,
  square = false,
  className = "",
  style = {}
}) {
  const px = SIZES[size] || size || 40;
  const dot = Math.max(8, Math.round(px * 0.28));
  return /*#__PURE__*/React.createElement("span", {
    className: `ax-avatar ${className}`,
    style: {
      position: "relative",
      display: "inline-flex",
      width: px,
      height: px,
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: square ? "var(--ax-radius-md)" : "50%",
      overflow: "hidden",
      background: "var(--ax-teal-50)",
      color: "var(--ax-sea-depths)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--ax-font-base)",
      fontWeight: "var(--ax-fw-semibold)",
      fontSize: px * 0.4,
      border: "1px solid var(--ax-border-subtle)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials(name)), status ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: dot,
      height: dot,
      borderRadius: "50%",
      background: STATUS[status] || STATUS.offline,
      border: "2px solid var(--ax-surface-card)"
    }
  }) : null);
}

/**
 * AvatarGroup — overlapping stack with optional +N overflow.
 */
function AvatarGroup({
  avatars = [],
  max = 4,
  size = "md",
  className = "",
  style = {}
}) {
  const px = SIZES[size] || 40;
  const shown = avatars.slice(0, max);
  const extra = avatars.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    className: `ax-avatar-group ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, shown.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -px * 0.3,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px var(--ax-surface-card)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, _extends({}, a, {
    size: size
  })))), extra > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -px * 0.3,
      width: px,
      height: px,
      borderRadius: "50%",
      background: "var(--ax-gray-100)",
      color: "var(--ax-text-secondary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--ax-font-base)",
      fontSize: px * 0.34,
      fontWeight: "var(--ax-fw-semibold)",
      boxShadow: "0 0 0 2px var(--ax-surface-card)"
    }
  }, "+", extra) : null);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
/**
 * Card — surface container with optional header/footer. White, soft shadow,
 * 12px radius. Compose freely; or use CardHeader / CardBody / CardFooter.
 */
function Card({
  children,
  padding = "20px",
  hoverable = false,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-card ${className}`,
    style: {
      background: "var(--ax-surface-card)",
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-xl)",
      boxShadow: "var(--ax-shadow-xs)",
      overflow: "hidden",
      transition: hoverable ? "box-shadow .15s ease, transform .15s ease" : "none",
      ...style
    }
  }, padding && !style.padding ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children) : children);
}
function CardHeader({
  title,
  subtitle,
  action,
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-card-header ${className}`,
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "12px",
      padding: "16px 20px",
      borderBottom: "1px solid var(--ax-border-subtle)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ax-font-heading)",
      fontSize: "16px",
      fontWeight: "var(--ax-fw-semibold)",
      color: "var(--ax-text-primary)"
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: "13px",
      color: "var(--ax-text-tertiary)",
      marginTop: 2
    }
  }, subtitle) : null, children), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action) : null);
}
function CardBody({
  children,
  padding = "20px",
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-card-body ${className}`,
    style: {
      padding,
      ...style
    }
  }, children);
}
function CardFooter({
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-card-footer ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "10px",
      padding: "14px 20px",
      borderTop: "1px solid var(--ax-border-subtle)",
      background: "var(--ax-gray-25)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardBody, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Carousel.jsx
try { (() => {
/**
 * Carousel — slide deck with prev/next and dot indicators.
 * `slides` is an array of nodes. Set `auto` for autoplay (ms).
 */
function Carousel({
  slides = [],
  height = 280,
  auto = 0,
  dark = false,
  className = "",
  style = {}
}) {
  const [i, setI] = React.useState(0);
  const n = slides.length;
  const go = d => setI(p => (p + d + n) % n);
  React.useEffect(() => {
    if (!auto || n <= 1) return;
    const t = setInterval(() => setI(p => (p + 1) % n), auto);
    return () => clearInterval(t);
  }, [auto, n]);
  const navBtn = dir => /*#__PURE__*/React.createElement("button", {
    onClick: () => go(dir === "prev" ? -1 : 1),
    "aria-label": dir,
    style: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      [dir === "prev" ? "left" : "right"]: 12,
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      background: "rgba(255,255,255,0.9)",
      color: "var(--ax-text-primary)",
      boxShadow: "var(--ax-shadow-md)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      transform: dir === "prev" ? "rotate(180deg)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-carousel ${className}`,
    style: {
      position: "relative",
      borderRadius: "var(--ax-radius-xl)",
      overflow: "hidden",
      height,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      transform: `translateX(-${i * 100}%)`,
      transition: "transform .4s ease"
    }
  }, slides.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    style: {
      flex: "0 0 100%",
      height: "100%"
    }
  }, s))), n > 1 ? navBtn("prev") : null, n > 1 ? navBtn("next") : null, n > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 14,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      gap: 7,
      zIndex: 2
    }
  }, slides.map((_, idx) => /*#__PURE__*/React.createElement("button", {
    key: idx,
    onClick: () => setI(idx),
    "aria-label": `Go to slide ${idx + 1}`,
    style: {
      width: idx === i ? 22 : 8,
      height: 8,
      borderRadius: "var(--ax-radius-full)",
      border: "none",
      cursor: "pointer",
      background: idx === i ? "var(--ax-sea-depths)" : dark ? "rgba(255,255,255,.6)" : "var(--ax-gray-300)",
      transition: "width .25s ease, background .25s ease"
    }
  }))) : null);
}
Object.assign(__ds_scope, { Carousel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Carousel.jsx", error: String((e && e.message) || e) }); }

// components/data-display/EmptyState.jsx
try { (() => {
/**
 * EmptyState — friendly placeholder for empty lists/searches.
 * Provide an icon (Bootstrap-Icon node), title, description and an action.
 */
function EmptyState({
  icon,
  title,
  description,
  action,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-empty ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 6,
      padding: "44px 24px",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: "var(--ax-radius-full)",
      background: "var(--ax-teal-50)",
      color: "var(--ax-sea-depths)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
      marginBottom: 6
    }
  }, icon || /*#__PURE__*/React.createElement("i", {
    className: "bi bi-inbox"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ax-font-heading)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--ax-text-primary)"
    }
  }, title), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--ax-text-tertiary)",
      maxWidth: 360
    }
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ListGroup.jsx
try { (() => {
/**
 * ListGroup — bordered vertical list of rows. Compose with ListItem.
 */
function ListGroup({
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-list-group ${className}`,
    style: {
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-lg)",
      overflow: "hidden",
      background: "var(--ax-surface-card)",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, React.Children.map(children, (child, i) => child ? React.cloneElement(child, {
    _first: i === 0
  }) : child));
}

/**
 * ListItem — a single row: optional leading media, title/subtitle, trailing.
 */
function ListItem({
  leading,
  title,
  subtitle,
  trailing,
  onClick,
  active = false,
  _first,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: `ax-list-item ${onClick ? "ax-row--hover" : ""} ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      borderTop: _first ? "none" : "1px solid var(--ax-border-subtle)",
      background: active ? "var(--ax-teal-50)" : "transparent",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, leading ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexShrink: 0
    }
  }, leading) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ax-text-primary)"
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ax-text-tertiary)",
      marginTop: 1
    }
  }, subtitle) : null), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexShrink: 0,
      color: "var(--ax-text-tertiary)"
    }
  }, trailing) : null);
}
Object.assign(__ds_scope, { ListGroup, ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ListGroup.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Skeleton.jsx
try { (() => {
/**
 * Skeleton — shimmering placeholder for loading content.
 * `variant`: "text" | "rect" | "circle". Compose several for a card skeleton.
 */
function Skeleton({
  variant = "text",
  width,
  height,
  radius,
  className = "",
  style = {}
}) {
  const base = {
    text: {
      width: width || "100%",
      height: height || 12,
      borderRadius: "var(--ax-radius-xs)"
    },
    rect: {
      width: width || "100%",
      height: height || 80,
      borderRadius: radius || "var(--ax-radius-md)"
    },
    circle: {
      width: width || 40,
      height: height || width || 40,
      borderRadius: "50%"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    className: `ax-skeleton ${className}`,
    "aria-hidden": "true",
    style: {
      display: "block",
      background: "linear-gradient(90deg, var(--ax-gray-100) 25%, var(--ax-gray-200) 37%, var(--ax-gray-100) 63%)",
      backgroundSize: "400% 100%",
      animation: "ax-shimmer 1.4s ease infinite",
      ...base,
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes ax-shimmer{0%{background-position:100% 0}100%{background-position:0 0}}`));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
/**
 * Table — lightweight data table. Pass `columns` ([{key,header,width,align,render}])
 * and `rows` (array of objects). Header is gray-50; rows hover. For order lists.
 */
function Table({
  columns = [],
  rows = [],
  rowKey = "id",
  onRowClick,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-table-wrap ${className}`,
    style: {
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-xl)",
      overflow: "hidden",
      background: "var(--ax-surface-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--ax-font-base)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--ax-gray-50)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "10px 16px",
      fontSize: "12px",
      fontWeight: "var(--ax-fw-semibold)",
      color: "var(--ax-text-tertiary)",
      textTransform: "uppercase",
      letterSpacing: "var(--ax-tracking-wide)",
      borderBottom: "1px solid var(--ax-border-subtle)",
      width: c.width,
      whiteSpace: "nowrap"
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: row[rowKey] ?? ri,
    className: "ax-row--hover",
    onClick: onRowClick ? () => onRowClick(row) : undefined,
    style: {
      cursor: onRowClick ? "pointer" : "default",
      borderBottom: ri === rows.length - 1 ? "none" : "1px solid var(--ax-border-subtle)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "12px 16px",
      fontSize: "14px",
      color: "var(--ax-text-primary)",
      verticalAlign: "middle"
    }
  }, c.render ? c.render(row[c.key], row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const KINDS = {
  info: {
    bg: "var(--ax-info-50)",
    bd: "var(--ax-info-200)",
    fg: "var(--ax-info-700)",
    icon: "info-circle-fill"
  },
  success: {
    bg: "var(--ax-success-50)",
    bd: "var(--ax-success-200)",
    fg: "var(--ax-success-600)",
    icon: "check-circle-fill"
  },
  warning: {
    bg: "var(--ax-warning-50)",
    bd: "var(--ax-warning-200)",
    fg: "var(--ax-warning-700)",
    icon: "exclamation-triangle-fill"
  },
  danger: {
    bg: "var(--ax-danger-50)",
    bd: "var(--ax-danger-200)",
    fg: "var(--ax-danger-600)",
    icon: "x-circle-fill"
  },
  brand: {
    bg: "var(--ax-teal-50)",
    bd: "var(--ax-teal-100)",
    fg: "var(--ax-sea-depths)",
    icon: "stars"
  }
};

/**
 * Alert — inline contextual message. Uses Bootstrap Icons by default
 * (pass your own `icon` node to override). Optional title + dismiss.
 */
function Alert({
  kind = "info",
  title,
  children,
  icon,
  onDismiss,
  className = "",
  style = {}
}) {
  const k = KINDS[kind] || KINDS.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    className: `ax-alert ${className}`,
    style: {
      display: "flex",
      gap: "12px",
      padding: "14px 16px",
      background: k.bg,
      border: `1px solid ${k.bd}`,
      borderRadius: "var(--ax-radius-lg)",
      fontFamily: "var(--ax-font-base)",
      color: "var(--ax-text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: k.fg,
      fontSize: "18px",
      lineHeight: "22px",
      flexShrink: 0
    }
  }, icon || /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${k.icon}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--ax-fw-semibold)",
      fontSize: "14px",
      marginBottom: children ? 2 : 0
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "14px",
      color: "var(--ax-text-secondary)"
    }
  }, children) : null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--ax-text-tertiary)",
      cursor: "pointer",
      padding: 2,
      height: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }))) : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const COLORS = {
  gray: {
    bg: "var(--ax-gray-100)",
    fg: "var(--ax-gray-700)",
    bd: "var(--ax-gray-200)"
  },
  brand: {
    bg: "var(--ax-teal-50)",
    fg: "var(--ax-sea-depths)",
    bd: "var(--ax-teal-100)"
  },
  success: {
    bg: "var(--ax-success-50)",
    fg: "var(--ax-success-600)",
    bd: "var(--ax-success-200)"
  },
  warning: {
    bg: "var(--ax-warning-50)",
    fg: "var(--ax-warning-700)",
    bd: "var(--ax-warning-200)"
  },
  danger: {
    bg: "var(--ax-danger-50)",
    fg: "var(--ax-danger-600)",
    bd: "var(--ax-danger-200)"
  },
  info: {
    bg: "var(--ax-info-50)",
    fg: "var(--ax-info-600)",
    bd: "var(--ax-info-200)"
  }
};
const SIZES = {
  sm: {
    padding: "2px 8px",
    fontSize: "12px"
  },
  md: {
    padding: "3px 10px",
    fontSize: "12px"
  },
  lg: {
    padding: "4px 12px",
    fontSize: "14px"
  }
};

/**
 * Badge — small status / count label. Solid or subtle, with optional dot.
 * Common for order status (Pending, In review, Apostilled, Rejected).
 */
function Badge({
  children,
  color = "gray",
  size = "md",
  pill = false,
  dot = false,
  solid = false,
  className = "",
  style = {}
}) {
  const c = COLORS[color] || COLORS.gray;
  const s = SIZES[size] || SIZES.md;
  const solidBg = {
    gray: "var(--ax-gray-600)",
    brand: "var(--ax-sea-depths)",
    success: "var(--ax-success-600)",
    warning: "var(--ax-warning-600)",
    danger: "var(--ax-danger-600)",
    info: "var(--ax-info-600)"
  }[color];
  return /*#__PURE__*/React.createElement("span", {
    className: `ax-badge ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      padding: s.padding,
      fontFamily: "var(--ax-font-base)",
      fontSize: s.fontSize,
      fontWeight: "var(--ax-fw-medium)",
      lineHeight: 1.4,
      color: solid ? "#fff" : c.fg,
      background: solid ? solidBg : c.bg,
      border: solid ? "1px solid transparent" : `1px solid ${c.bd}`,
      borderRadius: pill ? "var(--ax-radius-full)" : "var(--ax-radius-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: solid ? "#fff" : c.fg
    }
  }) : null, children);
}

/**
 * Tag — removable chip (e.g. selected filters).
 */
function Tag({
  children,
  onRemove,
  color = "gray",
  className = "",
  style = {}
}) {
  const c = COLORS[color] || COLORS.gray;
  return /*#__PURE__*/React.createElement("span", {
    className: `ax-tag ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 6px 4px 10px",
      fontFamily: "var(--ax-font-base)",
      fontSize: "13px",
      color: c.fg,
      background: c.bg,
      border: `1px solid ${c.bd}`,
      borderRadius: "var(--ax-radius-sm)",
      ...style
    }
  }, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      display: "inline-flex",
      border: "none",
      background: "transparent",
      color: c.fg,
      cursor: "pointer",
      padding: 2,
      borderRadius: 3,
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }))) : null);
}
Object.assign(__ds_scope, { Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/NotificationItem.jsx
try { (() => {
const TYPES = {
  info: {
    icon: "info-circle-fill",
    color: "var(--ax-info-600)"
  },
  success: {
    icon: "check-circle-fill",
    color: "var(--ax-success-600)"
  },
  warning: {
    icon: "exclamation-triangle-fill",
    color: "var(--ax-warning-700)"
  },
  order: {
    icon: "file-earmark-text-fill",
    color: "var(--ax-sea-depths)"
  }
};

/**
 * NotificationItem — a single notification row for a bell/inbox panel.
 * Use `avatar` for people, or `type` for a colored status icon. `unread`
 * shows a teal dot.
 */
function NotificationItem({
  title,
  body,
  time,
  type = "order",
  avatar,
  unread = false,
  onClick,
  className = "",
  style = {}
}) {
  const t = TYPES[type] || TYPES.order;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: `ax-notification ${onClick ? "ax-row--hover" : ""} ${className}`,
    style: {
      display: "flex",
      gap: 12,
      padding: "13px 16px",
      background: unread ? "var(--ax-teal-50)" : "transparent",
      cursor: onClick ? "pointer" : "default",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, avatar ? /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0
    }
  }, avatar) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      flexShrink: 0,
      borderRadius: "50%",
      background: "var(--ax-gray-100)",
      color: t.color,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${t.icon}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--ax-text-primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, title)), body ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ax-text-secondary)",
      marginTop: 1
    }
  }, body) : null, time ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ax-text-tertiary)",
      marginTop: 3
    }
  }, time) : null), unread ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--ax-sea-depths)",
      flexShrink: 0,
      marginTop: 6
    }
  }) : null);
}
Object.assign(__ds_scope, { NotificationItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/NotificationItem.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/**
 * Spinner — indeterminate loading indicator in brand teal.
 */
function Spinner({
  size = 24,
  thickness = 3,
  color = "var(--ax-sea-depths)",
  label,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `ax-spinner ${className}`,
    role: "status",
    "aria-label": label || "Loading",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: `${thickness}px solid var(--ax-gray-200)`,
      borderTopColor: color,
      display: "inline-block",
      animation: "ax-spin 0.7s linear infinite"
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: "14px",
      color: "var(--ax-text-secondary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("style", null, `@keyframes ax-spin{to{transform:rotate(360deg)}}`));
}

/**
 * ProgressBar — determinate horizontal progress (0–100).
 */
function ProgressBar({
  value = 0,
  height = 8,
  color = "var(--ax-sea-depths)",
  showLabel = false,
  className = "",
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-progress ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height,
      background: "var(--ax-gray-200)",
      borderRadius: "var(--ax-radius-full)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: color,
      borderRadius: "var(--ax-radius-full)",
      transition: "width .3s ease"
    }
  })), showLabel ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: "13px",
      color: "var(--ax-text-secondary)",
      minWidth: 34,
      textAlign: "right"
    }
  }, pct, "%") : null);
}
Object.assign(__ds_scope, { Spinner, ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Stepper.jsx
try { (() => {
/**
 * Stepper — horizontal order-flow progress indicator.
 * Steps are { label, description? }. `current` is the 0-based active index.
 * Completed steps show a check + teal connector; current shows a ring.
 */
function Stepper({
  steps = [],
  current = 0,
  type = "number",
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("ol", {
    className: `ax-stepper ${className}`,
    style: {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,
      ...style
    }
  }, steps.map((step, i) => {
    const status = i < current ? "complete" : i === current ? "current" : "upcoming";
    const last = i === steps.length - 1;
    const circleBg = status === "complete" ? "var(--ax-sea-depths)" : status === "current" ? "var(--ax-surface-card)" : "var(--ax-surface-card)";
    const circleBd = status === "upcoming" ? "var(--ax-gray-300)" : "var(--ax-sea-depths)";
    const circleFg = status === "complete" ? "#fff" : status === "current" ? "var(--ax-sea-depths)" : "var(--ax-text-tertiary)";
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        flex: last ? "0 0 auto" : 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        flexShrink: 0,
        borderRadius: "var(--ax-radius-full)",
        background: circleBg,
        border: `2px solid ${circleBd}`,
        color: circleFg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--ax-font-base)",
        fontSize: "14px",
        fontWeight: "var(--ax-fw-semibold)",
        boxShadow: status === "current" ? "var(--ax-ring)" : "none"
      }
    }, status === "complete" ? /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 8.5l3.2 3.2L13 5",
      stroke: "currentColor",
      strokeWidth: "2.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })) : type === "number" ? i + 1 : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "currentColor"
      }
    })), !last ? /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        margin: "0 8px",
        background: i < current ? "#087990" : "var(--ax-gray-200)",
        borderRadius: 2
      }
    }) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 8,
        paddingRight: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--ax-font-base)",
        fontSize: "14px",
        fontWeight: "var(--ax-fw-semibold)",
        color: status === "upcoming" ? "var(--ax-text-tertiary)" : "var(--ax-text-primary)"
      }
    }, step.label), step.description ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--ax-font-base)",
        fontSize: "13px",
        color: "var(--ax-text-tertiary)",
        marginTop: 2
      }
    }, step.description) : null));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const KINDS = {
  info: {
    fg: "var(--ax-info-600)",
    icon: "info-circle-fill"
  },
  success: {
    fg: "var(--ax-success-600)",
    icon: "check-circle-fill"
  },
  warning: {
    fg: "var(--ax-warning-700)",
    icon: "exclamation-triangle-fill"
  },
  danger: {
    fg: "var(--ax-danger-600)",
    icon: "x-circle-fill"
  }
};

/**
 * Toast — transient notification card. Render inside a fixed container
 * (e.g. bottom-right) for stacking. Self-contained look via inline styles.
 */
function Toast({
  kind = "info",
  title,
  children,
  onClose,
  action,
  className = "",
  style = {}
}) {
  const k = KINDS[kind] || KINDS.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: `ax-toast ${className}`,
    style: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
      width: 360,
      maxWidth: "100%",
      padding: "14px 16px",
      background: "var(--ax-surface-card)",
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-lg)",
      boxShadow: "var(--ax-shadow-lg)",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: k.fg,
      fontSize: "18px",
      lineHeight: "20px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${k.icon}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--ax-fw-semibold)",
      fontSize: "14px",
      color: "var(--ax-text-primary)"
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--ax-text-secondary)",
      marginTop: 2
    }
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--ax-text-tertiary)",
      cursor: "pointer",
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }))) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — dark hover label. CSS-only show/hide on hover/focus of children.
 */
function Tooltip({
  label,
  placement = "top",
  children,
  className = "",
  style = {}
}) {
  const pos = {
    top: {
      bottom: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginBottom: 8
    },
    bottom: {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: 8
    },
    left: {
      right: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginRight: 8
    },
    right: {
      left: "100%",
      top: "50%",
      transform: "translateY(-50%)",
      marginLeft: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    className: `ax-tooltip-wrap ${className}`,
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "ax-tooltip-bubble",
    style: {
      position: "absolute",
      ...pos,
      zIndex: "var(--ax-z-tooltip)",
      background: "var(--ax-gray-900)",
      color: "#fff",
      fontFamily: "var(--ax-font-base)",
      fontSize: "12px",
      fontWeight: "var(--ax-fw-medium)",
      padding: "6px 10px",
      borderRadius: "var(--ax-radius-sm)",
      whiteSpace: "nowrap",
      boxShadow: "var(--ax-shadow-md)",
      opacity: 0,
      visibility: "hidden",
      transition: "opacity .12s ease",
      pointerEvents: "none"
    }
  }, label), /*#__PURE__*/React.createElement("style", null, `.ax-tooltip-wrap:hover .ax-tooltip-bubble,.ax-tooltip-wrap:focus-within .ax-tooltip-bubble{opacity:1;visibility:visible}`));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — controlled checkbox with optional label. Teal when checked.
 */
function Checkbox({
  checked,
  indeterminate = false,
  disabled = false,
  label,
  size = "md",
  onChange,
  className = "",
  style = {},
  ...props
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const box = size === "sm" ? 16 : 20;
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    className: `ax-check-label ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    className: "ax-check",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: box,
      height: box,
      margin: 0,
      cursor: "inherit"
    }
  }, props)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: box,
      height: box,
      borderRadius: "var(--ax-radius-xs)",
      border: `1.5px solid ${on ? "var(--ax-sea-depths)" : "var(--ax-border-strong)"}`,
      background: on ? "var(--ax-sea-depths)" : "var(--ax-surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      transition: "background .12s ease, border-color .12s ease"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("svg", {
    width: box * 0.6,
    height: box * 0.6,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8h10",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  })) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: box * 0.65,
    height: box * 0.65,
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5l3.2 3.2L13 5",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null)), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: "14px",
      color: "var(--ax-text-primary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Datepicker.jsx
try { (() => {
const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function sameDay(a, b) {
  return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

/**
 * Datepicker — calendar input. Click to open a month grid; select a day.
 * Controlled via `value` (Date|null) + `onChange`.
 */
function Datepicker({
  value,
  onChange,
  placeholder = "Select date",
  className = "",
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(value || new Date());
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const y = view.getFullYear(),
    m = view.getMonth();
  const first = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < first; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(y, m, d));
  const today = new Date();
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `ax-datepicker ${className}`,
    style: {
      position: "relative",
      display: "inline-block",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      minWidth: 220,
      padding: "10px 14px",
      background: "var(--ax-surface-card)",
      border: "1px solid var(--ax-border)",
      borderRadius: "var(--ax-radius-md)",
      boxShadow: "var(--ax-shadow-xs)",
      cursor: "pointer",
      fontSize: 16,
      color: value ? "var(--ax-text-primary)" : "var(--ax-text-placeholder)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-calendar3",
    style: {
      color: "var(--ax-text-tertiary)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "left"
    }
  }, value ? `${MONTHS[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}` : placeholder)), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      zIndex: "var(--ax-z-dropdown)",
      width: 280,
      background: "var(--ax-surface-card)",
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-lg)",
      boxShadow: "var(--ax-shadow-lg)",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setView(new Date(y, m - 1, 1)),
    "aria-label": "Previous month",
    style: navBtn
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-left"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ax-text-primary)"
    }
  }, MONTHS[m], " ", y), /*#__PURE__*/React.createElement("button", {
    onClick: () => setView(new Date(y, m + 1, 1)),
    "aria-label": "Next month",
    style: navBtn
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-right"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 2,
      marginBottom: 4
    }
  }, DOW.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: "center",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--ax-text-tertiary)",
      padding: "4px 0"
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 2
    }
  }, cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const selected = sameDay(d, value);
    const isToday = sameDay(d, today);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => {
        onChange && onChange(d);
        setOpen(false);
      },
      style: {
        height: 34,
        borderRadius: "var(--ax-radius-sm)",
        border: "none",
        cursor: "pointer",
        fontSize: 13,
        background: selected ? "var(--ax-sea-depths)" : "transparent",
        color: selected ? "#fff" : "var(--ax-text-primary)",
        fontWeight: selected || isToday ? 600 : 400,
        boxShadow: isToday && !selected ? "inset 0 0 0 1px var(--ax-border-strong)" : "none"
      }
    }, d.getDate());
  }))) : null);
}
const navBtn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  border: "1px solid var(--ax-border)",
  borderRadius: "var(--ax-radius-sm)",
  background: "var(--ax-surface-card)",
  cursor: "pointer",
  color: "var(--ax-text-secondary)"
};
Object.assign(__ds_scope, { Datepicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Datepicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/FileUpload.jsx
try { (() => {
/**
 * FileUpload — dashed dropzone (click or drag) with a file list.
 * `files`: [{name, size, progress (0-100), status: "uploading"|"done"|"error"}].
 * Visual recreation — wire onSelect/onRemove to your own handlers.
 */
function FileUpload({
  files = [],
  hint = "PDF, JPG or PNG · up to 25MB",
  onSelect,
  onRemove,
  className = "",
  style = {}
}) {
  const [drag, setDrag] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-upload ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    onDragOver: e => {
      e.preventDefault();
      setDrag(true);
    },
    onDragLeave: () => setDrag(false),
    onDrop: e => {
      e.preventDefault();
      setDrag(false);
      onSelect && onSelect(e.dataTransfer.files);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      textAlign: "center",
      padding: "28px 20px",
      borderRadius: "var(--ax-radius-xl)",
      cursor: "pointer",
      background: "var(--ax-gray-25)",
      outline: `${drag ? 2 : 1}px dashed ${drag ? "var(--ax-sea-depths)" : "var(--ax-border-strong)"}`,
      outlineOffset: -1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "var(--ax-teal-50)",
      color: "var(--ax-sea-depths)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-cloud-arrow-up"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ax-sea-depths)",
      fontWeight: 600
    }
  }, "Click to upload"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ax-text-tertiary)"
    }
  }, " or drag and drop")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ax-text-tertiary)"
    }
  }, hint), /*#__PURE__*/React.createElement("input", {
    type: "file",
    multiple: true,
    hidden: true,
    onChange: e => onSelect && onSelect(e.target.files)
  })), files.map((f, i) => {
    const err = f.status === "error";
    const done = f.status === "done";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 14px",
        border: `1px solid ${err ? "var(--ax-border-error)" : "var(--ax-border-subtle)"}`,
        borderRadius: "var(--ax-radius-md)",
        background: "var(--ax-surface-card)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-file-earmark-pdf-fill",
      style: {
        color: "var(--ax-danger-600)",
        fontSize: 24,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 500,
        color: "var(--ax-text-primary)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, f.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: err ? "var(--ax-danger-600)" : "var(--ax-text-tertiary)",
        flexShrink: 0
      }
    }, err ? "Upload failed" : done ? f.size : `${f.progress || 0}%`)), !done && !err ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        height: 6,
        background: "var(--ax-gray-200)",
        borderRadius: "var(--ax-radius-full)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${f.progress || 0}%`,
        height: "100%",
        background: "var(--ax-sea-depths)",
        borderRadius: "var(--ax-radius-full)"
      }
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--ax-text-tertiary)",
        marginTop: 2
      }
    }, f.size)), done ? /*#__PURE__*/React.createElement("i", {
      className: "bi bi-check-circle-fill",
      style: {
        color: "var(--ax-success-600)",
        fontSize: 18
      }
    }) : null, /*#__PURE__*/React.createElement("button", {
      onClick: () => onRemove && onRemove(i),
      "aria-label": "Remove file",
      style: {
        border: "none",
        background: "transparent",
        color: "var(--ax-text-tertiary)",
        cursor: "pointer",
        padding: 2
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 16 16",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 4l8 8M12 4l-8 8",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round"
    }))));
  }));
}
Object.assign(__ds_scope, { FileUpload });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FileUpload.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
/**
 * FormField — label + optional hint/error wrapper for any control.
 */
function FormField({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-field ${className}`,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: "14px",
      fontWeight: "var(--ax-fw-medium)",
      color: "var(--ax-text-secondary)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ax-danger-600)",
      marginLeft: 2
    }
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: "13px",
      color: "var(--ax-text-error)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: "13px",
      color: "var(--ax-text-tertiary)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "8px 12px",
    fontSize: "14px"
  },
  md: {
    padding: "10px 14px",
    fontSize: "16px"
  },
  lg: {
    padding: "12px 14px",
    fontSize: "16px"
  }
};

/**
 * Input — single-line text field. Supports leading/trailing adornments,
 * invalid state, and sizes. Wrap with <FormField> for label + hint + error.
 */
function Input({
  size = "md",
  invalid = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  className = "",
  style = {},
  ...props
}) {
  const s = SIZES[size] || SIZES.md;
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: disabled ? "var(--ax-surface-disabled)" : "var(--ax-surface-card)",
    border: `1px solid ${invalid ? "var(--ax-border-error)" : "var(--ax-border)"}`,
    borderRadius: "var(--ax-radius-md)",
    padding: s.padding,
    boxShadow: "var(--ax-shadow-xs)",
    opacity: disabled ? 0.6 : 1,
    ...style
  };
  const input = {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    fontFamily: "var(--ax-font-base)",
    fontSize: s.fontSize,
    color: "var(--ax-text-primary)",
    width: "100%",
    minWidth: 0
  };
  const iconStyle = {
    display: "inline-flex",
    color: "var(--ax-text-tertiary)",
    flexShrink: 0
  };
  if (leadingIcon || trailingIcon) {
    return /*#__PURE__*/React.createElement("div", {
      className: `ax-input-wrap ${className}`,
      style: wrap
    }, leadingIcon ? /*#__PURE__*/React.createElement("span", {
      style: iconStyle,
      "aria-hidden": "true"
    }, leadingIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
      className: "ax-input",
      style: input,
      disabled: disabled
    }, props)), trailingIcon ? /*#__PURE__*/React.createElement("span", {
      style: iconStyle,
      "aria-hidden": "true"
    }, trailingIcon) : null);
  }
  return /*#__PURE__*/React.createElement("input", _extends({
    className: `ax-input ${className}`,
    disabled: disabled,
    style: {
      ...wrap,
      ...input,
      display: "block"
    }
  }, props));
}

/**
 * Textarea — multi-line text field.
 */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  className = "",
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    className: `ax-textarea ${className}`,
    style: {
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
      background: disabled ? "var(--ax-surface-disabled)" : "var(--ax-surface-card)",
      border: `1px solid ${invalid ? "var(--ax-border-error)" : "var(--ax-border)"}`,
      borderRadius: "var(--ax-radius-md)",
      padding: "10px 14px",
      fontFamily: "var(--ax-font-base)",
      fontSize: "16px",
      lineHeight: "var(--ax-lh-base)",
      color: "var(--ax-text-primary)",
      boxShadow: "var(--ax-shadow-xs)",
      outline: "none",
      ...style
    }
  }, props));
}
Object.assign(__ds_scope, { Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Radio — single radio with optional label. Use matching `name` to group.
 */
function Radio({
  checked,
  disabled = false,
  label,
  value,
  name,
  onChange,
  className = "",
  style = {},
  ...props
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: `ax-radio-label ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    className: "ax-check",
    checked: !!checked,
    disabled: disabled,
    value: value,
    name: name,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 20,
      height: 20,
      margin: 0,
      cursor: "inherit"
    }
  }, props)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: `1.5px solid ${checked ? "var(--ax-sea-depths)" : "var(--ax-border-strong)"}`,
      background: "var(--ax-surface-card)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color .12s ease"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--ax-sea-depths)"
    }
  }) : null)), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: "14px",
      color: "var(--ax-text-primary)"
    }
  }, label) : null);
}

/**
 * RadioGroup — vertical/horizontal set of radios from options.
 */
function RadioGroup({
  name,
  value,
  options = [],
  onChange,
  direction = "column",
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    className: `ax-radio-group ${className}`,
    style: {
      display: "flex",
      flexDirection: direction,
      gap: direction === "row" ? "20px" : "12px",
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === "string" ? {
      label: o,
      value: o
    } : o;
    return /*#__PURE__*/React.createElement(Radio, {
      key: opt.value,
      name: name,
      label: opt.label,
      value: opt.value,
      checked: value === opt.value,
      onChange: () => onChange && onChange(opt.value)
    });
  }));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBox.jsx
try { (() => {
/**
 * SearchBox — search input with a live results dropdown.
 * `results`: [{label, meta, icon, onClick}]. Filtering is up to the caller
 * (pass already-filtered results); this renders the field + panel.
 */
function SearchBox({
  value,
  onChange,
  onSelect,
  results = [],
  placeholder = "Search…",
  loading = false,
  width = 360,
  className = "",
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const show = open && (results.length > 0 || loading);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `ax-searchbox ${className}`,
    style: {
      position: "relative",
      width,
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "9px 12px",
      background: "var(--ax-surface-card)",
      border: "1px solid var(--ax-border)",
      borderRadius: "var(--ax-radius-md)",
      boxShadow: "var(--ax-shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-search",
    style: {
      color: "var(--ax-text-tertiary)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setOpen(true),
    placeholder: placeholder,
    className: "ax-input",
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontSize: 15,
      color: "var(--ax-text-primary)"
    }
  }), value ? /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange && onChange(""),
    "aria-label": "Clear",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--ax-text-tertiary)",
      cursor: "pointer",
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }))) : null), show ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      right: 0,
      zIndex: "var(--ax-z-dropdown)",
      background: "var(--ax-surface-card)",
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-lg)",
      boxShadow: "var(--ax-shadow-lg)",
      padding: 6,
      maxHeight: 320,
      overflowY: "auto"
    }
  }, loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 10px",
      fontSize: 14,
      color: "var(--ax-text-tertiary)"
    }
  }, "Searching\u2026") : results.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "ax-dropdown-item",
    onClick: () => {
      setOpen(false);
      (r.onClick || onSelect) && (r.onClick ? r.onClick() : onSelect(r));
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      textAlign: "left",
      padding: "8px 10px",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      borderRadius: "var(--ax-radius-sm)"
    }
  }, r.icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--ax-text-tertiary)",
      width: 16
    },
    "aria-hidden": "true"
  }, r.icon) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 14,
      color: "var(--ax-text-primary)",
      fontWeight: 500
    }
  }, r.label), r.meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 12,
      color: "var(--ax-text-tertiary)"
    }
  }, r.meta) : null)))) : null);
}
Object.assign(__ds_scope, { SearchBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — styled native select with a chevron.
 */
function Select({
  size = "md",
  invalid = false,
  disabled = false,
  children,
  className = "",
  style = {},
  ...props
}) {
  const pad = size === "sm" ? "8px 36px 8px 12px" : "10px 36px 10px 14px";
  const fs = size === "sm" ? "14px" : "16px";
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-select-wrap ${className}`,
    style: {
      position: "relative",
      display: "inline-block",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "ax-select",
    disabled: disabled,
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      padding: pad,
      fontFamily: "var(--ax-font-base)",
      fontSize: fs,
      color: "var(--ax-text-primary)",
      background: disabled ? "var(--ax-surface-disabled)" : "var(--ax-surface-card)",
      border: `1px solid ${invalid ? "var(--ax-border-error)" : "var(--ax-border)"}`,
      borderRadius: "var(--ax-radius-md)",
      boxShadow: "var(--ax-shadow-xs)",
      outline: "none",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, props), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--ax-text-tertiary)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle. Teal track when on.
 */
function Switch({
  checked = false,
  disabled = false,
  label,
  size = "md",
  onChange,
  className = "",
  style = {},
  ...props
}) {
  const w = size === "sm" ? 36 : 44;
  const h = size === "sm" ? 20 : 24;
  const knob = h - 6;
  return /*#__PURE__*/React.createElement("label", {
    className: `ax-switch-label ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: "ax-switch",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: w,
      height: h,
      margin: 0,
      cursor: "inherit"
    }
  }, props)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: w,
      height: h,
      borderRadius: "var(--ax-radius-full)",
      background: checked ? "var(--ax-sea-depths)" : "var(--ax-gray-300)",
      transition: "background .15s ease",
      display: "inline-block",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? w - knob - 3 : 3,
      width: knob,
      height: knob,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--ax-shadow-sm)",
      transition: "left .15s ease"
    }
  }))), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: "14px",
      color: "var(--ax-text-primary)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
/**
 * Divider — horizontal or vertical rule, optionally with centered label text.
 */
function Divider({
  orientation = "horizontal",
  label,
  spacing = 16,
  className = "",
  style = {}
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", {
      className: `ax-divider ${className}`,
      "aria-hidden": "true",
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: "var(--ax-border-subtle)",
        margin: `0 ${spacing}px`,
        ...style
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      className: `ax-divider ${className}`,
      role: "separator",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: `${spacing}px 0`,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--ax-border-subtle)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--ax-font-base)",
        fontSize: 12,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "var(--ax-tracking-wide)",
        color: "var(--ax-text-tertiary)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--ax-border-subtle)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    className: `ax-divider ${className}`,
    style: {
      border: "none",
      height: 1,
      background: "var(--ax-border-subtle)",
      margin: `${spacing}px 0`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/FeaturedIcon.jsx
try { (() => {
const COLORS = {
  brand: {
    fg: "var(--ax-sea-depths)",
    soft: "var(--ax-teal-50)",
    ring: "var(--ax-teal-100)"
  },
  gray: {
    fg: "var(--ax-gray-600)",
    soft: "var(--ax-gray-100)",
    ring: "var(--ax-gray-200)"
  },
  success: {
    fg: "var(--ax-success-600)",
    soft: "var(--ax-success-50)",
    ring: "var(--ax-success-200)"
  },
  warning: {
    fg: "var(--ax-warning-700)",
    soft: "var(--ax-warning-50)",
    ring: "var(--ax-warning-200)"
  },
  danger: {
    fg: "var(--ax-danger-600)",
    soft: "var(--ax-danger-50)",
    ring: "var(--ax-danger-200)"
  },
  info: {
    fg: "var(--ax-info-600)",
    soft: "var(--ax-info-50)",
    ring: "var(--ax-info-200)"
  }
};
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 56
};

/**
 * FeaturedIcon — a colored icon container used in empty states, alerts,
 * stat tiles and onboarding. `style`: "light" (soft fill) | "outline" | "solid".
 */
function FeaturedIcon({
  icon,
  color = "brand",
  size = "md",
  styleVariant = "light",
  square = false,
  className = "",
  style = {}
}) {
  const c = COLORS[color] || COLORS.brand;
  const px = SIZES[size] || 40;
  const look = styleVariant === "solid" ? {
    background: c.fg,
    color: "#fff",
    border: "1px solid transparent"
  } : styleVariant === "outline" ? {
    background: "transparent",
    color: c.fg,
    border: `1px solid ${c.ring}`
  } : {
    background: c.soft,
    color: c.fg,
    border: "1px solid transparent"
  };
  return /*#__PURE__*/React.createElement("span", {
    className: `ax-featured-icon ${className}`,
    style: {
      width: px,
      height: px,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: square ? "var(--ax-radius-lg)" : "50%",
      fontSize: px * 0.45,
      ...look,
      ...style
    },
    "aria-hidden": "true"
  }, icon);
}
Object.assign(__ds_scope, { FeaturedIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FeaturedIcon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/**
 * Breadcrumb — page hierarchy. `items` = [{label, href?}]; last is current.
 */
function Breadcrumb({
  items = [],
  separator,
  className = "",
  style = {}
}) {
  const sep = separator || /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: `ax-breadcrumb ${className}`,
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "8px",
      listStyle: "none",
      margin: 0,
      padding: 0,
      fontFamily: "var(--ax-font-base)",
      fontSize: "14px"
    }
  }, items.map((item, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px"
      }
    }, item.href && !last ? /*#__PURE__*/React.createElement("a", {
      href: item.href,
      className: "ax-link",
      style: {
        color: "var(--ax-text-tertiary)",
        fontWeight: "var(--ax-fw-medium)",
        textDecoration: "none"
      }
    }, item.label) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? "var(--ax-text-primary)" : "var(--ax-text-tertiary)",
        fontWeight: last ? "var(--ax-fw-semibold)" : "var(--ax-fw-medium)"
      },
      "aria-current": last ? "page" : undefined
    }, item.label), !last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ax-gray-400)",
        display: "inline-flex"
      }
    }, sep) : null);
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
/**
 * Navbar — horizontal top navigation bar. Logo (left), links (center),
 * actions (right). Generic app/marketing bar, distinct from the portal masthead.
 * `links`: [{label, href, active}]. `brand` and `actions` are nodes.
 */
function Navbar({
  brand,
  links = [],
  actions,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: `ax-navbar ${className}`,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      height: 64,
      padding: "0 24px",
      background: "var(--ax-surface-card)",
      borderBottom: "1px solid var(--ax-border-subtle)",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      flexShrink: 0
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      flex: 1
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || "#",
    className: "ax-navlink",
    style: {
      padding: "8px 12px",
      borderRadius: "var(--ax-radius-md)",
      fontSize: 14,
      fontWeight: l.active ? 600 : 500,
      textDecoration: "none",
      color: l.active ? "var(--ax-sea-depths)" : "var(--ax-text-secondary)",
      background: l.active ? "var(--ax-teal-50)" : "transparent"
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      flexShrink: 0
    }
  }, actions));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function range(total, current, span = 1) {
  const pages = new Set([1, total, current]);
  for (let i = 1; i <= span; i++) {
    pages.add(current - i);
    pages.add(current + i);
  }
  const sorted = [...pages].filter(p => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) out.push("…");
    out.push(p);
    prev = p;
  }
  return out;
}

/**
 * Pagination — page navigation with prev/next and ellipsis.
 */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  className = "",
  style = {}
}) {
  const items = range(total, page);
  const arrow = (dir, disabled) => /*#__PURE__*/React.createElement("button", {
    onClick: () => !disabled && onChange && onChange(dir === "prev" ? page - 1 : page + 1),
    disabled: disabled,
    "aria-label": dir === "prev" ? "Previous page" : "Next page",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "var(--ax-radius-md)",
      border: "1px solid var(--ax-border)",
      background: "var(--ax-surface-card)",
      color: disabled ? "var(--ax-gray-400)" : "var(--ax-text-secondary)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      transform: dir === "prev" ? "rotate(180deg)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 4l4 4-4 4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagination",
    className: `ax-pagination ${className}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, arrow("prev", page <= 1), items.map((it, i) => it === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      width: 36,
      textAlign: "center",
      color: "var(--ax-text-tertiary)"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => onChange && onChange(it),
    "aria-current": it === page ? "page" : undefined,
    className: `ax-page-num ${it === page ? "ax-page-num--active" : ""}`,
    style: {
      minWidth: 36,
      height: 36,
      padding: "0 8px",
      borderRadius: "var(--ax-radius-md)",
      border: `1px solid ${it === page ? "var(--ax-sea-depths)" : "var(--ax-border)"}`,
      background: it === page ? "var(--ax-teal-50)" : "var(--ax-surface-card)",
      color: it === page ? "var(--ax-sea-depths)" : "var(--ax-text-secondary)",
      fontWeight: "var(--ax-fw-semibold)",
      fontSize: "14px",
      cursor: "pointer"
    }
  }, it)), arrow("next", page >= total));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — underline or pill tab bar. `tabs` = [{label,value,icon,badge}].
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  variant = "underline",
  className = "",
  style = {}
}) {
  const pill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", {
    className: `ax-tabs ax-tabs--${variant} ${className}`,
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: pill ? "4px" : "4px",
      borderBottom: pill ? "none" : "1px solid var(--ax-border-subtle)",
      background: pill ? "var(--ax-gray-100)" : "transparent",
      padding: pill ? "4px" : 0,
      borderRadius: pill ? "var(--ax-radius-lg)" : 0,
      ...style
    }
  }, tabs.map(t => {
    const v = t.value ?? t.label;
    const active = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(v),
      className: `ax-tab ${active ? "ax-tab--active" : ""}`,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: pill ? "7px 14px" : "10px 4px",
        margin: pill ? 0 : "0 8px",
        fontFamily: "var(--ax-font-base)",
        fontSize: "14px",
        fontWeight: "var(--ax-fw-semibold)",
        cursor: "pointer",
        background: pill && active ? "var(--ax-surface-card)" : "transparent",
        color: active ? "var(--ax-sea-depths)" : "var(--ax-text-tertiary)",
        border: "none",
        borderRadius: pill ? "var(--ax-radius-md)" : 0,
        borderBottom: pill ? "none" : `2px solid ${active ? "var(--ax-sea-depths)" : "transparent"}`,
        boxShadow: pill && active ? "var(--ax-shadow-xs)" : "none",
        marginBottom: pill ? 0 : "-1px",
        transition: "color .12s ease"
      }
    }, t.icon ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex"
      },
      "aria-hidden": "true"
    }, t.icon) : null, t.label, t.badge != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 2,
        fontSize: "12px",
        fontWeight: "var(--ax-fw-medium)",
        color: active ? "var(--ax-sea-depths)" : "var(--ax-text-tertiary)",
        background: active ? "var(--ax-teal-50)" : "var(--ax-gray-100)",
        borderRadius: "var(--ax-radius-full)",
        padding: "1px 7px"
      }
    }, t.badge) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Drawer.jsx
try { (() => {
/**
 * Drawer (Offcanvas) — side panel that slides in over a scrim.
 * Controlled via `open`. `side`: "right" | "left".
 */
function Drawer({
  open,
  onClose,
  title,
  children,
  footer,
  side = "right",
  width = 420,
  className = "",
  style = {}
}) {
  if (!open) return null;
  const edge = side === "left" ? {
    left: 0
  } : {
    right: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ax-drawer-backdrop",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--ax-z-offcanvas)",
      background: "rgba(9,16,29,0.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    className: `ax-drawer ${className}`,
    onClick: e => e.stopPropagation(),
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      ...edge,
      width,
      maxWidth: "100%",
      background: "var(--ax-surface-card)",
      boxShadow: "var(--ax-shadow-2xl)",
      display: "flex",
      flexDirection: "column",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "18px 22px",
      borderBottom: "1px solid var(--ax-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--ax-font-heading)",
      fontSize: 18,
      fontWeight: 600,
      color: "var(--ax-text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--ax-text-tertiary)",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "20px 22px",
      color: "var(--ax-text-secondary)",
      fontSize: 14,
      lineHeight: "var(--ax-lh-base)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      padding: "16px 22px",
      borderTop: "1px solid var(--ax-border-subtle)",
      background: "var(--ax-gray-25)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dropdown.jsx
try { (() => {
/**
 * Dropdown — click-to-open menu anchored to a trigger.
 * `trigger` is the element users click; `items` render in the panel.
 * items: [{label, icon, onClick, danger, divider, header}].
 */
function Dropdown({
  trigger,
  items = [],
  align = "left",
  width = 220,
  className = "",
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: `ax-dropdown ${className}`,
    style: {
      position: "relative",
      display: "inline-block",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "inline-flex",
      cursor: "pointer"
    }
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      [align]: 0,
      zIndex: "var(--ax-z-dropdown)",
      width,
      background: "var(--ax-surface-card)",
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-lg)",
      boxShadow: "var(--ax-shadow-lg)",
      padding: 6,
      fontFamily: "var(--ax-font-base)"
    }
  }, items.map((it, i) => {
    if (it.divider) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        height: 1,
        background: "var(--ax-border-subtle)",
        margin: "6px 4px"
      }
    });
    if (it.header) return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "6px 10px 4px",
        fontSize: 11,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: ".04em",
        color: "var(--ax-text-tertiary)"
      }
    }, it.header);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "menuitem",
      className: "ax-dropdown-item",
      onClick: () => {
        setOpen(false);
        it.onClick && it.onClick();
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        textAlign: "left",
        padding: "8px 10px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: "var(--ax-radius-sm)",
        fontSize: 14,
        color: it.danger ? "var(--ax-danger-600)" : "var(--ax-text-primary)"
      }
    }, it.icon ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 16,
        color: it.danger ? "var(--ax-danger-600)" : "var(--ax-text-tertiary)"
      },
      "aria-hidden": "true"
    }, it.icon) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.shortcut ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--ax-text-tertiary)"
      }
    }, it.shortcut) : null);
  })) : null);
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Modal.jsx
try { (() => {
/**
 * Modal — centered dialog over a scrim. Controlled via `open`.
 * Renders nothing when closed. Includes header (title + close), body, footer.
 */
function Modal({
  open,
  onClose,
  title,
  children,
  footer,
  width = 520,
  className = "",
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ax-modal-backdrop",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--ax-z-modal)",
      background: "rgba(9,16,29,0.55)",
      backdropFilter: "blur(2px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    className: `ax-modal ${className}`,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--ax-surface-card)",
      borderRadius: "var(--ax-radius-2xl)",
      boxShadow: "var(--ax-shadow-2xl)",
      overflow: "hidden",
      fontFamily: "var(--ax-font-base)",
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "16px",
      padding: "20px 24px 12px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--ax-font-heading)",
      fontSize: "18px",
      fontWeight: "var(--ax-fw-semibold)",
      color: "var(--ax-text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--ax-text-tertiary)",
      cursor: "pointer",
      padding: 4,
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: title ? "0 24px 20px" : "24px",
      overflowY: "auto",
      color: "var(--ax-text-secondary)",
      fontSize: "14px",
      lineHeight: "var(--ax-lh-base)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "10px",
      padding: "16px 24px",
      borderTop: "1px solid var(--ax-border-subtle)",
      background: "var(--ax-gray-25)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Modal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/competent-authority-portal/InfoCard.jsx
try { (() => {
/**
 * InfoCard — the order-detail section card with the signature teal left accent.
 * Header row (title + optional action), then arbitrary children (usually rows).
 */
function InfoCard({
  title,
  action,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "flex",
      background: "var(--ax-surface-card)",
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-lg)",
      boxShadow: "var(--ax-shadow-xs)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      flexShrink: 0,
      background: "linear-gradient(180deg, var(--ax-aqua), var(--ax-sea-depths))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      padding: "16px 20px",
      borderBottom: "1px solid var(--ax-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--ax-font-heading)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--ax-text-primary)"
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px"
    }
  }, children)));
}

/**
 * KVRow — a label/value pair row inside InfoCard.
 */
function KVRow({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "200px 1fr",
      gap: 16,
      padding: "7px 0",
      fontFamily: "var(--ax-font-base)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ax-text-tertiary)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ax-text-primary)",
      fontWeight: 500
    }
  }, children));
}

/**
 * EditPill — the outline "Edit" affordance used on card headers.
 */
function EditPill({
  children = "Edit",
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "ax-btn ax-btn--secondary",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "6px 12px",
      border: "1px solid var(--ax-border)",
      borderRadius: "var(--ax-radius-full)",
      background: "var(--ax-surface-card)",
      color: "var(--ax-text-secondary)",
      fontFamily: "var(--ax-font-base)",
      fontSize: 13,
      fontWeight: 600,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-pencil",
    style: {
      fontSize: 13
    }
  }), children);
}
Object.assign(window, {
  InfoCard,
  KVRow,
  EditPill
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/competent-authority-portal/InfoCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/competent-authority-portal/OrderDetail.jsx
try { (() => {
/* global React */
const NS = window.ApostilleXpressDesignSystem_141fbe;
function DocChip({
  name,
  ago
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-md)",
      background: "var(--ax-surface-card)",
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-file-earmark-pdf-fill",
    style: {
      color: "var(--ax-danger-600)",
      fontSize: 22
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ax-font-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ax-text-primary)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ax-text-tertiary)"
    }
  }, "Uploaded ", ago)));
}
function Recipient({
  name,
  meta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "12px 0",
      borderTop: "1px solid var(--ax-border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(NS.Checkbox, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "var(--ax-font-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ax-text-primary)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ax-text-tertiary)",
      marginTop: 2
    }
  }, meta)), /*#__PURE__*/React.createElement(NS.IconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      className: "bi bi-pencil"
    }),
    label: "Edit recipient",
    variant: "secondary",
    size: "sm"
  }));
}
function OrderDetail({
  onProcess,
  onBack
}) {
  const elec = /*#__PURE__*/React.createElement(NS.Badge, {
    color: "brand",
    style: {
      borderRadius: "var(--ax-radius-full)"
    }
  }, "Electronic");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 28px 28px",
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement(NS.Breadcrumb, {
    items: [{
      label: "Order Management",
      href: "#"
    }, {
      label: "Order Preview",
      href: "#"
    }, {
      label: "Order Details"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      margin: "12px 0 20px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--ax-font-heading)",
      fontSize: 26,
      fontWeight: 700,
      color: "var(--ax-text-primary)"
    }
  }, "Order Details #307-600"), /*#__PURE__*/React.createElement(NS.Badge, {
    color: "warning",
    pill: true
  }, "In Process")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(InfoCard, {
    title: "Document Information",
    action: /*#__PURE__*/React.createElement(EditPill, null)
  }, /*#__PURE__*/React.createElement(KVRow, {
    label: "Product Type"
  }, elec), /*#__PURE__*/React.createElement(KVRow, {
    label: "Name on Document or Entity Name"
  }, "\u2014"), /*#__PURE__*/React.createElement(KVRow, {
    label: "Document Type"
  }, "Vital Record"), /*#__PURE__*/React.createElement(KVRow, {
    label: "Document Description"
  }, "Marriage Certificate"), /*#__PURE__*/React.createElement(KVRow, {
    label: "Adoption Agency"
  }, "Angel Adoption"), /*#__PURE__*/React.createElement(KVRow, {
    label: "Destination Country"
  }, "Italy")), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Customer Information",
    action: /*#__PURE__*/React.createElement(EditPill, null)
  }, /*#__PURE__*/React.createElement(KVRow, {
    label: "First and Last Name"
  }, "Maria Rodriguez"), /*#__PURE__*/React.createElement(KVRow, {
    label: "Email"
  }, "maria.rodriguez@gmail.com"), /*#__PURE__*/React.createElement(KVRow, {
    label: "Phone Number"
  }, "(312) 867-5309"), /*#__PURE__*/React.createElement(KVRow, {
    label: "Address"
  }, "1234 Elm Street, Springfield, DM 62704, United States"), /*#__PURE__*/React.createElement(KVRow, {
    label: "Company Name"
  }, "Keller Law Group"), /*#__PURE__*/React.createElement(KVRow, {
    label: "Title"
  }, "Senior Associate Attorney"))), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Notes / Special Instructions",
    action: /*#__PURE__*/React.createElement(EditPill, null),
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--ax-font-base)",
      fontSize: 14,
      color: "var(--ax-text-secondary)",
      lineHeight: 1.55
    }
  }, "Please process an apostille for the attached birth certificate. This document is required to acquire Spanish citizenship. Let me know if any additional steps or documents are needed. Thank you!")), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Recipient Information",
    action: /*#__PURE__*/React.createElement(NS.Button, {
      variant: "secondary",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement("i", {
        className: "bi bi-person-plus"
      })
    }, "Add Recipient"),
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(NS.Checkbox, {
    label: "Select All Recipients"
  }), /*#__PURE__*/React.createElement(NS.Button, {
    variant: "danger",
    size: "sm",
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "bi bi-trash"
    })
  }, "Delete (2)")), /*#__PURE__*/React.createElement(Recipient, {
    name: "Maria Rodriguez",
    meta: "Legal Advisor, Rodriguez & Associate \xB7 maria.rodriguez@gmail.com \xB7 France"
  }), /*#__PURE__*/React.createElement(Recipient, {
    name: "James Smith",
    meta: "Senior Software Engineer, Tech Innovations Inc. \xB7 james.smith@techinnovations.com \xB7 USA"
  })), /*#__PURE__*/React.createElement(InfoCard, {
    title: "Attached Documents: 2",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(DocChip, {
    name: "POA pages 1-10",
    ago: "20 min ago"
  }), /*#__PURE__*/React.createElement(DocChip, {
    name: "POA pages 11-20",
    ago: "20 min ago"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(NS.Button, {
    variant: "secondary",
    onClick: onBack
  }, "Previous"), /*#__PURE__*/React.createElement(NS.Button, {
    onClick: onProcess,
    trailingIcon: /*#__PURE__*/React.createElement("i", {
      className: "bi bi-arrow-right"
    })
  }, "Process Order")));
}
window.OrderDetail = OrderDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/competent-authority-portal/OrderDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/competent-authority-portal/OrderList.jsx
try { (() => {
/* global React */
const NSL = window.ApostilleXpressDesignSystem_141fbe;
const ORDERS = [{
  id: "#307-600",
  doc: "Marriage Certificate",
  type: "Electronic",
  applicant: "Maria Rodriguez",
  country: "Italy",
  status: "In Process",
  updated: "2 min ago"
}, {
  id: "#307-598",
  doc: "Birth Certificate",
  type: "Electronic",
  applicant: "James Smith",
  country: "Spain",
  status: "Submitted",
  updated: "18 min ago"
}, {
  id: "#307-595",
  doc: "Power of Attorney",
  type: "Paper",
  applicant: "Priya Nair",
  country: "India",
  status: "Issued",
  updated: "1 hr ago"
}, {
  id: "#307-591",
  doc: "Diploma",
  type: "Electronic",
  applicant: "Sam Cruz",
  country: "Mexico",
  status: "Flagged",
  updated: "3 hr ago"
}, {
  id: "#307-588",
  doc: "Marriage Certificate",
  type: "Paper",
  applicant: "Lena Park",
  country: "France",
  status: "Rejected",
  updated: "Yesterday"
}, {
  id: "#307-585",
  doc: "Background Check",
  type: "Electronic",
  applicant: "Omar Said",
  country: "Germany",
  status: "Issued",
  updated: "Yesterday"
}];
const STATUS_COLOR = {
  "In Process": "warning",
  Submitted: "info",
  Issued: "success",
  Flagged: "warning",
  Rejected: "danger"
};
function Stat({
  label,
  value,
  icon,
  tint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: "var(--ax-surface-card)",
      border: "1px solid var(--ax-border-subtle)",
      borderRadius: "var(--ax-radius-lg)",
      padding: "16px 18px",
      boxShadow: "var(--ax-shadow-xs)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: "var(--ax-radius-md)",
      background: tint,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 18
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `bi bi-${icon}`
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ax-font-heading)",
      fontSize: 24,
      fontWeight: 700,
      color: "var(--ax-text-primary)",
      lineHeight: 1.1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--ax-font-base)",
      fontSize: 13,
      color: "var(--ax-text-tertiary)"
    }
  }, label)));
}
function OrderList({
  onOpen
}) {
  const [tab, setTab] = React.useState("All");
  const [page, setPage] = React.useState(1);
  const cols = [{
    key: "id",
    header: "Order",
    width: "96px",
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: "var(--ax-sea-depths)"
      }
    }, v)
  }, {
    key: "doc",
    header: "Document",
    render: (v, r) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--ax-text-tertiary)"
      }
    }, r.type, " \xB7 ", r.country))
  }, {
    key: "applicant",
    header: "Applicant",
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(NSL.Avatar, {
      name: v,
      size: "xs"
    }), v)
  }, {
    key: "status",
    header: "Status",
    render: v => /*#__PURE__*/React.createElement(NSL.Badge, {
      color: STATUS_COLOR[v],
      dot: true
    }, v)
  }, {
    key: "updated",
    header: "Updated",
    align: "right",
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ax-text-tertiary)",
        fontSize: 13
      }
    }, v)
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 28px 28px",
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--ax-font-heading)",
      fontSize: 26,
      fontWeight: 700,
      color: "var(--ax-text-primary)"
    }
  }, "Order Management"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontFamily: "var(--ax-font-base)",
      fontSize: 14,
      color: "var(--ax-text-tertiary)"
    }
  }, "Review and process incoming apostille requests.")), /*#__PURE__*/React.createElement(NSL.Button, {
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "bi bi-plus-lg"
    })
  }, "Create New Order")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Awaiting review",
    value: "9",
    icon: "inbox",
    tint: "var(--ax-freedom-blue)"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "In process",
    value: "4",
    icon: "hourglass-split",
    tint: "var(--ax-warning-500)"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Issued today",
    value: "27",
    icon: "patch-check",
    tint: "var(--ax-success-600)"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Flagged",
    value: "2",
    icon: "flag",
    tint: "var(--ax-patriot-red)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14,
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(NSL.Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      label: "All"
    }, {
      label: "Submitted"
    }, {
      label: "In Process"
    }, {
      label: "Issued"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(NSL.Input, {
    leadingIcon: /*#__PURE__*/React.createElement("i", {
      className: "bi bi-search"
    }),
    placeholder: "Search order #, applicant\u2026",
    size: "sm"
  }))), /*#__PURE__*/React.createElement(NSL.Table, {
    columns: cols,
    rows: ORDERS,
    rowKey: "id",
    onRowClick: onOpen
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(NSL.Pagination, {
    page: page,
    total: 8,
    onChange: setPage
  })));
}
window.OrderList = OrderList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/competent-authority-portal/OrderList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/competent-authority-portal/PortalSidebar.jsx
try { (() => {
const NAV = [{
  section: "Main"
}, {
  label: "Dashboard",
  icon: "grid-1x2",
  count: 9
}, {
  label: "Order Management",
  icon: "clipboard-check",
  count: 9,
  key: "orders"
}, {
  label: "Signature Directory",
  icon: "pen",
  count: 9
}, {
  section: "Services Center"
}, {
  label: "Create New Order",
  icon: "plus-square",
  key: "create"
}, {
  label: "My Profile",
  icon: "person",
  count: 9
}, {
  section: "Platform Settings"
}, {
  label: "Log Out",
  icon: "box-arrow-right",
  count: 9
}, {
  label: "Admin Management",
  icon: "gear",
  count: 9
}];

/**
 * PortalSidebar — left navigation for the Competent Authority portal.
 */
function PortalSidebar({
  active = "orders",
  onNavigate,
  logoBase = "../../assets/logos"
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: "var(--ax-surface-card)",
      borderRight: "1px solid var(--ax-border-subtle)",
      display: "flex",
      flexDirection: "column",
      padding: "20px 12px",
      fontFamily: "var(--ax-font-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 8px 18px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${logoBase}/ax-wordmark-color.svg`,
    alt: "ApostilleXpress",
    style: {
      height: 26
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      flex: 1
    }
  }, NAV.map((item, i) => {
    if (item.section) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          padding: "14px 10px 6px",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: ".05em",
          textTransform: "uppercase",
          color: "var(--ax-text-tertiary)"
        }
      }, item.section);
    }
    const isActive = item.key === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => item.key && onNavigate && onNavigate(item.key),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        textAlign: "left",
        padding: "9px 10px",
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--ax-radius-md)",
        background: isActive ? "var(--ax-teal-50)" : "transparent",
        color: isActive ? "var(--ax-sea-depths)" : "var(--ax-text-secondary)",
        fontSize: 14,
        fontWeight: isActive ? 600 : 500,
        borderLeft: `3px solid ${isActive ? "var(--ax-sea-depths)" : "transparent"}`,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: `bi bi-${item.icon}`,
      style: {
        fontSize: 16,
        width: 18
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.count ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: isActive ? "var(--ax-sea-depths)" : "var(--ax-text-tertiary)",
        background: isActive ? "var(--ax-teal-100)" : "var(--ax-gray-100)",
        borderRadius: "var(--ax-radius-full)",
        minWidth: 20,
        textAlign: "center",
        padding: "1px 6px"
      }
    }, item.count) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ax-border-subtle)",
      paddingTop: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".05em",
      textTransform: "uppercase",
      color: "var(--ax-text-tertiary)",
      padding: "0 10px 6px"
    }
  }, "Competent Authority"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 10px",
      fontSize: 14,
      color: "var(--ax-text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83C\uDDFA\uD83C\uDDF8"), " United States")));
}
window.PortalSidebar = PortalSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/competent-authority-portal/PortalSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/competent-authority-portal/PortalTopBar.jsx
try { (() => {
/**
 * PortalTopBar — agency masthead with seal, authority name and user.
 */
function PortalTopBar({
  authority = "Montana Secretary of State",
  user = "Emily Rodriguez"
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 72,
      flexShrink: 0,
      background: "var(--ax-surface-card)",
      borderBottom: "1px solid var(--ax-border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px",
      fontFamily: "var(--ax-font-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: "radial-gradient(circle at 50% 40%, #c8a24a, #8a6d2a)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 9,
      fontWeight: 700,
      textAlign: "center",
      lineHeight: 1.05,
      border: "2px solid #b9952f"
    }
  }, "SEAL"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--ax-font-condensed)",
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--ax-text-primary)"
    }
  }, authority)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--ax-teal-50)",
      color: "var(--ax-sea-depths)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 600,
      fontSize: 13,
      border: "1px solid var(--ax-border-subtle)"
    }
  }, user.split(" ").map(w => w[0]).slice(0, 2).join("")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ax-text-primary)"
    }
  }, user)));
}
window.PortalTopBar = PortalTopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/competent-authority-portal/PortalTopBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ButtonGroup = __ds_scope.ButtonGroup;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.PaymentMethod = __ds_scope.PaymentMethod;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Carousel = __ds_scope.Carousel;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.ListGroup = __ds_scope.ListGroup;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.NotificationItem = __ds_scope.NotificationItem;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Datepicker = __ds_scope.Datepicker;

__ds_ns.FileUpload = __ds_scope.FileUpload;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SearchBox = __ds_scope.SearchBox;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.FeaturedIcon = __ds_scope.FeaturedIcon;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Modal = __ds_scope.Modal;

})();
