var io = [
  "stretch",
  "start",
  "center",
  "end",
  "baseline"
], sh = [
  "start",
  "center",
  "end",
  "space-between",
  "space-around",
  "space-evenly",
  "stretch"
], ht = ["space"], vn = ["color"], ah = {
  display: {
    group: "layout",
    options: [
      "block",
      "flex",
      "grid",
      "inline-flex",
      "inline-grid",
      "inline",
      "inline-block",
      "-webkit-box",
      "none"
    ]
  },
  flexDirection: {
    group: "layout",
    options: [
      "row",
      "column",
      "row-reverse",
      "column-reverse"
    ]
  },
  flexWrap: {
    group: "layout",
    options: ["nowrap", "wrap"]
  },
  alignItems: {
    group: "layout",
    options: io
  },
  justifyContent: {
    group: "layout",
    options: sh
  },
  justifyItems: {
    group: "layout",
    options: [
      "stretch",
      "start",
      "center",
      "end"
    ]
  },
  alignContent: {
    group: "layout",
    options: [
      "normal",
      "start",
      "center",
      "end",
      "space-between",
      "space-around",
      "stretch"
    ]
  },
  placeItems: { group: "layout" },
  placeContent: { group: "layout" },
  flexFlow: { group: "layout" },
  columns: { group: "layout" },
  columnCount: { group: "layout" },
  gap: {
    group: "layout",
    tokenGroups: ht
  },
  rowGap: {
    group: "layout",
    tokenGroups: ht
  },
  columnGap: {
    group: "layout",
    tokenGroups: ht
  },
  gridTemplateColumns: { group: "grid" },
  gridTemplateRows: { group: "grid" },
  gridTemplateAreas: { group: "grid" },
  gridAutoFlow: {
    group: "grid",
    options: [
      "row",
      "column",
      "dense",
      "row dense",
      "column dense"
    ]
  },
  gridAutoColumns: { group: "grid" },
  gridAutoRows: { group: "grid" },
  gridColumn: { group: "child" },
  gridRow: { group: "child" },
  gridArea: { group: "child" },
  gridColumnStart: { group: "child" },
  gridColumnEnd: { group: "child" },
  gridRowStart: { group: "child" },
  gridRowEnd: { group: "child" },
  alignSelf: {
    group: "child",
    options: ["auto", ...io]
  },
  justifySelf: {
    group: "child",
    options: [
      "auto",
      "stretch",
      "start",
      "center",
      "end"
    ]
  },
  placeSelf: { group: "child" },
  flex: { group: "child" },
  flexGrow: { group: "child" },
  flexShrink: { group: "child" },
  flexBasis: { group: "child" },
  order: { group: "child" },
  position: {
    group: "position",
    options: [
      "static",
      "relative",
      "absolute",
      "sticky",
      "fixed"
    ]
  },
  top: {
    group: "position",
    tokenGroups: ht
  },
  right: {
    group: "position",
    tokenGroups: ht
  },
  bottom: {
    group: "position",
    tokenGroups: ht
  },
  left: {
    group: "position",
    tokenGroups: ht
  },
  inset: {
    group: "position",
    tokenGroups: ht
  },
  insetInline: {
    group: "position",
    tokenGroups: ht
  },
  insetBlock: {
    group: "position",
    tokenGroups: ht
  },
  zIndex: { group: "position" },
  width: { group: "size" },
  height: { group: "size" },
  minWidth: { group: "size" },
  minHeight: { group: "size" },
  maxWidth: { group: "size" },
  maxHeight: { group: "size" },
  aspectRatio: { group: "size" },
  inlineSize: { group: "size" },
  blockSize: { group: "size" },
  minInlineSize: { group: "size" },
  minBlockSize: { group: "size" },
  maxInlineSize: { group: "size" },
  maxBlockSize: { group: "size" },
  boxSizing: {
    group: "size",
    options: ["border-box", "content-box"]
  },
  padding: {
    group: "spacing",
    tokenGroups: ht
  },
  paddingInline: {
    group: "spacing",
    tokenGroups: ht
  },
  paddingBlock: {
    group: "spacing",
    tokenGroups: ht
  },
  paddingTop: {
    group: "spacing",
    tokenGroups: ht
  },
  paddingRight: {
    group: "spacing",
    tokenGroups: ht
  },
  paddingBottom: {
    group: "spacing",
    tokenGroups: ht
  },
  paddingLeft: {
    group: "spacing",
    tokenGroups: ht
  },
  margin: {
    group: "spacing",
    tokenGroups: ht
  },
  marginInline: {
    group: "spacing",
    tokenGroups: ht
  },
  marginBlock: {
    group: "spacing",
    tokenGroups: ht
  },
  marginTop: {
    group: "spacing",
    tokenGroups: ht
  },
  marginRight: {
    group: "spacing",
    tokenGroups: ht
  },
  marginBottom: {
    group: "spacing",
    tokenGroups: ht
  },
  marginLeft: {
    group: "spacing",
    tokenGroups: ht
  },
  backgroundColor: {
    group: "fill",
    tokenGroups: vn
  },
  backgroundImage: { group: "fill" },
  backgroundSize: {
    group: "fill",
    options: [
      "auto",
      "cover",
      "contain"
    ]
  },
  backgroundPosition: { group: "fill" },
  backgroundRepeat: {
    group: "fill",
    options: [
      "repeat",
      "no-repeat",
      "repeat-x",
      "repeat-y"
    ]
  },
  backgroundClip: {
    group: "fill",
    options: [
      "border-box",
      "padding-box",
      "content-box",
      "text"
    ]
  },
  opacity: { group: "fill" },
  border: { group: "border" },
  borderTop: { group: "border" },
  borderRight: { group: "border" },
  borderBottom: { group: "border" },
  borderLeft: { group: "border" },
  borderWidth: { group: "border" },
  borderStyle: {
    group: "border",
    options: [
      "none",
      "solid",
      "dashed",
      "dotted"
    ]
  },
  borderColor: {
    group: "border",
    tokenGroups: vn
  },
  borderRadius: {
    group: "border",
    tokenGroups: ["radius"]
  },
  borderTopLeftRadius: {
    group: "border",
    tokenGroups: ["radius"]
  },
  borderTopRightRadius: {
    group: "border",
    tokenGroups: ["radius"]
  },
  borderBottomRightRadius: {
    group: "border",
    tokenGroups: ["radius"]
  },
  borderBottomLeftRadius: {
    group: "border",
    tokenGroups: ["radius"]
  },
  borderTopWidth: { group: "border" },
  borderRightWidth: { group: "border" },
  borderBottomWidth: { group: "border" },
  borderLeftWidth: { group: "border" },
  borderTopStyle: {
    group: "border",
    options: [
      "none",
      "solid",
      "dashed",
      "dotted"
    ]
  },
  borderRightStyle: {
    group: "border",
    options: [
      "none",
      "solid",
      "dashed",
      "dotted"
    ]
  },
  borderBottomStyle: {
    group: "border",
    options: [
      "none",
      "solid",
      "dashed",
      "dotted"
    ]
  },
  borderLeftStyle: {
    group: "border",
    options: [
      "none",
      "solid",
      "dashed",
      "dotted"
    ]
  },
  borderTopColor: {
    group: "border",
    tokenGroups: vn
  },
  borderRightColor: {
    group: "border",
    tokenGroups: vn
  },
  borderBottomColor: {
    group: "border",
    tokenGroups: vn
  },
  borderLeftColor: {
    group: "border",
    tokenGroups: vn
  },
  outline: { group: "border" },
  outlineOffset: { group: "border" },
  color: {
    group: "type",
    tokenGroups: vn
  },
  fontFamily: {
    group: "type",
    tokenGroups: ["font-family"]
  },
  fontSize: {
    group: "type",
    tokenGroups: ["font-size"]
  },
  fontWeight: {
    group: "type",
    tokenGroups: ["font-weight"]
  },
  lineHeight: {
    group: "type",
    tokenGroups: ["line-height"]
  },
  letterSpacing: {
    group: "type",
    tokenGroups: ["letter-spacing"]
  },
  textAlign: {
    group: "type",
    options: [
      "start",
      "center",
      "end",
      "justify"
    ]
  },
  textTransform: {
    group: "type",
    options: [
      "none",
      "uppercase",
      "lowercase",
      "capitalize"
    ]
  },
  textDecoration: {
    group: "type",
    options: [
      "none",
      "underline",
      "line-through"
    ]
  },
  textDecorationLine: {
    group: "type",
    options: [
      "none",
      "underline",
      "overline",
      "line-through"
    ]
  },
  textDecorationStyle: {
    group: "type",
    options: [
      "solid",
      "double",
      "dotted",
      "dashed",
      "wavy"
    ]
  },
  textDecorationColor: {
    group: "type",
    tokenGroups: vn
  },
  textDecorationThickness: { group: "type" },
  textUnderlineOffset: { group: "type" },
  fontStyle: {
    group: "type",
    options: ["normal", "italic"]
  },
  whiteSpace: {
    group: "type",
    options: [
      "normal",
      "nowrap",
      "pre",
      "pre-wrap",
      "pre-line"
    ]
  },
  textOverflow: {
    group: "type",
    options: ["clip", "ellipsis"]
  },
  fontVariantNumeric: {
    group: "type",
    options: [
      "normal",
      "tabular-nums",
      "oldstyle-nums",
      "lining-nums"
    ]
  },
  listStyle: {
    group: "type",
    options: [
      "none",
      "disc",
      "decimal"
    ]
  },
  listStyleType: {
    group: "type",
    options: [
      "none",
      "disc",
      "circle",
      "square",
      "decimal"
    ]
  },
  listStylePosition: {
    group: "type",
    options: ["outside", "inside"]
  },
  textWrap: {
    group: "type",
    options: [
      "wrap",
      "nowrap",
      "balance",
      "pretty"
    ]
  },
  textIndent: { group: "type" },
  textShadow: { group: "type" },
  wordBreak: {
    group: "type",
    options: [
      "normal",
      "break-all",
      "keep-all"
    ]
  },
  overflowWrap: {
    group: "type",
    options: [
      "normal",
      "break-word",
      "anywhere"
    ]
  },
  hyphens: {
    group: "type",
    options: [
      "manual",
      "auto",
      "none"
    ]
  },
  verticalAlign: {
    group: "type",
    options: [
      "baseline",
      "top",
      "middle",
      "bottom",
      "text-top",
      "text-bottom"
    ]
  },
  fontVariationSettings: { group: "type" },
  fontFeatureSettings: { group: "type" },
  WebkitLineClamp: { group: "type" },
  WebkitBoxOrient: {
    group: "type",
    options: ["vertical", "horizontal"]
  },
  direction: {
    group: "type",
    options: ["ltr", "rtl"]
  },
  writingMode: {
    group: "type",
    options: [
      "horizontal-tb",
      "vertical-rl",
      "vertical-lr"
    ]
  },
  boxShadow: {
    group: "effects",
    tokenGroups: ["shadow"]
  },
  overflow: {
    group: "effects",
    options: [
      "visible",
      "hidden",
      "auto",
      "clip"
    ]
  },
  overflowX: {
    group: "effects",
    options: [
      "visible",
      "hidden",
      "auto",
      "clip"
    ]
  },
  overflowY: {
    group: "effects",
    options: [
      "visible",
      "hidden",
      "auto",
      "clip"
    ]
  },
  transform: { group: "effects" },
  transformOrigin: { group: "effects" },
  rotate: { group: "effects" },
  scale: { group: "effects" },
  translate: { group: "effects" },
  filter: { group: "effects" },
  backdropFilter: { group: "effects" },
  mixBlendMode: {
    group: "effects",
    options: [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "difference"
    ]
  },
  isolation: {
    group: "effects",
    options: ["auto", "isolate"]
  },
  clipPath: { group: "effects" },
  visibility: {
    group: "effects",
    options: ["visible", "hidden"]
  },
  pointerEvents: {
    group: "effects",
    options: ["auto", "none"]
  },
  objectFit: {
    group: "effects",
    options: [
      "fill",
      "contain",
      "cover",
      "none",
      "scale-down"
    ]
  },
  objectPosition: { group: "effects" },
  cursor: {
    group: "effects",
    options: [
      "auto",
      "default",
      "pointer",
      "text",
      "not-allowed"
    ]
  },
  transition: { group: "effects" },
  accentColor: {
    group: "forms",
    tokenGroups: vn
  },
  caretColor: {
    group: "forms",
    tokenGroups: vn
  },
  appearance: {
    group: "forms",
    options: ["auto", "none"]
  },
  resize: {
    group: "forms",
    options: [
      "none",
      "vertical",
      "horizontal",
      "both"
    ]
  },
  borderCollapse: {
    group: "forms",
    options: ["separate", "collapse"]
  },
  borderSpacing: { group: "forms" },
  tableLayout: {
    group: "forms",
    options: ["auto", "fixed"]
  }
}, qg = Object.keys(ah), oh = [
  {
    id: "desktop",
    label: "Desktop",
    above: 1024
  },
  {
    id: "tablet",
    label: "Tablet",
    maxWidth: 1024
  },
  {
    id: "mobile",
    label: "Mobile",
    maxWidth: 600
  }
], Yg = oh.map((e) => e.id), lh = [
  {
    id: "hover",
    label: "Hover",
    selector: ":hover"
  },
  {
    id: "focus",
    label: "Focus",
    selector: ":focus-visible"
  },
  {
    id: "active",
    label: "Pressed",
    selector: ":active"
  }
], Kg = lh.map((e) => e.id), ch = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", $g = ch.slice(10);
function Gt(e) {
  return e < 0 ? -1 : e === 0 ? 0 : 1;
}
function _r(e, t, n) {
  return (1 - n) * e + n * t;
}
function hh(e, t, n) {
  return n < e ? e : n > t ? t : n;
}
function ys(e, t, n) {
  return n < e ? e : n > t ? t : n;
}
function xs(e) {
  return e = e % 360, e < 0 && (e = e + 360), e;
}
function ti(e) {
  return e = e % 360, e < 0 && (e = e + 360), e;
}
function uh(e, t) {
  return 180 - Math.abs(Math.abs(e - t) - 180);
}
function ya(e, t) {
  return [
    e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2],
    e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2],
    e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2]
  ];
}
var Dl = [
  [
    0.41233895,
    0.35762064,
    0.18051042
  ],
  [
    0.2126,
    0.7152,
    0.0722
  ],
  [
    0.01932141,
    0.11916382,
    0.95034478
  ]
], dh = [
  [
    3.2413774792388685,
    -1.5376652402851851,
    -0.49885366846268053
  ],
  [
    -0.9691452513005321,
    1.8758853451067872,
    0.04156585616912061
  ],
  [
    0.05562093689691305,
    -0.20395524564742123,
    1.0571799111220335
  ]
], Nl = [
  95.047,
  100,
  108.883
];
function Pa(e, t, n) {
  return (255 << 24 | (e & 255) << 16 | (t & 255) << 8 | n & 255) >>> 0;
}
function ro(e) {
  return Pa(fi(e[0]), fi(e[1]), fi(e[2]));
}
function La(e) {
  return e >> 16 & 255;
}
function Ia(e) {
  return e >> 8 & 255;
}
function Da(e) {
  return e & 255;
}
function fh(e, t, n) {
  const i = dh, r = i[0][0] * e + i[0][1] * t + i[0][2] * n, s = i[1][0] * e + i[1][1] * t + i[1][2] * n, a = i[2][0] * e + i[2][1] * t + i[2][2] * n;
  return Pa(fi(r), fi(s), fi(a));
}
function ph(e) {
  const t = kn(La(e)), n = kn(Ia(e)), i = kn(Da(e));
  return ya([
    t,
    n,
    i
  ], Dl);
}
function mh(e) {
  const t = kn(La(e)), n = kn(Ia(e)), i = kn(Da(e)), r = Dl, s = r[0][0] * t + r[0][1] * n + r[0][2] * i, a = r[1][0] * t + r[1][1] * n + r[1][2] * i, o = r[2][0] * t + r[2][1] * n + r[2][2] * i, l = Nl, c = s / l[0], h = a / l[1], u = o / l[2], d = Mr(c), f = Mr(h), g = Mr(u);
  return [
    116 * f - 16,
    500 * (d - f),
    200 * (f - g)
  ];
}
function gh(e) {
  const t = fi(Qn(e));
  return Pa(t, t, t);
}
function so(e) {
  const t = ph(e)[1];
  return 116 * Mr(t / 100) - 16;
}
function Qn(e) {
  return 100 * _h((e + 16) / 116);
}
function xa(e) {
  return Mr(e / 100) * 116 - 16;
}
function kn(e) {
  const t = e / 255;
  return t <= 0.040449936 ? t / 12.92 * 100 : Math.pow((t + 0.055) / 1.055, 2.4) * 100;
}
function fi(e) {
  const t = e / 100;
  let n = 0;
  return t <= 31308e-7 ? n = t * 12.92 : n = 1.055 * Math.pow(t, 1 / 2.4) - 0.055, hh(0, 255, Math.round(n * 255));
}
function vh() {
  return Nl;
}
function Mr(e) {
  const t = 0.008856451679035631, n = 24389 / 27;
  return e > t ? Math.pow(e, 1 / 3) : (n * e + 16) / 116;
}
function _h(e) {
  const t = 0.008856451679035631, n = 24389 / 27, i = e * e * e;
  return i > t ? i : (116 * e - 16) / n;
}
var jn = class Ul {
  static make(t = vh(), n = 200 / Math.PI * Qn(50) / 100, i = 50, r = 2, s = !1) {
    const a = t, o = a[0] * 0.401288 + a[1] * 0.650173 + a[2] * -0.051461, l = a[0] * -0.250268 + a[1] * 1.204414 + a[2] * 0.045854, c = a[0] * -2079e-6 + a[1] * 0.048952 + a[2] * 0.953127, h = 0.8 + r / 10, u = h >= 0.9 ? _r(0.59, 0.69, (h - 0.9) * 10) : _r(0.525, 0.59, (h - 0.8) * 10);
    let d = s ? 1 : h * (1 - 1 / 3.6 * Math.exp((-n - 42) / 92));
    d = d > 1 ? 1 : d < 0 ? 0 : d;
    const f = h, g = [
      d * (100 / o) + 1 - d,
      d * (100 / l) + 1 - d,
      d * (100 / c) + 1 - d
    ], _ = 1 / (5 * n + 1), m = _ * _ * _ * _, p = 1 - m, M = m * n + 0.1 * p * p * Math.cbrt(5 * n), E = Qn(i) / t[1], S = 1.48 + Math.sqrt(E), b = 0.725 / Math.pow(E, 0.2), A = b, v = [
      Math.pow(M * g[0] * o / 100, 0.42),
      Math.pow(M * g[1] * l / 100, 0.42),
      Math.pow(M * g[2] * c / 100, 0.42)
    ], T = [
      400 * v[0] / (v[0] + 27.13),
      400 * v[1] / (v[1] + 27.13),
      400 * v[2] / (v[2] + 27.13)
    ], w = (2 * T[0] + T[1] + 0.05 * T[2]) * b;
    return new Ul(E, w, b, A, u, f, g, M, Math.pow(M, 0.25), S);
  }
  constructor(t, n, i, r, s, a, o, l, c, h) {
    this.n = t, this.aw = n, this.nbb = i, this.ncb = r, this.c = s, this.nc = a, this.rgbD = o, this.fl = l, this.fLRoot = c, this.z = h;
  }
};
jn.DEFAULT = jn.make();
var dr = class $n {
  constructor(t, n, i, r, s, a, o, l, c) {
    this.hue = t, this.chroma = n, this.j = i, this.q = r, this.m = s, this.s = a, this.jstar = o, this.astar = l, this.bstar = c;
  }
  distance(t) {
    const n = this.jstar - t.jstar, i = this.astar - t.astar, r = this.bstar - t.bstar, s = Math.sqrt(n * n + i * i + r * r);
    return 1.41 * Math.pow(s, 0.63);
  }
  static fromInt(t) {
    return $n.fromIntInViewingConditions(t, jn.DEFAULT);
  }
  static fromIntInViewingConditions(t, n) {
    const i = (t & 16711680) >> 16, r = (t & 65280) >> 8, s = t & 255, a = kn(i), o = kn(r), l = kn(s), c = 0.41233895 * a + 0.35762064 * o + 0.18051042 * l, h = 0.2126 * a + 0.7152 * o + 0.0722 * l, u = 0.01932141 * a + 0.11916382 * o + 0.95034478 * l, d = 0.401288 * c + 0.650173 * h - 0.051461 * u, f = -0.250268 * c + 1.204414 * h + 0.045854 * u, g = -2079e-6 * c + 0.048952 * h + 0.953127 * u, _ = n.rgbD[0] * d, m = n.rgbD[1] * f, p = n.rgbD[2] * g, M = Math.pow(n.fl * Math.abs(_) / 100, 0.42), E = Math.pow(n.fl * Math.abs(m) / 100, 0.42), S = Math.pow(n.fl * Math.abs(p) / 100, 0.42), b = Gt(_) * 400 * M / (M + 27.13), A = Gt(m) * 400 * E / (E + 27.13), v = Gt(p) * 400 * S / (S + 27.13), T = (11 * b + -12 * A + v) / 11, w = (b + A - 2 * v) / 9, F = (20 * b + 20 * A + 21 * v) / 20, P = (40 * b + 20 * A + v) / 20, U = Math.atan2(w, T) * 180 / Math.PI, q = U < 0 ? U + 360 : U >= 360 ? U - 360 : U, I = q * Math.PI / 180, V = P * n.nbb, $ = 100 * Math.pow(V / n.aw, n.c * n.z), k = 4 / n.c * Math.sqrt($ / 100) * (n.aw + 4) * n.fLRoot, ae = q < 20.14 ? q + 360 : q, Y = 5e4 / 13 * (0.25 * (Math.cos(ae * Math.PI / 180 + 2) + 3.8)) * n.nc * n.ncb * Math.sqrt(T * T + w * w) / (F + 0.305), K = Math.pow(Y, 0.9) * Math.pow(1.64 - Math.pow(0.29, n.n), 0.73), ie = K * Math.sqrt($ / 100), Ee = ie * n.fLRoot, Z = 50 * Math.sqrt(K * n.c / (n.aw + 4)), ne = (1 + 100 * 7e-3) * $ / (1 + 7e-3 * $), _e = 1 / 0.0228 * Math.log(1 + 0.0228 * Ee), Ae = _e * Math.cos(I), we = _e * Math.sin(I);
    return new $n(q, ie, $, k, Ee, Z, ne, Ae, we);
  }
  static fromJch(t, n, i) {
    return $n.fromJchInViewingConditions(t, n, i, jn.DEFAULT);
  }
  static fromJchInViewingConditions(t, n, i, r) {
    const s = 4 / r.c * Math.sqrt(t / 100) * (r.aw + 4) * r.fLRoot, a = n * r.fLRoot, o = n / Math.sqrt(t / 100), l = 50 * Math.sqrt(o * r.c / (r.aw + 4)), c = i * Math.PI / 180, h = (1 + 100 * 7e-3) * t / (1 + 7e-3 * t), u = 1 / 0.0228 * Math.log(1 + 0.0228 * a), d = u * Math.cos(c), f = u * Math.sin(c);
    return new $n(i, n, t, s, a, l, h, d, f);
  }
  static fromUcs(t, n, i) {
    return $n.fromUcsInViewingConditions(t, n, i, jn.DEFAULT);
  }
  static fromUcsInViewingConditions(t, n, i, r) {
    const s = n, a = i, o = Math.sqrt(s * s + a * a), l = (Math.exp(o * 0.0228) - 1) / 0.0228 / r.fLRoot;
    let c = Math.atan2(a, s) * (180 / Math.PI);
    c < 0 && (c += 360);
    const h = t / (1 - (t - 100) * 7e-3);
    return $n.fromJchInViewingConditions(h, l, c, r);
  }
  toInt() {
    return this.viewed(jn.DEFAULT);
  }
  viewed(t) {
    const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), i = Math.pow(n / Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), 1 / 0.9), r = this.hue * Math.PI / 180, s = 0.25 * (Math.cos(r + 2) + 3.8), a = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z), o = s * (5e4 / 13) * t.nc * t.ncb, l = a / t.nbb, c = Math.sin(r), h = Math.cos(r), u = 23 * (l + 0.305) * i / (23 * o + 11 * i * h + 108 * i * c), d = u * h, f = u * c, g = (460 * l + 451 * d + 288 * f) / 1403, _ = (460 * l - 891 * d - 261 * f) / 1403, m = (460 * l - 220 * d - 6300 * f) / 1403, p = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), M = Gt(g) * (100 / t.fl) * Math.pow(p, 1 / 0.42), E = Math.max(0, 27.13 * Math.abs(_) / (400 - Math.abs(_))), S = Gt(_) * (100 / t.fl) * Math.pow(E, 1 / 0.42), b = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), A = Gt(m) * (100 / t.fl) * Math.pow(b, 1 / 0.42), v = M / t.rgbD[0], T = S / t.rgbD[1], w = A / t.rgbD[2], F = 1.86206786 * v - 1.01125463 * T + 0.14918677 * w, P = 0.38752654 * v + 0.62144744 * T - 897398e-8 * w, U = -0.0158415 * v - 0.03412294 * T + 1.04996444 * w;
    return fh(F, P, U);
  }
  static fromXyzInViewingConditions(t, n, i, r) {
    const s = 0.401288 * t + 0.650173 * n - 0.051461 * i, a = -0.250268 * t + 1.204414 * n + 0.045854 * i, o = -2079e-6 * t + 0.048952 * n + 0.953127 * i, l = r.rgbD[0] * s, c = r.rgbD[1] * a, h = r.rgbD[2] * o, u = Math.pow(r.fl * Math.abs(l) / 100, 0.42), d = Math.pow(r.fl * Math.abs(c) / 100, 0.42), f = Math.pow(r.fl * Math.abs(h) / 100, 0.42), g = Gt(l) * 400 * u / (u + 27.13), _ = Gt(c) * 400 * d / (d + 27.13), m = Gt(h) * 400 * f / (f + 27.13), p = (11 * g + -12 * _ + m) / 11, M = (g + _ - 2 * m) / 9, E = (20 * g + 20 * _ + 21 * m) / 20, S = (40 * g + 20 * _ + m) / 20, b = Math.atan2(M, p) * 180 / Math.PI, A = b < 0 ? b + 360 : b >= 360 ? b - 360 : b, v = A * Math.PI / 180, T = S * r.nbb, w = 100 * Math.pow(T / r.aw, r.c * r.z), F = 4 / r.c * Math.sqrt(w / 100) * (r.aw + 4) * r.fLRoot, P = A < 20.14 ? A + 360 : A, U = 5e4 / 13 * (1 / 4 * (Math.cos(P * Math.PI / 180 + 2) + 3.8)) * r.nc * r.ncb * Math.sqrt(p * p + M * M) / (E + 0.305), q = Math.pow(U, 0.9) * Math.pow(1.64 - Math.pow(0.29, r.n), 0.73), I = q * Math.sqrt(w / 100), V = I * r.fLRoot, $ = 50 * Math.sqrt(q * r.c / (r.aw + 4)), k = (1 + 100 * 7e-3) * w / (1 + 7e-3 * w), ae = Math.log(1 + 0.0228 * V) / 0.0228, Y = ae * Math.cos(v), K = ae * Math.sin(v);
    return new $n(A, I, w, F, V, $, k, Y, K);
  }
  xyzInViewingConditions(t) {
    const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), i = Math.pow(n / Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), 1 / 0.9), r = this.hue * Math.PI / 180, s = 0.25 * (Math.cos(r + 2) + 3.8), a = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z), o = s * (5e4 / 13) * t.nc * t.ncb, l = a / t.nbb, c = Math.sin(r), h = Math.cos(r), u = 23 * (l + 0.305) * i / (23 * o + 11 * i * h + 108 * i * c), d = u * h, f = u * c, g = (460 * l + 451 * d + 288 * f) / 1403, _ = (460 * l - 891 * d - 261 * f) / 1403, m = (460 * l - 220 * d - 6300 * f) / 1403, p = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), M = Gt(g) * (100 / t.fl) * Math.pow(p, 1 / 0.42), E = Math.max(0, 27.13 * Math.abs(_) / (400 - Math.abs(_))), S = Gt(_) * (100 / t.fl) * Math.pow(E, 1 / 0.42), b = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), A = Gt(m) * (100 / t.fl) * Math.pow(b, 1 / 0.42), v = M / t.rgbD[0], T = S / t.rgbD[1], w = A / t.rgbD[2];
    return [
      1.86206786 * v - 1.01125463 * T + 0.14918677 * w,
      0.38752654 * v + 0.62144744 * T - 897398e-8 * w,
      -0.0158415 * v - 0.03412294 * T + 1.04996444 * w
    ];
  }
}, ei = class Fe {
  static sanitizeRadians(t) {
    return (t + Math.PI * 8) % (Math.PI * 2);
  }
  static trueDelinearized(t) {
    const n = t / 100;
    let i = 0;
    return n <= 31308e-7 ? i = n * 12.92 : i = 1.055 * Math.pow(n, 1 / 2.4) - 0.055, i * 255;
  }
  static chromaticAdaptation(t) {
    const n = Math.pow(Math.abs(t), 0.42);
    return Gt(t) * 400 * n / (n + 27.13);
  }
  static hueOf(t) {
    const n = ya(t, Fe.SCALED_DISCOUNT_FROM_LINRGB), i = Fe.chromaticAdaptation(n[0]), r = Fe.chromaticAdaptation(n[1]), s = Fe.chromaticAdaptation(n[2]), a = (11 * i + -12 * r + s) / 11, o = (i + r - 2 * s) / 9;
    return Math.atan2(o, a);
  }
  static areInCyclicOrder(t, n, i) {
    return Fe.sanitizeRadians(n - t) < Fe.sanitizeRadians(i - t);
  }
  static intercept(t, n, i) {
    return (n - t) / (i - t);
  }
  static lerpPoint(t, n, i) {
    return [
      t[0] + (i[0] - t[0]) * n,
      t[1] + (i[1] - t[1]) * n,
      t[2] + (i[2] - t[2]) * n
    ];
  }
  static setCoordinate(t, n, i, r) {
    const s = Fe.intercept(t[r], n, i[r]);
    return Fe.lerpPoint(t, s, i);
  }
  static isBounded(t) {
    return 0 <= t && t <= 100;
  }
  static nthVertex(t, n) {
    const i = Fe.Y_FROM_LINRGB[0], r = Fe.Y_FROM_LINRGB[1], s = Fe.Y_FROM_LINRGB[2], a = n % 4 <= 1 ? 0 : 100, o = n % 2 === 0 ? 0 : 100;
    if (n < 4) {
      const l = a, c = o, h = (t - l * r - c * s) / i;
      return Fe.isBounded(h) ? [
        h,
        l,
        c
      ] : [
        -1,
        -1,
        -1
      ];
    } else if (n < 8) {
      const l = a, c = o, h = (t - c * i - l * s) / r;
      return Fe.isBounded(h) ? [
        c,
        h,
        l
      ] : [
        -1,
        -1,
        -1
      ];
    } else {
      const l = a, c = o, h = (t - l * i - c * r) / s;
      return Fe.isBounded(h) ? [
        l,
        c,
        h
      ] : [
        -1,
        -1,
        -1
      ];
    }
  }
  static bisectToSegment(t, n) {
    let i = [
      -1,
      -1,
      -1
    ], r = i, s = 0, a = 0, o = !1, l = !0;
    for (let c = 0; c < 12; c++) {
      const h = Fe.nthVertex(t, c);
      if (h[0] < 0) continue;
      const u = Fe.hueOf(h);
      if (!o) {
        i = h, r = h, s = u, a = u, o = !0;
        continue;
      }
      (l || Fe.areInCyclicOrder(s, u, a)) && (l = !1, Fe.areInCyclicOrder(s, n, u) ? (r = h, a = u) : (i = h, s = u));
    }
    return [i, r];
  }
  static midpoint(t, n) {
    return [
      (t[0] + n[0]) / 2,
      (t[1] + n[1]) / 2,
      (t[2] + n[2]) / 2
    ];
  }
  static criticalPlaneBelow(t) {
    return Math.floor(t - 0.5);
  }
  static criticalPlaneAbove(t) {
    return Math.ceil(t - 0.5);
  }
  static bisectToLimit(t, n) {
    const i = Fe.bisectToSegment(t, n);
    let r = i[0], s = Fe.hueOf(r), a = i[1];
    for (let o = 0; o < 3; o++) if (r[o] !== a[o]) {
      let l = -1, c = 255;
      r[o] < a[o] ? (l = Fe.criticalPlaneBelow(Fe.trueDelinearized(r[o])), c = Fe.criticalPlaneAbove(Fe.trueDelinearized(a[o]))) : (l = Fe.criticalPlaneAbove(Fe.trueDelinearized(r[o])), c = Fe.criticalPlaneBelow(Fe.trueDelinearized(a[o])));
      for (let h = 0; h < 8 && !(Math.abs(c - l) <= 1); h++) {
        const u = Math.floor((l + c) / 2), d = Fe.CRITICAL_PLANES[u], f = Fe.setCoordinate(r, d, a, o), g = Fe.hueOf(f);
        Fe.areInCyclicOrder(s, n, g) ? (a = f, c = u) : (r = f, s = g, l = u);
      }
    }
    return Fe.midpoint(r, a);
  }
  static inverseChromaticAdaptation(t) {
    const n = Math.abs(t), i = Math.max(0, 27.13 * n / (400 - n));
    return Gt(t) * Math.pow(i, 1 / 0.42);
  }
  static findResultByJ(t, n, i) {
    let r = Math.sqrt(i) * 11;
    const s = jn.DEFAULT, a = 1 / Math.pow(1.64 - Math.pow(0.29, s.n), 0.73), o = 0.25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * s.nc * s.ncb, l = Math.sin(t), c = Math.cos(t);
    for (let h = 0; h < 5; h++) {
      const u = r / 100, d = n === 0 || r === 0 ? 0 : n / Math.sqrt(u), f = Math.pow(d * a, 1 / 0.9), g = s.aw * Math.pow(u, 1 / s.c / s.z) / s.nbb, _ = 23 * (g + 0.305) * f / (23 * o + 11 * f * c + 108 * f * l), m = _ * c, p = _ * l, M = (460 * g + 451 * m + 288 * p) / 1403, E = (460 * g - 891 * m - 261 * p) / 1403, S = (460 * g - 220 * m - 6300 * p) / 1403, b = Fe.inverseChromaticAdaptation(M), A = Fe.inverseChromaticAdaptation(E), v = Fe.inverseChromaticAdaptation(S), T = ya([
        b,
        A,
        v
      ], Fe.LINRGB_FROM_SCALED_DISCOUNT);
      if (T[0] < 0 || T[1] < 0 || T[2] < 0) return 0;
      const w = Fe.Y_FROM_LINRGB[0], F = Fe.Y_FROM_LINRGB[1], P = Fe.Y_FROM_LINRGB[2], U = w * T[0] + F * T[1] + P * T[2];
      if (U <= 0) return 0;
      if (h === 4 || Math.abs(U - i) < 2e-3)
        return T[0] > 100.01 || T[1] > 100.01 || T[2] > 100.01 ? 0 : ro(T);
      r = r - (U - i) * r / (2 * U);
    }
    return 0;
  }
  static solveToInt(t, n, i) {
    if (n < 1e-4 || i < 1e-4 || i > 99.9999) return gh(i);
    t = ti(t);
    const r = t / 180 * Math.PI, s = Qn(i), a = Fe.findResultByJ(r, n, s);
    if (a !== 0) return a;
    const o = Fe.bisectToLimit(s, r);
    return ro(o);
  }
  static solveToCam(t, n, i) {
    return dr.fromInt(Fe.solveToInt(t, n, i));
  }
};
ei.SCALED_DISCOUNT_FROM_LINRGB = [
  [
    0.001200833568784504,
    0.002389694492170889,
    2795742885861124e-19
  ],
  [
    5891086651375999e-19,
    0.0029785502573438758,
    3270666104008398e-19
  ],
  [
    10146692491640572e-20,
    5364214359186694e-19,
    0.0032979401770712076
  ]
];
ei.LINRGB_FROM_SCALED_DISCOUNT = [
  [
    1373.2198709594231,
    -1100.4251190754821,
    -7.278681089101213
  ],
  [
    -271.815969077903,
    559.6580465940733,
    -32.46047482791194
  ],
  [
    1.9622899599665666,
    -57.173814538844006,
    308.7233197812385
  ]
];
ei.Y_FROM_LINRGB = [
  0.2126,
  0.7152,
  0.0722
];
ei.CRITICAL_PLANES = [
  0.015176349177441876,
  0.045529047532325624,
  0.07588174588720938,
  0.10623444424209313,
  0.13658714259697685,
  0.16693984095186062,
  0.19729253930674434,
  0.2276452376616281,
  0.2579979360165119,
  0.28835063437139563,
  0.3188300904430532,
  0.350925934958123,
  0.3848314933096426,
  0.42057480301049466,
  0.458183274052838,
  0.4976837250274023,
  0.5391024159806381,
  0.5824650784040898,
  0.6277969426914107,
  0.6751227633498623,
  0.7244668422128921,
  0.775853049866786,
  0.829304845476233,
  0.8848452951698498,
  0.942497089126609,
  1.0022825574869039,
  1.0642236851973577,
  1.1283421258858297,
  1.1946592148522128,
  1.2631959812511864,
  1.3339731595349034,
  1.407011200216447,
  1.4823302800086415,
  1.5599503113873272,
  1.6398909516233677,
  1.7221716113234105,
  1.8068114625156377,
  1.8938294463134073,
  1.9832442801866852,
  2.075074464868551,
  2.1693382909216234,
  2.2660538449872063,
  2.36523901573795,
  2.4669114995532007,
  2.5710888059345764,
  2.6777882626779785,
  2.7870270208169257,
  2.898822059350997,
  3.0131901897720907,
  3.1301480604002863,
  3.2497121605402226,
  3.3718988244681087,
  3.4967242352587946,
  3.624204428461639,
  3.754355295633311,
  3.887192587735158,
  4.022731918402185,
  4.160988767090289,
  4.301978482107941,
  4.445716283538092,
  4.592217266055746,
  4.741496401646282,
  4.893568542229298,
  5.048448422192488,
  5.20615066083972,
  5.3666897647573375,
  5.5300801301023865,
  5.696336044816294,
  5.865471690767354,
  6.037501145825082,
  6.212438385869475,
  6.390297286737924,
  6.571091626112461,
  6.7548350853498045,
  6.941541251256611,
  7.131223617812143,
  7.323895587840543,
  7.5195704746346665,
  7.7182615035334345,
  7.919981813454504,
  8.124744458384042,
  8.332562408825165,
  8.543448553206703,
  8.757415699253682,
  8.974476575321063,
  9.194643831691977,
  9.417930041841839,
  9.644347703669503,
  9.873909240696694,
  10.106627003236781,
  10.342513269534024,
  10.58158024687427,
  10.8238400726681,
  11.069304815507364,
  11.317986476196008,
  11.569896988756009,
  11.825048221409341,
  12.083451977536606,
  12.345119996613247,
  12.610063955123938,
  12.878295467455942,
  13.149826086772048,
  13.42466730586372,
  13.702830557985108,
  13.984327217668513,
  14.269168601521828,
  14.55736596900856,
  14.848930523210871,
  15.143873411576273,
  15.44220572664832,
  15.743938506781891,
  16.04908273684337,
  16.35764934889634,
  16.66964922287304,
  16.985093187232053,
  17.30399201960269,
  17.62635644741625,
  17.95219714852476,
  18.281524751807332,
  18.614349837764564,
  18.95068293910138,
  19.290534541298456,
  19.633915083172692,
  19.98083495742689,
  20.331304511189067,
  20.685334046541502,
  21.042933821039977,
  21.404114048223256,
  21.76888489811322,
  22.137256497705877,
  22.50923893145328,
  22.884842241736916,
  23.264076429332462,
  23.6469514538663,
  24.033477234264016,
  24.42366364919083,
  24.817520537484558,
  25.21505769858089,
  25.61628489293138,
  26.021211842414342,
  26.429848230738664,
  26.842203703840827,
  27.258287870275353,
  27.678110301598522,
  28.10168053274597,
  28.529008062403893,
  28.96010235337422,
  29.39497283293396,
  29.83362889318845,
  30.276079891419332,
  30.722335150426627,
  31.172403958865512,
  31.62629557157785,
  32.08401920991837,
  32.54558406207592,
  33.010999283389665,
  33.4802739966603,
  33.953417292456834,
  34.430438229418264,
  34.911345834551085,
  35.39614910352207,
  35.88485700094671,
  36.37747846067349,
  36.87402238606382,
  37.37449765026789,
  37.87891309649659,
  38.38727753828926,
  38.89959975977785,
  39.41588851594697,
  39.93615253289054,
  40.460400508064545,
  40.98864111053629,
  41.520882981230194,
  42.05713473317016,
  42.597404951718396,
  43.141702194811224,
  43.6900349931913,
  44.24241185063697,
  44.798841244188324,
  45.35933162437017,
  45.92389141541209,
  46.49252901546552,
  47.065252796817916,
  47.64207110610409,
  48.22299226451468,
  48.808024568002054,
  49.3971762874833,
  49.9904556690408,
  50.587870934119984,
  51.189430279724725,
  51.79514187861014,
  52.40501387947288,
  53.0190544071392,
  53.637271562750364,
  54.259673423945976,
  54.88626804504493,
  55.517063457223934,
  56.15206766869424,
  56.79128866487574,
  57.43473440856916,
  58.08241284012621,
  58.734331877617365,
  59.39049941699807,
  60.05092333227251,
  60.715611475655585,
  61.38457167773311,
  62.057811747619894,
  62.7353394731159,
  63.417162620860914,
  64.10328893648692,
  64.79372614476921,
  65.48848194977529,
  66.18756403501224,
  66.89098006357258,
  67.59873767827808,
  68.31084450182222,
  69.02730813691093,
  69.74813616640164,
  70.47333615344107,
  71.20291564160104,
  71.93688215501312,
  72.67524319850172,
  73.41800625771542,
  74.16517879925733,
  74.9167682708136,
  75.67278210128072,
  76.43322770089146,
  77.1981124613393,
  77.96744375590167,
  78.74122893956174,
  79.51947534912904,
  80.30219030335869,
  81.08938110306934,
  81.88105503125999,
  82.67721935322541,
  83.4778813166706,
  84.28304815182372,
  85.09272707154808,
  85.90692527145302,
  86.72564993000343,
  87.54890820862819,
  88.3767072518277,
  89.2090541872801,
  90.04595612594655,
  90.88742016217518,
  91.73345337380438,
  92.58406282226491,
  93.43925555268066,
  94.29903859396902,
  95.16341895893969,
  96.03240364439274,
  96.9059996312159,
  97.78421388448044,
  98.6670533535366,
  99.55452497210776
];
var jt = class ms {
  static from(t, n, i) {
    return new ms(ei.solveToInt(t, n, i));
  }
  static fromInt(t) {
    return new ms(t);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(t) {
    this.setInternalState(ei.solveToInt(t, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(t) {
    this.setInternalState(ei.solveToInt(this.internalHue, t, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(t) {
    this.setInternalState(ei.solveToInt(this.internalHue, this.internalChroma, t));
  }
  constructor(t) {
    this.argb = t;
    const n = dr.fromInt(t);
    this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = so(t), this.argb = t;
  }
  setInternalState(t) {
    const n = dr.fromInt(t);
    this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = so(t), this.argb = t;
  }
  inViewingConditions(t) {
    const n = dr.fromInt(this.toInt()).xyzInViewingConditions(t), i = dr.fromXyzInViewingConditions(n[0], n[1], n[2], jn.make());
    return ms.from(i.hue, i.chroma, xa(n[1]));
  }
}, en = class Di {
  static ratioOfTones(t, n) {
    return t = ys(0, 100, t), n = ys(0, 100, n), Di.ratioOfYs(Qn(t), Qn(n));
  }
  static ratioOfYs(t, n) {
    const i = t > n ? t : n, r = i === n ? t : n;
    return (i + 5) / (r + 5);
  }
  static lighter(t, n) {
    if (t < 0 || t > 100) return -1;
    const i = Qn(t), r = n * (i + 5) - 5, s = Di.ratioOfYs(r, i), a = Math.abs(s - n);
    if (s < n && a > 0.04) return -1;
    const o = xa(r) + 0.4;
    return o < 0 || o > 100 ? -1 : o;
  }
  static darker(t, n) {
    if (t < 0 || t > 100) return -1;
    const i = Qn(t), r = (i + 5) / n - 5, s = Di.ratioOfYs(i, r), a = Math.abs(s - n);
    if (s < n && a > 0.04) return -1;
    const o = xa(r) - 0.4;
    return o < 0 || o > 100 ? -1 : o;
  }
  static lighterUnsafe(t, n) {
    const i = Di.lighter(t, n);
    return i < 0 ? 100 : i;
  }
  static darkerUnsafe(t, n) {
    const i = Di.darker(t, n);
    return i < 0 ? 0 : i;
  }
}, Na = class Ol {
  static isDisliked(t) {
    const n = Math.round(t.hue) >= 90 && Math.round(t.hue) <= 111, i = Math.round(t.chroma) > 16, r = Math.round(t.tone) < 65;
    return n && i && r;
  }
  static fixIfDisliked(t) {
    return Ol.isDisliked(t) ? jt.from(t.hue, t.chroma, 70) : t;
  }
}, Te = class Jt {
  static fromPalette(t) {
    return new Jt(t.name ?? "", t.palette, t.tone, t.isBackground ?? !1, t.background, t.secondBackground, t.contrastCurve, t.toneDeltaPair);
  }
  constructor(t, n, i, r, s, a, o, l) {
    if (this.name = t, this.palette = n, this.tone = i, this.isBackground = r, this.background = s, this.secondBackground = a, this.contrastCurve = o, this.toneDeltaPair = l, this.hctCache = /* @__PURE__ */ new Map(), !s && a) throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);
    if (!s && o) throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);
    if (s && !o) throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`);
  }
  getArgb(t) {
    return this.getHct(t).toInt();
  }
  getHct(t) {
    const n = this.hctCache.get(t);
    if (n != null) return n;
    const i = this.getTone(t), r = this.palette(t).getHct(i);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(t, r), r;
  }
  getTone(t) {
    const n = t.contrastLevel < 0;
    if (this.toneDeltaPair) {
      const i = this.toneDeltaPair(t), r = i.roleA, s = i.roleB, a = i.delta, o = i.polarity, l = i.stayTogether, c = this.background(t).getTone(t), h = o === "nearer" || o === "lighter" && !t.isDark || o === "darker" && t.isDark, u = h ? r : s, d = h ? s : r, f = this.name === u.name, g = t.isDark ? 1 : -1, _ = u.contrastCurve.get(t.contrastLevel), m = d.contrastCurve.get(t.contrastLevel), p = u.tone(t);
      let M = en.ratioOfTones(c, p) >= _ ? p : Jt.foregroundTone(c, _);
      const E = d.tone(t);
      let S = en.ratioOfTones(c, E) >= m ? E : Jt.foregroundTone(c, m);
      return n && (M = Jt.foregroundTone(c, _), S = Jt.foregroundTone(c, m)), (S - M) * g >= a || (S = ys(0, 100, M + a * g), (S - M) * g >= a || (M = ys(0, 100, S - a * g))), 50 <= M && M < 60 ? g > 0 ? (M = 60, S = Math.max(S, M + a * g)) : (M = 49, S = Math.min(S, M + a * g)) : 50 <= S && S < 60 && (l ? g > 0 ? (M = 60, S = Math.max(S, M + a * g)) : (M = 49, S = Math.min(S, M + a * g)) : g > 0 ? S = 60 : S = 49), f ? M : S;
    } else {
      let i = this.tone(t);
      if (this.background == null) return i;
      const r = this.background(t).getTone(t), s = this.contrastCurve.get(t.contrastLevel);
      if (en.ratioOfTones(r, i) >= s || (i = Jt.foregroundTone(r, s)), n && (i = Jt.foregroundTone(r, s)), this.isBackground && 50 <= i && i < 60 && (en.ratioOfTones(49, r) >= s ? i = 49 : i = 60), this.secondBackground) {
        const [a, o] = [this.background, this.secondBackground], [l, c] = [a(t).getTone(t), o(t).getTone(t)], [h, u] = [Math.max(l, c), Math.min(l, c)];
        if (en.ratioOfTones(h, i) >= s && en.ratioOfTones(u, i) >= s) return i;
        const d = en.lighter(h, s), f = en.darker(u, s), g = [];
        return d !== -1 && g.push(d), f !== -1 && g.push(f), Jt.tonePrefersLightForeground(l) || Jt.tonePrefersLightForeground(c) ? d < 0 ? 100 : d : g.length === 1 ? g[0] : f < 0 ? 0 : f;
      }
      return i;
    }
  }
  static foregroundTone(t, n) {
    const i = en.lighterUnsafe(t, n), r = en.darkerUnsafe(t, n), s = en.ratioOfTones(i, t), a = en.ratioOfTones(r, t);
    if (Jt.tonePrefersLightForeground(t)) {
      const o = Math.abs(s - a) < 0.1 && s < n && a < n;
      return s >= n || s >= a || o ? i : r;
    } else return a >= n || a >= s ? r : i;
  }
  static tonePrefersLightForeground(t) {
    return Math.round(t) < 60;
  }
  static toneAllowsLightForeground(t) {
    return Math.round(t) <= 49;
  }
  static enableLightForeground(t) {
    return Jt.tonePrefersLightForeground(t) && !Jt.toneAllowsLightForeground(t) ? 49 : t;
  }
}, Ye = class gs {
  static fromInt(t) {
    const n = jt.fromInt(t);
    return gs.fromHct(n);
  }
  static fromHct(t) {
    return new gs(t.hue, t.chroma, t);
  }
  static fromHueAndChroma(t, n) {
    const i = new Mh(t, n).create();
    return new gs(t, n, i);
  }
  constructor(t, n, i) {
    this.hue = t, this.chroma = n, this.keyColor = i, this.cache = /* @__PURE__ */ new Map();
  }
  tone(t) {
    let n = this.cache.get(t);
    return n === void 0 && (n = jt.from(this.hue, this.chroma, t).toInt(), this.cache.set(t, n)), n;
  }
  getHct(t) {
    return jt.fromInt(this.tone(t));
  }
}, Mh = class {
  constructor(e, t) {
    this.hue = e, this.requestedChroma = t, this.chromaCache = /* @__PURE__ */ new Map(), this.maxChromaValue = 200;
  }
  create() {
    let i = 0, r = 100;
    for (; i < r; ) {
      const s = Math.floor((i + r) / 2), a = this.maxChroma(s) < this.maxChroma(s + 1);
      if (this.maxChroma(s) >= this.requestedChroma - 0.01)
        if (Math.abs(i - 50) < Math.abs(r - 50)) r = s;
        else {
          if (i === s) return jt.from(this.hue, this.requestedChroma, i);
          i = s;
        }
      else a ? i = s + 1 : r = s;
    }
    return jt.from(this.hue, this.requestedChroma, i);
  }
  maxChroma(e) {
    if (this.chromaCache.has(e)) return this.chromaCache.get(e);
    const t = jt.from(this.hue, this.maxChromaValue, e).chroma;
    return this.chromaCache.set(e, t), t;
  }
}, Ne = class {
  constructor(e, t, n, i) {
    this.low = e, this.normal = t, this.medium = n, this.high = i;
  }
  get(e) {
    return e <= -1 ? this.low : e < 0 ? _r(this.low, this.normal, (e - -1) / 1) : e < 0.5 ? _r(this.normal, this.medium, (e - 0) / 0.5) : e < 1 ? _r(this.medium, this.high, (e - 0.5) / 0.5) : this.high;
  }
}, qt = class {
  constructor(e, t, n, i, r) {
    this.roleA = e, this.roleB = t, this.delta = n, this.polarity = i, this.stayTogether = r;
  }
}, an;
(function(e) {
  e[e.MONOCHROME = 0] = "MONOCHROME", e[e.NEUTRAL = 1] = "NEUTRAL", e[e.TONAL_SPOT = 2] = "TONAL_SPOT", e[e.VIBRANT = 3] = "VIBRANT", e[e.EXPRESSIVE = 4] = "EXPRESSIVE", e[e.FIDELITY = 5] = "FIDELITY", e[e.CONTENT = 6] = "CONTENT", e[e.RAINBOW = 7] = "RAINBOW", e[e.FRUIT_SALAD = 8] = "FRUIT_SALAD";
})(an || (an = {}));
function qi(e) {
  return e.variant === an.FIDELITY || e.variant === an.CONTENT;
}
function ft(e) {
  return e.variant === an.MONOCHROME;
}
function Sh(e, t, n, i) {
  let r = n, s = jt.from(e, t, n);
  if (s.chroma < t) {
    let a = s.chroma;
    for (; s.chroma < t; ) {
      r += i ? -1 : 1;
      const o = jt.from(e, t, r);
      if (a > o.chroma || Math.abs(o.chroma - t) < 0.4) break;
      Math.abs(o.chroma - t) < Math.abs(s.chroma - t) && (s = o), a = Math.max(a, o.chroma);
    }
  }
  return r;
}
var O = class Ta {
  static highestSurface(t) {
    return t.isDark ? Ta.surfaceBright : Ta.surfaceDim;
  }
};
O.contentAccentToneDelta = 15;
O.primaryPaletteKeyColor = Te.fromPalette({
  name: "primary_palette_key_color",
  palette: (e) => e.primaryPalette,
  tone: (e) => e.primaryPalette.keyColor.tone
});
O.secondaryPaletteKeyColor = Te.fromPalette({
  name: "secondary_palette_key_color",
  palette: (e) => e.secondaryPalette,
  tone: (e) => e.secondaryPalette.keyColor.tone
});
O.tertiaryPaletteKeyColor = Te.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => e.tertiaryPalette.keyColor.tone
});
O.neutralPaletteKeyColor = Te.fromPalette({
  name: "neutral_palette_key_color",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.neutralPalette.keyColor.tone
});
O.neutralVariantPaletteKeyColor = Te.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.neutralVariantPalette.keyColor.tone
});
O.background = Te.fromPalette({
  name: "background",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 6 : 98,
  isBackground: !0
});
O.onBackground = Te.fromPalette({
  name: "on_background",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 90 : 10,
  background: (e) => O.background,
  contrastCurve: new Ne(3, 3, 4.5, 7)
});
O.surface = Te.fromPalette({
  name: "surface",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 6 : 98,
  isBackground: !0
});
O.surfaceDim = Te.fromPalette({
  name: "surface_dim",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 6 : new Ne(87, 87, 80, 75).get(e.contrastLevel),
  isBackground: !0
});
O.surfaceBright = Te.fromPalette({
  name: "surface_bright",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(24, 24, 29, 34).get(e.contrastLevel) : 98,
  isBackground: !0
});
O.surfaceContainerLowest = Te.fromPalette({
  name: "surface_container_lowest",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(4, 4, 2, 0).get(e.contrastLevel) : 100,
  isBackground: !0
});
O.surfaceContainerLow = Te.fromPalette({
  name: "surface_container_low",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(10, 10, 11, 12).get(e.contrastLevel) : new Ne(96, 96, 96, 95).get(e.contrastLevel),
  isBackground: !0
});
O.surfaceContainer = Te.fromPalette({
  name: "surface_container",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(12, 12, 16, 20).get(e.contrastLevel) : new Ne(94, 94, 92, 90).get(e.contrastLevel),
  isBackground: !0
});
O.surfaceContainerHigh = Te.fromPalette({
  name: "surface_container_high",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(17, 17, 21, 25).get(e.contrastLevel) : new Ne(92, 92, 88, 85).get(e.contrastLevel),
  isBackground: !0
});
O.surfaceContainerHighest = Te.fromPalette({
  name: "surface_container_highest",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(22, 22, 26, 30).get(e.contrastLevel) : new Ne(90, 90, 84, 80).get(e.contrastLevel),
  isBackground: !0
});
O.onSurface = Te.fromPalette({
  name: "on_surface",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 90 : 10,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
O.surfaceVariant = Te.fromPalette({
  name: "surface_variant",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.isDark ? 30 : 90,
  isBackground: !0
});
O.onSurfaceVariant = Te.fromPalette({
  name: "on_surface_variant",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.isDark ? 80 : 30,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
O.inverseSurface = Te.fromPalette({
  name: "inverse_surface",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 90 : 20
});
O.inverseOnSurface = Te.fromPalette({
  name: "inverse_on_surface",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 20 : 95,
  background: (e) => O.inverseSurface,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
O.outline = Te.fromPalette({
  name: "outline",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.isDark ? 60 : 50,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1.5, 3, 4.5, 7)
});
O.outlineVariant = Te.fromPalette({
  name: "outline_variant",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.isDark ? 30 : 80,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5)
});
O.shadow = Te.fromPalette({
  name: "shadow",
  palette: (e) => e.neutralPalette,
  tone: (e) => 0
});
O.scrim = Te.fromPalette({
  name: "scrim",
  palette: (e) => e.neutralPalette,
  tone: (e) => 0
});
O.surfaceTint = Te.fromPalette({
  name: "surface_tint",
  palette: (e) => e.primaryPalette,
  tone: (e) => e.isDark ? 80 : 40,
  isBackground: !0
});
O.primary = Te.fromPalette({
  name: "primary",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 100 : 0 : e.isDark ? 80 : 40,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 7),
  toneDeltaPair: (e) => new qt(O.primaryContainer, O.primary, 10, "nearer", !1)
});
O.onPrimary = Te.fromPalette({
  name: "on_primary",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
  background: (e) => O.primary,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
O.primaryContainer = Te.fromPalette({
  name: "primary_container",
  palette: (e) => e.primaryPalette,
  tone: (e) => qi(e) ? e.sourceColorHct.tone : ft(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.primaryContainer, O.primary, 10, "nearer", !1)
});
O.onPrimaryContainer = Te.fromPalette({
  name: "on_primary_container",
  palette: (e) => e.primaryPalette,
  tone: (e) => qi(e) ? Te.foregroundTone(O.primaryContainer.tone(e), 4.5) : ft(e) ? e.isDark ? 0 : 100 : e.isDark ? 90 : 30,
  background: (e) => O.primaryContainer,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
O.inversePrimary = Te.fromPalette({
  name: "inverse_primary",
  palette: (e) => e.primaryPalette,
  tone: (e) => e.isDark ? 40 : 80,
  background: (e) => O.inverseSurface,
  contrastCurve: new Ne(3, 4.5, 7, 7)
});
O.secondary = Te.fromPalette({
  name: "secondary",
  palette: (e) => e.secondaryPalette,
  tone: (e) => e.isDark ? 80 : 40,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 7),
  toneDeltaPair: (e) => new qt(O.secondaryContainer, O.secondary, 10, "nearer", !1)
});
O.onSecondary = Te.fromPalette({
  name: "on_secondary",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
  background: (e) => O.secondary,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
O.secondaryContainer = Te.fromPalette({
  name: "secondary_container",
  palette: (e) => e.secondaryPalette,
  tone: (e) => {
    const t = e.isDark ? 30 : 90;
    return ft(e) ? e.isDark ? 30 : 85 : qi(e) ? Sh(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark) : t;
  },
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.secondaryContainer, O.secondary, 10, "nearer", !1)
});
O.onSecondaryContainer = Te.fromPalette({
  name: "on_secondary_container",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 90 : 10 : qi(e) ? Te.foregroundTone(O.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
  background: (e) => O.secondaryContainer,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
O.tertiary = Te.fromPalette({
  name: "tertiary",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 7),
  toneDeltaPair: (e) => new qt(O.tertiaryContainer, O.tertiary, 10, "nearer", !1)
});
O.onTertiary = Te.fromPalette({
  name: "on_tertiary",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
  background: (e) => O.tertiary,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
O.tertiaryContainer = Te.fromPalette({
  name: "tertiary_container",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => {
    if (ft(e)) return e.isDark ? 60 : 49;
    if (!qi(e)) return e.isDark ? 30 : 90;
    const t = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
    return Na.fixIfDisliked(t).tone;
  },
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.tertiaryContainer, O.tertiary, 10, "nearer", !1)
});
O.onTertiaryContainer = Te.fromPalette({
  name: "on_tertiary_container",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 0 : 100 : qi(e) ? Te.foregroundTone(O.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
  background: (e) => O.tertiaryContainer,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
O.error = Te.fromPalette({
  name: "error",
  palette: (e) => e.errorPalette,
  tone: (e) => e.isDark ? 80 : 40,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 7),
  toneDeltaPair: (e) => new qt(O.errorContainer, O.error, 10, "nearer", !1)
});
O.onError = Te.fromPalette({
  name: "on_error",
  palette: (e) => e.errorPalette,
  tone: (e) => e.isDark ? 20 : 100,
  background: (e) => O.error,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
O.errorContainer = Te.fromPalette({
  name: "error_container",
  palette: (e) => e.errorPalette,
  tone: (e) => e.isDark ? 30 : 90,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.errorContainer, O.error, 10, "nearer", !1)
});
O.onErrorContainer = Te.fromPalette({
  name: "on_error_container",
  palette: (e) => e.errorPalette,
  tone: (e) => ft(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
  background: (e) => O.errorContainer,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
O.primaryFixed = Te.fromPalette({
  name: "primary_fixed",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? 40 : 90,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.primaryFixed, O.primaryFixedDim, 10, "lighter", !0)
});
O.primaryFixedDim = Te.fromPalette({
  name: "primary_fixed_dim",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? 30 : 80,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.primaryFixed, O.primaryFixedDim, 10, "lighter", !0)
});
O.onPrimaryFixed = Te.fromPalette({
  name: "on_primary_fixed",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? 100 : 10,
  background: (e) => O.primaryFixedDim,
  secondBackground: (e) => O.primaryFixed,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
O.onPrimaryFixedVariant = Te.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? 90 : 30,
  background: (e) => O.primaryFixedDim,
  secondBackground: (e) => O.primaryFixed,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
O.secondaryFixed = Te.fromPalette({
  name: "secondary_fixed",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? 80 : 90,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.secondaryFixed, O.secondaryFixedDim, 10, "lighter", !0)
});
O.secondaryFixedDim = Te.fromPalette({
  name: "secondary_fixed_dim",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? 70 : 80,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.secondaryFixed, O.secondaryFixedDim, 10, "lighter", !0)
});
O.onSecondaryFixed = Te.fromPalette({
  name: "on_secondary_fixed",
  palette: (e) => e.secondaryPalette,
  tone: (e) => 10,
  background: (e) => O.secondaryFixedDim,
  secondBackground: (e) => O.secondaryFixed,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
O.onSecondaryFixedVariant = Te.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? 25 : 30,
  background: (e) => O.secondaryFixedDim,
  secondBackground: (e) => O.secondaryFixed,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
O.tertiaryFixed = Te.fromPalette({
  name: "tertiary_fixed",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? 40 : 90,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.tertiaryFixed, O.tertiaryFixedDim, 10, "lighter", !0)
});
O.tertiaryFixedDim = Te.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? 30 : 80,
  isBackground: !0,
  background: (e) => O.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new qt(O.tertiaryFixed, O.tertiaryFixedDim, 10, "lighter", !0)
});
O.onTertiaryFixed = Te.fromPalette({
  name: "on_tertiary_fixed",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? 100 : 10,
  background: (e) => O.tertiaryFixedDim,
  secondBackground: (e) => O.tertiaryFixed,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
O.onTertiaryFixedVariant = Te.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? 90 : 30,
  background: (e) => O.tertiaryFixedDim,
  secondBackground: (e) => O.tertiaryFixed,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
var fn = class {
  constructor(e) {
    this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = jt.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = Ye.fromHueAndChroma(25, 84);
  }
  static getRotatedHue(e, t, n) {
    const i = e.hue;
    if (t.length !== n.length) throw new Error(`mismatch between hue length ${t.length} & rotations ${n.length}`);
    if (n.length === 1) return ti(e.hue + n[0]);
    const r = t.length;
    for (let s = 0; s <= r - 2; s++) {
      const a = t[s], o = t[s + 1];
      if (a < i && i < o) return ti(i + n[s]);
    }
    return i;
  }
  getArgb(e) {
    return e.getArgb(this);
  }
  getHct(e) {
    return e.getHct(this);
  }
  get primaryPaletteKeyColor() {
    return this.getArgb(O.primaryPaletteKeyColor);
  }
  get secondaryPaletteKeyColor() {
    return this.getArgb(O.secondaryPaletteKeyColor);
  }
  get tertiaryPaletteKeyColor() {
    return this.getArgb(O.tertiaryPaletteKeyColor);
  }
  get neutralPaletteKeyColor() {
    return this.getArgb(O.neutralPaletteKeyColor);
  }
  get neutralVariantPaletteKeyColor() {
    return this.getArgb(O.neutralVariantPaletteKeyColor);
  }
  get background() {
    return this.getArgb(O.background);
  }
  get onBackground() {
    return this.getArgb(O.onBackground);
  }
  get surface() {
    return this.getArgb(O.surface);
  }
  get surfaceDim() {
    return this.getArgb(O.surfaceDim);
  }
  get surfaceBright() {
    return this.getArgb(O.surfaceBright);
  }
  get surfaceContainerLowest() {
    return this.getArgb(O.surfaceContainerLowest);
  }
  get surfaceContainerLow() {
    return this.getArgb(O.surfaceContainerLow);
  }
  get surfaceContainer() {
    return this.getArgb(O.surfaceContainer);
  }
  get surfaceContainerHigh() {
    return this.getArgb(O.surfaceContainerHigh);
  }
  get surfaceContainerHighest() {
    return this.getArgb(O.surfaceContainerHighest);
  }
  get onSurface() {
    return this.getArgb(O.onSurface);
  }
  get surfaceVariant() {
    return this.getArgb(O.surfaceVariant);
  }
  get onSurfaceVariant() {
    return this.getArgb(O.onSurfaceVariant);
  }
  get inverseSurface() {
    return this.getArgb(O.inverseSurface);
  }
  get inverseOnSurface() {
    return this.getArgb(O.inverseOnSurface);
  }
  get outline() {
    return this.getArgb(O.outline);
  }
  get outlineVariant() {
    return this.getArgb(O.outlineVariant);
  }
  get shadow() {
    return this.getArgb(O.shadow);
  }
  get scrim() {
    return this.getArgb(O.scrim);
  }
  get surfaceTint() {
    return this.getArgb(O.surfaceTint);
  }
  get primary() {
    return this.getArgb(O.primary);
  }
  get onPrimary() {
    return this.getArgb(O.onPrimary);
  }
  get primaryContainer() {
    return this.getArgb(O.primaryContainer);
  }
  get onPrimaryContainer() {
    return this.getArgb(O.onPrimaryContainer);
  }
  get inversePrimary() {
    return this.getArgb(O.inversePrimary);
  }
  get secondary() {
    return this.getArgb(O.secondary);
  }
  get onSecondary() {
    return this.getArgb(O.onSecondary);
  }
  get secondaryContainer() {
    return this.getArgb(O.secondaryContainer);
  }
  get onSecondaryContainer() {
    return this.getArgb(O.onSecondaryContainer);
  }
  get tertiary() {
    return this.getArgb(O.tertiary);
  }
  get onTertiary() {
    return this.getArgb(O.onTertiary);
  }
  get tertiaryContainer() {
    return this.getArgb(O.tertiaryContainer);
  }
  get onTertiaryContainer() {
    return this.getArgb(O.onTertiaryContainer);
  }
  get error() {
    return this.getArgb(O.error);
  }
  get onError() {
    return this.getArgb(O.onError);
  }
  get errorContainer() {
    return this.getArgb(O.errorContainer);
  }
  get onErrorContainer() {
    return this.getArgb(O.onErrorContainer);
  }
  get primaryFixed() {
    return this.getArgb(O.primaryFixed);
  }
  get primaryFixedDim() {
    return this.getArgb(O.primaryFixedDim);
  }
  get onPrimaryFixed() {
    return this.getArgb(O.onPrimaryFixed);
  }
  get onPrimaryFixedVariant() {
    return this.getArgb(O.onPrimaryFixedVariant);
  }
  get secondaryFixed() {
    return this.getArgb(O.secondaryFixed);
  }
  get secondaryFixedDim() {
    return this.getArgb(O.secondaryFixedDim);
  }
  get onSecondaryFixed() {
    return this.getArgb(O.onSecondaryFixed);
  }
  get onSecondaryFixedVariant() {
    return this.getArgb(O.onSecondaryFixedVariant);
  }
  get tertiaryFixed() {
    return this.getArgb(O.tertiaryFixed);
  }
  get tertiaryFixedDim() {
    return this.getArgb(O.tertiaryFixedDim);
  }
  get onTertiaryFixed() {
    return this.getArgb(O.onTertiaryFixed);
  }
  get onTertiaryFixedVariant() {
    return this.getArgb(O.onTertiaryFixedVariant);
  }
}, Fl = class vs {
  constructor(t) {
    this.input = t, this.hctsByTempCache = [], this.hctsByHueCache = [], this.tempsByHctCache = /* @__PURE__ */ new Map(), this.inputRelativeTemperatureCache = -1, this.complementCache = null;
  }
  get hctsByTemp() {
    if (this.hctsByTempCache.length > 0) return this.hctsByTempCache;
    const t = this.hctsByHue.concat([this.input]), n = this.tempsByHct;
    return t.sort((i, r) => n.get(i) - n.get(r)), this.hctsByTempCache = t, t;
  }
  get warmest() {
    return this.hctsByTemp[this.hctsByTemp.length - 1];
  }
  get coldest() {
    return this.hctsByTemp[0];
  }
  analogous(t = 5, n = 12) {
    const i = Math.round(this.input.hue), r = this.hctsByHue[i];
    let s = this.relativeTemperature(r);
    const a = [r];
    let o = 0;
    for (let g = 0; g < 360; g++) {
      const _ = xs(i + g), m = this.hctsByHue[_], p = this.relativeTemperature(m), M = Math.abs(p - s);
      s = p, o += M;
    }
    let l = 1;
    const c = o / n;
    let h = 0;
    for (s = this.relativeTemperature(r); a.length < n; ) {
      const g = xs(i + l), _ = this.hctsByHue[g], m = this.relativeTemperature(_), p = Math.abs(m - s);
      h += p;
      const M = a.length * c;
      let E = h >= M, S = 1;
      for (; E && a.length < n; ) {
        a.push(_);
        const b = (a.length + S) * c;
        E = h >= b, S++;
      }
      if (s = m, l++, l > 360) {
        for (; a.length < n; ) a.push(_);
        break;
      }
    }
    const u = [this.input], d = Math.floor((t - 1) / 2);
    for (let g = 1; g < d + 1; g++) {
      let _ = 0 - g;
      for (; _ < 0; ) _ = a.length + _;
      _ >= a.length && (_ = _ % a.length), u.splice(0, 0, a[_]);
    }
    const f = t - d - 1;
    for (let g = 1; g < f + 1; g++) {
      let _ = g;
      for (; _ < 0; ) _ = a.length + _;
      _ >= a.length && (_ = _ % a.length), u.push(a[_]);
    }
    return u;
  }
  get complement() {
    if (this.complementCache != null) return this.complementCache;
    const t = this.coldest.hue, n = this.tempsByHct.get(this.coldest), i = this.warmest.hue, r = this.tempsByHct.get(this.warmest) - n, s = vs.isBetween(this.input.hue, t, i), a = s ? i : t, o = s ? t : i, l = 1;
    let c = 1e3, h = this.hctsByHue[Math.round(this.input.hue)];
    const u = 1 - this.inputRelativeTemperature;
    for (let d = 0; d <= 360; d += 1) {
      const f = ti(a + l * d);
      if (!vs.isBetween(f, a, o)) continue;
      const g = this.hctsByHue[Math.round(f)], _ = (this.tempsByHct.get(g) - n) / r, m = Math.abs(u - _);
      m < c && (c = m, h = g);
    }
    return this.complementCache = h, this.complementCache;
  }
  relativeTemperature(t) {
    const n = this.tempsByHct.get(this.warmest) - this.tempsByHct.get(this.coldest), i = this.tempsByHct.get(t) - this.tempsByHct.get(this.coldest);
    return n === 0 ? 0.5 : i / n;
  }
  get inputRelativeTemperature() {
    return this.inputRelativeTemperatureCache >= 0 ? this.inputRelativeTemperatureCache : (this.inputRelativeTemperatureCache = this.relativeTemperature(this.input), this.inputRelativeTemperatureCache);
  }
  get tempsByHct() {
    if (this.tempsByHctCache.size > 0) return this.tempsByHctCache;
    const t = this.hctsByHue.concat([this.input]), n = /* @__PURE__ */ new Map();
    for (const i of t) n.set(i, vs.rawTemperature(i));
    return this.tempsByHctCache = n, n;
  }
  get hctsByHue() {
    if (this.hctsByHueCache.length > 0) return this.hctsByHueCache;
    const t = [];
    for (let n = 0; n <= 360; n += 1) {
      const i = jt.from(n, this.input.chroma, this.input.tone);
      t.push(i);
    }
    return this.hctsByHueCache = t, this.hctsByHueCache;
  }
  static isBetween(t, n, i) {
    return n < i ? n <= t && t <= i : n <= t || t <= i;
  }
  static rawTemperature(t) {
    const n = mh(t.toInt()), i = ti(Math.atan2(n[2], n[1]) * 180 / Math.PI), r = Math.sqrt(n[1] * n[1] + n[2] * n[2]);
    return -0.5 + 0.02 * Math.pow(r, 1.07) * Math.cos(ti(i - 50) * Math.PI / 180);
  }
}, yh = class extends fn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: an.CONTENT,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, e.chroma),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, Math.max(e.chroma - 32, e.chroma * 0.5)),
      tertiaryPalette: Ye.fromInt(Na.fixIfDisliked(new Fl(e).analogous(3, 6)[2]).toInt()),
      neutralPalette: Ye.fromHueAndChroma(e.hue, e.chroma / 8),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, e.chroma / 8 + 4)
    });
  }
}, Ns = class fr extends fn {
  constructor(t, n, i) {
    super({
      sourceColorArgb: t.toInt(),
      variant: an.EXPRESSIVE,
      contrastLevel: i,
      isDark: n,
      primaryPalette: Ye.fromHueAndChroma(ti(t.hue + 240), 40),
      secondaryPalette: Ye.fromHueAndChroma(fn.getRotatedHue(t, fr.hues, fr.secondaryRotations), 24),
      tertiaryPalette: Ye.fromHueAndChroma(fn.getRotatedHue(t, fr.hues, fr.tertiaryRotations), 32),
      neutralPalette: Ye.fromHueAndChroma(t.hue + 15, 8),
      neutralVariantPalette: Ye.fromHueAndChroma(t.hue + 15, 12)
    });
  }
};
Ns.hues = [
  0,
  21,
  51,
  121,
  151,
  191,
  271,
  321,
  360
];
Ns.secondaryRotations = [
  45,
  95,
  45,
  20,
  45,
  90,
  45,
  45,
  45
];
Ns.tertiaryRotations = [
  120,
  120,
  20,
  45,
  20,
  15,
  20,
  120,
  120
];
var xh = class extends fn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: an.FIDELITY,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, e.chroma),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, Math.max(e.chroma - 32, e.chroma * 0.5)),
      tertiaryPalette: Ye.fromInt(Na.fixIfDisliked(new Fl(e).complement).toInt()),
      neutralPalette: Ye.fromHueAndChroma(e.hue, e.chroma / 8),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, e.chroma / 8 + 4)
    });
  }
}, Th = class extends fn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: an.MONOCHROME,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, 0),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, 0),
      tertiaryPalette: Ye.fromHueAndChroma(e.hue, 0),
      neutralPalette: Ye.fromHueAndChroma(e.hue, 0),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, 0)
    });
  }
}, Eh = class extends fn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: an.NEUTRAL,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, 12),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, 8),
      tertiaryPalette: Ye.fromHueAndChroma(e.hue, 16),
      neutralPalette: Ye.fromHueAndChroma(e.hue, 2),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, 2)
    });
  }
}, bh = class extends fn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: an.TONAL_SPOT,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, 36),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, 16),
      tertiaryPalette: Ye.fromHueAndChroma(ti(e.hue + 60), 24),
      neutralPalette: Ye.fromHueAndChroma(e.hue, 6),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, 8)
    });
  }
}, Us = class pr extends fn {
  constructor(t, n, i) {
    super({
      sourceColorArgb: t.toInt(),
      variant: an.VIBRANT,
      contrastLevel: i,
      isDark: n,
      primaryPalette: Ye.fromHueAndChroma(t.hue, 200),
      secondaryPalette: Ye.fromHueAndChroma(fn.getRotatedHue(t, pr.hues, pr.secondaryRotations), 24),
      tertiaryPalette: Ye.fromHueAndChroma(fn.getRotatedHue(t, pr.hues, pr.tertiaryRotations), 32),
      neutralPalette: Ye.fromHueAndChroma(t.hue, 10),
      neutralVariantPalette: Ye.fromHueAndChroma(t.hue, 12)
    });
  }
};
Us.hues = [
  0,
  41,
  61,
  101,
  131,
  181,
  251,
  301,
  360
];
Us.secondaryRotations = [
  18,
  15,
  10,
  12,
  15,
  18,
  15,
  12,
  12
];
Us.tertiaryRotations = [
  35,
  30,
  20,
  25,
  30,
  35,
  30,
  25,
  25
];
var Ah = {
  desired: 4,
  fallbackColorARGB: 4282549748,
  filter: !0
};
function Rh(e, t) {
  return e.score > t.score ? -1 : e.score < t.score ? 1 : 0;
}
var Yi = class Zn {
  constructor() {
  }
  static score(t, n) {
    const { desired: i, fallbackColorARGB: r, filter: s } = {
      ...Ah,
      ...n
    }, a = [], o = new Array(360).fill(0);
    let l = 0;
    for (const [f, g] of t.entries()) {
      const _ = jt.fromInt(f);
      a.push(_);
      const m = Math.floor(_.hue);
      o[m] += g, l += g;
    }
    const c = new Array(360).fill(0);
    for (let f = 0; f < 360; f++) {
      const g = o[f] / l;
      for (let _ = f - 14; _ < f + 16; _++) {
        const m = xs(_);
        c[m] += g;
      }
    }
    const h = new Array();
    for (const f of a) {
      const g = c[xs(Math.round(f.hue))];
      if (s && (f.chroma < Zn.CUTOFF_CHROMA || g <= Zn.CUTOFF_EXCITED_PROPORTION)) continue;
      const _ = g * 100 * Zn.WEIGHT_PROPORTION, m = f.chroma < Zn.TARGET_CHROMA ? Zn.WEIGHT_CHROMA_BELOW : Zn.WEIGHT_CHROMA_ABOVE, p = _ + (f.chroma - Zn.TARGET_CHROMA) * m;
      h.push({
        hct: f,
        score: p
      });
    }
    h.sort(Rh);
    const u = [];
    for (let f = 90; f >= 15; f--) {
      u.length = 0;
      for (const { hct: g } of h)
        if (u.find((_) => uh(g.hue, _.hue) < f) || u.push(g), u.length >= i) break;
      if (u.length >= i) break;
    }
    const d = [];
    u.length === 0 && d.push(r);
    for (const f of u) d.push(f.toInt());
    return d;
  }
};
Yi.TARGET_CHROMA = 48;
Yi.WEIGHT_PROPORTION = 0.7;
Yi.WEIGHT_CHROMA_ABOVE = 0.3;
Yi.WEIGHT_CHROMA_BELOW = 0.1;
Yi.CUTOFF_CHROMA = 5;
Yi.CUTOFF_EXCITED_PROPORTION = 0.01;
function wh(e) {
  const t = La(e), n = Ia(e), i = Da(e), r = [
    t.toString(16),
    n.toString(16),
    i.toString(16)
  ];
  for (const [s, a] of r.entries()) a.length === 1 && (r[s] = "0" + a);
  return "#" + r.join("");
}
function Ch(e) {
  e = e.replace("#", "");
  const t = e.length === 3, n = e.length === 6, i = e.length === 8;
  if (!t && !n && !i) throw new Error("unexpected hex " + e);
  let r = 0, s = 0, a = 0;
  return t ? (r = Pn(e.slice(0, 1).repeat(2)), s = Pn(e.slice(1, 2).repeat(2)), a = Pn(e.slice(2, 3).repeat(2))) : n ? (r = Pn(e.slice(0, 2)), s = Pn(e.slice(2, 4)), a = Pn(e.slice(4, 6))) : i && (r = Pn(e.slice(2, 4)), s = Pn(e.slice(4, 6)), a = Pn(e.slice(6, 8))), (255 << 24 | (r & 255) << 16 | (s & 255) << 8 | a & 255) >>> 0;
}
function Pn(e) {
  return parseInt(e, 16);
}
var Bl = [
  "primary",
  "on-primary",
  "primary-container",
  "on-primary-container",
  "secondary",
  "on-secondary",
  "secondary-container",
  "on-secondary-container",
  "tertiary",
  "on-tertiary",
  "tertiary-container",
  "on-tertiary-container",
  "error",
  "on-error",
  "error-container",
  "on-error-container",
  "surface",
  "on-surface",
  "on-surface-variant",
  "surface-dim",
  "surface-bright",
  "surface-container-lowest",
  "surface-container-low",
  "surface-container",
  "surface-container-high",
  "surface-container-highest",
  "surface-variant",
  "background",
  "on-background",
  "outline",
  "outline-variant",
  "inverse-surface",
  "inverse-on-surface",
  "inverse-primary",
  "surface-tint",
  "shadow",
  "scrim",
  "primary-fixed",
  "primary-fixed-dim",
  "on-primary-fixed",
  "on-primary-fixed-variant",
  "secondary-fixed",
  "secondary-fixed-dim",
  "on-secondary-fixed",
  "on-secondary-fixed-variant",
  "tertiary-fixed",
  "tertiary-fixed-dim",
  "on-tertiary-fixed",
  "on-tertiary-fixed-variant"
], Ph = {
  accent: "primary",
  "on-accent": "on-primary",
  text: "on-surface",
  "text-muted": "on-surface-variant",
  "surface-subtle": "surface-container",
  border: "outline-variant"
}, kl = {
  "tonal-spot": bh,
  fidelity: xh,
  content: yh,
  vibrant: Us,
  expressive: Ns,
  neutral: Eh,
  monochrome: Th
}, Zg = Object.keys(kl), zl = "#2563eb", Lh = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
function Ih(e) {
  return Lh.test(e.trim()) ? null : `seed: expected a hex color (#b85c38), got "${e}"`;
}
var Dh = (e) => e.replace(/-([a-z])/g, (t, n) => n.toUpperCase());
function Hl(e, { dark: t = !1, variant: n = "tonal-spot" } = {}) {
  const i = Ih(e);
  if (i) throw new Error(i);
  const r = e.trim().length === 4 ? `#${[...e.trim().slice(1)].map((o) => o + o).join("")}` : e.trim(), s = new kl[n](jt.fromInt(Ch(r)), t, 0), a = O;
  return Object.fromEntries(Bl.map((o) => [o, wh(a[Dh(o)].getArgb(s))]));
}
var Nh = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body-lg",
  "body-md",
  "body-sm",
  "label",
  "caption"
], Uh = {
  h1: {
    size: "5xl",
    weight: "bold",
    lineHeight: "tight",
    letterSpacing: "tighter"
  },
  h2: {
    size: "4xl",
    weight: "bold",
    lineHeight: "tight",
    letterSpacing: "tight"
  },
  h3: {
    size: "3xl",
    weight: "semibold",
    lineHeight: "snug",
    letterSpacing: "tight"
  },
  h4: {
    size: "2xl",
    weight: "semibold",
    lineHeight: "snug",
    letterSpacing: "normal"
  },
  h5: {
    size: "xl",
    weight: "semibold",
    lineHeight: "snug",
    letterSpacing: "normal"
  },
  h6: {
    size: "lg",
    weight: "semibold",
    lineHeight: "snug",
    letterSpacing: "normal"
  },
  "body-lg": {
    size: "lg",
    weight: "regular",
    lineHeight: "normal",
    letterSpacing: "normal"
  },
  "body-md": {
    size: "md",
    weight: "regular",
    lineHeight: "normal",
    letterSpacing: "normal"
  },
  "body-sm": {
    size: "sm",
    weight: "regular",
    lineHeight: "normal",
    letterSpacing: "normal"
  },
  label: {
    size: "sm",
    weight: "medium",
    lineHeight: "snug",
    letterSpacing: "normal"
  },
  caption: {
    size: "xs",
    weight: "regular",
    lineHeight: "normal",
    letterSpacing: "wide"
  }
}, Oh = (e) => e.length === 2 && e.startsWith("h");
function Fh(e) {
  return {
    fontFamily: `var(--font-family-${Oh(e) ? "heading" : "body"})`,
    fontSize: `var(--font-size-${e})`,
    fontWeight: `var(--font-weight-${e})`,
    lineHeight: `var(--line-height-${e})`,
    letterSpacing: `var(--letter-spacing-${e})`
  };
}
var ot = (e) => ({ $value: `${e}px` }), Bh = Hl(zl, { variant: "fidelity" }), kh = Hl(zl, {
  variant: "fidelity",
  dark: !0
}), kr = (e, t) => Object.fromEntries(Nh.map((n) => [n, { $value: `{${e}.${Uh[n][t]}}` }])), ao = (e) => Object.fromEntries(Bl.map((t) => [t, { $value: e[t] }])), Jg = {
  tokens: {
    color: {
      $type: "color",
      ...ao(Bh),
      ...Object.fromEntries(Object.entries(Ph).map(([e, t]) => [e, { $value: `{color.${t}}` }]))
    },
    space: {
      $type: "dimension",
      0: ot(0),
      1: ot(4),
      2: ot(8),
      3: ot(12),
      4: ot(16),
      5: ot(20),
      6: ot(24),
      8: ot(32),
      10: ot(40),
      12: ot(48),
      16: ot(64)
    },
    radius: {
      $type: "dimension",
      sm: ot(4),
      md: ot(8),
      lg: ot(12),
      xl: ot(16),
      full: ot(9999)
    },
    "font-family": {
      $type: "fontFamily",
      sans: { $value: [
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "sans-serif"
      ] },
      mono: { $value: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "monospace"
      ] },
      heading: { $value: "{font-family.sans}" },
      body: { $value: "{font-family.sans}" }
    },
    "font-size": {
      $type: "dimension",
      ...kr("font-size", "size"),
      xs: ot(12),
      sm: ot(14),
      md: ot(16),
      lg: ot(18),
      xl: ot(20),
      "2xl": ot(24),
      "3xl": ot(30),
      "4xl": ot(40),
      "5xl": ot(56)
    },
    "font-weight": {
      $type: "fontWeight",
      ...kr("font-weight", "weight"),
      regular: { $value: 400 },
      medium: { $value: 500 },
      semibold: { $value: 600 },
      bold: { $value: 700 }
    },
    "line-height": {
      $type: "number",
      ...kr("line-height", "lineHeight"),
      tight: { $value: 1.15 },
      snug: { $value: 1.3 },
      normal: { $value: 1.5 }
    },
    "letter-spacing": {
      $type: "dimension",
      ...kr("letter-spacing", "letterSpacing"),
      tighter: { $value: "-0.03em" },
      tight: { $value: "-0.02em" },
      normal: { $value: "0" },
      wide: { $value: "0.02em" }
    },
    shadow: {
      $type: "shadow",
      sm: { $value: "0 1px 2px rgb(15 23 42 / 0.08)" },
      md: { $value: "0 4px 12px rgb(15 23 42 / 0.12)" }
    }
  },
  modes: { dark: { color: ao(kh) } }
}, Gl = (e) => new RegExp(`^(?:${e})\\((?:[^()]|\\([^()]*\\))*\\)$`, "i"), zh = Gl("rgba?|hsla?|hwb|lab|lch|oklab|oklch|color|color-mix"), zr = Gl("calc|clamp|min|max"), Hr = /^(?:0|-?(?:\d+|\d*\.\d+)(?:px|rem|em|%))$/, Hh = {
  color: {
    type: "color",
    valid: (e) => /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(e) || zh.test(e) || /^[a-z]+$/i.test(e),
    expect: "a color (#c2410c, rgb(…), oklch(…), color-mix(…)), not a gradient"
  },
  space: {
    type: "dimension",
    valid: (e) => Hr.test(e) || zr.test(e),
    expect: "a length (16px, 1rem) or calc()/clamp()"
  },
  radius: {
    type: "dimension",
    valid: (e) => Hr.test(e) || zr.test(e),
    expect: "a length (12px)"
  },
  "font-size": {
    type: "dimension",
    valid: (e) => Hr.test(e) || zr.test(e),
    expect: "a length (18px, 1.125rem) or clamp()"
  },
  "font-weight": {
    type: "fontWeight",
    valid: (e) => /^[1-9]00$/.test(e),
    expect: "a weight from 100 to 900"
  },
  "line-height": {
    type: "number",
    valid: (e) => /^(?:\d+|\d*\.\d+)$/.test(e),
    expect: "a unitless number (1.4)"
  },
  "font-family": {
    type: "fontFamily",
    valid: () => !1,
    expect: "a reference to a font, e.g. {font-family.fraunces} (add_fonts adds one)"
  },
  "letter-spacing": {
    type: "dimension",
    valid: (e) => Hr.test(e) || zr.test(e),
    expect: "a length (-0.02em, 1px)"
  },
  shadow: {
    type: "shadow",
    valid: (e) => e === "none" || /^[a-z0-9#.,%() -]+$/i.test(e),
    expect: "a box-shadow (0 4px 12px rgb(0 0 0 / 0.12))"
  }
}, Qg = Object.keys(Hh), Gh = ["heading", "body"], jg = `set the roles ${Gh.map((e) => `font-family.${e}`).join(" and ")} to one, e.g. {font-family.fraunces}`, Vh = {
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  avif: "image/avif"
}, Wh = { glb: "model/gltf-binary" }, e0 = {
  ...Vh,
  ...Wh
}, Xh = 10485760, qh = 2e5;
var oo = /* @__PURE__ */ new Set([
  "box",
  "cylinder",
  "cone",
  "sphere",
  "torus",
  "lathe",
  "ring",
  "capsule",
  "group"
]), Tn = (e) => typeof e == "number" && Number.isFinite(e), Fi = (e) => Array.isArray(e) && e.length === 3 && e.every(Tn), Yh = (e) => Array.isArray(e) && e.length === 2 && e.every(Tn), pi = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Kh = /^(?:#[0-9a-f]{3,8}|var\(--[a-z0-9-]+\)|transparent|[a-z]{3,20})$/i;
function Ea(e, t) {
  return e === void 0 ? null : typeof e != "string" || !Kh.test(e.trim()) ? `${t} must be a hex color, "transparent", or a CSS token like var(--color-primary)` : null;
}
function $h(e, t) {
  if (e === void 0) return null;
  if (!pi(e)) return `${t} must be an object`;
  const n = Ea(e.color, `${t}.color`);
  if (n) return n;
  const i = Ea(e.emissive, `${t}.emissive`);
  return i || (e.metalness !== void 0 && (!Tn(e.metalness) || e.metalness < 0 || e.metalness > 1) ? `${t}.metalness must be a number between 0 and 1` : e.roughness !== void 0 && (!Tn(e.roughness) || e.roughness < 0 || e.roughness > 1) ? `${t}.roughness must be a number between 0 and 1` : e.opacity !== void 0 && (!Tn(e.opacity) || e.opacity < 0 || e.opacity > 1) ? `${t}.opacity must be a number between 0 and 1` : e.side !== void 0 && e.side !== "front" && e.side !== "back" && e.side !== "double" ? `${t}.side must be "front", "back", or "double"` : null);
}
function Vl(e, t, n) {
  if (!pi(e)) return `${t} must be an object`;
  if (n.n += 1, n.n > 256) return "Scene has more than 256 parts";
  if (typeof e.type != "string" || !oo.has(e.type)) return `${t}.type must be one of: ${[...oo].join(", ")}`;
  if (e.position !== void 0 && !Fi(e.position)) return `${t}.position must be [x, y, z]`;
  if (e.rotation !== void 0 && !Fi(e.rotation)) return `${t}.rotation must be [x, y, z]`;
  if (e.scale !== void 0 && !Tn(e.scale) && !Fi(e.scale)) return `${t}.scale must be a number or [x, y, z]`;
  if (e.spin !== void 0) {
    if (!pi(e.spin)) return `${t}.spin must be an object`;
    if (e.spin.axis !== "x" && e.spin.axis !== "y" && e.spin.axis !== "z") return `${t}.spin.axis must be "x", "y", or "z"`;
    if (!Tn(e.spin.speed) || e.spin.speed < -30 || e.spin.speed > 30) return `${t}.spin.speed must be a number between -30 and 30`;
  }
  if (e.type === "lathe" && (!Array.isArray(e.points) || e.points.length < 2 || !e.points.every(Yh)))
    return `${t}.points must be an array of at least two [radius, y] pairs`;
  if (e.repeat !== void 0) {
    if (!pi(e.repeat)) return `${t}.repeat must be an object`;
    if (!Tn(e.repeat.count) || e.repeat.count < 1 || e.repeat.count > 120) return `${t}.repeat.count must be between 1 and 120`;
    if (e.repeat.axis !== "x" && e.repeat.axis !== "y" && e.repeat.axis !== "z") return `${t}.repeat.axis must be "x", "y", or "z"`;
  }
  const i = $h(e.material, `${t}.material`);
  if (i) return i;
  if (e.children !== void 0) {
    if (!Array.isArray(e.children)) return `${t}.children must be an array`;
    for (let r = 0; r < e.children.length; r++) {
      const s = Vl(e.children[r], `${t}.children[${r}]`, n);
      if (s) return s;
    }
  }
  return null;
}
function Zh(e) {
  if (e.length > 2e5) return `3D scene JSON is too large (over ${qh / 1e3}K characters)`;
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return 'Attribute "data-scene" must be valid JSON';
  }
  if (!pi(t)) return 'Attribute "data-scene" must be a JSON object';
  const n = Ea(t.background, "data-scene.background");
  if (n) return n;
  if (t.camera !== void 0) {
    if (!pi(t.camera)) return "data-scene.camera must be an object";
    if (t.camera.position !== void 0 && !Fi(t.camera.position)) return "data-scene.camera.position must be [x, y, z]";
    if (t.camera.target !== void 0 && !Fi(t.camera.target)) return "data-scene.camera.target must be [x, y, z]";
    if (t.camera.fov !== void 0 && (!Tn(t.camera.fov) || t.camera.fov < 10 || t.camera.fov > 120)) return "data-scene.camera.fov must be between 10 and 120";
  }
  if (t.clipPlane !== void 0 && (!pi(t.clipPlane) || !Fi(t.clipPlane.normal) || !Tn(t.clipPlane.constant)))
    return "data-scene.clipPlane must have { normal: [x,y,z], constant: number }";
  if (!Array.isArray(t.parts) || t.parts.length === 0) return "data-scene.parts must be a non-empty array of 3D parts";
  const i = { n: 0 };
  for (let r = 0; r < t.parts.length; r++) {
    const s = Vl(t.parts[r], `data-scene.parts[${r}]`, i);
    if (s) return s;
  }
  return null;
}
function Wl(e) {
  return !e || Zh(e) !== null ? null : JSON.parse(e);
}
function Jh(e) {
  if (!e) return !1;
  if (e.autoRotate) return !0;
  const t = (n) => n.some((i) => !!i.spin || (i.children ? t(i.children) : !1));
  return t(e.parts);
}
function Qh(e) {
  if (!e) return null;
  const t = e.trim().split(/\s+/);
  if (t.length !== 3) return null;
  const n = (a) => a.endsWith("deg") ? parseFloat(a) * Math.PI / 180 : a.endsWith("rad") ? parseFloat(a) : parseFloat(a) * Math.PI / 180, i = n(t[0]), r = n(t[1]), s = parseFloat(t[2]);
  return !Number.isFinite(i) || !Number.isFinite(r) || !Number.isFinite(s) || s <= 0 ? null : {
    theta: i,
    phi: r,
    radius: s
  };
}
var t0 = Math.ceil(Xh / 3) * 4, n0 = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-6)",
  padding: "var(--space-8)",
  backgroundColor: "var(--color-surface)",
  color: "var(--color-on-surface)",
  ...Fh("body-md")
};
var jh = "attached";
var Ts = 1e3, xn = 1001, Es = 1002, Dt = 1003, Xl = 1004, ql = 1005, rn = 1006, Yl = 1007, Ir = 1008, ni = 1009, eu = 1010, tu = 1011, Kl = 1012, nu = 1013, mi = 1014, Ki = 1015, ii = 1016, $l = 1017, Zl = 1018, Ua = 1020, iu = 35902, ru = 35899, su = 1021, au = 1022, Tr = 1023, Er = 1026, bs = 1027, Jl = 1028, Ql = 1029, As = 1030, jl = 1031, ec = 1033, ou = 33776, lu = 33777, cu = 33778, hu = 33779, uu = 35840, du = 35841, fu = 35842, pu = 35843, mu = 36196, gu = 37492, vu = 37496, _u = 37488, Mu = 37489, Su = 37490, yu = 37491, xu = 37808, Tu = 37809, Eu = 37810, bu = 37811, Au = 37812, Ru = 37813, wu = 37814, Cu = 37815, Pu = 37816, Lu = 37817, Iu = 37818, Du = 37819, Nu = 37820, Uu = 37821, Ou = 36492, Fu = 36494, Bu = 36495, ku = 36283, zu = 36284, Hu = 36285, Gu = 36286, br = 2300, Ar = 2301, Gs = 2302, lo = 2303, co = 2400, ho = 2401, uo = 2402, Vu = 2500, Wu = 3200;
var At = "srgb", pn = "srgb-linear", Rs = "linear", ws = "srgb", Vs = 7680;
var tc = 35044;
var gi = 2e3;
function Xu(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function qu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Rr(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function Yu() {
  const e = Rr("canvas");
  return e.style.display = "block", e;
}
var fo = {}, Hi = null;
function Cs(...e) {
  const t = "THREE." + e.shift();
  Hi ? Hi("log", t, ...e) : console.log(t, ...e);
}
function nc(e) {
  const t = e[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    const n = e[1];
    n && n.isStackTrace ? e[0] += " " + n.getLocation() : e[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return e;
}
function xe(...e) {
  e = nc(e);
  const t = "THREE." + e.shift();
  if (Hi) Hi("warn", t, ...e);
  else {
    const n = e[0];
    n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
  }
}
function De(...e) {
  e = nc(e);
  const t = "THREE." + e.shift();
  if (Hi) Hi("error", t, ...e);
  else {
    const n = e[0];
    n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
  }
}
function Bi(...e) {
  const t = e.join(" ");
  t in fo || (fo[t] = !0, xe(...e));
}
function Ku(e, t, n) {
  return new Promise(function(i, r) {
    function s() {
      switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case e.WAIT_FAILED:
          r();
          break;
        case e.TIMEOUT_EXPIRED:
          setTimeout(s, n);
          break;
        default:
          i();
      }
    }
    setTimeout(s, n);
  });
}
var $u = {
  0: 0,
  2: 6,
  4: 4,
  3: 5,
  1: 1,
  6: 2,
  7: 7,
  5: 3
}, _i = class {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const i = n[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, s = i.length; r < s; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}, Lt = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff"
], po = 1234567, Sr = Math.PI / 180, Gi = 180 / Math.PI;
function An() {
  const e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Lt[e & 255] + Lt[e >> 8 & 255] + Lt[e >> 16 & 255] + Lt[e >> 24 & 255] + "-" + Lt[t & 255] + Lt[t >> 8 & 255] + "-" + Lt[t >> 16 & 15 | 64] + Lt[t >> 24 & 255] + "-" + Lt[n & 63 | 128] + Lt[n >> 8 & 255] + "-" + Lt[n >> 16 & 255] + Lt[n >> 24 & 255] + Lt[i & 255] + Lt[i >> 8 & 255] + Lt[i >> 16 & 255] + Lt[i >> 24 & 255]).toLowerCase();
}
function Xe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Oa(e, t) {
  return (e % t + t) % t;
}
function Zu(e, t, n, i, r) {
  return i + (e - t) * (r - i) / (n - t);
}
function Ju(e, t, n) {
  return e !== t ? (n - e) / (t - e) : 0;
}
function yr(e, t, n) {
  return (1 - n) * e + n * t;
}
function Qu(e, t, n, i) {
  return yr(e, t, 1 - Math.exp(-n * i));
}
function ju(e, t = 1) {
  return t - Math.abs(Oa(e, t * 2) - t);
}
function ed(e, t, n) {
  return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function td(e, t, n) {
  return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function nd(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function id(e, t) {
  return e + Math.random() * (t - e);
}
function rd(e) {
  return e * (0.5 - Math.random());
}
function sd(e) {
  e !== void 0 && (po = e);
  let t = po += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function ad(e) {
  return e * Sr;
}
function od(e) {
  return e * Gi;
}
function ld(e) {
  return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function cd(e) {
  return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
}
function ic(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}
function hd(e, t, n, i, r) {
  const s = Math.cos, a = Math.sin, o = s(n / 2), l = a(n / 2), c = s((t + i) / 2), h = a((t + i) / 2), u = s((t - i) / 2), d = a((t - i) / 2), f = s((i - t) / 2), g = a((i - t) / 2);
  switch (r) {
    case "XYX":
      e.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      e.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      e.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      e.set(o * h, l * g, l * f, o * c);
      break;
    case "YXY":
      e.set(l * f, o * h, l * g, o * c);
      break;
    case "ZYZ":
      e.set(l * g, l * f, o * h, o * c);
      break;
    default:
      xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function Os(e) {
  switch (e.constructor) {
    case Uint32Array:
      return 4294967295;
    case Uint16Array:
      return 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return 255;
    case Int32Array:
      return 2147483647;
    case Int16Array:
      return 32767;
    case Int8Array:
      return 127;
    default:
      return;
  }
}
function Fa(e, t) {
  if (t.constructor === Float32Array) return e;
  const n = Os(t);
  if (n === void 0) throw new Error("THREE.MathUtils: Invalid component type.");
  return Math.max(e / n, -1);
}
function Ba(e, t) {
  if (t.constructor === Float32Array) return e;
  const n = Os(t);
  if (n === void 0) throw new Error("THREE.MathUtils: Invalid component type.");
  return Math.round(e * n);
}
var ud = {
  DEG2RAD: Sr,
  RAD2DEG: Gi,
  generateUUID: An,
  clamp: Xe,
  euclideanModulo: Oa,
  mapLinear: Zu,
  inverseLerp: Ju,
  lerp: yr,
  damp: Qu,
  pingpong: ju,
  smoothstep: ed,
  smootherstep: td,
  randInt: nd,
  randFloat: id,
  randFloatSpread: rd,
  seededRandom: sd,
  degToRad: ad,
  radToDeg: od,
  isPowerOfTwo: ld,
  ceilPowerOfTwo: cd,
  floorPowerOfTwo: ic,
  setQuaternionFromProperEuler: hd,
  normalize: Ba,
  denormalize: Fa
}, ke = class {
  static {
    this.prototype.isVector2 = !0;
  }
  constructor(e = 0, t = 0) {
    this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Xe(this.x, e.x, t.x), this.y = Xe(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Xe(this.x, e, t), this.y = Xe(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Xe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Xe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, s = this.y - e.y;
    return this.x = r * n - s * i + e.x, this.y = r * i + s * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}, Hn = class {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, s, a) {
    let o = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[s + 0], d = r[s + 1], f = r[s + 2], g = r[s + 3];
    if (h !== g || o !== u || l !== d || c !== f) {
      let _ = o * u + l * d + c * f + h * g;
      _ < 0 && (u = -u, d = -d, f = -f, g = -g, _ = -_);
      let m = 1 - a;
      if (_ < 0.9995) {
        const p = Math.acos(_), M = Math.sin(p);
        m = Math.sin(m * p) / M, a = Math.sin(a * p) / M, o = o * m + u * a, l = l * m + d * a, c = c * m + f * a, h = h * m + g * a;
      } else {
        o = o * m + u * a, l = l * m + d * a, c = c * m + f * a, h = h * m + g * a;
        const p = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
        o *= p, l *= p, c *= p, h *= p;
      }
    }
    e[t] = o, e[t + 1] = l, e[t + 2] = c, e[t + 3] = h;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, s) {
    const a = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], h = r[s], u = r[s + 1], d = r[s + 2], f = r[s + 3];
    return e[t] = a * f + c * h + o * d - l * u, e[t + 1] = o * f + c * u + l * h - a * d, e[t + 2] = l * f + c * d + a * u - o * h, e[t + 3] = c * f - a * h - o * u - l * d, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x, i = e._y, r = e._z, s = e._order, a = Math.cos, o = Math.sin, l = a(n / 2), c = a(i / 2), h = a(r / 2), u = o(n / 2), d = o(i / 2), f = o(r / 2);
    switch (s) {
      case "XYZ":
        this._x = u * c * h + l * d * f, this._y = l * d * h - u * c * f, this._z = l * c * f + u * d * h, this._w = l * c * h - u * d * f;
        break;
      case "YXZ":
        this._x = u * c * h + l * d * f, this._y = l * d * h - u * c * f, this._z = l * c * f - u * d * h, this._w = l * c * h + u * d * f;
        break;
      case "ZXY":
        this._x = u * c * h - l * d * f, this._y = l * d * h + u * c * f, this._z = l * c * f + u * d * h, this._w = l * c * h - u * d * f;
        break;
      case "ZYX":
        this._x = u * c * h - l * d * f, this._y = l * d * h + u * c * f, this._z = l * c * f - u * d * h, this._w = l * c * h + u * d * f;
        break;
      case "YZX":
        this._x = u * c * h + l * d * f, this._y = l * d * h + u * c * f, this._z = l * c * f - u * d * h, this._w = l * c * h - u * d * f;
        break;
      case "XZY":
        this._x = u * c * h - l * d * f, this._y = l * d * h - u * c * f, this._z = l * c * f + u * d * h, this._w = l * c * h + u * d * f;
        break;
      default:
        xe("Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], s = t[1], a = t[5], o = t[9], l = t[2], c = t[6], h = t[10], u = n + a + h;
    if (u > 0) {
      const d = 0.5 / Math.sqrt(u + 1);
      this._w = 0.25 / d, this._x = (c - o) * d, this._y = (r - l) * d, this._z = (s - i) * d;
    } else if (n > a && n > h) {
      const d = 2 * Math.sqrt(1 + n - a - h);
      this._w = (c - o) / d, this._x = 0.25 * d, this._y = (i + s) / d, this._z = (r + l) / d;
    } else if (a > h) {
      const d = 2 * Math.sqrt(1 + a - n - h);
      this._w = (r - l) / d, this._x = (i + s) / d, this._y = 0.25 * d, this._z = (o + c) / d;
    } else {
      const d = 2 * Math.sqrt(1 + h - n - a);
      this._w = (s - i) / d, this._x = (r + l) / d, this._y = (o + c) / d, this._z = 0.25 * d;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Xe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, r = e._z, s = e._w, a = t._x, o = t._y, l = t._z, c = t._w;
    return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    let n = e._x, i = e._y, r = e._z, s = e._w, a = this.dot(e);
    a < 0 && (n = -n, i = -i, r = -r, s = -s, a = -a);
    let o = 1 - t;
    if (a < 0.9995) {
      const l = Math.acos(a), c = Math.sin(l);
      o = Math.sin(o * l) / c, t = Math.sin(t * l) / c, this._x = this._x * o + n * t, this._y = this._y * o + i * t, this._z = this._z * o + r * t, this._w = this._w * o + s * t, this._onChangeCallback();
    } else
      this._x = this._x * o + n * t, this._y = this._y * o + i * t, this._z = this._z * o + r * t, this._w = this._w * o + s * t, this.normalize();
    return this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}, B = class {
  static {
    this.prototype.isVector3 = !0;
  }
  constructor(e = 0, t = 0, n = 0) {
    this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(mo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(mo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, s = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * s, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, s = e.y, a = e.z, o = e.w, l = 2 * (s * i - a * n), c = 2 * (a * t - r * i), h = 2 * (r * n - s * t);
    return this.x = t + o * l + s * h - a * c, this.y = n + o * c + a * l - r * h, this.z = i + o * h + r * c - s * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Xe(this.x, e.x, t.x), this.y = Xe(this.y, e.y, t.y), this.z = Xe(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Xe(this.x, e, t), this.y = Xe(this.y, e, t), this.z = Xe(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Xe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, r = e.z, s = t.x, a = t.y, o = t.z;
    return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Ws.copy(this).projectOnVector(e), this.sub(Ws);
  }
  reflect(e) {
    return this.sub(Ws.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Xe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}, Ws = /* @__PURE__ */ new B(), mo = /* @__PURE__ */ new Hn(), Be = class {
  static {
    this.prototype.isMatrix3 = !0;
  }
  constructor(e, t, n, i, r, s, a, o, l) {
    this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i, r, s, a, o, l);
  }
  set(e, t, n, i, r, s, a, o, l) {
    const c = this.elements;
    return c[0] = e, c[1] = i, c[2] = a, c[3] = t, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l = n[1], c = n[4], h = n[7], u = n[2], d = n[5], f = n[8], g = i[0], _ = i[3], m = i[6], p = i[1], M = i[4], E = i[7], S = i[2], b = i[5], A = i[8];
    return r[0] = s * g + a * p + o * S, r[3] = s * _ + a * M + o * b, r[6] = s * m + a * E + o * A, r[1] = l * g + c * p + h * S, r[4] = l * _ + c * M + h * b, r[7] = l * m + c * E + h * A, r[2] = u * g + d * p + f * S, r[5] = u * _ + d * M + f * b, r[8] = u * m + d * E + f * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], a = e[5], o = e[6], l = e[7], c = e[8];
    return t * s * c - t * a * l - n * r * c + n * a * o + i * r * l - i * s * o;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], a = e[5], o = e[6], l = e[7], c = e[8], h = c * s - a * l, u = a * o - c * r, d = l * r - s * o, f = t * h + n * u + i * d;
    if (f === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / f;
    return e[0] = h * g, e[1] = (i * l - c * n) * g, e[2] = (a * n - i * s) * g, e[3] = u * g, e[4] = (c * t - i * o) * g, e[5] = (i * r - a * t) * g, e[6] = d * g, e[7] = (n * o - l * t) * g, e[8] = (s * t - n * r) * g, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, r, s, a) {
    const o = Math.cos(r), l = Math.sin(r);
    return this.set(n * o, n * l, -n * (o * s + l * a) + s + e, -i * l, i * o, -i * (-l * s + o * a) + a + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Xs.makeScale(e, t)), this;
  }
  rotate(e) {
    return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Xs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Xs.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}, Xs = /* @__PURE__ */ new Be(), go = /* @__PURE__ */ new Be().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), vo = /* @__PURE__ */ new Be().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function dd() {
  const e = {
    enabled: !0,
    workingColorSpace: pn,
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === "srgb" && (r.r = zn(r.r), r.g = zn(r.g), r.b = zn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === "srgb" && (r.r = ki(r.r), r.g = ki(r.g), r.b = ki(r.b))), r;
    },
    workingToColorSpace: function(r, s) {
      return this.convert(r, this.workingColorSpace, s);
    },
    colorSpaceToWorking: function(r, s) {
      return this.convert(r, s, this.workingColorSpace);
    },
    getPrimaries: function(r) {
      return this.spaces[r].primaries;
    },
    getTransfer: function(r) {
      return r === "" ? Rs : this.spaces[r].transfer;
    },
    getToneMappingMode: function(r) {
      return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard";
    },
    getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
      return r.fromArray(this.spaces[s].luminanceCoefficients);
    },
    define: function(r) {
      Object.assign(this.spaces, r);
    },
    _getMatrix: function(r, s, a) {
      return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ);
    },
    _getDrawingBufferColorSpace: function(r) {
      return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
    },
    _getUnpackColorSpace: function(r = this.workingColorSpace) {
      return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
    }
  }, t = [
    0.64,
    0.33,
    0.3,
    0.6,
    0.15,
    0.06
  ], n = [
    0.2126,
    0.7152,
    0.0722
  ], i = [0.3127, 0.329];
  return e.define({
    [pn]: {
      primaries: t,
      whitePoint: i,
      transfer: Rs,
      toXYZ: go,
      fromXYZ: vo,
      luminanceCoefficients: n,
      workingColorSpaceConfig: { unpackColorSpace: At },
      outputColorSpaceConfig: { drawingBufferColorSpace: At }
    },
    [At]: {
      primaries: t,
      whitePoint: i,
      transfer: ws,
      toXYZ: go,
      fromXYZ: vo,
      luminanceCoefficients: n,
      outputColorSpaceConfig: { drawingBufferColorSpace: At }
    }
  }), e;
}
var qe = /* @__PURE__ */ dd();
function zn(e) {
  return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function ki(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
var Mi, fd = class {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      Mi === void 0 && (Mi = Rr("canvas")), Mi.width = e.width, Mi.height = e.height;
      const i = Mi.getContext("2d");
      e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), n = Mi;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Rr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let s = 0; s < r.length; s++) r[s] = zn(r[s] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(zn(t[n] / 255) * 255) : t[n] = zn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}, pd = 0, ka = class {
  constructor(e = null) {
    this.isTextureSource = !0, Object.defineProperty(this, "id", { value: pd++ }), this.uuid = An(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  getSize(e) {
    const t = this.data;
    return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t !== null ? e.set(t.width || 0, t.height || 0, t.depth || 0) : e.set(0, 0, 0), e;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let s = 0, a = i.length; s < a; s++) i[s].isDataTexture ? r.push(qs(i[s].image)) : r.push(qs(i[s]));
      } else r = qs(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
};
function qs(e) {
  return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? fd.getDataURL(e) : e.data ? {
    data: Array.from(e.data),
    width: e.width,
    height: e.height,
    type: e.data.constructor.name
  } : (xe("Texture: Unable to serialize Texture."), {});
}
var md = 0, Ys = /* @__PURE__ */ new B(), Wt = class _s extends _i {
  constructor(t = _s.DEFAULT_IMAGE, n = _s.DEFAULT_MAPPING, i = xn, r = xn, s = rn, a = Ir, o = Tr, l = ni, c = _s.DEFAULT_ANISOTROPY, h = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: md++ }), this.uuid = An(), this.name = "", this.source = new ka(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new ke(0, 0), this.repeat = new ke(1, 1), this.center = new ke(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Be(), this.generateMipmaps = !0, this.mipmapsAutoUpdate = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = !1, this.normalized = !1;
  }
  get width() {
    return this.source.getSize(Ys).x;
  }
  get height() {
    return this.source.getSize(Ys).y;
  }
  get depth() {
    return this.source.getSize(Ys).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(t, n) {
    this.updateRanges.push({
      start: t,
      count: n
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.normalized = t.normalized, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.mipmapsAutoUpdate = t.mipmapsAutoUpdate, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isPMREMTexture = t.isPMREMTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  setValues(t) {
    for (const n in t) {
      const i = t[n];
      if (i === void 0) {
        xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);
        continue;
      }
      const r = this[n];
      if (r === void 0) {
        xe(`Texture.setValues(): property '${n}' does not exist.`);
        continue;
      }
      r && i && r.isVector2 && i.isVector2 || r && i && r.isVector3 && i.isVector3 || r && i && r.isMatrix3 && i.isMatrix3 ? r.copy(i) : this[n] = i;
    }
  }
  toJSON(t) {
    const n = t === void 0 || typeof t == "string";
    if (!n && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.7,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      normalized: this.normalized,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      mipmapsAutoUpdate: this.mipmapsAutoUpdate,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), n || (t.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case Ts:
        t.x = t.x - Math.floor(t.x);
        break;
      case xn:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case Es:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case Ts:
        t.y = t.y - Math.floor(t.y);
        break;
      case xn:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case Es:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
};
Wt.DEFAULT_IMAGE = null;
Wt.DEFAULT_MAPPING = 300;
Wt.DEFAULT_ANISOTROPY = 1;
var st = class {
  static {
    this.prototype.isVector4 = !0;
  }
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = this.w, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * t + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * t + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * t + s[7] * n + s[11] * i + s[15] * r, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const o = e.elements, l = o[0], c = o[4], h = o[8], u = o[1], d = o[5], f = o[9], g = o[2], _ = o[6], m = o[10];
    if (Math.abs(c - u) < 0.01 && Math.abs(h - g) < 0.01 && Math.abs(f - _) < 0.01) {
      if (Math.abs(c + u) < 0.1 && Math.abs(h + g) < 0.1 && Math.abs(f + _) < 0.1 && Math.abs(l + d + m - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (l + 1) / 2, E = (d + 1) / 2, S = (m + 1) / 2, b = (c + u) / 4, A = (h + g) / 4, v = (f + _) / 4;
      return M > E && M > S ? M < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(M), i = b / n, r = A / n) : E > S ? E < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(E), n = b / i, r = v / i) : S < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(S), n = A / r, i = v / r), this.set(n, i, r, t), this;
    }
    let p = Math.sqrt((_ - f) * (_ - f) + (h - g) * (h - g) + (u - c) * (u - c));
    return Math.abs(p) < 1e-3 && (p = 1), this.x = (_ - f) / p, this.y = (h - g) / p, this.z = (u - c) / p, this.w = Math.acos((l + d + m - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Xe(this.x, e.x, t.x), this.y = Xe(this.y, e.y, t.y), this.z = Xe(this.z, e.z, t.z), this.w = Xe(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Xe(this.x, e, t), this.y = Xe(this.y, e, t), this.z = Xe(this.z, e, t), this.w = Xe(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Xe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}, gd = class extends _i {
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: rn,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveColorBuffer: !0,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      storeMultisampledColorBuffer: !0,
      storeMultisampledDepthBuffer: !0,
      storeMultisampledStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1,
      depth: 1,
      multiview: !1,
      useArrayDepthTexture: !1
    }, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new st(0, 0, e, t), this.scissorTest = !1, this.viewport = new st(0, 0, e, t), this.textures = [];
    const i = n.count;
    for (let r = 0; r < i; r++)
      this.textures[r] = new Wt({
        width: e,
        height: t,
        depth: n.depth
      }), this.textures[r].isRenderTargetTexture = !0, this.textures[r].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveColorBuffer = n.resolveColorBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: rn,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null
    };
    e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.mipmapsAutoUpdate !== void 0 && (t.mipmapsAutoUpdate = e.mipmapsAutoUpdate), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
    for (let n = 0; n < this.textures.length; n++) this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), e !== null && e.renderTarget === null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++)
        this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n, this.textures[i].isData3DTexture !== !0 && (this.textures[i].isArrayTexture = this.textures[i].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let t = 0, n = e.textures.length; t < n; t++) {
      this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
      const i = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new ka(i);
    }
    if (this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveColorBuffer = e.resolveColorBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, this.storeMultisampledColorBuffer = e.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = e.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = e.storeMultisampledStencilBuffer, e.depthTexture !== null)
      if (e.depthTexture.renderTarget === e) {
        const t = e.depthTexture.clone();
        t.renderTarget = null, this.depthTexture = t;
      } else this.depthTexture = e.depthTexture;
    else this.depthTexture = null;
    return this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, En = class extends gd {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}, rc = class extends Wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = Dt, this.minFilter = Dt, this.wrapR = xn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}, vd = class extends Wt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = Dt, this.minFilter = Dt, this.wrapR = xn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
}, Ge = class sc {
  static {
    this.prototype.isMatrix4 = !0;
  }
  constructor(t, n, i, r, s, a, o, l, c, h, u, d, f, g, _, m) {
    this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, n, i, r, s, a, o, l, c, h, u, d, f, g, _, m);
  }
  set(t, n, i, r, s, a, o, l, c, h, u, d, f, g, _, m) {
    const p = this.elements;
    return p[0] = t, p[4] = n, p[8] = i, p[12] = r, p[1] = s, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = g, p[11] = _, p[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new sc().fromArray(this.elements);
  }
  copy(t) {
    const n = this.elements, i = t.elements;
    return n[0] = i[0], n[1] = i[1], n[2] = i[2], n[3] = i[3], n[4] = i[4], n[5] = i[5], n[6] = i[6], n[7] = i[7], n[8] = i[8], n[9] = i[9], n[10] = i[10], n[11] = i[11], n[12] = i[12], n[13] = i[13], n[14] = i[14], n[15] = i[15], this;
  }
  copyPosition(t) {
    const n = this.elements, i = t.elements;
    return n[12] = i[12], n[13] = i[13], n[14] = i[14], this;
  }
  setFromMatrix3(t) {
    const n = t.elements;
    return this.set(n[0], n[3], n[6], 0, n[1], n[4], n[7], 0, n[2], n[5], n[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, n, i) {
    return this.determinantAffine() === 0 ? (t.set(1, 0, 0), n.set(0, 1, 0), i.set(0, 0, 1), this) : (t.setFromMatrixColumn(this, 0), n.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(t, n, i) {
    return this.set(t.x, n.x, i.x, 0, t.y, n.y, i.y, 0, t.z, n.z, i.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    if (t.determinantAffine() === 0) return this.identity();
    const n = this.elements, i = t.elements, r = 1 / Si.setFromMatrixColumn(t, 0).length(), s = 1 / Si.setFromMatrixColumn(t, 1).length(), a = 1 / Si.setFromMatrixColumn(t, 2).length();
    return n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[3] = 0, n[4] = i[4] * s, n[5] = i[5] * s, n[6] = i[6] * s, n[7] = 0, n[8] = i[8] * a, n[9] = i[9] * a, n[10] = i[10] * a, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const n = this.elements, i = t.x, r = t.y, s = t.z, a = Math.cos(i), o = Math.sin(i), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), u = Math.sin(s);
    if (t.order === "XYZ") {
      const d = a * h, f = a * u, g = o * h, _ = o * u;
      n[0] = l * h, n[4] = -l * u, n[8] = c, n[1] = f + g * c, n[5] = d - _ * c, n[9] = -o * l, n[2] = _ - d * c, n[6] = g + f * c, n[10] = a * l;
    } else if (t.order === "YXZ") {
      const d = l * h, f = l * u, g = c * h, _ = c * u;
      n[0] = d + _ * o, n[4] = g * o - f, n[8] = a * c, n[1] = a * u, n[5] = a * h, n[9] = -o, n[2] = f * o - g, n[6] = _ + d * o, n[10] = a * l;
    } else if (t.order === "ZXY") {
      const d = l * h, f = l * u, g = c * h, _ = c * u;
      n[0] = d - _ * o, n[4] = -a * u, n[8] = g + f * o, n[1] = f + g * o, n[5] = a * h, n[9] = _ - d * o, n[2] = -a * c, n[6] = o, n[10] = a * l;
    } else if (t.order === "ZYX") {
      const d = a * h, f = a * u, g = o * h, _ = o * u;
      n[0] = l * h, n[4] = g * c - f, n[8] = d * c + _, n[1] = l * u, n[5] = _ * c + d, n[9] = f * c - g, n[2] = -c, n[6] = o * l, n[10] = a * l;
    } else if (t.order === "YZX") {
      const d = a * l, f = a * c, g = o * l, _ = o * c;
      n[0] = l * h, n[4] = _ - d * u, n[8] = g * u + f, n[1] = u, n[5] = a * h, n[9] = -o * h, n[2] = -c * h, n[6] = f * u + g, n[10] = d - _ * u;
    } else if (t.order === "XZY") {
      const d = a * l, f = a * c, g = o * l, _ = o * c;
      n[0] = l * h, n[4] = -u, n[8] = c * h, n[1] = d * u + _, n[5] = a * h, n[9] = f * u - g, n[2] = g * u - f, n[6] = o * h, n[10] = _ * u + d;
    }
    return n[3] = 0, n[7] = 0, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(_d, t, Md);
  }
  lookAt(t, n, i) {
    const r = this.elements;
    return $t.subVectors(t, n), $t.lengthSq() === 0 && ($t.z = 1), $t.normalize(), Vn.crossVectors(i, $t), Vn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? $t.x += 1e-4 : $t.z += 1e-4, $t.normalize(), Vn.crossVectors(i, $t)), Vn.normalize(), Gr.crossVectors($t, Vn), r[0] = Vn.x, r[4] = Gr.x, r[8] = $t.x, r[1] = Vn.y, r[5] = Gr.y, r[9] = $t.y, r[2] = Vn.z, r[6] = Gr.z, r[10] = $t.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, n) {
    const i = t.elements, r = n.elements, s = this.elements, a = i[0], o = i[4], l = i[8], c = i[12], h = i[1], u = i[5], d = i[9], f = i[13], g = i[2], _ = i[6], m = i[10], p = i[14], M = i[3], E = i[7], S = i[11], b = i[15], A = r[0], v = r[4], T = r[8], w = r[12], F = r[1], P = r[5], U = r[9], q = r[13], I = r[2], V = r[6], $ = r[10], k = r[14], ae = r[3], Y = r[7], K = r[11], ie = r[15];
    return s[0] = a * A + o * F + l * I + c * ae, s[4] = a * v + o * P + l * V + c * Y, s[8] = a * T + o * U + l * $ + c * K, s[12] = a * w + o * q + l * k + c * ie, s[1] = h * A + u * F + d * I + f * ae, s[5] = h * v + u * P + d * V + f * Y, s[9] = h * T + u * U + d * $ + f * K, s[13] = h * w + u * q + d * k + f * ie, s[2] = g * A + _ * F + m * I + p * ae, s[6] = g * v + _ * P + m * V + p * Y, s[10] = g * T + _ * U + m * $ + p * K, s[14] = g * w + _ * q + m * k + p * ie, s[3] = M * A + E * F + S * I + b * ae, s[7] = M * v + E * P + S * V + b * Y, s[11] = M * T + E * U + S * $ + b * K, s[15] = M * w + E * q + S * k + b * ie, this;
  }
  multiplyScalar(t) {
    const n = this.elements;
    return n[0] *= t, n[4] *= t, n[8] *= t, n[12] *= t, n[1] *= t, n[5] *= t, n[9] *= t, n[13] *= t, n[2] *= t, n[6] *= t, n[10] *= t, n[14] *= t, n[3] *= t, n[7] *= t, n[11] *= t, n[15] *= t, this;
  }
  determinant() {
    const t = this.elements, n = t[0], i = t[4], r = t[8], s = t[12], a = t[1], o = t[5], l = t[9], c = t[13], h = t[2], u = t[6], d = t[10], f = t[14], g = t[3], _ = t[7], m = t[11], p = t[15], M = l * f - c * d, E = o * f - c * u, S = o * d - l * u, b = a * f - c * h, A = a * d - l * h, v = a * u - o * h;
    return n * (_ * M - m * E + p * S) - i * (g * M - m * b + p * A) + r * (g * E - _ * b + p * v) - s * (g * S - _ * A + m * v);
  }
  determinantAffine() {
    const t = this.elements, n = t[0], i = t[4], r = t[8], s = t[1], a = t[5], o = t[9], l = t[2], c = t[6], h = t[10];
    return n * (a * h - o * c) - i * (s * h - o * l) + r * (s * c - a * l);
  }
  transpose() {
    const t = this.elements;
    let n;
    return n = t[1], t[1] = t[4], t[4] = n, n = t[2], t[2] = t[8], t[8] = n, n = t[6], t[6] = t[9], t[9] = n, n = t[3], t[3] = t[12], t[12] = n, n = t[7], t[7] = t[13], t[13] = n, n = t[11], t[11] = t[14], t[14] = n, this;
  }
  setPosition(t, n, i) {
    const r = this.elements;
    return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = n, r[14] = i), this;
  }
  invert() {
    const t = this.elements, n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = t[9], d = t[10], f = t[11], g = t[12], _ = t[13], m = t[14], p = t[15], M = n * o - i * a, E = n * l - r * a, S = n * c - s * a, b = i * l - r * o, A = i * c - s * o, v = r * c - s * l, T = h * _ - u * g, w = h * m - d * g, F = h * p - f * g, P = u * m - d * _, U = u * p - f * _, q = d * p - f * m, I = M * q - E * U + S * P + b * F - A * w + v * T;
    if (I === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const V = 1 / I;
    return t[0] = (o * q - l * U + c * P) * V, t[1] = (r * U - i * q - s * P) * V, t[2] = (_ * v - m * A + p * b) * V, t[3] = (d * A - u * v - f * b) * V, t[4] = (l * F - a * q - c * w) * V, t[5] = (n * q - r * F + s * w) * V, t[6] = (m * S - g * v - p * E) * V, t[7] = (h * v - d * S + f * E) * V, t[8] = (a * U - o * F + c * T) * V, t[9] = (i * F - n * U - s * T) * V, t[10] = (g * A - _ * S + p * M) * V, t[11] = (u * S - h * A - f * M) * V, t[12] = (o * w - a * P - l * T) * V, t[13] = (n * P - i * w + r * T) * V, t[14] = (_ * E - g * b - m * M) * V, t[15] = (h * b - u * E + d * M) * V, this;
  }
  scale(t) {
    const n = this.elements, i = t.x, r = t.y, s = t.z;
    return n[0] *= i, n[4] *= r, n[8] *= s, n[1] *= i, n[5] *= r, n[9] *= s, n[2] *= i, n[6] *= r, n[10] *= s, n[3] *= i, n[7] *= r, n[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, n = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(n, i, r));
  }
  makeTranslation(t, n, i) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, n, 0, 0, 1, i, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const n = Math.cos(t), i = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const n = Math.cos(t), i = Math.sin(t);
    return this.set(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const n = Math.cos(t), i = Math.sin(t);
    return this.set(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, n) {
    const i = Math.cos(n), r = Math.sin(n), s = 1 - i, a = t.x, o = t.y, l = t.z, c = s * a, h = s * o;
    return this.set(c * a + i, c * o - r * l, c * l + r * o, 0, c * o + r * l, h * o + i, h * l - r * a, 0, c * l - r * o, h * l + r * a, s * l * l + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, n, i) {
    return this.set(t, 0, 0, 0, 0, n, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, n, i, r, s, a) {
    return this.set(1, i, s, 0, t, 1, a, 0, n, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, n, i) {
    const r = this.elements, s = n._x, a = n._y, o = n._z, l = n._w, c = s + s, h = a + a, u = o + o, d = s * c, f = s * h, g = s * u, _ = a * h, m = a * u, p = o * u, M = l * c, E = l * h, S = l * u, b = i.x, A = i.y, v = i.z;
    return r[0] = (1 - (_ + p)) * b, r[1] = (f + S) * b, r[2] = (g - E) * b, r[3] = 0, r[4] = (f - S) * A, r[5] = (1 - (d + p)) * A, r[6] = (m + M) * A, r[7] = 0, r[8] = (g + E) * v, r[9] = (m - M) * v, r[10] = (1 - (d + _)) * v, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, n, i) {
    const r = this.elements;
    t.x = r[12], t.y = r[13], t.z = r[14];
    const s = this.determinantAffine();
    if (s === 0)
      return i.set(1, 1, 1), n.identity(), this;
    let a = Si.set(r[0], r[1], r[2]).length();
    const o = Si.set(r[4], r[5], r[6]).length(), l = Si.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), hn.copy(this);
    const c = 1 / a, h = 1 / o, u = 1 / l;
    return hn.elements[0] *= c, hn.elements[1] *= c, hn.elements[2] *= c, hn.elements[4] *= h, hn.elements[5] *= h, hn.elements[6] *= h, hn.elements[8] *= u, hn.elements[9] *= u, hn.elements[10] *= u, n.setFromRotationMatrix(hn), i.x = a, i.y = o, i.z = l, this;
  }
  makePerspective(t, n, i, r, s, a, o = gi, l = !1) {
    const c = this.elements, h = 2 * s / (n - t), u = 2 * s / (i - r), d = (n + t) / (n - t), f = (i + r) / (i - r);
    let g, _;
    if (l)
      g = s / (a - s), _ = a * s / (a - s);
    else if (o === 2e3)
      g = -(a + s) / (a - s), _ = -2 * a * s / (a - s);
    else if (o === 2001)
      g = -a / (a - s), _ = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = _, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(t, n, i, r, s, a, o = gi, l = !1) {
    const c = this.elements, h = 2 / (n - t), u = 2 / (i - r), d = -(n + t) / (n - t), f = -(i + r) / (i - r);
    let g, _;
    if (l)
      g = 1 / (a - s), _ = a / (a - s);
    else if (o === 2e3)
      g = -2 / (a - s), _ = -(a + s) / (a - s);
    else if (o === 2001)
      g = -1 / (a - s), _ = -s / (a - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = h, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = u, c[9] = 0, c[13] = f, c[2] = 0, c[6] = 0, c[10] = g, c[14] = _, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(t) {
    const n = this.elements, i = t.elements;
    for (let r = 0; r < 16; r++) if (n[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(t, n = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = t[i + n];
    return this;
  }
  toArray(t = [], n = 0) {
    const i = this.elements;
    return t[n] = i[0], t[n + 1] = i[1], t[n + 2] = i[2], t[n + 3] = i[3], t[n + 4] = i[4], t[n + 5] = i[5], t[n + 6] = i[6], t[n + 7] = i[7], t[n + 8] = i[8], t[n + 9] = i[9], t[n + 10] = i[10], t[n + 11] = i[11], t[n + 12] = i[12], t[n + 13] = i[13], t[n + 14] = i[14], t[n + 15] = i[15], t;
  }
}, Si = /* @__PURE__ */ new B(), hn = /* @__PURE__ */ new Ge(), _d = /* @__PURE__ */ new B(0, 0, 0), Md = /* @__PURE__ */ new B(1, 1, 1), Vn = /* @__PURE__ */ new B(), Gr = /* @__PURE__ */ new B(), $t = /* @__PURE__ */ new B(), _o = /* @__PURE__ */ new Ge(), Mo = /* @__PURE__ */ new Hn(), Vi = class ac {
  constructor(t = 0, n = 0, i = 0, r = ac.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = n, this._z = i, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, n, i, r = this._order) {
    return this._x = t, this._y = n, this._z = i, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, n = this._order, i = !0) {
    const r = t.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], h = r[9], u = r[2], d = r[6], f = r[10];
    switch (n) {
      case "XYZ":
        this._y = Math.asin(Xe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Xe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Xe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Xe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Xe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-Xe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        xe("Euler: .setFromRotationMatrix() encountered an unknown order: " + n);
    }
    return this._order = n, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, n, i) {
    return _o.makeRotationFromQuaternion(t), this.setFromRotationMatrix(_o, n, i);
  }
  setFromVector3(t, n = this._order) {
    return this.set(t.x, t.y, t.z, n);
  }
  reorder(t) {
    return Mo.setFromEuler(this), this.setFromQuaternion(Mo, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], n = 0) {
    return t[n] = this._x, t[n + 1] = this._y, t[n + 2] = this._z, t[n + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
};
Vi.DEFAULT_ORDER = "XYZ";
var oc = class {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}, Sd = 0, So = /* @__PURE__ */ new B(), yi = /* @__PURE__ */ new Hn(), Ln = /* @__PURE__ */ new Ge(), Vr = /* @__PURE__ */ new B(), tr = /* @__PURE__ */ new B(), yd = /* @__PURE__ */ new B(), xd = /* @__PURE__ */ new Hn(), yo = /* @__PURE__ */ new B(1, 0, 0), xo = /* @__PURE__ */ new B(0, 1, 0), To = /* @__PURE__ */ new B(0, 0, 1), Eo = { type: "added" }, Td = { type: "removed" }, xi = {
  type: "childadded",
  child: null
}, Ks = {
  type: "childremoved",
  child: null
}, _t = class Ms extends _i {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Sd++ }), this.uuid = An(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ms.DEFAULT_UP.clone();
    const t = new B(), n = new Vi(), i = new Hn(), r = new B(1, 1, 1);
    function s() {
      i.setFromEuler(n, !1);
    }
    function a() {
      n.setFromQuaternion(i, void 0, !1);
    }
    n._onChange(s), i._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: { value: new Ge() },
      normalMatrix: { value: new Be() }
    }), this.matrix = new Ge(), this.matrixWorld = new Ge(), this.matrixAutoUpdate = Ms.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Ms.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new oc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale), this.pivot !== null && this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, n) {
    this.quaternion.setFromAxisAngle(t, n);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, n) {
    return yi.setFromAxisAngle(t, n), this.quaternion.multiply(yi), this;
  }
  rotateOnWorldAxis(t, n) {
    return yi.setFromAxisAngle(t, n), this.quaternion.premultiply(yi), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(yo, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(xo, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(To, t);
  }
  translateOnAxis(t, n) {
    return So.copy(t).applyQuaternion(this.quaternion), this.position.add(So.multiplyScalar(n)), this;
  }
  translateX(t) {
    return this.translateOnAxis(yo, t);
  }
  translateY(t) {
    return this.translateOnAxis(xo, t);
  }
  translateZ(t) {
    return this.translateOnAxis(To, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Ln.copy(this.matrixWorld).invert());
  }
  lookAt(t, n, i) {
    t.isVector3 ? Vr.copy(t) : Vr.set(t, n, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), tr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Ln.lookAt(tr, Vr, this.up) : Ln.lookAt(Vr, tr, this.up), this.quaternion.setFromRotationMatrix(Ln), r && (Ln.extractRotation(r.matrixWorld), yi.setFromRotationMatrix(Ln), this.quaternion.premultiply(yi.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.add(arguments[n]);
      return this;
    }
    return t === this ? (De("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Eo), xi.child = t, this.dispatchEvent(xi), xi.child = null) : De("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const n = this.children.indexOf(t);
    return n !== -1 && (t.parent = null, this.children.splice(n, 1), t.dispatchEvent(Td), Ks.child = t, this.dispatchEvent(Ks), Ks.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), Ln.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), Ln.multiply(t.parent.matrixWorld)), t.applyMatrix4(Ln), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Eo), xi.child = t, this.dispatchEvent(xi), xi.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, n) {
    if (this[t] === n) return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const s = this.children[i].getObjectByProperty(t, n);
      if (s !== void 0) return s;
    }
  }
  getObjectsByProperty(t, n, i = []) {
    this[t] === n && i.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++) r[s].getObjectsByProperty(t, n, i);
    return i;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, t, yd), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(tr, xd, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const n = this.matrixWorld.elements;
    return t.set(n[8], n[9], n[10]).normalize();
  }
  raycast() {
  }
  intersectsFrustum() {
    return !0;
  }
  traverse(t) {
    t(this);
    const n = this.children;
    for (let i = 0, r = n.length; i < r; i++) n[i].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const n = this.children;
    for (let i = 0, r = n.length; i < r; i++) n[i].traverseVisible(t);
  }
  traverseAncestors(t) {
    const n = this.parent;
    n !== null && (t(n), n.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    const t = this.pivot;
    if (t !== null) {
      const n = t.x, i = t.y, r = t.z, s = this.matrix.elements;
      s[12] += n - s[0] * n - s[4] * i - s[8] * r, s[13] += i - s[1] * n - s[5] * i - s[9] * r, s[14] += r - s[2] * n - s[6] * i - s[10] * r;
    }
    this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const n = this.children;
    for (let i = 0, r = n.length; i < r; i++) n[i].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, n, i = !1) {
    const r = this.parent;
    if (t === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || i) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, i = !0), n === !0) {
      const s = this.children;
      for (let a = 0, o = s.length; a < o; a++) s[a].updateWorldMatrix(!1, !0, i);
    }
  }
  toJSON(t) {
    const n = t === void 0 || typeof t == "string", i = {};
    n && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.7,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, r.name = this.name, r.castShadow = this.castShadow, r.receiveShadow = this.receiveShadow, r.visible = this.visible, r.frustumCulled = this.frustumCulled, r.renderOrder = this.renderOrder, r.static = this.static, r.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((o) => ({
      ...o,
      boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
      boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
    })), r.instanceInfo = this._instanceInfo.map((o) => ({ ...o })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(t), r.indirectTexture = this._indirectTexture.toJSON(t), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          s(t.shapes, u);
        }
        else s(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++) o.push(s(t.materials, this.material[l]));
        r.material = o;
      } else r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(t.animations, l));
      }
    }
    if (n) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), h = a(t.images), u = a(t.shapes), d = a(t.skeletons), f = a(t.animations), g = a(t.nodes);
      o.length > 0 && (i.geometries = o), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), h.length > 0 && (i.images = h), u.length > 0 && (i.shapes = u), d.length > 0 && (i.skeletons = d), f.length > 0 && (i.animations = f), g.length > 0 && (i.nodes = g);
    }
    return i.object = r, i;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, n = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.pivot = t.pivot !== null ? t.pivot.clone() : null, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.static = t.static, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), n === !0) for (let i = 0; i < t.children.length; i++) {
      const r = t.children[i];
      this.add(r.clone());
    }
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
_t.DEFAULT_UP = /* @__PURE__ */ new B(0, 1, 0);
_t.DEFAULT_MATRIX_AUTO_UPDATE = !0;
_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Qt = class extends _t {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}, Ed = { type: "move" }, $s = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Qt(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Qt(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new B(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new B()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Qt(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new B(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new B(), this._grip.eventsEnabled = !1), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({
      type: "connected",
      data: e
    }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({
      type: "disconnected",
      data: e
    }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let i = null, r = null, s = null;
    const a = this._targetRay, o = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        s = !0;
        for (const d of e.hand.values()) {
          const f = t.getJointPose(d, n), g = this._getHandJoint(l, d);
          f !== null && (g.matrix.fromArray(f.transform.matrix), g.matrix.decompose(g.position, g.quaternion, g.scale), g.matrixWorldNeedsUpdate = !0, g.jointRadius = f.radius), g.visible = f !== null;
        }
        const c = l.joints["index-finger-tip"], h = l.joints["thumb-tip"], u = c.position.distanceTo(h.position);
        l.inputState.pinching && u > 0.025 ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && u <= 0.015 && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else o !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, o.eventsEnabled && o.dispatchEvent({
        type: "gripUpdated",
        data: e,
        target: this
      })));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.quaternion, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Ed)));
    }
    return a !== null && (a.visible = i !== null), o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Qt();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}, lc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, Wn = {
  h: 0,
  s: 0,
  l: 0
}, Wr = {
  h: 0,
  s: 0,
  l: 0
};
function Zs(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var Ce = class {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = At) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, qe.colorSpaceToWorking(this, t), this;
  }
  setRGB(e, t, n, i = qe.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, qe.colorSpaceToWorking(this, i), this;
  }
  setHSL(e, t, n, i = qe.workingColorSpace) {
    if (e = Oa(e, 1), t = Xe(t, 0, 1), n = Xe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
      this.r = Zs(s, r, e + 1 / 3), this.g = Zs(s, r, e), this.b = Zs(s, r, e - 1 / 3);
    }
    return qe.colorSpaceToWorking(this, i), this;
  }
  setStyle(e, t = At) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && xe("Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const s = i[1], a = i[2];
      switch (s) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setRGB(Math.min(100, parseFloat(r[1])) / 100, Math.min(100, parseFloat(r[2])) / 100, Math.min(100, parseFloat(r[3])) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))
            return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          xe("Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], s = r.length;
      if (s === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (s === 6) return this.setHex(parseInt(r, 16), t);
      xe("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = At) {
    const n = lc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : xe("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = zn(e.r), this.g = zn(e.g), this.b = zn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ki(e.r), this.g = ki(e.g), this.b = ki(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = At) {
    return qe.workingToColorSpace(It.copy(this), e), Math.round(Xe(It.r * 255, 0, 255)) * 65536 + Math.round(Xe(It.g * 255, 0, 255)) * 256 + Math.round(Xe(It.b * 255, 0, 255));
  }
  getHexString(e = At) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = qe.workingColorSpace) {
    qe.workingToColorSpace(It.copy(this), t);
    const n = It.r, i = It.g, r = It.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
    let o, l;
    const c = (a + s) / 2;
    if (a === s)
      o = 0, l = 0;
    else {
      const h = s - a;
      switch (l = c <= 0.5 ? h / (s + a) : h / (2 - s - a), s) {
        case n:
          o = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / h + 2;
          break;
        case r:
          o = (n - i) / h + 4;
      }
      o /= 6;
    }
    return e.h = o, e.s = l, e.l = c, e;
  }
  getRGB(e, t = qe.workingColorSpace) {
    return qe.workingToColorSpace(It.copy(this), t), e.r = It.r, e.g = It.g, e.b = It.b, e;
  }
  getStyle(e = At) {
    qe.workingToColorSpace(It.copy(this), e);
    const t = It.r, n = It.g, i = It.b;
    return e !== "srgb" ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Wn), this.setHSL(Wn.h + e, Wn.s + t, Wn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(Wn), e.getHSL(Wr);
    const n = yr(Wn.h, Wr.h, t), i = yr(Wn.s, Wr.s, t), r = yr(Wn.l, Wr.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}, It = /* @__PURE__ */ new Ce();
Ce.NAMES = lc;
var bd = class extends _t {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Vi(), this.environmentIntensity = 1, this.environmentRotation = new Vi(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), this.background = e.background !== null ? e.background.clone() : null, this.environment = e.environment !== null ? e.environment.clone() : null, this.fog = e.fog !== null ? e.fog.clone() : null, this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), this.overrideMaterial = e.overrideMaterial !== null ? e.overrideMaterial.clone() : null, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}, un = /* @__PURE__ */ new B(), In = /* @__PURE__ */ new B(), Js = /* @__PURE__ */ new B(), Dn = /* @__PURE__ */ new B(), Ti = /* @__PURE__ */ new B(), Ei = /* @__PURE__ */ new B(), bo = /* @__PURE__ */ new B(), Qs = /* @__PURE__ */ new B(), js = /* @__PURE__ */ new B(), ea = /* @__PURE__ */ new B(), ta = /* @__PURE__ */ new st(), na = /* @__PURE__ */ new st(), ia = /* @__PURE__ */ new st(), nr = class Ni {
  constructor(t = new B(), n = new B(), i = new B()) {
    this.a = t, this.b = n, this.c = i;
  }
  static getNormal(t, n, i, r) {
    r.subVectors(i, n), un.subVectors(t, n), r.cross(un);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(t, n, i, r, s) {
    un.subVectors(r, n), In.subVectors(i, n), Js.subVectors(t, n);
    const a = un.dot(un), o = un.dot(In), l = un.dot(Js), c = In.dot(In), h = In.dot(Js), u = a * c - o * o;
    if (u === 0)
      return s.set(0, 0, 0), null;
    const d = 1 / u, f = (c * l - o * h) * d, g = (a * h - o * l) * d;
    return s.set(1 - f - g, g, f);
  }
  static containsPoint(t, n, i, r) {
    return this.getBarycoord(t, n, i, r, Dn) === null ? !1 : Dn.x >= 0 && Dn.y >= 0 && Dn.x + Dn.y <= 1;
  }
  static getInterpolation(t, n, i, r, s, a, o, l) {
    return this.getBarycoord(t, n, i, r, Dn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Dn.x), l.addScaledVector(a, Dn.y), l.addScaledVector(o, Dn.z), l);
  }
  static getInterpolatedAttribute(t, n, i, r, s, a) {
    return ta.setScalar(0), na.setScalar(0), ia.setScalar(0), ta.fromBufferAttribute(t, n), na.fromBufferAttribute(t, i), ia.fromBufferAttribute(t, r), a.setScalar(0), a.addScaledVector(ta, s.x), a.addScaledVector(na, s.y), a.addScaledVector(ia, s.z), a;
  }
  static isFrontFacing(t, n, i, r) {
    return un.subVectors(i, n), In.subVectors(t, n), un.cross(In).dot(r) < 0;
  }
  set(t, n, i) {
    return this.a.copy(t), this.b.copy(n), this.c.copy(i), this;
  }
  setFromPointsAndIndices(t, n, i, r) {
    return this.a.copy(t[n]), this.b.copy(t[i]), this.c.copy(t[r]), this;
  }
  setFromAttributeAndIndices(t, n, i, r) {
    return this.a.fromBufferAttribute(t, n), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return un.subVectors(this.c, this.b), In.subVectors(this.a, this.b), un.cross(In).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Ni.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, n) {
    return Ni.getBarycoord(t, this.a, this.b, this.c, n);
  }
  getInterpolation(t, n, i, r, s) {
    return Ni.getInterpolation(t, this.a, this.b, this.c, n, i, r, s);
  }
  containsPoint(t) {
    return Ni.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Ni.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, n) {
    const i = this.a, r = this.b, s = this.c;
    let a, o;
    Ti.subVectors(r, i), Ei.subVectors(s, i), Qs.subVectors(t, i);
    const l = Ti.dot(Qs), c = Ei.dot(Qs);
    if (l <= 0 && c <= 0) return n.copy(i);
    js.subVectors(t, r);
    const h = Ti.dot(js), u = Ei.dot(js);
    if (h >= 0 && u <= h) return n.copy(r);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0 && l - h > 0)
      return a = l / (l - h), n.copy(i).addScaledVector(Ti, a);
    ea.subVectors(t, s);
    const f = Ti.dot(ea), g = Ei.dot(ea);
    if (g >= 0 && f <= g) return n.copy(s);
    const _ = f * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return o = c / (c - g), n.copy(i).addScaledVector(Ei, o);
    const m = h * g - f * u;
    if (m <= 0 && u - h >= 0 && f - g >= 0)
      return bo.subVectors(s, r), o = (u - h) / (u - h + (f - g)), n.copy(r).addScaledVector(bo, o);
    const p = 1 / (m + _ + d);
    return a = _ * p, o = d * p, n.copy(i).addScaledVector(Ti, a).addScaledVector(Ei, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}, Rn = class {
  constructor(e = new B(1 / 0, 1 / 0, 1 / 0), t = new B(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(dn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(dn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = dn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0 && e.isBatchedMesh !== !0) for (let s = 0, a = r.count; s < a; s++)
        e.isMesh === !0 ? e.getVertexPosition(s, dn) : dn.fromBufferAttribute(r, s), dn.applyMatrix4(e.matrixWorld), this.expandByPoint(dn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Xr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Xr.copy(n.boundingBox)), Xr.applyMatrix4(e.matrixWorld), this.union(Xr);
    }
    const i = e.children;
    for (let r = 0, s = i.length; r < s; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, dn), dn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ir), qr.subVectors(this.max, ir), bi.subVectors(e.a, ir), Ai.subVectors(e.b, ir), Ri.subVectors(e.c, ir), Xn.subVectors(Ai, bi), qn.subVectors(Ri, Ai), oi.subVectors(bi, Ri);
    let t = [
      0,
      -Xn.z,
      Xn.y,
      0,
      -qn.z,
      qn.y,
      0,
      -oi.z,
      oi.y,
      Xn.z,
      0,
      -Xn.x,
      qn.z,
      0,
      -qn.x,
      oi.z,
      0,
      -oi.x,
      -Xn.y,
      Xn.x,
      0,
      -qn.y,
      qn.x,
      0,
      -oi.y,
      oi.x,
      0
    ];
    return !ra(t, bi, Ai, Ri, qr) || (t = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], !ra(t, bi, Ai, Ri, qr)) ? !1 : (Yr.crossVectors(Xn, qn), t = [
      Yr.x,
      Yr.y,
      Yr.z
    ], ra(t, bi, Ai, Ri, qr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, dn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(dn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Nn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Nn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Nn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Nn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Nn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Nn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Nn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Nn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Nn), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return {
      min: this.min.toArray(),
      max: this.max.toArray()
    };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}, Nn = [
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B(),
  /* @__PURE__ */ new B()
], dn = /* @__PURE__ */ new B(), Xr = /* @__PURE__ */ new Rn(), bi = /* @__PURE__ */ new B(), Ai = /* @__PURE__ */ new B(), Ri = /* @__PURE__ */ new B(), Xn = /* @__PURE__ */ new B(), qn = /* @__PURE__ */ new B(), oi = /* @__PURE__ */ new B(), ir = /* @__PURE__ */ new B(), qr = /* @__PURE__ */ new B(), Yr = /* @__PURE__ */ new B(), li = /* @__PURE__ */ new B();
function ra(e, t, n, i, r) {
  for (let s = 0, a = e.length - 3; s <= a; s += 3) {
    li.fromArray(e, s);
    const o = r.x * Math.abs(li.x) + r.y * Math.abs(li.y) + r.z * Math.abs(li.z), l = t.dot(li), c = n.dot(li), h = i.dot(li);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1;
  }
  return !0;
}
var vt = /* @__PURE__ */ new B(), Kr = /* @__PURE__ */ new ke(), Ad = 0, sn = class extends _i {
  constructor(e, t, n = !1) {
    if (super(), Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Ad++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = tc, this.updateRanges = [], this.gpuType = Ki, this.version = 0, this._normalizationScale = e !== void 0 ? Os(e) : void 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this._normalizationScale = e._normalizationScale, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++)
      Kr.fromBufferAttribute(this, t), Kr.applyMatrix3(e), this.setXY(t, Kr.x, Kr.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyMatrix3(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyMatrix4(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.applyNormalMatrix(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      vt.fromBufferAttribute(this, t), vt.transformDirection(e), this.setXYZ(t, vt.x, vt.y, vt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = this._denormalize(n)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = this._normalize(n)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setX(e, t) {
    return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setY(e, t) {
    return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = this._denormalize(t)), t;
  }
  setW(e, t) {
    return this.normalized && (t = this._normalize(t)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n), i = this._normalize(i)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = this._normalize(t), n = this._normalize(n), i = this._normalize(i), r = this._normalize(r)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return e.name = this.name, e.usage = this.usage, e.gpuType = this.gpuType, e;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  _denormalize(e) {
    const t = this._normalizationScale;
    return t !== void 0 ? Math.max(e / t, -1) : Fa(e, this.array);
  }
  _normalize(e) {
    const t = this._normalizationScale;
    return t !== void 0 ? Math.round(e * t) : Ba(e, this.array);
  }
}, cc = class extends sn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}, hc = class extends sn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}, tt = class extends sn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}, Rd = /* @__PURE__ */ new Rn(), rr = /* @__PURE__ */ new B(), sa = /* @__PURE__ */ new B(), wn = class {
  constructor(e = new B(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Rd.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, s = e.length; r < s; r++) i = Math.max(i, n.distanceToSquared(e[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    rr.subVectors(e, this.center);
    const t = rr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(rr, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (sa.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(rr.copy(e.center).add(sa)), this.expandByPoint(rr.copy(e.center).sub(sa))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      radius: this.radius,
      center: this.center.toArray()
    };
  }
  fromJSON(e) {
    return this.radius = e.radius, this.center.fromArray(e.center), this;
  }
}, wd = 0, tn = /* @__PURE__ */ new Ge(), aa = /* @__PURE__ */ new _t(), wi = /* @__PURE__ */ new B(), Zt = /* @__PURE__ */ new Rn(), sr = /* @__PURE__ */ new Rn(), xt = /* @__PURE__ */ new B(), Bt = class uc extends _i {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: wd++ }), this.uuid = An(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}, this._transformed = !1;
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Xu(t) ? hc : cc)(t, 1) : this.index = t, this;
  }
  setIndirect(t, n = 0) {
    return this.indirect = t, this.indirectOffset = n, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, n) {
    return this.attributes[t] = n, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, n, i = 0) {
    this.groups.push({
      start: t,
      count: n,
      materialIndex: i
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, n) {
    this.drawRange.start = t, this.drawRange.count = n;
  }
  applyMatrix4(t) {
    const n = this.attributes.position;
    n !== void 0 && (n.applyMatrix4(t), n.needsUpdate = !0);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Be().getNormalMatrix(t);
      i.applyNormalMatrix(s), i.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(t), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
  }
  applyQuaternion(t) {
    return tn.makeRotationFromQuaternion(t), this.applyMatrix4(tn), this;
  }
  rotateX(t) {
    return tn.makeRotationX(t), this.applyMatrix4(tn), this;
  }
  rotateY(t) {
    return tn.makeRotationY(t), this.applyMatrix4(tn), this;
  }
  rotateZ(t) {
    return tn.makeRotationZ(t), this.applyMatrix4(tn), this;
  }
  translate(t, n, i) {
    return tn.makeTranslation(t, n, i), this.applyMatrix4(tn), this;
  }
  scale(t, n, i) {
    return tn.makeScale(t, n, i), this.applyMatrix4(tn), this;
  }
  lookAt(t) {
    return aa.lookAt(t), aa.updateMatrix(), this.applyMatrix4(aa.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(wi).negate(), this.translate(wi.x, wi.y, wi.z), this;
  }
  setFromPoints(t) {
    const n = this.getAttribute("position");
    if (n === void 0) {
      const i = [];
      for (let r = 0, s = t.length; r < s; r++) {
        const a = t[r];
        i.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new tt(i, 3));
    } else {
      const i = Math.min(t.length, n.count);
      for (let r = 0; r < i; r++) {
        const s = t[r];
        n.setXYZ(r, s.x, s.y, s.z || 0);
      }
      t.length > n.count && xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), n.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Rn());
    const t = this.attributes.position, n = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new B(-1 / 0, -1 / 0, -1 / 0), new B(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), n) for (let i = 0, r = n.length; i < r; i++) {
        const s = n[i];
        Zt.setFromBufferAttribute(s), this.morphTargetsRelative ? (xt.addVectors(this.boundingBox.min, Zt.min), this.boundingBox.expandByPoint(xt), xt.addVectors(this.boundingBox.max, Zt.max), this.boundingBox.expandByPoint(xt)) : (this.boundingBox.expandByPoint(Zt.min), this.boundingBox.expandByPoint(Zt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new wn());
    const t = this.attributes.position, n = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new B(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if (Zt.setFromBufferAttribute(t), n) for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s];
        sr.setFromBufferAttribute(o), this.morphTargetsRelative ? (xt.addVectors(Zt.min, sr.min), Zt.expandByPoint(xt), xt.addVectors(Zt.max, sr.max), Zt.expandByPoint(xt)) : (Zt.expandByPoint(sr.min), Zt.expandByPoint(sr.max));
      }
      Zt.getCenter(i);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        xt.fromBufferAttribute(t, s), r = Math.max(r, i.distanceToSquared(xt));
      if (n) for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++)
          xt.fromBufferAttribute(o, c), l && (wi.fromBufferAttribute(t, c), xt.add(wi)), r = Math.max(r, i.distanceToSquared(xt));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, n = this.attributes;
    if (t === null || n.position === void 0 || n.normal === void 0 || n.uv === void 0) {
      De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = n.position, r = n.normal, s = n.uv;
    let a = this.getAttribute("tangent");
    (a === void 0 || a.count !== i.count) && (a = new sn(new Float32Array(4 * i.count), 4), this.setAttribute("tangent", a));
    const o = [], l = [], c = new Uint8Array(i.count);
    for (let w = 0; w < i.count; w++)
      o[w] = new B(), l[w] = new B();
    const h = new B(), u = new B(), d = new B(), f = new ke(), g = new ke(), _ = new ke(), m = new B(), p = new B();
    function M(w, F, P) {
      c[w] = c[F] = c[P] = 1, h.fromBufferAttribute(i, w), u.fromBufferAttribute(i, F), d.fromBufferAttribute(i, P), f.fromBufferAttribute(s, w), g.fromBufferAttribute(s, F), _.fromBufferAttribute(s, P), u.sub(h), d.sub(h), g.sub(f), _.sub(f);
      const U = 1 / (g.x * _.y - _.x * g.y);
      isFinite(U) && (m.copy(u).multiplyScalar(_.y).addScaledVector(d, -g.y).multiplyScalar(U), p.copy(d).multiplyScalar(g.x).addScaledVector(u, -_.x).multiplyScalar(U), o[w].add(m), o[F].add(m), o[P].add(m), l[w].add(p), l[F].add(p), l[P].add(p));
    }
    let E = this.groups;
    E.length === 0 && (E = [{
      start: 0,
      count: t.count
    }]);
    for (let w = 0, F = E.length; w < F; ++w) {
      const P = E[w], U = P.start, q = P.count;
      for (let I = U, V = U + q; I < V; I += 3) M(t.getX(I + 0), t.getX(I + 1), t.getX(I + 2));
    }
    const S = new B(), b = new B(), A = new B(), v = new B();
    function T(w) {
      A.fromBufferAttribute(r, w), v.copy(A);
      const F = o[w];
      S.copy(F), S.sub(A.multiplyScalar(A.dot(F))).normalize(), b.crossVectors(v, F);
      const P = b.dot(l[w]) < 0 ? -1 : 1;
      a.setXYZW(w, S.x, S.y, S.z, P);
    }
    for (let w = 0, F = i.count; w < F; ++w) c[w] && T(w);
    this._transformed = !0;
  }
  computeVertexNormals() {
    const t = this.index, n = this.getAttribute("position");
    if (n !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0 || i.count !== n.count)
        i = new sn(new Float32Array(n.count * 3), 3), this.setAttribute("normal", i);
      else for (let d = 0, f = i.count; d < f; d++) i.setXYZ(d, 0, 0, 0);
      const r = new B(), s = new B(), a = new B(), o = new B(), l = new B(), c = new B(), h = new B(), u = new B();
      if (t) for (let d = 0, f = t.count; d < f; d += 3) {
        const g = t.getX(d + 0), _ = t.getX(d + 1), m = t.getX(d + 2);
        r.fromBufferAttribute(n, g), s.fromBufferAttribute(n, _), a.fromBufferAttribute(n, m), h.subVectors(a, s), u.subVectors(r, s), h.cross(u), o.fromBufferAttribute(i, g), l.fromBufferAttribute(i, _), c.fromBufferAttribute(i, m), o.add(h), l.add(h), c.add(h), i.setXYZ(g, o.x, o.y, o.z), i.setXYZ(_, l.x, l.y, l.z), i.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let d = 0, f = n.count; d < f; d += 3)
        r.fromBufferAttribute(n, d + 0), s.fromBufferAttribute(n, d + 1), a.fromBufferAttribute(n, d + 2), h.subVectors(a, s), u.subVectors(r, s), h.cross(u), i.setXYZ(d + 0, h.x, h.y, h.z), i.setXYZ(d + 1, h.x, h.y, h.z), i.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let n = 0, i = t.count; n < i; n++)
      xt.fromBufferAttribute(t, n), xt.normalize(), t.setXYZ(n, xt.x, xt.y, xt.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h);
      let f = 0, g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        o.isInterleavedBufferAttribute ? f = l[_] * o.data.stride + o.offset : f = l[_] * h;
        for (let p = 0; p < h; p++) d[g++] = c[f++];
      }
      return new sn(d, h, u);
    }
    if (this.index === null)
      return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const n = new uc(), i = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = t(l, i);
      n.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], f = t(d, i);
        l.push(f);
      }
      n.morphAttributes[o] = l;
    }
    n.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      n.addGroup(c.start, c.count, c.materialIndex);
    }
    return n;
  }
  toJSON() {
    const t = { metadata: {
      version: 4.7,
      type: "BufferGeometry",
      generator: "BufferGeometry.toJSON"
    } };
    if (t.uuid = this.uuid, t.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, t.name = this.name, Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const n = this.index;
    n !== null && (t.data.index = {
      type: n.array.constructor.name,
      array: Array.prototype.slice.call(n.array)
    });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u];
        h.push(f.toJSON(t.data));
      }
      h.length > 0 && (r[l] = h, s = !0);
    }
    s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = o.toJSON()), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const n = {};
    this.name = t.name;
    const i = t.index;
    i !== null && this.setIndex(i.clone());
    const r = t.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(n));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const h = [], u = s[c];
      for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(n));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this._transformed = t._transformed, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, Cd = class {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = tc, this.updateRanges = [], this.version = 0, this.uuid = An();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({
      start: e,
      count: t
    });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {});
    const t = Ao(this.array);
    e.arrayBuffers[t] === void 0 && (e.arrayBuffers[t] = this.array.slice(0).buffer);
    const n = new this.array.constructor(e.arrayBuffers[t]), i = new this.constructor(n, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {});
    const t = Ao(this.array);
    e.arrayBuffers[t] === void 0 && (e.arrayBuffers[t] = Array.from(new Uint32Array(this.array.slice(0).buffer)));
    const n = {
      uuid: this.uuid,
      buffer: t,
      type: this.array.constructor.name,
      stride: this.stride
    };
    return n.usage = this.usage, n;
  }
};
function Ao(e) {
  return e.buffer._uuid === void 0 && (e.buffer._uuid = An()), e.byteOffset === 0 && e.byteLength === e.buffer.byteLength ? e.buffer._uuid : e.buffer._uuid + ":" + e.byteOffset + ":" + e.byteLength;
}
var Ot = /* @__PURE__ */ new B(), Pd = class dc {
  constructor(t, n, i, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = n, this.offset = i, this.normalized = r, this._normalizationScale = t !== void 0 ? Os(t.array) : void 0;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let n = 0, i = this.data.count; n < i; n++)
      Ot.fromBufferAttribute(this, n), Ot.applyMatrix4(t), this.setXYZ(n, Ot.x, Ot.y, Ot.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let n = 0, i = this.count; n < i; n++)
      Ot.fromBufferAttribute(this, n), Ot.applyNormalMatrix(t), this.setXYZ(n, Ot.x, Ot.y, Ot.z);
    return this;
  }
  transformDirection(t) {
    for (let n = 0, i = this.count; n < i; n++)
      Ot.fromBufferAttribute(this, n), Ot.transformDirection(t), this.setXYZ(n, Ot.x, Ot.y, Ot.z);
    return this;
  }
  getComponent(t, n) {
    let i = this.array[t * this.data.stride + this.offset + n];
    return this.normalized && (i = this._denormalize(i)), i;
  }
  setComponent(t, n, i) {
    return this.normalized && (i = this._normalize(i)), this.data.array[t * this.data.stride + this.offset + n] = i, this;
  }
  setX(t, n) {
    return this.normalized && (n = this._normalize(n)), this.data.array[t * this.data.stride + this.offset] = n, this;
  }
  setY(t, n) {
    return this.normalized && (n = this._normalize(n)), this.data.array[t * this.data.stride + this.offset + 1] = n, this;
  }
  setZ(t, n) {
    return this.normalized && (n = this._normalize(n)), this.data.array[t * this.data.stride + this.offset + 2] = n, this;
  }
  setW(t, n) {
    return this.normalized && (n = this._normalize(n)), this.data.array[t * this.data.stride + this.offset + 3] = n, this;
  }
  getX(t) {
    let n = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (n = this._denormalize(n)), n;
  }
  getY(t) {
    let n = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (n = this._denormalize(n)), n;
  }
  getZ(t) {
    let n = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (n = this._denormalize(n)), n;
  }
  getW(t) {
    let n = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (n = this._denormalize(n)), n;
  }
  setXY(t, n, i) {
    return t = t * this.data.stride + this.offset, this.normalized && (n = this._normalize(n), i = this._normalize(i)), this.data.array[t + 0] = n, this.data.array[t + 1] = i, this;
  }
  setXYZ(t, n, i, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (n = this._normalize(n), i = this._normalize(i), r = this._normalize(r)), this.data.array[t + 0] = n, this.data.array[t + 1] = i, this.data.array[t + 2] = r, this;
  }
  setXYZW(t, n, i, r, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (n = this._normalize(n), i = this._normalize(i), r = this._normalize(r), s = this._normalize(s)), this.data.array[t + 0] = n, this.data.array[t + 1] = i, this.data.array[t + 2] = r, this.data.array[t + 3] = s, this;
  }
  clone(t) {
    if (t === void 0) {
      Cs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const n = [];
      for (let i = 0; i < this.count; i++) {
        const r = i * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) n.push(this.data.array[r + s]);
      }
      return new sn(new this.array.constructor(n), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new dc(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      Cs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const n = [];
      for (let i = 0; i < this.count; i++) {
        const r = i * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) n.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: n,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
  _denormalize(t) {
    const n = this._normalizationScale;
    return n !== void 0 ? Math.max(t / n, -1) : Fa(t, this.data.array);
  }
  _normalize(t) {
    const n = this._normalizationScale;
    return n !== void 0 ? Math.round(t * n) : Ba(t, this.data.array);
  }
}, oa = /* @__PURE__ */ new B(), Ld = /* @__PURE__ */ new B(), Id = /* @__PURE__ */ new Be(), Fn = class {
  constructor(e = new B(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = oa.subVectors(n, t).cross(Ld.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t, n = !0) {
    const i = e.delta(oa), r = this.normal.dot(i);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return n === !0 && (s < 0 || s > 1) ? null : t.copy(e.start).addScaledVector(i, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Id.getNormalMatrix(e), i = this.coplanarPoint(oa).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      normal: this.normal.toArray(),
      constant: this.constant
    };
  }
  fromJSON(e) {
    return this.normal.fromArray(e.normal), this.constant = e.constant, this;
  }
}, Dd = 0, bn = class extends _i {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Dd++ }), this.uuid = An(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ce(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Vs, this.stencilZFail = Vs, this.stencilZPass = Vs, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          xe(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          xe(`Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector2 && n && n.isVector2 || i && i.isEuler && n && n.isEuler || i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = { metadata: {
      version: 4.7,
      type: "Material",
      generator: "Material.toJSON"
    } };
    n.uuid = this.uuid, n.type = this.type, n.blending = this.blending, n.side = this.side, n.shadowSide = this.shadowSide, n.vertexColors = this.vertexColors, n.opacity = this.opacity, n.transparent = this.transparent, n.blendSrc = this.blendSrc, n.blendDst = this.blendDst, n.blendEquation = this.blendEquation, n.blendSrcAlpha = this.blendSrcAlpha, n.blendDstAlpha = this.blendDstAlpha, n.blendEquationAlpha = this.blendEquationAlpha, n.blendColor = this.blendColor.getHex(), n.blendAlpha = this.blendAlpha, n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.clipIntersection = this.clipIntersection, n.clipShadows = this.clipShadows, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, n.stencilWrite = this.stencilWrite, n.polygonOffset = this.polygonOffset, n.polygonOffsetFactor = this.polygonOffsetFactor, n.polygonOffsetUnits = this.polygonOffsetUnits, n.dithering = this.dithering, n.alphaTest = this.alphaTest, n.alphaHash = this.alphaHash, n.alphaToCoverage = this.alphaToCoverage, n.premultipliedAlpha = this.premultipliedAlpha, n.forceSinglePass = this.forceSinglePass, n.allowOverride = this.allowOverride, n.visible = this.visible, n.toneMapped = this.toneMapped, n.name = this.name, this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.diffuseRoughness !== void 0 && (n.diffuseRoughness = this.diffuseRoughness), this.diffuseRoughnessMap && this.diffuseRoughnessMap.isTexture && (n.diffuseRoughnessMap = this.diffuseRoughnessMap.toJSON(e).uuid), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (n.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessMinimum !== void 0 && (n.iridescenceThicknessMinimum = this.iridescenceThicknessMinimum), this.iridescenceThicknessMaximum !== void 0 && (n.iridescenceThicknessMaximum = this.iridescenceThicknessMaximum), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (n.clippingPlanes = this.clippingPlanes.map((r) => r.toJSON())), this.rotation !== void 0 && (n.rotation = this.rotation), this.depthPacking !== void 0 && (n.depthPacking = this.depthPacking), this.linewidth !== void 0 && (n.linewidth = this.linewidth), this.linecap !== void 0 && (n.linecap = this.linecap), this.linejoin !== void 0 && (n.linejoin = this.linejoin), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.wireframe !== void 0 && (n.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (n.flatShading = this.flatShading), this.fog !== void 0 && (n.fog = this.fog), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const s = [];
      for (const a in r) {
        const o = r[a];
        delete o.metadata, s.push(o);
      }
      return s;
    }
    if (t) {
      const r = i(e.textures), s = i(e.images);
      r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s);
    }
    return n;
  }
  fromJSON(e, t) {
    if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new Ce().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.diffuseRoughness !== void 0 && (this.diffuseRoughness = e.diffuseRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessMinimum !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum), e.iridescenceThicknessMaximum !== void 0 && (this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], this.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1]), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((n) => new Fn().fromJSON(n))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
      let n = e.normalScale;
      Array.isArray(n) === !1 && (n = [n, n]), this.normalScale = new ke().fromArray(n);
    }
    return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new ke().fromArray(e.clearcoatNormalScale)), e.diffuseRoughnessMap !== void 0 && (this.diffuseRoughnessMap = t[e.diffuseRoughnessMap] || null), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}, Un = /* @__PURE__ */ new B(), la = /* @__PURE__ */ new B(), $r = /* @__PURE__ */ new B(), Zr = /* @__PURE__ */ new B(), Fs = class {
  constructor(e = new B(), t = new B(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Un)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Un.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Un.copy(this.origin).addScaledVector(this.direction, t), Un.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    la.copy(e).add(t).multiplyScalar(0.5), $r.copy(t).sub(e).normalize(), Zr.copy(this.origin).sub(la);
    const r = e.distanceTo(t) * 0.5, s = -this.direction.dot($r), a = Zr.dot(this.direction), o = -Zr.dot($r), l = Zr.lengthSq(), c = Math.abs(1 - s * s);
    let h, u, d, f;
    if (c > 0)
      if (h = s * o - a, u = s * a - o, f = r * c, h >= 0)
        if (u >= -f)
          if (u <= f) {
            const g = 1 / c;
            h *= g, u *= g, d = h * (h + s * u + 2 * a) + u * (s * h + u + 2 * o) + l;
          } else
            u = r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
        else
          u = -r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
      else u <= -f ? (h = Math.max(0, -(-s * r + a)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= f ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
    else
      u = s > 0 ? -r : r, h = Math.max(0, -(s * u + a)), d = -h * h + u * (u + 2 * o) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(la).addScaledVector($r, u), d;
  }
  intersectSphere(e, t) {
    if (e.radius < 0) return null;
    Un.subVectors(e.center, this.origin);
    const n = Un.dot(this.direction), i = Un.dot(Un) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const s = Math.sqrt(r - i), a = n - s, o = n + s;
    return o < 0 ? null : a < 0 ? this.at(o, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, s, a, o;
    const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u = this.origin;
    return l >= 0 ? (n = (e.min.x - u.x) * l, i = (e.max.x - u.x) * l) : (n = (e.max.x - u.x) * l, i = (e.min.x - u.x) * l), c >= 0 ? (r = (e.min.y - u.y) * c, s = (e.max.y - u.y) * c) : (r = (e.max.y - u.y) * c, s = (e.min.y - u.y) * c), n > s || r > i || ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), h >= 0 ? (a = (e.min.z - u.z) * h, o = (e.max.z - u.z) * h) : (a = (e.max.z - u.z) * h, o = (e.min.z - u.z) * h), n > o || a > i) || ((a > n || n !== n) && (n = a), (o < i || i !== i) && (i = o), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Un) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    const s = this.origin, a = this.direction, o = a.x, l = a.y, c = a.z, h = e.x - s.x, u = e.y - s.y, d = e.z - s.z, f = t.x - s.x, g = t.y - s.y, _ = t.z - s.z, m = n.x - s.x, p = n.y - s.y, M = n.z - s.z, E = Math.abs(o), S = Math.abs(l), b = Math.abs(c);
    let A, v, T, w, F, P, U, q, I, V, $, k;
    if (E >= S && E >= b ? (T = o, P = h, I = f, k = m, o >= 0 ? (A = l, v = c, w = u, F = d, U = g, q = _, V = p, $ = M) : (A = c, v = l, w = d, F = u, U = _, q = g, V = M, $ = p)) : S >= b ? (T = l, P = u, I = g, k = p, l >= 0 ? (A = c, v = o, w = d, F = h, U = _, q = f, V = M, $ = m) : (A = o, v = c, w = h, F = d, U = f, q = _, V = m, $ = M)) : (T = c, P = d, I = _, k = M, c >= 0 ? (A = o, v = l, w = h, F = u, U = f, q = g, V = m, $ = p) : (A = l, v = o, w = u, F = h, U = g, q = f, V = p, $ = m)), T === 0) return null;
    const ae = A / T, Y = v / T, K = 1 / T, ie = w - ae * P, Ee = F - Y * P, Z = U - ae * I, ne = q - Y * I, _e = V - ae * k, Ae = $ - Y * k, we = _e * ne - Ae * Z, ue = ie * Ae - Ee * _e, Ve = Z * Ee - ne * ie;
    if (i) {
      if (we < 0 || ue < 0 || Ve < 0) return null;
    } else if ((we < 0 || ue < 0 || Ve < 0) && (we > 0 || ue > 0 || Ve > 0)) return null;
    const Je = we + ue + Ve;
    if (Je === 0) return null;
    const Pe = K * (we * P + ue * I + Ve * k);
    return (Je > 0 ? Pe < 0 : Pe > 0) ? null : this.at(Pe / Je, r);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Oi = class extends bn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ce(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Vi(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}, Ro = /* @__PURE__ */ new Ge(), ci = /* @__PURE__ */ new Fs(), Jr = /* @__PURE__ */ new wn(), wo = /* @__PURE__ */ new B(), Qr = /* @__PURE__ */ new B(), jr = /* @__PURE__ */ new B(), es = /* @__PURE__ */ new B(), ca = /* @__PURE__ */ new B(), ts = /* @__PURE__ */ new B(), Co = /* @__PURE__ */ new B(), ns = /* @__PURE__ */ new B(), Xt = class extends _t {
  constructor(e = new Bt(), t = new Oi()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 ? this.morphTargetInfluences = e.morphTargetInfluences.slice() : this.morphTargetInfluences = void 0, e.morphTargetDictionary !== void 0 ? this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary) : this.morphTargetDictionary = void 0, this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let i = 0, r = n.length; i < r; i++) {
          const s = n[i].name || String(i);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = i;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, s = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (r && a) {
      ts.set(0, 0, 0);
      for (let o = 0, l = r.length; o < l; o++) {
        const c = a[o], h = r[o];
        c !== 0 && (ca.fromBufferAttribute(h, e), s ? ts.addScaledVector(ca, c) : ts.addScaledVector(ca.sub(t), c));
      }
      t.add(ts);
    }
    return t;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Jr.copy(n.boundingSphere), Jr.applyMatrix4(r), ci.copy(e.ray).recast(e.near), !(Jr.containsPoint(ci.origin) === !1 && (ci.intersectSphere(Jr, wo) === null || ci.origin.distanceToSquared(wo) > (e.far - e.near) ** 2)) && (Ro.copy(r).invert(), ci.copy(e.ray).applyMatrix4(Ro), !(n.boundingBox !== null && ci.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, ci)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, l = r.attributes.uv, c = r.attributes.uv1, h = r.attributes.normal, u = r.groups, d = r.drawRange;
    if (a !== null)
      if (Array.isArray(s)) for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f], m = s[_.materialIndex], p = Math.max(_.start, d.start), M = Math.min(a.count, Math.min(_.start + _.count, d.start + d.count));
        for (let E = p, S = M; E < S; E += 3) {
          const b = a.getX(E), A = a.getX(E + 1), v = a.getX(E + 2);
          i = is(this, m, e, n, l, c, h, b, A, v), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = _.materialIndex, t.push(i));
        }
      }
      else {
        const f = Math.max(0, d.start), g = Math.min(a.count, d.start + d.count);
        for (let _ = f, m = g; _ < m; _ += 3) {
          const p = a.getX(_), M = a.getX(_ + 1), E = a.getX(_ + 2);
          i = is(this, s, e, n, l, c, h, p, M, E), i && (i.faceIndex = Math.floor(_ / 3), t.push(i));
        }
      }
    else if (o !== void 0)
      if (Array.isArray(s)) for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f], m = s[_.materialIndex], p = Math.max(_.start, d.start), M = Math.min(o.count, Math.min(_.start + _.count, d.start + d.count));
        for (let E = p, S = M; E < S; E += 3) {
          const b = E, A = E + 1, v = E + 2;
          i = is(this, m, e, n, l, c, h, b, A, v), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = _.materialIndex, t.push(i));
        }
      }
      else {
        const f = Math.max(0, d.start), g = Math.min(o.count, d.start + d.count);
        for (let _ = f, m = g; _ < m; _ += 3) {
          const p = _, M = _ + 1, E = _ + 2;
          i = is(this, s, e, n, l, c, h, p, M, E), i && (i.faceIndex = Math.floor(_ / 3), t.push(i));
        }
      }
  }
};
function Nd(e, t, n, i, r, s, a, o) {
  let l;
  if (t.side === 1 ? l = i.intersectTriangle(a, s, r, !0, o) : l = i.intersectTriangle(r, s, a, t.side === 0, o), l === null) return null;
  ns.copy(o), ns.applyMatrix4(e.matrixWorld);
  const c = n.ray.origin.distanceTo(ns);
  return c < n.near || c > n.far ? null : {
    distance: c,
    point: ns.clone(),
    object: e
  };
}
function is(e, t, n, i, r, s, a, o, l, c) {
  e.getVertexPosition(o, Qr), e.getVertexPosition(l, jr), e.getVertexPosition(c, es);
  const h = Nd(e, t, n, i, Qr, jr, es, Co);
  if (h) {
    const u = new B();
    nr.getBarycoord(Co, Qr, jr, es, u), r && (h.uv = nr.getInterpolatedAttribute(r, o, l, c, u, new ke())), s && (h.uv1 = nr.getInterpolatedAttribute(s, o, l, c, u, new ke())), a && (h.normal = nr.getInterpolatedAttribute(a, o, l, c, u, new B()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: l,
      c,
      normal: new B(),
      materialIndex: 0
    };
    nr.getNormal(Qr, jr, es, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
var ar = /* @__PURE__ */ new st(), Po = /* @__PURE__ */ new st(), Lo = /* @__PURE__ */ new st(), Ud = /* @__PURE__ */ new st(), Io = /* @__PURE__ */ new Ge(), rs = /* @__PURE__ */ new B(), ha = /* @__PURE__ */ new wn(), Do = /* @__PURE__ */ new Ge(), ua = /* @__PURE__ */ new Fs(), Od = class extends Xt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = jh, this.bindMatrix = new Ge(), this.bindMatrixInverse = new Ge(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Rn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, rs), this.boundingBox.expandByPoint(rs);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new wn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, rs), this.boundingSphere.expandByPoint(rs);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this.boundingBox = e.boundingBox !== null ? e.boundingBox.clone() : null, this.boundingSphere = e.boundingSphere !== null ? e.boundingSphere.clone() : null, this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ha.copy(this.boundingSphere), ha.applyMatrix4(i), e.ray.intersectsSphere(ha) !== !1 && (Do.copy(i).invert(), ua.copy(e.ray).applyMatrix4(Do), !(this.boundingBox !== null && ua.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, ua)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new st(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : xe("SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Po.fromBufferAttribute(i.attributes.skinIndex, e), Lo.fromBufferAttribute(i.attributes.skinWeight, e), t.isVector4 ? (ar.copy(t), t.set(0, 0, 0, 0)) : (ar.set(t.x, t.y, t.z, 1), t.set(0, 0, 0)), ar.applyMatrix4(this.bindMatrix);
    for (let r = 0; r < 4; r++) {
      const s = Lo.getComponent(r);
      if (s !== 0) {
        const a = Po.getComponent(r);
        Io.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(Ud.copy(ar).applyMatrix4(Io), s);
      }
    }
    return t.isVector4 && (t.w = ar.w), t.applyMatrix4(this.bindMatrixInverse);
  }
}, fc = class extends _t {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}, za = class extends Wt {
  constructor(e = null, t = 1, n = 1, i, r, s, a, o, l = Dt, c = Dt, h, u) {
    super(null, s, a, o, l, c, i, r, h, u), this.isDataTexture = !0, this.image = {
      data: e,
      width: t,
      height: n
    }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}, No = /* @__PURE__ */ new Ge(), Fd = /* @__PURE__ */ new Ge(), Bd = class pc {
  constructor(t = [], n = []) {
    this.uuid = An(), this.bones = t.slice(0), this.boneInverses = n, this.boneMatrices = null, this.previousBoneMatrices = null, this.boneTexture = null, this.previousBoneTexture = null, this.init();
  }
  init() {
    const t = this.bones, n = this.boneInverses;
    if (this.boneMatrices = new Float32Array(t.length * 16), n.length === 0) this.calculateInverses();
    else if (t.length !== n.length) {
      xe("Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let i = 0, r = this.bones.length; i < r; i++) this.boneInverses.push(new Ge());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = new Ge();
      this.bones[t] && i.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(i);
    }
  }
  pose() {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      i && i.matrixWorld.copy(this.boneInverses[t]).invert();
    }
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      i && (i.parent && i.parent.isBone ? (i.matrix.copy(i.parent.matrixWorld).invert(), i.matrix.multiply(i.matrixWorld)) : i.matrix.copy(i.matrixWorld), i.matrix.decompose(i.position, i.quaternion, i.scale));
    }
  }
  update() {
    const t = this.bones, n = this.boneInverses, i = this.boneMatrices, r = this.boneTexture;
    for (let s = 0, a = t.length; s < a; s++) {
      const o = t[s] ? t[s].matrixWorld : Fd;
      No.multiplyMatrices(o, n[s]), No.toArray(i, s * 16);
    }
    r !== null && (r.needsUpdate = !0);
  }
  clone() {
    return new pc(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let t = Math.sqrt(this.bones.length * 4);
    t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
    const n = new Float32Array(t * t * 4);
    n.set(this.boneMatrices);
    const i = new za(n, t, t, Tr, Ki);
    return i.needsUpdate = !0, this.boneMatrices = n, this.boneTexture = i, this;
  }
  getBoneByName(t) {
    for (let n = 0, i = this.bones.length; n < i; n++) {
      const r = this.bones[n];
      if (r.name === t) return r;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null), this.previousBoneTexture !== null && (this.previousBoneTexture.dispose(), this.previousBoneTexture = null);
  }
  fromJSON(t, n) {
    this.uuid = t.uuid;
    for (let i = 0, r = t.bones.length; i < r; i++) {
      const s = t.bones[i];
      let a = n[s];
      a === void 0 && (xe("Skeleton: No bone found with UUID:", s), a = new fc()), this.bones.push(a), this.boneInverses.push(new Ge().fromArray(t.boneInverses[i]));
    }
    return this.init(), this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.7,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    t.uuid = this.uuid;
    const n = this.bones, i = this.boneInverses;
    for (let r = 0, s = n.length; r < s; r++) {
      const a = n[r];
      t.bones.push(a.uuid);
      const o = i[r];
      t.boneInverses.push(o.toArray());
    }
    return t;
  }
}, Ps = class extends sn {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e;
  }
}, Ci = /* @__PURE__ */ new Ge(), Uo = /* @__PURE__ */ new Ge(), ss = [], Oo = /* @__PURE__ */ new Rn(), kd = /* @__PURE__ */ new Ge(), or = /* @__PURE__ */ new Xt(), lr = /* @__PURE__ */ new wn(), zd = class extends Xt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Ps(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, kd);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Rn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ci), Oo.copy(e.boundingBox).applyMatrix4(Ci), this.boundingBox.union(Oo);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new wn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ci), lr.copy(e.boundingSphere).applyMatrix4(Ci), this.boundingSphere.union(lr);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), this.morphTexture = e.morphTexture !== null ? e.morphTexture.clone() : null, this.instanceColor = e.instanceColor !== null ? e.instanceColor.clone() : null, this.count = e.count, this.boundingBox = e.boundingBox !== null ? e.boundingBox.clone() : null, this.boundingSphere = e.boundingSphere !== null ? e.boundingSphere.clone() : null, this;
  }
  getColorAt(e, t) {
    return this.instanceColor === null ? t.setRGB(1, 1, 1) : t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    return t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = e * (n.length + 1) + 1;
    for (let s = 0; s < n.length; s++) n[s] = i[r + s];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (or.geometry = this.geometry, or.material = this.material, or.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), lr.copy(this.boundingSphere), lr.applyMatrix4(n), e.ray.intersectsSphere(lr) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Ci), Uo.multiplyMatrices(n, Ci), or.matrixWorld = Uo, or.raycast(e, ss);
        for (let s = 0, a = ss.length; s < a; s++) {
          const o = ss[s];
          o.instanceId = r, o.object = this, t.push(o);
        }
        ss.length = 0;
      }
  }
  setColorAt(e, t) {
    return this.instanceColor === null && (this.instanceColor = new Ps(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
  }
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new za(new Float32Array(i * this.count), i, this.count, Jl, Ki));
    const r = this.morphTexture.source.data.data;
    let s = 0;
    for (let l = 0; l < n.length; l++) s += n[l];
    const a = this.geometry.morphTargetsRelative ? 1 : 1 - s, o = i * e;
    return r[o] = a, r.set(n, o + 1), this;
  }
  updateMorphTargets() {
  }
  dispose() {
    super.dispose(), this.instanceMatrix.dispose(), this.instanceColor !== null && this.instanceColor.dispose(), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null);
  }
}, hi = /* @__PURE__ */ new wn(), Hd = /* @__PURE__ */ new ke(0.5, 0.5), as = /* @__PURE__ */ new B(), wr = class {
  constructor(e = new Fn(), t = new Fn(), n = new Fn(), i = new Fn(), r = new Fn(), s = new Fn()) {
    this.planes = [
      e,
      t,
      n,
      i,
      r,
      s
    ];
  }
  set(e, t, n, i, r, s) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = gi, n = !1) {
    const i = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], h = r[5], u = r[6], d = r[7], f = r[8], g = r[9], _ = r[10], m = r[11], p = r[12], M = r[13], E = r[14], S = r[15];
    if (i[0].setComponents(l - s, d - c, m - f, S - p).normalize(), i[1].setComponents(l + s, d + c, m + f, S + p).normalize(), i[2].setComponents(l + a, d + h, m + g, S + M).normalize(), i[3].setComponents(l - a, d - h, m - g, S - M).normalize(), n)
      i[4].setComponents(o, u, _, E).normalize(), i[5].setComponents(l - o, d - u, m - _, S - E).normalize();
    else if (i[4].setComponents(l - o, d - u, m - _, S - E).normalize(), t === 2e3) i[5].setComponents(l + o, d + u, m + _, S + E).normalize();
    else if (t === 2001) i[5].setComponents(o, u, _, E).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(hi);
  }
  intersectsSprite(e) {
    hi.center.set(0, 0, 0);
    const t = Hd.distanceTo(e.center);
    return hi.radius = 0.7071067811865476 + t, hi.applyMatrix4(e.matrixWorld), this.intersectsSphere(hi);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (as.x = i.normal.x > 0 ? e.max.x : e.min.x, as.y = i.normal.y > 0 ? e.max.y : e.min.y, as.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(as) < 0) return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Fo = /* @__PURE__ */ new Ge(), Gd = class mc {
  constructor() {
    this.coordinateSystem = gi, this._frustums = [], this._count = 0;
  }
  setFromArrayCamera(t) {
    const n = t.cameras, i = this._frustums;
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      Fo.multiplyMatrices(s.projectionMatrix, s.matrixWorldInverse), i[r] === void 0 && (i[r] = new wr()), i[r].setFromProjectionMatrix(Fo, s.coordinateSystem, s.reversedDepth);
    }
    return this._count = n.length, this;
  }
  getFrustum(t) {
    return this._frustums[t];
  }
  intersectsObject(t) {
    const n = this._frustums;
    for (let i = 0; i < this._count; i++) if (n[i].intersectsObject(t)) return !0;
    return !1;
  }
  intersectsSprite(t) {
    const n = this._frustums;
    for (let i = 0; i < this._count; i++) if (n[i].intersectsSprite(t)) return !0;
    return !1;
  }
  intersectsSphere(t) {
    const n = this._frustums;
    for (let i = 0; i < this._count; i++) if (n[i].intersectsSphere(t)) return !0;
    return !1;
  }
  intersectsBox(t) {
    const n = this._frustums;
    for (let i = 0; i < this._count; i++) if (n[i].intersectsBox(t)) return !0;
    return !1;
  }
  containsPoint(t) {
    const n = this._frustums;
    for (let i = 0; i < this._count; i++) if (n[i].containsPoint(t)) return !0;
    return !1;
  }
  copy(t) {
    this.coordinateSystem = t.coordinateSystem;
    const n = this._frustums, i = t._frustums;
    for (let r = 0; r < t._count; r++)
      n[r] === void 0 && (n[r] = new wr()), n[r].copy(i[r]);
    return this._count = t._count, this;
  }
  clone() {
    return new mc().copy(this);
  }
}, gc = class extends bn {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ce(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}, Ls = /* @__PURE__ */ new B(), Is = /* @__PURE__ */ new B(), Bo = /* @__PURE__ */ new Ge(), cr = /* @__PURE__ */ new Fs(), os = /* @__PURE__ */ new wn(), da = /* @__PURE__ */ new B(), ko = /* @__PURE__ */ new B(), Ha = class extends _t {
  constructor(e = new Bt(), t = new gc()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 ? this.morphTargetInfluences = e.morphTargetInfluences.slice() : this.morphTargetInfluences = void 0, e.morphTargetDictionary !== void 0 ? this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary) : this.morphTargetDictionary = void 0, this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        Ls.fromBufferAttribute(t, i - 1), Is.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Ls.distanceTo(Is);
      e.setAttribute("lineDistance", new tt(n, 1));
    } else xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, s = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), os.copy(n.boundingSphere), os.applyMatrix4(i), os.radius += r, e.ray.intersectsSphere(os) === !1) return;
    Bo.copy(i).invert(), cr.copy(e.ray).applyMatrix4(Bo);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = this.isLineSegments ? 2 : 1, c = n.index, h = n.attributes.position;
    if (c !== null) {
      const u = Math.max(0, s.start), d = Math.min(c.count, s.start + s.count);
      for (let f = u, g = d - 1; f < g; f += l) {
        const _ = c.getX(f), m = c.getX(f + 1), p = ls(this, e, cr, o, _, m, f);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const f = c.getX(d - 1), g = c.getX(u), _ = ls(this, e, cr, o, f, g, d - 1);
        _ && t.push(_);
      }
    } else {
      const u = Math.max(0, s.start), d = Math.min(h.count, s.start + s.count);
      for (let f = u, g = d - 1; f < g; f += l) {
        const _ = ls(this, e, cr, o, f, f + 1, f);
        _ && t.push(_);
      }
      if (this.isLineLoop) {
        const f = ls(this, e, cr, o, d - 1, u, d - 1);
        f && t.push(f);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let i = 0, r = n.length; i < r; i++) {
          const s = n[i].name || String(i);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = i;
        }
      }
    }
  }
};
function ls(e, t, n, i, r, s, a) {
  const o = e.geometry.attributes.position;
  if (Ls.fromBufferAttribute(o, r), Is.fromBufferAttribute(o, s), n.distanceSqToSegment(Ls, Is, da, ko) > i) return;
  da.applyMatrix4(e.matrixWorld);
  const l = t.ray.origin.distanceTo(da);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      point: ko.clone().applyMatrix4(e.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: e
    };
}
var zo = /* @__PURE__ */ new B(), Ho = /* @__PURE__ */ new B(), Vd = class extends Ha {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        zo.fromBufferAttribute(t, i), Ho.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + zo.distanceTo(Ho);
      e.setAttribute("lineDistance", new tt(n, 1));
    } else xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}, Wd = class extends Ha {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}, vc = class extends bn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ce(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}, Go = /* @__PURE__ */ new Ge(), ba = /* @__PURE__ */ new Fs(), cs = /* @__PURE__ */ new wn(), hs = /* @__PURE__ */ new B(), Xd = class extends _t {
  constructor(e = new Bt(), t = new vc()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 ? this.morphTargetInfluences = e.morphTargetInfluences.slice() : this.morphTargetInfluences = void 0, e.morphTargetDictionary !== void 0 ? this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary) : this.morphTargetDictionary = void 0, this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, s = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), cs.copy(n.boundingSphere), cs.applyMatrix4(i), cs.radius += r, e.ray.intersectsSphere(cs) === !1) return;
    Go.copy(i).invert(), ba.copy(e.ray).applyMatrix4(Go);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = n.index, c = n.attributes.position;
    if (l !== null) {
      const h = Math.max(0, s.start), u = Math.min(l.count, s.start + s.count);
      for (let d = h, f = u; d < f; d++) {
        const g = l.getX(d);
        hs.fromBufferAttribute(c, g), Vo(hs, g, o, i, e, t, this);
      }
    } else {
      const h = Math.max(0, s.start), u = Math.min(c.count, s.start + s.count);
      for (let d = h, f = u; d < f; d++)
        hs.fromBufferAttribute(c, d), Vo(hs, d, o, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (n !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let i = 0, r = n.length; i < r; i++) {
          const s = n[i].name || String(i);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[s] = i;
        }
      }
    }
  }
};
function Vo(e, t, n, i, r, s, a) {
  const o = ba.distanceSqToPoint(e);
  if (o < n) {
    const l = new B();
    ba.closestPointToPoint(e, l), l.applyMatrix4(i);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
var _c = class extends Wt {
  constructor(e = [], t = 301, n, i, r, s, a, o, l, c) {
    super(e, t, n, i, r, s, a, o, l, c), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, Wi = class extends Wt {
  constructor(e, t, n = mi, i, r, s, a = Dt, o = Dt, l, c = Er, h = 1) {
    if (c !== 1026 && c !== 1027) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super({
      width: e,
      height: t,
      depth: h
    }, i, r, s, a, o, c, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new ka(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.compareFunction = this.compareFunction, t;
  }
}, Mc = class extends Wi {
  constructor(e, t = mi, n = 301, i, r, s = Dt, a = Dt, o, l = Er) {
    const c = {
      width: e,
      height: e,
      depth: 1
    }, h = [
      c,
      c,
      c,
      c,
      c,
      c
    ];
    super(e, e, t, n, i, r, s, a, o, l), this.image = h, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, Sc = class extends Wt {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}, Dr = class yc extends Bt {
  constructor(t = 1, n = 1, i = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: n,
      depth: i,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let d = 0, f = 0;
    g("z", "y", "x", -1, -1, i, n, t, a, s, 0), g("z", "y", "x", 1, -1, i, n, -t, a, s, 1), g("x", "z", "y", 1, 1, t, i, n, r, a, 2), g("x", "z", "y", 1, -1, t, i, -n, r, a, 3), g("x", "y", "z", 1, -1, t, n, i, r, s, 4), g("x", "y", "z", -1, -1, t, n, -i, r, s, 5), this.setIndex(l), this.setAttribute("position", new tt(c, 3)), this.setAttribute("normal", new tt(h, 3)), this.setAttribute("uv", new tt(u, 2));
    function g(_, m, p, M, E, S, b, A, v, T, w) {
      const F = S / v, P = b / T, U = S / 2, q = b / 2, I = A / 2, V = v + 1, $ = T + 1;
      let k = 0, ae = 0;
      const Y = new B();
      for (let K = 0; K < $; K++) {
        const ie = K * P - q;
        for (let Ee = 0; Ee < V; Ee++)
          Y[_] = (Ee * F - U) * M, Y[m] = ie * E, Y[p] = I, c.push(Y.x, Y.y, Y.z), Y[_] = 0, Y[m] = 0, Y[p] = A > 0 ? 1 : -1, h.push(Y.x, Y.y, Y.z), u.push(Ee / v), u.push(1 - K / T), k += 1;
      }
      for (let K = 0; K < T; K++) for (let ie = 0; ie < v; ie++) {
        const Ee = d + ie + V * K, Z = d + ie + V * (K + 1), ne = d + (ie + 1) + V * (K + 1), _e = d + (ie + 1) + V * K;
        l.push(Ee, Z, _e), l.push(Z, ne, _e), ae += 6;
      }
      o.addGroup(f, ae, w), f += ae, d += k;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new yc(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}, qd = class xc extends Bt {
  constructor(t = 1, n = 1, i = 4, r = 8, s = 1) {
    super(), this.type = "CapsuleGeometry", this.parameters = {
      radius: t,
      height: n,
      capSegments: i,
      radialSegments: r,
      heightSegments: s
    }, n = Math.max(0, n), i = Math.max(1, Math.floor(i)), r = Math.max(3, Math.floor(r)), s = Math.max(1, Math.floor(s));
    const a = [], o = [], l = [], c = [], h = n / 2, u = Math.PI / 2 * t, d = n, f = 2 * u + d, g = i * 2 + s, _ = r + 1, m = new B(), p = new B();
    for (let M = 0; M <= g; M++) {
      let E = 0, S = 0, b = 0, A = 0;
      if (M <= i) {
        const w = M / i, F = w * Math.PI / 2;
        S = -h - t * Math.cos(F), b = t * Math.sin(F), A = -t * Math.cos(F), E = w * u;
      } else if (M <= i + s) {
        const w = (M - i) / s;
        S = -h + w * n, b = t, A = 0, E = u + w * d;
      } else {
        const w = (M - i - s) / i, F = w * Math.PI / 2;
        S = h + t * Math.sin(F), b = t * Math.cos(F), A = t * Math.sin(F), E = u + d + w * u;
      }
      const v = Math.max(0, Math.min(1, E / f));
      let T = 0;
      M === 0 ? T = 0.5 / r : M === g && (T = -0.5 / r);
      for (let w = 0; w <= r; w++) {
        const F = w / r, P = F * Math.PI * 2, U = Math.sin(P), q = Math.cos(P);
        p.x = -b * q, p.y = S, p.z = b * U, o.push(p.x, p.y, p.z), m.set(-b * q, A, b * U), m.normalize(), l.push(m.x, m.y, m.z), c.push(F + T, v);
      }
      if (M > 0) {
        const w = (M - 1) * _;
        for (let F = 0; F < r; F++) {
          const P = w + F, U = w + F + 1, q = M * _ + F, I = M * _ + F + 1;
          a.push(P, U, q), a.push(U, I, q);
        }
      }
    }
    this.setIndex(a), this.setAttribute("position", new tt(o, 3)), this.setAttribute("normal", new tt(l, 3)), this.setAttribute("uv", new tt(c, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new xc(t.radius, t.height, t.capSegments, t.radialSegments, t.heightSegments);
  }
}, Tc = class Ec extends Bt {
  constructor(t = 1, n = 1, i = 1, r = 32, s = 1, a = !1, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: n,
      height: i,
      radialSegments: r,
      heightSegments: s,
      openEnded: a,
      thetaStart: o,
      thetaLength: l
    };
    const c = this;
    r = Math.floor(r), s = Math.floor(s);
    const h = [], u = [], d = [], f = [];
    let g = 0;
    const _ = [], m = i / 2;
    let p = 0;
    M(), a === !1 && (t > 0 && E(!0), n > 0 && E(!1)), this.setIndex(h), this.setAttribute("position", new tt(u, 3)), this.setAttribute("normal", new tt(d, 3)), this.setAttribute("uv", new tt(f, 2));
    function M() {
      const S = new B(), b = new B();
      let A = 0;
      const v = (n - t) / i;
      for (let T = 0; T <= s; T++) {
        const w = [], F = T / s, P = F * (n - t) + t;
        for (let U = 0; U <= r; U++) {
          const q = U / r, I = q * l + o, V = Math.sin(I), $ = Math.cos(I);
          b.x = P * V, b.y = -F * i + m, b.z = P * $, u.push(b.x, b.y, b.z), S.set(V, v, $).normalize(), d.push(S.x, S.y, S.z), f.push(q, 1 - F), w.push(g++);
        }
        _.push(w);
      }
      for (let T = 0; T < r; T++) for (let w = 0; w < s; w++) {
        const F = _[w][T], P = _[w + 1][T], U = _[w + 1][T + 1], q = _[w][T + 1];
        (t > 0 || w !== 0) && (h.push(F, P, q), A += 3), (n > 0 || w !== s - 1) && (h.push(P, U, q), A += 3);
      }
      c.addGroup(p, A, 0), p += A;
    }
    function E(S) {
      const b = g, A = new ke(), v = new B();
      let T = 0;
      const w = S === !0 ? t : n, F = S === !0 ? 1 : -1;
      for (let U = 1; U <= r; U++)
        u.push(0, m * F, 0), d.push(0, F, 0), f.push(0.5, 0.5), g++;
      const P = g;
      for (let U = 0; U <= r; U++) {
        const q = U / r * l + o, I = Math.cos(q), V = Math.sin(q);
        v.x = w * V, v.y = m * F, v.z = w * I, u.push(v.x, v.y, v.z), d.push(0, F, 0), A.x = I * 0.5 + 0.5, A.y = V * 0.5 * F + 0.5, f.push(A.x, A.y), g++;
      }
      for (let U = 0; U < r; U++) {
        const q = b + U, I = P + U;
        S === !0 ? h.push(I, I + 1, q) : h.push(I + 1, I, q), T += 3;
      }
      c.addGroup(p, T, S === !0 ? 1 : 2), p += T;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ec(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, Yd = class bc extends Tc {
  constructor(t = 1, n = 1, i = 32, r = 1, s = !1, a = 0, o = Math.PI * 2) {
    super(0, t, n, i, r, s, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: n,
      radialSegments: i,
      heightSegments: r,
      openEnded: s,
      thetaStart: a,
      thetaLength: o
    };
  }
  static fromJSON(t) {
    return new bc(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, Kd = class Ac extends Bt {
  constructor(t = [
    new ke(0, -0.5),
    new ke(0.5, 0),
    new ke(0, 0.5)
  ], n = 12, i = 0, r = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: n,
      phiStart: i,
      phiLength: r
    }, n = Math.floor(n), r = Xe(r, 0, Math.PI * 2);
    const s = [], a = [], o = [], l = [], c = [], h = 1 / n, u = new B(), d = new ke(), f = new B(), g = new B(), _ = new B();
    let m = 0, p = 0;
    for (let M = 0; M <= t.length - 1; M++) switch (M) {
      case 0:
        m = t[M + 1].x - t[M].x, p = t[M + 1].y - t[M].y, f.x = p * 1, f.y = -m, f.z = p * 0, _.copy(f), f.normalize(), l.push(f.x, f.y, f.z);
        break;
      case t.length - 1:
        _.normalize(), l.push(_.x, _.y, _.z);
        break;
      default:
        m = t[M + 1].x - t[M].x, p = t[M + 1].y - t[M].y, f.x = p * 1, f.y = -m, f.z = p * 0, g.copy(f), f.x += _.x, f.y += _.y, f.z += _.z, f.normalize(), l.push(f.x, f.y, f.z), _.copy(g);
    }
    for (let M = 0; M <= n; M++) {
      const E = i + M * h * r, S = Math.sin(E), b = Math.cos(E);
      for (let A = 0; A <= t.length - 1; A++) {
        u.x = t[A].x * S, u.y = t[A].y, u.z = t[A].x * b, a.push(u.x, u.y, u.z), d.x = M / n, d.y = A / (t.length - 1), o.push(d.x, d.y);
        const v = l[3 * A + 0] * S, T = l[3 * A + 1], w = l[3 * A + 0] * b;
        c.push(v, T, w);
      }
    }
    for (let M = 0; M < n; M++) for (let E = 0; E < t.length - 1; E++) {
      const S = E + M * t.length, b = S, A = S + t.length, v = S + t.length + 1, T = S + 1;
      s.push(b, A, T), s.push(v, T, A);
    }
    this.setIndex(s), this.setAttribute("position", new tt(a, 3)), this.setAttribute("uv", new tt(o, 2)), this.setAttribute("normal", new tt(c, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ac(t.points, t.segments, t.phiStart, t.phiLength);
  }
}, Rc = class wc extends Bt {
  constructor(t = 1, n = 1, i = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: n,
      widthSegments: i,
      heightSegments: r
    };
    const s = t / 2, a = n / 2, o = Math.floor(i), l = Math.floor(r), c = o + 1, h = l + 1, u = t / o, d = n / l, f = [], g = [], _ = [], m = [];
    for (let p = 0; p < h; p++) {
      const M = p * d - a;
      for (let E = 0; E < c; E++) {
        const S = E * u - s;
        g.push(S, -M, 0), _.push(0, 0, 1), m.push(E / o), m.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let M = 0; M < o; M++) {
      const E = M + c * p, S = M + c * (p + 1), b = M + 1 + c * (p + 1), A = M + 1 + c * p;
      f.push(E, S, A), f.push(S, b, A);
    }
    this.setIndex(f), this.setAttribute("position", new tt(g, 3)), this.setAttribute("normal", new tt(_, 3)), this.setAttribute("uv", new tt(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new wc(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}, $d = class Cc extends Bt {
  constructor(t = 0.5, n = 1, i = 32, r = 1, s = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: n,
      thetaSegments: i,
      phiSegments: r,
      thetaStart: s,
      thetaLength: a
    }, i = Math.max(3, i), r = Math.max(1, r);
    const o = [], l = [], c = [], h = [];
    let u = t;
    const d = (n - t) / r, f = new B(), g = new ke();
    for (let _ = 0; _ <= r; _++) {
      for (let m = 0; m <= i; m++) {
        const p = s + m / i * a;
        f.x = u * Math.cos(p), f.y = u * Math.sin(p), l.push(f.x, f.y, f.z), c.push(0, 0, 1), g.x = (f.x / n + 1) / 2, g.y = (f.y / n + 1) / 2, h.push(g.x, g.y);
      }
      u += d;
    }
    for (let _ = 0; _ < r; _++) {
      const m = _ * (i + 1);
      for (let p = 0; p < i; p++) {
        const M = p + m, E = M, S = M + i + 1, b = M + i + 2, A = M + 1;
        o.push(E, S, A), o.push(S, b, A);
      }
    }
    this.setIndex(o), this.setAttribute("position", new tt(l, 3)), this.setAttribute("normal", new tt(c, 3)), this.setAttribute("uv", new tt(h, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Cc(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}, Zd = class Pc extends Bt {
  constructor(t = 1, n = 32, i = 16, r = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: n,
      heightSegments: i,
      phiStart: r,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, n = Math.max(3, Math.floor(n)), i = Math.max(2, Math.floor(i));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [], u = new B(), d = new B(), f = [], g = [], _ = [], m = [];
    for (let p = 0; p <= i; p++) {
      const M = [], E = p / i, S = a + E * o, b = t * Math.cos(S), A = Math.sqrt(t * t - b * b);
      let v = 0;
      p === 0 && a === 0 ? v = 0.5 / n : p === i && l === Math.PI && (v = -0.5 / n);
      for (let T = 0; T <= n; T++) {
        const w = T / n, F = r + w * s;
        u.x = -A * Math.cos(F), u.y = b, u.z = A * Math.sin(F), g.push(u.x, u.y, u.z), d.copy(u).normalize(), _.push(d.x, d.y, d.z), m.push(w + v, 1 - E), M.push(c++);
      }
      h.push(M);
    }
    for (let p = 0; p < i; p++) for (let M = 0; M < n; M++) {
      const E = h[p][M + 1], S = h[p][M], b = h[p + 1][M], A = h[p + 1][M + 1];
      (p !== 0 || a > 0) && f.push(E, S, A), (p !== i - 1 || l < Math.PI) && f.push(S, b, A);
    }
    this.setIndex(f), this.setAttribute("position", new tt(g, 3)), this.setAttribute("normal", new tt(_, 3)), this.setAttribute("uv", new tt(m, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Pc(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}, Jd = class Lc extends Bt {
  constructor(t = 1, n = 0.4, i = 12, r = 48, s = Math.PI * 2, a = 0, o = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: n,
      radialSegments: i,
      tubularSegments: r,
      arc: s,
      thetaStart: a,
      thetaLength: o
    }, i = Math.floor(i), r = Math.floor(r);
    const l = [], c = [], h = [], u = [], d = new B(), f = new B(), g = new B();
    for (let _ = 0; _ <= i; _++) {
      const m = a + _ / i * o;
      for (let p = 0; p <= r; p++) {
        const M = p / r * s;
        f.x = (t + n * Math.cos(m)) * Math.cos(M), f.y = (t + n * Math.cos(m)) * Math.sin(M), f.z = n * Math.sin(m), c.push(f.x, f.y, f.z), d.x = t * Math.cos(M), d.y = t * Math.sin(M), g.subVectors(f, d).normalize(), h.push(g.x, g.y, g.z), u.push(p / r), u.push(_ / i);
      }
    }
    for (let _ = 1; _ <= i; _++) for (let m = 1; m <= r; m++) {
      const p = (r + 1) * _ + m - 1, M = (r + 1) * (_ - 1) + m - 1, E = (r + 1) * (_ - 1) + m, S = (r + 1) * _ + m;
      l.push(p, M, S), l.push(M, E, S);
    }
    this.setIndex(l), this.setAttribute("position", new tt(c, 3)), this.setAttribute("normal", new tt(h, 3)), this.setAttribute("uv", new tt(u, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Lc(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc, t.thetaStart, t.thetaLength);
  }
};
function Xi(e) {
  const t = {};
  for (const n in e) {
    t[n] = {};
    for (const i in e[n]) {
      const r = e[n][i];
      if (Wo(r))
        r.isRenderTargetTexture ? (xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][i] = null) : t[n][i] = r.clone();
      else if (Array.isArray(r))
        if (Wo(r[0])) {
          const s = [];
          for (let a = 0, o = r.length; a < o; a++) s[a] = r[a].clone();
          t[n][i] = s;
        } else t[n][i] = r.slice();
      else t[n][i] = r;
    }
  }
  return t;
}
function Ft(e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = Xi(e[n]);
    for (const r in i) t[r] = i[r];
  }
  return t;
}
function Wo(e) {
  return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function Qd(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) t.push(e[n].clone());
  return t;
}
function Ic(e) {
  const t = e.getRenderTarget();
  return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : qe.workingColorSpace;
}
var jd = {
  clone: Xi,
  merge: Ft
}, ef = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, tf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, vi = class extends bn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ef, this.fragmentShader = tf, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      multiDraw: !1
    }, this.defaultAttributeValues = {
      color: [
        1,
        1,
        1
      ],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Xi(e.uniforms), this.uniformsGroups = Qd(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const r = this.uniforms[i].value;
      r && r.isTexture ? t.uniforms[i] = {
        type: "t",
        value: r.toJSON(e).uuid
      } : r && r.isColor ? t.uniforms[i] = {
        type: "c",
        value: r.getHex()
      } : r && r.isVector2 ? t.uniforms[i] = {
        type: "v2",
        value: r.toArray()
      } : r && r.isVector3 ? t.uniforms[i] = {
        type: "v3",
        value: r.toArray()
      } : r && r.isVector4 ? t.uniforms[i] = {
        type: "v4",
        value: r.toArray()
      } : r && r.isMatrix3 ? t.uniforms[i] = {
        type: "m3",
        value: r.toArray()
      } : r && r.isMatrix4 ? t.uniforms[i] = {
        type: "m4",
        value: r.toArray()
      } : t.uniforms[i] = { value: r };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
  fromJSON(e, t) {
    if (super.fromJSON(e, t), e.uniforms !== void 0) for (const n in e.uniforms) {
      const i = e.uniforms[n];
      switch (this.uniforms[n] = {}, i.type) {
        case "t":
          this.uniforms[n].value = t[i.value] || null;
          break;
        case "c":
          this.uniforms[n].value = new Ce().setHex(i.value);
          break;
        case "v2":
          this.uniforms[n].value = new ke().fromArray(i.value);
          break;
        case "v3":
          this.uniforms[n].value = new B().fromArray(i.value);
          break;
        case "v4":
          this.uniforms[n].value = new st().fromArray(i.value);
          break;
        case "m3":
          this.uniforms[n].value = new Be().fromArray(i.value);
          break;
        case "m4":
          this.uniforms[n].value = new Ge().fromArray(i.value);
          break;
        default:
          this.uniforms[n].value = i.value;
      }
    }
    if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (const n in e.extensions) this.extensions[n] = e.extensions[n];
    return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
  }
}, nf = class extends vi {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}, Nr = class extends bn {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ce(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ce(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ke(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Vi(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}, mn = class extends Nr {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new ke(1, 1), this.clearcoatNormalMap = null, this.diffuseRoughnessMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return Xe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(t) {
        this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessMinimum = 100, this.iridescenceThicknessMaximum = 400, this.iridescenceThicknessMap = null, this.sheenColor = new Ce(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ce(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ce(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._diffuseRoughness = 0, this._dispersion = 0, this._iridescence = 0, this._retroreflectivity = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get diffuseRoughness() {
    return this._diffuseRoughness;
  }
  set diffuseRoughness(e) {
    this._diffuseRoughness > 0 != e > 0 && this.version++, this._diffuseRoughness = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get retroreflectivity() {
    return this._retroreflectivity;
  }
  set retroreflectivity(e) {
    this._retroreflectivity > 0 != e > 0 && this.version++, this._retroreflectivity = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  get iridescenceThicknessRange() {
    return Bi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'), [this.iridescenceThicknessMinimum, this.iridescenceThicknessMaximum];
  }
  set iridescenceThicknessRange(e) {
    Bi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'), this.iridescenceThicknessMinimum = e[0], this.iridescenceThicknessMaximum = e[1];
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.diffuseRoughness = e.diffuseRoughness, this.diffuseRoughnessMap = e.diffuseRoughnessMap, this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum, this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum, this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.retroreflectivity = e.retroreflectivity, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}, rf = class extends bn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Wu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}, sf = class extends bn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
};
function Jn(e, t) {
  return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function mr(e) {
  return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
function af(e) {
  function t(r, s) {
    return e[r] - e[s];
  }
  const n = e.length, i = new Array(n);
  for (let r = 0; r !== n; ++r) i[r] = r;
  return i.sort(t), i;
}
function Xo(e, t, n) {
  const i = e.length, r = new e.constructor(i);
  for (let s = 0, a = 0; a !== i; ++s) {
    const o = n[s] * t;
    for (let l = 0; l !== t; ++l) r[a++] = e[o + l];
  }
  return r;
}
function of(e, t, n, i) {
  let r = 1, s = e[0];
  for (; s !== void 0 && s[i] === void 0; ) s = e[r++];
  if (s === void 0) return;
  let a = s[i];
  if (a !== void 0)
    if (Array.isArray(a)) do
      a = s[i], a !== void 0 && (t.push(s.time), n.push(...a)), s = e[r++];
    while (s !== void 0);
    else if (a.toArray !== void 0) do
      a = s[i], a !== void 0 && (t.push(s.time), a.toArray(n, n.length)), s = e[r++];
    while (s !== void 0);
    else do
      a = s[i], a !== void 0 && (t.push(s.time), n.push(a)), s = e[r++];
    while (s !== void 0);
}
var $i = class {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let s;
        t: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === a) break;
              if (r = i, i = t[++n], e < i) break e;
            }
            s = t.length;
            break t;
          }
          if (!(e >= r)) {
            const a = t[1];
            e < a && (n = 2, r = a);
            for (let o = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === o) break;
              if (i = r, r = t[--n - 1], e >= r) break e;
            }
            s = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < s; ) {
          const a = n + s >>> 1;
          e < t[a] ? s = a : n = a + 1;
        }
        if (i = t[n], r = t[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let s = 0; s !== i; ++s) t[s] = n[r + s];
    return t;
  }
  interpolate_() {
    throw new Error("THREE.Interpolant: Call to abstract method.");
  }
  intervalChanged_() {
  }
}, lf = class extends $i {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: co,
      endingEnd: co
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, s = e + 1, a = i[r], o = i[s];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case ho:
        r = e, a = 2 * t - n;
        break;
      case uo:
        r = i.length - 2, a = t + i[r] - i[r + 1];
        break;
      default:
        r = e, a = n;
    }
    if (o === void 0) switch (this.getSettings_().endingEnd) {
      case ho:
        s = e, o = 2 * n - t;
        break;
      case uo:
        s = 1, o = n + i[1] - i[0];
        break;
      default:
        s = e - 1, o = t;
    }
    const l = (n - t) * 0.5, c = this.valueSize;
    this._weightPrev = l / (t - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, u = this._weightPrev, d = this._weightNext, f = (n - t) / (i - t), g = f * f, _ = g * f, m = -u * _ + 2 * u * g - u * f, p = (1 + u) * _ + (-1.5 - 2 * u) * g + (-0.5 + u) * f + 1, M = (-1 - d) * _ + (1.5 + d) * g + 0.5 * f, E = d * _ - d * g;
    for (let S = 0; S !== a; ++S) r[S] = m * s[c + S] + p * s[l + S] + M * s[o + S] + E * s[h + S];
    return r;
  }
}, cf = class extends $i {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = (n - t) / (i - t), h = 1 - c;
    for (let u = 0; u !== a; ++u) r[u] = s[l + u] * h + s[o + u] * c;
    return r;
  }
}, hf = class extends $i {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}, uf = class extends $i {
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = this.inTangents, h = this.outTangents;
    if (!c || !h) {
      const f = (n - t) / (i - t), g = 1 - f;
      for (let _ = 0; _ !== a; ++_) r[_] = s[l + _] * g + s[o + _] * f;
      return r;
    }
    const u = a * 2, d = e - 1;
    for (let f = 0; f !== a; ++f) {
      const g = s[l + f], _ = s[o + f], m = d * u + f * 2, p = h[m], M = h[m + 1], E = e * u + f * 2, S = c[E], b = c[E + 1], A = ff(n, t, p, S, i);
      r[f] = Dc(A, g, M, b, _);
    }
    return r;
  }
};
function Dc(e, t, n, i, r) {
  const s = 1 - e;
  return s * s * s * t + 3 * s * s * e * n + 3 * s * e * e * i + e * e * e * r;
}
function df(e, t, n, i, r) {
  const s = 1 - e;
  return 3 * s * s * (n - t) + 6 * s * e * (i - n) + 3 * e * e * (r - i);
}
function ff(e, t, n, i, r) {
  let s = (e - t) / (r - t);
  for (let a = 0; a < 8; a++) {
    const o = Dc(s, t, n, i, r) - e;
    if (Math.abs(o) < 1e-10) break;
    const l = df(s, t, n, i, r);
    if (Math.abs(l) < 1e-10) break;
    s = Math.max(0, Math.min(1, s - o / l));
  }
  return s;
}
var gn = class {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = Jn(t, this.TimeBufferType), this.values = Jn(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Jn(e.times, Array),
        values: Jn(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i), mr(e.settings) && (n.settings = {
        inTangents: Jn(e.settings.inTangents, Array),
        outTangents: Jn(e.settings.outTangents, Array)
      });
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new hf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new cf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new lf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    const t = new uf(this.times, this.values, this.getValueSize(), e);
    return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case br:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ar:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Gs:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case lo:
        t = this.InterpolantFactoryMethodBezier;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return xe("KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return br;
      case this.InterpolantFactoryMethodLinear:
        return Ar;
      case this.InterpolantFactoryMethodSmooth:
        return Gs;
      case this.InterpolantFactoryMethodBezier:
        return lo;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
      mr(this.settings) && (qo(this.settings.inTangents, e), qo(this.settings.outTangents, e));
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
      mr(this.settings) && (Yo(this.settings.inTangents, e), Yo(this.settings.outTangents, e));
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let r = 0, s = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; s !== -1 && n[s] > t; ) --s;
    if (++s, r !== 0 || s !== i) {
      r >= s && (s = Math.max(s, 1), r = s - 1);
      const a = this.getValueSize();
      this.times = n.slice(r, s), this.values = this.values.slice(r * a, s * a);
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (De("KeyframeTrack: Invalid value size in track.", this), e = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (De("KeyframeTrack: Track is empty.", this), e = !1);
    let s = null;
    for (let a = 0; a !== r; a++) {
      const o = n[a];
      if (typeof o == "number" && isNaN(o)) {
        De("KeyframeTrack: Time is not a valid number.", this, a, o), e = !1;
        break;
      }
      if (s !== null && s > o) {
        De("KeyframeTrack: Out of order keys.", this, a, o, s), e = !1;
        break;
      }
      s = o;
    }
    if (i !== void 0 && qu(i))
      for (let a = 0, o = i.length; a !== o; ++a) {
        const l = i[a];
        if (isNaN(l)) {
          De("KeyframeTrack: Value is not a valid number.", this, a, l), e = !1;
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Gs, r = e.length - 1;
    let s = 1;
    for (let a = 1; a < r; ++a) {
      let o = !1;
      const l = e[a];
      if (l !== e[a + 1] && (a !== 1 || l !== e[0]))
        if (i)
          o = !0;
        else {
          const c = a * n, h = c - n, u = c + n;
          for (let d = 0; d !== n; ++d) {
            const f = t[c + d];
            if (f !== t[h + d] || f !== t[u + d]) {
              o = !0;
              break;
            }
          }
        }
      if (o) {
        if (a !== s) {
          e[s] = e[a];
          const c = a * n, h = s * n;
          for (let u = 0; u !== n; ++u) t[h + u] = t[c + u];
        }
        ++s;
      }
    }
    if (r > 0) {
      e[s] = e[r];
      for (let a = r * n, o = s * n, l = 0; l !== n; ++l) t[o + l] = t[a + l];
      ++s;
    }
    return s !== e.length ? (this.times = e.slice(0, s), this.values = t.slice(0, s * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, mr(this.settings) && (i.settings = {
      inTangents: this.settings.inTangents.slice(),
      outTangents: this.settings.outTangents.slice()
    }), i;
  }
};
function qo(e, t) {
  for (let n = 0, i = e.length; n !== i; n += 2) e[n] += t;
}
function Yo(e, t) {
  for (let n = 0, i = e.length; n !== i; n += 2) e[n] *= t;
}
gn.prototype.ValueTypeName = "";
gn.prototype.TimeBufferType = Float32Array;
gn.prototype.ValueBufferType = Float32Array;
gn.prototype.DefaultInterpolation = Ar;
var Zi = class extends gn {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
Zi.prototype.ValueTypeName = "bool";
Zi.prototype.ValueBufferType = Array;
Zi.prototype.DefaultInterpolation = br;
Zi.prototype.InterpolantFactoryMethodLinear = void 0;
Zi.prototype.InterpolantFactoryMethodSmooth = void 0;
var Nc = class extends gn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
Nc.prototype.ValueTypeName = "color";
var Cr = class extends gn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
Cr.prototype.ValueTypeName = "number";
var pf = class extends $i {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - t) / (i - t);
    let l = e * a;
    for (let c = l + a; l !== c; l += 4) Hn.slerpFlat(r, 0, s, l - a, s, l, o);
    return r;
  }
}, Pr = class extends gn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  InterpolantFactoryMethodLinear(e) {
    return new pf(this.times, this.values, this.getValueSize(), e);
  }
};
Pr.prototype.ValueTypeName = "quaternion";
Pr.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ji = class extends gn {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
Ji.prototype.ValueTypeName = "string";
Ji.prototype.ValueBufferType = Array;
Ji.prototype.DefaultInterpolation = br;
Ji.prototype.InterpolantFactoryMethodLinear = void 0;
Ji.prototype.InterpolantFactoryMethodSmooth = void 0;
var Ds = class extends gn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
Ds.prototype.ValueTypeName = "vector";
var mf = class {
  constructor(e = "", t = -1, n = [], i = Vu) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = An(), this.userData = {}, this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let s = 0, a = n.length; s !== a; ++s) t.push(vf(n[s]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r.userData = JSON.parse(e.userData || "{}"), r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = {
      name: e.name,
      duration: e.duration,
      tracks: t,
      uuid: e.uuid,
      blendMode: e.blendMode,
      userData: JSON.stringify(e.userData)
    };
    for (let r = 0, s = n.length; r !== s; ++r) t.push(gn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, s = [];
    for (let a = 0; a < r; a++) {
      let o = [], l = [];
      o.push((a + r - 1) % r, a, (a + 1) % r), l.push(0, 1, 0);
      const c = af(o);
      o = Xo(o, 1, c), l = Xo(l, 1, c), !i && o[0] === 0 && (o.push(r), l.push(l[0])), s.push(new Cr(".morphTargetInfluences[" + t[a].name + "]", o, l).scale(1 / n));
    }
    return new this(e, -1, s);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let a = 0, o = e.length; a < o; a++) {
      const l = e[a], c = l.name.match(r);
      if (c && c.length > 1) {
        const h = c[1];
        let u = i[h];
        u || (i[h] = u = []), u.push(l);
      }
    }
    const s = [];
    for (const a in i) s.push(this.CreateFromMorphTargetSequence(a, i[a], t, n));
    return s;
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let n = 0; n < this.tracks.length; n++) e.push(this.tracks[n].clone());
    const t = new this.constructor(this.name, this.duration, e, this.blendMode);
    return t.userData = JSON.parse(JSON.stringify(this.userData)), t;
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
};
function gf(e) {
  switch (e.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Cr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ds;
    case "color":
      return Nc;
    case "quaternion":
      return Pr;
    case "bool":
    case "boolean":
      return Zi;
    case "string":
      return Ji;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
}
function vf(e) {
  if (e.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = gf(e.type);
  if (e.times === void 0) {
    const i = [], r = [];
    of(e.keys, i, r, "value"), e.times = i, e.values = r;
  }
  let n;
  return t.parse !== void 0 ? n = t.parse(e) : n = new t(e.name, e.times, e.values, e.interpolation), mr(e.settings) && (n.settings = {
    inTangents: Jn(e.settings.inTangents, Float32Array),
    outTangents: Jn(e.settings.outTangents, Float32Array)
  }), n;
}
var Bn = {
  enabled: !1,
  files: {},
  add: function(e, t) {
    this.enabled !== !1 && (Ko(e) || (this.files[e] = t));
  },
  get: function(e) {
    if (this.enabled !== !1 && !Ko(e))
      return this.files[e];
  },
  remove: function(e) {
    delete this.files[e];
  },
  clear: function() {
    this.files = {};
  }
};
function Ko(e) {
  try {
    const t = e.slice(e.indexOf(":") + 1);
    return new URL(t).protocol === "blob:";
  } catch {
    return !1;
  }
}
var _f = class {
  constructor(e, t, n) {
    const i = this;
    let r = !1, s = 0, a = 0, o;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(c) {
      a++, r === !1 && i.onStart !== void 0 && i.onStart(c, s, a), r = !0;
    }, this.itemEnd = function(c) {
      s++, i.onProgress !== void 0 && i.onProgress(c, s, a), s === a && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(c) {
      i.onError !== void 0 && i.onError(c);
    }, this.resolveURL = function(c) {
      return c = c.normalize("NFC"), o ? o(c) : c;
    }, this.setURLModifier = function(c) {
      return o = c, this;
    }, this.addHandler = function(c, h) {
      return l.push(c, h), this;
    }, this.removeHandler = function(c) {
      const h = l.indexOf(c);
      return h !== -1 && l.splice(h, 2), this;
    }, this.getHandler = function(c) {
      for (let h = 0, u = l.length; h < u; h += 2) {
        const d = l[h], f = l[h + 1];
        if (d.global && (d.lastIndex = 0), d.test(c)) return f;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}, Mf = /* @__PURE__ */ new _f(), Qi = class {
  constructor(e) {
    this.manager = e !== void 0 ? e : Mf, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, this.priority = "auto", this.cache = "default", typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
  setPriority(e) {
    return this.priority = e, this;
  }
  setCache(e) {
    return this.cache = e, this;
  }
  abort() {
    return this;
  }
};
Qi.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var On = {}, Sf = class extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}, Uc = class extends Qi {
  constructor(e) {
    super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Bn.get(`file:${e}`);
    if (r !== void 0) {
      this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0);
      return;
    }
    if (On[e] !== void 0) {
      On[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    On[e] = [], On[e].push({
      onLoad: t,
      onProgress: n,
      onError: i
    });
    const s = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin",
      priority: this.priority,
      cache: this.cache,
      signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal
    }), a = this.mimeType, o = this.responseType;
    fetch(s).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && xe("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l;
        const c = On[e], h = l.body.getReader(), u = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), d = u ? parseInt(u) : 0, f = d !== 0;
        let g = 0;
        const _ = new ReadableStream({ start(m) {
          p();
          function p() {
            h.read().then(({ done: M, value: E }) => {
              if (M) m.close();
              else {
                g += E.byteLength;
                const S = new ProgressEvent("progress", {
                  lengthComputable: f,
                  loaded: g,
                  total: d
                });
                for (let b = 0, A = c.length; b < A; b++) {
                  const v = c[b];
                  v.onProgress && v.onProgress(S);
                }
                m.enqueue(E), p();
              }
            }, (M) => {
              m.error(M);
            });
          }
        } });
        return new Response(_);
      } else throw new Sf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (o) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((c) => new DOMParser().parseFromString(c, a));
        case "json":
          return l.json();
        default:
          if (a === "") return l.text();
          {
            const c = /charset="?([^;"\s]*)"?/i.exec(a), h = c && c[1] ? c[1].toLowerCase() : void 0, u = new TextDecoder(h);
            return l.arrayBuffer().then((d) => u.decode(d));
          }
      }
    }).then((l) => {
      Bn.add(`file:${e}`, l);
      const c = On[e];
      delete On[e];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h];
        d.onLoad && d.onLoad(l);
      }
    }).catch((l) => {
      const c = On[e];
      if (c === void 0)
        throw this.manager.itemError(e), l;
      delete On[e];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h];
        d.onError && d.onError(l);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}, Pi = /* @__PURE__ */ new WeakMap(), yf = class extends Qi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = Bn.get(`image:${e}`);
    if (s !== void 0) {
      if (s.complete === !0)
        r.manager.itemStart(e), setTimeout(function() {
          t && t(s), r.manager.itemEnd(e);
        }, 0);
      else {
        let h = Pi.get(s);
        h === void 0 && (h = [], Pi.set(s, h)), h.push({
          onLoad: t,
          onError: i
        });
      }
      return s;
    }
    const a = Rr("img");
    function o() {
      c(), t && t(this);
      const h = Pi.get(this) || [];
      for (let u = 0; u < h.length; u++) {
        const d = h[u];
        d.onLoad && d.onLoad(this);
      }
      Pi.delete(this), r.manager.itemEnd(e);
    }
    function l(h) {
      c(), i && i(h), Bn.remove(`image:${e}`);
      const u = Pi.get(this) || [];
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        f.onError && f.onError(h);
      }
      Pi.delete(this), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function c() {
      a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), Bn.add(`image:${e}`, a), r.manager.itemStart(e), a.fetchPriority = this.priority, a.src = e, a;
  }
}, xf = class extends Qi {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new Wt(), s = new yf(this.manager);
    return s.setPriority(this.priority), s.setCache(this.cache), s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}, Ur = class extends _t {
  static registerNode(e) {
    this.prototype._lightNode = e;
  }
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ce(e), this.intensity = t;
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
  }
}, $o = class extends Ur {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ce(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.groundColor = this.groundColor.getHex(), t;
  }
}, fa = /* @__PURE__ */ new Ge(), Zo = /* @__PURE__ */ new B(), Jo = /* @__PURE__ */ new B(), Ga = class {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ke(512, 512), this.mapType = ni, this.map = null, this.mapPass = null, this.matrix = new Ge(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new wr(), this._frameExtents = new ke(1, 1), this._viewportCount = 1, this._viewports = [new st(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getCamera() {
    return this.camera;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera;
    Zo.setFromMatrixPosition(e.matrixWorld), t.position.copy(Zo), Jo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(Jo), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
  }
  _updateMatrix(e, t, n, i) {
    fa.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(fa, e.coordinateSystem, e.reversedDepth);
    const r = this._frameExtents, s = i ? i.z / r.x : 1, a = i ? i.w / r.y : 1, o = i ? i.x / r.x : 0, l = i ? i.y / r.y : 0;
    e.coordinateSystem === 2001 || e.reversedDepth ? t.set(0.5 * s, 0, 0, 0.5 * s + o, 0, 0.5 * a, 0, 0.5 * a + l, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(0.5 * s, 0, 0, 0.5 * s + o, 0, 0.5 * a, 0, 0.5 * a + l, 0, 0, 0.5, 0.5, 0, 0, 0, 1), t.multiply(fa);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.mapType = e.mapType, this.biasNode = e.biasNode, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return e.intensity = this.intensity, e.bias = this.bias, e.normalBias = this.normalBias, e.radius = this.radius, e.blurSamples = this.blurSamples, e.mapSize = this.mapSize.toArray(), e.mapType = this.mapType, e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}, us = /* @__PURE__ */ new B(), ds = /* @__PURE__ */ new Hn(), _n = /* @__PURE__ */ new B(), Oc = class extends _t {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ge(), this.projectionMatrix = new Ge(), this.projectionMatrixInverse = new Ge(), this.coordinateSystem = gi, this._reversedDepth = !1;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorld.decompose(us, ds, _n), _n.x === 1 && _n.y === 1 && _n.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(us, ds, _n.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, n = !1) {
    super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(us, ds, _n), _n.x === 1 && _n.y === 1 && _n.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(us, ds, _n.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Yn = /* @__PURE__ */ new B(), Qo = /* @__PURE__ */ new ke(), jo = /* @__PURE__ */ new ke(), Vt = class extends Oc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Gi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Sr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Gi * 2 * Math.atan(Math.tan(Sr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Yn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Yn.x, Yn.y).multiplyScalar(-e / Yn.z), Yn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Yn.x, Yn.y).multiplyScalar(-e / Yn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Qo, jo), t.subVectors(jo, Qo);
  }
  setViewOffset(e, t, n, i, r, s) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Sr * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const s = this.view;
    if (this.view !== null && this.view.enabled) {
      const o = s.fullWidth, l = s.fullHeight;
      r += s.offsetX * i / o, t -= s.offsetY * n / l, i *= s.width / o, n *= s.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}, Tf = class extends Ga {
  constructor() {
    super(new Vt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1, this.aspect = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Gi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height * this.aspect, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this.aspect = e.aspect, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.focus = this.focus, e.aspect = this.aspect, e;
  }
}, Ef = class extends Ur {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, s = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.map = null, this.shadow = new Tf();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.map = e.map, this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.distance = this.distance, t.object.angle = this.angle, t.object.decay = this.decay, t.object.penumbra = this.penumbra, t.object.target = this.target.uuid, this.map && this.map.isTexture && (t.object.map = this.map.toJSON(e).uuid), t.object.shadow = this.shadow.toJSON(), t;
  }
}, bf = class extends Ga {
  constructor() {
    super(new Vt(90, 1, 0.5, 500)), this.isPointLightShadow = !0;
  }
}, Fc = class extends Ur {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new bf();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
  }
}, Va = class extends Oc {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, s) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, s = n + e, a = i + t, o = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, c = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, s = r + l * this.view.width, a -= c * this.view.offsetY, o = a - c * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}, Af = class extends Ga {
  constructor() {
    super(new Va(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}, gr = class extends Ur {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.shadow = new Af();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.shadow = this.shadow.toJSON(), t.object.target = this.target.uuid, t;
  }
}, Rf = class extends Ur {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}, xr = class {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}, pa = /* @__PURE__ */ new WeakMap(), wf = class extends Qi {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && xe("ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && xe("ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }, this._abortController = new AbortController();
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = Bn.get(`image-bitmap:${e}`);
    if (s !== void 0) {
      if (r.manager.itemStart(e), s.then) {
        s.then((l) => {
          pa.has(s) === !0 ? (i && i(pa.get(s)), r.manager.itemError(e), r.manager.itemEnd(e)) : (t && t(l), r.manager.itemEnd(e));
        });
        return;
      }
      setTimeout(function() {
        t && t(s), r.manager.itemEnd(e);
      }, 0);
      return;
    }
    const a = {};
    a.credentials = this.withCredentials || this.crossOrigin !== "anonymous" ? "include" : "same-origin", a.headers = this.requestHeader, a.priority = this.priority, a.cache = this.cache, a.signal = typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal;
    const o = fetch(e, a).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign({}, r.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return Bn.add(`image-bitmap:${e}`, l), t && t(l), r.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), pa.set(o, l), Bn.remove(`image-bitmap:${e}`), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    Bn.add(`image-bitmap:${e}`, o), r.manager.itemStart(e);
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}, Li = -90, Ii = 1, Aa = class extends _t {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Vt(Li, Ii, e, t);
    i.layers = this.layers, this.add(i);
    const r = new Vt(Li, Ii, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Vt(Li, Ii, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Vt(Li, Ii, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Vt(Li, Ii, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Vt(Li, Ii, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, s, a, o] = t;
    for (const l of t) this.remove(l);
    if (e === 2e3)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
    else if (e === 2001)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, s, a, o, l, c] = this.children, h = e.getRenderTarget(), u = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), f = e.xr.enabled;
    e.xr.enabled = !1;
    const g = n.texture.mipmapsAutoUpdate;
    n.texture.mipmapsAutoUpdate = !1;
    let _ = !1;
    e.isWebGLRenderer === !0 ? _ = e.state.buffers.depth.getReversed() : _ = e.reversedDepthBuffer, e.setRenderTarget(n, 0, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, r), e.setRenderTarget(n, 1, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 2, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 3, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 4, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.mipmapsAutoUpdate = g, e.setRenderTarget(n, 5, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(h, u, d), e.xr.enabled = f, n.texture.needsPMREMUpdate = !0;
  }
}, Cf = class extends Vt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e, this.perCameraFrustumCulled = !1;
  }
}, Pf = "\\[\\]\\.:\\/", Lf = /* @__PURE__ */ new RegExp("[\\[\\]\\.:\\/]", "g"), Wa = "[^\\[\\]\\.:\\/]", If = "[^" + Pf.replace("\\.", "") + "]", Df = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Wa), Nf = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", If), Uf = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Wa), Of = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Wa), Ff = new RegExp("^" + Df + Nf + Uf + Of + "$"), Bf = [
  "material",
  "materials",
  "bones",
  "map"
], kf = class {
  constructor(e, t, n) {
    const i = n || ut.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
  }
}, ut = class Ui {
  constructor(t, n, i) {
    this.path = n, this.parsedPath = i || Ui.parseTrackName(n), this.node = Ui.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, n, i) {
    return t && t.isAnimationObjectGroup ? new Ui.Composite(t, n, i) : new Ui(t, n, i);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(Lf, "");
  }
  static parseTrackName(t) {
    const n = Ff.exec(t);
    if (n === null) throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + t);
    const i = {
      nodeName: n[2],
      objectName: n[3],
      objectIndex: n[4],
      propertyName: n[5],
      propertyIndex: n[6]
    }, r = i.nodeName && i.nodeName.lastIndexOf(".");
    if (r !== void 0 && r !== -1) {
      const s = i.nodeName.substring(r + 1);
      Bf.indexOf(s) !== -1 && (i.nodeName = i.nodeName.substring(0, r), i.objectName = s);
    }
    if (i.propertyName === null || i.propertyName.length === 0) throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + t);
    return i;
  }
  static findNode(t, n) {
    if (n === void 0 || n === "" || n === "." || n === -1 || n === t.name || n === t.uuid) return t;
    if (t.skeleton) {
      const i = t.skeleton.getBoneByName(n);
      if (i !== void 0) return i;
    }
    if (t.children) {
      const i = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === n || o.uuid === n) return o;
          const l = i(o.children);
          if (l) return l;
        }
        return null;
      }, r = i(t.children);
      if (r) return r;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(t, n) {
    t[n] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, n) {
    const i = this.resolvedProperty;
    for (let r = 0, s = i.length; r !== s; ++r) t[n++] = i[r];
  }
  _getValue_arrayElement(t, n) {
    t[n] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, n) {
    this.resolvedProperty.toArray(t, n);
  }
  _setValue_direct(t, n) {
    this.targetObject[this.propertyName] = t[n];
  }
  _setValue_direct_setNeedsUpdate(t, n) {
    this.targetObject[this.propertyName] = t[n], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, n) {
    this.targetObject[this.propertyName] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_array(t, n) {
    const i = this.resolvedProperty;
    for (let r = 0, s = i.length; r !== s; ++r) i[r] = t[n++];
  }
  _setValue_array_setNeedsUpdate(t, n) {
    const i = this.resolvedProperty;
    for (let r = 0, s = i.length; r !== s; ++r) i[r] = t[n++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, n) {
    const i = this.resolvedProperty;
    for (let r = 0, s = i.length; r !== s; ++r) i[r] = t[n++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(t, n) {
    this.resolvedProperty[this.propertyIndex] = t[n];
  }
  _setValue_arrayElement_setNeedsUpdate(t, n) {
    this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, n) {
    this.resolvedProperty[this.propertyIndex] = t[n], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_fromArray(t, n) {
    this.resolvedProperty.fromArray(t, n);
  }
  _setValue_fromArray_setNeedsUpdate(t, n) {
    this.resolvedProperty.fromArray(t, n), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, n) {
    this.resolvedProperty.fromArray(t, n), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(t, n) {
    this.bind(), this.getValue(t, n);
  }
  _setValue_unbound(t, n) {
    this.bind(), this.setValue(t, n);
  }
  bind() {
    let t = this.node;
    const n = this.parsedPath, i = n.objectName, r = n.propertyName;
    let s = n.propertyIndex;
    if (t || (t = Ui.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      xe("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (i) {
      let c = n.objectIndex;
      switch (i) {
        case "materials":
          if (!t.material) {
            De("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            De("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            De("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let h = 0; h < t.length; h++) if (t[h].name === c) {
            c = h;
            break;
          }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            De("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.map) {
            De("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[i] === void 0) {
            De("PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[i];
      }
      if (c !== void 0) {
        if (t[c] === void 0) {
          De("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[c];
      }
    }
    const a = t[r];
    if (a === void 0) {
      const c = n.nodeName;
      De("PropertyBinding: Trying to update property for track: " + c + "." + r + " but it wasn't found.", t);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = t, t.isMaterial === !0 ? o = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (r === "morphTargetInfluences") {
        if (!t.geometry) {
          De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          De("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        t.morphTargetDictionary[s] !== void 0 && (s = t.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = r;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
};
ut.Composite = kf;
ut.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
ut.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
ut.prototype.GetterByBindingType = [
  ut.prototype._getValue_direct,
  ut.prototype._getValue_array,
  ut.prototype._getValue_arrayElement,
  ut.prototype._getValue_toArray
];
ut.prototype.SetterByBindingTypeAndVersioning = [
  [
    ut.prototype._setValue_direct,
    ut.prototype._setValue_direct_setNeedsUpdate,
    ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    ut.prototype._setValue_array,
    ut.prototype._setValue_array_setNeedsUpdate,
    ut.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    ut.prototype._setValue_arrayElement,
    ut.prototype._setValue_arrayElement_setNeedsUpdate,
    ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    ut.prototype._setValue_fromArray,
    ut.prototype._setValue_fromArray_setNeedsUpdate,
    ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
var i0 = class {
  static {
    this.prototype.isMatrix2 = !0;
  }
  constructor(e, t, n, i) {
    this.elements = [
      1,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, n, i);
  }
  identity() {
    return this.set(1, 0, 0, 1), this;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
    return this;
  }
  set(e, t, n, i) {
    const r = this.elements;
    return r[0] = e, r[2] = t, r[1] = n, r[3] = i, this;
  }
};
function el(e, t, n, i) {
  const r = zf(i);
  switch (n) {
    case su:
      return e * t;
    case Jl:
      return e * t / r.components * r.byteLength;
    case Ql:
      return e * t / r.components * r.byteLength;
    case As:
      return e * t * 2 / r.components * r.byteLength;
    case jl:
      return e * t * 2 / r.components * r.byteLength;
    case au:
      return e * t * 3 / r.components * r.byteLength;
    case Tr:
      return e * t * 4 / r.components * r.byteLength;
    case ec:
      return e * t * 4 / r.components * r.byteLength;
    case ou:
    case lu:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case cu:
    case hu:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case du:
    case pu:
      return Math.max(e, 16) * Math.max(t, 8) / 4;
    case uu:
    case fu:
      return Math.max(e, 8) * Math.max(t, 8) / 2;
    case mu:
    case gu:
    case _u:
    case Mu:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case vu:
    case Su:
    case yu:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case xu:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Tu:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Eu:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case bu:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Au:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Ru:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case wu:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Cu:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Pu:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Lu:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Iu:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Du:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Nu:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Uu:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Ou:
    case Fu:
    case Bu:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case ku:
    case zu:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case Hu:
    case Gu:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
function zf(e) {
  switch (e) {
    case ni:
    case eu:
      return {
        byteLength: 1,
        components: 1
      };
    case Kl:
    case tu:
    case ii:
      return {
        byteLength: 2,
        components: 1
      };
    case $l:
    case Zl:
      return {
        byteLength: 2,
        components: 4
      };
    case mi:
    case nu:
    case Ki:
      return {
        byteLength: 4,
        components: 1
      };
    case iu:
    case ru:
      return {
        byteLength: 4,
        components: 3
      };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "187" } }));
typeof window < "u" && (window.__THREE__ ? xe("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "187");
function Bc() {
  let e = null, t = !1, n = null, i = null;
  function r(s, a) {
    i = e.requestAnimationFrame(r), n(s, a);
  }
  return {
    start: function() {
      t !== !0 && n !== null && e !== null && (i = e.requestAnimationFrame(r), t = !0);
    },
    stop: function() {
      e !== null && e.cancelAnimationFrame(i), t = !1;
    },
    setAnimationLoop: function(s) {
      n = s;
    },
    setContext: function(s) {
      e = s;
    }
  };
}
function Hf(e) {
  const t = /* @__PURE__ */ new WeakMap();
  function n(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, d = e.createBuffer();
    e.bindBuffer(l, d), e.bufferData(l, c, h), o.onUploadCallback();
    let f;
    if (c instanceof Float32Array) f = e.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) f = e.HALF_FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? f = e.HALF_FLOAT : f = e.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) f = e.SHORT;
    else if (c instanceof Uint32Array) f = e.UNSIGNED_INT;
    else if (c instanceof Int32Array) f = e.INT;
    else if (c instanceof Int8Array) f = e.BYTE;
    else if (c instanceof Uint8Array) f = e.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) f = e.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: d,
      type: f,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: u
    };
  }
  function i(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (e.bindBuffer(c, o), u.length === 0) e.bufferSubData(c, 0, h);
    else {
      u.sort((f, g) => f.start - g.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const g = u[d], _ = u[f];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, _.start + _.count - g.start) : (++d, u[d] = _);
      }
      u.length = d + 1;
      for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f];
        e.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (e.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const c = t.get(o);
    if (c === void 0) t.set(o, n(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(c.buffer, o, l), c.version = o.version;
    }
  }
  return {
    get: r,
    remove: s,
    update: a
  };
}
var ze = {
  alphahash_fragment: `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  alphahash_pars_fragment: `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  alphamap_fragment: `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  alphamap_pars_fragment: `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  alphatest_fragment: `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  alphatest_pars_fragment: `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  aomap_fragment: `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  aomap_pars_fragment: `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  batching_pars_vertex: `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,
  batching_vertex: `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  begin_vertex: `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  beginnormal_vertex: `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  bsdfs: `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  iridescence_fragment: `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  bumpmap_pars_fragment: `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  clipping_planes_fragment: `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  clipping_planes_pars_fragment: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  clipping_planes_pars_vertex: `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  clipping_planes_vertex: `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  color_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
  color_pars_fragment: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
  color_pars_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
  color_vertex: `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,
  common: `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  defaultnormal_vertex: `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,
  displacementmap_pars_vertex: `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  displacementmap_vertex: `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  emissivemap_fragment: `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  emissivemap_pars_fragment: `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  colorspace_pars_fragment: `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  envmap_fragment: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,
  envmap_common_pars_fragment: `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,
  envmap_pars_fragment: `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  envmap_pars_vertex: `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  envmap_physical_pars_fragment: `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,
  envmap_vertex: `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  fog_vertex: `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  fog_pars_vertex: `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  fog_fragment: `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  fog_pars_fragment: `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  gradientmap_pars_fragment: `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  lightmap_pars_fragment: `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  lights_lambert_fragment: `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  lights_lambert_pars_fragment: `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  lights_pars_begin: `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,
  lights_toon_fragment: `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  lights_toon_pars_fragment: `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  lights_phong_fragment: `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  lights_phong_pars_fragment: `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  lights_physical_fragment: `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  lights_physical_pars_fragment: `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  lights_fragment_begin: `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  lights_fragment_maps: `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  lights_fragment_end: `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  lightprobes_pars_fragment: `#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,
  logdepthbuf_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  logdepthbuf_pars_fragment: `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_pars_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  logdepthbuf_vertex: `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  map_fragment: `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  map_pars_fragment: `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  map_particle_fragment: `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  map_particle_pars_fragment: `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  metalnessmap_fragment: `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  metalnessmap_pars_fragment: `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  morphinstance_vertex: `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  morphcolor_vertex: `#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  morphnormal_vertex: `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  morphtarget_pars_vertex: `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  morphtarget_vertex: `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  normal_fragment_begin: `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  normal_fragment_maps: `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  normal_pars_fragment: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_pars_vertex: `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  normal_vertex: `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
  normalmap_pars_fragment: `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  clearcoat_normal_fragment_begin: `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  clearcoat_normal_fragment_maps: `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  clearcoat_pars_fragment: `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  iridescence_pars_fragment: `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  opaque_fragment: `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  packing: `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,
  premultiplied_alpha_fragment: `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  project_vertex: `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  dithering_fragment: `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  dithering_pars_fragment: `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  roughnessmap_fragment: `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  roughnessmap_pars_fragment: `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  shadowmap_pars_fragment: `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
  shadowmap_pars_vertex: `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  shadowmap_vertex: `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  shadowmask_pars_fragment: `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  skinbase_vertex: `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  skinning_pars_vertex: `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  skinning_vertex: `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  skinnormal_vertex: `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  specularmap_fragment: `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  specularmap_pars_fragment: `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  tonemapping_fragment: `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  tonemapping_pars_fragment: `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  transmission_fragment: `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  transmission_pars_fragment: `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  uv_pars_fragment: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_pars_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  uv_vertex: `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  worldpos_vertex: `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
  background_vert: `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  background_frag: `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  backgroundCube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  backgroundCube_frag: `uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  cube_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  cube_frag: `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  depth_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  depth_frag: `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  distance_vert: `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  distance_frag: `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
  equirect_vert: `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  equirect_frag: `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  linedashed_vert: `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  linedashed_frag: `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  meshbasic_vert: `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  meshbasic_frag: `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshlambert_vert: `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshlambert_frag: `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshmatcap_vert: `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  meshmatcap_frag: `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshnormal_vert: `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  meshnormal_frag: `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  meshphong_vert: `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshphong_frag: `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshphysical_vert: `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  meshphysical_frag: `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  meshtoon_vert: `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  meshtoon_frag: `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  points_vert: `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  points_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  shadow_vert: `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  shadow_frag: `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  sprite_vert: `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  sprite_frag: `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
}, me = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ce(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Be() },
    reflectivity: { value: 1 },
    ior: { value: 1.5 },
    refractionRatio: { value: 0.98 },
    dfgLUT: { value: null }
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Be() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Be() },
    normalScale: { value: /* @__PURE__ */ new ke(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Be() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  gradientmap: { gradientMap: { value: null } },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ce(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    sunLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    sunLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    sunShadowMatrix: { value: [] },
    sunShadowCascade: { value: [] },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {}
      }
    },
    directionalLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMatrix: { value: [] },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {}
      }
    },
    spotLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotLightMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {}
      }
    },
    pointLightShadows: {
      value: [],
      properties: {
        shadowIntensity: 1,
        shadowBias: {},
        shadowNormalBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMatrix: { value: [] },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    },
    ltc_1: { value: null },
    ltc_2: { value: null },
    probesSH: { value: [] },
    probesMin: { value: [] },
    probesMax: { value: [] },
    probesResolution: { value: [] }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ce(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Be() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ce(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ke(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  }
}, yn = {
  basic: {
    uniforms: /* @__PURE__ */ Ft([
      me.common,
      me.specularmap,
      me.envmap,
      me.aomap,
      me.lightmap,
      me.fog
    ]),
    vertexShader: ze.meshbasic_vert,
    fragmentShader: ze.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ft([
      me.common,
      me.specularmap,
      me.envmap,
      me.aomap,
      me.lightmap,
      me.emissivemap,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.fog,
      me.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ce(0) },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshlambert_vert,
    fragmentShader: ze.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ft([
      me.common,
      me.specularmap,
      me.envmap,
      me.aomap,
      me.lightmap,
      me.emissivemap,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.fog,
      me.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ce(0) },
        specular: { value: /* @__PURE__ */ new Ce(1118481) },
        shininess: { value: 30 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshphong_vert,
    fragmentShader: ze.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ft([
      me.common,
      me.envmap,
      me.aomap,
      me.lightmap,
      me.emissivemap,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.roughnessmap,
      me.metalnessmap,
      me.fog,
      me.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ce(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: ze.meshphysical_vert,
    fragmentShader: ze.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ft([
      me.common,
      me.aomap,
      me.lightmap,
      me.emissivemap,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.gradientmap,
      me.fog,
      me.lights,
      { emissive: { value: /* @__PURE__ */ new Ce(0) } }
    ]),
    vertexShader: ze.meshtoon_vert,
    fragmentShader: ze.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ft([
      me.common,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.fog,
      { matcap: { value: null } }
    ]),
    vertexShader: ze.meshmatcap_vert,
    fragmentShader: ze.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ft([me.points, me.fog]),
    vertexShader: ze.points_vert,
    fragmentShader: ze.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ft([
      me.common,
      me.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: ze.linedashed_vert,
    fragmentShader: ze.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Ft([me.common, me.displacementmap]),
    vertexShader: ze.depth_vert,
    fragmentShader: ze.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ft([
      me.common,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      { opacity: { value: 1 } }
    ]),
    vertexShader: ze.meshnormal_vert,
    fragmentShader: ze.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ft([me.sprite, me.fog]),
    vertexShader: ze.sprite_vert,
    fragmentShader: ze.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Be() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: ze.background_vert,
    fragmentShader: ze.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Be() }
    },
    vertexShader: ze.backgroundCube_vert,
    fragmentShader: ze.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: ze.cube_vert,
    fragmentShader: ze.cube_frag
  },
  equirect: {
    uniforms: { tEquirect: { value: null } },
    vertexShader: ze.equirect_vert,
    fragmentShader: ze.equirect_frag
  },
  distance: {
    uniforms: /* @__PURE__ */ Ft([
      me.common,
      me.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new B() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ze.distance_vert,
    fragmentShader: ze.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Ft([
      me.lights,
      me.fog,
      {
        color: { value: /* @__PURE__ */ new Ce(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: ze.shadow_vert,
    fragmentShader: ze.shadow_frag
  }
};
yn.physical = {
  uniforms: /* @__PURE__ */ Ft([yn.standard.uniforms, {
    clearcoat: { value: 0 },
    clearcoatMap: { value: null },
    clearcoatMapTransform: { value: /* @__PURE__ */ new Be() },
    clearcoatNormalMap: { value: null },
    clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Be() },
    clearcoatNormalScale: { value: /* @__PURE__ */ new ke(1, 1) },
    clearcoatRoughness: { value: 0 },
    clearcoatRoughnessMap: { value: null },
    clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
    diffuseRoughness: { value: 0 },
    diffuseRoughnessMap: { value: null },
    diffuseRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
    dispersion: { value: 0 },
    retroreflectivity: { value: 0 },
    iridescence: { value: 0 },
    iridescenceMap: { value: null },
    iridescenceMapTransform: { value: /* @__PURE__ */ new Be() },
    iridescenceIOR: { value: 1.3 },
    iridescenceThicknessMinimum: { value: 100 },
    iridescenceThicknessMaximum: { value: 400 },
    iridescenceThicknessMap: { value: null },
    iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Be() },
    sheen: { value: 0 },
    sheenColor: { value: /* @__PURE__ */ new Ce(0) },
    sheenColorMap: { value: null },
    sheenColorMapTransform: { value: /* @__PURE__ */ new Be() },
    sheenRoughness: { value: 1 },
    sheenRoughnessMap: { value: null },
    sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
    transmission: { value: 0 },
    transmissionMap: { value: null },
    transmissionMapTransform: { value: /* @__PURE__ */ new Be() },
    transmissionSamplerSize: { value: /* @__PURE__ */ new ke() },
    transmissionSamplerMap: { value: null },
    thickness: { value: 0 },
    thicknessMap: { value: null },
    thicknessMapTransform: { value: /* @__PURE__ */ new Be() },
    attenuationDistance: { value: 0 },
    attenuationColor: { value: /* @__PURE__ */ new Ce(0) },
    specularColor: { value: /* @__PURE__ */ new Ce(1, 1, 1) },
    specularColorMap: { value: null },
    specularColorMapTransform: { value: /* @__PURE__ */ new Be() },
    specularIntensity: { value: 1 },
    specularIntensityMap: { value: null },
    specularIntensityMapTransform: { value: /* @__PURE__ */ new Be() },
    anisotropyVector: { value: /* @__PURE__ */ new ke() },
    anisotropyMap: { value: null },
    anisotropyMapTransform: { value: /* @__PURE__ */ new Be() }
  }]),
  vertexShader: ze.meshphysical_vert,
  fragmentShader: ze.meshphysical_frag
};
var fs = {
  r: 0,
  b: 0,
  g: 0
}, Gf = /* @__PURE__ */ new Ge(), kc = /* @__PURE__ */ new Be();
kc.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Vf(e, t, n, i, r, s) {
  const a = new Ce(0);
  let o = r === !0 ? 0 : 1, l, c, h = null, u = 0, d = null;
  function f(M) {
    let E = M.isScene === !0 ? M.background : null;
    if (E && E.isTexture) {
      const S = M.backgroundBlurriness > 0;
      E = t.get(E, S);
    }
    return E;
  }
  function g(M) {
    let E = !1;
    const S = f(M);
    S === null ? m(a, o) : S && S.isColor && (m(S, 1), E = !0);
    const b = e.xr.getEnvironmentBlendMode();
    b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, s) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, s), (e.autoClear || E) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
  }
  function _(M, E) {
    const S = f(E);
    S && S.isCubeTexture ? (c === void 0 && (c = new Xt(new Dr(1, 1, 1), new vi({
      name: "BackgroundCubeMaterial",
      uniforms: Xi(yn.backgroundCube.uniforms),
      vertexShader: yn.backgroundCube.vertexShader,
      fragmentShader: yn.backgroundCube.fragmentShader,
      side: 1,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(b, A, v) {
      this.matrixWorld.copyPosition(v.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(c)), c.material.uniforms.envMap.value = S, c.material.uniforms.backgroundBlurriness.value = E.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(E.backgroundRotation)).transpose(), S.isRenderTargetTexture === !1 && c.material.uniforms.backgroundRotation.value.premultiply(kc), c.material.toneMapped = qe.getTransfer(S.colorSpace) !== ws, (h !== S || u !== S.version || d !== e.toneMapping) && (c.material.needsUpdate = !0, h = S, u = S.version, d = e.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null)) : S && S.isTexture && (l === void 0 && (l = new Xt(new Rc(2, 2), new vi({
      name: "BackgroundMaterial",
      uniforms: Xi(yn.background.uniforms),
      vertexShader: yn.background.vertexShader,
      fragmentShader: yn.background.fragmentShader,
      side: 0,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(l)), l.material.uniforms.t2D.value = S, l.material.uniforms.backgroundIntensity.value = E.backgroundIntensity, l.material.toneMapped = qe.getTransfer(S.colorSpace) !== ws, S.matrixAutoUpdate === !0 && S.updateMatrix(), l.material.uniforms.uvTransform.value.copy(S.matrix), (h !== S || u !== S.version || d !== e.toneMapping) && (l.material.needsUpdate = !0, h = S, u = S.version, d = e.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function m(M, E) {
    M.getRGB(fs, Ic(e)), n.buffers.color.setClear(fs.r, fs.g, fs.b, E, s);
  }
  function p() {
    c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(M, E = 1) {
      a.set(M), o = E, m(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(M) {
      o = M, m(a, o);
    },
    render: g,
    addToRenderList: _,
    dispose: p
  };
}
function Wf(e, t) {
  const n = e.getParameter(e.MAX_VERTEX_ATTRIBS), i = {}, r = d(null);
  let s = r, a = !1;
  function o(P, U, q, I, V) {
    let $ = !1;
    const k = u(P, I, q, U);
    s !== k && (s = k, c(s.object)), $ = f(P, I, q, V), $ && g(P, I, q, V), V !== null && t.update(V, e.ELEMENT_ARRAY_BUFFER), ($ || a) && (a = !1, S(P, U, q, I), V !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function l() {
    return e.createVertexArray();
  }
  function c(P) {
    return e.bindVertexArray(P);
  }
  function h(P) {
    return e.deleteVertexArray(P);
  }
  function u(P, U, q, I) {
    const V = I.wireframe === !0;
    let $ = i[U.id];
    $ === void 0 && ($ = {}, i[U.id] = $);
    const k = P.isInstancedMesh === !0 ? P.id : 0;
    let ae = $[k];
    ae === void 0 && (ae = {}, $[k] = ae);
    let Y = ae[q.id];
    Y === void 0 && (Y = {}, ae[q.id] = Y);
    let K = Y[V];
    return K === void 0 && (K = d(l()), Y[V] = K), K;
  }
  function d(P) {
    const U = [], q = [], I = [];
    for (let V = 0; V < n; V++)
      U[V] = 0, q[V] = 0, I[V] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: U,
      enabledAttributes: q,
      attributeDivisors: I,
      object: P,
      attributes: {},
      index: null
    };
  }
  function f(P, U, q, I) {
    const V = s.attributes, $ = U.attributes;
    let k = 0;
    const ae = q.getAttributes();
    for (const Y in ae) if (ae[Y].location >= 0) {
      const K = V[Y];
      let ie = $[Y];
      if (ie === void 0 && (Y === "instanceMatrix" && P.instanceMatrix && (ie = P.instanceMatrix), Y === "instanceColor" && P.instanceColor && (ie = P.instanceColor)), K === void 0 || K.attribute !== ie || ie && K.data !== ie.data) return !0;
      k++;
    }
    return s.attributesNum !== k || s.index !== I;
  }
  function g(P, U, q, I) {
    const V = {}, $ = U.attributes;
    let k = 0;
    const ae = q.getAttributes();
    for (const Y in ae) if (ae[Y].location >= 0) {
      let K = $[Y];
      K === void 0 && (Y === "instanceMatrix" && P.instanceMatrix && (K = P.instanceMatrix), Y === "instanceColor" && P.instanceColor && (K = P.instanceColor));
      const ie = {};
      ie.attribute = K, K && K.data && (ie.data = K.data), V[Y] = ie, k++;
    }
    s.attributes = V, s.attributesNum = k, s.index = I;
  }
  function _() {
    const P = s.newAttributes;
    for (let U = 0, q = P.length; U < q; U++) P[U] = 0;
  }
  function m(P) {
    p(P, 0);
  }
  function p(P, U) {
    const q = s.newAttributes, I = s.enabledAttributes, V = s.attributeDivisors;
    q[P] = 1, I[P] === 0 && (e.enableVertexAttribArray(P), I[P] = 1), V[P] !== U && (e.vertexAttribDivisor(P, U), V[P] = U);
  }
  function M() {
    const P = s.newAttributes, U = s.enabledAttributes;
    for (let q = 0, I = U.length; q < I; q++) U[q] !== P[q] && (e.disableVertexAttribArray(q), U[q] = 0);
  }
  function E(P, U, q, I, V, $, k) {
    k === !0 ? e.vertexAttribIPointer(P, U, q, V, $) : e.vertexAttribPointer(P, U, q, I, V, $);
  }
  function S(P, U, q, I) {
    _();
    const V = I.attributes, $ = q.getAttributes(), k = U.defaultAttributeValues;
    for (const ae in $) {
      const Y = $[ae];
      if (Y.location >= 0) {
        let K = V[ae];
        if (K === void 0 && (ae === "instanceMatrix" && P.instanceMatrix && (K = P.instanceMatrix), ae === "instanceColor" && P.instanceColor && (K = P.instanceColor)), K !== void 0) {
          const ie = K.normalized, Ee = K.itemSize, Z = t.get(K);
          if (Z === void 0) continue;
          const ne = Z.buffer, _e = Z.type, Ae = Z.bytesPerElement, we = _e === e.INT || _e === e.UNSIGNED_INT || K.gpuType === 1013;
          if (K.isInterleavedBufferAttribute) {
            const ue = K.data, Ve = ue.isInterleavedBuffer === !0 ? ue.stride : ue.itemSize, Je = K.offset;
            if (ue.isInstancedInterleavedBuffer || ue.isInstancedBufferAttribute) {
              for (let Pe = 0; Pe < Y.locationSize; Pe++) p(Y.location + Pe, ue.meshPerAttribute);
              P.isInstancedMesh !== !0 && I._maxInstanceCount === void 0 && (I._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else for (let Pe = 0; Pe < Y.locationSize; Pe++) m(Y.location + Pe);
            e.bindBuffer(e.ARRAY_BUFFER, ne);
            for (let Pe = 0; Pe < Y.locationSize; Pe++) E(Y.location + Pe, Ee / Y.locationSize, _e, ie, Ve * Ae, (Je + Ee / Y.locationSize * Pe) * Ae, we);
          } else {
            if (K.isInstancedBufferAttribute) {
              for (let ue = 0; ue < Y.locationSize; ue++) p(Y.location + ue, K.meshPerAttribute);
              P.isInstancedMesh !== !0 && I._maxInstanceCount === void 0 && (I._maxInstanceCount = K.meshPerAttribute * K.count);
            } else for (let ue = 0; ue < Y.locationSize; ue++) m(Y.location + ue);
            e.bindBuffer(e.ARRAY_BUFFER, ne);
            for (let ue = 0; ue < Y.locationSize; ue++) E(Y.location + ue, Ee / Y.locationSize, _e, ie, Ee * Ae, Ee / Y.locationSize * ue * Ae, we);
          }
        } else if (k !== void 0) {
          const ie = k[ae];
          if (ie !== void 0) switch (ie.length) {
            case 2:
              e.vertexAttrib2fv(Y.location, ie);
              break;
            case 3:
              e.vertexAttrib3fv(Y.location, ie);
              break;
            case 4:
              e.vertexAttrib4fv(Y.location, ie);
              break;
            default:
              e.vertexAttrib1fv(Y.location, ie);
          }
        }
      }
    }
    M();
  }
  function b() {
    w();
    for (const P in i) {
      const U = i[P];
      for (const q in U) {
        const I = U[q];
        for (const V in I) {
          const $ = I[V];
          for (const k in $)
            h($[k].object), delete $[k];
          delete I[V];
        }
      }
      delete i[P];
    }
  }
  function A(P) {
    if (i[P.id] === void 0) return;
    const U = i[P.id];
    for (const q in U) {
      const I = U[q];
      for (const V in I) {
        const $ = I[V];
        for (const k in $)
          h($[k].object), delete $[k];
        delete I[V];
      }
    }
    delete i[P.id];
  }
  function v(P) {
    for (const U in i) {
      const q = i[U];
      for (const I in q) {
        const V = q[I];
        if (V[P.id] === void 0) continue;
        const $ = V[P.id];
        for (const k in $)
          h($[k].object), delete $[k];
        delete V[P.id];
      }
    }
  }
  function T(P) {
    for (const U in i) {
      const q = i[U], I = P.isInstancedMesh === !0 ? P.id : 0, V = q[I];
      if (V !== void 0) {
        for (const $ in V) {
          const k = V[$];
          for (const ae in k)
            h(k[ae].object), delete k[ae];
          delete V[$];
        }
        delete q[I], Object.keys(q).length === 0 && delete i[U];
      }
    }
  }
  function w() {
    F(), a = !0, s !== r && (s = r, c(s.object));
  }
  function F() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: w,
    resetDefaultState: F,
    dispose: b,
    releaseStatesOfGeometry: A,
    releaseStatesOfObject: T,
    releaseStatesOfProgram: v,
    initAttributes: _,
    enableAttribute: m,
    disableUnusedAttributes: M
  };
}
function Xf(e, t, n) {
  let i;
  function r(l) {
    i = l;
  }
  function s(l, c) {
    e.drawArrays(i, l, c), n.update(c, i, 1);
  }
  function a(l, c, h) {
    h !== 0 && (e.drawArraysInstanced(i, l, c, h), n.update(c, i, h));
  }
  function o(l, c, h) {
    if (h === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, l, 0, c, 0, h);
    let u = 0;
    for (let d = 0; d < h; d++) u += c[d];
    n.update(u, i, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function qf(e, t, n, i) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const v = t.get("EXT_texture_filter_anisotropic");
      r = e.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(v) {
    return !(v !== 1023 && i.convert(v) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(v) {
    const T = v === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(v !== 1009 && v !== 1015 && !T && i.convert(v) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE));
  }
  function l(v) {
    if (v === "highp") {
      if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
      v = "mediump";
    }
    return v === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = n.precision !== void 0 ? n.precision : "highp";
  const h = l(c);
  h !== c && (xe("WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), d = n.logarithmicDepthBuffer === !0 && u === !1;
  n.reversedDepthBuffer === !0 && u === !1 && xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."), n.logarithmicDepthBuffer === !0 && u === !0 && xe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");
  const f = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), g = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = e.getParameter(e.MAX_TEXTURE_SIZE), m = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), p = e.getParameter(e.MAX_VERTEX_ATTRIBS), M = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), E = e.getParameter(e.MAX_VARYING_VECTORS), S = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), b = e.getParameter(e.MAX_SAMPLES), A = e.getParameter(e.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: g,
    maxTextureSize: _,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: M,
    maxVaryings: E,
    maxFragmentUniforms: S,
    maxSamples: b,
    samples: A
  };
}
function Yf(e) {
  const t = this;
  let n = null, i = 0, r = !1, s = !1;
  const a = new Fn(), o = new Be(), l = {
    value: null,
    needsUpdate: !1
  };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || i !== 0 || r;
    return r = d, i = u.length, f;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    n = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, p = e.get(u);
    if (!r || g === null || g.length === 0 || s && !m)
      s ? h(null) : c();
    else {
      const M = s ? 0 : i, E = M * 4;
      let S = p.clippingState || null;
      l.value = S, S = h(g, d, E, f);
      for (let b = 0; b !== E; ++b) S[b] = n[b];
      p.clippingState = S, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function c() {
    l.value !== n && (l.value = n, l.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0;
  }
  function h(u, d, f, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = l.value, g !== !0 || m === null) {
        const p = f + _ * 4, M = d.matrixWorldInverse;
        o.getNormalMatrix(M), (m === null || m.length < p) && (m = new Float32Array(p));
        for (let E = 0, S = f; E !== _; ++E, S += 4)
          a.copy(u[E]).applyMatrix4(M, o), a.normal.toArray(m, S), m[S + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = !0;
    }
    return t.numPlanes = _, t.numIntersection = 0, m;
  }
}
var Xa = class extends En {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = {
      width: e,
      height: e,
      depth: 1
    }, i = [
      n,
      n,
      n,
      n,
      n,
      n
    ];
    this.texture = new _c(i), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: { tEquirect: { value: null } },
      vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
      fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
    }, i = new Dr(5, 5, 5), r = new vi({
      name: "CubemapFromEquirect",
      uniforms: Xi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    r.uniforms.tEquirect.value = t;
    const s = new Xt(i, r), a = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = rn), new Aa(1, 10, this).update(e, s), t.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
  }
  clear(e, t = !0, n = !0, i = !0) {
    const r = e.getRenderTarget();
    for (let s = 0; s < 6; s++)
      e.setRenderTarget(this, s), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}, tl = 256, Kf = 3, $f = 20, zc = 256, Hc = 16, Zf = 3, Jf = /* @__PURE__ */ new B(), Qf = /* @__PURE__ */ new Ce(), nl = class Gc {
  constructor(t) {
    this._renderer = t, this._cubeSize = 0, this._sourceTarget = null, this._cubeCamera = new Aa(1, 10, null), this._boxMesh = new Xt(new Dr(5, 5, 5), null), this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null, this._integrationMaterial = null;
  }
  fromScene(t, n = 0, i = 0.1, r = 100, s = {}) {
    const { size: a = 256, position: o = Jf } = s, l = this._renderer;
    this._setSize(a);
    const c = this._allocateTarget(), h = this._getSourceTarget(!0);
    n > 0 && (h.texture.mipmapsAutoUpdate = !1);
    const u = l.autoClear, d = l.autoClearColor, f = l.autoClearDepth, g = l.autoClearStencil, _ = t.background;
    l.autoClear = !0, l.autoClearColor = !0, l.autoClearDepth = !0, l.autoClearStencil = !0, _ === null && (t.background = l.getClearColor(Qf));
    const m = new Aa(i, r, h);
    return m.position.copy(o), m.update(l, t), l.autoClear = u, l.autoClearColor = d, l.autoClearDepth = f, l.autoClearStencil = g, t.background = _, n > 0 && (h.texture.mipmapsAutoUpdate = !0, this._blur(c, n)), this._applyPMREM(c), c;
  }
  fromEquirectangular(t, n = null) {
    return this._fromTexture(t, n);
  }
  fromCubemap(t, n = null) {
    return this._fromTexture(t, n);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = sl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = rl(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._sourceTarget !== null && this._sourceTarget.dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._integrationMaterial !== null && this._integrationMaterial.dispose(), this._boxMesh.geometry.dispose();
  }
  static lodToRoughness(t, n) {
    return n > 0 ? 1 - Math.sqrt(1 - t / n) : 0;
  }
  _setSize(t) {
    this._cubeSize = Math.max(tl, ic(t));
  }
  _fromTexture(t, n) {
    t.mapping === 301 || t.mapping === 302 ? this._setSize(t.image.length === 0 ? tl : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4);
    const i = n || this._allocateTarget();
    return this._textureToCubemap(t), this._applyPMREM(i), i;
  }
  _allocateTarget() {
    const t = this._cubeSize, n = il(t, !1, !1), i = Math.log2(t) - Kf;
    for (let r = 0; r <= i; r++) n.texture.mipmaps.push({
      width: t >> r,
      height: t >> r
    });
    return n.texture.name = "PMREM", n.texture.isPMREMTexture = !0, n;
  }
  _getSourceTarget(t = !1) {
    const n = this._cubeSize, i = this._sourceTarget;
    return (i === null || i.width !== n || t && i.depthBuffer === !1) && (i !== null && i.dispose(), this._sourceTarget = il(n, !0, t)), this._sourceTarget;
  }
  _compileMaterial(t) {
    this._boxMesh.material = t, this._renderer.compile(this._boxMesh, this._cubeCamera.children[0]);
  }
  _renderCube(t, n, i) {
    const r = this._boxMesh, s = this._cubeCamera;
    r.material = i, s.renderTarget = t, s.activeMipmapLevel = n;
    const a = t.width >> n;
    t.viewport.set(0, 0, a, a), s.update(this._renderer, r), t.viewport.set(0, 0, t.width, t.height);
  }
  _textureToCubemap(t) {
    let n;
    t.mapping === 301 || t.mapping === 302 ? (this._cubemapMaterial === null && (this._cubemapMaterial = sl()), n = this._cubemapMaterial, n.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : (this._equirectMaterial === null && (this._equirectMaterial = rl()), n = this._equirectMaterial), n.uniforms.envMap.value = t, this._renderCube(this._getSourceTarget(), 0, n);
  }
  _applyPMREM(t) {
    this._ggxMaterial === null && (this._ggxMaterial = jf(), this._integrationMaterial = ep());
    const n = this._cubeSize, i = t.texture.mipmaps.length - 1, r = this._ggxMaterial.uniforms;
    r.envMap.value = this._sourceTarget.texture;
    const s = this._integrationMaterial.uniforms;
    s.envMap.value = this._sourceTarget.texture, s.sourceLod.value = Math.log2(n / Hc);
    for (let a = 0; a <= i; a++) {
      const o = Gc.lodToRoughness(a, i);
      if (a > i - Zf)
        s.roughness.value = o, this._renderCube(t, a, this._integrationMaterial);
      else {
        const l = o > 0 ? Math.log2(n) + 0.5 * Math.log2(6 / (zc * Math.pow(o, 4))) + 0.5 : 0;
        r.roughness.value = o, r.lodBias.value = l, this._renderCube(t, a, this._ggxMaterial);
      }
    }
  }
  _blur(t, n) {
    this._blurMaterial === null && (this._blurMaterial = tp());
    const i = this._blurMaterial, r = i.uniforms, s = this._sourceTarget;
    r.sigma.value = Math.min(n, Math.PI) / Math.SQRT2, r.envMap.value = s.texture, this._renderCube(t, 0, i), r.envMap.value = t.texture, this._renderCube(s, 0, i);
  }
};
function il(e, t, n) {
  return new Xa(e, {
    minFilter: Ir,
    generateMipmaps: t,
    type: ii,
    colorSpace: pn,
    depthBuffer: n
  });
}
function Or(e, t, n) {
  return new vi({
    name: e,
    uniforms: t,
    vertexShader: ze.cube_vert,
    fragmentShader: n,
    side: 1,
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function jf() {
  return Or("PMREMGGXConvolution", {
    envMap: { value: null },
    roughness: { value: 0 },
    lodBias: { value: 0 }
  }, `

		#define GGX_SAMPLES ${zc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`);
}
function ep() {
  return Or("PMREMGGXIntegration", {
    envMap: { value: null },
    roughness: { value: 0 },
    sourceLod: { value: 0 },
    sourceSize: { value: Hc }
  }, `

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`);
}
function tp() {
  return Or("PMREMSphericalGaussianBlur", {
    envMap: { value: null },
    sigma: { value: 0 }
  }, `

		#define SAMPLES ${$f}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`);
}
function rl() {
  return Or("PMREMEquirectangularToCubemap", { envMap: { value: null } }, `

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`);
}
function sl() {
  return Or("PMREMCubemapToCubemap", {
    envMap: { value: null },
    flipEnvMap: { value: -1 }
  }, `

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`);
}
function np(e) {
  let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i = null;
  function r(d, f = !1) {
    return d == null ? null : f ? a(d) : s(d);
  }
  function s(d) {
    if (d && d.isTexture) {
      const f = d.mapping;
      if (f === 303 || f === 304)
        if (t.has(d)) {
          const g = t.get(d).texture;
          return o(g, d.mapping);
        } else {
          const g = d.image;
          if (g && g.height > 0) {
            const _ = new Xa(g.height);
            return _.fromEquirectangularTexture(e, d), t.set(d, _), d.addEventListener("dispose", c), o(_.texture, d.mapping);
          } else return null;
        }
    }
    return d;
  }
  function a(d) {
    if (d && d.isTexture && d.isPMREMTexture !== !0) {
      const f = d.mapping, g = f === 303 || f === 304, _ = f === 301 || f === 302;
      if (g || _) {
        let m = n.get(d);
        const p = m !== void 0 ? m.texture.pmremVersion : 0;
        if (d.isRenderTargetTexture && d.pmremVersion !== p)
          return i === null && (i = new nl(e)), m = g ? i.fromEquirectangular(d, m) : i.fromCubemap(d, m), m.texture.pmremVersion = d.pmremVersion, n.set(d, m), m.texture;
        if (m !== void 0) return m.texture;
        {
          const M = d.image;
          return g && M && M.height > 0 || _ && M && l(M) ? (i === null && (i = new nl(e)), m = g ? i.fromEquirectangular(d) : i.fromCubemap(d), m.texture.pmremVersion = d.pmremVersion, n.set(d, m), d.addEventListener("dispose", h), m.texture) : null;
        }
      }
    }
    return d;
  }
  function o(d, f) {
    return f === 303 ? d.mapping = 301 : f === 304 && (d.mapping = 302), d;
  }
  function l(d) {
    let f = 0;
    const g = 6;
    for (let _ = 0; _ < g; _++) d[_] !== void 0 && f++;
    return f === g;
  }
  function c(d) {
    const f = d.target;
    f.removeEventListener("dispose", c);
    const g = t.get(f);
    g !== void 0 && (t.delete(f), g.dispose());
  }
  function h(d) {
    const f = d.target;
    f.removeEventListener("dispose", h);
    const g = n.get(f);
    g !== void 0 && (n.delete(f), g.dispose());
  }
  function u() {
    t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i !== null && (i.dispose(), i = null);
  }
  return {
    get: r,
    dispose: u
  };
}
function ip(e) {
  const t = {};
  function n(i) {
    if (t[i] !== void 0) return t[i];
    const r = e.getExtension(i);
    return t[i] = r, r;
  }
  return {
    has: function(i) {
      return n(i) !== null;
    },
    init: function() {
      n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
    },
    get: function(i) {
      const r = n(i);
      return r === null && Bi("WebGLRenderer: " + i + " extension not supported."), r;
    }
  };
}
function rp(e, t, n, i) {
  const r = {}, s = /* @__PURE__ */ new WeakMap(), a = new FinalizationRegistry((g) => delete r[g]);
  function o(g) {
    l(g.target);
  }
  function l(g) {
    g.index !== null && t.remove(g.index);
    for (const m in g.attributes) t.remove(g.attributes[m]);
    g.removeEventListener("dispose", o), delete r[g.id], a.unregister(g);
    const _ = s.get(g);
    _ && (t.remove(_), s.delete(g)), i.releaseStatesOfGeometry(g), g.isInstancedBufferGeometry === !0 && delete g._maxInstanceCount, n.memory.geometries--;
  }
  function c(g, _) {
    return r[_.id] !== void 0 || (_.addEventListener("dispose", o), r[_.id] = new WeakRef(_), a.register(_, _.id, _), n.memory.geometries++), _;
  }
  function h(g) {
    const _ = g.attributes;
    for (const m in _) t.update(_[m], e.ARRAY_BUFFER);
  }
  function u(g) {
    const _ = g.index, m = g.attributes.position;
    let p = 0;
    if (m === void 0) return;
    const M = _ !== null ? _.array.length : m.array.length / 3 - 1, E = new (m.count >= 65535 ? hc : cc)(Math.ceil(M / 3) * 6, 1), S = E.array;
    if (_ !== null) {
      const A = _.array;
      p = _.version;
      for (let v = 0, T = 0; v < M; v += 3) {
        const w = A[v + 0], F = A[v + 1], P = A[v + 2];
        S[T++] = w, S[T++] = F, S[T++] = F, S[T++] = P, S[T++] = P, S[T++] = w;
      }
    } else {
      p = m.version;
      for (let A = 0, v = 0; A < M; A += 3) {
        const T = A + 0, w = A + 1, F = A + 2;
        S[v++] = T, S[v++] = w, S[v++] = w, S[v++] = F, S[v++] = F, S[v++] = T;
      }
    }
    E.version = p;
    const b = s.get(g);
    b && t.remove(b), s.set(g, E);
  }
  function d(g) {
    const _ = s.get(g);
    if (_) {
      const m = g.index;
      m !== null && _.version < m.version && u(g);
    } else u(g);
    return s.get(g);
  }
  function f() {
    for (const g in r) {
      const _ = r[g].deref();
      _ !== void 0 && l(_);
    }
  }
  return {
    get: c,
    update: h,
    getWireframeAttribute: d,
    dispose: f
  };
}
function sp(e, t, n) {
  let i;
  function r(u) {
    i = u;
  }
  let s, a;
  function o(u) {
    s = u.type, a = u.bytesPerElement;
  }
  function l(u, d) {
    e.drawElements(i, d, s, u * a), n.update(d, i, 1);
  }
  function c(u, d, f) {
    f !== 0 && (e.drawElementsInstanced(i, d, s, u * a, f), n.update(d, i, f));
  }
  function h(u, d, f) {
    if (f === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, d, 0, s, u, 0, f);
    let g = 0;
    for (let _ = 0; _ < f; _++) g += d[_];
    n.update(g, i, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h;
}
function ap(e) {
  const t = {
    geometries: 0,
    textures: 0
  }, n = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function i(s, a, o) {
    switch (n.calls++, a) {
      case e.TRIANGLES:
        n.triangles += o * (s / 3);
        break;
      case e.LINES:
        n.lines += o * (s / 2);
        break;
      case e.LINE_STRIP:
        n.lines += o * (s - 1);
        break;
      case e.LINE_LOOP:
        n.lines += o * s;
        break;
      case e.POINTS:
        n.points += o * s;
        break;
      default:
        De("WebGLInfo: Unknown draw mode:", a);
    }
  }
  function r() {
    n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
  }
  return {
    memory: t,
    render: n,
    programs: null,
    autoReset: !0,
    reset: r,
    update: i
  };
}
function op(e, t, n) {
  const i = /* @__PURE__ */ new WeakMap(), r = new st();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = i.get(o);
    if (d === void 0 || d.count !== u) {
      let F = function() {
        T.dispose(), i.delete(o), o.removeEventListener("dispose", F);
      };
      var f = F;
      d !== void 0 && d.texture.dispose();
      const g = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, m = o.morphAttributes.color !== void 0, p = o.morphAttributes.position || [], M = o.morphAttributes.normal || [], E = o.morphAttributes.color || [];
      let S = 0;
      g === !0 && (S = 1), _ === !0 && (S = 2), m === !0 && (S = 3);
      let b = o.attributes.position.count * S, A = 1;
      b > t.maxTextureSize && (A = Math.ceil(b / t.maxTextureSize), b = t.maxTextureSize);
      const v = new Float32Array(b * A * 4 * u), T = new rc(v, b, A, u);
      T.type = Ki, T.needsUpdate = !0;
      const w = S * 4;
      for (let P = 0; P < u; P++) {
        const U = p[P], q = M[P], I = E[P], V = b * A * 4 * P;
        for (let $ = 0; $ < U.count; $++) {
          const k = $ * w;
          g === !0 && (r.fromBufferAttribute(U, $), v[V + k + 0] = r.x, v[V + k + 1] = r.y, v[V + k + 2] = r.z, v[V + k + 3] = 0), _ === !0 && (r.fromBufferAttribute(q, $), v[V + k + 4] = r.x, v[V + k + 5] = r.y, v[V + k + 6] = r.z, v[V + k + 7] = 0), m === !0 && (r.fromBufferAttribute(I, $), v[V + k + 8] = r.x, v[V + k + 9] = r.y, v[V + k + 10] = r.z, v[V + k + 11] = I.itemSize === 4 ? r.w : 1);
        }
      }
      d = {
        count: u,
        texture: T,
        size: new ke(b, A)
      }, i.set(o, d), o.addEventListener("dispose", F);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null) l.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
    else {
      let g = 0;
      for (let m = 0; m < c.length; m++) g += c[m];
      const _ = o.morphTargetsRelative ? 1 : 1 - g;
      l.getUniforms().setValue(e, "morphTargetBaseInfluence", _), l.getUniforms().setValue(e, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), l.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
  }
  return { update: s };
}
function lp(e, t, n, i, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const h = r.render.frame, u = c.geometry, d = t.get(c, u);
    if (s.get(d) !== h && (t.update(d), s.set(d, h)), c.isInstancedMesh && (c.hasEventListener("dispose", l) === !1 && c.addEventListener("dispose", l), s.get(c) !== h && (n.update(c.instanceMatrix, e.ARRAY_BUFFER), c.instanceColor !== null && n.update(c.instanceColor, e.ARRAY_BUFFER), s.set(c, h))), c.isSkinnedMesh) {
      const f = c.skeleton;
      s.get(f) !== h && (f.update(), s.set(f, h));
    }
    return d;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const h = c.target;
    h.removeEventListener("dispose", l), i.releaseStatesOfObject(h), n.remove(h.instanceMatrix), h.instanceColor !== null && n.remove(h.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
var cp = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function hp(e, t, n, i, r, s) {
  const a = new En(t, n, {
    type: e,
    depthBuffer: r,
    stencilBuffer: s,
    samples: i ? 4 : 0,
    storeMultisampledDepthBuffer: !1,
    storeMultisampledStencilBuffer: !1,
    resolveDepthBuffer: !1,
    resolveStencilBuffer: !1
  });
  let o = null, l = null, c = null;
  const h = new Bt();
  h.setAttribute("position", new tt([
    -1,
    3,
    0,
    -1,
    -1,
    0,
    3,
    -1,
    0
  ], 3)), h.setAttribute("uv", new tt([
    0,
    2,
    0,
    0,
    2,
    0
  ], 2));
  const u = new nf({
    uniforms: { tDiffuse: { value: null } },
    vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
    fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
    depthTest: !1,
    depthWrite: !1
  }), d = new Xt(h, u), f = new Va(-1, 1, 1, -1, 0, 1);
  let g = null, _ = null, m = !1, p, M = null, E = [], S = !1;
  this.setSize = function(b, A) {
    a.setSize(b, A), o !== null && o.setSize(b, A), l !== null && l.setSize(b, A);
    for (let v = 0; v < E.length; v++) {
      const T = E[v];
      T.setSize && T.setSize(b, A);
    }
  }, this.setEffects = function(b) {
    E = b, S = E.length > 0 && E[0].isRenderPass === !0;
    const A = a.width, v = a.height;
    E.length > 0 && o === null && (o = new En(A, v, {
      type: ii,
      depthBuffer: !1,
      stencilBuffer: !1
    }), l = new En(A, v, {
      type: ii,
      depthBuffer: !1,
      stencilBuffer: !1
    }));
    const T = r === !0 && E.some((w) => w.needsDepthTexture === !0);
    T !== (a.depthTexture !== null) && (T === !0 && c === null && (c = new Wi(A, v), s === !0 && (c.format = bs, c.type = Ua)), a.dispose(), a.depthTexture = T ? c : null, a.resolveDepthBuffer = T, a.storeMultisampledDepthBuffer = T);
    for (let w = 0; w < E.length; w++) {
      const F = E[w];
      F.setSize && F.setSize(A, v), T && F.needsDepthTexture === !0 && F.setDepthTexture && F.setDepthTexture(c);
    }
  }, this.begin = function(b, A) {
    if (m || b.toneMapping === 0 && E.length === 0) return !1;
    if (M = A, A !== null) {
      const v = A.width, T = A.height;
      (a.width !== v || a.height !== T) && this.setSize(v, T);
    }
    return S === !1 && b.setRenderTarget(a), p = b.toneMapping, b.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return S;
  }, this.end = function(b, A) {
    b.toneMapping = p, m = !0;
    let v = a, T = o;
    for (let w = 0; w < E.length; w++) {
      const F = E[w];
      F.enabled !== !1 && (F.render(b, T, v, A), F.needsSwap !== !1 && (v = T, T = T === o ? l : o));
    }
    if (g !== b.outputColorSpace || _ !== b.toneMapping) {
      g = b.outputColorSpace, _ = b.toneMapping, u.defines = {}, qe.getTransfer(g) === "srgb" && (u.defines.SRGB_TRANSFER = "");
      const w = cp[_];
      w && (u.defines[w] = ""), u.needsUpdate = !0;
    }
    u.uniforms.tDiffuse.value = v.texture, b.setRenderTarget(M), b.render(d, f), M = null, m = !1;
  }, this.isCompositing = function() {
    return m;
  }, this.dispose = function() {
    a.dispose(), o !== null && o.dispose(), l !== null && l.dispose(), h.dispose(), u.dispose();
  };
}
var Vc = /* @__PURE__ */ new Wt(), Wc = /* @__PURE__ */ new Wi(1, 1), Xc = /* @__PURE__ */ new Mc(1), qc = /* @__PURE__ */ new rc(), Yc = /* @__PURE__ */ new vd(), Kc = /* @__PURE__ */ new _c(), al = [], ol = [], ll = /* @__PURE__ */ new Float32Array(16), cl = /* @__PURE__ */ new Float32Array(9), hl = /* @__PURE__ */ new Float32Array(4);
function ji(e, t, n) {
  const i = e[0];
  if (i <= 0 || i > 0) return e;
  const r = t * n;
  let s = al[r];
  if (s === void 0 && (s = new Float32Array(r), al[r] = s), t !== 0) {
    i.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += n, e[a].toArray(s, o);
  }
  return s;
}
function Mt(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0, i = e.length; n < i; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function St(e, t) {
  for (let n = 0, i = t.length; n < i; n++) e[n] = t[n];
}
function Bs(e, t) {
  let n = ol[t];
  n === void 0 && (n = new Int32Array(t), ol[t] = n);
  for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
  return n;
}
function up(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function dp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (Mt(n, t)) return;
    e.uniform2fv(this.addr, t), St(n, t);
  }
}
function fp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else if (t.r !== void 0)
    (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
  else {
    if (Mt(n, t)) return;
    e.uniform3fv(this.addr, t), St(n, t);
  }
}
function pp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (Mt(n, t)) return;
    e.uniform4fv(this.addr, t), St(n, t);
  }
}
function mp(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (Mt(n, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), St(n, t);
  } else {
    if (Mt(n, i)) return;
    hl.set(i), e.uniformMatrix2fv(this.addr, !1, hl), St(n, i);
  }
}
function gp(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (Mt(n, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), St(n, t);
  } else {
    if (Mt(n, i)) return;
    cl.set(i), e.uniformMatrix3fv(this.addr, !1, cl), St(n, i);
  }
}
function vp(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (Mt(n, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), St(n, t);
  } else {
    if (Mt(n, i)) return;
    ll.set(i), e.uniformMatrix4fv(this.addr, !1, ll), St(n, i);
  }
}
function _p(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function Mp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (Mt(n, t)) return;
    e.uniform2iv(this.addr, t), St(n, t);
  }
}
function Sp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else {
    if (Mt(n, t)) return;
    e.uniform3iv(this.addr, t), St(n, t);
  }
}
function yp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (Mt(n, t)) return;
    e.uniform4iv(this.addr, t), St(n, t);
  }
}
function xp(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function Tp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (Mt(n, t)) return;
    e.uniform2uiv(this.addr, t), St(n, t);
  }
}
function Ep(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else {
    if (Mt(n, t)) return;
    e.uniform3uiv(this.addr, t), St(n, t);
  }
}
function bp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (Mt(n, t)) return;
    e.uniform4uiv(this.addr, t), St(n, t);
  }
}
function ks(e) {
  return e.version === 0 && (e.compareFunction = 519, e.needsUpdate = !0), e;
}
function Ap(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r);
  let s;
  this.type === e.SAMPLER_2D_SHADOW ? s = ks(Wc) : s = Vc, n.setTexture2D(t || s, r);
}
function Rp(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || Yc, r);
}
function wp(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r);
  let s;
  this.type === e.SAMPLER_CUBE_SHADOW ? s = ks(Xc) : s = Kc, n.setTextureCube(t || s, r);
}
function Cp(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || qc, r);
}
function Pp(e) {
  switch (e) {
    case 5126:
      return up;
    case 35664:
      return dp;
    case 35665:
      return fp;
    case 35666:
      return pp;
    case 35674:
      return mp;
    case 35675:
      return gp;
    case 35676:
      return vp;
    case 5124:
    case 35670:
      return _p;
    case 35667:
    case 35671:
      return Mp;
    case 35668:
    case 35672:
      return Sp;
    case 35669:
    case 35673:
      return yp;
    case 5125:
      return xp;
    case 36294:
      return Tp;
    case 36295:
      return Ep;
    case 36296:
      return bp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Ap;
    case 35679:
    case 36299:
    case 36307:
      return Rp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return wp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Cp;
  }
}
function Lp(e, t) {
  e.uniform1fv(this.addr, t);
}
function Ip(e, t) {
  const n = ji(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function Dp(e, t) {
  const n = ji(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function Np(e, t) {
  const n = ji(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function Up(e, t) {
  const n = ji(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function Op(e, t) {
  const n = ji(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function Fp(e, t) {
  const n = ji(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function Bp(e, t) {
  e.uniform1iv(this.addr, t);
}
function kp(e, t) {
  e.uniform2iv(this.addr, t);
}
function zp(e, t) {
  e.uniform3iv(this.addr, t);
}
function Hp(e, t) {
  e.uniform4iv(this.addr, t);
}
function Gp(e, t) {
  e.uniform1uiv(this.addr, t);
}
function Vp(e, t) {
  e.uniform2uiv(this.addr, t);
}
function Wp(e, t) {
  e.uniform3uiv(this.addr, t);
}
function Xp(e, t) {
  e.uniform4uiv(this.addr, t);
}
function qp(e, t, n) {
  const i = this.cache, r = t.length, s = Bs(n, r);
  Mt(i, s) || (e.uniform1iv(this.addr, s), St(i, s));
  let a;
  this.type === e.SAMPLER_2D_SHADOW ? a = ks(Wc) : a = Vc;
  for (let o = 0; o !== r; ++o) n.setTexture2D(t[o] || a, s[o]);
}
function Yp(e, t, n) {
  const i = this.cache, r = t.length, s = Bs(n, r);
  Mt(i, s) || (e.uniform1iv(this.addr, s), St(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture3D(t[a] || Yc, s[a]);
}
function Kp(e, t, n) {
  const i = this.cache, r = t.length, s = Bs(n, r);
  Mt(i, s) || (e.uniform1iv(this.addr, s), St(i, s));
  let a;
  this.type === e.SAMPLER_CUBE_SHADOW ? a = ks(Xc) : a = Kc;
  for (let o = 0; o !== r; ++o) n.setTextureCube(t[o] || a, s[o]);
}
function $p(e, t, n) {
  const i = this.cache, r = t.length, s = Bs(n, r);
  Mt(i, s) || (e.uniform1iv(this.addr, s), St(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture2DArray(t[a] || qc, s[a]);
}
function Zp(e) {
  switch (e) {
    case 5126:
      return Lp;
    case 35664:
      return Ip;
    case 35665:
      return Dp;
    case 35666:
      return Np;
    case 35674:
      return Up;
    case 35675:
      return Op;
    case 35676:
      return Fp;
    case 5124:
    case 35670:
      return Bp;
    case 35667:
    case 35671:
      return kp;
    case 35668:
    case 35672:
      return zp;
    case 35669:
    case 35673:
      return Hp;
    case 5125:
      return Gp;
    case 36294:
      return Vp;
    case 36295:
      return Wp;
    case 36296:
      return Xp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return qp;
    case 35679:
    case 36299:
    case 36307:
      return Yp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Kp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $p;
  }
}
var Jp = class {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Pp(t.type);
  }
}, Qp = class {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Zp(t.type);
  }
}, jp = class {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, s = i.length; r !== s; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}, ma = /(\w+)(\])?(\[|\.)?/g;
function ul(e, t) {
  e.seq.push(t), e.map[t.id] = t;
}
function em(e, t, n) {
  const i = e.name, r = i.length;
  for (ma.lastIndex = 0; ; ) {
    const s = ma.exec(i), a = ma.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      ul(n, c === void 0 ? new Jp(o, e, t) : new Qp(o, e, t));
      break;
    } else {
      let h = n.map[o];
      h === void 0 && (h = new jp(o), ul(n, h)), n = h;
    }
  }
}
var Ss = class {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const a = e.getActiveUniform(t, s);
      em(a, e.getUniformLocation(t, a.name), this);
    }
    const i = [], r = [];
    for (const s of this.seq) s.type === e.SAMPLER_2D_SHADOW || s.type === e.SAMPLER_CUBE_SHADOW || s.type === e.SAMPLER_2D_ARRAY_SHADOW ? i.push(s) : r.push(s);
    i.length > 0 && (this.seq = i.concat(r));
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, s = t.length; r !== s; ++r) {
      const a = t[r], o = n[a.id];
      o.needsUpdate !== !1 && a.setValue(e, o.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const s = e[i];
      s.id in t && n.push(s);
    }
    return n;
  }
};
function dl(e, t, n) {
  const i = e.createShader(t);
  return e.shaderSource(i, n), e.compileShader(i), i;
}
var tm = 37297, nm = 0;
function im(e, t) {
  const n = e.split(`
`), i = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, n.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    i.push(`${o === t ? ">" : " "} ${o}: ${n[a]}`);
  }
  return i.join(`
`);
}
var fl = /* @__PURE__ */ new Be();
function rm(e) {
  qe._getMatrix(fl, qe.workingColorSpace, e);
  const t = `mat3( ${fl.elements.map((n) => n.toFixed(4))} )`;
  switch (qe.getTransfer(e)) {
    case Rs:
      return [t, "LinearTransferOETF"];
    case ws:
      return [t, "sRGBTransferOETF"];
    default:
      return xe("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
  }
}
function pl(e, t, n) {
  const i = e.getShaderParameter(t, e.COMPILE_STATUS), r = (e.getShaderInfoLog(t) || "").trim();
  if (i && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return n.toUpperCase() + `

` + r + `

` + im(e.getShaderSource(t), a);
  } else return r;
}
function sm(e, t) {
  const n = rm(t);
  return [
    `vec4 ${e}( vec4 value ) {`,
    `	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,
    "}"
  ].join(`
`);
}
var am = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function om(e, t) {
  const n = am[t];
  return n === void 0 ? (xe("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var ps = /* @__PURE__ */ new B();
function lm() {
  return qe.getLuminanceCoefficients(ps), [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${ps.x.toFixed(4)}, ${ps.y.toFixed(4)}, ${ps.z.toFixed(4)} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function cm(e) {
  return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(vr).join(`
`);
}
function hm(e) {
  const t = [];
  for (const n in e) {
    const i = e[n];
    i !== !1 && t.push("#define " + n + " " + i);
  }
  return t.join(`
`);
}
function um(e, t) {
  const n = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = e.getActiveAttrib(t, r), a = s.name;
    let o = 1;
    s.type === e.FLOAT_MAT2 && (o = 2), s.type === e.FLOAT_MAT3 && (o = 3), s.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
      type: s.type,
      location: e.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return n;
}
function vr(e) {
  return e !== "";
}
function ml(e, t) {
  const n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g, t.numLightProbeGrids);
}
function gl(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var dm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ra(e) {
  return e.replace(dm, fm);
}
function fm(e, t) {
  const n = ze[t];
  if (n === void 0) throw new Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
  return Ra(n);
}
var pm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function vl(e) {
  return e.replace(pm, mm);
}
function mm(e, t, n, i) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(n); s++) r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function _l(e) {
  let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
  return e.precision === "highp" ? t += `
#define HIGH_PRECISION` : e.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : e.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
var gm = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function vm(e) {
  return gm[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var _m = { 302: "ENVMAP_MODE_REFRACTION" };
function Mm(e) {
  return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : _m[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var Sm = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function ym(e) {
  return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : Sm[e.combine] || "ENVMAP_BLENDING_NONE";
}
function xm(e, t, n, i) {
  const r = e.getContext(), s = n.defines;
  let a = n.vertexShader, o = n.fragmentShader;
  const l = vm(n), c = n.envMapPMREM === !0 ? "ENVMAP_TYPE_PMREM" : "ENVMAP_TYPE_CUBE", h = Mm(n), u = ym(n), d = cm(n), f = hm(s), g = r.createProgram();
  let _, m, p = n.glslVersion ? "#version " + n.glslVersion + `
` : "";
  n.isRawShaderMaterial ? (_ = [
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    f
  ].filter(vr).join(`
`), _.length > 0 && (_ += `
`), m = [
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    f
  ].filter(vr).join(`
`), m.length > 0 && (m += `
`)) : (_ = [
    _l(n),
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    f,
    n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    n.batching ? "#define USE_BATCHING" : "",
    n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    n.instancing ? "#define USE_INSTANCING" : "",
    n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.map ? "#define USE_MAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + h : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.anisotropy ? "#define USE_ANISOTROPY" : "",
    n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
    n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.alphaHash ? "#define USE_ALPHAHASH" : "",
    n.transmission ? "#define USE_TRANSMISSION" : "",
    n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    n.mapUv ? "#define MAP_UV " + n.mapUv : "",
    n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
    n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
    n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
    n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
    n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
    n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
    n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
    n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
    n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
    n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
    n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
    n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
    n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
    n.diffuseRoughnessMapUv ? "#define DIFFUSE_ROUGHNESSMAP_UV " + n.diffuseRoughnessMapUv : "",
    n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
    n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
    n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
    n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
    n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
    n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
    n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
    n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
    n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
    n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
    n.vertexNormals ? "#define HAS_NORMAL" : "",
    n.vertexColors ? "#define USE_COLOR" : "",
    n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    n.vertexUv1s ? "#define USE_UV1" : "",
    n.vertexUv2s ? "#define USE_UV2" : "",
    n.vertexUv3s ? "#define USE_UV3" : "",
    n.pointsUvs ? "#define USE_POINTS_UV" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.skinning ? "#define USE_SKINNING" : "",
    n.morphTargets ? "#define USE_MORPHTARGETS" : "",
    n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    n.morphColors ? "#define USE_MORPHCOLORS" : "",
    n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
    n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + l : "",
    n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(vr).join(`
`), m = [
    _l(n),
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    f,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    n.map ? "#define USE_MAP" : "",
    n.matcap ? "#define USE_MATCAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + c : "",
    n.envMap ? "#define " + h : "",
    n.envMap ? "#define " + u : "",
    n.envMapPMREM ? "#define ENVMAP_MAX_LOD " + n.envMapMaxLod + ".0" : "",
    n.envMapPMREM ? "#define ENVMAP_SIZE " + n.envMapSize + ".0" : "",
    n.lightMap ? "#define USE_LIGHTMAP" : "",
    n.aoMap ? "#define USE_AOMAP" : "",
    n.bumpMap ? "#define USE_BUMPMAP" : "",
    n.normalMap ? "#define USE_NORMALMAP" : "",
    n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
    n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    n.anisotropy ? "#define USE_ANISOTROPY" : "",
    n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    n.clearcoat ? "#define USE_CLEARCOAT" : "",
    n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    n.diffuseRoughness ? "#define USE_DIFFUSE_ROUGHNESS" : "",
    n.diffuseRoughnessMap ? "#define USE_DIFFUSE_ROUGHNESSMAP" : "",
    n.dispersion ? "#define USE_DISPERSION" : "",
    n.retroreflection ? "#define USE_RETROREFLECTION" : "",
    n.iridescence ? "#define USE_IRIDESCENCE" : "",
    n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    n.specularMap ? "#define USE_SPECULARMAP" : "",
    n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    n.metalnessMap ? "#define USE_METALNESSMAP" : "",
    n.alphaMap ? "#define USE_ALPHAMAP" : "",
    n.alphaTest ? "#define USE_ALPHATEST" : "",
    n.alphaHash ? "#define USE_ALPHAHASH" : "",
    n.sheen ? "#define USE_SHEEN" : "",
    n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    n.transmission ? "#define USE_TRANSMISSION" : "",
    n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
    n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
    n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
    n.vertexUv1s ? "#define USE_UV1" : "",
    n.vertexUv2s ? "#define USE_UV2" : "",
    n.vertexUv3s ? "#define USE_UV3" : "",
    n.pointsUvs ? "#define USE_POINTS_UV" : "",
    n.gradientMap ? "#define USE_GRADIENTMAP" : "",
    n.flatShading ? "#define FLAT_SHADED" : "",
    n.doubleSided ? "#define DOUBLE_SIDED" : "",
    n.flipSided ? "#define FLIP_SIDED" : "",
    n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    n.shadowMapEnabled ? "#define " + l : "",
    n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
    n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    n.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    n.toneMapping !== 0 ? ze.tonemapping_pars_fragment : "",
    n.toneMapping !== 0 ? om("toneMapping", n.toneMapping) : "",
    n.dithering ? "#define DITHERING" : "",
    n.opaque ? "#define OPAQUE" : "",
    ze.colorspace_pars_fragment,
    sm("linearToOutputTexel", n.outputColorSpace),
    lm(),
    n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
    `
`
  ].filter(vr).join(`
`)), a = Ra(a), a = ml(a, n), a = gl(a, n), o = Ra(o), o = ml(o, n), o = gl(o, n), a = vl(a), o = vl(o), n.isRawShaderMaterial !== !0 && (p = `#version 300 es
`, _ = [
    d,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + _, m = [
    "#define varying in",
    n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + m);
  const M = p + _ + a, E = p + m + o, S = dl(r, r.VERTEX_SHADER, M), b = dl(r, r.FRAGMENT_SHADER, E);
  r.attachShader(g, S), r.attachShader(g, b), n.index0AttributeName !== void 0 ? r.bindAttribLocation(g, 0, n.index0AttributeName) : n.hasPositionAttribute === !0 && r.bindAttribLocation(g, 0, "position"), r.linkProgram(g);
  function A(F) {
    if (e.debug.checkShaderErrors) {
      const P = r.getProgramInfoLog(g) || "", U = r.getShaderInfoLog(S) || "", q = r.getShaderInfoLog(b) || "", I = P.trim(), V = U.trim(), $ = q.trim();
      let k = !0, ae = !0;
      if (r.getProgramParameter(g, r.LINK_STATUS) === !1)
        if (k = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(r, g, S, b);
        else {
          const Y = pl(r, S, "vertex"), K = pl(r, b, "fragment");
          De("WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(g, r.VALIDATE_STATUS) + `

Material Name: ` + F.name + `
Material Type: ` + F.type + `

Program Info Log: ` + I + `
` + Y + `
` + K);
        }
      else I !== "" ? xe("WebGLProgram: Program Info Log:", I) : (V === "" || $ === "") && (ae = !1);
      ae && (F.diagnostics = {
        runnable: k,
        programLog: I,
        vertexShader: {
          log: V,
          prefix: _
        },
        fragmentShader: {
          log: $,
          prefix: m
        }
      });
    }
    r.deleteShader(S), r.deleteShader(b), v = new Ss(r, g), T = um(r, g);
  }
  let v;
  this.getUniforms = function() {
    return v === void 0 && A(this), v;
  };
  let T;
  this.getAttributes = function() {
    return T === void 0 && A(this), T;
  };
  let w = n.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return w === !1 && (w = r.getProgramParameter(g, tm)), w;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), r.deleteProgram(g), this.program = void 0;
  }, this.type = n.shaderType, this.name = n.shaderName, this.id = nm++, this.cacheKey = t, this.usedTimes = 1, this.program = g, this.vertexShader = S, this.fragmentShader = b, this;
}
var Tm = 0, Em = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e, t, n) {
    const i = this._getShaderCacheForMaterial(e);
    return i.has(t) === !1 && (i.add(t), t.usedTimes++), i.has(n) === !1 && (i.add(n), n.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderStage(e) {
    return this._getShaderStage(e.vertexShader);
  }
  getFragmentShaderStage(e) {
    return this._getShaderStage(e.fragmentShader);
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new bm(e), t.set(e, n)), n;
  }
}, bm = class {
  constructor(e) {
    this.id = Tm++, this.code = e, this.usedTimes = 0;
  }
};
function Am(e) {
  return e === 1030 || e === 37490 || e === 36285;
}
function Rm(e, t, n, i, r, s) {
  const a = new oc(), o = new Em(), l = /* @__PURE__ */ new Set(), c = [], h = /* @__PURE__ */ new Map(), u = i.logarithmicDepthBuffer, d = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distance",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function f(v) {
    return l.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function g(v, T, w, F, P, U) {
    const q = F.fog, I = P.geometry, V = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? F.environment : null, $ = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap, k = t.get(v.envMap || V, $), ae = d[v.type];
    let Y = i.precision;
    v.precision !== null && (Y = i.getMaxPrecision(v.precision), Y !== v.precision && xe("WebGLProgram.getParameters:", v.precision, "not supported, using", Y, "instead."));
    const K = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color, ie = K !== void 0 ? K.length : 0;
    let Ee = 0;
    I.morphAttributes.position !== void 0 && (Ee = 1), I.morphAttributes.normal !== void 0 && (Ee = 2), I.morphAttributes.color !== void 0 && (Ee = 3);
    let Z, ne, _e, Ae;
    if (ae) {
      const ge = yn[ae];
      Z = ge.vertexShader, ne = ge.fragmentShader;
    } else {
      Z = v.vertexShader, ne = v.fragmentShader;
      const ge = o.getVertexShaderStage(v), lt = o.getFragmentShaderStage(v);
      o.update(v, ge, lt), _e = ge.id, Ae = lt.id;
    }
    const we = e.getRenderTarget(), ue = e.state.buffers.depth.getReversed(), Ve = P.isInstancedMesh === !0, Je = P.isBatchedMesh === !0, Pe = !!v.map, Tt = !!v.matcap, Nt = !!k, Et = Nt && k.isPMREMTexture === !0, mt = !!v.aoMap, kt = !!v.lightMap, Yt = !!v.bumpMap && v.wireframe === !1, gt = !!v.normalMap, Rt = !!v.displacementMap, zt = !!v.emissiveMap, Ht = !!v.metalnessMap, on = !!v.roughnessMap, N = v.anisotropy > 0, ln = v.clearcoat > 0, nt = v.diffuseRoughness > 0, yt = v.dispersion > 0, pe = v.retroreflectivity > 0, it = v.iridescence > 0, Le = v.sheen > 0, Oe = v.transmission > 0, wt = N && !!v.anisotropyMap, R = ln && !!v.clearcoatMap, y = ln && !!v.clearcoatNormalMap, H = ln && !!v.clearcoatRoughnessMap, ee = nt && !!v.diffuseRoughnessMap, J = it && !!v.iridescenceMap, oe = it && !!v.iridescenceThicknessMap, le = Le && !!v.sheenColorMap, D = Le && !!v.sheenRoughnessMap, j = !!v.specularMap, Me = !!v.specularColorMap, C = !!v.specularIntensityMap, X = Oe && !!v.transmissionMap, Q = Oe && !!v.thicknessMap, re = !!v.gradientMap, de = !!v.alphaMap, ce = v.alphaTest > 0, be = !!v.alphaHash, te = !!v.extensions;
    let Ue = 0;
    v.toneMapped && (we === null || we.isXRRenderTarget === !0) && (Ue = e.toneMapping);
    const Ie = Et ? k.isCompressedCubeTexture ? k.image[0].mipmaps : k.mipmaps : null, Ke = {
      shaderID: ae,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: Z,
      fragmentShader: ne,
      defines: v.defines,
      customVertexShaderID: _e,
      customFragmentShaderID: Ae,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: Y,
      batching: Je,
      batchingColor: Je && P._colorsTexture !== null,
      instancing: Ve,
      instancingColor: Ve && P.instanceColor !== null,
      instancingMorph: Ve && P.morphTexture !== null,
      outputColorSpace: we === null ? e.outputColorSpace : we.isXRRenderTarget === !0 ? we.texture.colorSpace : qe.workingColorSpace,
      alphaToCoverage: !!v.alphaToCoverage,
      map: Pe,
      matcap: Tt,
      envMap: Nt,
      envMapMode: Nt && k.mapping,
      envMapPMREM: Et,
      envMapMaxLod: Et ? Ie.length - 1 : null,
      envMapSize: Et ? Ie[0].width : null,
      aoMap: mt,
      lightMap: kt,
      bumpMap: Yt,
      normalMap: gt,
      displacementMap: Rt,
      emissiveMap: zt,
      normalMapObjectSpace: gt && v.normalMapType === 1,
      normalMapTangentSpace: gt && v.normalMapType === 0,
      packedNormalMap: gt && v.normalMapType === 0 && Am(v.normalMap.format),
      metalnessMap: Ht,
      roughnessMap: on,
      anisotropy: N,
      anisotropyMap: wt,
      clearcoat: ln,
      clearcoatMap: R,
      clearcoatNormalMap: y,
      clearcoatRoughnessMap: H,
      diffuseRoughness: nt,
      diffuseRoughnessMap: ee,
      dispersion: yt,
      retroreflection: pe,
      iridescence: it,
      iridescenceMap: J,
      iridescenceThicknessMap: oe,
      sheen: Le,
      sheenColorMap: le,
      sheenRoughnessMap: D,
      specularMap: j,
      specularColorMap: Me,
      specularIntensityMap: C,
      transmission: Oe,
      transmissionMap: X,
      thicknessMap: Q,
      gradientMap: re,
      opaque: v.transparent === !1 && v.blending === 1 && v.alphaToCoverage === !1,
      alphaMap: de,
      alphaTest: ce,
      alphaHash: be,
      combine: v.combine,
      mapUv: Pe && f(v.map.channel),
      aoMapUv: mt && f(v.aoMap.channel),
      lightMapUv: kt && f(v.lightMap.channel),
      bumpMapUv: Yt && f(v.bumpMap.channel),
      normalMapUv: gt && f(v.normalMap.channel),
      displacementMapUv: Rt && f(v.displacementMap.channel),
      emissiveMapUv: zt && f(v.emissiveMap.channel),
      metalnessMapUv: Ht && f(v.metalnessMap.channel),
      roughnessMapUv: on && f(v.roughnessMap.channel),
      anisotropyMapUv: wt && f(v.anisotropyMap.channel),
      clearcoatMapUv: R && f(v.clearcoatMap.channel),
      clearcoatNormalMapUv: y && f(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: H && f(v.clearcoatRoughnessMap.channel),
      diffuseRoughnessMapUv: ee && f(v.diffuseRoughnessMap.channel),
      iridescenceMapUv: J && f(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: oe && f(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: le && f(v.sheenColorMap.channel),
      sheenRoughnessMapUv: D && f(v.sheenRoughnessMap.channel),
      specularMapUv: j && f(v.specularMap.channel),
      specularColorMapUv: Me && f(v.specularColorMap.channel),
      specularIntensityMapUv: C && f(v.specularIntensityMap.channel),
      transmissionMapUv: X && f(v.transmissionMap.channel),
      thicknessMapUv: Q && f(v.thicknessMap.channel),
      alphaMapUv: de && f(v.alphaMap.channel),
      vertexTangents: !!I.attributes.tangent && (gt || N),
      vertexNormals: !!I.attributes.normal,
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4,
      pointsUvs: P.isPoints === !0 && !!I.attributes.uv && (Pe || de),
      fog: !!q,
      useFog: v.fog === !0,
      fogExp2: !!q && q.isFogExp2,
      flatShading: v.wireframe === !1 && (v.flatShading === !0 || I.attributes.normal === void 0 && gt === !1 && (v.isMeshLambertMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isMeshPhysicalMaterial)),
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reversedDepthBuffer: ue,
      skinning: P.isSkinnedMesh === !0,
      hasPositionAttribute: I.attributes.position !== void 0,
      morphTargets: I.morphAttributes.position !== void 0,
      morphNormals: I.morphAttributes.normal !== void 0,
      morphColors: I.morphAttributes.color !== void 0,
      morphTargetsCount: ie,
      morphTextureStride: Ee,
      numSunLights: T.sun.length,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numSunLightShadows: T.sunShadowMap.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numLightProbeGrids: U.filter((ge) => ge.texture !== null).length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: e.shadowMap.enabled && w.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: Ue,
      decodeVideoTexture: Pe && v.map.isVideoTexture === !0 && qe.getTransfer(v.map.colorSpace) === "srgb",
      decodeVideoTextureEmissive: zt && v.emissiveMap.isVideoTexture === !0 && qe.getTransfer(v.emissiveMap.colorSpace) === "srgb",
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === 2,
      flipSided: v.side === 1,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance: te && v.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (te && v.extensions.multiDraw === !0 || Je) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
    return Ke.vertexUv1s = l.has(1), Ke.vertexUv2s = l.has(2), Ke.vertexUv3s = l.has(3), l.clear(), Ke;
  }
  function _(v) {
    const T = [];
    if (v.shaderID ? T.push(v.shaderID) : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)), v.defines !== void 0) for (const w in v.defines)
      T.push(w), T.push(v.defines[w]);
    return v.isRawShaderMaterial === !1 && (m(T, v), p(T, v), T.push(e.outputColorSpace)), T.push(v.customProgramCacheKey), T.join();
  }
  function m(v, T) {
    v.push(T.precision), v.push(T.outputColorSpace), v.push(T.envMapMode), v.push(T.envMapPMREM), v.push(T.envMapMaxLod), v.push(T.envMapSize), v.push(T.mapUv), v.push(T.alphaMapUv), v.push(T.lightMapUv), v.push(T.aoMapUv), v.push(T.bumpMapUv), v.push(T.normalMapUv), v.push(T.displacementMapUv), v.push(T.emissiveMapUv), v.push(T.metalnessMapUv), v.push(T.roughnessMapUv), v.push(T.anisotropyMapUv), v.push(T.clearcoatMapUv), v.push(T.clearcoatNormalMapUv), v.push(T.clearcoatRoughnessMapUv), v.push(T.diffuseRoughnessMapUv), v.push(T.iridescenceMapUv), v.push(T.iridescenceThicknessMapUv), v.push(T.sheenColorMapUv), v.push(T.sheenRoughnessMapUv), v.push(T.specularMapUv), v.push(T.specularColorMapUv), v.push(T.specularIntensityMapUv), v.push(T.transmissionMapUv), v.push(T.thicknessMapUv), v.push(T.combine), v.push(T.fogExp2), v.push(T.sizeAttenuation), v.push(T.morphTargetsCount), v.push(T.numSunLights), v.push(T.numDirLights), v.push(T.numPointLights), v.push(T.numSpotLights), v.push(T.numSpotLightMaps), v.push(T.numHemiLights), v.push(T.numRectAreaLights), v.push(T.numSunLightShadows), v.push(T.numDirLightShadows), v.push(T.numPointLightShadows), v.push(T.numSpotLightShadows), v.push(T.numSpotLightShadowsWithMaps), v.push(T.numLightProbes), v.push(T.numLightProbeGrids), v.push(T.shadowMapType), v.push(T.toneMapping), v.push(T.numClippingPlanes), v.push(T.numClipIntersection), v.push(T.depthPacking);
  }
  function p(v, T) {
    a.disableAll(), T.instancing && a.enable(0), T.instancingColor && a.enable(1), T.instancingMorph && a.enable(2), T.matcap && a.enable(3), T.envMap && a.enable(4), T.normalMapObjectSpace && a.enable(5), T.normalMapTangentSpace && a.enable(6), T.clearcoat && a.enable(7), T.iridescence && a.enable(8), T.alphaTest && a.enable(9), T.vertexColors && a.enable(10), T.vertexAlphas && a.enable(11), T.vertexUv1s && a.enable(12), T.vertexUv2s && a.enable(13), T.vertexUv3s && a.enable(14), T.vertexTangents && a.enable(15), T.anisotropy && a.enable(16), T.alphaHash && a.enable(17), T.batching && a.enable(18), T.dispersion && a.enable(19), T.retroreflection && a.enable(24), T.diffuseRoughness && a.enable(25), T.batchingColor && a.enable(20), T.gradientMap && a.enable(21), T.packedNormalMap && a.enable(22), T.vertexNormals && a.enable(23), v.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.reversedDepthBuffer && a.enable(4), T.skinning && a.enable(5), T.morphTargets && a.enable(6), T.morphNormals && a.enable(7), T.morphColors && a.enable(8), T.premultipliedAlpha && a.enable(9), T.shadowMapEnabled && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), T.decodeVideoTextureEmissive && a.enable(20), T.alphaToCoverage && a.enable(21), T.numLightProbeGrids > 0 && a.enable(22), T.hasPositionAttribute && a.enable(23), v.push(a.mask);
  }
  function M(v) {
    const T = d[v.type];
    let w;
    if (T) {
      const F = yn[T];
      w = jd.clone(F.uniforms);
    } else w = v.uniforms;
    return w;
  }
  function E(v, T) {
    let w = h.get(T);
    return w !== void 0 ? ++w.usedTimes : (w = new xm(e, T, v, r), c.push(w), h.set(T, w)), w;
  }
  function S(v) {
    if (--v.usedTimes === 0) {
      const T = c.indexOf(v);
      c[T] = c[c.length - 1], c.pop(), h.delete(v.cacheKey), v.destroy();
    }
  }
  function b(v) {
    o.remove(v);
  }
  function A() {
    o.dispose();
  }
  return {
    getParameters: g,
    getProgramCacheKey: _,
    getUniforms: M,
    acquireProgram: E,
    releaseProgram: S,
    releaseShaderCache: b,
    programs: c,
    dispose: A
  };
}
function wm() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return e.has(a);
  }
  function n(a) {
    let o = e.get(a);
    return o === void 0 && (o = {}, e.set(a, o)), o;
  }
  function i(a) {
    e.delete(a);
  }
  function r(a, o, l) {
    e.get(a)[o] = l;
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: n,
    remove: i,
    update: r,
    dispose: s
  };
}
function Cm(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.materialVariant !== t.materialVariant ? e.materialVariant - t.materialVariant : e.z !== t.z ? e.z - t.z : e.id - t.id;
}
function Ml(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
}
function Sl() {
  const e = [];
  let t = 0;
  const n = [], i = [], r = [];
  function s() {
    t = 0, n.length = 0, i.length = 0, r.length = 0;
  }
  function a(d) {
    let f = 0;
    return d.isInstancedMesh && (f += 2), d.isSkinnedMesh && (f += 1), f;
  }
  function o(d, f, g, _, m, p) {
    let M = e[t];
    return M === void 0 ? (M = {
      id: d.id,
      object: d,
      geometry: f,
      material: g,
      materialVariant: a(d),
      groupOrder: _,
      renderOrder: d.renderOrder,
      z: m,
      group: p
    }, e[t] = M) : (M.id = d.id, M.object = d, M.geometry = f, M.material = g, M.materialVariant = a(d), M.groupOrder = _, M.renderOrder = d.renderOrder, M.z = m, M.group = p), t++, M;
  }
  function l(d, f, g, _, m, p, M) {
    M.reversedDepth === !0 && (m = -m);
    const E = o(d, f, g, _, m, p);
    g.transmission > 0 ? i.push(E) : g.transparent === !0 ? r.push(E) : n.push(E);
  }
  function c(d, f, g, _, m, p) {
    const M = o(d, f, g, _, m, p);
    g.transmission > 0 ? i.unshift(M) : g.transparent === !0 ? r.unshift(M) : n.unshift(M);
  }
  function h(d, f) {
    n.length > 1 && n.sort(d || Cm), i.length > 1 && i.sort(f || Ml), r.length > 1 && r.sort(f || Ml);
  }
  function u() {
    for (let d = t, f = e.length; d < f; d++) {
      const g = e[d];
      if (g.id === null) break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: s,
    push: l,
    unshift: c,
    finish: u,
    sort: h
  };
}
function Pm() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r) {
    const s = e.get(i);
    let a;
    return s === void 0 ? (a = new Sl(), e.set(i, [a])) : r >= s.length ? (a = new Sl(), s.push(a)) : a = s[r], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
function Lm() {
  const e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let n;
    switch (t.type) {
      case "SunLight":
      case "DirectionalLight":
        n = {
          direction: new B(),
          color: new Ce()
        };
        break;
      case "SpotLight":
        n = {
          position: new B(),
          direction: new B(),
          color: new Ce(),
          distance: 0,
          coneCos: 0,
          penumbraCos: 0,
          decay: 0
        };
        break;
      case "PointLight":
        n = {
          position: new B(),
          color: new Ce(),
          distance: 0,
          decay: 0
        };
        break;
      case "HemisphereLight":
        n = {
          direction: new B(),
          skyColor: new Ce(),
          groundColor: new Ce()
        };
        break;
      case "RectAreaLight":
        n = {
          color: new Ce(),
          position: new B(),
          halfWidth: new B(),
          halfHeight: new B()
        };
    }
    return e[t.id] = n, n;
  } };
}
function Im() {
  const e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let n;
    switch (t.type) {
      case "SunLight":
      case "DirectionalLight":
        n = {
          shadowIntensity: 1,
          shadowBias: 0,
          shadowNormalBias: 0,
          shadowRadius: 1,
          shadowMapSize: new ke()
        };
        break;
      case "SpotLight":
        n = {
          shadowIntensity: 1,
          shadowBias: 0,
          shadowNormalBias: 0,
          shadowRadius: 1,
          shadowMapSize: new ke()
        };
        break;
      case "PointLight":
        n = {
          shadowIntensity: 1,
          shadowBias: 0,
          shadowNormalBias: 0,
          shadowRadius: 1,
          shadowMapSize: new ke(),
          shadowCameraNear: 1,
          shadowCameraFar: 1e3
        };
    }
    return e[t.id] = n, n;
  } };
}
var Dm = 0;
function Nm(e, t) {
  return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0);
}
function Um(e) {
  const t = new Lm(), n = Im(), i = {
    version: 0,
    hash: {
      sunLength: -1,
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numSunShadows: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [
      0,
      0,
      0
    ],
    probe: [],
    sun: [],
    sunShadow: [],
    sunShadowMap: [],
    sunShadowMatrix: [],
    sunShadowCascade: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let c = 0; c < 9; c++) i.probe.push(new B());
  const r = new B(), s = new Ge(), a = new Ge();
  function o(c) {
    let h = 0, u = 0, d = 0;
    for (let U = 0; U < 9; U++) i.probe[U].set(0, 0, 0);
    let f = 0, g = 0, _ = 0, m = 0, p = 0, M = 0, E = 0, S = 0, b = 0, A = 0, v = 0, T = 0, w = 0, F = 0;
    c.sort(Nm);
    for (let U = 0, q = c.length; U < q; U++) {
      const I = c[U], V = I.color, $ = I.intensity, k = I.distance;
      let ae = null;
      if (I.shadow && I.shadow.map && (I.shadow.map.texture.format === 1030 ? ae = I.shadow.map.texture : ae = I.shadow.map.depthTexture || I.shadow.map.texture), I.isAmbientLight)
        h += V.r * $, u += V.g * $, d += V.b * $;
      else if (I.isLightProbe) {
        for (let Y = 0; Y < 9; Y++) i.probe[Y].addScaledVector(I.sh.coefficients[Y], $);
        F++;
      } else if (I.isSunLight) {
        const Y = t.get(I);
        if (Y.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const K = I.shadow, ie = n.get(I);
          ie.shadowIntensity = K.intensity, ie.shadowBias = K.bias, ie.shadowNormalBias = K.normalBias, ie.shadowRadius = K.radius, ie.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()), i.sunShadow[g] = ie, i.sunShadowMap[g] = ae;
          const Ee = K.getViewportCount();
          for (let Z = 0; Z < Ee; Z++)
            i.sunShadowMatrix[_ + Z] = K.getMatrix(Z), i.sunShadowCascade[_ + Z] = K._cascadeData[Z];
          _ += Ee, g++;
        }
        i.sun[f] = Y, f++;
      } else if (I.isDirectionalLight) {
        const Y = t.get(I);
        if (Y.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const K = I.shadow, ie = n.get(I);
          ie.shadowIntensity = K.intensity, ie.shadowBias = K.bias, ie.shadowNormalBias = K.normalBias, ie.shadowRadius = K.radius, ie.shadowMapSize = K.mapSize, i.directionalShadow[m] = ie, i.directionalShadowMap[m] = ae, i.directionalShadowMatrix[m] = I.shadow.matrix, b++;
        }
        i.directional[m] = Y, m++;
      } else if (I.isSpotLight) {
        const Y = t.get(I);
        Y.position.setFromMatrixPosition(I.matrixWorld), Y.color.copy(V).multiplyScalar($), Y.distance = k, Y.coneCos = Math.cos(I.angle), Y.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), Y.decay = I.decay, i.spot[M] = Y;
        const K = I.shadow;
        if (I.map && (i.spotLightMap[T] = I.map, T++, K.updateMatrices(I), I.castShadow && w++), i.spotLightMatrix[M] = K.matrix, I.castShadow) {
          const ie = n.get(I);
          ie.shadowIntensity = K.intensity, ie.shadowBias = K.bias, ie.shadowNormalBias = K.normalBias, ie.shadowRadius = K.radius, ie.shadowMapSize = K.mapSize, i.spotShadow[M] = ie, i.spotShadowMap[M] = ae, v++;
        }
        M++;
      } else if (I.isRectAreaLight) {
        const Y = t.get(I);
        Y.color.copy(V).multiplyScalar($), Y.halfWidth.set(I.width * 0.5, 0, 0), Y.halfHeight.set(0, I.height * 0.5, 0), i.rectArea[E] = Y, E++;
      } else if (I.isPointLight) {
        const Y = t.get(I);
        if (Y.color.copy(I.color).multiplyScalar(I.intensity), Y.distance = I.distance, Y.decay = I.decay, I.castShadow) {
          const K = I.shadow, ie = n.get(I);
          ie.shadowIntensity = K.intensity, ie.shadowBias = K.bias, ie.shadowNormalBias = K.normalBias, ie.shadowRadius = K.radius, ie.shadowMapSize = K.mapSize, ie.shadowCameraNear = K.camera.near, ie.shadowCameraFar = K.camera.far, i.pointShadow[p] = ie, i.pointShadowMap[p] = ae, i.pointShadowMatrix[p] = I.shadow.matrix, A++;
        }
        i.point[p] = Y, p++;
      } else if (I.isHemisphereLight) {
        const Y = t.get(I);
        Y.skyColor.copy(I.color).multiplyScalar($), Y.groundColor.copy(I.groundColor).multiplyScalar($), i.hemi[S] = Y, S++;
      }
    }
    E > 0 && (e.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = me.LTC_FLOAT_1, i.rectAreaLTC2 = me.LTC_FLOAT_2) : (i.rectAreaLTC1 = me.LTC_HALF_1, i.rectAreaLTC2 = me.LTC_HALF_2)), i.ambient[0] = h, i.ambient[1] = u, i.ambient[2] = d;
    const P = i.hash;
    (P.sunLength !== f || P.directionalLength !== m || P.pointLength !== p || P.spotLength !== M || P.rectAreaLength !== E || P.hemiLength !== S || P.numSunShadows !== g || P.numDirectionalShadows !== b || P.numPointShadows !== A || P.numSpotShadows !== v || P.numSpotMaps !== T || P.numLightProbes !== F) && (i.sun.length = f, i.directional.length = m, i.spot.length = M, i.rectArea.length = E, i.point.length = p, i.hemi.length = S, i.sunShadow.length = g, i.sunShadowMap.length = g, i.sunShadowMatrix.length = _, i.sunShadowCascade.length = _, i.directionalShadow.length = b, i.directionalShadowMap.length = b, i.directionalShadowMatrix.length = b, i.pointShadow.length = A, i.pointShadowMap.length = A, i.pointShadowMatrix.length = A, i.spotShadow.length = v, i.spotShadowMap.length = v, i.spotLightMatrix.length = v + T - w, i.spotLightMap.length = T, i.numSpotLightShadowsWithMaps = w, i.numLightProbes = F, P.sunLength = f, P.directionalLength = m, P.pointLength = p, P.spotLength = M, P.rectAreaLength = E, P.hemiLength = S, P.numSunShadows = g, P.numDirectionalShadows = b, P.numPointShadows = A, P.numSpotShadows = v, P.numSpotMaps = T, P.numLightProbes = F, i.version = Dm++);
  }
  function l(c, h) {
    let u = 0, d = 0, f = 0, g = 0, _ = 0, m = 0;
    const p = h.matrixWorldInverse;
    for (let M = 0, E = c.length; M < E; M++) {
      const S = c[M];
      if (S.isSunLight) {
        const b = i.sun[u];
        b.direction.setFromMatrixPosition(S.matrixWorld), b.direction.transformDirection(p), u++;
      } else if (S.isDirectionalLight) {
        const b = i.directional[d];
        b.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(p), d++;
      } else if (S.isSpotLight) {
        const b = i.spot[g];
        b.position.setFromMatrixPosition(S.matrixWorld), b.position.applyMatrix4(p), b.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), b.direction.sub(r), b.direction.transformDirection(p), g++;
      } else if (S.isRectAreaLight) {
        const b = i.rectArea[_];
        b.position.setFromMatrixPosition(S.matrixWorld), b.position.applyMatrix4(p), a.identity(), s.copy(S.matrixWorld), s.premultiply(p), a.extractRotation(s), b.halfWidth.set(S.width * 0.5, 0, 0), b.halfHeight.set(0, S.height * 0.5, 0), b.halfWidth.applyMatrix4(a), b.halfHeight.applyMatrix4(a), _++;
      } else if (S.isPointLight) {
        const b = i.point[f];
        b.position.setFromMatrixPosition(S.matrixWorld), b.position.applyMatrix4(p), f++;
      } else if (S.isHemisphereLight) {
        const b = i.hemi[m];
        b.direction.setFromMatrixPosition(S.matrixWorld), b.direction.transformDirection(p), m++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: i
  };
}
function yl(e) {
  const t = new Um(e), n = [], i = [], r = [];
  function s(u) {
    h.camera = u, n.length = 0, i.length = 0, r.length = 0;
  }
  function a(u) {
    u.isLightProbeGrid ? r.push(u) : n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function l() {
    t.setup(n), r.sort((u, d) => u.priority - d.priority || u.id - d.id);
  }
  function c(u) {
    t.setupView(n, u);
  }
  const h = {
    lightsArray: n,
    shadowsArray: i,
    lightProbeGridArray: r,
    camera: null,
    lights: t,
    transmissionRenderTarget: {},
    textureUnits: 0
  };
  return {
    init: s,
    state: h,
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o
  };
}
function Om(e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new yl(e), t.set(r, [o])) : s >= a.length ? (o = new yl(e), a.push(o)) : o = a[s], o;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
var Fm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Bm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, km = [
  /* @__PURE__ */ new B(1, 0, 0),
  /* @__PURE__ */ new B(-1, 0, 0),
  /* @__PURE__ */ new B(0, 1, 0),
  /* @__PURE__ */ new B(0, -1, 0),
  /* @__PURE__ */ new B(0, 0, 1),
  /* @__PURE__ */ new B(0, 0, -1)
], zm = [
  /* @__PURE__ */ new B(0, -1, 0),
  /* @__PURE__ */ new B(0, -1, 0),
  /* @__PURE__ */ new B(0, 0, 1),
  /* @__PURE__ */ new B(0, 0, -1),
  /* @__PURE__ */ new B(0, -1, 0),
  /* @__PURE__ */ new B(0, -1, 0)
], xl = /* @__PURE__ */ new Ge(), hr = /* @__PURE__ */ new B(), ga = /* @__PURE__ */ new B();
function Hm(e, t, n) {
  let i = new wr();
  const r = new ke(), s = new ke(), a = new st(), o = new rf(), l = new sf(), c = {}, h = n.maxTextureSize, u = {
    0: 1,
    1: 0,
    2: 2
  }, d = new vi({
    defines: { VSM_SAMPLES: 8 },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ke() },
      radius: { value: 4 }
    },
    vertexShader: Fm,
    fragmentShader: Bm
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new Bt();
  g.setAttribute("position", new sn(new Float32Array([
    -1,
    -1,
    0.5,
    3,
    -1,
    0.5,
    -1,
    3,
    0.5
  ]), 3));
  const _ = new Xt(g, d), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let p = this.type;
  this.render = function(A, v, T) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || A.length === 0) return;
    this.type === 2 && (xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
    const w = e.getRenderTarget(), F = e.getActiveCubeFace(), P = e.getActiveMipmapLevel(), U = e.state;
    U.setBlending(0), U.buffers.depth.getReversed() === !0 ? U.buffers.color.setClear(0, 0, 0, 0) : U.buffers.color.setClear(1, 1, 1, 1), U.buffers.depth.setTest(!0), U.setScissorTest(!1);
    const q = p !== this.type;
    q && v.traverse(function(I) {
      I.material && (Array.isArray(I.material) ? I.material.forEach((V) => V.needsUpdate = !0) : I.material.needsUpdate = !0);
    });
    for (let I = 0, V = A.length; I < V; I++) {
      const $ = A[I], k = $.shadow;
      if (k === void 0) {
        xe("WebGLShadowMap:", $, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      r.copy(k.mapSize);
      const ae = k.getFrameExtents();
      r.multiply(ae), s.copy(k.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / ae.x), r.x = s.x * ae.x, k.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / ae.y), r.y = s.y * ae.y, k.mapSize.y = s.y));
      const Y = e.state.buffers.depth.getReversed();
      if (k.camera._reversedDepth = Y, k.map === null || q === !0) {
        if (k.map !== null && (k.map.depthTexture !== null && (k.map.depthTexture.dispose(), k.map.depthTexture = null), k.map.dispose()), this.type === 3) {
          if ($.isPointLight) {
            xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          k.map = new En(r.x, r.y, {
            format: As,
            type: ii,
            minFilter: rn,
            magFilter: rn,
            generateMipmaps: !1
          }), k.map.texture.name = $.name + ".shadowMap", k.map.depthTexture = new Wi(r.x, r.y, Ki), k.map.depthTexture.name = $.name + ".shadowMapDepth", k.map.depthTexture.format = Er, k.map.depthTexture.compareFunction = null, k.map.depthTexture.minFilter = Dt, k.map.depthTexture.magFilter = Dt;
        } else
          $.isPointLight ? (k.map = new Xa(r.x), k.map.depthTexture = new Mc(r.x, mi)) : (k.map = new En(r.x, r.y), k.map.depthTexture = new Wi(r.x, r.y, mi)), k.map.depthTexture.name = $.name + ".shadowMap", k.map.depthTexture.format = Er, this.type === 1 ? (k.map.depthTexture.compareFunction = Y ? 518 : 515, k.map.depthTexture.minFilter = rn, k.map.depthTexture.magFilter = rn) : (k.map.depthTexture.compareFunction = null, k.map.depthTexture.minFilter = Dt, k.map.depthTexture.magFilter = Dt);
        k.camera.updateProjectionMatrix();
      }
      k.map.isWebGLCubeRenderTarget !== !0 && (k.map.width !== r.x || k.map.height !== r.y) && k.map.setSize(r.x, r.y);
      const K = k.map.isWebGLCubeRenderTarget ? 6 : k.getViewportCount();
      $.isPointLight !== !0 && k.updateMatrices($, T);
      const ie = (k.camera.layers.mask & 4294967294) !== 0 ? k.camera.layers : T.layers;
      for (let Ee = 0; Ee < K; Ee++) {
        const Z = k.getCamera(Ee);
        if ($.isPointLight) {
          const ne = k.camera, _e = k.matrix, Ae = $.distance || ne.far;
          Ae !== ne.far && (ne.far = Ae, ne.updateProjectionMatrix()), hr.setFromMatrixPosition($.matrixWorld), ne.position.copy(hr), ga.copy(ne.position), ga.add(km[Ee]), ne.up.copy(zm[Ee]), ne.lookAt(ga), ne.updateMatrixWorld(), _e.makeTranslation(-hr.x, -hr.y, -hr.z), xl.multiplyMatrices(ne.projectionMatrix, ne.matrixWorldInverse), k._frustum.setFromProjectionMatrix(xl, ne.coordinateSystem, ne.reversedDepth);
        }
        if (k.map.isWebGLCubeRenderTarget)
          e.setRenderTarget(k.map, Ee), e.clear();
        else {
          Ee === 0 && (e.setRenderTarget(k.map), e.clear());
          const ne = k.getViewport(Ee);
          a.set(s.x * ne.x, s.y * ne.y, s.x * ne.z, s.y * ne.w), U.viewport(a);
        }
        i = k.getFrustum(Ee), S(v, T, Z, $, ie, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === 3 && M(k, T), k.needsUpdate = !1;
    }
    p = this.type, m.needsUpdate = !1, e.setRenderTarget(w, F, P);
  };
  function M(A, v) {
    const T = t.update(_);
    d.defines.VSM_SAMPLES !== A.blurSamples && (d.defines.VSM_SAMPLES = A.blurSamples, f.defines.VSM_SAMPLES = A.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), A.mapPass === null ? A.mapPass = new En(r.x, r.y, {
      format: As,
      type: ii
    }) : (A.mapPass.width !== A.map.width || A.mapPass.height !== A.map.height) && A.mapPass.setSize(A.map.width, A.map.height), d.uniforms.shadow_pass.value = A.map.depthTexture, d.uniforms.resolution.value.set(A.map.width, A.map.height), d.uniforms.radius.value = A.radius, e.setRenderTarget(A.mapPass), e.clear(), e.renderBufferDirect(v, null, T, d, _, null), f.uniforms.shadow_pass.value = A.mapPass.texture, f.uniforms.resolution.value.set(A.map.width, A.map.height), f.uniforms.radius.value = A.radius, e.setRenderTarget(A.map), e.clear(), e.renderBufferDirect(v, null, T, f, _, null);
  }
  function E(A, v, T, w) {
    let F = null;
    const P = T.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (P !== void 0) F = P;
    else if (F = T.isPointLight === !0 ? l : o, e.localClippingEnabled && v.clipShadows === !0 && Array.isArray(v.clippingPlanes) && v.clippingPlanes.length !== 0 || v.displacementMap && v.displacementScale !== 0 || v.alphaMap && v.alphaTest > 0 || v.map && v.alphaTest > 0 || v.alphaToCoverage === !0) {
      const U = F.uuid, q = v.uuid;
      let I = c[U];
      I === void 0 && (I = {}, c[U] = I);
      let V = I[q];
      V === void 0 && (V = F.clone(), I[q] = V, v.addEventListener("dispose", b)), F = V;
    }
    if (F.visible = v.visible, F.wireframe = v.wireframe, w === 3 ? F.side = v.shadowSide !== null ? v.shadowSide : v.side : F.side = v.shadowSide !== null ? v.shadowSide : u[v.side], F.alphaMap = v.alphaMap, F.alphaTest = v.alphaToCoverage === !0 ? 0.5 : v.alphaTest, F.map = v.map, F.clipShadows = v.clipShadows, F.clippingPlanes = v.clippingPlanes, F.clipIntersection = v.clipIntersection, F.displacementMap = v.displacementMap, F.displacementScale = v.displacementScale, F.displacementBias = v.displacementBias, F.wireframeLinewidth = v.wireframeLinewidth, F.linewidth = v.linewidth, T.isPointLight === !0 && F.isMeshDistanceMaterial === !0) {
      const U = e.properties.get(F);
      U.light = T;
    }
    return F;
  }
  function S(A, v, T, w, F, P) {
    if (A.visible === !1) return;
    if (A.layers.test(F) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && P === 3) && (!A.frustumCulled || A.intersectsFrustum(i))) {
      A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, A.matrixWorld);
      const q = t.update(A), I = A.material;
      if (Array.isArray(I)) {
        const V = q.groups;
        for (let $ = 0, k = V.length; $ < k; $++) {
          const ae = V[$], Y = I[ae.materialIndex];
          if (Y && Y.visible) {
            const K = E(A, Y, w, P);
            A.onBeforeShadow(e, A, v, T, q, K, ae), e.renderBufferDirect(T, null, q, K, A, ae), A.onAfterShadow(e, A, v, T, q, K, ae);
          }
        }
      } else if (I.visible) {
        const V = E(A, I, w, P);
        A.onBeforeShadow(e, A, v, T, q, V, null), e.renderBufferDirect(T, null, q, V, A, null), A.onAfterShadow(e, A, v, T, q, V, null);
      }
    }
    const U = A.children;
    for (let q = 0, I = U.length; q < I; q++) S(U[q], v, T, w, F, P);
  }
  function b(A) {
    A.target.removeEventListener("dispose", b);
    for (const v in c) {
      const T = c[v], w = A.target.uuid;
      w in T && (T[w].dispose(), delete T[w]);
    }
  }
}
function Gm(e, t) {
  function n() {
    let C = !1;
    const X = new st();
    let Q = null;
    const re = new st(0, 0, 0, 0);
    return {
      setMask: function(de) {
        Q !== de && !C && (e.colorMask(de, de, de, de), Q = de);
      },
      setLocked: function(de) {
        C = de;
      },
      setClear: function(de, ce, be, te, Ue) {
        Ue === !0 && (de *= te, ce *= te, be *= te), X.set(de, ce, be, te), re.equals(X) === !1 && (e.clearColor(de, ce, be, te), re.copy(X));
      },
      reset: function() {
        C = !1, Q = null, re.set(-1, 0, 0, 0);
      }
    };
  }
  function i() {
    let C = !1, X = !1, Q = null, re = null, de = null;
    return {
      setReversed: function(ce) {
        if (X !== ce) {
          const be = t.get("EXT_clip_control");
          ce ? be.clipControlEXT(be.LOWER_LEFT_EXT, be.ZERO_TO_ONE_EXT) : be.clipControlEXT(be.LOWER_LEFT_EXT, be.NEGATIVE_ONE_TO_ONE_EXT), X = ce;
          const te = de;
          de = null, this.setClear(te);
        }
      },
      getReversed: function() {
        return X;
      },
      setTest: function(ce) {
        ce ? ue(e.DEPTH_TEST) : Ve(e.DEPTH_TEST);
      },
      setMask: function(ce) {
        Q !== ce && !C && (e.depthMask(ce), Q = ce);
      },
      setFunc: function(ce) {
        if (X && (ce = $u[ce]), re !== ce) {
          switch (ce) {
            case 0:
              e.depthFunc(e.NEVER);
              break;
            case 1:
              e.depthFunc(e.ALWAYS);
              break;
            case 2:
              e.depthFunc(e.LESS);
              break;
            case 3:
              e.depthFunc(e.LEQUAL);
              break;
            case 4:
              e.depthFunc(e.EQUAL);
              break;
            case 5:
              e.depthFunc(e.GEQUAL);
              break;
            case 6:
              e.depthFunc(e.GREATER);
              break;
            case 7:
              e.depthFunc(e.NOTEQUAL);
              break;
            default:
              e.depthFunc(e.LEQUAL);
          }
          re = ce;
        }
      },
      setLocked: function(ce) {
        C = ce;
      },
      setClear: function(ce) {
        de !== ce && (de = ce, X && (ce = 1 - ce), e.clearDepth(ce));
      },
      reset: function() {
        C = !1, Q = null, re = null, de = null, X = !1;
      }
    };
  }
  function r() {
    let C = !1, X = null, Q = null, re = null, de = null, ce = null, be = null, te = null, Ue = null;
    return {
      setTest: function(Ie) {
        C || (Ie ? ue(e.STENCIL_TEST) : Ve(e.STENCIL_TEST));
      },
      setMask: function(Ie) {
        X !== Ie && !C && (e.stencilMask(Ie), X = Ie);
      },
      setFunc: function(Ie, Ke, ge) {
        (Q !== Ie || re !== Ke || de !== ge) && (e.stencilFunc(Ie, Ke, ge), Q = Ie, re = Ke, de = ge);
      },
      setOp: function(Ie, Ke, ge) {
        (ce !== Ie || be !== Ke || te !== ge) && (e.stencilOp(Ie, Ke, ge), ce = Ie, be = Ke, te = ge);
      },
      setLocked: function(Ie) {
        C = Ie;
      },
      setClear: function(Ie) {
        Ue !== Ie && (e.clearStencil(Ie), Ue = Ie);
      },
      reset: function() {
        C = !1, X = null, Q = null, re = null, de = null, ce = null, be = null, te = null, Ue = null;
      }
    };
  }
  const s = new n(), a = new i(), o = new r();
  let l = {};
  const c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = {}, f = /* @__PURE__ */ new WeakMap(), g = [], _ = null, m = !1, p = null, M = null, E = null, S = null, b = null, A = null, v = null, T = new Ce(0, 0, 0), w = 0, F = !1, P = null, U = null, q = null, I = null, V = null;
  const $ = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let k = !1, ae = 0;
  const Y = e.getParameter(e.VERSION);
  Y.indexOf("WebGL") !== -1 ? (ae = parseFloat(/^WebGL (\d)/.exec(Y)[1]), k = ae >= 1) : Y.indexOf("OpenGL ES") !== -1 && (ae = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), k = ae >= 2);
  let K = null, ie = {};
  const Ee = e.getParameter(e.SCISSOR_BOX), Z = e.getParameter(e.VIEWPORT), ne = new st().fromArray(Ee), _e = new st().fromArray(Z);
  function Ae(C, X, Q, re) {
    const de = /* @__PURE__ */ new Uint8Array(4), ce = e.createTexture();
    e.bindTexture(C, ce), e.texParameteri(C, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(C, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let be = 0; be < Q; be++) C === e.TEXTURE_3D || C === e.TEXTURE_2D_ARRAY ? e.texImage3D(X, 0, e.RGBA, 1, 1, re, 0, e.RGBA, e.UNSIGNED_BYTE, de) : e.texImage2D(X + be, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, de);
    return ce;
  }
  const we = {};
  we[e.TEXTURE_2D] = Ae(e.TEXTURE_2D, e.TEXTURE_2D, 1), we[e.TEXTURE_CUBE_MAP] = Ae(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), we[e.TEXTURE_2D_ARRAY] = Ae(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), we[e.TEXTURE_3D] = Ae(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), ue(e.DEPTH_TEST), a.setFunc(3), Yt(!1), gt(1), ue(e.CULL_FACE), mt(0);
  function ue(C) {
    h[C] !== !0 && (e.enable(C), h[C] = !0);
  }
  function Ve(C) {
    h[C] !== !1 && (e.disable(C), h[C] = !1);
  }
  function Je(C, X) {
    return d[C] !== X ? (e.bindFramebuffer(C, X), d[C] = X, C === e.DRAW_FRAMEBUFFER && (d[e.FRAMEBUFFER] = X), C === e.FRAMEBUFFER && (d[e.DRAW_FRAMEBUFFER] = X), !0) : !1;
  }
  function Pe(C, X) {
    let Q = g, re = !1;
    if (C) {
      Q = f.get(X), Q === void 0 && (Q = [], f.set(X, Q));
      const de = C.textures;
      if (Q.length !== de.length || Q[0] !== e.COLOR_ATTACHMENT0) {
        for (let ce = 0, be = de.length; ce < be; ce++) Q[ce] = e.COLOR_ATTACHMENT0 + ce;
        Q.length = de.length, re = !0;
      }
    } else Q[0] !== e.BACK && (Q[0] = e.BACK, re = !0);
    re && e.drawBuffers(Q);
  }
  function Tt(C) {
    return _ !== C ? (e.useProgram(C), _ = C, !0) : !1;
  }
  const Nt = {
    100: e.FUNC_ADD,
    101: e.FUNC_SUBTRACT,
    102: e.FUNC_REVERSE_SUBTRACT
  };
  Nt[103] = e.MIN, Nt[104] = e.MAX;
  const Et = {
    200: e.ZERO,
    201: e.ONE,
    202: e.SRC_COLOR,
    204: e.SRC_ALPHA,
    210: e.SRC_ALPHA_SATURATE,
    208: e.DST_COLOR,
    206: e.DST_ALPHA,
    203: e.ONE_MINUS_SRC_COLOR,
    205: e.ONE_MINUS_SRC_ALPHA,
    209: e.ONE_MINUS_DST_COLOR,
    207: e.ONE_MINUS_DST_ALPHA,
    211: e.CONSTANT_COLOR,
    212: e.ONE_MINUS_CONSTANT_COLOR,
    213: e.CONSTANT_ALPHA,
    214: e.ONE_MINUS_CONSTANT_ALPHA
  };
  function mt(C, X, Q, re, de, ce, be, te, Ue, Ie) {
    if (C === 0) {
      m === !0 && (Ve(e.BLEND), m = !1);
      return;
    }
    if (m === !1 && (ue(e.BLEND), m = !0), C !== 5) {
      if (C !== p || Ie !== F) {
        if ((M !== 100 || b !== 100) && (e.blendEquation(e.FUNC_ADD), M = 100, b = 100), Ie) switch (C) {
          case 1:
            e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e.blendFunc(e.ONE, e.ONE);
            break;
          case 3:
            e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
            break;
          case 4:
            e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
            break;
          default:
            De("WebGLState: Invalid blending: ", C);
        }
        else switch (C) {
          case 1:
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
            break;
          case 3:
            De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case 4:
            De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            De("WebGLState: Invalid blending: ", C);
        }
        E = null, S = null, A = null, v = null, T.set(0, 0, 0), w = 0, p = C, F = Ie;
      }
      return;
    }
    de = de || X, ce = ce || Q, be = be || re, (X !== M || de !== b) && (e.blendEquationSeparate(Nt[X], Nt[de]), M = X, b = de), (Q !== E || re !== S || ce !== A || be !== v) && (e.blendFuncSeparate(Et[Q], Et[re], Et[ce], Et[be]), E = Q, S = re, A = ce, v = be), (te.equals(T) === !1 || Ue !== w) && (e.blendColor(te.r, te.g, te.b, Ue), T.copy(te), w = Ue), p = C, F = !1;
  }
  function kt(C, X) {
    C.side === 2 ? Ve(e.CULL_FACE) : ue(e.CULL_FACE);
    let Q = C.side === 1;
    X && (Q = !Q), Yt(Q), C.blending === 1 && C.transparent === !1 ? mt(0) : mt(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), a.setFunc(C.depthFunc), a.setTest(C.depthTest), a.setMask(C.depthWrite), s.setMask(C.colorWrite);
    const re = C.stencilWrite;
    o.setTest(re), re && (o.setMask(C.stencilWriteMask), o.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), o.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), zt(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === !0 ? ue(e.SAMPLE_ALPHA_TO_COVERAGE) : Ve(e.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Yt(C) {
    P !== C && (C ? e.frontFace(e.CW) : e.frontFace(e.CCW), P = C);
  }
  function gt(C) {
    C !== 0 ? (ue(e.CULL_FACE), C !== U && (C === 1 ? e.cullFace(e.BACK) : C === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : Ve(e.CULL_FACE), U = C;
  }
  function Rt(C) {
    C !== q && (k && e.lineWidth(C), q = C);
  }
  function zt(C, X, Q) {
    C ? (ue(e.POLYGON_OFFSET_FILL), (I !== X || V !== Q) && (I = X, V = Q, a.getReversed() && (X = -X, Q = -Q), e.polygonOffset(X, Q))) : Ve(e.POLYGON_OFFSET_FILL);
  }
  function Ht(C) {
    C ? ue(e.SCISSOR_TEST) : Ve(e.SCISSOR_TEST);
  }
  function on(C) {
    C === void 0 && (C = e.TEXTURE0 + $ - 1), K !== C && (e.activeTexture(C), K = C);
  }
  function N(C, X, Q) {
    Q === void 0 && (K === null ? Q = e.TEXTURE0 + $ - 1 : Q = K);
    let re = ie[Q];
    re === void 0 && (re = {
      type: void 0,
      texture: void 0
    }, ie[Q] = re), (re.type !== C || re.texture !== X) && (K !== Q && (e.activeTexture(Q), K = Q), e.bindTexture(C, X || we[C]), re.type = C, re.texture = X);
  }
  function ln() {
    const C = ie[K];
    C !== void 0 && C.type !== void 0 && (e.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function nt() {
    try {
      e.compressedTexImage2D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function yt() {
    try {
      e.compressedTexImage3D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function pe() {
    try {
      e.texSubImage2D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function it() {
    try {
      e.texSubImage3D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function Le() {
    try {
      e.compressedTexSubImage2D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function Oe() {
    try {
      e.compressedTexSubImage3D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function wt() {
    try {
      e.texStorage2D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function R() {
    try {
      e.texStorage3D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function y() {
    try {
      e.texImage2D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function H() {
    try {
      e.texImage3D(...arguments);
    } catch (C) {
      De("WebGLState:", C);
    }
  }
  function ee(C) {
    return u[C] !== void 0 ? u[C] : e.getParameter(C);
  }
  function J(C, X) {
    u[C] !== X && (e.pixelStorei(C, X), u[C] = X);
  }
  function oe(C) {
    ne.equals(C) === !1 && (e.scissor(C.x, C.y, C.z, C.w), ne.copy(C));
  }
  function le(C) {
    _e.equals(C) === !1 && (e.viewport(C.x, C.y, C.z, C.w), _e.copy(C));
  }
  function D(C, X) {
    let Q = c.get(X);
    Q === void 0 && (Q = /* @__PURE__ */ new WeakMap(), c.set(X, Q));
    let re = Q.get(C);
    re === void 0 && (re = e.getUniformBlockIndex(X, C.name), e.uniformBlockBinding(X, re, re), Q.set(C, re));
  }
  function j(C, X, Q) {
    const re = c.get(X).get(C);
    l[re] !== Q && (e.bindBufferBase(e.UNIFORM_BUFFER, re, Q), l[re] = Q);
  }
  function Me() {
    e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), a.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), h = {}, u = {}, K = null, ie = {}, d = {}, l = {}, f = /* @__PURE__ */ new WeakMap(), g = [], _ = null, m = !1, p = null, M = null, E = null, S = null, b = null, A = null, v = null, T = new Ce(0, 0, 0), w = 0, F = !1, P = null, U = null, q = null, I = null, V = null, ne.set(0, 0, e.canvas.width, e.canvas.height), _e.set(0, 0, e.canvas.width, e.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: ue,
    disable: Ve,
    bindFramebuffer: Je,
    drawBuffers: Pe,
    useProgram: Tt,
    setBlending: mt,
    setMaterial: kt,
    setFlipSided: Yt,
    setCullFace: gt,
    setLineWidth: Rt,
    setPolygonOffset: zt,
    setScissorTest: Ht,
    activeTexture: on,
    bindTexture: N,
    unbindTexture: ln,
    compressedTexImage2D: nt,
    compressedTexImage3D: yt,
    texImage2D: y,
    texImage3D: H,
    pixelStorei: J,
    getParameter: ee,
    updateUBOMapping: D,
    uniformBlockBinding: j,
    texStorage2D: wt,
    texStorage3D: R,
    texSubImage2D: pe,
    texSubImage3D: it,
    compressedTexSubImage2D: Le,
    compressedTexSubImage3D: Oe,
    scissor: oe,
    viewport: le,
    reset: Me
  };
}
function Vm(e, t, n, i, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new ke(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new Set();
  let d;
  const f = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new Set(), _ = new FinalizationRegistry((R) => g.delete(R));
  let m = !1;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function p(R, y) {
    return m ? new OffscreenCanvas(R, y) : Rr("canvas");
  }
  function M(R, y, H) {
    let ee = 1;
    const J = wt(R);
    if ((J.width > H || J.height > H) && (ee = H / Math.max(J.width, J.height)), ee < 1)
      if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap || typeof VideoFrame < "u" && R instanceof VideoFrame) {
        const oe = Math.floor(ee * J.width), le = Math.floor(ee * J.height);
        d === void 0 && (d = p(oe, le));
        const D = y ? p(oe, le) : d;
        return D.width = oe, D.height = le, D.getContext("2d").drawImage(R, 0, 0, oe, le), xe("WebGLRenderer: Texture has been resized from (" + J.width + "x" + J.height + ") to (" + oe + "x" + le + ")."), D;
      } else
        return "data" in R && xe("WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."), R;
    return R;
  }
  function E(R) {
    return R.generateMipmaps;
  }
  function S(R) {
    e.generateMipmap(R);
  }
  function b(R) {
    return R.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : R.isWebGL3DRenderTarget ? e.TEXTURE_3D : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
  }
  function A(R, y, H, ee, J, oe = !1) {
    if (R !== null) {
      if (e[R] !== void 0) return e[R];
      xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let le;
    ee && (le = t.get("EXT_texture_norm16"), le || xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let D = y;
    if (y === e.RED && (H === e.FLOAT && (D = e.R32F), H === e.HALF_FLOAT && (D = e.R16F), H === e.UNSIGNED_BYTE && (D = e.R8), H === e.UNSIGNED_SHORT && le && (D = le.R16_EXT), H === e.SHORT && le && (D = le.R16_SNORM_EXT)), y === e.RED_INTEGER && (H === e.UNSIGNED_BYTE && (D = e.R8UI), H === e.UNSIGNED_SHORT && (D = e.R16UI), H === e.UNSIGNED_INT && (D = e.R32UI), H === e.BYTE && (D = e.R8I), H === e.SHORT && (D = e.R16I), H === e.INT && (D = e.R32I)), y === e.RG && (H === e.FLOAT && (D = e.RG32F), H === e.HALF_FLOAT && (D = e.RG16F), H === e.UNSIGNED_BYTE && (D = e.RG8), H === e.UNSIGNED_SHORT && le && (D = le.RG16_EXT), H === e.SHORT && le && (D = le.RG16_SNORM_EXT)), y === e.RG_INTEGER && (H === e.UNSIGNED_BYTE && (D = e.RG8UI), H === e.UNSIGNED_SHORT && (D = e.RG16UI), H === e.UNSIGNED_INT && (D = e.RG32UI), H === e.BYTE && (D = e.RG8I), H === e.SHORT && (D = e.RG16I), H === e.INT && (D = e.RG32I)), y === e.RGB_INTEGER && (H === e.UNSIGNED_BYTE && (D = e.RGB8UI), H === e.UNSIGNED_SHORT && (D = e.RGB16UI), H === e.UNSIGNED_INT && (D = e.RGB32UI), H === e.BYTE && (D = e.RGB8I), H === e.SHORT && (D = e.RGB16I), H === e.INT && (D = e.RGB32I)), y === e.RGBA_INTEGER && (H === e.UNSIGNED_BYTE && (D = e.RGBA8UI), H === e.UNSIGNED_SHORT && (D = e.RGBA16UI), H === e.UNSIGNED_INT && (D = e.RGBA32UI), H === e.BYTE && (D = e.RGBA8I), H === e.SHORT && (D = e.RGBA16I), H === e.INT && (D = e.RGBA32I)), y === e.RGB && (H === e.UNSIGNED_SHORT && le && (D = le.RGB16_EXT), H === e.SHORT && le && (D = le.RGB16_SNORM_EXT), H === e.UNSIGNED_INT_5_9_9_9_REV && (D = e.RGB9_E5), H === e.UNSIGNED_INT_10F_11F_11F_REV && (D = e.R11F_G11F_B10F)), y === e.RGBA) {
      const j = oe ? Rs : qe.getTransfer(J);
      H === e.FLOAT && (D = e.RGBA32F), H === e.HALF_FLOAT && (D = e.RGBA16F), H === e.UNSIGNED_BYTE && (D = j === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), H === e.UNSIGNED_SHORT && le && (D = le.RGBA16_EXT), H === e.SHORT && le && (D = le.RGBA16_SNORM_EXT), H === e.UNSIGNED_SHORT_4_4_4_4 && (D = e.RGBA4), H === e.UNSIGNED_SHORT_5_5_5_1 && (D = e.RGB5_A1);
    }
    return (D === e.R16F || D === e.R32F || D === e.RG16F || D === e.RG32F || D === e.RGBA16F || D === e.RGBA32F) && t.get("EXT_color_buffer_float"), D;
  }
  function v(R, y) {
    let H;
    return R ? y === null || y === 1014 || y === 1020 ? H = e.DEPTH24_STENCIL8 : y === 1015 ? H = e.DEPTH32F_STENCIL8 : y === 1012 && (H = e.DEPTH24_STENCIL8, xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : y === null || y === 1014 || y === 1020 ? H = e.DEPTH_COMPONENT24 : y === 1015 ? H = e.DEPTH_COMPONENT32F : y === 1012 && (H = e.DEPTH_COMPONENT16), H;
  }
  function T(R, y) {
    return E(R) === !0 || R.isFramebufferTexture && R.minFilter !== 1003 && R.minFilter !== 1006 ? Math.log2(Math.max(y.width, y.height)) + 1 : R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? y.mipmaps.length : 1;
  }
  function w(R) {
    const y = new WeakRef(R);
    i.get(R).__ref = y, g.add(y), _.register(R, y, y);
  }
  function F(R) {
    const y = i.get(R).__ref;
    y !== void 0 && (g.delete(y), _.unregister(y));
  }
  function P(R) {
    q(R.target);
  }
  function U(R) {
    I(R.target);
  }
  function q(R) {
    R.removeEventListener("dispose", P), F(R), $(R), R.isVideoTexture && h.delete(R), R.isHTMLTexture && u.delete(R);
  }
  function I(R) {
    R.removeEventListener("dispose", U), F(R), ae(R);
  }
  function V() {
    for (const R of g) {
      const y = R.deref();
      y !== void 0 && (y.isRenderTarget === !0 ? I(y) : q(y));
    }
    g.clear(), u.clear();
  }
  function $(R) {
    const y = i.get(R);
    if (y.__webglInit === void 0) return;
    const H = R.source, ee = f.get(H);
    if (ee) {
      const J = ee[y.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && k(R), Object.keys(ee).length === 0 && f.delete(H);
    }
    i.remove(R);
  }
  function k(R) {
    const y = i.get(R);
    e.deleteTexture(y.__webglTexture);
    const H = R.source, ee = f.get(H);
    delete ee[y.__cacheKey], a.memory.textures--;
  }
  function ae(R) {
    const y = i.get(R);
    y.__depthDisposeCallback && y.__depthDisposeCallback();
    const H = R.depthTexture;
    if (H && H.renderTarget === R && q(H), R.isWebGLCubeRenderTarget) for (let J = 0; J < 6; J++) {
      if (Array.isArray(y.__webglFramebuffer[J])) for (let oe = 0; oe < y.__webglFramebuffer[J].length; oe++) e.deleteFramebuffer(y.__webglFramebuffer[J][oe]);
      else e.deleteFramebuffer(y.__webglFramebuffer[J]);
      y.__webglDepthbuffer && e.deleteRenderbuffer(y.__webglDepthbuffer[J]);
    }
    else {
      if (Array.isArray(y.__webglFramebuffer)) for (let J = 0; J < y.__webglFramebuffer.length; J++) e.deleteFramebuffer(y.__webglFramebuffer[J]);
      else e.deleteFramebuffer(y.__webglFramebuffer);
      if (y.__webglDepthbuffer && e.deleteRenderbuffer(y.__webglDepthbuffer), y.__webglMultisampledFramebuffer && e.deleteFramebuffer(y.__webglMultisampledFramebuffer), y.__webglColorRenderbuffer)
        for (let J = 0; J < y.__webglColorRenderbuffer.length; J++) y.__webglColorRenderbuffer[J] && e.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);
      y.__webglDepthRenderbuffer && e.deleteRenderbuffer(y.__webglDepthRenderbuffer);
    }
    const ee = R.textures;
    for (let J = 0, oe = ee.length; J < oe; J++) {
      const le = i.get(ee[J]);
      le.__webglTexture && (e.deleteTexture(le.__webglTexture), a.memory.textures--), i.remove(ee[J]);
    }
    i.remove(R);
  }
  let Y = 0;
  function K() {
    Y = 0;
  }
  function ie() {
    return Y;
  }
  function Ee(R) {
    Y = R;
  }
  function Z() {
    const R = Y;
    return R >= r.maxTextures && xe("WebGLTextures: Trying to use " + (R + 1) + " texture units while this GPU supports only " + r.maxTextures), Y += 1, R;
  }
  function ne(R) {
    const y = [];
    return y.push(R.wrapS), y.push(R.wrapT), y.push(R.wrapR || 0), y.push(R.magFilter), y.push(R.minFilter), y.push(R.anisotropy), y.push(R.internalFormat), y.push(R.format), y.push(R.type), y.push(R.generateMipmaps), y.push(R.mipmapsAutoUpdate), y.push(R.premultiplyAlpha), y.push(R.flipY), y.push(R.unpackAlignment), y.push(R.colorSpace), y.join();
  }
  function _e(R, y) {
    const H = i.get(R);
    if (R.isVideoTexture && Le(R), R.isRenderTargetTexture === !1 && R.isExternalTexture !== !0 && R.version > 0 && H.__version !== R.version) {
      const ee = R.image;
      if (ee === null) xe("WebGLRenderer: Texture marked for update but no image data found.");
      else if (ee.complete === !1) xe("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        kt(H, R, y);
        return;
      }
    } else R.isExternalTexture && (H.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
    n.bindTexture(e.TEXTURE_2D, H.__webglTexture, e.TEXTURE0 + y);
  }
  function Ae(R, y) {
    const H = i.get(R);
    if (R.isRenderTargetTexture === !1 && R.version > 0 && H.__version !== R.version) {
      kt(H, R, y);
      return;
    } else R.isExternalTexture && (H.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
    n.bindTexture(e.TEXTURE_2D_ARRAY, H.__webglTexture, e.TEXTURE0 + y);
  }
  function we(R, y) {
    const H = i.get(R);
    if (R.isRenderTargetTexture === !1 && R.version > 0 && H.__version !== R.version) {
      kt(H, R, y);
      return;
    }
    n.bindTexture(e.TEXTURE_3D, H.__webglTexture, e.TEXTURE0 + y);
  }
  function ue(R, y) {
    const H = i.get(R);
    if (R.version > 0 && H.__version !== R.version) {
      Yt(H, R, y);
      return;
    }
    n.bindTexture(e.TEXTURE_CUBE_MAP, H.__webglTexture, e.TEXTURE0 + y);
  }
  const Ve = {
    [Ts]: e.REPEAT,
    [xn]: e.CLAMP_TO_EDGE,
    [Es]: e.MIRRORED_REPEAT
  }, Je = {
    [Dt]: e.NEAREST,
    [Xl]: e.NEAREST_MIPMAP_NEAREST,
    [ql]: e.NEAREST_MIPMAP_LINEAR,
    [rn]: e.LINEAR,
    [Yl]: e.LINEAR_MIPMAP_NEAREST,
    [Ir]: e.LINEAR_MIPMAP_LINEAR
  }, Pe = {
    512: e.NEVER,
    519: e.ALWAYS,
    513: e.LESS,
    515: e.LEQUAL,
    514: e.EQUAL,
    518: e.GEQUAL,
    516: e.GREATER,
    517: e.NOTEQUAL
  };
  function Tt(R, y) {
    if (y.type === 1015 && t.has("OES_texture_float_linear") === !1 && (y.magFilter === 1006 || y.magFilter === 1007 || y.magFilter === 1005 || y.magFilter === 1008 || y.minFilter === 1006 || y.minFilter === 1007 || y.minFilter === 1005 || y.minFilter === 1008) && xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(R, e.TEXTURE_WRAP_S, Ve[y.wrapS]), e.texParameteri(R, e.TEXTURE_WRAP_T, Ve[y.wrapT]), (R === e.TEXTURE_3D || R === e.TEXTURE_2D_ARRAY) && e.texParameteri(R, e.TEXTURE_WRAP_R, Ve[y.wrapR]), e.texParameteri(R, e.TEXTURE_MAG_FILTER, Je[y.magFilter]), e.texParameteri(R, e.TEXTURE_MIN_FILTER, Je[y.minFilter]), y.compareFunction && (e.texParameteri(R, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(R, e.TEXTURE_COMPARE_FUNC, Pe[y.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (y.magFilter === 1003 || y.minFilter !== 1005 && y.minFilter !== 1008 || y.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
      if (y.anisotropy > 1 || i.get(y).__currentAnisotropy) {
        const H = t.get("EXT_texture_filter_anisotropic");
        e.texParameterf(R, H.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, r.getMaxAnisotropy())), i.get(y).__currentAnisotropy = y.anisotropy;
      }
    }
  }
  function Nt(R, y) {
    let H = !1;
    R.__webglInit === void 0 && (R.__webglInit = !0, y.addEventListener("dispose", P), w(y));
    const ee = y.source;
    let J = f.get(ee);
    J === void 0 && (J = {}, f.set(ee, J));
    const oe = ne(y);
    if (oe !== R.__cacheKey) {
      J[oe] === void 0 && (J[oe] = {
        texture: e.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, H = !0), J[oe].usedTimes++;
      const le = J[R.__cacheKey];
      le !== void 0 && (J[R.__cacheKey].usedTimes--, le.usedTimes === 0 && k(y)), R.__cacheKey = oe, R.__webglTexture = J[oe].texture;
    }
    return H;
  }
  function Et(R, y, H) {
    return Math.floor(Math.floor(R / H) / y);
  }
  function mt(R, y, H, ee) {
    const oe = R.updateRanges;
    if (oe.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, y.width, y.height, H, ee, y.data);
    else {
      oe.sort((C, X) => C.start - X.start);
      let le = 0;
      for (let C = 1; C < oe.length; C++) {
        const X = oe[le], Q = oe[C], re = X.start + X.count, de = Et(Q.start, y.width, 4), ce = Et(X.start, y.width, 4);
        Q.start <= re + 1 && de === ce && Et(Q.start + Q.count - 1, y.width, 4) === de ? X.count = Math.max(X.count, Q.start + Q.count - X.start) : (++le, oe[le] = Q);
      }
      oe.length = le + 1;
      const D = n.getParameter(e.UNPACK_ROW_LENGTH), j = n.getParameter(e.UNPACK_SKIP_PIXELS), Me = n.getParameter(e.UNPACK_SKIP_ROWS);
      n.pixelStorei(e.UNPACK_ROW_LENGTH, y.width);
      for (let C = 0, X = oe.length; C < X; C++) {
        const Q = oe[C], re = Math.floor(Q.start / 4), de = Math.ceil(Q.count / 4), ce = re % y.width, be = Math.floor(re / y.width), te = de, Ue = 1;
        n.pixelStorei(e.UNPACK_SKIP_PIXELS, ce), n.pixelStorei(e.UNPACK_SKIP_ROWS, be), n.texSubImage2D(e.TEXTURE_2D, 0, ce, be, te, Ue, H, ee, y.data);
      }
      R.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, D), n.pixelStorei(e.UNPACK_SKIP_PIXELS, j), n.pixelStorei(e.UNPACK_SKIP_ROWS, Me);
    }
  }
  function kt(R, y, H) {
    let ee = e.TEXTURE_2D;
    (y.isDataArrayTexture || y.isCompressedArrayTexture) && (ee = e.TEXTURE_2D_ARRAY), y.isData3DTexture && (ee = e.TEXTURE_3D);
    const J = Nt(R, y), oe = y.source;
    n.bindTexture(ee, R.__webglTexture, e.TEXTURE0 + H);
    const le = i.get(oe);
    if (oe.version !== le.__version || J === !0) {
      if (n.activeTexture(e.TEXTURE0 + H), !(typeof ImageBitmap < "u" && y.image instanceof ImageBitmap)) {
        const te = qe.getPrimaries(qe.workingColorSpace), Ue = y.colorSpace === "" ? null : qe.getPrimaries(y.colorSpace), Ie = y.colorSpace === "" || te === Ue ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
        n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, y.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ie);
      }
      n.pixelStorei(e.UNPACK_ALIGNMENT, y.unpackAlignment);
      let D = M(y.image, !1, r.maxTextureSize);
      D = Oe(y, D);
      const j = s.convert(y.format, y.colorSpace), Me = s.convert(y.type);
      let C = A(y.internalFormat, j, Me, y.normalized, y.colorSpace, y.isVideoTexture);
      Tt(ee, y);
      let X;
      const Q = y.mipmaps, re = y.isVideoTexture !== !0, de = le.__version === void 0 || J === !0, ce = oe.dataReady, be = T(y, D);
      if (y.isDepthTexture)
        C = v(y.format === bs, y.type), de && (re ? n.texStorage2D(e.TEXTURE_2D, 1, C, D.width, D.height) : n.texImage2D(e.TEXTURE_2D, 0, C, D.width, D.height, 0, j, Me, null));
      else if (y.isDataTexture)
        if (Q.length > 0) {
          re && de && n.texStorage2D(e.TEXTURE_2D, be, C, Q[0].width, Q[0].height);
          for (let te = 0, Ue = Q.length; te < Ue; te++)
            X = Q[te], re ? ce && n.texSubImage2D(e.TEXTURE_2D, te, 0, 0, X.width, X.height, j, Me, X.data) : n.texImage2D(e.TEXTURE_2D, te, C, X.width, X.height, 0, j, Me, X.data);
          y.generateMipmaps = !1;
        } else re ? (de && n.texStorage2D(e.TEXTURE_2D, be, C, D.width, D.height), ce && mt(y, D, j, Me)) : n.texImage2D(e.TEXTURE_2D, 0, C, D.width, D.height, 0, j, Me, D.data);
      else if (y.isCompressedTexture)
        if (y.isCompressedArrayTexture) {
          re && de && n.texStorage3D(e.TEXTURE_2D_ARRAY, be, C, Q[0].width, Q[0].height, D.depth);
          for (let te = 0, Ue = Q.length; te < Ue; te++)
            if (X = Q[te], y.format !== 1023)
              if (j !== null)
                if (re) {
                  if (ce)
                    if (y.layerUpdates.size > 0) {
                      const Ie = el(X.width, X.height, y.format, y.type);
                      for (const Ke of y.layerUpdates) {
                        const ge = X.data.subarray(Ke * Ie / X.data.BYTES_PER_ELEMENT, (Ke + 1) * Ie / X.data.BYTES_PER_ELEMENT);
                        n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, te, 0, 0, Ke, X.width, X.height, 1, j, ge);
                      }
                    } else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, te, 0, 0, 0, X.width, X.height, D.depth, j, X.data);
                } else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, te, C, X.width, X.height, D.depth, 0, X.data, 0, 0);
              else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else re ? ce && n.texSubImage3D(e.TEXTURE_2D_ARRAY, te, 0, 0, 0, X.width, X.height, D.depth, j, Me, X.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, te, C, X.width, X.height, D.depth, 0, j, Me, X.data);
          y.layerUpdates.size > 0 && y.clearLayerUpdates();
        } else {
          re && de && n.texStorage2D(e.TEXTURE_2D, be, C, Q[0].width, Q[0].height);
          for (let te = 0, Ue = Q.length; te < Ue; te++)
            X = Q[te], y.format !== 1023 ? j !== null ? re ? ce && n.compressedTexSubImage2D(e.TEXTURE_2D, te, 0, 0, X.width, X.height, j, X.data) : n.compressedTexImage2D(e.TEXTURE_2D, te, C, X.width, X.height, 0, X.data) : xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : re ? ce && n.texSubImage2D(e.TEXTURE_2D, te, 0, 0, X.width, X.height, j, Me, X.data) : n.texImage2D(e.TEXTURE_2D, te, C, X.width, X.height, 0, j, Me, X.data);
        }
      else if (y.isDataArrayTexture)
        if (re) {
          if (de && n.texStorage3D(e.TEXTURE_2D_ARRAY, be, C, D.width, D.height, D.depth), ce)
            if (y.layerUpdates.size > 0) {
              const te = el(D.width, D.height, y.format, y.type);
              for (const Ue of y.layerUpdates) {
                const Ie = D.data.subarray(Ue * te / D.data.BYTES_PER_ELEMENT, (Ue + 1) * te / D.data.BYTES_PER_ELEMENT);
                n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, Ue, D.width, D.height, 1, j, Me, Ie);
              }
              y.clearLayerUpdates();
            } else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, D.width, D.height, D.depth, j, Me, D.data);
        } else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, C, D.width, D.height, D.depth, 0, j, Me, D.data);
      else if (y.isData3DTexture)
        re ? (de && n.texStorage3D(e.TEXTURE_3D, be, C, D.width, D.height, D.depth), ce && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, D.width, D.height, D.depth, j, Me, D.data)) : n.texImage3D(e.TEXTURE_3D, 0, C, D.width, D.height, D.depth, 0, j, Me, D.data);
      else if (y.isFramebufferTexture) {
        if (de)
          if (re) n.texStorage2D(e.TEXTURE_2D, be, C, D.width, D.height);
          else {
            let te = D.width, Ue = D.height;
            for (let Ie = 0; Ie < be; Ie++)
              n.texImage2D(e.TEXTURE_2D, Ie, C, te, Ue, 0, j, Me, null), te >>= 1, Ue >>= 1;
          }
      } else if (y.isHTMLTexture) {
        if ("texElementImage2D" in e) {
          const te = e.canvas;
          if (te.hasAttribute("layoutsubtree") || te.setAttribute("layoutsubtree", "true"), D.parentNode !== te) {
            te.appendChild(D), u.add(y), te.onpaint = (Ue) => {
              const Ie = Ue.changedElements;
              for (const Ke of u) Ie.includes(Ke.image) && (Ke.needsUpdate = !0);
            }, te.requestPaint();
            return;
          }
          if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, D);
          else {
            const Ie = e.RGBA, Ke = e.RGBA, ge = e.UNSIGNED_BYTE;
            e.texElementImage2D(e.TEXTURE_2D, 0, Ie, Ke, ge, D);
          }
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        }
      } else if (Q.length > 0) {
        if (re && de) {
          const te = wt(Q[0]);
          n.texStorage2D(e.TEXTURE_2D, be, C, te.width, te.height);
        }
        for (let te = 0, Ue = Q.length; te < Ue; te++)
          X = Q[te], re ? ce && n.texSubImage2D(e.TEXTURE_2D, te, 0, 0, j, Me, X) : n.texImage2D(e.TEXTURE_2D, te, C, j, Me, X);
        y.generateMipmaps = !1;
      } else if (re) {
        if (de) {
          const te = wt(D);
          n.texStorage2D(e.TEXTURE_2D, be, C, te.width, te.height);
        }
        ce && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, j, Me, D);
      } else n.texImage2D(e.TEXTURE_2D, 0, C, j, Me, D);
      E(y) && y.mipmapsAutoUpdate === !0 && S(ee), le.__version = oe.version, y.onUpdate && y.onUpdate(y);
    }
    R.__version = y.version;
  }
  function Yt(R, y, H) {
    if (y.image.length !== 6) return;
    const ee = Nt(R, y), J = y.source;
    n.bindTexture(e.TEXTURE_CUBE_MAP, R.__webglTexture, e.TEXTURE0 + H);
    const oe = i.get(J);
    if (J.version !== oe.__version || ee === !0) {
      n.activeTexture(e.TEXTURE0 + H);
      const le = qe.getPrimaries(qe.workingColorSpace), D = y.colorSpace === "" ? null : qe.getPrimaries(y.colorSpace), j = y.colorSpace === "" || le === D ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, y.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, y.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, j);
      const Me = y.isCompressedTexture || y.image[0].isCompressedTexture, C = y.image[0] && y.image[0].isDataTexture, X = [];
      for (let ge = 0; ge < 6; ge++)
        !Me && !C ? X[ge] = M(y.image[ge], !0, r.maxCubemapSize) : X[ge] = C ? y.image[ge].image : y.image[ge], X[ge] = Oe(y, X[ge]);
      const Q = X[0], re = s.convert(y.format, y.colorSpace), de = s.convert(y.type);
      let ce = A(y.internalFormat, re, de, y.normalized, y.colorSpace);
      const be = y.isVideoTexture !== !0, te = oe.__version === void 0 || ee === !0, Ue = J.dataReady;
      let Ie = T(y, Q);
      Tt(e.TEXTURE_CUBE_MAP, y);
      let Ke;
      if (y.isDepthTexture) {
        if (ce = v(y.format === bs, y.type), te)
          if (be) n.texStorage2D(e.TEXTURE_CUBE_MAP, 1, ce, Q.width, Q.height);
          else for (let ge = 0; ge < 6; ge++) n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, 0, ce, Q.width, Q.height, 0, re, de, null);
      } else if (Me) {
        be && te && n.texStorage2D(e.TEXTURE_CUBE_MAP, Ie, ce, Q.width, Q.height);
        for (let ge = 0; ge < 6; ge++) {
          Ke = X[ge].mipmaps;
          for (let lt = 0; lt < Ke.length; lt++) {
            const ct = Ke[lt];
            y.format !== 1023 ? re !== null ? be ? Ue && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, lt, 0, 0, ct.width, ct.height, re, ct.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, lt, ce, ct.width, ct.height, 0, ct.data) : xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : be ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, lt, 0, 0, ct.width, ct.height, re, de, ct.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, lt, ce, ct.width, ct.height, 0, re, de, ct.data);
          }
        }
      } else {
        if (Ke = y.mipmaps, be && te) {
          Ke.length > 0 && Ie++;
          const ge = wt(X[0]);
          n.texStorage2D(e.TEXTURE_CUBE_MAP, Ie, ce, ge.width, ge.height);
        }
        for (let ge = 0; ge < 6; ge++) if (C) {
          be ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, 0, 0, 0, X[ge].width, X[ge].height, re, de, X[ge].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, 0, ce, X[ge].width, X[ge].height, 0, re, de, X[ge].data);
          for (let lt = 0; lt < Ke.length; lt++) {
            const ct = Ke[lt].image[ge].image;
            be ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, lt + 1, 0, 0, ct.width, ct.height, re, de, ct.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, lt + 1, ce, ct.width, ct.height, 0, re, de, ct.data);
          }
        } else {
          be ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, 0, 0, 0, re, de, X[ge]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, 0, ce, re, de, X[ge]);
          for (let lt = 0; lt < Ke.length; lt++) {
            const ct = Ke[lt];
            be ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, lt + 1, 0, 0, re, de, ct.image[ge]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ge, lt + 1, ce, re, de, ct.image[ge]);
          }
        }
      }
      E(y) && y.mipmapsAutoUpdate === !0 && S(e.TEXTURE_CUBE_MAP), oe.__version = J.version, y.onUpdate && y.onUpdate(y);
    }
    R.__version = y.version;
  }
  function gt(R, y, H, ee, J, oe) {
    const le = s.convert(H.format, H.colorSpace), D = s.convert(H.type), j = A(H.internalFormat, le, D, H.normalized, H.colorSpace), Me = i.get(y), C = i.get(H);
    if (C.__renderTarget = y, !Me.__hasExternalTextures) {
      const X = Math.max(1, y.width >> oe), Q = Math.max(1, y.height >> oe);
      J === e.TEXTURE_3D || J === e.TEXTURE_2D_ARRAY ? n.texImage3D(J, oe, j, X, Q, y.depth, 0, le, D, null) : n.texImage2D(J, oe, j, X, Q, 0, le, D, null);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, R), it(y) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, ee, J, C.__webglTexture, 0, pe(y)) : (J === e.TEXTURE_2D || J >= e.TEXTURE_CUBE_MAP_POSITIVE_X && J <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, ee, J, C.__webglTexture, oe), n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function Rt(R, y, H) {
    if (e.bindRenderbuffer(e.RENDERBUFFER, R), y.depthBuffer) {
      const ee = y.depthTexture, J = ee && ee.isDepthTexture ? ee.type : null, oe = v(y.stencilBuffer, J), le = y.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
      it(y) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, pe(y), oe, y.width, y.height) : H ? e.renderbufferStorageMultisample(e.RENDERBUFFER, pe(y), oe, y.width, y.height) : e.renderbufferStorage(e.RENDERBUFFER, oe, y.width, y.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, le, e.RENDERBUFFER, R);
    } else {
      const ee = y.textures;
      for (let J = 0; J < ee.length; J++) {
        const oe = ee[J], le = s.convert(oe.format, oe.colorSpace), D = s.convert(oe.type), j = A(oe.internalFormat, le, D, oe.normalized, oe.colorSpace);
        it(y) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, pe(y), j, y.width, y.height) : H ? e.renderbufferStorageMultisample(e.RENDERBUFFER, pe(y), j, y.width, y.height) : e.renderbufferStorage(e.RENDERBUFFER, j, y.width, y.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function zt(R, y, H) {
    const ee = y.isWebGLCubeRenderTarget === !0;
    if (n.bindFramebuffer(e.FRAMEBUFFER, R), !(y.depthTexture && y.depthTexture.isDepthTexture)) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    const J = i.get(y.depthTexture);
    J.__renderTarget = y;
    const oe = ee ? y.depthTexture.image[0] : y.depthTexture.image;
    (!J.__webglTexture || oe.width !== y.width || oe.height !== y.height) && (oe.width = y.width, oe.height = y.height, y.depthTexture.needsUpdate = !0), ee ? ue(y.depthTexture, 0) : _e(y.depthTexture, 0);
    const le = J.__webglTexture, D = pe(y), j = ee ? e.TEXTURE_CUBE_MAP_POSITIVE_X + H : e.TEXTURE_2D, Me = y.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
    if (y.depthTexture.format === 1026)
      it(y) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, Me, j, le, 0, D) : e.framebufferTexture2D(e.FRAMEBUFFER, Me, j, le, 0);
    else if (y.depthTexture.format === 1027)
      it(y) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, Me, j, le, 0, D) : e.framebufferTexture2D(e.FRAMEBUFFER, Me, j, le, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function Ht(R) {
    const y = i.get(R), H = R.isWebGLCubeRenderTarget === !0;
    if (y.__boundDepthTexture !== R.depthTexture) {
      const ee = R.depthTexture;
      if (y.__depthDisposeCallback && y.__depthDisposeCallback(), ee) {
        const J = () => {
          delete y.__boundDepthTexture, delete y.__depthDisposeCallback, ee.removeEventListener("dispose", J);
        };
        ee.addEventListener("dispose", J), y.__depthDisposeCallback = J;
      }
      y.__boundDepthTexture = ee;
    }
    if (R.depthTexture && !y.__autoAllocateDepthBuffer)
      if (H) for (let ee = 0; ee < 6; ee++) zt(y.__webglFramebuffer[ee], R, ee);
      else R.texture.mipmaps.length > 0 ? zt(y.__webglFramebuffer[0], R, 0) : zt(y.__webglFramebuffer, R, 0);
    else if (H) {
      y.__webglDepthbuffer = [];
      for (let ee = 0; ee < 6; ee++)
        if (n.bindFramebuffer(e.FRAMEBUFFER, y.__webglFramebuffer[ee]), y.__webglDepthbuffer[ee] === void 0)
          y.__webglDepthbuffer[ee] = e.createRenderbuffer(), Rt(y.__webglDepthbuffer[ee], R, !1);
        else {
          const J = R.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, oe = y.__webglDepthbuffer[ee];
          e.bindRenderbuffer(e.RENDERBUFFER, oe), e.framebufferRenderbuffer(e.FRAMEBUFFER, J, e.RENDERBUFFER, oe);
        }
    } else if (R.texture.mipmaps.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, y.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, y.__webglFramebuffer), y.__webglDepthbuffer === void 0)
      y.__webglDepthbuffer = e.createRenderbuffer(), Rt(y.__webglDepthbuffer, R, !1);
    else {
      const ee = R.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, J = y.__webglDepthbuffer;
      e.bindRenderbuffer(e.RENDERBUFFER, J), e.framebufferRenderbuffer(e.FRAMEBUFFER, ee, e.RENDERBUFFER, J);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function on(R, y, H) {
    const ee = i.get(R);
    y !== void 0 && gt(ee.__webglFramebuffer, R, R.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), H !== void 0 && Ht(R);
  }
  function N(R) {
    const y = R.texture, H = i.get(R), ee = i.get(y);
    R.addEventListener("dispose", U), w(R);
    const J = R.textures, oe = R.isWebGLCubeRenderTarget === !0, le = J.length > 1;
    if (le || (ee.__webglTexture === void 0 && (ee.__webglTexture = e.createTexture()), ee.__version = y.version, a.memory.textures++), oe) {
      H.__webglFramebuffer = [];
      for (let D = 0; D < 6; D++) if (y.mipmaps.length > 0) {
        H.__webglFramebuffer[D] = [];
        for (let j = 0; j < y.mipmaps.length; j++) H.__webglFramebuffer[D][j] = e.createFramebuffer();
      } else H.__webglFramebuffer[D] = e.createFramebuffer();
    } else {
      if (y.mipmaps.length > 0) {
        H.__webglFramebuffer = [];
        for (let D = 0; D < y.mipmaps.length; D++) H.__webglFramebuffer[D] = e.createFramebuffer();
      } else H.__webglFramebuffer = e.createFramebuffer();
      if (le) for (let D = 0, j = J.length; D < j; D++) {
        const Me = i.get(J[D]);
        Me.__webglTexture === void 0 && (Me.__webglTexture = e.createTexture(), a.memory.textures++);
      }
      if (R.samples > 0 && it(R) === !1) {
        H.__webglMultisampledFramebuffer = e.createFramebuffer(), H.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, H.__webglMultisampledFramebuffer);
        for (let D = 0; D < J.length; D++) {
          const j = J[D];
          H.__webglColorRenderbuffer[D] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, H.__webglColorRenderbuffer[D]);
          const Me = s.convert(j.format, j.colorSpace), C = s.convert(j.type), X = A(j.internalFormat, Me, C, j.normalized, j.colorSpace, R.isXRRenderTarget === !0), Q = pe(R);
          e.renderbufferStorageMultisample(e.RENDERBUFFER, Q, X, R.width, R.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + D, e.RENDERBUFFER, H.__webglColorRenderbuffer[D]);
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null), R.depthBuffer && (H.__webglDepthRenderbuffer = e.createRenderbuffer(), Rt(H.__webglDepthRenderbuffer, R, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
      }
    }
    if (oe) {
      n.bindTexture(e.TEXTURE_CUBE_MAP, ee.__webglTexture), Tt(e.TEXTURE_CUBE_MAP, y);
      for (let D = 0; D < 6; D++) if (y.mipmaps.length > 0) for (let j = 0; j < y.mipmaps.length; j++) gt(H.__webglFramebuffer[D][j], R, y, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + D, j);
      else gt(H.__webglFramebuffer[D], R, y, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + D, 0);
      E(y) ? S(e.TEXTURE_CUBE_MAP) : y.mipmaps.length > 0 && e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAX_LEVEL, y.mipmaps.length - 1), n.unbindTexture();
    } else if (le) {
      for (let D = 0, j = J.length; D < j; D++) {
        const Me = J[D], C = i.get(Me);
        let X = e.TEXTURE_2D;
        (R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (X = R.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(X, C.__webglTexture), Tt(X, Me), gt(H.__webglFramebuffer, R, Me, e.COLOR_ATTACHMENT0 + D, X, 0), E(Me) && S(X);
      }
      n.unbindTexture();
    } else {
      let D = e.TEXTURE_2D;
      if ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (D = R.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(D, ee.__webglTexture), Tt(D, y), y.mipmaps.length > 0) for (let j = 0; j < y.mipmaps.length; j++) gt(H.__webglFramebuffer[j], R, y, e.COLOR_ATTACHMENT0, D, j);
      else gt(H.__webglFramebuffer, R, y, e.COLOR_ATTACHMENT0, D, 0);
      E(y) ? S(D) : y.mipmaps.length > 0 && e.texParameteri(D, e.TEXTURE_MAX_LEVEL, y.mipmaps.length - 1), n.unbindTexture();
    }
    R.depthBuffer && Ht(R);
  }
  function ln(R) {
    const y = R.textures;
    for (let H = 0, ee = y.length; H < ee; H++) {
      const J = y[H];
      if (E(J) && J.mipmapsAutoUpdate === !0) {
        const oe = b(R), le = i.get(J).__webglTexture;
        n.bindTexture(oe, le), S(oe), n.unbindTexture();
      }
    }
  }
  const nt = [];
  function yt(R) {
    if (R.samples > 0) {
      if (it(R) === !1) {
        const y = R.textures, H = R.width, ee = R.height;
        let J = e.COLOR_BUFFER_BIT;
        const oe = R.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, le = i.get(R), D = y.length > 1;
        if (D) for (let j = 0; j < y.length; j++)
          n.bindFramebuffer(e.FRAMEBUFFER, le.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + j, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, le.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + j, e.TEXTURE_2D, null, 0);
        n.bindFramebuffer(e.READ_FRAMEBUFFER, le.__webglMultisampledFramebuffer), R.texture.mipmaps.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, le.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, le.__webglFramebuffer);
        for (let j = 0; j < y.length; j++) {
          if (R.resolveDepthBuffer && (R.depthBuffer && (J |= e.DEPTH_BUFFER_BIT), R.stencilBuffer && R.resolveStencilBuffer && (J |= e.STENCIL_BUFFER_BIT)), D) {
            e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, le.__webglColorRenderbuffer[j]);
            const Me = i.get(y[j]).__webglTexture;
            e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, Me, 0);
          }
          e.blitFramebuffer(0, 0, H, ee, 0, 0, H, ee, J, e.NEAREST), l === !0 && (nt.length = 0, nt.push(e.COLOR_ATTACHMENT0 + j), R.depthBuffer && R.storeMultisampledDepthBuffer === !1 && nt.push(oe), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, nt));
        }
        if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), D) for (let j = 0; j < y.length; j++) {
          n.bindFramebuffer(e.FRAMEBUFFER, le.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + j, e.RENDERBUFFER, le.__webglColorRenderbuffer[j]);
          const Me = i.get(y[j]).__webglTexture;
          n.bindFramebuffer(e.FRAMEBUFFER, le.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + j, e.TEXTURE_2D, Me, 0);
        }
        n.bindFramebuffer(e.DRAW_FRAMEBUFFER, le.__webglMultisampledFramebuffer);
      } else if (R.depthBuffer && R.storeMultisampledDepthBuffer === !1 && l) {
        const y = R.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [y]);
      }
    }
  }
  function pe(R) {
    return Math.min(r.maxSamples, R.samples);
  }
  function it(R) {
    const y = i.get(R);
    return R.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && y.__useRenderToTexture !== !1;
  }
  function Le(R) {
    const y = a.render.frame;
    h.get(R) !== y && (h.set(R, y), R.update());
  }
  function Oe(R, y) {
    const H = R.colorSpace, ee = R.format, J = R.type;
    return R.isCompressedTexture === !0 || R.isVideoTexture === !0 || H !== "srgb-linear" && H !== "" && (qe.getTransfer(H) === "srgb" ? (ee !== 1023 || J !== 1009) && xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : De("WebGLTextures: Unsupported texture color space:", H)), y;
  }
  function wt(R) {
    return typeof HTMLImageElement < "u" && R instanceof HTMLImageElement ? (c.width = R.naturalWidth || R.width, c.height = R.naturalHeight || R.height) : typeof VideoFrame < "u" && R instanceof VideoFrame ? (c.width = R.displayWidth, c.height = R.displayHeight) : (c.width = R.width, c.height = R.height), c;
  }
  this.allocateTextureUnit = Z, this.resetTextureUnits = K, this.getTextureUnits = ie, this.setTextureUnits = Ee, this.setTexture2D = _e, this.setTexture2DArray = Ae, this.setTexture3D = we, this.setTextureCube = ue, this.rebindTextures = on, this.setupRenderTarget = N, this.updateRenderTargetMipmap = ln, this.updateMultisampleRenderTarget = yt, this.setupDepthRenderbuffer = Ht, this.setupFrameBufferTexture = gt, this.useMultisampledRTT = it, this.dispose = V;
}
function Wm(e, t) {
  function n(i, r = "") {
    let s;
    const a = qe.getTransfer(r);
    if (i === 1009) return e.UNSIGNED_BYTE;
    if (i === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
    if (i === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
    if (i === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
    if (i === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
    if (i === 1010) return e.BYTE;
    if (i === 1011) return e.SHORT;
    if (i === 1012) return e.UNSIGNED_SHORT;
    if (i === 1013) return e.INT;
    if (i === 1014) return e.UNSIGNED_INT;
    if (i === 1015) return e.FLOAT;
    if (i === 1016) return e.HALF_FLOAT;
    if (i === 1021) return e.ALPHA;
    if (i === 1022) return e.RGB;
    if (i === 1023) return e.RGBA;
    if (i === 1026) return e.DEPTH_COMPONENT;
    if (i === 1027) return e.DEPTH_STENCIL;
    if (i === 1028) return e.RED;
    if (i === 1029) return e.RED_INTEGER;
    if (i === 1030) return e.RG;
    if (i === 1031) return e.RG_INTEGER;
    if (i === 1033) return e.RGBA_INTEGER;
    if (i === 33776 || i === 33777 || i === 33778 || i === 33779)
      if (a === "srgb")
        if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
          if (i === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (i === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (i === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (i === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
        if (i === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (i === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (i === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (i === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (i === 35840 || i === 35841 || i === 35842 || i === 35843)
      if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
        if (i === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (i === 36196 || i === 37492 || i === 37496 || i === 37488 || i === 37489 || i === 37490 || i === 37491)
      if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
        if (i === 36196 || i === 37492) return a === "srgb" ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (i === 37496) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
        if (i === 37488) return s.COMPRESSED_R11_EAC;
        if (i === 37489) return s.COMPRESSED_SIGNED_R11_EAC;
        if (i === 37490) return s.COMPRESSED_RG11_EAC;
        if (i === 37491) return s.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    if (i === 37808 || i === 37809 || i === 37810 || i === 37811 || i === 37812 || i === 37813 || i === 37814 || i === 37815 || i === 37816 || i === 37817 || i === 37818 || i === 37819 || i === 37820 || i === 37821)
      if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
        if (i === 37808) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === 37809) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === 37810) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === 37811) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === 37812) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === 37813) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === 37814) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === 37815) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === 37816) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === 37817) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === 37818) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === 37819) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === 37820) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === 37821) return a === "srgb" ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (i === 36492 || i === 36494 || i === 36495)
      if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
        if (i === 36492) return a === "srgb" ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (i === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (i === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (i === 36283 || i === 36284 || i === 36285 || i === 36286)
      if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
        if (i === 36283) return s.COMPRESSED_RED_RGTC1_EXT;
        if (i === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (i === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (i === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return i === 1020 ? e.UNSIGNED_INT_24_8 : e[i] !== void 0 ? e[i] : null;
  }
  return { convert: n };
}
var Xm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, qm = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`, Ym = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new Sc(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new vi({
        vertexShader: Xm,
        fragmentShader: qm,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new Xt(new Rc(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}, Km = class extends _i {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, s = null, a = "local-floor", o = 1, l = null, c = null, h = null, u = null, d = null, f = null;
    const g = typeof XRWebGLBinding < "u", _ = new Ym(), m = {}, p = t.getContextAttributes();
    let M = null, E = null;
    const S = [], b = [], A = new ke();
    let v = null, T = null;
    const w = new Vt();
    w.viewport = new st();
    const F = new Vt();
    F.viewport = new st();
    const P = [w, F], U = new Cf();
    let q = null, I = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Z) {
      let ne = S[Z];
      return ne === void 0 && (ne = new $s(), S[Z] = ne), ne.getTargetRaySpace();
    }, this.getControllerGrip = function(Z) {
      let ne = S[Z];
      return ne === void 0 && (ne = new $s(), S[Z] = ne), ne.getGripSpace();
    }, this.getHand = function(Z) {
      let ne = S[Z];
      return ne === void 0 && (ne = new $s(), S[Z] = ne), ne.getHandSpace();
    };
    function V(Z) {
      const ne = b.indexOf(Z.inputSource);
      if (ne === -1) return;
      const _e = S[ne];
      _e !== void 0 && (_e.update(Z.inputSource, Z.frame, l || s), _e.dispatchEvent({
        type: Z.type,
        data: Z.inputSource
      }));
    }
    function $() {
      i.removeEventListener("select", V), i.removeEventListener("selectstart", V), i.removeEventListener("selectend", V), i.removeEventListener("squeeze", V), i.removeEventListener("squeezestart", V), i.removeEventListener("squeezeend", V), i.removeEventListener("end", $), i.removeEventListener("inputsourceschange", k);
      for (let Z = 0; Z < S.length; Z++) {
        const ne = b[Z];
        ne !== null && (b[Z] = null, S[Z].disconnect(ne));
      }
      q = null, I = null, _.reset();
      for (const Z in m) delete m[Z];
      if (e.setRenderTarget(M), d = null, u = null, h = null, i = null, E = null, Ee.stop(), n.isPresenting = !1, e.setPixelRatio(v), e.setSize(A.width, A.height, !1), T !== null) {
        const Z = T.camera;
        Z.fov = T.fov, Z.zoom = T.zoom, Z.updateProjectionMatrix(), T = null;
      }
      n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Z) {
      r = Z, n.isPresenting === !0 && xe("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Z) {
      a = Z, n.isPresenting === !0 && xe("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || s;
    }, this.setReferenceSpace = function(Z) {
      l = Z;
    }, this.getBaseLayer = function() {
      return u !== null ? u : d;
    }, this.getBinding = function() {
      return h === null && g && (h = new XRWebGLBinding(i, t)), h;
    }, this.getFrame = function() {
      return f;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(Z) {
      if (i = Z, i !== null) {
        if (M = e.getRenderTarget(), i.addEventListener("select", V), i.addEventListener("selectstart", V), i.addEventListener("selectend", V), i.addEventListener("squeeze", V), i.addEventListener("squeezestart", V), i.addEventListener("squeezeend", V), i.addEventListener("end", $), i.addEventListener("inputsourceschange", k), p.xrCompatible !== !0 && await t.makeXRCompatible(), v = e.getPixelRatio(), e.getSize(A), g && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let ne = null, _e = null, Ae = null;
          p.depth && (Ae = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ne = p.stencil ? bs : Er, _e = p.stencil ? Ua : mi);
          const we = {
            colorFormat: t.RGBA8,
            depthFormat: Ae,
            scaleFactor: r
          };
          h = this.getBinding(), u = h.createProjectionLayer(we), i.updateRenderState({ layers: [u] }), e.setPixelRatio(1), e.setSize(u.textureWidth, u.textureHeight, !1), E = new En(u.textureWidth, u.textureHeight, {
            format: Tr,
            type: ni,
            depthTexture: new Wi(u.textureWidth, u.textureHeight, _e, void 0, void 0, void 0, void 0, void 0, void 0, ne),
            stencilBuffer: p.stencil,
            colorSpace: e.outputColorSpace,
            samples: p.antialias ? 4 : 0,
            resolveDepthBuffer: u.ignoreDepthValues === !1,
            resolveStencilBuffer: u.ignoreDepthValues === !1,
            storeMultisampledDepthBuffer: u.ignoreDepthValues === !1,
            storeMultisampledStencilBuffer: u.ignoreDepthValues === !1
          });
        } else {
          const ne = {
            antialias: p.antialias,
            alpha: !0,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: r
          };
          d = new XRWebGLLayer(i, t, ne), i.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, !1), E = new En(d.framebufferWidth, d.framebufferHeight, {
            format: Tr,
            type: ni,
            colorSpace: e.outputColorSpace,
            stencilBuffer: p.stencil,
            resolveDepthBuffer: d.ignoreDepthValues === !1,
            resolveStencilBuffer: d.ignoreDepthValues === !1,
            storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
            storeMultisampledStencilBuffer: d.ignoreDepthValues === !1
          });
        }
        E.isXRRenderTarget = !0, this.setFoveation(o), l = null, s = await i.requestReferenceSpace(a), Ee.setContext(i), Ee.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function k(Z) {
      for (let ne = 0; ne < Z.removed.length; ne++) {
        const _e = Z.removed[ne], Ae = b.indexOf(_e);
        Ae >= 0 && (b[Ae] = null, S[Ae].disconnect(_e));
      }
      for (let ne = 0; ne < Z.added.length; ne++) {
        const _e = Z.added[ne];
        let Ae = b.indexOf(_e);
        if (Ae === -1) {
          for (let ue = 0; ue < S.length; ue++) if (ue >= b.length) {
            b.push(_e), Ae = ue;
            break;
          } else if (b[ue] === null) {
            b[ue] = _e, Ae = ue;
            break;
          }
          if (Ae === -1) break;
        }
        const we = S[Ae];
        we && we.connect(_e);
      }
    }
    function ae(Z, ne) {
      ne === null ? Z.matrixWorld.copy(Z.matrix) : Z.matrixWorld.multiplyMatrices(ne.matrixWorld, Z.matrix), Z.matrixWorldInverse.copy(Z.matrixWorld).invert();
    }
    this.updateCamera = function(Z) {
      if (i === null) return;
      let ne = Z.near, _e = Z.far;
      _.texture !== null && (_.depthNear > 0 && (ne = _.depthNear), _.depthFar > 0 && (_e = _.depthFar)), U.near = F.near = w.near = ne, U.far = F.far = w.far = _e, (q !== U.near || I !== U.far) && (i.updateRenderState({
        depthNear: U.near,
        depthFar: U.far
      }), q = U.near, I = U.far), U.layers.mask = Z.layers.mask | 6, w.layers.mask = U.layers.mask & -5, F.layers.mask = U.layers.mask & -3;
      const Ae = Z.parent, we = U.cameras;
      ae(U, Ae);
      for (let ue = 0; ue < we.length; ue++) ae(we[ue], Ae);
      U.projectionMatrix.copy(w.projectionMatrix), U.projectionMatrixInverse.copy(w.projectionMatrixInverse), T === null && Z.isPerspectiveCamera && (T = {
        camera: Z,
        fov: Z.fov,
        zoom: Z.zoom
      }), Y(Z, U, Ae);
    };
    function Y(Z, ne, _e) {
      _e === null ? Z.matrix.copy(ne.matrixWorld) : (Z.matrix.copy(_e.matrixWorld), Z.matrix.invert(), Z.matrix.multiply(ne.matrixWorld)), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale), Z.updateMatrixWorld(!0), Z.projectionMatrix.copy(ne.projectionMatrix), Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse), Z.isPerspectiveCamera && (Z.fov = Gi * 2 * Math.atan(1 / Z.projectionMatrix.elements[5]), Z.zoom = 1);
    }
    this.getCamera = function() {
      return U;
    }, this.getFoveation = function() {
      if (!(u === null && d === null))
        return o;
    }, this.setFoveation = function(Z) {
      o = Z, u !== null && (u.fixedFoveation = Z), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = Z);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(U);
    }, this.getCameraTexture = function(Z) {
      return m[Z];
    };
    let K = null;
    function ie(Z, ne) {
      if (c = ne.getViewerPose(l || s), f = ne, c !== null) {
        const _e = c.views;
        d !== null && (e.setRenderTargetFramebuffer(E, d.framebuffer), e.setRenderTarget(E));
        let Ae = !1;
        _e.length !== U.cameras.length && (U.cameras.length = 0, Ae = !0);
        for (let ue = 0; ue < _e.length; ue++) {
          const Ve = _e[ue];
          let Je = null;
          if (d !== null) Je = d.getViewport(Ve);
          else {
            const Tt = h.getViewSubImage(u, Ve);
            Je = Tt.viewport, ue === 0 && (e.setRenderTargetTextures(E, Tt.colorTexture, Tt.depthStencilTexture), e.setRenderTarget(E));
          }
          let Pe = P[ue];
          Pe === void 0 && (Pe = new Vt(), Pe.layers.enable(ue), Pe.viewport = new st(), P[ue] = Pe), Pe.matrix.fromArray(Ve.transform.matrix), Pe.matrix.decompose(Pe.position, Pe.quaternion, Pe.scale), Pe.projectionMatrix.fromArray(Ve.projectionMatrix), Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(), Pe.viewport.set(Je.x, Je.y, Je.width, Je.height), ue === 0 && (U.matrix.copy(Pe.matrix), U.matrix.decompose(U.position, U.quaternion, U.scale)), Ae === !0 && U.cameras.push(Pe);
        }
        const we = i.enabledFeatures;
        if (we && we.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && g) {
          h = n.getBinding();
          const ue = h.getDepthInformation(_e[0]);
          ue && ue.isValid && ue.texture && _.init(ue, i.renderState);
        }
        if (we && we.includes("camera-access") && g) {
          e.state.unbindTexture(), h = n.getBinding();
          for (let ue = 0; ue < _e.length; ue++) {
            const Ve = _e[ue].camera;
            if (Ve) {
              let Je = m[Ve];
              Je || (Je = new Sc(), m[Ve] = Je);
              const Pe = h.getCameraImage(Ve);
              Je.sourceTexture = Pe;
            }
          }
        }
      }
      for (let _e = 0; _e < S.length; _e++) {
        const Ae = b[_e], we = S[_e];
        Ae !== null && we !== void 0 && we.update(Ae, ne, l || s);
      }
      K && K(Z, ne), ne.detectedPlanes && n.dispatchEvent({
        type: "planesdetected",
        data: ne
      }), f = null;
    }
    const Ee = new Bc();
    Ee.setAnimationLoop(ie), this.setAnimationLoop = function(Z) {
      K = Z;
    }, this.dispose = function() {
    };
  }
}, $m = /* @__PURE__ */ new Ge(), $c = /* @__PURE__ */ new Be();
$c.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Zm(e, t) {
  function n(m, p) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix);
  }
  function i(m, p) {
    p.color.getRGB(m.fogColor.value, Ic(e)), p.isFog ? (m.fogNear.value = p.near, m.fogFar.value = p.far) : p.isFogExp2 && (m.fogDensity.value = p.density);
  }
  function r(m, p, M, E, S) {
    p.isNodeMaterial ? p.uniformsNeedUpdate = !1 : p.isMeshBasicMaterial ? s(m, p) : p.isMeshLambertMaterial ? (s(m, p), p.envMap && (m.envMapIntensity.value = p.envMapIntensity)) : p.isMeshToonMaterial ? (s(m, p), u(m, p)) : p.isMeshPhongMaterial ? (s(m, p), h(m, p), p.envMap && (m.envMapIntensity.value = p.envMapIntensity)) : p.isMeshStandardMaterial ? (s(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, S)) : p.isMeshMatcapMaterial ? (s(m, p), g(m, p)) : p.isMeshDepthMaterial ? s(m, p) : p.isMeshDistanceMaterial ? (s(m, p), _(m, p)) : p.isMeshNormalMaterial ? s(m, p) : p.isLineBasicMaterial ? (a(m, p), p.isLineDashedMaterial && o(m, p)) : p.isPointsMaterial ? l(m, p, M, E) : p.isSpriteMaterial ? c(m, p) : p.isShadowMaterial ? (m.color.value.copy(p.color), m.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(m, p) {
    m.opacity.value = p.opacity, p.color && m.diffuse.value.copy(p.color), p.emissive && m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (m.map.value = p.map, n(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, n(p.alphaMap, m.alphaMapTransform)), p.bumpMap && (m.bumpMap.value = p.bumpMap, n(p.bumpMap, m.bumpMapTransform), m.bumpScale.value = p.bumpScale, p.side === 1 && (m.bumpScale.value *= -1)), p.normalMap && (m.normalMap.value = p.normalMap, n(p.normalMap, m.normalMapTransform), m.normalScale.value.copy(p.normalScale), p.side === 1 && m.normalScale.value.negate()), p.displacementMap && (m.displacementMap.value = p.displacementMap, n(p.displacementMap, m.displacementMapTransform), m.displacementScale.value = p.displacementScale, m.displacementBias.value = p.displacementBias), p.emissiveMap && (m.emissiveMap.value = p.emissiveMap, n(p.emissiveMap, m.emissiveMapTransform)), p.specularMap && (m.specularMap.value = p.specularMap, n(p.specularMap, m.specularMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
    const M = t.get(p), E = M.envMap, S = M.envMapRotation;
    E && (m.envMap.value = E, m.envMapRotation.value.setFromMatrix4($m.makeRotationFromEuler(S)).transpose(), E.isCubeTexture && E.isRenderTargetTexture === !1 && m.envMapRotation.value.premultiply($c), m.reflectivity.value = p.reflectivity, m.ior.value = p.ior, m.refractionRatio.value = p.refractionRatio), p.lightMap && (m.lightMap.value = p.lightMap, m.lightMapIntensity.value = p.lightMapIntensity, n(p.lightMap, m.lightMapTransform)), p.aoMap && (m.aoMap.value = p.aoMap, m.aoMapIntensity.value = p.aoMapIntensity, n(p.aoMap, m.aoMapTransform));
  }
  function a(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, p.map && (m.map.value = p.map, n(p.map, m.mapTransform));
  }
  function o(m, p) {
    m.dashSize.value = p.dashSize, m.totalSize.value = p.dashSize + p.gapSize, m.scale.value = p.scale;
  }
  function l(m, p, M, E) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.size.value = p.size * M, m.scale.value = E * 0.5, p.map && (m.map.value = p.map, n(p.map, m.uvTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, n(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function c(m, p) {
    m.diffuse.value.copy(p.color), m.opacity.value = p.opacity, m.rotation.value = p.rotation, p.map && (m.map.value = p.map, n(p.map, m.mapTransform)), p.alphaMap && (m.alphaMap.value = p.alphaMap, n(p.alphaMap, m.alphaMapTransform)), p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest);
  }
  function h(m, p) {
    m.specular.value.copy(p.specular), m.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function d(m, p) {
    m.metalness.value = p.metalness, p.metalnessMap && (m.metalnessMap.value = p.metalnessMap, n(p.metalnessMap, m.metalnessMapTransform)), m.roughness.value = p.roughness, p.roughnessMap && (m.roughnessMap.value = p.roughnessMap, n(p.roughnessMap, m.roughnessMapTransform)), p.envMap && (m.envMapIntensity.value = p.envMapIntensity);
  }
  function f(m, p, M) {
    m.ior.value = p.ior, p.diffuseRoughness > 0 && (m.diffuseRoughness.value = p.diffuseRoughness, p.diffuseRoughnessMap && (m.diffuseRoughnessMap.value = p.diffuseRoughnessMap, n(p.diffuseRoughnessMap, m.diffuseRoughnessMapTransform))), p.sheen > 0 && (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), m.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (m.sheenColorMap.value = p.sheenColorMap, n(p.sheenColorMap, m.sheenColorMapTransform)), p.sheenRoughnessMap && (m.sheenRoughnessMap.value = p.sheenRoughnessMap, n(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))), p.clearcoat > 0 && (m.clearcoat.value = p.clearcoat, m.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (m.clearcoatMap.value = p.clearcoatMap, n(p.clearcoatMap, m.clearcoatMapTransform)), p.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, n(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (m.clearcoatNormalMap.value = p.clearcoatNormalMap, n(p.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === 1 && m.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (m.dispersion.value = p.dispersion), p.retroreflectivity > 0 && (m.retroreflectivity.value = p.retroreflectivity), p.iridescence > 0 && (m.iridescence.value = p.iridescence, m.iridescenceIOR.value = p.iridescenceIOR, m.iridescenceThicknessMinimum.value = p.iridescenceThicknessMinimum, m.iridescenceThicknessMaximum.value = p.iridescenceThicknessMaximum, p.iridescenceMap && (m.iridescenceMap.value = p.iridescenceMap, n(p.iridescenceMap, m.iridescenceMapTransform)), p.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = p.iridescenceThicknessMap, n(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), p.transmission > 0 && (m.transmission.value = p.transmission, m.transmissionSamplerMap.value = M.texture, m.transmissionSamplerSize.value.set(M.width, M.height), p.transmissionMap && (m.transmissionMap.value = p.transmissionMap, n(p.transmissionMap, m.transmissionMapTransform)), m.thickness.value = p.thickness, p.thicknessMap && (m.thicknessMap.value = p.thicknessMap, n(p.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = p.attenuationDistance, m.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (m.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (m.anisotropyMap.value = p.anisotropyMap, n(p.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = p.specularIntensity, m.specularColor.value.copy(p.specularColor), p.specularColorMap && (m.specularColorMap.value = p.specularColorMap, n(p.specularColorMap, m.specularColorMapTransform)), p.specularIntensityMap && (m.specularIntensityMap.value = p.specularIntensityMap, n(p.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function _(m, p) {
    const M = t.get(p).light;
    m.referencePosition.value.setFromMatrixPosition(M.matrixWorld), m.nearDistance.value = M.shadow.camera.near, m.farDistance.value = M.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: r
  };
}
function Jm(e, t, n, i) {
  let r = {}, s = {};
  function a(M, E) {
    const S = E.program;
    i.uniformBlockBinding(M, S, r[M.id]);
  }
  function o(M, E) {
    let S = r[M.id];
    S === void 0 && (g(M), S = l(M), r[M.id] = S, M.addEventListener("dispose", m));
    const b = E.program;
    i.updateUBOMapping(M, b);
    const A = t.render.frame;
    s[M.id] !== A && (c(M), s[M.id] = A);
  }
  function l(M) {
    const E = e.createBuffer(), S = M.__size, b = M.usage;
    return e.bindBuffer(e.UNIFORM_BUFFER, E), e.bufferData(e.UNIFORM_BUFFER, S, b), e.bindBuffer(e.UNIFORM_BUFFER, null), E;
  }
  function c(M) {
    const E = r[M.id], S = M.uniforms, b = M.__cache;
    e.bindBuffer(e.UNIFORM_BUFFER, E);
    for (let A = 0, v = S.length; A < v; A++) {
      const T = S[A];
      if (Array.isArray(T)) for (let w = 0, F = T.length; w < F; w++) h(T[w], A, w, b);
      else h(T, A, 0, b);
    }
    e.bindBuffer(e.UNIFORM_BUFFER, null);
  }
  function h(M, E, S, b) {
    if (d(M, E, S, b) === !0) {
      const A = M.__offset, v = M.value;
      if (Array.isArray(v)) {
        let T = 0;
        for (let w = 0; w < v.length; w++) {
          const F = v[w], P = _(F, !0);
          u(F, M.__data, T), T += P.storage / Float32Array.BYTES_PER_ELEMENT;
        }
      } else u(v, M.__data, 0);
      e.bufferSubData(e.UNIFORM_BUFFER, A, M.__data);
    }
  }
  function u(M, E, S) {
    typeof M == "number" || typeof M == "boolean" ? E[S] = M : M.isMatrix3 ? (E[S] = M.elements[0], E[S + 1] = M.elements[1], E[S + 2] = M.elements[2], E[S + 3] = 0, E[S + 4] = M.elements[3], E[S + 5] = M.elements[4], E[S + 6] = M.elements[5], E[S + 7] = 0, E[S + 8] = M.elements[6], E[S + 9] = M.elements[7], E[S + 10] = M.elements[8], E[S + 11] = 0) : ArrayBuffer.isView(M) ? E.set(M.subarray(0, E.length - S), S) : M.toArray(E, S);
  }
  function d(M, E, S, b) {
    const A = M.value, v = E + "_" + S;
    if (Array.isArray(A)) {
      b[v] === void 0 && (b[v] = []);
      const T = b[v];
      let w = !1;
      for (let F = 0; F < A.length; F++) f(A[F], T, F) === !0 && (w = !0);
      return w;
    }
    return f(A, b, v);
  }
  function f(M, E, S) {
    if (E[S] === void 0)
      return typeof M == "number" || typeof M == "boolean" ? E[S] = M : ArrayBuffer.isView(M) ? E[S] = M.slice() : E[S] = M.clone(), !0;
    {
      const b = E[S];
      if (typeof M == "number" || typeof M == "boolean") {
        if (b !== M)
          return E[S] = M, !0;
      } else {
        if (ArrayBuffer.isView(M)) return !0;
        if (b.equals(M) === !1)
          return b.copy(M), !0;
      }
    }
    return !1;
  }
  function g(M) {
    const E = M.uniforms;
    let S = 0;
    const b = 16;
    for (let v = 0, T = E.length; v < T; v++) {
      const w = Array.isArray(E[v]) ? E[v] : [E[v]];
      for (let F = 0, P = w.length; F < P; F++) {
        const U = w[F], q = Array.isArray(U.value) ? U.value : [U.value], I = Array.isArray(E[v]) || Array.isArray(U.value);
        let V = S;
        for (let $ = 0, k = q.length; $ < k; $++) {
          const ae = q[$], Y = _(ae, I), K = S % b, ie = K % Y.boundary, Ee = K + ie;
          S += ie, Ee !== 0 && b - Ee < Y.storage && (S += b - Ee), $ === 0 && (V = S), S += Y.storage;
        }
        U.__data = new (U.type === "int" ? Int32Array : U.type === "uint" ? Uint32Array : Float32Array)((S - V) / Float32Array.BYTES_PER_ELEMENT), U.__offset = V;
      }
    }
    const A = S % b;
    return A > 0 && (S += b - A), M.__size = S, M.__cache = {}, this;
  }
  function _(M, E) {
    const S = {
      boundary: 0,
      storage: 0
    };
    return typeof M == "number" || typeof M == "boolean" ? (S.boundary = 4, S.storage = 4) : M.isVector2 ? (S.boundary = 8, S.storage = 8) : M.isVector3 || M.isColor ? (S.boundary = 16, S.storage = 12) : M.isVector4 ? (S.boundary = 16, S.storage = 16) : M.isMatrix3 ? (S.boundary = 16, S.storage = 48) : M.isMatrix4 ? (S.boundary = 16, S.storage = 64) : M.isTexture ? xe("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(M) ? (S.boundary = 16, S.storage = M.byteLength) : xe("WebGLRenderer: Unsupported uniform value type.", M), E === !0 && (S.boundary = 16, S.storage = Math.ceil(S.storage / 16) * 16), S;
  }
  function m(M) {
    const E = M.target;
    E.removeEventListener("dispose", m), e.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id];
  }
  function p() {
    for (const M in r) e.deleteBuffer(r[M]);
    r = {}, s = {};
  }
  return {
    bind: a,
    update: o,
    dispose: p
  };
}
var Qm = new Uint16Array([
  12469,
  15057,
  12620,
  14925,
  13266,
  14620,
  13807,
  14376,
  14323,
  13990,
  14545,
  13625,
  14713,
  13328,
  14840,
  12882,
  14931,
  12528,
  14996,
  12233,
  15039,
  11829,
  15066,
  11525,
  15080,
  11295,
  15085,
  10976,
  15082,
  10705,
  15073,
  10495,
  13880,
  14564,
  13898,
  14542,
  13977,
  14430,
  14158,
  14124,
  14393,
  13732,
  14556,
  13410,
  14702,
  12996,
  14814,
  12596,
  14891,
  12291,
  14937,
  11834,
  14957,
  11489,
  14958,
  11194,
  14943,
  10803,
  14921,
  10506,
  14893,
  10278,
  14858,
  9960,
  14484,
  14039,
  14487,
  14025,
  14499,
  13941,
  14524,
  13740,
  14574,
  13468,
  14654,
  13106,
  14743,
  12678,
  14818,
  12344,
  14867,
  11893,
  14889,
  11509,
  14893,
  11180,
  14881,
  10751,
  14852,
  10428,
  14812,
  10128,
  14765,
  9754,
  14712,
  9466,
  14764,
  13480,
  14764,
  13475,
  14766,
  13440,
  14766,
  13347,
  14769,
  13070,
  14786,
  12713,
  14816,
  12387,
  14844,
  11957,
  14860,
  11549,
  14868,
  11215,
  14855,
  10751,
  14825,
  10403,
  14782,
  10044,
  14729,
  9651,
  14666,
  9352,
  14599,
  9029,
  14967,
  12835,
  14966,
  12831,
  14963,
  12804,
  14954,
  12723,
  14936,
  12564,
  14917,
  12347,
  14900,
  11958,
  14886,
  11569,
  14878,
  11247,
  14859,
  10765,
  14828,
  10401,
  14784,
  10011,
  14727,
  9600,
  14660,
  9289,
  14586,
  8893,
  14508,
  8533,
  15111,
  12234,
  15110,
  12234,
  15104,
  12216,
  15092,
  12156,
  15067,
  12010,
  15028,
  11776,
  14981,
  11500,
  14942,
  11205,
  14902,
  10752,
  14861,
  10393,
  14812,
  9991,
  14752,
  9570,
  14682,
  9252,
  14603,
  8808,
  14519,
  8445,
  14431,
  8145,
  15209,
  11449,
  15208,
  11451,
  15202,
  11451,
  15190,
  11438,
  15163,
  11384,
  15117,
  11274,
  15055,
  10979,
  14994,
  10648,
  14932,
  10343,
  14871,
  9936,
  14803,
  9532,
  14729,
  9218,
  14645,
  8742,
  14556,
  8381,
  14461,
  8020,
  14365,
  7603,
  15273,
  10603,
  15272,
  10607,
  15267,
  10619,
  15256,
  10631,
  15231,
  10614,
  15182,
  10535,
  15118,
  10389,
  15042,
  10167,
  14963,
  9787,
  14883,
  9447,
  14800,
  9115,
  14710,
  8665,
  14615,
  8318,
  14514,
  7911,
  14411,
  7507,
  14279,
  7198,
  15314,
  9675,
  15313,
  9683,
  15309,
  9712,
  15298,
  9759,
  15277,
  9797,
  15229,
  9773,
  15166,
  9668,
  15084,
  9487,
  14995,
  9274,
  14898,
  8910,
  14800,
  8539,
  14697,
  8234,
  14590,
  7790,
  14479,
  7409,
  14367,
  7067,
  14178,
  6621,
  15337,
  8619,
  15337,
  8631,
  15333,
  8677,
  15325,
  8769,
  15305,
  8871,
  15264,
  8940,
  15202,
  8909,
  15119,
  8775,
  15022,
  8565,
  14916,
  8328,
  14804,
  8009,
  14688,
  7614,
  14569,
  7287,
  14448,
  6888,
  14321,
  6483,
  14088,
  6171,
  15350,
  7402,
  15350,
  7419,
  15347,
  7480,
  15340,
  7613,
  15322,
  7804,
  15287,
  7973,
  15229,
  8057,
  15148,
  8012,
  15046,
  7846,
  14933,
  7611,
  14810,
  7357,
  14682,
  7069,
  14552,
  6656,
  14421,
  6316,
  14251,
  5948,
  14007,
  5528,
  15356,
  5942,
  15356,
  5977,
  15353,
  6119,
  15348,
  6294,
  15332,
  6551,
  15302,
  6824,
  15249,
  7044,
  15171,
  7122,
  15070,
  7050,
  14949,
  6861,
  14818,
  6611,
  14679,
  6349,
  14538,
  6067,
  14398,
  5651,
  14189,
  5311,
  13935,
  4958,
  15359,
  4123,
  15359,
  4153,
  15356,
  4296,
  15353,
  4646,
  15338,
  5160,
  15311,
  5508,
  15263,
  5829,
  15188,
  6042,
  15088,
  6094,
  14966,
  6001,
  14826,
  5796,
  14678,
  5543,
  14527,
  5287,
  14377,
  4985,
  14133,
  4586,
  13869,
  4257,
  15360,
  1563,
  15360,
  1642,
  15358,
  2076,
  15354,
  2636,
  15341,
  3350,
  15317,
  4019,
  15273,
  4429,
  15203,
  4732,
  15105,
  4911,
  14981,
  4932,
  14836,
  4818,
  14679,
  4621,
  14517,
  4386,
  14359,
  4156,
  14083,
  3795,
  13808,
  3437,
  15360,
  122,
  15360,
  137,
  15358,
  285,
  15355,
  636,
  15344,
  1274,
  15322,
  2177,
  15281,
  2765,
  15215,
  3223,
  15120,
  3451,
  14995,
  3569,
  14846,
  3567,
  14681,
  3466,
  14511,
  3305,
  14344,
  3121,
  14037,
  2800,
  13753,
  2467,
  15360,
  0,
  15360,
  1,
  15359,
  21,
  15355,
  89,
  15346,
  253,
  15325,
  479,
  15287,
  796,
  15225,
  1148,
  15133,
  1492,
  15008,
  1749,
  14856,
  1882,
  14685,
  1886,
  14506,
  1783,
  14324,
  1608,
  13996,
  1398,
  13702,
  1183
]), Mn = null;
function jm() {
  return Mn === null && (Mn = new za(Qm, 16, 16, As, ii), Mn.name = "DFG_LUT", Mn.minFilter = rn, Mn.magFilter = rn, Mn.wrapS = xn, Mn.wrapT = xn, Mn.generateMipmaps = !1, Mn.needsUpdate = !0), Mn;
}
var eg = class {
  constructor(e = {}) {
    const { canvas: t = Yu(), context: n = null, depth: i = !0, stencil: r = !1, alpha: s = !1, antialias: a = !1, premultipliedAlpha: o = !0, preserveDrawingBuffer: l = !1, powerPreference: c = "default", failIfMajorPerformanceCaveat: h = !1, reversedDepthBuffer: u = !1, outputBufferType: d = ni } = e;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else f = s;
    const g = d, _ = /* @__PURE__ */ new Set([
      ec,
      jl,
      Ql
    ]), m = /* @__PURE__ */ new Set([
      ni,
      mi,
      Kl,
      Ua,
      $l,
      Zl
    ]), p = /* @__PURE__ */ new Uint32Array(4), M = /* @__PURE__ */ new Int32Array(4), E = {
      textures: [],
      min: [],
      max: [],
      resolution: []
    };
    let S = null, b = null;
    const A = [], v = [];
    let T = null;
    this.domElement = t, this.debug = {
      checkShaderErrors: !0,
      diagnostics: { keywords: !1 },
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const w = this;
    let F = !1, P = null, U = null, q = null, I = null;
    this._outputColorSpace = At;
    let V = 0, $ = 0, k = null, ae = -1, Y = null;
    const K = new st(), ie = new st();
    let Ee = null;
    const Z = new Ce(0);
    let ne = 0, _e = t.width, Ae = t.height, we = 1, ue = null, Ve = null;
    const Je = new st(0, 0, _e, Ae), Pe = new st(0, 0, _e, Ae);
    let Tt = !1;
    const Nt = new wr(), Et = new Gd();
    let mt = !1, kt = !1;
    const Yt = new Ge(), gt = new B(), Rt = new st(), zt = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };
    let Ht = !1;
    function on() {
      return k === null ? we : 1;
    }
    let N = n;
    function ln(x, L) {
      return t.getContext(x, L);
    }
    let nt, yt, pe, it, Le, Oe, wt, R, y, H, ee, J, oe, le, D, j, Me, C, X, Q, re, de, ce;
    try {
      const x = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: l,
        powerPreference: c,
        failIfMajorPerformanceCaveat: h
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r187"), t.addEventListener("webglcontextlost", Ue, !1), t.addEventListener("webglcontextrestored", Ie, !1), t.addEventListener("webglcontextcreationerror", Ke, !1), N === null) {
        const L = "webgl2";
        if (N = ln(L, x), N === null)
          throw ln(L) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      be();
    } catch (x) {
      throw t.removeEventListener("webglcontextlost", Ue, !1), t.removeEventListener("webglcontextrestored", Ie, !1), t.removeEventListener("webglcontextcreationerror", Ke, !1), De("WebGLRenderer: " + x.message), x;
    }
    function be() {
      nt = new ip(N), nt.init(), re = new Wm(N, nt), yt = new qf(N, nt, e, re), pe = new Gm(N, nt), yt.reversedDepthBuffer && u && pe.buffers.depth.setReversed(!0), U = N.createFramebuffer(), q = N.createFramebuffer(), I = N.createFramebuffer(), it = new ap(N), Le = new wm(), Oe = new Vm(N, nt, pe, Le, yt, re, it), wt = new np(w), R = new Hf(N), de = new Wf(N, R), y = new rp(N, R, it, de), H = new lp(N, y, R, de, it), C = new op(N, yt, Oe), D = new Yf(Le), ee = new Rm(w, wt, nt, yt, de, D), J = new Zm(w, Le), oe = new Pm(), le = new Om(nt), Me = new Vf(w, wt, pe, H, f, o), j = new Hm(w, H, yt), ce = new Jm(N, it, yt, pe), X = new Xf(N, nt, it), Q = new sp(N, nt, it), it.programs = ee.programs, w.capabilities = yt, w.extensions = nt, w.properties = Le, w.renderLists = oe, w.shadowMap = j, w.state = pe, w.info = it;
    }
    g !== 1009 && (T = new hp(g, t.width, t.height, a, i, r));
    const te = new Km(w, N);
    this.xr = te, this.getContext = function() {
      return N;
    }, this.getContextAttributes = function() {
      return N.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = nt.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = nt.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return we;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (we = x, this.setSize(_e, Ae, !1));
    }, this.getSize = function(x) {
      return x.set(_e, Ae);
    }, this.setSize = function(x, L, W = !0) {
      if (te.isPresenting) {
        xe("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      _e = x, Ae = L, t.width = Math.floor(x * we), t.height = Math.floor(L * we), W === !0 && (t.style.width = x + "px", t.style.height = L + "px"), T !== null && T.setSize(t.width, t.height), this.setViewport(0, 0, x, L);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(_e * we, Ae * we).floor();
    }, this.setDrawingBufferSize = function(x, L, W) {
      _e = x, Ae = L, we = W, t.width = Math.floor(x * W), t.height = Math.floor(L * W), this.setViewport(0, 0, x, L);
    }, this.setEffects = function(x) {
      if (g === 1009) {
        De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (x) {
        for (let L = 0; L < x.length; L++) if (x[L].isOutputPass === !0) {
          xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      T.setEffects(x || []);
    }, this.getCurrentViewport = function(x) {
      return x.copy(K);
    }, this.getViewport = function(x) {
      return x.copy(Je);
    }, this.setViewport = function(x, L, W, G) {
      x.isVector4 ? Je.set(x.x, x.y, x.z, x.w) : Je.set(x, L, W, G), pe.viewport(K.copy(Je).multiplyScalar(on()).round());
    }, this.getScissor = function(x) {
      return x.copy(Pe);
    }, this.setScissor = function(x, L, W, G) {
      x.isVector4 ? Pe.set(x.x, x.y, x.z, x.w) : Pe.set(x, L, W, G), pe.scissor(ie.copy(Pe).multiplyScalar(on()).round());
    }, this.getScissorTest = function() {
      return Tt;
    }, this.setScissorTest = function(x) {
      pe.setScissorTest(Tt = x);
    }, this.setOpaqueSort = function(x) {
      ue = x;
    }, this.setTransparentSort = function(x) {
      Ve = x;
    }, this.getClearColor = function(x) {
      return x.copy(Me.getClearColor());
    }, this.setClearColor = function() {
      Me.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Me.getClearAlpha();
    }, this.setClearAlpha = function() {
      Me.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, L = !0, W = !0) {
      let G = 0;
      if (x) {
        let z = !1;
        if (k !== null) {
          const se = k.texture.format;
          z = _.has(se);
        }
        if (z) {
          const se = k.texture.type, fe = m.has(se), he = Me.getClearColor(), ve = Me.getClearAlpha(), Re = he.r, We = he.g, $e = he.b;
          fe ? (p[0] = Re, p[1] = We, p[2] = $e, p[3] = ve, N.clearBufferuiv(N.COLOR, 0, p)) : (M[0] = Re, M[1] = We, M[2] = $e, M[3] = ve, N.clearBufferiv(N.COLOR, 0, M));
        } else G |= N.COLOR_BUFFER_BIT;
      }
      L && (G |= N.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), W && (G |= N.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), G !== 0 && N.clear(G);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(x) {
      x.setRenderer(this), P = x;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Ue, !1), t.removeEventListener("webglcontextrestored", Ie, !1), t.removeEventListener("webglcontextcreationerror", Ke, !1), Me.dispose(), oe.dispose(), le.dispose(), Oe.dispose(), Le.dispose(), wt.dispose(), H.dispose(), y.dispose(), de.dispose(), ce.dispose(), ee.dispose(), te.dispose(), te.removeEventListener("sessionstart", Ya), te.removeEventListener("sessionend", Ka), ri.stop();
    };
    function Ue(x) {
      x.preventDefault(), Cs("WebGLRenderer: Context Lost."), F = !0;
    }
    function Ie() {
      Cs("WebGLRenderer: Context Restored."), F = !1;
      const x = it.autoReset, L = j.enabled, W = j.autoUpdate, G = j.needsUpdate, z = j.type;
      be(), it.autoReset = x, j.enabled = L, j.autoUpdate = W, j.needsUpdate = G, j.type = z;
    }
    function Ke(x) {
      De("WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function ge(x) {
      const L = x.target;
      L.removeEventListener("dispose", ge), lt(L);
    }
    function lt(x) {
      ct(x), Le.remove(x);
    }
    function ct(x) {
      const L = Le.get(x).programs;
      L !== void 0 && (L.forEach(function(W) {
        ee.releaseProgram(W);
      }), x.isShaderMaterial && ee.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, L, W, G, z, se) {
      L === null && (L = zt);
      const fe = z.isMesh && z.matrixWorld.determinantAffine() < 0, he = nh(x, L, W, G, z);
      pe.setMaterial(G, fe);
      let ve = W.index, Re = 1;
      if (G.wireframe === !0) {
        if (ve = y.getWireframeAttribute(W), ve === void 0) return;
        Re = 2;
      }
      const We = W.drawRange, $e = W.attributes.position;
      let Se = We.start * Re, je = (We.start + We.count) * Re;
      se !== null && (Se = Math.max(Se, se.start * Re), je = Math.min(je, (se.start + se.count) * Re)), ve !== null ? (Se = Math.max(Se, 0), je = Math.min(je, ve.count)) : $e != null && (Se = Math.max(Se, 0), je = Math.min(je, $e.count));
      const pt = je - Se;
      if (pt < 0 || pt === 1 / 0) return;
      de.setup(z, G, he, W, ve);
      let rt, Qe = X;
      if (ve !== null && (rt = R.get(ve), Qe = Q, Qe.setIndex(rt)), z.isMesh)
        G.wireframe === !0 ? (pe.setLineWidth(G.wireframeLinewidth * on()), Qe.setMode(N.LINES)) : Qe.setMode(N.TRIANGLES);
      else if (z.isLine) {
        let Ct = G.linewidth;
        Ct === void 0 && (Ct = 1), pe.setLineWidth(Ct * on()), z.isLineSegments ? Qe.setMode(N.LINES) : z.isLineLoop ? Qe.setMode(N.LINE_LOOP) : Qe.setMode(N.LINE_STRIP);
      } else z.isPoints ? Qe.setMode(N.POINTS) : z.isSprite && Qe.setMode(N.TRIANGLES);
      if (z.isBatchedMesh)
        if (nt.get("WEBGL_multi_draw"))
          Qe.renderMultiDraw(z._multiDrawStarts, z._multiDrawCounts, z._multiDrawCount);
        else {
          const Ct = z._multiDrawStarts, ye = z._multiDrawCounts, Kt = z._multiDrawCount, et = ve ? R.get(ve).bytesPerElement : 1, si = Le.get(G).currentProgram.getUniforms();
          for (let Pt = 0; Pt < Kt; Pt++)
            si.setValue(N, "_gl_DrawID", Pt), Qe.render(Ct[Pt] / et, ye[Pt]);
        }
      else if (z.isInstancedMesh) Qe.renderInstances(Se, pt, z.count);
      else if (W.isInstancedBufferGeometry) {
        const Ct = W._maxInstanceCount !== void 0 ? W._maxInstanceCount : 1 / 0, ye = Math.min(W.instanceCount, Ct);
        Qe.renderInstances(Se, pt, ye);
      } else Qe.render(Se, pt);
    };
    function qa(x, L, W, G) {
      P !== null && x.isNodeMaterial && P.setObject(G, x), mt === !0 && D.setState(x, W, !1), x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1 ? (x.side = 1, x.needsUpdate = !0, er(x, L, G), x.side = 0, x.needsUpdate = !0, er(x, L, G), x.side = 2) : er(x, L, G);
    }
    this.compile = function(x, L, W = null) {
      W === null && (W = x), P !== null && P.renderStart(x, L, W), b = le.get(W), b.init(L), v.push(b), W.traverseVisible(function(z) {
        z.isLight && z.layers.test(L.layers) && (b.pushLight(z), z.castShadow && b.pushShadow(z));
      }), x !== W && x.traverseVisible(function(z) {
        z.isLight && z.layers.test(L.layers) && (b.pushLight(z), z.castShadow && b.pushShadow(z));
      }), b.setupLights(), P !== null && P.updateLights(b.state.lightsArray), kt = this.localClippingEnabled, mt = D.init(this.clippingPlanes, kt), mt === !0 && D.setGlobalState(this.clippingPlanes, L), P !== null && j.render(b.state.shadowsArray, W, L);
      const G = /* @__PURE__ */ new Set();
      return x.traverse(function(z) {
        if (!(z.isMesh || z.isPoints || z.isLine || z.isSprite)) return;
        const se = z.material;
        if (se)
          if (Array.isArray(se)) for (let fe = 0; fe < se.length; fe++) {
            const he = se[fe];
            qa(he, W, L, z), G.add(he);
          }
          else
            qa(se, W, L, z), G.add(se);
      }), b = v.pop(), P !== null && P.renderEnd(), G;
    }, this.compileAsync = function(x, L, W = null) {
      const G = this.compile(x, L, W);
      return new Promise((z) => {
        function se() {
          if (G.forEach(function(fe) {
            const he = Le.get(fe).currentProgram;
            (he === void 0 || he.isReady()) && G.delete(fe);
          }), G.size === 0) {
            z(x);
            return;
          }
          setTimeout(se, 10);
        }
        nt.get("KHR_parallel_shader_compile") !== null ? se() : setTimeout(se, 10);
      });
    };
    let zs = null;
    function eh(x) {
      zs && zs(x);
    }
    function Ya() {
      ri.stop();
    }
    function Ka() {
      ri.start();
    }
    const ri = new Bc();
    ri.setAnimationLoop(eh), typeof self < "u" && ri.setContext(self), this.setAnimationLoop = function(x) {
      zs = x, te.setAnimationLoop(x), x === null ? ri.stop() : ri.start();
    }, te.addEventListener("sessionstart", Ya), te.addEventListener("sessionend", Ka), this.render = function(x, L) {
      if (L !== void 0 && L.isCamera !== !0) {
        De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (F === !0) return;
      P !== null && P.renderStart(x, L);
      const W = te.enabled === !0 && te.isPresenting === !0, G = T !== null && (k === null || W) && T.begin(w, k);
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === !0 && L.updateMatrixWorld(), te.enabled === !0 && te.isPresenting === !0 && (T === null || T.isCompositing() === !1) && (te.cameraAutoUpdate === !0 && te.updateCamera(L), L = te.getCamera()), x.isScene === !0 && x.onBeforeRender(w, x, L, k), b = le.get(x, v.length), b.init(L), b.state.textureUnits = Oe.getTextureUnits(), v.push(b), Yt.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), L.isArrayCamera ? Et.setFromArrayCamera(L) : Nt.setFromProjectionMatrix(Yt, gi, L.reversedDepth), kt = this.localClippingEnabled, mt = D.init(this.clippingPlanes, kt), S = oe.get(x, A.length), S.init(), A.push(S), this.info.render.frame++, te.enabled === !0 && te.isPresenting === !0) {
        const se = w.xr.getDepthSensingMesh();
        se !== null && Hs(se, L, -1 / 0, w.sortObjects);
      }
      Hs(x, L, 0, w.sortObjects), S.finish(), P !== null && P.updateLights(b.state.lightsArray), w.sortObjects === !0 && S.sort(ue, Ve), Ht = te.enabled === !1 || te.isPresenting === !1 || te.hasDepthSensing() === !1, Ht && Me.addToRenderList(S, x), this.info.autoReset === !0 && this.info.reset(), mt === !0 && D.beginShadows();
      const z = b.state.shadowsArray;
      if (j.render(z, x, L), mt === !0 && D.endShadows(), (G && T.hasRenderPass()) === !1) {
        const se = S.opaque, fe = S.transmissive;
        if (b.setupLights(), L.isArrayCamera) {
          const he = L.cameras;
          if (fe.length > 0) for (let ve = 0, Re = he.length; ve < Re; ve++) {
            const We = he[ve];
            Za(se, fe, x, We);
          }
          Ht && Me.render(x);
          for (let ve = 0, Re = he.length; ve < Re; ve++) {
            const We = he[ve];
            $a(S, x, We, We.viewport);
          }
        } else
          fe.length > 0 && Za(se, fe, x, L), Ht && Me.render(x), $a(S, x, L);
      }
      k !== null && $ === 0 && (Oe.updateMultisampleRenderTarget(k), Oe.updateRenderTargetMipmap(k)), G && T.end(w), x.isScene === !0 && x.onAfterRender(w, x, L), de.resetDefaultState(), ae = -1, Y = null, v.pop(), v.length > 0 ? (b = v[v.length - 1], Oe.setTextureUnits(b.state.textureUnits), mt === !0 && D.setGlobalState(w.clippingPlanes, b.state.camera)) : b = null, A.pop(), A.length > 0 ? S = A[A.length - 1] : S = null, P !== null && P.renderEnd();
    };
    function Hs(x, L, W, G) {
      if (x.visible === !1) return;
      if (x.layers.test(L.layers)) {
        if (x.isGroup) W = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(L);
        else if (x.isLight)
          b.pushLight(x), x.castShadow && b.pushShadow(x);
        else if (x.isSprite) {
          const se = L.isArrayCamera ? Et : Nt;
          if (!x.frustumCulled || x.intersectsFrustum(se)) {
            G && Rt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Yt);
            const fe = H.update(x), he = x.material;
            he.visible && S.push(x, fe, he, W, Rt.z, null, L);
          }
        } else if (x.isMesh || x.isLine || x.isPoints) {
          const se = L.isArrayCamera ? Et : Nt;
          if (!x.frustumCulled || x.intersectsFrustum(se)) {
            const fe = H.update(x), he = x.material;
            if (G && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), Rt.copy(x.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), Rt.copy(fe.boundingSphere.center)), Rt.applyMatrix4(x.matrixWorld).applyMatrix4(Yt)), Array.isArray(he)) {
              const ve = fe.groups;
              for (let Re = 0, We = ve.length; Re < We; Re++) {
                const $e = ve[Re], Se = he[$e.materialIndex];
                Se && Se.visible && S.push(x, fe, Se, W, Rt.z, $e, L);
              }
            } else he.visible && S.push(x, fe, he, W, Rt.z, null, L);
          }
        }
      }
      const z = x.children;
      for (let se = 0, fe = z.length; se < fe; se++) Hs(z[se], L, W, G);
    }
    function $a(x, L, W, G) {
      const { opaque: z, transmissive: se, transparent: fe } = x;
      b.setupLightsView(W), mt === !0 && D.setGlobalState(w.clippingPlanes, W), G && pe.viewport(K.copy(G)), z.length > 0 && Fr(z, L, W), se.length > 0 && Fr(se, L, W), fe.length > 0 && Fr(fe, L, W), pe.buffers.depth.setTest(!0), pe.buffers.depth.setMask(!0), pe.buffers.color.setMask(!0), pe.setPolygonOffset(!1);
    }
    function Za(x, L, W, G) {
      if ((W.isScene === !0 ? W.overrideMaterial : null) !== null) return;
      if (b.state.transmissionRenderTarget[G.id] === void 0) {
        const $e = nt.has("EXT_color_buffer_half_float") || nt.has("EXT_color_buffer_float");
        b.state.transmissionRenderTarget[G.id] = new En(1, 1, {
          generateMipmaps: !0,
          type: $e ? ii : ni,
          minFilter: Ir,
          samples: Math.max(4, yt.samples),
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          storeMultisampledDepthBuffer: !1,
          storeMultisampledStencilBuffer: !1,
          colorSpace: qe.workingColorSpace
        });
      }
      const z = b.state.transmissionRenderTarget[G.id], se = G.viewport || K;
      z.setSize(se.z * w.transmissionResolutionScale, se.w * w.transmissionResolutionScale);
      const fe = w.getRenderTarget(), he = w.getActiveCubeFace(), ve = w.getActiveMipmapLevel();
      w.setRenderTarget(z), w.getClearColor(Z), ne = w.getClearAlpha(), ne < 1 && w.setClearColor(16777215, 0.5), w.clear(), Ht && Me.render(W);
      const Re = w.toneMapping;
      w.toneMapping = 0;
      const We = G.viewport;
      if (G.viewport !== void 0 && (G.viewport = void 0), b.setupLightsView(G), mt === !0 && D.setGlobalState(w.clippingPlanes, G), Fr(x, W, G), Oe.updateMultisampleRenderTarget(z), Oe.updateRenderTargetMipmap(z), nt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let $e = !1;
        for (let Se = 0, je = L.length; Se < je; Se++) {
          const { object: pt, geometry: rt, material: Qe, group: Ct } = L[Se];
          if (Qe.side === 2 && pt.layers.test(G.layers)) {
            const ye = Qe.side;
            Qe.side = 1, Qe.needsUpdate = !0, Ja(pt, W, G, rt, Qe, Ct), Qe.side = ye, Qe.needsUpdate = !0, $e = !0;
          }
        }
        $e === !0 && (Oe.updateMultisampleRenderTarget(z), Oe.updateRenderTargetMipmap(z));
      }
      w.setRenderTarget(fe, he, ve), w.setClearColor(Z, ne), We !== void 0 && (G.viewport = We), w.toneMapping = Re;
    }
    function Fr(x, L, W) {
      const G = L.isScene === !0 ? L.overrideMaterial : null;
      for (let z = 0, se = x.length; z < se; z++) {
        const fe = x[z], { object: he, geometry: ve, group: Re } = fe;
        let We = fe.material;
        We.allowOverride === !0 && G !== null && (We = G), he.layers.test(W.layers) && Ja(he, L, W, ve, We, Re);
      }
    }
    function Ja(x, L, W, G, z, se) {
      P !== null && z.isNodeMaterial && P.setObject(x, z), x.onBeforeRender(w, L, W, G, z, se), x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), z.onBeforeRender(w, L, W, G, x, se), z.transparent === !0 && z.side === 2 && z.forceSinglePass === !1 ? (z.side = 1, z.needsUpdate = !0, w.renderBufferDirect(W, L, G, z, x, se), z.side = 0, z.needsUpdate = !0, w.renderBufferDirect(W, L, G, z, x, se), z.side = 2) : w.renderBufferDirect(W, L, G, z, x, se), x.onAfterRender(w, L, W, G, z, se);
    }
    function Qa(x) {
      let L = 0;
      for (const W of x) W.texture !== null && L++;
      return L;
    }
    function er(x, L, W) {
      L.isScene !== !0 && (L = zt);
      const G = Le.get(x), z = b.state.lights, se = b.state.shadowsArray, fe = z.state.version, he = ee.getParameters(x, z.state, se, L, W, b.state.lightProbeGridArray), ve = ee.getProgramCacheKey(he);
      let Re = G.programs;
      G.environment = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? L.environment : null, G.fog = L.fog;
      const We = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap;
      G.envMap = wt.get(x.envMap || G.environment, We), G.envMapRotation = G.environment !== null && x.envMap === null ? L.environmentRotation : x.envMapRotation, Re === void 0 && (x.addEventListener("dispose", ge), Re = /* @__PURE__ */ new Map(), G.programs = Re, G.programVariants = /* @__PURE__ */ new Map());
      let $e = Re.get(ve);
      if ($e !== void 0) {
        if (G.currentProgram === $e && G.lightsStateVersion === fe)
          return eo(x, he), $e;
      } else
        he.uniforms = ee.getUniforms(x), P !== null && x.isNodeMaterial && P.build(x, W, he), x.onBeforeCompile(he, w), $e = ee.acquireProgram(he, ve), Re.set(ve, $e), G.uniforms = he.uniforms;
      const Se = G.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (Se.clippingPlanes = D.uniform), eo(x, he), G.needsLights = rh(x), G.lightsStateVersion = fe, G.needsLights && (Se.ambientLightColor.value = z.state.ambient, Se.lightProbe.value = z.state.probe, Se.sunLights.value = z.state.sun, Se.sunLightShadows.value = z.state.sunShadow, Se.directionalLights.value = z.state.directional, Se.directionalLightShadows.value = z.state.directionalShadow, Se.spotLights.value = z.state.spot, Se.spotLightShadows.value = z.state.spotShadow, Se.rectAreaLights.value = z.state.rectArea, Se.ltc_1.value = z.state.rectAreaLTC1, Se.ltc_2.value = z.state.rectAreaLTC2, Se.pointLights.value = z.state.point, Se.pointLightShadows.value = z.state.pointShadow, Se.hemisphereLights.value = z.state.hemi, Se.sunShadowMatrix.value = z.state.sunShadowMatrix, Se.sunShadowCascade.value = z.state.sunShadowCascade, Se.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Se.spotLightMatrix.value = z.state.spotLightMatrix, Se.spotLightMap.value = z.state.spotLightMap, Se.pointShadowMatrix.value = z.state.pointShadowMatrix), G.numLightProbeGrids = Qa(b.state.lightProbeGridArray), G.currentProgram = $e, G.uniformsList = null, $e;
    }
    function th(x, L, W, G, z) {
      const se = Le.get(x), fe = se.currentProgram.id + "," + G + "," + z;
      let he = se.programVariants.get(fe);
      return he === void 0 ? (he = er(x, L, W), se.programVariants.set(fe, he)) : (se.currentProgram = he, se.uniformsList = null, se.outputColorSpace = G, se.toneMapping = z), he;
    }
    function ja(x) {
      if (x.uniformsList === null) {
        const L = x.currentProgram.getUniforms();
        x.uniformsList = Ss.seqWithValue(L.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function eo(x, L) {
      const W = Le.get(x);
      W.outputColorSpace = L.outputColorSpace, W.batching = L.batching, W.batchingColor = L.batchingColor, W.instancing = L.instancing, W.instancingColor = L.instancingColor, W.instancingMorph = L.instancingMorph, W.skinning = L.skinning, W.morphTargets = L.morphTargets, W.morphNormals = L.morphNormals, W.morphColors = L.morphColors, W.morphTargetsCount = L.morphTargetsCount, W.numClippingPlanes = L.numClippingPlanes, W.numIntersection = L.numClipIntersection, W.vertexAlphas = L.vertexAlphas, W.vertexTangents = L.vertexTangents, W.toneMapping = L.toneMapping;
    }
    function nh(x, L, W, G, z) {
      L.isScene !== !0 && (L = zt), Oe.resetTextureUnits();
      const se = L.fog, fe = G.isMeshStandardMaterial || G.isMeshLambertMaterial || G.isMeshPhongMaterial ? L.environment : null, he = k === null ? w.outputColorSpace : k.isXRRenderTarget === !0 ? k.texture.colorSpace : qe.workingColorSpace, ve = G.isMeshStandardMaterial || G.isMeshLambertMaterial && !G.envMap || G.isMeshPhongMaterial && !G.envMap, Re = wt.get(G.envMap || fe, ve), We = G.vertexColors === !0 && !!W.attributes.color && W.attributes.color.itemSize === 4, $e = !!W.attributes.tangent && (!!G.normalMap || G.anisotropy > 0), Se = !!W.morphAttributes.position, je = !!W.morphAttributes.normal, pt = !!W.morphAttributes.color;
      let rt = 0;
      G.toneMapped && (k === null || k.isXRRenderTarget === !0) && (rt = w.toneMapping);
      const Qe = W.morphAttributes.position || W.morphAttributes.normal || W.morphAttributes.color, Ct = Qe !== void 0 ? Qe.length : 0, ye = Le.get(G), Kt = b.state.lights;
      if (mt === !0 && (kt === !0 || x !== Y)) {
        const at = x === Y && G.id === ae;
        D.setState(G, x, at);
      }
      let et = !1, si = !1;
      G.version === ye.__version ? ye.needsLights && ye.lightsStateVersion !== Kt.state.version || z.isBatchedMesh && ye.batching === !1 || !z.isBatchedMesh && ye.batching === !0 || z.isBatchedMesh && ye.batchingColor === !0 && z._colorsTexture === null || z.isBatchedMesh && ye.batchingColor === !1 && z._colorsTexture !== null || z.isInstancedMesh && ye.instancing === !1 || !z.isInstancedMesh && ye.instancing === !0 || z.isSkinnedMesh && ye.skinning === !1 || !z.isSkinnedMesh && ye.skinning === !0 || z.isInstancedMesh && ye.instancingColor === !0 && z.instanceColor === null || z.isInstancedMesh && ye.instancingColor === !1 && z.instanceColor !== null || z.isInstancedMesh && ye.instancingMorph === !0 && z.morphTexture === null || z.isInstancedMesh && ye.instancingMorph === !1 && z.morphTexture !== null || ye.envMap !== Re || G.fog === !0 && ye.fog !== se || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== D.numPlanes || ye.numIntersection !== D.numIntersection) || ye.vertexAlphas !== We || ye.vertexTangents !== $e || ye.morphTargets !== Se || ye.morphNormals !== je || ye.morphColors !== pt || ye.morphTargetsCount !== Ct || ye.numLightProbeGrids !== Qa(b.state.lightProbeGridArray) ? et = !0 : (ye.outputColorSpace !== he || ye.toneMapping !== rt) && (si = !0) : (et = !0, ye.__version = G.version);
      let Pt = ye.currentProgram;
      (et === !0 || si === !0) && (Pt = si === !0 ? th(G, L, z, he, rt) : er(G, L, z), P && G.isNodeMaterial && P.onUpdateProgram(G, Pt, ye));
      let Br = !1, Gn = !1, ai = !1;
      const Ze = Pt.getUniforms(), bt = ye.uniforms;
      if (pe.useProgram(Pt.program) && (Br = !0, Gn = !0, ai = !0), G.id !== ae && (ae = G.id, Gn = !0), Br || Y !== x) {
        pe.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0, x.updateProjectionMatrix()), Ze.setValue(N, "projectionMatrix", x.projectionMatrix), Ze.setValue(N, "viewMatrix", x.matrixWorldInverse);
        const at = Ze.map.cameraPosition;
        at !== void 0 && at.setValue(N, gt.setFromMatrixPosition(x.matrixWorld)), yt.logarithmicDepthBuffer && Ze.setValue(N, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (G.isMeshPhongMaterial || G.isMeshToonMaterial || G.isMeshLambertMaterial || G.isMeshBasicMaterial || G.isMeshStandardMaterial || G.isShaderMaterial) && Ze.setValue(N, "isOrthographic", x.isOrthographicCamera === !0), Y !== x && (Y = x, Gn = !0, ai = !0);
      }
      if (ye.needsLights && (Kt.state.sunShadowMap.length > 0 && Ze.setValue(N, "sunShadowMap", Kt.state.sunShadowMap, Oe), Kt.state.directionalShadowMap.length > 0 && Ze.setValue(N, "directionalShadowMap", Kt.state.directionalShadowMap, Oe), Kt.state.spotShadowMap.length > 0 && Ze.setValue(N, "spotShadowMap", Kt.state.spotShadowMap, Oe), Kt.state.pointShadowMap.length > 0 && Ze.setValue(N, "pointShadowMap", Kt.state.pointShadowMap, Oe)), z.isSkinnedMesh) {
        Ze.setOptional(N, z, "bindMatrix"), Ze.setOptional(N, z, "bindMatrixInverse");
        const at = z.skeleton;
        at && (at.boneTexture === null && at.computeBoneTexture(), Ze.setValue(N, "boneTexture", at.boneTexture, Oe));
      }
      z.isBatchedMesh && (Ze.setOptional(N, z, "batchingTexture"), Ze.setValue(N, "batchingTexture", z._matricesTexture, Oe), Ze.setOptional(N, z, "batchingIdTexture"), Ze.setValue(N, "batchingIdTexture", z._indirectTexture, Oe), Ze.setOptional(N, z, "batchingColorTexture"), z._colorsTexture !== null && Ze.setValue(N, "batchingColorTexture", z._colorsTexture, Oe));
      const cn = W.morphAttributes;
      if ((cn.position !== void 0 || cn.normal !== void 0 || cn.color !== void 0) && C.update(z, W, Pt), (Gn || ye.receiveShadow !== z.receiveShadow) && (ye.receiveShadow = z.receiveShadow, Ze.setValue(N, "receiveShadow", z.receiveShadow)), (G.isMeshStandardMaterial || G.isMeshLambertMaterial || G.isMeshPhongMaterial) && G.envMap === null && L.environment !== null && (bt.envMapIntensity.value = L.environmentIntensity), bt.dfgLUT !== void 0 && (bt.dfgLUT.value = jm()), Gn) {
        if (Ze.setValue(N, "toneMappingExposure", w.toneMappingExposure), ye.needsLights && ih(bt, ai), se && G.fog === !0 && J.refreshFogUniforms(bt, se), J.refreshMaterialUniforms(bt, G, we, Ae, b.state.transmissionRenderTarget[x.id]), ye.needsLights && ye.numLightProbeGrids > 0) {
          const at = E;
          let Ut = 0;
          for (const Cn of b.state.lightProbeGridArray)
            Cn.texture !== null && (at.textures[Ut] = Cn.texture, at.min[Ut] = Cn.boundingBox.min, at.max[Ut] = Cn.boundingBox.max, at.resolution[Ut] = Cn.resolution, Ut++);
          for (const Cn in at) at[Cn].length = Ut;
          bt.probesSH.value = at.textures, bt.probesMin.value = at.min, bt.probesMax.value = at.max, bt.probesResolution.value = at.resolution;
        }
        Ss.upload(N, ja(ye), bt, Oe);
      }
      if (G.isShaderMaterial && G.uniformsNeedUpdate === !0 && (Ss.upload(N, ja(ye), bt, Oe), G.uniformsNeedUpdate = !1), G.isSpriteMaterial && Ze.setValue(N, "center", z.center), Ze.setValue(N, "modelViewMatrix", z.modelViewMatrix), Ze.setValue(N, "normalMatrix", z.normalMatrix), Ze.setValue(N, "modelMatrix", z.matrixWorld), G.uniformsGroups !== void 0) {
        const at = G.uniformsGroups;
        for (let Ut = 0, Cn = at.length; Ut < Cn; Ut++) {
          const no = at[Ut];
          ce.update(no, Pt), ce.bind(no, Pt);
        }
      }
      return Pt;
    }
    function ih(x, L) {
      x.ambientLightColor.needsUpdate = L, x.lightProbe.needsUpdate = L, x.sunLights.needsUpdate = L, x.sunLightShadows.needsUpdate = L, x.directionalLights.needsUpdate = L, x.directionalLightShadows.needsUpdate = L, x.pointLights.needsUpdate = L, x.pointLightShadows.needsUpdate = L, x.spotLights.needsUpdate = L, x.spotLightShadows.needsUpdate = L, x.rectAreaLights.needsUpdate = L, x.hemisphereLights.needsUpdate = L;
    }
    function rh(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return V;
    }, this.getActiveMipmapLevel = function() {
      return $;
    }, this.getRenderTarget = function() {
      return k;
    }, this.setRenderTargetTextures = function(x, L, W) {
      const G = Le.get(x);
      G.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, G.__autoAllocateDepthBuffer === !1 && (G.__useRenderToTexture = !1), Le.get(x.texture).__webglTexture = L, Le.get(x.depthTexture).__webglTexture = G.__autoAllocateDepthBuffer ? void 0 : W, G.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, L) {
      const W = Le.get(x);
      W.__webglFramebuffer = L, W.__useDefaultFramebuffer = L === void 0;
    }, this.setRenderTarget = function(x, L = 0, W = 0) {
      k = x, V = L, $ = W;
      let G = null, z = !1, se = !1;
      if (x) {
        const fe = Le.get(x);
        if (fe.__useDefaultFramebuffer !== void 0) {
          pe.bindFramebuffer(N.FRAMEBUFFER, fe.__webglFramebuffer), K.copy(x.viewport), ie.copy(x.scissor), Ee = x.scissorTest, pe.viewport(K), pe.scissor(ie), pe.setScissorTest(Ee), ae = -1;
          return;
        } else if (fe.__webglFramebuffer === void 0) Oe.setupRenderTarget(x);
        else if (fe.__hasExternalTextures) Oe.rebindTextures(x, Le.get(x.texture).__webglTexture, Le.get(x.depthTexture).__webglTexture);
        else if (x.depthBuffer) {
          const Re = x.depthTexture;
          if (fe.__boundDepthTexture !== Re) {
            if (Re !== null && Le.has(Re) && (x.width !== Re.image.width || x.height !== Re.image.height)) throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
            Oe.setupDepthRenderbuffer(x);
          }
        }
        const he = x.texture;
        (he.isData3DTexture || he.isDataArrayTexture || he.isCompressedArrayTexture) && (se = !0);
        const ve = Le.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(ve[L]) ? G = ve[L][W] : G = ve[L], z = !0) : x.samples > 0 && Oe.useMultisampledRTT(x) === !1 ? G = Le.get(x).__webglMultisampledFramebuffer : Array.isArray(ve) ? G = ve[W] : G = ve, K.copy(x.viewport), ie.copy(x.scissor), Ee = x.scissorTest;
      } else
        K.copy(Je).multiplyScalar(we).floor(), ie.copy(Pe).multiplyScalar(we).floor(), Ee = Tt;
      if (W !== 0 && (G = U), pe.bindFramebuffer(N.FRAMEBUFFER, G) && pe.drawBuffers(x, G), pe.viewport(K), pe.scissor(ie), pe.setScissorTest(Ee), z) {
        const fe = Le.get(x.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + L, fe.__webglTexture, W);
      } else if (se) {
        const fe = L;
        for (let he = 0; he < x.textures.length; he++) {
          const ve = Le.get(x.textures[he]);
          N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0 + he, ve.__webglTexture, W, fe);
        }
      } else if (x !== null && W !== 0) {
        const fe = Le.get(x.texture);
        N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_2D, fe.__webglTexture, W);
      }
      ae = -1;
    };
    function to(x) {
      const L = Le.get(x);
      return (L.__readFormat !== x.format || L.__readType !== x.type) && (L.__readFormat = x.format, L.__readType = x.type, L.__formatReadable = yt.textureFormatReadable(x.format), L.__typeReadable = yt.textureTypeReadable(x.type)), L;
    }
    this.readRenderTargetPixels = function(x, L, W, G, z, se, fe, he = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ve = Le.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && fe !== void 0 && (ve = ve[fe], Array.isArray(ve) && (ve = ve[0])), ve) {
        pe.bindFramebuffer(N.FRAMEBUFFER, ve);
        try {
          const Re = x.textures[he], We = Re.format, $e = Re.type;
          x.textures.length > 1 && N.readBuffer(N.COLOR_ATTACHMENT0 + he);
          const Se = to(Re);
          if (Se.__formatReadable === !1) {
            De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (Se.__typeReadable === !1) {
            De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= x.width - G && W >= 0 && W <= x.height - z && N.readPixels(L, W, G, z, re.convert(We), re.convert($e), se);
        } finally {
          const Re = k !== null ? Le.get(k).__webglFramebuffer : null;
          pe.bindFramebuffer(N.FRAMEBUFFER, Re);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, L, W, G, z, se, fe, he = 0) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ve = Le.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && fe !== void 0 && (ve = ve[fe], Array.isArray(ve) && (ve = ve[0])), ve)
        if (L >= 0 && L <= x.width - G && W >= 0 && W <= x.height - z) {
          pe.bindFramebuffer(N.FRAMEBUFFER, ve);
          const Re = x.textures[he], We = Re.format, $e = Re.type;
          x.textures.length > 1 && N.readBuffer(N.COLOR_ATTACHMENT0 + he);
          const Se = to(Re);
          if (Se.__formatReadable === !1) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (Se.__typeReadable === !1) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const je = N.createBuffer();
          N.bindBuffer(N.PIXEL_PACK_BUFFER, je), N.bufferData(N.PIXEL_PACK_BUFFER, se.byteLength, N.STREAM_READ), N.readPixels(L, W, G, z, re.convert(We), re.convert($e), 0), N.bindBuffer(N.PIXEL_PACK_BUFFER, null);
          const pt = k !== null ? Le.get(k).__webglFramebuffer : null;
          pe.bindFramebuffer(N.FRAMEBUFFER, pt);
          const rt = N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return N.flush(), await Ku(N, rt, 4), N.bindBuffer(N.PIXEL_PACK_BUFFER, je), N.getBufferSubData(N.PIXEL_PACK_BUFFER, 0, se), N.bindBuffer(N.PIXEL_PACK_BUFFER, null), N.deleteBuffer(je), N.deleteSync(rt), se;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, L = null, W = 0) {
      const G = Math.pow(2, -W), z = Math.floor(x.image.width * G), se = Math.floor(x.image.height * G), fe = L !== null ? L.x : 0, he = L !== null ? L.y : 0;
      Oe.setTexture2D(x, 0), N.copyTexSubImage2D(N.TEXTURE_2D, W, 0, 0, fe, he, z, se), pe.unbindTexture();
    }, this.copyTextureToTexture = function(x, L, W = null, G = null, z = 0, se = 0) {
      let fe, he, ve, Re, We, $e, Se, je, pt;
      const rt = x.isCompressedTexture ? x.mipmaps[se] : x.image;
      if (W !== null)
        fe = W.max.x - W.min.x, he = W.max.y - W.min.y, ve = W.isBox3 ? W.max.z - W.min.z : 1, Re = W.min.x, We = W.min.y, $e = W.isBox3 ? W.min.z : 0;
      else {
        const Ze = Math.pow(2, -z);
        fe = Math.floor(rt.width * Ze), he = Math.floor(rt.height * Ze), x.isDataArrayTexture ? ve = rt.depth : x.isData3DTexture ? ve = Math.floor(rt.depth * Ze) : ve = 1, Re = 0, We = 0, $e = 0;
      }
      G !== null ? (Se = G.x, je = G.y, pt = G.z) : (Se = 0, je = 0, pt = 0);
      const Qe = re.convert(L.format), Ct = re.convert(L.type);
      let ye;
      L.isData3DTexture ? (Oe.setTexture3D(L, 0), ye = N.TEXTURE_3D) : L.isDataArrayTexture || L.isCompressedArrayTexture ? (Oe.setTexture2DArray(L, 0), ye = N.TEXTURE_2D_ARRAY) : (Oe.setTexture2D(L, 0), ye = N.TEXTURE_2D), pe.activeTexture(N.TEXTURE0), pe.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, L.flipY), pe.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), pe.pixelStorei(N.UNPACK_ALIGNMENT, L.unpackAlignment);
      const Kt = pe.getParameter(N.UNPACK_ROW_LENGTH), et = pe.getParameter(N.UNPACK_IMAGE_HEIGHT), si = pe.getParameter(N.UNPACK_SKIP_PIXELS), Pt = pe.getParameter(N.UNPACK_SKIP_ROWS), Br = pe.getParameter(N.UNPACK_SKIP_IMAGES);
      pe.pixelStorei(N.UNPACK_ROW_LENGTH, rt.width), pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT, rt.height), pe.pixelStorei(N.UNPACK_SKIP_PIXELS, Re), pe.pixelStorei(N.UNPACK_SKIP_ROWS, We), pe.pixelStorei(N.UNPACK_SKIP_IMAGES, $e);
      const Gn = x.isDataArrayTexture || x.isData3DTexture, ai = L.isDataArrayTexture || L.isData3DTexture;
      if (x.isDepthTexture) {
        const Ze = Le.get(x), bt = Le.get(L), cn = Le.get(Ze.__renderTarget), at = Le.get(bt.__renderTarget);
        pe.bindFramebuffer(N.READ_FRAMEBUFFER, cn.__webglFramebuffer), pe.bindFramebuffer(N.DRAW_FRAMEBUFFER, at.__webglFramebuffer);
        for (let Ut = 0; Ut < ve; Ut++)
          Gn && (N.framebufferTextureLayer(N.READ_FRAMEBUFFER, N.COLOR_ATTACHMENT0, Le.get(x).__webglTexture, z, $e + Ut), N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER, N.COLOR_ATTACHMENT0, Le.get(L).__webglTexture, se, pt + Ut)), N.blitFramebuffer(Re, We, Re + fe, We + he, Se, je, Se + fe, je + he, N.DEPTH_BUFFER_BIT, N.NEAREST);
        pe.bindFramebuffer(N.READ_FRAMEBUFFER, null), pe.bindFramebuffer(N.DRAW_FRAMEBUFFER, null);
      } else if (z !== 0 || x.isRenderTargetTexture || Le.has(x)) {
        const Ze = Le.get(x), bt = Le.get(L);
        pe.bindFramebuffer(N.READ_FRAMEBUFFER, q), pe.bindFramebuffer(N.DRAW_FRAMEBUFFER, I);
        for (let cn = 0; cn < ve; cn++)
          Gn ? N.framebufferTextureLayer(N.READ_FRAMEBUFFER, N.COLOR_ATTACHMENT0, Ze.__webglTexture, z, $e + cn) : N.framebufferTexture2D(N.READ_FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_2D, Ze.__webglTexture, z), ai ? N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER, N.COLOR_ATTACHMENT0, bt.__webglTexture, se, pt + cn) : N.framebufferTexture2D(N.DRAW_FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_2D, bt.__webglTexture, se), z !== 0 ? N.blitFramebuffer(Re, We, Re + fe, We + he, Se, je, Se + fe, je + he, N.COLOR_BUFFER_BIT, N.NEAREST) : ai ? N.copyTexSubImage3D(ye, se, Se, je, pt + cn, Re, We, fe, he) : N.copyTexSubImage2D(ye, se, Se, je, Re, We, fe, he);
        pe.bindFramebuffer(N.READ_FRAMEBUFFER, null), pe.bindFramebuffer(N.DRAW_FRAMEBUFFER, null);
      } else ai ? x.isDataTexture || x.isData3DTexture ? N.texSubImage3D(ye, se, Se, je, pt, fe, he, ve, Qe, Ct, rt.data) : L.isCompressedArrayTexture ? N.compressedTexSubImage3D(ye, se, Se, je, pt, fe, he, ve, Qe, rt.data) : N.texSubImage3D(ye, se, Se, je, pt, fe, he, ve, Qe, Ct, rt) : x.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, se, Se, je, fe, he, Qe, Ct, rt.data) : x.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, se, Se, je, rt.width, rt.height, Qe, rt.data) : N.texSubImage2D(N.TEXTURE_2D, se, Se, je, fe, he, Qe, Ct, rt);
      pe.pixelStorei(N.UNPACK_ROW_LENGTH, Kt), pe.pixelStorei(N.UNPACK_IMAGE_HEIGHT, et), pe.pixelStorei(N.UNPACK_SKIP_PIXELS, si), pe.pixelStorei(N.UNPACK_SKIP_ROWS, Pt), pe.pixelStorei(N.UNPACK_SKIP_IMAGES, Br), se === 0 && L.generateMipmaps === !0 && L.mipmapsAutoUpdate === !0 && N.generateMipmap(ye), pe.unbindTexture();
    }, this.initRenderTarget = function(x) {
      Le.get(x).__webglFramebuffer === void 0 && Oe.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? Oe.setTextureCube(x, 0) : x.isData3DTexture ? Oe.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? Oe.setTexture2DArray(x, 0) : Oe.setTexture2D(x, 0), pe.unbindTexture();
    }, this.resetState = function() {
      V = 0, $ = 0, k = null, pe.reset(), de.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return gi;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = qe._getDrawingBufferColorSpace(e), t.unpackColorSpace = qe._getUnpackColorSpace();
  }
};
function Tl(e, t) {
  if (t === 0)
    return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
  if (t === 2 || t === 1) {
    let n = e.getIndex();
    if (n === null) {
      const s = [], a = e.getAttribute("position");
      if (a !== void 0) {
        for (let o = 0; o < a.count; o++) s.push(o);
        e.setIndex(s), n = e.getIndex();
      } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
    }
    const i = n.count - 2, r = [];
    if (t === 2) for (let s = 1; s <= i; s++)
      r.push(n.getX(0)), r.push(n.getX(s)), r.push(n.getX(s + 1));
    else for (let s = 0; s < i; s++) s % 2 === 0 ? (r.push(n.getX(s)), r.push(n.getX(s + 1)), r.push(n.getX(s + 2))) : (r.push(n.getX(s + 2)), r.push(n.getX(s + 1)), r.push(n.getX(s)));
    return r.length / 3 !== i && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."), e.setIndex(r), e.clearGroups(), e;
  } else
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e;
}
function tg(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = e.clone();
  return Zc(e, i, function(r, s) {
    t.set(s, r), n.set(r, s);
  }), i.traverse(function(r) {
    if (!r.isSkinnedMesh) return;
    const s = r, a = t.get(r), o = a.skeleton.bones;
    s.skeleton = a.skeleton.clone(), s.bindMatrix.copy(a.bindMatrix), s.skeleton.bones = o.map(function(l) {
      return n.get(l);
    }), s.bind(s.skeleton, s.bindMatrix);
  }), i;
}
function Zc(e, t, n) {
  n(e, t);
  for (let i = 0; i < e.children.length; i++) Zc(e.children[i], t.children[i], n);
}
var ng = class extends Qi {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new og(t);
    }), this.register(function(t) {
      return new lg(t);
    }), this.register(function(t) {
      return new cg(t);
    }), this.register(function(t) {
      return new _g(t);
    }), this.register(function(t) {
      return new Mg(t);
    }), this.register(function(t) {
      return new Sg(t);
    }), this.register(function(t) {
      return new ug(t);
    }), this.register(function(t) {
      return new dg(t);
    }), this.register(function(t) {
      return new fg(t);
    }), this.register(function(t) {
      return new pg(t);
    }), this.register(function(t) {
      return new ag(t);
    }), this.register(function(t) {
      return new mg(t);
    }), this.register(function(t) {
      return new hg(t);
    }), this.register(function(t) {
      return new vg(t);
    }), this.register(function(t) {
      return new gg(t);
    }), this.register(function(t) {
      return new rg(t);
    }), this.register(function(t) {
      return new El(t, He.EXT_MESHOPT_COMPRESSION);
    }), this.register(function(t) {
      return new El(t, He.KHR_MESHOPT_COMPRESSION);
    }), this.register(function(t) {
      return new yg(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let s;
    if (this.resourcePath !== "") s = this.resourcePath;
    else if (this.path !== "") {
      const l = xr.extractUrlBase(e);
      s = xr.resolveURL(l, this.path);
    } else s = xr.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(l) {
      i ? i(l) : console.error(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }, o = new Uc(this.manager);
    o.setPriority(this.priority), o.setCache(this.cache), o.setPath(this.path), o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(l) {
      try {
        r.parse(l, s, function(c) {
          t(c), r.manager.itemEnd(e);
        }, a);
      } catch (c) {
        a(c);
      }
    }, n, a);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let r;
    const s = {}, a = {}, o = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (o.decode(new Uint8Array(e, 0, 4)) === Jc) {
        try {
          s[He.KHR_BINARY_GLTF] = new xg(e);
        } catch (c) {
          i && i(c);
          return;
        }
        r = JSON.parse(s[He.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(o.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(/* @__PURE__ */ new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const l = new Ug(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      priority: this.priority,
      cache: this.cache,
      withCredentials: this.withCredentials,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let c = 0; c < this.pluginCallbacks.length; c++) {
      const h = this.pluginCallbacks[c](l);
      h.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[h.name] = h, s[h.name] = !0;
    }
    if (r.extensionsUsed) for (let c = 0; c < r.extensionsUsed.length; ++c) {
      const h = r.extensionsUsed[c], u = r.extensionsRequired || [];
      switch (h) {
        case He.KHR_MATERIALS_UNLIT:
          s[h] = new sg();
          break;
        case He.KHR_DRACO_MESH_COMPRESSION:
          s[h] = new Tg(r, this.dracoLoader);
          break;
        case He.KHR_TEXTURE_TRANSFORM:
          s[h] = new Eg();
          break;
        case He.KHR_MESH_QUANTIZATION:
          s[h] = new bg();
          break;
        default:
          u.indexOf(h) >= 0 && a[h] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
      }
    }
    l.setExtensions(s), l.setPlugins(a), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
};
function ig() {
  let e = {};
  return {
    get: function(t) {
      return e[t];
    },
    add: function(t, n) {
      e[t] = n;
    },
    remove: function(t) {
      delete e[t];
    },
    removeAll: function() {
      e = {};
    }
  };
}
function dt(e, t, n) {
  const i = e.json.materials[t];
  return i.extensions && i.extensions[n] ? i.extensions[n] : null;
}
var He = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DIFFUSE_ROUGHNESS: "KHR_materials_diffuse_roughness",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  KHR_MESHOPT_COMPRESSION: "KHR_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
}, rg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_LIGHTS_PUNCTUAL, this.cache = {
      refs: {},
      uses: {}
    };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, s = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let a;
    const o = new Ce(16777215);
    s.color !== void 0 && o.setRGB(s.color[0], s.color[1], s.color[2], pn);
    const l = s.range !== void 0 ? s.range : 0;
    switch (s.type) {
      case "directional":
        a = new gr(o), a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      case "point":
        a = new Fc(o), a.distance = l;
        break;
      case "spot":
        a = new Ef(o), a.distance = l, s.spot = s.spot || {}, s.spot.innerConeAngle = s.spot.innerConeAngle !== void 0 ? s.spot.innerConeAngle : 0, s.spot.outerConeAngle = s.spot.outerConeAngle !== void 0 ? s.spot.outerConeAngle : Math.PI / 4, a.angle = s.spot.outerConeAngle, a.penumbra = 1 - s.spot.innerConeAngle / s.spot.outerConeAngle, a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + s.type);
    }
    return a.position.set(0, 0, 0), Sn(a, s), s.intensity !== void 0 && (a.intensity = s.intensity), a.name = t.createUniqueName(s.name || "light_" + e), i = Promise.resolve(a), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light")
      return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, i = n.json.nodes[e], r = (i.extensions && i.extensions[this.name] || {}).light;
    return r === void 0 ? null : this._loadLight(r).then(function(s) {
      return n._getNodeRef(t.cache, r, s);
    });
  }
}, sg = class {
  constructor() {
    this.name = He.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Oi;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Ce(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const s = r.baseColorFactor;
        e.color.setRGB(s[0], s[1], s[2], pn), e.opacity = s[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, At));
    }
    return Promise.all(i);
  }
}, ag = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    return n === null || n.emissiveStrength !== void 0 && (t.emissiveIntensity = n.emissiveStrength), Promise.resolve();
  }
}, og = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    if (n.clearcoatFactor !== void 0 && (t.clearcoat = n.clearcoatFactor), n.clearcoatTexture !== void 0 && i.push(this.parser.assignTexture(t, "clearcoatMap", n.clearcoatTexture)), n.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = n.clearcoatRoughnessFactor), n.clearcoatRoughnessTexture !== void 0 && i.push(this.parser.assignTexture(t, "clearcoatRoughnessMap", n.clearcoatRoughnessTexture)), n.clearcoatNormalTexture !== void 0 && (i.push(this.parser.assignTexture(t, "clearcoatNormalMap", n.clearcoatNormalTexture)), n.clearcoatNormalTexture.scale !== void 0)) {
      const r = n.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new ke(r, r);
    }
    return Promise.all(i);
  }
}, lg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_DIFFUSE_ROUGHNESS;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return t.diffuseRoughness = n.diffuseRoughnessFactor !== void 0 ? n.diffuseRoughnessFactor : 0, n.diffuseRoughnessTexture !== void 0 && i.push(this.parser.assignTexture(t, "diffuseRoughnessMap", n.diffuseRoughnessTexture)), Promise.all(i);
  }
}, cg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    return n === null || (t.dispersion = n.dispersion !== void 0 ? n.dispersion : 0), Promise.resolve();
  }
}, hg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor), n.iridescenceTexture !== void 0 && i.push(this.parser.assignTexture(t, "iridescenceMap", n.iridescenceTexture)), n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor), n.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessMinimum = n.iridescenceThicknessMinimum), n.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessMaximum = n.iridescenceThicknessMaximum), n.iridescenceThicknessTexture !== void 0 && i.push(this.parser.assignTexture(t, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(i);
  }
}, ug = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    if (t.sheenColor = new Ce(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1, n.sheenColorFactor !== void 0) {
      const r = n.sheenColorFactor;
      t.sheenColor.setRGB(r[0], r[1], r[2], pn);
    }
    return n.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = n.sheenRoughnessFactor), n.sheenColorTexture !== void 0 && i.push(this.parser.assignTexture(t, "sheenColorMap", n.sheenColorTexture, At)), n.sheenRoughnessTexture !== void 0 && i.push(this.parser.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(i);
  }
}, dg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return n.transmissionFactor !== void 0 && (t.transmission = n.transmissionFactor), n.transmissionTexture !== void 0 && i.push(this.parser.assignTexture(t, "transmissionMap", n.transmissionTexture)), Promise.all(i);
  }
}, fg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    t.thickness = n.thicknessFactor !== void 0 ? n.thicknessFactor : 0, n.thicknessTexture !== void 0 && i.push(this.parser.assignTexture(t, "thicknessMap", n.thicknessTexture)), t.attenuationDistance = n.attenuationDistance || 1 / 0;
    const r = n.attenuationColor || [
      1,
      1,
      1
    ];
    return t.attenuationColor = new Ce().setRGB(r[0], r[1], r[2], pn), Promise.all(i);
  }
}, pg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    return n === null || (t.ior = n.ior !== void 0 ? n.ior : 1.5, t.ior === 0 && (t.ior = 1e3)), Promise.resolve();
  }
}, mg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    t.specularIntensity = n.specularFactor !== void 0 ? n.specularFactor : 1, n.specularTexture !== void 0 && i.push(this.parser.assignTexture(t, "specularIntensityMap", n.specularTexture));
    const r = n.specularColorFactor || [
      1,
      1,
      1
    ];
    return t.specularColor = new Ce().setRGB(r[0], r[1], r[2], pn), n.specularColorTexture !== void 0 && i.push(this.parser.assignTexture(t, "specularColorMap", n.specularColorTexture, At)), Promise.all(i);
  }
}, gg = class {
  constructor(e) {
    this.parser = e, this.name = He.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return t.bumpScale = n.bumpFactor !== void 0 ? n.bumpFactor : 1, n.bumpTexture !== void 0 && i.push(this.parser.assignTexture(t, "bumpMap", n.bumpTexture)), Promise.all(i);
  }
}, vg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? mn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return n.anisotropyStrength !== void 0 && (t.anisotropy = n.anisotropyStrength), n.anisotropyRotation !== void 0 && (t.anisotropyRotation = n.anisotropyRotation), n.anisotropyTexture !== void 0 && i.push(this.parser.assignTexture(t, "anisotropyMap", n.anisotropyTexture)), Promise.all(i);
  }
}, _g = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name], s = t.options.ktx2Loader;
    if (!s) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, s);
  }
}, Mg = class {
  constructor(e) {
    this.parser = e, this.name = He.EXT_TEXTURE_WEBP;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const s = r.extensions[t], a = i.images[s.source];
    let o = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return n.loadTextureImage(e, s.source, o);
  }
}, Sg = class {
  constructor(e) {
    this.parser = e, this.name = He.EXT_TEXTURE_AVIF;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const s = r.extensions[t], a = i.images[s.source];
    let o = n.textureLoader;
    if (a.uri) {
      const l = n.options.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return n.loadTextureImage(e, s.source, o);
  }
}, El = class {
  constructor(e, t) {
    this.name = t, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), s = this.parser.options.meshoptDecoder;
      if (!s || !s.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(a) {
        const o = i.byteOffset || 0, l = i.byteLength || 0, c = i.count, h = i.byteStride, u = new Uint8Array(a, o, l);
        return s.decodeGltfBufferAsync ? s.decodeGltfBufferAsync(c, h, u, i.mode, i.filter).then(function(d) {
          return d.buffer;
        }) : s.ready.then(function() {
          const d = new ArrayBuffer(c * h);
          return s.decodeGltfBuffer(new Uint8Array(d), c, h, u, i.mode, i.filter), d;
        });
      });
    } else return null;
  }
}, yg = class {
  constructor(e) {
    this.name = He.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const i = t.meshes[n.mesh];
    for (const o of i.primitives) if (o.mode !== nn.TRIANGLES && o.mode !== nn.TRIANGLE_STRIP && o.mode !== nn.TRIANGLE_FAN && o.mode !== void 0) return null;
    const r = n.extensions[this.name].attributes, s = [], a = {};
    for (const o in r) s.push(this.parser.getDependency("accessor", r[o]).then((l) => (a[o] = l, a[o])));
    return s.length < 1 ? null : (s.push(this.parser.createNodeMesh(e)), Promise.all(s).then((o) => {
      const l = o.pop(), c = l.isGroup ? l.children : [l], h = o[0].count, u = [];
      for (const d of c) {
        const f = new Ge(), g = new B(), _ = new Hn(), m = new B(1, 1, 1), p = new zd(d.geometry, d.material, h);
        for (let E = 0; E < h; E++)
          a.TRANSLATION && g.fromBufferAttribute(a.TRANSLATION, E), a.ROTATION && _.fromBufferAttribute(a.ROTATION, E), a.SCALE && m.fromBufferAttribute(a.SCALE, E), p.setMatrixAt(E, f.compose(g, _, m));
        let M = null;
        for (const E in a) if (E === "_COLOR_0") {
          const S = a[E];
          p.instanceColor = new Ps(S.array, S.itemSize, S.normalized);
        } else if (E !== "TRANSLATION" && E !== "ROTATION" && E !== "SCALE") {
          if (M === null) {
            const b = p.geometry;
            M = new Bt(), M.name = b.name;
            for (const A in b.attributes) M.setAttribute(A, b.attributes[A]);
            for (const A in b.morphAttributes) M.morphAttributes[A] = b.morphAttributes[A];
            b.index !== null && M.setIndex(b.index), M.morphTargetsRelative = b.morphTargetsRelative;
            for (const A of b.groups) M.addGroup(A.start, A.count, A.materialIndex);
            b.boundingBox !== null && (M.boundingBox = b.boundingBox.clone()), b.boundingSphere !== null && (M.boundingSphere = b.boundingSphere.clone()), M.drawRange.start = b.drawRange.start, M.drawRange.count = b.drawRange.count, M.userData = Object.assign({}, b.userData), p.geometry = M;
          }
          const S = a[E];
          M.setAttribute(E, new Ps(S.array, S.itemSize, S.normalized));
        }
        _t.prototype.copy.call(p, d), this.parser.assignFinalMaterial(p), u.push(p);
      }
      return l.isGroup ? (l.clear(), l.add(...u), l) : u[0];
    }));
  }
}, Jc = "glTF", ur = 12, bl = {
  JSON: 1313821514,
  BIN: 5130562
}, xg = class {
  constructor(e) {
    this.name = He.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, ur), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== Jc) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - ur, r = new DataView(e, ur);
    let s = 0;
    for (; s < i; ) {
      const a = r.getUint32(s, !0);
      s += 4;
      const o = r.getUint32(s, !0);
      if (s += 4, o === bl.JSON) {
        const l = new Uint8Array(e, ur + s, a);
        this.content = n.decode(l);
      } else if (o === bl.BIN) {
        const l = ur + s;
        this.body = e.slice(l, l + a);
      }
      s += a;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}, Tg = class {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = He.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, s = e.extensions[this.name].attributes, a = {}, o = {}, l = {};
    for (const c in s) {
      const h = wa[c] || c.toLowerCase();
      a[h] = s[c];
    }
    for (const c in e.attributes) {
      const h = wa[c] || c.toLowerCase();
      if (s[c] !== void 0) {
        const u = n.accessors[e.attributes[c]];
        l[h] = zi[u.componentType].name, o[h] = u.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(c) {
      return new Promise(function(h, u) {
        i.decodeDracoFile(c, function(d) {
          for (const f in d.attributes) {
            const g = d.attributes[f], _ = o[f];
            _ !== void 0 && (g.normalized = _);
          }
          h(d);
        }, a, l, pn, u);
      });
    });
  }
}, Eg = class {
  constructor() {
    this.name = He.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    if ((t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0) return e;
    if (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), t.rotation !== void 0) {
      const n = Math.cos(e.rotation), i = Math.sin(e.rotation);
      e.matrix.set(e.repeat.x * n, e.repeat.y * i, e.offset.x, -e.repeat.x * i, e.repeat.y * n, e.offset.y, 0, 0, 1), e.matrixAutoUpdate = !1;
    }
    return e.needsUpdate = !0, e;
  }
}, bg = class {
  constructor() {
    this.name = He.KHR_MESH_QUANTIZATION;
  }
}, Qc = class extends $i {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let s = 0; s !== i; s++) t[s] = n[r + s];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = a * 2, l = a * 3, c = i - t, h = (n - t) / c, u = h * h, d = u * h, f = e * l, g = f - l, _ = -2 * d + 3 * u, m = d - u, p = 1 - _, M = m - u + h;
    for (let E = 0; E !== a; E++) {
      const S = s[g + E + a], b = s[g + E + o] * c, A = s[f + E + a], v = s[f + E] * c;
      r[E] = p * S + M * b + _ * A + m * v;
    }
    return r;
  }
}, Ag = new Hn(), Rg = class extends Qc {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return Ag.fromArray(r).normalize().toArray(r), r;
  }
}, nn = {
  FLOAT: 5126,
  FLOAT_MAT3: 35675,
  FLOAT_MAT4: 35676,
  FLOAT_VEC2: 35664,
  FLOAT_VEC3: 35665,
  FLOAT_VEC4: 35666,
  LINEAR: 9729,
  REPEAT: 10497,
  SAMPLER_2D: 35678,
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  UNSIGNED_BYTE: 5121,
  UNSIGNED_SHORT: 5123
}, zi = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Al = {
  9728: Dt,
  9729: rn,
  9984: Xl,
  9985: Yl,
  9986: ql,
  9987: Ir
}, Rl = {
  33071: xn,
  33648: Es,
  10497: Ts
}, va = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, wa = {
  POSITION: "position",
  NORMAL: "normal",
  TANGENT: "tangent",
  TEXCOORD_0: "uv",
  TEXCOORD_1: "uv1",
  TEXCOORD_2: "uv2",
  TEXCOORD_3: "uv3",
  COLOR_0: "color",
  WEIGHTS_0: "skinWeight",
  JOINTS_0: "skinIndex"
}, Kn = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, wg = {
  CUBICSPLINE: void 0,
  LINEAR: Ar,
  STEP: br
}, _a = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Cg(e) {
  return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new Nr({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: 0
  })), e.DefaultMaterial;
}
function ui(e, t, n) {
  for (const i in n.extensions) e[i] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[i] = n.extensions[i]);
}
function Sn(e, t) {
  t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function Pg(e, t, n) {
  let i = !1, r = !1, s = !1;
  for (let c = 0, h = t.length; c < h; c++) {
    const u = t[c];
    if (u.POSITION !== void 0 && (i = !0), u.NORMAL !== void 0 && (r = !0), u.COLOR_0 !== void 0 && (s = !0), i && r && s) break;
  }
  if (!i && !r && !s) return Promise.resolve(e);
  const a = [], o = [], l = [];
  for (let c = 0, h = t.length; c < h; c++) {
    const u = t[c];
    if (i) {
      const d = u.POSITION !== void 0 ? n.getDependency("accessor", u.POSITION) : e.attributes.position;
      a.push(d);
    }
    if (r) {
      const d = u.NORMAL !== void 0 ? n.getDependency("accessor", u.NORMAL) : e.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = u.COLOR_0 !== void 0 ? n.getDependency("accessor", u.COLOR_0) : e.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return i && (e.morphAttributes.position = h), r && (e.morphAttributes.normal = u), s && (e.morphAttributes.color = d), e.morphTargetsRelative = !0, e;
  });
}
function Lg(e, t) {
  if (e.updateMorphTargets(), t.weights !== void 0) for (let n = 0, i = t.weights.length; n < i; n++) e.morphTargetInfluences[n] = t.weights[n];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const n = t.extras.targetNames;
    if (e.morphTargetInfluences.length === n.length) {
      e.morphTargetDictionary = {};
      for (let i = 0, r = n.length; i < r; i++) e.morphTargetDictionary[n[i]] = i;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Ig(e) {
  let t;
  const n = e.extensions && e.extensions[He.KHR_DRACO_MESH_COMPRESSION];
  if (n ? t = "draco:" + n.bufferView + ":" + n.indices + ":" + Ma(n.attributes) : t = e.indices + ":" + Ma(e.attributes) + ":" + e.mode, e.targets !== void 0) for (let i = 0, r = e.targets.length; i < r; i++) t += ":" + Ma(e.targets[i]);
  return t;
}
function Ma(e) {
  let t = "";
  const n = Object.keys(e).sort();
  for (let i = 0, r = n.length; i < r; i++) t += n[i] + ":" + e[n[i]] + ";";
  return t;
}
function Ca(e) {
  switch (e) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function Dg(e) {
  return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0 ? "image/webp" : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
var Ng = new Ge(), Ug = class {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new ig(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
      refs: {},
      uses: {}
    }, this.cameraCache = {
      refs: {},
      uses: {}
    }, this.lightCache = {
      refs: {},
      uses: {}
    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = !1, i = -1, r = !1, s = -1;
    if (typeof navigator < "u" && typeof navigator.userAgent < "u") {
      const a = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(a) === !0;
      const o = a.match(/Version\/(\d+)/);
      i = n && o ? parseInt(o[1], 10) : -1, r = a.indexOf("Firefox") > -1, s = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && s < 98 ? (this.textureLoader = new xf(this.options.manager), this.textureLoader.setPriority(this.options.priority), this.textureLoader.setCache(this.options.cache)) : (this.textureLoader = new wf(this.options.manager), this.textureLoader.setPriority(this.options.priority), this.textureLoader.setCache(this.options.cache)), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setWithCredentials(this.options.withCredentials), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Uc(this.options.manager), this.fileLoader.setPriority(this.options.priority), this.fileLoader.setCache(this.options.cache), this.fileLoader.setResponseType("arraybuffer"), (this.options.withCredentials || this.options.crossOrigin === "use-credentials") && this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(s) {
      return s._markDefs && s._markDefs();
    }), Promise.all(this._invokeAll(function(s) {
      return s.beforeRoot && s.beforeRoot();
    })).then(function() {
      return Promise.all([
        n.getDependencies("scene"),
        n.getDependencies("animation"),
        n.getDependencies("camera")
      ]);
    }).then(function(s) {
      const a = {
        scene: s[0][i.scene || 0],
        scenes: s[0],
        animations: s[1],
        cameras: s[2],
        asset: i.asset,
        parser: n,
        userData: {}
      };
      return ui(r, a, i), Sn(a, i), Promise.all(n._invokeAll(function(o) {
        return o.afterRoot && o.afterRoot(a);
      })).then(function() {
        for (const o of a.scenes) o.updateMatrixWorld();
        e(a);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i].joints;
      for (let a = 0, o = s.length; a < o; a++) e[s[a]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      s.mesh !== void 0 && (this._addNodeRef(this.meshCache, s.mesh), s.skin !== void 0 && (n[s.mesh].isSkinnedMesh = !0)), s.camera !== void 0 && this._addNodeRef(this.cameraCache, s.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (s, a) => {
      const o = this.associations.get(s);
      o != null && this.associations.set(a, o);
      for (const [l, c] of s.children.entries()) r(c, a.children[l]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
          }), !i) throw new Error("Unknown type: " + e);
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(r, s) {
        return n.getDependency(e, s);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, s) {
      n.load(xr.resolveURL(t.uri, i.path), r, void 0, function() {
        s(/* @__PURE__ */ new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const s = va[i.type], a = zi[i.componentType], o = i.normalized === !0, l = new a(i.count * s);
      return Promise.resolve(new sn(l, s, o));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(s) {
      const a = s[0], o = va[i.type], l = zi[i.componentType], c = l.BYTES_PER_ELEMENT, h = c * o, u = i.byteOffset || 0, d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, f = i.normalized === !0;
      let g, _;
      if (d && d !== h) {
        const m = Math.floor(u / d), p = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + m + ":" + i.count;
        let M = t.cache.get(p);
        M || (g = new l(a, m * d, i.count * d / c), M = new Cd(g, d / c), t.cache.add(p, M)), _ = new Pd(M, o, u % d / c, f);
      } else
        a === null ? g = new l(i.count * o) : g = new l(a, u, i.count * o), _ = new sn(g, o, f);
      if (i.sparse !== void 0) {
        const m = va.SCALAR, p = zi[i.sparse.indices.componentType], M = i.sparse.indices.byteOffset || 0, E = i.sparse.values.byteOffset || 0, S = new p(s[1], M, i.sparse.count * m), b = new l(s[2], E, i.sparse.count * o);
        a !== null && (_ = new sn(_.array.slice(), _.itemSize, _.normalized)), _.normalized = !1;
        for (let A = 0, v = S.length; A < v; A++) {
          const T = S[A];
          if (_.setX(T, b[A * o]), o >= 2 && _.setY(T, b[A * o + 1]), o >= 3 && _.setZ(T, b[A * o + 2]), o >= 4 && _.setW(T, b[A * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        _.normalized = f;
      }
      return _;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, i = t.textures[e].source, r = t.images[i];
    let s = this.textureLoader;
    if (r.uri) {
      const a = n.manager.getHandler(r.uri);
      a !== null && (s = a);
    }
    return this.loadTextureImage(e, i, s);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, s = r.textures[e], a = r.images[t], o = (a.uri || a.bufferView) + ":" + s.sampler;
    if (this.textureCache[o]) return this.textureCache[o];
    const l = this.loadImageSource(t, n).then(function(c) {
      c.flipY = !1, c.name = s.name || a.name || "", c.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (c.name = a.uri);
      const h = (r.samplers || {})[s.sampler] || {};
      return c.magFilter = Al[h.magFilter] || 1006, c.minFilter = Al[h.minFilter] || 1008, c.wrapS = Rl[h.wrapS] || 1e3, c.wrapT = Rl[h.wrapT] || 1e3, c.generateMipmaps = !c.isCompressedTexture && c.minFilter !== 1003 && c.minFilter !== 1006, i.associations.set(c, { textures: e }), c;
    }).catch(function() {
      return null;
    });
    return this.textureCache[o] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((u) => u.clone());
    const s = i.images[e], a = self.URL || self.webkitURL;
    let o = s.uri || "", l = !1, c;
    if (t.isKTX2Loader === !0 && s.bufferView !== void 0) c = n.getDependency("bufferView", s.bufferView).then(function(u) {
      return new Promise(function(d, f) {
        t.parse(u, d, f);
      });
    });
    else {
      if (s.bufferView !== void 0) o = n.getDependency("bufferView", s.bufferView).then(function(u) {
        l = !0;
        const d = new Blob([u], { type: s.mimeType });
        return o = a.createObjectURL(d), o;
      });
      else if (s.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
      c = Promise.resolve(o).then(function(u) {
        return new Promise(function(d, f) {
          let g = d;
          t.isImageBitmapLoader === !0 && (g = function(_) {
            const m = new Wt(_);
            m.needsUpdate = !0, d(m);
          }), t.load(xr.resolveURL(u, r.path), g, void 0, f);
        });
      });
    }
    const h = c.then(function(u) {
      return l === !0 && a.revokeObjectURL(o), Sn(u, s), u.userData.mimeType = s.mimeType || Dg(s.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", o), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(s) {
      if (!s) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (s = s.clone(), s.channel = n.texCoord), r.extensions[He.KHR_TEXTURE_TRANSFORM]) {
        const a = n.extensions !== void 0 ? n.extensions[He.KHR_TEXTURE_TRANSFORM] : void 0;
        if (a) {
          const o = r.associations.get(s);
          s = r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(s, a), r.associations.set(s, o);
        }
      }
      return i !== void 0 && (s.colorSpace = i), e[t] = s, s;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, s = t.attributes.normal === void 0;
    if (e.isPoints) {
      const a = "PointsMaterial:" + n.uuid;
      let o = this.cache.get(a);
      o || (o = new vc(), bn.prototype.copy.call(o, n), o.color.copy(n.color), o.map = n.map, o.sizeAttenuation = !1, this.cache.add(a, o)), n = o;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let o = this.cache.get(a);
      o || (o = new gc(), bn.prototype.copy.call(o, n), o.color.copy(n.color), o.map = n.map, this.cache.add(a, o)), n = o;
    }
    if (i || r || s) {
      let a = "ClonedMaterial:" + n.uuid + ":";
      i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), s && (a += "flat-shading:");
      let o = this.cache.get(a);
      o || (o = n.clone(), r && (o.vertexColors = !0), s && (o.flatShading = !0), i && (o.normalScale && (o.normalScale.y *= -1), o.clearcoatNormalScale && (o.clearcoatNormalScale.y *= -1)), this.cache.add(a, o), this.associations.set(o, this.associations.get(n))), n = o;
    }
    e.material = n;
  }
  getMaterialType() {
    return Nr;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let s;
    const a = {}, o = r.extensions || {}, l = [];
    if (o[He.KHR_MATERIALS_UNLIT]) {
      const h = i[He.KHR_MATERIALS_UNLIT];
      s = h.getMaterialType(), l.push(h.extendParams(a, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (a.color = new Ce(1, 1, 1), a.opacity = 1, Array.isArray(h.baseColorFactor)) {
        const u = h.baseColorFactor;
        a.color.setRGB(u[0], u[1], u[2], pn), a.opacity = u[3];
      }
      h.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", h.baseColorTexture, At)), a.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1, a.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1, h.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", h.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", h.metallicRoughnessTexture))), s = this._invokeOne(function(u) {
        return u.getMaterialType && u.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(u) {
        return u.extendMaterialParams && u.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = 2);
    const c = r.alphaMode || _a.OPAQUE;
    if (c === _a.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, c === _a.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && s !== Oi && (l.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new ke(1, 1), r.normalTexture.scale !== void 0)) {
      const h = r.normalTexture.scale;
      a.normalScale.set(h, h);
    }
    if (r.occlusionTexture !== void 0 && s !== Oi && (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && s !== Oi) {
      const h = r.emissiveFactor;
      a.emissive = new Ce().setRGB(h[0], h[1], h[2], pn);
    }
    return r.emissiveTexture !== void 0 && s !== Oi && l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, At)), Promise.all(l).then(function() {
      const h = new s(a);
      return r.name && (h.name = r.name), Sn(h, r), t.associations.set(h, { materials: e }), r.extensions && ui(i, h, r), h;
    });
  }
  createUniqueName(e) {
    const t = ut.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(o) {
        return wl(o, a, t);
      });
    }
    const s = [];
    for (let a = 0, o = e.length; a < o; a++) {
      const l = e[a], c = Ig(l), h = i[c];
      if (h) s.push(h.promise);
      else {
        let u;
        l.extensions && l.extensions[He.KHR_DRACO_MESH_COMPRESSION] ? u = r(l) : u = wl(new Bt(), l, t), l.mode === nn.TRIANGLE_STRIP ? u = u.then((d) => Tl(d, 1)) : l.mode === nn.TRIANGLE_FAN && (u = u.then((d) => Tl(d, 2))), i[c] = {
          primitive: l,
          promise: u
        }, s.push(u);
      }
    }
    return Promise.all(s);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], s = r.primitives, a = [];
    for (let o = 0, l = s.length; o < l; o++) {
      const c = s[o].material === void 0 ? Cg(this.cache) : this.getDependency("material", s[o].material);
      a.push(c);
    }
    return a.push(t.loadGeometries(s)), Promise.all(a).then(async function(o) {
      const l = o.slice(0, o.length - 1), c = o[o.length - 1], h = [];
      for (let d = 0, f = c.length; d < f; d++) {
        const g = c[d], _ = s[d];
        let m;
        const p = l[d];
        if (_.mode === nn.TRIANGLES || _.mode === nn.TRIANGLE_STRIP || _.mode === nn.TRIANGLE_FAN || _.mode === void 0) {
          const M = r.isSkinnedMesh === !0, E = g.hasAttribute("skinIndex") && g.hasAttribute("skinWeight");
          M && E === !1 && console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."), m = M && E ? new Od(g, p) : new Xt(g, p), m.isSkinnedMesh === !0 && m.normalizeSkinWeights();
        } else if (_.mode === nn.LINES) m = new Vd(g, p);
        else if (_.mode === nn.LINE_STRIP) m = new Ha(g, p);
        else if (_.mode === nn.LINE_LOOP) m = new Wd(g, p);
        else if (_.mode === nn.POINTS) m = new Xd(g, p);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + _.mode);
        Object.keys(m.geometry.morphAttributes).length > 0 && Lg(m, r), m.name = t.createUniqueName(r.name || "mesh_" + e), Sn(m, r), _.extensions && ui(i, m, _), t.assignFinalMaterial(m), h.push(m);
      }
      for (let d = 0, f = h.length; d < f; d++) t.associations.set(h[d], {
        meshes: e,
        primitives: d
      });
      if (h.length === 1)
        return r.extensions && ui(i, h[0], r), h[0];
      const u = new Qt();
      r.extensions && ui(i, u, r), t.associations.set(u, { meshes: e });
      for (let d = 0, f = h.length; d < f; d++) u.add(h[d]);
      return u;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new Vt(ud.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Va(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), Sn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++) n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), s = i, a = [], o = [];
      for (let l = 0, c = s.length; l < c; l++) {
        const h = s[l];
        if (h) {
          a.push(h);
          const u = new Ge();
          r !== null && u.fromArray(r.array, l * 16), o.push(u);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Bd(a, o);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, s = [], a = [], o = [], l = [], c = [];
    for (let h = 0, u = i.channels.length; h < u; h++) {
      const d = i.channels[h], f = i.samplers[d.sampler], g = d.target, _ = g.node, m = i.parameters !== void 0 ? i.parameters[f.input] : f.input, p = i.parameters !== void 0 ? i.parameters[f.output] : f.output;
      g.node !== void 0 && (s.push(this.getDependency("node", _)), a.push(this.getDependency("accessor", m)), o.push(this.getDependency("accessor", p)), l.push(f), c.push(g));
    }
    return Promise.all([
      Promise.all(s),
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c)
    ]).then(function(h) {
      const u = h[0], d = h[1], f = h[2], g = h[3], _ = h[4], m = [];
      for (let M = 0, E = u.length; M < E; M++) {
        const S = u[M], b = d[M], A = f[M], v = g[M], T = _[M];
        if (S === void 0) continue;
        S.updateMatrix && S.updateMatrix();
        const w = n._createAnimationTracks(S, b, A, v, T);
        if (w) for (let F = 0; F < w.length; F++) m.push(w[F]);
      }
      const p = new mf(r, void 0, m);
      return Sn(p, i), p;
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const s = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && s.traverse(function(a) {
        if (a.isMesh)
          for (let o = 0, l = i.weights.length; o < l; o++) a.morphTargetInfluences[o] = i.weights[o];
      }), s;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), s = [], a = i.children || [];
    for (let l = 0, c = a.length; l < c; l++) s.push(n.getDependency("node", a[l]));
    const o = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([
      r,
      Promise.all(s),
      o
    ]).then(function(l) {
      const c = l[0], h = l[1], u = l[2];
      u !== null && c.traverse(function(d) {
        d.isSkinnedMesh && d.bind(u, Ng);
      });
      for (let d = 0, f = h.length; d < f; d++) c.add(h[d]);
      if (c.userData.pivot !== void 0 && h.length > 0) {
        const d = c.userData.pivot, f = h[0];
        c.pivot = new B().fromArray(d), c.position.x -= d[0], c.position.y -= d[1], c.position.z -= d[2], f.position.set(0, 0, 0), delete c.userData.pivot;
      }
      return c;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], s = r.name ? i.createUniqueName(r.name) : "", a = [], o = i._invokeOne(function(l) {
      return l.createNodeMesh && l.createNodeMesh(e);
    });
    return o && a.push(o), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function(l) {
      return i._getNodeRef(i.cameraCache, r.camera, l);
    })), i._invokeAll(function(l) {
      return l.createNodeAttachment && l.createNodeAttachment(e);
    }).forEach(function(l) {
      a.push(l);
    }), this.nodeCache[e] = Promise.all(a).then(function(l) {
      let c;
      if (r.isBone === !0 ? c = new fc() : l.length > 1 ? c = new Qt() : l.length === 1 ? c = l[0] : c = new _t(), c !== l[0]) for (let h = 0, u = l.length; h < u; h++) c.add(l[h]);
      if (r.name && (c.userData.name = r.name, c.name = s), Sn(c, r), r.extensions && ui(n, c, r), r.matrix !== void 0) {
        const h = new Ge();
        h.fromArray(r.matrix), c.applyMatrix4(h);
      } else
        r.translation !== void 0 && c.position.fromArray(r.translation), r.rotation !== void 0 && c.quaternion.fromArray(r.rotation), r.scale !== void 0 && c.scale.fromArray(r.scale);
      if (!i.associations.has(c)) i.associations.set(c, {});
      else if (r.mesh !== void 0 && i.meshCache.refs[r.mesh] > 1) {
        const h = i.associations.get(c);
        i.associations.set(c, { ...h });
      }
      return i.associations.get(c).nodes = e, c;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new Qt();
    n.name && (r.name = i.createUniqueName(n.name)), Sn(r, n), n.extensions && ui(t, r, n);
    const s = n.nodes || [], a = [];
    for (let o = 0, l = s.length; o < l; o++) a.push(i.getDependency("node", s[o]));
    return Promise.all(a).then(function(o) {
      for (let c = 0, h = o.length; c < h; c++) {
        const u = o[c];
        u.parent !== null ? r.add(tg(u)) : r.add(u);
      }
      const l = (c) => {
        const h = /* @__PURE__ */ new Map();
        for (const [u, d] of i.associations) (u instanceof bn || u instanceof Wt) && h.set(u, d);
        return c.traverse((u) => {
          const d = i.associations.get(u);
          d != null && h.set(u, d);
        }), h;
      };
      return i.associations = l(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const s = [], a = e.name ? e.name : e.uuid, o = [];
    function l(d) {
      d.morphTargetInfluences && o.push(d.name ? d.name : d.uuid);
    }
    Kn[r.path] === Kn.weights ? (l(e), e.isGroup && e.children.forEach(l)) : o.push(a);
    let c;
    switch (Kn[r.path]) {
      case Kn.weights:
        c = Cr;
        break;
      case Kn.rotation:
        c = Pr;
        break;
      case Kn.translation:
      case Kn.scale:
        c = Ds;
        break;
      default:
        n.itemSize === 1 ? c = Cr : c = Ds;
    }
    const h = i.interpolation !== void 0 ? wg[i.interpolation] : Ar, u = this._getArrayFromAccessor(n);
    for (let d = 0, f = o.length; d < f; d++) {
      const g = new c(o[d] + "." + Kn[r.path], t.array, u, h);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), s.push(g);
    }
    return s;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Ca(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, s = t.length; r < s; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      return new (this instanceof Pr ? Rg : Qc)(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
};
function Og(e, t, n) {
  const i = t.attributes, r = new Rn();
  if (i.POSITION !== void 0) {
    const o = n.json.accessors[i.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (r.set(new B(l[0], l[1], l[2]), new B(c[0], c[1], c[2])), o.normalized) {
        const h = Ca(zi[o.componentType]);
        r.min.multiplyScalar(h), r.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const s = t.targets;
  if (s !== void 0) {
    const o = new B(), l = new B();
    for (let c = 0, h = s.length; c < h; c++) {
      const u = s[c];
      if (u.POSITION !== void 0) {
        const d = n.json.accessors[u.POSITION], f = d.min, g = d.max;
        if (f !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))), d.normalized) {
            const _ = Ca(zi[d.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    r.expandByVector(o);
  }
  e.boundingBox = r;
  const a = new wn();
  r.getCenter(a.center), a.radius = r.min.distanceTo(r.max) / 2, e.boundingSphere = a;
}
function wl(e, t, n) {
  const i = t.attributes, r = [];
  function s(a, o) {
    return n.getDependency("accessor", a).then(function(l) {
      e.setAttribute(o, l);
    });
  }
  for (const a in i) {
    const o = wa[a] || a.toLowerCase();
    o in e.attributes || r.push(s(i[a], o));
  }
  if (t.indices !== void 0 && !e.index) {
    const a = n.getDependency("accessor", t.indices).then(function(o) {
      e.setIndex(o);
    });
    r.push(a);
  }
  return qe.workingColorSpace !== "srgb-linear" && "COLOR_0" in i && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`), Sn(e, t), Og(e, t, n), Promise.all(r).then(function() {
    return t.targets !== void 0 ? Pg(e, t.targets, n) : e;
  });
}
var Sa = {
  theta: 34 * Math.PI / 180,
  phi: 72 * Math.PI / 180,
  radius: 6.4,
  target: [
    0,
    0,
    0
  ],
  fov: 38
}, di = null, Cl = /* @__PURE__ */ new Map(), Fg = new ng();
function Bg() {
  return di || (di = new eg({
    antialias: !0,
    alpha: !0,
    preserveDrawingBuffer: !0,
    powerPreference: "high-performance"
  }), di.localClippingEnabled = !0, di.toneMapping = 4, di.toneMappingExposure = 1.15, di.outputColorSpace = At), di;
}
function Lr(e, t, n = "#94a3b8") {
  if (!e) return n;
  const i = e.trim(), r = /^var\((--[a-z0-9-]+)\)$/i.exec(i);
  if (r && t) {
    const s = getComputedStyle(t).getPropertyValue(r[1]).trim();
    if (s) return s;
  }
  return i;
}
function kg(e, t, n) {
  const i = e?.side === "double" ? 2 : e?.side === "back" ? 1 : 0, r = e?.opacity ?? 1;
  return new Nr({
    color: new Ce(Lr(e?.color, t, "#8ea4b8")),
    metalness: e?.metalness ?? 0.55,
    roughness: e?.roughness ?? 0.35,
    ...e?.emissive ? {
      emissive: new Ce(Lr(e.emissive, t, "#000000")),
      emissiveIntensity: e.emissiveIntensity ?? 1
    } : {},
    transparent: r < 1,
    opacity: r,
    wireframe: e?.wireframe ?? !1,
    side: i,
    clippingPlanes: n,
    clipShadows: !0
  });
}
function zg(e) {
  switch (e.type) {
    case "box":
      return new Dr(e.width ?? 1, e.height ?? 1, e.depth ?? 1);
    case "cylinder":
      return new Tc(e.radiusTop ?? e.radius ?? 0.5, e.radiusBottom ?? e.radius ?? 0.5, e.height ?? 1, e.radialSegments ?? 32, 1, e.openEnded ?? !1, e.thetaStart ?? 0, e.thetaLength ?? Math.PI * 2);
    case "cone":
      return new Yd(e.radius ?? 0.5, e.height ?? 1, e.radialSegments ?? 32, 1, e.openEnded ?? !1, e.thetaStart ?? 0, e.thetaLength ?? Math.PI * 2);
    case "sphere":
      return new Zd(e.radius ?? 0.5, e.radialSegments ?? 32, Math.max(12, Math.floor((e.radialSegments ?? 32) / 2)));
    case "torus":
      return new Jd(e.radius ?? 0.7, e.tube ?? 0.14, 16, e.tubularSegments ?? 48, e.thetaLength ?? Math.PI * 2);
    case "ring":
      return new $d(e.innerRadius ?? 0.35, e.outerRadius ?? 0.7, e.radialSegments ?? 32, 1, e.thetaStart ?? 0, e.thetaLength ?? Math.PI * 2);
    case "capsule":
      return new qd(e.radius ?? 0.35, e.height ?? 0.8, 8, e.radialSegments ?? 24);
    case "lathe": {
      const t = (e.points ?? [[0.5, -0.5], [0.5, 0.5]]).map(([n, i]) => new ke(n, i));
      return new Kd(t, e.radialSegments ?? 44, e.thetaStart ?? 0, e.thetaLength ?? Math.PI * 2);
    }
    case "group":
      return null;
  }
}
function Pl(e, t) {
  t.position && e.position.set(t.position[0], t.position[1], t.position[2]), t.rotation && e.rotation.set(t.rotation[0], t.rotation[1], t.rotation[2]), typeof t.scale == "number" ? e.scale.setScalar(t.scale) : Array.isArray(t.scale) && e.scale.set(t.scale[0], t.scale[1], t.scale[2]);
}
function Ll(e, t, n, i) {
  if (e.type === "group") {
    const o = new Qt();
    e.name && (o.name = e.name), Pl(o, e);
    for (const l of e.children ?? []) o.add(jc(l, t, n, i));
    return e.spin && i.push({
      obj: o,
      spin: e.spin,
      base: [
        o.rotation.x,
        o.rotation.y,
        o.rotation.z
      ]
    }), o;
  }
  const r = zg(e);
  if (!r) return new Qt();
  const s = kg(e.material, t, n), a = new Xt(r, s);
  return e.name && (a.name = e.name), Pl(a, e), e.spin && i.push({
    obj: a,
    spin: e.spin,
    base: [
      a.rotation.x,
      a.rotation.y,
      a.rotation.z
    ]
  }), a;
}
function jc(e, t, n, i) {
  if (!e.repeat) return Ll(e, t, n, i);
  const { count: r, axis: s, radius: a = 0, step: o = 0, arc: l = Math.PI * 2 } = e.repeat, c = new Qt();
  e.name && (c.name = `${e.name}-array`);
  for (let h = 0; h < r; h++) {
    const u = Ll({
      ...e,
      repeat: void 0,
      spin: void 0
    }, t, n, i);
    if (o !== 0) {
      const d = (h - (r - 1) / 2) * o;
      s === "x" ? u.position.x += d : s === "y" ? u.position.y += d : u.position.z += d;
    } else {
      const d = h / r * l, f = new Qt();
      s === "x" ? (u.position.y += a, f.rotation.x = d) : s === "y" ? (u.position.x += a, f.rotation.y = d) : (u.position.y += a, f.rotation.z = d), f.add(u), c.add(f);
      continue;
    }
    c.add(u);
  }
  return e.spin && i.push({
    obj: c,
    spin: e.spin,
    base: [
      c.rotation.x,
      c.rotation.y,
      c.rotation.z
    ]
  }), c;
}
function Hg(e, t, n) {
  if (t?.lights && t.lights.length > 0) {
    for (const l of t.lights) {
      const c = new Ce(Lr(l.color, n, "#ffffff")), h = l.intensity ?? 1;
      if (l.type === "ambient") e.add(new Rf(c, h));
      else if (l.type === "hemisphere") {
        const u = new Ce(Lr(l.groundColor, n, "#1e293b"));
        e.add(new $o(c, u, h));
      } else if (l.type === "point") {
        const u = new Fc(c, h);
        l.position && u.position.set(...l.position), e.add(u);
      } else {
        const u = new gr(c, h);
        l.position && u.position.set(...l.position), e.add(u);
      }
    }
    return;
  }
  const i = t?.lighting ?? "studio", r = new $o(15660799, 1843754, i === "cad" ? 1.15 : 0.9);
  e.add(r);
  const s = new gr(16777215, i === "dramatic" ? 2.5 : 1.9);
  s.position.set(5, 7, 6), e.add(s);
  const a = new gr(8176888, i === "dramatic" ? 1.5 : 0.9);
  a.position.set(-6, 3, -5), e.add(a);
  const o = new gr(16098916, 0.65);
  o.position.set(2, -4, 4), e.add(o);
}
function Gg(e) {
  let t = Cl.get(e);
  return t || (t = new Promise((n, i) => {
    Fg.load(e, (r) => {
      const s = r.scene || new Qt(), a = new Rn().setFromObject(s), o = a.getCenter(new B()), l = a.getSize(new B()), c = 3.8 / Math.max(l.x, l.y, l.z, 1e-3);
      s.position.sub(o).multiplyScalar(c), s.scale.multiplyScalar(c);
      const h = new Qt();
      h.add(s), n(h);
    }, void 0, i);
  }), Cl.set(e, t)), t.then((n) => n.clone(!0));
}
function Vg(e, t) {
  const n = {
    ...Sa,
    target: t?.camera?.target ? [...t.camera.target] : [
      0,
      0,
      0
    ],
    fov: t?.camera?.fov ?? Sa.fov
  };
  if (t?.camera?.position) {
    const [r, s, a] = t.camera.position, o = r - n.target[0], l = s - n.target[1], c = a - n.target[2], h = Math.hypot(o, l, c) || Sa.radius;
    n.radius = h, n.phi = Math.acos(Math.max(-1, Math.min(1, l / h))), n.theta = Math.atan2(o, c);
  }
  const i = Qh(e);
  return i && (n.theta = i.theta, n.phi = i.phi, n.radius = i.radius), n;
}
async function Wg(e, t, n) {
  const i = Wl(n), r = new bd();
  i?.background && i.background !== "transparent" && (r.background = new Ce(Lr(i.background, e, "#0b0e11")));
  const s = [];
  if (i?.clipPlane) {
    const [c, h, u] = i.clipPlane.normal;
    s.push(new Fn(new B(c, h, u).normalize(), i.clipPlane.constant));
  }
  Hg(r, i, e);
  const a = [];
  if (i) for (const c of i.parts) r.add(jc(c, e, s, a));
  if (t) try {
    const c = await Gg(t);
    r.add(c);
  } catch {
    const c = new Xt(new Dr(1.5, 1.5, 1.5), new Nr({
      color: 8176888,
      wireframe: !0
    }));
    r.add(c);
  }
  const o = new Vt(38, 1, 0.05, 200);
  let l = !1;
  return {
    render(c, h, u, d = 0) {
      if (l) return;
      const f = h.getBoundingClientRect(), g = Math.max(1, Math.round(f.width || c.clientWidth || 400)), _ = Math.max(1, Math.round(f.height || c.clientHeight || 300)), m = Math.min(window.devicePixelRatio || 1, 2), p = Math.max(1, Math.round(g * m)), M = Math.max(1, Math.round(_ * m));
      for (const w of a) {
        const F = d * w.spin.speed;
        w.obj.rotation.set(w.base[0] + (w.spin.axis === "x" ? F : 0), w.base[1] + (w.spin.axis === "y" ? F : 0), w.base[2] + (w.spin.axis === "z" ? F : 0));
      }
      const E = i?.autoRotate ? d * (typeof i.autoRotate == "number" ? i.autoRotate : 0.35) : 0;
      o.fov = u.fov, o.aspect = g / _, o.updateProjectionMatrix();
      const S = Math.max(0.08, Math.min(Math.PI - 0.08, u.phi)), b = Math.max(0.5, u.radius), A = u.theta + E;
      o.position.set(u.target[0] + b * Math.sin(S) * Math.sin(A), u.target[1] + b * Math.cos(S), u.target[2] + b * Math.sin(S) * Math.cos(A)), o.lookAt(u.target[0], u.target[1], u.target[2]);
      const v = Bg();
      v.setPixelRatio(1), v.setSize(p, M, !1), v.render(r, o), (c.width !== p || c.height !== M) && (c.width = p, c.height = M);
      const T = c.getContext("2d");
      T && (T.clearRect(0, 0, p, M), T.drawImage(v.domElement, 0, 0, p, M));
    },
    dispose() {
      l || (l = !0, r.traverse((c) => {
        if (c instanceof Xt) {
          c.geometry.dispose();
          const h = Array.isArray(c.material) ? c.material : [c.material];
          for (const u of h) u.dispose();
        }
      }));
    }
  };
}
async function Xg(e) {
  const t = e.getAttribute("src") ?? void 0, n = e.getAttribute("data-scene") ?? void 0, i = e.getAttribute("camera-orbit") ?? void 0, r = e.getAttribute("data-animate"), s = Wl(n), a = Jh(s);
  let o = Vg(i, s), l = r === "true" || r === "", c = 0;
  const h = document.createElement("canvas");
  h.style.display = "block", h.style.width = "100%", h.style.height = "100%", h.style.cursor = "grab", h.style.touchAction = "none", e.textContent = "", e.appendChild(h);
  const u = await Wg(e, t, n), d = () => u.render(h, e, o, c);
  d();
  let f = 0, g = performance.now();
  const _ = (p) => {
    l && (c += Math.min(0.1, (p - g) / 1e3), g = p, d(), f = requestAnimationFrame(_));
  };
  if (a) {
    const p = document.createElement("button");
    p.type = "button", p.textContent = l ? "Pause rotation" : "Animate engine", p.setAttribute("aria-pressed", l ? "true" : "false"), Object.assign(p.style, {
      position: "absolute",
      left: "12px",
      bottom: "12px",
      padding: "6px 10px",
      borderRadius: "4px",
      border: "1px solid var(--color-outline-variant, #475569)",
      backgroundColor: "var(--color-surface-container-high, #1e293b)",
      color: "var(--color-on-surface, #f8fafc)",
      fontSize: "12px",
      fontWeight: "600",
      cursor: "pointer"
    }), p.addEventListener("click", () => {
      l = !l, p.textContent = l ? "Pause rotation" : "Animate engine", p.setAttribute("aria-pressed", l ? "true" : "false"), l ? (g = performance.now(), f = requestAnimationFrame(_)) : cancelAnimationFrame(f);
    }), e.appendChild(p), l && (f = requestAnimationFrame(_));
  }
  let m = null;
  h.addEventListener("pointerdown", (p) => {
    h.setPointerCapture(p.pointerId), m = {
      x: p.clientX,
      y: p.clientY,
      theta: o.theta,
      phi: o.phi
    };
  }), h.addEventListener("pointermove", (p) => {
    m && (o = {
      ...o,
      theta: m.theta - (p.clientX - m.x) * 8e-3,
      phi: Math.max(0.12, Math.min(Math.PI - 0.12, m.phi - (p.clientY - m.y) * 8e-3))
    }, d());
  }), h.addEventListener("pointerup", () => {
    m = null;
  }), h.addEventListener("wheel", (p) => {
    p.preventDefault(), o = {
      ...o,
      radius: Math.max(1.2, Math.min(40, o.radius * (p.deltaY > 0 ? 1.08 : 0.92)))
    }, d();
  }, { passive: !1 }), new ResizeObserver(d).observe(e);
}
function Il() {
  const e = [...document.querySelectorAll("weft-3d")];
  return Promise.all(e.map(Xg)).then(() => e.length);
}
window.__weft3dReady = document.readyState === "loading" ? new Promise((e) => document.addEventListener("DOMContentLoaded", () => {
  Il().then(e);
}, { once: !0 })) : Il();
