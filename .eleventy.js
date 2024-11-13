module.exports = function(eleventyConfig) {
     eleventyConfig.addWatchTarget("./_srd/sass/");
     return {
          dir: {
          input: "_src"
          }
     }
}