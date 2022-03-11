const cssUsed = `
/*! CSS Used from: Embedded */
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor; font-family: Garamond, sans-serif;}
h1,h2{font-size:inherit;font-weight:inherit;}
:-moz-focusring{outline:auto;}
h1,h2,p{margin:0;}
ul{list-style:none;margin:0;padding:0;}
:disabled{cursor:default;}
/*! CSS Used from: Embedded */
*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
/*! CSS Used from: Embedded */
.i-carbon\:location-filled{--un-icon:url(data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32'%3E%3Cpath fill='currentColor' d='M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z'/%3E%3Ccircle cx='16' cy='13' r='4' fill='none'/%3E%3C/svg%3E);mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;height:1.2em;width:1.2em;}
.i-mdi\:cellphone{--un-icon:url(data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M17 19H7V5h10m0-4H7c-1.11 0-2 .89-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Z'/%3E%3C/svg%3E);mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;height:1.2em;width:1.2em;}
.i-mdi\:email{--un-icon:url(data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'/%3E%3C/svg%3E);mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;height:1.2em;width:1.2em;}
.i-mdi\:web{--un-icon:url(data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'%3E%3Cpath fill='currentColor' d='M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z'/%3E%3C/svg%3E);mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;height:1.2em;width:1.2em;}
.mx-2{margin-left:0.5rem;margin-right:0.5rem;}
.mr-1{margin-right:0.25rem;}
.w-full{width:100%;}
.h-screen-xl{height:1280px;}
.flex{display:flex;}
.flex-row{flex-direction:row;}
.flex-col{flex-direction:column;}
.flex-wrap{flex-wrap:wrap;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.divide-y>:not([hidden])~:not([hidden]){--un-divide-y-reverse:0;border-top-width:calc(1px * calc(1 - var(--un-divide-y-reverse)));border-bottom-width:calc(1px * var(--un-divide-y-reverse));}
.divide-gray-300\/50>:not([hidden])~:not([hidden]){border-color:rgba(209,213,219,0.5);}
.divide-gray-500>:not([hidden])~:not([hidden]){--un-divide-opacity:1;border-color:rgba(107,114,128,var(--un-divide-opacity));}
.whitespace-pre-line{white-space:pre-line;}
.rounded-xl{border-radius:0.75rem;}
.bg-neutral-50{--un-bg-opacity:1;background-color:rgba(250,250,250,var(--un-bg-opacity));}
.px-15{padding-left:3.75rem;padding-right:3.75rem;}
.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}
.pb-3{padding-bottom:0.75rem;}
.pt-1{padding-top:0.25rem;}
.pt-10{padding-top:2.5rem;}
.pt-2{padding-top:0.5rem;}
.pt-3{padding-top:0.75rem;}
.text-center{text-align:center;}
.text-3\.2{font-size:0.8rem;}
.text-3xl{font-size:1.875rem;line-height:2.25rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xl{font-size:1.25rem;line-height:1.75rem;}
.text-xs{font-size:0.75rem;line-height:1rem;}
.font-black{font-weight:900;}
.font-bold{font-weight:700;}
`

export default cssUsed
