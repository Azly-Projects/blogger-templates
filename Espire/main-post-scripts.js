$(document).ready(function (meilan) {
  var marangely = -1,
    o = "",
    torri = "";
  meilan("#menu")
    .find("ul")
    .find("li")
    .each(function () {
      for (
        var sujit = meilan(this).text(),
          kelanni = meilan(this).find("a").attr("href"),
          stefoni = 0,
          josalyn = 0;
        josalyn < sujit.length &&
        ((stefoni = sujit.indexOf("_", stefoni)), -1 != stefoni);
        josalyn++
      ) {
        stefoni++;
      }
      if (
        ((level = josalyn),
        level > marangely && ((o += "<ul>"), (torri += "<ul>")),
        level < marangely)
      ) {
        offset = marangely - level;
        for (var josalyn = 0; josalyn < offset; josalyn++) {
          (o += "</ul></li>"), (torri += "</ul></li>");
        }
      }
      (sujit = sujit.replace(/_/gi, "")),
        (o += "<li><a href='" + kelanni + "'>" + sujit + "</a>"),
        (torri += "<li><a href='" + kelanni + "'>");
      for (var josalyn = 0; josalyn < level; josalyn++) {
        torri += "";
      }
      (torri += sujit + "</a>"), (marangely = level);
    });
  for (var gianpaul = 0; marangely >= gianpaul; gianpaul++) {
    (o += "</ul>"),
      (torri += "</ul>"),
      0 != gianpaul && ((o += "</li>"), (torri += "</li>"));
  }
  meilan("#menu .LinkList").html(torri),
    meilan("#menu > .LinkList > ul").attr("id", "nav1"),
    selectnav("nav1"),
    meilan("#menu ul > li > ul").parent("li").addClass("parent"),
    meilan("#menu .widget").attr("style", "display:block!important;");
});
$(document).ready(function (jumah) {
  jumah("abbr.timeago").timeago();
});
$(document).ready(function () {
  var kaylanna = $(".search");
  kaylanna.click(function (emmalia) {
    emmalia.preventDefault();
    if (kaylanna.is(".active") && $(emmalia.target).is(kaylanna)) {
      kaylanna.removeClass("active");
    } else {
      kaylanna.addClass("active");
      kaylanna.find("input").focus();
    }
  });
  $("body").click(function (perianne) {
    if (
      kaylanna.is(".active") &&
      !$(perianne.target).is(".search, .search form, .search input")
    ) {
      kaylanna.removeClass("active");
    }
  });
  selectnav("nav");
  selectnav("nav2");
});
$(document).ready(function () {
  $(".sidebar h2,.lowerbar h2").wrap('<div class="widget-title"></div>');
});
$(".featured .HTML .widget-content").each(function () {
  var gennavive = $(this).prev("h2").text(),
    powers = $(this).find("span").attr("data-label");
  (tyard = $(this).parent().attr("id")),
    (box = $(this).find("span").attr("data-type"));
  if (box != undefined && box.match("tyard-recent")) {
    $.ajax({
      url: "/feeds/posts/default?alt=json-in-script&max-results=3",
      type: "get",
      dataType: "jsonp",
      success: function (amichai) {
        var u = "";
        var daquin = '<div class="ty-feat">';
        for (
          var ernestyne = 0;
          ernestyne < amichai.feed.entry.length;
          ernestyne++
        ) {
          for (
            var ebna = 0;
            ebna < amichai.feed.entry[ernestyne].link.length;
            ebna++
          ) {
            if (amichai.feed.entry[ernestyne].link[ebna].rel == "alternate") {
              u = amichai.feed.entry[ernestyne].link[ebna].href;
              break;
            }
          }
          var ladson;
          for (
            var abraar = 0;
            abraar < amichai.feed.entry[ernestyne].link.length;
            abraar++
          ) {
            if (
              amichai.feed.entry[ernestyne].link[abraar].rel === "replies" &&
              amichai.feed.entry[ernestyne].link[abraar].type === "text/html"
            ) {
              ladson = amichai.feed.entry[ernestyne].link[abraar].title;
              break;
            }
          }
          ladson = parseInt(ladson, 10);
          if ("content" in amichai.feed.entry[ernestyne]) {
            var havanah = amichai.feed.entry[ernestyne].content.$t;
          } else {
            if ("summary" in b_rc) {
              var havanah = amichai.feed.entry[ernestyne].summary.$t;
            } else {
              var havanah = "";
            }
          }
          var folke = /<\S[^>]*>/g;
          (havanah = havanah.replace(folke, "")),
            havanah.length > 120 &&
              (havanah = "" + havanah.substring(0, 100) + "...");
          var aeron = amichai.feed.entry[ernestyne].title.$t;
          var s = amichai.feed.entry[ernestyne].category[0].term;
          var verneeda = amichai.feed.entry[ernestyne].author[0].name.$t;
          var taishawn = amichai.feed.entry[ernestyne].author[0].gd$image.src;
          var sylvesta = amichai.feed.entry[ernestyne].published.$t,
            jantel = sylvesta.substring(0, 4),
            jacobson = sylvesta.substring(5, 7),
            terique = sylvesta.substring(8, 10),
            chena =
              month_format[parseInt(jacobson, 10)] +
              " " +
              terique +
              ", " +
              jantel;
          var gavriil = amichai.feed.entry[ernestyne].content.$t;
          var angely = $("<div>").html(gavriil);
          if (gavriil.indexOf("//www.youtube.com/embed/") > -1) {
            var daichi = amichai.feed.entry[ernestyne].media$thumbnail.url;
            var abraar = daichi;
          } else {
            if (gavriil.indexOf("<img") > -1) {
              var daejia = angely.find("img:first").attr("src");
              var abraar = daejia;
            } else {
              var abraar = no_image;
            }
          }
          if (ernestyne == 0) {
            daquin +=
              '<div class="ty-first"><div class="ty-feat-image"><div class="tyard-thumb"><a class="ty-img" href="' +
              u +
              '" style="background:url(' +
              abraar +
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
              aeron +
              '</a></h3><span class="yard-auth-ty">' +
              verneeda +
              '</span><span class="ty-time">' +
              chena +
              "</span></div></div></div>";
          } else {
            daquin +=
              '<div class="ty-rest-wrap"><div class="ty-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
              u +
              '" style="background:url(' +
              abraar +
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
              aeron +
              '</a></h3><span class="yard-auth-ty">' +
              verneeda +
              '</span><span class="ty-time">' +
              chena +
              '</span></div><div class="clear"/></div></div>';
          }
        }
        daquin += "</div>";
        $(".featured .HTML .widget-content").each(function () {
          var mashyia = $(this).parent().attr("id");
          if (mashyia == tyard) {
            $(this).html(daquin);
            $(this).parent().addClass("tyard");
            $(this).parent().addClass("templatesyard");
            $(".featured").addClass("comload").removeClass("preload");
            $(".featured h2").remove();
            $(this)
              .find(".yard-img,.ty-img")
              .each(function () {
                $(this)
                  .attr("style", function (remya, ravenell) {
                    return ravenell.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (eulan, takobe) {
                    return takobe.replace("s72-c", "s1600");
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
          powers +
          "?alt=json-in-script&max-results=3",
        type: "get",
        dataType: "jsonp",
        success: function (lelar) {
          var u = "";
          var willamena = '<div class="ty-feat">';
          for (var keyo = 0; keyo < lelar.feed.entry.length; keyo++) {
            for (
              var justa = 0;
              justa < lelar.feed.entry[keyo].link.length;
              justa++
            ) {
              if (lelar.feed.entry[keyo].link[justa].rel == "alternate") {
                u = lelar.feed.entry[keyo].link[justa].href;
                break;
              }
            }
            var denyla;
            for (
              var sherokee = 0;
              sherokee < lelar.feed.entry[keyo].link.length;
              sherokee++
            ) {
              if (
                lelar.feed.entry[keyo].link[sherokee].rel === "replies" &&
                lelar.feed.entry[keyo].link[sherokee].type === "text/html"
              ) {
                denyla = lelar.feed.entry[keyo].link[sherokee].title;
                break;
              }
            }
            denyla = parseInt(denyla, 10);
            if ("content" in lelar.feed.entry[keyo]) {
              var zaydie = lelar.feed.entry[keyo].content.$t;
            } else {
              if ("summary" in b_rc) {
                var zaydie = lelar.feed.entry[keyo].summary.$t;
              } else {
                var zaydie = "";
              }
            }
            var romanda = /<\S[^>]*>/g;
            (zaydie = zaydie.replace(romanda, "")),
              zaydie.length > 120 &&
                (zaydie = "" + zaydie.substring(0, 100) + "...");
            var sayani = lelar.feed.entry[keyo].title.$t;
            var s = lelar.feed.entry[keyo].category[0].term;
            var chealsie = lelar.feed.entry[keyo].author[0].name.$t;
            var lebrea = lelar.feed.entry[keyo].author[0].gd$image.src;
            var emelee = lelar.feed.entry[keyo].published.$t,
              demarkas = emelee.substring(0, 4),
              ameeria = emelee.substring(5, 7),
              marista = emelee.substring(8, 10),
              iassac =
                month_format[parseInt(ameeria, 10)] +
                " " +
                marista +
                ", " +
                demarkas;
            var lenoria = lelar.feed.entry[keyo].content.$t;
            var missouri = $("<div>").html(lenoria);
            if (lenoria.indexOf("//www.youtube.com/embed/") > -1) {
              var cathye = lelar.feed.entry[keyo].media$thumbnail.url;
              var sherokee = cathye;
            } else {
              if (lenoria.indexOf("<img") > -1) {
                var abrigail = missouri.find("img:first").attr("src");
                var sherokee = abrigail;
              } else {
                var sherokee = no_image;
              }
            }
            if (keyo == 0) {
              willamena +=
                '<div class="ty-first"><div class="ty-feat-image"><div class="tyard-thumb"><a class="ty-img" href="' +
                u +
                '" style="background:url(' +
                sherokee +
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
                sayani +
                '</a></h3><span class="yard-auth-ty">' +
                chealsie +
                '</span><span class="ty-time">' +
                iassac +
                '</span><p class="recent-summary">' +
                zaydie +
                "</p></div></div></div>";
            } else {
              willamena +=
                '<div class="ty-rest-wrap"><div class="ty-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
                u +
                '" style="background:url(' +
                sherokee +
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
                sayani +
                '</a></h3><span class="yard-auth-ty">' +
                chealsie +
                '</span><span class="ty-time">' +
                iassac +
                '</span><p class="recent-summary">' +
                zaydie +
                '</p></div><div class="clear"/></div></div>';
            }
          }
          willamena += "</div>";
          $(".featured .HTML .widget-content").each(function () {
            var rafer = $(this).parent().attr("id");
            if (rafer == tyard) {
              $(this).html(willamena);
              $(this).parent().addClass("tyard");
              $(this).parent().addClass("templatesyard");
              $(".featured").addClass("comload").removeClass("preload");
              $(".featured h2").remove();
              $(this)
                .find(".yard-img,.ty-img")
                .each(function () {
                  $(this)
                    .attr("style", function (sharella, glendola) {
                      return glendola.replace("/default.jpg", "/mqdefault.jpg");
                    })
                    .attr("style", function (avneet, summerrose) {
                      return summerrose.replace("s72-c", "s1600");
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
$(".featured-box .HTML .widget-content").each(function () {
  var jerrylene = $(this).prev("h2").text(),
    jenettie = $(this).find("span").attr("data-label"),
    jemelia = $(this).find("span").attr("data-no"),
    hifza = $(this).parent().attr("id"),
    reyana = $(this).find("span").attr("data-type");
  if (reyana != undefined && reyana.match("tysum")) {
    $.ajax({
      url:
        "/feeds/posts/default/-/" +
        jenettie +
        "?alt=json-in-script&max-results=" +
        jemelia,
      type: "get",
      dataType: "jsonp",
      success: function (dearron) {
        var u = "";
        var shamoria = '<div class="ty-feat">';
        for (
          var kathyanne = 0;
          kathyanne < dearron.feed.entry.length;
          kathyanne++
        ) {
          for (
            var cainaan = 0;
            cainaan < dearron.feed.entry[kathyanne].link.length;
            cainaan++
          ) {
            if (
              dearron.feed.entry[kathyanne].link[cainaan].rel == "alternate"
            ) {
              u = dearron.feed.entry[kathyanne].link[cainaan].href;
              break;
            }
          }
          var irani;
          for (
            var margeaux = 0;
            margeaux < dearron.feed.entry[kathyanne].link.length;
            margeaux++
          ) {
            if (
              dearron.feed.entry[kathyanne].link[margeaux].rel === "replies" &&
              dearron.feed.entry[kathyanne].link[margeaux].type === "text/html"
            ) {
              irani = dearron.feed.entry[kathyanne].link[margeaux].title;
              break;
            }
          }
          irani = parseInt(irani, 10);
          if ("content" in dearron.feed.entry[kathyanne]) {
            var adelaina = dearron.feed.entry[kathyanne].content.$t;
          } else {
            if ("summary" in b_rc) {
              var adelaina = dearron.feed.entry[kathyanne].summary.$t;
            } else {
              var adelaina = "";
            }
          }
          var oliviaann = /<\S[^>]*>/g;
          (adelaina = adelaina.replace(oliviaann, "")),
            adelaina.length > 320 &&
              (adelaina = "" + adelaina.substring(0, 300) + "...");
          var fynnley = dearron.feed.entry[kathyanne].title.$t;
          var s = dearron.feed.entry[kathyanne].category[0].term;
          var kentrell = dearron.feed.entry[kathyanne].author[0].name.$t;
          var hillarie = dearron.feed.entry[kathyanne].author[0].gd$image.src;
          var farhana = dearron.feed.entry[kathyanne].published.$t,
            umeko = farhana.substring(0, 4),
            kylieanna = farhana.substring(5, 7),
            jonathn = farhana.substring(8, 10),
            omariana =
              month_format[parseInt(kylieanna, 10)] +
              " " +
              jonathn +
              ", " +
              umeko;
          var axen = dearron.feed.entry[kathyanne].content.$t;
          var dinasty = $("<div>").html(axen);
          if (axen.indexOf("//www.youtube.com/embed/") > -1) {
            var annah = dearron.feed.entry[kathyanne].media$thumbnail.url;
            var margeaux = annah;
          } else {
            if (axen.indexOf("<img") > -1) {
              var andelin = dinasty.find("img:first").attr("src");
              var margeaux = andelin;
            } else {
              var margeaux = no_image;
            }
          }
          if (kathyanne == 0) {
            shamoria +=
              '<div class="tybox-rest rest-big"><div class="tyard-thumb"><a class="yard-img" href="' +
              u +
              '" style="background:url(' +
              margeaux +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              fynnley +
              '</a></h3><span class="yard-auth-ty">' +
              kentrell +
              '</span><span class="tybox-time">' +
              omariana +
              '</span><p class="recent-summary">' +
              adelaina +
              '</p></div><div class="share-read"><div class="share-art"><a class="fac-art" href="http://www.facebook.com/sharer.php?u=' +
              u +
              "&amp;title=" +
              fynnley +
              '" onclick="window.open(this.href, &apos;windowName&apos;, &apos;width=600, height=400, left=24, top=24, scrollbars, resizable&apos;); return false;" rel="nofollow" target="_blank"><i class="fa fa-facebook"></i></a><a class="twi-art" href="http://twitter.com/share?url=' +
              u +
              "&amp;title=" +
              fynnley +
              '" onclick="window.open(this.href, &apos;windowName&apos;, &apos;width=600, height=400, left=24, top=24, scrollbars, resizable&apos;); return false;" rel="nofollow" target="_blank"><i class="fa fa-twitter"></i></a><a class="goo-art" href="http://plus.google.com/share?url=' +
              u +
              "&amp;title=" +
              fynnley +
              '" onclick="window.open(this.href, &apos;windowName&apos;, &apos;width=600, height=400, left=24, top=24, scrollbars, resizable&apos;); return false;" rel="nofollow" target="_blank"><i class="fa fa-google-plus"></i></a><a class="pin-art" href="http://pinterest.com/pin/create/button/?url=' +
              u +
              "&amp;media=" +
              margeaux +
              "&amp;description=" +
              fynnley +
              ' " onclick="window.open(this.href, &apos;windowName&apos;, &apos;width=600, height=400, left=24, top=24, scrollbars, resizable&apos;); return false;" rel="nofollow" target="_blank"><i class="fa fa-pinterest"></i></a><a class="lin-art" href="http://www.linkedin.com/shareArticle?url=' +
              u +
              "&amp;title=" +
              fynnley +
              '" onclick="window.open(this.href, &apos;windowName&apos;, &apos;width=600, height=400, left=24, top=24, scrollbars, resizable&apos;); return false;" rel="nofollow" target="_blank"><i class="fa fa-linkedin-square"></i></a></div><div class="ty-sum-read-more"><a href="' +
              u +
              '" class="url" target ="_top">Continue Reading</a></div></div></div>';
          } else {
            shamoria +=
              '<div class="tybox-rest"><div class="tyard-thumb"><a class="yard-img" href="' +
              u +
              '" style="background:url(' +
              margeaux +
              ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a></div><div class="yard-tent-ty"><h3 class="tyard-title"><a href="' +
              u +
              '">' +
              fynnley +
              '</a></h3><span class="yard-auth-ty">' +
              kentrell +
              '</span><span class="tybox-time">' +
              omariana +
              "</span></div></div>";
          }
        }
        shamoria += "</div>";
        $(".featured-box .HTML .widget-content").each(function () {
          var henoc = $(this).parent().attr("id");
          if (henoc == hifza) {
            $(this).html(shamoria);
            $(this).parent().addClass("tysum");
            $(this).parent().addClass("templatesyard");
            $(this)
              .prev("h2")
              .html(
                '<a href="/search/label/' +
                  jenettie +
                  "?&amp;max-result=" +
                  perPage +
                  '">' +
                  jenettie +
                  "</a>"
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
                  .attr("style", function (abdula, luada) {
                    return luada.replace("/default.jpg", "/mqdefault.jpg");
                  })
                  .attr("style", function (riyonna, amiel) {
                    return amiel.replace("s72-c", "s1600");
                  });
              });
          }
        });
      },
    });
  }
});
$(".social-counter").each(function () {
  var cashtyn = $(this);
  var deyler = $(this).find(".item-social");
  if (0 === deyler.length) {
    cashtyn.remove();
  }
  $(this).find(".widget").removeClass("LinkList");
  $(".social-counter .item-social.facebook").find(".item-text").text("Likes");
  $(".social-counter .item-social.rss,.social-counter .item-social.youtube")
    .find(".item-text")
    .text("Subscribes");
  var shanteal = "count=";
  var ruberto = ";";
  $(".social-counter *").replaceText(shanteal, '<span class="item-count">');
  $(".social-counter *").replaceText(ruberto, "</span>");
  $(".item-social").each(function () {
    var aylisha = $(this).find(".hide-count");
    var jedadiah = $(this).find(".item-count");
    $(aylisha).before($(jedadiah));
    $(aylisha).remove();
  });
});
$(".post-home-image .post-thumb a").attr("style", function (attia, mariby) {
  if (mariby.match("hqdefault.jpg")) {
    return mariby.replace("/hqdefault.jpg", "/mqdefault.jpg");
  } else {
    if (mariby.match("default.jpg")) {
      return mariby.replace("/default.jpg", "/mqdefault.jpg");
    } else {
      if (mariby.match("s72-c")) {
        return mariby.replace("/s72-c", "/s1600");
      } else {
        if (mariby.match("w72-h72-p-nu")) {
          return mariby.replace("/w72-h72-p-nu", "/s1600");
        } else {
          return mariby.replace(
            "http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png",
            no_image
          );
        }
      }
    }
  }
});
$(document).ready(function () {
  var dwane = "<span style='color:$maincolor;'>NEWS</span>LETTER";
  var phoenyx =
    "Make sure you don't miss interesting happenings by joining our newsletter program";
  $(".email-folower h2").remove();
  var audriaunna = $(".FollowByEmail .widget-content");
  if (audriaunna.length) {
    audriaunna.prepend(
      "<div class='email-letter-text'><h3 class='subhead'>" +
        dwane +
        "</h3><p class='subtext'>" +
        phoenyx +
        "</p></div>"
    );
  }
});
$(document).ready(function () {
  var mayan = $("#sidetabs #tabside1 .widget h2").text();
  $(".menu-tab .item-1 a").text(mayan);
  var u = $("#sidetabs #tabside2 .widget h2").text();
  $(".menu-tab .item-2 a").text(u);
  var laquata = $("#sidetabs #tabside3 .widget h2").text();
  $(".menu-tab .item-3 a").text(laquata);
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
$(".PopularPosts ul li img").attr("src", function (romalis, miabella) {
  if (miabella.match("hqdefault.jpg")) {
    return miabella.replace("/hqdefault.jpg", "/mqdefault.jpg");
  } else {
    if (miabella.match("default.jpg")) {
      return miabella.replace("/default.jpg", "/mqdefault.jpg");
    } else {
      if (miabella.match("s72-c")) {
        return miabella.replace("/s72-c", "/s1600");
      } else {
        if (miabella.match("w72-h72-p-nu")) {
          return miabella.replace("/w72-h72-p-nu", "/s1600");
        } else {
          return miabella.replace(
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
});
$(".ty-trigger .HTML .widget-content span.latestcomments").each(function () {
  var dorla = $(this).attr("data-no");
  $.ajax({
    url: "/feeds/comments/default?alt=json-in-script&max-results=" + dorla,
    type: "get",
    dataType: "jsonp",
    success: function (rinyah) {
      var u = "";
      var rayshun = '<div class="tyard-komet">';
      for (var cheronda = 0; cheronda < rinyah.feed.entry.length; cheronda++) {
        if (cheronda == rinyah.feed.entry.length) {
          break;
        }
        for (
          var shoshawna = 0;
          shoshawna < rinyah.feed.entry[cheronda].link.length;
          shoshawna++
        ) {
          if (rinyah.feed.entry[cheronda].link[shoshawna].rel == "alternate") {
            u = rinyah.feed.entry[cheronda].link[shoshawna].href;
            break;
          }
        }
        if ("content" in rinyah.feed.entry[cheronda]) {
          var gilchrist = rinyah.feed.entry[cheronda].content.$t;
        } else {
          if ("summary" in b_rc) {
            var gilchrist = rinyah.feed.entry[cheronda].summary.$t;
          } else {
            var gilchrist = "";
          }
        }
        var keadon = /<\S[^>]*>/g;
        gilchrist = gilchrist.replace(keadon, "");
        if (gilchrist.length > 70) {
          gilchrist = "" + gilchrist.substring(0, 50) + "...";
        }
        var zemora = rinyah.feed.entry[cheronda].author[0].name.$t;
        var kashmere = rinyah.feed.entry[cheronda].author[0].gd$image.src;
        if (kashmere.match("http://img1.blogblog.com/img/blank.gif")) {
          var lorice = "http://img1.blogblog.com/img/anon36.png";
        } else {
          if (kashmere.match("http://img2.blogblog.com/img/b16-rounded.gif")) {
            var lorice = "http://img1.blogblog.com/img/anon36.png";
          } else {
            var lorice = kashmere;
          }
        }
        rayshun +=
          '<div class="ty-komet"><div class="ty-komet-tar"><img class="yardimg-komet" src="' +
          lorice +
          '"/></div><a href="' +
          u +
          '">' +
          zemora +
          '</a><span>"' +
          gilchrist +
          '"</span></div>';
      }
      rayshun += '</div><div class="clear"/>';
      $(".ty-trigger .HTML .widget-content span.latestcomments").each(
        function () {
          var kanitha = $(this).attr("data-no");
          if (kanitha == dorla) {
            $(this).parent().html(rayshun);
          }
        }
      );
    },
  });
});
$(".ty-trigger .HTML .widget-content span.latestposts").each(function () {
  var jawad = $(this).attr("data-no");
  $.ajax({
    url: "/feeds/posts/default?alt=json-in-script&max-results=" + jawad,
    type: "get",
    dataType: "jsonp",
    success: function (abryanna) {
      var u = "";
      var atoya = '<div class="ty-bonus">';
      for (var dupre = 0; dupre < abryanna.feed.entry.length; dupre++) {
        for (
          var kadidra = 0;
          kadidra < abryanna.feed.entry[dupre].link.length;
          kadidra++
        ) {
          if (abryanna.feed.entry[dupre].link[kadidra].rel == "alternate") {
            u = abryanna.feed.entry[dupre].link[kadidra].href;
            break;
          }
        }
        var rayza = abryanna.feed.entry[dupre].title.$t;
        var s = abryanna.feed.entry[dupre].category[0].term;
        var faigy = abryanna.feed.entry[dupre].author[0].name.$t;
        var makinsey = abryanna.feed.entry[dupre].published.$t,
          dabriyon = makinsey.substring(0, 4),
          tanitra = makinsey.substring(5, 7),
          colline = makinsey.substring(8, 10),
          tamaron =
            month_format[parseInt(tanitra, 10)] +
            " " +
            colline +
            ", " +
            dabriyon;
        var lukaz = abryanna.feed.entry[dupre].content.$t;
        var amontay = $("<div>").html(lukaz);
        if (lukaz.indexOf("//www.youtube.com/embed/") > -1) {
          var eddy = abryanna.feed.entry[dupre].media$thumbnail.url.replace(
            "/default.jpg",
            "/mqdefault.jpg"
          );
          var karlyle = eddy;
        } else {
          if (lukaz.indexOf("<img") > -1) {
            var zackaria = amontay
              .find("img:first")
              .attr("src")
              .replace("s72-c", "s1600");
            var karlyle = zackaria;
          } else {
            var karlyle = no_image;
          }
        }
        atoya +=
          '<div class="ty-wow"><a class="ty-thumb-bonos" href="' +
          u +
          '" style="background:url(' +
          karlyle +
          ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' +
          u +
          '">' +
          rayza +
          '</a></h3><span class="yard-auth-ty">' +
          faigy +
          '</span><span class="ty-time">' +
          tamaron +
          "</span></div></div>";
      }
      atoya += "</div>";
      $(".ty-trigger .HTML .widget-content span.latestposts").each(function () {
        var lyndzie = $(this).attr("data-no");
        if (lyndzie == jawad) {
          $(this).parent().html(atoya);
        }
      });
    },
  });
});
$(".ty-trigger .HTML .widget-content span.tagpost").each(function () {
  var pharyn = $(this).attr("data-label"),
    jancy = $(this).attr("data-no");
  $.ajax({
    url:
      "/feeds/posts/default/-/" +
      pharyn +
      "?alt=json-in-script&max-results=" +
      jancy,
    type: "get",
    dataType: "jsonp",
    success: function (jesusmanuel) {
      var u = "";
      var kelie = '<div class="ty-bonus">';
      for (var loen = 0; loen < jesusmanuel.feed.entry.length; loen++) {
        for (
          var kashvi = 0;
          kashvi < jesusmanuel.feed.entry[loen].link.length;
          kashvi++
        ) {
          if (jesusmanuel.feed.entry[loen].link[kashvi].rel == "alternate") {
            u = jesusmanuel.feed.entry[loen].link[kashvi].href;
            break;
          }
        }
        var shaniece = jesusmanuel.feed.entry[loen].title.$t;
        var s = jesusmanuel.feed.entry[loen].category[0].term;
        var latrae = jesusmanuel.feed.entry[loen].author[0].name.$t;
        var madrid = jesusmanuel.feed.entry[loen].published.$t,
          irja = madrid.substring(0, 4),
          conchetta = madrid.substring(5, 7),
          areather = madrid.substring(8, 10),
          koli =
            month_format[parseInt(conchetta, 10)] +
            " " +
            areather +
            ", " +
            irja;
        var jevaeh = jesusmanuel.feed.entry[loen].content.$t;
        var sherquita = $("<div>").html(jevaeh);
        if (jevaeh.indexOf("//www.youtube.com/embed/") > -1) {
          var shaneshia = jesusmanuel.feed.entry[
            loen
          ].media$thumbnail.url.replace("/default.jpg", "/mqdefault.jpg");
          var aeryk = shaneshia;
        } else {
          if (jevaeh.indexOf("<img") > -1) {
            var tapasya = sherquita
              .find("img:first")
              .attr("src")
              .replace("s72-c", "s1600");
            var aeryk = tapasya;
          } else {
            var aeryk = no_image;
          }
        }
        kelie +=
          '<div class="ty-wow"><a class="ty-thumb-bonos" href="' +
          u +
          '" style="background:url(' +
          aeryk +
          ') no-repeat center center;background-size: cover"><span class="tyimg-lay"/></a><div class="ty-bonus-con"><h3 class="ty-bonos-entry"><a href="' +
          u +
          '">' +
          shaniece +
          '</a></h3><span class="yard-auth-ty">' +
          latrae +
          '</span><span class="ty-time">' +
          koli +
          "</span></div></div>";
      }
      kelie += "</div>";
      $(".ty-trigger .HTML .widget-content span.tagpost").each(function () {
        var shulem = $(this).attr("data-label");
        if (shulem == pharyn) {
          $(this).parent().html(kelie);
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
    var aunesty = $(this);
    var damerius = aunesty.attr("src");
    aunesty.attr(
      "title",
      damerius.substring(
        damerius.lastIndexOf("/") + 1,
        damerius.lastIndexOf(".")
      )
    );
    aunesty.attr(
      "alt",
      damerius.substring(
        damerius.lastIndexOf("/") + 1,
        damerius.lastIndexOf(".")
      )
    );
  });
});
$(document).ready(function (tenina) {
  var shaneal = tenina("#post-pager .blog-pager-newer-link");
  var abb = tenina("#post-pager .blog-pager-older-link");
  tenina.get(
    shaneal.attr("href"),
    function (karolynn) {
      shaneal.html(
        "<b>" +
          POSTPAGER_NEWER +
          "</b><span>" +
          tenina(karolynn).find(".post h1.post-title").text() +
          "</span>"
      );
    },
    "html"
  );
  tenina.get(
    abb.attr("href"),
    function (treacy) {
      abb.html(
        "<b>" +
          POSTPAGER_OLDER +
          "</b><span>" +
          tenina(treacy).find(".post h1.post-title").text() +
          "</span>"
      );
    },
    "html"
  );
});
$(function () {
  $(".post-body img").parent("a").css("margin", "0 auto!important");
  var rhileigh = "//img1.blogblog.com/img/blank.gif";
  var tyvell =
    "https://3.bp.blogspot.com/-UNjtW9_9fcs/VrvrBJi_8CI/AAAAAAAABP4/jjFMkoCi6Ig/s1600/blank-user-avatar.png";
  $('img[src="' + rhileigh + '"]').attr("src", tyvell);
});
$(document).ready(function () {
  function salle(jatavious, jetaime, dante) {
    $.ajax({
      url:
        "/feeds/posts/default/-/" +
        jetaime +
        "?alt=json-in-script&max-results=" +
        dante,
      type: "get",
      dataType: "jsonp",
      success: function (maleck) {
        for (
          var u = "",
            ellowynn =
              '<div class="tyheading-head post-ty-heading"><h2><a href="/search/label/' +
              jetaime +
              "?&amp;max-result=" +
              perPage +
              '">Related Post</a></h2><a class="tymore" href="/search/label/' +
              jetaime +
              "?&amp;max-result=" +
              perPage +
              '">' +
              more_text +
              '</a></div><div class="related">',
            avalia = 0;
          avalia < maleck.feed.entry.length;
          avalia++
        ) {
          for (
            var taurasi = 0;
            taurasi < maleck.feed.entry[avalia].link.length;
            taurasi++
          ) {
            if ("alternate" == maleck.feed.entry[avalia].link[taurasi].rel) {
              u = maleck.feed.entry[avalia].link[taurasi].href;
              break;
            }
          }
          var richardean = maleck.feed.entry[avalia].title.$t;
          var stennis = maleck.feed.entry[avalia].author[0].name.$t;
          var denique = maleck.feed.entry[avalia].category[0].term;
          var bettylu = maleck.feed.entry[avalia].published.$t,
            ethelean = bettylu.substring(0, 4),
            tyrelle = bettylu.substring(5, 7),
            chervonne = bettylu.substring(8, 10),
            dairra =
              month_format[parseInt(tyrelle, 10)] +
              " " +
              chervonne +
              ", " +
              ethelean;
          var koemi = maleck.feed.entry[avalia].content.$t;
          var cambre = $("<div>").html(koemi);
          if (
            koemi.indexOf("http://www.youtube.com/embed/") > -1 ||
            koemi.indexOf("https://www.youtube.com/embed/") > -1
          ) {
            var cleda = maleck.feed.entry[avalia].media$thumbnail.url,
              kricket = cleda.replace("/default.jpg", "/mqdefault.jpg"),
              sanova = kricket;
          } else {
            if (koemi.indexOf("<img") > -1) {
              var s = cambre.find("img:first").attr("src"),
                gezelle = s.replace("s72-c", "s600");
              var sanova = gezelle;
            } else {
              var sanova =
                "http://1.bp.blogspot.com/-eAeO-DYJDws/Vkqtj4HFBFI/AAAAAAAAB0o/Q5OLsyONXM0/s1600-r/nth.png";
            }
          }
          ellowynn +=
            '<li><div class="related-thumb"><div class="yard-label"><a class="icon ' +
            denique +
            '" href="/search/label/' +
            denique +
            "?&amp;max-result=" +
            perPage +
            '">' +
            denique +
            '</a></div><a class="related-img" href="' +
            u +
            '" style="background:url(' +
            sanova +
            ') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="' +
            u +
            '">' +
            richardean +
            '</a></h3><span class="yard-auth-ty">' +
            stennis +
            '</span><span class="ty-time">' +
            dairra +
            "</span></li>";
        }
        (ellowynn += "</div>"), jatavious.html(ellowynn);
      },
    });
  }
  $("#related-posts").each(function () {
    var dalevon = $(this),
      marquala = dalevon.text(),
      jmauri = 3;
    salle(dalevon, marquala, jmauri);
  });
});
$(
  ".Label a,.post-labels a,.post-ty-heading a,.breadcrumbs span a,.label-head a"
).attr("href", function (eimly, latawn) {
  return latawn.replace(latawn, latawn + "?&max-results=" + perPage);
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
