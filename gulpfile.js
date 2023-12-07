const gulp = require("gulp");
const shell = require("gulp-shell");
const workbox = require("workbox-build");

gulp.task("hugo-build", shell.task(["hugo --minify"])); // this can change depending on which static generator you are using.

gulp.task("generate-service-worker", () => {
  return workbox.generateSW({
    cacheId: "yourCacheID",
    globDirectory: "./public", // the directory where static file is stored
    swDest: "./public/sw.js", // destination of sw.js file
    globPatterns: ["**/*.{js,css,html}"],
    navigateFallback: "/404.html", // fallback file
    globIgnores: ["**/index.xml", "**/index.json", "**/sitemap.xml"],
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
        handler: "CacheFirst",
      },
      {
        urlPattern: /\.(?:json|xml)$/,
        handler: "NetworkOnly",
      },
    ],
  });
});

gulp.task("build", gulp.series("hugo-build", "generate-service-worker"));