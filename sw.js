/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "94bfea951ec71288c300e72d74280a10"
  },
  {
    "url": "manifest.json",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "style.css",
    "revision": "63b671f8b6f4001085e719bddf7e1a09"
  },
  {
    "url": "voice.html",
    "revision": "1df594a4790d5c699268f2d639bc00fd"
  },
  {
    "url": "workbox-config.js",
    "revision": "8cf6c78b76a7b7928e3f4b148a1cc21f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
