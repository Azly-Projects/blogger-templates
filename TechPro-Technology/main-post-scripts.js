$(document).ready(function () {
  setInterval(function () {
    if (!$("#mycontent:visible").length) {
      window.location.href = "http://www.templatesyard.com/";
    }
  }, 3e3);
});
window.onload = function () {
  var mickelina = document.getElementById("mycontent");
  mickelina.setAttribute("href", "http://www.templatesyard.com/");
  mickelina.setAttribute("rel", "dofollow");
  mickelina.setAttribute("title", "Free Blogger Templates");
  mickelina.setAttribute(
    "style",
    "display: inline-block!important; font-size: inherit!important; color: #0088ff!important; visibility: visible!important;z-index:99!important; opacity: 1!important;"
  );
  mickelina.innerHTML = "TemplatesYard";
};
$(document).ready(function (torance) {
  var joyleen = -1,
    o = "",
    korrey = "";
  torance("#menu")
    .find("ul")
    .find("li")
    .each(function () {
      for (
        var kalley = torance(this).text(),
          symaya = torance(this).find("a").attr("href"),
          kerith = 0,
          erlene = 0;
        erlene < kalley.length &&
        ((kerith = kalley.indexOf("_", kerith)), -1 != kerith);
        erlene++
      ) {
        kerith++;
      }
      if (
        ((level = erlene),
        level > joyleen && ((o += "<ul>"), (korrey += "<ul>")),
        level < joyleen)
      ) {
        offset = joyleen - level;
        for (var erlene = 0; erlene < offset; erlene++) {
          (o += "</ul></li>"), (korrey += "</ul></li>");
        }
      }
      (kalley = kalley.replace(/_/gi, "")),
        (o += "<li><a href='" + symaya + "'>" + kalley + "</a>"),
        (korrey += "<li><a href='" + symaya + "'>");
      for (var erlene = 0; erlene < level; erlene++) {
        korrey += "";
      }
      (korrey += kalley + "</a>"), (joyleen = level);
    });
  for (var missie = 0; joyleen >= missie; missie++) {
    (o += "</ul>"),
      (korrey += "</ul>"),
      0 != missie && ((o += "</li>"), (korrey += "</li>"));
  }
  torance("#menu .LinkList").html(korrey),
    torance("#menu > .LinkList > ul").attr("id", "nav1"),
    selectnav("nav1"),
    torance("#menu ul > li > ul").parent("li").addClass("parent"),
    torance("#menu .widget").attr("style", "display:block!important;");
});
$(document).ready(function (melena) {
  melena("abbr.timeago").timeago();
});
$(document).ready(function () {
  $(".header-search > .fa-search").click(function () {
    $(".tm-menu .search-form").slideDown("", function () {});
    $(".header-search > .fa-search").toggleClass("active");
    $(".header-search > .fa-times").toggleClass("active");
  });
  $(".header-search > .fa-times").click(function () {
    $(".tm-menu .search-form").slideUp("", function () {});
    $(".header-search > .fa-search").toggleClass("active");
    $(".header-search > .fa-times").toggleClass("active");
  });
  selectnav("nav");
  selectnav("nav2");
});
$(document).ready(function () {
  $(".ty-ran-yard span").each(function () {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script",
      type: "get",
      dataType: "jsonp",
      success: function (chrishea) {
        (chrishea = chrishea.feed.entry.length - 3),
          (chrishea = Math.floor(Math.random() * (chrishea - 0 + 1)) + 0),
          0 == chrishea &&
            (chrishea = Math.floor(Math.random() * (chrishea - 0 + 1)) + 1),
          chrishea == 0 && chrishea == 1,
          $.ajax({
            url:
              "/feeds/posts/default?alt=json-in-script&start-index=" +
              chrishea +
              "&max-results=1",
            type: "get",
            dataType: "jsonp",
            success: function (kahleesi) {
              var emanie = "";
              var rhanda = "";
              for (
                var lianna = 0;
                lianna < kahleesi.feed.entry.length;
                lianna++
              ) {
                for (
                  var demaurio = 0;
                  demaurio < kahleesi.feed.entry[lianna].link.length;
                  demaurio++
                ) {
                  if (
                    kahleesi.feed.entry[lianna].link[demaurio].rel ==
                    "alternate"
                  ) {
                    emanie = kahleesi.feed.entry[lianna].link[demaurio].href;
                    break;
                  }
                }
                rhanda += '<a class="ran-sym" href="' + emanie + '"></a>';
              }
              $(".ty-ran-yard span").html(rhanda);
            },
          });
      },
    });
  });
});
$(".ticker .HTML .widget-content").each(function () {
  var marlyna = $(this).find("span").attr("data-no") || "",
    robertjohn = $(this).find("span").attr("data-label") || "",
    lamiyah = $(this).find("span").attr("data-type") || "";
  if (lamiyah != undefined && lamiyah.match("recent")) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&max-results=" + marlyna,
      type: "get",
      dataType: "jsonp",
      success: function (emmaneul) {
        var u = "";
        var olton = '<ul id="ticker">';
        for (var life = 0; life < emmaneul.feed.entry.length; life++) {
          for (
            var janyl = 0;
            janyl < emmaneul.feed.entry[life].link.length;
            janyl++
          ) {
            if (emmaneul.feed.entry[life].link[janyl].rel == "alternate") {
              u = emmaneul.feed.entry[life].link[janyl].href;
              break;
            }
          }
          var hanani = emmaneul.feed.entry[life].title.$t;
          var yarexy = emmaneul.feed.entry[life].content.$t;
          var tajee = $("<div>").html(yarexy);
          if (yarexy.indexOf("//www.youtube.com/embed/") > -1) {
            var jayslin = emmaneul.feed.entry[life].media$thumbnail.url.replace(
              "/default.jpg",
              "/mqdefault.jpg"
            );
            var lamark = jayslin;
          } else {
            if (yarexy.indexOf("<img") > -1) {
              var yitel = tajee
                .find("img:first")
                .attr("src")
                .replace("s72-c", "s1600");
              var lamark = yitel;
            } else {
              var lamark = no_image;
            }
          }
          olton +=
            '<li><div class="tk-thumb"><a class="tk-img" href="' +
            u +
            '" style="background:url(' +
            lamark +
            ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><h3 class="tyard-title"><a href="' +
            u +
            '">' +
            hanani +
            "</a></h3></li>";
        }
        olton += "</ul>";
        $(".ticker .widget-content").each(function () {
          $(this).html(olton);
          $(this).prev("h2").wrapInner("<span></span>");
        });
      },
    });
  } else {
    if (lamiyah.match("label")) {
      $.ajax({
        url:
          "/feeds/posts/default/-/" +
          robertjohn +
          "?alt=json-in-script&max-results=" +
          marlyna,
        type: "get",
        dataType: "jsonp",
        success: function (trinisa) {
          var u = "";
          var mirle = '<ul id="ticker">';
          for (
            var kaitlen = 0;
            kaitlen < trinisa.feed.entry.length;
            kaitlen++
          ) {
            for (
              var maridee = 0;
              maridee < trinisa.feed.entry[kaitlen].link.length;
              maridee++
            ) {
              if (
                trinisa.feed.entry[kaitlen].link[maridee].rel == "alternate"
              ) {
                u = trinisa.feed.entry[kaitlen].link[maridee].href;
                break;
              }
            }
            var sheenna = trinisa.feed.entry[kaitlen].title.$t;
            var shadrach = trinisa.feed.entry[kaitlen].content.$t;
            var krizal = $("<div>").html(shadrach);
            if (shadrach.indexOf("//www.youtube.com/embed/") > -1) {
              var jaylisa = trinisa.feed.entry[
                kaitlen
              ].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
              var sinnie = jaylisa;
            } else {
              if (shadrach.indexOf("<img") > -1) {
                var okeima = krizal
                  .find("img:first")
                  .attr("src")
                  .replace("s72-c", "s1600");
                var sinnie = okeima;
              } else {
                var sinnie = no_image;
              }
            }
            mirle +=
              '<li><div class="tk-thumb"><a class="tk-img" href="' +
              u +
              '" style="background:url(' +
              sinnie +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              sheenna +
              "</a></h3></li>";
          }
          mirle += "</ul>";
          $(".ticker .HTML .widget-content").each(function () {
            $(this).html(mirle);
            $(this).prev("h2").wrapInner("<span></span>");
          });
        },
      });
    } else {
      $(".news-tick-wrap").remove();
    }
  }
});
$(document).ready(function () {
  $("#ticker").tickerme();
  $(".sidebar h2,.lowerbar h2").wrap('<div class="widget-title"></div>');
});
$(".featured .HTML .widget-content").each(function () {
  var kamryn = $(this).prev("h2").text(),
    sharonica = $(this).find("span").attr("data-label");
  (tyard = $(this).parent().attr("id")),
    (box = $(this).find("span").attr("data-type"));
  if (box != undefined && box.match("tyard-recent")) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&max-results=3",
      type: "get",
      dataType: "jsonp",
      success: function (rechard) {
        var u = "";
        var willavene = '<div class="ty-feat">';
        for (
          var laphonso = 0;
          laphonso < rechard.feed.entry.length;
          laphonso++
        ) {
          for (
            var mahdi = 0;
            mahdi < rechard.feed.entry[laphonso].link.length;
            mahdi++
          ) {
            if (rechard.feed.entry[laphonso].link[mahdi].rel == "alternate") {
              u = rechard.feed.entry[laphonso].link[mahdi].href;
              break;
            }
          }
          var lillyjo;
          for (
            var jalaiah = 0;
            jalaiah < rechard.feed.entry[laphonso].link.length;
            jalaiah++
          ) {
            if (
              rechard.feed.entry[laphonso].link[jalaiah].rel === "replies" &&
              rechard.feed.entry[laphonso].link[jalaiah].type === "text/html"
            ) {
              lillyjo = rechard.feed.entry[laphonso].link[jalaiah].title;
              break;
            }
          }
          lillyjo = parseInt(lillyjo, 10);
          if ("content" in rechard.feed.entry[laphonso]) {
            var tyree = rechard.feed.entry[laphonso].content.$t;
          } else {
            if ("summary" in b_rc) {
              var tyree = rechard.feed.entry[laphonso].summary.$t;
            } else {
              var tyree = "";
            }
          }
          var odalyz = /<\S[^>]*>/g;
          (tyree = tyree.replace(odalyz, "")),
            tyree.length > 120 &&
              (tyree = "" + tyree.substring(0, 100) + "...");
          var cirenia = rechard.feed.entry[laphonso].title.$t;
          var s = rechard.feed.entry[laphonso].category[0].term;
          var adriella = rechard.feed.entry[laphonso].author[0].name.$t;
          var savanah = rechard.feed.entry[laphonso].author[0].gd$image.src;
          var myeasha = rechard.feed.entry[laphonso].published.$t,
            camina = myeasha.substring(0, 4),
            dilynn = myeasha.substring(5, 7),
            dearrius = myeasha.substring(8, 10),
            ryunosuke =
              month_format[parseInt(dilynn, 10)] +
              " " +
              dearrius +
              ", " +
              camina;
          var inayah = rechard.feed.entry[laphonso].content.$t;
          var neya = $("<div>").html(inayah);
          if (inayah.indexOf("//www.youtube.com/embed/") > -1) {
            var gerilyn = rechard.feed.entry[laphonso].media$thumbnail.url;
            var jalaiah = gerilyn;
          } else {
            if (inayah.indexOf("<img") > -1) {
              var lacole = neya.find("img:first").attr("src");
              var jalaiah = lacole;
            } else {
              var jalaiah = no_image;
            }
          }
          if (laphonso == 0) {
            willavene +=
              '<div class="ty-first"><div class="ty-feat-image"><div class="tyard-thumb"><a class="ty-img" href="' +
              u +
              '" style="background:url(' +
              jalaiah +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="ty-con-yard"><div class="yard-label"><a class="icon ' +
              s +
              '" href="/search/label/' +
              s +
              "?&amp;max-result=" +
              perPage +
              '">' +
              s +
              '</a></div><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              cirenia +
              '</a></h3><span class="yard-auth-ty">' +
              adriella +
              '</span><span class="ty-time">' +
              ryunosuke +
              "</span></div></div></div>";
          } else {
            willavene +=
              '<div class="ty-rest-wrap"><div class="ty-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
              u +
              '" style="background:url(' +
              jalaiah +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><div class="yard-label"><a class="icon ' +
              s +
              '" href="/search/label/' +
              s +
              "?&amp;max-result=" +
              perPage +
              '">' +
              s +
              '</a></div><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              cirenia +
              '</a></h3><span class="yard-auth-ty">' +
              adriella +
              '</span><span class="ty-time">' +
              ryunosuke +
              '</span></div><div class="clear"/></div></div>';
          }
        }
        willavene += "</div>";
        $(".featured .HTML .widget-content").each(function () {
          var mircale = $(this).parent().attr("id");
          if (mircale == tyard) {
            $(this).html(willavene);
            $(this).parent().addClass("tyard");
            $(this).parent().addClass("templatesyard");
            $(".featured").addClass("comload").removeClass("preload");
            $(".featured h2").remove();
            $(this)
              .find(".yard-img,.ty-img")
              .each(function () {
                $(this)
                  .attr("style", function (keyanah, erman) {
                    return erman.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (labon, arirose) {
                    return arirose.replace("s72-c", "s1600");
                  });
              });
          }
        });
      },
    });
  } else {
    if (box != undefined && box.match("tyard-label")) {
      $.ajax({
        url:
          "/feeds/posts/default/-/" +
          sharonica +
          "?alt=json-in-script&max-results=5",
        type: "get",
        dataType: "jsonp",
        success: function (shinaya) {
          var u = "";
          var baer = '<div class="ty-feat">';
          for (
            var abubaker = 0;
            abubaker < shinaya.feed.entry.length;
            abubaker++
          ) {
            for (
              var dequantez = 0;
              dequantez < shinaya.feed.entry[abubaker].link.length;
              dequantez++
            ) {
              if (
                shinaya.feed.entry[abubaker].link[dequantez].rel == "alternate"
              ) {
                u = shinaya.feed.entry[abubaker].link[dequantez].href;
                break;
              }
            }
            var nazirah;
            for (
              var gara = 0;
              gara < shinaya.feed.entry[abubaker].link.length;
              gara++
            ) {
              if (
                shinaya.feed.entry[abubaker].link[gara].rel === "replies" &&
                shinaya.feed.entry[abubaker].link[gara].type === "text/html"
              ) {
                nazirah = shinaya.feed.entry[abubaker].link[gara].title;
                break;
              }
            }
            nazirah = parseInt(nazirah, 10);
            if ("content" in shinaya.feed.entry[abubaker]) {
              var anyely = shinaya.feed.entry[abubaker].content.$t;
            } else {
              if ("summary" in b_rc) {
                var anyely = shinaya.feed.entry[abubaker].summary.$t;
              } else {
                var anyely = "";
              }
            }
            var ptolemy = /<\S[^>]*>/g;
            (anyely = anyely.replace(ptolemy, "")),
              anyely.length > 120 &&
                (anyely = "" + anyely.substring(0, 100) + "...");
            var thanhphong = shinaya.feed.entry[abubaker].title.$t;
            var s = shinaya.feed.entry[abubaker].category[0].term;
            var danika = shinaya.feed.entry[abubaker].author[0].name.$t;
            var malillani = shinaya.feed.entry[abubaker].author[0].gd$image.src;
            var paytin = shinaya.feed.entry[abubaker].published.$t,
              saanya = paytin.substring(0, 4),
              sai = paytin.substring(5, 7),
              natay = paytin.substring(8, 10),
              koffi =
                month_format[parseInt(sai, 10)] + " " + natay + ", " + saanya;
            var russella = shinaya.feed.entry[abubaker].content.$t;
            var tonie = $("<div>").html(russella);
            if (russella.indexOf("//www.youtube.com/embed/") > -1) {
              var jasonjr = shinaya.feed.entry[abubaker].media$thumbnail.url;
              var gara = jasonjr;
            } else {
              if (russella.indexOf("<img") > -1) {
                var jezlyn = tonie.find("img:first").attr("src");
                var gara = jezlyn;
              } else {
                var gara = no_image;
              }
            }
            if (abubaker == 0) {
              baer +=
                '<div class="ty-first"><div class="ty-feat-image"><div class="tyard-thumb"><a class="ty-img" href="' +
                u +
                '" style="background:url(' +
                gara +
                ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="ty-con-yard"><div class="yard-label"><a class="icon ' +
                s +
                '" href="/search/label/' +
                s +
                "?&amp;max-result=" +
                perPage +
                '">' +
                s +
                '</a></div><h3 class="tyard-title"><a href="' +
                u +
                '">' +
                thanhphong +
                '</a></h3><span class="yard-auth-ty">' +
                danika +
                '</span><span class="ty-time">' +
                koffi +
                '</span><p class="recent-summary">' +
                anyely +
                "</p></div></div></div>";
            } else {
              baer +=
                '<div class="ty-rest-wrap"><div class="ty-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
                u +
                '" style="background:url(' +
                gara +
                ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><div class="yard-label"><a class="icon ' +
                s +
                '" href="/search/label/' +
                s +
                "?&amp;max-result=" +
                perPage +
                '">' +
                s +
                '</a></div><h3 class="tyard-title"><a href="' +
                u +
                '">' +
                thanhphong +
                '</a></h3><span class="yard-auth-ty">' +
                danika +
                '</span><span class="ty-time">' +
                koffi +
                '</span><p class="recent-summary">' +
                anyely +
                '</p></div><div class="clear"/></div></div>';
            }
          }
          baer += "</div>";
          $(".featured .HTML .widget-content").each(function () {
            var damien = $(this).parent().attr("id");
            if (damien == tyard) {
              $(this).html(baer);
              $(this).parent().addClass("tyard");
              $(this).parent().addClass("templatesyard");
              $(".featured").addClass("comload").removeClass("preload");
              $(".featured h2").remove();
              $(this)
                .find(".yard-img,.ty-img")
                .each(function () {
                  $(this)
                    .attr("style", function (abhijeet, lariesha) {
                      return lariesha.replace("/default.jpg", "/mqdefault.jpg");
                    })
                    .attr("style", function (mali, annas) {
                      return annas.replace("s72-c", "s1600");
                    });
                });
            }
          });
        },
      });
    } else {
      $(".tyard-wrapper").remove();
    }
  }
});
$(".ty-slide-show .HTML .widget-content").each(function () {
  var suveer = $(this).prev("h2").text(),
    shanik = $(this).find("span").attr("data-label"),
    datreon = $(this).find("span").attr("data-no"),
    nastia = $(this).parent().attr("id"),
    eztli = $(this).find("span").attr("data-type");
  if (eztli != undefined && eztli.match("ty-latest-slide")) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&max-results=" + datreon,
      type: "get",
      dataType: "jsonp",
      success: function (ogden) {
        var u = "";
        var princedavid =
          '<div class="ty-slide"><ul class="slides owl-carousel">';
        for (var derrik = 0; derrik < ogden.feed.entry.length; derrik++) {
          for (
            var margaree = 0;
            margaree < ogden.feed.entry[derrik].link.length;
            margaree++
          ) {
            if (ogden.feed.entry[derrik].link[margaree].rel == "alternate") {
              u = ogden.feed.entry[derrik].link[margaree].href;
              break;
            }
          }
          var shloime;
          for (
            var hurchel = 0;
            hurchel < ogden.feed.entry[derrik].link.length;
            hurchel++
          ) {
            if (
              ogden.feed.entry[derrik].link[hurchel].rel === "replies" &&
              ogden.feed.entry[derrik].link[hurchel].type === "text/html"
            ) {
              shloime = ogden.feed.entry[derrik].link[hurchel].title;
              break;
            }
          }
          shloime = parseInt(shloime, 10);
          if ("content" in ogden.feed.entry[derrik]) {
            var walfrid = ogden.feed.entry[derrik].content.$t;
          } else {
            if ("summary" in b_rc) {
              var walfrid = ogden.feed.entry[derrik].summary.$t;
            } else {
              var walfrid = "";
            }
          }
          var jahshaun = /<\S[^>]*>/g;
          (walfrid = walfrid.replace(jahshaun, "")),
            walfrid.length > 170 &&
              (walfrid = "" + walfrid.substring(0, 250) + "...");
          var daniqua = ogden.feed.entry[derrik].title.$t;
          var s = ogden.feed.entry[derrik].category[0].term;
          var lemarion = ogden.feed.entry[derrik].author[0].name.$t;
          var aarvik = ogden.feed.entry[derrik].author[0].gd$image.src;
          var malikaih = ogden.feed.entry[derrik].published.$t,
            joram = malikaih.substring(0, 4),
            claresa = malikaih.substring(5, 7),
            milei = malikaih.substring(8, 10),
            afshan =
              month_format[parseInt(claresa, 10)] + " " + milei + ", " + joram;
          var jocinda = ogden.feed.entry[derrik].content.$t;
          var emiliani = $("<div>").html(jocinda);
          if (jocinda.indexOf("//www.youtube.com/embed/") > -1) {
            var euzelia = ogden.feed.entry[derrik].media$thumbnail.url;
            var hurchel = euzelia;
          } else {
            if (jocinda.indexOf("<img") > -1) {
              var liron = emiliani.find("img:first").attr("src");
              var hurchel = liron;
            } else {
              var hurchel = no_image;
            }
          }
          princedavid +=
            '<li><div class="ty-wow"><a class="ty-thumb-bonos" href="' +
            u +
            '"><img alt="' +
            daniqua +
            '" src="' +
            hurchel +
            '"/><span class="tyimg-lay"/></a><div class="ty-slide-con"><div class="ty-slide-con"><div class="ty-slide-con-tab"><h3 class="ty-bonos-entry"><a href="' +
            u +
            '">' +
            daniqua +
            '</a></h3><div class="ty-slide-meta-tab"><span class="recent-auth">' +
            lemarion +
            '</span><span class="recent-date">' +
            afshan +
            "</span></div></div></div></div></div></li>";
        }
        princedavid += "</ul></div>";
        $(".ty-slide-show .HTML .widget-content").each(function () {
          var elisbeth = $(this).parent().attr("id");
          if (elisbeth == nastia) {
            $(this).html(princedavid);
            $(this).parent().addClass("tslide");
            $(this).parent().addClass("templatesyard");
            $(this)
              .prev("h2")
              .html(
                '<a href="/search?&amp;max-result=' +
                  perPage +
                  '">' +
                  s +
                  "</a>"
              );
            $(this).prev("h2").remove();
            $(".ty-slide-show").addClass("comload").removeClass("preload");
            $(this)
              .find(".yard-img,.ty-img")
              .each(function () {
                $(this)
                  .attr("style", function (tashawnda, tequila) {
                    return tequila.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (malley, allye) {
                    return allye.replace("s72-c", "s1600");
                  });
              });
          }
        });
      },
    });
  } else {
    if (eztli != undefined && eztli.match("ty-tag-slide")) {
      $.ajax({
        url:
          "/feeds/posts/default/-/" +
          shanik +
          "?alt=json-in-script&max-results=" +
          datreon,
        type: "get",
        dataType: "jsonp",
        success: function (kallin) {
          var u = "";
          var keadyn = '<div class="ty-slide"><ul class="slides owl-carousel">';
          for (var sumio = 0; sumio < kallin.feed.entry.length; sumio++) {
            for (
              var alashia = 0;
              alashia < kallin.feed.entry[sumio].link.length;
              alashia++
            ) {
              if (kallin.feed.entry[sumio].link[alashia].rel == "alternate") {
                u = kallin.feed.entry[sumio].link[alashia].href;
                break;
              }
            }
            var aalayna;
            for (
              var morgan = 0;
              morgan < kallin.feed.entry[sumio].link.length;
              morgan++
            ) {
              if (
                kallin.feed.entry[sumio].link[morgan].rel === "replies" &&
                kallin.feed.entry[sumio].link[morgan].type === "text/html"
              ) {
                aalayna = kallin.feed.entry[sumio].link[morgan].title;
                break;
              }
            }
            aalayna = parseInt(aalayna, 10);
            if ("content" in kallin.feed.entry[sumio]) {
              var skylynne = kallin.feed.entry[sumio].content.$t;
            } else {
              if ("summary" in b_rc) {
                var skylynne = kallin.feed.entry[sumio].summary.$t;
              } else {
                var skylynne = "";
              }
            }
            var andia = /<\S[^>]*>/g;
            (skylynne = skylynne.replace(andia, "")),
              skylynne.length > 270 &&
                (skylynne = "" + skylynne.substring(0, 250) + "...");
            var sharayne = kallin.feed.entry[sumio].title.$t;
            var s = kallin.feed.entry[sumio].category[0].term;
            var herby = kallin.feed.entry[sumio].author[0].name.$t;
            var zaahira = kallin.feed.entry[sumio].author[0].gd$image.src;
            var jahde = kallin.feed.entry[sumio].published.$t,
              megghan = jahde.substring(0, 4),
              thilo = jahde.substring(5, 7),
              alcine = jahde.substring(8, 10),
              gabriel =
                month_format[parseInt(thilo, 10)] +
                " " +
                alcine +
                ", " +
                megghan;
            var lajuana = kallin.feed.entry[sumio].content.$t;
            var tyreshia = $("<div>").html(lajuana);
            if (lajuana.indexOf("//www.youtube.com/embed/") > -1) {
              var mico = kallin.feed.entry[sumio].media$thumbnail.url;
              var morgan = mico;
            } else {
              if (lajuana.indexOf("<img") > -1) {
                var orlandrea = tyreshia.find("img:first").attr("src");
                var morgan = orlandrea;
              } else {
                var morgan = no_image;
              }
            }
            keadyn +=
              '<li><div class="ty-wow"><a class="ty-thumb-bonos" href="' +
              u +
              '"><img alt="' +
              sharayne +
              '" src="' +
              morgan +
              '"/><span class="tyimg-lay"/></a><div class="ty-slide-con"><div class="ty-slide-con"><div class="ty-slide-con-tab"><h3 class="ty-bonos-entry"><a href="' +
              u +
              '">' +
              sharayne +
              '</a></h3><div class="ty-slide-meta-tab"><span class="recent-auth">' +
              herby +
              '</span><span class="recent-date">' +
              gabriel +
              "</span></div></div></div></div></div></li>";
          }
          keadyn += "</ul></div>";
          $(".ty-slide-show .HTML .widget-content").each(function () {
            var jammar = $(this).parent().attr("id");
            if (jammar == nastia) {
              $(this).html(keadyn);
              $(this).parent().addClass("tslide");
              $(this).parent().addClass("templatesyard");
              $(this)
                .prev("h2")
                .html(
                  '<a href="/search/label/' +
                    s +
                    "?&amp;max-result=" +
                    perPage +
                    '">' +
                    s +
                    "</a>"
                );
              $(this).prev("h2").remove();
              $(".ty-slide-show").addClass("comload").removeClass("preload");
              $(this)
                .find(".yard-img,.ty-img")
                .each(function () {
                  $(this)
                    .attr("style", function (teyla, khawlah) {
                      return khawlah.replace("/default.jpg", "/mqdefault.jpg");
                    })
                    .attr("style", function (jahzaria, ardyce) {
                      return ardyce.replace("s72-c", "s1600");
                    });
                });
            }
          });
        },
      });
    } else {
      $(".feat-slider-wrap").remove();
    }
  }
});
$(".featured-box .HTML .widget-content").each(function () {
  var joron = $(this).prev("h2").text(),
    mariagabriela = $(this).find("span").attr("data-label"),
    lanasia = $(this).parent().attr("id"),
    flarence = $(this).find("span").attr("data-type");
  if (flarence != undefined && flarence.match("tybox")) {
    $.ajax({
      url:
        "/feeds/posts/default/-/" +
        mariagabriela +
        "?alt=json-in-script&max-results=3",
      type: "get",
      dataType: "jsonp",
      success: function (niaa) {
        var u = "";
        var blaiden = '<div class="ty-feat">';
        for (var erkhes = 0; erkhes < niaa.feed.entry.length; erkhes++) {
          for (
            var alynia = 0;
            alynia < niaa.feed.entry[erkhes].link.length;
            alynia++
          ) {
            if (niaa.feed.entry[erkhes].link[alynia].rel == "alternate") {
              u = niaa.feed.entry[erkhes].link[alynia].href;
              break;
            }
          }
          var ziarre;
          for (
            var izea = 0;
            izea < niaa.feed.entry[erkhes].link.length;
            izea++
          ) {
            if (
              niaa.feed.entry[erkhes].link[izea].rel === "replies" &&
              niaa.feed.entry[erkhes].link[izea].type === "text/html"
            ) {
              ziarre = niaa.feed.entry[erkhes].link[izea].title;
              break;
            }
          }
          ziarre = parseInt(ziarre, 10);
          if ("content" in niaa.feed.entry[erkhes]) {
            var christle = niaa.feed.entry[erkhes].content.$t;
          } else {
            if ("summary" in b_rc) {
              var christle = niaa.feed.entry[erkhes].summary.$t;
            } else {
              var christle = "";
            }
          }
          var petey = /<\S[^>]*>/g;
          (christle = christle.replace(petey, "")),
            christle.length > 170 &&
              (christle = "" + christle.substring(0, 150) + "...");
          var durane = niaa.feed.entry[erkhes].title.$t;
          var s = niaa.feed.entry[erkhes].category[0].term;
          var ravenel = niaa.feed.entry[erkhes].author[0].name.$t;
          var atricia = niaa.feed.entry[erkhes].author[0].gd$image.src;
          var marvyn = niaa.feed.entry[erkhes].published.$t,
            tashonna = marvyn.substring(0, 4),
            emmee = marvyn.substring(5, 7),
            jaxel = marvyn.substring(8, 10),
            hudsyn =
              month_format[parseInt(emmee, 10)] + " " + jaxel + ", " + tashonna;
          var chadarius = niaa.feed.entry[erkhes].content.$t;
          var joshuel = $("<div>").html(chadarius);
          if (chadarius.indexOf("//www.youtube.com/embed/") > -1) {
            var tawfiq = niaa.feed.entry[erkhes].media$thumbnail.url;
            var izea = tawfiq;
          } else {
            if (chadarius.indexOf("<img") > -1) {
              var cornel = joshuel.find("img:first").attr("src");
              var izea = cornel;
            } else {
              var izea = no_image;
            }
          }
          if (erkhes == 0) {
            blaiden +=
              '<div class="tybox-rest first-box"><div class="first-box-wrp"><div class="tyard-thumb"><a class="yard-img" href="' +
              u +
              '" style="background:url(' +
              izea +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><div class="yard-label"><a class="icon ' +
              s +
              '" href="/search/label/' +
              s +
              "?&amp;max-result=" +
              perPage +
              '">' +
              s +
              '</a></div><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              durane +
              '</a></h3><span class="yard-auth-ty">' +
              ravenel +
              '</span><span class="tybox-time">' +
              hudsyn +
              "</span></div></div></div>";
          } else {
            blaiden +=
              '<div class="tybox-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
              u +
              '" style="background:url(' +
              izea +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              durane +
              '</a></h3><span class="yard-auth-ty">' +
              ravenel +
              '</span><span class="tybox-time">' +
              hudsyn +
              "</span></div></div>";
          }
        }
        blaiden += "</div>";
        $(".featured-box .HTML .widget-content").each(function () {
          var yolandia = $(this).parent().attr("id");
          if (yolandia == lanasia) {
            $(this).html(blaiden);
            $(this).parent().addClass("tybox");
            $(this).parent().addClass("templatesyard");
            $(this).prev("h2").wrap('<div class="tyheading-head"></div>');
            $(this)
              .prev(".tyheading-head")
              .append(
                '<div class="tyheading-head-inner"><a class="tymore" href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '">' +
                  more_text +
                  "</a></div>"
              );
            $(".featured-box").addClass("comload").removeClass("preload");
            $(this)
              .find(".yard-img,.ty-img")
              .each(function () {
                $(this)
                  .attr("style", function (jeneice, kinzer) {
                    return kinzer.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (steely, olijah) {
                    return olijah.replace("s72-c", "s1600");
                  });
              });
          }
        });
      },
    });
  }
});
$(document).ready(function () {
  var valerian = $("#tyboxtabs #featuredbox1 .widget h2").text();
  $(".box-menu-tab .item-4 .box-head-title a").text(valerian);
  var u = $("#tyboxtabs #featuredbox2 .widget h2").text();
  $(".box-menu-tab .item-5 .box-head-title a").text(u);
  var waverly = $("#tyboxtabs #featuredbox3 .widget h2").text();
  $(".box-menu-tab .item-6 .box-head-title a").text(waverly);
  var taisia = $(
    "#tyboxtabs #featuredbox1 .widget .tyheading-head .tyheading-head-inner"
  ).html();
  $(".box-menu-tab .item-4 .box-head-more").html(taisia);
  var miyonna = $(
    "#tyboxtabs #featuredbox2 .widget .tyheading-head .tyheading-head-inner"
  ).html();
  $(".box-menu-tab .item-5 .box-head-more").html(miyonna);
  var evergreen = $(
    "#tyboxtabs #featuredbox3 .widget .tyheading-head .tyheading-head-inner"
  ).html();
  $(".box-menu-tab .item-6 .box-head-more").html(evergreen);
  $(
    "#featuredbox1 .widget h2,#featuredbox2 .widget h2,#featuredbox3 .widget h2,#featuredbox1 .widget-title,#featuredbox2 .widget-title,#featuredbox3 .widget-title"
  ).remove();
  $(
    "#featuredbox1 .widget  .tyheading-head,#featuredbox2 .widget  .tyheading-head,#featuredbox3 .widget  .tyheading-head"
  ).remove();
  $(this).find(".box-menu-tab li").addClass("hide-tab");
  $(".tyboxtabs").tabslet({
    mouseevent: "click",
    attribute: "href",
    animation: true,
  });
  if (0 === $(".tyboxtabs .widget").length) {
    $(".tyboxtabs").remove();
  }
});
$(".featured-list .HTML .widget-content").each(function () {
  var avira = $(this).prev("h2").text(),
    shuban = $(this).find("span").attr("data-label"),
    mozel = $(this).parent().attr("id"),
    hetal = $(this).find("span").attr("data-type");
  if (hetal != undefined && hetal.match("tylist")) {
    $.ajax({
      url:
        "/feeds/posts/default/-/" +
        shuban +
        "?alt=json-in-script&max-results=5",
      type: "get",
      dataType: "jsonp",
      success: function (annaleia) {
        var u = "";
        var shaeley = '<div class="ty-feat">';
        for (var madysin = 0; madysin < annaleia.feed.entry.length; madysin++) {
          for (
            var rovin = 0;
            rovin < annaleia.feed.entry[madysin].link.length;
            rovin++
          ) {
            if (annaleia.feed.entry[madysin].link[rovin].rel == "alternate") {
              u = annaleia.feed.entry[madysin].link[rovin].href;
              break;
            }
          }
          var ziheng;
          for (
            var hilberto = 0;
            hilberto < annaleia.feed.entry[madysin].link.length;
            hilberto++
          ) {
            if (
              annaleia.feed.entry[madysin].link[hilberto].rel === "replies" &&
              annaleia.feed.entry[madysin].link[hilberto].type === "text/html"
            ) {
              ziheng = annaleia.feed.entry[madysin].link[hilberto].title;
              break;
            }
          }
          ziheng = parseInt(ziheng, 10);
          if ("content" in annaleia.feed.entry[madysin]) {
            var carvin = annaleia.feed.entry[madysin].content.$t;
          } else {
            if ("summary" in b_rc) {
              var carvin = annaleia.feed.entry[madysin].summary.$t;
            } else {
              var carvin = "";
            }
          }
          var alyiah = /<\S[^>]*>/g;
          (carvin = carvin.replace(alyiah, "")),
            carvin.length > 170 &&
              (carvin = "" + carvin.substring(0, 150) + "...");
          var levicy = annaleia.feed.entry[madysin].title.$t;
          var s = annaleia.feed.entry[madysin].category[0].term;
          var kieler = annaleia.feed.entry[madysin].author[0].name.$t;
          var kenyel = annaleia.feed.entry[madysin].author[0].gd$image.src;
          var dorota = annaleia.feed.entry[madysin].published.$t,
            wilbern = dorota.substring(0, 4),
            roeberta = dorota.substring(5, 7),
            martize = dorota.substring(8, 10),
            senada =
              month_format[parseInt(roeberta, 10)] +
              " " +
              martize +
              ", " +
              wilbern;
          var anadalay = annaleia.feed.entry[madysin].content.$t;
          var alger = $("<div>").html(anadalay);
          if (anadalay.indexOf("//www.youtube.com/embed/") > -1) {
            var niaylah = annaleia.feed.entry[madysin].media$thumbnail.url;
            var hilberto = niaylah;
          } else {
            if (anadalay.indexOf("<img") > -1) {
              var rosemaria = alger.find("img:first").attr("src");
              var hilberto = rosemaria;
            } else {
              var hilberto = no_image;
            }
          }
          if (madysin == 0) {
            shaeley +=
              '<div class="tylist-first"><div class="tylist-feat-image"><div class="tyard-thumb"><a class="tylist-img" href="' +
              u +
              '" style="background:url(' +
              hilberto +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="yard-label"><a class="icon ' +
              s +
              '" href="/search/label/' +
              s +
              "?&amp;max-result=" +
              perPage +
              '">' +
              s +
              '</a></div></div><div class="tylist-con-yard"><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              levicy +
              '</a></h3><span class="yard-auth-ty">' +
              kieler +
              '</span><span class="tylist-time">' +
              senada +
              '</span><p class="recent-summary">' +
              carvin +
              "</p></div></div></div>";
          } else {
            shaeley +=
              '<div class="tylist-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
              u +
              '" style="background:url(' +
              hilberto +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="category-gallery"><a class="icon ' +
              s +
              '" href="/search/label/' +
              s +
              "?&amp;max-result=" +
              perPage +
              '"></a></div></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              levicy +
              '</a></h3><span class="yard-auth-ty">' +
              kieler +
              '</span><span class="tylist-time">' +
              senada +
              "</span></div></div>";
          }
        }
        shaeley += "</div>";
        $(".featured-list .HTML .widget-content").each(function () {
          var clemence = $(this).parent().attr("id");
          if (clemence == mozel) {
            $(this).html(shaeley);
            $(this).parent().addClass("tylist");
            $(this).parent().addClass("templatesyard");
            $(this)
              .prev("h2")
              .wrapInner(
                '<a href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '"></a>'
              );
            $(this).prev("h2").wrap('<div class="tyheading-head"></div>');
            $(this)
              .prev(".tyheading-head")
              .append(
                '<a class="tymore" href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '">' +
                  more_text +
                  "</a>"
              );
            $(".featured-list").addClass("comload").removeClass("preload");
            $(this)
              .find(".yard-img,.ty-img")
              .each(function () {
                $(this)
                  .attr("style", function (julienne, arieliz) {
                    return arieliz.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (jermall, sartaj) {
                    return sartaj.replace("s72-c", "s1600");
                  });
              });
          }
        });
      },
    });
  } else {
    $(".tylist-wrapper").remove();
  }
});
$(".column-left .HTML .widget-content").each(function () {
  var muizz = $(this).prev("h2").text(),
    lender = $(this).find("span").attr("data-label"),
    maegann = $(this).parent().attr("id"),
    felycia = $(this).find("span").attr("data-type");
  if (felycia != undefined && felycia.match("tyleft")) {
    $.ajax({
      url:
        "/feeds/posts/default/-/" +
        lender +
        "?alt=json-in-script&max-results=5",
      type: "get",
      dataType: "jsonp",
      success: function (bubber) {
        var u = "";
        var ramatoulaye = '<div class="ty-feat">';
        for (var dlinda = 0; dlinda < bubber.feed.entry.length; dlinda++) {
          for (
            var kimayah = 0;
            kimayah < bubber.feed.entry[dlinda].link.length;
            kimayah++
          ) {
            if (bubber.feed.entry[dlinda].link[kimayah].rel == "alternate") {
              u = bubber.feed.entry[dlinda].link[kimayah].href;
              break;
            }
          }
          var zecheriah;
          for (
            var wylliam = 0;
            wylliam < bubber.feed.entry[dlinda].link.length;
            wylliam++
          ) {
            if (
              bubber.feed.entry[dlinda].link[wylliam].rel === "replies" &&
              bubber.feed.entry[dlinda].link[wylliam].type === "text/html"
            ) {
              zecheriah = bubber.feed.entry[dlinda].link[wylliam].title;
              break;
            }
          }
          zecheriah = parseInt(zecheriah, 10);
          if ("content" in bubber.feed.entry[dlinda]) {
            var kapree = bubber.feed.entry[dlinda].content.$t;
          } else {
            if ("summary" in b_rc) {
              var kapree = bubber.feed.entry[dlinda].summary.$t;
            } else {
              var kapree = "";
            }
          }
          var lavander = /<\S[^>]*>/g;
          (kapree = kapree.replace(lavander, "")),
            kapree.length > 170 &&
              (kapree = "" + kapree.substring(0, 150) + "...");
          var porshae = bubber.feed.entry[dlinda].title.$t;
          var s = bubber.feed.entry[dlinda].category[0].term;
          var jeson = bubber.feed.entry[dlinda].author[0].name.$t;
          var valente = bubber.feed.entry[dlinda].author[0].gd$image.src;
          var hermosa = bubber.feed.entry[dlinda].published.$t,
            kayden = hermosa.substring(0, 4),
            dreama = hermosa.substring(5, 7),
            jovontae = hermosa.substring(8, 10),
            diyana =
              month_format[parseInt(dreama, 10)] +
              " " +
              jovontae +
              ", " +
              kayden;
          var genika = bubber.feed.entry[dlinda].content.$t;
          var sherick = $("<div>").html(genika);
          if (genika.indexOf("//www.youtube.com/embed/") > -1) {
            var pei = bubber.feed.entry[dlinda].media$thumbnail.url;
            var wylliam = pei;
          } else {
            if (genika.indexOf("<img") > -1) {
              var yumika = sherick.find("img:first").attr("src");
              var wylliam = yumika;
            } else {
              var wylliam = no_image;
            }
          }
          if (dlinda == 0) {
            ramatoulaye +=
              '<div class="col-left-first"><div class="col-left-feat-image"><div class="tyard-thumb"><a class="col-left-img" href="' +
              u +
              '" style="background:url(' +
              wylliam +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="yard-label"><a class="icon ' +
              s +
              '" href="/search/label/' +
              s +
              "?&amp;max-result=" +
              perPage +
              '">' +
              s +
              '</a></div></div><div class="col-left-con-yard"><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              porshae +
              '</a></h3><span class="yard-auth-ty">' +
              jeson +
              '</span><span class="col-left-time">' +
              diyana +
              '</span><p class="recent-summary">' +
              kapree +
              "</p></div></div></div>";
          } else {
            ramatoulaye +=
              '<div class="col-left-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
              u +
              '" style="background:url(' +
              wylliam +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              porshae +
              '</a></h3><span class="yard-auth-ty">' +
              jeson +
              '</span><span class="col-left-time">' +
              diyana +
              "</span></div></div>";
          }
        }
        ramatoulaye += "</div>";
        $(".column-left .HTML .widget-content").each(function () {
          var lubell = $(this).parent().attr("id");
          if (lubell == maegann) {
            $(this).html(ramatoulaye);
            $(this).parent().addClass("tyleft");
            $(this).parent().addClass("templatesyard");
            $(this)
              .prev("h2")
              .wrapInner(
                '<a href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '"></a>'
              );
            $(this).prev("h2").wrap('<div class="tyheading-head"></div>');
            $(this)
              .prev(".tyheading-head")
              .append(
                '<a class="tymore" href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '">' +
                  more_text +
                  "</a>"
              );
            $(".column-left").addClass("comload").removeClass("preload");
            $(this)
              .find(".yard-img,.ty-img")
              .each(function () {
                $(this)
                  .attr("style", function (darrus, junya) {
                    return junya.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (maydelyn, elline) {
                    return elline.replace("s72-c", "s1600");
                  });
              });
          }
        });
      },
    });
  } else {
    $(".tyleft-wrapper").remove();
  }
});
$(".column-right .HTML .widget-content").each(function () {
  var keirya = $(this).prev("h2").text(),
    jarry = $(this).find("span").attr("data-label"),
    korrah = $(this).parent().attr("id"),
    cataleyah = $(this).find("span").attr("data-type");
  if (cataleyah != undefined && cataleyah.match("tyright")) {
    $.ajax({
      url:
        "/feeds/posts/default/-/" + jarry + "?alt=json-in-script&max-results=5",
      type: "get",
      dataType: "jsonp",
      success: function (sherwood) {
        console.log({ sherwood });
        var u = "";
        var phawn = '<div class="ty-feat">';
        for (
          var antonella = 0;
          antonella < sherwood.feed.entry.length;
          antonella++
        ) {
          for (
            var trinea = 0;
            trinea < sherwood.feed.entry[antonella].link.length;
            trinea++
          ) {
            if (
              sherwood.feed.entry[antonella].link[trinea].rel == "alternate"
            ) {
              u = sherwood.feed.entry[antonella].link[trinea].href;
              break;
            }
          }
          var caraleigh;
          for (
            var jaquette = 0;
            jaquette < sherwood.feed.entry[antonella].link.length;
            jaquette++
          ) {
            if (
              sherwood.feed.entry[antonella].link[jaquette].rel === "replies" &&
              sherwood.feed.entry[antonella].link[jaquette].type === "text/html"
            ) {
              caraleigh = sherwood.feed.entry[antonella].link[jaquette].title;
              break;
            }
          }
          caraleigh = parseInt(caraleigh, 10);
          if ("content" in sherwood.feed.entry[antonella]) {
            var gypsie = sherwood.feed.entry[antonella].content.$t;
          } else {
            if ("summary" in b_rc) {
              var gypsie = sherwood.feed.entry[antonella].summary.$t;
            } else {
              var gypsie = "";
            }
          }
          var bessie = /<\S[^>]*>/g;
          (gypsie = gypsie.replace(bessie, "")),
            gypsie.length > 170 &&
              (gypsie = "" + gypsie.substring(0, 150) + "...");
          var jeriah = sherwood.feed.entry[antonella].title.$t;
          var s = sherwood.feed.entry[antonella].category[0].term;
          var andersson = sherwood.feed.entry[antonella].author[0].name.$t;
          var olamilekan =
            sherwood.feed.entry[antonella].author[0].gd$image.src;
          var trintin = sherwood.feed.entry[antonella].published.$t,
            shawnice = trintin.substring(0, 4),
            eloris = trintin.substring(5, 7),
            miquan = trintin.substring(8, 10),
            karma =
              month_format[parseInt(eloris, 10)] +
              " " +
              miquan +
              ", " +
              shawnice;
          var martrell = sherwood.feed.entry[antonella].content.$t;
          var jencyn = $("<div>").html(martrell);
          if (martrell.indexOf("//www.youtube.com/embed/") > -1) {
            var mellisha = sherwood.feed.entry[antonella].media$thumbnail.url;
            var jaquette = mellisha;
          } else {
            if (martrell.indexOf("<img") > -1) {
              var kilah = jencyn.find("img:first").attr("src");
              var jaquette = kilah;
            } else {
              var jaquette = no_image;
            }
          }
          if (antonella == 0) {
            phawn +=
              '<div class="col-right-first"><div class="col-right-feat-image"><div class="tyard-thumb"><a class="col-right-img" href="' +
              u +
              '" style="background:url(' +
              jaquette +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="yard-label"><a class="icon ' +
              s +
              '" href="/search/label/' +
              s +
              "?&amp;max-result=" +
              perPage +
              '">' +
              s +
              '</a></div></div><div class="col-right-con-yard"><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              jeriah +
              '</a></h3><span class="yard-auth-ty">' +
              andersson +
              '</span><span class="col-right-time">' +
              karma +
              '</span><p class="recent-summary">' +
              gypsie +
              "</p></div></div></div>";
          } else {
            phawn +=
              '<div class="col-right-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
              u +
              '" style="background:url(' +
              jaquette +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              jeriah +
              '</a></h3><span class="yard-auth-ty">' +
              andersson +
              '</span><span class="col-right-time">' +
              karma +
              "</span></div></div>";
          }
        }
        phawn += "</div>";
        $(".column-right .HTML .widget-content").each(function () {
          var nura = $(this).parent().attr("id");
          if (nura == korrah) {
            $(this).html(phawn);
            $(this).parent().addClass("tyright");
            $(this).parent().addClass("templatesyard");
            $(this)
              .prev("h2")
              .wrapInner(
                '<a href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '"></a>'
              );
            $(this).prev("h2").wrap('<div class="tyheading-head"></div>');
            $(this)
              .prev(".tyheading-head")
              .append(
                '<a class="tymore" href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '">' +
                  more_text +
                  "</a>"
              );
            $(".column-right").addClass("comload").removeClass("preload");
            $(this)
              .find(".yard-img,.ty-img")
              .each(function () {
                $(this)
                  .attr("style", function (collis, lanecia) {
                    return lanecia.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (edrick, jermany) {
                    return jermany.replace("s72-c", "s1600");
                  });
              });
          }
        });
      },
    });
  } else {
    $(".tyleft-wrapper").remove();
  }
});
$(".featured-box .HTML .widget-content").each(function () {
  var callie = $(this).prev("h2").text(),
    mee = $(this).find("span").attr("data-label"),
    kysha = $(this).find("span").attr("data-no"),
    mleah = $(this).parent().attr("id"),
    anferny = $(this).find("span").attr("data-type");
  if (anferny != undefined && anferny.match("tysum")) {
    $.ajax({
      url:
        "/feeds/posts/default/-/" +
        mee +
        "?alt=json-in-script&max-results=" +
        kysha,
      type: "get",
      dataType: "jsonp",
      success: function (jakyrah) {
        var u = "";
        var halona = '<div class="ty-feat">';
        for (var renardo = 0; renardo < jakyrah.feed.entry.length; renardo++) {
          for (
            var heidemarie = 0;
            heidemarie < jakyrah.feed.entry[renardo].link.length;
            heidemarie++
          ) {
            if (
              jakyrah.feed.entry[renardo].link[heidemarie].rel == "alternate"
            ) {
              u = jakyrah.feed.entry[renardo].link[heidemarie].href;
              break;
            }
          }
          var akebia;
          for (
            var sumaira = 0;
            sumaira < jakyrah.feed.entry[renardo].link.length;
            sumaira++
          ) {
            if (
              jakyrah.feed.entry[renardo].link[sumaira].rel === "replies" &&
              jakyrah.feed.entry[renardo].link[sumaira].type === "text/html"
            ) {
              akebia = jakyrah.feed.entry[renardo].link[sumaira].title;
              break;
            }
          }
          akebia = parseInt(akebia, 10);
          if ("content" in jakyrah.feed.entry[renardo]) {
            var shanade = jakyrah.feed.entry[renardo].content.$t;
          } else {
            if ("summary" in b_rc) {
              var shanade = jakyrah.feed.entry[renardo].summary.$t;
            } else {
              var shanade = "";
            }
          }
          var zakylah = /<\S[^>]*>/g;
          (shanade = shanade.replace(zakylah, "")),
            shanade.length > 120 &&
              (shanade = "" + shanade.substring(0, 100) + "...");
          var dorlis = jakyrah.feed.entry[renardo].title.$t;
          var s = jakyrah.feed.entry[renardo].category[0].term;
          var jahlin = jakyrah.feed.entry[renardo].author[0].name.$t;
          var daughtry = jakyrah.feed.entry[renardo].author[0].gd$image.src;
          var learon = jakyrah.feed.entry[renardo].published.$t,
            jaxan = learon.substring(0, 4),
            leory = learon.substring(5, 7),
            haashir = learon.substring(8, 10),
            alecea =
              month_format[parseInt(leory, 10)] + " " + haashir + ", " + jaxan;
          var lautaro = jakyrah.feed.entry[renardo].content.$t;
          var selva = $("<div>").html(lautaro);
          if (lautaro.indexOf("//www.youtube.com/embed/") > -1) {
            var tamani = jakyrah.feed.entry[renardo].media$thumbnail.url;
            var sumaira = tamani;
          } else {
            if (lautaro.indexOf("<img") > -1) {
              var liad = selva.find("img:first").attr("src");
              var sumaira = liad;
            } else {
              var sumaira = no_image;
            }
          }
          halona +=
            '<div class="tybox-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
            u +
            '" style="background:url(' +
            sumaira +
            ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' +
            u +
            '">' +
            dorlis +
            '</a></h3><span class="yard-auth-ty">' +
            jahlin +
            '</span><span class="tybox-time">' +
            alecea +
            '</span><p class="recent-summary">' +
            shanade +
            "</p></div></div>";
        }
        halona += "</div>";
        $(".featured-box .HTML .widget-content").each(function () {
          var carmella = $(this).parent().attr("id");
          if (carmella == mleah) {
            $(this).html(halona);
            $(this).parent().addClass("tysum");
            $(this).parent().addClass("templatesyard");
            $(this)
              .prev("h2")
              .wrapInner(
                '<a href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '"></a>'
              );
            $(this).prev("h2").wrap('<div class="tyheading-head"></div>');
            $(this)
              .prev(".tyheading-head")
              .append(
                '<a class="tymore" href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '">' +
                  more_text +
                  "</a>"
              );
            $(".featured-box").addClass("comload").removeClass("preload");
            $(this)
              .find(".yard-img,.ty-img")
              .each(function () {
                $(this)
                  .attr("style", function (darhonda, andreal) {
                    return andreal.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (fancy, elizabethmarie) {
                    return elizabethmarie.replace("s72-c", "s1600");
                  });
              });
          }
        });
      },
    });
  }
});
$(".featured-grid .HTML .widget-content").each(function () {
  var teric = $(this).prev("h2").text(),
    benardo = $(this).find("span").attr("data-label"),
    jemarr = $(this).find("span").attr("data-no"),
    measha = $(this).parent().attr("id"),
    monifah = $(this).find("span").attr("data-type");
  if (monifah != undefined && monifah.match("tygrid")) {
    $.ajax({
      url:
        "/feeds/posts/default/-/" +
        benardo +
        "?alt=json-in-script&max-results=" +
        jemarr,
      type: "get",
      dataType: "jsonp",
      success: function (chaislyn) {
        var u = "";
        var kimbrell = '<div class="ty-feat">';
        for (var angelos = 0; angelos < chaislyn.feed.entry.length; angelos++) {
          for (
            var dormalee = 0;
            dormalee < chaislyn.feed.entry[angelos].link.length;
            dormalee++
          ) {
            if (
              chaislyn.feed.entry[angelos].link[dormalee].rel == "alternate"
            ) {
              u = chaislyn.feed.entry[angelos].link[dormalee].href;
              break;
            }
          }
          var chaim;
          for (
            var lachon = 0;
            lachon < chaislyn.feed.entry[angelos].link.length;
            lachon++
          ) {
            if (
              chaislyn.feed.entry[angelos].link[lachon].rel === "replies" &&
              chaislyn.feed.entry[angelos].link[lachon].type === "text/html"
            ) {
              chaim = chaislyn.feed.entry[angelos].link[lachon].title;
              break;
            }
          }
          chaim = parseInt(chaim, 10);
          if ("content" in chaislyn.feed.entry[angelos]) {
            var cheri = chaislyn.feed.entry[angelos].content.$t;
          } else {
            if ("summary" in b_rc) {
              var cheri = chaislyn.feed.entry[angelos].summary.$t;
            } else {
              var cheri = "";
            }
          }
          var germane = /<\S[^>]*>/g;
          (cheri = cheri.replace(germane, "")),
            cheri.length > 170 &&
              (cheri = "" + cheri.substring(0, 150) + "...");
          var makhiya = chaislyn.feed.entry[angelos].title.$t;
          var s = chaislyn.feed.entry[angelos].category[0].term;
          var friel = chaislyn.feed.entry[angelos].author[0].name.$t;
          var sanderson = chaislyn.feed.entry[angelos].author[0].gd$image.src;
          var dylann = chaislyn.feed.entry[angelos].published.$t,
            cleamon = dylann.substring(0, 4),
            hirsh = dylann.substring(5, 7),
            nevaehlee = dylann.substring(8, 10),
            endiah =
              month_format[parseInt(hirsh, 10)] +
              " " +
              nevaehlee +
              ", " +
              cleamon;
          var jamella = chaislyn.feed.entry[angelos].content.$t;
          var alauna = $("<div>").html(jamella);
          if (jamella.indexOf("//www.youtube.com/embed/") > -1) {
            var emmaline = chaislyn.feed.entry[angelos].media$thumbnail.url;
            var lachon = emmaline;
          } else {
            if (jamella.indexOf("<img") > -1) {
              var klarrissa = alauna.find("img:first").attr("src");
              var lachon = klarrissa;
            } else {
              var lachon = no_image;
            }
          }
          kimbrell +=
            '<div class="tygrid-rest"><div class="tygrid-thumb"><a class="yard-img" href="' +
            u +
            '" style="background:url(' +
            lachon +
            ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' +
            u +
            '">' +
            makhiya +
            '</a></h3><span class="yard-auth-ty">' +
            friel +
            '</span><span class="tygrid-time">' +
            endiah +
            "</span></div></div>";
        }
        kimbrell += "</div>";
        $(".featured-grid .HTML .widget-content").each(function () {
          var zahan = $(this).parent().attr("id");
          if (zahan == measha) {
            $(this).html(kimbrell);
            $(this).parent().addClass("tygrid");
            $(this).parent().addClass("templatesyard");
            $(this)
              .prev("h2")
              .wrapInner(
                '<a href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '"></a>'
              );
            $(this).prev("h2").wrap('<div class="tyheading-head"></div>');
            $(this)
              .prev(".tyheading-head")
              .append(
                '<a class="tymore" href="/search/label/' +
                  s +
                  "?&amp;max-result=" +
                  perPage +
                  '">' +
                  more_text +
                  "</a>"
              );
            $(".featured-grid").addClass("comload").removeClass("preload");
            $(this)
              .find(".yard-img,.ty-img")
              .each(function () {
                $(this)
                  .attr("style", function (zaina, breklyn) {
                    return breklyn.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (cielita, aalyia) {
                    return aalyia.replace("s72-c", "s1600");
                  });
              });
          }
        });
      },
    });
  } else {
    $(".tygridbox-wrapper").remove();
  }
});
$(".social-counter").each(function () {
  var cisco = $(this);
  var jereme = $(this).find(".item-social");
  if (0 === jereme.length) {
    cisco.remove();
  }
  $(this).find(".widget").removeClass("LinkList");
  $(".social-counter .item-social.facebook").find(".item-text").text("Likes");
  $(".social-counter .item-social.rss,.social-counter .item-social.youtube")
    .find(".item-text")
    .text("Subscribes");
  var tynayah = "count=";
  var correan = ";";
  $(".social-counter *").replaceText(tynayah, '<span class="item-count">');
  $(".social-counter *").replaceText(correan, "</span>");
  $(".item-social").each(function () {
    var yonny = $(this).find(".hide-count");
    var burnese = $(this).find(".item-count");
    $(yonny).before($(burnese));
    $(yonny).remove();
  });
});
$(function () {
  $(
    ".index .post, .archive .post, .tygrid .ty-feat .tygrid-rest, .tysum .ty-feat .tybox-rest"
  ).matchHeight();
  $(".post-body img").parent("a").css("margin", "0 auto!important");
});
$(".post-home-image .post-thumb a").attr(
  "style",
  function (pryscilla, regenna) {
    if (regenna.match("hqdefault.jpg")) {
      return regenna.replace("/hqdefault.jpg", "/mqdefault.jpg");
    } else {
      if (regenna.match("default.jpg")) {
        return regenna.replace("/default.jpg", "/mqdefault.jpg");
      } else {
        if (regenna.match("s72-c")) {
          return regenna.replace("/s72-c", "/s1600");
        } else {
          if (regenna.match("w72-h72-p-nu")) {
            return regenna.replace("/w72-h72-p-nu", "/s1600");
          } else {
            return regenna.replace(
              "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png",
              no_image
            );
          }
        }
      }
    }
  }
);
$(document).ready(function () {
  var thomason = "<span style='color:$maincolor;'>NEWS</span>LETTER";
  var kymere =
    "Make sure you don't miss interesting happenings by joining our newsletter program";
  $(".email-folower h2").remove();
  var etsuko = $(".FollowByEmail .widget-content");
  if (etsuko.length) {
    etsuko.prepend(
      "<div class='email-letter-text'><h3 class='subhead'>" +
        thomason +
        "</h3><p class='subtext'>" +
        kymere +
        "</p></div>"
    );
  }
});
$(document).ready(function () {
  var joeliz = $("#sidetabs #tabside1 .widget h2").text();
  $(".menu-tab .item-1 a").text(joeliz);
  var u = $("#sidetabs #tabside2 .widget h2").text();
  $(".menu-tab .item-2 a").text(u);
  var caria = $("#sidetabs #tabside3 .widget h2").text();
  $(".menu-tab .item-3 a").text(caria);
  $(
    "#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title"
  ).remove();
  $(this).find(".menu-tab li").addClass("hide-tab");
  $(".sidetabs").tabslet({
    mouseevent: "click",
    attribute: "href",
    animation: true,
  });
  if (0 === $(".sidetabs .widget").length) {
    $(".sidetabs").remove();
  }
});
$(document).ready(function () {
  $(".cmm-tabs").simplyTab({
    active: 1,
    fx: "fade",
    showSpeed: 400,
    hideSpeed: 400,
  });
  $(".blogger-tab").append($("#comments"));
  $(".cmm-tabs.simplyTab .wrap-tab").wrap("<div class='cmm-tabs-header'/>");
  $(".cmm-tabs-header").append(
    "<span class='cmm-tabs-text-me'>Comment Using!!</span>"
  );
});
$(".PopularPosts ul li img").attr("src", function (man, tuere) {
  if (tuere.match("hqdefault.jpg")) {
    return tuere.replace("/hqdefault.jpg", "/mqdefault.jpg");
  } else {
    if (tuere.match("default.jpg")) {
      return tuere.replace("/default.jpg", "/mqdefault.jpg");
    } else {
      if (tuere.match("s72-c")) {
        return tuere.replace("/s72-c", "/s1600");
      } else {
        if (tuere.match("w72-h72-p-nu")) {
          return tuere.replace("/w72-h72-p-nu", "/s1600");
        } else {
          return tuere.replace(
            "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png",
            no_image
          );
        }
      }
    }
  }
});
$(document).ready(function () {
  $('span[name="author-social"]').before(
    $(".post-author-social .widget-content").html()
  );
  $(".post-author-social .widget-content").html("");
  $('span[name="author-post"]').before(
    $(".post-author-widget .widget-content").html()
  );
  $(".post-author-widget .widget-content").html("");
  $('a[name="ad-post-top"]').before($("#adwidegt2 .widget-content").html());
  $("#adwidegt2 .widget-content").html("");
  $('a[name="ad-post-bottom"]').before($("#adwidegt3 .widget-content").html());
  $("#adwidegt3 .widget-content").html("");
});
$(".ty-trigger .HTML .widget-content span.latestcomments").each(function () {
  var gudrun = $(this).attr("data-no");
  $.ajax({
    url: "/feeds/comments/default?alt=json-in-script&max-results=" + gudrun,
    type: "get",
    dataType: "jsonp",
    success: function (salil) {
      console.log({ salil });
      var u = "";
      var kayhan = '<div class="tyard-komet">';
      for (var vaitiare = 0; vaitiare < salil.feed.entry.length; vaitiare++) {
        if (vaitiare == salil.feed.entry.length) {
          break;
        }
        for (
          var jaymian = 0;
          jaymian < salil.feed.entry[vaitiare].link.length;
          jaymian++
        ) {
          if (salil.feed.entry[vaitiare].link[jaymian].rel == "alternate") {
            u = salil.feed.entry[vaitiare].link[jaymian].href;
            break;
          }
        }
        if ("content" in salil.feed.entry[vaitiare]) {
          var malk = salil.feed.entry[vaitiare].content.$t;
        } else {
          if ("summary" in b_rc) {
            var malk = salil.feed.entry[vaitiare].summary.$t;
          } else {
            var malk = "";
          }
        }
        var paden = /<\S[^>]*>/g;
        malk = malk.replace(paden, "");
        if (malk.length > 70) {
          malk = "" + malk.substring(0, 50) + "...";
        }
        var arielyn = salil.feed.entry[vaitiare].author[0].name.$t;
        var syndal = salil.feed.entry[vaitiare].author[0].gd$image.src;
        if (syndal.match("http://img1.blogblog.com/img/blank.gif")) {
          var jordy = "http://img1.blogblog.com/img/anon36.png";
        } else {
          if (syndal.match("http://img2.blogblog.com/img/b16-rounded.gif")) {
            var jordy = "http://img1.blogblog.com/img/anon36.png";
          } else {
            var jordy = syndal;
          }
        }
        kayhan +=
          '<div class="ty-komet"><div class="ty-komet-tar"><img class="yardimg-komet" src="' +
          jordy +
          '"/></div><a href="' +
          u +
          '">' +
          arielyn +
          '</a><span>"' +
          malk +
          '"</span></div>';
      }
      kayhan += '</div><div class="clear"/>';
      $(".ty-trigger .HTML .widget-content span.latestcomments").each(
        function () {
          var ashanae = $(this).attr("data-no");
          if (ashanae == gudrun) {
            $(this).parent().html(kayhan);
          }
        }
      );
    },
  });
});
$(".ty-trigger .HTML .widget-content span.latestposts").each(function () {
  var creig = $(this).attr("data-no");
  $.ajax({
    url: "/feeds/posts/default?alt=json-in-script&max-results=" + creig,
    type: "get",
    dataType: "jsonp",
    success: function (chevalier) {
      var u = "";
      var julenny = '<div class="ty-bonus">';
      for (var sianah = 0; sianah < chevalier.feed.entry.length; sianah++) {
        for (
          var dalessandro = 0;
          dalessandro < chevalier.feed.entry[sianah].link.length;
          dalessandro++
        ) {
          if (
            chevalier.feed.entry[sianah].link[dalessandro].rel == "alternate"
          ) {
            u = chevalier.feed.entry[sianah].link[dalessandro].href;
            break;
          }
        }
        var nurul = chevalier.feed.entry[sianah].title.$t;
        var s = chevalier.feed.entry[sianah].category[0].term;
        var elbis = chevalier.feed.entry[sianah].author[0].name.$t;
        var kynzlee = chevalier.feed.entry[sianah].published.$t,
          ulysees = kynzlee.substring(0, 4),
          denell = kynzlee.substring(5, 7),
          lowis = kynzlee.substring(8, 10),
          treyton =
            month_format[parseInt(denell, 10)] + " " + lowis + ", " + ulysees;
        var aimee = chevalier.feed.entry[sianah].content.$t;
        var heide = $("<div>").html(aimee);
        if (aimee.indexOf("//www.youtube.com/embed/") > -1) {
          var biyanca = chevalier.feed.entry[
            sianah
          ].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
          var cavell = biyanca;
        } else {
          if (aimee.indexOf("<img") > -1) {
            var geneieve = heide
              .find("img:first")
              .attr("src")
              .replace("s72-c", "s1600");
            var cavell = geneieve;
          } else {
            var cavell = no_image;
          }
        }
        julenny +=
          '<div class="ty-wow"><a class="ty-thumb-bonos" href="' +
          u +
          '" style="background:url(' +
          cavell +
          ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' +
          u +
          '">' +
          nurul +
          '</a></h3><span class="yard-auth-ty">' +
          elbis +
          '</span><span class="ty-time">' +
          treyton +
          "</span></div></div>";
      }
      julenny += "</div>";
      $(".ty-trigger .HTML .widget-content span.latestposts").each(function () {
        var shermika = $(this).attr("data-no");
        if (shermika == creig) {
          $(this).parent().html(julenny);
        }
      });
    },
  });
});
$(".ty-trigger .HTML .widget-content span.tagpost").each(function () {
  var maxen = $(this).attr("data-label"),
    reinaliz = $(this).attr("data-no");
  $.ajax({
    url:
      "/feeds/posts/default/-/" +
      maxen +
      "?alt=json-in-script&max-results=" +
      reinaliz,
    type: "get",
    dataType: "jsonp",
    success: function (matika) {
      var u = "";
      var tyeast = '<div class="ty-bonus">';
      for (var tanaija = 0; tanaija < matika.feed.entry.length; tanaija++) {
        for (
          var matilyn = 0;
          matilyn < matika.feed.entry[tanaija].link.length;
          matilyn++
        ) {
          if (matika.feed.entry[tanaija].link[matilyn].rel == "alternate") {
            u = matika.feed.entry[tanaija].link[matilyn].href;
            break;
          }
        }
        var yukari = matika.feed.entry[tanaija].title.$t;
        var s = matika.feed.entry[tanaija].category[0].term;
        var donesia = matika.feed.entry[tanaija].author[0].name.$t;
        var asiana = matika.feed.entry[tanaija].published.$t,
          philana = asiana.substring(0, 4),
          jocqua = asiana.substring(5, 7),
          aerik = asiana.substring(8, 10),
          adreyona =
            month_format[parseInt(jocqua, 10)] + " " + aerik + ", " + philana;
        var gervis = matika.feed.entry[tanaija].content.$t;
        var ddnald = $("<div>").html(gervis);
        if (gervis.indexOf("//www.youtube.com/embed/") > -1) {
          var caydee = matika.feed.entry[tanaija].media$thumbnail.url.replace(
            "/default.jpg",
            "/mqdefault.jpg"
          );
          var venicio = caydee;
        } else {
          if (gervis.indexOf("<img") > -1) {
            var landus = ddnald
              .find("img:first")
              .attr("src")
              .replace("s72-c", "s1600");
            var venicio = landus;
          } else {
            var venicio = no_image;
          }
        }
        tyeast +=
          '<div class="ty-wow"><a class="ty-thumb-bonos" href="' +
          u +
          '" style="background:url(' +
          venicio +
          ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' +
          u +
          '">' +
          yukari +
          '</a></h3><span class="yard-auth-ty">' +
          donesia +
          '</span><span class="ty-time">' +
          adreyona +
          "</span></div></div>";
      }
      tyeast += "</div>";
      $(".ty-trigger .HTML .widget-content span.tagpost").each(function () {
        var klairissa = $(this).attr("data-label");
        if (klairissa == maxen) {
          $(this).parent().html(tyeast);
        }
      });
    },
  });
});
$(document).ready(function () {
  $('span[name="author-social"]').before(
    $(".post-author-social .widget-content").html()
  );
  $(".post-author-social .widget-content").html("");
  $('span[name="author-post"]').before(
    $(".post-author-widget .widget-content").html()
  );
  $(".post-author-widget .widget-content").html("");
});
$(".ty-comment").click(function () {
  $("html, body").animate(
    { scrollTop: $("#put-your-comment").offset().top },
    1e3
  );
});
$(document).ready(function () {
  $("img").each(function () {
    var leslly = $(this);
    var dannisha = leslly.attr("src");
    leslly.attr(
      "title",
      dannisha.substring(
        dannisha.lastIndexOf("/") + 1,
        dannisha.lastIndexOf(".")
      )
    );
    leslly.attr(
      "alt",
      dannisha.substring(
        dannisha.lastIndexOf("/") + 1,
        dannisha.lastIndexOf(".")
      )
    );
  });
});
$(document).ready(function (arlyce) {
  var catara = arlyce("#post-pager .blog-pager-newer-link");
  var landrea = arlyce("#post-pager .blog-pager-older-link");
  arlyce.get(
    catara.attr("href"),
    function (shi) {
      catara.html(
        "<b>" +
          POSTPAGER_NEWER +
          "</b><span>" +
          arlyce(shi).find(".post h1.post-title").text() +
          "</span>"
      );
    },
    "html"
  );
  arlyce.get(
    landrea.attr("href"),
    function (kingdom) {
      landrea.html(
        "<b>" +
          POSTPAGER_OLDER +
          "</b><span>" +
          arlyce(kingdom).find(".post h1.post-title").text() +
          "</span>"
      );
    },
    "html"
  );
});
$(function () {
  $(".post-body img").parent("a").css("margin", "0 auto!important");
});
$(document).ready(function () {
  function ezreal(ruqayya, gidget, clift) {
    $.ajax({
      url:
        "/feeds/posts/default/-/" +
        gidget +
        "?alt=json-in-script&max-results=" +
        clift,
      type: "get",
      dataType: "jsonp",
      success: function (leriah) {
        for (
          var u = "",
            jovell =
              '<div class="tyheading-head post-ty-heading"><h2><a href="/search/label/' +
              gidget +
              "?&amp;max-result=" +
              perPage +
              '">Related Post</a></h2><a class="tymore" href="/search/label/' +
              gidget +
              "?&amp;max-result=" +
              perPage +
              '">' +
              more_text +
              '</a></div><div class="related">',
            hurshell = 0;
          hurshell < leriah.feed.entry.length;
          hurshell++
        ) {
          for (
            var brylei = 0;
            brylei < leriah.feed.entry[hurshell].link.length;
            brylei++
          ) {
            if ("alternate" == leriah.feed.entry[hurshell].link[brylei].rel) {
              u = leriah.feed.entry[hurshell].link[brylei].href;
              break;
            }
          }
          var kinlee = leriah.feed.entry[hurshell].title.$t;
          var resham = leriah.feed.entry[hurshell].author[0].name.$t;
          var johnoliver = leriah.feed.entry[hurshell].category[0].term;
          var jerami = leriah.feed.entry[hurshell].published.$t,
            tajae = jerami.substring(0, 4),
            dewyne = jerami.substring(5, 7),
            marqavious = jerami.substring(8, 10),
            carols =
              month_format[parseInt(dewyne, 10)] +
              " " +
              marqavious +
              ", " +
              tajae;
          var vi = leriah.feed.entry[hurshell].content.$t;
          var desmarie = $("<div>").html(vi);
          if (
            vi.indexOf("http://www.youtube.com/embed/") > -1 ||
            vi.indexOf("https://www.youtube.com/embed/") > -1
          ) {
            var dnyla = leriah.feed.entry[hurshell].media$thumbnail.url,
              stacci = dnyla.replace("/default.jpg", "/mqdefault.jpg"),
              alyce = stacci;
          } else {
            if (vi.indexOf("<img") > -1) {
              var s = desmarie.find("img:first").attr("src"),
                heri = s.replace("s72-c", "s600");
              var alyce = heri;
            } else {
              var alyce =
                "http://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s1600-r/nth.png";
            }
          }
          jovell +=
            '<li><div class="related-thumb"><div class="yard-label"><a class="icon ' +
            johnoliver +
            '" href="/search/label/' +
            johnoliver +
            "?&amp;max-result=" +
            perPage +
            '">' +
            johnoliver +
            '</a></div><a class="related-img" href="' +
            u +
            '" style="background:url(' +
            alyce +
            ') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="' +
            u +
            '">' +
            kinlee +
            '</a></h3><span class="yard-auth-ty">' +
            resham +
            '</span><span class="ty-time">' +
            carols +
            "</span></li>";
        }
        (jovell += "</div>"), ruqayya.html(jovell);
      },
    });
  }
  $("#related-posts").each(function () {
    var fayte = $(this),
      adien = fayte.text(),
      jacquelynne = 3;
    ezreal(fayte, adien, jacquelynne);
  });
});
$(
  ".Label a,.post-labels a,.post-ty-heading a,.breadcrumbs span a,.label-head a"
).attr("href", function (leiam, obafemi) {
  return obafemi.replace(obafemi, obafemi + "?&max-results=" + perPage);
});
$(".item .post-body img").parent("a").css("margin", "0 auto!important");
var s = "[full_width]";
var o = "[left_sidebar]";
var u = "[right_sidebar]";
$(".post *").replaceText(
  s,
  "<style>@media screen and (min-width: 980px){.item #main-wrapper{width:100% !important;max-width:100%!important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}}</style>"
);
$(".post-body *").replaceText(
  o,
  "<style>@media screen and (min-width: 980px){.item #main-wrapper{float:right!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:left!important;padding-left:0!important;}}</style>"
);
$(".post-body *").replaceText(
  u,
  "<style>@media screen and (min-width: 980px){.item #main-wrapper{float:left!important;border-right:0!important;margin-right: 0px !important;}.item #sidebar-wrapper{float:right!important;padding-left:0!important;}}</style>"
);
