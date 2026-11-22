var oo = [
  "stretch",
  "start",
  "center",
  "end",
  "baseline"
], cu = [
  "start",
  "center",
  "end",
  "space-between",
  "space-around",
  "space-evenly",
  "stretch"
], ut = ["space"], _n = ["color"], uu = {
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
    options: oo
  },
  justifyContent: {
    group: "layout",
    options: cu
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
    tokenGroups: ut
  },
  rowGap: {
    group: "layout",
    tokenGroups: ut
  },
  columnGap: {
    group: "layout",
    tokenGroups: ut
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
    options: ["auto", ...oo]
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
    tokenGroups: ut
  },
  right: {
    group: "position",
    tokenGroups: ut
  },
  bottom: {
    group: "position",
    tokenGroups: ut
  },
  left: {
    group: "position",
    tokenGroups: ut
  },
  inset: {
    group: "position",
    tokenGroups: ut
  },
  insetInline: {
    group: "position",
    tokenGroups: ut
  },
  insetBlock: {
    group: "position",
    tokenGroups: ut
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
    tokenGroups: ut
  },
  paddingInline: {
    group: "spacing",
    tokenGroups: ut
  },
  paddingBlock: {
    group: "spacing",
    tokenGroups: ut
  },
  paddingTop: {
    group: "spacing",
    tokenGroups: ut
  },
  paddingRight: {
    group: "spacing",
    tokenGroups: ut
  },
  paddingBottom: {
    group: "spacing",
    tokenGroups: ut
  },
  paddingLeft: {
    group: "spacing",
    tokenGroups: ut
  },
  margin: {
    group: "spacing",
    tokenGroups: ut
  },
  marginInline: {
    group: "spacing",
    tokenGroups: ut
  },
  marginBlock: {
    group: "spacing",
    tokenGroups: ut
  },
  marginTop: {
    group: "spacing",
    tokenGroups: ut
  },
  marginRight: {
    group: "spacing",
    tokenGroups: ut
  },
  marginBottom: {
    group: "spacing",
    tokenGroups: ut
  },
  marginLeft: {
    group: "spacing",
    tokenGroups: ut
  },
  backgroundColor: {
    group: "fill",
    tokenGroups: _n
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
    tokenGroups: _n
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
    tokenGroups: _n
  },
  borderRightColor: {
    group: "border",
    tokenGroups: _n
  },
  borderBottomColor: {
    group: "border",
    tokenGroups: _n
  },
  borderLeftColor: {
    group: "border",
    tokenGroups: _n
  },
  outline: { group: "border" },
  outlineOffset: { group: "border" },
  color: {
    group: "type",
    tokenGroups: _n
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
    tokenGroups: _n
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
    tokenGroups: _n
  },
  caretColor: {
    group: "forms",
    tokenGroups: _n
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
}, e0 = Object.keys(uu), hu = [
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
], t0 = hu.map((e) => e.id), du = [
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
], n0 = du.map((e) => e.id), fu = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", i0 = fu.slice(10);
function Xt(e) {
  return e < 0 ? -1 : e === 0 ? 0 : 1;
}
function yr(e, t, n) {
  return (1 - n) * e + n * t;
}
function pu(e, t, n) {
  return n < e ? e : n > t ? t : n;
}
function Ts(e, t, n) {
  return n < e ? e : n > t ? t : n;
}
function bs(e) {
  return e = e % 360, e < 0 && (e = e + 360), e;
}
function ri(e) {
  return e = e % 360, e < 0 && (e = e + 360), e;
}
function mu(e, t) {
  return 180 - Math.abs(Math.abs(e - t) - 180);
}
function ba(e, t) {
  return [
    e[0] * t[0][0] + e[1] * t[0][1] + e[2] * t[0][2],
    e[0] * t[1][0] + e[1] * t[1][1] + e[2] * t[1][2],
    e[0] * t[2][0] + e[1] * t[2][1] + e[2] * t[2][2]
  ];
}
var Fl = [
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
], gu = [
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
], Bl = [
  95.047,
  100,
  108.883
];
function Ia(e, t, n) {
  return (255 << 24 | (e & 255) << 16 | (t & 255) << 8 | n & 255) >>> 0;
}
function lo(e) {
  return Ia(gi(e[0]), gi(e[1]), gi(e[2]));
}
function Da(e) {
  return e >> 16 & 255;
}
function Na(e) {
  return e >> 8 & 255;
}
function Ua(e) {
  return e & 255;
}
function vu(e, t, n) {
  const i = gu, r = i[0][0] * e + i[0][1] * t + i[0][2] * n, s = i[1][0] * e + i[1][1] * t + i[1][2] * n, a = i[2][0] * e + i[2][1] * t + i[2][2] * n;
  return Ia(gi(r), gi(s), gi(a));
}
function _u(e) {
  const t = zn(Da(e)), n = zn(Na(e)), i = zn(Ua(e));
  return ba([
    t,
    n,
    i
  ], Fl);
}
function Mu(e) {
  const t = zn(Da(e)), n = zn(Na(e)), i = zn(Ua(e)), r = Fl, s = r[0][0] * t + r[0][1] * n + r[0][2] * i, a = r[1][0] * t + r[1][1] * n + r[1][2] * i, o = r[2][0] * t + r[2][1] * n + r[2][2] * i, l = Bl, c = s / l[0], u = a / l[1], h = o / l[2], d = xr(c), p = xr(u), m = xr(h);
  return [
    116 * p - 16,
    500 * (d - p),
    200 * (p - m)
  ];
}
function Su(e) {
  const t = gi(ei(e));
  return Ia(t, t, t);
}
function co(e) {
  const t = _u(e)[1];
  return 116 * xr(t / 100) - 16;
}
function ei(e) {
  return 100 * xu((e + 16) / 116);
}
function Ea(e) {
  return xr(e / 100) * 116 - 16;
}
function zn(e) {
  const t = e / 255;
  return t <= 0.040449936 ? t / 12.92 * 100 : Math.pow((t + 0.055) / 1.055, 2.4) * 100;
}
function gi(e) {
  const t = e / 100;
  let n = 0;
  return t <= 31308e-7 ? n = t * 12.92 : n = 1.055 * Math.pow(t, 1 / 2.4) - 0.055, pu(0, 255, Math.round(n * 255));
}
function yu() {
  return Bl;
}
function xr(e) {
  const t = 0.008856451679035631, n = 24389 / 27;
  return e > t ? Math.pow(e, 1 / 3) : (n * e + 16) / 116;
}
function xu(e) {
  const t = 0.008856451679035631, n = 24389 / 27, i = e * e * e;
  return i > t ? i : (116 * e - 16) / n;
}
var ti = class kl {
  static make(t = yu(), n = 200 / Math.PI * ei(50) / 100, i = 50, r = 2, s = !1) {
    const a = t, o = a[0] * 0.401288 + a[1] * 0.650173 + a[2] * -0.051461, l = a[0] * -0.250268 + a[1] * 1.204414 + a[2] * 0.045854, c = a[0] * -2079e-6 + a[1] * 0.048952 + a[2] * 0.953127, u = 0.8 + r / 10, h = u >= 0.9 ? yr(0.59, 0.69, (u - 0.9) * 10) : yr(0.525, 0.59, (u - 0.8) * 10);
    let d = s ? 1 : u * (1 - 1 / 3.6 * Math.exp((-n - 42) / 92));
    d = d > 1 ? 1 : d < 0 ? 0 : d;
    const p = u, m = [
      d * (100 / o) + 1 - d,
      d * (100 / l) + 1 - d,
      d * (100 / c) + 1 - d
    ], _ = 1 / (5 * n + 1), g = _ * _ * _ * _, f = 1 - g, M = g * n + 0.1 * f * f * Math.cbrt(5 * n), b = ei(i) / t[1], S = 1.48 + Math.sqrt(b), E = 0.725 / Math.pow(b, 0.2), A = E, v = [
      Math.pow(M * m[0] * o / 100, 0.42),
      Math.pow(M * m[1] * l / 100, 0.42),
      Math.pow(M * m[2] * c / 100, 0.42)
    ], T = [
      400 * v[0] / (v[0] + 27.13),
      400 * v[1] / (v[1] + 27.13),
      400 * v[2] / (v[2] + 27.13)
    ], R = (2 * T[0] + T[1] + 0.05 * T[2]) * E;
    return new kl(b, R, E, A, h, p, m, M, Math.pow(M, 0.25), S);
  }
  constructor(t, n, i, r, s, a, o, l, c, u) {
    this.n = t, this.aw = n, this.nbb = i, this.ncb = r, this.c = s, this.nc = a, this.rgbD = o, this.fl = l, this.fLRoot = c, this.z = u;
  }
};
ti.DEFAULT = ti.make();
var mr = class Jn {
  constructor(t, n, i, r, s, a, o, l, c) {
    this.hue = t, this.chroma = n, this.j = i, this.q = r, this.m = s, this.s = a, this.jstar = o, this.astar = l, this.bstar = c;
  }
  distance(t) {
    const n = this.jstar - t.jstar, i = this.astar - t.astar, r = this.bstar - t.bstar, s = Math.sqrt(n * n + i * i + r * r);
    return 1.41 * Math.pow(s, 0.63);
  }
  static fromInt(t) {
    return Jn.fromIntInViewingConditions(t, ti.DEFAULT);
  }
  static fromIntInViewingConditions(t, n) {
    const i = (t & 16711680) >> 16, r = (t & 65280) >> 8, s = t & 255, a = zn(i), o = zn(r), l = zn(s), c = 0.41233895 * a + 0.35762064 * o + 0.18051042 * l, u = 0.2126 * a + 0.7152 * o + 0.0722 * l, h = 0.01932141 * a + 0.11916382 * o + 0.95034478 * l, d = 0.401288 * c + 0.650173 * u - 0.051461 * h, p = -0.250268 * c + 1.204414 * u + 0.045854 * h, m = -2079e-6 * c + 0.048952 * u + 0.953127 * h, _ = n.rgbD[0] * d, g = n.rgbD[1] * p, f = n.rgbD[2] * m, M = Math.pow(n.fl * Math.abs(_) / 100, 0.42), b = Math.pow(n.fl * Math.abs(g) / 100, 0.42), S = Math.pow(n.fl * Math.abs(f) / 100, 0.42), E = Xt(_) * 400 * M / (M + 27.13), A = Xt(g) * 400 * b / (b + 27.13), v = Xt(f) * 400 * S / (S + 27.13), T = (11 * E + -12 * A + v) / 11, R = (E + A - 2 * v) / 9, U = (20 * E + 20 * A + 21 * v) / 20, C = (40 * E + 20 * A + v) / 20, N = Math.atan2(R, T) * 180 / Math.PI, q = N < 0 ? N + 360 : N >= 360 ? N - 360 : N, L = q * Math.PI / 180, H = C * n.nbb, $ = 100 * Math.pow(H / n.aw, n.c * n.z), B = 4 / n.c * Math.sqrt($ / 100) * (n.aw + 4) * n.fLRoot, ae = q < 20.14 ? q + 360 : q, Y = 5e4 / 13 * (0.25 * (Math.cos(ae * Math.PI / 180 + 2) + 3.8)) * n.nc * n.ncb * Math.sqrt(T * T + R * R) / (U + 0.305), k = Math.pow(Y, 0.9) * Math.pow(1.64 - Math.pow(0.29, n.n), 0.73), Q = k * Math.sqrt($ / 100), _e = Q * n.fLRoot, Z = 50 * Math.sqrt(k * n.c / (n.aw + 4)), te = (1 + 100 * 7e-3) * $ / (1 + 7e-3 * $), ge = 1 / 0.0228 * Math.log(1 + 0.0228 * _e), Te = ge * Math.cos(L), ye = ge * Math.sin(L);
    return new Jn(q, Q, $, B, _e, Z, te, Te, ye);
  }
  static fromJch(t, n, i) {
    return Jn.fromJchInViewingConditions(t, n, i, ti.DEFAULT);
  }
  static fromJchInViewingConditions(t, n, i, r) {
    const s = 4 / r.c * Math.sqrt(t / 100) * (r.aw + 4) * r.fLRoot, a = n * r.fLRoot, o = n / Math.sqrt(t / 100), l = 50 * Math.sqrt(o * r.c / (r.aw + 4)), c = i * Math.PI / 180, u = (1 + 100 * 7e-3) * t / (1 + 7e-3 * t), h = 1 / 0.0228 * Math.log(1 + 0.0228 * a), d = h * Math.cos(c), p = h * Math.sin(c);
    return new Jn(i, n, t, s, a, l, u, d, p);
  }
  static fromUcs(t, n, i) {
    return Jn.fromUcsInViewingConditions(t, n, i, ti.DEFAULT);
  }
  static fromUcsInViewingConditions(t, n, i, r) {
    const s = n, a = i, o = Math.sqrt(s * s + a * a), l = (Math.exp(o * 0.0228) - 1) / 0.0228 / r.fLRoot;
    let c = Math.atan2(a, s) * (180 / Math.PI);
    c < 0 && (c += 360);
    const u = t / (1 - (t - 100) * 7e-3);
    return Jn.fromJchInViewingConditions(u, l, c, r);
  }
  toInt() {
    return this.viewed(ti.DEFAULT);
  }
  viewed(t) {
    const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), i = Math.pow(n / Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), 1 / 0.9), r = this.hue * Math.PI / 180, s = 0.25 * (Math.cos(r + 2) + 3.8), a = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z), o = s * (5e4 / 13) * t.nc * t.ncb, l = a / t.nbb, c = Math.sin(r), u = Math.cos(r), h = 23 * (l + 0.305) * i / (23 * o + 11 * i * u + 108 * i * c), d = h * u, p = h * c, m = (460 * l + 451 * d + 288 * p) / 1403, _ = (460 * l - 891 * d - 261 * p) / 1403, g = (460 * l - 220 * d - 6300 * p) / 1403, f = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), M = Xt(m) * (100 / t.fl) * Math.pow(f, 1 / 0.42), b = Math.max(0, 27.13 * Math.abs(_) / (400 - Math.abs(_))), S = Xt(_) * (100 / t.fl) * Math.pow(b, 1 / 0.42), E = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), A = Xt(g) * (100 / t.fl) * Math.pow(E, 1 / 0.42), v = M / t.rgbD[0], T = S / t.rgbD[1], R = A / t.rgbD[2], U = 1.86206786 * v - 1.01125463 * T + 0.14918677 * R, C = 0.38752654 * v + 0.62144744 * T - 897398e-8 * R, N = -0.0158415 * v - 0.03412294 * T + 1.04996444 * R;
    return vu(U, C, N);
  }
  static fromXyzInViewingConditions(t, n, i, r) {
    const s = 0.401288 * t + 0.650173 * n - 0.051461 * i, a = -0.250268 * t + 1.204414 * n + 0.045854 * i, o = -2079e-6 * t + 0.048952 * n + 0.953127 * i, l = r.rgbD[0] * s, c = r.rgbD[1] * a, u = r.rgbD[2] * o, h = Math.pow(r.fl * Math.abs(l) / 100, 0.42), d = Math.pow(r.fl * Math.abs(c) / 100, 0.42), p = Math.pow(r.fl * Math.abs(u) / 100, 0.42), m = Xt(l) * 400 * h / (h + 27.13), _ = Xt(c) * 400 * d / (d + 27.13), g = Xt(u) * 400 * p / (p + 27.13), f = (11 * m + -12 * _ + g) / 11, M = (m + _ - 2 * g) / 9, b = (20 * m + 20 * _ + 21 * g) / 20, S = (40 * m + 20 * _ + g) / 20, E = Math.atan2(M, f) * 180 / Math.PI, A = E < 0 ? E + 360 : E >= 360 ? E - 360 : E, v = A * Math.PI / 180, T = S * r.nbb, R = 100 * Math.pow(T / r.aw, r.c * r.z), U = 4 / r.c * Math.sqrt(R / 100) * (r.aw + 4) * r.fLRoot, C = A < 20.14 ? A + 360 : A, N = 5e4 / 13 * (1 / 4 * (Math.cos(C * Math.PI / 180 + 2) + 3.8)) * r.nc * r.ncb * Math.sqrt(f * f + M * M) / (b + 0.305), q = Math.pow(N, 0.9) * Math.pow(1.64 - Math.pow(0.29, r.n), 0.73), L = q * Math.sqrt(R / 100), H = L * r.fLRoot, $ = 50 * Math.sqrt(q * r.c / (r.aw + 4)), B = (1 + 100 * 7e-3) * R / (1 + 7e-3 * R), ae = Math.log(1 + 0.0228 * H) / 0.0228, Y = ae * Math.cos(v), k = ae * Math.sin(v);
    return new Jn(A, L, R, U, H, $, B, Y, k);
  }
  xyzInViewingConditions(t) {
    const n = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100), i = Math.pow(n / Math.pow(1.64 - Math.pow(0.29, t.n), 0.73), 1 / 0.9), r = this.hue * Math.PI / 180, s = 0.25 * (Math.cos(r + 2) + 3.8), a = t.aw * Math.pow(this.j / 100, 1 / t.c / t.z), o = s * (5e4 / 13) * t.nc * t.ncb, l = a / t.nbb, c = Math.sin(r), u = Math.cos(r), h = 23 * (l + 0.305) * i / (23 * o + 11 * i * u + 108 * i * c), d = h * u, p = h * c, m = (460 * l + 451 * d + 288 * p) / 1403, _ = (460 * l - 891 * d - 261 * p) / 1403, g = (460 * l - 220 * d - 6300 * p) / 1403, f = Math.max(0, 27.13 * Math.abs(m) / (400 - Math.abs(m))), M = Xt(m) * (100 / t.fl) * Math.pow(f, 1 / 0.42), b = Math.max(0, 27.13 * Math.abs(_) / (400 - Math.abs(_))), S = Xt(_) * (100 / t.fl) * Math.pow(b, 1 / 0.42), E = Math.max(0, 27.13 * Math.abs(g) / (400 - Math.abs(g))), A = Xt(g) * (100 / t.fl) * Math.pow(E, 1 / 0.42), v = M / t.rgbD[0], T = S / t.rgbD[1], R = A / t.rgbD[2];
    return [
      1.86206786 * v - 1.01125463 * T + 0.14918677 * R,
      0.38752654 * v + 0.62144744 * T - 897398e-8 * R,
      -0.0158415 * v - 0.03412294 * T + 1.04996444 * R
    ];
  }
}, ni = class Fe {
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
    return Xt(t) * 400 * n / (n + 27.13);
  }
  static hueOf(t) {
    const n = ba(t, Fe.SCALED_DISCOUNT_FROM_LINRGB), i = Fe.chromaticAdaptation(n[0]), r = Fe.chromaticAdaptation(n[1]), s = Fe.chromaticAdaptation(n[2]), a = (11 * i + -12 * r + s) / 11, o = (i + r - 2 * s) / 9;
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
      const l = a, c = o, u = (t - l * r - c * s) / i;
      return Fe.isBounded(u) ? [
        u,
        l,
        c
      ] : [
        -1,
        -1,
        -1
      ];
    } else if (n < 8) {
      const l = a, c = o, u = (t - c * i - l * s) / r;
      return Fe.isBounded(u) ? [
        c,
        u,
        l
      ] : [
        -1,
        -1,
        -1
      ];
    } else {
      const l = a, c = o, u = (t - l * i - c * r) / s;
      return Fe.isBounded(u) ? [
        l,
        c,
        u
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
      const u = Fe.nthVertex(t, c);
      if (u[0] < 0) continue;
      const h = Fe.hueOf(u);
      if (!o) {
        i = u, r = u, s = h, a = h, o = !0;
        continue;
      }
      (l || Fe.areInCyclicOrder(s, h, a)) && (l = !1, Fe.areInCyclicOrder(s, n, h) ? (r = u, a = h) : (i = u, s = h));
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
      for (let u = 0; u < 8 && !(Math.abs(c - l) <= 1); u++) {
        const h = Math.floor((l + c) / 2), d = Fe.CRITICAL_PLANES[h], p = Fe.setCoordinate(r, d, a, o), m = Fe.hueOf(p);
        Fe.areInCyclicOrder(s, n, m) ? (a = p, c = h) : (r = p, s = m, l = h);
      }
    }
    return Fe.midpoint(r, a);
  }
  static inverseChromaticAdaptation(t) {
    const n = Math.abs(t), i = Math.max(0, 27.13 * n / (400 - n));
    return Xt(t) * Math.pow(i, 1 / 0.42);
  }
  static findResultByJ(t, n, i) {
    let r = Math.sqrt(i) * 11;
    const s = ti.DEFAULT, a = 1 / Math.pow(1.64 - Math.pow(0.29, s.n), 0.73), o = 0.25 * (Math.cos(t + 2) + 3.8) * (5e4 / 13) * s.nc * s.ncb, l = Math.sin(t), c = Math.cos(t);
    for (let u = 0; u < 5; u++) {
      const h = r / 100, d = n === 0 || r === 0 ? 0 : n / Math.sqrt(h), p = Math.pow(d * a, 1 / 0.9), m = s.aw * Math.pow(h, 1 / s.c / s.z) / s.nbb, _ = 23 * (m + 0.305) * p / (23 * o + 11 * p * c + 108 * p * l), g = _ * c, f = _ * l, M = (460 * m + 451 * g + 288 * f) / 1403, b = (460 * m - 891 * g - 261 * f) / 1403, S = (460 * m - 220 * g - 6300 * f) / 1403, E = Fe.inverseChromaticAdaptation(M), A = Fe.inverseChromaticAdaptation(b), v = Fe.inverseChromaticAdaptation(S), T = ba([
        E,
        A,
        v
      ], Fe.LINRGB_FROM_SCALED_DISCOUNT);
      if (T[0] < 0 || T[1] < 0 || T[2] < 0) return 0;
      const R = Fe.Y_FROM_LINRGB[0], U = Fe.Y_FROM_LINRGB[1], C = Fe.Y_FROM_LINRGB[2], N = R * T[0] + U * T[1] + C * T[2];
      if (N <= 0) return 0;
      if (u === 4 || Math.abs(N - i) < 2e-3)
        return T[0] > 100.01 || T[1] > 100.01 || T[2] > 100.01 ? 0 : lo(T);
      r = r - (N - i) * r / (2 * N);
    }
    return 0;
  }
  static solveToInt(t, n, i) {
    if (n < 1e-4 || i < 1e-4 || i > 99.9999) return Su(i);
    t = ri(t);
    const r = t / 180 * Math.PI, s = ei(i), a = Fe.findResultByJ(r, n, s);
    if (a !== 0) return a;
    const o = Fe.bisectToLimit(s, r);
    return lo(o);
  }
  static solveToCam(t, n, i) {
    return mr.fromInt(Fe.solveToInt(t, n, i));
  }
};
ni.SCALED_DISCOUNT_FROM_LINRGB = [
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
ni.LINRGB_FROM_SCALED_DISCOUNT = [
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
ni.Y_FROM_LINRGB = [
  0.2126,
  0.7152,
  0.0722
];
ni.CRITICAL_PLANES = [
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
var tn = class vs {
  static from(t, n, i) {
    return new vs(ni.solveToInt(t, n, i));
  }
  static fromInt(t) {
    return new vs(t);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(t) {
    this.setInternalState(ni.solveToInt(t, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(t) {
    this.setInternalState(ni.solveToInt(this.internalHue, t, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(t) {
    this.setInternalState(ni.solveToInt(this.internalHue, this.internalChroma, t));
  }
  constructor(t) {
    this.argb = t;
    const n = mr.fromInt(t);
    this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = co(t), this.argb = t;
  }
  setInternalState(t) {
    const n = mr.fromInt(t);
    this.internalHue = n.hue, this.internalChroma = n.chroma, this.internalTone = co(t), this.argb = t;
  }
  inViewingConditions(t) {
    const n = mr.fromInt(this.toInt()).xyzInViewingConditions(t), i = mr.fromXyzInViewingConditions(n[0], n[1], n[2], ti.make());
    return vs.from(i.hue, i.chroma, Ea(n[1]));
  }
}, nn = class Oi {
  static ratioOfTones(t, n) {
    return t = Ts(0, 100, t), n = Ts(0, 100, n), Oi.ratioOfYs(ei(t), ei(n));
  }
  static ratioOfYs(t, n) {
    const i = t > n ? t : n, r = i === n ? t : n;
    return (i + 5) / (r + 5);
  }
  static lighter(t, n) {
    if (t < 0 || t > 100) return -1;
    const i = ei(t), r = n * (i + 5) - 5, s = Oi.ratioOfYs(r, i), a = Math.abs(s - n);
    if (s < n && a > 0.04) return -1;
    const o = Ea(r) + 0.4;
    return o < 0 || o > 100 ? -1 : o;
  }
  static darker(t, n) {
    if (t < 0 || t > 100) return -1;
    const i = ei(t), r = (i + 5) / n - 5, s = Oi.ratioOfYs(i, r), a = Math.abs(s - n);
    if (s < n && a > 0.04) return -1;
    const o = Ea(r) - 0.4;
    return o < 0 || o > 100 ? -1 : o;
  }
  static lighterUnsafe(t, n) {
    const i = Oi.lighter(t, n);
    return i < 0 ? 100 : i;
  }
  static darkerUnsafe(t, n) {
    const i = Oi.darker(t, n);
    return i < 0 ? 0 : i;
  }
}, Oa = class zl {
  static isDisliked(t) {
    const n = Math.round(t.hue) >= 90 && Math.round(t.hue) <= 111, i = Math.round(t.chroma) > 16, r = Math.round(t.tone) < 65;
    return n && i && r;
  }
  static fixIfDisliked(t) {
    return zl.isDisliked(t) ? tn.from(t.hue, t.chroma, 70) : t;
  }
}, Ae = class jt {
  static fromPalette(t) {
    return new jt(t.name ?? "", t.palette, t.tone, t.isBackground ?? !1, t.background, t.secondBackground, t.contrastCurve, t.toneDeltaPair);
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
      const i = this.toneDeltaPair(t), r = i.roleA, s = i.roleB, a = i.delta, o = i.polarity, l = i.stayTogether, c = this.background(t).getTone(t), u = o === "nearer" || o === "lighter" && !t.isDark || o === "darker" && t.isDark, h = u ? r : s, d = u ? s : r, p = this.name === h.name, m = t.isDark ? 1 : -1, _ = h.contrastCurve.get(t.contrastLevel), g = d.contrastCurve.get(t.contrastLevel), f = h.tone(t);
      let M = nn.ratioOfTones(c, f) >= _ ? f : jt.foregroundTone(c, _);
      const b = d.tone(t);
      let S = nn.ratioOfTones(c, b) >= g ? b : jt.foregroundTone(c, g);
      return n && (M = jt.foregroundTone(c, _), S = jt.foregroundTone(c, g)), (S - M) * m >= a || (S = Ts(0, 100, M + a * m), (S - M) * m >= a || (M = Ts(0, 100, S - a * m))), 50 <= M && M < 60 ? m > 0 ? (M = 60, S = Math.max(S, M + a * m)) : (M = 49, S = Math.min(S, M + a * m)) : 50 <= S && S < 60 && (l ? m > 0 ? (M = 60, S = Math.max(S, M + a * m)) : (M = 49, S = Math.min(S, M + a * m)) : m > 0 ? S = 60 : S = 49), p ? M : S;
    } else {
      let i = this.tone(t);
      if (this.background == null) return i;
      const r = this.background(t).getTone(t), s = this.contrastCurve.get(t.contrastLevel);
      if (nn.ratioOfTones(r, i) >= s || (i = jt.foregroundTone(r, s)), n && (i = jt.foregroundTone(r, s)), this.isBackground && 50 <= i && i < 60 && (nn.ratioOfTones(49, r) >= s ? i = 49 : i = 60), this.secondBackground) {
        const [a, o] = [this.background, this.secondBackground], [l, c] = [a(t).getTone(t), o(t).getTone(t)], [u, h] = [Math.max(l, c), Math.min(l, c)];
        if (nn.ratioOfTones(u, i) >= s && nn.ratioOfTones(h, i) >= s) return i;
        const d = nn.lighter(u, s), p = nn.darker(h, s), m = [];
        return d !== -1 && m.push(d), p !== -1 && m.push(p), jt.tonePrefersLightForeground(l) || jt.tonePrefersLightForeground(c) ? d < 0 ? 100 : d : m.length === 1 ? m[0] : p < 0 ? 0 : p;
      }
      return i;
    }
  }
  static foregroundTone(t, n) {
    const i = nn.lighterUnsafe(t, n), r = nn.darkerUnsafe(t, n), s = nn.ratioOfTones(i, t), a = nn.ratioOfTones(r, t);
    if (jt.tonePrefersLightForeground(t)) {
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
    return jt.tonePrefersLightForeground(t) && !jt.toneAllowsLightForeground(t) ? 49 : t;
  }
}, Ye = class _s {
  static fromInt(t) {
    const n = tn.fromInt(t);
    return _s.fromHct(n);
  }
  static fromHct(t) {
    return new _s(t.hue, t.chroma, t);
  }
  static fromHueAndChroma(t, n) {
    const i = new Tu(t, n).create();
    return new _s(t, n, i);
  }
  constructor(t, n, i) {
    this.hue = t, this.chroma = n, this.keyColor = i, this.cache = /* @__PURE__ */ new Map();
  }
  tone(t) {
    let n = this.cache.get(t);
    return n === void 0 && (n = tn.from(this.hue, this.chroma, t).toInt(), this.cache.set(t, n)), n;
  }
  getHct(t) {
    return tn.fromInt(this.tone(t));
  }
}, Tu = class {
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
          if (i === s) return tn.from(this.hue, this.requestedChroma, i);
          i = s;
        }
      else a ? i = s + 1 : r = s;
    }
    return tn.from(this.hue, this.requestedChroma, i);
  }
  maxChroma(e) {
    if (this.chromaCache.has(e)) return this.chromaCache.get(e);
    const t = tn.from(this.hue, this.maxChromaValue, e).chroma;
    return this.chromaCache.set(e, t), t;
  }
}, Ne = class {
  constructor(e, t, n, i) {
    this.low = e, this.normal = t, this.medium = n, this.high = i;
  }
  get(e) {
    return e <= -1 ? this.low : e < 0 ? yr(this.low, this.normal, (e - -1) / 1) : e < 0.5 ? yr(this.normal, this.medium, (e - 0) / 0.5) : e < 1 ? yr(this.medium, this.high, (e - 0.5) / 0.5) : this.high;
  }
}, Kt = class {
  constructor(e, t, n, i, r) {
    this.roleA = e, this.roleB = t, this.delta = n, this.polarity = i, this.stayTogether = r;
  }
}, on;
(function(e) {
  e[e.MONOCHROME = 0] = "MONOCHROME", e[e.NEUTRAL = 1] = "NEUTRAL", e[e.TONAL_SPOT = 2] = "TONAL_SPOT", e[e.VIBRANT = 3] = "VIBRANT", e[e.EXPRESSIVE = 4] = "EXPRESSIVE", e[e.FIDELITY = 5] = "FIDELITY", e[e.CONTENT = 6] = "CONTENT", e[e.RAINBOW = 7] = "RAINBOW", e[e.FRUIT_SALAD = 8] = "FRUIT_SALAD";
})(on || (on = {}));
function $i(e) {
  return e.variant === on.FIDELITY || e.variant === on.CONTENT;
}
function ft(e) {
  return e.variant === on.MONOCHROME;
}
function bu(e, t, n, i) {
  let r = n, s = tn.from(e, t, n);
  if (s.chroma < t) {
    let a = s.chroma;
    for (; s.chroma < t; ) {
      r += i ? -1 : 1;
      const o = tn.from(e, t, r);
      if (a > o.chroma || Math.abs(o.chroma - t) < 0.4) break;
      Math.abs(o.chroma - t) < Math.abs(s.chroma - t) && (s = o), a = Math.max(a, o.chroma);
    }
  }
  return r;
}
var F = class Aa {
  static highestSurface(t) {
    return t.isDark ? Aa.surfaceBright : Aa.surfaceDim;
  }
};
F.contentAccentToneDelta = 15;
F.primaryPaletteKeyColor = Ae.fromPalette({
  name: "primary_palette_key_color",
  palette: (e) => e.primaryPalette,
  tone: (e) => e.primaryPalette.keyColor.tone
});
F.secondaryPaletteKeyColor = Ae.fromPalette({
  name: "secondary_palette_key_color",
  palette: (e) => e.secondaryPalette,
  tone: (e) => e.secondaryPalette.keyColor.tone
});
F.tertiaryPaletteKeyColor = Ae.fromPalette({
  name: "tertiary_palette_key_color",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => e.tertiaryPalette.keyColor.tone
});
F.neutralPaletteKeyColor = Ae.fromPalette({
  name: "neutral_palette_key_color",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.neutralPalette.keyColor.tone
});
F.neutralVariantPaletteKeyColor = Ae.fromPalette({
  name: "neutral_variant_palette_key_color",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.neutralVariantPalette.keyColor.tone
});
F.background = Ae.fromPalette({
  name: "background",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 6 : 98,
  isBackground: !0
});
F.onBackground = Ae.fromPalette({
  name: "on_background",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 90 : 10,
  background: (e) => F.background,
  contrastCurve: new Ne(3, 3, 4.5, 7)
});
F.surface = Ae.fromPalette({
  name: "surface",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 6 : 98,
  isBackground: !0
});
F.surfaceDim = Ae.fromPalette({
  name: "surface_dim",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 6 : new Ne(87, 87, 80, 75).get(e.contrastLevel),
  isBackground: !0
});
F.surfaceBright = Ae.fromPalette({
  name: "surface_bright",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(24, 24, 29, 34).get(e.contrastLevel) : 98,
  isBackground: !0
});
F.surfaceContainerLowest = Ae.fromPalette({
  name: "surface_container_lowest",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(4, 4, 2, 0).get(e.contrastLevel) : 100,
  isBackground: !0
});
F.surfaceContainerLow = Ae.fromPalette({
  name: "surface_container_low",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(10, 10, 11, 12).get(e.contrastLevel) : new Ne(96, 96, 96, 95).get(e.contrastLevel),
  isBackground: !0
});
F.surfaceContainer = Ae.fromPalette({
  name: "surface_container",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(12, 12, 16, 20).get(e.contrastLevel) : new Ne(94, 94, 92, 90).get(e.contrastLevel),
  isBackground: !0
});
F.surfaceContainerHigh = Ae.fromPalette({
  name: "surface_container_high",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(17, 17, 21, 25).get(e.contrastLevel) : new Ne(92, 92, 88, 85).get(e.contrastLevel),
  isBackground: !0
});
F.surfaceContainerHighest = Ae.fromPalette({
  name: "surface_container_highest",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? new Ne(22, 22, 26, 30).get(e.contrastLevel) : new Ne(90, 90, 84, 80).get(e.contrastLevel),
  isBackground: !0
});
F.onSurface = Ae.fromPalette({
  name: "on_surface",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 90 : 10,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
F.surfaceVariant = Ae.fromPalette({
  name: "surface_variant",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.isDark ? 30 : 90,
  isBackground: !0
});
F.onSurfaceVariant = Ae.fromPalette({
  name: "on_surface_variant",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.isDark ? 80 : 30,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
F.inverseSurface = Ae.fromPalette({
  name: "inverse_surface",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 90 : 20
});
F.inverseOnSurface = Ae.fromPalette({
  name: "inverse_on_surface",
  palette: (e) => e.neutralPalette,
  tone: (e) => e.isDark ? 20 : 95,
  background: (e) => F.inverseSurface,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
F.outline = Ae.fromPalette({
  name: "outline",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.isDark ? 60 : 50,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1.5, 3, 4.5, 7)
});
F.outlineVariant = Ae.fromPalette({
  name: "outline_variant",
  palette: (e) => e.neutralVariantPalette,
  tone: (e) => e.isDark ? 30 : 80,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5)
});
F.shadow = Ae.fromPalette({
  name: "shadow",
  palette: (e) => e.neutralPalette,
  tone: (e) => 0
});
F.scrim = Ae.fromPalette({
  name: "scrim",
  palette: (e) => e.neutralPalette,
  tone: (e) => 0
});
F.surfaceTint = Ae.fromPalette({
  name: "surface_tint",
  palette: (e) => e.primaryPalette,
  tone: (e) => e.isDark ? 80 : 40,
  isBackground: !0
});
F.primary = Ae.fromPalette({
  name: "primary",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 100 : 0 : e.isDark ? 80 : 40,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 7),
  toneDeltaPair: (e) => new Kt(F.primaryContainer, F.primary, 10, "nearer", !1)
});
F.onPrimary = Ae.fromPalette({
  name: "on_primary",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
  background: (e) => F.primary,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
F.primaryContainer = Ae.fromPalette({
  name: "primary_container",
  palette: (e) => e.primaryPalette,
  tone: (e) => $i(e) ? e.sourceColorHct.tone : ft(e) ? e.isDark ? 85 : 25 : e.isDark ? 30 : 90,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.primaryContainer, F.primary, 10, "nearer", !1)
});
F.onPrimaryContainer = Ae.fromPalette({
  name: "on_primary_container",
  palette: (e) => e.primaryPalette,
  tone: (e) => $i(e) ? Ae.foregroundTone(F.primaryContainer.tone(e), 4.5) : ft(e) ? e.isDark ? 0 : 100 : e.isDark ? 90 : 30,
  background: (e) => F.primaryContainer,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
F.inversePrimary = Ae.fromPalette({
  name: "inverse_primary",
  palette: (e) => e.primaryPalette,
  tone: (e) => e.isDark ? 40 : 80,
  background: (e) => F.inverseSurface,
  contrastCurve: new Ne(3, 4.5, 7, 7)
});
F.secondary = Ae.fromPalette({
  name: "secondary",
  palette: (e) => e.secondaryPalette,
  tone: (e) => e.isDark ? 80 : 40,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 7),
  toneDeltaPair: (e) => new Kt(F.secondaryContainer, F.secondary, 10, "nearer", !1)
});
F.onSecondary = Ae.fromPalette({
  name: "on_secondary",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 10 : 100 : e.isDark ? 20 : 100,
  background: (e) => F.secondary,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
F.secondaryContainer = Ae.fromPalette({
  name: "secondary_container",
  palette: (e) => e.secondaryPalette,
  tone: (e) => {
    const t = e.isDark ? 30 : 90;
    return ft(e) ? e.isDark ? 30 : 85 : $i(e) ? bu(e.secondaryPalette.hue, e.secondaryPalette.chroma, t, !e.isDark) : t;
  },
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.secondaryContainer, F.secondary, 10, "nearer", !1)
});
F.onSecondaryContainer = Ae.fromPalette({
  name: "on_secondary_container",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 90 : 10 : $i(e) ? Ae.foregroundTone(F.secondaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
  background: (e) => F.secondaryContainer,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
F.tertiary = Ae.fromPalette({
  name: "tertiary",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 90 : 25 : e.isDark ? 80 : 40,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 7),
  toneDeltaPair: (e) => new Kt(F.tertiaryContainer, F.tertiary, 10, "nearer", !1)
});
F.onTertiary = Ae.fromPalette({
  name: "on_tertiary",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 10 : 90 : e.isDark ? 20 : 100,
  background: (e) => F.tertiary,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
F.tertiaryContainer = Ae.fromPalette({
  name: "tertiary_container",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => {
    if (ft(e)) return e.isDark ? 60 : 49;
    if (!$i(e)) return e.isDark ? 30 : 90;
    const t = e.tertiaryPalette.getHct(e.sourceColorHct.tone);
    return Oa.fixIfDisliked(t).tone;
  },
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.tertiaryContainer, F.tertiary, 10, "nearer", !1)
});
F.onTertiaryContainer = Ae.fromPalette({
  name: "on_tertiary_container",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? e.isDark ? 0 : 100 : $i(e) ? Ae.foregroundTone(F.tertiaryContainer.tone(e), 4.5) : e.isDark ? 90 : 30,
  background: (e) => F.tertiaryContainer,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
F.error = Ae.fromPalette({
  name: "error",
  palette: (e) => e.errorPalette,
  tone: (e) => e.isDark ? 80 : 40,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(3, 4.5, 7, 7),
  toneDeltaPair: (e) => new Kt(F.errorContainer, F.error, 10, "nearer", !1)
});
F.onError = Ae.fromPalette({
  name: "on_error",
  palette: (e) => e.errorPalette,
  tone: (e) => e.isDark ? 20 : 100,
  background: (e) => F.error,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
F.errorContainer = Ae.fromPalette({
  name: "error_container",
  palette: (e) => e.errorPalette,
  tone: (e) => e.isDark ? 30 : 90,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.errorContainer, F.error, 10, "nearer", !1)
});
F.onErrorContainer = Ae.fromPalette({
  name: "on_error_container",
  palette: (e) => e.errorPalette,
  tone: (e) => ft(e) ? e.isDark ? 90 : 10 : e.isDark ? 90 : 30,
  background: (e) => F.errorContainer,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
F.primaryFixed = Ae.fromPalette({
  name: "primary_fixed",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? 40 : 90,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.primaryFixed, F.primaryFixedDim, 10, "lighter", !0)
});
F.primaryFixedDim = Ae.fromPalette({
  name: "primary_fixed_dim",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? 30 : 80,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.primaryFixed, F.primaryFixedDim, 10, "lighter", !0)
});
F.onPrimaryFixed = Ae.fromPalette({
  name: "on_primary_fixed",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? 100 : 10,
  background: (e) => F.primaryFixedDim,
  secondBackground: (e) => F.primaryFixed,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
F.onPrimaryFixedVariant = Ae.fromPalette({
  name: "on_primary_fixed_variant",
  palette: (e) => e.primaryPalette,
  tone: (e) => ft(e) ? 90 : 30,
  background: (e) => F.primaryFixedDim,
  secondBackground: (e) => F.primaryFixed,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
F.secondaryFixed = Ae.fromPalette({
  name: "secondary_fixed",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? 80 : 90,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.secondaryFixed, F.secondaryFixedDim, 10, "lighter", !0)
});
F.secondaryFixedDim = Ae.fromPalette({
  name: "secondary_fixed_dim",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? 70 : 80,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.secondaryFixed, F.secondaryFixedDim, 10, "lighter", !0)
});
F.onSecondaryFixed = Ae.fromPalette({
  name: "on_secondary_fixed",
  palette: (e) => e.secondaryPalette,
  tone: (e) => 10,
  background: (e) => F.secondaryFixedDim,
  secondBackground: (e) => F.secondaryFixed,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
F.onSecondaryFixedVariant = Ae.fromPalette({
  name: "on_secondary_fixed_variant",
  palette: (e) => e.secondaryPalette,
  tone: (e) => ft(e) ? 25 : 30,
  background: (e) => F.secondaryFixedDim,
  secondBackground: (e) => F.secondaryFixed,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
F.tertiaryFixed = Ae.fromPalette({
  name: "tertiary_fixed",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? 40 : 90,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.tertiaryFixed, F.tertiaryFixedDim, 10, "lighter", !0)
});
F.tertiaryFixedDim = Ae.fromPalette({
  name: "tertiary_fixed_dim",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? 30 : 80,
  isBackground: !0,
  background: (e) => F.highestSurface(e),
  contrastCurve: new Ne(1, 1, 3, 4.5),
  toneDeltaPair: (e) => new Kt(F.tertiaryFixed, F.tertiaryFixedDim, 10, "lighter", !0)
});
F.onTertiaryFixed = Ae.fromPalette({
  name: "on_tertiary_fixed",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? 100 : 10,
  background: (e) => F.tertiaryFixedDim,
  secondBackground: (e) => F.tertiaryFixed,
  contrastCurve: new Ne(4.5, 7, 11, 21)
});
F.onTertiaryFixedVariant = Ae.fromPalette({
  name: "on_tertiary_fixed_variant",
  palette: (e) => e.tertiaryPalette,
  tone: (e) => ft(e) ? 90 : 30,
  background: (e) => F.tertiaryFixedDim,
  secondBackground: (e) => F.tertiaryFixed,
  contrastCurve: new Ne(3, 4.5, 7, 11)
});
var pn = class {
  constructor(e) {
    this.sourceColorArgb = e.sourceColorArgb, this.variant = e.variant, this.contrastLevel = e.contrastLevel, this.isDark = e.isDark, this.sourceColorHct = tn.fromInt(e.sourceColorArgb), this.primaryPalette = e.primaryPalette, this.secondaryPalette = e.secondaryPalette, this.tertiaryPalette = e.tertiaryPalette, this.neutralPalette = e.neutralPalette, this.neutralVariantPalette = e.neutralVariantPalette, this.errorPalette = Ye.fromHueAndChroma(25, 84);
  }
  static getRotatedHue(e, t, n) {
    const i = e.hue;
    if (t.length !== n.length) throw new Error(`mismatch between hue length ${t.length} & rotations ${n.length}`);
    if (n.length === 1) return ri(e.hue + n[0]);
    const r = t.length;
    for (let s = 0; s <= r - 2; s++) {
      const a = t[s], o = t[s + 1];
      if (a < i && i < o) return ri(i + n[s]);
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
    return this.getArgb(F.primaryPaletteKeyColor);
  }
  get secondaryPaletteKeyColor() {
    return this.getArgb(F.secondaryPaletteKeyColor);
  }
  get tertiaryPaletteKeyColor() {
    return this.getArgb(F.tertiaryPaletteKeyColor);
  }
  get neutralPaletteKeyColor() {
    return this.getArgb(F.neutralPaletteKeyColor);
  }
  get neutralVariantPaletteKeyColor() {
    return this.getArgb(F.neutralVariantPaletteKeyColor);
  }
  get background() {
    return this.getArgb(F.background);
  }
  get onBackground() {
    return this.getArgb(F.onBackground);
  }
  get surface() {
    return this.getArgb(F.surface);
  }
  get surfaceDim() {
    return this.getArgb(F.surfaceDim);
  }
  get surfaceBright() {
    return this.getArgb(F.surfaceBright);
  }
  get surfaceContainerLowest() {
    return this.getArgb(F.surfaceContainerLowest);
  }
  get surfaceContainerLow() {
    return this.getArgb(F.surfaceContainerLow);
  }
  get surfaceContainer() {
    return this.getArgb(F.surfaceContainer);
  }
  get surfaceContainerHigh() {
    return this.getArgb(F.surfaceContainerHigh);
  }
  get surfaceContainerHighest() {
    return this.getArgb(F.surfaceContainerHighest);
  }
  get onSurface() {
    return this.getArgb(F.onSurface);
  }
  get surfaceVariant() {
    return this.getArgb(F.surfaceVariant);
  }
  get onSurfaceVariant() {
    return this.getArgb(F.onSurfaceVariant);
  }
  get inverseSurface() {
    return this.getArgb(F.inverseSurface);
  }
  get inverseOnSurface() {
    return this.getArgb(F.inverseOnSurface);
  }
  get outline() {
    return this.getArgb(F.outline);
  }
  get outlineVariant() {
    return this.getArgb(F.outlineVariant);
  }
  get shadow() {
    return this.getArgb(F.shadow);
  }
  get scrim() {
    return this.getArgb(F.scrim);
  }
  get surfaceTint() {
    return this.getArgb(F.surfaceTint);
  }
  get primary() {
    return this.getArgb(F.primary);
  }
  get onPrimary() {
    return this.getArgb(F.onPrimary);
  }
  get primaryContainer() {
    return this.getArgb(F.primaryContainer);
  }
  get onPrimaryContainer() {
    return this.getArgb(F.onPrimaryContainer);
  }
  get inversePrimary() {
    return this.getArgb(F.inversePrimary);
  }
  get secondary() {
    return this.getArgb(F.secondary);
  }
  get onSecondary() {
    return this.getArgb(F.onSecondary);
  }
  get secondaryContainer() {
    return this.getArgb(F.secondaryContainer);
  }
  get onSecondaryContainer() {
    return this.getArgb(F.onSecondaryContainer);
  }
  get tertiary() {
    return this.getArgb(F.tertiary);
  }
  get onTertiary() {
    return this.getArgb(F.onTertiary);
  }
  get tertiaryContainer() {
    return this.getArgb(F.tertiaryContainer);
  }
  get onTertiaryContainer() {
    return this.getArgb(F.onTertiaryContainer);
  }
  get error() {
    return this.getArgb(F.error);
  }
  get onError() {
    return this.getArgb(F.onError);
  }
  get errorContainer() {
    return this.getArgb(F.errorContainer);
  }
  get onErrorContainer() {
    return this.getArgb(F.onErrorContainer);
  }
  get primaryFixed() {
    return this.getArgb(F.primaryFixed);
  }
  get primaryFixedDim() {
    return this.getArgb(F.primaryFixedDim);
  }
  get onPrimaryFixed() {
    return this.getArgb(F.onPrimaryFixed);
  }
  get onPrimaryFixedVariant() {
    return this.getArgb(F.onPrimaryFixedVariant);
  }
  get secondaryFixed() {
    return this.getArgb(F.secondaryFixed);
  }
  get secondaryFixedDim() {
    return this.getArgb(F.secondaryFixedDim);
  }
  get onSecondaryFixed() {
    return this.getArgb(F.onSecondaryFixed);
  }
  get onSecondaryFixedVariant() {
    return this.getArgb(F.onSecondaryFixedVariant);
  }
  get tertiaryFixed() {
    return this.getArgb(F.tertiaryFixed);
  }
  get tertiaryFixedDim() {
    return this.getArgb(F.tertiaryFixedDim);
  }
  get onTertiaryFixed() {
    return this.getArgb(F.onTertiaryFixed);
  }
  get onTertiaryFixedVariant() {
    return this.getArgb(F.onTertiaryFixedVariant);
  }
}, Hl = class Ms {
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
    for (let m = 0; m < 360; m++) {
      const _ = bs(i + m), g = this.hctsByHue[_], f = this.relativeTemperature(g), M = Math.abs(f - s);
      s = f, o += M;
    }
    let l = 1;
    const c = o / n;
    let u = 0;
    for (s = this.relativeTemperature(r); a.length < n; ) {
      const m = bs(i + l), _ = this.hctsByHue[m], g = this.relativeTemperature(_), f = Math.abs(g - s);
      u += f;
      const M = a.length * c;
      let b = u >= M, S = 1;
      for (; b && a.length < n; ) {
        a.push(_);
        const E = (a.length + S) * c;
        b = u >= E, S++;
      }
      if (s = g, l++, l > 360) {
        for (; a.length < n; ) a.push(_);
        break;
      }
    }
    const h = [this.input], d = Math.floor((t - 1) / 2);
    for (let m = 1; m < d + 1; m++) {
      let _ = 0 - m;
      for (; _ < 0; ) _ = a.length + _;
      _ >= a.length && (_ = _ % a.length), h.splice(0, 0, a[_]);
    }
    const p = t - d - 1;
    for (let m = 1; m < p + 1; m++) {
      let _ = m;
      for (; _ < 0; ) _ = a.length + _;
      _ >= a.length && (_ = _ % a.length), h.push(a[_]);
    }
    return h;
  }
  get complement() {
    if (this.complementCache != null) return this.complementCache;
    const t = this.coldest.hue, n = this.tempsByHct.get(this.coldest), i = this.warmest.hue, r = this.tempsByHct.get(this.warmest) - n, s = Ms.isBetween(this.input.hue, t, i), a = s ? i : t, o = s ? t : i, l = 1;
    let c = 1e3, u = this.hctsByHue[Math.round(this.input.hue)];
    const h = 1 - this.inputRelativeTemperature;
    for (let d = 0; d <= 360; d += 1) {
      const p = ri(a + l * d);
      if (!Ms.isBetween(p, a, o)) continue;
      const m = this.hctsByHue[Math.round(p)], _ = (this.tempsByHct.get(m) - n) / r, g = Math.abs(h - _);
      g < c && (c = g, u = m);
    }
    return this.complementCache = u, this.complementCache;
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
    for (const i of t) n.set(i, Ms.rawTemperature(i));
    return this.tempsByHctCache = n, n;
  }
  get hctsByHue() {
    if (this.hctsByHueCache.length > 0) return this.hctsByHueCache;
    const t = [];
    for (let n = 0; n <= 360; n += 1) {
      const i = tn.from(n, this.input.chroma, this.input.tone);
      t.push(i);
    }
    return this.hctsByHueCache = t, this.hctsByHueCache;
  }
  static isBetween(t, n, i) {
    return n < i ? n <= t && t <= i : n <= t || t <= i;
  }
  static rawTemperature(t) {
    const n = Mu(t.toInt()), i = ri(Math.atan2(n[2], n[1]) * 180 / Math.PI), r = Math.sqrt(n[1] * n[1] + n[2] * n[2]);
    return -0.5 + 0.02 * Math.pow(r, 1.07) * Math.cos(ri(i - 50) * Math.PI / 180);
  }
}, Eu = class extends pn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: on.CONTENT,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, e.chroma),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, Math.max(e.chroma - 32, e.chroma * 0.5)),
      tertiaryPalette: Ye.fromInt(Oa.fixIfDisliked(new Hl(e).analogous(3, 6)[2]).toInt()),
      neutralPalette: Ye.fromHueAndChroma(e.hue, e.chroma / 8),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, e.chroma / 8 + 4)
    });
  }
}, Os = class gr extends pn {
  constructor(t, n, i) {
    super({
      sourceColorArgb: t.toInt(),
      variant: on.EXPRESSIVE,
      contrastLevel: i,
      isDark: n,
      primaryPalette: Ye.fromHueAndChroma(ri(t.hue + 240), 40),
      secondaryPalette: Ye.fromHueAndChroma(pn.getRotatedHue(t, gr.hues, gr.secondaryRotations), 24),
      tertiaryPalette: Ye.fromHueAndChroma(pn.getRotatedHue(t, gr.hues, gr.tertiaryRotations), 32),
      neutralPalette: Ye.fromHueAndChroma(t.hue + 15, 8),
      neutralVariantPalette: Ye.fromHueAndChroma(t.hue + 15, 12)
    });
  }
};
Os.hues = [
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
Os.secondaryRotations = [
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
Os.tertiaryRotations = [
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
var Au = class extends pn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: on.FIDELITY,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, e.chroma),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, Math.max(e.chroma - 32, e.chroma * 0.5)),
      tertiaryPalette: Ye.fromInt(Oa.fixIfDisliked(new Hl(e).complement).toInt()),
      neutralPalette: Ye.fromHueAndChroma(e.hue, e.chroma / 8),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, e.chroma / 8 + 4)
    });
  }
}, wu = class extends pn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: on.MONOCHROME,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, 0),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, 0),
      tertiaryPalette: Ye.fromHueAndChroma(e.hue, 0),
      neutralPalette: Ye.fromHueAndChroma(e.hue, 0),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, 0)
    });
  }
}, Ru = class extends pn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: on.NEUTRAL,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, 12),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, 8),
      tertiaryPalette: Ye.fromHueAndChroma(e.hue, 16),
      neutralPalette: Ye.fromHueAndChroma(e.hue, 2),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, 2)
    });
  }
}, Cu = class extends pn {
  constructor(e, t, n) {
    super({
      sourceColorArgb: e.toInt(),
      variant: on.TONAL_SPOT,
      contrastLevel: n,
      isDark: t,
      primaryPalette: Ye.fromHueAndChroma(e.hue, 36),
      secondaryPalette: Ye.fromHueAndChroma(e.hue, 16),
      tertiaryPalette: Ye.fromHueAndChroma(ri(e.hue + 60), 24),
      neutralPalette: Ye.fromHueAndChroma(e.hue, 6),
      neutralVariantPalette: Ye.fromHueAndChroma(e.hue, 8)
    });
  }
}, Fs = class vr extends pn {
  constructor(t, n, i) {
    super({
      sourceColorArgb: t.toInt(),
      variant: on.VIBRANT,
      contrastLevel: i,
      isDark: n,
      primaryPalette: Ye.fromHueAndChroma(t.hue, 200),
      secondaryPalette: Ye.fromHueAndChroma(pn.getRotatedHue(t, vr.hues, vr.secondaryRotations), 24),
      tertiaryPalette: Ye.fromHueAndChroma(pn.getRotatedHue(t, vr.hues, vr.tertiaryRotations), 32),
      neutralPalette: Ye.fromHueAndChroma(t.hue, 10),
      neutralVariantPalette: Ye.fromHueAndChroma(t.hue, 12)
    });
  }
};
Fs.hues = [
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
Fs.secondaryRotations = [
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
Fs.tertiaryRotations = [
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
var Pu = {
  desired: 4,
  fallbackColorARGB: 4282549748,
  filter: !0
};
function Lu(e, t) {
  return e.score > t.score ? -1 : e.score < t.score ? 1 : 0;
}
var Zi = class Qn {
  constructor() {
  }
  static score(t, n) {
    const { desired: i, fallbackColorARGB: r, filter: s } = {
      ...Pu,
      ...n
    }, a = [], o = new Array(360).fill(0);
    let l = 0;
    for (const [p, m] of t.entries()) {
      const _ = tn.fromInt(p);
      a.push(_);
      const g = Math.floor(_.hue);
      o[g] += m, l += m;
    }
    const c = new Array(360).fill(0);
    for (let p = 0; p < 360; p++) {
      const m = o[p] / l;
      for (let _ = p - 14; _ < p + 16; _++) {
        const g = bs(_);
        c[g] += m;
      }
    }
    const u = new Array();
    for (const p of a) {
      const m = c[bs(Math.round(p.hue))];
      if (s && (p.chroma < Qn.CUTOFF_CHROMA || m <= Qn.CUTOFF_EXCITED_PROPORTION)) continue;
      const _ = m * 100 * Qn.WEIGHT_PROPORTION, g = p.chroma < Qn.TARGET_CHROMA ? Qn.WEIGHT_CHROMA_BELOW : Qn.WEIGHT_CHROMA_ABOVE, f = _ + (p.chroma - Qn.TARGET_CHROMA) * g;
      u.push({
        hct: p,
        score: f
      });
    }
    u.sort(Lu);
    const h = [];
    for (let p = 90; p >= 15; p--) {
      h.length = 0;
      for (const { hct: m } of u)
        if (h.find((_) => mu(m.hue, _.hue) < p) || h.push(m), h.length >= i) break;
      if (h.length >= i) break;
    }
    const d = [];
    h.length === 0 && d.push(r);
    for (const p of h) d.push(p.toInt());
    return d;
  }
};
Zi.TARGET_CHROMA = 48;
Zi.WEIGHT_PROPORTION = 0.7;
Zi.WEIGHT_CHROMA_ABOVE = 0.3;
Zi.WEIGHT_CHROMA_BELOW = 0.1;
Zi.CUTOFF_CHROMA = 5;
Zi.CUTOFF_EXCITED_PROPORTION = 0.01;
function Iu(e) {
  const t = Da(e), n = Na(e), i = Ua(e), r = [
    t.toString(16),
    n.toString(16),
    i.toString(16)
  ];
  for (const [s, a] of r.entries()) a.length === 1 && (r[s] = "0" + a);
  return "#" + r.join("");
}
function Du(e) {
  e = e.replace("#", "");
  const t = e.length === 3, n = e.length === 6, i = e.length === 8;
  if (!t && !n && !i) throw new Error("unexpected hex " + e);
  let r = 0, s = 0, a = 0;
  return t ? (r = Ln(e.slice(0, 1).repeat(2)), s = Ln(e.slice(1, 2).repeat(2)), a = Ln(e.slice(2, 3).repeat(2))) : n ? (r = Ln(e.slice(0, 2)), s = Ln(e.slice(2, 4)), a = Ln(e.slice(4, 6))) : i && (r = Ln(e.slice(2, 4)), s = Ln(e.slice(4, 6)), a = Ln(e.slice(6, 8))), (255 << 24 | (r & 255) << 16 | (s & 255) << 8 | a & 255) >>> 0;
}
function Ln(e) {
  return parseInt(e, 16);
}
var Gl = [
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
], Nu = {
  accent: "primary",
  "on-accent": "on-primary",
  text: "on-surface",
  "text-muted": "on-surface-variant",
  "surface-subtle": "surface-container",
  border: "outline-variant"
}, Vl = {
  "tonal-spot": Cu,
  fidelity: Au,
  content: Eu,
  vibrant: Fs,
  expressive: Os,
  neutral: Ru,
  monochrome: wu
}, r0 = Object.keys(Vl), Wl = "#2563eb", Uu = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
function Ou(e) {
  return Uu.test(e.trim()) ? null : `seed: expected a hex color (#b85c38), got "${e}"`;
}
var Fu = (e) => e.replace(/-([a-z])/g, (t, n) => n.toUpperCase());
function Xl(e, { dark: t = !1, variant: n = "tonal-spot" } = {}) {
  const i = Ou(e);
  if (i) throw new Error(i);
  const r = e.trim().length === 4 ? `#${[...e.trim().slice(1)].map((o) => o + o).join("")}` : e.trim(), s = new Vl[n](tn.fromInt(Du(r)), t, 0), a = F;
  return Object.fromEntries(Gl.map((o) => [o, Iu(a[Fu(o)].getArgb(s))]));
}
var Bu = [
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
], ku = {
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
}, zu = (e) => e.length === 2 && e.startsWith("h");
function Hu(e) {
  return {
    fontFamily: `var(--font-family-${zu(e) ? "heading" : "body"})`,
    fontSize: `var(--font-size-${e})`,
    fontWeight: `var(--font-weight-${e})`,
    lineHeight: `var(--line-height-${e})`,
    letterSpacing: `var(--letter-spacing-${e})`
  };
}
var ot = (e) => ({ $value: `${e}px` }), Gu = Xl(Wl, { variant: "fidelity" }), Vu = Xl(Wl, {
  variant: "fidelity",
  dark: !0
}), Hr = (e, t) => Object.fromEntries(Bu.map((n) => [n, { $value: `{${e}.${ku[n][t]}}` }])), uo = (e) => Object.fromEntries(Gl.map((t) => [t, { $value: e[t] }])), s0 = {
  tokens: {
    color: {
      $type: "color",
      ...uo(Gu),
      ...Object.fromEntries(Object.entries(Nu).map(([e, t]) => [e, { $value: `{color.${t}}` }]))
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
      ...Hr("font-size", "size"),
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
      ...Hr("font-weight", "weight"),
      regular: { $value: 400 },
      medium: { $value: 500 },
      semibold: { $value: 600 },
      bold: { $value: 700 }
    },
    "line-height": {
      $type: "number",
      ...Hr("line-height", "lineHeight"),
      tight: { $value: 1.15 },
      snug: { $value: 1.3 },
      normal: { $value: 1.5 }
    },
    "letter-spacing": {
      $type: "dimension",
      ...Hr("letter-spacing", "letterSpacing"),
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
  modes: { dark: { color: uo(Vu) } }
}, ql = (e) => new RegExp(`^(?:${e})\\((?:[^()]|\\([^()]*\\))*\\)$`, "i"), Wu = ql("rgba?|hsla?|hwb|lab|lch|oklab|oklch|color|color-mix"), Gr = ql("calc|clamp|min|max"), Vr = /^(?:0|-?(?:\d+|\d*\.\d+)(?:px|rem|em|%))$/, Xu = {
  color: {
    type: "color",
    valid: (e) => /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(e) || Wu.test(e) || /^[a-z]+$/i.test(e),
    expect: "a color (#c2410c, rgb(…), oklch(…), color-mix(…)), not a gradient"
  },
  space: {
    type: "dimension",
    valid: (e) => Vr.test(e) || Gr.test(e),
    expect: "a length (16px, 1rem) or calc()/clamp()"
  },
  radius: {
    type: "dimension",
    valid: (e) => Vr.test(e) || Gr.test(e),
    expect: "a length (12px)"
  },
  "font-size": {
    type: "dimension",
    valid: (e) => Vr.test(e) || Gr.test(e),
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
    valid: (e) => Vr.test(e) || Gr.test(e),
    expect: "a length (-0.02em, 1px)"
  },
  shadow: {
    type: "shadow",
    valid: (e) => e === "none" || /^[a-z0-9#.,%() -]+$/i.test(e),
    expect: "a box-shadow (0 4px 12px rgb(0 0 0 / 0.12))"
  }
}, a0 = Object.keys(Xu), qu = ["heading", "body"], o0 = `set the roles ${qu.map((e) => `font-family.${e}`).join(" and ")} to one, e.g. {font-family.fraunces}`, Yu = {
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  avif: "image/avif"
}, Ku = { glb: "model/gltf-binary" }, l0 = {
  ...Yu,
  ...Ku
}, $u = 10485760, Zu = 2e5;
var ho = /* @__PURE__ */ new Set([
  "box",
  "cylinder",
  "cone",
  "sphere",
  "torus",
  "lathe",
  "ring",
  "capsule",
  "group"
]), Dt = (e) => typeof e == "number" && Number.isFinite(e), ii = (e) => Array.isArray(e) && e.length === 3 && e.every(Dt), Ju = (e) => Array.isArray(e) && e.length === 2 && e.every(Dt), xn = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Qu = /^(?:#[0-9a-f]{3,8}|var\(--[a-z0-9-]+\)|transparent|[a-z]{3,20})$/i;
function Tr(e, t) {
  return e === void 0 ? null : typeof e != "string" || !Qu.test(e.trim()) ? `${t} must be a hex color, "transparent", or a CSS token like var(--color-primary)` : null;
}
function ju(e, t) {
  if (e === void 0) return null;
  if (!xn(e)) return `${t} must be an object`;
  const n = Tr(e.color, `${t}.color`);
  if (n) return n;
  const i = Tr(e.emissive, `${t}.emissive`);
  return i || (e.metalness !== void 0 && (!Dt(e.metalness) || e.metalness < 0 || e.metalness > 1) ? `${t}.metalness must be a number between 0 and 1` : e.roughness !== void 0 && (!Dt(e.roughness) || e.roughness < 0 || e.roughness > 1) ? `${t}.roughness must be a number between 0 and 1` : e.opacity !== void 0 && (!Dt(e.opacity) || e.opacity < 0 || e.opacity > 1) ? `${t}.opacity must be a number between 0 and 1` : e.side !== void 0 && e.side !== "front" && e.side !== "back" && e.side !== "double" ? `${t}.side must be "front", "back", or "double"` : null);
}
function Yl(e, t, n) {
  if (!xn(e)) return `${t} must be an object`;
  if (n.n += 1, n.n > 256) return "Scene has more than 256 parts";
  if (typeof e.type != "string" || !ho.has(e.type)) return `${t}.type must be one of: ${[...ho].join(", ")}`;
  if (e.position !== void 0 && !ii(e.position)) return `${t}.position must be [x, y, z]`;
  if (e.rotation !== void 0 && !ii(e.rotation)) return `${t}.rotation must be [x, y, z]`;
  if (e.scale !== void 0 && !Dt(e.scale) && !ii(e.scale)) return `${t}.scale must be a number or [x, y, z]`;
  if (e.explodeOffset !== void 0 && !ii(e.explodeOffset)) return `${t}.explodeOffset must be [dx, dy, dz]`;
  if (e.spin !== void 0) {
    if (!xn(e.spin)) return `${t}.spin must be an object`;
    if (e.spin.axis !== "x" && e.spin.axis !== "y" && e.spin.axis !== "z") return `${t}.spin.axis must be "x", "y", or "z"`;
    if (!Dt(e.spin.speed) || e.spin.speed < -30 || e.spin.speed > 30) return `${t}.spin.speed must be a number between -30 and 30`;
  }
  if (e.type === "lathe" && (!Array.isArray(e.points) || e.points.length < 2 || !e.points.every(Ju)))
    return `${t}.points must be an array of at least two [radius, y] pairs`;
  if (e.repeat !== void 0) {
    if (!xn(e.repeat)) return `${t}.repeat must be an object`;
    if (!Dt(e.repeat.count) || e.repeat.count < 1 || e.repeat.count > 120) return `${t}.repeat.count must be between 1 and 120`;
    if (e.repeat.axis !== "x" && e.repeat.axis !== "y" && e.repeat.axis !== "z") return `${t}.repeat.axis must be "x", "y", or "z"`;
  }
  const i = ju(e.material, `${t}.material`);
  if (i) return i;
  if (e.children !== void 0) {
    if (!Array.isArray(e.children)) return `${t}.children must be an array`;
    for (let r = 0; r < e.children.length; r++) {
      const s = Yl(e.children[r], `${t}.children[${r}]`, n);
      if (s) return s;
    }
  }
  return null;
}
function eh(e) {
  if (e.length > 2e5) return `3D scene JSON is too large (over ${Zu / 1e3}K characters)`;
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return 'Attribute "data-scene" must be valid JSON';
  }
  if (!xn(t)) return 'Attribute "data-scene" must be a JSON object';
  const n = Tr(t.background, "data-scene.background");
  if (n) return n;
  if (t.camera !== void 0) {
    if (!xn(t.camera)) return "data-scene.camera must be an object";
    if (t.camera.position !== void 0 && !ii(t.camera.position)) return "data-scene.camera.position must be [x, y, z]";
    if (t.camera.target !== void 0 && !ii(t.camera.target)) return "data-scene.camera.target must be [x, y, z]";
    if (t.camera.fov !== void 0 && (!Dt(t.camera.fov) || t.camera.fov < 10 || t.camera.fov > 120)) return "data-scene.camera.fov must be between 10 and 120";
  }
  if (t.clipPlane !== void 0 && (!xn(t.clipPlane) || !ii(t.clipPlane.normal) || !Dt(t.clipPlane.constant)))
    return "data-scene.clipPlane must have { normal: [x,y,z], constant: number }";
  if (t.particles !== void 0) {
    if (!Array.isArray(t.particles) || t.particles.length > 16) return "data-scene.particles must be an array of at most 16 streams";
    for (let r = 0; r < t.particles.length; r++) {
      const s = t.particles[r], a = `data-scene.particles[${r}]`;
      if (!xn(s)) return `${a} must be an object`;
      if (!Dt(s.count) || s.count < 1 || s.count > 600) return `${a}.count must be between 1 and 600`;
      if (!Dt(s.fromX) || !Dt(s.toX) || !Dt(s.innerRadius) || !Dt(s.outerRadius) || !Dt(s.speed)) return `${a} requires numeric fromX, toX, innerRadius, outerRadius, and speed`;
      const o = Tr(s.color, `${a}.color`);
      if (o) return o;
      const l = Tr(s.endColor, `${a}.endColor`);
      if (l) return l;
    }
  }
  if (t.views !== void 0) {
    if (!xn(t.views)) return "data-scene.views must be an object mapping view keys to view presets";
    for (const [r, s] of Object.entries(t.views)) {
      const a = `data-scene.views.${r}`;
      if (!xn(s)) return `${a} must be an object`;
      if (typeof s.label != "string" || !s.label.trim()) return `${a}.label must be a non-empty string`;
      if (typeof s.orbit != "string" || !Fa(s.orbit)) return `${a}.orbit must be "<theta>deg <phi>deg <radius>"`;
      if (s.target !== void 0 && !ii(s.target)) return `${a}.target must be [x, y, z]`;
      if (s.highlight !== void 0 && (!Array.isArray(s.highlight) || !s.highlight.every((o) => typeof o == "string"))) return `${a}.highlight must be an array of strings`;
    }
  }
  if (!Array.isArray(t.parts) || t.parts.length === 0) return "data-scene.parts must be a non-empty array of 3D parts";
  const i = { n: 0 };
  for (let r = 0; r < t.parts.length; r++) {
    const s = Yl(t.parts[r], `data-scene.parts[${r}]`, i);
    if (s) return s;
  }
  return null;
}
function Kl(e) {
  return !e || eh(e) !== null ? null : JSON.parse(e);
}
function th(e) {
  if (!e) return !1;
  if (e.autoRotate || e.particles && e.particles.length > 0) return !0;
  const t = (n) => n.some((i) => !!i.spin || (i.children ? t(i.children) : !1));
  return t(e.parts);
}
function nh(e) {
  if (!e) return !1;
  const t = (n) => n.some((i) => !!i.explodeOffset || (i.children ? t(i.children) : !1));
  return t(e.parts);
}
function Fa(e) {
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
var c0 = Math.ceil($u / 3) * 4, u0 = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-6)",
  padding: "var(--space-8)",
  backgroundColor: "var(--color-surface)",
  color: "var(--color-on-surface)",
  ...Hu("body-md")
};
var ih = "attached";
var Es = 1e3, bn = 1001, As = 1002, Nt = 1003, $l = 1004, Zl = 1005, an = 1006, Jl = 1007, Ur = 1008, si = 1009, rh = 1010, sh = 1011, Ql = 1012, ah = 1013, vi = 1014, Ji = 1015, ai = 1016, jl = 1017, ec = 1018, Ba = 1020, oh = 35902, lh = 35899, ch = 1021, uh = 1022, wr = 1023, Rr = 1026, ws = 1027, tc = 1028, nc = 1029, Rs = 1030, ic = 1031, rc = 1033, hh = 33776, dh = 33777, fh = 33778, ph = 33779, mh = 35840, gh = 35841, vh = 35842, _h = 35843, Mh = 36196, Sh = 37492, yh = 37496, xh = 37488, Th = 37489, bh = 37490, Eh = 37491, Ah = 37808, wh = 37809, Rh = 37810, Ch = 37811, Ph = 37812, Lh = 37813, Ih = 37814, Dh = 37815, Nh = 37816, Uh = 37817, Oh = 37818, Fh = 37819, Bh = 37820, kh = 37821, zh = 36492, Hh = 36494, Gh = 36495, Vh = 36283, Wh = 36284, Xh = 36285, qh = 36286, Cr = 2300, Pr = 2301, Ws = 2302, fo = 2303, po = 2400, mo = 2401, go = 2402, Yh = 2500, Kh = 3200;
var At = "srgb", mn = "srgb-linear", Cs = "linear", Ps = "srgb", Xs = 7680;
var sc = 35044;
var _i = 2e3;
function $h(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
  return !1;
}
function Zh(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Lr(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function Jh() {
  const e = Lr("canvas");
  return e.style.display = "block", e;
}
var vo = {}, Vi = null;
function Ls(...e) {
  const t = "THREE." + e.shift();
  Vi ? Vi("log", t, ...e) : console.log(t, ...e);
}
function ac(e) {
  const t = e[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    const n = e[1];
    n && n.isStackTrace ? e[0] += " " + n.getLocation() : e[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return e;
}
function Ee(...e) {
  e = ac(e);
  const t = "THREE." + e.shift();
  if (Vi) Vi("warn", t, ...e);
  else {
    const n = e[0];
    n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
  }
}
function De(...e) {
  e = ac(e);
  const t = "THREE." + e.shift();
  if (Vi) Vi("error", t, ...e);
  else {
    const n = e[0];
    n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
  }
}
function zi(...e) {
  const t = e.join(" ");
  t in vo || (vo[t] = !0, Ee(...e));
}
function Qh(e, t, n) {
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
var jh = {
  0: 0,
  2: 6,
  4: 4,
  3: 5,
  1: 1,
  6: 2,
  7: 7,
  5: 3
}, yi = class {
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
], _o = 1234567, br = Math.PI / 180, Wi = 180 / Math.PI;
function wn() {
  const e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Lt[e & 255] + Lt[e >> 8 & 255] + Lt[e >> 16 & 255] + Lt[e >> 24 & 255] + "-" + Lt[t & 255] + Lt[t >> 8 & 255] + "-" + Lt[t >> 16 & 15 | 64] + Lt[t >> 24 & 255] + "-" + Lt[n & 63 | 128] + Lt[n >> 8 & 255] + "-" + Lt[n >> 16 & 255] + Lt[n >> 24 & 255] + Lt[i & 255] + Lt[i >> 8 & 255] + Lt[i >> 16 & 255] + Lt[i >> 24 & 255]).toLowerCase();
}
function Xe(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ka(e, t) {
  return (e % t + t) % t;
}
function ed(e, t, n, i, r) {
  return i + (e - t) * (r - i) / (n - t);
}
function td(e, t, n) {
  return e !== t ? (n - e) / (t - e) : 0;
}
function Er(e, t, n) {
  return (1 - n) * e + n * t;
}
function nd(e, t, n, i) {
  return Er(e, t, 1 - Math.exp(-n * i));
}
function id(e, t = 1) {
  return t - Math.abs(ka(e, t * 2) - t);
}
function rd(e, t, n) {
  return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function sd(e, t, n) {
  return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function ad(e, t) {
  return e + Math.floor(Math.random() * (t - e + 1));
}
function od(e, t) {
  return e + Math.random() * (t - e);
}
function ld(e) {
  return e * (0.5 - Math.random());
}
function cd(e) {
  e !== void 0 && (_o = e);
  let t = _o += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function ud(e) {
  return e * br;
}
function hd(e) {
  return e * Wi;
}
function dd(e) {
  return e > 0 && Number.isInteger(e) && 2 ** Math.round(Math.log2(e)) === e;
}
function fd(e) {
  return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2));
}
function oc(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}
function pd(e, t, n, i, r) {
  const s = Math.cos, a = Math.sin, o = s(n / 2), l = a(n / 2), c = s((t + i) / 2), u = a((t + i) / 2), h = s((t - i) / 2), d = a((t - i) / 2), p = s((i - t) / 2), m = a((i - t) / 2);
  switch (r) {
    case "XYX":
      e.set(o * u, l * h, l * d, o * c);
      break;
    case "YZY":
      e.set(l * d, o * u, l * h, o * c);
      break;
    case "ZXZ":
      e.set(l * h, l * d, o * u, o * c);
      break;
    case "XZX":
      e.set(o * u, l * m, l * p, o * c);
      break;
    case "YXY":
      e.set(l * p, o * u, l * m, o * c);
      break;
    case "ZYZ":
      e.set(l * m, l * p, o * u, o * c);
      break;
    default:
      Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function Bs(e) {
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
function za(e, t) {
  if (t.constructor === Float32Array) return e;
  const n = Bs(t);
  if (n === void 0) throw new Error("THREE.MathUtils: Invalid component type.");
  return Math.max(e / n, -1);
}
function Ha(e, t) {
  if (t.constructor === Float32Array) return e;
  const n = Bs(t);
  if (n === void 0) throw new Error("THREE.MathUtils: Invalid component type.");
  return Math.round(e * n);
}
var md = {
  DEG2RAD: br,
  RAD2DEG: Wi,
  generateUUID: wn,
  clamp: Xe,
  euclideanModulo: ka,
  mapLinear: ed,
  inverseLerp: td,
  lerp: Er,
  damp: nd,
  pingpong: id,
  smoothstep: rd,
  smootherstep: sd,
  randInt: ad,
  randFloat: od,
  randFloatSpread: ld,
  seededRandom: cd,
  degToRad: ud,
  radToDeg: hd,
  isPowerOfTwo: dd,
  ceilPowerOfTwo: fd,
  floorPowerOfTwo: oc,
  setQuaternionFromProperEuler: pd,
  normalize: Ha,
  denormalize: za
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
}, Gn = class {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, s, a) {
    let o = n[i + 0], l = n[i + 1], c = n[i + 2], u = n[i + 3], h = r[s + 0], d = r[s + 1], p = r[s + 2], m = r[s + 3];
    if (u !== m || o !== h || l !== d || c !== p) {
      let _ = o * h + l * d + c * p + u * m;
      _ < 0 && (h = -h, d = -d, p = -p, m = -m, _ = -_);
      let g = 1 - a;
      if (_ < 0.9995) {
        const f = Math.acos(_), M = Math.sin(f);
        g = Math.sin(g * f) / M, a = Math.sin(a * f) / M, o = o * g + h * a, l = l * g + d * a, c = c * g + p * a, u = u * g + m * a;
      } else {
        o = o * g + h * a, l = l * g + d * a, c = c * g + p * a, u = u * g + m * a;
        const f = 1 / Math.sqrt(o * o + l * l + c * c + u * u);
        o *= f, l *= f, c *= f, u *= f;
      }
    }
    e[t] = o, e[t + 1] = l, e[t + 2] = c, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, s) {
    const a = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], u = r[s], h = r[s + 1], d = r[s + 2], p = r[s + 3];
    return e[t] = a * p + c * u + o * d - l * h, e[t + 1] = o * p + c * h + l * u - a * d, e[t + 2] = l * p + c * d + a * h - o * u, e[t + 3] = c * p - a * u - o * h - l * d, e;
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
    const n = e._x, i = e._y, r = e._z, s = e._order, a = Math.cos, o = Math.sin, l = a(n / 2), c = a(i / 2), u = a(r / 2), h = o(n / 2), d = o(i / 2), p = o(r / 2);
    switch (s) {
      case "XYZ":
        this._x = h * c * u + l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u - h * d * p;
        break;
      case "YXZ":
        this._x = h * c * u + l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u + h * d * p;
        break;
      case "ZXY":
        this._x = h * c * u - l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u - h * d * p;
        break;
      case "ZYX":
        this._x = h * c * u - l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u + h * d * p;
        break;
      case "YZX":
        this._x = h * c * u + l * d * p, this._y = l * d * u + h * c * p, this._z = l * c * p - h * d * u, this._w = l * c * u - h * d * p;
        break;
      case "XZY":
        this._x = h * c * u - l * d * p, this._y = l * d * u - h * c * p, this._z = l * c * p + h * d * u, this._w = l * c * u + h * d * p;
        break;
      default:
        Ee("Quaternion: .setFromEuler() encountered an unknown order: " + s);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], r = t[8], s = t[1], a = t[5], o = t[9], l = t[2], c = t[6], u = t[10], h = n + a + u;
    if (h > 0) {
      const d = 0.5 / Math.sqrt(h + 1);
      this._w = 0.25 / d, this._x = (c - o) * d, this._y = (r - l) * d, this._z = (s - i) * d;
    } else if (n > a && n > u) {
      const d = 2 * Math.sqrt(1 + n - a - u);
      this._w = (c - o) / d, this._x = 0.25 * d, this._y = (i + s) / d, this._z = (r + l) / d;
    } else if (a > u) {
      const d = 2 * Math.sqrt(1 + a - n - u);
      this._w = (r - l) / d, this._x = (i + s) / d, this._y = 0.25 * d, this._z = (o + c) / d;
    } else {
      const d = 2 * Math.sqrt(1 + u - n - a);
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
}, z = class {
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
    return this.applyQuaternion(Mo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Mo.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, i = this.z, r = e.x, s = e.y, a = e.z, o = e.w, l = 2 * (s * i - a * n), c = 2 * (a * t - r * i), u = 2 * (r * n - s * t);
    return this.x = t + o * l + s * u - a * c, this.y = n + o * c + a * l - r * u, this.z = i + o * u + r * c - s * l, this;
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
    return qs.copy(this).projectOnVector(e), this.sub(qs);
  }
  reflect(e) {
    return this.sub(qs.copy(e).multiplyScalar(2 * this.dot(e)));
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
}, qs = /* @__PURE__ */ new z(), Mo = /* @__PURE__ */ new Gn(), Be = class {
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
    const n = e.elements, i = t.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l = n[1], c = n[4], u = n[7], h = n[2], d = n[5], p = n[8], m = i[0], _ = i[3], g = i[6], f = i[1], M = i[4], b = i[7], S = i[2], E = i[5], A = i[8];
    return r[0] = s * m + a * f + o * S, r[3] = s * _ + a * M + o * E, r[6] = s * g + a * b + o * A, r[1] = l * m + c * f + u * S, r[4] = l * _ + c * M + u * E, r[7] = l * g + c * b + u * A, r[2] = h * m + d * f + p * S, r[5] = h * _ + d * M + p * E, r[8] = h * g + d * b + p * A, this;
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], s = e[4], a = e[5], o = e[6], l = e[7], c = e[8], u = c * s - a * l, h = a * o - c * r, d = l * r - s * o, p = t * u + n * h + i * d;
    if (p === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const m = 1 / p;
    return e[0] = u * m, e[1] = (i * l - c * n) * m, e[2] = (a * n - i * s) * m, e[3] = h * m, e[4] = (c * t - i * o) * m, e[5] = (i * r - a * t) * m, e[6] = d * m, e[7] = (n * o - l * t) * m, e[8] = (s * t - n * r) * m, this;
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
    return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(Ys.makeScale(e, t)), this;
  }
  rotate(e) {
    return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(Ys.makeRotation(-e)), this;
  }
  translate(e, t) {
    return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(Ys.makeTranslation(e, t)), this;
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
}, Ys = /* @__PURE__ */ new Be(), So = /* @__PURE__ */ new Be().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), yo = /* @__PURE__ */ new Be().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function gd() {
  const e = {
    enabled: !0,
    workingColorSpace: mn,
    spaces: {},
    convert: function(r, s, a) {
      return this.enabled === !1 || s === a || !s || !a || (this.spaces[s].transfer === "srgb" && (r.r = Hn(r.r), r.g = Hn(r.g), r.b = Hn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === "srgb" && (r.r = Hi(r.r), r.g = Hi(r.g), r.b = Hi(r.b))), r;
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
      return r === "" ? Cs : this.spaces[r].transfer;
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
    [mn]: {
      primaries: t,
      whitePoint: i,
      transfer: Cs,
      toXYZ: So,
      fromXYZ: yo,
      luminanceCoefficients: n,
      workingColorSpaceConfig: { unpackColorSpace: At },
      outputColorSpaceConfig: { drawingBufferColorSpace: At }
    },
    [At]: {
      primaries: t,
      whitePoint: i,
      transfer: Ps,
      toXYZ: So,
      fromXYZ: yo,
      luminanceCoefficients: n,
      outputColorSpaceConfig: { drawingBufferColorSpace: At }
    }
  }), e;
}
var qe = /* @__PURE__ */ gd();
function Hn(e) {
  return e < 0.04045 ? e * 0.0773993808 : Math.pow(e * 0.9478672986 + 0.0521327014, 2.4);
}
function Hi(e) {
  return e < 31308e-7 ? e * 12.92 : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
var xi, vd = class {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      xi === void 0 && (xi = Lr("canvas")), xi.width = e.width, xi.height = e.height;
      const i = xi.getContext("2d");
      e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), n = xi;
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Lr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let s = 0; s < r.length; s++) r[s] = Hn(r[s] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Hn(t[n] / 255) * 255) : t[n] = Hn(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}, _d = 0, Ga = class {
  constructor(e = null) {
    this.isTextureSource = !0, Object.defineProperty(this, "id", { value: _d++ }), this.uuid = wn(), this.data = e, this.dataReady = !0, this.version = 0;
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
        for (let s = 0, a = i.length; s < a; s++) i[s].isDataTexture ? r.push(Ks(i[s].image)) : r.push(Ks(i[s]));
      } else r = Ks(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
};
function Ks(e) {
  return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? vd.getDataURL(e) : e.data ? {
    data: Array.from(e.data),
    width: e.width,
    height: e.height,
    type: e.data.constructor.name
  } : (Ee("Texture: Unable to serialize Texture."), {});
}
var Md = 0, $s = /* @__PURE__ */ new z(), Ht = class Ss extends yi {
  constructor(t = Ss.DEFAULT_IMAGE, n = Ss.DEFAULT_MAPPING, i = bn, r = bn, s = an, a = Ur, o = wr, l = si, c = Ss.DEFAULT_ANISOTROPY, u = "") {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Md++ }), this.uuid = wn(), this.name = "", this.source = new Ga(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new ke(0, 0), this.repeat = new ke(1, 1), this.center = new ke(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Be(), this.generateMipmaps = !0, this.mipmapsAutoUpdate = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = !1, this.normalized = !1;
  }
  get width() {
    return this.source.getSize($s).x;
  }
  get height() {
    return this.source.getSize($s).y;
  }
  get depth() {
    return this.source.getSize($s).z;
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
        Ee(`Texture.setValues(): parameter '${n}' has value of undefined.`);
        continue;
      }
      const r = this[n];
      if (r === void 0) {
        Ee(`Texture.setValues(): property '${n}' does not exist.`);
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
      case Es:
        t.x = t.x - Math.floor(t.x);
        break;
      case bn:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case As:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case Es:
        t.y = t.y - Math.floor(t.y);
        break;
      case bn:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case As:
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
Ht.DEFAULT_IMAGE = null;
Ht.DEFAULT_MAPPING = 300;
Ht.DEFAULT_ANISOTROPY = 1;
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
    const o = e.elements, l = o[0], c = o[4], u = o[8], h = o[1], d = o[5], p = o[9], m = o[2], _ = o[6], g = o[10];
    if (Math.abs(c - h) < 0.01 && Math.abs(u - m) < 0.01 && Math.abs(p - _) < 0.01) {
      if (Math.abs(c + h) < 0.1 && Math.abs(u + m) < 0.1 && Math.abs(p + _) < 0.1 && Math.abs(l + d + g - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (l + 1) / 2, b = (d + 1) / 2, S = (g + 1) / 2, E = (c + h) / 4, A = (u + m) / 4, v = (p + _) / 4;
      return M > b && M > S ? M < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(M), i = E / n, r = A / n) : b > S ? b < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(b), n = E / i, r = v / i) : S < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(S), n = A / r, i = v / r), this.set(n, i, r, t), this;
    }
    let f = Math.sqrt((_ - p) * (_ - p) + (u - m) * (u - m) + (h - c) * (h - c));
    return Math.abs(f) < 1e-3 && (f = 1), this.x = (_ - p) / f, this.y = (u - m) / f, this.z = (h - c) / f, this.w = Math.acos((l + d + g - 1) / 2), this;
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
}, Sd = class extends yi {
  constructor(e = 1, t = 1, n = {}) {
    super(), n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: an,
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
      this.textures[r] = new Ht({
        width: e,
        height: t,
        depth: n.depth
      }), this.textures[r].isRenderTargetTexture = !0, this.textures[r].renderTarget = this;
    this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveColorBuffer = n.resolveColorBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.storeMultisampledColorBuffer = n.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = n.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = n.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: an,
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
      this.textures[t].source = new Ga(i);
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
}, En = class extends Sd {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = !0;
  }
}, lc = class extends Ht {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = Nt, this.minFilter = Nt, this.wrapR = bn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
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
}, yd = class extends Ht {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = {
      data: e,
      width: t,
      height: n,
      depth: i
    }, this.magFilter = Nt, this.minFilter = Nt, this.wrapR = bn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
  copy(e) {
    return super.copy(e), this.wrapR = e.wrapR, this;
  }
}, Ge = class cc {
  static {
    this.prototype.isMatrix4 = !0;
  }
  constructor(t, n, i, r, s, a, o, l, c, u, h, d, p, m, _, g) {
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
    ], t !== void 0 && this.set(t, n, i, r, s, a, o, l, c, u, h, d, p, m, _, g);
  }
  set(t, n, i, r, s, a, o, l, c, u, h, d, p, m, _, g) {
    const f = this.elements;
    return f[0] = t, f[4] = n, f[8] = i, f[12] = r, f[1] = s, f[5] = a, f[9] = o, f[13] = l, f[2] = c, f[6] = u, f[10] = h, f[14] = d, f[3] = p, f[7] = m, f[11] = _, f[15] = g, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new cc().fromArray(this.elements);
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
    const n = this.elements, i = t.elements, r = 1 / Ti.setFromMatrixColumn(t, 0).length(), s = 1 / Ti.setFromMatrixColumn(t, 1).length(), a = 1 / Ti.setFromMatrixColumn(t, 2).length();
    return n[0] = i[0] * r, n[1] = i[1] * r, n[2] = i[2] * r, n[3] = 0, n[4] = i[4] * s, n[5] = i[5] * s, n[6] = i[6] * s, n[7] = 0, n[8] = i[8] * a, n[9] = i[9] * a, n[10] = i[10] * a, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const n = this.elements, i = t.x, r = t.y, s = t.z, a = Math.cos(i), o = Math.sin(i), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), h = Math.sin(s);
    if (t.order === "XYZ") {
      const d = a * u, p = a * h, m = o * u, _ = o * h;
      n[0] = l * u, n[4] = -l * h, n[8] = c, n[1] = p + m * c, n[5] = d - _ * c, n[9] = -o * l, n[2] = _ - d * c, n[6] = m + p * c, n[10] = a * l;
    } else if (t.order === "YXZ") {
      const d = l * u, p = l * h, m = c * u, _ = c * h;
      n[0] = d + _ * o, n[4] = m * o - p, n[8] = a * c, n[1] = a * h, n[5] = a * u, n[9] = -o, n[2] = p * o - m, n[6] = _ + d * o, n[10] = a * l;
    } else if (t.order === "ZXY") {
      const d = l * u, p = l * h, m = c * u, _ = c * h;
      n[0] = d - _ * o, n[4] = -a * h, n[8] = m + p * o, n[1] = p + m * o, n[5] = a * u, n[9] = _ - d * o, n[2] = -a * c, n[6] = o, n[10] = a * l;
    } else if (t.order === "ZYX") {
      const d = a * u, p = a * h, m = o * u, _ = o * h;
      n[0] = l * u, n[4] = m * c - p, n[8] = d * c + _, n[1] = l * h, n[5] = _ * c + d, n[9] = p * c - m, n[2] = -c, n[6] = o * l, n[10] = a * l;
    } else if (t.order === "YZX") {
      const d = a * l, p = a * c, m = o * l, _ = o * c;
      n[0] = l * u, n[4] = _ - d * h, n[8] = m * h + p, n[1] = h, n[5] = a * u, n[9] = -o * u, n[2] = -c * u, n[6] = p * h + m, n[10] = d - _ * h;
    } else if (t.order === "XZY") {
      const d = a * l, p = a * c, m = o * l, _ = o * c;
      n[0] = l * u, n[4] = -h, n[8] = c * u, n[1] = d * h + _, n[5] = a * u, n[9] = p * h - m, n[2] = m * h - p, n[6] = o * u, n[10] = _ * h + d;
    }
    return n[3] = 0, n[7] = 0, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(xd, t, Td);
  }
  lookAt(t, n, i) {
    const r = this.elements;
    return Jt.subVectors(t, n), Jt.lengthSq() === 0 && (Jt.z = 1), Jt.normalize(), Wn.crossVectors(i, Jt), Wn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Jt.x += 1e-4 : Jt.z += 1e-4, Jt.normalize(), Wn.crossVectors(i, Jt)), Wn.normalize(), Wr.crossVectors(Jt, Wn), r[0] = Wn.x, r[4] = Wr.x, r[8] = Jt.x, r[1] = Wn.y, r[5] = Wr.y, r[9] = Jt.y, r[2] = Wn.z, r[6] = Wr.z, r[10] = Jt.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, n) {
    const i = t.elements, r = n.elements, s = this.elements, a = i[0], o = i[4], l = i[8], c = i[12], u = i[1], h = i[5], d = i[9], p = i[13], m = i[2], _ = i[6], g = i[10], f = i[14], M = i[3], b = i[7], S = i[11], E = i[15], A = r[0], v = r[4], T = r[8], R = r[12], U = r[1], C = r[5], N = r[9], q = r[13], L = r[2], H = r[6], $ = r[10], B = r[14], ae = r[3], Y = r[7], k = r[11], Q = r[15];
    return s[0] = a * A + o * U + l * L + c * ae, s[4] = a * v + o * C + l * H + c * Y, s[8] = a * T + o * N + l * $ + c * k, s[12] = a * R + o * q + l * B + c * Q, s[1] = u * A + h * U + d * L + p * ae, s[5] = u * v + h * C + d * H + p * Y, s[9] = u * T + h * N + d * $ + p * k, s[13] = u * R + h * q + d * B + p * Q, s[2] = m * A + _ * U + g * L + f * ae, s[6] = m * v + _ * C + g * H + f * Y, s[10] = m * T + _ * N + g * $ + f * k, s[14] = m * R + _ * q + g * B + f * Q, s[3] = M * A + b * U + S * L + E * ae, s[7] = M * v + b * C + S * H + E * Y, s[11] = M * T + b * N + S * $ + E * k, s[15] = M * R + b * q + S * B + E * Q, this;
  }
  multiplyScalar(t) {
    const n = this.elements;
    return n[0] *= t, n[4] *= t, n[8] *= t, n[12] *= t, n[1] *= t, n[5] *= t, n[9] *= t, n[13] *= t, n[2] *= t, n[6] *= t, n[10] *= t, n[14] *= t, n[3] *= t, n[7] *= t, n[11] *= t, n[15] *= t, this;
  }
  determinant() {
    const t = this.elements, n = t[0], i = t[4], r = t[8], s = t[12], a = t[1], o = t[5], l = t[9], c = t[13], u = t[2], h = t[6], d = t[10], p = t[14], m = t[3], _ = t[7], g = t[11], f = t[15], M = l * p - c * d, b = o * p - c * h, S = o * d - l * h, E = a * p - c * u, A = a * d - l * u, v = a * h - o * u;
    return n * (_ * M - g * b + f * S) - i * (m * M - g * E + f * A) + r * (m * b - _ * E + f * v) - s * (m * S - _ * A + g * v);
  }
  determinantAffine() {
    const t = this.elements, n = t[0], i = t[4], r = t[8], s = t[1], a = t[5], o = t[9], l = t[2], c = t[6], u = t[10];
    return n * (a * u - o * c) - i * (s * u - o * l) + r * (s * c - a * l);
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
    const t = this.elements, n = t[0], i = t[1], r = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], u = t[8], h = t[9], d = t[10], p = t[11], m = t[12], _ = t[13], g = t[14], f = t[15], M = n * o - i * a, b = n * l - r * a, S = n * c - s * a, E = i * l - r * o, A = i * c - s * o, v = r * c - s * l, T = u * _ - h * m, R = u * g - d * m, U = u * f - p * m, C = h * g - d * _, N = h * f - p * _, q = d * f - p * g, L = M * q - b * N + S * C + E * U - A * R + v * T;
    if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const H = 1 / L;
    return t[0] = (o * q - l * N + c * C) * H, t[1] = (r * N - i * q - s * C) * H, t[2] = (_ * v - g * A + f * E) * H, t[3] = (d * A - h * v - p * E) * H, t[4] = (l * U - a * q - c * R) * H, t[5] = (n * q - r * U + s * R) * H, t[6] = (g * S - m * v - f * b) * H, t[7] = (u * v - d * S + p * b) * H, t[8] = (a * N - o * U + c * T) * H, t[9] = (i * U - n * N - s * T) * H, t[10] = (m * A - _ * S + f * M) * H, t[11] = (h * S - u * A - p * M) * H, t[12] = (o * R - a * C - l * T) * H, t[13] = (n * C - i * R + r * T) * H, t[14] = (_ * b - m * E - g * M) * H, t[15] = (u * E - h * b + d * M) * H, this;
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
    const i = Math.cos(n), r = Math.sin(n), s = 1 - i, a = t.x, o = t.y, l = t.z, c = s * a, u = s * o;
    return this.set(c * a + i, c * o - r * l, c * l + r * o, 0, c * o + r * l, u * o + i, u * l - r * a, 0, c * l - r * o, u * l + r * a, s * l * l + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, n, i) {
    return this.set(t, 0, 0, 0, 0, n, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, n, i, r, s, a) {
    return this.set(1, i, s, 0, t, 1, a, 0, n, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, n, i) {
    const r = this.elements, s = n._x, a = n._y, o = n._z, l = n._w, c = s + s, u = a + a, h = o + o, d = s * c, p = s * u, m = s * h, _ = a * u, g = a * h, f = o * h, M = l * c, b = l * u, S = l * h, E = i.x, A = i.y, v = i.z;
    return r[0] = (1 - (_ + f)) * E, r[1] = (p + S) * E, r[2] = (m - b) * E, r[3] = 0, r[4] = (p - S) * A, r[5] = (1 - (d + f)) * A, r[6] = (g + M) * A, r[7] = 0, r[8] = (m + b) * v, r[9] = (g - M) * v, r[10] = (1 - (d + _)) * v, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, n, i) {
    const r = this.elements;
    t.x = r[12], t.y = r[13], t.z = r[14];
    const s = this.determinantAffine();
    if (s === 0)
      return i.set(1, 1, 1), n.identity(), this;
    let a = Ti.set(r[0], r[1], r[2]).length();
    const o = Ti.set(r[4], r[5], r[6]).length(), l = Ti.set(r[8], r[9], r[10]).length();
    s < 0 && (a = -a), hn.copy(this);
    const c = 1 / a, u = 1 / o, h = 1 / l;
    return hn.elements[0] *= c, hn.elements[1] *= c, hn.elements[2] *= c, hn.elements[4] *= u, hn.elements[5] *= u, hn.elements[6] *= u, hn.elements[8] *= h, hn.elements[9] *= h, hn.elements[10] *= h, n.setFromRotationMatrix(hn), i.x = a, i.y = o, i.z = l, this;
  }
  makePerspective(t, n, i, r, s, a, o = _i, l = !1) {
    const c = this.elements, u = 2 * s / (n - t), h = 2 * s / (i - r), d = (n + t) / (n - t), p = (i + r) / (i - r);
    let m, _;
    if (l)
      m = s / (a - s), _ = a * s / (a - s);
    else if (o === 2e3)
      m = -(a + s) / (a - s), _ = -2 * a * s / (a - s);
    else if (o === 2001)
      m = -a / (a - s), _ = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = u, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = h, c[9] = p, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = m, c[14] = _, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(t, n, i, r, s, a, o = _i, l = !1) {
    const c = this.elements, u = 2 / (n - t), h = 2 / (i - r), d = -(n + t) / (n - t), p = -(i + r) / (i - r);
    let m, _;
    if (l)
      m = 1 / (a - s), _ = a / (a - s);
    else if (o === 2e3)
      m = -2 / (a - s), _ = -(a + s) / (a - s);
    else if (o === 2001)
      m = -1 / (a - s), _ = -s / (a - s);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = u, c[4] = 0, c[8] = 0, c[12] = d, c[1] = 0, c[5] = h, c[9] = 0, c[13] = p, c[2] = 0, c[6] = 0, c[10] = m, c[14] = _, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
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
}, Ti = /* @__PURE__ */ new z(), hn = /* @__PURE__ */ new Ge(), xd = /* @__PURE__ */ new z(0, 0, 0), Td = /* @__PURE__ */ new z(1, 1, 1), Wn = /* @__PURE__ */ new z(), Wr = /* @__PURE__ */ new z(), Jt = /* @__PURE__ */ new z(), xo = /* @__PURE__ */ new Ge(), To = /* @__PURE__ */ new Gn(), Xi = class uc {
  constructor(t = 0, n = 0, i = 0, r = uc.DEFAULT_ORDER) {
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
    const r = t.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], u = r[9], h = r[2], d = r[6], p = r[10];
    switch (n) {
      case "XYZ":
        this._y = Math.asin(Xe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Xe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Xe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Xe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Xe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-h, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Xe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, p), this._y = 0);
        break;
      default:
        Ee("Euler: .setFromRotationMatrix() encountered an unknown order: " + n);
    }
    return this._order = n, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, n, i) {
    return xo.makeRotationFromQuaternion(t), this.setFromRotationMatrix(xo, n, i);
  }
  setFromVector3(t, n = this._order) {
    return this.set(t.x, t.y, t.z, n);
  }
  reorder(t) {
    return To.setFromEuler(this), this.setFromQuaternion(To, t);
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
Xi.DEFAULT_ORDER = "XYZ";
var hc = class {
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
}, bd = 0, bo = /* @__PURE__ */ new z(), bi = /* @__PURE__ */ new Gn(), In = /* @__PURE__ */ new Ge(), Xr = /* @__PURE__ */ new z(), rr = /* @__PURE__ */ new z(), Ed = /* @__PURE__ */ new z(), Ad = /* @__PURE__ */ new Gn(), Eo = /* @__PURE__ */ new z(1, 0, 0), Ao = /* @__PURE__ */ new z(0, 1, 0), wo = /* @__PURE__ */ new z(0, 0, 1), Ro = { type: "added" }, wd = { type: "removed" }, Ei = {
  type: "childadded",
  child: null
}, Zs = {
  type: "childremoved",
  child: null
}, _t = class ys extends yi {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: bd++ }), this.uuid = wn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ys.DEFAULT_UP.clone();
    const t = new z(), n = new Xi(), i = new Gn(), r = new z(1, 1, 1);
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
    }), this.matrix = new Ge(), this.matrixWorld = new Ge(), this.matrixAutoUpdate = ys.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ys.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new hc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
    return bi.setFromAxisAngle(t, n), this.quaternion.multiply(bi), this;
  }
  rotateOnWorldAxis(t, n) {
    return bi.setFromAxisAngle(t, n), this.quaternion.premultiply(bi), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(Eo, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Ao, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(wo, t);
  }
  translateOnAxis(t, n) {
    return bo.copy(t).applyQuaternion(this.quaternion), this.position.add(bo.multiplyScalar(n)), this;
  }
  translateX(t) {
    return this.translateOnAxis(Eo, t);
  }
  translateY(t) {
    return this.translateOnAxis(Ao, t);
  }
  translateZ(t) {
    return this.translateOnAxis(wo, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(In.copy(this.matrixWorld).invert());
  }
  lookAt(t, n, i) {
    t.isVector3 ? Xr.copy(t) : Xr.set(t, n, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), rr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? In.lookAt(rr, Xr, this.up) : In.lookAt(Xr, rr, this.up), this.quaternion.setFromRotationMatrix(In), r && (In.extractRotation(r.matrixWorld), bi.setFromRotationMatrix(In), this.quaternion.premultiply(bi.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.add(arguments[n]);
      return this;
    }
    return t === this ? (De("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Ro), Ei.child = t, this.dispatchEvent(Ei), Ei.child = null) : De("Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const n = this.children.indexOf(t);
    return n !== -1 && (t.parent = null, this.children.splice(n, 1), t.dispatchEvent(wd), Zs.child = t, this.dispatchEvent(Zs), Zs.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), In.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), In.multiply(t.parent.matrixWorld)), t.applyMatrix4(In), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(Ro), Ei.child = t, this.dispatchEvent(Ei), Ei.child = null, this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(rr, t, Ed), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(rr, Ad, t), t;
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
        if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) {
          const h = l[c];
          s(t.shapes, h);
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
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), u = a(t.images), h = a(t.shapes), d = a(t.skeletons), p = a(t.animations), m = a(t.nodes);
      o.length > 0 && (i.geometries = o), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), u.length > 0 && (i.images = u), h.length > 0 && (i.shapes = h), d.length > 0 && (i.skeletons = d), p.length > 0 && (i.animations = p), m.length > 0 && (i.nodes = m);
    }
    return i.object = r, i;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
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
_t.DEFAULT_UP = /* @__PURE__ */ new z(0, 1, 0);
_t.DEFAULT_MATRIX_AUTO_UPDATE = !0;
_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var en = class extends _t {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}, Rd = { type: "move" }, Js = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new en(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new en(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new z(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new z()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new en(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new z(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new z(), this._grip.eventsEnabled = !1), this._grip;
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
          const p = t.getJointPose(d, n), m = this._getHandJoint(l, d);
          p !== null && (m.matrix.fromArray(p.transform.matrix), m.matrix.decompose(m.position, m.quaternion, m.scale), m.matrixWorldNeedsUpdate = !0, m.jointRadius = p.radius), m.visible = p !== null;
        }
        const c = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], h = c.position.distanceTo(u.position);
        l.inputState.pinching && h > 0.025 ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && h <= 0.015 && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else o !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.quaternion, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, o.eventsEnabled && o.dispatchEvent({
        type: "gripUpdated",
        data: e,
        target: this
      })));
      a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.quaternion, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(Rd)));
    }
    return a !== null && (a.visible = i !== null), o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new en();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}, dc = {
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
}, Xn = {
  h: 0,
  s: 0,
  l: 0
}, qr = {
  h: 0,
  s: 0,
  l: 0
};
function Qs(e, t, n) {
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
    if (e = ka(e, 1), t = Xe(t, 0, 1), n = Xe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
      this.r = Qs(s, r, e + 1 / 3), this.g = Qs(s, r, e), this.b = Qs(s, r, e - 1 / 3);
    }
    return qe.colorSpaceToWorking(this, i), this;
  }
  setStyle(e, t = At) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && Ee("Color: Alpha component of " + e + " will be ignored.");
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
          Ee("Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], s = r.length;
      if (s === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (s === 6) return this.setHex(parseInt(r, 16), t);
      Ee("Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = At) {
    const n = dc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : Ee("Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Hn(e.r), this.g = Hn(e.g), this.b = Hn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Hi(e.r), this.g = Hi(e.g), this.b = Hi(e.b), this;
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
      const u = s - a;
      switch (l = c <= 0.5 ? u / (s + a) : u / (2 - s - a), s) {
        case n:
          o = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / u + 2;
          break;
        case r:
          o = (n - i) / u + 4;
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
    return this.getHSL(Xn), this.setHSL(Xn.h + e, Xn.s + t, Xn.l + n);
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
    this.getHSL(Xn), e.getHSL(qr);
    const n = Er(Xn.h, qr.h, t), i = Er(Xn.s, qr.s, t), r = Er(Xn.l, qr.l, t);
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
Ce.NAMES = dc;
var Cd = class extends _t {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Xi(), this.environmentIntensity = 1, this.environmentRotation = new Xi(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), this.background = e.background !== null ? e.background.clone() : null, this.environment = e.environment !== null ? e.environment.clone() : null, this.fog = e.fog !== null ? e.fog.clone() : null, this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), this.overrideMaterial = e.overrideMaterial !== null ? e.overrideMaterial.clone() : null, this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t.object.backgroundBlurriness = this.backgroundBlurriness, t.object.backgroundIntensity = this.backgroundIntensity, t.object.backgroundRotation = this.backgroundRotation.toArray(), t.object.environmentIntensity = this.environmentIntensity, t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}, dn = /* @__PURE__ */ new z(), Dn = /* @__PURE__ */ new z(), js = /* @__PURE__ */ new z(), Nn = /* @__PURE__ */ new z(), Ai = /* @__PURE__ */ new z(), wi = /* @__PURE__ */ new z(), Co = /* @__PURE__ */ new z(), ea = /* @__PURE__ */ new z(), ta = /* @__PURE__ */ new z(), na = /* @__PURE__ */ new z(), ia = /* @__PURE__ */ new st(), ra = /* @__PURE__ */ new st(), sa = /* @__PURE__ */ new st(), sr = class Fi {
  constructor(t = new z(), n = new z(), i = new z()) {
    this.a = t, this.b = n, this.c = i;
  }
  static getNormal(t, n, i, r) {
    r.subVectors(i, n), dn.subVectors(t, n), r.cross(dn);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(t, n, i, r, s) {
    dn.subVectors(r, n), Dn.subVectors(i, n), js.subVectors(t, n);
    const a = dn.dot(dn), o = dn.dot(Dn), l = dn.dot(js), c = Dn.dot(Dn), u = Dn.dot(js), h = a * c - o * o;
    if (h === 0)
      return s.set(0, 0, 0), null;
    const d = 1 / h, p = (c * l - o * u) * d, m = (a * u - o * l) * d;
    return s.set(1 - p - m, m, p);
  }
  static containsPoint(t, n, i, r) {
    return this.getBarycoord(t, n, i, r, Nn) === null ? !1 : Nn.x >= 0 && Nn.y >= 0 && Nn.x + Nn.y <= 1;
  }
  static getInterpolation(t, n, i, r, s, a, o, l) {
    return this.getBarycoord(t, n, i, r, Nn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Nn.x), l.addScaledVector(a, Nn.y), l.addScaledVector(o, Nn.z), l);
  }
  static getInterpolatedAttribute(t, n, i, r, s, a) {
    return ia.setScalar(0), ra.setScalar(0), sa.setScalar(0), ia.fromBufferAttribute(t, n), ra.fromBufferAttribute(t, i), sa.fromBufferAttribute(t, r), a.setScalar(0), a.addScaledVector(ia, s.x), a.addScaledVector(ra, s.y), a.addScaledVector(sa, s.z), a;
  }
  static isFrontFacing(t, n, i, r) {
    return dn.subVectors(i, n), Dn.subVectors(t, n), dn.cross(Dn).dot(r) < 0;
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
    return dn.subVectors(this.c, this.b), Dn.subVectors(this.a, this.b), dn.cross(Dn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Fi.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, n) {
    return Fi.getBarycoord(t, this.a, this.b, this.c, n);
  }
  getInterpolation(t, n, i, r, s) {
    return Fi.getInterpolation(t, this.a, this.b, this.c, n, i, r, s);
  }
  containsPoint(t) {
    return Fi.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Fi.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, n) {
    const i = this.a, r = this.b, s = this.c;
    let a, o;
    Ai.subVectors(r, i), wi.subVectors(s, i), ea.subVectors(t, i);
    const l = Ai.dot(ea), c = wi.dot(ea);
    if (l <= 0 && c <= 0) return n.copy(i);
    ta.subVectors(t, r);
    const u = Ai.dot(ta), h = wi.dot(ta);
    if (u >= 0 && h <= u) return n.copy(r);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0 && l - u > 0)
      return a = l / (l - u), n.copy(i).addScaledVector(Ai, a);
    na.subVectors(t, s);
    const p = Ai.dot(na), m = wi.dot(na);
    if (m >= 0 && p <= m) return n.copy(s);
    const _ = p * c - l * m;
    if (_ <= 0 && c >= 0 && m <= 0)
      return o = c / (c - m), n.copy(i).addScaledVector(wi, o);
    const g = u * m - p * h;
    if (g <= 0 && h - u >= 0 && p - m >= 0)
      return Co.subVectors(s, r), o = (h - u) / (h - u + (p - m)), n.copy(r).addScaledVector(Co, o);
    const f = 1 / (g + _ + d);
    return a = _ * f, o = d * f, n.copy(i).addScaledVector(Ai, a).addScaledVector(wi, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}, Rn = class {
  constructor(e = new z(1 / 0, 1 / 0, 1 / 0), t = new z(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(fn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(fn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = fn.copy(t).multiplyScalar(0.5);
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
        e.isMesh === !0 ? e.getVertexPosition(s, fn) : fn.fromBufferAttribute(r, s), fn.applyMatrix4(e.matrixWorld), this.expandByPoint(fn);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Yr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Yr.copy(n.boundingBox)), Yr.applyMatrix4(e.matrixWorld), this.union(Yr);
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
    return this.clampPoint(e.center, fn), fn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ar), Kr.subVectors(this.max, ar), Ri.subVectors(e.a, ar), Ci.subVectors(e.b, ar), Pi.subVectors(e.c, ar), qn.subVectors(Ci, Ri), Yn.subVectors(Pi, Ci), ui.subVectors(Ri, Pi);
    let t = [
      0,
      -qn.z,
      qn.y,
      0,
      -Yn.z,
      Yn.y,
      0,
      -ui.z,
      ui.y,
      qn.z,
      0,
      -qn.x,
      Yn.z,
      0,
      -Yn.x,
      ui.z,
      0,
      -ui.x,
      -qn.y,
      qn.x,
      0,
      -Yn.y,
      Yn.x,
      0,
      -ui.y,
      ui.x,
      0
    ];
    return !aa(t, Ri, Ci, Pi, Kr) || (t = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], !aa(t, Ri, Ci, Pi, Kr)) ? !1 : ($r.crossVectors(qn, Yn), t = [
      $r.x,
      $r.y,
      $r.z
    ], aa(t, Ri, Ci, Pi, Kr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, fn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(fn).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Un[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Un[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Un[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Un[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Un[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Un[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Un[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Un[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Un), this);
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
}, Un = [
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z(),
  /* @__PURE__ */ new z()
], fn = /* @__PURE__ */ new z(), Yr = /* @__PURE__ */ new Rn(), Ri = /* @__PURE__ */ new z(), Ci = /* @__PURE__ */ new z(), Pi = /* @__PURE__ */ new z(), qn = /* @__PURE__ */ new z(), Yn = /* @__PURE__ */ new z(), ui = /* @__PURE__ */ new z(), ar = /* @__PURE__ */ new z(), Kr = /* @__PURE__ */ new z(), $r = /* @__PURE__ */ new z(), hi = /* @__PURE__ */ new z();
function aa(e, t, n, i, r) {
  for (let s = 0, a = e.length - 3; s <= a; s += 3) {
    hi.fromArray(e, s);
    const o = r.x * Math.abs(hi.x) + r.y * Math.abs(hi.y) + r.z * Math.abs(hi.z), l = t.dot(hi), c = n.dot(hi), u = i.dot(hi);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
var vt = /* @__PURE__ */ new z(), Zr = /* @__PURE__ */ new ke(), Pd = 0, Yt = class extends yi {
  constructor(e, t, n = !1) {
    if (super(), Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Pd++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = sc, this.updateRanges = [], this.gpuType = Ji, this.version = 0, this._normalizationScale = e !== void 0 ? Bs(e) : void 0;
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
      Zr.fromBufferAttribute(this, t), Zr.applyMatrix3(e), this.setXY(t, Zr.x, Zr.y);
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
    return t !== void 0 ? Math.max(e / t, -1) : za(e, this.array);
  }
  _normalize(e) {
    const t = this._normalizationScale;
    return t !== void 0 ? Math.round(e * t) : Ha(e, this.array);
  }
}, fc = class extends Yt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}, pc = class extends Yt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}, tt = class extends Yt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}, Ld = /* @__PURE__ */ new Rn(), or = /* @__PURE__ */ new z(), oa = /* @__PURE__ */ new z(), Cn = class {
  constructor(e = new z(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Ld.setFromPoints(e).getCenter(n);
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
    or.subVectors(e, this.center);
    const t = or.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(or, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (oa.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(or.copy(e.center).add(oa)), this.expandByPoint(or.copy(e.center).sub(oa))), this);
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
}, Id = 0, rn = /* @__PURE__ */ new Ge(), la = /* @__PURE__ */ new _t(), Li = /* @__PURE__ */ new z(), Qt = /* @__PURE__ */ new Rn(), lr = /* @__PURE__ */ new Rn(), xt = /* @__PURE__ */ new z(), Ut = class mc extends yi {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Id++ }), this.uuid = wn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
      start: 0,
      count: 1 / 0
    }, this.userData = {}, this._transformed = !1;
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new ($h(t) ? pc : fc)(t, 1) : this.index = t, this;
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
    return rn.makeRotationFromQuaternion(t), this.applyMatrix4(rn), this;
  }
  rotateX(t) {
    return rn.makeRotationX(t), this.applyMatrix4(rn), this;
  }
  rotateY(t) {
    return rn.makeRotationY(t), this.applyMatrix4(rn), this;
  }
  rotateZ(t) {
    return rn.makeRotationZ(t), this.applyMatrix4(rn), this;
  }
  translate(t, n, i) {
    return rn.makeTranslation(t, n, i), this.applyMatrix4(rn), this;
  }
  scale(t, n, i) {
    return rn.makeScale(t, n, i), this.applyMatrix4(rn), this;
  }
  lookAt(t) {
    return la.lookAt(t), la.updateMatrix(), this.applyMatrix4(la.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Li).negate(), this.translate(Li.x, Li.y, Li.z), this;
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
      t.length > n.count && Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), n.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Rn());
    const t = this.attributes.position, n = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new z(-1 / 0, -1 / 0, -1 / 0), new z(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), n) for (let i = 0, r = n.length; i < r; i++) {
        const s = n[i];
        Qt.setFromBufferAttribute(s), this.morphTargetsRelative ? (xt.addVectors(this.boundingBox.min, Qt.min), this.boundingBox.expandByPoint(xt), xt.addVectors(this.boundingBox.max, Qt.max), this.boundingBox.expandByPoint(xt)) : (this.boundingBox.expandByPoint(Qt.min), this.boundingBox.expandByPoint(Qt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Cn());
    const t = this.attributes.position, n = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new z(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if (Qt.setFromBufferAttribute(t), n) for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s];
        lr.setFromBufferAttribute(o), this.morphTargetsRelative ? (xt.addVectors(Qt.min, lr.min), Qt.expandByPoint(xt), xt.addVectors(Qt.max, lr.max), Qt.expandByPoint(xt)) : (Qt.expandByPoint(lr.min), Qt.expandByPoint(lr.max));
      }
      Qt.getCenter(i);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        xt.fromBufferAttribute(t, s), r = Math.max(r, i.distanceToSquared(xt));
      if (n) for (let s = 0, a = n.length; s < a; s++) {
        const o = n[s], l = this.morphTargetsRelative;
        for (let c = 0, u = o.count; c < u; c++)
          xt.fromBufferAttribute(o, c), l && (Li.fromBufferAttribute(t, c), xt.add(Li)), r = Math.max(r, i.distanceToSquared(xt));
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
    (a === void 0 || a.count !== i.count) && (a = new Yt(new Float32Array(4 * i.count), 4), this.setAttribute("tangent", a));
    const o = [], l = [], c = new Uint8Array(i.count);
    for (let R = 0; R < i.count; R++)
      o[R] = new z(), l[R] = new z();
    const u = new z(), h = new z(), d = new z(), p = new ke(), m = new ke(), _ = new ke(), g = new z(), f = new z();
    function M(R, U, C) {
      c[R] = c[U] = c[C] = 1, u.fromBufferAttribute(i, R), h.fromBufferAttribute(i, U), d.fromBufferAttribute(i, C), p.fromBufferAttribute(s, R), m.fromBufferAttribute(s, U), _.fromBufferAttribute(s, C), h.sub(u), d.sub(u), m.sub(p), _.sub(p);
      const N = 1 / (m.x * _.y - _.x * m.y);
      isFinite(N) && (g.copy(h).multiplyScalar(_.y).addScaledVector(d, -m.y).multiplyScalar(N), f.copy(d).multiplyScalar(m.x).addScaledVector(h, -_.x).multiplyScalar(N), o[R].add(g), o[U].add(g), o[C].add(g), l[R].add(f), l[U].add(f), l[C].add(f));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: t.count
    }]);
    for (let R = 0, U = b.length; R < U; ++R) {
      const C = b[R], N = C.start, q = C.count;
      for (let L = N, H = N + q; L < H; L += 3) M(t.getX(L + 0), t.getX(L + 1), t.getX(L + 2));
    }
    const S = new z(), E = new z(), A = new z(), v = new z();
    function T(R) {
      A.fromBufferAttribute(r, R), v.copy(A);
      const U = o[R];
      S.copy(U), S.sub(A.multiplyScalar(A.dot(U))).normalize(), E.crossVectors(v, U);
      const C = E.dot(l[R]) < 0 ? -1 : 1;
      a.setXYZW(R, S.x, S.y, S.z, C);
    }
    for (let R = 0, U = i.count; R < U; ++R) c[R] && T(R);
    this._transformed = !0;
  }
  computeVertexNormals() {
    const t = this.index, n = this.getAttribute("position");
    if (n !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0 || i.count !== n.count)
        i = new Yt(new Float32Array(n.count * 3), 3), this.setAttribute("normal", i);
      else for (let d = 0, p = i.count; d < p; d++) i.setXYZ(d, 0, 0, 0);
      const r = new z(), s = new z(), a = new z(), o = new z(), l = new z(), c = new z(), u = new z(), h = new z();
      if (t) for (let d = 0, p = t.count; d < p; d += 3) {
        const m = t.getX(d + 0), _ = t.getX(d + 1), g = t.getX(d + 2);
        r.fromBufferAttribute(n, m), s.fromBufferAttribute(n, _), a.fromBufferAttribute(n, g), u.subVectors(a, s), h.subVectors(r, s), u.cross(h), o.fromBufferAttribute(i, m), l.fromBufferAttribute(i, _), c.fromBufferAttribute(i, g), o.add(u), l.add(u), c.add(u), i.setXYZ(m, o.x, o.y, o.z), i.setXYZ(_, l.x, l.y, l.z), i.setXYZ(g, c.x, c.y, c.z);
      }
      else for (let d = 0, p = n.count; d < p; d += 3)
        r.fromBufferAttribute(n, d + 0), s.fromBufferAttribute(n, d + 1), a.fromBufferAttribute(n, d + 2), u.subVectors(a, s), h.subVectors(r, s), u.cross(h), i.setXYZ(d + 0, u.x, u.y, u.z), i.setXYZ(d + 1, u.x, u.y, u.z), i.setXYZ(d + 2, u.x, u.y, u.z);
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
      const c = o.array, u = o.itemSize, h = o.normalized, d = new c.constructor(l.length * u);
      let p = 0, m = 0;
      for (let _ = 0, g = l.length; _ < g; _++) {
        o.isInterleavedBufferAttribute ? p = l[_] * o.data.stride + o.offset : p = l[_] * u;
        for (let f = 0; f < u; f++) d[m++] = c[p++];
      }
      return new Yt(d, u, h);
    }
    if (this.index === null)
      return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const n = new mc(), i = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = t(l, i);
      n.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u], p = t(d, i);
        l.push(p);
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
      const c = this.morphAttributes[l], u = [];
      for (let h = 0, d = c.length; h < d; h++) {
        const p = c[h];
        u.push(p.toJSON(t.data));
      }
      u.length > 0 && (r[l] = u, s = !0);
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
      const u = r[c];
      this.setAttribute(c, u.clone(n));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const u = [], h = s[c];
      for (let d = 0, p = h.length; d < p; d++) u.push(h[d].clone(n));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this._transformed = t._transformed, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, Dd = class {
  constructor(e, t) {
    this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = sc, this.updateRanges = [], this.version = 0, this.uuid = wn();
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
    const t = Po(this.array);
    e.arrayBuffers[t] === void 0 && (e.arrayBuffers[t] = this.array.slice(0).buffer);
    const n = new this.array.constructor(e.arrayBuffers[t]), i = new this.constructor(n, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {});
    const t = Po(this.array);
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
function Po(e) {
  return e.buffer._uuid === void 0 && (e.buffer._uuid = wn()), e.byteOffset === 0 && e.byteLength === e.buffer.byteLength ? e.buffer._uuid : e.buffer._uuid + ":" + e.byteOffset + ":" + e.byteLength;
}
var Bt = /* @__PURE__ */ new z(), Nd = class gc {
  constructor(t, n, i, r = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = n, this.offset = i, this.normalized = r, this._normalizationScale = t !== void 0 ? Bs(t.array) : void 0;
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
      Bt.fromBufferAttribute(this, n), Bt.applyMatrix4(t), this.setXYZ(n, Bt.x, Bt.y, Bt.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let n = 0, i = this.count; n < i; n++)
      Bt.fromBufferAttribute(this, n), Bt.applyNormalMatrix(t), this.setXYZ(n, Bt.x, Bt.y, Bt.z);
    return this;
  }
  transformDirection(t) {
    for (let n = 0, i = this.count; n < i; n++)
      Bt.fromBufferAttribute(this, n), Bt.transformDirection(t), this.setXYZ(n, Bt.x, Bt.y, Bt.z);
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
      Ls("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const n = [];
      for (let i = 0; i < this.count; i++) {
        const r = i * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) n.push(this.data.array[r + s]);
      }
      return new Yt(new this.array.constructor(n), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new gc(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      Ls("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
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
    return n !== void 0 ? Math.max(t / n, -1) : za(t, this.data.array);
  }
  _normalize(t) {
    const n = this._normalizationScale;
    return n !== void 0 ? Math.round(t * n) : Ha(t, this.data.array);
  }
}, ca = /* @__PURE__ */ new z(), Ud = /* @__PURE__ */ new z(), Od = /* @__PURE__ */ new Be(), Bn = class {
  constructor(e = new z(1, 0, 0), t = 0) {
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
    const i = ca.subVectors(n, t).cross(Ud.subVectors(e, t)).normalize();
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
    const i = e.delta(ca), r = this.normal.dot(i);
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
    const n = t || Od.getNormalMatrix(e), i = this.coplanarPoint(ca).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
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
}, Fd = 0, An = class extends yi {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Fd++ }), this.uuid = wn(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ce(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Xs, this.stencilZFail = Xs, this.stencilZPass = Xs, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
          Ee(`Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);
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
    if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new Ce().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.diffuseRoughness !== void 0 && (this.diffuseRoughness = e.diffuseRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.retroreflectivity !== void 0 && (this.retroreflectivity = e.retroreflectivity), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessMinimum !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum), e.iridescenceThicknessMaximum !== void 0 && (this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], this.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1]), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.clippingPlanes !== void 0 && (this.clippingPlanes = e.clippingPlanes.map((n) => new Bn().fromJSON(n))), e.clipIntersection !== void 0 && (this.clipIntersection = e.clipIntersection), e.clipShadows !== void 0 && (this.clipShadows = e.clipShadows), e.depthPacking !== void 0 && (this.depthPacking = e.depthPacking), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.linecap !== void 0 && (this.linecap = e.linecap), e.linejoin !== void 0 && (this.linejoin = e.linejoin), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
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
}, On = /* @__PURE__ */ new z(), ua = /* @__PURE__ */ new z(), Jr = /* @__PURE__ */ new z(), Qr = /* @__PURE__ */ new z(), ks = class {
  constructor(e = new z(), t = new z(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, On)), this;
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
    const t = On.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (On.copy(this.origin).addScaledVector(this.direction, t), On.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    ua.copy(e).add(t).multiplyScalar(0.5), Jr.copy(t).sub(e).normalize(), Qr.copy(this.origin).sub(ua);
    const r = e.distanceTo(t) * 0.5, s = -this.direction.dot(Jr), a = Qr.dot(this.direction), o = -Qr.dot(Jr), l = Qr.lengthSq(), c = Math.abs(1 - s * s);
    let u, h, d, p;
    if (c > 0)
      if (u = s * o - a, h = s * a - o, p = r * c, u >= 0)
        if (h >= -p)
          if (h <= p) {
            const m = 1 / c;
            u *= m, h *= m, d = u * (u + s * h + 2 * a) + h * (s * u + h + 2 * o) + l;
          } else
            h = r, u = Math.max(0, -(s * h + a)), d = -u * u + h * (h + 2 * o) + l;
        else
          h = -r, u = Math.max(0, -(s * h + a)), d = -u * u + h * (h + 2 * o) + l;
      else h <= -p ? (u = Math.max(0, -(-s * r + a)), h = u > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -u * u + h * (h + 2 * o) + l) : h <= p ? (u = 0, h = Math.min(Math.max(-r, -o), r), d = h * (h + 2 * o) + l) : (u = Math.max(0, -(s * r + a)), h = u > 0 ? r : Math.min(Math.max(-r, -o), r), d = -u * u + h * (h + 2 * o) + l);
    else
      h = s > 0 ? -r : r, u = Math.max(0, -(s * h + a)), d = -u * u + h * (h + 2 * o) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(ua).addScaledVector(Jr, h), d;
  }
  intersectSphere(e, t) {
    if (e.radius < 0) return null;
    On.subVectors(e.center, this.origin);
    const n = On.dot(this.direction), i = On.dot(On) - n * n, r = e.radius * e.radius;
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
    const l = 1 / this.direction.x, c = 1 / this.direction.y, u = 1 / this.direction.z, h = this.origin;
    return l >= 0 ? (n = (e.min.x - h.x) * l, i = (e.max.x - h.x) * l) : (n = (e.max.x - h.x) * l, i = (e.min.x - h.x) * l), c >= 0 ? (r = (e.min.y - h.y) * c, s = (e.max.y - h.y) * c) : (r = (e.max.y - h.y) * c, s = (e.min.y - h.y) * c), n > s || r > i || ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), u >= 0 ? (a = (e.min.z - h.z) * u, o = (e.max.z - h.z) * u) : (a = (e.max.z - h.z) * u, o = (e.min.z - h.z) * u), n > o || a > i) || ((a > n || n !== n) && (n = a), (o < i || i !== i) && (i = o), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, On) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    const s = this.origin, a = this.direction, o = a.x, l = a.y, c = a.z, u = e.x - s.x, h = e.y - s.y, d = e.z - s.z, p = t.x - s.x, m = t.y - s.y, _ = t.z - s.z, g = n.x - s.x, f = n.y - s.y, M = n.z - s.z, b = Math.abs(o), S = Math.abs(l), E = Math.abs(c);
    let A, v, T, R, U, C, N, q, L, H, $, B;
    if (b >= S && b >= E ? (T = o, C = u, L = p, B = g, o >= 0 ? (A = l, v = c, R = h, U = d, N = m, q = _, H = f, $ = M) : (A = c, v = l, R = d, U = h, N = _, q = m, H = M, $ = f)) : S >= E ? (T = l, C = h, L = m, B = f, l >= 0 ? (A = c, v = o, R = d, U = u, N = _, q = p, H = M, $ = g) : (A = o, v = c, R = u, U = d, N = p, q = _, H = g, $ = M)) : (T = c, C = d, L = _, B = M, c >= 0 ? (A = o, v = l, R = u, U = h, N = p, q = m, H = g, $ = f) : (A = l, v = o, R = h, U = u, N = m, q = p, H = f, $ = g)), T === 0) return null;
    const ae = A / T, Y = v / T, k = 1 / T, Q = R - ae * C, _e = U - Y * C, Z = N - ae * L, te = q - Y * L, ge = H - ae * B, Te = $ - Y * B, ye = ge * te - Te * Z, he = Q * Te - _e * ge, Ve = Z * _e - te * Q;
    if (i) {
      if (ye < 0 || he < 0 || Ve < 0) return null;
    } else if ((ye < 0 || he < 0 || Ve < 0) && (ye > 0 || he > 0 || Ve > 0)) return null;
    const Je = ye + he + Ve;
    if (Je === 0) return null;
    const Pe = k * (ye * C + he * L + Ve * B);
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
}, ki = class extends An {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ce(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Xi(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}, Lo = /* @__PURE__ */ new Ge(), di = /* @__PURE__ */ new ks(), jr = /* @__PURE__ */ new Cn(), Io = /* @__PURE__ */ new z(), es = /* @__PURE__ */ new z(), ts = /* @__PURE__ */ new z(), ns = /* @__PURE__ */ new z(), ha = /* @__PURE__ */ new z(), is = /* @__PURE__ */ new z(), Do = /* @__PURE__ */ new z(), rs = /* @__PURE__ */ new z(), zt = class extends _t {
  constructor(e = new Ut(), t = new ki()) {
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
      is.set(0, 0, 0);
      for (let o = 0, l = r.length; o < l; o++) {
        const c = a[o], u = r[o];
        c !== 0 && (ha.fromBufferAttribute(u, e), s ? is.addScaledVector(ha, c) : is.addScaledVector(ha.sub(t), c));
      }
      t.add(is);
    }
    return t;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), jr.copy(n.boundingSphere), jr.applyMatrix4(r), di.copy(e.ray).recast(e.near), !(jr.containsPoint(di.origin) === !1 && (di.intersectSphere(jr, Io) === null || di.origin.distanceToSquared(Io) > (e.far - e.near) ** 2)) && (Lo.copy(r).invert(), di.copy(e.ray).applyMatrix4(Lo), !(n.boundingBox !== null && di.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, di)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, l = r.attributes.uv, c = r.attributes.uv1, u = r.attributes.normal, h = r.groups, d = r.drawRange;
    if (a !== null)
      if (Array.isArray(s)) for (let p = 0, m = h.length; p < m; p++) {
        const _ = h[p], g = s[_.materialIndex], f = Math.max(_.start, d.start), M = Math.min(a.count, Math.min(_.start + _.count, d.start + d.count));
        for (let b = f, S = M; b < S; b += 3) {
          const E = a.getX(b), A = a.getX(b + 1), v = a.getX(b + 2);
          i = ss(this, g, e, n, l, c, u, E, A, v), i && (i.faceIndex = Math.floor(b / 3), i.face.materialIndex = _.materialIndex, t.push(i));
        }
      }
      else {
        const p = Math.max(0, d.start), m = Math.min(a.count, d.start + d.count);
        for (let _ = p, g = m; _ < g; _ += 3) {
          const f = a.getX(_), M = a.getX(_ + 1), b = a.getX(_ + 2);
          i = ss(this, s, e, n, l, c, u, f, M, b), i && (i.faceIndex = Math.floor(_ / 3), t.push(i));
        }
      }
    else if (o !== void 0)
      if (Array.isArray(s)) for (let p = 0, m = h.length; p < m; p++) {
        const _ = h[p], g = s[_.materialIndex], f = Math.max(_.start, d.start), M = Math.min(o.count, Math.min(_.start + _.count, d.start + d.count));
        for (let b = f, S = M; b < S; b += 3) {
          const E = b, A = b + 1, v = b + 2;
          i = ss(this, g, e, n, l, c, u, E, A, v), i && (i.faceIndex = Math.floor(b / 3), i.face.materialIndex = _.materialIndex, t.push(i));
        }
      }
      else {
        const p = Math.max(0, d.start), m = Math.min(o.count, d.start + d.count);
        for (let _ = p, g = m; _ < g; _ += 3) {
          const f = _, M = _ + 1, b = _ + 2;
          i = ss(this, s, e, n, l, c, u, f, M, b), i && (i.faceIndex = Math.floor(_ / 3), t.push(i));
        }
      }
  }
};
function Bd(e, t, n, i, r, s, a, o) {
  let l;
  if (t.side === 1 ? l = i.intersectTriangle(a, s, r, !0, o) : l = i.intersectTriangle(r, s, a, t.side === 0, o), l === null) return null;
  rs.copy(o), rs.applyMatrix4(e.matrixWorld);
  const c = n.ray.origin.distanceTo(rs);
  return c < n.near || c > n.far ? null : {
    distance: c,
    point: rs.clone(),
    object: e
  };
}
function ss(e, t, n, i, r, s, a, o, l, c) {
  e.getVertexPosition(o, es), e.getVertexPosition(l, ts), e.getVertexPosition(c, ns);
  const u = Bd(e, t, n, i, es, ts, ns, Do);
  if (u) {
    const h = new z();
    sr.getBarycoord(Do, es, ts, ns, h), r && (u.uv = sr.getInterpolatedAttribute(r, o, l, c, h, new ke())), s && (u.uv1 = sr.getInterpolatedAttribute(s, o, l, c, h, new ke())), a && (u.normal = sr.getInterpolatedAttribute(a, o, l, c, h, new z()), u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: l,
      c,
      normal: new z(),
      materialIndex: 0
    };
    sr.getNormal(es, ts, ns, d.normal), u.face = d, u.barycoord = h;
  }
  return u;
}
var cr = /* @__PURE__ */ new st(), No = /* @__PURE__ */ new st(), Uo = /* @__PURE__ */ new st(), kd = /* @__PURE__ */ new st(), Oo = /* @__PURE__ */ new Ge(), as = /* @__PURE__ */ new z(), da = /* @__PURE__ */ new Cn(), Fo = /* @__PURE__ */ new Ge(), fa = /* @__PURE__ */ new ks(), zd = class extends zt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = ih, this.bindMatrix = new Ge(), this.bindMatrixInverse = new Ge(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Rn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, as), this.boundingBox.expandByPoint(as);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Cn()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, as), this.boundingSphere.expandByPoint(as);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this.boundingBox = e.boundingBox !== null ? e.boundingBox.clone() : null, this.boundingSphere = e.boundingSphere !== null ? e.boundingSphere.clone() : null, this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), da.copy(this.boundingSphere), da.applyMatrix4(i), e.ray.intersectsSphere(da) !== !1 && (Fo.copy(i).invert(), fa.copy(e.ray).applyMatrix4(Fo), !(this.boundingBox !== null && fa.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, fa)));
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
    super.updateMatrixWorld(e), this.bindMode === "attached" ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === "detached" ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : Ee("SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    No.fromBufferAttribute(i.attributes.skinIndex, e), Uo.fromBufferAttribute(i.attributes.skinWeight, e), t.isVector4 ? (cr.copy(t), t.set(0, 0, 0, 0)) : (cr.set(t.x, t.y, t.z, 1), t.set(0, 0, 0)), cr.applyMatrix4(this.bindMatrix);
    for (let r = 0; r < 4; r++) {
      const s = Uo.getComponent(r);
      if (s !== 0) {
        const a = No.getComponent(r);
        Oo.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(kd.copy(cr).applyMatrix4(Oo), s);
      }
    }
    return t.isVector4 && (t.w = cr.w), t.applyMatrix4(this.bindMatrixInverse);
  }
}, vc = class extends _t {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}, Va = class extends Ht {
  constructor(e = null, t = 1, n = 1, i, r, s, a, o, l = Nt, c = Nt, u, h) {
    super(null, s, a, o, l, c, i, r, u, h), this.isDataTexture = !0, this.image = {
      data: e,
      width: t,
      height: n
    }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}, Bo = /* @__PURE__ */ new Ge(), Hd = /* @__PURE__ */ new Ge(), Gd = class _c {
  constructor(t = [], n = []) {
    this.uuid = wn(), this.bones = t.slice(0), this.boneInverses = n, this.boneMatrices = null, this.previousBoneMatrices = null, this.boneTexture = null, this.previousBoneTexture = null, this.init();
  }
  init() {
    const t = this.bones, n = this.boneInverses;
    if (this.boneMatrices = new Float32Array(t.length * 16), n.length === 0) this.calculateInverses();
    else if (t.length !== n.length) {
      Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
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
      const o = t[s] ? t[s].matrixWorld : Hd;
      Bo.multiplyMatrices(o, n[s]), Bo.toArray(i, s * 16);
    }
    r !== null && (r.needsUpdate = !0);
  }
  clone() {
    return new _c(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let t = Math.sqrt(this.bones.length * 4);
    t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
    const n = new Float32Array(t * t * 4);
    n.set(this.boneMatrices);
    const i = new Va(n, t, t, wr, Ji);
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
      a === void 0 && (Ee("Skeleton: No bone found with UUID:", s), a = new vc()), this.bones.push(a), this.boneInverses.push(new Ge().fromArray(t.boneInverses[i]));
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
}, Is = class extends Yt {
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
}, Ii = /* @__PURE__ */ new Ge(), ko = /* @__PURE__ */ new Ge(), os = [], zo = /* @__PURE__ */ new Rn(), Vd = /* @__PURE__ */ new Ge(), ur = /* @__PURE__ */ new zt(), hr = /* @__PURE__ */ new Cn(), Wd = class extends zt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new Is(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, Vd);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new Rn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ii), zo.copy(e.boundingBox).applyMatrix4(Ii), this.boundingBox.union(zo);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Cn()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ii), hr.copy(e.boundingSphere).applyMatrix4(Ii), this.boundingSphere.union(hr);
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
    if (ur.geometry = this.geometry, ur.material = this.material, ur.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), hr.copy(this.boundingSphere), hr.applyMatrix4(n), e.ray.intersectsSphere(hr) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Ii), ko.multiplyMatrices(n, Ii), ur.matrixWorld = ko, ur.raycast(e, os);
        for (let s = 0, a = os.length; s < a; s++) {
          const o = os[s];
          o.instanceId = r, o.object = this, t.push(o);
        }
        os.length = 0;
      }
  }
  setColorAt(e, t) {
    return this.instanceColor === null && (this.instanceColor = new Is(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3), this;
  }
  setMatrixAt(e, t) {
    return t.toArray(this.instanceMatrix.array, e * 16), this;
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new Va(new Float32Array(i * this.count), i, this.count, tc, Ji));
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
}, fi = /* @__PURE__ */ new Cn(), Xd = /* @__PURE__ */ new ke(0.5, 0.5), ls = /* @__PURE__ */ new z(), Ir = class {
  constructor(e = new Bn(), t = new Bn(), n = new Bn(), i = new Bn(), r = new Bn(), s = new Bn()) {
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
  setFromProjectionMatrix(e, t = _i, n = !1) {
    const i = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], u = r[5], h = r[6], d = r[7], p = r[8], m = r[9], _ = r[10], g = r[11], f = r[12], M = r[13], b = r[14], S = r[15];
    if (i[0].setComponents(l - s, d - c, g - p, S - f).normalize(), i[1].setComponents(l + s, d + c, g + p, S + f).normalize(), i[2].setComponents(l + a, d + u, g + m, S + M).normalize(), i[3].setComponents(l - a, d - u, g - m, S - M).normalize(), n)
      i[4].setComponents(o, h, _, b).normalize(), i[5].setComponents(l - o, d - h, g - _, S - b).normalize();
    else if (i[4].setComponents(l - o, d - h, g - _, S - b).normalize(), t === 2e3) i[5].setComponents(l + o, d + h, g + _, S + b).normalize();
    else if (t === 2001) i[5].setComponents(o, h, _, b).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(fi);
  }
  intersectsSprite(e) {
    fi.center.set(0, 0, 0);
    const t = Xd.distanceTo(e.center);
    return fi.radius = 0.7071067811865476 + t, fi.applyMatrix4(e.matrixWorld), this.intersectsSphere(fi);
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
      if (ls.x = i.normal.x > 0 ? e.max.x : e.min.x, ls.y = i.normal.y > 0 ? e.max.y : e.min.y, ls.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(ls) < 0) return !1;
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
}, Ho = /* @__PURE__ */ new Ge(), qd = class Mc {
  constructor() {
    this.coordinateSystem = _i, this._frustums = [], this._count = 0;
  }
  setFromArrayCamera(t) {
    const n = t.cameras, i = this._frustums;
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      Ho.multiplyMatrices(s.projectionMatrix, s.matrixWorldInverse), i[r] === void 0 && (i[r] = new Ir()), i[r].setFromProjectionMatrix(Ho, s.coordinateSystem, s.reversedDepth);
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
      n[r] === void 0 && (n[r] = new Ir()), n[r].copy(i[r]);
    return this._count = t._count, this;
  }
  clone() {
    return new Mc().copy(this);
  }
}, Sc = class extends An {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ce(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}, Ds = /* @__PURE__ */ new z(), Ns = /* @__PURE__ */ new z(), Go = /* @__PURE__ */ new Ge(), dr = /* @__PURE__ */ new ks(), cs = /* @__PURE__ */ new Cn(), pa = /* @__PURE__ */ new z(), Vo = /* @__PURE__ */ new z(), Wa = class extends _t {
  constructor(e = new Ut(), t = new Sc()) {
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
        Ds.fromBufferAttribute(t, i - 1), Ns.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += Ds.distanceTo(Ns);
      e.setAttribute("lineDistance", new tt(n, 1));
    } else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  intersectsFrustum(e) {
    return e.intersectsObject(this);
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, s = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), cs.copy(n.boundingSphere), cs.applyMatrix4(i), cs.radius += r, e.ray.intersectsSphere(cs) === !1) return;
    Go.copy(i).invert(), dr.copy(e.ray).applyMatrix4(Go);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = this.isLineSegments ? 2 : 1, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const h = Math.max(0, s.start), d = Math.min(c.count, s.start + s.count);
      for (let p = h, m = d - 1; p < m; p += l) {
        const _ = c.getX(p), g = c.getX(p + 1), f = us(this, e, dr, o, _, g, p);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const p = c.getX(d - 1), m = c.getX(h), _ = us(this, e, dr, o, p, m, d - 1);
        _ && t.push(_);
      }
    } else {
      const h = Math.max(0, s.start), d = Math.min(u.count, s.start + s.count);
      for (let p = h, m = d - 1; p < m; p += l) {
        const _ = us(this, e, dr, o, p, p + 1, p);
        _ && t.push(_);
      }
      if (this.isLineLoop) {
        const p = us(this, e, dr, o, d - 1, h, d - 1);
        p && t.push(p);
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
function us(e, t, n, i, r, s, a) {
  const o = e.geometry.attributes.position;
  if (Ds.fromBufferAttribute(o, r), Ns.fromBufferAttribute(o, s), n.distanceSqToSegment(Ds, Ns, pa, Vo) > i) return;
  pa.applyMatrix4(e.matrixWorld);
  const l = t.ray.origin.distanceTo(pa);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      point: Vo.clone().applyMatrix4(e.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: e
    };
}
var Wo = /* @__PURE__ */ new z(), Xo = /* @__PURE__ */ new z(), Yd = class extends Wa {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        Wo.fromBufferAttribute(t, i), Xo.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Wo.distanceTo(Xo);
      e.setAttribute("lineDistance", new tt(n, 1));
    } else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}, Kd = class extends Wa {
  constructor(e, t) {
    super(e, t), this.isLineLoop = !0, this.type = "LineLoop";
  }
}, Xa = class extends An {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Ce(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}, qo = /* @__PURE__ */ new Ge(), wa = /* @__PURE__ */ new ks(), hs = /* @__PURE__ */ new Cn(), ds = /* @__PURE__ */ new z(), yc = class extends _t {
  constructor(e = new Ut(), t = new Xa()) {
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
    if (n.boundingSphere === null && n.computeBoundingSphere(), hs.copy(n.boundingSphere), hs.applyMatrix4(i), hs.radius += r, e.ray.intersectsSphere(hs) === !1) return;
    qo.copy(i).invert(), wa.copy(e.ray).applyMatrix4(qo);
    const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), o = a * a, l = n.index, c = n.attributes.position;
    if (l !== null) {
      const u = Math.max(0, s.start), h = Math.min(l.count, s.start + s.count);
      for (let d = u, p = h; d < p; d++) {
        const m = l.getX(d);
        ds.fromBufferAttribute(c, m), Yo(ds, m, o, i, e, t, this);
      }
    } else {
      const u = Math.max(0, s.start), h = Math.min(c.count, s.start + s.count);
      for (let d = u, p = h; d < p; d++)
        ds.fromBufferAttribute(c, d), Yo(ds, d, o, i, e, t, this);
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
function Yo(e, t, n, i, r, s, a) {
  const o = wa.distanceSqToPoint(e);
  if (o < n) {
    const l = new z();
    wa.closestPointToPoint(e, l), l.applyMatrix4(i);
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
var xc = class extends Ht {
  constructor(e = [], t = 301, n, i, r, s, a, o, l, c) {
    super(e, t, n, i, r, s, a, o, l, c), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, $d = class extends Ht {
  constructor(e, t, n, i, r, s, a, o, l) {
    super(e, t, n, i, r, s, a, o, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}, qi = class extends Ht {
  constructor(e, t, n = vi, i, r, s, a = Nt, o = Nt, l, c = Rr, u = 1) {
    if (c !== 1026 && c !== 1027) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    super({
      width: e,
      height: t,
      depth: u
    }, i, r, s, a, o, c, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.source = new Ga(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.compareFunction = this.compareFunction, t;
  }
}, Tc = class extends qi {
  constructor(e, t = vi, n = 301, i, r, s = Nt, a = Nt, o, l = Rr) {
    const c = {
      width: e,
      height: e,
      depth: 1
    }, u = [
      c,
      c,
      c,
      c,
      c,
      c
    ];
    super(e, e, t, n, i, r, s, a, o, l), this.image = u, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}, bc = class extends Ht {
  constructor(e = null) {
    super(), this.sourceTexture = e, this.isExternalTexture = !0;
  }
  copy(e) {
    return super.copy(e), this.sourceTexture = e.sourceTexture, this;
  }
}, Or = class Ec extends Ut {
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
    const l = [], c = [], u = [], h = [];
    let d = 0, p = 0;
    m("z", "y", "x", -1, -1, i, n, t, a, s, 0), m("z", "y", "x", 1, -1, i, n, -t, a, s, 1), m("x", "z", "y", 1, 1, t, i, n, r, a, 2), m("x", "z", "y", 1, -1, t, i, -n, r, a, 3), m("x", "y", "z", 1, -1, t, n, i, r, s, 4), m("x", "y", "z", -1, -1, t, n, -i, r, s, 5), this.setIndex(l), this.setAttribute("position", new tt(c, 3)), this.setAttribute("normal", new tt(u, 3)), this.setAttribute("uv", new tt(h, 2));
    function m(_, g, f, M, b, S, E, A, v, T, R) {
      const U = S / v, C = E / T, N = S / 2, q = E / 2, L = A / 2, H = v + 1, $ = T + 1;
      let B = 0, ae = 0;
      const Y = new z();
      for (let k = 0; k < $; k++) {
        const Q = k * C - q;
        for (let _e = 0; _e < H; _e++)
          Y[_] = (_e * U - N) * M, Y[g] = Q * b, Y[f] = L, c.push(Y.x, Y.y, Y.z), Y[_] = 0, Y[g] = 0, Y[f] = A > 0 ? 1 : -1, u.push(Y.x, Y.y, Y.z), h.push(_e / v), h.push(1 - k / T), B += 1;
      }
      for (let k = 0; k < T; k++) for (let Q = 0; Q < v; Q++) {
        const _e = d + Q + H * k, Z = d + Q + H * (k + 1), te = d + (Q + 1) + H * (k + 1), ge = d + (Q + 1) + H * k;
        l.push(_e, Z, ge), l.push(Z, te, ge), ae += 6;
      }
      o.addGroup(p, ae, R), p += ae, d += B;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ec(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}, Zd = class Ac extends Ut {
  constructor(t = 1, n = 1, i = 4, r = 8, s = 1) {
    super(), this.type = "CapsuleGeometry", this.parameters = {
      radius: t,
      height: n,
      capSegments: i,
      radialSegments: r,
      heightSegments: s
    }, n = Math.max(0, n), i = Math.max(1, Math.floor(i)), r = Math.max(3, Math.floor(r)), s = Math.max(1, Math.floor(s));
    const a = [], o = [], l = [], c = [], u = n / 2, h = Math.PI / 2 * t, d = n, p = 2 * h + d, m = i * 2 + s, _ = r + 1, g = new z(), f = new z();
    for (let M = 0; M <= m; M++) {
      let b = 0, S = 0, E = 0, A = 0;
      if (M <= i) {
        const R = M / i, U = R * Math.PI / 2;
        S = -u - t * Math.cos(U), E = t * Math.sin(U), A = -t * Math.cos(U), b = R * h;
      } else if (M <= i + s) {
        const R = (M - i) / s;
        S = -u + R * n, E = t, A = 0, b = h + R * d;
      } else {
        const R = (M - i - s) / i, U = R * Math.PI / 2;
        S = u + t * Math.sin(U), E = t * Math.cos(U), A = t * Math.sin(U), b = h + d + R * h;
      }
      const v = Math.max(0, Math.min(1, b / p));
      let T = 0;
      M === 0 ? T = 0.5 / r : M === m && (T = -0.5 / r);
      for (let R = 0; R <= r; R++) {
        const U = R / r, C = U * Math.PI * 2, N = Math.sin(C), q = Math.cos(C);
        f.x = -E * q, f.y = S, f.z = E * N, o.push(f.x, f.y, f.z), g.set(-E * q, A, E * N), g.normalize(), l.push(g.x, g.y, g.z), c.push(U + T, v);
      }
      if (M > 0) {
        const R = (M - 1) * _;
        for (let U = 0; U < r; U++) {
          const C = R + U, N = R + U + 1, q = M * _ + U, L = M * _ + U + 1;
          a.push(C, N, q), a.push(N, L, q);
        }
      }
    }
    this.setIndex(a), this.setAttribute("position", new tt(o, 3)), this.setAttribute("normal", new tt(l, 3)), this.setAttribute("uv", new tt(c, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ac(t.radius, t.height, t.capSegments, t.radialSegments, t.heightSegments);
  }
}, wc = class Rc extends Ut {
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
    const u = [], h = [], d = [], p = [];
    let m = 0;
    const _ = [], g = i / 2;
    let f = 0;
    M(), a === !1 && (t > 0 && b(!0), n > 0 && b(!1)), this.setIndex(u), this.setAttribute("position", new tt(h, 3)), this.setAttribute("normal", new tt(d, 3)), this.setAttribute("uv", new tt(p, 2));
    function M() {
      const S = new z(), E = new z();
      let A = 0;
      const v = (n - t) / i;
      for (let T = 0; T <= s; T++) {
        const R = [], U = T / s, C = U * (n - t) + t;
        for (let N = 0; N <= r; N++) {
          const q = N / r, L = q * l + o, H = Math.sin(L), $ = Math.cos(L);
          E.x = C * H, E.y = -U * i + g, E.z = C * $, h.push(E.x, E.y, E.z), S.set(H, v, $).normalize(), d.push(S.x, S.y, S.z), p.push(q, 1 - U), R.push(m++);
        }
        _.push(R);
      }
      for (let T = 0; T < r; T++) for (let R = 0; R < s; R++) {
        const U = _[R][T], C = _[R + 1][T], N = _[R + 1][T + 1], q = _[R][T + 1];
        (t > 0 || R !== 0) && (u.push(U, C, q), A += 3), (n > 0 || R !== s - 1) && (u.push(C, N, q), A += 3);
      }
      c.addGroup(f, A, 0), f += A;
    }
    function b(S) {
      const E = m, A = new ke(), v = new z();
      let T = 0;
      const R = S === !0 ? t : n, U = S === !0 ? 1 : -1;
      for (let N = 1; N <= r; N++)
        h.push(0, g * U, 0), d.push(0, U, 0), p.push(0.5, 0.5), m++;
      const C = m;
      for (let N = 0; N <= r; N++) {
        const q = N / r * l + o, L = Math.cos(q), H = Math.sin(q);
        v.x = R * H, v.y = g * U, v.z = R * L, h.push(v.x, v.y, v.z), d.push(0, U, 0), A.x = L * 0.5 + 0.5, A.y = H * 0.5 * U + 0.5, p.push(A.x, A.y), m++;
      }
      for (let N = 0; N < r; N++) {
        const q = E + N, L = C + N;
        S === !0 ? u.push(L, L + 1, q) : u.push(L + 1, L, q), T += 3;
      }
      c.addGroup(f, T, S === !0 ? 1 : 2), f += T;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Rc(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, Jd = class Cc extends wc {
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
    return new Cc(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}, Qd = class Pc extends Ut {
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
    const s = [], a = [], o = [], l = [], c = [], u = 1 / n, h = new z(), d = new ke(), p = new z(), m = new z(), _ = new z();
    let g = 0, f = 0;
    for (let M = 0; M <= t.length - 1; M++) switch (M) {
      case 0:
        g = t[M + 1].x - t[M].x, f = t[M + 1].y - t[M].y, p.x = f * 1, p.y = -g, p.z = f * 0, _.copy(p), p.normalize(), l.push(p.x, p.y, p.z);
        break;
      case t.length - 1:
        _.normalize(), l.push(_.x, _.y, _.z);
        break;
      default:
        g = t[M + 1].x - t[M].x, f = t[M + 1].y - t[M].y, p.x = f * 1, p.y = -g, p.z = f * 0, m.copy(p), p.x += _.x, p.y += _.y, p.z += _.z, p.normalize(), l.push(p.x, p.y, p.z), _.copy(m);
    }
    for (let M = 0; M <= n; M++) {
      const b = i + M * u * r, S = Math.sin(b), E = Math.cos(b);
      for (let A = 0; A <= t.length - 1; A++) {
        h.x = t[A].x * S, h.y = t[A].y, h.z = t[A].x * E, a.push(h.x, h.y, h.z), d.x = M / n, d.y = A / (t.length - 1), o.push(d.x, d.y);
        const v = l[3 * A + 0] * S, T = l[3 * A + 1], R = l[3 * A + 0] * E;
        c.push(v, T, R);
      }
    }
    for (let M = 0; M < n; M++) for (let b = 0; b < t.length - 1; b++) {
      const S = b + M * t.length, E = S, A = S + t.length, v = S + t.length + 1, T = S + 1;
      s.push(E, A, T), s.push(v, T, A);
    }
    this.setIndex(s), this.setAttribute("position", new tt(a, 3)), this.setAttribute("uv", new tt(o, 2)), this.setAttribute("normal", new tt(c, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Pc(t.points, t.segments, t.phiStart, t.phiLength);
  }
}, Lc = class Ic extends Ut {
  constructor(t = 1, n = 1, i = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: n,
      widthSegments: i,
      heightSegments: r
    };
    const s = t / 2, a = n / 2, o = Math.floor(i), l = Math.floor(r), c = o + 1, u = l + 1, h = t / o, d = n / l, p = [], m = [], _ = [], g = [];
    for (let f = 0; f < u; f++) {
      const M = f * d - a;
      for (let b = 0; b < c; b++) {
        const S = b * h - s;
        m.push(S, -M, 0), _.push(0, 0, 1), g.push(b / o), g.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++) for (let M = 0; M < o; M++) {
      const b = M + c * f, S = M + c * (f + 1), E = M + 1 + c * (f + 1), A = M + 1 + c * f;
      p.push(b, S, A), p.push(S, E, A);
    }
    this.setIndex(p), this.setAttribute("position", new tt(m, 3)), this.setAttribute("normal", new tt(_, 3)), this.setAttribute("uv", new tt(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ic(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}, jd = class Dc extends Ut {
  constructor(t = 0.5, n = 1, i = 32, r = 1, s = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: n,
      thetaSegments: i,
      phiSegments: r,
      thetaStart: s,
      thetaLength: a
    }, i = Math.max(3, i), r = Math.max(1, r);
    const o = [], l = [], c = [], u = [];
    let h = t;
    const d = (n - t) / r, p = new z(), m = new ke();
    for (let _ = 0; _ <= r; _++) {
      for (let g = 0; g <= i; g++) {
        const f = s + g / i * a;
        p.x = h * Math.cos(f), p.y = h * Math.sin(f), l.push(p.x, p.y, p.z), c.push(0, 0, 1), m.x = (p.x / n + 1) / 2, m.y = (p.y / n + 1) / 2, u.push(m.x, m.y);
      }
      h += d;
    }
    for (let _ = 0; _ < r; _++) {
      const g = _ * (i + 1);
      for (let f = 0; f < i; f++) {
        const M = f + g, b = M, S = M + i + 1, E = M + i + 2, A = M + 1;
        o.push(b, S, A), o.push(S, E, A);
      }
    }
    this.setIndex(o), this.setAttribute("position", new tt(l, 3)), this.setAttribute("normal", new tt(c, 3)), this.setAttribute("uv", new tt(u, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Dc(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}, ef = class Nc extends Ut {
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
    const u = [], h = new z(), d = new z(), p = [], m = [], _ = [], g = [];
    for (let f = 0; f <= i; f++) {
      const M = [], b = f / i, S = a + b * o, E = t * Math.cos(S), A = Math.sqrt(t * t - E * E);
      let v = 0;
      f === 0 && a === 0 ? v = 0.5 / n : f === i && l === Math.PI && (v = -0.5 / n);
      for (let T = 0; T <= n; T++) {
        const R = T / n, U = r + R * s;
        h.x = -A * Math.cos(U), h.y = E, h.z = A * Math.sin(U), m.push(h.x, h.y, h.z), d.copy(h).normalize(), _.push(d.x, d.y, d.z), g.push(R + v, 1 - b), M.push(c++);
      }
      u.push(M);
    }
    for (let f = 0; f < i; f++) for (let M = 0; M < n; M++) {
      const b = u[f][M + 1], S = u[f][M], E = u[f + 1][M], A = u[f + 1][M + 1];
      (f !== 0 || a > 0) && p.push(b, S, A), (f !== i - 1 || l < Math.PI) && p.push(S, E, A);
    }
    this.setIndex(p), this.setAttribute("position", new tt(m, 3)), this.setAttribute("normal", new tt(_, 3)), this.setAttribute("uv", new tt(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Nc(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}, tf = class Uc extends Ut {
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
    const l = [], c = [], u = [], h = [], d = new z(), p = new z(), m = new z();
    for (let _ = 0; _ <= i; _++) {
      const g = a + _ / i * o;
      for (let f = 0; f <= r; f++) {
        const M = f / r * s;
        p.x = (t + n * Math.cos(g)) * Math.cos(M), p.y = (t + n * Math.cos(g)) * Math.sin(M), p.z = n * Math.sin(g), c.push(p.x, p.y, p.z), d.x = t * Math.cos(M), d.y = t * Math.sin(M), m.subVectors(p, d).normalize(), u.push(m.x, m.y, m.z), h.push(f / r), h.push(_ / i);
      }
    }
    for (let _ = 1; _ <= i; _++) for (let g = 1; g <= r; g++) {
      const f = (r + 1) * _ + g - 1, M = (r + 1) * (_ - 1) + g - 1, b = (r + 1) * (_ - 1) + g, S = (r + 1) * _ + g;
      l.push(f, M, S), l.push(M, b, S);
    }
    this.setIndex(l), this.setAttribute("position", new tt(c, 3)), this.setAttribute("normal", new tt(u, 3)), this.setAttribute("uv", new tt(h, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Uc(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc, t.thetaStart, t.thetaLength);
  }
};
function Yi(e) {
  const t = {};
  for (const n in e) {
    t[n] = {};
    for (const i in e[n]) {
      const r = e[n][i];
      if (Ko(r))
        r.isRenderTargetTexture ? (Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][i] = null) : t[n][i] = r.clone();
      else if (Array.isArray(r))
        if (Ko(r[0])) {
          const s = [];
          for (let a = 0, o = r.length; a < o; a++) s[a] = r[a].clone();
          t[n][i] = s;
        } else t[n][i] = r.slice();
      else t[n][i] = r;
    }
  }
  return t;
}
function kt(e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = Yi(e[n]);
    for (const r in i) t[r] = i[r];
  }
  return t;
}
function Ko(e) {
  return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function nf(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) t.push(e[n].clone());
  return t;
}
function Oc(e) {
  const t = e.getRenderTarget();
  return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : qe.workingColorSpace;
}
var rf = {
  clone: Yi,
  merge: kt
}, sf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, af = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, Mi = class extends An {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = sf, this.fragmentShader = af, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Yi(e.uniforms), this.uniformsGroups = nf(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
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
          this.uniforms[n].value = new z().fromArray(i.value);
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
}, of = class extends Mi {
  constructor(e) {
    super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
  }
}, Ki = class extends An {
  constructor(e) {
    super(), this.isMeshStandardMaterial = !0, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ce(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ce(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new ke(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Xi(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}, gn = class extends Ki {
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
    return zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'), [this.iridescenceThicknessMinimum, this.iridescenceThicknessMaximum];
  }
  set iridescenceThicknessRange(e) {
    zi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'), this.iridescenceThicknessMinimum = e[0], this.iridescenceThicknessMaximum = e[1];
  }
  copy(e) {
    return super.copy(e), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.diffuseRoughness = e.diffuseRoughness, this.diffuseRoughnessMap = e.diffuseRoughnessMap, this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessMinimum = e.iridescenceThicknessMinimum, this.iridescenceThicknessMaximum = e.iridescenceThicknessMaximum, this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.retroreflectivity = e.retroreflectivity, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}, lf = class extends An {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Kh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}, cf = class extends An {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
};
function jn(e, t) {
  return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
function _r(e) {
  return e !== void 0 && e.inTangents !== void 0 && e.outTangents !== void 0;
}
function uf(e) {
  function t(r, s) {
    return e[r] - e[s];
  }
  const n = e.length, i = new Array(n);
  for (let r = 0; r !== n; ++r) i[r] = r;
  return i.sort(t), i;
}
function $o(e, t, n) {
  const i = e.length, r = new e.constructor(i);
  for (let s = 0, a = 0; a !== i; ++s) {
    const o = n[s] * t;
    for (let l = 0; l !== t; ++l) r[a++] = e[o + l];
  }
  return r;
}
function hf(e, t, n, i) {
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
var Qi = class {
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
}, df = class extends Qi {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: po,
      endingEnd: po
    };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, s = e + 1, a = i[r], o = i[s];
    if (a === void 0) switch (this.getSettings_().endingStart) {
      case mo:
        r = e, a = 2 * t - n;
        break;
      case go:
        r = i.length - 2, a = t + i[r] - i[r + 1];
        break;
      default:
        r = e, a = n;
    }
    if (o === void 0) switch (this.getSettings_().endingEnd) {
      case mo:
        s = e, o = 2 * n - t;
        break;
      case go:
        s = 1, o = n + i[1] - i[0];
        break;
      default:
        s = e - 1, o = t;
    }
    const l = (n - t) * 0.5, c = this.valueSize;
    this._weightPrev = l / (t - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = this._offsetPrev, u = this._offsetNext, h = this._weightPrev, d = this._weightNext, p = (n - t) / (i - t), m = p * p, _ = m * p, g = -h * _ + 2 * h * m - h * p, f = (1 + h) * _ + (-1.5 - 2 * h) * m + (-0.5 + h) * p + 1, M = (-1 - d) * _ + (1.5 + d) * m + 0.5 * p, b = d * _ - d * m;
    for (let S = 0; S !== a; ++S) r[S] = g * s[c + S] + f * s[l + S] + M * s[o + S] + b * s[u + S];
    return r;
  }
}, ff = class extends Qi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = (n - t) / (i - t), u = 1 - c;
    for (let h = 0; h !== a; ++h) r[h] = s[l + h] * u + s[o + h] * c;
    return r;
  }
}, pf = class extends Qi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}, mf = class extends Qi {
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = e * a, l = o - a, c = this.inTangents, u = this.outTangents;
    if (!c || !u) {
      const p = (n - t) / (i - t), m = 1 - p;
      for (let _ = 0; _ !== a; ++_) r[_] = s[l + _] * m + s[o + _] * p;
      return r;
    }
    const h = a * 2, d = e - 1;
    for (let p = 0; p !== a; ++p) {
      const m = s[l + p], _ = s[o + p], g = d * h + p * 2, f = u[g], M = u[g + 1], b = e * h + p * 2, S = c[b], E = c[b + 1], A = vf(n, t, f, S, i);
      r[p] = Fc(A, m, M, E, _);
    }
    return r;
  }
};
function Fc(e, t, n, i, r) {
  const s = 1 - e;
  return s * s * s * t + 3 * s * s * e * n + 3 * s * e * e * i + e * e * e * r;
}
function gf(e, t, n, i, r) {
  const s = 1 - e;
  return 3 * s * s * (n - t) + 6 * s * e * (i - n) + 3 * e * e * (r - i);
}
function vf(e, t, n, i, r) {
  let s = (e - t) / (r - t);
  for (let a = 0; a < 8; a++) {
    const o = Fc(s, t, n, i, r) - e;
    if (Math.abs(o) < 1e-10) break;
    const l = gf(s, t, n, i, r);
    if (Math.abs(l) < 1e-10) break;
    s = Math.max(0, Math.min(1, s - o / l));
  }
  return s;
}
var vn = class {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = jn(t, this.TimeBufferType), this.values = jn(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: jn(e.times, Array),
        values: jn(e.values, Array)
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i), _r(e.settings) && (n.settings = {
        inTangents: jn(e.settings.inTangents, Array),
        outTangents: jn(e.settings.outTangents, Array)
      });
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new pf(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new ff(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new df(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodBezier(e) {
    const t = new mf(this.times, this.values, this.getValueSize(), e);
    return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Cr:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Pr:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ws:
        t = this.InterpolantFactoryMethodSmooth;
        break;
      case fo:
        t = this.InterpolantFactoryMethodBezier;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return Ee("KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Cr;
      case this.InterpolantFactoryMethodLinear:
        return Pr;
      case this.InterpolantFactoryMethodSmooth:
        return Ws;
      case this.InterpolantFactoryMethodBezier:
        return fo;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
      _r(this.settings) && (Zo(this.settings.inTangents, e), Zo(this.settings.outTangents, e));
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
      _r(this.settings) && (Jo(this.settings.inTangents, e), Jo(this.settings.outTangents, e));
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
    if (i !== void 0 && Zh(i))
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
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Ws, r = e.length - 1;
    let s = 1;
    for (let a = 1; a < r; ++a) {
      let o = !1;
      const l = e[a];
      if (l !== e[a + 1] && (a !== 1 || l !== e[0]))
        if (i)
          o = !0;
        else {
          const c = a * n, u = c - n, h = c + n;
          for (let d = 0; d !== n; ++d) {
            const p = t[c + d];
            if (p !== t[u + d] || p !== t[h + d]) {
              o = !0;
              break;
            }
          }
        }
      if (o) {
        if (a !== s) {
          e[s] = e[a];
          const c = a * n, u = s * n;
          for (let h = 0; h !== n; ++h) t[u + h] = t[c + h];
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
    return i.createInterpolant = this.createInterpolant, _r(this.settings) && (i.settings = {
      inTangents: this.settings.inTangents.slice(),
      outTangents: this.settings.outTangents.slice()
    }), i;
  }
};
function Zo(e, t) {
  for (let n = 0, i = e.length; n !== i; n += 2) e[n] += t;
}
function Jo(e, t) {
  for (let n = 0, i = e.length; n !== i; n += 2) e[n] *= t;
}
vn.prototype.ValueTypeName = "";
vn.prototype.TimeBufferType = Float32Array;
vn.prototype.ValueBufferType = Float32Array;
vn.prototype.DefaultInterpolation = Pr;
var ji = class extends vn {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
ji.prototype.ValueTypeName = "bool";
ji.prototype.ValueBufferType = Array;
ji.prototype.DefaultInterpolation = Cr;
ji.prototype.InterpolantFactoryMethodLinear = void 0;
ji.prototype.InterpolantFactoryMethodSmooth = void 0;
var Bc = class extends vn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
Bc.prototype.ValueTypeName = "color";
var Dr = class extends vn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
Dr.prototype.ValueTypeName = "number";
var _f = class extends Qi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - t) / (i - t);
    let l = e * a;
    for (let c = l + a; l !== c; l += 4) Gn.slerpFlat(r, 0, s, l - a, s, l, o);
    return r;
  }
}, Nr = class extends vn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  InterpolantFactoryMethodLinear(e) {
    return new _f(this.times, this.values, this.getValueSize(), e);
  }
};
Nr.prototype.ValueTypeName = "quaternion";
Nr.prototype.InterpolantFactoryMethodSmooth = void 0;
var er = class extends vn {
  constructor(e, t, n) {
    super(e, t, n);
  }
};
er.prototype.ValueTypeName = "string";
er.prototype.ValueBufferType = Array;
er.prototype.DefaultInterpolation = Cr;
er.prototype.InterpolantFactoryMethodLinear = void 0;
er.prototype.InterpolantFactoryMethodSmooth = void 0;
var Us = class extends vn {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
};
Us.prototype.ValueTypeName = "vector";
var Mf = class {
  constructor(e = "", t = -1, n = [], i = Yh) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = wn(), this.userData = {}, this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let s = 0, a = n.length; s !== a; ++s) t.push(yf(n[s]).scale(i));
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
    for (let r = 0, s = n.length; r !== s; ++r) t.push(vn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, s = [];
    for (let a = 0; a < r; a++) {
      let o = [], l = [];
      o.push((a + r - 1) % r, a, (a + 1) % r), l.push(0, 1, 0);
      const c = uf(o);
      o = $o(o, 1, c), l = $o(l, 1, c), !i && o[0] === 0 && (o.push(r), l.push(l[0])), s.push(new Dr(".morphTargetInfluences[" + t[a].name + "]", o, l).scale(1 / n));
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
        const u = c[1];
        let h = i[u];
        h || (i[u] = h = []), h.push(l);
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
function Sf(e) {
  switch (e.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Dr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Us;
    case "color":
      return Bc;
    case "quaternion":
      return Nr;
    case "bool":
    case "boolean":
      return ji;
    case "string":
      return er;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + e);
}
function yf(e) {
  if (e.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = Sf(e.type);
  if (e.times === void 0) {
    const i = [], r = [];
    hf(e.keys, i, r, "value"), e.times = i, e.values = r;
  }
  let n;
  return t.parse !== void 0 ? n = t.parse(e) : n = new t(e.name, e.times, e.values, e.interpolation), _r(e.settings) && (n.settings = {
    inTangents: jn(e.settings.inTangents, Float32Array),
    outTangents: jn(e.settings.outTangents, Float32Array)
  }), n;
}
var kn = {
  enabled: !1,
  files: {},
  add: function(e, t) {
    this.enabled !== !1 && (Qo(e) || (this.files[e] = t));
  },
  get: function(e) {
    if (this.enabled !== !1 && !Qo(e))
      return this.files[e];
  },
  remove: function(e) {
    delete this.files[e];
  },
  clear: function() {
    this.files = {};
  }
};
function Qo(e) {
  try {
    const t = e.slice(e.indexOf(":") + 1);
    return new URL(t).protocol === "blob:";
  } catch {
    return !1;
  }
}
var xf = class {
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
    }, this.addHandler = function(c, u) {
      return l.push(c, u), this;
    }, this.removeHandler = function(c) {
      const u = l.indexOf(c);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(c) {
      for (let u = 0, h = l.length; u < h; u += 2) {
        const d = l[u], p = l[u + 1];
        if (d.global && (d.lastIndex = 0), d.test(c)) return p;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}, Tf = /* @__PURE__ */ new xf(), tr = class {
  constructor(e) {
    this.manager = e !== void 0 ? e : Tf, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, this.priority = "auto", this.cache = "default", typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
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
tr.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Fn = {}, bf = class extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}, kc = class extends tr {
  constructor(e) {
    super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = kn.get(`file:${e}`);
    if (r !== void 0) {
      this.manager.itemStart(e), setTimeout(() => {
        t && t(r), this.manager.itemEnd(e);
      }, 0);
      return;
    }
    if (Fn[e] !== void 0) {
      Fn[e].push({
        onLoad: t,
        onProgress: n,
        onError: i
      });
      return;
    }
    Fn[e] = [], Fn[e].push({
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
        if (l.status === 0 && Ee("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0) return l;
        const c = Fn[e], u = l.body.getReader(), h = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), d = h ? parseInt(h) : 0, p = d !== 0;
        let m = 0;
        const _ = new ReadableStream({ start(g) {
          f();
          function f() {
            u.read().then(({ done: M, value: b }) => {
              if (M) g.close();
              else {
                m += b.byteLength;
                const S = new ProgressEvent("progress", {
                  lengthComputable: p,
                  loaded: m,
                  total: d
                });
                for (let E = 0, A = c.length; E < A; E++) {
                  const v = c[E];
                  v.onProgress && v.onProgress(S);
                }
                g.enqueue(b), f();
              }
            }, (M) => {
              g.error(M);
            });
          }
        } });
        return new Response(_);
      } else throw new bf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
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
            const c = /charset="?([^;"\s]*)"?/i.exec(a), u = c && c[1] ? c[1].toLowerCase() : void 0, h = new TextDecoder(u);
            return l.arrayBuffer().then((d) => h.decode(d));
          }
      }
    }).then((l) => {
      kn.add(`file:${e}`, l);
      const c = Fn[e];
      delete Fn[e];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u];
        d.onLoad && d.onLoad(l);
      }
    }).catch((l) => {
      const c = Fn[e];
      if (c === void 0)
        throw this.manager.itemError(e), l;
      delete Fn[e];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u];
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
}, Di = /* @__PURE__ */ new WeakMap(), Ef = class extends tr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = kn.get(`image:${e}`);
    if (s !== void 0) {
      if (s.complete === !0)
        r.manager.itemStart(e), setTimeout(function() {
          t && t(s), r.manager.itemEnd(e);
        }, 0);
      else {
        let u = Di.get(s);
        u === void 0 && (u = [], Di.set(s, u)), u.push({
          onLoad: t,
          onError: i
        });
      }
      return s;
    }
    const a = Lr("img");
    function o() {
      c(), t && t(this);
      const u = Di.get(this) || [];
      for (let h = 0; h < u.length; h++) {
        const d = u[h];
        d.onLoad && d.onLoad(this);
      }
      Di.delete(this), r.manager.itemEnd(e);
    }
    function l(u) {
      c(), i && i(u), kn.remove(`image:${e}`);
      const h = Di.get(this) || [];
      for (let d = 0; d < h.length; d++) {
        const p = h[d];
        p.onError && p.onError(u);
      }
      Di.delete(this), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function c() {
      a.removeEventListener("load", o, !1), a.removeEventListener("error", l, !1);
    }
    return a.addEventListener("load", o, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), kn.add(`image:${e}`, a), r.manager.itemStart(e), a.fetchPriority = this.priority, a.src = e, a;
  }
}, Af = class extends tr {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new Ht(), s = new Ef(this.manager);
    return s.setPriority(this.priority), s.setCache(this.cache), s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(a) {
      r.image = a, r.needsUpdate = !0, t !== void 0 && t(r);
    }, n, i), r;
  }
}, Fr = class extends _t {
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
}, jo = class extends Fr {
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
}, ma = /* @__PURE__ */ new Ge(), el = /* @__PURE__ */ new z(), tl = /* @__PURE__ */ new z(), qa = class {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ke(512, 512), this.mapType = si, this.map = null, this.mapPass = null, this.matrix = new Ge(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Ir(), this._frameExtents = new ke(1, 1), this._viewportCount = 1, this._viewports = [new st(0, 0, 1, 1)];
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
    el.setFromMatrixPosition(e.matrixWorld), t.position.copy(el), tl.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(tl), t.updateMatrixWorld(), this._updateMatrix(t, this.matrix, this._frustum);
  }
  _updateMatrix(e, t, n, i) {
    ma.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), n.setFromProjectionMatrix(ma, e.coordinateSystem, e.reversedDepth);
    const r = this._frameExtents, s = i ? i.z / r.x : 1, a = i ? i.w / r.y : 1, o = i ? i.x / r.x : 0, l = i ? i.y / r.y : 0;
    e.coordinateSystem === 2001 || e.reversedDepth ? t.set(0.5 * s, 0, 0, 0.5 * s + o, 0, 0.5 * a, 0, 0.5 * a + l, 0, 0, 1, 0, 0, 0, 0, 1) : t.set(0.5 * s, 0, 0, 0.5 * s + o, 0, 0.5 * a, 0, 0.5 * a + l, 0, 0, 0.5, 0.5, 0, 0, 0, 1), t.multiply(ma);
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
}, fs = /* @__PURE__ */ new z(), ps = /* @__PURE__ */ new Gn(), Mn = /* @__PURE__ */ new z(), zc = class extends _t {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ge(), this.projectionMatrix = new Ge(), this.projectionMatrixInverse = new Ge(), this.coordinateSystem = _i, this._reversedDepth = !1;
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
    super.updateMatrixWorld(e), this.matrixWorld.decompose(fs, ps, Mn), Mn.x === 1 && Mn.y === 1 && Mn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(fs, ps, Mn.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(e, t, n = !1) {
    super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(fs, ps, Mn), Mn.x === 1 && Mn.y === 1 && Mn.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(fs, ps, Mn.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Kn = /* @__PURE__ */ new z(), nl = /* @__PURE__ */ new ke(), il = /* @__PURE__ */ new ke(), qt = class extends zc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Wi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(br * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Wi * 2 * Math.atan(Math.tan(br * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Kn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Kn.x, Kn.y).multiplyScalar(-e / Kn.z), Kn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Kn.x, Kn.y).multiplyScalar(-e / Kn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, nl, il), t.subVectors(il, nl);
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
    let t = e * Math.tan(br * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
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
}, wf = class extends qa {
  constructor() {
    super(new qt(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1, this.aspect = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Wi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height * this.aspect, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this.aspect = e.aspect, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.focus = this.focus, e.aspect = this.aspect, e;
  }
}, Rf = class extends Fr {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, s = 2) {
    super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = s, this.map = null, this.shadow = new wf();
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
}, Cf = class extends qa {
  constructor() {
    super(new qt(90, 1, 0.5, 500)), this.isPointLightShadow = !0;
  }
}, Hc = class extends Fr {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Cf();
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
}, Ya = class extends zc {
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
}, Pf = class extends qa {
  constructor() {
    super(new Ya(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}, Mr = class extends Fr {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(_t.DEFAULT_UP), this.updateMatrix(), this.target = new _t(), this.shadow = new Pf();
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
}, Lf = class extends Fr {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}, Ar = class {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}, ga = /* @__PURE__ */ new WeakMap(), If = class extends tr {
  constructor(e) {
    super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && Ee("ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && Ee("ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" }, this._abortController = new AbortController();
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, s = kn.get(`image-bitmap:${e}`);
    if (s !== void 0) {
      if (r.manager.itemStart(e), s.then) {
        s.then((l) => {
          ga.has(s) === !0 ? (i && i(ga.get(s)), r.manager.itemError(e), r.manager.itemEnd(e)) : (t && t(l), r.manager.itemEnd(e));
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
      return kn.add(`image-bitmap:${e}`, l), t && t(l), r.manager.itemEnd(e), l;
    }).catch(function(l) {
      i && i(l), ga.set(o, l), kn.remove(`image-bitmap:${e}`), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    kn.add(`image-bitmap:${e}`, o), r.manager.itemStart(e);
  }
  abort() {
    return this._abortController.abort(), this._abortController = new AbortController(), this;
  }
}, Ni = -90, Ui = 1, Ra = class extends _t {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new qt(Ni, Ui, e, t);
    i.layers = this.layers, this.add(i);
    const r = new qt(Ni, Ui, e, t);
    r.layers = this.layers, this.add(r);
    const s = new qt(Ni, Ui, e, t);
    s.layers = this.layers, this.add(s);
    const a = new qt(Ni, Ui, e, t);
    a.layers = this.layers, this.add(a);
    const o = new qt(Ni, Ui, e, t);
    o.layers = this.layers, this.add(o);
    const l = new qt(Ni, Ui, e, t);
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
    const [r, s, a, o, l, c] = this.children, u = e.getRenderTarget(), h = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), p = e.xr.enabled;
    e.xr.enabled = !1;
    const m = n.texture.mipmapsAutoUpdate;
    n.texture.mipmapsAutoUpdate = !1;
    let _ = !1;
    e.isWebGLRenderer === !0 ? _ = e.state.buffers.depth.getReversed() : _ = e.reversedDepthBuffer, e.setRenderTarget(n, 0, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, r), e.setRenderTarget(n, 1, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 2, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 3, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, o), e.setRenderTarget(n, 4, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.mipmapsAutoUpdate = m, e.setRenderTarget(n, 5, i), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(u, h, d), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0;
  }
}, Df = class extends qt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e, this.perCameraFrustumCulled = !1;
  }
}, Nf = "\\[\\]\\.:\\/", Uf = /* @__PURE__ */ new RegExp("[\\[\\]\\.:\\/]", "g"), Ka = "[^\\[\\]\\.:\\/]", Of = "[^" + Nf.replace("\\.", "") + "]", Ff = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Ka), Bf = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", Of), kf = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ka), zf = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ka), Hf = new RegExp("^" + Ff + Bf + kf + zf + "$"), Gf = [
  "material",
  "materials",
  "bones",
  "map"
], Vf = class {
  constructor(e, t, n) {
    const i = n || ht.parseTrackName(t);
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
}, ht = class Bi {
  constructor(t, n, i) {
    this.path = n, this.parsedPath = i || Bi.parseTrackName(n), this.node = Bi.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, n, i) {
    return t && t.isAnimationObjectGroup ? new Bi.Composite(t, n, i) : new Bi(t, n, i);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(Uf, "");
  }
  static parseTrackName(t) {
    const n = Hf.exec(t);
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
      Gf.indexOf(s) !== -1 && (i.nodeName = i.nodeName.substring(0, r), i.objectName = s);
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
    if (t || (t = Bi.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      Ee("PropertyBinding: No target node found for track: " + this.path + ".");
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
          for (let u = 0; u < t.length; u++) if (t[u].name === c) {
            c = u;
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
ht.Composite = Vf;
ht.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
ht.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
ht.prototype.GetterByBindingType = [
  ht.prototype._getValue_direct,
  ht.prototype._getValue_array,
  ht.prototype._getValue_arrayElement,
  ht.prototype._getValue_toArray
];
ht.prototype.SetterByBindingTypeAndVersioning = [
  [
    ht.prototype._setValue_direct,
    ht.prototype._setValue_direct_setNeedsUpdate,
    ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    ht.prototype._setValue_array,
    ht.prototype._setValue_array_setNeedsUpdate,
    ht.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    ht.prototype._setValue_arrayElement,
    ht.prototype._setValue_arrayElement_setNeedsUpdate,
    ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    ht.prototype._setValue_fromArray,
    ht.prototype._setValue_fromArray_setNeedsUpdate,
    ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
var h0 = class {
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
function rl(e, t, n, i) {
  const r = Wf(i);
  switch (n) {
    case ch:
      return e * t;
    case tc:
      return e * t / r.components * r.byteLength;
    case nc:
      return e * t / r.components * r.byteLength;
    case Rs:
      return e * t * 2 / r.components * r.byteLength;
    case ic:
      return e * t * 2 / r.components * r.byteLength;
    case uh:
      return e * t * 3 / r.components * r.byteLength;
    case wr:
      return e * t * 4 / r.components * r.byteLength;
    case rc:
      return e * t * 4 / r.components * r.byteLength;
    case hh:
    case dh:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case fh:
    case ph:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case gh:
    case _h:
      return Math.max(e, 16) * Math.max(t, 8) / 4;
    case mh:
    case vh:
      return Math.max(e, 8) * Math.max(t, 8) / 2;
    case Mh:
    case Sh:
    case xh:
    case Th:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case yh:
    case bh:
    case Eh:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Ah:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case wh:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Rh:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Ch:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case Ph:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case Lh:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Ih:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case Dh:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Nh:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Uh:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Oh:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Fh:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Bh:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case kh:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case zh:
    case Hh:
    case Gh:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
    case Vh:
    case Wh:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
    case Xh:
    case qh:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
function Wf(e) {
  switch (e) {
    case si:
    case rh:
      return {
        byteLength: 1,
        components: 1
      };
    case Ql:
    case sh:
    case ai:
      return {
        byteLength: 2,
        components: 1
      };
    case jl:
    case ec:
      return {
        byteLength: 2,
        components: 4
      };
    case vi:
    case ah:
    case Ji:
      return {
        byteLength: 4,
        components: 1
      };
    case oh:
    case lh:
      return {
        byteLength: 4,
        components: 3
      };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "187" } }));
typeof window < "u" && (window.__THREE__ ? Ee("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "187");
function Gc() {
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
function Xf(e) {
  const t = /* @__PURE__ */ new WeakMap();
  function n(o, l) {
    const c = o.array, u = o.usage, h = c.byteLength, d = e.createBuffer();
    e.bindBuffer(l, d), e.bufferData(l, c, u), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array) p = e.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array) p = e.HALF_FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? p = e.HALF_FLOAT : p = e.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) p = e.SHORT;
    else if (c instanceof Uint32Array) p = e.UNSIGNED_INT;
    else if (c instanceof Int32Array) p = e.INT;
    else if (c instanceof Int8Array) p = e.BYTE;
    else if (c instanceof Uint8Array) p = e.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) p = e.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return {
      buffer: d,
      type: p,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: h
    };
  }
  function i(o, l, c) {
    const u = l.array, h = l.updateRanges;
    if (e.bindBuffer(c, o), h.length === 0) e.bufferSubData(c, 0, u);
    else {
      h.sort((p, m) => p.start - m.start);
      let d = 0;
      for (let p = 1; p < h.length; p++) {
        const m = h[d], _ = h[p];
        _.start <= m.start + m.count + 1 ? m.count = Math.max(m.count, _.start + _.count - m.start) : (++d, h[d] = _);
      }
      h.length = d + 1;
      for (let p = 0, m = h.length; p < m; p++) {
        const _ = h[p];
        e.bufferSubData(c, _.start * u.BYTES_PER_ELEMENT, u, _.start, _.count);
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
      const u = t.get(o);
      (!u || u.version < o.version) && t.set(o, {
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
}, Tn = {
  basic: {
    uniforms: /* @__PURE__ */ kt([
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
    uniforms: /* @__PURE__ */ kt([
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
    uniforms: /* @__PURE__ */ kt([
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
    uniforms: /* @__PURE__ */ kt([
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
    uniforms: /* @__PURE__ */ kt([
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
    uniforms: /* @__PURE__ */ kt([
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
    uniforms: /* @__PURE__ */ kt([me.points, me.fog]),
    vertexShader: ze.points_vert,
    fragmentShader: ze.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ kt([
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
    uniforms: /* @__PURE__ */ kt([me.common, me.displacementmap]),
    vertexShader: ze.depth_vert,
    fragmentShader: ze.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ kt([
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
    uniforms: /* @__PURE__ */ kt([me.sprite, me.fog]),
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
    uniforms: /* @__PURE__ */ kt([
      me.common,
      me.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new z() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: ze.distance_vert,
    fragmentShader: ze.distance_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ kt([
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
Tn.physical = {
  uniforms: /* @__PURE__ */ kt([Tn.standard.uniforms, {
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
var ms = {
  r: 0,
  b: 0,
  g: 0
}, qf = /* @__PURE__ */ new Ge(), Vc = /* @__PURE__ */ new Be();
Vc.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function Yf(e, t, n, i, r, s) {
  const a = new Ce(0);
  let o = r === !0 ? 0 : 1, l, c, u = null, h = 0, d = null;
  function p(M) {
    let b = M.isScene === !0 ? M.background : null;
    if (b && b.isTexture) {
      const S = M.backgroundBlurriness > 0;
      b = t.get(b, S);
    }
    return b;
  }
  function m(M) {
    let b = !1;
    const S = p(M);
    S === null ? g(a, o) : S && S.isColor && (g(S, 1), b = !0);
    const E = e.xr.getEnvironmentBlendMode();
    E === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, s) : E === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, s), (e.autoClear || b) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
  }
  function _(M, b) {
    const S = p(b);
    S && S.isCubeTexture ? (c === void 0 && (c = new zt(new Or(1, 1, 1), new Mi({
      name: "BackgroundCubeMaterial",
      uniforms: Yi(Tn.backgroundCube.uniforms),
      vertexShader: Tn.backgroundCube.vertexShader,
      fragmentShader: Tn.backgroundCube.fragmentShader,
      side: 1,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(E, A, v) {
      this.matrixWorld.copyPosition(v.matrixWorld);
    }, Object.defineProperty(c.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(c)), c.material.uniforms.envMap.value = S, c.material.uniforms.backgroundBlurriness.value = b.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(b.backgroundRotation)).transpose(), S.isRenderTargetTexture === !1 && c.material.uniforms.backgroundRotation.value.premultiply(Vc), c.material.toneMapped = qe.getTransfer(S.colorSpace) !== Ps, (u !== S || h !== S.version || d !== e.toneMapping) && (c.material.needsUpdate = !0, u = S, h = S.version, d = e.toneMapping), c.layers.enableAll(), M.unshift(c, c.geometry, c.material, 0, 0, null)) : S && S.isTexture && (l === void 0 && (l = new zt(new Lc(2, 2), new Mi({
      name: "BackgroundMaterial",
      uniforms: Yi(Tn.background.uniforms),
      vertexShader: Tn.background.vertexShader,
      fragmentShader: Tn.background.fragmentShader,
      side: 0,
      depthTest: !1,
      depthWrite: !1,
      fog: !1,
      allowOverride: !1
    })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(l)), l.material.uniforms.t2D.value = S, l.material.uniforms.backgroundIntensity.value = b.backgroundIntensity, l.material.toneMapped = qe.getTransfer(S.colorSpace) !== Ps, S.matrixAutoUpdate === !0 && S.updateMatrix(), l.material.uniforms.uvTransform.value.copy(S.matrix), (u !== S || h !== S.version || d !== e.toneMapping) && (l.material.needsUpdate = !0, u = S, h = S.version, d = e.toneMapping), l.layers.enableAll(), M.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function g(M, b) {
    M.getRGB(ms, Oc(e)), n.buffers.color.setClear(ms.r, ms.g, ms.b, b, s);
  }
  function f() {
    c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(M, b = 1) {
      a.set(M), o = b, g(a, o);
    },
    getClearAlpha: function() {
      return o;
    },
    setClearAlpha: function(M) {
      o = M, g(a, o);
    },
    render: m,
    addToRenderList: _,
    dispose: f
  };
}
function Kf(e, t) {
  const n = e.getParameter(e.MAX_VERTEX_ATTRIBS), i = {}, r = d(null);
  let s = r, a = !1;
  function o(C, N, q, L, H) {
    let $ = !1;
    const B = h(C, L, q, N);
    s !== B && (s = B, c(s.object)), $ = p(C, L, q, H), $ && m(C, L, q, H), H !== null && t.update(H, e.ELEMENT_ARRAY_BUFFER), ($ || a) && (a = !1, S(C, N, q, L), H !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(H).buffer));
  }
  function l() {
    return e.createVertexArray();
  }
  function c(C) {
    return e.bindVertexArray(C);
  }
  function u(C) {
    return e.deleteVertexArray(C);
  }
  function h(C, N, q, L) {
    const H = L.wireframe === !0;
    let $ = i[N.id];
    $ === void 0 && ($ = {}, i[N.id] = $);
    const B = C.isInstancedMesh === !0 ? C.id : 0;
    let ae = $[B];
    ae === void 0 && (ae = {}, $[B] = ae);
    let Y = ae[q.id];
    Y === void 0 && (Y = {}, ae[q.id] = Y);
    let k = Y[H];
    return k === void 0 && (k = d(l()), Y[H] = k), k;
  }
  function d(C) {
    const N = [], q = [], L = [];
    for (let H = 0; H < n; H++)
      N[H] = 0, q[H] = 0, L[H] = 0;
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: N,
      enabledAttributes: q,
      attributeDivisors: L,
      object: C,
      attributes: {},
      index: null
    };
  }
  function p(C, N, q, L) {
    const H = s.attributes, $ = N.attributes;
    let B = 0;
    const ae = q.getAttributes();
    for (const Y in ae) if (ae[Y].location >= 0) {
      const k = H[Y];
      let Q = $[Y];
      if (Q === void 0 && (Y === "instanceMatrix" && C.instanceMatrix && (Q = C.instanceMatrix), Y === "instanceColor" && C.instanceColor && (Q = C.instanceColor)), k === void 0 || k.attribute !== Q || Q && k.data !== Q.data) return !0;
      B++;
    }
    return s.attributesNum !== B || s.index !== L;
  }
  function m(C, N, q, L) {
    const H = {}, $ = N.attributes;
    let B = 0;
    const ae = q.getAttributes();
    for (const Y in ae) if (ae[Y].location >= 0) {
      let k = $[Y];
      k === void 0 && (Y === "instanceMatrix" && C.instanceMatrix && (k = C.instanceMatrix), Y === "instanceColor" && C.instanceColor && (k = C.instanceColor));
      const Q = {};
      Q.attribute = k, k && k.data && (Q.data = k.data), H[Y] = Q, B++;
    }
    s.attributes = H, s.attributesNum = B, s.index = L;
  }
  function _() {
    const C = s.newAttributes;
    for (let N = 0, q = C.length; N < q; N++) C[N] = 0;
  }
  function g(C) {
    f(C, 0);
  }
  function f(C, N) {
    const q = s.newAttributes, L = s.enabledAttributes, H = s.attributeDivisors;
    q[C] = 1, L[C] === 0 && (e.enableVertexAttribArray(C), L[C] = 1), H[C] !== N && (e.vertexAttribDivisor(C, N), H[C] = N);
  }
  function M() {
    const C = s.newAttributes, N = s.enabledAttributes;
    for (let q = 0, L = N.length; q < L; q++) N[q] !== C[q] && (e.disableVertexAttribArray(q), N[q] = 0);
  }
  function b(C, N, q, L, H, $, B) {
    B === !0 ? e.vertexAttribIPointer(C, N, q, H, $) : e.vertexAttribPointer(C, N, q, L, H, $);
  }
  function S(C, N, q, L) {
    _();
    const H = L.attributes, $ = q.getAttributes(), B = N.defaultAttributeValues;
    for (const ae in $) {
      const Y = $[ae];
      if (Y.location >= 0) {
        let k = H[ae];
        if (k === void 0 && (ae === "instanceMatrix" && C.instanceMatrix && (k = C.instanceMatrix), ae === "instanceColor" && C.instanceColor && (k = C.instanceColor)), k !== void 0) {
          const Q = k.normalized, _e = k.itemSize, Z = t.get(k);
          if (Z === void 0) continue;
          const te = Z.buffer, ge = Z.type, Te = Z.bytesPerElement, ye = ge === e.INT || ge === e.UNSIGNED_INT || k.gpuType === 1013;
          if (k.isInterleavedBufferAttribute) {
            const he = k.data, Ve = he.isInterleavedBuffer === !0 ? he.stride : he.itemSize, Je = k.offset;
            if (he.isInstancedInterleavedBuffer || he.isInstancedBufferAttribute) {
              for (let Pe = 0; Pe < Y.locationSize; Pe++) f(Y.location + Pe, he.meshPerAttribute);
              C.isInstancedMesh !== !0 && L._maxInstanceCount === void 0 && (L._maxInstanceCount = he.meshPerAttribute * he.count);
            } else for (let Pe = 0; Pe < Y.locationSize; Pe++) g(Y.location + Pe);
            e.bindBuffer(e.ARRAY_BUFFER, te);
            for (let Pe = 0; Pe < Y.locationSize; Pe++) b(Y.location + Pe, _e / Y.locationSize, ge, Q, Ve * Te, (Je + _e / Y.locationSize * Pe) * Te, ye);
          } else {
            if (k.isInstancedBufferAttribute) {
              for (let he = 0; he < Y.locationSize; he++) f(Y.location + he, k.meshPerAttribute);
              C.isInstancedMesh !== !0 && L._maxInstanceCount === void 0 && (L._maxInstanceCount = k.meshPerAttribute * k.count);
            } else for (let he = 0; he < Y.locationSize; he++) g(Y.location + he);
            e.bindBuffer(e.ARRAY_BUFFER, te);
            for (let he = 0; he < Y.locationSize; he++) b(Y.location + he, _e / Y.locationSize, ge, Q, _e * Te, _e / Y.locationSize * he * Te, ye);
          }
        } else if (B !== void 0) {
          const Q = B[ae];
          if (Q !== void 0) switch (Q.length) {
            case 2:
              e.vertexAttrib2fv(Y.location, Q);
              break;
            case 3:
              e.vertexAttrib3fv(Y.location, Q);
              break;
            case 4:
              e.vertexAttrib4fv(Y.location, Q);
              break;
            default:
              e.vertexAttrib1fv(Y.location, Q);
          }
        }
      }
    }
    M();
  }
  function E() {
    R();
    for (const C in i) {
      const N = i[C];
      for (const q in N) {
        const L = N[q];
        for (const H in L) {
          const $ = L[H];
          for (const B in $)
            u($[B].object), delete $[B];
          delete L[H];
        }
      }
      delete i[C];
    }
  }
  function A(C) {
    if (i[C.id] === void 0) return;
    const N = i[C.id];
    for (const q in N) {
      const L = N[q];
      for (const H in L) {
        const $ = L[H];
        for (const B in $)
          u($[B].object), delete $[B];
        delete L[H];
      }
    }
    delete i[C.id];
  }
  function v(C) {
    for (const N in i) {
      const q = i[N];
      for (const L in q) {
        const H = q[L];
        if (H[C.id] === void 0) continue;
        const $ = H[C.id];
        for (const B in $)
          u($[B].object), delete $[B];
        delete H[C.id];
      }
    }
  }
  function T(C) {
    for (const N in i) {
      const q = i[N], L = C.isInstancedMesh === !0 ? C.id : 0, H = q[L];
      if (H !== void 0) {
        for (const $ in H) {
          const B = H[$];
          for (const ae in B)
            u(B[ae].object), delete B[ae];
          delete H[$];
        }
        delete q[L], Object.keys(q).length === 0 && delete i[N];
      }
    }
  }
  function R() {
    U(), a = !0, s !== r && (s = r, c(s.object));
  }
  function U() {
    r.geometry = null, r.program = null, r.wireframe = !1;
  }
  return {
    setup: o,
    reset: R,
    resetDefaultState: U,
    dispose: E,
    releaseStatesOfGeometry: A,
    releaseStatesOfObject: T,
    releaseStatesOfProgram: v,
    initAttributes: _,
    enableAttribute: g,
    disableUnusedAttributes: M
  };
}
function $f(e, t, n) {
  let i;
  function r(l) {
    i = l;
  }
  function s(l, c) {
    e.drawArrays(i, l, c), n.update(c, i, 1);
  }
  function a(l, c, u) {
    u !== 0 && (e.drawArraysInstanced(i, l, c, u), n.update(c, i, u));
  }
  function o(l, c, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, l, 0, c, 0, u);
    let h = 0;
    for (let d = 0; d < u; d++) h += c[d];
    n.update(h, i, 1);
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o;
}
function Zf(e, t, n, i) {
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
  const u = l(c);
  u !== c && (Ee("WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const h = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control"), d = n.logarithmicDepthBuffer === !0 && h === !1;
  n.reversedDepthBuffer === !0 && h === !1 && Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."), n.logarithmicDepthBuffer === !0 && h === !0 && Ee("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");
  const p = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), m = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = e.getParameter(e.MAX_TEXTURE_SIZE), g = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), f = e.getParameter(e.MAX_VERTEX_ATTRIBS), M = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), b = e.getParameter(e.MAX_VARYING_VECTORS), S = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), E = e.getParameter(e.MAX_SAMPLES), A = e.getParameter(e.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: h,
    maxTextures: p,
    maxVertexTextures: m,
    maxTextureSize: _,
    maxCubemapSize: g,
    maxAttributes: f,
    maxVertexUniforms: M,
    maxVaryings: b,
    maxFragmentUniforms: S,
    maxSamples: E,
    samples: A
  };
}
function Jf(e) {
  const t = this;
  let n = null, i = 0, r = !1, s = !1;
  const a = new Bn(), o = new Be(), l = {
    value: null,
    needsUpdate: !1
  };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(h, d) {
    const p = h.length !== 0 || d || i !== 0 || r;
    return r = d, i = h.length, p;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(h, d) {
    n = u(h, d, 0);
  }, this.setState = function(h, d, p) {
    const m = h.clippingPlanes, _ = h.clipIntersection, g = h.clipShadows, f = e.get(h);
    if (!r || m === null || m.length === 0 || s && !g)
      s ? u(null) : c();
    else {
      const M = s ? 0 : i, b = M * 4;
      let S = f.clippingState || null;
      l.value = S, S = u(m, d, b, p);
      for (let E = 0; E !== b; ++E) S[E] = n[E];
      f.clippingState = S, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += M;
    }
  };
  function c() {
    l.value !== n && (l.value = n, l.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0;
  }
  function u(h, d, p, m) {
    const _ = h !== null ? h.length : 0;
    let g = null;
    if (_ !== 0) {
      if (g = l.value, m !== !0 || g === null) {
        const f = p + _ * 4, M = d.matrixWorldInverse;
        o.getNormalMatrix(M), (g === null || g.length < f) && (g = new Float32Array(f));
        for (let b = 0, S = p; b !== _; ++b, S += 4)
          a.copy(h[b]).applyMatrix4(M, o), a.normal.toArray(g, S), g[S + 3] = a.constant;
      }
      l.value = g, l.needsUpdate = !0;
    }
    return t.numPlanes = _, t.numIntersection = 0, g;
  }
}
var $a = class extends En {
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
    this.texture = new xc(i), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
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
    }, i = new Or(5, 5, 5), r = new Mi({
      name: "CubemapFromEquirect",
      uniforms: Yi(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: 1,
      blending: 0
    });
    r.uniforms.tEquirect.value = t;
    const s = new zt(i, r), a = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = an), new Ra(1, 10, this).update(e, s), t.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
  }
  clear(e, t = !0, n = !0, i = !0) {
    const r = e.getRenderTarget();
    for (let s = 0; s < 6; s++)
      e.setRenderTarget(this, s), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}, sl = 256, Qf = 3, jf = 20, Wc = 256, Xc = 16, ep = 3, tp = /* @__PURE__ */ new z(), np = /* @__PURE__ */ new Ce(), al = class qc {
  constructor(t) {
    this._renderer = t, this._cubeSize = 0, this._sourceTarget = null, this._cubeCamera = new Ra(1, 10, null), this._boxMesh = new zt(new Or(5, 5, 5), null), this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null, this._integrationMaterial = null;
  }
  fromScene(t, n = 0, i = 0.1, r = 100, s = {}) {
    const { size: a = 256, position: o = tp } = s, l = this._renderer;
    this._setSize(a);
    const c = this._allocateTarget(), u = this._getSourceTarget(!0);
    n > 0 && (u.texture.mipmapsAutoUpdate = !1);
    const h = l.autoClear, d = l.autoClearColor, p = l.autoClearDepth, m = l.autoClearStencil, _ = t.background;
    l.autoClear = !0, l.autoClearColor = !0, l.autoClearDepth = !0, l.autoClearStencil = !0, _ === null && (t.background = l.getClearColor(np));
    const g = new Ra(i, r, u);
    return g.position.copy(o), g.update(l, t), l.autoClear = h, l.autoClearColor = d, l.autoClearDepth = p, l.autoClearStencil = m, t.background = _, n > 0 && (u.texture.mipmapsAutoUpdate = !0, this._blur(c, n)), this._applyPMREM(c), c;
  }
  fromEquirectangular(t, n = null) {
    return this._fromTexture(t, n);
  }
  fromCubemap(t, n = null) {
    return this._fromTexture(t, n);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = cl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ll(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._sourceTarget !== null && this._sourceTarget.dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._integrationMaterial !== null && this._integrationMaterial.dispose(), this._boxMesh.geometry.dispose();
  }
  static lodToRoughness(t, n) {
    return n > 0 ? 1 - Math.sqrt(1 - t / n) : 0;
  }
  _setSize(t) {
    this._cubeSize = Math.max(sl, oc(t));
  }
  _fromTexture(t, n) {
    t.mapping === 301 || t.mapping === 302 ? this._setSize(t.image.length === 0 ? sl : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4);
    const i = n || this._allocateTarget();
    return this._textureToCubemap(t), this._applyPMREM(i), i;
  }
  _allocateTarget() {
    const t = this._cubeSize, n = ol(t, !1, !1), i = Math.log2(t) - Qf;
    for (let r = 0; r <= i; r++) n.texture.mipmaps.push({
      width: t >> r,
      height: t >> r
    });
    return n.texture.name = "PMREM", n.texture.isPMREMTexture = !0, n;
  }
  _getSourceTarget(t = !1) {
    const n = this._cubeSize, i = this._sourceTarget;
    return (i === null || i.width !== n || t && i.depthBuffer === !1) && (i !== null && i.dispose(), this._sourceTarget = ol(n, !0, t)), this._sourceTarget;
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
    t.mapping === 301 || t.mapping === 302 ? (this._cubemapMaterial === null && (this._cubemapMaterial = cl()), n = this._cubemapMaterial, n.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : (this._equirectMaterial === null && (this._equirectMaterial = ll()), n = this._equirectMaterial), n.uniforms.envMap.value = t, this._renderCube(this._getSourceTarget(), 0, n);
  }
  _applyPMREM(t) {
    this._ggxMaterial === null && (this._ggxMaterial = ip(), this._integrationMaterial = rp());
    const n = this._cubeSize, i = t.texture.mipmaps.length - 1, r = this._ggxMaterial.uniforms;
    r.envMap.value = this._sourceTarget.texture;
    const s = this._integrationMaterial.uniforms;
    s.envMap.value = this._sourceTarget.texture, s.sourceLod.value = Math.log2(n / Xc);
    for (let a = 0; a <= i; a++) {
      const o = qc.lodToRoughness(a, i);
      if (a > i - ep)
        s.roughness.value = o, this._renderCube(t, a, this._integrationMaterial);
      else {
        const l = o > 0 ? Math.log2(n) + 0.5 * Math.log2(6 / (Wc * Math.pow(o, 4))) + 0.5 : 0;
        r.roughness.value = o, r.lodBias.value = l, this._renderCube(t, a, this._ggxMaterial);
      }
    }
  }
  _blur(t, n) {
    this._blurMaterial === null && (this._blurMaterial = sp());
    const i = this._blurMaterial, r = i.uniforms, s = this._sourceTarget;
    r.sigma.value = Math.min(n, Math.PI) / Math.SQRT2, r.envMap.value = s.texture, this._renderCube(t, 0, i), r.envMap.value = t.texture, this._renderCube(s, 0, i);
  }
};
function ol(e, t, n) {
  return new $a(e, {
    minFilter: Ur,
    generateMipmaps: t,
    type: ai,
    colorSpace: mn,
    depthBuffer: n
  });
}
function Br(e, t, n) {
  return new Mi({
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
function ip() {
  return Br("PMREMGGXConvolution", {
    envMap: { value: null },
    roughness: { value: 0 },
    lodBias: { value: 0 }
  }, `

		#define GGX_SAMPLES ${Wc}u

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
function rp() {
  return Br("PMREMGGXIntegration", {
    envMap: { value: null },
    roughness: { value: 0 },
    sourceLod: { value: 0 },
    sourceSize: { value: Xc }
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
function sp() {
  return Br("PMREMSphericalGaussianBlur", {
    envMap: { value: null },
    sigma: { value: 0 }
  }, `

		#define SAMPLES ${jf}
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
function ll() {
  return Br("PMREMEquirectangularToCubemap", { envMap: { value: null } }, `

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
function cl() {
  return Br("PMREMCubemapToCubemap", {
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
function ap(e) {
  let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i = null;
  function r(d, p = !1) {
    return d == null ? null : p ? a(d) : s(d);
  }
  function s(d) {
    if (d && d.isTexture) {
      const p = d.mapping;
      if (p === 303 || p === 304)
        if (t.has(d)) {
          const m = t.get(d).texture;
          return o(m, d.mapping);
        } else {
          const m = d.image;
          if (m && m.height > 0) {
            const _ = new $a(m.height);
            return _.fromEquirectangularTexture(e, d), t.set(d, _), d.addEventListener("dispose", c), o(_.texture, d.mapping);
          } else return null;
        }
    }
    return d;
  }
  function a(d) {
    if (d && d.isTexture && d.isPMREMTexture !== !0) {
      const p = d.mapping, m = p === 303 || p === 304, _ = p === 301 || p === 302;
      if (m || _) {
        let g = n.get(d);
        const f = g !== void 0 ? g.texture.pmremVersion : 0;
        if (d.isRenderTargetTexture && d.pmremVersion !== f)
          return i === null && (i = new al(e)), g = m ? i.fromEquirectangular(d, g) : i.fromCubemap(d, g), g.texture.pmremVersion = d.pmremVersion, n.set(d, g), g.texture;
        if (g !== void 0) return g.texture;
        {
          const M = d.image;
          return m && M && M.height > 0 || _ && M && l(M) ? (i === null && (i = new al(e)), g = m ? i.fromEquirectangular(d) : i.fromCubemap(d), g.texture.pmremVersion = d.pmremVersion, n.set(d, g), d.addEventListener("dispose", u), g.texture) : null;
        }
      }
    }
    return d;
  }
  function o(d, p) {
    return p === 303 ? d.mapping = 301 : p === 304 && (d.mapping = 302), d;
  }
  function l(d) {
    let p = 0;
    const m = 6;
    for (let _ = 0; _ < m; _++) d[_] !== void 0 && p++;
    return p === m;
  }
  function c(d) {
    const p = d.target;
    p.removeEventListener("dispose", c);
    const m = t.get(p);
    m !== void 0 && (t.delete(p), m.dispose());
  }
  function u(d) {
    const p = d.target;
    p.removeEventListener("dispose", u);
    const m = n.get(p);
    m !== void 0 && (n.delete(p), m.dispose());
  }
  function h() {
    t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), i !== null && (i.dispose(), i = null);
  }
  return {
    get: r,
    dispose: h
  };
}
function op(e) {
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
      return r === null && zi("WebGLRenderer: " + i + " extension not supported."), r;
    }
  };
}
function lp(e, t, n, i) {
  const r = {}, s = /* @__PURE__ */ new WeakMap(), a = new FinalizationRegistry((m) => delete r[m]);
  function o(m) {
    l(m.target);
  }
  function l(m) {
    m.index !== null && t.remove(m.index);
    for (const g in m.attributes) t.remove(m.attributes[g]);
    m.removeEventListener("dispose", o), delete r[m.id], a.unregister(m);
    const _ = s.get(m);
    _ && (t.remove(_), s.delete(m)), i.releaseStatesOfGeometry(m), m.isInstancedBufferGeometry === !0 && delete m._maxInstanceCount, n.memory.geometries--;
  }
  function c(m, _) {
    return r[_.id] !== void 0 || (_.addEventListener("dispose", o), r[_.id] = new WeakRef(_), a.register(_, _.id, _), n.memory.geometries++), _;
  }
  function u(m) {
    const _ = m.attributes;
    for (const g in _) t.update(_[g], e.ARRAY_BUFFER);
  }
  function h(m) {
    const _ = m.index, g = m.attributes.position;
    let f = 0;
    if (g === void 0) return;
    const M = _ !== null ? _.array.length : g.array.length / 3 - 1, b = new (g.count >= 65535 ? pc : fc)(Math.ceil(M / 3) * 6, 1), S = b.array;
    if (_ !== null) {
      const A = _.array;
      f = _.version;
      for (let v = 0, T = 0; v < M; v += 3) {
        const R = A[v + 0], U = A[v + 1], C = A[v + 2];
        S[T++] = R, S[T++] = U, S[T++] = U, S[T++] = C, S[T++] = C, S[T++] = R;
      }
    } else {
      f = g.version;
      for (let A = 0, v = 0; A < M; A += 3) {
        const T = A + 0, R = A + 1, U = A + 2;
        S[v++] = T, S[v++] = R, S[v++] = R, S[v++] = U, S[v++] = U, S[v++] = T;
      }
    }
    b.version = f;
    const E = s.get(m);
    E && t.remove(E), s.set(m, b);
  }
  function d(m) {
    const _ = s.get(m);
    if (_) {
      const g = m.index;
      g !== null && _.version < g.version && h(m);
    } else h(m);
    return s.get(m);
  }
  function p() {
    for (const m in r) {
      const _ = r[m].deref();
      _ !== void 0 && l(_);
    }
  }
  return {
    get: c,
    update: u,
    getWireframeAttribute: d,
    dispose: p
  };
}
function cp(e, t, n) {
  let i;
  function r(h) {
    i = h;
  }
  let s, a;
  function o(h) {
    s = h.type, a = h.bytesPerElement;
  }
  function l(h, d) {
    e.drawElements(i, d, s, h * a), n.update(d, i, 1);
  }
  function c(h, d, p) {
    p !== 0 && (e.drawElementsInstanced(i, d, s, h * a, p), n.update(d, i, p));
  }
  function u(h, d, p) {
    if (p === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, d, 0, s, h, 0, p);
    let m = 0;
    for (let _ = 0; _ < p; _++) m += d[_];
    n.update(m, i, 1);
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u;
}
function up(e) {
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
function hp(e, t, n) {
  const i = /* @__PURE__ */ new WeakMap(), r = new st();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, h = u !== void 0 ? u.length : 0;
    let d = i.get(o);
    if (d === void 0 || d.count !== h) {
      let U = function() {
        T.dispose(), i.delete(o), o.removeEventListener("dispose", U);
      };
      var p = U;
      d !== void 0 && d.texture.dispose();
      const m = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, g = o.morphAttributes.color !== void 0, f = o.morphAttributes.position || [], M = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let S = 0;
      m === !0 && (S = 1), _ === !0 && (S = 2), g === !0 && (S = 3);
      let E = o.attributes.position.count * S, A = 1;
      E > t.maxTextureSize && (A = Math.ceil(E / t.maxTextureSize), E = t.maxTextureSize);
      const v = new Float32Array(E * A * 4 * h), T = new lc(v, E, A, h);
      T.type = Ji, T.needsUpdate = !0;
      const R = S * 4;
      for (let C = 0; C < h; C++) {
        const N = f[C], q = M[C], L = b[C], H = E * A * 4 * C;
        for (let $ = 0; $ < N.count; $++) {
          const B = $ * R;
          m === !0 && (r.fromBufferAttribute(N, $), v[H + B + 0] = r.x, v[H + B + 1] = r.y, v[H + B + 2] = r.z, v[H + B + 3] = 0), _ === !0 && (r.fromBufferAttribute(q, $), v[H + B + 4] = r.x, v[H + B + 5] = r.y, v[H + B + 6] = r.z, v[H + B + 7] = 0), g === !0 && (r.fromBufferAttribute(L, $), v[H + B + 8] = r.x, v[H + B + 9] = r.y, v[H + B + 10] = r.z, v[H + B + 11] = L.itemSize === 4 ? r.w : 1);
        }
      }
      d = {
        count: h,
        texture: T,
        size: new ke(E, A)
      }, i.set(o, d), o.addEventListener("dispose", U);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null) l.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
    else {
      let m = 0;
      for (let g = 0; g < c.length; g++) m += c[g];
      const _ = o.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(e, "morphTargetBaseInfluence", _), l.getUniforms().setValue(e, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), l.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
  }
  return { update: s };
}
function dp(e, t, n, i, r) {
  let s = /* @__PURE__ */ new WeakMap();
  function a(c) {
    const u = r.render.frame, h = c.geometry, d = t.get(c, h);
    if (s.get(d) !== u && (t.update(d), s.set(d, u)), c.isInstancedMesh && (c.hasEventListener("dispose", l) === !1 && c.addEventListener("dispose", l), s.get(c) !== u && (n.update(c.instanceMatrix, e.ARRAY_BUFFER), c.instanceColor !== null && n.update(c.instanceColor, e.ARRAY_BUFFER), s.set(c, u))), c.isSkinnedMesh) {
      const p = c.skeleton;
      s.get(p) !== u && (p.update(), s.set(p, u));
    }
    return d;
  }
  function o() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function l(c) {
    const u = c.target;
    u.removeEventListener("dispose", l), i.releaseStatesOfObject(u), n.remove(u.instanceMatrix), u.instanceColor !== null && n.remove(u.instanceColor);
  }
  return {
    update: a,
    dispose: o
  };
}
var fp = {
  1: "LINEAR_TONE_MAPPING",
  2: "REINHARD_TONE_MAPPING",
  3: "CINEON_TONE_MAPPING",
  4: "ACES_FILMIC_TONE_MAPPING",
  6: "AGX_TONE_MAPPING",
  7: "NEUTRAL_TONE_MAPPING",
  5: "CUSTOM_TONE_MAPPING"
};
function pp(e, t, n, i, r, s) {
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
  const u = new Ut();
  u.setAttribute("position", new tt([
    -1,
    3,
    0,
    -1,
    -1,
    0,
    3,
    -1,
    0
  ], 3)), u.setAttribute("uv", new tt([
    0,
    2,
    0,
    0,
    2,
    0
  ], 2));
  const h = new of({
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
  }), d = new zt(u, h), p = new Ya(-1, 1, 1, -1, 0, 1);
  let m = null, _ = null, g = !1, f, M = null, b = [], S = !1;
  this.setSize = function(E, A) {
    a.setSize(E, A), o !== null && o.setSize(E, A), l !== null && l.setSize(E, A);
    for (let v = 0; v < b.length; v++) {
      const T = b[v];
      T.setSize && T.setSize(E, A);
    }
  }, this.setEffects = function(E) {
    b = E, S = b.length > 0 && b[0].isRenderPass === !0;
    const A = a.width, v = a.height;
    b.length > 0 && o === null && (o = new En(A, v, {
      type: ai,
      depthBuffer: !1,
      stencilBuffer: !1
    }), l = new En(A, v, {
      type: ai,
      depthBuffer: !1,
      stencilBuffer: !1
    }));
    const T = r === !0 && b.some((R) => R.needsDepthTexture === !0);
    T !== (a.depthTexture !== null) && (T === !0 && c === null && (c = new qi(A, v), s === !0 && (c.format = ws, c.type = Ba)), a.dispose(), a.depthTexture = T ? c : null, a.resolveDepthBuffer = T, a.storeMultisampledDepthBuffer = T);
    for (let R = 0; R < b.length; R++) {
      const U = b[R];
      U.setSize && U.setSize(A, v), T && U.needsDepthTexture === !0 && U.setDepthTexture && U.setDepthTexture(c);
    }
  }, this.begin = function(E, A) {
    if (g || E.toneMapping === 0 && b.length === 0) return !1;
    if (M = A, A !== null) {
      const v = A.width, T = A.height;
      (a.width !== v || a.height !== T) && this.setSize(v, T);
    }
    return S === !1 && E.setRenderTarget(a), f = E.toneMapping, E.toneMapping = 0, !0;
  }, this.hasRenderPass = function() {
    return S;
  }, this.end = function(E, A) {
    E.toneMapping = f, g = !0;
    let v = a, T = o;
    for (let R = 0; R < b.length; R++) {
      const U = b[R];
      U.enabled !== !1 && (U.render(E, T, v, A), U.needsSwap !== !1 && (v = T, T = T === o ? l : o));
    }
    if (m !== E.outputColorSpace || _ !== E.toneMapping) {
      m = E.outputColorSpace, _ = E.toneMapping, h.defines = {}, qe.getTransfer(m) === "srgb" && (h.defines.SRGB_TRANSFER = "");
      const R = fp[_];
      R && (h.defines[R] = ""), h.needsUpdate = !0;
    }
    h.uniforms.tDiffuse.value = v.texture, E.setRenderTarget(M), E.render(d, p), M = null, g = !1;
  }, this.isCompositing = function() {
    return g;
  }, this.dispose = function() {
    a.dispose(), o !== null && o.dispose(), l !== null && l.dispose(), u.dispose(), h.dispose();
  };
}
var Yc = /* @__PURE__ */ new Ht(), Kc = /* @__PURE__ */ new qi(1, 1), $c = /* @__PURE__ */ new Tc(1), Zc = /* @__PURE__ */ new lc(), Jc = /* @__PURE__ */ new yd(), Qc = /* @__PURE__ */ new xc(), ul = [], hl = [], dl = /* @__PURE__ */ new Float32Array(16), fl = /* @__PURE__ */ new Float32Array(9), pl = /* @__PURE__ */ new Float32Array(4);
function nr(e, t, n) {
  const i = e[0];
  if (i <= 0 || i > 0) return e;
  const r = t * n;
  let s = ul[r];
  if (s === void 0 && (s = new Float32Array(r), ul[r] = s), t !== 0) {
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
function zs(e, t) {
  let n = hl[t];
  n === void 0 && (n = new Int32Array(t), hl[t] = n);
  for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
  return n;
}
function mp(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function gp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (Mt(n, t)) return;
    e.uniform2fv(this.addr, t), St(n, t);
  }
}
function vp(e, t) {
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
function _p(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (Mt(n, t)) return;
    e.uniform4fv(this.addr, t), St(n, t);
  }
}
function Mp(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (Mt(n, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), St(n, t);
  } else {
    if (Mt(n, i)) return;
    pl.set(i), e.uniformMatrix2fv(this.addr, !1, pl), St(n, i);
  }
}
function Sp(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (Mt(n, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), St(n, t);
  } else {
    if (Mt(n, i)) return;
    fl.set(i), e.uniformMatrix3fv(this.addr, !1, fl), St(n, i);
  }
}
function yp(e, t) {
  const n = this.cache, i = t.elements;
  if (i === void 0) {
    if (Mt(n, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), St(n, t);
  } else {
    if (Mt(n, i)) return;
    dl.set(i), e.uniformMatrix4fv(this.addr, !1, dl), St(n, i);
  }
}
function xp(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function Tp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (Mt(n, t)) return;
    e.uniform2iv(this.addr, t), St(n, t);
  }
}
function bp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else {
    if (Mt(n, t)) return;
    e.uniform3iv(this.addr, t), St(n, t);
  }
}
function Ep(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (Mt(n, t)) return;
    e.uniform4iv(this.addr, t), St(n, t);
  }
}
function Ap(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function wp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
  else {
    if (Mt(n, t)) return;
    e.uniform2uiv(this.addr, t), St(n, t);
  }
}
function Rp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
  else {
    if (Mt(n, t)) return;
    e.uniform3uiv(this.addr, t), St(n, t);
  }
}
function Cp(e, t) {
  const n = this.cache;
  if (t.x !== void 0)
    (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
  else {
    if (Mt(n, t)) return;
    e.uniform4uiv(this.addr, t), St(n, t);
  }
}
function Hs(e) {
  return e.version === 0 && (e.compareFunction = 519, e.needsUpdate = !0), e;
}
function Pp(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r);
  let s;
  this.type === e.SAMPLER_2D_SHADOW ? s = Hs(Kc) : s = Yc, n.setTexture2D(t || s, r);
}
function Lp(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || Jc, r);
}
function Ip(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r);
  let s;
  this.type === e.SAMPLER_CUBE_SHADOW ? s = Hs($c) : s = Qc, n.setTextureCube(t || s, r);
}
function Dp(e, t, n) {
  const i = this.cache, r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || Zc, r);
}
function Np(e) {
  switch (e) {
    case 5126:
      return mp;
    case 35664:
      return gp;
    case 35665:
      return vp;
    case 35666:
      return _p;
    case 35674:
      return Mp;
    case 35675:
      return Sp;
    case 35676:
      return yp;
    case 5124:
    case 35670:
      return xp;
    case 35667:
    case 35671:
      return Tp;
    case 35668:
    case 35672:
      return bp;
    case 35669:
    case 35673:
      return Ep;
    case 5125:
      return Ap;
    case 36294:
      return wp;
    case 36295:
      return Rp;
    case 36296:
      return Cp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Pp;
    case 35679:
    case 36299:
    case 36307:
      return Lp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ip;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Dp;
  }
}
function Up(e, t) {
  e.uniform1fv(this.addr, t);
}
function Op(e, t) {
  const n = nr(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function Fp(e, t) {
  const n = nr(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function Bp(e, t) {
  const n = nr(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function kp(e, t) {
  const n = nr(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function zp(e, t) {
  const n = nr(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function Hp(e, t) {
  const n = nr(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function Gp(e, t) {
  e.uniform1iv(this.addr, t);
}
function Vp(e, t) {
  e.uniform2iv(this.addr, t);
}
function Wp(e, t) {
  e.uniform3iv(this.addr, t);
}
function Xp(e, t) {
  e.uniform4iv(this.addr, t);
}
function qp(e, t) {
  e.uniform1uiv(this.addr, t);
}
function Yp(e, t) {
  e.uniform2uiv(this.addr, t);
}
function Kp(e, t) {
  e.uniform3uiv(this.addr, t);
}
function $p(e, t) {
  e.uniform4uiv(this.addr, t);
}
function Zp(e, t, n) {
  const i = this.cache, r = t.length, s = zs(n, r);
  Mt(i, s) || (e.uniform1iv(this.addr, s), St(i, s));
  let a;
  this.type === e.SAMPLER_2D_SHADOW ? a = Hs(Kc) : a = Yc;
  for (let o = 0; o !== r; ++o) n.setTexture2D(t[o] || a, s[o]);
}
function Jp(e, t, n) {
  const i = this.cache, r = t.length, s = zs(n, r);
  Mt(i, s) || (e.uniform1iv(this.addr, s), St(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture3D(t[a] || Jc, s[a]);
}
function Qp(e, t, n) {
  const i = this.cache, r = t.length, s = zs(n, r);
  Mt(i, s) || (e.uniform1iv(this.addr, s), St(i, s));
  let a;
  this.type === e.SAMPLER_CUBE_SHADOW ? a = Hs($c) : a = Qc;
  for (let o = 0; o !== r; ++o) n.setTextureCube(t[o] || a, s[o]);
}
function jp(e, t, n) {
  const i = this.cache, r = t.length, s = zs(n, r);
  Mt(i, s) || (e.uniform1iv(this.addr, s), St(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture2DArray(t[a] || Zc, s[a]);
}
function em(e) {
  switch (e) {
    case 5126:
      return Up;
    case 35664:
      return Op;
    case 35665:
      return Fp;
    case 35666:
      return Bp;
    case 35674:
      return kp;
    case 35675:
      return zp;
    case 35676:
      return Hp;
    case 5124:
    case 35670:
      return Gp;
    case 35667:
    case 35671:
      return Vp;
    case 35668:
    case 35672:
      return Wp;
    case 35669:
    case 35673:
      return Xp;
    case 5125:
      return qp;
    case 36294:
      return Yp;
    case 36295:
      return Kp;
    case 36296:
      return $p;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Zp;
    case 35679:
    case 36299:
    case 36307:
      return Jp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Qp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return jp;
  }
}
var tm = class {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Np(t.type);
  }
}, nm = class {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = em(t.type);
  }
}, im = class {
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
}, va = /(\w+)(\])?(\[|\.)?/g;
function ml(e, t) {
  e.seq.push(t), e.map[t.id] = t;
}
function rm(e, t, n) {
  const i = e.name, r = i.length;
  for (va.lastIndex = 0; ; ) {
    const s = va.exec(i), a = va.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      ml(n, c === void 0 ? new tm(o, e, t) : new nm(o, e, t));
      break;
    } else {
      let u = n.map[o];
      u === void 0 && (u = new im(o), ml(n, u)), n = u;
    }
  }
}
var xs = class {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const a = e.getActiveUniform(t, s);
      rm(a, e.getUniformLocation(t, a.name), this);
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
function gl(e, t, n) {
  const i = e.createShader(t);
  return e.shaderSource(i, n), e.compileShader(i), i;
}
var sm = 37297, am = 0;
function om(e, t) {
  const n = e.split(`
`), i = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, n.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    i.push(`${o === t ? ">" : " "} ${o}: ${n[a]}`);
  }
  return i.join(`
`);
}
var vl = /* @__PURE__ */ new Be();
function lm(e) {
  qe._getMatrix(vl, qe.workingColorSpace, e);
  const t = `mat3( ${vl.elements.map((n) => n.toFixed(4))} )`;
  switch (qe.getTransfer(e)) {
    case Cs:
      return [t, "LinearTransferOETF"];
    case Ps:
      return [t, "sRGBTransferOETF"];
    default:
      return Ee("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
  }
}
function _l(e, t, n) {
  const i = e.getShaderParameter(t, e.COMPILE_STATUS), r = (e.getShaderInfoLog(t) || "").trim();
  if (i && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return n.toUpperCase() + `

` + r + `

` + om(e.getShaderSource(t), a);
  } else return r;
}
function cm(e, t) {
  const n = lm(t);
  return [
    `vec4 ${e}( vec4 value ) {`,
    `	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,
    "}"
  ].join(`
`);
}
var um = {
  1: "Linear",
  2: "Reinhard",
  3: "Cineon",
  4: "ACESFilmic",
  6: "AgX",
  7: "Neutral",
  5: "Custom"
};
function hm(e, t) {
  const n = um[t];
  return n === void 0 ? (Ee("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var gs = /* @__PURE__ */ new z();
function dm() {
  return qe.getLuminanceCoefficients(gs), [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${gs.x.toFixed(4)}, ${gs.y.toFixed(4)}, ${gs.z.toFixed(4)} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function fm(e) {
  return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Sr).join(`
`);
}
function pm(e) {
  const t = [];
  for (const n in e) {
    const i = e[n];
    i !== !1 && t.push("#define " + n + " " + i);
  }
  return t.join(`
`);
}
function mm(e, t) {
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
function Sr(e) {
  return e !== "";
}
function Ml(e, t) {
  const n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return e.replace(/NUM_SUN_LIGHTS/g, t.numSunLights).replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g, t.numLightProbeGrids);
}
function Sl(e, t) {
  return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var gm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ca(e) {
  return e.replace(gm, vm);
}
function vm(e, t) {
  const n = ze[t];
  if (n === void 0) throw new Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
  return Ca(n);
}
var _m = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function yl(e) {
  return e.replace(_m, Mm);
}
function Mm(e, t, n, i) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(n); s++) r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function xl(e) {
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
var Sm = {
  1: "SHADOWMAP_TYPE_PCF",
  3: "SHADOWMAP_TYPE_VSM"
};
function ym(e) {
  return Sm[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var xm = { 302: "ENVMAP_MODE_REFRACTION" };
function Tm(e) {
  return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : xm[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var bm = {
  0: "ENVMAP_BLENDING_MULTIPLY",
  1: "ENVMAP_BLENDING_MIX",
  2: "ENVMAP_BLENDING_ADD"
};
function Em(e) {
  return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : bm[e.combine] || "ENVMAP_BLENDING_NONE";
}
function Am(e, t, n, i) {
  const r = e.getContext(), s = n.defines;
  let a = n.vertexShader, o = n.fragmentShader;
  const l = ym(n), c = n.envMapPMREM === !0 ? "ENVMAP_TYPE_PMREM" : "ENVMAP_TYPE_CUBE", u = Tm(n), h = Em(n), d = fm(n), p = pm(s), m = r.createProgram();
  let _, g, f = n.glslVersion ? "#version " + n.glslVersion + `
` : "";
  n.isRawShaderMaterial ? (_ = [
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    p
  ].filter(Sr).join(`
`), _.length > 0 && (_ += `
`), g = [
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    p
  ].filter(Sr).join(`
`), g.length > 0 && (g += `
`)) : (_ = [
    xl(n),
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    p,
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
    n.envMap ? "#define " + u : "",
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
  ].filter(Sr).join(`
`), g = [
    xl(n),
    "#define SHADER_TYPE " + n.shaderType,
    "#define SHADER_NAME " + n.shaderName,
    p,
    n.useFog && n.fog ? "#define USE_FOG" : "",
    n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
    n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    n.map ? "#define USE_MAP" : "",
    n.matcap ? "#define USE_MATCAP" : "",
    n.envMap ? "#define USE_ENVMAP" : "",
    n.envMap ? "#define " + c : "",
    n.envMap ? "#define " + u : "",
    n.envMap ? "#define " + h : "",
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
    n.toneMapping !== 0 ? hm("toneMapping", n.toneMapping) : "",
    n.dithering ? "#define DITHERING" : "",
    n.opaque ? "#define OPAQUE" : "",
    ze.colorspace_pars_fragment,
    cm("linearToOutputTexel", n.outputColorSpace),
    dm(),
    n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
    `
`
  ].filter(Sr).join(`
`)), a = Ca(a), a = Ml(a, n), a = Sl(a, n), o = Ca(o), o = Ml(o, n), o = Sl(o, n), a = yl(a), o = yl(o), n.isRawShaderMaterial !== !0 && (f = `#version 300 es
`, _ = [
    d,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + _, g = [
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
` + g);
  const M = f + _ + a, b = f + g + o, S = gl(r, r.VERTEX_SHADER, M), E = gl(r, r.FRAGMENT_SHADER, b);
  r.attachShader(m, S), r.attachShader(m, E), n.index0AttributeName !== void 0 ? r.bindAttribLocation(m, 0, n.index0AttributeName) : n.hasPositionAttribute === !0 && r.bindAttribLocation(m, 0, "position"), r.linkProgram(m);
  function A(U) {
    if (e.debug.checkShaderErrors) {
      const C = r.getProgramInfoLog(m) || "", N = r.getShaderInfoLog(S) || "", q = r.getShaderInfoLog(E) || "", L = C.trim(), H = N.trim(), $ = q.trim();
      let B = !0, ae = !0;
      if (r.getProgramParameter(m, r.LINK_STATUS) === !1)
        if (B = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(r, m, S, E);
        else {
          const Y = _l(r, S, "vertex"), k = _l(r, E, "fragment");
          De("WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(m, r.VALIDATE_STATUS) + `

Material Name: ` + U.name + `
Material Type: ` + U.type + `

Program Info Log: ` + L + `
` + Y + `
` + k);
        }
      else L !== "" ? Ee("WebGLProgram: Program Info Log:", L) : (H === "" || $ === "") && (ae = !1);
      ae && (U.diagnostics = {
        runnable: B,
        programLog: L,
        vertexShader: {
          log: H,
          prefix: _
        },
        fragmentShader: {
          log: $,
          prefix: g
        }
      });
    }
    r.deleteShader(S), r.deleteShader(E), v = new xs(r, m), T = mm(r, m);
  }
  let v;
  this.getUniforms = function() {
    return v === void 0 && A(this), v;
  };
  let T;
  this.getAttributes = function() {
    return T === void 0 && A(this), T;
  };
  let R = n.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return R === !1 && (R = r.getProgramParameter(m, sm)), R;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), r.deleteProgram(m), this.program = void 0;
  }, this.type = n.shaderType, this.name = n.shaderName, this.id = am++, this.cacheKey = t, this.usedTimes = 1, this.program = m, this.vertexShader = S, this.fragmentShader = E, this;
}
var wm = 0, Rm = class {
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
    return n === void 0 && (n = new Cm(e), t.set(e, n)), n;
  }
}, Cm = class {
  constructor(e) {
    this.id = wm++, this.code = e, this.usedTimes = 0;
  }
};
function Pm(e) {
  return e === 1030 || e === 37490 || e === 36285;
}
function Lm(e, t, n, i, r, s) {
  const a = new hc(), o = new Rm(), l = /* @__PURE__ */ new Set(), c = [], u = /* @__PURE__ */ new Map(), h = i.logarithmicDepthBuffer, d = {
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
  function p(v) {
    return l.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function m(v, T, R, U, C, N) {
    const q = U.fog, L = C.geometry, H = v.isMeshStandardMaterial || v.isMeshLambertMaterial || v.isMeshPhongMaterial ? U.environment : null, $ = v.isMeshStandardMaterial || v.isMeshLambertMaterial && !v.envMap || v.isMeshPhongMaterial && !v.envMap, B = t.get(v.envMap || H, $), ae = d[v.type];
    let Y = i.precision;
    v.precision !== null && (Y = i.getMaxPrecision(v.precision), Y !== v.precision && Ee("WebGLProgram.getParameters:", v.precision, "not supported, using", Y, "instead."));
    const k = L.morphAttributes.position || L.morphAttributes.normal || L.morphAttributes.color, Q = k !== void 0 ? k.length : 0;
    let _e = 0;
    L.morphAttributes.position !== void 0 && (_e = 1), L.morphAttributes.normal !== void 0 && (_e = 2), L.morphAttributes.color !== void 0 && (_e = 3);
    let Z, te, ge, Te;
    if (ae) {
      const ve = Tn[ae];
      Z = ve.vertexShader, te = ve.fragmentShader;
    } else {
      Z = v.vertexShader, te = v.fragmentShader;
      const ve = o.getVertexShaderStage(v), lt = o.getFragmentShaderStage(v);
      o.update(v, ve, lt), ge = ve.id, Te = lt.id;
    }
    const ye = e.getRenderTarget(), he = e.state.buffers.depth.getReversed(), Ve = C.isInstancedMesh === !0, Je = C.isBatchedMesh === !0, Pe = !!v.map, Tt = !!v.matcap, Ot = !!B, bt = Ot && B.isPMREMTexture === !0, mt = !!v.aoMap, Gt = !!v.lightMap, $t = !!v.bumpMap && v.wireframe === !1, gt = !!v.normalMap, wt = !!v.displacementMap, Vt = !!v.emissiveMap, Wt = !!v.metalnessMap, ln = !!v.roughnessMap, O = v.anisotropy > 0, cn = v.clearcoat > 0, nt = v.diffuseRoughness > 0, yt = v.dispersion > 0, pe = v.retroreflectivity > 0, it = v.iridescence > 0, Le = v.sheen > 0, Oe = v.transmission > 0, Rt = O && !!v.anisotropyMap, w = cn && !!v.clearcoatMap, y = cn && !!v.clearcoatNormalMap, V = cn && !!v.clearcoatRoughnessMap, ne = nt && !!v.diffuseRoughnessMap, J = it && !!v.iridescenceMap, oe = it && !!v.iridescenceThicknessMap, le = Le && !!v.sheenColorMap, D = Le && !!v.sheenRoughnessMap, ee = !!v.specularMap, Se = !!v.specularColorMap, P = !!v.specularIntensityMap, K = Oe && !!v.transmissionMap, j = Oe && !!v.thicknessMap, re = !!v.gradientMap, de = !!v.alphaMap, ce = v.alphaTest > 0, we = !!v.alphaHash, ie = !!v.extensions;
    let Ue = 0;
    v.toneMapped && (ye === null || ye.isXRRenderTarget === !0) && (Ue = e.toneMapping);
    const Ie = bt ? B.isCompressedCubeTexture ? B.image[0].mipmaps : B.mipmaps : null, Ke = {
      shaderID: ae,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: Z,
      fragmentShader: te,
      defines: v.defines,
      customVertexShaderID: ge,
      customFragmentShaderID: Te,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: Y,
      batching: Je,
      batchingColor: Je && C._colorsTexture !== null,
      instancing: Ve,
      instancingColor: Ve && C.instanceColor !== null,
      instancingMorph: Ve && C.morphTexture !== null,
      outputColorSpace: ye === null ? e.outputColorSpace : ye.isXRRenderTarget === !0 ? ye.texture.colorSpace : qe.workingColorSpace,
      alphaToCoverage: !!v.alphaToCoverage,
      map: Pe,
      matcap: Tt,
      envMap: Ot,
      envMapMode: Ot && B.mapping,
      envMapPMREM: bt,
      envMapMaxLod: bt ? Ie.length - 1 : null,
      envMapSize: bt ? Ie[0].width : null,
      aoMap: mt,
      lightMap: Gt,
      bumpMap: $t,
      normalMap: gt,
      displacementMap: wt,
      emissiveMap: Vt,
      normalMapObjectSpace: gt && v.normalMapType === 1,
      normalMapTangentSpace: gt && v.normalMapType === 0,
      packedNormalMap: gt && v.normalMapType === 0 && Pm(v.normalMap.format),
      metalnessMap: Wt,
      roughnessMap: ln,
      anisotropy: O,
      anisotropyMap: Rt,
      clearcoat: cn,
      clearcoatMap: w,
      clearcoatNormalMap: y,
      clearcoatRoughnessMap: V,
      diffuseRoughness: nt,
      diffuseRoughnessMap: ne,
      dispersion: yt,
      retroreflection: pe,
      iridescence: it,
      iridescenceMap: J,
      iridescenceThicknessMap: oe,
      sheen: Le,
      sheenColorMap: le,
      sheenRoughnessMap: D,
      specularMap: ee,
      specularColorMap: Se,
      specularIntensityMap: P,
      transmission: Oe,
      transmissionMap: K,
      thicknessMap: j,
      gradientMap: re,
      opaque: v.transparent === !1 && v.blending === 1 && v.alphaToCoverage === !1,
      alphaMap: de,
      alphaTest: ce,
      alphaHash: we,
      combine: v.combine,
      mapUv: Pe && p(v.map.channel),
      aoMapUv: mt && p(v.aoMap.channel),
      lightMapUv: Gt && p(v.lightMap.channel),
      bumpMapUv: $t && p(v.bumpMap.channel),
      normalMapUv: gt && p(v.normalMap.channel),
      displacementMapUv: wt && p(v.displacementMap.channel),
      emissiveMapUv: Vt && p(v.emissiveMap.channel),
      metalnessMapUv: Wt && p(v.metalnessMap.channel),
      roughnessMapUv: ln && p(v.roughnessMap.channel),
      anisotropyMapUv: Rt && p(v.anisotropyMap.channel),
      clearcoatMapUv: w && p(v.clearcoatMap.channel),
      clearcoatNormalMapUv: y && p(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: V && p(v.clearcoatRoughnessMap.channel),
      diffuseRoughnessMapUv: ne && p(v.diffuseRoughnessMap.channel),
      iridescenceMapUv: J && p(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: oe && p(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: le && p(v.sheenColorMap.channel),
      sheenRoughnessMapUv: D && p(v.sheenRoughnessMap.channel),
      specularMapUv: ee && p(v.specularMap.channel),
      specularColorMapUv: Se && p(v.specularColorMap.channel),
      specularIntensityMapUv: P && p(v.specularIntensityMap.channel),
      transmissionMapUv: K && p(v.transmissionMap.channel),
      thicknessMapUv: j && p(v.thicknessMap.channel),
      alphaMapUv: de && p(v.alphaMap.channel),
      vertexTangents: !!L.attributes.tangent && (gt || O),
      vertexNormals: !!L.attributes.normal,
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!L.attributes.color && L.attributes.color.itemSize === 4,
      pointsUvs: C.isPoints === !0 && !!L.attributes.uv && (Pe || de),
      fog: !!q,
      useFog: v.fog === !0,
      fogExp2: !!q && q.isFogExp2,
      flatShading: v.wireframe === !1 && (v.flatShading === !0 || L.attributes.normal === void 0 && gt === !1 && (v.isMeshLambertMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isMeshPhysicalMaterial)),
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reversedDepthBuffer: he,
      skinning: C.isSkinnedMesh === !0,
      hasPositionAttribute: L.attributes.position !== void 0,
      morphTargets: L.morphAttributes.position !== void 0,
      morphNormals: L.morphAttributes.normal !== void 0,
      morphColors: L.morphAttributes.color !== void 0,
      morphTargetsCount: Q,
      morphTextureStride: _e,
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
      numLightProbeGrids: N.filter((ve) => ve.texture !== null).length,
      numClippingPlanes: s.numPlanes,
      numClipIntersection: s.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: e.shadowMap.enabled && R.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: Ue,
      decodeVideoTexture: Pe && v.map.isVideoTexture === !0 && qe.getTransfer(v.map.colorSpace) === "srgb",
      decodeVideoTextureEmissive: Vt && v.emissiveMap.isVideoTexture === !0 && qe.getTransfer(v.emissiveMap.colorSpace) === "srgb",
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === 2,
      flipSided: v.side === 1,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionClipCullDistance: ie && v.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (ie && v.extensions.multiDraw === !0 || Je) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
    return Ke.vertexUv1s = l.has(1), Ke.vertexUv2s = l.has(2), Ke.vertexUv3s = l.has(3), l.clear(), Ke;
  }
  function _(v) {
    const T = [];
    if (v.shaderID ? T.push(v.shaderID) : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)), v.defines !== void 0) for (const R in v.defines)
      T.push(R), T.push(v.defines[R]);
    return v.isRawShaderMaterial === !1 && (g(T, v), f(T, v), T.push(e.outputColorSpace)), T.push(v.customProgramCacheKey), T.join();
  }
  function g(v, T) {
    v.push(T.precision), v.push(T.outputColorSpace), v.push(T.envMapMode), v.push(T.envMapPMREM), v.push(T.envMapMaxLod), v.push(T.envMapSize), v.push(T.mapUv), v.push(T.alphaMapUv), v.push(T.lightMapUv), v.push(T.aoMapUv), v.push(T.bumpMapUv), v.push(T.normalMapUv), v.push(T.displacementMapUv), v.push(T.emissiveMapUv), v.push(T.metalnessMapUv), v.push(T.roughnessMapUv), v.push(T.anisotropyMapUv), v.push(T.clearcoatMapUv), v.push(T.clearcoatNormalMapUv), v.push(T.clearcoatRoughnessMapUv), v.push(T.diffuseRoughnessMapUv), v.push(T.iridescenceMapUv), v.push(T.iridescenceThicknessMapUv), v.push(T.sheenColorMapUv), v.push(T.sheenRoughnessMapUv), v.push(T.specularMapUv), v.push(T.specularColorMapUv), v.push(T.specularIntensityMapUv), v.push(T.transmissionMapUv), v.push(T.thicknessMapUv), v.push(T.combine), v.push(T.fogExp2), v.push(T.sizeAttenuation), v.push(T.morphTargetsCount), v.push(T.numSunLights), v.push(T.numDirLights), v.push(T.numPointLights), v.push(T.numSpotLights), v.push(T.numSpotLightMaps), v.push(T.numHemiLights), v.push(T.numRectAreaLights), v.push(T.numSunLightShadows), v.push(T.numDirLightShadows), v.push(T.numPointLightShadows), v.push(T.numSpotLightShadows), v.push(T.numSpotLightShadowsWithMaps), v.push(T.numLightProbes), v.push(T.numLightProbeGrids), v.push(T.shadowMapType), v.push(T.toneMapping), v.push(T.numClippingPlanes), v.push(T.numClipIntersection), v.push(T.depthPacking);
  }
  function f(v, T) {
    a.disableAll(), T.instancing && a.enable(0), T.instancingColor && a.enable(1), T.instancingMorph && a.enable(2), T.matcap && a.enable(3), T.envMap && a.enable(4), T.normalMapObjectSpace && a.enable(5), T.normalMapTangentSpace && a.enable(6), T.clearcoat && a.enable(7), T.iridescence && a.enable(8), T.alphaTest && a.enable(9), T.vertexColors && a.enable(10), T.vertexAlphas && a.enable(11), T.vertexUv1s && a.enable(12), T.vertexUv2s && a.enable(13), T.vertexUv3s && a.enable(14), T.vertexTangents && a.enable(15), T.anisotropy && a.enable(16), T.alphaHash && a.enable(17), T.batching && a.enable(18), T.dispersion && a.enable(19), T.retroreflection && a.enable(24), T.diffuseRoughness && a.enable(25), T.batchingColor && a.enable(20), T.gradientMap && a.enable(21), T.packedNormalMap && a.enable(22), T.vertexNormals && a.enable(23), v.push(a.mask), a.disableAll(), T.fog && a.enable(0), T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(3), T.reversedDepthBuffer && a.enable(4), T.skinning && a.enable(5), T.morphTargets && a.enable(6), T.morphNormals && a.enable(7), T.morphColors && a.enable(8), T.premultipliedAlpha && a.enable(9), T.shadowMapEnabled && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a.enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission && a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18), T.decodeVideoTexture && a.enable(19), T.decodeVideoTextureEmissive && a.enable(20), T.alphaToCoverage && a.enable(21), T.numLightProbeGrids > 0 && a.enable(22), T.hasPositionAttribute && a.enable(23), v.push(a.mask);
  }
  function M(v) {
    const T = d[v.type];
    let R;
    if (T) {
      const U = Tn[T];
      R = rf.clone(U.uniforms);
    } else R = v.uniforms;
    return R;
  }
  function b(v, T) {
    let R = u.get(T);
    return R !== void 0 ? ++R.usedTimes : (R = new Am(e, T, v, r), c.push(R), u.set(T, R)), R;
  }
  function S(v) {
    if (--v.usedTimes === 0) {
      const T = c.indexOf(v);
      c[T] = c[c.length - 1], c.pop(), u.delete(v.cacheKey), v.destroy();
    }
  }
  function E(v) {
    o.remove(v);
  }
  function A() {
    o.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: _,
    getUniforms: M,
    acquireProgram: b,
    releaseProgram: S,
    releaseShaderCache: E,
    programs: c,
    dispose: A
  };
}
function Im() {
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
function Dm(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.materialVariant !== t.materialVariant ? e.materialVariant - t.materialVariant : e.z !== t.z ? e.z - t.z : e.id - t.id;
}
function Tl(e, t) {
  return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id;
}
function bl() {
  const e = [];
  let t = 0;
  const n = [], i = [], r = [];
  function s() {
    t = 0, n.length = 0, i.length = 0, r.length = 0;
  }
  function a(d) {
    let p = 0;
    return d.isInstancedMesh && (p += 2), d.isSkinnedMesh && (p += 1), p;
  }
  function o(d, p, m, _, g, f) {
    let M = e[t];
    return M === void 0 ? (M = {
      id: d.id,
      object: d,
      geometry: p,
      material: m,
      materialVariant: a(d),
      groupOrder: _,
      renderOrder: d.renderOrder,
      z: g,
      group: f
    }, e[t] = M) : (M.id = d.id, M.object = d, M.geometry = p, M.material = m, M.materialVariant = a(d), M.groupOrder = _, M.renderOrder = d.renderOrder, M.z = g, M.group = f), t++, M;
  }
  function l(d, p, m, _, g, f, M) {
    M.reversedDepth === !0 && (g = -g);
    const b = o(d, p, m, _, g, f);
    m.transmission > 0 ? i.push(b) : m.transparent === !0 ? r.push(b) : n.push(b);
  }
  function c(d, p, m, _, g, f) {
    const M = o(d, p, m, _, g, f);
    m.transmission > 0 ? i.unshift(M) : m.transparent === !0 ? r.unshift(M) : n.unshift(M);
  }
  function u(d, p) {
    n.length > 1 && n.sort(d || Dm), i.length > 1 && i.sort(p || Tl), r.length > 1 && r.sort(p || Tl);
  }
  function h() {
    for (let d = t, p = e.length; d < p; d++) {
      const m = e[d];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: s,
    push: l,
    unshift: c,
    finish: h,
    sort: u
  };
}
function Nm() {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r) {
    const s = e.get(i);
    let a;
    return s === void 0 ? (a = new bl(), e.set(i, [a])) : r >= s.length ? (a = new bl(), s.push(a)) : a = s[r], a;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: n
  };
}
function Um() {
  const e = {};
  return { get: function(t) {
    if (e[t.id] !== void 0) return e[t.id];
    let n;
    switch (t.type) {
      case "SunLight":
      case "DirectionalLight":
        n = {
          direction: new z(),
          color: new Ce()
        };
        break;
      case "SpotLight":
        n = {
          position: new z(),
          direction: new z(),
          color: new Ce(),
          distance: 0,
          coneCos: 0,
          penumbraCos: 0,
          decay: 0
        };
        break;
      case "PointLight":
        n = {
          position: new z(),
          color: new Ce(),
          distance: 0,
          decay: 0
        };
        break;
      case "HemisphereLight":
        n = {
          direction: new z(),
          skyColor: new Ce(),
          groundColor: new Ce()
        };
        break;
      case "RectAreaLight":
        n = {
          color: new Ce(),
          position: new z(),
          halfWidth: new z(),
          halfHeight: new z()
        };
    }
    return e[t.id] = n, n;
  } };
}
function Om() {
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
var Fm = 0;
function Bm(e, t) {
  return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0);
}
function km(e) {
  const t = new Um(), n = Om(), i = {
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
  for (let c = 0; c < 9; c++) i.probe.push(new z());
  const r = new z(), s = new Ge(), a = new Ge();
  function o(c) {
    let u = 0, h = 0, d = 0;
    for (let N = 0; N < 9; N++) i.probe[N].set(0, 0, 0);
    let p = 0, m = 0, _ = 0, g = 0, f = 0, M = 0, b = 0, S = 0, E = 0, A = 0, v = 0, T = 0, R = 0, U = 0;
    c.sort(Bm);
    for (let N = 0, q = c.length; N < q; N++) {
      const L = c[N], H = L.color, $ = L.intensity, B = L.distance;
      let ae = null;
      if (L.shadow && L.shadow.map && (L.shadow.map.texture.format === 1030 ? ae = L.shadow.map.texture : ae = L.shadow.map.depthTexture || L.shadow.map.texture), L.isAmbientLight)
        u += H.r * $, h += H.g * $, d += H.b * $;
      else if (L.isLightProbe) {
        for (let Y = 0; Y < 9; Y++) i.probe[Y].addScaledVector(L.sh.coefficients[Y], $);
        U++;
      } else if (L.isSunLight) {
        const Y = t.get(L);
        if (Y.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
          const k = L.shadow, Q = n.get(L);
          Q.shadowIntensity = k.intensity, Q.shadowBias = k.bias, Q.shadowNormalBias = k.normalBias, Q.shadowRadius = k.radius, Q.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()), i.sunShadow[m] = Q, i.sunShadowMap[m] = ae;
          const _e = k.getViewportCount();
          for (let Z = 0; Z < _e; Z++)
            i.sunShadowMatrix[_ + Z] = k.getMatrix(Z), i.sunShadowCascade[_ + Z] = k._cascadeData[Z];
          _ += _e, m++;
        }
        i.sun[p] = Y, p++;
      } else if (L.isDirectionalLight) {
        const Y = t.get(L);
        if (Y.color.copy(L.color).multiplyScalar(L.intensity), L.castShadow) {
          const k = L.shadow, Q = n.get(L);
          Q.shadowIntensity = k.intensity, Q.shadowBias = k.bias, Q.shadowNormalBias = k.normalBias, Q.shadowRadius = k.radius, Q.shadowMapSize = k.mapSize, i.directionalShadow[g] = Q, i.directionalShadowMap[g] = ae, i.directionalShadowMatrix[g] = L.shadow.matrix, E++;
        }
        i.directional[g] = Y, g++;
      } else if (L.isSpotLight) {
        const Y = t.get(L);
        Y.position.setFromMatrixPosition(L.matrixWorld), Y.color.copy(H).multiplyScalar($), Y.distance = B, Y.coneCos = Math.cos(L.angle), Y.penumbraCos = Math.cos(L.angle * (1 - L.penumbra)), Y.decay = L.decay, i.spot[M] = Y;
        const k = L.shadow;
        if (L.map && (i.spotLightMap[T] = L.map, T++, k.updateMatrices(L), L.castShadow && R++), i.spotLightMatrix[M] = k.matrix, L.castShadow) {
          const Q = n.get(L);
          Q.shadowIntensity = k.intensity, Q.shadowBias = k.bias, Q.shadowNormalBias = k.normalBias, Q.shadowRadius = k.radius, Q.shadowMapSize = k.mapSize, i.spotShadow[M] = Q, i.spotShadowMap[M] = ae, v++;
        }
        M++;
      } else if (L.isRectAreaLight) {
        const Y = t.get(L);
        Y.color.copy(H).multiplyScalar($), Y.halfWidth.set(L.width * 0.5, 0, 0), Y.halfHeight.set(0, L.height * 0.5, 0), i.rectArea[b] = Y, b++;
      } else if (L.isPointLight) {
        const Y = t.get(L);
        if (Y.color.copy(L.color).multiplyScalar(L.intensity), Y.distance = L.distance, Y.decay = L.decay, L.castShadow) {
          const k = L.shadow, Q = n.get(L);
          Q.shadowIntensity = k.intensity, Q.shadowBias = k.bias, Q.shadowNormalBias = k.normalBias, Q.shadowRadius = k.radius, Q.shadowMapSize = k.mapSize, Q.shadowCameraNear = k.camera.near, Q.shadowCameraFar = k.camera.far, i.pointShadow[f] = Q, i.pointShadowMap[f] = ae, i.pointShadowMatrix[f] = L.shadow.matrix, A++;
        }
        i.point[f] = Y, f++;
      } else if (L.isHemisphereLight) {
        const Y = t.get(L);
        Y.skyColor.copy(L.color).multiplyScalar($), Y.groundColor.copy(L.groundColor).multiplyScalar($), i.hemi[S] = Y, S++;
      }
    }
    b > 0 && (e.has("OES_texture_float_linear") === !0 ? (i.rectAreaLTC1 = me.LTC_FLOAT_1, i.rectAreaLTC2 = me.LTC_FLOAT_2) : (i.rectAreaLTC1 = me.LTC_HALF_1, i.rectAreaLTC2 = me.LTC_HALF_2)), i.ambient[0] = u, i.ambient[1] = h, i.ambient[2] = d;
    const C = i.hash;
    (C.sunLength !== p || C.directionalLength !== g || C.pointLength !== f || C.spotLength !== M || C.rectAreaLength !== b || C.hemiLength !== S || C.numSunShadows !== m || C.numDirectionalShadows !== E || C.numPointShadows !== A || C.numSpotShadows !== v || C.numSpotMaps !== T || C.numLightProbes !== U) && (i.sun.length = p, i.directional.length = g, i.spot.length = M, i.rectArea.length = b, i.point.length = f, i.hemi.length = S, i.sunShadow.length = m, i.sunShadowMap.length = m, i.sunShadowMatrix.length = _, i.sunShadowCascade.length = _, i.directionalShadow.length = E, i.directionalShadowMap.length = E, i.directionalShadowMatrix.length = E, i.pointShadow.length = A, i.pointShadowMap.length = A, i.pointShadowMatrix.length = A, i.spotShadow.length = v, i.spotShadowMap.length = v, i.spotLightMatrix.length = v + T - R, i.spotLightMap.length = T, i.numSpotLightShadowsWithMaps = R, i.numLightProbes = U, C.sunLength = p, C.directionalLength = g, C.pointLength = f, C.spotLength = M, C.rectAreaLength = b, C.hemiLength = S, C.numSunShadows = m, C.numDirectionalShadows = E, C.numPointShadows = A, C.numSpotShadows = v, C.numSpotMaps = T, C.numLightProbes = U, i.version = Fm++);
  }
  function l(c, u) {
    let h = 0, d = 0, p = 0, m = 0, _ = 0, g = 0;
    const f = u.matrixWorldInverse;
    for (let M = 0, b = c.length; M < b; M++) {
      const S = c[M];
      if (S.isSunLight) {
        const E = i.sun[h];
        E.direction.setFromMatrixPosition(S.matrixWorld), E.direction.transformDirection(f), h++;
      } else if (S.isDirectionalLight) {
        const E = i.directional[d];
        E.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(f), d++;
      } else if (S.isSpotLight) {
        const E = i.spot[m];
        E.position.setFromMatrixPosition(S.matrixWorld), E.position.applyMatrix4(f), E.direction.setFromMatrixPosition(S.matrixWorld), r.setFromMatrixPosition(S.target.matrixWorld), E.direction.sub(r), E.direction.transformDirection(f), m++;
      } else if (S.isRectAreaLight) {
        const E = i.rectArea[_];
        E.position.setFromMatrixPosition(S.matrixWorld), E.position.applyMatrix4(f), a.identity(), s.copy(S.matrixWorld), s.premultiply(f), a.extractRotation(s), E.halfWidth.set(S.width * 0.5, 0, 0), E.halfHeight.set(0, S.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), _++;
      } else if (S.isPointLight) {
        const E = i.point[p];
        E.position.setFromMatrixPosition(S.matrixWorld), E.position.applyMatrix4(f), p++;
      } else if (S.isHemisphereLight) {
        const E = i.hemi[g];
        E.direction.setFromMatrixPosition(S.matrixWorld), E.direction.transformDirection(f), g++;
      }
    }
  }
  return {
    setup: o,
    setupView: l,
    state: i
  };
}
function El(e) {
  const t = new km(e), n = [], i = [], r = [];
  function s(h) {
    u.camera = h, n.length = 0, i.length = 0, r.length = 0;
  }
  function a(h) {
    h.isLightProbeGrid ? r.push(h) : n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function l() {
    t.setup(n), r.sort((h, d) => h.priority - d.priority || h.id - d.id);
  }
  function c(h) {
    t.setupView(n, h);
  }
  const u = {
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
    state: u,
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o
  };
}
function zm(e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(r, s = 0) {
    const a = t.get(r);
    let o;
    return a === void 0 ? (o = new El(e), t.set(r, [o])) : s >= a.length ? (o = new El(e), a.push(o)) : o = a[s], o;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: i
  };
}
var Hm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Gm = `uniform sampler2D shadow_pass;
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
}`, Vm = [
  /* @__PURE__ */ new z(1, 0, 0),
  /* @__PURE__ */ new z(-1, 0, 0),
  /* @__PURE__ */ new z(0, 1, 0),
  /* @__PURE__ */ new z(0, -1, 0),
  /* @__PURE__ */ new z(0, 0, 1),
  /* @__PURE__ */ new z(0, 0, -1)
], Wm = [
  /* @__PURE__ */ new z(0, -1, 0),
  /* @__PURE__ */ new z(0, -1, 0),
  /* @__PURE__ */ new z(0, 0, 1),
  /* @__PURE__ */ new z(0, 0, -1),
  /* @__PURE__ */ new z(0, -1, 0),
  /* @__PURE__ */ new z(0, -1, 0)
], Al = /* @__PURE__ */ new Ge(), fr = /* @__PURE__ */ new z(), _a = /* @__PURE__ */ new z();
function Xm(e, t, n) {
  let i = new Ir();
  const r = new ke(), s = new ke(), a = new st(), o = new lf(), l = new cf(), c = {}, u = n.maxTextureSize, h = {
    0: 1,
    1: 0,
    2: 2
  }, d = new Mi({
    defines: { VSM_SAMPLES: 8 },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ke() },
      radius: { value: 4 }
    },
    vertexShader: Hm,
    fragmentShader: Gm
  }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const m = new Ut();
  m.setAttribute("position", new Yt(new Float32Array([
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
  const _ = new zt(m, d), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let f = this.type;
  this.render = function(A, v, T) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || A.length === 0) return;
    this.type === 2 && (Ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = 1);
    const R = e.getRenderTarget(), U = e.getActiveCubeFace(), C = e.getActiveMipmapLevel(), N = e.state;
    N.setBlending(0), N.buffers.depth.getReversed() === !0 ? N.buffers.color.setClear(0, 0, 0, 0) : N.buffers.color.setClear(1, 1, 1, 1), N.buffers.depth.setTest(!0), N.setScissorTest(!1);
    const q = f !== this.type;
    q && v.traverse(function(L) {
      L.material && (Array.isArray(L.material) ? L.material.forEach((H) => H.needsUpdate = !0) : L.material.needsUpdate = !0);
    });
    for (let L = 0, H = A.length; L < H; L++) {
      const $ = A[L], B = $.shadow;
      if (B === void 0) {
        Ee("WebGLShadowMap:", $, "has no shadow.");
        continue;
      }
      if (B.autoUpdate === !1 && B.needsUpdate === !1) continue;
      r.copy(B.mapSize);
      const ae = B.getFrameExtents();
      r.multiply(ae), s.copy(B.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / ae.x), r.x = s.x * ae.x, B.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / ae.y), r.y = s.y * ae.y, B.mapSize.y = s.y));
      const Y = e.state.buffers.depth.getReversed();
      if (B.camera._reversedDepth = Y, B.map === null || q === !0) {
        if (B.map !== null && (B.map.depthTexture !== null && (B.map.depthTexture.dispose(), B.map.depthTexture = null), B.map.dispose()), this.type === 3) {
          if ($.isPointLight) {
            Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          B.map = new En(r.x, r.y, {
            format: Rs,
            type: ai,
            minFilter: an,
            magFilter: an,
            generateMipmaps: !1
          }), B.map.texture.name = $.name + ".shadowMap", B.map.depthTexture = new qi(r.x, r.y, Ji), B.map.depthTexture.name = $.name + ".shadowMapDepth", B.map.depthTexture.format = Rr, B.map.depthTexture.compareFunction = null, B.map.depthTexture.minFilter = Nt, B.map.depthTexture.magFilter = Nt;
        } else
          $.isPointLight ? (B.map = new $a(r.x), B.map.depthTexture = new Tc(r.x, vi)) : (B.map = new En(r.x, r.y), B.map.depthTexture = new qi(r.x, r.y, vi)), B.map.depthTexture.name = $.name + ".shadowMap", B.map.depthTexture.format = Rr, this.type === 1 ? (B.map.depthTexture.compareFunction = Y ? 518 : 515, B.map.depthTexture.minFilter = an, B.map.depthTexture.magFilter = an) : (B.map.depthTexture.compareFunction = null, B.map.depthTexture.minFilter = Nt, B.map.depthTexture.magFilter = Nt);
        B.camera.updateProjectionMatrix();
      }
      B.map.isWebGLCubeRenderTarget !== !0 && (B.map.width !== r.x || B.map.height !== r.y) && B.map.setSize(r.x, r.y);
      const k = B.map.isWebGLCubeRenderTarget ? 6 : B.getViewportCount();
      $.isPointLight !== !0 && B.updateMatrices($, T);
      const Q = (B.camera.layers.mask & 4294967294) !== 0 ? B.camera.layers : T.layers;
      for (let _e = 0; _e < k; _e++) {
        const Z = B.getCamera(_e);
        if ($.isPointLight) {
          const te = B.camera, ge = B.matrix, Te = $.distance || te.far;
          Te !== te.far && (te.far = Te, te.updateProjectionMatrix()), fr.setFromMatrixPosition($.matrixWorld), te.position.copy(fr), _a.copy(te.position), _a.add(Vm[_e]), te.up.copy(Wm[_e]), te.lookAt(_a), te.updateMatrixWorld(), ge.makeTranslation(-fr.x, -fr.y, -fr.z), Al.multiplyMatrices(te.projectionMatrix, te.matrixWorldInverse), B._frustum.setFromProjectionMatrix(Al, te.coordinateSystem, te.reversedDepth);
        }
        if (B.map.isWebGLCubeRenderTarget)
          e.setRenderTarget(B.map, _e), e.clear();
        else {
          _e === 0 && (e.setRenderTarget(B.map), e.clear());
          const te = B.getViewport(_e);
          a.set(s.x * te.x, s.y * te.y, s.x * te.z, s.y * te.w), N.viewport(a);
        }
        i = B.getFrustum(_e), S(v, T, Z, $, Q, this.type);
      }
      B.isPointLightShadow !== !0 && this.type === 3 && M(B, T), B.needsUpdate = !1;
    }
    f = this.type, g.needsUpdate = !1, e.setRenderTarget(R, U, C);
  };
  function M(A, v) {
    const T = t.update(_);
    d.defines.VSM_SAMPLES !== A.blurSamples && (d.defines.VSM_SAMPLES = A.blurSamples, p.defines.VSM_SAMPLES = A.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), A.mapPass === null ? A.mapPass = new En(r.x, r.y, {
      format: Rs,
      type: ai
    }) : (A.mapPass.width !== A.map.width || A.mapPass.height !== A.map.height) && A.mapPass.setSize(A.map.width, A.map.height), d.uniforms.shadow_pass.value = A.map.depthTexture, d.uniforms.resolution.value.set(A.map.width, A.map.height), d.uniforms.radius.value = A.radius, e.setRenderTarget(A.mapPass), e.clear(), e.renderBufferDirect(v, null, T, d, _, null), p.uniforms.shadow_pass.value = A.mapPass.texture, p.uniforms.resolution.value.set(A.map.width, A.map.height), p.uniforms.radius.value = A.radius, e.setRenderTarget(A.map), e.clear(), e.renderBufferDirect(v, null, T, p, _, null);
  }
  function b(A, v, T, R) {
    let U = null;
    const C = T.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (C !== void 0) U = C;
    else if (U = T.isPointLight === !0 ? l : o, e.localClippingEnabled && v.clipShadows === !0 && Array.isArray(v.clippingPlanes) && v.clippingPlanes.length !== 0 || v.displacementMap && v.displacementScale !== 0 || v.alphaMap && v.alphaTest > 0 || v.map && v.alphaTest > 0 || v.alphaToCoverage === !0) {
      const N = U.uuid, q = v.uuid;
      let L = c[N];
      L === void 0 && (L = {}, c[N] = L);
      let H = L[q];
      H === void 0 && (H = U.clone(), L[q] = H, v.addEventListener("dispose", E)), U = H;
    }
    if (U.visible = v.visible, U.wireframe = v.wireframe, R === 3 ? U.side = v.shadowSide !== null ? v.shadowSide : v.side : U.side = v.shadowSide !== null ? v.shadowSide : h[v.side], U.alphaMap = v.alphaMap, U.alphaTest = v.alphaToCoverage === !0 ? 0.5 : v.alphaTest, U.map = v.map, U.clipShadows = v.clipShadows, U.clippingPlanes = v.clippingPlanes, U.clipIntersection = v.clipIntersection, U.displacementMap = v.displacementMap, U.displacementScale = v.displacementScale, U.displacementBias = v.displacementBias, U.wireframeLinewidth = v.wireframeLinewidth, U.linewidth = v.linewidth, T.isPointLight === !0 && U.isMeshDistanceMaterial === !0) {
      const N = e.properties.get(U);
      N.light = T;
    }
    return U;
  }
  function S(A, v, T, R, U, C) {
    if (A.visible === !1) return;
    if (A.layers.test(U) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && C === 3) && (!A.frustumCulled || A.intersectsFrustum(i))) {
      A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse, A.matrixWorld);
      const q = t.update(A), L = A.material;
      if (Array.isArray(L)) {
        const H = q.groups;
        for (let $ = 0, B = H.length; $ < B; $++) {
          const ae = H[$], Y = L[ae.materialIndex];
          if (Y && Y.visible) {
            const k = b(A, Y, R, C);
            A.onBeforeShadow(e, A, v, T, q, k, ae), e.renderBufferDirect(T, null, q, k, A, ae), A.onAfterShadow(e, A, v, T, q, k, ae);
          }
        }
      } else if (L.visible) {
        const H = b(A, L, R, C);
        A.onBeforeShadow(e, A, v, T, q, H, null), e.renderBufferDirect(T, null, q, H, A, null), A.onAfterShadow(e, A, v, T, q, H, null);
      }
    }
    const N = A.children;
    for (let q = 0, L = N.length; q < L; q++) S(N[q], v, T, R, U, C);
  }
  function E(A) {
    A.target.removeEventListener("dispose", E);
    for (const v in c) {
      const T = c[v], R = A.target.uuid;
      R in T && (T[R].dispose(), delete T[R]);
    }
  }
}
function qm(e, t) {
  function n() {
    let P = !1;
    const K = new st();
    let j = null;
    const re = new st(0, 0, 0, 0);
    return {
      setMask: function(de) {
        j !== de && !P && (e.colorMask(de, de, de, de), j = de);
      },
      setLocked: function(de) {
        P = de;
      },
      setClear: function(de, ce, we, ie, Ue) {
        Ue === !0 && (de *= ie, ce *= ie, we *= ie), K.set(de, ce, we, ie), re.equals(K) === !1 && (e.clearColor(de, ce, we, ie), re.copy(K));
      },
      reset: function() {
        P = !1, j = null, re.set(-1, 0, 0, 0);
      }
    };
  }
  function i() {
    let P = !1, K = !1, j = null, re = null, de = null;
    return {
      setReversed: function(ce) {
        if (K !== ce) {
          const we = t.get("EXT_clip_control");
          ce ? we.clipControlEXT(we.LOWER_LEFT_EXT, we.ZERO_TO_ONE_EXT) : we.clipControlEXT(we.LOWER_LEFT_EXT, we.NEGATIVE_ONE_TO_ONE_EXT), K = ce;
          const ie = de;
          de = null, this.setClear(ie);
        }
      },
      getReversed: function() {
        return K;
      },
      setTest: function(ce) {
        ce ? he(e.DEPTH_TEST) : Ve(e.DEPTH_TEST);
      },
      setMask: function(ce) {
        j !== ce && !P && (e.depthMask(ce), j = ce);
      },
      setFunc: function(ce) {
        if (K && (ce = jh[ce]), re !== ce) {
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
        P = ce;
      },
      setClear: function(ce) {
        de !== ce && (de = ce, K && (ce = 1 - ce), e.clearDepth(ce));
      },
      reset: function() {
        P = !1, j = null, re = null, de = null, K = !1;
      }
    };
  }
  function r() {
    let P = !1, K = null, j = null, re = null, de = null, ce = null, we = null, ie = null, Ue = null;
    return {
      setTest: function(Ie) {
        P || (Ie ? he(e.STENCIL_TEST) : Ve(e.STENCIL_TEST));
      },
      setMask: function(Ie) {
        K !== Ie && !P && (e.stencilMask(Ie), K = Ie);
      },
      setFunc: function(Ie, Ke, ve) {
        (j !== Ie || re !== Ke || de !== ve) && (e.stencilFunc(Ie, Ke, ve), j = Ie, re = Ke, de = ve);
      },
      setOp: function(Ie, Ke, ve) {
        (ce !== Ie || we !== Ke || ie !== ve) && (e.stencilOp(Ie, Ke, ve), ce = Ie, we = Ke, ie = ve);
      },
      setLocked: function(Ie) {
        P = Ie;
      },
      setClear: function(Ie) {
        Ue !== Ie && (e.clearStencil(Ie), Ue = Ie);
      },
      reset: function() {
        P = !1, K = null, j = null, re = null, de = null, ce = null, we = null, ie = null, Ue = null;
      }
    };
  }
  const s = new n(), a = new i(), o = new r();
  let l = {};
  const c = /* @__PURE__ */ new WeakMap();
  let u = {}, h = {}, d = {}, p = /* @__PURE__ */ new WeakMap(), m = [], _ = null, g = !1, f = null, M = null, b = null, S = null, E = null, A = null, v = null, T = new Ce(0, 0, 0), R = 0, U = !1, C = null, N = null, q = null, L = null, H = null;
  const $ = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let B = !1, ae = 0;
  const Y = e.getParameter(e.VERSION);
  Y.indexOf("WebGL") !== -1 ? (ae = parseFloat(/^WebGL (\d)/.exec(Y)[1]), B = ae >= 1) : Y.indexOf("OpenGL ES") !== -1 && (ae = parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]), B = ae >= 2);
  let k = null, Q = {};
  const _e = e.getParameter(e.SCISSOR_BOX), Z = e.getParameter(e.VIEWPORT), te = new st().fromArray(_e), ge = new st().fromArray(Z);
  function Te(P, K, j, re) {
    const de = /* @__PURE__ */ new Uint8Array(4), ce = e.createTexture();
    e.bindTexture(P, ce), e.texParameteri(P, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(P, e.TEXTURE_MAG_FILTER, e.NEAREST);
    for (let we = 0; we < j; we++) P === e.TEXTURE_3D || P === e.TEXTURE_2D_ARRAY ? e.texImage3D(K, 0, e.RGBA, 1, 1, re, 0, e.RGBA, e.UNSIGNED_BYTE, de) : e.texImage2D(K + we, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, de);
    return ce;
  }
  const ye = {};
  ye[e.TEXTURE_2D] = Te(e.TEXTURE_2D, e.TEXTURE_2D, 1), ye[e.TEXTURE_CUBE_MAP] = Te(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ye[e.TEXTURE_2D_ARRAY] = Te(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), ye[e.TEXTURE_3D] = Te(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), he(e.DEPTH_TEST), a.setFunc(3), $t(!1), gt(1), he(e.CULL_FACE), mt(0);
  function he(P) {
    u[P] !== !0 && (e.enable(P), u[P] = !0);
  }
  function Ve(P) {
    u[P] !== !1 && (e.disable(P), u[P] = !1);
  }
  function Je(P, K) {
    return d[P] !== K ? (e.bindFramebuffer(P, K), d[P] = K, P === e.DRAW_FRAMEBUFFER && (d[e.FRAMEBUFFER] = K), P === e.FRAMEBUFFER && (d[e.DRAW_FRAMEBUFFER] = K), !0) : !1;
  }
  function Pe(P, K) {
    let j = m, re = !1;
    if (P) {
      j = p.get(K), j === void 0 && (j = [], p.set(K, j));
      const de = P.textures;
      if (j.length !== de.length || j[0] !== e.COLOR_ATTACHMENT0) {
        for (let ce = 0, we = de.length; ce < we; ce++) j[ce] = e.COLOR_ATTACHMENT0 + ce;
        j.length = de.length, re = !0;
      }
    } else j[0] !== e.BACK && (j[0] = e.BACK, re = !0);
    re && e.drawBuffers(j);
  }
  function Tt(P) {
    return _ !== P ? (e.useProgram(P), _ = P, !0) : !1;
  }
  const Ot = {
    100: e.FUNC_ADD,
    101: e.FUNC_SUBTRACT,
    102: e.FUNC_REVERSE_SUBTRACT
  };
  Ot[103] = e.MIN, Ot[104] = e.MAX;
  const bt = {
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
  function mt(P, K, j, re, de, ce, we, ie, Ue, Ie) {
    if (P === 0) {
      g === !0 && (Ve(e.BLEND), g = !1);
      return;
    }
    if (g === !1 && (he(e.BLEND), g = !0), P !== 5) {
      if (P !== f || Ie !== U) {
        if ((M !== 100 || E !== 100) && (e.blendEquation(e.FUNC_ADD), M = 100, E = 100), Ie) switch (P) {
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
            De("WebGLState: Invalid blending: ", P);
        }
        else switch (P) {
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
            De("WebGLState: Invalid blending: ", P);
        }
        b = null, S = null, A = null, v = null, T.set(0, 0, 0), R = 0, f = P, U = Ie;
      }
      return;
    }
    de = de || K, ce = ce || j, we = we || re, (K !== M || de !== E) && (e.blendEquationSeparate(Ot[K], Ot[de]), M = K, E = de), (j !== b || re !== S || ce !== A || we !== v) && (e.blendFuncSeparate(bt[j], bt[re], bt[ce], bt[we]), b = j, S = re, A = ce, v = we), (ie.equals(T) === !1 || Ue !== R) && (e.blendColor(ie.r, ie.g, ie.b, Ue), T.copy(ie), R = Ue), f = P, U = !1;
  }
  function Gt(P, K) {
    P.side === 2 ? Ve(e.CULL_FACE) : he(e.CULL_FACE);
    let j = P.side === 1;
    K && (j = !j), $t(j), P.blending === 1 && P.transparent === !1 ? mt(0) : mt(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), s.setMask(P.colorWrite);
    const re = P.stencilWrite;
    o.setTest(re), re && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), Vt(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === !0 ? he(e.SAMPLE_ALPHA_TO_COVERAGE) : Ve(e.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function $t(P) {
    C !== P && (P ? e.frontFace(e.CW) : e.frontFace(e.CCW), C = P);
  }
  function gt(P) {
    P !== 0 ? (he(e.CULL_FACE), P !== N && (P === 1 ? e.cullFace(e.BACK) : P === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : Ve(e.CULL_FACE), N = P;
  }
  function wt(P) {
    P !== q && (B && e.lineWidth(P), q = P);
  }
  function Vt(P, K, j) {
    P ? (he(e.POLYGON_OFFSET_FILL), (L !== K || H !== j) && (L = K, H = j, a.getReversed() && (K = -K, j = -j), e.polygonOffset(K, j))) : Ve(e.POLYGON_OFFSET_FILL);
  }
  function Wt(P) {
    P ? he(e.SCISSOR_TEST) : Ve(e.SCISSOR_TEST);
  }
  function ln(P) {
    P === void 0 && (P = e.TEXTURE0 + $ - 1), k !== P && (e.activeTexture(P), k = P);
  }
  function O(P, K, j) {
    j === void 0 && (k === null ? j = e.TEXTURE0 + $ - 1 : j = k);
    let re = Q[j];
    re === void 0 && (re = {
      type: void 0,
      texture: void 0
    }, Q[j] = re), (re.type !== P || re.texture !== K) && (k !== j && (e.activeTexture(j), k = j), e.bindTexture(P, K || ye[P]), re.type = P, re.texture = K);
  }
  function cn() {
    const P = Q[k];
    P !== void 0 && P.type !== void 0 && (e.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function nt() {
    try {
      e.compressedTexImage2D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function yt() {
    try {
      e.compressedTexImage3D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function pe() {
    try {
      e.texSubImage2D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function it() {
    try {
      e.texSubImage3D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function Le() {
    try {
      e.compressedTexSubImage2D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function Oe() {
    try {
      e.compressedTexSubImage3D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function Rt() {
    try {
      e.texStorage2D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function w() {
    try {
      e.texStorage3D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function y() {
    try {
      e.texImage2D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function V() {
    try {
      e.texImage3D(...arguments);
    } catch (P) {
      De("WebGLState:", P);
    }
  }
  function ne(P) {
    return h[P] !== void 0 ? h[P] : e.getParameter(P);
  }
  function J(P, K) {
    h[P] !== K && (e.pixelStorei(P, K), h[P] = K);
  }
  function oe(P) {
    te.equals(P) === !1 && (e.scissor(P.x, P.y, P.z, P.w), te.copy(P));
  }
  function le(P) {
    ge.equals(P) === !1 && (e.viewport(P.x, P.y, P.z, P.w), ge.copy(P));
  }
  function D(P, K) {
    let j = c.get(K);
    j === void 0 && (j = /* @__PURE__ */ new WeakMap(), c.set(K, j));
    let re = j.get(P);
    re === void 0 && (re = e.getUniformBlockIndex(K, P.name), e.uniformBlockBinding(K, re, re), j.set(P, re));
  }
  function ee(P, K, j) {
    const re = c.get(K).get(P);
    l[re] !== j && (e.bindBufferBase(e.UNIFORM_BUFFER, re, j), l[re] = j);
  }
  function Se() {
    e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), a.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), u = {}, h = {}, k = null, Q = {}, d = {}, l = {}, p = /* @__PURE__ */ new WeakMap(), m = [], _ = null, g = !1, f = null, M = null, b = null, S = null, E = null, A = null, v = null, T = new Ce(0, 0, 0), R = 0, U = !1, C = null, N = null, q = null, L = null, H = null, te.set(0, 0, e.canvas.width, e.canvas.height), ge.set(0, 0, e.canvas.width, e.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: s,
      depth: a,
      stencil: o
    },
    enable: he,
    disable: Ve,
    bindFramebuffer: Je,
    drawBuffers: Pe,
    useProgram: Tt,
    setBlending: mt,
    setMaterial: Gt,
    setFlipSided: $t,
    setCullFace: gt,
    setLineWidth: wt,
    setPolygonOffset: Vt,
    setScissorTest: Wt,
    activeTexture: ln,
    bindTexture: O,
    unbindTexture: cn,
    compressedTexImage2D: nt,
    compressedTexImage3D: yt,
    texImage2D: y,
    texImage3D: V,
    pixelStorei: J,
    getParameter: ne,
    updateUBOMapping: D,
    uniformBlockBinding: ee,
    texStorage2D: Rt,
    texStorage3D: w,
    texSubImage2D: pe,
    texSubImage3D: it,
    compressedTexSubImage2D: Le,
    compressedTexSubImage3D: Oe,
    scissor: oe,
    viewport: le,
    reset: Se
  };
}
function Ym(e, t, n, i, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new ke(), u = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new Set();
  let d;
  const p = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new Set(), _ = new FinalizationRegistry((w) => m.delete(w));
  let g = !1;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function f(w, y) {
    return g ? new OffscreenCanvas(w, y) : Lr("canvas");
  }
  function M(w, y, V) {
    let ne = 1;
    const J = Rt(w);
    if ((J.width > V || J.height > V) && (ne = V / Math.max(J.width, J.height)), ne < 1)
      if (typeof HTMLImageElement < "u" && w instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && w instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && w instanceof ImageBitmap || typeof VideoFrame < "u" && w instanceof VideoFrame) {
        const oe = Math.floor(ne * J.width), le = Math.floor(ne * J.height);
        d === void 0 && (d = f(oe, le));
        const D = y ? f(oe, le) : d;
        return D.width = oe, D.height = le, D.getContext("2d").drawImage(w, 0, 0, oe, le), Ee("WebGLRenderer: Texture has been resized from (" + J.width + "x" + J.height + ") to (" + oe + "x" + le + ")."), D;
      } else
        return "data" in w && Ee("WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."), w;
    return w;
  }
  function b(w) {
    return w.generateMipmaps;
  }
  function S(w) {
    e.generateMipmap(w);
  }
  function E(w) {
    return w.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : w.isWebGL3DRenderTarget ? e.TEXTURE_3D : w.isWebGLArrayRenderTarget || w.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
  }
  function A(w, y, V, ne, J, oe = !1) {
    if (w !== null) {
      if (e[w] !== void 0) return e[w];
      Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + w + "'");
    }
    let le;
    ne && (le = t.get("EXT_texture_norm16"), le || Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let D = y;
    if (y === e.RED && (V === e.FLOAT && (D = e.R32F), V === e.HALF_FLOAT && (D = e.R16F), V === e.UNSIGNED_BYTE && (D = e.R8), V === e.UNSIGNED_SHORT && le && (D = le.R16_EXT), V === e.SHORT && le && (D = le.R16_SNORM_EXT)), y === e.RED_INTEGER && (V === e.UNSIGNED_BYTE && (D = e.R8UI), V === e.UNSIGNED_SHORT && (D = e.R16UI), V === e.UNSIGNED_INT && (D = e.R32UI), V === e.BYTE && (D = e.R8I), V === e.SHORT && (D = e.R16I), V === e.INT && (D = e.R32I)), y === e.RG && (V === e.FLOAT && (D = e.RG32F), V === e.HALF_FLOAT && (D = e.RG16F), V === e.UNSIGNED_BYTE && (D = e.RG8), V === e.UNSIGNED_SHORT && le && (D = le.RG16_EXT), V === e.SHORT && le && (D = le.RG16_SNORM_EXT)), y === e.RG_INTEGER && (V === e.UNSIGNED_BYTE && (D = e.RG8UI), V === e.UNSIGNED_SHORT && (D = e.RG16UI), V === e.UNSIGNED_INT && (D = e.RG32UI), V === e.BYTE && (D = e.RG8I), V === e.SHORT && (D = e.RG16I), V === e.INT && (D = e.RG32I)), y === e.RGB_INTEGER && (V === e.UNSIGNED_BYTE && (D = e.RGB8UI), V === e.UNSIGNED_SHORT && (D = e.RGB16UI), V === e.UNSIGNED_INT && (D = e.RGB32UI), V === e.BYTE && (D = e.RGB8I), V === e.SHORT && (D = e.RGB16I), V === e.INT && (D = e.RGB32I)), y === e.RGBA_INTEGER && (V === e.UNSIGNED_BYTE && (D = e.RGBA8UI), V === e.UNSIGNED_SHORT && (D = e.RGBA16UI), V === e.UNSIGNED_INT && (D = e.RGBA32UI), V === e.BYTE && (D = e.RGBA8I), V === e.SHORT && (D = e.RGBA16I), V === e.INT && (D = e.RGBA32I)), y === e.RGB && (V === e.UNSIGNED_SHORT && le && (D = le.RGB16_EXT), V === e.SHORT && le && (D = le.RGB16_SNORM_EXT), V === e.UNSIGNED_INT_5_9_9_9_REV && (D = e.RGB9_E5), V === e.UNSIGNED_INT_10F_11F_11F_REV && (D = e.R11F_G11F_B10F)), y === e.RGBA) {
      const ee = oe ? Cs : qe.getTransfer(J);
      V === e.FLOAT && (D = e.RGBA32F), V === e.HALF_FLOAT && (D = e.RGBA16F), V === e.UNSIGNED_BYTE && (D = ee === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), V === e.UNSIGNED_SHORT && le && (D = le.RGBA16_EXT), V === e.SHORT && le && (D = le.RGBA16_SNORM_EXT), V === e.UNSIGNED_SHORT_4_4_4_4 && (D = e.RGBA4), V === e.UNSIGNED_SHORT_5_5_5_1 && (D = e.RGB5_A1);
    }
    return (D === e.R16F || D === e.R32F || D === e.RG16F || D === e.RG32F || D === e.RGBA16F || D === e.RGBA32F) && t.get("EXT_color_buffer_float"), D;
  }
  function v(w, y) {
    let V;
    return w ? y === null || y === 1014 || y === 1020 ? V = e.DEPTH24_STENCIL8 : y === 1015 ? V = e.DEPTH32F_STENCIL8 : y === 1012 && (V = e.DEPTH24_STENCIL8, Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : y === null || y === 1014 || y === 1020 ? V = e.DEPTH_COMPONENT24 : y === 1015 ? V = e.DEPTH_COMPONENT32F : y === 1012 && (V = e.DEPTH_COMPONENT16), V;
  }
  function T(w, y) {
    return b(w) === !0 || w.isFramebufferTexture && w.minFilter !== 1003 && w.minFilter !== 1006 ? Math.log2(Math.max(y.width, y.height)) + 1 : w.mipmaps.length > 0 ? w.mipmaps.length : w.isCompressedTexture && Array.isArray(w.image) ? y.mipmaps.length : 1;
  }
  function R(w) {
    const y = new WeakRef(w);
    i.get(w).__ref = y, m.add(y), _.register(w, y, y);
  }
  function U(w) {
    const y = i.get(w).__ref;
    y !== void 0 && (m.delete(y), _.unregister(y));
  }
  function C(w) {
    q(w.target);
  }
  function N(w) {
    L(w.target);
  }
  function q(w) {
    w.removeEventListener("dispose", C), U(w), $(w), w.isVideoTexture && u.delete(w), w.isHTMLTexture && h.delete(w);
  }
  function L(w) {
    w.removeEventListener("dispose", N), U(w), ae(w);
  }
  function H() {
    for (const w of m) {
      const y = w.deref();
      y !== void 0 && (y.isRenderTarget === !0 ? L(y) : q(y));
    }
    m.clear(), h.clear();
  }
  function $(w) {
    const y = i.get(w);
    if (y.__webglInit === void 0) return;
    const V = w.source, ne = p.get(V);
    if (ne) {
      const J = ne[y.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && B(w), Object.keys(ne).length === 0 && p.delete(V);
    }
    i.remove(w);
  }
  function B(w) {
    const y = i.get(w);
    e.deleteTexture(y.__webglTexture);
    const V = w.source, ne = p.get(V);
    delete ne[y.__cacheKey], a.memory.textures--;
  }
  function ae(w) {
    const y = i.get(w);
    y.__depthDisposeCallback && y.__depthDisposeCallback();
    const V = w.depthTexture;
    if (V && V.renderTarget === w && q(V), w.isWebGLCubeRenderTarget) for (let J = 0; J < 6; J++) {
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
    const ne = w.textures;
    for (let J = 0, oe = ne.length; J < oe; J++) {
      const le = i.get(ne[J]);
      le.__webglTexture && (e.deleteTexture(le.__webglTexture), a.memory.textures--), i.remove(ne[J]);
    }
    i.remove(w);
  }
  let Y = 0;
  function k() {
    Y = 0;
  }
  function Q() {
    return Y;
  }
  function _e(w) {
    Y = w;
  }
  function Z() {
    const w = Y;
    return w >= r.maxTextures && Ee("WebGLTextures: Trying to use " + (w + 1) + " texture units while this GPU supports only " + r.maxTextures), Y += 1, w;
  }
  function te(w) {
    const y = [];
    return y.push(w.wrapS), y.push(w.wrapT), y.push(w.wrapR || 0), y.push(w.magFilter), y.push(w.minFilter), y.push(w.anisotropy), y.push(w.internalFormat), y.push(w.format), y.push(w.type), y.push(w.generateMipmaps), y.push(w.mipmapsAutoUpdate), y.push(w.premultiplyAlpha), y.push(w.flipY), y.push(w.unpackAlignment), y.push(w.colorSpace), y.join();
  }
  function ge(w, y) {
    const V = i.get(w);
    if (w.isVideoTexture && Le(w), w.isRenderTargetTexture === !1 && w.isExternalTexture !== !0 && w.version > 0 && V.__version !== w.version) {
      const ne = w.image;
      if (ne === null) Ee("WebGLRenderer: Texture marked for update but no image data found.");
      else if (ne.complete === !1) Ee("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Gt(V, w, y);
        return;
      }
    } else w.isExternalTexture && (V.__webglTexture = w.sourceTexture ? w.sourceTexture : null);
    n.bindTexture(e.TEXTURE_2D, V.__webglTexture, e.TEXTURE0 + y);
  }
  function Te(w, y) {
    const V = i.get(w);
    if (w.isRenderTargetTexture === !1 && w.version > 0 && V.__version !== w.version) {
      Gt(V, w, y);
      return;
    } else w.isExternalTexture && (V.__webglTexture = w.sourceTexture ? w.sourceTexture : null);
    n.bindTexture(e.TEXTURE_2D_ARRAY, V.__webglTexture, e.TEXTURE0 + y);
  }
  function ye(w, y) {
    const V = i.get(w);
    if (w.isRenderTargetTexture === !1 && w.version > 0 && V.__version !== w.version) {
      Gt(V, w, y);
      return;
    }
    n.bindTexture(e.TEXTURE_3D, V.__webglTexture, e.TEXTURE0 + y);
  }
  function he(w, y) {
    const V = i.get(w);
    if (w.version > 0 && V.__version !== w.version) {
      $t(V, w, y);
      return;
    }
    n.bindTexture(e.TEXTURE_CUBE_MAP, V.__webglTexture, e.TEXTURE0 + y);
  }
  const Ve = {
    [Es]: e.REPEAT,
    [bn]: e.CLAMP_TO_EDGE,
    [As]: e.MIRRORED_REPEAT
  }, Je = {
    [Nt]: e.NEAREST,
    [$l]: e.NEAREST_MIPMAP_NEAREST,
    [Zl]: e.NEAREST_MIPMAP_LINEAR,
    [an]: e.LINEAR,
    [Jl]: e.LINEAR_MIPMAP_NEAREST,
    [Ur]: e.LINEAR_MIPMAP_LINEAR
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
  function Tt(w, y) {
    if (y.type === 1015 && t.has("OES_texture_float_linear") === !1 && (y.magFilter === 1006 || y.magFilter === 1007 || y.magFilter === 1005 || y.magFilter === 1008 || y.minFilter === 1006 || y.minFilter === 1007 || y.minFilter === 1005 || y.minFilter === 1008) && Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(w, e.TEXTURE_WRAP_S, Ve[y.wrapS]), e.texParameteri(w, e.TEXTURE_WRAP_T, Ve[y.wrapT]), (w === e.TEXTURE_3D || w === e.TEXTURE_2D_ARRAY) && e.texParameteri(w, e.TEXTURE_WRAP_R, Ve[y.wrapR]), e.texParameteri(w, e.TEXTURE_MAG_FILTER, Je[y.magFilter]), e.texParameteri(w, e.TEXTURE_MIN_FILTER, Je[y.minFilter]), y.compareFunction && (e.texParameteri(w, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(w, e.TEXTURE_COMPARE_FUNC, Pe[y.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (y.magFilter === 1003 || y.minFilter !== 1005 && y.minFilter !== 1008 || y.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
      if (y.anisotropy > 1 || i.get(y).__currentAnisotropy) {
        const V = t.get("EXT_texture_filter_anisotropic");
        e.texParameterf(w, V.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(y.anisotropy, r.getMaxAnisotropy())), i.get(y).__currentAnisotropy = y.anisotropy;
      }
    }
  }
  function Ot(w, y) {
    let V = !1;
    w.__webglInit === void 0 && (w.__webglInit = !0, y.addEventListener("dispose", C), R(y));
    const ne = y.source;
    let J = p.get(ne);
    J === void 0 && (J = {}, p.set(ne, J));
    const oe = te(y);
    if (oe !== w.__cacheKey) {
      J[oe] === void 0 && (J[oe] = {
        texture: e.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, V = !0), J[oe].usedTimes++;
      const le = J[w.__cacheKey];
      le !== void 0 && (J[w.__cacheKey].usedTimes--, le.usedTimes === 0 && B(y)), w.__cacheKey = oe, w.__webglTexture = J[oe].texture;
    }
    return V;
  }
  function bt(w, y, V) {
    return Math.floor(Math.floor(w / V) / y);
  }
  function mt(w, y, V, ne) {
    const oe = w.updateRanges;
    if (oe.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, y.width, y.height, V, ne, y.data);
    else {
      oe.sort((P, K) => P.start - K.start);
      let le = 0;
      for (let P = 1; P < oe.length; P++) {
        const K = oe[le], j = oe[P], re = K.start + K.count, de = bt(j.start, y.width, 4), ce = bt(K.start, y.width, 4);
        j.start <= re + 1 && de === ce && bt(j.start + j.count - 1, y.width, 4) === de ? K.count = Math.max(K.count, j.start + j.count - K.start) : (++le, oe[le] = j);
      }
      oe.length = le + 1;
      const D = n.getParameter(e.UNPACK_ROW_LENGTH), ee = n.getParameter(e.UNPACK_SKIP_PIXELS), Se = n.getParameter(e.UNPACK_SKIP_ROWS);
      n.pixelStorei(e.UNPACK_ROW_LENGTH, y.width);
      for (let P = 0, K = oe.length; P < K; P++) {
        const j = oe[P], re = Math.floor(j.start / 4), de = Math.ceil(j.count / 4), ce = re % y.width, we = Math.floor(re / y.width), ie = de, Ue = 1;
        n.pixelStorei(e.UNPACK_SKIP_PIXELS, ce), n.pixelStorei(e.UNPACK_SKIP_ROWS, we), n.texSubImage2D(e.TEXTURE_2D, 0, ce, we, ie, Ue, V, ne, y.data);
      }
      w.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, D), n.pixelStorei(e.UNPACK_SKIP_PIXELS, ee), n.pixelStorei(e.UNPACK_SKIP_ROWS, Se);
    }
  }
  function Gt(w, y, V) {
    let ne = e.TEXTURE_2D;
    (y.isDataArrayTexture || y.isCompressedArrayTexture) && (ne = e.TEXTURE_2D_ARRAY), y.isData3DTexture && (ne = e.TEXTURE_3D);
    const J = Ot(w, y), oe = y.source;
    n.bindTexture(ne, w.__webglTexture, e.TEXTURE0 + V);
    const le = i.get(oe);
    if (oe.version !== le.__version || J === !0) {
      if (n.activeTexture(e.TEXTURE0 + V), !(typeof ImageBitmap < "u" && y.image instanceof ImageBitmap)) {
        const ie = qe.getPrimaries(qe.workingColorSpace), Ue = y.colorSpace === "" ? null : qe.getPrimaries(y.colorSpace), Ie = y.colorSpace === "" || ie === Ue ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
        n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, y.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ie);
      }
      n.pixelStorei(e.UNPACK_ALIGNMENT, y.unpackAlignment);
      let D = M(y.image, !1, r.maxTextureSize);
      D = Oe(y, D);
      const ee = s.convert(y.format, y.colorSpace), Se = s.convert(y.type);
      let P = A(y.internalFormat, ee, Se, y.normalized, y.colorSpace, y.isVideoTexture);
      Tt(ne, y);
      let K;
      const j = y.mipmaps, re = y.isVideoTexture !== !0, de = le.__version === void 0 || J === !0, ce = oe.dataReady, we = T(y, D);
      if (y.isDepthTexture)
        P = v(y.format === ws, y.type), de && (re ? n.texStorage2D(e.TEXTURE_2D, 1, P, D.width, D.height) : n.texImage2D(e.TEXTURE_2D, 0, P, D.width, D.height, 0, ee, Se, null));
      else if (y.isDataTexture)
        if (j.length > 0) {
          re && de && n.texStorage2D(e.TEXTURE_2D, we, P, j[0].width, j[0].height);
          for (let ie = 0, Ue = j.length; ie < Ue; ie++)
            K = j[ie], re ? ce && n.texSubImage2D(e.TEXTURE_2D, ie, 0, 0, K.width, K.height, ee, Se, K.data) : n.texImage2D(e.TEXTURE_2D, ie, P, K.width, K.height, 0, ee, Se, K.data);
          y.generateMipmaps = !1;
        } else re ? (de && n.texStorage2D(e.TEXTURE_2D, we, P, D.width, D.height), ce && mt(y, D, ee, Se)) : n.texImage2D(e.TEXTURE_2D, 0, P, D.width, D.height, 0, ee, Se, D.data);
      else if (y.isCompressedTexture)
        if (y.isCompressedArrayTexture) {
          re && de && n.texStorage3D(e.TEXTURE_2D_ARRAY, we, P, j[0].width, j[0].height, D.depth);
          for (let ie = 0, Ue = j.length; ie < Ue; ie++)
            if (K = j[ie], y.format !== 1023)
              if (ee !== null)
                if (re) {
                  if (ce)
                    if (y.layerUpdates.size > 0) {
                      const Ie = rl(K.width, K.height, y.format, y.type);
                      for (const Ke of y.layerUpdates) {
                        const ve = K.data.subarray(Ke * Ie / K.data.BYTES_PER_ELEMENT, (Ke + 1) * Ie / K.data.BYTES_PER_ELEMENT);
                        n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, ie, 0, 0, Ke, K.width, K.height, 1, ee, ve);
                      }
                    } else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, ie, 0, 0, 0, K.width, K.height, D.depth, ee, K.data);
                } else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, ie, P, K.width, K.height, D.depth, 0, K.data, 0, 0);
              else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else re ? ce && n.texSubImage3D(e.TEXTURE_2D_ARRAY, ie, 0, 0, 0, K.width, K.height, D.depth, ee, Se, K.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, ie, P, K.width, K.height, D.depth, 0, ee, Se, K.data);
          y.layerUpdates.size > 0 && y.clearLayerUpdates();
        } else {
          re && de && n.texStorage2D(e.TEXTURE_2D, we, P, j[0].width, j[0].height);
          for (let ie = 0, Ue = j.length; ie < Ue; ie++)
            K = j[ie], y.format !== 1023 ? ee !== null ? re ? ce && n.compressedTexSubImage2D(e.TEXTURE_2D, ie, 0, 0, K.width, K.height, ee, K.data) : n.compressedTexImage2D(e.TEXTURE_2D, ie, P, K.width, K.height, 0, K.data) : Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : re ? ce && n.texSubImage2D(e.TEXTURE_2D, ie, 0, 0, K.width, K.height, ee, Se, K.data) : n.texImage2D(e.TEXTURE_2D, ie, P, K.width, K.height, 0, ee, Se, K.data);
        }
      else if (y.isDataArrayTexture)
        if (re) {
          if (de && n.texStorage3D(e.TEXTURE_2D_ARRAY, we, P, D.width, D.height, D.depth), ce)
            if (y.layerUpdates.size > 0) {
              const ie = rl(D.width, D.height, y.format, y.type);
              for (const Ue of y.layerUpdates) {
                const Ie = D.data.subarray(Ue * ie / D.data.BYTES_PER_ELEMENT, (Ue + 1) * ie / D.data.BYTES_PER_ELEMENT);
                n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, Ue, D.width, D.height, 1, ee, Se, Ie);
              }
              y.clearLayerUpdates();
            } else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, D.width, D.height, D.depth, ee, Se, D.data);
        } else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, P, D.width, D.height, D.depth, 0, ee, Se, D.data);
      else if (y.isData3DTexture)
        re ? (de && n.texStorage3D(e.TEXTURE_3D, we, P, D.width, D.height, D.depth), ce && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, D.width, D.height, D.depth, ee, Se, D.data)) : n.texImage3D(e.TEXTURE_3D, 0, P, D.width, D.height, D.depth, 0, ee, Se, D.data);
      else if (y.isFramebufferTexture) {
        if (de)
          if (re) n.texStorage2D(e.TEXTURE_2D, we, P, D.width, D.height);
          else {
            let ie = D.width, Ue = D.height;
            for (let Ie = 0; Ie < we; Ie++)
              n.texImage2D(e.TEXTURE_2D, Ie, P, ie, Ue, 0, ee, Se, null), ie >>= 1, Ue >>= 1;
          }
      } else if (y.isHTMLTexture) {
        if ("texElementImage2D" in e) {
          const ie = e.canvas;
          if (ie.hasAttribute("layoutsubtree") || ie.setAttribute("layoutsubtree", "true"), D.parentNode !== ie) {
            ie.appendChild(D), h.add(y), ie.onpaint = (Ue) => {
              const Ie = Ue.changedElements;
              for (const Ke of h) Ie.includes(Ke.image) && (Ke.needsUpdate = !0);
            }, ie.requestPaint();
            return;
          }
          if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, D);
          else {
            const Ie = e.RGBA, Ke = e.RGBA, ve = e.UNSIGNED_BYTE;
            e.texElementImage2D(e.TEXTURE_2D, 0, Ie, Ke, ve, D);
          }
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        }
      } else if (j.length > 0) {
        if (re && de) {
          const ie = Rt(j[0]);
          n.texStorage2D(e.TEXTURE_2D, we, P, ie.width, ie.height);
        }
        for (let ie = 0, Ue = j.length; ie < Ue; ie++)
          K = j[ie], re ? ce && n.texSubImage2D(e.TEXTURE_2D, ie, 0, 0, ee, Se, K) : n.texImage2D(e.TEXTURE_2D, ie, P, ee, Se, K);
        y.generateMipmaps = !1;
      } else if (re) {
        if (de) {
          const ie = Rt(D);
          n.texStorage2D(e.TEXTURE_2D, we, P, ie.width, ie.height);
        }
        ce && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, ee, Se, D);
      } else n.texImage2D(e.TEXTURE_2D, 0, P, ee, Se, D);
      b(y) && y.mipmapsAutoUpdate === !0 && S(ne), le.__version = oe.version, y.onUpdate && y.onUpdate(y);
    }
    w.__version = y.version;
  }
  function $t(w, y, V) {
    if (y.image.length !== 6) return;
    const ne = Ot(w, y), J = y.source;
    n.bindTexture(e.TEXTURE_CUBE_MAP, w.__webglTexture, e.TEXTURE0 + V);
    const oe = i.get(J);
    if (J.version !== oe.__version || ne === !0) {
      n.activeTexture(e.TEXTURE0 + V);
      const le = qe.getPrimaries(qe.workingColorSpace), D = y.colorSpace === "" ? null : qe.getPrimaries(y.colorSpace), ee = y.colorSpace === "" || le === D ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, y.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, y.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, ee);
      const Se = y.isCompressedTexture || y.image[0].isCompressedTexture, P = y.image[0] && y.image[0].isDataTexture, K = [];
      for (let ve = 0; ve < 6; ve++)
        !Se && !P ? K[ve] = M(y.image[ve], !0, r.maxCubemapSize) : K[ve] = P ? y.image[ve].image : y.image[ve], K[ve] = Oe(y, K[ve]);
      const j = K[0], re = s.convert(y.format, y.colorSpace), de = s.convert(y.type);
      let ce = A(y.internalFormat, re, de, y.normalized, y.colorSpace);
      const we = y.isVideoTexture !== !0, ie = oe.__version === void 0 || ne === !0, Ue = J.dataReady;
      let Ie = T(y, j);
      Tt(e.TEXTURE_CUBE_MAP, y);
      let Ke;
      if (y.isDepthTexture) {
        if (ce = v(y.format === ws, y.type), ie)
          if (we) n.texStorage2D(e.TEXTURE_CUBE_MAP, 1, ce, j.width, j.height);
          else for (let ve = 0; ve < 6; ve++) n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, 0, ce, j.width, j.height, 0, re, de, null);
      } else if (Se) {
        we && ie && n.texStorage2D(e.TEXTURE_CUBE_MAP, Ie, ce, j.width, j.height);
        for (let ve = 0; ve < 6; ve++) {
          Ke = K[ve].mipmaps;
          for (let lt = 0; lt < Ke.length; lt++) {
            const ct = Ke[lt];
            y.format !== 1023 ? re !== null ? we ? Ue && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, lt, 0, 0, ct.width, ct.height, re, ct.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, lt, ce, ct.width, ct.height, 0, ct.data) : Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : we ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, lt, 0, 0, ct.width, ct.height, re, de, ct.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, lt, ce, ct.width, ct.height, 0, re, de, ct.data);
          }
        }
      } else {
        if (Ke = y.mipmaps, we && ie) {
          Ke.length > 0 && Ie++;
          const ve = Rt(K[0]);
          n.texStorage2D(e.TEXTURE_CUBE_MAP, Ie, ce, ve.width, ve.height);
        }
        for (let ve = 0; ve < 6; ve++) if (P) {
          we ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, 0, 0, 0, K[ve].width, K[ve].height, re, de, K[ve].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, 0, ce, K[ve].width, K[ve].height, 0, re, de, K[ve].data);
          for (let lt = 0; lt < Ke.length; lt++) {
            const ct = Ke[lt].image[ve].image;
            we ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, lt + 1, 0, 0, ct.width, ct.height, re, de, ct.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, lt + 1, ce, ct.width, ct.height, 0, re, de, ct.data);
          }
        } else {
          we ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, 0, 0, 0, re, de, K[ve]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, 0, ce, re, de, K[ve]);
          for (let lt = 0; lt < Ke.length; lt++) {
            const ct = Ke[lt];
            we ? Ue && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, lt + 1, 0, 0, re, de, ct.image[ve]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + ve, lt + 1, ce, re, de, ct.image[ve]);
          }
        }
      }
      b(y) && y.mipmapsAutoUpdate === !0 && S(e.TEXTURE_CUBE_MAP), oe.__version = J.version, y.onUpdate && y.onUpdate(y);
    }
    w.__version = y.version;
  }
  function gt(w, y, V, ne, J, oe) {
    const le = s.convert(V.format, V.colorSpace), D = s.convert(V.type), ee = A(V.internalFormat, le, D, V.normalized, V.colorSpace), Se = i.get(y), P = i.get(V);
    if (P.__renderTarget = y, !Se.__hasExternalTextures) {
      const K = Math.max(1, y.width >> oe), j = Math.max(1, y.height >> oe);
      J === e.TEXTURE_3D || J === e.TEXTURE_2D_ARRAY ? n.texImage3D(J, oe, ee, K, j, y.depth, 0, le, D, null) : n.texImage2D(J, oe, ee, K, j, 0, le, D, null);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, w), it(y) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, ne, J, P.__webglTexture, 0, pe(y)) : (J === e.TEXTURE_2D || J >= e.TEXTURE_CUBE_MAP_POSITIVE_X && J <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, ne, J, P.__webglTexture, oe), n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function wt(w, y, V) {
    if (e.bindRenderbuffer(e.RENDERBUFFER, w), y.depthBuffer) {
      const ne = y.depthTexture, J = ne && ne.isDepthTexture ? ne.type : null, oe = v(y.stencilBuffer, J), le = y.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
      it(y) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, pe(y), oe, y.width, y.height) : V ? e.renderbufferStorageMultisample(e.RENDERBUFFER, pe(y), oe, y.width, y.height) : e.renderbufferStorage(e.RENDERBUFFER, oe, y.width, y.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, le, e.RENDERBUFFER, w);
    } else {
      const ne = y.textures;
      for (let J = 0; J < ne.length; J++) {
        const oe = ne[J], le = s.convert(oe.format, oe.colorSpace), D = s.convert(oe.type), ee = A(oe.internalFormat, le, D, oe.normalized, oe.colorSpace);
        it(y) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, pe(y), ee, y.width, y.height) : V ? e.renderbufferStorageMultisample(e.RENDERBUFFER, pe(y), ee, y.width, y.height) : e.renderbufferStorage(e.RENDERBUFFER, ee, y.width, y.height);
      }
    }
    e.bindRenderbuffer(e.RENDERBUFFER, null);
  }
  function Vt(w, y, V) {
    const ne = y.isWebGLCubeRenderTarget === !0;
    if (n.bindFramebuffer(e.FRAMEBUFFER, w), !(y.depthTexture && y.depthTexture.isDepthTexture)) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    const J = i.get(y.depthTexture);
    J.__renderTarget = y;
    const oe = ne ? y.depthTexture.image[0] : y.depthTexture.image;
    (!J.__webglTexture || oe.width !== y.width || oe.height !== y.height) && (oe.width = y.width, oe.height = y.height, y.depthTexture.needsUpdate = !0), ne ? he(y.depthTexture, 0) : ge(y.depthTexture, 0);
    const le = J.__webglTexture, D = pe(y), ee = ne ? e.TEXTURE_CUBE_MAP_POSITIVE_X + V : e.TEXTURE_2D, Se = y.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
    if (y.depthTexture.format === 1026)
      it(y) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, Se, ee, le, 0, D) : e.framebufferTexture2D(e.FRAMEBUFFER, Se, ee, le, 0);
    else if (y.depthTexture.format === 1027)
      it(y) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, Se, ee, le, 0, D) : e.framebufferTexture2D(e.FRAMEBUFFER, Se, ee, le, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function Wt(w) {
    const y = i.get(w), V = w.isWebGLCubeRenderTarget === !0;
    if (y.__boundDepthTexture !== w.depthTexture) {
      const ne = w.depthTexture;
      if (y.__depthDisposeCallback && y.__depthDisposeCallback(), ne) {
        const J = () => {
          delete y.__boundDepthTexture, delete y.__depthDisposeCallback, ne.removeEventListener("dispose", J);
        };
        ne.addEventListener("dispose", J), y.__depthDisposeCallback = J;
      }
      y.__boundDepthTexture = ne;
    }
    if (w.depthTexture && !y.__autoAllocateDepthBuffer)
      if (V) for (let ne = 0; ne < 6; ne++) Vt(y.__webglFramebuffer[ne], w, ne);
      else w.texture.mipmaps.length > 0 ? Vt(y.__webglFramebuffer[0], w, 0) : Vt(y.__webglFramebuffer, w, 0);
    else if (V) {
      y.__webglDepthbuffer = [];
      for (let ne = 0; ne < 6; ne++)
        if (n.bindFramebuffer(e.FRAMEBUFFER, y.__webglFramebuffer[ne]), y.__webglDepthbuffer[ne] === void 0)
          y.__webglDepthbuffer[ne] = e.createRenderbuffer(), wt(y.__webglDepthbuffer[ne], w, !1);
        else {
          const J = w.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, oe = y.__webglDepthbuffer[ne];
          e.bindRenderbuffer(e.RENDERBUFFER, oe), e.framebufferRenderbuffer(e.FRAMEBUFFER, J, e.RENDERBUFFER, oe);
        }
    } else if (w.texture.mipmaps.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, y.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, y.__webglFramebuffer), y.__webglDepthbuffer === void 0)
      y.__webglDepthbuffer = e.createRenderbuffer(), wt(y.__webglDepthbuffer, w, !1);
    else {
      const ne = w.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, J = y.__webglDepthbuffer;
      e.bindRenderbuffer(e.RENDERBUFFER, J), e.framebufferRenderbuffer(e.FRAMEBUFFER, ne, e.RENDERBUFFER, J);
    }
    n.bindFramebuffer(e.FRAMEBUFFER, null);
  }
  function ln(w, y, V) {
    const ne = i.get(w);
    y !== void 0 && gt(ne.__webglFramebuffer, w, w.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), V !== void 0 && Wt(w);
  }
  function O(w) {
    const y = w.texture, V = i.get(w), ne = i.get(y);
    w.addEventListener("dispose", N), R(w);
    const J = w.textures, oe = w.isWebGLCubeRenderTarget === !0, le = J.length > 1;
    if (le || (ne.__webglTexture === void 0 && (ne.__webglTexture = e.createTexture()), ne.__version = y.version, a.memory.textures++), oe) {
      V.__webglFramebuffer = [];
      for (let D = 0; D < 6; D++) if (y.mipmaps.length > 0) {
        V.__webglFramebuffer[D] = [];
        for (let ee = 0; ee < y.mipmaps.length; ee++) V.__webglFramebuffer[D][ee] = e.createFramebuffer();
      } else V.__webglFramebuffer[D] = e.createFramebuffer();
    } else {
      if (y.mipmaps.length > 0) {
        V.__webglFramebuffer = [];
        for (let D = 0; D < y.mipmaps.length; D++) V.__webglFramebuffer[D] = e.createFramebuffer();
      } else V.__webglFramebuffer = e.createFramebuffer();
      if (le) for (let D = 0, ee = J.length; D < ee; D++) {
        const Se = i.get(J[D]);
        Se.__webglTexture === void 0 && (Se.__webglTexture = e.createTexture(), a.memory.textures++);
      }
      if (w.samples > 0 && it(w) === !1) {
        V.__webglMultisampledFramebuffer = e.createFramebuffer(), V.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, V.__webglMultisampledFramebuffer);
        for (let D = 0; D < J.length; D++) {
          const ee = J[D];
          V.__webglColorRenderbuffer[D] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, V.__webglColorRenderbuffer[D]);
          const Se = s.convert(ee.format, ee.colorSpace), P = s.convert(ee.type), K = A(ee.internalFormat, Se, P, ee.normalized, ee.colorSpace, w.isXRRenderTarget === !0), j = pe(w);
          e.renderbufferStorageMultisample(e.RENDERBUFFER, j, K, w.width, w.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + D, e.RENDERBUFFER, V.__webglColorRenderbuffer[D]);
        }
        e.bindRenderbuffer(e.RENDERBUFFER, null), w.depthBuffer && (V.__webglDepthRenderbuffer = e.createRenderbuffer(), wt(V.__webglDepthRenderbuffer, w, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
      }
    }
    if (oe) {
      n.bindTexture(e.TEXTURE_CUBE_MAP, ne.__webglTexture), Tt(e.TEXTURE_CUBE_MAP, y);
      for (let D = 0; D < 6; D++) if (y.mipmaps.length > 0) for (let ee = 0; ee < y.mipmaps.length; ee++) gt(V.__webglFramebuffer[D][ee], w, y, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + D, ee);
      else gt(V.__webglFramebuffer[D], w, y, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + D, 0);
      b(y) ? S(e.TEXTURE_CUBE_MAP) : y.mipmaps.length > 0 && e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAX_LEVEL, y.mipmaps.length - 1), n.unbindTexture();
    } else if (le) {
      for (let D = 0, ee = J.length; D < ee; D++) {
        const Se = J[D], P = i.get(Se);
        let K = e.TEXTURE_2D;
        (w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (K = w.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(K, P.__webglTexture), Tt(K, Se), gt(V.__webglFramebuffer, w, Se, e.COLOR_ATTACHMENT0 + D, K, 0), b(Se) && S(K);
      }
      n.unbindTexture();
    } else {
      let D = e.TEXTURE_2D;
      if ((w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) && (D = w.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(D, ne.__webglTexture), Tt(D, y), y.mipmaps.length > 0) for (let ee = 0; ee < y.mipmaps.length; ee++) gt(V.__webglFramebuffer[ee], w, y, e.COLOR_ATTACHMENT0, D, ee);
      else gt(V.__webglFramebuffer, w, y, e.COLOR_ATTACHMENT0, D, 0);
      b(y) ? S(D) : y.mipmaps.length > 0 && e.texParameteri(D, e.TEXTURE_MAX_LEVEL, y.mipmaps.length - 1), n.unbindTexture();
    }
    w.depthBuffer && Wt(w);
  }
  function cn(w) {
    const y = w.textures;
    for (let V = 0, ne = y.length; V < ne; V++) {
      const J = y[V];
      if (b(J) && J.mipmapsAutoUpdate === !0) {
        const oe = E(w), le = i.get(J).__webglTexture;
        n.bindTexture(oe, le), S(oe), n.unbindTexture();
      }
    }
  }
  const nt = [];
  function yt(w) {
    if (w.samples > 0) {
      if (it(w) === !1) {
        const y = w.textures, V = w.width, ne = w.height;
        let J = e.COLOR_BUFFER_BIT;
        const oe = w.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, le = i.get(w), D = y.length > 1;
        if (D) for (let ee = 0; ee < y.length; ee++)
          n.bindFramebuffer(e.FRAMEBUFFER, le.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + ee, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, le.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + ee, e.TEXTURE_2D, null, 0);
        n.bindFramebuffer(e.READ_FRAMEBUFFER, le.__webglMultisampledFramebuffer), w.texture.mipmaps.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, le.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, le.__webglFramebuffer);
        for (let ee = 0; ee < y.length; ee++) {
          if (w.resolveDepthBuffer && (w.depthBuffer && (J |= e.DEPTH_BUFFER_BIT), w.stencilBuffer && w.resolveStencilBuffer && (J |= e.STENCIL_BUFFER_BIT)), D) {
            e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, le.__webglColorRenderbuffer[ee]);
            const Se = i.get(y[ee]).__webglTexture;
            e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, Se, 0);
          }
          e.blitFramebuffer(0, 0, V, ne, 0, 0, V, ne, J, e.NEAREST), l === !0 && (nt.length = 0, nt.push(e.COLOR_ATTACHMENT0 + ee), w.depthBuffer && w.storeMultisampledDepthBuffer === !1 && nt.push(oe), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, nt));
        }
        if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), D) for (let ee = 0; ee < y.length; ee++) {
          n.bindFramebuffer(e.FRAMEBUFFER, le.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + ee, e.RENDERBUFFER, le.__webglColorRenderbuffer[ee]);
          const Se = i.get(y[ee]).__webglTexture;
          n.bindFramebuffer(e.FRAMEBUFFER, le.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + ee, e.TEXTURE_2D, Se, 0);
        }
        n.bindFramebuffer(e.DRAW_FRAMEBUFFER, le.__webglMultisampledFramebuffer);
      } else if (w.depthBuffer && w.storeMultisampledDepthBuffer === !1 && l) {
        const y = w.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
        e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [y]);
      }
    }
  }
  function pe(w) {
    return Math.min(r.maxSamples, w.samples);
  }
  function it(w) {
    const y = i.get(w);
    return w.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && y.__useRenderToTexture !== !1;
  }
  function Le(w) {
    const y = a.render.frame;
    u.get(w) !== y && (u.set(w, y), w.update());
  }
  function Oe(w, y) {
    const V = w.colorSpace, ne = w.format, J = w.type;
    return w.isCompressedTexture === !0 || w.isVideoTexture === !0 || V !== "srgb-linear" && V !== "" && (qe.getTransfer(V) === "srgb" ? (ne !== 1023 || J !== 1009) && Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : De("WebGLTextures: Unsupported texture color space:", V)), y;
  }
  function Rt(w) {
    return typeof HTMLImageElement < "u" && w instanceof HTMLImageElement ? (c.width = w.naturalWidth || w.width, c.height = w.naturalHeight || w.height) : typeof VideoFrame < "u" && w instanceof VideoFrame ? (c.width = w.displayWidth, c.height = w.displayHeight) : (c.width = w.width, c.height = w.height), c;
  }
  this.allocateTextureUnit = Z, this.resetTextureUnits = k, this.getTextureUnits = Q, this.setTextureUnits = _e, this.setTexture2D = ge, this.setTexture2DArray = Te, this.setTexture3D = ye, this.setTextureCube = he, this.rebindTextures = ln, this.setupRenderTarget = O, this.updateRenderTargetMipmap = cn, this.updateMultisampleRenderTarget = yt, this.setupDepthRenderbuffer = Wt, this.setupFrameBufferTexture = gt, this.useMultisampledRTT = it, this.dispose = H;
}
function Km(e, t) {
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
var $m = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Zm = `
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

}`, Jm = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new bc(e.texture);
      (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Mi({
        vertexShader: $m,
        fragmentShader: Zm,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: t.z },
          depthHeight: { value: t.w }
        }
      });
      this.mesh = new zt(new Lc(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}, Qm = class extends yi {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, s = null, a = "local-floor", o = 1, l = null, c = null, u = null, h = null, d = null, p = null;
    const m = typeof XRWebGLBinding < "u", _ = new Jm(), g = {}, f = t.getContextAttributes();
    let M = null, b = null;
    const S = [], E = [], A = new ke();
    let v = null, T = null;
    const R = new qt();
    R.viewport = new st();
    const U = new qt();
    U.viewport = new st();
    const C = [R, U], N = new Df();
    let q = null, L = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(Z) {
      let te = S[Z];
      return te === void 0 && (te = new Js(), S[Z] = te), te.getTargetRaySpace();
    }, this.getControllerGrip = function(Z) {
      let te = S[Z];
      return te === void 0 && (te = new Js(), S[Z] = te), te.getGripSpace();
    }, this.getHand = function(Z) {
      let te = S[Z];
      return te === void 0 && (te = new Js(), S[Z] = te), te.getHandSpace();
    };
    function H(Z) {
      const te = E.indexOf(Z.inputSource);
      if (te === -1) return;
      const ge = S[te];
      ge !== void 0 && (ge.update(Z.inputSource, Z.frame, l || s), ge.dispatchEvent({
        type: Z.type,
        data: Z.inputSource
      }));
    }
    function $() {
      i.removeEventListener("select", H), i.removeEventListener("selectstart", H), i.removeEventListener("selectend", H), i.removeEventListener("squeeze", H), i.removeEventListener("squeezestart", H), i.removeEventListener("squeezeend", H), i.removeEventListener("end", $), i.removeEventListener("inputsourceschange", B);
      for (let Z = 0; Z < S.length; Z++) {
        const te = E[Z];
        te !== null && (E[Z] = null, S[Z].disconnect(te));
      }
      q = null, L = null, _.reset();
      for (const Z in g) delete g[Z];
      if (e.setRenderTarget(M), d = null, h = null, u = null, i = null, b = null, _e.stop(), n.isPresenting = !1, e.setPixelRatio(v), e.setSize(A.width, A.height, !1), T !== null) {
        const Z = T.camera;
        Z.fov = T.fov, Z.zoom = T.zoom, Z.updateProjectionMatrix(), T = null;
      }
      n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Z) {
      r = Z, n.isPresenting === !0 && Ee("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Z) {
      a = Z, n.isPresenting === !0 && Ee("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || s;
    }, this.setReferenceSpace = function(Z) {
      l = Z;
    }, this.getBaseLayer = function() {
      return h !== null ? h : d;
    }, this.getBinding = function() {
      return u === null && m && (u = new XRWebGLBinding(i, t)), u;
    }, this.getFrame = function() {
      return p;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(Z) {
      if (i = Z, i !== null) {
        if (M = e.getRenderTarget(), i.addEventListener("select", H), i.addEventListener("selectstart", H), i.addEventListener("selectend", H), i.addEventListener("squeeze", H), i.addEventListener("squeezestart", H), i.addEventListener("squeezeend", H), i.addEventListener("end", $), i.addEventListener("inputsourceschange", B), f.xrCompatible !== !0 && await t.makeXRCompatible(), v = e.getPixelRatio(), e.getSize(A), m && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let te = null, ge = null, Te = null;
          f.depth && (Te = f.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, te = f.stencil ? ws : Rr, ge = f.stencil ? Ba : vi);
          const ye = {
            colorFormat: t.RGBA8,
            depthFormat: Te,
            scaleFactor: r
          };
          u = this.getBinding(), h = u.createProjectionLayer(ye), i.updateRenderState({ layers: [h] }), e.setPixelRatio(1), e.setSize(h.textureWidth, h.textureHeight, !1), b = new En(h.textureWidth, h.textureHeight, {
            format: wr,
            type: si,
            depthTexture: new qi(h.textureWidth, h.textureHeight, ge, void 0, void 0, void 0, void 0, void 0, void 0, te),
            stencilBuffer: f.stencil,
            colorSpace: e.outputColorSpace,
            samples: f.antialias ? 4 : 0,
            resolveDepthBuffer: h.ignoreDepthValues === !1,
            resolveStencilBuffer: h.ignoreDepthValues === !1,
            storeMultisampledDepthBuffer: h.ignoreDepthValues === !1,
            storeMultisampledStencilBuffer: h.ignoreDepthValues === !1
          });
        } else {
          const te = {
            antialias: f.antialias,
            alpha: !0,
            depth: f.depth,
            stencil: f.stencil,
            framebufferScaleFactor: r
          };
          d = new XRWebGLLayer(i, t, te), i.updateRenderState({ baseLayer: d }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, !1), b = new En(d.framebufferWidth, d.framebufferHeight, {
            format: wr,
            type: si,
            colorSpace: e.outputColorSpace,
            stencilBuffer: f.stencil,
            resolveDepthBuffer: d.ignoreDepthValues === !1,
            resolveStencilBuffer: d.ignoreDepthValues === !1,
            storeMultisampledDepthBuffer: d.ignoreDepthValues === !1,
            storeMultisampledStencilBuffer: d.ignoreDepthValues === !1
          });
        }
        b.isXRRenderTarget = !0, this.setFoveation(o), l = null, s = await i.requestReferenceSpace(a), _e.setContext(i), _e.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function B(Z) {
      for (let te = 0; te < Z.removed.length; te++) {
        const ge = Z.removed[te], Te = E.indexOf(ge);
        Te >= 0 && (E[Te] = null, S[Te].disconnect(ge));
      }
      for (let te = 0; te < Z.added.length; te++) {
        const ge = Z.added[te];
        let Te = E.indexOf(ge);
        if (Te === -1) {
          for (let he = 0; he < S.length; he++) if (he >= E.length) {
            E.push(ge), Te = he;
            break;
          } else if (E[he] === null) {
            E[he] = ge, Te = he;
            break;
          }
          if (Te === -1) break;
        }
        const ye = S[Te];
        ye && ye.connect(ge);
      }
    }
    function ae(Z, te) {
      te === null ? Z.matrixWorld.copy(Z.matrix) : Z.matrixWorld.multiplyMatrices(te.matrixWorld, Z.matrix), Z.matrixWorldInverse.copy(Z.matrixWorld).invert();
    }
    this.updateCamera = function(Z) {
      if (i === null) return;
      let te = Z.near, ge = Z.far;
      _.texture !== null && (_.depthNear > 0 && (te = _.depthNear), _.depthFar > 0 && (ge = _.depthFar)), N.near = U.near = R.near = te, N.far = U.far = R.far = ge, (q !== N.near || L !== N.far) && (i.updateRenderState({
        depthNear: N.near,
        depthFar: N.far
      }), q = N.near, L = N.far), N.layers.mask = Z.layers.mask | 6, R.layers.mask = N.layers.mask & -5, U.layers.mask = N.layers.mask & -3;
      const Te = Z.parent, ye = N.cameras;
      ae(N, Te);
      for (let he = 0; he < ye.length; he++) ae(ye[he], Te);
      N.projectionMatrix.copy(R.projectionMatrix), N.projectionMatrixInverse.copy(R.projectionMatrixInverse), T === null && Z.isPerspectiveCamera && (T = {
        camera: Z,
        fov: Z.fov,
        zoom: Z.zoom
      }), Y(Z, N, Te);
    };
    function Y(Z, te, ge) {
      ge === null ? Z.matrix.copy(te.matrixWorld) : (Z.matrix.copy(ge.matrixWorld), Z.matrix.invert(), Z.matrix.multiply(te.matrixWorld)), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale), Z.updateMatrixWorld(!0), Z.projectionMatrix.copy(te.projectionMatrix), Z.projectionMatrixInverse.copy(te.projectionMatrixInverse), Z.isPerspectiveCamera && (Z.fov = Wi * 2 * Math.atan(1 / Z.projectionMatrix.elements[5]), Z.zoom = 1);
    }
    this.getCamera = function() {
      return N;
    }, this.getFoveation = function() {
      if (!(h === null && d === null))
        return o;
    }, this.setFoveation = function(Z) {
      o = Z, h !== null && (h.fixedFoveation = Z), d !== null && d.fixedFoveation !== void 0 && (d.fixedFoveation = Z);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(N);
    }, this.getCameraTexture = function(Z) {
      return g[Z];
    };
    let k = null;
    function Q(Z, te) {
      if (c = te.getViewerPose(l || s), p = te, c !== null) {
        const ge = c.views;
        d !== null && (e.setRenderTargetFramebuffer(b, d.framebuffer), e.setRenderTarget(b));
        let Te = !1;
        ge.length !== N.cameras.length && (N.cameras.length = 0, Te = !0);
        for (let he = 0; he < ge.length; he++) {
          const Ve = ge[he];
          let Je = null;
          if (d !== null) Je = d.getViewport(Ve);
          else {
            const Tt = u.getViewSubImage(h, Ve);
            Je = Tt.viewport, he === 0 && (e.setRenderTargetTextures(b, Tt.colorTexture, Tt.depthStencilTexture), e.setRenderTarget(b));
          }
          let Pe = C[he];
          Pe === void 0 && (Pe = new qt(), Pe.layers.enable(he), Pe.viewport = new st(), C[he] = Pe), Pe.matrix.fromArray(Ve.transform.matrix), Pe.matrix.decompose(Pe.position, Pe.quaternion, Pe.scale), Pe.projectionMatrix.fromArray(Ve.projectionMatrix), Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(), Pe.viewport.set(Je.x, Je.y, Je.width, Je.height), he === 0 && (N.matrix.copy(Pe.matrix), N.matrix.decompose(N.position, N.quaternion, N.scale)), Te === !0 && N.cameras.push(Pe);
        }
        const ye = i.enabledFeatures;
        if (ye && ye.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && m) {
          u = n.getBinding();
          const he = u.getDepthInformation(ge[0]);
          he && he.isValid && he.texture && _.init(he, i.renderState);
        }
        if (ye && ye.includes("camera-access") && m) {
          e.state.unbindTexture(), u = n.getBinding();
          for (let he = 0; he < ge.length; he++) {
            const Ve = ge[he].camera;
            if (Ve) {
              let Je = g[Ve];
              Je || (Je = new bc(), g[Ve] = Je);
              const Pe = u.getCameraImage(Ve);
              Je.sourceTexture = Pe;
            }
          }
        }
      }
      for (let ge = 0; ge < S.length; ge++) {
        const Te = E[ge], ye = S[ge];
        Te !== null && ye !== void 0 && ye.update(Te, te, l || s);
      }
      k && k(Z, te), te.detectedPlanes && n.dispatchEvent({
        type: "planesdetected",
        data: te
      }), p = null;
    }
    const _e = new Gc();
    _e.setAnimationLoop(Q), this.setAnimationLoop = function(Z) {
      k = Z;
    }, this.dispose = function() {
    };
  }
}, jm = /* @__PURE__ */ new Ge(), jc = /* @__PURE__ */ new Be();
jc.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function eg(e, t) {
  function n(g, f) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), f.value.copy(g.matrix);
  }
  function i(g, f) {
    f.color.getRGB(g.fogColor.value, Oc(e)), f.isFog ? (g.fogNear.value = f.near, g.fogFar.value = f.far) : f.isFogExp2 && (g.fogDensity.value = f.density);
  }
  function r(g, f, M, b, S) {
    f.isNodeMaterial ? f.uniformsNeedUpdate = !1 : f.isMeshBasicMaterial ? s(g, f) : f.isMeshLambertMaterial ? (s(g, f), f.envMap && (g.envMapIntensity.value = f.envMapIntensity)) : f.isMeshToonMaterial ? (s(g, f), h(g, f)) : f.isMeshPhongMaterial ? (s(g, f), u(g, f), f.envMap && (g.envMapIntensity.value = f.envMapIntensity)) : f.isMeshStandardMaterial ? (s(g, f), d(g, f), f.isMeshPhysicalMaterial && p(g, f, S)) : f.isMeshMatcapMaterial ? (s(g, f), m(g, f)) : f.isMeshDepthMaterial ? s(g, f) : f.isMeshDistanceMaterial ? (s(g, f), _(g, f)) : f.isMeshNormalMaterial ? s(g, f) : f.isLineBasicMaterial ? (a(g, f), f.isLineDashedMaterial && o(g, f)) : f.isPointsMaterial ? l(g, f, M, b) : f.isSpriteMaterial ? c(g, f) : f.isShadowMaterial ? (g.color.value.copy(f.color), g.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(g, f) {
    g.opacity.value = f.opacity, f.color && g.diffuse.value.copy(f.color), f.emissive && g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (g.map.value = f.map, n(f.map, g.mapTransform)), f.alphaMap && (g.alphaMap.value = f.alphaMap, n(f.alphaMap, g.alphaMapTransform)), f.bumpMap && (g.bumpMap.value = f.bumpMap, n(f.bumpMap, g.bumpMapTransform), g.bumpScale.value = f.bumpScale, f.side === 1 && (g.bumpScale.value *= -1)), f.normalMap && (g.normalMap.value = f.normalMap, n(f.normalMap, g.normalMapTransform), g.normalScale.value.copy(f.normalScale), f.side === 1 && g.normalScale.value.negate()), f.displacementMap && (g.displacementMap.value = f.displacementMap, n(f.displacementMap, g.displacementMapTransform), g.displacementScale.value = f.displacementScale, g.displacementBias.value = f.displacementBias), f.emissiveMap && (g.emissiveMap.value = f.emissiveMap, n(f.emissiveMap, g.emissiveMapTransform)), f.specularMap && (g.specularMap.value = f.specularMap, n(f.specularMap, g.specularMapTransform)), f.alphaTest > 0 && (g.alphaTest.value = f.alphaTest);
    const M = t.get(f), b = M.envMap, S = M.envMapRotation;
    b && (g.envMap.value = b, g.envMapRotation.value.setFromMatrix4(jm.makeRotationFromEuler(S)).transpose(), b.isCubeTexture && b.isRenderTargetTexture === !1 && g.envMapRotation.value.premultiply(jc), g.reflectivity.value = f.reflectivity, g.ior.value = f.ior, g.refractionRatio.value = f.refractionRatio), f.lightMap && (g.lightMap.value = f.lightMap, g.lightMapIntensity.value = f.lightMapIntensity, n(f.lightMap, g.lightMapTransform)), f.aoMap && (g.aoMap.value = f.aoMap, g.aoMapIntensity.value = f.aoMapIntensity, n(f.aoMap, g.aoMapTransform));
  }
  function a(g, f) {
    g.diffuse.value.copy(f.color), g.opacity.value = f.opacity, f.map && (g.map.value = f.map, n(f.map, g.mapTransform));
  }
  function o(g, f) {
    g.dashSize.value = f.dashSize, g.totalSize.value = f.dashSize + f.gapSize, g.scale.value = f.scale;
  }
  function l(g, f, M, b) {
    g.diffuse.value.copy(f.color), g.opacity.value = f.opacity, g.size.value = f.size * M, g.scale.value = b * 0.5, f.map && (g.map.value = f.map, n(f.map, g.uvTransform)), f.alphaMap && (g.alphaMap.value = f.alphaMap, n(f.alphaMap, g.alphaMapTransform)), f.alphaTest > 0 && (g.alphaTest.value = f.alphaTest);
  }
  function c(g, f) {
    g.diffuse.value.copy(f.color), g.opacity.value = f.opacity, g.rotation.value = f.rotation, f.map && (g.map.value = f.map, n(f.map, g.mapTransform)), f.alphaMap && (g.alphaMap.value = f.alphaMap, n(f.alphaMap, g.alphaMapTransform)), f.alphaTest > 0 && (g.alphaTest.value = f.alphaTest);
  }
  function u(g, f) {
    g.specular.value.copy(f.specular), g.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function h(g, f) {
    f.gradientMap && (g.gradientMap.value = f.gradientMap);
  }
  function d(g, f) {
    g.metalness.value = f.metalness, f.metalnessMap && (g.metalnessMap.value = f.metalnessMap, n(f.metalnessMap, g.metalnessMapTransform)), g.roughness.value = f.roughness, f.roughnessMap && (g.roughnessMap.value = f.roughnessMap, n(f.roughnessMap, g.roughnessMapTransform)), f.envMap && (g.envMapIntensity.value = f.envMapIntensity);
  }
  function p(g, f, M) {
    g.ior.value = f.ior, f.diffuseRoughness > 0 && (g.diffuseRoughness.value = f.diffuseRoughness, f.diffuseRoughnessMap && (g.diffuseRoughnessMap.value = f.diffuseRoughnessMap, n(f.diffuseRoughnessMap, g.diffuseRoughnessMapTransform))), f.sheen > 0 && (g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), g.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (g.sheenColorMap.value = f.sheenColorMap, n(f.sheenColorMap, g.sheenColorMapTransform)), f.sheenRoughnessMap && (g.sheenRoughnessMap.value = f.sheenRoughnessMap, n(f.sheenRoughnessMap, g.sheenRoughnessMapTransform))), f.clearcoat > 0 && (g.clearcoat.value = f.clearcoat, g.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (g.clearcoatMap.value = f.clearcoatMap, n(f.clearcoatMap, g.clearcoatMapTransform)), f.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, n(f.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (g.clearcoatNormalMap.value = f.clearcoatNormalMap, n(f.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === 1 && g.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (g.dispersion.value = f.dispersion), f.retroreflectivity > 0 && (g.retroreflectivity.value = f.retroreflectivity), f.iridescence > 0 && (g.iridescence.value = f.iridescence, g.iridescenceIOR.value = f.iridescenceIOR, g.iridescenceThicknessMinimum.value = f.iridescenceThicknessMinimum, g.iridescenceThicknessMaximum.value = f.iridescenceThicknessMaximum, f.iridescenceMap && (g.iridescenceMap.value = f.iridescenceMap, n(f.iridescenceMap, g.iridescenceMapTransform)), f.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = f.iridescenceThicknessMap, n(f.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), f.transmission > 0 && (g.transmission.value = f.transmission, g.transmissionSamplerMap.value = M.texture, g.transmissionSamplerSize.value.set(M.width, M.height), f.transmissionMap && (g.transmissionMap.value = f.transmissionMap, n(f.transmissionMap, g.transmissionMapTransform)), g.thickness.value = f.thickness, f.thicknessMap && (g.thicknessMap.value = f.thicknessMap, n(f.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = f.attenuationDistance, g.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (g.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (g.anisotropyMap.value = f.anisotropyMap, n(f.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = f.specularIntensity, g.specularColor.value.copy(f.specularColor), f.specularColorMap && (g.specularColorMap.value = f.specularColorMap, n(f.specularColorMap, g.specularColorMapTransform)), f.specularIntensityMap && (g.specularIntensityMap.value = f.specularIntensityMap, n(f.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function m(g, f) {
    f.matcap && (g.matcap.value = f.matcap);
  }
  function _(g, f) {
    const M = t.get(f).light;
    g.referencePosition.value.setFromMatrixPosition(M.matrixWorld), g.nearDistance.value = M.shadow.camera.near, g.farDistance.value = M.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: r
  };
}
function tg(e, t, n, i) {
  let r = {}, s = {};
  function a(M, b) {
    const S = b.program;
    i.uniformBlockBinding(M, S, r[M.id]);
  }
  function o(M, b) {
    let S = r[M.id];
    S === void 0 && (m(M), S = l(M), r[M.id] = S, M.addEventListener("dispose", g));
    const E = b.program;
    i.updateUBOMapping(M, E);
    const A = t.render.frame;
    s[M.id] !== A && (c(M), s[M.id] = A);
  }
  function l(M) {
    const b = e.createBuffer(), S = M.__size, E = M.usage;
    return e.bindBuffer(e.UNIFORM_BUFFER, b), e.bufferData(e.UNIFORM_BUFFER, S, E), e.bindBuffer(e.UNIFORM_BUFFER, null), b;
  }
  function c(M) {
    const b = r[M.id], S = M.uniforms, E = M.__cache;
    e.bindBuffer(e.UNIFORM_BUFFER, b);
    for (let A = 0, v = S.length; A < v; A++) {
      const T = S[A];
      if (Array.isArray(T)) for (let R = 0, U = T.length; R < U; R++) u(T[R], A, R, E);
      else u(T, A, 0, E);
    }
    e.bindBuffer(e.UNIFORM_BUFFER, null);
  }
  function u(M, b, S, E) {
    if (d(M, b, S, E) === !0) {
      const A = M.__offset, v = M.value;
      if (Array.isArray(v)) {
        let T = 0;
        for (let R = 0; R < v.length; R++) {
          const U = v[R], C = _(U, !0);
          h(U, M.__data, T), T += C.storage / Float32Array.BYTES_PER_ELEMENT;
        }
      } else h(v, M.__data, 0);
      e.bufferSubData(e.UNIFORM_BUFFER, A, M.__data);
    }
  }
  function h(M, b, S) {
    typeof M == "number" || typeof M == "boolean" ? b[S] = M : M.isMatrix3 ? (b[S] = M.elements[0], b[S + 1] = M.elements[1], b[S + 2] = M.elements[2], b[S + 3] = 0, b[S + 4] = M.elements[3], b[S + 5] = M.elements[4], b[S + 6] = M.elements[5], b[S + 7] = 0, b[S + 8] = M.elements[6], b[S + 9] = M.elements[7], b[S + 10] = M.elements[8], b[S + 11] = 0) : ArrayBuffer.isView(M) ? b.set(M.subarray(0, b.length - S), S) : M.toArray(b, S);
  }
  function d(M, b, S, E) {
    const A = M.value, v = b + "_" + S;
    if (Array.isArray(A)) {
      E[v] === void 0 && (E[v] = []);
      const T = E[v];
      let R = !1;
      for (let U = 0; U < A.length; U++) p(A[U], T, U) === !0 && (R = !0);
      return R;
    }
    return p(A, E, v);
  }
  function p(M, b, S) {
    if (b[S] === void 0)
      return typeof M == "number" || typeof M == "boolean" ? b[S] = M : ArrayBuffer.isView(M) ? b[S] = M.slice() : b[S] = M.clone(), !0;
    {
      const E = b[S];
      if (typeof M == "number" || typeof M == "boolean") {
        if (E !== M)
          return b[S] = M, !0;
      } else {
        if (ArrayBuffer.isView(M)) return !0;
        if (E.equals(M) === !1)
          return E.copy(M), !0;
      }
    }
    return !1;
  }
  function m(M) {
    const b = M.uniforms;
    let S = 0;
    const E = 16;
    for (let v = 0, T = b.length; v < T; v++) {
      const R = Array.isArray(b[v]) ? b[v] : [b[v]];
      for (let U = 0, C = R.length; U < C; U++) {
        const N = R[U], q = Array.isArray(N.value) ? N.value : [N.value], L = Array.isArray(b[v]) || Array.isArray(N.value);
        let H = S;
        for (let $ = 0, B = q.length; $ < B; $++) {
          const ae = q[$], Y = _(ae, L), k = S % E, Q = k % Y.boundary, _e = k + Q;
          S += Q, _e !== 0 && E - _e < Y.storage && (S += E - _e), $ === 0 && (H = S), S += Y.storage;
        }
        N.__data = new (N.type === "int" ? Int32Array : N.type === "uint" ? Uint32Array : Float32Array)((S - H) / Float32Array.BYTES_PER_ELEMENT), N.__offset = H;
      }
    }
    const A = S % E;
    return A > 0 && (S += E - A), M.__size = S, M.__cache = {}, this;
  }
  function _(M, b) {
    const S = {
      boundary: 0,
      storage: 0
    };
    return typeof M == "number" || typeof M == "boolean" ? (S.boundary = 4, S.storage = 4) : M.isVector2 ? (S.boundary = 8, S.storage = 8) : M.isVector3 || M.isColor ? (S.boundary = 16, S.storage = 12) : M.isVector4 ? (S.boundary = 16, S.storage = 16) : M.isMatrix3 ? (S.boundary = 16, S.storage = 48) : M.isMatrix4 ? (S.boundary = 16, S.storage = 64) : M.isTexture ? Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(M) ? (S.boundary = 16, S.storage = M.byteLength) : Ee("WebGLRenderer: Unsupported uniform value type.", M), b === !0 && (S.boundary = 16, S.storage = Math.ceil(S.storage / 16) * 16), S;
  }
  function g(M) {
    const b = M.target;
    b.removeEventListener("dispose", g), e.deleteBuffer(r[b.id]), delete r[b.id], delete s[b.id];
  }
  function f() {
    for (const M in r) e.deleteBuffer(r[M]);
    r = {}, s = {};
  }
  return {
    bind: a,
    update: o,
    dispose: f
  };
}
var ng = new Uint16Array([
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
]), Sn = null;
function ig() {
  return Sn === null && (Sn = new Va(ng, 16, 16, Rs, ai), Sn.name = "DFG_LUT", Sn.minFilter = an, Sn.magFilter = an, Sn.wrapS = bn, Sn.wrapT = bn, Sn.generateMipmaps = !1, Sn.needsUpdate = !0), Sn;
}
var rg = class {
  constructor(e = {}) {
    const { canvas: t = Jh(), context: n = null, depth: i = !0, stencil: r = !1, alpha: s = !1, antialias: a = !1, premultipliedAlpha: o = !0, preserveDrawingBuffer: l = !1, powerPreference: c = "default", failIfMajorPerformanceCaveat: u = !1, reversedDepthBuffer: h = !1, outputBufferType: d = si } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else p = s;
    const m = d, _ = /* @__PURE__ */ new Set([
      rc,
      ic,
      nc
    ]), g = /* @__PURE__ */ new Set([
      si,
      vi,
      Ql,
      Ba,
      jl,
      ec
    ]), f = /* @__PURE__ */ new Uint32Array(4), M = /* @__PURE__ */ new Int32Array(4), b = {
      textures: [],
      min: [],
      max: [],
      resolution: []
    };
    let S = null, E = null;
    const A = [], v = [];
    let T = null;
    this.domElement = t, this.debug = {
      checkShaderErrors: !0,
      diagnostics: { keywords: !1 },
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    const R = this;
    let U = !1, C = null, N = null, q = null, L = null;
    this._outputColorSpace = At;
    let H = 0, $ = 0, B = null, ae = -1, Y = null;
    const k = new st(), Q = new st();
    let _e = null;
    const Z = new Ce(0);
    let te = 0, ge = t.width, Te = t.height, ye = 1, he = null, Ve = null;
    const Je = new st(0, 0, ge, Te), Pe = new st(0, 0, ge, Te);
    let Tt = !1;
    const Ot = new Ir(), bt = new qd();
    let mt = !1, Gt = !1;
    const $t = new Ge(), gt = new z(), wt = new st(), Vt = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0
    };
    let Wt = !1;
    function ln() {
      return B === null ? ye : 1;
    }
    let O = n;
    function cn(x, I) {
      return t.getContext(x, I);
    }
    let nt, yt, pe, it, Le, Oe, Rt, w, y, V, ne, J, oe, le, D, ee, Se, P, K, j, re, de, ce;
    try {
      const x = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: a,
        premultipliedAlpha: o,
        preserveDrawingBuffer: l,
        powerPreference: c,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r187"), t.addEventListener("webglcontextlost", Ue, !1), t.addEventListener("webglcontextrestored", Ie, !1), t.addEventListener("webglcontextcreationerror", Ke, !1), O === null) {
        const I = "webgl2";
        if (O = cn(I, x), O === null)
          throw cn(I) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      we();
    } catch (x) {
      throw t.removeEventListener("webglcontextlost", Ue, !1), t.removeEventListener("webglcontextrestored", Ie, !1), t.removeEventListener("webglcontextcreationerror", Ke, !1), De("WebGLRenderer: " + x.message), x;
    }
    function we() {
      nt = new op(O), nt.init(), re = new Km(O, nt), yt = new Zf(O, nt, e, re), pe = new qm(O, nt), yt.reversedDepthBuffer && h && pe.buffers.depth.setReversed(!0), N = O.createFramebuffer(), q = O.createFramebuffer(), L = O.createFramebuffer(), it = new up(O), Le = new Im(), Oe = new Ym(O, nt, pe, Le, yt, re, it), Rt = new ap(R), w = new Xf(O), de = new Kf(O, w), y = new lp(O, w, it, de), V = new dp(O, y, w, de, it), P = new hp(O, yt, Oe), D = new Jf(Le), ne = new Lm(R, Rt, nt, yt, de, D), J = new eg(R, Le), oe = new Nm(), le = new zm(nt), Se = new Yf(R, Rt, pe, V, p, o), ee = new Xm(R, V, yt), ce = new tg(O, it, yt, pe), K = new $f(O, nt, it), j = new cp(O, nt, it), it.programs = ne.programs, R.capabilities = yt, R.extensions = nt, R.properties = Le, R.renderLists = oe, R.shadowMap = ee, R.state = pe, R.info = it;
    }
    m !== 1009 && (T = new pp(m, t.width, t.height, a, i, r));
    const ie = new Qm(R, O);
    this.xr = ie, this.getContext = function() {
      return O;
    }, this.getContextAttributes = function() {
      return O.getContextAttributes();
    }, this.forceContextLoss = function() {
      const x = nt.get("WEBGL_lose_context");
      x && x.loseContext();
    }, this.forceContextRestore = function() {
      const x = nt.get("WEBGL_lose_context");
      x && x.restoreContext();
    }, this.getPixelRatio = function() {
      return ye;
    }, this.setPixelRatio = function(x) {
      x !== void 0 && (ye = x, this.setSize(ge, Te, !1));
    }, this.getSize = function(x) {
      return x.set(ge, Te);
    }, this.setSize = function(x, I, X = !0) {
      if (ie.isPresenting) {
        Ee("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      ge = x, Te = I, t.width = Math.floor(x * ye), t.height = Math.floor(I * ye), X === !0 && (t.style.width = x + "px", t.style.height = I + "px"), T !== null && T.setSize(t.width, t.height), this.setViewport(0, 0, x, I);
    }, this.getDrawingBufferSize = function(x) {
      return x.set(ge * ye, Te * ye).floor();
    }, this.setDrawingBufferSize = function(x, I, X) {
      ge = x, Te = I, ye = X, t.width = Math.floor(x * X), t.height = Math.floor(I * X), this.setViewport(0, 0, x, I);
    }, this.setEffects = function(x) {
      if (m === 1009) {
        De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (x) {
        for (let I = 0; I < x.length; I++) if (x[I].isOutputPass === !0) {
          Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      T.setEffects(x || []);
    }, this.getCurrentViewport = function(x) {
      return x.copy(k);
    }, this.getViewport = function(x) {
      return x.copy(Je);
    }, this.setViewport = function(x, I, X, W) {
      x.isVector4 ? Je.set(x.x, x.y, x.z, x.w) : Je.set(x, I, X, W), pe.viewport(k.copy(Je).multiplyScalar(ln()).round());
    }, this.getScissor = function(x) {
      return x.copy(Pe);
    }, this.setScissor = function(x, I, X, W) {
      x.isVector4 ? Pe.set(x.x, x.y, x.z, x.w) : Pe.set(x, I, X, W), pe.scissor(Q.copy(Pe).multiplyScalar(ln()).round());
    }, this.getScissorTest = function() {
      return Tt;
    }, this.setScissorTest = function(x) {
      pe.setScissorTest(Tt = x);
    }, this.setOpaqueSort = function(x) {
      he = x;
    }, this.setTransparentSort = function(x) {
      Ve = x;
    }, this.getClearColor = function(x) {
      return x.copy(Se.getClearColor());
    }, this.setClearColor = function() {
      Se.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return Se.getClearAlpha();
    }, this.setClearAlpha = function() {
      Se.setClearAlpha(...arguments);
    }, this.clear = function(x = !0, I = !0, X = !0) {
      let W = 0;
      if (x) {
        let G = !1;
        if (B !== null) {
          const se = B.texture.format;
          G = _.has(se);
        }
        if (G) {
          const se = B.texture.type, fe = g.has(se), ue = Se.getClearColor(), Me = Se.getClearAlpha(), Re = ue.r, We = ue.g, $e = ue.b;
          fe ? (f[0] = Re, f[1] = We, f[2] = $e, f[3] = Me, O.clearBufferuiv(O.COLOR, 0, f)) : (M[0] = Re, M[1] = We, M[2] = $e, M[3] = Me, O.clearBufferiv(O.COLOR, 0, M));
        } else W |= O.COLOR_BUFFER_BIT;
      }
      I && (W |= O.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), X && (W |= O.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), W !== 0 && O.clear(W);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.setNodesHandler = function(x) {
      x.setRenderer(this), C = x;
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Ue, !1), t.removeEventListener("webglcontextrestored", Ie, !1), t.removeEventListener("webglcontextcreationerror", Ke, !1), Se.dispose(), oe.dispose(), le.dispose(), Oe.dispose(), Le.dispose(), Rt.dispose(), V.dispose(), y.dispose(), de.dispose(), ce.dispose(), ne.dispose(), ie.dispose(), ie.removeEventListener("sessionstart", Ja), ie.removeEventListener("sessionend", Qa), oi.stop();
    };
    function Ue(x) {
      x.preventDefault(), Ls("WebGLRenderer: Context Lost."), U = !0;
    }
    function Ie() {
      Ls("WebGLRenderer: Context Restored."), U = !1;
      const x = it.autoReset, I = ee.enabled, X = ee.autoUpdate, W = ee.needsUpdate, G = ee.type;
      we(), it.autoReset = x, ee.enabled = I, ee.autoUpdate = X, ee.needsUpdate = W, ee.type = G;
    }
    function Ke(x) {
      De("WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage);
    }
    function ve(x) {
      const I = x.target;
      I.removeEventListener("dispose", ve), lt(I);
    }
    function lt(x) {
      ct(x), Le.remove(x);
    }
    function ct(x) {
      const I = Le.get(x).programs;
      I !== void 0 && (I.forEach(function(X) {
        ne.releaseProgram(X);
      }), x.isShaderMaterial && ne.releaseShaderCache(x));
    }
    this.renderBufferDirect = function(x, I, X, W, G, se) {
      I === null && (I = Vt);
      const fe = G.isMesh && G.matrixWorld.determinantAffine() < 0, ue = au(x, I, X, W, G);
      pe.setMaterial(W, fe);
      let Me = X.index, Re = 1;
      if (W.wireframe === !0) {
        if (Me = y.getWireframeAttribute(X), Me === void 0) return;
        Re = 2;
      }
      const We = X.drawRange, $e = X.attributes.position;
      let xe = We.start * Re, je = (We.start + We.count) * Re;
      se !== null && (xe = Math.max(xe, se.start * Re), je = Math.min(je, (se.start + se.count) * Re)), Me !== null ? (xe = Math.max(xe, 0), je = Math.min(je, Me.count)) : $e != null && (xe = Math.max(xe, 0), je = Math.min(je, $e.count));
      const pt = je - xe;
      if (pt < 0 || pt === 1 / 0) return;
      de.setup(G, W, ue, X, Me);
      let rt, Qe = K;
      if (Me !== null && (rt = w.get(Me), Qe = j, Qe.setIndex(rt)), G.isMesh)
        W.wireframe === !0 ? (pe.setLineWidth(W.wireframeLinewidth * ln()), Qe.setMode(O.LINES)) : Qe.setMode(O.TRIANGLES);
      else if (G.isLine) {
        let Ct = W.linewidth;
        Ct === void 0 && (Ct = 1), pe.setLineWidth(Ct * ln()), G.isLineSegments ? Qe.setMode(O.LINES) : G.isLineLoop ? Qe.setMode(O.LINE_LOOP) : Qe.setMode(O.LINE_STRIP);
      } else G.isPoints ? Qe.setMode(O.POINTS) : G.isSprite && Qe.setMode(O.TRIANGLES);
      if (G.isBatchedMesh)
        if (nt.get("WEBGL_multi_draw"))
          Qe.renderMultiDraw(G._multiDrawStarts, G._multiDrawCounts, G._multiDrawCount);
        else {
          const Ct = G._multiDrawStarts, be = G._multiDrawCounts, Zt = G._multiDrawCount, et = Me ? w.get(Me).bytesPerElement : 1, li = Le.get(W).currentProgram.getUniforms();
          for (let Pt = 0; Pt < Zt; Pt++)
            li.setValue(O, "_gl_DrawID", Pt), Qe.render(Ct[Pt] / et, be[Pt]);
        }
      else if (G.isInstancedMesh) Qe.renderInstances(xe, pt, G.count);
      else if (X.isInstancedBufferGeometry) {
        const Ct = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0, be = Math.min(X.instanceCount, Ct);
        Qe.renderInstances(xe, pt, be);
      } else Qe.render(xe, pt);
    };
    function Za(x, I, X, W) {
      C !== null && x.isNodeMaterial && C.setObject(W, x), mt === !0 && D.setState(x, X, !1), x.transparent === !0 && x.side === 2 && x.forceSinglePass === !1 ? (x.side = 1, x.needsUpdate = !0, ir(x, I, W), x.side = 0, x.needsUpdate = !0, ir(x, I, W), x.side = 2) : ir(x, I, W);
    }
    this.compile = function(x, I, X = null) {
      X === null && (X = x), C !== null && C.renderStart(x, I, X), E = le.get(X), E.init(I), v.push(E), X.traverseVisible(function(G) {
        G.isLight && G.layers.test(I.layers) && (E.pushLight(G), G.castShadow && E.pushShadow(G));
      }), x !== X && x.traverseVisible(function(G) {
        G.isLight && G.layers.test(I.layers) && (E.pushLight(G), G.castShadow && E.pushShadow(G));
      }), E.setupLights(), C !== null && C.updateLights(E.state.lightsArray), Gt = this.localClippingEnabled, mt = D.init(this.clippingPlanes, Gt), mt === !0 && D.setGlobalState(this.clippingPlanes, I), C !== null && ee.render(E.state.shadowsArray, X, I);
      const W = /* @__PURE__ */ new Set();
      return x.traverse(function(G) {
        if (!(G.isMesh || G.isPoints || G.isLine || G.isSprite)) return;
        const se = G.material;
        if (se)
          if (Array.isArray(se)) for (let fe = 0; fe < se.length; fe++) {
            const ue = se[fe];
            Za(ue, X, I, G), W.add(ue);
          }
          else
            Za(se, X, I, G), W.add(se);
      }), E = v.pop(), C !== null && C.renderEnd(), W;
    }, this.compileAsync = function(x, I, X = null) {
      const W = this.compile(x, I, X);
      return new Promise((G) => {
        function se() {
          if (W.forEach(function(fe) {
            const ue = Le.get(fe).currentProgram;
            (ue === void 0 || ue.isReady()) && W.delete(fe);
          }), W.size === 0) {
            G(x);
            return;
          }
          setTimeout(se, 10);
        }
        nt.get("KHR_parallel_shader_compile") !== null ? se() : setTimeout(se, 10);
      });
    };
    let Gs = null;
    function ru(x) {
      Gs && Gs(x);
    }
    function Ja() {
      oi.stop();
    }
    function Qa() {
      oi.start();
    }
    const oi = new Gc();
    oi.setAnimationLoop(ru), typeof self < "u" && oi.setContext(self), this.setAnimationLoop = function(x) {
      Gs = x, ie.setAnimationLoop(x), x === null ? oi.stop() : oi.start();
    }, ie.addEventListener("sessionstart", Ja), ie.addEventListener("sessionend", Qa), this.render = function(x, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (U === !0) return;
      C !== null && C.renderStart(x, I);
      const X = ie.enabled === !0 && ie.isPresenting === !0, W = T !== null && (B === null || X) && T.begin(R, B);
      if (x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), ie.enabled === !0 && ie.isPresenting === !0 && (T === null || T.isCompositing() === !1) && (ie.cameraAutoUpdate === !0 && ie.updateCamera(I), I = ie.getCamera()), x.isScene === !0 && x.onBeforeRender(R, x, I, B), E = le.get(x, v.length), E.init(I), E.state.textureUnits = Oe.getTextureUnits(), v.push(E), $t.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), I.isArrayCamera ? bt.setFromArrayCamera(I) : Ot.setFromProjectionMatrix($t, _i, I.reversedDepth), Gt = this.localClippingEnabled, mt = D.init(this.clippingPlanes, Gt), S = oe.get(x, A.length), S.init(), A.push(S), this.info.render.frame++, ie.enabled === !0 && ie.isPresenting === !0) {
        const se = R.xr.getDepthSensingMesh();
        se !== null && Vs(se, I, -1 / 0, R.sortObjects);
      }
      Vs(x, I, 0, R.sortObjects), S.finish(), C !== null && C.updateLights(E.state.lightsArray), R.sortObjects === !0 && S.sort(he, Ve), Wt = ie.enabled === !1 || ie.isPresenting === !1 || ie.hasDepthSensing() === !1, Wt && Se.addToRenderList(S, x), this.info.autoReset === !0 && this.info.reset(), mt === !0 && D.beginShadows();
      const G = E.state.shadowsArray;
      if (ee.render(G, x, I), mt === !0 && D.endShadows(), (W && T.hasRenderPass()) === !1) {
        const se = S.opaque, fe = S.transmissive;
        if (E.setupLights(), I.isArrayCamera) {
          const ue = I.cameras;
          if (fe.length > 0) for (let Me = 0, Re = ue.length; Me < Re; Me++) {
            const We = ue[Me];
            eo(se, fe, x, We);
          }
          Wt && Se.render(x);
          for (let Me = 0, Re = ue.length; Me < Re; Me++) {
            const We = ue[Me];
            ja(S, x, We, We.viewport);
          }
        } else
          fe.length > 0 && eo(se, fe, x, I), Wt && Se.render(x), ja(S, x, I);
      }
      B !== null && $ === 0 && (Oe.updateMultisampleRenderTarget(B), Oe.updateRenderTargetMipmap(B)), W && T.end(R), x.isScene === !0 && x.onAfterRender(R, x, I), de.resetDefaultState(), ae = -1, Y = null, v.pop(), v.length > 0 ? (E = v[v.length - 1], Oe.setTextureUnits(E.state.textureUnits), mt === !0 && D.setGlobalState(R.clippingPlanes, E.state.camera)) : E = null, A.pop(), A.length > 0 ? S = A[A.length - 1] : S = null, C !== null && C.renderEnd();
    };
    function Vs(x, I, X, W) {
      if (x.visible === !1) return;
      if (x.layers.test(I.layers)) {
        if (x.isGroup) X = x.renderOrder;
        else if (x.isLOD)
          x.autoUpdate === !0 && x.update(I);
        else if (x.isLight)
          E.pushLight(x), x.castShadow && E.pushShadow(x);
        else if (x.isSprite) {
          const se = I.isArrayCamera ? bt : Ot;
          if (!x.frustumCulled || x.intersectsFrustum(se)) {
            W && wt.setFromMatrixPosition(x.matrixWorld).applyMatrix4($t);
            const fe = V.update(x), ue = x.material;
            ue.visible && S.push(x, fe, ue, X, wt.z, null, I);
          }
        } else if (x.isMesh || x.isLine || x.isPoints) {
          const se = I.isArrayCamera ? bt : Ot;
          if (!x.frustumCulled || x.intersectsFrustum(se)) {
            const fe = V.update(x), ue = x.material;
            if (W && (x.boundingSphere !== void 0 ? (x.boundingSphere === null && x.computeBoundingSphere(), wt.copy(x.boundingSphere.center)) : (fe.boundingSphere === null && fe.computeBoundingSphere(), wt.copy(fe.boundingSphere.center)), wt.applyMatrix4(x.matrixWorld).applyMatrix4($t)), Array.isArray(ue)) {
              const Me = fe.groups;
              for (let Re = 0, We = Me.length; Re < We; Re++) {
                const $e = Me[Re], xe = ue[$e.materialIndex];
                xe && xe.visible && S.push(x, fe, xe, X, wt.z, $e, I);
              }
            } else ue.visible && S.push(x, fe, ue, X, wt.z, null, I);
          }
        }
      }
      const G = x.children;
      for (let se = 0, fe = G.length; se < fe; se++) Vs(G[se], I, X, W);
    }
    function ja(x, I, X, W) {
      const { opaque: G, transmissive: se, transparent: fe } = x;
      E.setupLightsView(X), mt === !0 && D.setGlobalState(R.clippingPlanes, X), W && pe.viewport(k.copy(W)), G.length > 0 && kr(G, I, X), se.length > 0 && kr(se, I, X), fe.length > 0 && kr(fe, I, X), pe.buffers.depth.setTest(!0), pe.buffers.depth.setMask(!0), pe.buffers.color.setMask(!0), pe.setPolygonOffset(!1);
    }
    function eo(x, I, X, W) {
      if ((X.isScene === !0 ? X.overrideMaterial : null) !== null) return;
      if (E.state.transmissionRenderTarget[W.id] === void 0) {
        const $e = nt.has("EXT_color_buffer_half_float") || nt.has("EXT_color_buffer_float");
        E.state.transmissionRenderTarget[W.id] = new En(1, 1, {
          generateMipmaps: !0,
          type: $e ? ai : si,
          minFilter: Ur,
          samples: Math.max(4, yt.samples),
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          storeMultisampledDepthBuffer: !1,
          storeMultisampledStencilBuffer: !1,
          colorSpace: qe.workingColorSpace
        });
      }
      const G = E.state.transmissionRenderTarget[W.id], se = W.viewport || k;
      G.setSize(se.z * R.transmissionResolutionScale, se.w * R.transmissionResolutionScale);
      const fe = R.getRenderTarget(), ue = R.getActiveCubeFace(), Me = R.getActiveMipmapLevel();
      R.setRenderTarget(G), R.getClearColor(Z), te = R.getClearAlpha(), te < 1 && R.setClearColor(16777215, 0.5), R.clear(), Wt && Se.render(X);
      const Re = R.toneMapping;
      R.toneMapping = 0;
      const We = W.viewport;
      if (W.viewport !== void 0 && (W.viewport = void 0), E.setupLightsView(W), mt === !0 && D.setGlobalState(R.clippingPlanes, W), kr(x, X, W), Oe.updateMultisampleRenderTarget(G), Oe.updateRenderTargetMipmap(G), nt.has("WEBGL_multisampled_render_to_texture") === !1) {
        let $e = !1;
        for (let xe = 0, je = I.length; xe < je; xe++) {
          const { object: pt, geometry: rt, material: Qe, group: Ct } = I[xe];
          if (Qe.side === 2 && pt.layers.test(W.layers)) {
            const be = Qe.side;
            Qe.side = 1, Qe.needsUpdate = !0, to(pt, X, W, rt, Qe, Ct), Qe.side = be, Qe.needsUpdate = !0, $e = !0;
          }
        }
        $e === !0 && (Oe.updateMultisampleRenderTarget(G), Oe.updateRenderTargetMipmap(G));
      }
      R.setRenderTarget(fe, ue, Me), R.setClearColor(Z, te), We !== void 0 && (W.viewport = We), R.toneMapping = Re;
    }
    function kr(x, I, X) {
      const W = I.isScene === !0 ? I.overrideMaterial : null;
      for (let G = 0, se = x.length; G < se; G++) {
        const fe = x[G], { object: ue, geometry: Me, group: Re } = fe;
        let We = fe.material;
        We.allowOverride === !0 && W !== null && (We = W), ue.layers.test(X.layers) && to(ue, I, X, Me, We, Re);
      }
    }
    function to(x, I, X, W, G, se) {
      C !== null && G.isNodeMaterial && C.setObject(x, G), x.onBeforeRender(R, I, X, W, G, se), x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x.modelViewMatrix), G.onBeforeRender(R, I, X, W, x, se), G.transparent === !0 && G.side === 2 && G.forceSinglePass === !1 ? (G.side = 1, G.needsUpdate = !0, R.renderBufferDirect(X, I, W, G, x, se), G.side = 0, G.needsUpdate = !0, R.renderBufferDirect(X, I, W, G, x, se), G.side = 2) : R.renderBufferDirect(X, I, W, G, x, se), x.onAfterRender(R, I, X, W, G, se);
    }
    function no(x) {
      let I = 0;
      for (const X of x) X.texture !== null && I++;
      return I;
    }
    function ir(x, I, X) {
      I.isScene !== !0 && (I = Vt);
      const W = Le.get(x), G = E.state.lights, se = E.state.shadowsArray, fe = G.state.version, ue = ne.getParameters(x, G.state, se, I, X, E.state.lightProbeGridArray), Me = ne.getProgramCacheKey(ue);
      let Re = W.programs;
      W.environment = x.isMeshStandardMaterial || x.isMeshLambertMaterial || x.isMeshPhongMaterial ? I.environment : null, W.fog = I.fog;
      const We = x.isMeshStandardMaterial || x.isMeshLambertMaterial && !x.envMap || x.isMeshPhongMaterial && !x.envMap;
      W.envMap = Rt.get(x.envMap || W.environment, We), W.envMapRotation = W.environment !== null && x.envMap === null ? I.environmentRotation : x.envMapRotation, Re === void 0 && (x.addEventListener("dispose", ve), Re = /* @__PURE__ */ new Map(), W.programs = Re, W.programVariants = /* @__PURE__ */ new Map());
      let $e = Re.get(Me);
      if ($e !== void 0) {
        if (W.currentProgram === $e && W.lightsStateVersion === fe)
          return ro(x, ue), $e;
      } else
        ue.uniforms = ne.getUniforms(x), C !== null && x.isNodeMaterial && C.build(x, X, ue), x.onBeforeCompile(ue, R), $e = ne.acquireProgram(ue, Me), Re.set(Me, $e), W.uniforms = ue.uniforms;
      const xe = W.uniforms;
      return (!x.isShaderMaterial && !x.isRawShaderMaterial || x.clipping === !0) && (xe.clippingPlanes = D.uniform), ro(x, ue), W.needsLights = lu(x), W.lightsStateVersion = fe, W.needsLights && (xe.ambientLightColor.value = G.state.ambient, xe.lightProbe.value = G.state.probe, xe.sunLights.value = G.state.sun, xe.sunLightShadows.value = G.state.sunShadow, xe.directionalLights.value = G.state.directional, xe.directionalLightShadows.value = G.state.directionalShadow, xe.spotLights.value = G.state.spot, xe.spotLightShadows.value = G.state.spotShadow, xe.rectAreaLights.value = G.state.rectArea, xe.ltc_1.value = G.state.rectAreaLTC1, xe.ltc_2.value = G.state.rectAreaLTC2, xe.pointLights.value = G.state.point, xe.pointLightShadows.value = G.state.pointShadow, xe.hemisphereLights.value = G.state.hemi, xe.sunShadowMatrix.value = G.state.sunShadowMatrix, xe.sunShadowCascade.value = G.state.sunShadowCascade, xe.directionalShadowMatrix.value = G.state.directionalShadowMatrix, xe.spotLightMatrix.value = G.state.spotLightMatrix, xe.spotLightMap.value = G.state.spotLightMap, xe.pointShadowMatrix.value = G.state.pointShadowMatrix), W.numLightProbeGrids = no(E.state.lightProbeGridArray), W.currentProgram = $e, W.uniformsList = null, $e;
    }
    function su(x, I, X, W, G) {
      const se = Le.get(x), fe = se.currentProgram.id + "," + W + "," + G;
      let ue = se.programVariants.get(fe);
      return ue === void 0 ? (ue = ir(x, I, X), se.programVariants.set(fe, ue)) : (se.currentProgram = ue, se.uniformsList = null, se.outputColorSpace = W, se.toneMapping = G), ue;
    }
    function io(x) {
      if (x.uniformsList === null) {
        const I = x.currentProgram.getUniforms();
        x.uniformsList = xs.seqWithValue(I.seq, x.uniforms);
      }
      return x.uniformsList;
    }
    function ro(x, I) {
      const X = Le.get(x);
      X.outputColorSpace = I.outputColorSpace, X.batching = I.batching, X.batchingColor = I.batchingColor, X.instancing = I.instancing, X.instancingColor = I.instancingColor, X.instancingMorph = I.instancingMorph, X.skinning = I.skinning, X.morphTargets = I.morphTargets, X.morphNormals = I.morphNormals, X.morphColors = I.morphColors, X.morphTargetsCount = I.morphTargetsCount, X.numClippingPlanes = I.numClippingPlanes, X.numIntersection = I.numClipIntersection, X.vertexAlphas = I.vertexAlphas, X.vertexTangents = I.vertexTangents, X.toneMapping = I.toneMapping;
    }
    function au(x, I, X, W, G) {
      I.isScene !== !0 && (I = Vt), Oe.resetTextureUnits();
      const se = I.fog, fe = W.isMeshStandardMaterial || W.isMeshLambertMaterial || W.isMeshPhongMaterial ? I.environment : null, ue = B === null ? R.outputColorSpace : B.isXRRenderTarget === !0 ? B.texture.colorSpace : qe.workingColorSpace, Me = W.isMeshStandardMaterial || W.isMeshLambertMaterial && !W.envMap || W.isMeshPhongMaterial && !W.envMap, Re = Rt.get(W.envMap || fe, Me), We = W.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, $e = !!X.attributes.tangent && (!!W.normalMap || W.anisotropy > 0), xe = !!X.morphAttributes.position, je = !!X.morphAttributes.normal, pt = !!X.morphAttributes.color;
      let rt = 0;
      W.toneMapped && (B === null || B.isXRRenderTarget === !0) && (rt = R.toneMapping);
      const Qe = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, Ct = Qe !== void 0 ? Qe.length : 0, be = Le.get(W), Zt = E.state.lights;
      if (mt === !0 && (Gt === !0 || x !== Y)) {
        const at = x === Y && W.id === ae;
        D.setState(W, x, at);
      }
      let et = !1, li = !1;
      W.version === be.__version ? be.needsLights && be.lightsStateVersion !== Zt.state.version || G.isBatchedMesh && be.batching === !1 || !G.isBatchedMesh && be.batching === !0 || G.isBatchedMesh && be.batchingColor === !0 && G._colorsTexture === null || G.isBatchedMesh && be.batchingColor === !1 && G._colorsTexture !== null || G.isInstancedMesh && be.instancing === !1 || !G.isInstancedMesh && be.instancing === !0 || G.isSkinnedMesh && be.skinning === !1 || !G.isSkinnedMesh && be.skinning === !0 || G.isInstancedMesh && be.instancingColor === !0 && G.instanceColor === null || G.isInstancedMesh && be.instancingColor === !1 && G.instanceColor !== null || G.isInstancedMesh && be.instancingMorph === !0 && G.morphTexture === null || G.isInstancedMesh && be.instancingMorph === !1 && G.morphTexture !== null || be.envMap !== Re || W.fog === !0 && be.fog !== se || be.numClippingPlanes !== void 0 && (be.numClippingPlanes !== D.numPlanes || be.numIntersection !== D.numIntersection) || be.vertexAlphas !== We || be.vertexTangents !== $e || be.morphTargets !== xe || be.morphNormals !== je || be.morphColors !== pt || be.morphTargetsCount !== Ct || be.numLightProbeGrids !== no(E.state.lightProbeGridArray) ? et = !0 : (be.outputColorSpace !== ue || be.toneMapping !== rt) && (li = !0) : (et = !0, be.__version = W.version);
      let Pt = be.currentProgram;
      (et === !0 || li === !0) && (Pt = li === !0 ? su(W, I, G, ue, rt) : ir(W, I, G), C && W.isNodeMaterial && C.onUpdateProgram(W, Pt, be));
      let zr = !1, Vn = !1, ci = !1;
      const Ze = Pt.getUniforms(), Et = be.uniforms;
      if (pe.useProgram(Pt.program) && (zr = !0, Vn = !0, ci = !0), W.id !== ae && (ae = W.id, Vn = !0), zr || Y !== x) {
        pe.buffers.depth.getReversed() && x.reversedDepth !== !0 && (x._reversedDepth = !0, x.updateProjectionMatrix()), Ze.setValue(O, "projectionMatrix", x.projectionMatrix), Ze.setValue(O, "viewMatrix", x.matrixWorldInverse);
        const at = Ze.map.cameraPosition;
        at !== void 0 && at.setValue(O, gt.setFromMatrixPosition(x.matrixWorld)), yt.logarithmicDepthBuffer && Ze.setValue(O, "logDepthBufFC", 2 / (Math.log(x.far + 1) / Math.LN2)), (W.isMeshPhongMaterial || W.isMeshToonMaterial || W.isMeshLambertMaterial || W.isMeshBasicMaterial || W.isMeshStandardMaterial || W.isShaderMaterial) && Ze.setValue(O, "isOrthographic", x.isOrthographicCamera === !0), Y !== x && (Y = x, Vn = !0, ci = !0);
      }
      if (be.needsLights && (Zt.state.sunShadowMap.length > 0 && Ze.setValue(O, "sunShadowMap", Zt.state.sunShadowMap, Oe), Zt.state.directionalShadowMap.length > 0 && Ze.setValue(O, "directionalShadowMap", Zt.state.directionalShadowMap, Oe), Zt.state.spotShadowMap.length > 0 && Ze.setValue(O, "spotShadowMap", Zt.state.spotShadowMap, Oe), Zt.state.pointShadowMap.length > 0 && Ze.setValue(O, "pointShadowMap", Zt.state.pointShadowMap, Oe)), G.isSkinnedMesh) {
        Ze.setOptional(O, G, "bindMatrix"), Ze.setOptional(O, G, "bindMatrixInverse");
        const at = G.skeleton;
        at && (at.boneTexture === null && at.computeBoneTexture(), Ze.setValue(O, "boneTexture", at.boneTexture, Oe));
      }
      G.isBatchedMesh && (Ze.setOptional(O, G, "batchingTexture"), Ze.setValue(O, "batchingTexture", G._matricesTexture, Oe), Ze.setOptional(O, G, "batchingIdTexture"), Ze.setValue(O, "batchingIdTexture", G._indirectTexture, Oe), Ze.setOptional(O, G, "batchingColorTexture"), G._colorsTexture !== null && Ze.setValue(O, "batchingColorTexture", G._colorsTexture, Oe));
      const un = X.morphAttributes;
      if ((un.position !== void 0 || un.normal !== void 0 || un.color !== void 0) && P.update(G, X, Pt), (Vn || be.receiveShadow !== G.receiveShadow) && (be.receiveShadow = G.receiveShadow, Ze.setValue(O, "receiveShadow", G.receiveShadow)), (W.isMeshStandardMaterial || W.isMeshLambertMaterial || W.isMeshPhongMaterial) && W.envMap === null && I.environment !== null && (Et.envMapIntensity.value = I.environmentIntensity), Et.dfgLUT !== void 0 && (Et.dfgLUT.value = ig()), Vn) {
        if (Ze.setValue(O, "toneMappingExposure", R.toneMappingExposure), be.needsLights && ou(Et, ci), se && W.fog === !0 && J.refreshFogUniforms(Et, se), J.refreshMaterialUniforms(Et, W, ye, Te, E.state.transmissionRenderTarget[x.id]), be.needsLights && be.numLightProbeGrids > 0) {
          const at = b;
          let Ft = 0;
          for (const Pn of E.state.lightProbeGridArray)
            Pn.texture !== null && (at.textures[Ft] = Pn.texture, at.min[Ft] = Pn.boundingBox.min, at.max[Ft] = Pn.boundingBox.max, at.resolution[Ft] = Pn.resolution, Ft++);
          for (const Pn in at) at[Pn].length = Ft;
          Et.probesSH.value = at.textures, Et.probesMin.value = at.min, Et.probesMax.value = at.max, Et.probesResolution.value = at.resolution;
        }
        xs.upload(O, io(be), Et, Oe);
      }
      if (W.isShaderMaterial && W.uniformsNeedUpdate === !0 && (xs.upload(O, io(be), Et, Oe), W.uniformsNeedUpdate = !1), W.isSpriteMaterial && Ze.setValue(O, "center", G.center), Ze.setValue(O, "modelViewMatrix", G.modelViewMatrix), Ze.setValue(O, "normalMatrix", G.normalMatrix), Ze.setValue(O, "modelMatrix", G.matrixWorld), W.uniformsGroups !== void 0) {
        const at = W.uniformsGroups;
        for (let Ft = 0, Pn = at.length; Ft < Pn; Ft++) {
          const ao = at[Ft];
          ce.update(ao, Pt), ce.bind(ao, Pt);
        }
      }
      return Pt;
    }
    function ou(x, I) {
      x.ambientLightColor.needsUpdate = I, x.lightProbe.needsUpdate = I, x.sunLights.needsUpdate = I, x.sunLightShadows.needsUpdate = I, x.directionalLights.needsUpdate = I, x.directionalLightShadows.needsUpdate = I, x.pointLights.needsUpdate = I, x.pointLightShadows.needsUpdate = I, x.spotLights.needsUpdate = I, x.spotLightShadows.needsUpdate = I, x.rectAreaLights.needsUpdate = I, x.hemisphereLights.needsUpdate = I;
    }
    function lu(x) {
      return x.isMeshLambertMaterial || x.isMeshToonMaterial || x.isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x.isShaderMaterial && x.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return H;
    }, this.getActiveMipmapLevel = function() {
      return $;
    }, this.getRenderTarget = function() {
      return B;
    }, this.setRenderTargetTextures = function(x, I, X) {
      const W = Le.get(x);
      W.__autoAllocateDepthBuffer = x.resolveDepthBuffer === !1, W.__autoAllocateDepthBuffer === !1 && (W.__useRenderToTexture = !1), Le.get(x.texture).__webglTexture = I, Le.get(x.depthTexture).__webglTexture = W.__autoAllocateDepthBuffer ? void 0 : X, W.__hasExternalTextures = !0;
    }, this.setRenderTargetFramebuffer = function(x, I) {
      const X = Le.get(x);
      X.__webglFramebuffer = I, X.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(x, I = 0, X = 0) {
      B = x, H = I, $ = X;
      let W = null, G = !1, se = !1;
      if (x) {
        const fe = Le.get(x);
        if (fe.__useDefaultFramebuffer !== void 0) {
          pe.bindFramebuffer(O.FRAMEBUFFER, fe.__webglFramebuffer), k.copy(x.viewport), Q.copy(x.scissor), _e = x.scissorTest, pe.viewport(k), pe.scissor(Q), pe.setScissorTest(_e), ae = -1;
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
        const ue = x.texture;
        (ue.isData3DTexture || ue.isDataArrayTexture || ue.isCompressedArrayTexture) && (se = !0);
        const Me = Le.get(x).__webglFramebuffer;
        x.isWebGLCubeRenderTarget ? (Array.isArray(Me[I]) ? W = Me[I][X] : W = Me[I], G = !0) : x.samples > 0 && Oe.useMultisampledRTT(x) === !1 ? W = Le.get(x).__webglMultisampledFramebuffer : Array.isArray(Me) ? W = Me[X] : W = Me, k.copy(x.viewport), Q.copy(x.scissor), _e = x.scissorTest;
      } else
        k.copy(Je).multiplyScalar(ye).floor(), Q.copy(Pe).multiplyScalar(ye).floor(), _e = Tt;
      if (X !== 0 && (W = N), pe.bindFramebuffer(O.FRAMEBUFFER, W) && pe.drawBuffers(x, W), pe.viewport(k), pe.scissor(Q), pe.setScissorTest(_e), G) {
        const fe = Le.get(x.texture);
        O.framebufferTexture2D(O.FRAMEBUFFER, O.COLOR_ATTACHMENT0, O.TEXTURE_CUBE_MAP_POSITIVE_X + I, fe.__webglTexture, X);
      } else if (se) {
        const fe = I;
        for (let ue = 0; ue < x.textures.length; ue++) {
          const Me = Le.get(x.textures[ue]);
          O.framebufferTextureLayer(O.FRAMEBUFFER, O.COLOR_ATTACHMENT0 + ue, Me.__webglTexture, X, fe);
        }
      } else if (x !== null && X !== 0) {
        const fe = Le.get(x.texture);
        O.framebufferTexture2D(O.FRAMEBUFFER, O.COLOR_ATTACHMENT0, O.TEXTURE_2D, fe.__webglTexture, X);
      }
      ae = -1;
    };
    function so(x) {
      const I = Le.get(x);
      return (I.__readFormat !== x.format || I.__readType !== x.type) && (I.__readFormat = x.format, I.__readType = x.type, I.__formatReadable = yt.textureFormatReadable(x.format), I.__typeReadable = yt.textureTypeReadable(x.type)), I;
    }
    this.readRenderTargetPixels = function(x, I, X, W, G, se, fe, ue = 0) {
      if (!(x && x.isWebGLRenderTarget)) {
        De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Me = Le.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && fe !== void 0 && (Me = Me[fe], Array.isArray(Me) && (Me = Me[0])), Me) {
        pe.bindFramebuffer(O.FRAMEBUFFER, Me);
        try {
          const Re = x.textures[ue], We = Re.format, $e = Re.type;
          x.textures.length > 1 && O.readBuffer(O.COLOR_ATTACHMENT0 + ue);
          const xe = so(Re);
          if (xe.__formatReadable === !1) {
            De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (xe.__typeReadable === !1) {
            De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= x.width - W && X >= 0 && X <= x.height - G && O.readPixels(I, X, W, G, re.convert(We), re.convert($e), se);
        } finally {
          const Re = B !== null ? Le.get(B).__webglFramebuffer : null;
          pe.bindFramebuffer(O.FRAMEBUFFER, Re);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(x, I, X, W, G, se, fe, ue = 0) {
      if (!(x && x.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let Me = Le.get(x).__webglFramebuffer;
      if (x.isWebGLCubeRenderTarget && fe !== void 0 && (Me = Me[fe], Array.isArray(Me) && (Me = Me[0])), Me)
        if (I >= 0 && I <= x.width - W && X >= 0 && X <= x.height - G) {
          pe.bindFramebuffer(O.FRAMEBUFFER, Me);
          const Re = x.textures[ue], We = Re.format, $e = Re.type;
          x.textures.length > 1 && O.readBuffer(O.COLOR_ATTACHMENT0 + ue);
          const xe = so(Re);
          if (xe.__formatReadable === !1) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (xe.__typeReadable === !1) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          const je = O.createBuffer();
          O.bindBuffer(O.PIXEL_PACK_BUFFER, je), O.bufferData(O.PIXEL_PACK_BUFFER, se.byteLength, O.STREAM_READ), O.readPixels(I, X, W, G, re.convert(We), re.convert($e), 0), O.bindBuffer(O.PIXEL_PACK_BUFFER, null);
          const pt = B !== null ? Le.get(B).__webglFramebuffer : null;
          pe.bindFramebuffer(O.FRAMEBUFFER, pt);
          const rt = O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return O.flush(), await Qh(O, rt, 4), O.bindBuffer(O.PIXEL_PACK_BUFFER, je), O.getBufferSubData(O.PIXEL_PACK_BUFFER, 0, se), O.bindBuffer(O.PIXEL_PACK_BUFFER, null), O.deleteBuffer(je), O.deleteSync(rt), se;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(x, I = null, X = 0) {
      const W = Math.pow(2, -X), G = Math.floor(x.image.width * W), se = Math.floor(x.image.height * W), fe = I !== null ? I.x : 0, ue = I !== null ? I.y : 0;
      Oe.setTexture2D(x, 0), O.copyTexSubImage2D(O.TEXTURE_2D, X, 0, 0, fe, ue, G, se), pe.unbindTexture();
    }, this.copyTextureToTexture = function(x, I, X = null, W = null, G = 0, se = 0) {
      let fe, ue, Me, Re, We, $e, xe, je, pt;
      const rt = x.isCompressedTexture ? x.mipmaps[se] : x.image;
      if (X !== null)
        fe = X.max.x - X.min.x, ue = X.max.y - X.min.y, Me = X.isBox3 ? X.max.z - X.min.z : 1, Re = X.min.x, We = X.min.y, $e = X.isBox3 ? X.min.z : 0;
      else {
        const Ze = Math.pow(2, -G);
        fe = Math.floor(rt.width * Ze), ue = Math.floor(rt.height * Ze), x.isDataArrayTexture ? Me = rt.depth : x.isData3DTexture ? Me = Math.floor(rt.depth * Ze) : Me = 1, Re = 0, We = 0, $e = 0;
      }
      W !== null ? (xe = W.x, je = W.y, pt = W.z) : (xe = 0, je = 0, pt = 0);
      const Qe = re.convert(I.format), Ct = re.convert(I.type);
      let be;
      I.isData3DTexture ? (Oe.setTexture3D(I, 0), be = O.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (Oe.setTexture2DArray(I, 0), be = O.TEXTURE_2D_ARRAY) : (Oe.setTexture2D(I, 0), be = O.TEXTURE_2D), pe.activeTexture(O.TEXTURE0), pe.pixelStorei(O.UNPACK_FLIP_Y_WEBGL, I.flipY), pe.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), pe.pixelStorei(O.UNPACK_ALIGNMENT, I.unpackAlignment);
      const Zt = pe.getParameter(O.UNPACK_ROW_LENGTH), et = pe.getParameter(O.UNPACK_IMAGE_HEIGHT), li = pe.getParameter(O.UNPACK_SKIP_PIXELS), Pt = pe.getParameter(O.UNPACK_SKIP_ROWS), zr = pe.getParameter(O.UNPACK_SKIP_IMAGES);
      pe.pixelStorei(O.UNPACK_ROW_LENGTH, rt.width), pe.pixelStorei(O.UNPACK_IMAGE_HEIGHT, rt.height), pe.pixelStorei(O.UNPACK_SKIP_PIXELS, Re), pe.pixelStorei(O.UNPACK_SKIP_ROWS, We), pe.pixelStorei(O.UNPACK_SKIP_IMAGES, $e);
      const Vn = x.isDataArrayTexture || x.isData3DTexture, ci = I.isDataArrayTexture || I.isData3DTexture;
      if (x.isDepthTexture) {
        const Ze = Le.get(x), Et = Le.get(I), un = Le.get(Ze.__renderTarget), at = Le.get(Et.__renderTarget);
        pe.bindFramebuffer(O.READ_FRAMEBUFFER, un.__webglFramebuffer), pe.bindFramebuffer(O.DRAW_FRAMEBUFFER, at.__webglFramebuffer);
        for (let Ft = 0; Ft < Me; Ft++)
          Vn && (O.framebufferTextureLayer(O.READ_FRAMEBUFFER, O.COLOR_ATTACHMENT0, Le.get(x).__webglTexture, G, $e + Ft), O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER, O.COLOR_ATTACHMENT0, Le.get(I).__webglTexture, se, pt + Ft)), O.blitFramebuffer(Re, We, Re + fe, We + ue, xe, je, xe + fe, je + ue, O.DEPTH_BUFFER_BIT, O.NEAREST);
        pe.bindFramebuffer(O.READ_FRAMEBUFFER, null), pe.bindFramebuffer(O.DRAW_FRAMEBUFFER, null);
      } else if (G !== 0 || x.isRenderTargetTexture || Le.has(x)) {
        const Ze = Le.get(x), Et = Le.get(I);
        pe.bindFramebuffer(O.READ_FRAMEBUFFER, q), pe.bindFramebuffer(O.DRAW_FRAMEBUFFER, L);
        for (let un = 0; un < Me; un++)
          Vn ? O.framebufferTextureLayer(O.READ_FRAMEBUFFER, O.COLOR_ATTACHMENT0, Ze.__webglTexture, G, $e + un) : O.framebufferTexture2D(O.READ_FRAMEBUFFER, O.COLOR_ATTACHMENT0, O.TEXTURE_2D, Ze.__webglTexture, G), ci ? O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER, O.COLOR_ATTACHMENT0, Et.__webglTexture, se, pt + un) : O.framebufferTexture2D(O.DRAW_FRAMEBUFFER, O.COLOR_ATTACHMENT0, O.TEXTURE_2D, Et.__webglTexture, se), G !== 0 ? O.blitFramebuffer(Re, We, Re + fe, We + ue, xe, je, xe + fe, je + ue, O.COLOR_BUFFER_BIT, O.NEAREST) : ci ? O.copyTexSubImage3D(be, se, xe, je, pt + un, Re, We, fe, ue) : O.copyTexSubImage2D(be, se, xe, je, Re, We, fe, ue);
        pe.bindFramebuffer(O.READ_FRAMEBUFFER, null), pe.bindFramebuffer(O.DRAW_FRAMEBUFFER, null);
      } else ci ? x.isDataTexture || x.isData3DTexture ? O.texSubImage3D(be, se, xe, je, pt, fe, ue, Me, Qe, Ct, rt.data) : I.isCompressedArrayTexture ? O.compressedTexSubImage3D(be, se, xe, je, pt, fe, ue, Me, Qe, rt.data) : O.texSubImage3D(be, se, xe, je, pt, fe, ue, Me, Qe, Ct, rt) : x.isDataTexture ? O.texSubImage2D(O.TEXTURE_2D, se, xe, je, fe, ue, Qe, Ct, rt.data) : x.isCompressedTexture ? O.compressedTexSubImage2D(O.TEXTURE_2D, se, xe, je, rt.width, rt.height, Qe, rt.data) : O.texSubImage2D(O.TEXTURE_2D, se, xe, je, fe, ue, Qe, Ct, rt);
      pe.pixelStorei(O.UNPACK_ROW_LENGTH, Zt), pe.pixelStorei(O.UNPACK_IMAGE_HEIGHT, et), pe.pixelStorei(O.UNPACK_SKIP_PIXELS, li), pe.pixelStorei(O.UNPACK_SKIP_ROWS, Pt), pe.pixelStorei(O.UNPACK_SKIP_IMAGES, zr), se === 0 && I.generateMipmaps === !0 && I.mipmapsAutoUpdate === !0 && O.generateMipmap(be), pe.unbindTexture();
    }, this.initRenderTarget = function(x) {
      Le.get(x).__webglFramebuffer === void 0 && Oe.setupRenderTarget(x);
    }, this.initTexture = function(x) {
      x.isCubeTexture ? Oe.setTextureCube(x, 0) : x.isData3DTexture ? Oe.setTexture3D(x, 0) : x.isDataArrayTexture || x.isCompressedArrayTexture ? Oe.setTexture2DArray(x, 0) : Oe.setTexture2D(x, 0), pe.unbindTexture();
    }, this.resetState = function() {
      H = 0, $ = 0, B = null, pe.reset(), de.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return _i;
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
function wl(e, t) {
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
function sg(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = e.clone();
  return eu(e, i, function(r, s) {
    t.set(s, r), n.set(r, s);
  }), i.traverse(function(r) {
    if (!r.isSkinnedMesh) return;
    const s = r, a = t.get(r), o = a.skeleton.bones;
    s.skeleton = a.skeleton.clone(), s.bindMatrix.copy(a.bindMatrix), s.skeleton.bones = o.map(function(l) {
      return n.get(l);
    }), s.bind(s.skeleton, s.bindMatrix);
  }), i;
}
function eu(e, t, n) {
  n(e, t);
  for (let i = 0; i < e.children.length; i++) eu(e.children[i], t.children[i], n);
}
var ag = class extends tr {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new hg(t);
    }), this.register(function(t) {
      return new dg(t);
    }), this.register(function(t) {
      return new fg(t);
    }), this.register(function(t) {
      return new xg(t);
    }), this.register(function(t) {
      return new Tg(t);
    }), this.register(function(t) {
      return new bg(t);
    }), this.register(function(t) {
      return new mg(t);
    }), this.register(function(t) {
      return new gg(t);
    }), this.register(function(t) {
      return new vg(t);
    }), this.register(function(t) {
      return new _g(t);
    }), this.register(function(t) {
      return new ug(t);
    }), this.register(function(t) {
      return new Mg(t);
    }), this.register(function(t) {
      return new pg(t);
    }), this.register(function(t) {
      return new yg(t);
    }), this.register(function(t) {
      return new Sg(t);
    }), this.register(function(t) {
      return new lg(t);
    }), this.register(function(t) {
      return new Rl(t, He.EXT_MESHOPT_COMPRESSION);
    }), this.register(function(t) {
      return new Rl(t, He.KHR_MESHOPT_COMPRESSION);
    }), this.register(function(t) {
      return new Eg(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let s;
    if (this.resourcePath !== "") s = this.resourcePath;
    else if (this.path !== "") {
      const l = Ar.extractUrlBase(e);
      s = Ar.resolveURL(l, this.path);
    } else s = Ar.extractUrlBase(e);
    this.manager.itemStart(e);
    const a = function(l) {
      i ? i(l) : console.error(l), r.manager.itemError(e), r.manager.itemEnd(e);
    }, o = new kc(this.manager);
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
      if (o.decode(new Uint8Array(e, 0, 4)) === tu) {
        try {
          s[He.KHR_BINARY_GLTF] = new Ag(e);
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
    const l = new kg(r, {
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
      const u = this.pluginCallbacks[c](l);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, s[u.name] = !0;
    }
    if (r.extensionsUsed) for (let c = 0; c < r.extensionsUsed.length; ++c) {
      const u = r.extensionsUsed[c], h = r.extensionsRequired || [];
      switch (u) {
        case He.KHR_MATERIALS_UNLIT:
          s[u] = new cg();
          break;
        case He.KHR_DRACO_MESH_COMPRESSION:
          s[u] = new wg(r, this.dracoLoader);
          break;
        case He.KHR_TEXTURE_TRANSFORM:
          s[u] = new Rg();
          break;
        case He.KHR_MESH_QUANTIZATION:
          s[u] = new Cg();
          break;
        default:
          h.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
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
function og() {
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
}, lg = class {
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
    s.color !== void 0 && o.setRGB(s.color[0], s.color[1], s.color[2], mn);
    const l = s.range !== void 0 ? s.range : 0;
    switch (s.type) {
      case "directional":
        a = new Mr(o), a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      case "point":
        a = new Hc(o), a.distance = l;
        break;
      case "spot":
        a = new Rf(o), a.distance = l, s.spot = s.spot || {}, s.spot.innerConeAngle = s.spot.innerConeAngle !== void 0 ? s.spot.innerConeAngle : 0, s.spot.outerConeAngle = s.spot.outerConeAngle !== void 0 ? s.spot.outerConeAngle : Math.PI / 4, a.angle = s.spot.outerConeAngle, a.penumbra = 1 - s.spot.innerConeAngle / s.spot.outerConeAngle, a.target.position.set(0, 0, -1), a.add(a.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + s.type);
    }
    return a.position.set(0, 0, 0), yn(a, s), s.intensity !== void 0 && (a.intensity = s.intensity), a.name = t.createUniqueName(s.name || "light_" + e), i = Promise.resolve(a), t.cache.add(n, i), i;
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
}, cg = class {
  constructor() {
    this.name = He.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ki;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Ce(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const s = r.baseColorFactor;
        e.color.setRGB(s[0], s[1], s[2], mn), e.opacity = s[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, At));
    }
    return Promise.all(i);
  }
}, ug = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    return n === null || n.emissiveStrength !== void 0 && (t.emissiveIntensity = n.emissiveStrength), Promise.resolve();
  }
}, hg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
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
}, dg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_DIFFUSE_ROUGHNESS;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return t.diffuseRoughness = n.diffuseRoughnessFactor !== void 0 ? n.diffuseRoughnessFactor : 0, n.diffuseRoughnessTexture !== void 0 && i.push(this.parser.assignTexture(t, "diffuseRoughnessMap", n.diffuseRoughnessTexture)), Promise.all(i);
  }
}, fg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    return n === null || (t.dispersion = n.dispersion !== void 0 ? n.dispersion : 0), Promise.resolve();
  }
}, pg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return n.iridescenceFactor !== void 0 && (t.iridescence = n.iridescenceFactor), n.iridescenceTexture !== void 0 && i.push(this.parser.assignTexture(t, "iridescenceMap", n.iridescenceTexture)), n.iridescenceIor !== void 0 && (t.iridescenceIOR = n.iridescenceIor), n.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessMinimum = n.iridescenceThicknessMinimum), n.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessMaximum = n.iridescenceThicknessMaximum), n.iridescenceThicknessTexture !== void 0 && i.push(this.parser.assignTexture(t, "iridescenceThicknessMap", n.iridescenceThicknessTexture)), Promise.all(i);
  }
}, mg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    if (t.sheenColor = new Ce(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1, n.sheenColorFactor !== void 0) {
      const r = n.sheenColorFactor;
      t.sheenColor.setRGB(r[0], r[1], r[2], mn);
    }
    return n.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = n.sheenRoughnessFactor), n.sheenColorTexture !== void 0 && i.push(this.parser.assignTexture(t, "sheenColorMap", n.sheenColorTexture, At)), n.sheenRoughnessTexture !== void 0 && i.push(this.parser.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)), Promise.all(i);
  }
}, gg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return n.transmissionFactor !== void 0 && (t.transmission = n.transmissionFactor), n.transmissionTexture !== void 0 && i.push(this.parser.assignTexture(t, "transmissionMap", n.transmissionTexture)), Promise.all(i);
  }
}, vg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
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
    return t.attenuationColor = new Ce().setRGB(r[0], r[1], r[2], mn), Promise.all(i);
  }
}, _g = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    return n === null || (t.ior = n.ior !== void 0 ? n.ior : 1.5, t.ior === 0 && (t.ior = 1e3)), Promise.resolve();
  }
}, Mg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
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
    return t.specularColor = new Ce().setRGB(r[0], r[1], r[2], mn), n.specularColorTexture !== void 0 && i.push(this.parser.assignTexture(t, "specularColorMap", n.specularColorTexture, At)), Promise.all(i);
  }
}, Sg = class {
  constructor(e) {
    this.parser = e, this.name = He.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return t.bumpScale = n.bumpFactor !== void 0 ? n.bumpFactor : 1, n.bumpTexture !== void 0 && i.push(this.parser.assignTexture(t, "bumpMap", n.bumpTexture)), Promise.all(i);
  }
}, yg = class {
  constructor(e) {
    this.parser = e, this.name = He.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    return dt(this.parser, e, this.name) !== null ? gn : null;
  }
  extendMaterialParams(e, t) {
    const n = dt(this.parser, e, this.name);
    if (n === null) return Promise.resolve();
    const i = [];
    return n.anisotropyStrength !== void 0 && (t.anisotropy = n.anisotropyStrength), n.anisotropyRotation !== void 0 && (t.anisotropyRotation = n.anisotropyRotation), n.anisotropyTexture !== void 0 && i.push(this.parser.assignTexture(t, "anisotropyMap", n.anisotropyTexture)), Promise.all(i);
  }
}, xg = class {
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
}, Tg = class {
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
}, bg = class {
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
}, Rl = class {
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
        const o = i.byteOffset || 0, l = i.byteLength || 0, c = i.count, u = i.byteStride, h = new Uint8Array(a, o, l);
        return s.decodeGltfBufferAsync ? s.decodeGltfBufferAsync(c, u, h, i.mode, i.filter).then(function(d) {
          return d.buffer;
        }) : s.ready.then(function() {
          const d = new ArrayBuffer(c * u);
          return s.decodeGltfBuffer(new Uint8Array(d), c, u, h, i.mode, i.filter), d;
        });
      });
    } else return null;
  }
}, Eg = class {
  constructor(e) {
    this.name = He.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const i = t.meshes[n.mesh];
    for (const o of i.primitives) if (o.mode !== sn.TRIANGLES && o.mode !== sn.TRIANGLE_STRIP && o.mode !== sn.TRIANGLE_FAN && o.mode !== void 0) return null;
    const r = n.extensions[this.name].attributes, s = [], a = {};
    for (const o in r) s.push(this.parser.getDependency("accessor", r[o]).then((l) => (a[o] = l, a[o])));
    return s.length < 1 ? null : (s.push(this.parser.createNodeMesh(e)), Promise.all(s).then((o) => {
      const l = o.pop(), c = l.isGroup ? l.children : [l], u = o[0].count, h = [];
      for (const d of c) {
        const p = new Ge(), m = new z(), _ = new Gn(), g = new z(1, 1, 1), f = new Wd(d.geometry, d.material, u);
        for (let b = 0; b < u; b++)
          a.TRANSLATION && m.fromBufferAttribute(a.TRANSLATION, b), a.ROTATION && _.fromBufferAttribute(a.ROTATION, b), a.SCALE && g.fromBufferAttribute(a.SCALE, b), f.setMatrixAt(b, p.compose(m, _, g));
        let M = null;
        for (const b in a) if (b === "_COLOR_0") {
          const S = a[b];
          f.instanceColor = new Is(S.array, S.itemSize, S.normalized);
        } else if (b !== "TRANSLATION" && b !== "ROTATION" && b !== "SCALE") {
          if (M === null) {
            const E = f.geometry;
            M = new Ut(), M.name = E.name;
            for (const A in E.attributes) M.setAttribute(A, E.attributes[A]);
            for (const A in E.morphAttributes) M.morphAttributes[A] = E.morphAttributes[A];
            E.index !== null && M.setIndex(E.index), M.morphTargetsRelative = E.morphTargetsRelative;
            for (const A of E.groups) M.addGroup(A.start, A.count, A.materialIndex);
            E.boundingBox !== null && (M.boundingBox = E.boundingBox.clone()), E.boundingSphere !== null && (M.boundingSphere = E.boundingSphere.clone()), M.drawRange.start = E.drawRange.start, M.drawRange.count = E.drawRange.count, M.userData = Object.assign({}, E.userData), f.geometry = M;
          }
          const S = a[b];
          M.setAttribute(b, new Is(S.array, S.itemSize, S.normalized));
        }
        _t.prototype.copy.call(f, d), this.parser.assignFinalMaterial(f), h.push(f);
      }
      return l.isGroup ? (l.clear(), l.add(...h), l) : h[0];
    }));
  }
}, tu = "glTF", pr = 12, Cl = {
  JSON: 1313821514,
  BIN: 5130562
}, Ag = class {
  constructor(e) {
    this.name = He.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, pr), n = new TextDecoder();
    if (this.header = {
      magic: n.decode(new Uint8Array(e.slice(0, 4))),
      version: t.getUint32(4, !0),
      length: t.getUint32(8, !0)
    }, this.header.magic !== tu) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - pr, r = new DataView(e, pr);
    let s = 0;
    for (; s < i; ) {
      const a = r.getUint32(s, !0);
      s += 4;
      const o = r.getUint32(s, !0);
      if (s += 4, o === Cl.JSON) {
        const l = new Uint8Array(e, pr + s, a);
        this.content = n.decode(l);
      } else if (o === Cl.BIN) {
        const l = pr + s;
        this.body = e.slice(l, l + a);
      }
      s += a;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}, wg = class {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = He.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, s = e.extensions[this.name].attributes, a = {}, o = {}, l = {};
    for (const c in s) {
      const u = Pa[c] || c.toLowerCase();
      a[u] = s[c];
    }
    for (const c in e.attributes) {
      const u = Pa[c] || c.toLowerCase();
      if (s[c] !== void 0) {
        const h = n.accessors[e.attributes[c]];
        l[u] = Gi[h.componentType].name, o[u] = h.normalized === !0;
      }
    }
    return t.getDependency("bufferView", r).then(function(c) {
      return new Promise(function(u, h) {
        i.decodeDracoFile(c, function(d) {
          for (const p in d.attributes) {
            const m = d.attributes[p], _ = o[p];
            _ !== void 0 && (m.normalized = _);
          }
          u(d);
        }, a, l, mn, h);
      });
    });
  }
}, Rg = class {
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
}, Cg = class {
  constructor() {
    this.name = He.KHR_MESH_QUANTIZATION;
  }
}, nu = class extends Qi {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let s = 0; s !== i; s++) t[s] = n[r + s];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = a * 2, l = a * 3, c = i - t, u = (n - t) / c, h = u * u, d = h * u, p = e * l, m = p - l, _ = -2 * d + 3 * h, g = d - h, f = 1 - _, M = g - h + u;
    for (let b = 0; b !== a; b++) {
      const S = s[m + b + a], E = s[m + b + o] * c, A = s[p + b + a], v = s[p + b] * c;
      r[b] = f * S + M * E + _ * A + g * v;
    }
    return r;
  }
}, Pg = new Gn(), Lg = class extends nu {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return Pg.fromArray(r).normalize().toArray(r), r;
  }
}, sn = {
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
}, Gi = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array
}, Pl = {
  9728: Nt,
  9729: an,
  9984: $l,
  9985: Jl,
  9986: Zl,
  9987: Ur
}, Ll = {
  33071: bn,
  33648: As,
  10497: Es
}, Ma = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16
}, Pa = {
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
}, $n = {
  scale: "scale",
  translation: "position",
  rotation: "quaternion",
  weights: "morphTargetInfluences"
}, Ig = {
  CUBICSPLINE: void 0,
  LINEAR: Pr,
  STEP: Cr
}, Sa = {
  OPAQUE: "OPAQUE",
  MASK: "MASK",
  BLEND: "BLEND"
};
function Dg(e) {
  return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new Ki({
    color: 16777215,
    emissive: 0,
    metalness: 1,
    roughness: 1,
    transparent: !1,
    depthTest: !0,
    side: 0
  })), e.DefaultMaterial;
}
function pi(e, t, n) {
  for (const i in n.extensions) e[i] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[i] = n.extensions[i]);
}
function yn(e, t) {
  t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function Ng(e, t, n) {
  let i = !1, r = !1, s = !1;
  for (let c = 0, u = t.length; c < u; c++) {
    const h = t[c];
    if (h.POSITION !== void 0 && (i = !0), h.NORMAL !== void 0 && (r = !0), h.COLOR_0 !== void 0 && (s = !0), i && r && s) break;
  }
  if (!i && !r && !s) return Promise.resolve(e);
  const a = [], o = [], l = [];
  for (let c = 0, u = t.length; c < u; c++) {
    const h = t[c];
    if (i) {
      const d = h.POSITION !== void 0 ? n.getDependency("accessor", h.POSITION) : e.attributes.position;
      a.push(d);
    }
    if (r) {
      const d = h.NORMAL !== void 0 ? n.getDependency("accessor", h.NORMAL) : e.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = h.COLOR_0 !== void 0 ? n.getDependency("accessor", h.COLOR_0) : e.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([
    Promise.all(a),
    Promise.all(o),
    Promise.all(l)
  ]).then(function(c) {
    const u = c[0], h = c[1], d = c[2];
    return i && (e.morphAttributes.position = u), r && (e.morphAttributes.normal = h), s && (e.morphAttributes.color = d), e.morphTargetsRelative = !0, e;
  });
}
function Ug(e, t) {
  if (e.updateMorphTargets(), t.weights !== void 0) for (let n = 0, i = t.weights.length; n < i; n++) e.morphTargetInfluences[n] = t.weights[n];
  if (t.extras && Array.isArray(t.extras.targetNames)) {
    const n = t.extras.targetNames;
    if (e.morphTargetInfluences.length === n.length) {
      e.morphTargetDictionary = {};
      for (let i = 0, r = n.length; i < r; i++) e.morphTargetDictionary[n[i]] = i;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function Og(e) {
  let t;
  const n = e.extensions && e.extensions[He.KHR_DRACO_MESH_COMPRESSION];
  if (n ? t = "draco:" + n.bufferView + ":" + n.indices + ":" + ya(n.attributes) : t = e.indices + ":" + ya(e.attributes) + ":" + e.mode, e.targets !== void 0) for (let i = 0, r = e.targets.length; i < r; i++) t += ":" + ya(e.targets[i]);
  return t;
}
function ya(e) {
  let t = "";
  const n = Object.keys(e).sort();
  for (let i = 0, r = n.length; i < r; i++) t += n[i] + ":" + e[n[i]] + ";";
  return t;
}
function La(e) {
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
function Fg(e) {
  return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0 ? "image/webp" : e.search(/\.ktx2($|\?)/i) > 0 || e.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
var Bg = new Ge(), kg = class {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new og(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
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
    typeof createImageBitmap > "u" || n && i < 17 || r && s < 98 ? (this.textureLoader = new Af(this.options.manager), this.textureLoader.setPriority(this.options.priority), this.textureLoader.setCache(this.options.cache)) : (this.textureLoader = new If(this.options.manager), this.textureLoader.setPriority(this.options.priority), this.textureLoader.setCache(this.options.cache)), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setWithCredentials(this.options.withCredentials), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new kc(this.options.manager), this.fileLoader.setPriority(this.options.priority), this.fileLoader.setCache(this.options.cache), this.fileLoader.setResponseType("arraybuffer"), (this.options.withCredentials || this.options.crossOrigin === "use-credentials") && this.fileLoader.setWithCredentials(!0);
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
      return pi(r, a, i), yn(a, i), Promise.all(n._invokeAll(function(o) {
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
      n.load(Ar.resolveURL(t.uri, i.path), r, void 0, function() {
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
      const s = Ma[i.type], a = Gi[i.componentType], o = i.normalized === !0, l = new a(i.count * s);
      return Promise.resolve(new Yt(l, s, o));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(s) {
      const a = s[0], o = Ma[i.type], l = Gi[i.componentType], c = l.BYTES_PER_ELEMENT, u = c * o, h = i.byteOffset || 0, d = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, p = i.normalized === !0;
      let m, _;
      if (d && d !== u) {
        const g = Math.floor(h / d), f = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + g + ":" + i.count;
        let M = t.cache.get(f);
        M || (m = new l(a, g * d, i.count * d / c), M = new Dd(m, d / c), t.cache.add(f, M)), _ = new Nd(M, o, h % d / c, p);
      } else
        a === null ? m = new l(i.count * o) : m = new l(a, h, i.count * o), _ = new Yt(m, o, p);
      if (i.sparse !== void 0) {
        const g = Ma.SCALAR, f = Gi[i.sparse.indices.componentType], M = i.sparse.indices.byteOffset || 0, b = i.sparse.values.byteOffset || 0, S = new f(s[1], M, i.sparse.count * g), E = new l(s[2], b, i.sparse.count * o);
        a !== null && (_ = new Yt(_.array.slice(), _.itemSize, _.normalized)), _.normalized = !1;
        for (let A = 0, v = S.length; A < v; A++) {
          const T = S[A];
          if (_.setX(T, E[A * o]), o >= 2 && _.setY(T, E[A * o + 1]), o >= 3 && _.setZ(T, E[A * o + 2]), o >= 4 && _.setW(T, E[A * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        _.normalized = p;
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
      const u = (r.samplers || {})[s.sampler] || {};
      return c.magFilter = Pl[u.magFilter] || 1006, c.minFilter = Pl[u.minFilter] || 1008, c.wrapS = Ll[u.wrapS] || 1e3, c.wrapT = Ll[u.wrapT] || 1e3, c.generateMipmaps = !c.isCompressedTexture && c.minFilter !== 1003 && c.minFilter !== 1006, i.associations.set(c, { textures: e }), c;
    }).catch(function() {
      return null;
    });
    return this.textureCache[o] = l, l;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((h) => h.clone());
    const s = i.images[e], a = self.URL || self.webkitURL;
    let o = s.uri || "", l = !1, c;
    if (t.isKTX2Loader === !0 && s.bufferView !== void 0) c = n.getDependency("bufferView", s.bufferView).then(function(h) {
      return new Promise(function(d, p) {
        t.parse(h, d, p);
      });
    });
    else {
      if (s.bufferView !== void 0) o = n.getDependency("bufferView", s.bufferView).then(function(h) {
        l = !0;
        const d = new Blob([h], { type: s.mimeType });
        return o = a.createObjectURL(d), o;
      });
      else if (s.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
      c = Promise.resolve(o).then(function(h) {
        return new Promise(function(d, p) {
          let m = d;
          t.isImageBitmapLoader === !0 && (m = function(_) {
            const g = new Ht(_);
            g.needsUpdate = !0, d(g);
          }), t.load(Ar.resolveURL(h, r.path), m, void 0, p);
        });
      });
    }
    const u = c.then(function(h) {
      return l === !0 && a.revokeObjectURL(o), yn(h, s), h.userData.mimeType = s.mimeType || Fg(s.uri), h;
    }).catch(function(h) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", o), h;
    });
    return this.sourceCache[e] = u, u;
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
      o || (o = new Xa(), An.prototype.copy.call(o, n), o.color.copy(n.color), o.map = n.map, o.sizeAttenuation = !1, this.cache.add(a, o)), n = o;
    } else if (e.isLine) {
      const a = "LineBasicMaterial:" + n.uuid;
      let o = this.cache.get(a);
      o || (o = new Sc(), An.prototype.copy.call(o, n), o.color.copy(n.color), o.map = n.map, this.cache.add(a, o)), n = o;
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
    return Ki;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let s;
    const a = {}, o = r.extensions || {}, l = [];
    if (o[He.KHR_MATERIALS_UNLIT]) {
      const u = i[He.KHR_MATERIALS_UNLIT];
      s = u.getMaterialType(), l.push(u.extendParams(a, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (a.color = new Ce(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const h = u.baseColorFactor;
        a.color.setRGB(h[0], h[1], h[2], mn), a.opacity = h[3];
      }
      u.baseColorTexture !== void 0 && l.push(t.assignTexture(a, "map", u.baseColorTexture, At)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), s = this._invokeOne(function(h) {
        return h.getMaterialType && h.getMaterialType(e);
      }), l.push(Promise.all(this._invokeAll(function(h) {
        return h.extendMaterialParams && h.extendMaterialParams(e, a);
      })));
    }
    r.doubleSided === !0 && (a.side = 2);
    const c = r.alphaMode || Sa.OPAQUE;
    if (c === Sa.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, c === Sa.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && s !== ki && (l.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new ke(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      a.normalScale.set(u, u);
    }
    if (r.occlusionTexture !== void 0 && s !== ki && (l.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && s !== ki) {
      const u = r.emissiveFactor;
      a.emissive = new Ce().setRGB(u[0], u[1], u[2], mn);
    }
    return r.emissiveTexture !== void 0 && s !== ki && l.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, At)), Promise.all(l).then(function() {
      const u = new s(a);
      return r.name && (u.name = r.name), yn(u, r), t.associations.set(u, { materials: e }), r.extensions && pi(i, u, r), u;
    });
  }
  createUniqueName(e) {
    const t = ht.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(a) {
      return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function(o) {
        return Il(o, a, t);
      });
    }
    const s = [];
    for (let a = 0, o = e.length; a < o; a++) {
      const l = e[a], c = Og(l), u = i[c];
      if (u) s.push(u.promise);
      else {
        let h;
        l.extensions && l.extensions[He.KHR_DRACO_MESH_COMPRESSION] ? h = r(l) : h = Il(new Ut(), l, t), l.mode === sn.TRIANGLE_STRIP ? h = h.then((d) => wl(d, 1)) : l.mode === sn.TRIANGLE_FAN && (h = h.then((d) => wl(d, 2))), i[c] = {
          primitive: l,
          promise: h
        }, s.push(h);
      }
    }
    return Promise.all(s);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], s = r.primitives, a = [];
    for (let o = 0, l = s.length; o < l; o++) {
      const c = s[o].material === void 0 ? Dg(this.cache) : this.getDependency("material", s[o].material);
      a.push(c);
    }
    return a.push(t.loadGeometries(s)), Promise.all(a).then(async function(o) {
      const l = o.slice(0, o.length - 1), c = o[o.length - 1], u = [];
      for (let d = 0, p = c.length; d < p; d++) {
        const m = c[d], _ = s[d];
        let g;
        const f = l[d];
        if (_.mode === sn.TRIANGLES || _.mode === sn.TRIANGLE_STRIP || _.mode === sn.TRIANGLE_FAN || _.mode === void 0) {
          const M = r.isSkinnedMesh === !0, b = m.hasAttribute("skinIndex") && m.hasAttribute("skinWeight");
          M && b === !1 && console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."), g = M && b ? new zd(m, f) : new zt(m, f), g.isSkinnedMesh === !0 && g.normalizeSkinWeights();
        } else if (_.mode === sn.LINES) g = new Yd(m, f);
        else if (_.mode === sn.LINE_STRIP) g = new Wa(m, f);
        else if (_.mode === sn.LINE_LOOP) g = new Kd(m, f);
        else if (_.mode === sn.POINTS) g = new yc(m, f);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + _.mode);
        Object.keys(g.geometry.morphAttributes).length > 0 && Ug(g, r), g.name = t.createUniqueName(r.name || "mesh_" + e), yn(g, r), _.extensions && pi(i, g, _), t.assignFinalMaterial(g), u.push(g);
      }
      for (let d = 0, p = u.length; d < p; d++) t.associations.set(u[d], {
        meshes: e,
        primitives: d
      });
      if (u.length === 1)
        return r.extensions && pi(i, u[0], r), u[0];
      const h = new en();
      r.extensions && pi(i, h, r), t.associations.set(h, { meshes: e });
      for (let d = 0, p = u.length; d < p; d++) h.add(u[d]);
      return h;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new qt(md.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ya(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), yn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++) n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), s = i, a = [], o = [];
      for (let l = 0, c = s.length; l < c; l++) {
        const u = s[l];
        if (u) {
          a.push(u);
          const h = new Ge();
          r !== null && h.fromArray(r.array, l * 16), o.push(h);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l]);
      }
      return new Gd(a, o);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, s = [], a = [], o = [], l = [], c = [];
    for (let u = 0, h = i.channels.length; u < h; u++) {
      const d = i.channels[u], p = i.samplers[d.sampler], m = d.target, _ = m.node, g = i.parameters !== void 0 ? i.parameters[p.input] : p.input, f = i.parameters !== void 0 ? i.parameters[p.output] : p.output;
      m.node !== void 0 && (s.push(this.getDependency("node", _)), a.push(this.getDependency("accessor", g)), o.push(this.getDependency("accessor", f)), l.push(p), c.push(m));
    }
    return Promise.all([
      Promise.all(s),
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c)
    ]).then(function(u) {
      const h = u[0], d = u[1], p = u[2], m = u[3], _ = u[4], g = [];
      for (let M = 0, b = h.length; M < b; M++) {
        const S = h[M], E = d[M], A = p[M], v = m[M], T = _[M];
        if (S === void 0) continue;
        S.updateMatrix && S.updateMatrix();
        const R = n._createAnimationTracks(S, E, A, v, T);
        if (R) for (let U = 0; U < R.length; U++) g.push(R[U]);
      }
      const f = new Mf(r, void 0, g);
      return yn(f, i), f;
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
      const c = l[0], u = l[1], h = l[2];
      h !== null && c.traverse(function(d) {
        d.isSkinnedMesh && d.bind(h, Bg);
      });
      for (let d = 0, p = u.length; d < p; d++) c.add(u[d]);
      if (c.userData.pivot !== void 0 && u.length > 0) {
        const d = c.userData.pivot, p = u[0];
        c.pivot = new z().fromArray(d), c.position.x -= d[0], c.position.y -= d[1], c.position.z -= d[2], p.position.set(0, 0, 0), delete c.userData.pivot;
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
      if (r.isBone === !0 ? c = new vc() : l.length > 1 ? c = new en() : l.length === 1 ? c = l[0] : c = new _t(), c !== l[0]) for (let u = 0, h = l.length; u < h; u++) c.add(l[u]);
      if (r.name && (c.userData.name = r.name, c.name = s), yn(c, r), r.extensions && pi(n, c, r), r.matrix !== void 0) {
        const u = new Ge();
        u.fromArray(r.matrix), c.applyMatrix4(u);
      } else
        r.translation !== void 0 && c.position.fromArray(r.translation), r.rotation !== void 0 && c.quaternion.fromArray(r.rotation), r.scale !== void 0 && c.scale.fromArray(r.scale);
      if (!i.associations.has(c)) i.associations.set(c, {});
      else if (r.mesh !== void 0 && i.meshCache.refs[r.mesh] > 1) {
        const u = i.associations.get(c);
        i.associations.set(c, { ...u });
      }
      return i.associations.get(c).nodes = e, c;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new en();
    n.name && (r.name = i.createUniqueName(n.name)), yn(r, n), n.extensions && pi(t, r, n);
    const s = n.nodes || [], a = [];
    for (let o = 0, l = s.length; o < l; o++) a.push(i.getDependency("node", s[o]));
    return Promise.all(a).then(function(o) {
      for (let c = 0, u = o.length; c < u; c++) {
        const h = o[c];
        h.parent !== null ? r.add(sg(h)) : r.add(h);
      }
      const l = (c) => {
        const u = /* @__PURE__ */ new Map();
        for (const [h, d] of i.associations) (h instanceof An || h instanceof Ht) && u.set(h, d);
        return c.traverse((h) => {
          const d = i.associations.get(h);
          d != null && u.set(h, d);
        }), u;
      };
      return i.associations = l(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const s = [], a = e.name ? e.name : e.uuid, o = [];
    function l(d) {
      d.morphTargetInfluences && o.push(d.name ? d.name : d.uuid);
    }
    $n[r.path] === $n.weights ? (l(e), e.isGroup && e.children.forEach(l)) : o.push(a);
    let c;
    switch ($n[r.path]) {
      case $n.weights:
        c = Dr;
        break;
      case $n.rotation:
        c = Nr;
        break;
      case $n.translation:
      case $n.scale:
        c = Us;
        break;
      default:
        n.itemSize === 1 ? c = Dr : c = Us;
    }
    const u = i.interpolation !== void 0 ? Ig[i.interpolation] : Pr, h = this._getArrayFromAccessor(n);
    for (let d = 0, p = o.length; d < p; d++) {
      const m = new c(o[d] + "." + $n[r.path], t.array, h, u);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(m), s.push(m);
    }
    return s;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = La(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, s = t.length; r < s; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      return new (this instanceof Nr ? Lg : nu)(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
  }
};
function zg(e, t, n) {
  const i = t.attributes, r = new Rn();
  if (i.POSITION !== void 0) {
    const o = n.json.accessors[i.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (r.set(new z(l[0], l[1], l[2]), new z(c[0], c[1], c[2])), o.normalized) {
        const u = La(Gi[o.componentType]);
        r.min.multiplyScalar(u), r.max.multiplyScalar(u);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const s = t.targets;
  if (s !== void 0) {
    const o = new z(), l = new z();
    for (let c = 0, u = s.length; c < u; c++) {
      const h = s[c];
      if (h.POSITION !== void 0) {
        const d = n.json.accessors[h.POSITION], p = d.min, m = d.max;
        if (p !== void 0 && m !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(m[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(m[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(m[2]))), d.normalized) {
            const _ = La(Gi[d.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    r.expandByVector(o);
  }
  e.boundingBox = r;
  const a = new Cn();
  r.getCenter(a.center), a.radius = r.min.distanceTo(r.max) / 2, e.boundingSphere = a;
}
function Il(e, t, n) {
  const i = t.attributes, r = [];
  function s(a, o) {
    return n.getDependency("accessor", a).then(function(l) {
      e.setAttribute(o, l);
    });
  }
  for (const a in i) {
    const o = Pa[a] || a.toLowerCase();
    o in e.attributes || r.push(s(i[a], o));
  }
  if (t.indices !== void 0 && !e.index) {
    const a = n.getDependency("accessor", t.indices).then(function(o) {
      e.setIndex(o);
    });
    r.push(a);
  }
  return qe.workingColorSpace !== "srgb-linear" && "COLOR_0" in i && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`), yn(e, t), zg(e, t, n), Promise.all(r).then(function() {
    return t.targets !== void 0 ? Ng(e, t.targets, n) : e;
  });
}
var xa = {
  theta: 34 * Math.PI / 180,
  phi: 72 * Math.PI / 180,
  radius: 6.4,
  target: [
    0,
    0,
    0
  ],
  fov: 38
}, mi = null, Ta = null, Dl = /* @__PURE__ */ new Map(), Hg = new ag();
function Gg() {
  if (!Ta) {
    const t = document.createElement("canvas");
    t.width = 64, t.height = 64;
    const n = t.getContext("2d"), i = n.createRadialGradient(64 / 2, 64 / 2, 1, 64 / 2, 64 / 2, 64 / 2);
    i.addColorStop(0, "rgba(255, 255, 255, 1)"), i.addColorStop(0.28, "rgba(255, 255, 255, 0.85)"), i.addColorStop(0.65, "rgba(255, 255, 255, 0.22)"), i.addColorStop(1, "rgba(255, 255, 255, 0)"), n.fillStyle = i, n.fillRect(0, 0, 64, 64), Ta = new $d(t);
  }
  return Ta;
}
function Vg(e, t) {
  const n = Math.floor(e.count), i = new Float32Array(n * 3), r = new Float32Array(n * 3), s = new Float32Array(n * 3);
  let a = n * 7919 + Math.round(e.fromX * 100) * 101 >>> 0;
  const o = () => (a = a * 1664525 + 1013904223 >>> 0, a / 4294967295);
  for (let f = 0; f < n; f++)
    s[f * 3] = o(), s[f * 3 + 1] = o(), s[f * 3 + 2] = o() * Math.PI * 2;
  const l = new Ce(Si(e.color, t, "#7cc4f8")), c = new Ce(Si(e.endColor ?? e.color, t, "#7cc4f8")), u = new Ce(), h = new Ut();
  h.setAttribute("position", new Yt(i, 3)), h.setAttribute("color", new Yt(r, 3));
  const d = new Xa({
    size: e.size ?? 0.14,
    map: Gg(),
    vertexColors: !0,
    transparent: !0,
    opacity: e.opacity ?? 0.85,
    blending: 2,
    depthWrite: !1,
    sizeAttenuation: !0
  }), p = new yc(h, d);
  e.name && (p.name = e.name);
  const m = e.toX - e.fromX || 1, _ = e.swirl ?? 0, g = (f) => {
    const M = h.getAttribute("position"), b = h.getAttribute("color");
    for (let S = 0; S < n; S++) {
      const E = s[S * 3], A = s[S * 3 + 1], v = s[S * 3 + 2], T = ((E + f * e.speed / Math.abs(m)) % 1 + 1) % 1, R = e.fromX + T * m, U = e.innerRadius + A * (e.outerRadius - e.innerRadius), C = v + T * m * _;
      M.setXYZ(S, R, Math.cos(C) * U, Math.sin(C) * U);
      const N = 0.25 + 0.75 * Math.sin(T * Math.PI);
      u.copy(l).lerp(c, T).multiplyScalar(N), b.setXYZ(S, u.r, u.g, u.b);
    }
    M.needsUpdate = !0, b.needsUpdate = !0;
  };
  return g(0), {
    points: p,
    runner: {
      update: g,
      dispose() {
        h.dispose(), d.dispose();
      }
    }
  };
}
function Wg() {
  return mi || (mi = new rg({
    antialias: !0,
    alpha: !0,
    preserveDrawingBuffer: !0,
    powerPreference: "high-performance"
  }), mi.localClippingEnabled = !0, mi.toneMapping = 4, mi.toneMappingExposure = 1.15, mi.outputColorSpace = At), mi;
}
function Si(e, t, n = "#94a3b8") {
  if (!e) return n;
  const i = e.trim(), r = /^var\((--[a-z0-9-]+)\)$/i.exec(i);
  if (r && t) {
    const s = getComputedStyle(t).getPropertyValue(r[1]).trim();
    if (s) return s;
  }
  return i;
}
function Xg(e, t, n) {
  const i = e?.side === "double" ? 2 : e?.side === "back" ? 1 : 0, r = e?.opacity ?? 1;
  return new Ki({
    color: new Ce(Si(e?.color, t, "#8ea4b8")),
    metalness: e?.metalness ?? 0.55,
    roughness: e?.roughness ?? 0.35,
    ...e?.emissive ? {
      emissive: new Ce(Si(e.emissive, t, "#000000")),
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
function qg(e) {
  switch (e.type) {
    case "box":
      return new Or(e.width ?? 1, e.height ?? 1, e.depth ?? 1);
    case "cylinder":
      return new wc(e.radiusTop ?? e.radius ?? 0.5, e.radiusBottom ?? e.radius ?? 0.5, e.height ?? 1, e.radialSegments ?? 32, 1, e.openEnded ?? !1, e.thetaStart ?? 0, e.thetaLength ?? Math.PI * 2);
    case "cone":
      return new Jd(e.radius ?? 0.5, e.height ?? 1, e.radialSegments ?? 32, 1, e.openEnded ?? !1, e.thetaStart ?? 0, e.thetaLength ?? Math.PI * 2);
    case "sphere":
      return new ef(e.radius ?? 0.5, e.radialSegments ?? 32, Math.max(12, Math.floor((e.radialSegments ?? 32) / 2)));
    case "torus":
      return new tf(e.radius ?? 0.7, e.tube ?? 0.14, 16, e.tubularSegments ?? 48, e.thetaLength ?? Math.PI * 2);
    case "ring":
      return new jd(e.innerRadius ?? 0.35, e.outerRadius ?? 0.7, e.radialSegments ?? 32, 1, e.thetaStart ?? 0, e.thetaLength ?? Math.PI * 2);
    case "capsule":
      return new Zd(e.radius ?? 0.35, e.height ?? 0.8, 8, e.radialSegments ?? 24);
    case "lathe": {
      const t = (e.points ?? [[0.5, -0.5], [0.5, 0.5]]).map(([n, i]) => new ke(n, i));
      return new Qd(t, e.radialSegments ?? 44, e.thetaStart ?? 0, e.thetaLength ?? Math.PI * 2);
    }
    case "group":
      return null;
  }
}
function Nl(e, t) {
  t.position && e.position.set(t.position[0], t.position[1], t.position[2]), t.rotation && e.rotation.set(t.rotation[0], t.rotation[1], t.rotation[2]), typeof t.scale == "number" ? e.scale.setScalar(t.scale) : Array.isArray(t.scale) && e.scale.set(t.scale[0], t.scale[1], t.scale[2]);
}
function Ul(e, t, n, i, r) {
  if (e.type === "group") {
    const l = new en();
    e.name && (l.name = e.name), Nl(l, e);
    for (const c of e.children ?? []) l.add(iu(c, t, n, i, r));
    return e.spin && i.push({
      obj: l,
      spin: e.spin,
      base: [
        l.rotation.x,
        l.rotation.y,
        l.rotation.z
      ]
    }), e.explodeOffset && r.push({
      obj: l,
      base: [
        l.position.x,
        l.position.y,
        l.position.z
      ],
      offset: [...e.explodeOffset]
    }), l;
  }
  const s = qg(e);
  if (!s) return new en();
  const a = Xg(e.material, t, n), o = new zt(s, a);
  return e.name && (o.name = e.name), Nl(o, e), e.spin && i.push({
    obj: o,
    spin: e.spin,
    base: [
      o.rotation.x,
      o.rotation.y,
      o.rotation.z
    ]
  }), e.explodeOffset && r.push({
    obj: o,
    base: [
      o.position.x,
      o.position.y,
      o.position.z
    ],
    offset: [...e.explodeOffset]
  }), o;
}
function iu(e, t, n, i, r) {
  if (!e.repeat) return Ul(e, t, n, i, r);
  const { count: s, axis: a, radius: o = 0, step: l = 0, arc: c = Math.PI * 2 } = e.repeat, u = new en();
  e.name && (u.name = `${e.name}-array`);
  for (let h = 0; h < s; h++) {
    const d = Ul({
      ...e,
      repeat: void 0,
      spin: void 0,
      explodeOffset: void 0
    }, t, n, i, r);
    if (l !== 0) {
      const p = (h - (s - 1) / 2) * l;
      a === "x" ? d.position.x += p : a === "y" ? d.position.y += p : d.position.z += p;
    } else {
      const p = h / s * c, m = new en();
      a === "x" ? (d.position.y += o, m.rotation.x = p) : a === "y" ? (d.position.x += o, m.rotation.y = p) : (d.position.y += o, m.rotation.z = p), m.add(d), u.add(m);
      continue;
    }
    u.add(d);
  }
  return e.spin && i.push({
    obj: u,
    spin: e.spin,
    base: [
      u.rotation.x,
      u.rotation.y,
      u.rotation.z
    ]
  }), e.explodeOffset && r.push({
    obj: u,
    base: [
      u.position.x,
      u.position.y,
      u.position.z
    ],
    offset: [...e.explodeOffset]
  }), u;
}
function Yg(e, t, n) {
  if (t?.lights && t.lights.length > 0) {
    for (const l of t.lights) {
      const c = new Ce(Si(l.color, n, "#ffffff")), u = l.intensity ?? 1;
      if (l.type === "ambient") e.add(new Lf(c, u));
      else if (l.type === "hemisphere") {
        const h = new Ce(Si(l.groundColor, n, "#1e293b"));
        e.add(new jo(c, h, u));
      } else if (l.type === "point") {
        const h = new Hc(c, u);
        l.position && h.position.set(...l.position), e.add(h);
      } else {
        const h = new Mr(c, u);
        l.position && h.position.set(...l.position), e.add(h);
      }
    }
    return;
  }
  const i = t?.lighting ?? "studio", r = new jo(15660799, 1843754, i === "cad" ? 1.15 : 0.9);
  e.add(r);
  const s = new Mr(16777215, i === "dramatic" ? 2.5 : 1.9);
  s.position.set(5, 7, 6), e.add(s);
  const a = new Mr(8176888, i === "dramatic" ? 1.5 : 0.9);
  a.position.set(-6, 3, -5), e.add(a);
  const o = new Mr(16098916, 0.65);
  o.position.set(2, -4, 4), e.add(o);
}
function Kg(e) {
  let t = Dl.get(e);
  return t || (t = new Promise((n, i) => {
    Hg.load(e, (r) => {
      const s = r.scene || new en(), a = new Rn().setFromObject(s), o = a.getCenter(new z()), l = a.getSize(new z()), c = 3.8 / Math.max(l.x, l.y, l.z, 1e-3);
      s.position.sub(o).multiplyScalar(c), s.scale.multiplyScalar(c);
      const u = new en();
      u.add(s), n(u);
    }, void 0, i);
  }), Dl.set(e, t)), t.then((n) => n.clone(!0));
}
function $g(e, t) {
  const n = {
    ...xa,
    target: t?.camera?.target ? [...t.camera.target] : [
      0,
      0,
      0
    ],
    fov: t?.camera?.fov ?? xa.fov
  };
  if (t?.camera?.position) {
    const [r, s, a] = t.camera.position, o = r - n.target[0], l = s - n.target[1], c = a - n.target[2], u = Math.hypot(o, l, c) || xa.radius;
    n.radius = u, n.phi = Math.acos(Math.max(-1, Math.min(1, l / u))), n.theta = Math.atan2(o, c);
  }
  const i = Fa(e);
  return i && (n.theta = i.theta, n.phi = i.phi, n.radius = i.radius), n;
}
async function Zg(e, t, n) {
  const i = Kl(n), r = new Cd();
  i?.background && i.background !== "transparent" && (r.background = new Ce(Si(i.background, e, "#0b0e11")));
  const s = [];
  if (i?.clipPlane) {
    const [m, _, g] = i.clipPlane.normal;
    s.push(new Bn(new z(m, _, g).normalize(), i.clipPlane.constant));
  }
  Yg(r, i, e);
  const a = [], o = [], l = [];
  if (i) {
    for (const m of i.parts) r.add(iu(m, e, s, a, o));
    for (const m of i.particles ?? []) {
      const { points: _, runner: g } = Vg(m, e);
      r.add(_), l.push(g);
    }
  }
  if (t) try {
    const m = await Kg(t);
    r.add(m);
  } catch {
    const m = new zt(new Or(1.5, 1.5, 1.5), new Ki({
      color: 8176888,
      wireframe: !0
    }));
    r.add(m);
  }
  const c = new qt(38, 1, 0.05, 200);
  let u = !1;
  const h = [];
  r.traverse((m) => {
    if (m instanceof zt && m.material instanceof Ki) {
      const _ = [];
      for (let g = m; g; g = g.parent) g.name && _.push(g.name.toLowerCase());
      h.push({
        mesh: m,
        mat: m.material,
        names: _,
        baseOpacity: m.material.opacity,
        baseTransparent: m.material.transparent,
        baseEmissive: m.material.emissive.clone(),
        baseEmissiveIntensity: m.material.emissiveIntensity
      });
    }
  });
  let d = "";
  const p = (m) => {
    const _ = m && m.length ? m.join("|").toLowerCase() : "";
    if (_ === d) return;
    d = _;
    const g = _ ? _.split("|") : [];
    for (const f of h)
      g.length === 0 ? (f.mat.opacity = f.baseOpacity, f.mat.transparent = f.baseTransparent, f.mat.emissive.copy(f.baseEmissive), f.mat.emissiveIntensity = f.baseEmissiveIntensity) : g.some((M) => f.names.some((b) => b.includes(M))) ? (f.mat.opacity = f.baseOpacity, f.mat.transparent = f.baseTransparent, f.baseEmissiveIntensity > 0 ? (f.mat.emissive.copy(f.baseEmissive), f.mat.emissiveIntensity = Math.min(1.6, f.baseEmissiveIntensity * 1.35)) : (f.mat.emissive.copy(f.mat.color), f.mat.emissiveIntensity = 0.28)) : (f.mat.transparent = !0, f.mat.opacity = Math.min(f.baseOpacity, 0.22), f.mat.emissive.copy(f.baseEmissive), f.mat.emissiveIntensity = f.baseEmissiveIntensity * 0.2), f.mat.needsUpdate = !0;
  };
  return {
    render(m, _, g, f = 0, M, b = 1) {
      if (u) return;
      p(M);
      for (const $ of o) $.obj.position.set($.base[0] + $.offset[0] * b, $.base[1] + $.offset[1] * b, $.base[2] + $.offset[2] * b);
      const S = _.getBoundingClientRect(), E = Math.max(1, Math.round(S.width || m.clientWidth || 400)), A = Math.max(1, Math.round(S.height || m.clientHeight || 300)), v = Math.min(window.devicePixelRatio || 1, 2), T = Math.max(1, Math.round(E * v)), R = Math.max(1, Math.round(A * v));
      for (const $ of a) {
        const B = f * $.spin.speed;
        $.obj.rotation.set($.base[0] + ($.spin.axis === "x" ? B : 0), $.base[1] + ($.spin.axis === "y" ? B : 0), $.base[2] + ($.spin.axis === "z" ? B : 0));
      }
      for (const $ of l) $.update(f);
      const U = i?.autoRotate ? f * (typeof i.autoRotate == "number" ? i.autoRotate : 0.35) : 0;
      c.fov = g.fov, c.aspect = E / A, c.updateProjectionMatrix();
      const C = Math.max(0.08, Math.min(Math.PI - 0.08, g.phi)), N = Math.max(0.5, g.radius), q = g.theta + U;
      c.position.set(g.target[0] + N * Math.sin(C) * Math.sin(q), g.target[1] + N * Math.cos(C), g.target[2] + N * Math.sin(C) * Math.cos(q)), c.lookAt(g.target[0], g.target[1], g.target[2]);
      const L = Wg();
      L.setPixelRatio(1), L.setSize(T, R, !1), L.render(r, c), (m.width !== T || m.height !== R) && (m.width = T, m.height = R);
      const H = m.getContext("2d");
      H && (H.clearRect(0, 0, T, R), H.drawImage(L.domElement, 0, 0, T, R));
    },
    dispose() {
      if (!u) {
        u = !0;
        for (const m of l) m.dispose();
        r.traverse((m) => {
          if (m instanceof zt) {
            m.geometry.dispose();
            const _ = Array.isArray(m.material) ? m.material : [m.material];
            for (const g of _) g.dispose();
          }
        });
      }
    }
  };
}
var Zn = (e, t, n) => e + (t - e) * n, Jg = (e) => 1 - Math.pow(1 - e, 3), Qg = (e) => e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
async function jg(e) {
  const t = e.getAttribute("src") ?? void 0, n = e.getAttribute("data-scene") ?? void 0, i = e.getAttribute("camera-orbit") ?? void 0, r = e.getAttribute("data-animate"), s = e.getAttribute("data-exploded"), a = e.getAttribute("id") ?? void 0, o = Kl(n), l = th(o), c = nh(o), u = $g(i, o);
  let h = {
    ...u,
    target: [...u.target]
  }, d = r === "true" || r === "", p = s !== "false", m = p ? 1 : 0, _ = 0, g = null, f = null, M = 0, b = 0;
  const S = document.createElement("canvas");
  S.style.display = "block", S.style.width = "100%", S.style.height = "100%", S.style.cursor = "grab", S.style.touchAction = "none", e.textContent = "", e.appendChild(S);
  const E = await Zg(e, t, n), A = () => E.render(S, e, h, _, f?.highlight, m);
  A();
  const v = document.createElement("div");
  v.setAttribute("role", "status"), v.setAttribute("aria-live", "polite"), Object.assign(v.style, {
    position: "absolute",
    left: "12px",
    top: "12px",
    maxWidth: "320px",
    padding: "10px 12px",
    borderRadius: "4px",
    border: "1px solid var(--color-outline-variant, #333e4b)",
    backgroundColor: "color-mix(in srgb, var(--color-surface-container, #1c222a) 92%, transparent)",
    color: "var(--color-on-surface, #e6ecf2)",
    display: "none",
    flexDirection: "column",
    gap: "4px"
  });
  const T = document.createElement("div");
  Object.assign(T.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px"
  });
  const R = document.createElement("strong");
  Object.assign(R.style, {
    fontSize: "13px",
    fontWeight: "700"
  });
  const U = document.createElement("button");
  U.type = "button", U.textContent = "Full view", Object.assign(U.style, {
    border: "none",
    background: "transparent",
    color: "var(--color-primary, #7cc4f8)",
    fontSize: "11px",
    fontWeight: "600",
    cursor: "pointer",
    padding: "0"
  });
  const C = document.createElement("p");
  Object.assign(C.style, {
    margin: "0",
    fontSize: "12px",
    lineHeight: "1.45",
    color: "var(--color-on-surface-variant, #a9b6c4)"
  }), T.append(R, U), v.append(T, C), e.appendChild(v);
  const N = (k) => {
    cancelAnimationFrame(M);
    const Q = {
      ...h,
      target: [...h.target]
    }, _e = performance.now(), Z = 450, te = (ge) => {
      const Te = Math.min(1, (ge - _e) / Z), ye = Jg(Te);
      h = {
        theta: Zn(Q.theta, k.theta, ye),
        phi: Zn(Q.phi, k.phi, ye),
        radius: Zn(Q.radius, k.radius, ye),
        fov: Zn(Q.fov, k.fov, ye),
        target: [
          Zn(Q.target[0], k.target[0], ye),
          Zn(Q.target[1], k.target[1], ye),
          Zn(Q.target[2], k.target[2], ye)
        ]
      }, A(), Te < 1 && (M = requestAnimationFrame(te));
    };
    M = requestAnimationFrame(te);
  }, q = (k) => {
    const Q = k && k === g ? null : k;
    if (g = Q, f = Q && o?.views ? o.views[Q] ?? null : null, a) for (const Z of document.querySelectorAll(`[data-3d-target="${CSS.escape(a)}"]`)) Z.setAttribute("aria-pressed", Z.getAttribute("data-3d-view") === Q ? "true" : "false");
    if (!f) {
      v.style.display = "none", N(u);
      return;
    }
    R.textContent = f.label, C.textContent = f.summary ?? "", C.style.display = f.summary ? "block" : "none", v.style.display = "flex";
    const _e = Fa(f.orbit);
    N({
      theta: _e?.theta ?? u.theta,
      phi: _e?.phi ?? u.phi,
      radius: _e?.radius ?? u.radius,
      target: f.target ? [...f.target] : [...u.target],
      fov: u.fov
    });
  };
  U.addEventListener("click", () => q(null)), a && o?.views && document.addEventListener("click", (k) => {
    const Q = k.target?.closest?.(`[data-3d-target="${CSS.escape(a)}"]`);
    if (!Q) return;
    const _e = Q.getAttribute("data-3d-view");
    _e !== null && (k.preventDefault(), q(_e === "" || _e === "reset" ? null : _e));
  });
  let L = 0, H = performance.now();
  const $ = (k) => {
    d && (_ += Math.min(0.1, (k - H) / 1e3), H = k, A(), L = requestAnimationFrame($));
  }, B = document.createElement("div");
  Object.assign(B.style, {
    position: "absolute",
    left: "12px",
    bottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  });
  const ae = (k) => {
    Object.assign(k.style, {
      padding: "6px 10px",
      borderRadius: "4px",
      border: "1px solid var(--color-outline-variant, #475569)",
      backgroundColor: "var(--color-surface-container-high, #1e293b)",
      color: "var(--color-on-surface, #f8fafc)",
      fontSize: "12px",
      fontWeight: "600",
      cursor: "pointer"
    });
  };
  if (l) {
    const k = document.createElement("button");
    k.type = "button", k.textContent = d ? "Pause rotation" : "Animate engine", k.setAttribute("aria-pressed", d ? "true" : "false"), ae(k), k.addEventListener("click", () => {
      d = !d, k.textContent = d ? "Pause rotation" : "Animate engine", k.setAttribute("aria-pressed", d ? "true" : "false"), d ? (H = performance.now(), L = requestAnimationFrame($)) : cancelAnimationFrame(L);
    }), B.appendChild(k), d && (L = requestAnimationFrame($));
  }
  if (c) {
    const k = document.createElement("button");
    k.type = "button", k.textContent = p ? "Assemble" : "Explode view", k.setAttribute("aria-pressed", p ? "true" : "false"), ae(k), k.addEventListener("click", () => {
      p = !p, k.textContent = p ? "Assemble" : "Explode view", k.setAttribute("aria-pressed", p ? "true" : "false"), !p && g && q(null), cancelAnimationFrame(b);
      const Q = m, _e = p ? 1 : 0, Z = performance.now(), te = 520, ge = (Te) => {
        const ye = Math.min(1, (Te - Z) / te);
        m = Zn(Q, _e, Qg(ye)), A(), ye < 1 && (b = requestAnimationFrame(ge));
      };
      b = requestAnimationFrame(ge);
    }), B.appendChild(k);
  }
  B.childElementCount > 0 && e.appendChild(B);
  let Y = null;
  S.addEventListener("pointerdown", (k) => {
    cancelAnimationFrame(M), S.setPointerCapture(k.pointerId), Y = {
      x: k.clientX,
      y: k.clientY,
      theta: h.theta,
      phi: h.phi
    };
  }), S.addEventListener("pointermove", (k) => {
    Y && (h = {
      ...h,
      theta: Y.theta - (k.clientX - Y.x) * 8e-3,
      phi: Math.max(0.12, Math.min(Math.PI - 0.12, Y.phi - (k.clientY - Y.y) * 8e-3))
    }, A());
  }), S.addEventListener("pointerup", () => {
    Y = null;
  }), S.addEventListener("wheel", (k) => {
    cancelAnimationFrame(M), k.preventDefault(), h = {
      ...h,
      radius: Math.max(1.2, Math.min(40, h.radius * (k.deltaY > 0 ? 1.08 : 0.92)))
    }, A();
  }, { passive: !1 }), new ResizeObserver(A).observe(e);
}
function Ol() {
  const e = [...document.querySelectorAll("weft-3d")];
  return Promise.all(e.map(jg)).then(() => e.length);
}
window.__weft3dReady = document.readyState === "loading" ? new Promise((e) => document.addEventListener("DOMContentLoaded", () => {
  Ol().then(e);
}, { once: !0 })) : Ol();
