<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <style>
		/*
0 - 600px:        Phone
600 - 900px:      Tablet portrait
900 - 1200px:     Tablet landscape
[1200 - 1800px] is where our normal styles apply
1800px + :      Big desktop
*/
/*
@mixin respond-phone {
    @media (max-width: 600px) { @content };
}
*/
/*
$breakpoint argument choices:
-Phone
-tab-port
-tab-land
-Big-desktop

ORDER: Base + typography > general layout + grid > page layout > components 

1em = 16px

*/
@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem); }
  80% {
    transform: translateX(1rem); }
  100% {
    opacity: 1;
    transform: translate(0); } }

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem); }
  80% {
    transform: translateX(-1rem); }
  100% {
    opacity: 1;
    transform: translate(0); } }

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(3rem); }
  100% {
    opacity: 1;
    transform: translate(0); } }

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit; }

html {
  font-size: 62.5%; }
  @media only screen and (max-width: 75em) {
    html {
      font-size: 56.25%; } }
  @media only screen and (max-width: 56.25em) {
    html {
      font-size: 50%; } }
  @media only screen and (min-width: 112.5) {
    html {
      font-size: 75%; } }

body {
  box-sizing: border-box;
  padding: 3rem;
  overflow-x: hidden; }
  @media only screen and (max-width: 56.25em) {
    body {
      padding: 0; } }

::selection {
  background-color: #55c57a;
  color: #fff; }

body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  /*font-size: 16px;*/
  line-height: 1.7;
  color: #777; }

.heading-primary {
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 6rem; }
  .heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.5rem;
    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    /* animation-iteration-count: 3; */
    /* animation-delay: 3s; */ }
    @media only screen and (max-width: 37.5em) {
      .heading-primary--main {
        letter-spacing: 1rem;
        font-size: 5rem; } }
  .heading-primary--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;
    animation: moveInRight 1s ease-out; }
    @media only screen and (max-width: 37.5em) {
      .heading-primary--sub {
        letter-spacing: .5rem; } }

.heading-secondary {
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: .2rem;
  transition: all .2s; }
  @media only screen and (max-width: 56.25em) {
    .heading-secondary {
      font-size: 3rem; } }
  @media only screen and (max-width: 56.25em) {
    .heading-secondary {
      font-size: 2.5rem; } }
  .heading-secondary:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); }

.heading-tertiary {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase; }

.paragraph {
  font-size: 1.6rem; }
  .paragraph:not(:last-child) {
    margin-bottom: 3rem; }

.u-center-text {
  text-align: center !important; }

.u-margin-bottom-small {
  margin-bottom: 1.5rem !important; }

.u-margin-bottom-medium {
  margin-bottom: 4rem !important; }
  @media only screen and (max-width: 56.25em) {
    .u-margin-bottom-medium {
      margin-bottom: 3rem !important; } }

.u-margin-bottom-big {
  margin-bottom: 8rem !important; }
  @media only screen and (max-width: 56.25em) {
    .u-margin-bottom-big {
      margin-bottom: 5rem !important; } }

.u-margin-top-big {
  margin-top: 8rem !important; }

.u-margin-top-huge {
  margin-top: 10rem !important; }

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: .15;
  overflow: hidden; }
  .bg-video__content {
    width: 100%;
    height: 100%;
    object-fit: cover; }

.btn, .btn:link, .btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  transition: all .2s;
  position: relative;
  font-size: 1.6rem;
  text-align: center;
  border: none;
  cursor: pointer; }

.btn:hover {
  transform: translateY(-0.3rem);
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }
  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0; }

.btn:active, .btn:focus {
  outline: none;
  transform: translateY(-0.1rem);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }

.btn--white {
  background-color: #fff;
  color: #777; }
  .btn--white::after {
    background-color: #fff; }

.btn--green {
  background-color: #55c57a;
  color: #fff; }
  .btn--green::after {
    background-color: #55c57a; }

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all .4s; }

.btn--animated {
  animation: moveInBottom .5s ease-out .75s;
  animation-fill-mode: backwards; }

.btn-text:link, .btn-text:visited {
  font-size: 1.6rem;
  color: #55c57a;
  display: inline-block;
  text-decoration: none;
  border-bottom: 1px solid #55c57a;
  padding: 3px;
  transition: all .2s; }

.btn-text:hover {
  background-color: #55c57a;
  color: #fff;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  transform: translateY(-2px); }

.btn-text:active {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  transform: translateY(0); }

.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem; }
  .card__side {
    height: 52rem;
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: none; }
    .card__side--front {
      background-color: #fff; }
    .card__side--back {
      transform: rotateY(180deg); }
      .card__side--back-1 {
        background-image: linear-gradient(to right bottom, #ffb900, #ff7730); }
      .card__side--back-2 {
        background-image: linear-gradient(to right bottom, #7ed56f, #28b485); }
      .card__side--back-3 {
        background-image: linear-gradient(to right bottom, #299Bff, #5643fa); }
  .card:hover .card__side--front {
    transform: rotateY(-180deg); }
  .card:hover .card__side--back {
    transform: rotateY(0); }
  .card__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px; }
    .card__picture--1 {
      background-image: linear-gradient(to right bottom, #ffb900, #ff7730), url("../img/nat-5.jpg"); }
    .card__picture--2 {
      background-image: linear-gradient(to right bottom, #7ed56f, #28b485), url("../img/nat-6.jpg"); }
    .card__picture--3 {
      background-image: linear-gradient(to right bottom, #299Bff, #5643fa), url("../img/nat-7.jpg"); }
  .card__heading {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: #fff;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 67%; }
  .card__heading-span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone; }
    .card__heading-span--1 {
      background-image: linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85)); }
    .card__heading-span--2 {
      background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.85), rgba(40, 180, 133, 0.85)); }
    .card__heading-span--3 {
      background-image: linear-gradient(to right bottom, rgba(41, 155, 255, 0.85), rgba(86, 67, 250, 0.85)); }
  .card__details {
    padding: 3rem; }
    .card__details ul {
      list-style: none;
      width: 80%;
      margin: 0 auto; }
      .card__details ul li {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem; }
        .card__details ul li:not(:last-child) {
          border-bottom: 1px solid #eeeeee; }
  .card__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; }
  .card__price-box {
    margin-bottom: 8rem;
    color: #fff; }
  .card__price-only {
    font-size: 1.4rem;
    text-transform: uppercase; }
  .card__price-value {
    font-size: 6rem;
    font-weight: 100; }
  @media only screen and (max-width: 56.25em), only screen and (hover: none) {
    .card {
      height: auto;
      border-radius: 3px;
      background-color: #fff;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15); }
      .card__side {
        height: auto;
        position: relative;
        border-radius: 3px; }
        .card__side--back {
          transform: rotateY(0);
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%); }
      .card:hover .card__side--front {
        transform: rotateY(0); }
      .card__details {
        padding: 1rem 3rem; }
      .card__cta {
        position: relative;
        top: 0;
        left: 0;
        transform: translate(0);
        width: 100%;
        padding: 7rem 4rem 4rem 4rem; }
      .card__price-box {
        margin-bottom: 3rem; }
      .card__price-value {
        font-size: 6rem; } }

.composition {
  position: relative; }
  .composition__photo {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all .2s;
    outline-offset: 2rem; }
    @media only screen and (max-width: 56.25em) {
      .composition__photo {
        float: left;
        position: relative;
        width: 33.3333333333%;
        box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2); } }
    .composition__photo--p1 {
      left: 0;
      top: -2rem; }
      @media only screen and (max-width: 56.25em) {
        .composition__photo--p1 {
          top: 0;
          transform: scale(1.2); } }
    .composition__photo--p2 {
      right: 0;
      top: 2rem; }
      @media only screen and (max-width: 56.25em) {
        .composition__photo--p2 {
          top: -1rem;
          transform: scale(1.3);
          z-index: 100; } }
    .composition__photo--p3 {
      left: 20%;
      top: 10rem; }
      @media only screen and (max-width: 56.25em) {
        .composition__photo--p3 {
          top: 0;
          left: 0;
          transform: scale(1.1); } }
    .composition__photo:hover {
      outline: 1.5rem solid #55c57a;
      transform: scale(1.05) translate(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
      z-index: 20; }
  .composition:hover .composition__photo:not(:hover) {
    transform: scale(0.95); }

.feature-box {
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: transform .3s; }
  @media only screen and (max-width: 56.25em) {
    .feature-box {
      padding: 2rem; } }
  .feature-box__icon {
    font-size: 6rem;
    display: inline-block;
    margin-bottom: .6rem;
    background-image: linear-gradient(to right, #7ed56f, #28b485);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; }
    @media only screen and (max-width: 56.25em) {
      .feature-box__icon {
        margin-bottom: 0; } }
  .feature-box:hover {
    transform: translateY(-1.5rem) scale(1.03); }

.form__group:not(:last-child) {
  margin-bottom: 2rem; }

.form__input {
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-bottom: 3px solid transparent;
  width: 90%;
  display: block;
  transition: all .3s; }
  @media only screen and (max-width: 56.25em) {
    .form__input {
      width: 100%; } }
  .form__input:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 3px solid #55c57a; }
  .form__input:focus:invalid {
    border-bottom: 3px solid #ff7730; }
  .form__input::-webkit-input-placeholder {
    color: #999; }

.form__label {
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: .7rem;
  display: block;
  transition: all .3s; }

.form__input:placeholder-shown + .form__label {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4rem); }

.form__radio-group {
  width: 49.7%;
  display: inline-block; }
  @media only screen and (max-width: 56.25em) {
    .form__radio-group {
      width: 100%;
      margin-bottom: 2rem; } }

.form__radio-input {
  display: none; }

.form__radio-label {
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
  padding-left: 4.5rem; }

.form__radio-button {
  height: 3rem;
  width: 3rem;
  border: 5px solid #55c57a;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: -.5rem; }
  .form__radio-button::after {
    content: "";
    display: block;
    position: absolute;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #55c57a;
    opacity: 0;
    transition: opacity .2s; }

.form__radio-input:checked ~ .form__radio-label .form__radio-button::after {
  opacity: 1; }

.popup {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all .3s; }
  @supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
    .popup {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(0, 0, 0, 0.3); } }
  .popup:target {
    opacity: 1;
    visibility: visible; }
  .popup:target .popup__content {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1); }
  .popup__close:link, .popup__close:visited {
    color: #777;
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    font-size: 3rem;
    text-decoration: none;
    display: inline-block;
    line-height: 1; }
  .popup__close:hover {
    color: #55c57a; }
  .popup__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    background-color: #fff;
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    display: table;
    overflow: hidden;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.25);
    transition: all .4s .2s; }
    @media only screen and (max-width: 75em) {
      .popup__content {
        display: block; } }
  .popup__left {
    width: 33.333333%;
    display: table-cell; }
    @media only screen and (max-width: 75em) {
      .popup__left {
        width: 100%;
        display: block; }
        .popup__left:after {
          content: "";
          display: table;
          clear: both; } }
  .popup__right {
    width: 66.66666667%;
    display: table-cell;
    vertical-align: middle;
    padding: 0 5rem; }
    @media only screen and (max-width: 75em) {
      .popup__right {
        width: 100%;
        display: block;
        text-align: center;
        padding: 5rem 3rem; } }
  .popup__img {
    width: 100%;
    display: block; }
    @media only screen and (max-width: 75em) {
      .popup__img {
        float: left;
        width: 50%;
        height: 20rem; } }
  .popup__text {
    font-size: 1.4rem;
    margin-bottom: 4rem;
    -moz-column-count: 2;
    -moz-column-gap: 2;
    -moz-column-rule: 2;
    column-count: 2;
    column-gap: 4rem;
    column-rule: 1px solid #eeeeee;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto; }
    @media only screen and (max-width: 56.25em) {
      .popup__text {
        -moz-column-count: none;
        -moz-column-gap: none;
        -moz-column-rule: none;
        column-count: 0;
        column-gap: 0;
        column-rule: 0; } }

.story {
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  transform: skewX(-12deg); }
  @media only screen and (max-width: 56.25em) {
    .story {
      width: 100%;
      padding: 4rem;
      padding-left: 7rem; } }
  @media only screen and (max-width: 37.5em) {
    .story {
      transform: skewX(0); } }
  .story__shape {
    width: 15rem;
    height: 15rem;
    float: left;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    transform: translateX(-3rem) skewX(12deg);
    position: relative; }
    @media only screen and (max-width: 37.5em) {
      .story__shape {
        transform: translatX(-3rem) skewX(0); } }
  .story__img {
    height: 100%;
    transform: translateX(-4rem) scale(1.4);
    backface-visibility: hidden;
    transition: all .5s; }
  .story__text {
    transform: skewX(12deg); }
    @media only screen and (max-width: 37.5em) {
      .story__text {
        transform: skewX(0); } }
  .story__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: #fff;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all .5s;
    backface-visibility: hidden; }
  .story:hover .story__caption {
    opacity: 1;
    transform: translate(-50%, -50%); }
  .story:hover .story__img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%); }

.footer {
  background-color: #333;
  padding: 10rem 0;
  font-size: 1.4rem;
  color: #f7f7f7; }
  .footer__logo-box {
    text-align: center;
    margin-bottom: 8rem; }
    @media only screen and (max-width: 56.25em) {
      .footer__logo-box {
        margin-bottom: 6rem; } }
  .footer__logo {
    width: 15rem;
    height: auto; }
  .footer__navigation {
    border-top: 1px solid #eeeeee;
    padding-top: 2rem;
    display: inline-block; }
    @media only screen and (max-width: 56.25em) {
      .footer__navigation {
        width: 100%;
        text-align: center; } }
  .footer__list {
    list-style: none; }
  .footer__item {
    display: inline-block; }
    .footer__item:not(:last-child) {
      margin-right: 1.5rem; }
  .footer__link:link, .footer__link:visited {
    color: #f7f7f7;
    background-color: #333;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    transition: all .2s; }
  .footer__link:hover, .footer__link:active {
    color: #55c57a;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    transform: rotate(5deg) scale(1.3); }
  .footer__copyright {
    border-top: 1px solid #eeeeee;
    padding-top: 2rem;
    width: 80%;
    float: right; }
    @media only screen and (max-width: 56.25em) {
      .footer__copyright {
        width: 100%;
        float: none; } }

.row {
  max-width: 103.63rem;
  margin: 0 auto; }
  .row:not(:last-child) {
    margin-bottom: 8rem; }
    @media only screen and (max-width: 56.25em) {
      .row:not(:last-child) {
        margin-bottom: 6rem; } }
  @media only screen and (max-width: 56.25em) {
    .row {
      max-width: 50rem;
      padding: 0 3rem; } }
  .row:after {
    content: "";
    display: table;
    clear: both; }
  .row [class^="col-"] {
    float: left; }
    .row [class^="col-"]:not(:last-child) {
      margin-right: 6rem; }
      @media only screen and (max-width: 56.25em) {
        .row [class^="col-"]:not(:last-child) {
          margin-right: 0;
          margin-bottom: 6rem; } }
    @media only screen and (max-width: 56.25em) {
      .row [class^="col-"] {
        width: 100% !important; } }
  .row .col-1-of-2 {
    width: calc((100% - 6rem) / 2); }
  .row .col-1-of-3 {
    width: calc((100% - 2 * 6rem) / 3); }
  .row .col-1-of-4 {
    width: calc((100% - 3 * 6rem) / 4); }
  .row .col-2-of-3 {
    width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem); }
  .row .col-2-of-4 {
    width: calc( 2 * ((100% - 3 * 6rem) / 4) + 6rem); }
  .row .col-3-of-4 {
    width: calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem); }

.header {
  height: 95vh;
  background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.801), rgba(40, 180, 133, 0.801)), url("../img/hero-small.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%); }
  @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em), (min-width: 125em) {
    .header {
      background-image: linear-gradient(to right bottom, rgba(255, 185, 0, 0.801), rgba(255, 119, 48, 0.801)), url("../img/hero.jpg"); } }
  @media only screen and (min-width: 2000px) {
    .header {
      background-image: linear-gradient(to right bottom, rgba(255, 185, 0, 0.801), rgba(255, 119, 48, 0.801)), url("../img/hero.jpg"); } }
  @media only screen and (max-width: 37.5em) {
    .header {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%); } }
  .header__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem; }
  .header__logo {
    height: 3.5rem; }
  .header__text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; }

.navigation__checkbox {
  display: none; }

.navigation__button {
  background-color: #fff;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer; }
  @media only screen and (max-width: 56.25em) {
    .navigation__button {
      top: 4rem;
      right: 4rem; } }
  @media only screen and (max-width: 37.5em) {
    .navigation__button {
      top: 3rem;
      right: 3rem; } }

.navigation__background {
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(#7ed56f, #28b485);
  z-index: 1000;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.87, 1); }
  @media only screen and (max-width: 56.25em) {
    .navigation__background {
      top: 4.5rem;
      right: 4.5rem; } }
  @media only screen and (max-width: 37.5em) {
    .navigation__background {
      top: 3.5rem;
      right: 3.5rem; } }

.navigation__nav {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.navigation__list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%; }

.navigation__item {
  margin: 1rem; }

.navigation__link:link, .navigation__link:visited {
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
  background-size: 220%;
  transition: all .4s;
  backface-visibility: hidden; }
  .navigation__link:link span, .navigation__link:visited span {
    display: inline-block;
    margin-right: 1.5rem; }

.navigation__link:hover, .navigation__link:active {
  background-position: 100%;
  color: #55c57a;
  transform: translateX(1rem); }

.navigation__checkbox:checked ~ .navigation__background {
  transform: scale(80); }

.navigation__checkbox:checked ~ .navigation__nav {
  opacity: 1;
  width: 100%; }

.navigation__icon {
  position: relative;
  margin-top: 3.5rem; }
  .navigation__icon, .navigation__icon::before, .navigation__icon::after {
    width: 3rem;
    height: 2px;
    background-color: #333;
    display: inline-block; }
  .navigation__icon::before, .navigation__icon::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all .2s; }
  .navigation__icon::before {
    top: -.8rem; }
  .navigation__icon::after {
    top: .8rem; }

.navigation__button:hover .navigation__icon::before {
  top: -1rem; }

.navigation__button:hover .navigation__icon::after {
  top: 1rem; }

.navigation__checkbox:checked + .navigation__button .navigation__icon {
  background-color: transparent; }

.navigation__checkbox:checked + .navigation__button .navigation__icon::before {
  top: 0;
  transform: rotate(135deg); }

.navigation__checkbox:checked + .navigation__button .navigation__icon::after {
  top: 0;
  transform: rotate(-135deg); }

.section-about {
  background-color: #f7f7f7;
  padding: 25rem 0;
  margin-top: -20vh; }
  @media only screen and (max-width: 56.25em) {
    .section-about {
      padding: 20rem 0; } }

.section-features {
  padding: 20rem 0;
  background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url("../img/nat-4.jpg");
  background-size: cover;
  transform: skewY(-7deg);
  margin-top: -10rem; }
  .section-features > * {
    transform: skewY(7deg); }
  @media only screen and (max-width: 56.25em) {
    .section-features {
      padding: 10rem 0; } }

.section-tours {
  background-color: #f7f7f7;
  padding: 25rem 0 15rem 0;
  margin-top: -10rem; }
  @media only screen and (max-width: 56.25em) {
    .section-tours {
      padding: 20rem 0 5rem 0; } }

.section-stories {
  position: relative;
  padding: 15rem 0; }
  @media only screen and (max-width: 56.25em) {
    .section-stories {
      padding: 10rem 0; } }

.section-book {
  padding: 15rem 0;
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485); }

.book {
  background-image: linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%), url("../img/nat-10.jpg");
  background-size: 100%;
  border-radius: 3px;
  background-repeat: no-repeat;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2); }
  @media only screen and (max-width: 75em) {
    .book {
      background-image: linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 65%, transparent 65%), url("../img/nat-10.jpg");
      background-size: cover; } }
  @media only screen and (max-width: 56.25em) {
    .book {
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%), url("../img/nat-10.jpg"); } }
  .book__form {
    width: 50%;
    padding: 6rem; }
    @media only screen and (max-width: 75em) {
      .book__form {
        width: 65%; } }
    @media only screen and (max-width: 56.25em) {
      .book__form {
        width: 100%; } }

	</style>

        <title>Natours | Exciting tours for adventurous people</title>
    </head>
    <body>

        <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
            
            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
            </label>
            
            <div class="navigation__background">&nbsp;</div>
            
            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>01</span>About Notours</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>02</span>Your benefits</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>03</span>Popular tours</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>04</span>Stories</a></li>
                    <li class="navigation__item"><a href="#" class="navigation__link"><span>05</span>book now</a></li>
                </ul>
            </nav>
        </div>

        <header class="header">
            <div class="header__logo-box">
                <img src="img/logo-white.png" alt="Logo" class="header__logo">
            </div>
            <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">Outdoors</span>
                    <span class="heading-primary--sub">is where life happens</span>
                </h1>

                <a href="#" class="btn btn--white btn--animated">Discover our tours</a>

            </div>
            

        </header>  

        <main>
            <section class="section-about">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div> 
                
                <div class="row">
                    <div class="col-1-of-2">
                        <h3 class="heading-tertiary u-margin-bottom-small"> You're going to fall in love with nature</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique inventore ipsa repellendus voluptate? Nobis veritatis laboriosam aperiam mollitia nostrum, modi fugit eius? Voluptate porro tenetur dignissimos quam iusto reprehenderit.
                        </p>
                        
                        <h3 class="heading-tertiary u-margin-bottom-small"> Live adventures like you never have before</h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam est doloremque ratione id animi facilis! Error recusandae doloribus quas, et, accusantium deserunt expedita iusto autem, 
                        </p>

                        <a href="#" class="btn-text">Learn more &rarr;</a>
                    </div>

                    <div class="col-1-of-2">
                        <div class="composition">

                            <img srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w"
                                 sizes="(max-width: 56.25) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 1" 
                                 class="composition__photo composition__photo--p1"
                                 src="img-nat-1-large.jpg">

                            <img srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w"
                                 sizes="(max-width: 56.25) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 2" 
                                 class="composition__photo composition__photo--p2"
                                 src="img-nat-2-large.jpg">
                            <img srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w"
                                 sizes="(max-width: 56.25) 20vw, (max-width: 37.5em) 30vw, 300px"
                                 alt="Photo 3" 
                                 class="composition__photo composition__photo--p3"
                                 src="img-nat-3-large.jpg">
                                
                           <!--
                            <img src="img/nat-1-large.jpg" alt="Photo-1" class="composition__photo composition__photo--p1">
                            <img src="img/nat-2-large.jpg" alt="Photo-2" class="composition__photo composition__photo--p2">
                            <img src="img/nat-3-large.jpg" alt="Photo-3" class="composition__photo composition__photo--p3">
                           -->
                        </div>
                    </div>                    
                </div>
            </section>

            <section class="section-features">
                
                <div class="row">
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-world"></i>
                            <h3 class=" u-margin-bottom-small heading-tertiary">Explore the world</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique inventore ipsa repellendus voluptate? Nobis veritatis laboriosam aperiam mollitia nostrum, modi fugit eius?
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-compass"></i>
                            <h3 class=" u-margin-bottom-small heading-tertiary">Meet Nature</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique inventore ipsa repellendus voluptate? Nobis veritatis laboriosam aperiam mollitia nostrum, modi fugit eius?
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-map"></i>
                            <h3 class=" u-margin-bottom-small heading-tertiary">Find your way</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique inventore ipsa repellendus voluptate? Nobis veritatis laboriosam aperiam mollitia nostrum, modi fugit eius?
                            </p>
                        </div>
                    </div>

                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-heart"></i>
                            <h3 class=" u-margin-bottom-small heading-tertiary">Live a healthier life</h3>
                            <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique inventore ipsa repellendus voluptate? Nobis veritatis laboriosam aperiam mollitia nostrum, modi fugit eius?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-tours">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Most popular tours
                    </h2>
                </div>
                
                <div class="row">
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                               <div class="card__picture card__picture--1">
                                    &nbsp;
                               </div>
                               
                                <h4 class="card__heading">
                                    <span class="card__heading-span card__heading-span--1">
                                            The sea explorer
                                    </span>
                                    
                                </h4>

                               <div class="card__details">
                                    <ul>
                                        <li>3 day tours</li>
                                        <li>Up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>Sleep in cozy hotels</li>
                                        <li>Difficulty: easy</li>
                                    </ul>
                               </div>
                            </div>

                            <div class="card__side card__side--back card__side--back-1">
                                   <div class="card__cta">
                                       <div class="card__price-box">
                                           <p class="card__price-only">
                                               Only
                                           </p>
                                           <p class="card__price-value">
                                               $297
                                           </p>
                                       </div>
                                       <a href="##popup" class="btn btn--white">Book now!</a>
                                   </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                    <div class="card__picture card__picture--2">
                                            &nbsp;
                                    </div>
                                       
                                        <h4 class="card__heading">
                                            <span class="card__heading-span card__heading-span--2">
                                                    The Forest Hicker
                                            </span>
                                            
                                        </h4>
        
                                       <div class="card__details">
                                            <ul>
                                                <li>7 day tours</li>
                                                <li>Up to 40 people</li>
                                                <li>6 tour guides</li>
                                                <li>Sleep in provided tents</li>
                                                <li>Difficulty: medium</li>
                                            </ul>
                                       </div>
                            </div>
         
                            <div class="card__side card__side--back card__side--back-2">
                                    <div class="card__cta">
                                            <div class="card__price-box">
                                                <p class="card__price-only">
                                                    Only
                                                </p>
                                                <p class="card__price-value">
                                                    $497
                                                </p>
                                            </div>
                                            <a href="#popup" class="btn btn--white">Book now!</a>
                                     </div>
                                </div>
                            </div>
                        </div>
                    <div class="col-1-of-3">
                        <div class="card">
                            <div class="card__side card__side--front">
                                    <div class="card__picture card__picture--3">
                                            &nbsp;
                                    </div>
                                       
                                    <h4 class="card__heading">
                                        <span class="card__heading-span card__heading-span--3">
                                                   The Snow ADventurer
                                        </span>
                                            
                                    </h4>
        
                                    <div class="card__details">
                                        <ul>
                                            <li>5 day tours</li>
                                            <li>Up to 15 people</li>
                                            <li>3 tour guides</li>
                                            <li>Sleep in provided tents</li>
                                            <li>Difficulty: Hard</li>
                                        </ul>
                                    </div>
                            </div>
         
                            <div class="card__side card__side--back card__side--back-3">
                                <div class="card__cta">
                                    <div class="card__price-box">
                                        <p class="card__price-only">
                                             Only
                                        </p>
                                        <p class="card__price-value">
                                             $897
                                        </p>
                                    </div>
                                    <a href="#popup" class="btn btn--white">Book now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="u-center-text u-margin-bottom-big u-margin-top-huge">
                    <a href="#" class="btn btn--green">Discover all tours</a>
                </div>
            </section>

            <section class="section-stories">
                <div class="bg-video">
                    <video class="bg-video__content" autoplay muted loop>
                        <source src="img/video.mp4" type="video/mp4">
                        <source src="img/video.webm" type="video/webm">
                        Your browser is not supported!        
                    </video>
                </div>
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div> 
                
                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img src="img/nat-8.jpg" alt="Person on a tour" class="story__img">
                            <figcaption class="story__caption">
                                Mary Smith
                            </figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">
                                I had the best week ever with my family
                            </h3>
                            <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique inventore ipsa repellendus voluptate? Nobis veritatis laboriosam aperiam mollitia nostrum
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique inventore ipsa repellendus voluptate? Nobis veritatis laboriosam aperiam mollitia nostrum   
                            </p>
                        </div>
                    </div>
                </div>

                <div class="row">
                        <div class="story">
                            <figure class="story__shape">
                                <img src="img/nat-9.jpg" alt="Person on a tour" class="story__img">
                                <figcaption class="story__caption">
                                    Jack Wilson
                                </figcaption>
                            </figure>
                            <div class="story__text">
                                <h3 class="heading-tertiary u-margin-bottom-small">
                                    Wow my life is completely different now
                                </h3>
                                <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique inventore ipsa repellendus voluptate? Nobis veritatis laboriosam aperiam mollitia nostrum
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique inventore ipsa repellendus voluptate? Nobis veritatis laboriosam aperiam mollitia nostrum   
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="u-center-text u-margin-bottom-big u-margin-top-huge">
                            <a href="#" class="btn-text">Read all stories &rarr;</a>
                    </div>
            </section>

            <section class="section-book">
                <div class="row">
                    <div class="book">
                        <div class="book__form">
                            <form action="#" class="form">
                                    <div class="u-margin-bottom-medium">
                                        <h2 class="heading-secondary">
                                            Start Booking Now
                                        </h2>
                                    </div>
                                <div class="form__group">
                                    <input type="text" class="form__input" placeholder="Full name" id="name" required>
                                    <label for="name" class="form__label">Full name</label>
                                </div> 
                                
                                <div class="form__group">
                                        <input type="email" class="form__input" placeholder="Email address" id="email" required>
                                        <label for="email" class="form__label">Email</label>
                                </div> 

                                <div class="form__group u-margin-bottom-medium">
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="small" name="size">
                                        <label for="small" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Small tour group
                                        </label>
                                    </div>

                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="large" name="size">
                                        <label for="large" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div>

                                <div class="form__group">
                                    <button class="btn btn--green">
                                        Next Step &rarr;    
                                    </button>    
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <footer class="footer">
            <div class="footer__logo-box">

                <picture class="footer__logo">
                        <source srcset="img/logo-green-small-1x.png 1x, img/logo-green-small-2x.png 2x" 
                                media="(max-width: 37.5em)">
                        <img srcset="img/logo-green-1x.png 1x, img/logo-green-2x.png 2x" alt="Full logo" src="img/logo-green-2x.png">
                </picture>

                
            </div>

            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Carrers</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Privacy policy</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-1-of-2">
                    <p class="footer__copytight">
                        Built by <a href="#" class="footer__link">Pela 747</a> for my online course <a href="#" class="footer__link">Advanced Css and Sass</a>. Copyright &copy; by Pela 747. You are 100% allowed to use this webpade for both personal and commercial use, but not to claim it as your own design. A credit to the original author is of course highly appreciated!
                    </p>
                </div>
            </div>
        </footer>

        <div class="popup" id="popup">
            <div class="popup__content">
                <div class="popup__left">
                    <img src="img/nat-8.jpg" alt="Tour photo" class="popup__img">
                    <img src="img/nat-9.jpg" alt="Tour photo" class="popup__img">

                </div>
                <div class="popup__right">
                        <a href="#section-tours" class="popup__close">&times;</a>
                        <h2 class="heading-secondary u-margin-bottom-small">Start booking now</h2>
                        <h3 class="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                        <p class="popup__text">
                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus reprehenderit obcaecati voluptatibus repudiandae nobis veritatis, animi dolor molestiae iure dolores vero sunt rerum, soluta quos quis eaque aspernatur ipsum?
                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus reprehenderit obcaecati voluptatibus repudiandae nobis veritatis, animi dolor molestiae iure dolores vero sunt rerum, soluta quos quis eaque aspernatur ipsum?
                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ducimus reprehenderit obcaecati voluptatibus repudiandae nobis veritatis, animi dolor molestiae iure dolores vero sunt rerum, soluta quos quis eaque aspernatur ipsum?
                        </p>
        
                        <a href="#" class="btn btn--green">Book now</a>            
                </div>
            </div>
        </div>
        <!--
        <section class="grid-test">
            <div class="row">
                <div class="col-1-of-2">
                    Col 1 of 2
                </div>
                <div class="col-1-of-2">
                    Col 1 of 2
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-3">
                    Col 1 of 3
                </div>
                <div class="col-2-of-3">
                    Col 2 of 3
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
            </div>

            <div class="row">
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-2-of-4">
                    Col 2 of 4
                </div>
            </div>
            <div class="row">
                <div class="col-1-of-4">
                    Col 1 of 4
                </div>
                <div class="col-3-of-4">
                    Col 3 of 4
                </div>
            </div>
        </section>
    -->
    </body>
</html>
